import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp } from 'lucide-react';
import { CompoundInterestInputs } from './types';

interface CompoundInterestFormProps {
  inputs: CompoundInterestInputs;
  onInputChange: (field: keyof CompoundInterestInputs, value: string) => void;
  getCurrencySymbol: () => string;
}

export function CompoundInterestForm({
  inputs,
  onInputChange,
  getCurrencySymbol
}: CompoundInterestFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5" />
          <span>Compound Interest Calculator</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="principal">Initial Investment ({getCurrencySymbol()})</Label>
            <Input
              id="principal"
              type="number"
              value={inputs.principal}
              onChange={(e) => onInputChange('principal', e.target.value)}
              placeholder="10000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="rate">Annual Interest Rate (%)</Label>
            <Input
              id="rate"
              type="number"
              value={inputs.rate}
              onChange={(e) => onInputChange('rate', e.target.value)}
              placeholder="7"
              step="0.1"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Time Period (Years)</Label>
            <Input
              id="time"
              type="number"
              value={inputs.time}
              onChange={(e) => onInputChange('time', e.target.value)}
              placeholder="20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="frequency">Compounding Frequency</Label>
            <Select value={inputs.frequency} onValueChange={(value) => onInputChange('frequency', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Annually</SelectItem>
                <SelectItem value="2">Semi-annually</SelectItem>
                <SelectItem value="4">Quarterly</SelectItem>
                <SelectItem value="12">Monthly</SelectItem>
                <SelectItem value="365">Daily</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="monthlyContribution">Monthly Contribution ({getCurrencySymbol()})</Label>
            <Input
              id="monthlyContribution"
              type="number"
              value={inputs.monthlyContribution}
              onChange={(e) => onInputChange('monthlyContribution', e.target.value)}
              placeholder="500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contributionTiming">Contribution Timing</Label>
            <Select value={inputs.contributionTiming} onValueChange={(value) => onInputChange('contributionTiming', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select timing" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginning">Beginning of Month</SelectItem>
                <SelectItem value="end">End of Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}