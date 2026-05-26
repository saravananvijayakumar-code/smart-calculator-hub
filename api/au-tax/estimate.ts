import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleCors, json, error, methodNotAllowed } from "../_lib/helpers.js";
import { getTaxYearData, calcIncomeTax, calcLITO, calcMedicareLevy, calcMLS, calcHELP, calcSG, getMarginalTaxRate, convertGrossToPeriod } from "./engine.js";
import type { PayCalculatorRequest, PayCalculatorResponse, TraceReference } from "./types.js";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (handleCors(req, res)) return;
  if (req.method !== "POST") return methodNotAllowed(res, ["POST"]);

  const body: PayCalculatorRequest = req.body;
  if (!body || !body.year || !body.grossAnnual) {
    return error(res, "Missing required fields: year, grossAnnual");
  }

  try {
    const { year, grossAnnual, period, residency, claimTaxFreeThreshold, hasHelp, privateCover, dependants = 0, spouseIncome = 0, salarySacrifice = 0, includeSuper, isSenior = false } = body;
    const data = getTaxYearData(year);

    let ordinaryTimeEarnings = grossAnnual;
    let superannuation = 0;
    if (includeSuper) {
      ordinaryTimeEarnings = grossAnnual / (1 + data.superGuaranteeRate);
      superannuation = ordinaryTimeEarnings * data.superGuaranteeRate;
    } else {
      superannuation = calcSG(year, ordinaryTimeEarnings);
    }

    const taxableIncome = ordinaryTimeEarnings - salarySacrifice;
    let grossIncomeTax = 0, litoApplied = 0, medicareLevy = 0, medicareLevySurcharge = 0, helpRepayment = 0;

    if (residency === "resident") {
      grossIncomeTax = calcIncomeTax(year, taxableIncome, residency);
      litoApplied = calcLITO(year, taxableIncome);
      const isFamily = dependants > 0 || spouseIncome > 0;
      medicareLevy = calcMedicareLevy(year, taxableIncome, { isFamily, dependants, spouseIncome, isSenior });
      medicareLevySurcharge = calcMLS(year, taxableIncome + salarySacrifice, privateCover, dependants);
    } else {
      grossIncomeTax = calcIncomeTax(year, taxableIncome, residency);
    }

    if (hasHelp) helpRepayment = calcHELP(year, taxableIncome + salarySacrifice);

    const netIncomeTax = Math.max(0, grossIncomeTax - litoApplied);
    const totalTax = netIncomeTax + medicareLevy + medicareLevySurcharge + helpRepayment;
    const netAnnual = taxableIncome - totalTax;

    const references: TraceReference[] = [
      { field: "incomeTax", source: "Treasury Laws Amendment (Cost of Living Tax Cuts) Act 2024", url: "https://www.legislation.gov.au/C2024A00003/latest/text" },
      { field: "lito", source: "ATO Low Income Tax Offset", url: "https://www.ato.gov.au/tax-rates-and-codes/tax-offset-rates" },
      { field: "medicareLevy", source: "ATO Medicare Levy", url: "https://www.ato.gov.au/individuals-and-families/medicare-and-private-health-insurance/medicare-levy" },
      { field: "superannuation", source: "ATO Super Guarantee", url: "https://www.ato.gov.au/businesses-and-organisations/super-for-employers/paying-super-contributions/super-guarantee-contribution-rates" },
    ];

    const result: PayCalculatorResponse = {
      grossAnnual: taxableIncome, grossPeriod: convertGrossToPeriod(taxableIncome, period),
      incomeTax: netIncomeTax, incomeTaxPeriod: convertGrossToPeriod(netIncomeTax, period),
      medicareLevy, medicareLevyPeriod: convertGrossToPeriod(medicareLevy, period),
      medicareLevySurcharge, medicareLevySurchargePeriod: convertGrossToPeriod(medicareLevySurcharge, period),
      helpRepayment, helpRepaymentPeriod: convertGrossToPeriod(helpRepayment, period),
      lito: litoApplied, totalTax, totalTaxPeriod: convertGrossToPeriod(totalTax, period),
      superannuation, superannuationPeriod: convertGrossToPeriod(superannuation, period),
      netAnnual, netPeriod: convertGrossToPeriod(netAnnual, period),
      effectiveTaxRate: taxableIncome > 0 ? (totalTax / taxableIncome) * 100 : 0,
      marginalTaxRate: getMarginalTaxRate(year, taxableIncome, residency) * 100,
      trace: { taxableIncome, grossIncomeTax, litoApplied, netIncomeTax, medicareLevy, medicareLevySurcharge, helpRepayment, totalTax, superannuation, takeHome: netAnnual, references },
    };

    json(res, result);
  } catch (err: any) {
    error(res, err.message || "Calculation failed", 400);
  }
}
