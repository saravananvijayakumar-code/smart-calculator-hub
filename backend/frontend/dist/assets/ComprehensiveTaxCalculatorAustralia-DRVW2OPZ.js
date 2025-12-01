import { r as reactExports, Q as useToast, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, a3 as FileText, i as CardDescription, k as CardContent, a4 as Label, V as Input, B as Button, C as Calculator, T as TrendingUp, aE as formatCurrency, D as DollarSign, a5 as Info } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { S as Separator } from "./separator-63Q9JacM.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-t5L32f7o.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { E as EnhancedAIAnalysis } from "./EnhancedAIAnalysis-BaYCd8m5.js";
import { u as useCalculatorHistory } from "./useCalculatorHistory-D-0eO727.js";
import { C as CircleAlert } from "./circle-alert-DCAQyr8M.js";
import { A as Award } from "./award-Bl7Nn9A9.js";
import { T as TrendingDown } from "./trending-down-Cff5hrMM.js";
import { S as Save } from "./save-DNawQ5RZ.js";
import { W as Wallet } from "./wallet-DxIJPdsI.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./check-DTsA1WpX.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
import "./share-2-SpOWc355.js";
import "./link-C11IgQ5M.js";
import "./copy-BqV-1o4k.js";
import "./twitter-CFAqYlq6.js";
import "./facebook-BX8Qa6cK.js";
import "./linkedin-D9e3uSZB.js";
import "./message-circle-DZtFORhh.js";
import "./mail-DX6y6Mo7.js";
import "./brain-CSngUEN8.js";
import "./target-4JeIm6Yk.js";
import "./circle-check-big-B8N3lfE-.js";
import "./arrow-right-Bjdtr8dz.js";
import "./lightbulb-DKPyzLdJ.js";
import "./calculatorStore-CZ9YYacT.js";
import "./middleware-Xu_RK28m.js";
const ComprehensiveTaxCalculatorAustralia = () => {
  const [grossIncome, setGrossIncome] = reactExports.useState("");
  const [residencyStatus, setResidencyStatus] = reactExports.useState("resident");
  const [hasMedicare, setHasMedicare] = reactExports.useState("full");
  const [hasHELP, setHasHELP] = reactExports.useState("no");
  const [hasPrivateHealth, setHasPrivateHealth] = reactExports.useState("no");
  const [deductions, setDeductions] = reactExports.useState("");
  const [taxWithheld, setTaxWithheld] = reactExports.useState("");
  const [results, setResults] = reactExports.useState(null);
  const { saveCalculation } = useCalculatorHistory();
  const { toast } = useToast();
  const taxBrackets2025 = [
    { min: 0, max: 18200, rate: 0 },
    { min: 18201, max: 45e3, rate: 0.16 },
    { min: 45001, max: 135e3, rate: 0.3 },
    { min: 135001, max: 19e4, rate: 0.37 },
    { min: 190001, max: Infinity, rate: 0.45 }
  ];
  const foreignResidentBrackets = [
    { min: 0, max: 135e3, rate: 0.3 },
    { min: 135001, max: 19e4, rate: 0.37 },
    { min: 190001, max: Infinity, rate: 0.45 }
  ];
  const calculateTax = () => {
    const income = parseFloat(grossIncome);
    const deductionAmount = parseFloat(deductions) || 0;
    const withheldAmount = parseFloat(taxWithheld) || 0;
    if (!income || income <= 0) return;
    const taxableIncome = Math.max(0, income - deductionAmount);
    const isResident = residencyStatus === "resident";
    const brackets = isResident ? taxBrackets2025 : foreignResidentBrackets;
    let incomeTax = 0;
    for (const bracket of brackets) {
      if (taxableIncome <= bracket.min) break;
      const taxableInBracket = Math.min(taxableIncome, bracket.max) - bracket.min;
      if (taxableInBracket > 0) {
        incomeTax += taxableInBracket * bracket.rate;
      }
    }
    let litoOffset = 0;
    if (isResident && taxableIncome <= 66667) {
      if (taxableIncome <= 37500) {
        litoOffset = 700;
      } else if (taxableIncome <= 45e3) {
        litoOffset = 700 - (taxableIncome - 37500) * 0.05;
      } else if (taxableIncome <= 66667) {
        litoOffset = 325 - (taxableIncome - 45e3) * 0.015;
      }
      incomeTax = Math.max(0, incomeTax - litoOffset);
    }
    let medicareLevy = 0;
    if (isResident && hasMedicare === "full") {
      medicareLevy = taxableIncome * 0.02;
    } else if (isResident && hasMedicare === "half") {
      medicareLevy = taxableIncome * 0.01;
    }
    let medicareLevySurcharge = 0;
    if (isResident && hasPrivateHealth === "no" && taxableIncome > 97e3) {
      if (taxableIncome <= 113e3) {
        medicareLevySurcharge = taxableIncome * 0.01;
      } else if (taxableIncome <= 151e3) {
        medicareLevySurcharge = taxableIncome * 0.0125;
      } else {
        medicareLevySurcharge = taxableIncome * 0.015;
      }
    }
    let helpRepayment = 0;
    if (hasHELP === "yes" && income > 54435) {
      const helpRate = calculateHELPRate(income);
      helpRepayment = income * helpRate;
    }
    const totalTax = incomeTax + medicareLevy + medicareLevySurcharge + helpRepayment;
    const netIncome = income - totalTax;
    const effectiveTaxRate = totalTax / income * 100;
    const marginalTaxRate = calculateMarginalRate(taxableIncome, isResident);
    const taxRefundOrOwing = withheldAmount - totalTax;
    setResults({
      grossIncome: income,
      incomeTax,
      medicareLevy,
      medicareLevySurcharge,
      helpRepayment,
      totalTax,
      netIncome,
      effectiveTaxRate,
      marginalTaxRate,
      monthlyGross: income / 12,
      monthlyNet: netIncome / 12,
      fortnightlyGross: income / 26,
      fortnightlyNet: netIncome / 26,
      weeklyGross: income / 52,
      weeklyNet: netIncome / 52,
      taxRefundOrOwing: withheldAmount > 0 ? taxRefundOrOwing : void 0,
      litoOffset: litoOffset > 0 ? litoOffset : void 0
    });
  };
  const calculateHELPRate = (income) => {
    if (income <= 54434) return 0;
    if (income <= 62850) return 0.01;
    if (income <= 66619) return 0.02;
    if (income <= 70617) return 0.025;
    if (income <= 74855) return 0.03;
    if (income <= 79346) return 0.035;
    if (income <= 84107) return 0.04;
    if (income <= 89154) return 0.045;
    if (income <= 94504) return 0.05;
    if (income <= 100174) return 0.055;
    if (income <= 106185) return 0.06;
    if (income <= 112556) return 0.065;
    if (income <= 119309) return 0.07;
    if (income <= 126467) return 0.075;
    if (income <= 134056) return 0.08;
    if (income <= 142100) return 0.085;
    if (income <= 150626) return 0.09;
    if (income <= 159663) return 0.095;
    return 0.1;
  };
  const calculateMarginalRate = (income, isResident) => {
    if (isResident) {
      if (income <= 18200) return 0;
      if (income <= 45e3) return 16;
      if (income <= 135e3) return 30;
      if (income <= 19e4) return 37;
      return 45;
    } else {
      if (income <= 135e3) return 30;
      if (income <= 19e4) return 37;
      return 45;
    }
  };
  const reset = () => {
    setGrossIncome("");
    setResidencyStatus("resident");
    setHasMedicare("full");
    setHasHELP("no");
    setHasPrivateHealth("no");
    setDeductions("");
    setTaxWithheld("");
    setResults(null);
  };
  const handleSaveToHistory = () => {
    if (!results) return;
    try {
      saveCalculation({
        calculatorType: "income-tax",
        calculatorName: "Australia Income Tax Calculator 2025-26",
        inputs: {
          grossIncome: parseFloat(grossIncome),
          residencyStatus,
          hasMedicare,
          hasHELP,
          hasPrivateHealth,
          deductions: parseFloat(deductions) || 0,
          taxWithheld: parseFloat(taxWithheld) || 0
        },
        results: {
          grossIncome: results.grossIncome,
          incomeTax: results.incomeTax,
          medicareLevy: results.medicareLevy,
          medicareLevySurcharge: results.medicareLevySurcharge,
          helpRepayment: results.helpRepayment,
          totalTax: results.totalTax,
          netIncome: results.netIncome,
          effectiveTaxRate: results.effectiveTaxRate,
          marginalTaxRate: results.marginalTaxRate
        }
      });
      toast({
        title: "Saved to History",
        description: "Your tax calculation has been saved to your history."
      });
    } catch (error) {
      toast({
        title: "Save Failed",
        description: "Failed to save calculation. Please try again.",
        variant: "destructive"
      });
    }
  };
  const tips = [
    "2025-26 FY: Tax-free threshold is $18,200 for Australian residents",
    "Stage 3 tax cuts: 16% rate on $18,201-$45,000 (reduced from 19%)",
    "Medicare Levy: 2% for most residents, plus surcharge if no private health insurance",
    "HELP/HECS repayment threshold: $54,435 for 2025-26",
    "Low Income Tax Offset: Up to $700 for incomes under $66,667",
    "Concessional super contributions capped at $30,000 annually",
    "Division 293 tax: Extra 15% on super contributions if income exceeds $250,000"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "Comprehensive Australia Tax Calculator 2025-26 | Income Tax, Medicare, HELP Calculator",
      description: "Calculate your Australian income tax for 2025-26 FY with Stage 3 tax cuts, Medicare Levy, Medicare Levy Surcharge, HELP/HECS debt, tax offsets, and deductions. Get AI-powered tax planning recommendations.",
      keywords: "Australia tax calculator, income tax calculator 2025-26, Medicare Levy calculator, HELP debt calculator, Stage 3 tax cuts, Australian tax rates, ATO tax calculator, tax refund calculator Australia",
      tips,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5" }),
                  "Australia Income Tax Calculator 2025-26"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Calculate your comprehensive tax liability for the 2025-26 financial year (1 July 2025 - 30 June 2026)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "basic", className: "w-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "basic", children: "Basic Details" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "advanced", children: "Advanced Options" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "basic", className: "space-y-4 mt-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "grossIncome", children: "Annual Gross Income (AUD)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "grossIncome",
                          type: "number",
                          placeholder: "Enter annual gross income",
                          value: grossIncome,
                          onChange: (e) => setGrossIncome(e.target.value)
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "residencyStatus", children: "Residency Status" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: residencyStatus, onValueChange: setResidencyStatus, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select residency status" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "resident", children: "Australian Resident for Tax Purposes" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "foreign", children: "Foreign Resident (Non-Resident)" })
                        ] })
                      ] })
                    ] }),
                    residencyStatus === "resident" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "hasMedicare", children: "Medicare Levy Status" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: hasMedicare, onValueChange: setHasMedicare, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select Medicare status" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "full", children: "Full Medicare Levy (2%)" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "half", children: "Half Medicare Levy (1%)" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "exempt", children: "Exempt from Medicare Levy" })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "hasPrivateHealth", children: "Private Health Insurance" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: hasPrivateHealth, onValueChange: setHasPrivateHealth, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Do you have appropriate private health insurance?" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "no", children: "No Private Health Insurance" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "yes", children: "Yes, I have Appropriate Hospital Cover" })
                          ] })
                        ] }),
                        hasPrivateHealth === "no" && parseFloat(grossIncome) > 97e3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-amber-600 flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }),
                          "Medicare Levy Surcharge may apply (1-1.5% depending on income)"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "hasHELP", children: "HELP/HECS Debt" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: hasHELP, onValueChange: setHasHELP, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Do you have HELP/HECS debt?" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "no", children: "No HELP/HECS Debt" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "yes", children: "Yes, I have HELP/HECS Debt" })
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "advanced", className: "space-y-4 mt-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "deductions", children: "Total Tax Deductions (AUD)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "deductions",
                          type: "number",
                          placeholder: "Work expenses, donations, investment costs, etc.",
                          value: deductions,
                          onChange: (e) => setDeductions(e.target.value)
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Include work-related expenses, charitable donations, investment property costs" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "taxWithheld", children: "Tax Already Withheld (PAYG)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "taxWithheld",
                          type: "number",
                          placeholder: "Tax withheld by employer during the year",
                          value: taxWithheld,
                          onChange: (e) => setTaxWithheld(e.target.value)
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Enter PAYG tax withheld to estimate refund or amount owing" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateTax, className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "mr-2 h-4 w-4" }),
                    "Calculate Tax"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: reset, variant: "outline", children: "Reset" })
                ] })
              ] })
            ] }),
            results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
                  "Your Tax Calculation Results"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-blue-50 rounded-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Gross Income" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-blue-600", children: formatCurrency(results.grossIncome, "AUD") })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-green-50 rounded-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Net Income" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-green-600", children: formatCurrency(results.netIncome, "AUD") })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }),
                      "Tax Breakdown"
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-2 bg-gray-50 rounded", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Income Tax:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "font-mono", children: formatCurrency(results.incomeTax, "AUD") })
                      ] }),
                      results.medicareLevy > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-2 bg-gray-50 rounded", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Medicare Levy (2%):" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "font-mono", children: formatCurrency(results.medicareLevy, "AUD") })
                      ] }),
                      results.medicareLevySurcharge > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-2 bg-amber-50 rounded", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3 w-3" }),
                          "Medicare Levy Surcharge:"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "bg-amber-600 text-white font-mono", children: formatCurrency(results.medicareLevySurcharge, "AUD") })
                      ] }),
                      results.helpRepayment > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-2 bg-gray-50 rounded", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "HELP/HECS Repayment:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "font-mono", children: formatCurrency(results.helpRepayment, "AUD") })
                      ] }),
                      results.litoOffset && results.litoOffset > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-2 bg-green-50 rounded", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-3 w-3" }),
                          "Low Income Tax Offset:"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "bg-green-600 text-white font-mono", children: [
                          "-",
                          formatCurrency(results.litoOffset, "AUD")
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-red-50 rounded border-t-2 border-red-600", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Total Tax Payable:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-600 text-lg", children: formatCurrency(results.totalTax, "AUD") })
                      ] }),
                      results.taxRefundOrOwing !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex justify-between items-center p-3 ${results.taxRefundOrOwing >= 0 ? "bg-green-50 border-green-600" : "bg-amber-50 border-amber-600"} rounded border-t-2`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: results.taxRefundOrOwing >= 0 ? "Estimated Refund:" : "Amount Owing:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: results.taxRefundOrOwing >= 0 ? "bg-green-600" : "bg-amber-600", children: formatCurrency(Math.abs(results.taxRefundOrOwing), "AUD") })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Effective Tax Rate" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-lg", children: [
                          results.effectiveTaxRate.toFixed(2),
                          "%"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-4 w-4 text-muted-foreground" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Marginal Tax Rate" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-lg", children: [
                        results.marginalTaxRate,
                        "%"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-4 w-4" }),
                      "Take-Home Pay Breakdown"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-green-50 rounded", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Annual" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-green-600", children: formatCurrency(results.netIncome, "AUD") })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-green-50 rounded", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Monthly" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-green-600", children: formatCurrency(results.monthlyNet, "AUD") })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-green-50 rounded", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Fortnightly" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-green-600", children: formatCurrency(results.fortnightlyNet, "AUD") })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-green-50 rounded", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Weekly" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-green-600", children: formatCurrency(results.weeklyNet, "AUD") })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleSaveToHistory, variant: "outline", className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "mr-2 h-4 w-4" }),
                    "Save to History"
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ExportShareButtons,
                {
                  calculatorType: "income-tax-australia",
                  inputs: {
                    grossIncome,
                    residencyStatus,
                    hasMedicare,
                    hasHELP,
                    hasPrivateHealth,
                    deductions,
                    taxWithheld
                  },
                  results,
                  title: "Australian Income Tax Calculation 2025-26"
                }
              ),
              results && /* @__PURE__ */ jsxRuntimeExports.jsx(
                EnhancedAIAnalysis,
                {
                  calculatorType: "income-tax-australia",
                  data: {
                    grossIncome: results.grossIncome,
                    residencyStatus,
                    hasMedicare,
                    hasHELP,
                    incomeTax: results.incomeTax,
                    medicareLevy: results.medicareLevy,
                    helpRepayment: results.helpRepayment,
                    totalTax: results.totalTax,
                    netIncome: results.netIncome,
                    effectiveTaxRate: results.effectiveTaxRate,
                    marginalTaxRate: results.marginalTaxRate
                  }
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "sticky top-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5" }),
              "2025-26 Tax Quick Reference"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Tax Brackets (Residents)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between p-2 bg-gray-50 rounded", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$0 - $18,200" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "0%" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between p-2 bg-gray-50 rounded", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$18,201 - $45,000" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "16%" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between p-2 bg-gray-50 rounded", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$45,001 - $135,000" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "30%" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between p-2 bg-gray-50 rounded", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$135,001 - $190,000" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "37%" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between p-2 bg-gray-50 rounded", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "$190,001+" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "45%" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Key Thresholds" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "HELP Threshold:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "$54,435" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "MLS Threshold:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "$97,000" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Super Cap:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "$30,000" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Division 293:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "$250,000" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold mb-2 text-sm flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-4 w-4" }),
                  "Tax Saving Tips"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Salary sacrifice to super (15% tax vs your marginal rate)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Claim all work-related deductions" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Get private health insurance to avoid MLS" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Time deductions before June 30" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5" }),
            "Complete Guide to Australian Income Tax 2025-26"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose max-w-none space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Understanding Australian Income Tax in 2025-26" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Australia's income tax system is progressive, meaning higher earners pay a higher percentage of their income in tax. The 2025-26 financial year continues to implement the Stage 3 tax cuts that began in July 2024, providing meaningful tax relief across all income brackets while maintaining the progressive nature of the system." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "This comprehensive tax calculator helps Australian taxpayers understand their complete tax position, including income tax, Medicare Levy, Medicare Levy Surcharge, HELP/HECS debt repayments, tax offsets, and deductions. Whether you're an employee, contractor, or business owner, understanding your tax obligations is crucial for effective financial planning." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "2025-26 Tax Rates and Brackets" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Resident Tax Rates" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "For Australian residents for tax purposes, the tax system includes a tax-free threshold of $18,200. This means the first $18,200 you earn is completely tax-free. Above this threshold, the following progressive tax rates apply:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$0 - $18,200:" }),
                  " No tax payable (tax-free threshold)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$18,201 - $45,000:" }),
                  " 16% on every dollar over $18,200"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$45,001 - $135,000:" }),
                  " $4,288 plus 30% on every dollar over $45,000"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$135,001 - $190,000:" }),
                  " $31,288 plus 37% on every dollar over $135,000"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$190,001 and above:" }),
                  " $51,638 plus 45% on every dollar over $190,000"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Foreign Resident Tax Rates" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Foreign residents (non-residents for tax purposes) do not receive the tax-free threshold and pay tax from the first dollar earned in Australia. They are generally not liable for the Medicare Levy. The rates are:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$0 - $135,000:" }),
                  " 30% on every dollar"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$135,001 - $190,000:" }),
                  " $40,500 plus 37% on every dollar over $135,000"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$190,001 and above:" }),
                  " $60,850 plus 45% on every dollar over $190,000"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Stage 3 Tax Cuts - What Changed?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The Stage 3 tax cuts, implemented from 1 July 2024, represent the most significant tax reform in recent years:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Lower 16% rate:" }),
                  " The tax rate for income between $18,201 and $45,000 was reduced from 19% to 16%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Expanded 30% bracket:" }),
                  " The 30% tax bracket now extends to $135,000 (previously $120,000)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Higher 45% threshold:" }),
                  " The top tax rate now applies from $190,000 (previously $180,000)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Simplified structure:" }),
                  " These changes create a simpler, fairer tax system benefiting all taxpayers"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "For a person earning $80,000, these changes save approximately $1,500 per year. For someone on $150,000, the savings are around $3,500 annually. Even those earning $50,000 benefit by about $800 per year." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Medicare Levy and Surcharge" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Medicare Levy (2%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Most Australian residents pay the Medicare Levy of 2% of taxable income to help fund Australia's public health system (Medicare). Low-income earners may be eligible for a reduction or full exemption from the Medicare Levy:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Single individuals earning less than $26,000 may receive a reduction" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Families and seniors have higher thresholds for reductions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Foreign residents are generally exempt from the Medicare Levy" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Medicare Levy Surcharge (1-1.5%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The Medicare Levy Surcharge (MLS) is an additional levy on taxpayers who don't have appropriate private hospital insurance and earn above certain thresholds. The surcharge rates for 2025-26 are:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tier 1:" }),
                  " $97,001 - $113,000 singles ($194,001 - $226,000 families) - 1% surcharge"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tier 2:" }),
                  " $113,001 - $151,000 singles ($226,001 - $302,000 families) - 1.25% surcharge"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tier 3:" }),
                  " $151,001+ singles ($302,001+ families) - 1.5% surcharge"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Many taxpayers find it cost-effective to obtain appropriate private health insurance rather than pay the MLS. For example, someone earning $110,000 without private health insurance pays $1,100 in MLS annually, which could cover basic hospital insurance premiums." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "HELP/HECS Debt Repayment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "If you have a Higher Education Loan Program (HELP) or Higher Education Contribution Scheme (HECS) debt, you must make compulsory repayments once your income exceeds the minimum threshold of $54,435 (2025-26). The repayment is calculated on your total income, not just the amount above the threshold." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "HELP Repayment Rates 2025-26" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The repayment rate increases progressively with income, ranging from 1% to 10%:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "$54,435 - $62,850: 1% repayment rate" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "$62,851 - $66,619: 2% repayment rate" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "$66,620 - $70,617: 2.5% repayment rate" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "$70,618 - $74,855: 3% repayment rate" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Continues increasing to 10% for incomes over $159,663" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "HELP debt is indexed annually on June 1 based on the Consumer Price Index (CPI). The indexation rate for June 2024 was 4.7%. While HELP debt doesn't accrue interest, indexation can significantly increase the debt over time, making voluntary repayments attractive for those who can afford them." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Important:" }),
                " Voluntary HELP repayments receive a 10% bonus reduction on the amount paid. For example, if you make a $1,000 voluntary payment, $1,100 is deducted from your debt."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Tax Offsets and Deductions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Low Income Tax Offset (LITO)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The Low Income Tax Offset (LITO) reduces the amount of tax payable for low and middle-income earners:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Maximum offset of $700 for incomes up to $37,500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Phases out at 5 cents per dollar between $37,500 and $45,000" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Phases out at 1.5 cents per dollar between $45,000 and $66,667" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Automatically applied - no need to claim" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Common Tax Deductions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Claiming all eligible deductions reduces your taxable income and overall tax liability. Common deductions include:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Work-related expenses:" }),
                  " Tools, equipment, uniforms, protective clothing, professional subscriptions"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Home office expenses:" }),
                  " If you work from home, claim running costs and equipment depreciation"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Vehicle and travel expenses:" }),
                  " Work-related car travel, parking, tolls (not normal commute)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Self-education expenses:" }),
                  " Courses and training directly related to current employment"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Investment property expenses:" }),
                  " Loan interest, repairs, property management, depreciation"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Donations:" }),
                  " Gifts over $2 to registered Deductible Gift Recipients (DGRs)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Income protection insurance:" }),
                  " Premiums for policies that replace income if you can't work"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Keep detailed records and receipts for all deductions. The ATO's myDeductions app helps track expenses throughout the year, making tax time much easier." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Superannuation and Tax Planning" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Salary Sacrificing to Super" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Salary sacrifice to superannuation is one of the most tax-effective strategies available to Australian workers. Instead of receiving income (taxed at your marginal rate), you contribute to super where it's taxed at just 15%:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tax saving = (Your marginal rate - 15%) × contribution amount" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Someone on 30% marginal rate saves 15% on each dollar contributed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Someone on 45% marginal rate saves 30% on each dollar contributed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Concessional contributions capped at $30,000 per year (includes employer contributions)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Division 293 Tax" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "High-income earners (over $250,000) pay an additional 15% tax on concessional super contributions through Division 293 tax. This means their super contributions are effectively taxed at 30% instead of 15%, though this is still typically lower than their marginal tax rate of 45%." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Carry-Forward Concessional Contributions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Since 1 July 2018, you can carry forward unused concessional contribution cap amounts for up to five years. This allows you to make larger contributions in years when you have extra cash available, provided your total super balance was less than $500,000 at the previous June 30." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Tax Planning Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Timing Income and Deductions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Strategic timing of income and deductions can optimize your tax position:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Defer income to lower-income years when possible" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Bring forward deductions into higher-income years" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Pre-pay deductible expenses before June 30 in high-income years" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Time asset sales to utilize capital gains discount or harvest losses" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Investment Tax Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Tax-effective investing is crucial for long-term wealth building:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Franked dividends:" }),
                  " Australian company dividends come with franking credits, reducing overall tax"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Capital gains discount:" }),
                  " Hold assets for more than 12 months for 50% CGT discount"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Negative gearing:" }),
                  " Investment property losses can offset other taxable income"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Superannuation investing:" }),
                  " Investment earnings taxed at maximum 15% inside super"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Family Income Splitting" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "While income splitting is limited in Australia, some legitimate strategies exist:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Spouse super contributions (tax deduction up to $3,000 if spouse earns less than $37,000)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Income from business structures (companies, trusts, partnerships)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Investment income from jointly owned assets" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Ensure higher-income spouse claims shared deductions like investment property expenses" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Important Tax Dates and Deadlines" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Mark these key dates in your calendar for the 2025-26 financial year:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1 July 2025:" }),
                  " Start of 2025-26 financial year"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "30 June 2026:" }),
                  " End of 2025-26 financial year - deadline for deductions"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "14 July 2026:" }),
                  " PAYG payment summaries issued by employers"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "31 October 2026:" }),
                  " Tax return lodgment deadline (if lodging yourself)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "15 May 2027:" }),
                  " Extended deadline if using registered tax agent"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "21st of each month:" }),
                  " PAYG installment due dates for business income"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Common Tax Mistakes to Avoid" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Forgetting to declare all income:" }),
                  " Include bank interest, dividends, rental income, and foreign income"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Claiming ineligible deductions:" }),
                  " Personal expenses, fines, and commuting costs are not deductible"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Poor record keeping:" }),
                  " Keep receipts and documentation for at least 5 years"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Missing the lodgment deadline:" }),
                  " Late fees and penalties apply to overdue returns"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Incorrect HELP repayments:" }),
                  " Ensure your employer withholds correct amount if you have HELP debt"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Not updating details:" }),
                  " Inform ATO of address changes, bank details, and residency status"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Overclaiming work from home expenses:" }),
                  " Must have records to substantiate claims"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "When to Seek Professional Tax Advice" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "While this calculator provides comprehensive estimates, consider consulting a registered tax agent if you:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Have complex investment structures (trusts, companies, partnerships)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Own investment properties or rental income" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Have foreign income or assets" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Are self-employed or run a business" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Have significant capital gains or losses" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Changed residency status during the year" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Have cryptocurrency investments or transactions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Want to optimize tax strategies for your situation" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "A good tax agent can often save you more than their fee through legitimate deductions and tax planning strategies." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Frequently Asked Questions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Do I need to lodge a tax return?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Most Australian workers need to lodge a tax return. You must lodge if you earned over $18,200, had tax withheld from your income, or operated a business. Even if you're below the threshold, you may want to lodge to claim a refund of tax withheld." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "How long does a tax refund take?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Most tax refunds are processed within 2 weeks if you lodge electronically (via myTax or a tax agent). Paper returns can take up to 10 weeks. The ATO issues refunds to your nominated bank account." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Can I claim tax back on my work from home expenses?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Yes, if you work from home you can claim a portion of running costs (electricity, internet, phone) and depreciation on equipment. You need records to support your claim - either actual costs, or use the ATO's fixed rate method (67 cents per hour for 2025-26)." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "What happens if I don't lodge my tax return on time?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Failure to lodge on time results in penalties. The failure to lodge penalty is one penalty unit ($313 for 2025-26) for each 28-day period or part thereof that the return is overdue, up to a maximum of five penalty units. Additional penalties and interest may apply to unpaid tax." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Using This Tax Calculator" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "This comprehensive Australian tax calculator provides accurate estimates for the 2025-26 financial year based on current ATO rates and thresholds. It includes:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Income tax calculation for residents and foreign residents" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Medicare Levy (2%) calculation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Medicare Levy Surcharge for those without private health insurance" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "HELP/HECS debt repayment calculations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Low Income Tax Offset (LITO) automatic application" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tax refund or amount owing estimates when tax withheld is entered" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "AI-powered tax planning recommendations" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Remember that this calculator provides estimates only. Your actual tax liability may vary based on your specific circumstances, additional income sources, offsets, and deductions not captured in the calculator. Always verify with the ATO or a registered tax agent for your individual situation." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Additional Resources" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "For more information about Australian taxation:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Australian Taxation Office (ATO):" }),
                  " ato.gov.au - official source for all tax information"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "myTax:" }),
                  " Online tax lodgment system through myGov"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "myDeductions app:" }),
                  " ATO app for tracking deductions throughout the year"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tax Agent Portal:" }),
                  " Find registered tax agents in your area"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Moneysmart.gov.au:" }),
                  " ASIC's guide to managing money and taxes"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border-l-4 border-blue-600 p-6 rounded", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold mb-2 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5" }),
                "Disclaimer"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "This calculator provides estimates based on the information provided and current tax rates for the 2025-26 financial year. It should not be considered financial or tax advice. Tax laws are complex and individual circumstances vary. Always consult with a registered tax agent or the Australian Taxation Office for advice specific to your situation. The calculations do not account for all possible tax offsets, surcharges, or special circumstances that may apply to your situation." })
            ] })
          ] })
        ] })
      ]
    }
  );
};
export {
  ComprehensiveTaxCalculatorAustralia as default
};
