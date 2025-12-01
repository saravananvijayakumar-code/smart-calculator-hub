export interface CompoundInterestResult {
  finalAmount: number;
  totalInterest: number;
  totalContributions: number;
  isValid: boolean;
  yearByYearBreakdown: YearlyBreakdown[];
  effectiveAnnualRate: number;
}

export interface YearlyBreakdown {
  year: number;
  startingBalance: number;
  contributions: number;
  interestEarned: number;
  endingBalance: number;
}

export interface ComparisonScenario {
  name: string;
  finalAmount: number;
  totalInterest: number;
  description: string;
}

export interface CompoundInterestInputs {
  principal: string;
  rate: string;
  time: string;
  frequency: string;
  monthlyContribution: string;
  contributionTiming: string;
}