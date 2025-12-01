import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3 } from 'lucide-react';
import { ComparisonScenario } from './types';

interface CompoundInterestScenariosProps {
  scenarios: ComparisonScenario[];
  formatCurrency: (amount: number) => string;
}

export function CompoundInterestScenarios({ scenarios, formatCurrency }: CompoundInterestScenariosProps) {
  if (scenarios.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BarChart3 className="h-5 w-5" />
          <span>Scenario Comparisons</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {scenarios.map((scenario, index) => (
            <div key={index} className="text-center p-4 border rounded-lg">
              <h3 className="font-semibold text-sm mb-2">{scenario.name}</h3>
              <div className="text-xl font-bold text-blue-600">
                {formatCurrency(scenario.finalAmount)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{scenario.description}</p>
              <p className="text-xs text-green-600 mt-1">
                Interest: {formatCurrency(scenario.totalInterest)}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}