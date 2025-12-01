import { useState, useEffect } from 'react';
import { CompoundInterestResult, YearlyBreakdown, ComparisonScenario, CompoundInterestInputs } from './types';

export function useCompoundInterestCalculator(inputs: CompoundInterestInputs) {
  const [result, setResult] = useState<CompoundInterestResult>({
    finalAmount: 0,
    totalInterest: 0,
    totalContributions: 0,
    isValid: false,
    yearByYearBreakdown: [],
    effectiveAnnualRate: 0
  });

  const [comparisonScenarios, setComparisonScenarios] = useState<ComparisonScenario[]>([]);

  const calculateCompoundInterest = () => {
    const p = parseFloat(inputs.principal);
    const r = parseFloat(inputs.rate);
    const t = parseFloat(inputs.time);
    const n = parseFloat(inputs.frequency);
    const pmt = parseFloat(inputs.monthlyContribution) || 0;

    if (p > 0 && r >= 0 && t > 0 && n > 0) {
      const monthlyRate = r / 100 / 12;
      const totalMonths = t * 12;
      let balance = p;
      let totalContributionsSum = p;
      const yearlyBreakdown: YearlyBreakdown[] = [];

      // Calculate month by month for accuracy
      for (let year = 1; year <= t; year++) {
        const startingBalance = balance;
        let yearContributions = 0;
        let yearInterest = 0;

        for (let month = 1; month <= 12; month++) {
          // Add contribution at beginning or end of month
          if (inputs.contributionTiming === 'beginning' && pmt > 0) {
            balance += pmt;
            yearContributions += pmt;
            totalContributionsSum += pmt;
          }

          // Apply interest
          const monthlyInterest = balance * monthlyRate;
          balance += monthlyInterest;
          yearInterest += monthlyInterest;

          // Add contribution at end of month
          if (inputs.contributionTiming === 'end' && pmt > 0) {
            balance += pmt;
            yearContributions += pmt;
            totalContributionsSum += pmt;
          }
        }

        yearlyBreakdown.push({
          year,
          startingBalance,
          contributions: yearContributions,
          interestEarned: yearInterest,
          endingBalance: balance
        });
      }

      const finalAmount = balance;
      const totalInterest = finalAmount - totalContributionsSum;
      const effectiveAnnualRate = totalContributionsSum > 0 ?
        (Math.pow(finalAmount / totalContributionsSum, 1/t) - 1) * 100 : 0;

      setResult({
        finalAmount,
        totalInterest,
        totalContributions: totalContributionsSum,
        isValid: true,
        yearByYearBreakdown: yearlyBreakdown,
        effectiveAnnualRate
      });

      // Calculate comparison scenarios
      calculateComparisonScenarios(p, r, t, n, pmt);
    } else {
      setResult({
        finalAmount: 0,
        totalInterest: 0,
        totalContributions: 0,
        isValid: false,
        yearByYearBreakdown: [],
        effectiveAnnualRate: 0
      });
      setComparisonScenarios([]);
    }
  };

  const calculateComparisonScenarios = (p: number, r: number, t: number, n: number, pmt: number) => {
    const scenarios: ComparisonScenario[] = [];

    // Scenario 1: No additional contributions
    if (pmt > 0) {
      const simpleCompound = p * Math.pow(1 + (r / 100) / n, n * t);
      scenarios.push({
        name: 'Principal Only',
        finalAmount: simpleCompound,
        totalInterest: simpleCompound - p,
        description: 'No monthly contributions'
      });
    }

    // Scenario 2: Lower interest rate
    if (r > 1) {
      const lowerRate = Math.max(1, r - 2);
      const lowerRateResult = calculateScenario(p, lowerRate, t, n, pmt);
      scenarios.push({
        name: `${lowerRate}% Rate`,
        finalAmount: lowerRateResult.final,
        totalInterest: lowerRateResult.interest,
        description: '2% lower interest rate'
      });
    }

    // Scenario 3: Higher interest rate
    const higherRate = r + 2;
    const higherRateResult = calculateScenario(p, higherRate, t, n, pmt);
    scenarios.push({
      name: `${higherRate}% Rate`,
      finalAmount: higherRateResult.final,
      totalInterest: higherRateResult.interest,
      description: '2% higher interest rate'
    });

    // Scenario 4: Double the time
    if (t < 20) {
      const doubleTimeResult = calculateScenario(p, r, t * 2, n, pmt);
      scenarios.push({
        name: `${t * 2} Years`,
        finalAmount: doubleTimeResult.final,
        totalInterest: doubleTimeResult.interest,
        description: 'Double the time period'
      });
    }

    setComparisonScenarios(scenarios);
  };

  const calculateScenario = (p: number, r: number, t: number, n: number, pmt: number) => {
    const monthlyRate = r / 100 / 12;
    let balance = p;
    let totalContributions = p;

    for (let month = 1; month <= t * 12; month++) {
      if (inputs.contributionTiming === 'beginning' && pmt > 0) {
        balance += pmt;
        totalContributions += pmt;
      }
      balance += balance * monthlyRate;
      if (inputs.contributionTiming === 'end' && pmt > 0) {
        balance += pmt;
        totalContributions += pmt;
      }
    }

    return {
      final: balance,
      interest: balance - totalContributions
    };
  };

  useEffect(() => {
    calculateCompoundInterest();
  }, [inputs.principal, inputs.rate, inputs.time, inputs.frequency, inputs.monthlyContribution, inputs.contributionTiming]);

  return { result, comparisonScenarios };
}