import { ae as useFormatting, r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, k as CardContent, a4 as Label, V as Input, q as TriangleAlert, T as TrendingUp, D as DollarSign, a5 as Info } from "./index-CK9G4vW7.js";
import { S as Separator } from "./separator-63Q9JacM.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { A as AIAnalysis } from "./AIAnalysis-B-4zh-eH.js";
import { A as AutoAdSlot } from "./AutoAdSlot-DNRO9HTk.js";
import { A as AmazonAffiliate } from "./AmazonAffiliate-Ce911NQ8.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { W as Wallet } from "./wallet-DxIJPdsI.js";
import { Z as Zap } from "./zap-BEhI-iJb.js";
import { T as Target } from "./target-4JeIm6Yk.js";
import { C as Calendar } from "./calendar-DlIzODy7.js";
import { A as Award } from "./award-Bl7Nn9A9.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
import "./EnhancedAIAnalysis-BaYCd8m5.js";
import "./brain-CSngUEN8.js";
import "./circle-check-big-B8N3lfE-.js";
import "./arrow-right-Bjdtr8dz.js";
import "./lightbulb-DKPyzLdJ.js";
import "./tabs-t5L32f7o.js";
import "./share-2-SpOWc355.js";
import "./link-C11IgQ5M.js";
import "./copy-BqV-1o4k.js";
import "./twitter-CFAqYlq6.js";
import "./facebook-BX8Qa6cK.js";
import "./linkedin-D9e3uSZB.js";
import "./message-circle-DZtFORhh.js";
import "./mail-DX6y6Mo7.js";
function CreditCardPayoffCalculator() {
  const { formatCurrency, getCurrencySymbol } = useFormatting();
  const [balance, setBalance] = reactExports.useState("");
  const [apr, setApr] = reactExports.useState("");
  const [monthlyPayment, setMonthlyPayment] = reactExports.useState("");
  const [extraPayment, setExtraPayment] = reactExports.useState("");
  const [result, setResult] = reactExports.useState({
    monthsToPayoff: 0,
    yearsToPayoff: 0,
    totalInterest: 0,
    totalPayment: 0,
    monthlyInterestPayment: 0,
    minimumPayment: 0,
    isValid: false,
    payoffDate: /* @__PURE__ */ new Date()
  });
  const [comparison, setComparison] = reactExports.useState(null);
  const calculatePayoff = (currentBalance, annualRate, payment, includeSchedule = false) => {
    const monthlyRate = annualRate / 100 / 12;
    const minPayment = Math.max(currentBalance * 0.02, currentBalance * monthlyRate + 15);
    if (payment <= monthlyRate * currentBalance) {
      return {
        monthsToPayoff: 0,
        yearsToPayoff: 0,
        totalInterest: 0,
        totalPayment: 0,
        monthlyInterestPayment: monthlyRate * currentBalance,
        minimumPayment: minPayment,
        isValid: false,
        payoffDate: /* @__PURE__ */ new Date()
      };
    }
    let remainingBalance = currentBalance;
    let months = 0;
    let totalInterestPaid = 0;
    const schedule = [];
    while (remainingBalance > 0.01 && months < 600) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = Math.min(payment - interestPayment, remainingBalance);
      totalInterestPaid += interestPayment;
      remainingBalance -= principalPayment;
      months++;
      if (includeSchedule && (months <= 12 || months % 12 === 0 || remainingBalance <= 0.01)) {
        schedule.push({
          month: months,
          payment: interestPayment + principalPayment,
          principal: principalPayment,
          interest: interestPayment,
          remainingBalance: Math.max(0, remainingBalance)
        });
      }
    }
    const payoffDate = /* @__PURE__ */ new Date();
    payoffDate.setMonth(payoffDate.getMonth() + months);
    return {
      monthsToPayoff: months,
      yearsToPayoff: months / 12,
      totalInterest: totalInterestPaid,
      totalPayment: currentBalance + totalInterestPaid,
      monthlyInterestPayment: monthlyRate * currentBalance,
      minimumPayment: minPayment,
      isValid: true,
      payoffDate,
      amortizationSchedule: includeSchedule ? schedule : void 0
    };
  };
  reactExports.useEffect(() => {
    const b = parseFloat(balance);
    const a = parseFloat(apr);
    const p = parseFloat(monthlyPayment);
    const extra = parseFloat(extraPayment) || 0;
    if (b > 0 && a >= 0 && p > 0) {
      const mainResult = calculatePayoff(b, a, p, true);
      setResult(mainResult);
      if (extra > 0 && mainResult.isValid) {
        const minimumResult = calculatePayoff(b, a, mainResult.minimumPayment);
        const extraResult = calculatePayoff(b, a, p + extra);
        setComparison({
          minimumPayment: minimumResult,
          extraPayment: extraResult,
          interestSaved: minimumResult.totalInterest - extraResult.totalInterest,
          timeSaved: minimumResult.monthsToPayoff - extraResult.monthsToPayoff
        });
      } else {
        setComparison(null);
      }
    } else {
      setResult({
        monthsToPayoff: 0,
        yearsToPayoff: 0,
        totalInterest: 0,
        totalPayment: 0,
        monthlyInterestPayment: 0,
        minimumPayment: 0,
        isValid: false,
        payoffDate: /* @__PURE__ */ new Date()
      });
      setComparison(null);
    }
  }, [balance, apr, monthlyPayment, extraPayment]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Credit Card Payoff Calculator | Debt Payoff Calculator & Interest Calculator",
      description: "Calculate exactly how long it takes to pay off credit card debt with our comprehensive payoff calculator. Compare payment strategies, see interest costs, and find the fastest way to become debt-free.",
      keywords: "credit card payoff calculator, debt payoff calculator, credit card interest calculator, debt elimination, minimum payment calculator, credit card debt calculator",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-primary/20 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2 text-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-primary/10 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-6 w-6 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "Credit Card Payoff Calculator" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "bg-white/50 dark:bg-gray-900/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3 mr-1" }),
                "Advanced Analytics"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Calculate your debt payoff timeline and discover how much you can save" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "balance", children: [
                  "Current Balance (",
                  getCurrencySymbol(),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "balance",
                    type: "number",
                    placeholder: "5000",
                    value: balance,
                    onChange: (e) => setBalance(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "apr", children: "Annual Interest Rate (%)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "apr",
                    type: "number",
                    step: "0.01",
                    placeholder: "18.99",
                    value: apr,
                    onChange: (e) => setApr(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "monthlyPayment", children: [
                  "Monthly Payment (",
                  getCurrencySymbol(),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "monthlyPayment",
                    type: "number",
                    placeholder: "200",
                    value: monthlyPayment,
                    onChange: (e) => setMonthlyPayment(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "extraPayment", children: [
                  "Extra Payment (",
                  getCurrencySymbol(),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "extraPayment",
                    type: "number",
                    placeholder: "50",
                    value: extraPayment,
                    onChange: (e) => setExtraPayment(e.target.value)
                  }
                )
              ] })
            ] }),
            result.isValid && result.minimumPayment > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-yellow-100 dark:bg-yellow-900 rounded", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-yellow-600 dark:text-yellow-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-yellow-900 dark:text-yellow-100", children: [
                  "Estimated Minimum Payment: ",
                  formatCurrency(result.minimumPayment)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-yellow-700 dark:text-yellow-300 mt-2 ml-8", children: "Make sure your payment is above the minimum to make progress on your debt." })
            ] })
          ] })
        ] }),
        result.isValid && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIAnalysis,
            {
              analysisRequest: {
                calculatorType: "credit-card-payoff",
                data: {
                  balance: parseFloat(balance) || 0,
                  apr: parseFloat(apr) || 0,
                  minimumPayment: result.minimumPayment,
                  paymentAmount: parseFloat(monthlyPayment) || 0,
                  timeToPayoff: result.monthsToPayoff,
                  totalInterest: result.totalInterest,
                  totalPayment: result.totalPayment
                }
              },
              autoRun: true,
              title: "AI Debt Payoff Analysis",
              description: "Get personalized strategies to accelerate your debt payoff and save on interest charges."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "credit-card-payoff",
              inputs: {
                balance: parseFloat(balance) || 0,
                apr: parseFloat(apr) || 0,
                monthlyPayment: parseFloat(monthlyPayment) || 0
              },
              results: {
                minimumPayment: result.minimumPayment,
                monthsToPayoff: result.monthsToPayoff,
                yearsToPayoff: result.yearsToPayoff,
                totalInterest: result.totalInterest,
                totalPayment: result.totalPayment
              },
              title: "Credit Card Payoff Calculator Report"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-purple-950/30 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5 text-blue-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Payoff Timeline & Cost Analysis" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 rounded-lg bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm border border-blue-100 dark:border-blue-900", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900 rounded-full mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-5 w-5 text-blue-600 dark:text-blue-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent", children: result.monthsToPayoff }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-blue-700 dark:text-blue-300", children: [
                  result.yearsToPayoff.toFixed(1),
                  " years"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Payoff Duration" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 rounded-lg bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm border border-red-100 dark:border-red-900", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center p-2 bg-red-100 dark:bg-red-900 rounded-full mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-red-600 dark:text-red-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent", children: formatCurrency(result.totalInterest) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3", children: "Total Interest Paid" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 rounded-lg bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm border border-purple-100 dark:border-purple-900", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center p-2 bg-purple-100 dark:bg-purple-900 rounded-full mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-5 w-5 text-purple-600 dark:text-purple-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent", children: formatCurrency(result.totalPayment) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3", children: "Total Amount Paid" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 rounded-lg bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm border border-green-100 dark:border-green-900", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center p-2 bg-green-100 dark:bg-green-900 rounded-full mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5 text-green-600 dark:text-green-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-green-700 dark:text-green-300", children: result.payoffDate.toLocaleDateString("en-US", { month: "short", year: "numeric" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3", children: "Debt-Free Date" })
              ] })
            ] }) })
          ] }),
          comparison && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-green-100 dark:bg-green-900 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-5 w-5 text-green-600 dark:text-green-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent", children: "Payment Strategy Comparison" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "See how extra payments accelerate your debt-free journey" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-xl border-2 border-red-200 dark:border-red-800 shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center p-2 bg-red-100 dark:bg-red-900 rounded-full mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-red-600 dark:text-red-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-red-800 dark:text-red-300 mb-4 text-lg", children: "Minimum Payment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-red-700 dark:text-red-300", children: comparison.minimumPayment.monthsToPayoff }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Months to Payoff" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-red-600 dark:text-red-400", children: formatCurrency(comparison.minimumPayment.totalInterest) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Total Interest" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 rounded-xl border-2 border-green-200 dark:border-green-800 shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center p-2 bg-green-100 dark:bg-green-900 rounded-full mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5 text-green-600 dark:text-green-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-green-800 dark:text-green-300 mb-4 text-lg", children: "With Extra Payment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-green-700 dark:text-green-300", children: comparison.extraPayment.monthsToPayoff }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Months to Payoff" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-green-600 dark:text-green-400", children: formatCurrency(comparison.extraPayment.totalInterest) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Total Interest" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl border-2 border-blue-200 dark:border-blue-800 shadow-md relative overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 -mt-2 -mr-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0", children: "💰 Savings" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900 rounded-full mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5 text-blue-600 dark:text-blue-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-blue-800 dark:text-blue-300 mb-4 text-lg", children: "Your Savings" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-700 dark:text-blue-300", children: comparison.timeSaved }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Months Saved" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent", children: formatCurrency(comparison.interestSaved) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Interest Saved" })
                  ] })
                ] })
              ] })
            ] }) })
          ] }),
          result.amortizationSchedule && result.amortizationSchedule.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-5 w-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Payment Schedule Preview" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Key milestones in your payoff journey" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b bg-muted/50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-semibold", children: "Month" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3 font-semibold", children: "Payment" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3 font-semibold", children: "Principal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3 font-semibold", children: "Interest" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3 font-semibold", children: "Balance" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: result.amortizationSchedule.map((entry, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b hover:bg-muted/30 transition-colors", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-medium", children: entry.month }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right p-3", children: formatCurrency(entry.payment) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right p-3 text-green-600 dark:text-green-400", children: formatCurrency(entry.principal) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right p-3 text-red-600 dark:text-red-400", children: formatCurrency(entry.interest) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right p-3 font-semibold", children: formatCurrency(entry.remainingBalance) })
                ] }, index)) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-4 text-center", children: "Showing first year and annual milestones" })
            ] })
          ] })
        ] }),
        !result.isValid && parseFloat(balance) > 0 && parseFloat(apr) > 0 && parseFloat(monthlyPayment) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-red-200 bg-red-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-red-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Payment too low to make progress" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-red-600 text-sm mt-2", children: [
            "Your monthly payment must be higher than the monthly interest charge (",
            formatCurrency(result.monthlyInterestPayment),
            ") to reduce your balance."
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { position: "middle" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-100 dark:border-purple-900 bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-purple-950/20 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "border-b border-purple-100 dark:border-purple-900 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2 text-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent", children: "Complete Guide to Credit Card Debt Payoff Strategies" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Master proven strategies to eliminate credit card debt and save thousands" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-foreground/80 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Credit card debt can be one of the most expensive forms of consumer debt, with interest rates often ranging from 15% to 25% or higher. Understanding how credit card interest works and developing an effective payoff strategy is crucial for your financial health. This comprehensive guide explains everything you need to know about paying off credit card debt efficiently, saving money on interest, and regaining control of your finances." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-lg mt-6 mb-4 flex items-center space-x-2 text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 bg-purple-500 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "How Credit Card Interest Really Works" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Credit card interest is calculated using your Average Daily Balance (ADB) method, which means interest accrues daily based on your outstanding balance. When you see an APR (Annual Percentage Rate) of 18%, this translates to a daily rate of approximately 0.049% (18% ÷ 365 days). This daily compounding effect means that carrying a balance becomes increasingly expensive over time, especially if you're only making minimum payments." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-lg mt-6 mb-4 flex items-center space-x-2 text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 bg-purple-500 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "The Minimum Payment Trap" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Credit card minimum payments are typically calculated as 2-3% of your outstanding balance or a flat fee (whichever is higher), plus any fees and interest charges. While minimum payments keep your account current, they're designed to keep you in debt longer. For example, a $5,000 balance at 18% APR with minimum payments would take over 25 years to pay off and cost more than $9,000 in interest alone." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 p-5 rounded-xl border-l-4 border-red-500 mt-4 shadow-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-3 text-red-700 dark:text-red-300 flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Minimum Payment Reality Check:" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• $5,000 balance at 18% APR" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Minimum payment: ~$100/month" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Time to payoff: 25+ years" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Total interest paid: $9,000+" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Total amount paid: $14,000+" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-lg mt-6 mb-4 flex items-center space-x-2 text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 bg-purple-500 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Debt Avalanche vs. Debt Snowball Methods" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Two popular debt repayment strategies can help you become debt-free faster. The Debt Avalanche method focuses on paying off debts with the highest interest rates first, minimizing total interest paid. The Debt Snowball method targets the smallest balances first, providing psychological wins that help maintain motivation. While the avalanche method saves more money mathematically, the snowball method often has higher success rates due to its motivational benefits." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-lg mt-6 mb-4 flex items-center space-x-2 text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 bg-purple-500 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "The Power of Extra Payments" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Even small additional payments can dramatically reduce your payoff time and interest costs. Adding just $25 extra per month to a $5,000 balance at 18% APR reduces payoff time from 25 years to under 13 years and saves over $6,000 in interest. This happens because extra payments go directly toward reducing the principal balance, decreasing the amount on which future interest is calculated." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-lg mt-6 mb-4 flex items-center space-x-2 text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 bg-purple-500 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Balance Transfer Strategies" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Balance transfers can be powerful tools for debt payoff when used correctly. Many credit cards offer promotional 0% APR periods ranging from 12-21 months on balance transfers. Transferring high-interest debt to a 0% card allows all payments to go toward principal reduction. However, balance transfer fees (typically 3-5%) and the temporary nature of promotional rates require careful planning and discipline to maximize benefits." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-lg mt-6 mb-4 flex items-center space-x-2 text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 bg-purple-500 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Personal Loan Consolidation" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Personal loans often offer lower interest rates than credit cards, making them viable for debt consolidation. Fixed-rate personal loans provide predictable monthly payments and definite payoff dates, unlike revolving credit card debt. However, qualification depends on credit score and income, and consolidation only works if you avoid accumulating new credit card debt after paying off the cards." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AmazonAffiliate,
            {
              calculatorTitle: "Credit Card Payoff Calculator",
              placement: "content"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-blue-100 dark:border-blue-900 bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "border-b border-blue-100 dark:border-blue-900 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2 text-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent", children: "Advanced Debt Payoff Strategies" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Expert tactics to accelerate your journey to financial freedom" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-foreground/80 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center space-x-2 text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 bg-blue-500 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Strategic Payment Timing" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Understanding when to make payments can save money on interest charges. Making payments before your statement closing date reduces your Average Daily Balance, lowering interest charges. Some cardholders make multiple payments throughout the month to keep balances low. Additionally, making payments immediately after purchases can prevent interest from accruing if you typically carry a balance." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center space-x-2 text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 bg-blue-500 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "The Grace Period Strategy" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Most credit cards offer a grace period of 21-25 days during which no interest is charged on new purchases, provided you pay the full statement balance by the due date. Once you carry a balance, you lose this grace period and interest begins accruing immediately on new purchases. Restoring the grace period requires paying off the entire balance, making it crucial to avoid new purchases while paying down debt." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center space-x-2 text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 bg-blue-500 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Negotiating with Credit Card Companies" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Many credit card companies are willing to work with customers facing financial hardship. Options may include temporary payment reductions, interest rate decreases, or structured payment plans. Hardship programs can provide breathing room, but they may impact your credit score. Always get agreements in writing and understand the long-term implications before accepting any modified payment arrangements." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-5 rounded-xl border-l-4 border-blue-500 shadow-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-3 text-blue-700 dark:text-blue-300 flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Negotiation Tips:" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Call the retention department, not general customer service" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Be honest about your financial situation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Have a specific proposal ready (payment amount, timeline)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Document all agreements in writing" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider the credit score impact of hardship programs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Explore temporary vs. permanent modifications" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center space-x-2 text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 bg-blue-500 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Windfall Application Strategy" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tax refunds, bonuses, gifts, and other windfalls present opportunities to make significant progress on debt. Applying windfalls to high-interest debt typically provides better returns than most investments. Even partial allocation (like 50% to debt, 50% to emergency fund) can accelerate progress while building financial security. Plan ahead for expected windfalls to avoid the temptation to spend them on non-essential items." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center space-x-2 text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 bg-blue-500 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Side Income for Debt Payment" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Generating additional income specifically for debt payoff can dramatically accelerate progress. Popular options include freelancing, rideshare driving, selling unused items, or taking on part-time work. The key is directing 100% of side income toward debt rather than lifestyle inflation. Even earning an extra $200 monthly can cut years off your payoff timeline and save thousands in interest." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center space-x-2 text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 bg-blue-500 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Budgeting for Debt Freedom" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Successful debt payoff requires a sustainable budget that allocates maximum dollars to debt payments while maintaining basic living expenses. The 50/30/20 rule (50% needs, 30% wants, 20% savings/debt) may need adjustment during debt payoff, perhaps shifting to 50/20/30 or even 50/10/40 for aggressive payoff. Zero-based budgeting ensures every dollar has a purpose and maximizes debt payments." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center space-x-2 text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 bg-blue-500 rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Building Emergency Funds While Paying Debt" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The debate between building emergency funds versus paying off debt depends on individual circumstances. A small emergency fund ($500-1,000) can prevent new debt accumulation when unexpected expenses arise. For high-interest debt (above 15% APR), prioritizing debt payoff often makes mathematical sense. However, having some emergency cushion provides peace of mind and prevents debt payoff setbacks from emergencies." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { position: "bottom" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-100 dark:border-green-900 bg-gradient-to-br from-white to-green-50/30 dark:from-gray-900 dark:to-green-950/20 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "border-b border-green-100 dark:border-green-900 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2 text-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent", children: "Frequently Asked Questions" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Get answers to common credit card debt payoff questions" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground/80 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border-l-4 border-green-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-foreground mb-3 flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 bg-green-500 rounded-full" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Should I pay off credit cards or build savings first?" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Generally, pay off high-interest debt (above 10% APR) before building large savings, but maintain a small emergency fund ($500-1,000) to avoid creating new debt. High-interest debt elimination provides guaranteed returns equal to the interest rate, which typically exceeds savings account returns." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border-l-4 border-blue-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-foreground mb-3 flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 bg-blue-500 rounded-full" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Will paying off credit cards improve my credit score?" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Yes, paying down credit card balances reduces your credit utilization ratio, which is 30% of your credit score. Aim to keep utilization below 30% across all cards, with below 10% being optimal. Pay balances before statement closing dates for maximum impact on reported utilization." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border-l-4 border-purple-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-foreground mb-3 flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 bg-purple-500 rounded-full" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Should I close credit cards after paying them off?" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Generally no, unless there's an annual fee you can't justify. Keeping cards open maintains your credit history length and available credit, both positive for your credit score. Use them occasionally for small purchases and pay in full to keep accounts active." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg border-l-4 border-orange-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-foreground mb-3 flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 bg-orange-500 rounded-full" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Is it better to pay off cards with highest balance or highest interest rate?" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Mathematically, paying off highest interest rate debt first (debt avalanche) saves the most money. However, paying smallest balances first (debt snowball) can provide psychological wins that help maintain motivation. Choose the method you're most likely to stick with long-term." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-yellow-50/50 to-orange-50/50 dark:from-yellow-950/20 dark:to-orange-950/20 rounded-lg border-l-4 border-yellow-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-foreground mb-3 flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 bg-yellow-500 rounded-full" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Can I negotiate a lower interest rate on my credit cards?" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Yes, many cardholders successfully negotiate lower rates, especially if they have good payment history and credit scores. Call the retention department, mention competing offers, and be prepared to explain why you deserve a rate reduction. Success rates vary but attempts cost nothing." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-teal-50/50 to-cyan-50/50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-lg border-l-4 border-teal-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-foreground mb-3 flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 bg-teal-500 rounded-full" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "How accurate is this credit card payoff calculator?" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This calculator provides accurate estimates based on fixed payment amounts and interest rates. Actual results may vary due to rate changes, fees, additional purchases, or payment timing. Use it as a planning tool and adjust strategies as circumstances change." })
              ] })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-950/50 dark:to-yellow-950/50 border-b border-amber-200 dark:border-amber-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-amber-500 rounded-lg shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent text-xl", children: "Important Information & Disclaimer" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3 pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-foreground/70 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator provides estimates only and should not be relied upon for final financial decisions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Actual results may vary due to interest rate changes, fees, additional purchases, or payment timing." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Credit card terms vary significantly - always review your specific card agreement." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Consider consulting with a financial advisor for personalized debt management strategies." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator assumes fixed interest rates and payment amounts throughout the payoff period." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Additional fees, penalties, or rate changes can significantly impact actual payoff timeline and costs." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Results don't account for tax implications of debt payoff strategies or opportunity costs." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Balance transfer and personal loan options require qualification and may have associated costs." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Always review the fine print of any debt management or consolidation offers." })
          ] }) })
        ] })
      ] })
    }
  );
}
export {
  CreditCardPayoffCalculator as default
};
