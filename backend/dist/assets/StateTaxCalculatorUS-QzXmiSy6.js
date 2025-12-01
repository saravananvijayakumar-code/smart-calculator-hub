import { r as reactExports, j as jsxRuntimeExports, C as Calculator, T as TrendingUp, f as Card, g as CardHeader, h as CardTitle, D as DollarSign, i as CardDescription, k as CardContent, a3 as Label, U as Input, a5 as Alert, p as TriangleAlert, a6 as AlertDescription } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-BNSAX0su.js";
import { P as Progress } from "./progress-BN2f3CdS.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { A as AIAnalysis } from "./AIAnalysis-DnR9Up6F.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { C as ChartPie } from "./chart-pie-BW94oKR-.js";
import { B as BookOpen } from "./book-open-BKiKsQcZ.js";
import { M as MapPin } from "./map-pin-CJs2GFz9.js";
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
import "./share-2-ViScha7M.js";
import "./link-DxXhzsoi.js";
import "./copy-DGMuG98H.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./linkedin-BSJyfSWT.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
const stateTaxData = {
  CA: {
    name: "California",
    hasStateIncomeTax: true,
    standardDeduction: 5202,
    rank: 1,
    notes: "Highest state income tax rates in the US, with top rate of 13.3% including mental health tax",
    brackets: [
      { min: 0, max: 10099, rate: 0.01 },
      { min: 10100, max: 23942, rate: 0.02 },
      { min: 23943, max: 37788, rate: 0.04 },
      { min: 37789, max: 52455, rate: 0.06 },
      { min: 52456, max: 66295, rate: 0.08 },
      { min: 66296, max: 338639, rate: 0.093 },
      { min: 338640, max: 406364, rate: 0.103 },
      { min: 406365, max: 677278, rate: 0.113 },
      { min: 677279, max: Infinity, rate: 0.123 }
    ]
  },
  NY: {
    name: "New York",
    hasStateIncomeTax: true,
    standardDeduction: 8e3,
    rank: 2,
    notes: "High state tax rates, especially when combined with NYC local income tax",
    brackets: [
      { min: 0, max: 8500, rate: 0.04 },
      { min: 8501, max: 11700, rate: 0.045 },
      { min: 11701, max: 13900, rate: 0.0525 },
      { min: 13901, max: 80650, rate: 0.055 },
      { min: 80651, max: 215400, rate: 0.06 },
      { min: 215401, max: 1077550, rate: 0.0685 },
      { min: 1077551, max: 5e6, rate: 0.0965 },
      { min: 5000001, max: 25e6, rate: 0.103 },
      { min: 25000001, max: Infinity, rate: 0.109 }
    ]
  },
  TX: {
    name: "Texas",
    hasStateIncomeTax: false,
    standardDeduction: 0,
    rank: 50,
    notes: "No state income tax, relying on sales tax and property tax for revenue",
    brackets: []
  },
  FL: {
    name: "Florida",
    hasStateIncomeTax: false,
    standardDeduction: 0,
    rank: 50,
    notes: "No state income tax, popular retirement destination for tax benefits",
    brackets: []
  },
  WA: {
    name: "Washington",
    hasStateIncomeTax: false,
    standardDeduction: 0,
    rank: 50,
    notes: "No state income tax, but has a capital gains tax on high earners",
    brackets: []
  },
  NV: {
    name: "Nevada",
    hasStateIncomeTax: false,
    standardDeduction: 0,
    rank: 50,
    notes: "No state income tax, business-friendly environment",
    brackets: []
  },
  IL: {
    name: "Illinois",
    hasStateIncomeTax: true,
    standardDeduction: 2775,
    rank: 15,
    notes: "Flat tax state with 4.95% rate on all income levels",
    brackets: [
      { min: 0, max: Infinity, rate: 0.0495 }
    ]
  },
  NJ: {
    name: "New Jersey",
    hasStateIncomeTax: true,
    standardDeduction: 1e3,
    rank: 3,
    notes: "High state tax rates, especially on high earners",
    brackets: [
      { min: 0, max: 2e4, rate: 0.014 },
      { min: 20001, max: 35e3, rate: 0.0175 },
      { min: 35001, max: 4e4, rate: 0.035 },
      { min: 40001, max: 75e3, rate: 0.0553 },
      { min: 75001, max: 5e5, rate: 0.0637 },
      { min: 500001, max: 5e6, rate: 0.0897 },
      { min: 5000001, max: Infinity, rate: 0.1075 }
    ]
  }
};
const federalTaxBrackets2025 = [
  { min: 0, max: 11925, rate: 0.1 },
  { min: 11926, max: 48475, rate: 0.12 },
  { min: 48476, max: 103350, rate: 0.22 },
  { min: 103351, max: 197300, rate: 0.24 },
  { min: 197301, max: 250525, rate: 0.32 },
  { min: 250526, max: 626350, rate: 0.35 },
  { min: 626351, max: Infinity, rate: 0.37 }
];
const federalStandardDeduction = {
  single: 15e3,
  marriedJointly: 3e4,
  marriedSeparately: 15e3,
  headOfHousehold: 22500
};
function calculateTax(income, brackets) {
  let tax = 0;
  for (const bracket of brackets) {
    if (income <= bracket.min) break;
    const taxableInBracket = Math.min(income, bracket.max) - bracket.min;
    tax += taxableInBracket * bracket.rate;
  }
  return tax;
}
function calculateTaxBreakdown(income, brackets) {
  const breakdown = [];
  let remainingIncome = income;
  for (const bracket of brackets) {
    if (remainingIncome <= 0) break;
    const taxableInBracket = Math.min(remainingIncome, bracket.max - bracket.min);
    if (taxableInBracket > 0) {
      breakdown.push({
        range: `$${bracket.min.toLocaleString()} - ${bracket.max === Infinity ? "Above" : `$${bracket.max.toLocaleString()}`}`,
        rate: (bracket.rate * 100).toFixed(1) + "%",
        income: taxableInBracket,
        tax: taxableInBracket * bracket.rate
      });
      remainingIncome -= taxableInBracket;
    }
  }
  return breakdown;
}
function StateTaxCalculatorUS() {
  const [grossIncome, setGrossIncome] = reactExports.useState("75000");
  const [filingStatus, setFilingStatus] = reactExports.useState("single");
  const [state, setState] = reactExports.useState("CA");
  const [federalDeductions, setFederalDeductions] = reactExports.useState("");
  const [stateDeductions, setStateDeductions] = reactExports.useState("");
  const [activeTab, setActiveTab] = reactExports.useState("calculator");
  const [results, setResults] = reactExports.useState({
    federalTaxableIncome: 0,
    stateTaxableIncome: 0,
    federalTax: 0,
    stateTax: 0,
    totalTax: 0,
    effectiveTaxRate: 0,
    marginalTaxRate: 0,
    afterTaxIncome: 0,
    federalBreakdown: [],
    stateBreakdown: [],
    comparison: []
  });
  reactExports.useEffect(() => {
    var _a, _b;
    const income = parseFloat(grossIncome) || 0;
    const fedDeductions = parseFloat(federalDeductions) || federalStandardDeduction[filingStatus];
    const stateInfo2 = stateTaxData[state];
    const stDeductions = parseFloat(stateDeductions) || (stateInfo2.hasStateIncomeTax ? stateInfo2.standardDeduction : 0);
    const federalTaxableIncome = Math.max(0, income - fedDeductions);
    const stateTaxableIncome = Math.max(0, income - stDeductions);
    const federalTax = calculateTax(federalTaxableIncome, federalTaxBrackets2025);
    const stateTax = stateInfo2.hasStateIncomeTax ? calculateTax(stateTaxableIncome, stateInfo2.brackets) : 0;
    const totalTax = federalTax + stateTax;
    const effectiveTaxRate = income > 0 ? totalTax / income * 100 : 0;
    const afterTaxIncome = income - totalTax;
    let marginalTaxRate = 0;
    if (federalTaxableIncome > 0) {
      const federalMarginal = ((_a = federalTaxBrackets2025.find(
        (bracket) => federalTaxableIncome > bracket.min && federalTaxableIncome <= bracket.max
      )) == null ? void 0 : _a.rate) || 0;
      const stateMarginal = stateInfo2.hasStateIncomeTax && stateTaxableIncome > 0 ? ((_b = stateInfo2.brackets.find(
        (bracket) => stateTaxableIncome > bracket.min && stateTaxableIncome <= bracket.max
      )) == null ? void 0 : _b.rate) || 0 : 0;
      marginalTaxRate = (federalMarginal + stateMarginal) * 100;
    }
    const federalBreakdown = calculateTaxBreakdown(federalTaxableIncome, federalTaxBrackets2025);
    const stateBreakdown = stateInfo2.hasStateIncomeTax ? calculateTaxBreakdown(stateTaxableIncome, stateInfo2.brackets) : [];
    const comparison = Object.entries(stateTaxData).map(([code, info]) => {
      const stateStateTax = info.hasStateIncomeTax ? calculateTax(Math.max(0, income - (info.standardDeduction || 0)), info.brackets || []) : 0;
      return {
        state: info.name || "Unknown State",
        code,
        stateTax: isNaN(stateStateTax) ? 0 : stateStateTax,
        totalTax: isNaN(federalTax + stateStateTax) ? 0 : federalTax + stateStateTax,
        effectiveRate: income > 0 && !isNaN(federalTax + stateStateTax) ? (federalTax + stateStateTax) / income * 100 : 0,
        hasStateIncomeTax: info.hasStateIncomeTax || false
      };
    }).filter((item) => item.state !== "Unknown State").sort((a, b) => a.totalTax - b.totalTax);
    setResults({
      federalTaxableIncome,
      stateTaxableIncome,
      federalTax,
      stateTax,
      totalTax,
      effectiveTaxRate,
      marginalTaxRate,
      afterTaxIncome,
      federalBreakdown,
      stateBreakdown,
      comparison
    });
  }, [grossIncome, filingStatus, state, federalDeductions, stateDeductions]);
  const stateInfo = stateTaxData[state];
  const analysisData = {
    grossIncome: parseFloat(grossIncome) || 0,
    filingStatus,
    state,
    federalTaxableIncome: results.federalTaxableIncome,
    stateTaxableIncome: results.stateTaxableIncome,
    federalTax: results.federalTax,
    stateTax: results.stateTax,
    totalTax: results.totalTax,
    effectiveTaxRate: results.effectiveTaxRate,
    marginalTaxRate: results.marginalTaxRate,
    afterTaxIncome: results.afterTaxIncome,
    federalDeductions: parseFloat(federalDeductions) || federalStandardDeduction[filingStatus],
    stateDeductions: parseFloat(stateDeductions) || (stateInfo.hasStateIncomeTax ? stateInfo.standardDeduction : 0),
    hasStateIncomeTax: stateInfo.hasStateIncomeTax
  };
  const educationalContent = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-6 w-6" }),
      "Complete Guide to US State Income Taxes"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose max-w-none space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Understanding State Income Tax Systems" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "State income taxes vary dramatically across the United States, creating significant differences in your overall tax burden depending on where you live. Understanding these differences is crucial for financial planning, career decisions, and retirement planning. This comprehensive guide explores everything you need to know about state income taxes in 2024." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "The Three Categories of State Tax Systems" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-green-700 mb-2", children: "No State Income Tax (9 States)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, Wyoming" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "These states don't impose income tax on individuals, though they may have other taxes like sales tax or property tax." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-blue-700 mb-2", children: "Flat Tax States (9 States)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "Colorado, Illinois, Indiana, Kentucky, Michigan, North Carolina, Pennsylvania, Utah" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "These states apply the same tax rate to all income levels, regardless of how much you earn." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-orange-700 mb-2", children: "Progressive Tax States (32 States + DC)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "Including California, New York, New Jersey" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "These states use graduated tax brackets where higher earners pay higher rates on income above certain thresholds." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "How State Income Taxes Work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "State income taxes operate similarly to federal taxes but with important differences. Most states that impose income tax use your federal adjusted gross income (AGI) as a starting point, then apply state-specific deductions, exemptions, and credits. However, the calculation methods vary significantly between states." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Key Components of State Tax Calculation:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-2 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Starting Point:" }),
            " Most states begin with your federal AGI or taxable income"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "State Additions:" }),
            " Income items that may be taxable at the state level but not federal"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "State Subtractions:" }),
            " Deductions or exemptions specific to your state"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "State Standard Deduction:" }),
            " Often different from the federal standard deduction"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "State Tax Brackets:" }),
            " Progressive rates applied to your state taxable income"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "State Credits:" }),
            " Direct reductions in your tax liability"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Highest and Lowest Tax States" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-red-700 mb-3", children: "Highest Tax Burden States" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-2 bg-red-50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "California" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-red-700", children: "Up to 13.3%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-2 bg-red-50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "New York" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-red-700", children: "Up to 10.9%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-2 bg-red-50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "New Jersey" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-red-700", children: "Up to 10.75%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-2 bg-red-50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Oregon" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-red-700", children: "Up to 9.9%" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-green-700 mb-3", children: "No State Income Tax" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-2 bg-green-50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Texas" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-green-700", children: "0%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-2 bg-green-50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Florida" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-green-700", children: "0%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-2 bg-green-50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Washington" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-green-700", children: "0%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-2 bg-green-50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Nevada" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-green-700", children: "0%" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Strategic Tax Planning Considerations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Income Timing Strategies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "If you live in a high-tax state, timing your income recognition can significantly impact your tax liability. Consider deferring bonuses, stock option exercises, or retirement account distributions to years when you might be in a lower tax bracket or living in a lower-tax state." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Retirement Planning" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Many retirees relocate to states with no income tax to preserve their retirement savings. States like Florida, Texas, and Nevada are popular retirement destinations partly due to their tax advantages. However, consider other factors like cost of living, healthcare access, and quality of life." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Business Considerations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "If you're self-employed or own a business, state taxes become even more complex. Some states offer favorable treatment for business income, while others may impose additional taxes on business profits. Research your state's specific rules for business taxation." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Common State Tax Deductions and Credits" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Popular State Deductions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-1 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "State and local taxes paid to other states" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Retirement income exemptions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Student loan interest (in some states)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Health insurance premiums for self-employed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Charitable contributions (varies by state)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Mortgage interest (some states)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Common State Tax Credits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-1 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Earned Income Tax Credit (state version)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Child and dependent care credits" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Education credits and deductions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Energy efficiency home improvements" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Electric vehicle purchase credits" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Senior citizen property tax credits" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Multi-State Tax Situations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "If you live in one state but work in another, you may face complex multi-state tax obligations. Generally, you'll file as a resident in your home state and as a non-resident in your work state. Most states provide credits for taxes paid to other states to prevent double taxation, but the rules vary significantly." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Reciprocity Agreements" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Some neighboring states have reciprocity agreements that simplify tax filing for border workers. For example, if you live in Pennsylvania but work in New Jersey, you may only need to file in Pennsylvania. Research whether your states have such agreements." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "2024 Tax Law Changes and Trends" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Several states have made significant changes to their tax codes in 2024. Some states have reduced tax rates to compete for residents and businesses, while others have increased rates to fund state programs. Key trends include:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-2 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Increased standard deductions in several states to match federal changes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "New tax brackets and rate adjustments for inflation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Enhanced tax credits for families and education" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Modified treatment of federal tax law changes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Special provisions related to remote work taxation" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Maximizing Your State Tax Benefits" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Pro Tips for State Tax Optimization" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-1 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Track all state-specific deductions throughout the year" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consider timing major financial decisions around tax year boundaries" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Review your state's tax code annually for new opportunities" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Maintain detailed records for multi-state tax situations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consider professional tax preparation for complex situations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Evaluate the total tax impact of relocation decisions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Take advantage of state-specific retirement account options" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Monitor proposed state tax law changes that might affect you" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Planning for the Future" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "State tax planning should be an integral part of your overall financial strategy. Whether you're just starting your career, planning for retirement, or considering a move, understanding state tax implications can save you thousands of dollars annually. Use tools like this calculator to model different scenarios and make informed decisions about your financial future." })
      ] })
    ] })
  ] }) });
  const tips = [
    "Nine states have no state income tax: AK, FL, NV, NH, SD, TN, TX, WA, WY",
    "California has the highest state income tax rate at 13.3% for high earners",
    "State taxes vary significantly - relocating can save thousands annually",
    "Most states use your federal AGI as the starting point for state taxes",
    "Some states don't tax retirement income from pensions and 401(k)s",
    "Multi-state workers may need to file returns in multiple states",
    "State tax deductions and credits often differ from federal options",
    "Consider state taxes when planning major financial decisions"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "US State Tax Calculator 2025 - Compare State Income Tax Rates",
      description: "Calculate and compare state income taxes across all 50 US states. Get personalized AI analysis and tax optimization strategies for 2025 tax planning.",
      keywords: "state tax calculator, US state income tax, tax comparison, state tax rates 2025, California tax, New York tax, Texas no tax, Florida tax benefits, tax planning strategies",
      tips,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold mb-4", children: "US State Tax Calculator 2025" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto", children: "Calculate your federal and state income taxes, compare rates across states, and get personalized optimization strategies. Make informed decisions about relocation, retirement planning, and tax strategies with our comprehensive analysis." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "calculator", className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-4 w-4" }),
              "Calculator"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "comparison", className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartPie, { className: "h-4 w-4" }),
              "State Comparison"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "analysis", className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" }),
              "AI Analysis"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "guide", className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4" }),
              "Complete Guide"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "calculator", className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-5 w-5" }),
                  "Tax Information"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter your income and filing details" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "grossIncome", children: "Annual Gross Income" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "grossIncome",
                      type: "number",
                      value: grossIncome,
                      onChange: (e) => setGrossIncome(e.target.value),
                      placeholder: "75000",
                      className: "text-lg"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "filingStatus", children: "Filing Status" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filingStatus, onValueChange: setFilingStatus, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "single", children: "Single" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "marriedJointly", children: "Married Filing Jointly" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "marriedSeparately", children: "Married Filing Separately" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "headOfHousehold", children: "Head of Household" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "state", children: "State" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: state, onValueChange: setState, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Object.entries(stateTaxData).map(([code, info]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: code, children: [
                      info.name,
                      " ",
                      !info.hasStateIncomeTax && "(No Income Tax)"
                    ] }, code)) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "federalDeductions", children: "Federal Deductions (optional)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "federalDeductions",
                      type: "number",
                      value: federalDeductions,
                      onChange: (e) => setFederalDeductions(e.target.value),
                      placeholder: `Standard: $${federalStandardDeduction[filingStatus].toLocaleString()}`
                    }
                  )
                ] }),
                stateInfo.hasStateIncomeTax && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "stateDeductions", children: "State Deductions (optional)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "stateDeductions",
                      type: "number",
                      value: stateDeductions,
                      onChange: (e) => setStateDeductions(e.target.value),
                      placeholder: `Standard: $${stateInfo.standardDeduction.toLocaleString()}`
                    }
                  )
                ] }),
                stateInfo.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: stateInfo.notes })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  "Tax Results",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
                    stateInfo.name
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-blue-50 rounded-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm text-muted-foreground", children: "Federal Tax" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-blue-600", children: [
                        "$",
                        results.federalTax.toLocaleString()
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-red-50 rounded-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm text-muted-foreground", children: "State Tax" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-red-600", children: stateInfo.hasStateIncomeTax ? `$${results.stateTax.toLocaleString()}` : "$0" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm text-muted-foreground", children: "Total Tax Burden" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-purple-600", children: [
                      "$",
                      results.totalTax.toLocaleString()
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
                      results.effectiveTaxRate.toFixed(2),
                      "% effective rate"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm text-muted-foreground", children: "After-Tax Income" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-bold text-green-600", children: [
                        "$",
                        results.afterTaxIncome.toLocaleString()
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm text-muted-foreground", children: "Marginal Rate" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-bold", children: [
                        results.marginalTaxRate.toFixed(2),
                        "%"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Federal Burden" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        (results.federalTax / results.totalTax * 100).toFixed(1),
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: results.federalTax / results.totalTax * 100, className: "h-2" }),
                    stateInfo.hasStateIncomeTax && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "State Burden" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          (results.stateTax / results.totalTax * 100).toFixed(1),
                          "%"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: results.stateTax / results.totalTax * 100, className: "h-2" })
                    ] })
                  ] })
                ] })
              ] }),
              (results.federalBreakdown.length > 0 || results.stateBreakdown.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Tax Breakdown by Bracket" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                  results.federalBreakdown.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Federal Tax Brackets" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: results.federalBreakdown.map((bracket, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        bracket.range,
                        " (",
                        bracket.rate,
                        ")"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                        "$",
                        bracket.tax.toLocaleString()
                      ] })
                    ] }, index)) })
                  ] }),
                  results.stateBreakdown.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold mb-2", children: [
                      stateInfo.name,
                      " Tax Brackets"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: results.stateBreakdown.map((bracket, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        bracket.range,
                        " (",
                        bracket.rate,
                        ")"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                        "$",
                        bracket.tax.toLocaleString()
                      ] })
                    ] }, index)) })
                  ] })
                ] })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "comparison", className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "State Tax Comparison" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardDescription, { children: [
                "Compare your tax burden across different states with your current income of $",
                parseFloat(grossIncome || "0").toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              results.comparison && results.comparison.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: results.comparison.slice(0, 10).map((compState, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: index < 3 ? "default" : "secondary", children: [
                    "#",
                    index + 1
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: compState.state }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: compState.hasStateIncomeTax ? `$${compState.stateTax.toLocaleString()} state tax` : "No state income tax" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold", children: [
                    "$",
                    compState.totalTax.toLocaleString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                    compState.effectiveRate.toFixed(2),
                    "% total"
                  ] })
                ] })
              ] }, compState.code)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Enter your income to see state comparisons" }) }),
              results.comparison.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-4 bg-blue-50 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Potential Savings by Moving" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: (() => {
                  const currentState = results.comparison.find((s) => s.code === state);
                  const lowestTaxState = results.comparison[0];
                  if (currentState && lowestTaxState && currentState.totalTax > lowestTaxState.totalTax) {
                    const savings = currentState.totalTax - lowestTaxState.totalTax;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      "Moving from ",
                      stateInfo.name,
                      " to ",
                      lowestTaxState.state,
                      " could save you",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-green-600", children: [
                        "$",
                        savings.toLocaleString()
                      ] }),
                      " ",
                      "annually in taxes."
                    ] });
                  } else {
                    return `${stateInfo.name} already offers competitive tax rates compared to other states.`;
                  }
                })() })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "analysis", className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AIAnalysis,
              {
                analysisRequest: {
                  calculatorType: "state-tax",
                  data: analysisData
                },
                className: "w-full",
                title: "State Tax Analysis",
                description: "Get personalized tax optimization strategies and insights based on your state tax situation."
              }
            ),
            results && /* @__PURE__ */ jsxRuntimeExports.jsx(
              ExportShareButtons,
              {
                calculatorType: "state-tax",
                inputs: {
                  income: parseFloat(grossIncome) || 0,
                  filingStatus,
                  state
                },
                results: {
                  federalTax: results.federalTax,
                  stateTax: results.stateTax,
                  totalTax: results.totalTax,
                  effectiveRate: results.effectiveTaxRate,
                  takeHomePay: results.afterTaxIncome
                },
                title: "State Tax Calculator Report"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "guide", className: "space-y-6", children: educationalContent })
        ] })
      ] })
    }
  );
}
export {
  StateTaxCalculatorUS
};
