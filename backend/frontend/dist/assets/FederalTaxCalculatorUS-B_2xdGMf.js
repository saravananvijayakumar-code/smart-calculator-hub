import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, a2 as FileText, i as CardDescription, k as CardContent, a3 as Label, U as Input, a4 as Info } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { C as Checkbox } from "./checkbox-s-AZhYtA.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
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
import "./share-2-ViScha7M.js";
import "./link-DxXhzsoi.js";
import "./copy-DGMuG98H.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./linkedin-BSJyfSWT.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
const federalTaxBrackets2025 = {
  single: [
    { min: 0, max: 11925, rate: 0.1 },
    { min: 11926, max: 48475, rate: 0.12 },
    { min: 48476, max: 103350, rate: 0.22 },
    { min: 103351, max: 197300, rate: 0.24 },
    { min: 197301, max: 250525, rate: 0.32 },
    { min: 250526, max: 626350, rate: 0.35 },
    { min: 626351, max: Infinity, rate: 0.37 }
  ],
  marriedJointly: [
    { min: 0, max: 23850, rate: 0.1 },
    { min: 23851, max: 96950, rate: 0.12 },
    { min: 96951, max: 206700, rate: 0.22 },
    { min: 206701, max: 394600, rate: 0.24 },
    { min: 394601, max: 501050, rate: 0.32 },
    { min: 501051, max: 751600, rate: 0.35 },
    { min: 751601, max: Infinity, rate: 0.37 }
  ],
  marriedSeparately: [
    { min: 0, max: 11925, rate: 0.1 },
    { min: 11926, max: 48475, rate: 0.12 },
    { min: 48476, max: 103350, rate: 0.22 },
    { min: 103351, max: 197300, rate: 0.24 },
    { min: 197301, max: 250525, rate: 0.32 },
    { min: 250526, max: 375800, rate: 0.35 },
    { min: 375801, max: Infinity, rate: 0.37 }
  ],
  headOfHousehold: [
    { min: 0, max: 17e3, rate: 0.1 },
    { min: 17001, max: 64850, rate: 0.12 },
    { min: 64851, max: 103350, rate: 0.22 },
    { min: 103351, max: 197300, rate: 0.24 },
    { min: 197301, max: 250500, rate: 0.32 },
    { min: 250501, max: 626350, rate: 0.35 },
    { min: 626351, max: Infinity, rate: 0.37 }
  ]
};
const standardDeductions2025 = {
  single: 15e3,
  marriedJointly: 3e4,
  marriedSeparately: 15e3,
  headOfHousehold: 22500
};
function FederalTaxCalculatorUS() {
  const [grossIncome, setGrossIncome] = reactExports.useState("");
  const [filingStatus, setFilingStatus] = reactExports.useState("single");
  const [useStandardDeduction, setUseStandardDeduction] = reactExports.useState(true);
  const [itemizedDeductions, setItemizedDeductions] = reactExports.useState("");
  const [pre401k, setPre401k] = reactExports.useState("");
  const [healthInsurance, setHealthInsurance] = reactExports.useState("");
  const [otherPreTax, setOtherPreTax] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const calculateFederalTax = () => {
    const income = parseFloat(grossIncome);
    if (!income || income <= 0) {
      setResult(null);
      return;
    }
    const preTax401k = parseFloat(pre401k) || 0;
    const preTaxHealth = parseFloat(healthInsurance) || 0;
    const otherPreTaxDeductions = parseFloat(otherPreTax) || 0;
    const adjustedGrossIncome = income - preTax401k - preTaxHealth - otherPreTaxDeductions;
    const standardDeduction = standardDeductions2025[filingStatus];
    const itemized = parseFloat(itemizedDeductions) || 0;
    const totalDeductions = useStandardDeduction ? standardDeduction : Math.max(itemized, standardDeduction);
    const taxableIncome = Math.max(0, adjustedGrossIncome - totalDeductions);
    const brackets = federalTaxBrackets2025[filingStatus];
    let federalTax = 0;
    const taxByBracket = [];
    for (const bracket of brackets) {
      if (taxableIncome <= bracket.min) break;
      const upperLimit = Math.min(taxableIncome, bracket.max);
      const taxableInBracket = upperLimit - bracket.min;
      if (taxableInBracket > 0) {
        const taxInBracket = taxableInBracket * bracket.rate;
        federalTax += taxInBracket;
        taxByBracket.push({
          rate: bracket.rate * 100,
          income: taxableInBracket,
          tax: taxInBracket
        });
      }
    }
    const effectiveTaxRate = income > 0 ? federalTax / income * 100 : 0;
    let marginalTaxRate = 0;
    if (taxableIncome > 0) {
      const bracket = brackets.find((b) => taxableIncome > b.min && taxableIncome <= b.max);
      marginalTaxRate = bracket ? bracket.rate * 100 : 0;
    }
    const afterTaxIncome = income - federalTax;
    setResult({
      grossIncome: income,
      adjustedGrossIncome,
      taxableIncome,
      federalTax,
      effectiveTaxRate,
      marginalTaxRate,
      afterTaxIncome,
      taxByBracket,
      standardDeduction,
      totalDeductions
    });
  };
  reactExports.useEffect(() => {
    calculateFederalTax();
  }, [
    grossIncome,
    filingStatus,
    useStandardDeduction,
    itemizedDeductions,
    pre401k,
    healthInsurance,
    otherPreTax
  ]);
  const currentStandardDeduction = standardDeductions2025[filingStatus];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "Federal Income Tax Calculator 2025 | US Tax Calculator | Smart Calculator Hubs",
      description: "Calculate your 2025 federal income tax with current tax brackets, deductions, and rates. Free comprehensive tax calculator for all filing statuses with detailed breakdown.",
      keywords: "federal income tax calculator 2025, US tax calculator, income tax brackets, tax deductions, filing status, marginal tax rate, effective tax rate",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Federal Tax Information" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter your income and tax details to calculate your 2025 federal income tax." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "grossIncome", children: "Annual Gross Income (USD)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "grossIncome",
                      type: "number",
                      placeholder: "75000",
                      value: grossIncome,
                      onChange: (e) => setGrossIncome(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "filingStatus", children: "Filing Status" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filingStatus, onValueChange: setFilingStatus, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select filing status" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "single", children: "Single" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "marriedJointly", children: "Married Filing Jointly" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "marriedSeparately", children: "Married Filing Separately" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "headOfHousehold", children: "Head of Household" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "pre401k", children: "401(k) Contributions (USD)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "pre401k",
                      type: "number",
                      placeholder: "0",
                      value: pre401k,
                      onChange: (e) => setPre401k(e.target.value)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "2025 limit: $23,500 (under 50), $31,000 (50+)" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "healthInsurance", children: "Health Insurance Premiums (USD)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "healthInsurance",
                      type: "number",
                      placeholder: "0",
                      value: healthInsurance,
                      onChange: (e) => setHealthInsurance(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "otherPreTax", children: "Other Pre-tax Deductions (USD)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "otherPreTax",
                      type: "number",
                      placeholder: "0",
                      value: otherPreTax,
                      onChange: (e) => setOtherPreTax(e.target.value)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "HSA, FSA, transit benefits, etc." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 border-t pt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Checkbox,
                      {
                        id: "useStandardDeduction",
                        checked: useStandardDeduction,
                        onCheckedChange: (checked) => setUseStandardDeduction(checked === true)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "useStandardDeduction", className: "text-sm", children: [
                      "Use Standard Deduction ($",
                      currentStandardDeduction.toLocaleString(),
                      ")"
                    ] })
                  ] }),
                  !useStandardDeduction && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "itemizedDeductions", children: "Itemized Deductions (USD)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "itemizedDeductions",
                        type: "number",
                        placeholder: "0",
                        value: itemizedDeductions,
                        onChange: (e) => setItemizedDeductions(e.target.value)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "SALT, mortgage interest, charitable donations, etc." })
                  ] })
                ] })
              ] })
            ] }) })
          ] }),
          result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 bg-green-50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-green-800", children: "After-Tax Income" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-green-600", children: [
                    "$",
                    result.afterTaxIncome.toLocaleString("en-US", { maximumFractionDigits: 0 })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-700 mt-1", children: "Your take-home pay" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-red-200 bg-red-50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-red-800", children: "Federal Tax Owed" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-red-600", children: [
                    "$",
                    result.federalTax.toLocaleString("en-US", { maximumFractionDigits: 0 })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-700 mt-1", children: "Total federal tax" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Effective Tax Rate" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-blue-600", children: [
                    result.effectiveTaxRate.toFixed(2),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Average rate paid" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Marginal Tax Rate" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-purple-600", children: [
                    result.marginalTaxRate.toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Rate on next dollar" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Income Breakdown" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Gross Income:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      "$",
                      result.grossIncome.toLocaleString()
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Adjusted Gross Income:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      "$",
                      result.adjustedGrossIncome.toLocaleString()
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Total Deductions:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      "$",
                      result.totalDeductions.toLocaleString()
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t pt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Taxable Income:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", children: [
                      "$",
                      result.taxableIncome.toLocaleString()
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Tax by Bracket" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2", children: [
                  result.taxByBracket.map((bracket, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                      bracket.rate,
                      "% bracket:"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium", children: [
                        "$",
                        bracket.tax.toLocaleString("en-US", { maximumFractionDigits: 0 })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                        "on $",
                        bracket.income.toLocaleString("en-US", { maximumFractionDigits: 0 })
                      ] })
                    ] })
                  ] }, index)),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t pt-2 font-bold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Tax:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "$",
                      result.federalTax.toLocaleString("en-US", { maximumFractionDigits: 0 })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Understanding Federal Income Tax in 2025" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The federal income tax system in the United States uses a progressive tax structure, meaning higher incomes are taxed at higher rates. Understanding how this system works is crucial for effective tax planning and budgeting. Our calculator uses the most current 2025 tax brackets and standard deductions." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Key Tax Concepts:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Gross Income:" }),
                    " Your total income before any deductions or adjustments"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Adjusted Gross Income (AGI):" }),
                    " Gross income minus specific deductions like 401(k) contributions"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Taxable Income:" }),
                    " AGI minus standard or itemized deductions"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Marginal Tax Rate:" }),
                    " The tax rate applied to your last dollar of income"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Effective Tax Rate:" }),
                    " Your total tax divided by your total income"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "2025 Standard Deductions:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Single: $15,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Married Filing Jointly: $30,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Married Filing Separately: $15,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Head of Household: $22,500" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Progressive Tax System Explained:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `The U.S. tax system is progressive, meaning you don't pay the same rate on all your income. Instead, your income is divided into "brackets," with each bracket taxed at a different rate. For example, if you're single with $50,000 in taxable income, you pay 10% on the first $11,000, then 12% on the remaining $39,000. This is why your marginal rate (the rate on your last dollar) is always higher than your effective rate (average rate across all income).` })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Tax Planning Strategies" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Reduce Your Tax Burden:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Maximize 401(k) contributions ($23,500 limit in 2025)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Contribute to traditional IRA ($7,000 limit in 2025)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Use Health Savings Account (HSA) if eligible" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consider itemizing if deductions exceed standard" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Make charitable contributions before year-end" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Smart Tax Moves:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Harvest investment losses to offset gains" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Time large purchases for maximum deduction impact" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consider Roth IRA conversions in low-income years" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Optimize timing of stock option exercises" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Bunch itemizable expenses every other year" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Retirement Contributions:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Pre-tax retirement contributions are one of the most effective ways to reduce your current tax burden. For 2025, you can contribute up to $23,500 to a 401(k) plan, or $31,000 if you're 50 or older. Traditional IRA contributions may also be deductible, with limits of $7,000 ($8,000 if 50+), though deductibility phases out at higher income levels for those with workplace retirement plans." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Standard vs. Itemized Deductions:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The Tax Cuts and Jobs Act significantly increased standard deductions, making itemizing less beneficial for many taxpayers. However, you should still consider itemizing if your total deductions exceed the standard amount. Common itemized deductions include state and local taxes (SALT) up to $10,000, mortgage interest, charitable contributions, and medical expenses exceeding 7.5% of AGI." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Tax Credits vs. Deductions:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While this calculator focuses on deductions, don't forget about tax credits, which provide dollar-for-dollar tax reduction. Popular credits include the Child Tax Credit, Earned Income Tax Credit, American Opportunity Tax Credit for education, and various energy efficiency credits. Credits are applied after calculating your tax liability and can result in refunds if they exceed the tax owed." })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "2025 Tax Brackets and Changes" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "2025 Federal Tax Brackets:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs border-collapse border border-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-100", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 p-2 text-left", children: "Tax Rate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 p-2 text-left", children: "Single" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 p-2 text-left", children: "Married Filing Jointly" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 p-2 text-left", children: "Head of Household" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "10%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$0 - $11,925" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$0 - $23,850" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$0 - $17,000" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "12%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$11,926 - $48,475" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$23,851 - $96,950" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$17,001 - $64,850" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "22%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$48,476 - $103,350" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$96,951 - $206,700" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$64,851 - $103,350" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "24%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$103,351 - $197,300" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$206,701 - $394,600" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$103,351 - $197,300" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "32%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$197,301 - $250,525" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$394,601 - $501,050" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$197,301 - $250,500" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "35%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$250,526 - $626,350" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$501,051 - $751,600" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$250,501 - $626,350" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "37%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$626,351+" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$751,601+" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 p-2", children: "$626,351+" })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "What's New for 2025:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tax brackets adjusted upward for inflation (approximately 2.8% increase from 2024)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Standard deductions increased: Single $15,000, MFJ $30,000, HOH $22,500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "401(k) contribution limit increased to $23,500 ($31,000 for 50+)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "IRA contribution limit remains at $7,000 ($8,000 for 50+)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "HSA contribution limits: $4,300 individual, $8,550 family" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Planning for Tax Season:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Start your tax planning early by tracking deductible expenses throughout the year. Keep organized records of charitable donations, medical expenses, business expenses, and investment activities. Consider making estimated tax payments if you expect to owe $1,000 or more, and review your withholding if you consistently get large refunds or owe significant amounts at filing time." })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Frequently Asked Questions" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How accurate is this federal tax calculator?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our calculator uses official 2025 tax brackets and standard deductions from the IRS. However, it doesn't include all possible deductions, credits, or special circumstances. Use it for planning purposes, but consult a tax professional for complex situations." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What's the difference between marginal and effective tax rates?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Your marginal tax rate is the percentage you pay on your last dollar of income, while your effective tax rate is your total tax divided by total income. The effective rate is always lower due to the progressive nature of the tax system." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Should I itemize or take the standard deduction?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Take whichever gives you the larger deduction. With the increased standard deduction amounts, most taxpayers benefit from the standard deduction. Itemize only if your total itemizable deductions exceed the standard amount for your filing status." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How much should I contribute to my 401(k)?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "At minimum, contribute enough to get your full employer match. Beyond that, consider contributing as much as you can afford, up to the $23,500 annual limit ($31,000 if 50+). Higher earners may benefit from maximizing pre-tax contributions to reduce current tax liability." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Do I need to make estimated tax payments?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You may need to make quarterly estimated payments if you expect to owe $1,000 or more in taxes and haven't paid at least 90% of this year's tax liability (or 100% of last year's if income exceeds $150,000) through withholding." })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator provides estimates for federal income tax only and does not include state taxes, FICA taxes, or other payroll deductions." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Calculations are based on 2025 tax brackets and may not reflect all possible deductions, credits, or special circumstances." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Results do not constitute tax advice and should not be relied upon for filing tax returns or making financial decisions." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator does not include Alternative Minimum Tax (AMT) calculations, which may apply to high earners." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Tax laws are complex and subject to change - consult a qualified tax professional for personalized advice." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Consider the impact of state taxes, which vary significantly by location and can substantially affect your total tax burden." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Self-employed individuals should account for additional self-employment taxes not included in these calculations." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This tool is for planning purposes only and does not replace professional tax preparation services." })
            ] }) })
          ] })
        ] }),
        result && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExportShareButtons,
          {
            calculatorType: "federal-tax-us",
            inputs: { grossIncome, filingStatus, itemizedDeductions, pre401k, healthInsurance, otherPreTax },
            results: result,
            title: "Federal Tax Calculation"
          }
        ) })
      ]
    }
  );
}
export {
  FederalTaxCalculatorUS
};
