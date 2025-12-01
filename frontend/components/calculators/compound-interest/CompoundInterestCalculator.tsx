import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CalculatorLayoutWithAds } from '../../../components/CalculatorLayoutWithAds';
import { AIAnalysis } from '../../../components/AIAnalysis';
import ExportShareButtons from '../../../components/ExportShareButtons';
import { useFormatting } from '../../../utils/formatting';
import { AdsterraSlot } from '../../../components/ads/AdsterraSlot';
import { AdsettraSlot } from '../../../components/ads/AdsettraSlot';
import type { AnalysisRequest } from '~backend/ai-analysis/types';
import { CompoundInterestForm } from './CompoundInterestForm';
import { CompoundInterestResults } from './CompoundInterestResults';
import { CompoundInterestScenarios } from './CompoundInterestScenarios';
import { CompoundInterestBreakdown } from './CompoundInterestBreakdown';
import { CompoundInterestEducation } from './CompoundInterestEducation';
import { useCompoundInterestCalculator } from './useCompoundInterestCalculator';
import { CompoundInterestInputs } from './types';

export default function CompoundInterestCalculator() {
  const { t } = useTranslation();
  const { formatCurrency, getCurrencySymbol } = useFormatting();

  const [inputs, setInputs] = useState<CompoundInterestInputs>({
    principal: '',
    rate: '',
    time: '',
    frequency: '12',
    monthlyContribution: '',
    contributionTiming: 'end'
  });

  const { result, comparisonScenarios } = useCompoundInterestCalculator(inputs);

  const handleInputChange = (field: keyof CompoundInterestInputs, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  return (
    <CalculatorLayoutWithAds
      title="Compound Interest Calculator | Investment Growth & Savings Calculator"
      description="Calculate compound interest with regular contributions, different compounding frequencies, and detailed year-by-year breakdowns. See the power of compounding over time with comprehensive scenarios."
      keywords="compound interest calculator, investment calculator, savings growth calculator, compounding frequency, investment returns, financial calculator"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <AdsterraSlot position="top" className="mb-6" />
        <AdsettraSlot position="top" className="mb-6" />

        {/* Input Form */}
        <CompoundInterestForm
          inputs={inputs}
          onInputChange={handleInputChange}
          getCurrencySymbol={getCurrencySymbol}
        />

        <AdsterraSlot position="middle" className="my-6" />
        <AdsettraSlot position="middle" className="my-6" />

        {/* Results */}
        {result.isValid && (
          <div className="space-y-6">
            {/* AI Analysis */}
            <AIAnalysis
              analysisRequest={{
                calculatorType: "compound-interest",
                data: {
                  initialInvestment: parseFloat(inputs.principal) || 0,
                  monthlyContribution: parseFloat(inputs.monthlyContribution) || 0,
                  annualReturn: parseFloat(inputs.rate) || 0,
                  years: parseFloat(inputs.time) || 0,
                  finalAmount: result.finalAmount,
                  totalContributions: result.totalContributions,
                  totalReturn: result.totalInterest
                }
              }}
              autoRun={true}
              title="AI Compound Interest Analysis"
              description="Get personalized investment insights and optimization strategies for your compound interest calculations."
            />

            <ExportShareButtons
              calculatorType="compound-interest"
              inputs={{
                principal: parseFloat(inputs.principal) || 0,
                rate: parseFloat(inputs.rate) || 0,
                time: parseFloat(inputs.time) || 0,
                monthlyContribution: parseFloat(inputs.monthlyContribution) || 0,
                compoundingFrequency: inputs.frequency
              }}
              results={{
                finalAmount: result.finalAmount,
                totalInterest: result.totalInterest,
                totalContributions: result.totalContributions
              }}
              title="Compound Interest Calculator Report"
            />

            {/* Main Results */}
            <CompoundInterestResults
              result={result}
              formatCurrency={formatCurrency}
            />

            {/* Comparison Scenarios */}
            <CompoundInterestScenarios
              scenarios={comparisonScenarios}
              formatCurrency={formatCurrency}
            />

            {/* Year by Year Breakdown */}
            <CompoundInterestBreakdown
              breakdown={result.yearByYearBreakdown}
              formatCurrency={formatCurrency}
            />
          </div>
        )}

        <AdsterraSlot position="middle" className="my-6" />

        {/* Educational Content */}
        <CompoundInterestEducation />
      </div>
    </CalculatorLayoutWithAds>
  );
}