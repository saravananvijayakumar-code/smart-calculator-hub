import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, U as Input, B as Button, a3 as Label, C as Calculator, D as DollarSign, aD as formatCurrency, aE as formatPercentage } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { C as CreditCard } from "./credit-card-BI-uE5kJ.js";
import { T as Trash2 } from "./trash-2-Bv8CIGm6.js";
import { P as Plus } from "./plus-CjFC_9XE.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./EnhancedAIAnalysis-BZiQW2bt.js";
import "./badge-fo2YvZos.js";
import "./loader-circle-BYW7QwsU.js";
import "./brain-U3SZm3t9.js";
import "./target-1ApqtYDG.js";
import "./circle-check-big-BoxGYPKG.js";
import "./arrow-right-CtOKJdMG.js";
import "./lightbulb-doNczJxC.js";
function DebtConsolidationCalculatorUS() {
  const [debts, setDebts] = reactExports.useState([
    { id: "1", name: "Credit Card 1", balance: 5e3, interestRate: 18.99, minimumPayment: 150 },
    { id: "2", name: "Credit Card 2", balance: 3e3, interestRate: 22.99, minimumPayment: 90 }
  ]);
  const [consolidationRate, setConsolidationRate] = reactExports.useState("12.5");
  const [consolidationTerm, setConsolidationTerm] = reactExports.useState("60");
  const [results, setResults] = reactExports.useState(null);
  const addDebt = () => {
    const newDebt = {
      id: Date.now().toString(),
      name: `Debt ${debts.length + 1}`,
      balance: 0,
      interestRate: 0,
      minimumPayment: 0
    };
    setDebts([...debts, newDebt]);
  };
  const removeDebt = (id) => {
    if (debts.length > 1) {
      setDebts(debts.filter((debt) => debt.id !== id));
    }
  };
  const updateDebt = (id, field, value) => {
    setDebts(debts.map(
      (debt) => debt.id === id ? { ...debt, [field]: value } : debt
    ));
  };
  const calculateConsolidation = () => {
    const validDebts = debts.filter((debt) => debt.balance > 0 && debt.interestRate > 0);
    if (validDebts.length === 0) {
      setResults(null);
      return;
    }
    const rate = parseFloat(consolidationRate) / 100 || 0;
    const months = parseInt(consolidationTerm) || 0;
    const currentTotalBalance = validDebts.reduce((sum, debt) => sum + debt.balance, 0);
    const currentTotalMinimumPayments = validDebts.reduce((sum, debt) => sum + debt.minimumPayment, 0);
    const totalInterestPayments = validDebts.reduce((sum, debt) => sum + debt.balance * debt.interestRate / 100, 0);
    const currentWeightedAPR = totalInterestPayments / currentTotalBalance * 100;
    const monthlyRate = rate / 12;
    let newMonthlyPayment;
    if (monthlyRate === 0) {
      newMonthlyPayment = currentTotalBalance / months;
    } else {
      newMonthlyPayment = currentTotalBalance * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    }
    const newTotalPayment = newMonthlyPayment * months;
    const newTotalInterest = newTotalPayment - currentTotalBalance;
    let currentTotalPaid = 0;
    validDebts.forEach((debt) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Debt Consolidation Calculator",
      description: "Compare debt consolidation options and calculate potential savings from combining multiple debts into one loan.",
      keywords: "debt consolidation calculator, debt payoff, personal loan, credit card debt",
      tips,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-5 w-5" }),
              "Current Debts"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter your existing debts and consolidation loan details" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
            debts.map((debt, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: debt.name,
                    onChange: (e) => updateDebt(debt.id, "name", e.target.value),
                    className: "max-w-[200px]",
                    placeholder: "Debt name"
                  }
                ),
                debts.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: () => removeDebt(debt.id),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Balance" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "number",
                      value: debt.balance || "",
                      onChange: (e) => updateDebt(debt.id, "balance", parseFloat(e.target.value) || 0),
                      placeholder: "0"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Interest Rate (%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "number",
                      step: "0.01",
                      value: debt.interestRate || "",
                      onChange: (e) => updateDebt(debt.id, "interestRate", parseFloat(e.target.value) || 0),
                      placeholder: "0"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Minimum Payment" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "number",
                      value: debt.minimumPayment || "",
                      onChange: (e) => updateDebt(debt.id, "minimumPayment", parseFloat(e.target.value) || 0),
                      placeholder: "0"
                    }
                  )
                ] })
              ] })
            ] }, debt.id)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: addDebt, variant: "outline", className: "w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-2" }),
              "Add Another Debt"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-4 border-t", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Consolidation Interest Rate (%)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    step: "0.01",
                    value: consolidationRate,
                    onChange: (e) => setConsolidationRate(e.target.value),
                    placeholder: "12.5"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Consolidation Loan Term (months)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: consolidationTerm, onValueChange: setConsolidationTerm, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "36", children: "36 months (3 years)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "48", children: "48 months (4 years)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "60", children: "60 months (5 years)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "72", children: "72 months (6 years)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "84", children: "84 months (7 years)" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateConsolidation, className: "w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-4 w-4 mr-2" }),
              "Calculate Consolidation"
            ] })
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-5 w-5" }),
              "Consolidation Analysis"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Compare your current situation with consolidation" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-blue-50 dark:bg-blue-950 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-blue-600 dark:text-blue-400 mb-1", children: "Current Situation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-blue-900 dark:text-blue-100", children: [
                formatCurrency(results.currentTotalMinimumPayments),
                "/mo"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-blue-600 dark:text-blue-400 mt-1", children: [
                "Weighted APR: ",
                formatPercentage(results.currentWeightedAPR)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-green-50 dark:bg-green-950 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-green-600 dark:text-green-400 mb-1", children: "After Consolidation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-green-900 dark:text-green-100", children: [
                formatCurrency(results.newMonthlyPayment),
                "/mo"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-green-600 dark:text-green-400 mt-1", children: [
                "APR: ",
                formatPercentage(parseFloat(consolidationRate))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-lg ${results.isWorthwhile ? "bg-green-50 dark:bg-green-950" : "bg-red-50 dark:bg-red-950"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm mb-1 ${results.isWorthwhile ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`, children: "Monthly Savings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-2xl font-bold ${results.isWorthwhile ? "text-green-900 dark:text-green-100" : "text-red-900 dark:text-red-100"}`, children: formatCurrency(Math.abs(results.monthlySavings)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-sm mt-1 ${results.isWorthwhile ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`, children: [
                "Total Savings: ",
                formatCurrency(Math.abs(results.totalSavings))
              ] })
            ] }),
            !results.isWorthwhile && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-2", children: "Consolidation May Not Be Beneficial" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-yellow-700 dark:text-yellow-300", children: "Based on the rates provided, consolidation would not save you money. Consider negotiating for a lower rate or exploring other debt reduction strategies." })
            ] })
          ] }) })
        ] })
      ] })
    }
  );
}
export {
  DebtConsolidationCalculatorUS
};
