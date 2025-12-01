// Core calculator calculation utilities

/**
 * Calculate compound interest
 */
export function calculateCompoundInterest(params: {
  principal: number;
  rate: number;
  time: number;
  frequency?: number;
  monthlyContribution?: number;
  contributionTiming?: 'beginning' | 'end';
}): {
  finalAmount: number;
  totalInterest: number;
  totalContributions: number;
  effectiveAnnualRate: number;
  yearByYearBreakdown: Array<{
    year: number;
    startingBalance: number;
    contributions: number;
    interestEarned: number;
    endingBalance: number;
  }>;
  isValid: boolean;
} {
  const {
    principal,
    rate,
    time,
    frequency = 12,
    monthlyContribution = 0,
    contributionTiming = 'end',
  } = params;

  // Validation
  if (principal <= 0 || rate < 0 || time <= 0 || frequency <= 0) {
    return {
      finalAmount: 0,
      totalInterest: 0,
      totalContributions: principal,
      effectiveAnnualRate: 0,
      yearByYearBreakdown: [],
      isValid: false,
    };
  }

  const monthlyRate = rate / 100 / 12;
  const totalMonths = time * 12;
  let balance = principal;
  let totalContributionsSum = principal;
  const yearByYearBreakdown: Array<{
    year: number;
    startingBalance: number;
    contributions: number;
    interestEarned: number;
    endingBalance: number;
  }> = [];

  let yearStartBalance = principal;
  let yearContributions = 0;
  let yearInterest = 0;

  for (let month = 1; month <= totalMonths; month++) {
    // Add contribution at beginning of month
    if (contributionTiming === 'beginning' && monthlyContribution > 0) {
      balance += monthlyContribution;
      totalContributionsSum += monthlyContribution;
      yearContributions += monthlyContribution;
    }

    // Apply interest
    const monthlyInterest = balance * monthlyRate;
    balance += monthlyInterest;
    yearInterest += monthlyInterest;

    // Add contribution at end of month
    if (contributionTiming === 'end' && monthlyContribution > 0) {
      balance += monthlyContribution;
      totalContributionsSum += monthlyContribution;
      yearContributions += monthlyContribution;
    }

    // End of year breakdown
    if (month % 12 === 0) {
      yearByYearBreakdown.push({
        year: month / 12,
        startingBalance: Math.round(yearStartBalance * 100) / 100,
        contributions: Math.round(yearContributions * 100) / 100,
        interestEarned: Math.round(yearInterest * 100) / 100,
        endingBalance: Math.round(balance * 100) / 100,
      });
      yearStartBalance = balance;
      yearContributions = 0;
      yearInterest = 0;
    }
  }

  const totalInterest = balance - totalContributionsSum;
  const effectiveAnnualRate = (Math.pow(1 + rate / 100 / frequency, frequency) - 1) * 100;

  return {
    finalAmount: Math.round(balance * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    totalContributions: Math.round(totalContributionsSum * 100) / 100,
    effectiveAnnualRate: Math.round(effectiveAnnualRate * 100) / 100,
    yearByYearBreakdown,
    isValid: true,
  };
}

/**
 * Calculate simple interest
 */
export function calculateSimpleInterest(params: {
  principal: number;
  rate: number;
  time: number;
}): {
  interest: number;
  totalAmount: number;
  isValid: boolean;
} {
  const { principal, rate, time } = params;

  if (principal <= 0 || rate < 0 || time <= 0) {
    return { interest: 0, totalAmount: 0, isValid: false };
  }

  const interest = principal * (rate / 100) * time;
  const totalAmount = principal + interest;

  return {
    interest: Math.round(interest * 100) / 100,
    totalAmount: Math.round(totalAmount * 100) / 100,
    isValid: true,
  };
}

/**
 * Calculate loan payment
 */
export function calculateLoanPayment(params: {
  principal: number;
  annualRate: number;
  termMonths: number;
}): {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  isValid: boolean;
} {
  const { principal, annualRate, termMonths } = params;

  if (principal <= 0 || annualRate < 0 || termMonths <= 0) {
    return { monthlyPayment: 0, totalPayment: 0, totalInterest: 0, isValid: false };
  }

  const monthlyRate = annualRate / 100 / 12;

  let monthlyPayment: number;
  if (monthlyRate === 0) {
    monthlyPayment = principal / termMonths;
  } else {
    monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
      (Math.pow(1 + monthlyRate, termMonths) - 1);
  }

  const totalPayment = monthlyPayment * termMonths;
  const totalInterest = totalPayment - principal;

  return {
    monthlyPayment: Math.round(monthlyPayment * 100) / 100,
    totalPayment: Math.round(totalPayment * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    isValid: true,
  };
}

/**
 * Calculate BMI
 */
export function calculateBMI(params: {
  weight: number;
  height: number;
  unit: 'metric' | 'imperial';
}): {
  bmi: number;
  category: string;
  healthRisk: string;
  isValid: boolean;
} {
  const { weight, height, unit } = params;

  if (weight <= 0 || height <= 0) {
    return { bmi: 0, category: '', healthRisk: '', isValid: false };
  }

  let bmi: number;
  if (unit === 'metric') {
    // Weight in kg, height in cm
    const heightInMeters = height / 100;
    bmi = weight / (heightInMeters * heightInMeters);
  } else {
    // Weight in lbs, height in inches
    bmi = (weight / (height * height)) * 703;
  }

  bmi = Math.round(bmi * 10) / 10;

  let category: string;
  let healthRisk: string;

  if (bmi < 18.5) {
    category = 'Underweight';
    healthRisk = 'Malnutrition risk';
  } else if (bmi < 25) {
    category = 'Normal weight';
    healthRisk = 'Low risk';
  } else if (bmi < 30) {
    category = 'Overweight';
    healthRisk = 'Moderate risk';
  } else if (bmi < 35) {
    category = 'Obese Class I';
    healthRisk = 'High risk';
  } else if (bmi < 40) {
    category = 'Obese Class II';
    healthRisk = 'Very high risk';
  } else {
    category = 'Obese Class III';
    healthRisk = 'Extremely high risk';
  }

  return { bmi, category, healthRisk, isValid: true };
}

/**
 * Calculate percentage
 */
export function calculatePercentage(params: {
  value: number;
  percentage: number;
  operation: 'of' | 'increase' | 'decrease' | 'change';
  originalValue?: number;
}): {
  result: number;
  isValid: boolean;
} {
  const { value, percentage, operation, originalValue } = params;

  if (value < 0 || percentage < 0) {
    return { result: 0, isValid: false };
  }

  let result: number;

  switch (operation) {
    case 'of':
      result = (percentage / 100) * value;
      break;
    case 'increase':
      result = value * (1 + percentage / 100);
      break;
    case 'decrease':
      result = value * (1 - percentage / 100);
      break;
    case 'change':
      if (!originalValue || originalValue === 0) {
        return { result: 0, isValid: false };
      }
      result = ((value - originalValue) / originalValue) * 100;
      break;
    default:
      return { result: 0, isValid: false };
  }

  return {
    result: Math.round(result * 100) / 100,
    isValid: true,
  };
}

/**
 * Calculate tip
 */
export function calculateTip(params: {
  billAmount: number;
  tipPercentage: number;
  splitBetween?: number;
}): {
  tipAmount: number;
  totalAmount: number;
  perPersonAmount: number;
  perPersonTip: number;
  isValid: boolean;
} {
  const { billAmount, tipPercentage, splitBetween = 1 } = params;

  if (billAmount <= 0 || tipPercentage < 0 || splitBetween < 1) {
    return {
      tipAmount: 0,
      totalAmount: 0,
      perPersonAmount: 0,
      perPersonTip: 0,
      isValid: false,
    };
  }

  const tipAmount = billAmount * (tipPercentage / 100);
  const totalAmount = billAmount + tipAmount;
  const perPersonAmount = totalAmount / splitBetween;
  const perPersonTip = tipAmount / splitBetween;

  return {
    tipAmount: Math.round(tipAmount * 100) / 100,
    totalAmount: Math.round(totalAmount * 100) / 100,
    perPersonAmount: Math.round(perPersonAmount * 100) / 100,
    perPersonTip: Math.round(perPersonTip * 100) / 100,
    isValid: true,
  };
}

/**
 * Calculate ROI
 */
export function calculateROI(params: {
  initialInvestment: number;
  finalValue: number;
  timeYears?: number;
}): {
  roi: number;
  profit: number;
  annualizedROI: number | null;
  isValid: boolean;
} {
  const { initialInvestment, finalValue, timeYears } = params;

  if (initialInvestment <= 0) {
    return { roi: 0, profit: 0, annualizedROI: null, isValid: false };
  }

  const profit = finalValue - initialInvestment;
  const roi = (profit / initialInvestment) * 100;

  let annualizedROI: number | null = null;
  if (timeYears && timeYears > 0) {
    annualizedROI = (Math.pow(finalValue / initialInvestment, 1 / timeYears) - 1) * 100;
    annualizedROI = Math.round(annualizedROI * 100) / 100;
  }

  return {
    roi: Math.round(roi * 100) / 100,
    profit: Math.round(profit * 100) / 100,
    annualizedROI,
    isValid: true,
  };
}