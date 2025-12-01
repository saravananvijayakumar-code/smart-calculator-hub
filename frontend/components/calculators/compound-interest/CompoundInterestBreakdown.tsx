import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { YearlyBreakdown } from './types';

interface CompoundInterestBreakdownProps {
  breakdown: YearlyBreakdown[];
  formatCurrency: (amount: number) => string;
}

export function CompoundInterestBreakdown({ breakdown, formatCurrency }: CompoundInterestBreakdownProps) {
  if (breakdown.length === 0 || breakdown.length > 30) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Year-by-Year Growth Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Year</th>
                <th className="text-right p-2">Starting Balance</th>
                <th className="text-right p-2">Contributions</th>
                <th className="text-right p-2">Interest Earned</th>
                <th className="text-right p-2">Ending Balance</th>
              </tr>
            </thead>
            <tbody>
              {breakdown.map((year) => (
                <tr key={year.year} className="border-b hover:bg-gray-50">
                  <td className="p-2 font-medium">{year.year}</td>
                  <td className="p-2 text-right">{formatCurrency(year.startingBalance)}</td>
                  <td className="p-2 text-right text-blue-600">{formatCurrency(year.contributions)}</td>
                  <td className="p-2 text-right text-green-600">{formatCurrency(year.interestEarned)}</td>
                  <td className="p-2 text-right font-semibold">{formatCurrency(year.endingBalance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}