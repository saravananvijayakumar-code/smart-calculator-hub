import type { TaxYearData, ResidencyStatus, PayPeriod, PaygScaleName, PaygScale } from "./types.js";
import data202425 from "./data/2024-25.json";
import data202526 from "./data/2025-26.json";

const taxYearDataMap: Record<string, TaxYearData> = {
  "2024-25": data202425 as unknown as TaxYearData,
  "2025-26": data202526 as unknown as TaxYearData,
};

export function getTaxYearData(year: string): TaxYearData {
  const data = taxYearDataMap[year];
  if (!data) throw new Error(`Tax year ${year} not supported`);
  return data;
}

export function calcIncomeTax(year: string, taxableIncome: number, residency: ResidencyStatus): number {
  switch (residency) {
    case "non-resident": return calcNonResidentTax(year, taxableIncome);
    case "whm": return calcWHMTax(year, taxableIncome);
    default: return calcResidentIncomeTax(year, taxableIncome);
  }
}

function calcResidentIncomeTax(year: string, taxableIncome: number): number {
  const brackets = getTaxYearData(year).residentTaxBrackets;
  for (const b of brackets) {
    if (taxableIncome >= b.min && (b.max === null || taxableIncome <= b.max)) {
      return b.baseAmount + (taxableIncome - b.min) * b.rate;
    }
  }
  return 0;
}

function calcNonResidentTax(year: string, taxableIncome: number): number {
  const brackets = getTaxYearData(year).nonResidentTaxBrackets;
  for (const b of brackets) {
    if (taxableIncome >= b.min && (b.max === null || taxableIncome <= b.max)) {
      return b.baseAmount + (taxableIncome - b.min) * b.rate;
    }
  }
  return 0;
}

function calcWHMTax(year: string, taxableIncome: number): number {
  const brackets = getTaxYearData(year).whmTaxBrackets;
  for (const b of brackets) {
    if (taxableIncome >= b.min && (b.max === null || taxableIncome <= b.max)) {
      return b.baseAmount + (taxableIncome - b.min) * b.rate;
    }
  }
  return 0;
}

export function calcLITO(year: string, taxableIncome: number): number {
  const lito = getTaxYearData(year).lito;
  if (taxableIncome <= lito.shadeOutStart) return lito.maxOffset;
  if (taxableIncome >= lito.shadeOutEnd) return 0;
  return Math.max(0, lito.maxOffset - (taxableIncome - lito.shadeOutStart) * lito.shadeOutRate);
}

export function calcMedicareLevy(year: string, taxableIncome: number, params: { isFamily?: boolean; dependants?: number; spouseIncome?: number; isSenior?: boolean } = {}): number {
  const ml = getTaxYearData(year).medicareLevy;
  const { isFamily = false, dependants = 0, spouseIncome = 0, isSenior = false } = params;

  let threshold: number, shadeInStart: number;
  if (isSenior) {
    if (isFamily) { threshold = ml.seniorsFamilyThreshold + dependants * ml.seniorsDependantAdditional; shadeInStart = ml.seniorsFamilyShadeInStart + dependants * ml.seniorsDependantAdditional; }
    else { threshold = ml.seniorsSingleThreshold; shadeInStart = ml.seniorsSingleShadeInStart; }
  } else {
    if (isFamily) { threshold = ml.familyThreshold + dependants * ml.dependantAdditional; shadeInStart = ml.familyShadeInStart + dependants * ml.dependantAdditional; }
    else { threshold = ml.singleThreshold; shadeInStart = ml.singleShadeInStart; }
  }

  const familyIncome = isFamily ? taxableIncome + spouseIncome : taxableIncome;
  if (familyIncome <= shadeInStart) return 0;
  if (familyIncome >= threshold) return taxableIncome * ml.rate;

  const shadeInRate = (familyIncome - shadeInStart) / (threshold - shadeInStart);
  return Math.min(taxableIncome * ml.rate, taxableIncome * ml.rate * shadeInRate);
}

export function calcMLS(year: string, mlsIncome: number, hasPrivateCover: boolean, dependants: number = 0): number {
  if (hasPrivateCover) return 0;
  const mls = getTaxYearData(year).medicareLevySurcharge;
  const isFamily = dependants > 0;
  const adj = dependants * mls.dependantIncrement;

  for (const tier of mls.tiers) {
    const min = isFamily ? tier.familyMin + adj : tier.singleMin;
    const max = isFamily ? (tier.familyMax === null ? null : tier.familyMax + adj) : tier.singleMax;
    if (mlsIncome >= min && (max === null || mlsIncome <= max)) return mlsIncome * tier.rate;
  }
  return 0;
}

export function calcHELP(year: string, repaymentIncome: number): number {
  for (const t of getTaxYearData(year).helpRepaymentThresholds) {
    if (repaymentIncome >= t.min && (t.max === null || repaymentIncome <= t.max)) return repaymentIncome * t.rate;
  }
  return 0;
}

export function calcSG(year: string, ordinaryTimeEarnings: number): number {
  return ordinaryTimeEarnings * getTaxYearData(year).superGuaranteeRate;
}

export function getMarginalTaxRate(year: string, taxableIncome: number, residency: ResidencyStatus): number {
  const data = getTaxYearData(year);
  const brackets = residency === "non-resident" ? data.nonResidentTaxBrackets : residency === "whm" ? data.whmTaxBrackets : data.residentTaxBrackets;
  for (const b of brackets) {
    if (taxableIncome >= b.min && (b.max === null || taxableIncome <= b.max)) return b.rate;
  }
  return 0;
}

export function calcPAYGWithholding(year: string, grossEarnings: number, period: PayPeriod, claimTaxFreeThreshold: boolean, hasHelp: boolean): number {
  if (period === "annual") return 0;
  const data = getTaxYearData(year);
  const scaleName: PaygScaleName = claimTaxFreeThreshold ? "scale2" : "scale6";
  const scaleData: PaygScale = data.payg[period][scaleName];

  let withheld = 0;
  for (const coef of scaleData.coefficients) {
    if (grossEarnings >= coef.min && (coef.max === null || grossEarnings <= coef.max)) {
      withheld = coef.a * grossEarnings - coef.b;
      break;
    }
  }
  if (hasHelp && grossEarnings > 0) withheld += grossEarnings * scaleData.helpCoefficient;
  return Math.max(0, Math.round(withheld));
}

export function convertGrossToPeriod(grossAnnual: number, period: PayPeriod): number {
  switch (period) { case "weekly": return grossAnnual / 52; case "fortnightly": return grossAnnual / 26; case "monthly": return grossAnnual / 12; case "annual": return grossAnnual; }
}

export function convertPeriodToAnnual(grossPeriod: number, period: PayPeriod): number {
  switch (period) { case "weekly": return grossPeriod * 52; case "fortnightly": return grossPeriod * 26; case "monthly": return grossPeriod * 12; case "annual": return grossPeriod; }
}
