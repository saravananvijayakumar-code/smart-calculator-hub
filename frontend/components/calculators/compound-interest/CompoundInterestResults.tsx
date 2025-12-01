import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CompoundInterestResult } from './types';

interface CompoundInterestResultsProps {
  result: CompoundInterestResult;
  formatCurrency: (amount: number) => string;
}

export function CompoundInterestResults({ result, formatCurrency }: CompoundInterestResultsProps) {
  if (!result.isValid) return null;

  return (
    <Card className="border-2 border-green-200 bg-green-50">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-green-800">
          Investment Growth Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">
              {formatCurrency(result.finalAmount)}
            </div>
            <p className="text-sm text-green-700">Final Amount</p>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {formatCurrency(result.totalContributions)}
            </div>
            <p className="text-sm text-muted-foreground">Total Contributions</p>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">
              {formatCurrency(result.totalInterest)}
            </div>
            <p className="text-sm text-muted-foreground">Interest Earned</p>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {result.effectiveAnnualRate.toFixed(2)}%
            </div>
            <p className="text-sm text-muted-foreground">Effective Annual Return</p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between text-sm">
            <span>Interest to Contributions Ratio:</span>
            <Badge variant="default">
              {((result.totalInterest / result.totalContributions) * 100).toFixed(1)}%
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}