import { useState } from 'react';
import { Calculator, CreditCard, DollarSign, Plus, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalculatorLayoutWithAds } from '../../../components/CalculatorLayoutWithAds';
import { formatCurrency, formatPercentage } from '../../../utils/formatting';

interface Debt {
  id: string;
  name: string;
  balance: number;
  interestRate: number;
  minimumPayment: number;
}

interface ConsolidationCalculation {
  currentTotalBalance: number;
  currentTotalMinimumPayments: number;
  currentWeightedAPR: number;
  newMonthlyPayment: number;
  newTotalInterest: number;
  newPayoffTime: number;
  totalSavings: number;
  monthlySavings: number;
  isWorthwhile: boolean;
}

export function DebtConsolidationCalculatorUS() {
  const [debts, setDebts] = useState<Debt[]>([
    { id: '1', name: 'Credit Card 1', balance: 5000, interestRate: 18.99, minimumPayment: 150 },
    { id: '2', name: 'Credit Card 2', balance: 3000, interestRate: 22.99, minimumPayment: 90 }
  ]);
  const [consolidationRate, setConsolidationRate] = useState<string>('12.5');
  const [consolidationTerm, setConsolidationTerm] = useState<string>('60');
  const [results, setResults] = useState<ConsolidationCalculation | null>(null);

  const addDebt = () => {
    const newDebt: Debt = {
      id: Date.now().toString(),
      name: `Debt ${debts.length + 1}`,
      balance: 0,
      interestRate: 0,
      minimumPayment: 0
    };
    setDebts([...debts, newDebt]);
  };

  const removeDebt = (id: string) => {
    if (debts.length > 1) {
      setDebts(debts.filter(debt => debt.id !== id));
    }
  };

  const updateDebt = (id: string, field: keyof Debt, value: string | number) => {
    setDebts(debts.map(debt => 
      debt.id === id ? { ...debt, [field]: value } : debt
    ));
  };

  const calculateConsolidation = () => {
    const validDebts = debts.filter(debt => debt.balance > 0 && debt.interestRate > 0);
    
    if (validDebts.length === 0) {
      setResults(null);
      return;
    }

    const rate = parseFloat(consolidationRate) / 100 || 0;
    const months = parseInt(consolidationTerm) || 0;

    const currentTotalBalance = validDebts.reduce((sum, debt) => sum + debt.balance, 0);
    const currentTotalMinimumPayments = validDebts.reduce((sum, debt) => sum + debt.minimumPayment, 0);
    
    const totalInterestPayments = validDebts.reduce((sum, debt) => sum + (debt.balance * debt.interestRate / 100), 0);
    const currentWeightedAPR = (totalInterestPayments / currentTotalBalance) * 100;

    const monthlyRate = rate / 12;
    let newMonthlyPayment: number;
    
    if (monthlyRate === 0) {
      newMonthlyPayment = currentTotalBalance / months;
    } else {
      newMonthlyPayment = currentTotalBalance * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                         (Math.pow(1 + monthlyRate, months) - 1);
    }

    const newTotalPayment = newMonthlyPayment * months;
    const newTotalInterest = newTotalPayment - currentTotalBalance;

    let currentTotalPaid = 0;
    validDebts.forEach(debt => {
      let balance = debt.balance;
      let monthCount = 0;
      const monthlyInterestRate = debt.interestRate / 100 / 12;
      
      while (balance > 0 && monthCount < 600) {
        const interestCharge = balance * monthlyInterestRate;
        const principalPayment = debt.minimumPayment - interestCharge;
        balance -= principalPayment;
        currentTotalPaid += debt.minimumPayment;
        monthCount++;
      }
    });

    const totalSavings = currentTotalPaid - newTotalPayment;
    const monthlySavings = currentTotalMinimumPayments - newMonthlyPayment;
    const isWorthwhile = totalSavings > 0 && rate < currentWeightedAPR;

    setResults({
      currentTotalBalance,
      currentTotalMinimumPayments,
      currentWeightedAPR,
      newMonthlyPayment,
      newTotalInterest,
      newPayoffTime: months,
      totalSavings,
      monthlySavings,
      isWorthwhile
    });
  };

  const tips = [
    "Consolidation works best when you secure a lower interest rate",
    "Consider balance transfer cards for short-term debt",
    "Personal loans offer fixed rates and predictable payments",
    "Avoid taking on new debt after consolidating"
  ];

  return (
    <CalculatorLayoutWithAds 
      title="Debt Consolidation Calculator" 
      description="Compare debt consolidation options and calculate potential savings from combining multiple debts into one loan." 
      keywords="debt consolidation calculator, debt payoff, personal loan, credit card debt" 
      tips={tips}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Current Debts
            </CardTitle>
            <CardDescription>
              Enter your existing debts and consolidation loan details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {debts.map((debt, index) => (
              <div key={debt.id} className="p-4 border rounded-lg space-y-3">
                <div className="flex justify-between items-center">
                  <Input
                    value={debt.name}
                    onChange={(e) => updateDebt(debt.id, 'name', e.target.value)}
                    className="max-w-[200px]"
                    placeholder="Debt name"
                  />
                  {debts.length > 1 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeDebt(debt.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                <div className="grid gap-3">
                  <div>
                    <Label>Balance</Label>
                    <Input
                      type="number"
                      value={debt.balance || ''}
                      onChange={(e) => updateDebt(debt.id, 'balance', parseFloat(e.target.value) || 0)}
                      placeholder="0"
                    />
                  </div>
                  
                  <div>
                    <Label>Interest Rate (%)</Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={debt.interestRate || ''}
                      onChange={(e) => updateDebt(debt.id, 'interestRate', parseFloat(e.target.value) || 0)}
                      placeholder="0"
                    />
                  </div>
                  
                  <div>
                    <Label>Minimum Payment</Label>
                    <Input
                      type="number"
                      value={debt.minimumPayment || ''}
                      onChange={(e) => updateDebt(debt.id, 'minimumPayment', parseFloat(e.target.value) || 0)}
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>
            ))}

            <Button onClick={addDebt} variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Another Debt
            </Button>

            <div className="space-y-3 pt-4 border-t">
              <div>
                <Label>Consolidation Interest Rate (%)</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={consolidationRate}
                  onChange={(e) => setConsolidationRate(e.target.value)}
                  placeholder="12.5"
                />
              </div>

              <div>
                <Label>Consolidation Loan Term (months)</Label>
                <Select value={consolidationTerm} onValueChange={setConsolidationTerm}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="36">36 months (3 years)</SelectItem>
                    <SelectItem value="48">48 months (4 years)</SelectItem>
                    <SelectItem value="60">60 months (5 years)</SelectItem>
                    <SelectItem value="72">72 months (6 years)</SelectItem>
                    <SelectItem value="84">84 months (7 years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button onClick={calculateConsolidation} className="w-full">
              <Calculator className="h-4 w-4 mr-2" />
              Calculate Consolidation
            </Button>
          </CardContent>
        </Card>

        {results && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Consolidation Analysis
              </CardTitle>
              <CardDescription>
                Compare your current situation with consolidation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">Current Situation</div>
                  <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                    {formatCurrency(results.currentTotalMinimumPayments)}/mo
                  </div>
                  <div className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                    Weighted APR: {formatPercentage(results.currentWeightedAPR)}
                  </div>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <div className="text-sm text-green-600 dark:text-green-400 mb-1">After Consolidation</div>
                  <div className="text-2xl font-bold text-green-900 dark:text-green-100">
                    {formatCurrency(results.newMonthlyPayment)}/mo
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                    APR: {formatPercentage(parseFloat(consolidationRate))}
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${results.isWorthwhile ? 'bg-green-50 dark:bg-green-950' : 'bg-red-50 dark:bg-red-950'}`}>
                  <div className={`text-sm mb-1 ${results.isWorthwhile ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    Monthly Savings
                  </div>
                  <div className={`text-2xl font-bold ${results.isWorthwhile ? 'text-green-900 dark:text-green-100' : 'text-red-900 dark:text-red-100'}`}>
                    {formatCurrency(Math.abs(results.monthlySavings))}
                  </div>
                  <div className={`text-sm mt-1 ${results.isWorthwhile ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    Total Savings: {formatCurrency(Math.abs(results.totalSavings))}
                  </div>
                </div>

                {!results.isWorthwhile && (
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                    <div className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Consolidation May Not Be Beneficial
                    </div>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      Based on the rates provided, consolidation would not save you money. Consider negotiating for a lower rate or exploring other debt reduction strategies.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </CalculatorLayoutWithAds>
  );
}
