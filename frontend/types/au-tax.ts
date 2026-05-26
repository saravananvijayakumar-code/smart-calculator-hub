// Types for AU Tax calculator
export type ResidencyStatus = "resident" | "non-resident" | "whm";
export type PayPeriod = "weekly" | "fortnightly" | "monthly" | "annual";

export interface PayCalculatorRequest {
  year: string;
  grossAnnual: number;
  period: PayPeriod;
  residency: ResidencyStatus;
  claimTaxFreeThreshold: boolean;
  hasHelp: boolean;
  privateCover: boolean;
  dependants: number;
  spouseIncome?: number;
  salarySacrifice?: number;
  includeSuper: boolean;
  isSenior?: boolean;
}

export interface TraceReference { field: string; source: string; url: string; }

export interface CalculationTrace {
  taxableIncome: number;
  grossIncomeTax: number;
  litoApplied: number;
  netIncomeTax: number;
  medicareLevy: number;
  medicareLevySurcharge: number;
  helpRepayment: number;
  totalTax: number;
  superannuation: number;
  takeHome: number;
  references: TraceReference[];
}

export interface PayCalculatorResponse {
  grossAnnual: number;
  grossPeriod: number;
  incomeTax: number;
  incomeTaxPeriod: number;
  medicareLevy: number;
  medicareLevyPeriod: number;
  medicareLevySurcharge: number;
  medicareLevySurchargePeriod: number;
  helpRepayment: number;
  helpRepaymentPeriod: number;
  lito: number;
  totalTax: number;
  totalTaxPeriod: number;
  superannuation: number;
  superannuationPeriod: number;
  netAnnual: number;
  netPeriod: number;
  effectiveTaxRate: number;
  marginalTaxRate: number;
  trace: CalculationTrace;
}

export interface BonusWithholdingRequest {
  year: string;
  regularGross: number;
  payPeriod: PayPeriod;
  bonusAmount: number;
  residency: ResidencyStatus;
  claimTaxFreeThreshold: boolean;
  hasHelp: boolean;
  method?: "A" | "B";
}

export interface BonusWithholdingResponse {
  bonusAmount: number;
  withholdingAmount: number;
  netBonus: number;
  withholdingRate: number;
  method: "A" | "B";
  explanation: string;
}

export interface UnusedLeaveWithholdingResponse {
  leaveAmount: number;
  withholdingAmount: number;
  netLeave: number;
  withholdingRate: number;
  explanation: string;
}

export interface StudentLoanProjectionRequest {
  year: string;
  currentBalance: number;
  annualIncome: number;
  incomeGrowthRate: number;
  indexationRate: number;
  voluntaryRepayment?: number;
}

export interface YearProjection {
  year: number;
  startingBalance: number;
  compulsoryRepayment: number;
  voluntaryRepayment: number;
  indexation: number;
  endingBalance: number;
  income: number;
}

export interface StudentLoanProjectionResponse {
  projections: YearProjection[];
  payoffYear: number | null;
  totalPaid: number;
  totalInterest: number;
}
