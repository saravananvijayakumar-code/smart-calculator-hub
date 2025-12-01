import { describe, it, expect } from 'vitest';

// Simple compound interest calculation function for testing
function calculateCompoundInterest(
  principal: number,
  rate: number,
  time: number,
  frequency: number = 12,
  monthlyContribution: number = 0,
  contributionTiming: 'beginning' | 'end' = 'end'
) {
  if (principal <= 0 || rate < 0 || time <= 0 || frequency <= 0) {
    return { finalAmount: 0, totalInterest: 0, totalContributions: principal, isValid: false };
  }

  const monthlyRate = rate / 100 / 12;
  const totalMonths = time * 12;
  let balance = principal;
  let totalContributionsSum = principal;

  // Calculate month by month for accuracy
  for (let month = 1; month <= totalMonths; month++) {
    // Add contribution at beginning of month
    if (contributionTiming === 'beginning' && monthlyContribution > 0) {
      balance += monthlyContribution;
      totalContributionsSum += monthlyContribution;
    }

    // Apply interest
    const monthlyInterest = balance * monthlyRate;
    balance += monthlyInterest;

    // Add contribution at end of month
    if (contributionTiming === 'end' && monthlyContribution > 0) {
      balance += monthlyContribution;
      totalContributionsSum += monthlyContribution;
    }
  }

  const totalInterest = balance - totalContributionsSum;

  return {
    finalAmount: Math.round(balance * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    totalContributions: totalContributionsSum,
    isValid: true
  };
}

describe('Compound Interest Calculator', () => {
  describe('Basic compound interest calculations', () => {
    it('calculates simple compound interest correctly', () => {
      const result = calculateCompoundInterest(1000, 5, 1);
      expect(result.finalAmount).toBe(1050);
      expect(result.totalInterest).toBe(50);
      expect(result.totalContributions).toBe(1000);
      expect(result.isValid).toBe(true);
    });

    it('calculates compound interest over multiple years', () => {
      const result = calculateCompoundInterest(1000, 5, 2);
      expect(result.finalAmount).toBeCloseTo(1102.50, 2);
      expect(result.totalInterest).toBeCloseTo(102.50, 2);
      expect(result.isValid).toBe(true);
    });

    it('handles zero principal', () => {
      const result = calculateCompoundInterest(0, 5, 1);
      expect(result.isValid).toBe(false);
    });

    it('handles negative rate', () => {
      const result = calculateCompoundInterest(1000, -5, 1);
      expect(result.isValid).toBe(false);
    });

    it('handles zero time', () => {
      const result = calculateCompoundInterest(1000, 5, 0);
      expect(result.isValid).toBe(false);
    });
  });

  describe('Monthly contributions', () => {
    it('calculates with monthly contributions at end of month', () => {
      const result = calculateCompoundInterest(1000, 5, 1, 12, 100, 'end');
      expect(result.finalAmount).toBeGreaterThan(1000);
      expect(result.totalContributions).toBe(2200); // 1000 + 12 * 100
      expect(result.isValid).toBe(true);
    });

    it('calculates with monthly contributions at beginning of month', () => {
      const result = calculateCompoundInterest(1000, 5, 1, 12, 100, 'beginning');
      expect(result.finalAmount).toBeGreaterThan(1000);
      expect(result.totalContributions).toBe(2200); // 1000 + 12 * 100
      expect(result.isValid).toBe(true);
    });
  });

  describe('Edge cases', () => {
    it('handles very small amounts', () => {
      const result = calculateCompoundInterest(0.01, 1, 1);
      expect(result.isValid).toBe(true);
      expect(result.finalAmount).toBeGreaterThan(0.01);
    });

    it('handles high interest rates', () => {
      const result = calculateCompoundInterest(1000, 100, 1);
      expect(result.isValid).toBe(true);
      expect(result.finalAmount).toBeGreaterThan(1000);
    });
  });
});