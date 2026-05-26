// Stub types for removed AI analysis service
export type CalculatorType = string;
export type AnalysisData = any;

export interface AnalysisRequest {
  calculatorType: string;
  data: any;
  userContext?: any;
}

export interface Recommendation {
  type: string;
  priority: string;
  title: string;
  description: string;
  actionItems: string[];
  potentialSavings?: number;
  estimatedImpact?: string;
}

export interface AnalysisResponse {
  summary: string;
  recommendations: Recommendation[];
  keyInsights: string[];
  riskFactors: string[];
  nextSteps: string[];
}

// All the specific data types used by calculator pages
export interface MortgageAnalysisData { [key: string]: any; }
export interface LoanAnalysisData { [key: string]: any; }
export interface InvestmentAnalysisData { [key: string]: any; }
export interface RetirementAnalysisData { [key: string]: any; }
export interface EmergencyFundAnalysisData { [key: string]: any; }
export interface CreditCardAnalysisData { [key: string]: any; }
export interface ROIAnalysisData { [key: string]: any; }
export interface SalaryAnalysisData { [key: string]: any; }
export interface ProfitMarginAnalysisData { [key: string]: any; }
export interface PaycheckAnalysisData { [key: string]: any; }
export interface StudentLoanAnalysisData { [key: string]: any; }
export interface AutoLoanAnalysisData { [key: string]: any; }
export interface HELOCAnalysisData { [key: string]: any; }
export interface BusinessLoanAnalysisData { [key: string]: any; }
export interface DebtConsolidationAnalysisData { [key: string]: any; }
export interface StateTaxAnalysisData { [key: string]: any; }
export interface BTLMortgageAnalysisData { [key: string]: any; }
export interface ISAAnalysisData { [key: string]: any; }
export interface NationalInsuranceAnalysisData { [key: string]: any; }
export interface PensionAnalysisData { [key: string]: any; }
export interface StampDutyAnalysisData { [key: string]: any; }
export interface EMIAnalysisData { [key: string]: any; }
export interface EPFAnalysisData { [key: string]: any; }
export interface HomeLoanAnalysisData { [key: string]: any; }
export interface IncomeTaxAnalysisData { [key: string]: any; }
export interface GSTAnalysisData { [key: string]: any; }
export interface PPFAnalysisData { [key: string]: any; }
export interface SIPAnalysisData { [key: string]: any; }
export interface CGTAnalysisData { [key: string]: any; }
export interface FBTAnalysisData { [key: string]: any; }
export interface NegativeGearingAnalysisData { [key: string]: any; }
export interface PropertyTaxAnalysisData { [key: string]: any; }
export interface SuperannuationAnalysisData { [key: string]: any; }
export interface FirstHomeBuyerNSWAnalysisData { [key: string]: any; }
export interface IncomeTaxAustraliaAnalysisData { [key: string]: any; }
export interface AUPayAnalysisData { [key: string]: any; }
export interface BMIAnalysisData { [key: string]: any; }
export interface WeightLossStepsAnalysisData { [key: string]: any; }
export interface CalorieAnalysisData { [key: string]: any; }
export interface WaistToHipRatioAnalysisData { [key: string]: any; }
export interface PercentageAnalysisData { [key: string]: any; }
export interface AgeAnalysisData { [key: string]: any; }
export interface UnitConverterAnalysisData { [key: string]: any; }
export interface CurrencyConverterAnalysisData { [key: string]: any; }
export interface TipAnalysisData { [key: string]: any; }
export interface LoveCompatibilityAnalysisData { [key: string]: any; }
export interface FriendCompatibilityAnalysisData { [key: string]: any; }
export interface ZodiacCompatibilityAnalysisData { [key: string]: any; }
export interface LifePathNumberAnalysisData { [key: string]: any; }
export interface ProfileAnalysisData { [key: string]: any; }
export interface InstagramBioAnalysisData { [key: string]: any; }
export interface TikTokProfileAnalysisData { [key: string]: any; }
export interface AudienceAnalysisData { [key: string]: any; }
export interface IPLookupAnalysisData { [key: string]: any; }
export interface LegalSettlementAnalysisData { [key: string]: any; }
export interface SolarSavingsAnalysisData { [key: string]: any; }
export interface CarInsuranceAnalysisData { [key: string]: any; }
