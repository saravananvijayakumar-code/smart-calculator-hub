import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, l as House, i as CardDescription, k as CardContent, a4 as Label, D as DollarSign, V as Input, C as Calculator, B as Button, aE as formatCurrency, q as TriangleAlert, T as TrendingUp, c as Shield } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-t5L32f7o.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { C as Calendar } from "./calendar-DlIzODy7.js";
import { C as CircleCheckBig } from "./circle-check-big-B8N3lfE-.js";
import { B as BookOpen } from "./book-open-BOdZdTJO.js";
import { T as Target } from "./target-4JeIm6Yk.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./check-DTsA1WpX.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
import "./EnhancedAIAnalysis-BaYCd8m5.js";
import "./badge-6THgoC_4.js";
import "./brain-CSngUEN8.js";
import "./arrow-right-Bjdtr8dz.js";
import "./lightbulb-DKPyzLdJ.js";
import "./share-2-SpOWc355.js";
import "./link-C11IgQ5M.js";
import "./copy-BqV-1o4k.js";
import "./twitter-CFAqYlq6.js";
import "./facebook-BX8Qa6cK.js";
import "./linkedin-D9e3uSZB.js";
import "./message-circle-DZtFORhh.js";
import "./mail-DX6y6Mo7.js";
function HELOCCalculatorUS() {
  const [homeValue, setHomeValue] = reactExports.useState("400000");
  const [mortgageBalance, setMortgageBalance] = reactExports.useState("250000");
  const [creditLinePercentage, setCreditLinePercentage] = reactExports.useState("80");
  const [interestRate, setInterestRate] = reactExports.useState("7.5");
  const [drawPeriod, setDrawPeriod] = reactExports.useState("10");
  const [repaymentPeriod, setRepaymentPeriod] = reactExports.useState("15");
  const [drawAmount, setDrawAmount] = reactExports.useState("50000");
  const [results, setResults] = reactExports.useState(null);
  const calculateHELOC = () => {
    const value = parseFloat(homeValue) || 0;
    const mortgage = parseFloat(mortgageBalance) || 0;
    const creditPercent = parseFloat(creditLinePercentage) / 100 || 0;
    const rate = parseFloat(interestRate) / 100 || 0;
    const drawYears = parseInt(drawPeriod) || 0;
    const repayYears = parseInt(repaymentPeriod) || 0;
    const draw = parseFloat(drawAmount) || 0;
    if (value <= 0 || mortgage < 0 || rate < 0) {
      setResults(null);
      return;
    }
    const availableEquity = Math.max(0, value - mortgage);
    const maxCreditLine = Math.max(0, value * creditPercent - mortgage);
    const actualCreditLine = Math.min(maxCreditLine, availableEquity);
    const loanToValueRatio = (mortgage + draw) / value * 100;
    const monthlyRate = rate / 12;
    const monthlyInterestOnly = draw * monthlyRate;
    const repaymentMonths = repayYears * 12;
    let monthlyPrincipalAndInterest = 0;
    if (repaymentMonths > 0 && rate > 0) {
      monthlyPrincipalAndInterest = draw * monthlyRate * Math.pow(1 + monthlyRate, repaymentMonths) / (Math.pow(1 + monthlyRate, repaymentMonths) - 1);
    } else if (repaymentMonths > 0) {
      monthlyPrincipalAndInterest = draw / repaymentMonths;
    }
    const totalInterestDrawPeriod = monthlyInterestOnly * drawYears * 12;
    const totalPaymentRepaymentPeriod = monthlyPrincipalAndInterest * repaymentMonths;
    setResults({
      maxCreditLine: actualCreditLine,
      availableEquity,
      monthlyInterestOnly,
      monthlyPrincipalAndInterest,
      totalInterestDrawPeriod,
      totalPaymentRepaymentPeriod,
      loanToValueRatio
    });
  };
  const tips = [
    "HELOCs typically have variable interest rates that can change monthly",
    "Draw period usually allows interest-only payments for flexibility",
    "Consider market conditions and Federal Reserve policy when timing applications",
    "Home equity loans offer fixed rates vs HELOC variable rates",
    "Use responsibly - your home is collateral for the entire credit line"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "HELOC Calculator (Home Equity Line of Credit) - Calculate Credit Lines & Payments",
      description: "Free HELOC calculator to determine your available credit line, monthly payments, and total costs. Learn how Home Equity Lines of Credit work with comprehensive analysis and expert guidance.",
      keywords: "HELOC calculator, home equity line of credit, home equity calculator, second mortgage, variable rate loan, credit line calculator, home equity loan vs HELOC",
      tips,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-5 w-5" }),
                  "Home Equity Details"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter your home and loan information for comprehensive HELOC analysis" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "homeValue", children: "Current Home Value" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "homeValue",
                        type: "number",
                        placeholder: "400000",
                        value: homeValue,
                        onChange: (e) => setHomeValue(e.target.value),
                        className: "pl-10"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Use current market value, not purchase price" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "mortgageBalance", children: "Current Mortgage Balance" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "mortgageBalance",
                        type: "number",
                        placeholder: "250000",
                        value: mortgageBalance,
                        onChange: (e) => setMortgageBalance(e.target.value),
                        className: "pl-10"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Outstanding balance on all existing mortgages" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "creditLinePercentage", children: "Max Credit Line (% of Home Value)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: creditLinePercentage, onValueChange: setCreditLinePercentage, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "75", children: "75% - Conservative" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "80", children: "80% - Standard" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "85", children: "85% - Higher Risk" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "90", children: "90% - Maximum" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Combined loan-to-value ratio limit set by lender" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "interestRate", children: "Interest Rate (APR)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "interestRate",
                        type: "number",
                        step: "0.1",
                        placeholder: "7.5",
                        value: interestRate,
                        onChange: (e) => setInterestRate(e.target.value),
                        className: "pl-10"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Variable rate - typically Prime Rate + margin" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "drawPeriod", children: "Draw Period" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: drawPeriod, onValueChange: setDrawPeriod, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "5", children: "5 years" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "10", children: "10 years (Standard)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "15", children: "15 years" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Period when you can draw funds and pay interest-only" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "repaymentPeriod", children: "Repayment Period" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: repaymentPeriod, onValueChange: setRepaymentPeriod, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "10", children: "10 years" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "15", children: "15 years (Standard)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "20", children: "20 years" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Period to repay principal and interest after draw period" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "drawAmount", children: "Amount to Draw" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "drawAmount",
                        type: "number",
                        placeholder: "50000",
                        value: drawAmount,
                        onChange: (e) => setDrawAmount(e.target.value),
                        className: "pl-10"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Amount you plan to borrow for payment calculations" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateHELOC, className: "w-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "mr-2 h-4 w-4" }),
                  "Calculate HELOC"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "HELOC Analysis Results" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Your home equity credit line capacity and payment breakdown" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: results ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600", children: formatCurrency(results.maxCreditLine) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Max Credit Line Available" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-green-600", children: formatCurrency(results.availableEquity) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Total Home Equity" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }),
                    "Payment Schedule:"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 dark:bg-gray-900 p-4 rounded-lg space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Draw Period Payment (Interest Only):" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-blue-600", children: [
                        formatCurrency(results.monthlyInterestOnly),
                        "/month"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Repayment Period Payment (P&I):" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-orange-600", children: [
                        formatCurrency(results.monthlyPrincipalAndInterest),
                        "/month"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Interest During Draw Period:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: formatCurrency(results.totalInterestDrawPeriod) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Combined Loan-to-Value (LTV):" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                        results.loanToValueRatio.toFixed(1),
                        "%"
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-lg ${results.loanToValueRatio <= 80 ? "bg-green-50 dark:bg-green-950" : results.loanToValueRatio <= 90 ? "bg-yellow-50 dark:bg-yellow-950" : "bg-red-50 dark:bg-red-950"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: `font-semibold mb-2 flex items-center gap-2 ${results.loanToValueRatio <= 80 ? "text-green-800 dark:text-green-200" : results.loanToValueRatio <= 90 ? "text-yellow-800 dark:text-yellow-200" : "text-red-800 dark:text-red-200"}`, children: [
                    results.loanToValueRatio <= 80 ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
                    "Risk Assessment"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-sm ${results.loanToValueRatio <= 80 ? "text-green-700 dark:text-green-300" : results.loanToValueRatio <= 90 ? "text-yellow-700 dark:text-yellow-300" : "text-red-700 dark:text-red-300"}`, children: [
                    results.loanToValueRatio <= 80 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Excellent LTV ratio. You have substantial equity cushion and should qualify for the best rates." }),
                    results.loanToValueRatio > 80 && results.loanToValueRatio <= 90 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Moderate LTV ratio. You may face slightly higher rates and stricter qualification requirements." }),
                    results.loanToValueRatio > 90 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "High LTV ratio. Limited lender options and significantly higher rates. Consider building more equity first." })
                  ] })
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-muted-foreground py-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Enter your home equity details to see comprehensive HELOC analysis" })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5" }),
                "Complete Guide to Home Equity Lines of Credit (HELOC)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Everything you need to know about HELOCs, from basics to advanced strategies" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "basics", className: "w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "basics", children: "HELOC Basics" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "how-it-works", children: "How It Works" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "pros-cons", children: "Pros & Cons" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "qualification", children: "Qualification" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "strategies", children: "Smart Uses" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "basics", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose max-w-none dark:prose-invert", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: "What is a Home Equity Line of Credit (HELOC)?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: `A Home Equity Line of Credit (HELOC) is a revolving credit line secured by your home's equity. Unlike a traditional loan where you receive a lump sum, a HELOC works more like a credit card – you have access to a predetermined credit limit and can borrow against it as needed during the "draw period."` }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-blue-800 dark:text-blue-200 mb-2", children: "Key HELOC Features:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-blue-700 dark:text-blue-300", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Variable Interest Rate:" }),
                      " Rates typically adjust monthly based on the Prime Rate plus a margin"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Two-Phase Structure:" }),
                      " Draw period (borrow and pay interest) followed by repayment period (pay principal + interest)"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Revolving Credit:" }),
                      " Pay down the balance and borrow again during the draw period"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Home as Collateral:" }),
                      " Your home secures the entire credit line, enabling lower rates but creating foreclosure risk"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mb-3", children: "HELOC vs. Home Equity Loan: Key Differences" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-green-600 mb-2", children: "HELOC Advantages" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Flexibility to borrow as needed" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Interest-only payments during draw period" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Only pay interest on amount used" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Can reborrow during draw period" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Lower initial payments" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-blue-600 mb-2", children: "Home Equity Loan Advantages" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Fixed interest rate and payments" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Predictable payment schedule" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Protection from rate increases" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Structured repayment plan" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Better for large, one-time expenses" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mb-3", children: "How Equity is Calculated" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Your home equity is the difference between your home's current market value and the total amount you owe on all mortgages. For example, if your home is worth $400,000 and you owe $250,000 on your mortgage, you have $150,000 in equity." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 dark:bg-gray-900 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Formula:" }),
                    " Home Equity = Current Home Value - Outstanding Mortgage Balance(s)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Available Credit:" }),
                    " Most lenders allow you to borrow up to 80-90% of your home's value, minus existing mortgage balances."
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "how-it-works", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose max-w-none dark:prose-invert", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: "How Does a HELOC Work?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-blue-500 pl-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-blue-600 mb-2", children: "Phase 1: Draw Period (Typically 10 Years)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3", children: "During the draw period, you can access your credit line as needed, similar to using a credit card. You typically only pay interest on the amount you've borrowed, making monthly payments relatively low and manageable." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Access Methods:" }),
                        " Checks, debit card, online transfers, or branch visits"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Payment Requirements:" }),
                        " Usually interest-only minimum payments"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Borrowing Flexibility:" }),
                        " Borrow, repay, and borrow again up to your credit limit"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Rate Adjustments:" }),
                        " Variable rates typically adjust monthly with market conditions"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-orange-500 pl-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-orange-600 mb-2", children: "Phase 2: Repayment Period (Typically 15-20 Years)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3", children: "Once the draw period ends, you enter the repayment phase. You can no longer access the credit line, and your payments increase significantly as you must now pay both principal and interest to fully repay the outstanding balance." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "No New Borrowing:" }),
                        " Credit line is closed to new advances"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Higher Payments:" }),
                        " Principal + interest payments, typically much higher than draw period"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Payment Shock:" }),
                        " Monthly payments can double or triple from the draw period"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Amortization:" }),
                        " Balance is paid down to zero over the repayment term"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
                      "Payment Shock Example"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-yellow-700 dark:text-yellow-300 text-sm", children: [
                      "A $50,000 HELOC balance at 7.5% interest: ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "• Draw Period: ~$312/month (interest-only) ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "• Repayment Period: ~$465/month (15-year repayment) ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "49% payment increase!" }),
                      " Plan for this transition carefully."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mb-3", children: "Interest Rate Mechanics" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "HELOC rates are typically variable and tied to the Prime Rate, which is influenced by Federal Reserve policy. Your rate equals the Prime Rate plus a margin determined by your creditworthiness, loan-to-value ratio, and lender policies." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold mb-2", children: "Rate Components" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Prime Rate:" }),
                          " Currently around 8.5% (varies)"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Lender Margin:" }),
                          " -0.5% to +3% based on qualifications"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Your Rate:" }),
                          " Prime + Margin"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Rate Caps:" }),
                          " Annual and lifetime maximums"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold mb-2", children: "Rate Factors" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Credit score and history" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Loan-to-value ratio" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Income and debt-to-income ratio" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Relationship with lender" })
                      ] })
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "pros-cons", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose max-w-none dark:prose-invert", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: "HELOC Advantages and Disadvantages" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5" }),
                        "HELOC Advantages"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-green-700 dark:text-green-300 text-sm", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Lower Interest Rates:" }),
                          " Secured by home equity, rates are typically much lower than credit cards or personal loans"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Flexible Access:" }),
                          " Borrow only what you need, when you need it, up to your credit limit"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Interest-Only Payments:" }),
                          " During draw period, you can make minimum interest-only payments"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Revolving Credit:" }),
                          " Pay down balance and reborrow during draw period without reapplying"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Potential Tax Benefits:" }),
                          " Interest may be tax-deductible if used for home improvements (consult tax advisor)"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Large Credit Limits:" }),
                          " Access substantial amounts based on your home equity"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "No Prepayment Penalties:" }),
                          " Most HELOCs allow early payoff without fees"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Rate Transparency:" }),
                          " Variable rates are tied to published indices like Prime Rate"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-blue-800 dark:text-blue-200 mb-2", children: "Best HELOC Uses" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-blue-700 dark:text-blue-300 text-sm", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Home improvements and renovations" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Debt consolidation (high-interest debt)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Education expenses" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Investment property down payments" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Business investments" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Emergency fund backup" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5" }),
                        "HELOC Disadvantages"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-red-700 dark:text-red-300 text-sm", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Variable Interest Rates:" }),
                          " Rates can increase significantly, raising your monthly payments"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Home as Collateral:" }),
                          " Risk of foreclosure if you cannot make payments"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Payment Shock:" }),
                          " Payments can increase dramatically when repayment period begins"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Temptation to Overspend:" }),
                          " Easy access to funds can lead to unnecessary borrowing"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Closing Costs:" }),
                          " Appraisal, origination, and other fees can total $2,000-$5,000"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Draw Period Ends:" }),
                          " Eventually you lose access to the credit line"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Market Risk:" }),
                          " Declining home values could trigger balance acceleration"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Introductory Rate Expiration:" }),
                          " Promotional rates typically increase after initial period"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 dark:bg-orange-950 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-orange-800 dark:text-orange-200 mb-2", children: "Avoid Using HELOCs For" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-orange-700 dark:text-orange-300 text-sm", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Vacations and luxury purchases" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Daily living expenses" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Risky investments or speculation" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Depreciating assets (cars, boats)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Paying off HELOC with another HELOC" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Lifestyle inflation" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Risk Management Strategies" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      "• ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Rate Protection:" }),
                      " Look for HELOCs with rate caps to limit how much your rate can increase"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      "• ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Payment Planning:" }),
                      " Budget for higher payments during the repayment period"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      "• ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Conservative Borrowing:" }),
                      " Don't max out your credit line - keep a cushion"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      "• ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fixed-Rate Option:" }),
                      " Some lenders allow converting variable balances to fixed rates"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      "• ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Emergency Fund:" }),
                      " Maintain separate emergency savings to avoid HELOC dependency"
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "qualification", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose max-w-none dark:prose-invert", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: "HELOC Qualification Requirements" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6", children: "HELOC qualification requirements are generally stricter than first mortgage loans because lenders view them as riskier second liens. Understanding these requirements helps you prepare a stronger application and improves your chances of approval at favorable terms." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-blue-600 mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" }),
                        "Credit Score Requirements"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Excellent (740+):" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-semibold", children: "Best rates, highest limits" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Good (680-739):" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-semibold", children: "Competitive rates, good terms" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Fair (620-679):" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-600 font-semibold", children: "Higher rates, lower limits" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Below 620:" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 font-semibold", children: "Difficult to qualify" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-green-600 mb-3", children: "Income Requirements" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Debt-to-Income Ratio:" }),
                          " Typically max 43-50%"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Stable Income:" }),
                          " 2+ years employment history"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Income Documentation:" }),
                          " W-2s, pay stubs, tax returns"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Self-Employed:" }),
                          " Additional documentation required"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Retirement Income:" }),
                          " Social Security, pensions acceptable"
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-purple-600 mb-3", children: "Loan-to-Value Limits" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Combined LTV ≤ 80%:" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-semibold", children: "Best terms" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Combined LTV 80-85%:" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-semibold", children: "Good terms" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Combined LTV 85-90%:" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-600 font-semibold", children: "Higher rates" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Combined LTV > 90%:" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 font-semibold", children: "Very limited options" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-orange-600 mb-3", children: "Property Requirements" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Property Type:" }),
                          " Primary residence, second homes, investment properties"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Occupancy:" }),
                          " Some lenders prefer owner-occupied"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Property Condition:" }),
                          " Must meet lender standards"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Location:" }),
                          " Must be in lender's service area"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Insurance:" }),
                          " Adequate homeowner's coverage required"
                        ] })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-blue-800 dark:text-blue-200 mb-3", children: "Application Process Timeline" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs", children: "1" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Application Submission:" }),
                          " 1-2 hours"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs", children: "2" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Document Collection:" }),
                          " 2-5 days"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs", children: "3" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Credit Check & Verification:" }),
                          " 1-3 days"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs", children: "4" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Home Appraisal:" }),
                          " 1-2 weeks"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs", children: "5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Underwriting Review:" }),
                          " 1-2 weeks"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs", children: "6" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Final Approval:" }),
                          " 2-5 days"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs", children: "7" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Closing & Access:" }),
                          " 3-5 days"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center font-semibold text-blue-700 dark:text-blue-300 mt-2", children: "Total: 30-45 days typical" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mb-3", children: "Required Documentation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold mb-2", children: "Income Verification" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Last 2 years W-2s" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Recent pay stubs" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Tax returns (if self-employed)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Bank statements" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Asset statements" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold mb-2", children: "Property Information" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Property deed or title" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Current mortgage statements" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Property tax records" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Homeowner's insurance" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• HOA documents (if applicable)" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold mb-2", children: "Personal Financial" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Credit report authorization" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• List of debts and obligations" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Investment account statements" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Retirement account balances" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Other asset documentation" })
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "strategies", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose max-w-none dark:prose-invert", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: "Smart HELOC Strategies and Best Practices" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6", children: "A HELOC can be a powerful financial tool when used strategically. The key is to use it for investments that either appreciate in value, generate income, or improve your financial position. Here are proven strategies and best practices from financial experts." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-green-600 mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-4 w-4" }),
                      "High-Value HELOC Uses"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-green-500 pl-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold", children: "Home Improvements (ROI: 50-80%)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Kitchen remodels, bathroom updates, adding square footage, energy efficiency upgrades. These can increase home value and are potentially tax-deductible." })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-blue-500 pl-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold", children: "Investment Property Down Payment" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Use equity to purchase rental properties that generate positive cash flow. The rental income can help service the HELOC debt." })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-purple-500 pl-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold", children: "High-Interest Debt Consolidation" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Replace credit cards (15-25% APR) with HELOC rates (7-10% APR). Significant interest savings if you don't run up new debt." })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-orange-500 pl-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold", children: "Education Investment" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Fund education that increases earning potential. Often better rates than private student loans, but consider federal options first." })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-red-600 mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4" }),
                      "Risk Management Tactics"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-red-500 pl-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold", children: "Interest Rate Protection" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Look for HELOCs with annual caps (limit yearly increases to 1-2%) and lifetime caps (limit total rate increases to 5-6%)." })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-yellow-500 pl-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold", children: "Payment Shock Preparation" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Calculate repayment period payments before borrowing. Ensure you can afford the higher payments or plan to pay down principal during draw period." })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-indigo-500 pl-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold", children: "Conservative LTV Management" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Keep combined LTV below 80% when possible. This provides equity cushion and access to better rates if you need to refinance." })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-teal-500 pl-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold", children: "Emergency Buffer" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Don't use entire credit line. Keep 20-30% available for true emergencies or opportunities." })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-6 rounded-lg mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-indigo-800 dark:text-indigo-200 mb-4", children: "Advanced Strategy: The HELOC Arbitrage Method" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-indigo-700 dark:text-indigo-300 mb-3 text-sm", children: "This sophisticated strategy involves using HELOC funds to pay down your primary mortgage faster, then drawing on the HELOC again to repeat the process. It works because mortgage interest is typically calculated daily, while HELOC interest is often calculated monthly." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold mb-2", children: "How It Works:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "text-sm space-y-1 list-decimal list-inside", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Draw $10,000 from HELOC and apply to mortgage principal" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Use monthly income to pay living expenses and HELOC interest" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "When funds are needed, draw from HELOC to cover expenses" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Repeat monthly, focusing surplus income on mortgage paydown" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Caution:" }),
                      " This strategy requires discipline and detailed tracking. Market rate changes can eliminate benefits. Consider professional financial advice."
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mb-3", children: "HELOC vs. Other Financing Options" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-100 dark:bg-gray-800", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 p-2 text-left", children: "Financing Option" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 p-2 text-left", children: "Typical Rate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 p-2 text-left", children: "Best For" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 p-2 text-left", children: "Key Advantage" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2 font-semibold", children: "HELOC" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2", children: "7-10%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2", children: "Flexible ongoing access to funds" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2", children: "Pay interest only on amount used" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2 font-semibold", children: "Home Equity Loan" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2", children: "7-9%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2", children: "Large one-time expenses" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2", children: "Fixed rate and payment" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2 font-semibold", children: "Cash-Out Refinance" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2", children: "6-8%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2", children: "Large amounts, rate improvement" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2", children: "Lowest rates, single payment" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2 font-semibold", children: "Personal Loan" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2", children: "8-15%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2", children: "Smaller amounts, quick access" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2", children: "No home collateral risk" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2 font-semibold", children: "Credit Cards" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2", children: "15-25%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2", children: "Short-term, small purchases" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 p-2", children: "Instant access, rewards programs" })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 dark:bg-orange-950 p-4 rounded-lg mt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-orange-800 dark:text-orange-200 mb-2", children: "Before Applying: Financial Health Checklist" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-orange-700 dark:text-orange-300", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Emergency fund covers 3-6 months expenses" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Stable income and employment" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Credit score above 680" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Debt-to-income ratio below 43%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Clear purpose for borrowed funds" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-orange-700 dark:text-orange-300", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Budget includes higher repayment payments" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Comfortable with variable rate risk" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Plan to pay down balance during draw period" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Home value expected to remain stable" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Alternative repayment sources available" })
                    ] })
                  ] })
                ] })
              ] }) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Frequently Asked Questions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Common HELOC questions answered by financial experts" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b pb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "What happens if home values drop significantly?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "If home values decline substantially, lenders may freeze your credit line or demand immediate repayment. This is why maintaining a conservative loan-to-value ratio (below 80%) provides important protection against market volatility." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b pb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Can I convert my variable HELOC rate to a fixed rate?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Many lenders offer fixed-rate conversion options during the draw period. You can typically lock in portions of your balance at current fixed rates. This feature provides protection against rising interest rates but usually comes with slightly higher rates than the variable option." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b pb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "How does HELOC interest compare to mortgage rates?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "HELOC rates are typically 1-3% higher than first mortgage rates because they're considered riskier second liens. However, they're generally much lower than credit cards or personal loans. Current HELOC rates average 7-10% compared to first mortgage rates of 6-8%." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b pb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "What's the minimum credit line for most HELOCs?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Most lenders require minimum credit lines of $10,000-$25,000, with maximum limits often reaching $500,000 or more for qualified borrowers. The actual limit depends on your home equity, income, creditworthiness, and the lender's policies." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b pb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Are there penalties for paying off a HELOC early?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Most HELOCs don't have prepayment penalties, allowing you to pay off the balance early without fees. However, some lenders charge early closure fees if you close the line within the first 2-3 years. Always review the terms before signing." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Can I use a HELOC to buy another property?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Yes, HELOC funds can be used for investment property down payments or to purchase a second home. This strategy can be effective for real estate investors, but ensure the rental income or appreciation potential justifies the additional debt and risk." })
              ] })
            ] }) })
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExportShareButtons,
          {
            calculatorType: "heloc-us",
            inputs: { homeValue, mortgageBalance, interestRate, creditLinePercentage, drawPeriod, repaymentPeriod, drawAmount },
            results,
            title: "HELOC Analysis"
          }
        ) })
      ]
    }
  );
}
export {
  HELOCCalculatorUS
};
