import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, a2 as FileText, i as CardDescription, k as CardContent, a3 as Label, U as Input, B as Button, C as Calculator, T as TrendingUp, aD as formatCurrency, a4 as Info } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { S as Separator } from "./separator-CgM4Fzdg.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { E as EnhancedAIAnalysis } from "./EnhancedAIAnalysis-BZiQW2bt.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./share-2-ViScha7M.js";
import "./link-DxXhzsoi.js";
import "./copy-DGMuG98H.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./linkedin-BSJyfSWT.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
import "./loader-circle-BYW7QwsU.js";
import "./brain-U3SZm3t9.js";
import "./target-1ApqtYDG.js";
import "./circle-check-big-BoxGYPKG.js";
import "./arrow-right-CtOKJdMG.js";
import "./lightbulb-doNczJxC.js";
const IncomeTaxCalculatorAustralia = () => {
  const [grossIncome, setGrossIncome] = reactExports.useState("");
  const [residencyStatus, setResidencyStatus] = reactExports.useState("resident");
  const [hasMedicare, setHasMedicare] = reactExports.useState("full");
  const [hasHELP, setHasHELP] = reactExports.useState("no");
  const [results, setResults] = reactExports.useState(null);
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
    if (!income || income <= 0) return;
    const brackets = residencyStatus === "resident" ? taxBrackets2025 : foreignResidentBrackets;
    let incomeTax = 0;
    for (const bracket of brackets) {
      if (income <= bracket.min) break;
      const taxableInBracket = Math.min(income, bracket.max) - bracket.min;
      if (taxableInBracket > 0) {
        incomeTax += taxableInBracket * bracket.rate;
      }
    }
    let medicareLevy2 = 0;
    if (residencyStatus === "resident" && hasMedicare === "full") {
      medicareLevy2 = income * 0.02;
    } else if (residencyStatus === "resident" && hasMedicare === "half") {
      medicareLevy2 = income * 0.01;
    }
    let helpRepayment = 0;
    if (hasHELP === "yes") {
      if (income > 54435) {
        const helpRate = calculateHELPRate(income);
        helpRepayment = income * helpRate;
      }
    }
    const totalTax = incomeTax + medicareLevy2 + helpRepayment;
    const netIncome = income - totalTax;
    const effectiveTaxRate = totalTax / income * 100;
    const marginalTaxRate = calculateMarginalRate(income, residencyStatus);
    setResults({
      grossIncome: income,
      incomeTax,
      medicareLevy: medicareLevy2,
      helpRepayment,
      totalTax,
      netIncome,
      effectiveTaxRate,
      marginalTaxRate,
      monthlyGross: income / 12,
      monthlyNet: netIncome / 12,
      fortnightlyGross: income / 26,
      fortnightlyNet: netIncome / 26
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
  const calculateMarginalRate = (income, residency) => {
    if (residency === "resident") {
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
    setResults(null);
  };
  const tips = [
    "Tax-free threshold: $18,200 for Australian residents",
    "Medicare Levy: 2% of taxable income for most residents",
    "HELP/HECS debt repayment starts at $54,435 income",
    "Stage 3 tax cuts effective from 1 July 2024",
    "Foreign residents don't pay Medicare Levy but have no tax-free threshold"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "Australia Income Tax Calculator 2025-26",
      description: "Calculate your Australian income tax for the 2025-26 financial year with updated tax brackets, Medicare Levy, and HELP/HECS repayments",
      keywords: "Australia income tax calculator, tax calculator 2025-26, Medicare Levy, HELP debt, HECS, Australian tax rates",
      tips,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5" }),
                "Income Tax Calculator"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Calculate your tax for FY 2025-26 (1 July 2025 - 30 June 2026)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "resident", children: "Australian Resident" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "foreign", children: "Foreign Resident" })
                  ] })
                ] })
              ] }),
              residencyStatus === "resident" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "hasMedicare", children: "Medicare Levy" }),
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
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "hasHELP", children: "HELP/HECS Debt" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: hasHELP, onValueChange: setHasHELP, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Do you have HELP/HECS debt?" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "no", children: "No HELP/HECS Debt" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "yes", children: "Yes, I have HELP/HECS Debt" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateTax, className: "flex-1", children: [
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
              "Tax Calculation Results"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Gross Income" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: formatCurrency(results.grossIncome, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Net Income" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-green-600", children: formatCurrency(results.netIncome, "AUD") })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Tax Breakdown" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Income Tax:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: formatCurrency(results.incomeTax, "AUD") })
                  ] }),
                  results.medicareLevy > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Medicare Levy:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: formatCurrency(results.medicareLevy, "AUD") })
                  ] }),
                  results.helpRepayment > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "HELP Repayment:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: formatCurrency(results.helpRepayment, "AUD") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t pt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Total Tax:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-600", children: formatCurrency(results.totalTax, "AUD") })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Tax Rates" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Effective Rate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                      results.effectiveTaxRate.toFixed(2),
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Marginal Rate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
                      results.marginalTaxRate,
                      "%"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Take-Home Pay" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Monthly" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-green-600", children: formatCurrency(results.monthlyNet, "AUD") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Fortnightly" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-green-600", children: formatCurrency(results.fortnightlyNet, "AUD") })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5" }),
            "Understanding Australian Income Tax 2025-26"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Australia's income tax system operates on a progressive basis, where higher earners pay a higher percentage of their income in tax. The 2024-25 financial year saw the implementation of Stage 3 tax cuts, which have been continued into 2025-26, providing tax relief across all income brackets while maintaining the progressive nature of the tax system." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "2025-26 Tax Brackets for Residents" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For Australian residents, the tax system includes a tax-free threshold of $18,200, meaning the first $18,200 of income is not taxed. Above this threshold, the following rates apply:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "$18,201 - $45,000: 16% tax rate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "$45,001 - $135,000: 30% tax rate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "$135,001 - $190,000: 37% tax rate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "$190,001 and above: 45% tax rate" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Medicare Levy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Most Australian residents pay the Medicare Levy, which is 2% of taxable income. This levy helps fund Australia's public health system. Low-income earners may be eligible for a reduction or exemption from the Medicare Levy. Additionally, high-income earners without private health insurance may be subject to the Medicare Levy Surcharge." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "HELP/HECS Debt Repayment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If you have a Higher Education Loan Program (HELP) or Higher Education Contribution Scheme (HECS) debt, you must make compulsory repayments once your income exceeds $54,435 (2025-26 threshold). The repayment rate increases progressively with income, ranging from 1% to 10% of your taxable income." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Foreign Residents" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Foreign residents (non-residents for tax purposes) do not receive the tax-free threshold and pay tax from the first dollar earned in Australia. They are also generally not liable for the Medicare Levy. The tax rates for foreign residents start at 30% for income up to $135,000." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Stage 3 Tax Cuts Impact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The Stage 3 tax cuts, which began in 2024-25, have simplified the tax system by reducing the number of tax brackets and lowering rates for middle and higher income earners. The 16% rate for income between $18,201 and $45,000 represents a reduction from the previous 19% rate, while the threshold for the 45% top rate was increased from $180,000 to $190,000." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Tax Offsets and Deductions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Various tax offsets and deductions can reduce your taxable income or tax payable. Common deductions include work-related expenses, self-education expenses, donations to charities, and investment property expenses. The Low and Middle Income Tax Offset (LMITO) ended after 2021-22, but the Low Income Tax Offset (LITO) of up to $700 remains available for eligible taxpayers." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Superannuation Considerations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Superannuation contributions are generally taxed at 15% within the super fund, which is typically lower than personal income tax rates. Making additional concessional (before-tax) super contributions can be a tax-effective strategy, subject to contribution caps. For 2025-26, the concessional contributions cap is $30,000 per year." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Planning for Tax Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Understanding your tax obligations helps with financial planning throughout the year. Consider keeping records of all tax-deductible expenses, reviewing your salary sacrifice options, and consulting with a registered tax agent for personalized advice. The Australian Tax Office (ATO) provides extensive resources and tools to help taxpayers understand their obligations and maximize legitimate deductions." })
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            EnhancedAIAnalysis,
            {
              calculatorType: "income-tax-australia",
              data: {
                grossIncome: results.grossIncome,
                netIncome: results.netIncome,
                totalTax: results.totalTax,
                effectiveTaxRate: results.effectiveTaxRate,
                marginalTaxRate: results.marginalTaxRate,
                residencyStatus,
                hasMedicare,
                hasHELP
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "income-tax-australia",
              inputs: {
                grossIncome,
                residencyStatus,
                hasMedicare,
                hasHELP
              },
              results,
              title: "Australian Income Tax Calculation"
            }
          ) })
        ] })
      ]
    }
  );
};
export {
  IncomeTaxCalculatorAustralia as default
};
