import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, l as House, i as CardDescription, k as CardContent, a4 as Label, V as Input, B as Button, C as Calculator, T as TrendingUp, aE as formatCurrency, a5 as Info } from "./index-CK9G4vW7.js";
import { S as Separator } from "./separator-63Q9JacM.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { A as AIAnalysis } from "./AIAnalysis-B-4zh-eH.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
import "./EnhancedAIAnalysis-BaYCd8m5.js";
import "./brain-CSngUEN8.js";
import "./target-4JeIm6Yk.js";
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
const NegativeGearingCalculatorAustralia = () => {
  const [propertyValue, setPropertyValue] = reactExports.useState("");
  const [weeklyRent, setWeeklyRent] = reactExports.useState("");
  const [loanAmount, setLoanAmount] = reactExports.useState("");
  const [interestRate, setInterestRate] = reactExports.useState("");
  const [annualExpenses, setAnnualExpenses] = reactExports.useState("");
  const [taxableIncome, setTaxableIncome] = reactExports.useState("");
  const [depreciationClaim, setDepreciationClaim] = reactExports.useState("");
  const [propertyManagement, setPropertyManagement] = reactExports.useState("");
  const [insurance, setInsurance] = reactExports.useState("");
  const [councilRates, setCouncilRates] = reactExports.useState("");
  const [results, setResults] = reactExports.useState(null);
  const calculateNegativeGearing = () => {
    const propValue = parseFloat(propertyValue);
    const rent = parseFloat(weeklyRent);
    const loan = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100;
    const expenses = parseFloat(annualExpenses) || 0;
    const income = parseFloat(taxableIncome);
    const depreciation = parseFloat(depreciationClaim) || 0;
    const management = parseFloat(propertyManagement) || 0;
    const insuranceAmt = parseFloat(insurance) || 0;
    const rates = parseFloat(councilRates) || 0;
    if (!propValue || !rent || !loan || !rate || !income) return;
    const annualRent = rent * 52;
    const annualInterest = loan * rate;
    const totalDeductions = annualInterest + expenses + depreciation + management + insuranceAmt + rates;
    const netRentalIncome = annualRent - totalDeductions;
    let marginalRate = 0;
    if (income <= 18200) marginalRate = 0;
    else if (income <= 45e3) marginalRate = 0.19;
    else if (income <= 12e4) marginalRate = 0.325;
    else if (income <= 18e4) marginalRate = 0.37;
    else marginalRate = 0.45;
    const taxBenefit = netRentalIncome < 0 ? Math.abs(netRentalIncome) * marginalRate : 0;
    const afterTaxLoss = netRentalIncome < 0 ? Math.abs(netRentalIncome) - taxBenefit : 0;
    const weeklyAfterTaxLoss = afterTaxLoss / 52;
    const grossYield = annualRent / propValue * 100;
    const netYield = netRentalIncome / propValue * 100;
    const breakEvenRent = totalDeductions / 52;
    const rentIncreaseNeeded = Math.max(0, breakEvenRent - rent);
    const minimumCapitalGrowth = afterTaxLoss;
    const minimumGrowthRate = minimumCapitalGrowth / propValue * 100;
    const loanToValueRatio = loan / propValue * 100;
    const equityPosition = propValue - loan;
    setResults({
      annualRent,
      annualInterest,
      totalDeductions,
      netRentalIncome,
      taxBenefit,
      afterTaxLoss: netRentalIncome < 0 ? afterTaxLoss : 0,
      weeklyAfterTaxLoss: netRentalIncome < 0 ? weeklyAfterTaxLoss : 0,
      grossYield,
      netYield,
      marginalRate: marginalRate * 100,
      breakEvenRent,
      rentIncreaseNeeded,
      minimumCapitalGrowth,
      minimumGrowthRate,
      loanToValueRatio,
      equityPosition,
      isNegativelyGeared: netRentalIncome < 0,
      positivelyGeared: netRentalIncome > 0
    });
  };
  const reset = () => {
    setPropertyValue("");
    setWeeklyRent("");
    setLoanAmount("");
    setInterestRate("");
    setAnnualExpenses("");
    setTaxableIncome("");
    setDepreciationClaim("");
    setPropertyManagement("");
    setInsurance("");
    setCouncilRates("");
    setResults(null);
  };
  const tips = [
    "Negative gearing allows tax deductions for rental property losses",
    "Interest, maintenance, and depreciation are all deductible expenses",
    "Tax savings depend on your marginal tax rate",
    "Consider both cash flow and capital growth in investment decisions",
    "Professional advice recommended for complex investment strategies"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Australia Negative Gearing Calculator | Investment Property Tax Calculator",
      description: "Comprehensive Australian negative gearing calculator for investment properties. Calculate tax benefits, cash flow, rental yields, and break-even analysis for property investments.",
      keywords: "Australia negative gearing calculator, investment property tax, rental property deductions, property investment Australia, tax benefits property",
      tips,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-5 w-5" }),
                "Negative Gearing Calculator"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Calculate tax benefits and cash flow from your investment property" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "propertyValue", children: "Property Value ($)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "propertyValue",
                      type: "number",
                      placeholder: "Total property value",
                      value: propertyValue,
                      onChange: (e) => setPropertyValue(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "weeklyRent", children: "Weekly Rent ($)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "weeklyRent",
                      type: "number",
                      placeholder: "Current weekly rent",
                      value: weeklyRent,
                      onChange: (e) => setWeeklyRent(e.target.value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "loanAmount", children: "Loan Amount ($)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "loanAmount",
                      type: "number",
                      placeholder: "Outstanding loan",
                      value: loanAmount,
                      onChange: (e) => setLoanAmount(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "interestRate", children: "Interest Rate (%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "interestRate",
                      type: "number",
                      step: "0.1",
                      placeholder: "Annual interest rate",
                      value: interestRate,
                      onChange: (e) => setInterestRate(e.target.value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "taxableIncome", children: "Annual Taxable Income ($)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "taxableIncome",
                    type: "number",
                    placeholder: "Your annual taxable income",
                    value: taxableIncome,
                    onChange: (e) => setTaxableIncome(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Deductible Expenses" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "propertyManagement", children: "Property Management ($)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "propertyManagement",
                      type: "number",
                      placeholder: "Annual management fees",
                      value: propertyManagement,
                      onChange: (e) => setPropertyManagement(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "insurance", children: "Insurance ($)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "insurance",
                      type: "number",
                      placeholder: "Annual insurance cost",
                      value: insurance,
                      onChange: (e) => setInsurance(e.target.value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "councilRates", children: "Council Rates ($)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "councilRates",
                      type: "number",
                      placeholder: "Annual council rates",
                      value: councilRates,
                      onChange: (e) => setCouncilRates(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "depreciationClaim", children: "Depreciation Claim ($)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "depreciationClaim",
                      type: "number",
                      placeholder: "Annual depreciation",
                      value: depreciationClaim,
                      onChange: (e) => setDepreciationClaim(e.target.value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "annualExpenses", children: "Other Annual Expenses ($)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "annualExpenses",
                    type: "number",
                    placeholder: "Repairs, maintenance, etc.",
                    value: annualExpenses,
                    onChange: (e) => setAnnualExpenses(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateNegativeGearing, className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "mr-2 h-4 w-4" }),
                  "Calculate"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: reset, variant: "outline", children: "Reset" })
              ] })
            ] })
          ] }),
          results && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
              "Investment Analysis"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-center p-4 rounded-lg",
                  style: { backgroundColor: results.isNegativelyGeared ? "#fef2f2" : "#f0f9ff" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: results.isNegativelyGeared ? "Negatively Geared" : results.positivelyGeared ? "Positively Geared" : "Break Even" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: results.isNegativelyGeared ? "Property makes a loss before tax" : results.positivelyGeared ? "Property generates positive cash flow" : "Property breaks even on cash flow" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Annual Rental Income" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-green-600", children: formatCurrency(results.annualRent, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total Deductions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-red-600", children: formatCurrency(results.totalDeductions, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Net Rental Income" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-lg font-semibold ${results.netRentalIncome >= 0 ? "text-green-600" : "text-red-600"}`, children: formatCurrency(results.netRentalIncome, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Tax Benefit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-blue-600", children: formatCurrency(results.taxBenefit, "AUD") })
                ] })
              ] }),
              results.isNegativelyGeared && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 pt-4 border-t", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "After-Tax Loss (Annual)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-orange-600", children: formatCurrency(results.afterTaxLoss, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "After-Tax Loss (Weekly)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-orange-600", children: formatCurrency(results.weeklyAfterTaxLoss, "AUD") })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Investment Metrics" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Gross Yield" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                      results.grossYield.toFixed(2),
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Net Yield" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: results.netYield >= 0 ? "secondary" : "destructive", children: [
                      results.netYield.toFixed(2),
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Marginal Tax Rate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                      results.marginalRate.toFixed(1),
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "LVR" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
                      results.loanToValueRatio.toFixed(1),
                      "%"
                    ] })
                  ] })
                ] })
              ] }),
              results.isNegativelyGeared && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 p-3 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-sm mb-2", children: "Capital Growth Required" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  "Minimum annual capital growth needed: ",
                  formatCurrency(results.minimumCapitalGrowth, "AUD"),
                  "(",
                  results.minimumGrowthRate.toFixed(2),
                  "% of property value)"
                ] })
              ] })
            ] })
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIAnalysis,
            {
              analysisRequest: {
                calculatorType: "negative-gearing-australia",
                data: {
                  rentalIncome: results.annualRent,
                  propertyExpenses: results.totalDeductions - results.annualInterest,
                  interestExpenses: results.annualInterest,
                  negativeGearing: Math.abs(Math.min(0, results.netRentalIncome)),
                  taxSavings: results.taxBenefit,
                  netCashFlow: results.netRentalIncome
                }
              },
              autoRun: true,
              title: "AI Property Investment Analysis",
              description: "Get personalized insights on your negative gearing strategy, cash flow optimization, and investment performance."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "negative-gearing-australia",
              inputs: {
                propertyValue: parseFloat(propertyValue) || 0,
                weeklyRent: parseFloat(weeklyRent) || 0,
                loanAmount: parseFloat(loanAmount) || 0,
                interestRate: parseFloat(interestRate) || 0,
                taxableIncome: parseFloat(taxableIncome) || 0
              },
              results: {
                annualRent: results.annualRent,
                annualInterest: results.annualInterest,
                totalDeductions: results.totalDeductions,
                netRentalIncome: results.netRentalIncome,
                taxBenefit: results.taxBenefit,
                cashFlowAfterTax: results.cashFlowAfterTax
              },
              title: "Negative Gearing Calculator Australia Report",
              className: "mt-6"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Complete Guide to Negative Gearing in Australia" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Negative gearing is a popular investment strategy in Australia that allows property investors to claim tax deductions when their investment property expenses exceed rental income. This comprehensive guide explains how negative gearing works, its benefits and risks, tax implications, and strategic considerations for Australian property investors. Understanding negative gearing is crucial for making informed investment decisions and maximizing the tax benefits available to property investors." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "What is Negative Gearing?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Negative gearing occurs when the costs of owning an investment property (including loan interest, maintenance, insurance, and other expenses) exceed the rental income received. The resulting loss can be offset against other taxable income, reducing your overall tax liability. This tax benefit effectively reduces the out-of-pocket cost of holding the investment property, making it more affordable for investors to build wealth through real estate." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Deductible Expenses for Investment Properties" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Australian tax law allows investors to claim various expenses as tax deductions for investment properties. These include loan interest (the largest deduction for most investors), property management fees, insurance premiums, council rates, land tax, repairs and maintenance, advertising for tenants, legal fees, and depreciation on the building and fixtures. Understanding which expenses are deductible helps investors maximize their tax benefits and improve their investment returns." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Common Deductible Expenses:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Loan interest payments" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Property management fees (typically 5-8% of rent)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Insurance premiums (landlord insurance, building insurance)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Council rates and land tax" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Repairs and maintenance" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Depreciation (building and fixtures)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Professional fees (accountant, property manager)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Advertising costs for finding tenants" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Tax Benefits and Marginal Tax Rates" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The tax benefit from negative gearing depends on your marginal tax rate. Higher income earners receive greater tax benefits because losses offset income taxed at higher rates. For example, someone in the 37% tax bracket receives 37 cents back for every dollar of deductible loss, while someone in the 19% bracket receives only 19 cents. This makes negative gearing particularly attractive for high-income earners seeking to reduce their tax liability." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Capital Growth vs Cash Flow Strategy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Negative gearing is typically part of a capital growth investment strategy where investors accept short-term cash flow losses in expectation of long-term capital appreciation. The theory is that tax benefits reduce the cost of holding the property while capital growth provides the primary return. However, investors must carefully consider whether expected capital growth will exceed the cumulative after-tax losses over the holding period." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Depreciation Benefits" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Depreciation represents a significant tax benefit for property investors, allowing claims for the decline in value of the building and fixtures over time. Building depreciation (previously capital works deduction) applies to properties built after 15 September 1987 at 2.5% per year for 40 years. Plant and equipment depreciation covers items like air conditioning, carpets, and appliances. A quantity surveyor's depreciation schedule can help maximize these claims." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Interest-Only Loans and Negative Gearing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Many negatively geared investors use interest-only loans to maximize their interest deductions and minimize cash flow requirements. Interest-only loans don't reduce the principal balance, meaning the loan amount and interest deductions remain constant (assuming fixed rates). However, investors must plan for the eventual transition to principal and interest payments and consider the long-term implications of not building equity through loan repayments." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Strategic Considerations and Risk Management" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Cash Flow Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While negative gearing provides tax benefits, investors must have sufficient cash flow to cover the after-tax losses. The tax refund typically comes 12-18 months after expenses are incurred, requiring investors to fund the property from other sources in the meantime. Planning for vacancy periods, unexpected repairs, and interest rate increases is crucial for maintaining the investment strategy long-term." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Interest Rate Risk" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Rising interest rates can significantly impact negatively geared properties by increasing the largest expense (loan interest) while potentially reducing property values. Investors should model various interest rate scenarios and consider their capacity to service higher loan payments. Fixed-rate loans can provide certainty but may limit flexibility if rates fall." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Market Timing and Location Selection" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Successful negative gearing strategies depend heavily on capital growth, making property selection and market timing crucial. Investors should research growth markets, consider population growth, infrastructure development, and economic drivers in their target areas. Diversification across different locations and property types can help reduce concentration risk." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Key Risk Factors to Consider:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Interest rate increases affecting serviceability" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Vacancy periods reducing rental income" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Unexpected maintenance and repair costs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Market downturns affecting capital values" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Changes to tax laws affecting deductibility" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Personal income changes affecting tax benefits" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Liquidity constraints during market stress" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Tax Law Changes and Political Risk" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Negative gearing has been subject to political debate in Australia, with proposals to limit or abolish the strategy creating uncertainty for investors. Changes to depreciation rules in recent years have already reduced some benefits. Investors should consider the potential for future tax law changes and avoid over-leveraging based solely on current tax benefits." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Alternative Investment Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While negative gearing is popular, investors should consider alternative strategies such as positive gearing (where rental income exceeds expenses), neutral gearing (break-even cash flow), or investing in growth assets outside property. Each strategy has different risk/return profiles and tax implications that may be more suitable depending on an investor's circumstances and objectives." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Exit Strategies and Capital Gains Tax" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Investors must plan their exit strategy from the outset, considering capital gains tax implications upon sale. The 50% CGT discount for assets held over 12 months can significantly improve returns, but the discount doesn't apply to depreciation recapture. Timing of sales to coincide with lower income years can also optimize tax outcomes." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Professional Advice and Ongoing Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Successful property investment requires ongoing professional support including accountants for tax planning, buyer's agents for property selection, property managers for day-to-day management, and financial advisors for overall strategy. Regular reviews ensure the investment remains aligned with changing circumstances and market conditions." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Frequently Asked Questions" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How much can I claim for depreciation on my investment property?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Depreciation claims depend on the property's age, construction date, and fixtures. Building depreciation is 2.5% annually for properties built after 1987. Plant and equipment depreciation varies by item. A quantity surveyor's report typically costs $600-800 but can identify thousands in additional deductions." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What happens if I make my property positively geared?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If rental income exceeds expenses, the property becomes positively geared and you'll pay tax on the net rental income. However, you can still claim all legitimate deductions. Some investors prefer positive gearing for better cash flow, especially as they approach retirement." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Can I use negative gearing losses against my spouse's income?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No, rental losses can only be offset against the income of the person who owns the investment property. However, couples can structure ownership to optimize tax benefits, such as having the higher income earner own investment properties while the lower income earner owns positively geared assets." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What records do I need to keep for negative gearing claims?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Keep all receipts for property-related expenses, loan statements showing interest paid, rental income records, property management statements, and any professional reports. Records must be kept for five years after lodging your tax return. Digital record-keeping is acceptable and often more convenient." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Is negative gearing worth it for lower income earners?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Negative gearing benefits are proportional to your marginal tax rate. Lower income earners receive smaller tax refunds, making positive or neutral gearing potentially more attractive. Consider your total financial position, risk tolerance, and investment objectives rather than just tax benefits." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How do interest rate changes affect my negative gearing strategy?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Rising rates increase your largest expense (interest) and potential tax deductions, but also increase out-of-pocket costs. Falling rates reduce both expenses and deductions. Model different rate scenarios and ensure you can service loans even if rates rise significantly." })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator provides estimates only and should not be relied upon for investment or tax decisions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Tax laws are complex and subject to change - seek professional tax advice for your specific circumstances." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Negative gearing involves investment risk including potential capital losses and cash flow pressure." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Interest rates, rental yields, and property values can fluctuate significantly affecting returns." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Past performance and tax benefits are not guarantees of future results." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator doesn't consider all possible expenses or income sources related to property investment." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Professional advice from qualified accountants, financial advisors, and property professionals is recommended." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Consider your personal financial situation, risk tolerance, and investment objectives before investing." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Results are estimates only and actual outcomes may vary significantly from calculations shown." })
          ] }) })
        ] })
      ] })
    }
  );
};
export {
  NegativeGearingCalculatorAustralia as default
};
