import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a3 as Label, U as Input, B as Button, C as Calculator, T as TrendingUp, aD as formatCurrency, p as TriangleAlert, a4 as Info } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { S as Separator } from "./separator-CgM4Fzdg.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { A as AIAnalysis } from "./AIAnalysis-DnR9Up6F.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { W as Wallet } from "./wallet-7QltRvhQ.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./EnhancedAIAnalysis-BZiQW2bt.js";
import "./loader-circle-BYW7QwsU.js";
import "./brain-U3SZm3t9.js";
import "./target-1ApqtYDG.js";
import "./circle-check-big-BoxGYPKG.js";
import "./arrow-right-CtOKJdMG.js";
import "./lightbulb-doNczJxC.js";
import "./tabs-BNSAX0su.js";
import "./share-2-ViScha7M.js";
import "./link-DxXhzsoi.js";
import "./copy-DGMuG98H.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./linkedin-BSJyfSWT.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
const SuperannuationCalculatorAustralia = () => {
  const [currentAge, setCurrentAge] = reactExports.useState("");
  const [retirementAge, setRetirementAge] = reactExports.useState("67");
  const [currentSuper, setCurrentSuper] = reactExports.useState("");
  const [annualSalary, setAnnualSalary] = reactExports.useState("");
  const [additionalContributions, setAdditionalContributions] = reactExports.useState("");
  const [expectedReturn, setExpectedReturn] = reactExports.useState("7");
  const [salaryGrowth, setSalaryGrowth] = reactExports.useState("3");
  const [contributionStrategy, setContributionStrategy] = reactExports.useState("");
  const [results, setResults] = reactExports.useState(null);
  const calculateSuper = () => {
    const age = parseFloat(currentAge);
    const retAge = parseFloat(retirementAge);
    const currentBalance = parseFloat(currentSuper) || 0;
    const salary = parseFloat(annualSalary);
    const additional = parseFloat(additionalContributions) || 0;
    const returnRate = parseFloat(expectedReturn) / 100;
    const growthRate = parseFloat(salaryGrowth) / 100;
    if (!age || !retAge || !salary || retAge <= age) return;
    const yearsToRetirement = retAge - age;
    const sgRate = 0.115;
    let totalSuper = currentBalance;
    let totalContributions = 0;
    let totalEmployerContributions = 0;
    let totalAdditionalContributions = 0;
    let totalTaxSaved = 0;
    let currentSalary = salary;
    for (let year = 0; year < yearsToRetirement; year++) {
      const employerContribution = Math.min(currentSalary * sgRate, 27500);
      let additionalContribution = additional;
      if (contributionStrategy === "salary_sacrifice") {
        additionalContribution = Math.min(additional, 27500 - employerContribution);
      } else if (contributionStrategy === "after_tax") {
        additionalContribution = Math.min(additional, 11e4);
      }
      totalEmployerContributions += employerContribution;
      totalAdditionalContributions += additionalContribution;
      const marginalTaxRate = calculateMarginalTaxRate(currentSalary);
      if (contributionStrategy === "salary_sacrifice") {
        totalTaxSaved += additionalContribution * (marginalTaxRate - 0.15);
      }
      const annualContributions = employerContribution + additionalContribution;
      totalContributions += annualContributions;
      const concessionalContributions = employerContribution + (contributionStrategy === "salary_sacrifice" ? additionalContribution : 0);
      const superTax = concessionalContributions * 0.15;
      totalSuper = (totalSuper + annualContributions - superTax) * (1 + returnRate);
      currentSalary = currentSalary * (1 + growthRate);
    }
    const totalGrowth = totalSuper - currentBalance - totalContributions + totalEmployerContributions * 0.15;
    const annualPension = totalSuper * 0.04;
    const monthlyPension = annualPension / 12;
    const minimumDrawdownRate = retAge >= 95 ? 0.14 : retAge >= 90 ? 0.11 : retAge >= 80 ? 0.07 : retAge >= 75 ? 0.06 : retAge >= 70 ? 0.05 : 0.04;
    const minimumAnnualDrawdown = totalSuper * minimumDrawdownRate;
    const agePensionAssetThreshold = 954750;
    const eligibleForPartAgePension = totalSuper < agePensionAssetThreshold * 1.5;
    const eligibleForFullAgePension = totalSuper < agePensionAssetThreshold;
    const estimatedAgePension = eligibleForFullAgePension ? 29023 : eligibleForPartAgePension ? 15e3 : 0;
    const totalRetirementIncome = annualPension + estimatedAgePension;
    const maxCoContribution = 500;
    const coContributionThreshold = 58056;
    const coContributionEligible = salary <= coContributionThreshold && contributionStrategy === "after_tax";
    const estimatedCoContribution = coContributionEligible ? maxCoContribution * Math.min(yearsToRetirement, 10) : 0;
    const targetReplacementRatio = 70;
    const actualReplacementRatio = totalRetirementIncome / salary * 100;
    const adequacyGap = Math.max(0, salary * 0.7 - totalRetirementIncome);
    setResults({
      totalSuper,
      totalContributions,
      totalEmployerContributions,
      totalAdditionalContributions,
      totalTaxSaved,
      totalGrowth,
      annualPension,
      monthlyPension,
      minimumAnnualDrawdown,
      estimatedAgePension,
      totalRetirementIncome,
      eligibleForFullAgePension,
      eligibleForPartAgePension,
      estimatedCoContribution,
      yearsToRetirement,
      finalSalary: currentSalary / (1 + growthRate),
      actualReplacementRatio,
      targetReplacementRatio,
      adequacyGap,
      isAdequate: actualReplacementRatio >= targetReplacementRatio
    });
  };
  const calculateMarginalTaxRate = (income) => {
    if (income <= 18200) return 0;
    if (income <= 45e3) return 0.19 + 0.02;
    if (income <= 12e4) return 0.325 + 0.02;
    if (income <= 18e4) return 0.37 + 0.02;
    return 0.45 + 0.02;
  };
  const reset = () => {
    setCurrentAge("");
    setRetirementAge("67");
    setCurrentSuper("");
    setAnnualSalary("");
    setAdditionalContributions("");
    setExpectedReturn("7");
    setSalaryGrowth("3");
    setContributionStrategy("");
    setResults(null);
  };
  const tips = [
    "Superannuation Guarantee is currently 11.5% of ordinary time earnings",
    "Contribute early to maximize compound growth over time",
    "Consider salary sacrifice to reduce taxable income",
    "Government co-contributions available for low-income earners",
    "Superannuation is taxed at 15% vs marginal tax rates up to 47%"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Australia Superannuation Calculator | Super Calculator & Retirement Planner 2024",
      description: "Comprehensive Australian superannuation calculator with SG contributions, salary sacrifice, government co-contributions, and retirement income projections. Plan your super strategy and retirement adequacy.",
      keywords: "Australia superannuation calculator, super calculator Australia, retirement planning calculator, salary sacrifice calculator, SG contributions, super retirement income",
      tips,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-5 w-5" }),
                "Superannuation Calculator"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Calculate your retirement superannuation balance and income projections" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "currentAge", children: "Current Age" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "currentAge",
                      type: "number",
                      placeholder: "30",
                      value: currentAge,
                      onChange: (e) => setCurrentAge(e.target.value),
                      min: "15",
                      max: "75"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "retirementAge", children: "Retirement Age" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: retirementAge, onValueChange: setRetirementAge, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select age" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "60", children: "60" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "65", children: "65" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "67", children: "67 (Pension Age)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "70", children: "70" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "currentSuper", children: "Current Super Balance ($)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "currentSuper",
                    type: "number",
                    placeholder: "50000",
                    value: currentSuper,
                    onChange: (e) => setCurrentSuper(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "annualSalary", children: "Annual Salary ($)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "annualSalary",
                    type: "number",
                    placeholder: "75000",
                    value: annualSalary,
                    onChange: (e) => setAnnualSalary(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contributionStrategy", children: "Additional Contribution Strategy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: contributionStrategy, onValueChange: setContributionStrategy, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select strategy" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: "No Additional Contributions" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "salary_sacrifice", children: "Salary Sacrifice (Pre-tax)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "after_tax", children: "After-tax Contributions" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "additionalContributions", children: "Additional Annual Contributions ($)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "additionalContributions",
                    type: "number",
                    placeholder: "5000",
                    value: additionalContributions,
                    onChange: (e) => setAdditionalContributions(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "expectedReturn", children: "Expected Annual Return (%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: expectedReturn, onValueChange: setExpectedReturn, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select return" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "5", children: "5% (Conservative)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "7", children: "7% (Balanced)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "9", children: "9% (Growth)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "10", children: "10% (Aggressive)" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "salaryGrowth", children: "Annual Salary Growth (%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: salaryGrowth, onValueChange: setSalaryGrowth, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select growth" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "2", children: "2%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "3", children: "3%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "4", children: "4%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "5", children: "5%" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateSuper, className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "mr-2 h-4 w-4" }),
                  "Calculate Super"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: reset, variant: "outline", children: "Reset" })
              ] })
            ] })
          ] }),
          results && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
              "Retirement Projection"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-center p-4 rounded-lg",
                  style: { backgroundColor: results.isAdequate ? "#f0f9ff" : "#fef2f2" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: results.isAdequate ? "Adequate Retirement Savings" : "Potential Retirement Shortfall" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                      results.actualReplacementRatio.toFixed(1),
                      "% income replacement (Target: ",
                      results.targetReplacementRatio,
                      "%)"
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Super Balance at Retirement" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-green-600", children: formatCurrency(results.totalSuper, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Annual Retirement Income" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-blue-600", children: formatCurrency(results.totalRetirementIncome, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Monthly Income" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: formatCurrency(results.totalRetirementIncome / 12, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Years to Retirement" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: results.yearsToRetirement })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Contribution Breakdown" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Employer SG Contributions:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: formatCurrency(results.totalEmployerContributions, "AUD") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Additional Contributions:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: formatCurrency(results.totalAdditionalContributions, "AUD") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Investment Growth:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", children: formatCurrency(results.totalGrowth, "AUD") })
                  ] }),
                  results.totalTaxSaved > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tax Saved (Salary Sacrifice):" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", children: formatCurrency(results.totalTaxSaved, "AUD") })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-3 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-sm mb-2", children: "Age Pension Eligibility" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: results.eligibleForFullAgePension ? "Eligible for full Age Pension" : results.eligibleForPartAgePension ? "Eligible for partial Age Pension" : "Not eligible for Age Pension due to assets" }),
                results.estimatedAgePension > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs mt-1", children: [
                  "Estimated Age Pension: ",
                  formatCurrency(results.estimatedAgePension, "AUD"),
                  "/year"
                ] })
              ] }),
              !results.isAdequate && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-yellow-50 p-3 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-yellow-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-yellow-800", children: [
                  "Retirement Income Gap: ",
                  formatCurrency(results.adequacyGap, "AUD"),
                  "/year"
                ] })
              ] }) })
            ] })
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIAnalysis,
            {
              analysisRequest: {
                calculatorType: "superannuation-australia",
                data: {
                  currentBalance: parseFloat(currentSuper) || 0,
                  monthlyContribution: (parseFloat(annualSalary) || 0) * 0.115 / 12,
                  employerContribution: (parseFloat(annualSalary) || 0) * 0.115,
                  expectedReturn: parseFloat(expectedReturn) || 7,
                  years: results.yearsToRetirement,
                  finalBalance: results.totalSuper,
                  retirementIncome: results.totalRetirementIncome
                }
              },
              autoRun: true,
              title: "AI Superannuation Analysis",
              description: "Get personalized strategies to optimize your superannuation and retirement planning."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "superannuation-australia",
              inputs: {
                currentSuper: parseFloat(currentSuper) || 0,
                annualSalary: parseFloat(annualSalary) || 0,
                currentAge: parseInt(currentAge) || 0,
                retirementAge: parseInt(retirementAge) || 67,
                expectedReturn: parseFloat(expectedReturn) || 7
              },
              results: {
                totalSuper: results.totalSuper,
                totalContributions: results.totalContributions,
                investmentEarnings: results.investmentEarnings,
                totalRetirementIncome: results.totalRetirementIncome,
                yearsToRetirement: results.yearsToRetirement
              },
              title: "Superannuation Calculator Australia Report",
              className: "mt-6"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Complete Guide to Australian Superannuation and Retirement Planning" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The Australian superannuation system represents one of the world's largest and most comprehensive retirement savings frameworks, designed to ensure all working Australians can achieve financial security in retirement. Understanding how superannuation works, the various contribution strategies available, and how to optimize your retirement savings is crucial for long-term financial wellbeing. This comprehensive guide covers everything you need to know about maximizing your superannuation benefits and planning for a comfortable retirement." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "The Superannuation Guarantee System" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The Superannuation Guarantee (SG) requires employers to contribute a minimum percentage of employees' ordinary time earnings to their superannuation fund. As of 2024, the SG rate is 11.5% and is scheduled to increase to 12% by July 2025. This compulsory system ensures all eligible workers build retirement savings throughout their careers, with contributions invested in diversified portfolios to grow over time. The SG applies to employees earning more than $450 per month and covers most forms of employment, creating a universal foundation for retirement savings." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Understanding Superannuation Tax Benefits" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Superannuation enjoys significant tax advantages that make it one of Australia's most tax-effective investment vehicles. Contributions made by employers and through salary sacrifice are taxed at just 15%, compared to marginal tax rates that can reach 47% including the Medicare levy. Investment earnings within super funds are also taxed at a maximum of 15%, while withdrawals after age 60 are completely tax-free. These tax concessions provide substantial benefits for long-term wealth accumulation, particularly for higher income earners who face significant marginal tax rates." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Salary Sacrifice Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Salary sacrifice represents one of the most effective ways to boost superannuation savings while reducing current tax obligations. By redirecting pre-tax salary into superannuation, employees can access the 15% super tax rate instead of their marginal tax rate, creating immediate tax savings. The strategy is particularly beneficial for workers in higher tax brackets, where the difference between marginal rates and the super tax rate is greatest. However, salary sacrifice contributions are subject to the annual concessional contributions cap of $27,500 (including employer SG contributions)." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Salary Sacrifice Tax Savings Example:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Annual Salary: $100,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Marginal Tax Rate: 37% (plus 2% Medicare levy)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Salary Sacrifice: $10,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Tax Saved: $10,000 × (39% - 15%) = $2,400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Net Cost: $7,600 for $10,000 super contribution" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "After-Tax Contributions and Government Co-contributions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "After-tax (non-concessional) contributions allow individuals to boost their superannuation using income that has already been taxed at marginal rates. While these contributions don't provide immediate tax deductions, they benefit from the tax-free investment environment within superannuation and tax-free withdrawals after age 60. Low and middle-income earners making after-tax contributions may be eligible for government co-contributions of up to $500 annually, effectively providing a 50% return on eligible contributions up to $1,000." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Contribution Caps and Carry-Forward Rules" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Superannuation contributions are subject to annual caps designed to limit the tax benefits available to high-income earners. The concessional contributions cap is $27,500 annually (2024), covering employer SG and salary sacrifice contributions. The non-concessional cap is $110,000 annually, though individuals under 67 can bring forward up to three years' worth of caps ($330,000) in certain circumstances. Unused concessional contribution caps can be carried forward for up to five years, allowing catch-up contributions for those with super balances below $500,000." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Investment Options and Risk Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Most superannuation funds offer various investment options ranging from conservative cash and fixed interest options to aggressive growth portfolios with high equity allocations. The choice of investment strategy significantly impacts long-term retirement outcomes, with younger members typically benefiting from higher growth allocations due to their longer investment timeframes. Many funds offer lifecycle investment options that automatically adjust risk levels as members approach retirement, gradually shifting from growth to more conservative investments." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Self-Managed Super Funds (SMSFs)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Self-Managed Super Funds allow individuals to take direct control of their superannuation investments, providing flexibility to invest in a broader range of assets including direct property, shares, and alternative investments. SMSFs are particularly suitable for individuals with larger super balances (typically $200,000+) who want greater investment control and are willing to take on the additional compliance responsibilities. However, SMSFs require significant time commitment, investment knowledge, and ongoing professional support to meet regulatory obligations." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Advanced Superannuation Strategies and Retirement Planning" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Transition to Retirement Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Transition to Retirement (TTR) strategies allow individuals over 60 to access their superannuation while continuing to work, providing flexibility for gradual retirement transitions. TTR pensions enable members to withdraw between 4-10% of their super balance annually while continuing to make contributions. This strategy can be combined with salary sacrifice to maintain take-home pay while building super balances, though changes to TTR pension taxation in 2017 reduced some of the previous tax advantages for those under 65 who haven't met a condition of release." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Retirement Income Streams and Pension Options" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Upon retirement, superannuation members can access their benefits through various income stream products designed to provide regular retirement income. Account-based pensions are the most common option, providing flexible access to super balances with minimum annual withdrawal requirements based on age. Allocated pensions offer guaranteed income for specific periods, while lifetime annuities provide income security for life but with less flexibility. The choice of retirement income strategy depends on personal circumstances, risk tolerance, and income requirements." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Age Pension Integration and Asset Testing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The Age Pension provides a safety net for retirees but is subject to means testing based on income and assets. Superannuation balances are assessed under the assets test, with higher super balances reducing Age Pension entitlements. The current assets test threshold for homeowners is approximately $954,750 for singles and $1,431,500 for couples (2024), above which no Age Pension is payable. Strategic management of superannuation balances and other assets can help optimize combined retirement income from super and Age Pension sources." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Retirement Income Optimization Strategies:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Maximize super contributions during high-income years" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider spouse contributions for non-working partners" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Plan timing of super withdrawals to optimize Age Pension" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Utilize catch-up contribution opportunities" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Review investment strategies as retirement approaches" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider downsizing contributions after age 65" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Plan for healthcare and aged care costs" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Spouse Super Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Couples can optimize their combined superannuation position through spouse contribution strategies, particularly where there are income disparities. Higher-earning spouses can contribute up to $3,000 annually for lower-earning spouses and claim a tax offset of up to $540. This strategy helps balance super accounts between partners, potentially improving Age Pension eligibility and providing greater flexibility in retirement income planning. Spouse contributions are particularly valuable for couples where one partner has career breaks for child-rearing or other reasons." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Downsizing Contributions and Later-Life Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Australians over 65 can make downsizing contributions of up to $300,000 per person ($600,000 per couple) when selling their family home, provided they've owned it for at least 10 years. These contributions don't count toward contribution caps and can significantly boost retirement savings for those who downsize their housing. Additionally, the work test requirements for super contributions have been relaxed for those aged 67-74, making it easier for older Australians to continue building their superannuation through various contribution strategies." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Estate Planning and Superannuation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Superannuation forms a crucial component of estate planning, with specific rules governing how super benefits can be distributed upon death. Death benefits can be paid as lump sums or income streams to eligible dependents, with different tax treatment depending on the recipient's relationship to the deceased. Binding death benefit nominations provide certainty about how super benefits will be distributed, while non-binding nominations give trustees discretion. Regular review of death benefit nominations ensures they remain current with changing family circumstances." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Superannuation Fees and Performance Monitoring" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Superannuation fees can significantly impact long-term retirement outcomes, making fee monitoring and fund comparison essential for optimal results. Administration fees, investment fees, advice fees, and insurance premiums all reduce net returns over time. The government's MySuper comparison tool and annual performance tests help members identify underperforming funds. Regular review of super arrangements, including consolidation of multiple accounts and optimization of insurance coverage, can improve net retirement outcomes and reduce unnecessary costs." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Technology and Digital Super Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Modern superannuation management benefits from digital tools and platforms that provide real-time account access, contribution tracking, and projection modeling. The Australian Taxation Office's online services allow easy monitoring of contribution cap usage and multiple account consolidation. Many super funds offer sophisticated online calculators and planning tools that help members optimize their contribution strategies and track progress toward retirement goals. Regular use of these digital tools improves engagement and helps members make more informed decisions about their super." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Frequently Asked Questions" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What is the current Superannuation Guarantee rate?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The Superannuation Guarantee rate is currently 11.5% (2024) and will increase to 12% from July 2025. This rate applies to ordinary time earnings for eligible employees, with employers required to pay this on top of wages and salaries." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How much can I contribute to super each year?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The concessional contributions cap is $27,500 annually (including employer SG and salary sacrifice). The non-concessional cap is $110,000 annually, with bring-forward rules allowing up to $330,000 over three years for those under 67 with balances below $1.9 million." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "When can I access my superannuation?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You can generally access your super when you reach your preservation age (55-60 depending on birth year) and retire, or at age 65 regardless of work status. Early access is possible in limited circumstances like severe financial hardship, permanent incapacity, or terminal illness." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Should I salary sacrifice into super?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Salary sacrifice can be beneficial if you're in a higher tax bracket (above 32.5%) as you'll save the difference between your marginal tax rate and the 15% super tax rate. Consider your cash flow needs, debt situation, and overall financial goals when deciding." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How much super do I need for retirement?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The Association of Superannuation Funds of Australia (ASFA) suggests singles need $690,000 and couples need $980,000 for a comfortable retirement (2024). However, your needs depend on lifestyle expectations, health costs, housing situation, and Age Pension eligibility." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Can I have multiple super accounts?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While you can have multiple super accounts, it's generally better to consolidate into one account to reduce fees and insurance premiums. However, keep accounts separate if you have different insurance needs or if one account has particularly good features or performance." })
              ] })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Important Information & Disclaimer" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator provides estimates only and should not be relied upon for final retirement planning decisions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Superannuation rules, contribution caps, and tax rates change regularly - always verify current regulations." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Investment returns are not guaranteed and actual performance may vary significantly from projections." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Age Pension eligibility depends on complex means testing that may differ from simplified calculations shown." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Consider seeking professional financial advice for comprehensive retirement planning strategies." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Superannuation involves long-term investing with risks including potential capital losses." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Early access to super may reduce retirement benefits and should be considered carefully." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator uses current 2024 rates and thresholds which may change in future years." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Results are estimates only and actual retirement outcomes may vary significantly from calculations." })
          ] }) })
        ] })
      ] })
    }
  );
};
export {
  SuperannuationCalculatorAustralia as default
};
