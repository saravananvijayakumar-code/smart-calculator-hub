import { r as reactExports, j as jsxRuntimeExports, S as SEOHead, f as Card, g as CardHeader, h as CardTitle, D as DollarSign, k as CardContent, a3 as Label, B as Button, aD as formatCurrency } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { A as AppleStyleInput } from "./AppleStyleInput-BFag-KzQ.js";
import { A as AIAnalysis } from "./AIAnalysis-DnR9Up6F.js";
import { T as TrendingDown } from "./trending-down-BkWfhFLS.js";
import { C as Calendar } from "./calendar-CKWgIWzq.js";
import { C as ChartPie } from "./chart-pie-BW94oKR-.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
import "./badge-fo2YvZos.js";
import "./tabs-BNSAX0su.js";
import "./brain-U3SZm3t9.js";
import "./loader-circle-BYW7QwsU.js";
import "./target-1ApqtYDG.js";
import "./circle-check-big-BoxGYPKG.js";
const STATE_TAX_RATES = {
  "AL": 5,
  "AK": 0,
  "AZ": 2.59,
  "AR": 4.9,
  "CA": 9.3,
  "CO": 4.4,
  "CT": 5,
  "DE": 6.6,
  "FL": 0,
  "GA": 5.75,
  "HI": 8.25,
  "ID": 5.8,
  "IL": 4.95,
  "IN": 3.15,
  "IA": 5.7,
  "KS": 5.2,
  "KY": 4.5,
  "LA": 4.25,
  "ME": 7.15,
  "MD": 5.75,
  "MA": 5,
  "MI": 4.25,
  "MN": 9.85,
  "MS": 5,
  "MO": 4.95,
  "MT": 5.9,
  "NE": 5.84,
  "NV": 0,
  "NH": 0,
  "NJ": 8.97,
  "NM": 5.9,
  "NY": 6.85,
  "NC": 4.75,
  "ND": 2.9,
  "OH": 3.75,
  "OK": 4.75,
  "OR": 9.9,
  "PA": 3.07,
  "RI": 5.99,
  "SC": 6.4,
  "SD": 0,
  "TN": 0,
  "TX": 0,
  "UT": 4.85,
  "VT": 8.75,
  "VA": 5.75,
  "WA": 0,
  "WV": 5.12,
  "WI": 5.3,
  "WY": 0
};
const FEDERAL_TAX_BRACKETS_2024 = {
  Single: [
    { limit: 11600, rate: 10 },
    { limit: 47150, rate: 12 },
    { limit: 100525, rate: 22 },
    { limit: 191950, rate: 24 },
    { limit: 243725, rate: 32 },
    { limit: 609350, rate: 35 },
    { limit: Infinity, rate: 37 }
  ],
  "Married Filing Jointly": [
    { limit: 23200, rate: 10 },
    { limit: 94300, rate: 12 },
    { limit: 201050, rate: 22 },
    { limit: 383900, rate: 24 },
    { limit: 487450, rate: 32 },
    { limit: 731200, rate: 35 },
    { limit: Infinity, rate: 37 }
  ],
  "Head of Household": [
    { limit: 16550, rate: 10 },
    { limit: 63100, rate: 12 },
    { limit: 100500, rate: 22 },
    { limit: 191950, rate: 24 },
    { limit: 243700, rate: 32 },
    { limit: 609350, rate: 35 },
    { limit: Infinity, rate: 37 }
  ]
};
function SalaryCalculatorUS() {
  const [salaryType, setSalaryType] = reactExports.useState("annual");
  const [salaryAmount, setSalaryAmount] = reactExports.useState("75000");
  const [state, setState] = reactExports.useState("CA");
  const [filingStatus, setFilingStatus] = reactExports.useState("Single");
  const [hoursPerWeek, setHoursPerWeek] = reactExports.useState("40");
  const [showResults, setShowResults] = reactExports.useState(false);
  const calculateTaxes = () => {
    var _a;
    let annualSalary = 0;
    const amount = parseFloat(salaryAmount) || 0;
    const hours = parseFloat(hoursPerWeek) || 40;
    if (salaryType === "annual") {
      annualSalary = amount;
    } else if (salaryType === "monthly") {
      annualSalary = amount * 12;
    } else {
      annualSalary = amount * hours * 52;
    }
    const brackets = FEDERAL_TAX_BRACKETS_2024[filingStatus];
    let federalTax = 0;
    let previousLimit = 0;
    for (const bracket of brackets) {
      if (annualSalary > previousLimit) {
        const taxableInBracket = Math.min(annualSalary, bracket.limit) - previousLimit;
        federalTax += taxableInBracket * (bracket.rate / 100);
        previousLimit = bracket.limit;
      } else {
        break;
      }
    }
    const stateTaxRate = STATE_TAX_RATES[state] || 0;
    const stateTax = annualSalary * (stateTaxRate / 100);
    const socialSecurityCap = 168600;
    const socialSecurity = Math.min(annualSalary, socialSecurityCap) * 0.062;
    const medicareThreshold = 2e5;
    const basicMedicare = annualSalary * 0.0145;
    const additionalMedicare = annualSalary > medicareThreshold ? (annualSalary - medicareThreshold) * 9e-3 : 0;
    const medicare = basicMedicare + additionalMedicare;
    const totalTax = federalTax + stateTax + socialSecurity + medicare;
    const netAnnual = annualSalary - totalTax;
    const effectiveTaxRate = totalTax / annualSalary * 100;
    const marginalRate = ((_a = brackets.find((b) => annualSalary <= b.limit)) == null ? void 0 : _a.rate) || 37;
    return {
      grossAnnual: annualSalary,
      federalTax,
      stateTax,
      socialSecurity,
      medicare,
      totalTax,
      netAnnual,
      effectiveTaxRate,
      marginalRate,
      netMonthly: netAnnual / 12,
      netBiweekly: netAnnual / 26,
      netWeekly: netAnnual / 52,
      netDaily: netAnnual / 260,
      netHourly: netAnnual / (hours * 52),
      grossMonthly: annualSalary / 12,
      grossBiweekly: annualSalary / 26,
      grossWeekly: annualSalary / 52,
      grossDaily: annualSalary / 260,
      grossHourly: annualSalary / (hours * 52)
    };
  };
  const results = salaryAmount && parseFloat(salaryAmount) > 0 ? calculateTaxes() : null;
  const handleCalculate = () => {
    setShowResults(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Salary Calculator - Take Home Pay Calculator After Taxes | US Paycheck Calculator",
        description: "Calculate your take-home salary after federal and state taxes. Get detailed breakdown of net pay, tax deductions, and see your salary by month, biweekly, weekly, and hourly.",
        keywords: "salary calculator, take home pay calculator, paycheck calculator, salary after tax, net salary calculator, gross to net salary, wage calculator"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Salary Calculator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Calculate your take-home pay after federal and state taxes with detailed breakdown" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-6 w-6 text-blue-600" }),
            "Salary Information"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Salary Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: salaryType, onValueChange: (value) => setSalaryType(value), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "annual", children: "Annual" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "monthly", children: "Monthly" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hourly", children: "Hourly" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AppleStyleInput,
              {
                label: "Salary Amount",
                type: "number",
                value: salaryAmount,
                onChange: (e) => setSalaryAmount(e.target.value),
                placeholder: "75000",
                prefix: "$"
              }
            ),
            salaryType === "hourly" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              AppleStyleInput,
              {
                label: "Hours Per Week",
                type: "number",
                value: hoursPerWeek,
                onChange: (e) => setHoursPerWeek(e.target.value),
                placeholder: "40"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "State" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: state, onValueChange: setState, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "max-h-60", children: Object.keys(STATE_TAX_RATES).map((st) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: st, children: [
                  st,
                  " (",
                  STATE_TAX_RATES[st],
                  "% tax)"
                ] }, st)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Filing Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filingStatus, onValueChange: (value) => setFilingStatus(value), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Single", children: "Single" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Married Filing Jointly", children: "Married Filing Jointly" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Head of Household", children: "Head of Household" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: handleCalculate,
                className: "w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
                size: "lg",
                children: "Calculate Take-Home Pay"
              }
            )
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg bg-gradient-to-br from-blue-50 to-blue-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-6 w-6 text-blue-600" }),
            "Your Take-Home Pay"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-white rounded-lg shadow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mb-2", children: "Annual Take-Home" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-bold text-blue-600", children: formatCurrency(results.netAnnual, "USD") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 mt-1", children: [
                "from ",
                formatCurrency(results.grossAnnual, "USD"),
                " gross"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg shadow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-5 w-5 text-blue-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Breakdown by Period" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Monthly" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: formatCurrency(results.netMonthly, "USD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Biweekly" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: formatCurrency(results.netBiweekly, "USD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Weekly" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: formatCurrency(results.netWeekly, "USD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Daily" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: formatCurrency(results.netDaily, "USD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Hourly" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: formatCurrency(results.netHourly, "USD") })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg shadow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChartPie, { className: "h-5 w-5 text-blue-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Tax Breakdown" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Federal Tax:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-red-600", children: formatCurrency(results.federalTax, "USD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "State Tax (",
                    state,
                    "):"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-red-600", children: formatCurrency(results.stateTax, "USD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Social Security:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-red-600", children: formatCurrency(results.socialSecurity, "USD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Medicare:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-red-600", children: formatCurrency(results.medicare, "USD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-2 flex justify-between font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Tax:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600", children: formatCurrency(results.totalTax, "USD") })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg shadow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 mb-1", children: "Effective Rate" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-gray-900", children: [
                  results.effectiveTaxRate.toFixed(1),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg shadow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 mb-1", children: "Marginal Rate" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-gray-900", children: [
                  results.marginalRate,
                  "%"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      showResults && results && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        AIAnalysis,
        {
          analysisRequest: {
            calculatorType: "salary_calculator",
            data: {
              grossAnnual: results.grossAnnual,
              state,
              filingStatus,
              federalTax: results.federalTax,
              stateTax: results.stateTax,
              socialSecurity: results.socialSecurity,
              medicare: results.medicare,
              netAnnual: results.netAnnual,
              effectiveTaxRate: results.effectiveTaxRate
            }
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Understanding Your Paycheck" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mb-4", children: [
            "Your paycheck represents much more than just your hourly wage or annual salary. Understanding the difference between ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "gross pay" }),
            " and ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "net pay" }),
            " is crucial for effective financial planning."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "Gross Pay vs Net Pay" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Gross Pay" }),
            " is your total earnings before any deductions. This is the amount stated in your job offer or employment contract. For example, if you earn $75,000 per year, that's your gross annual salary."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Net Pay" }),
            " (or take-home pay) is what you actually receive in your bank account after all deductions including federal tax, state tax, Social Security, Medicare, and any other deductions like health insurance premiums or 401(k) contributions."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3", children: "Example Calculation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-2", children: "Annual Gross Salary: $75,000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-2", children: "Federal Tax: -$8,700" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-2", children: "State Tax (CA, 9.3%): -$6,975" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-2", children: "Social Security (6.2%): -$4,650" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-2", children: "Medicare (1.45%): -$1,088" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 font-bold mt-3", children: "Annual Net Pay: ≈ $53,587" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mt-2 text-sm italic", children: "That's about 71.4% of your gross salary, meaning nearly 29% goes to taxes and FICA." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Federal Income Tax Brackets 2024" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mb-4", children: [
            "The United States uses a ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "progressive tax system" }),
            ", which means higher income levels are taxed at higher rates. However, only the income within each bracket is taxed at that bracket's rate, not your entire income."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "Single Filers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full border-collapse border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border p-3 text-left", children: "Income Range" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border p-3 text-left", children: "Tax Rate" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$0 - $11,600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "10%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$11,601 - $47,150" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "12%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$47,151 - $100,525" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "22%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$100,526 - $191,950" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "24%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$191,951 - $243,725" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "32%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$243,726 - $609,350" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "35%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$609,351+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "37%" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "Married Filing Jointly" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full border-collapse border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border p-3 text-left", children: "Income Range" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border p-3 text-left", children: "Tax Rate" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$0 - $23,200" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "10%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$23,201 - $94,300" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "12%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$94,301 - $201,050" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "22%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$201,051 - $383,900" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "24%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$383,901 - $487,450" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "32%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$487,451 - $731,200" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "35%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$731,201+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "37%" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "Head of Household" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full border-collapse border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border p-3 text-left", children: "Income Range" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border p-3 text-left", children: "Tax Rate" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$0 - $16,550" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "10%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$16,551 - $63,100" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "12%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$63,101 - $100,500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "22%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$100,501 - $191,950" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "24%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$191,951 - $243,700" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "32%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$243,701 - $609,350" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "35%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "$609,351+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "37%" })
              ] })
            ] })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "State Income Tax Considerations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "In addition to federal taxes, most states impose their own income tax. State tax rates vary significantly and can have a major impact on your take-home pay." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "States with No Income Tax (9 States)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-3", children: "These states do not impose state income tax, giving residents more take-home pay:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1 text-gray-700 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Alaska" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Florida" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Nevada" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "New Hampshire (only on interest and dividends, being phased out)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "South Dakota" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tennessee" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Texas" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Washington" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Wyoming" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "Low Tax States (Under 4%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1 text-gray-700 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "North Dakota (2.9%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Pennsylvania (3.07%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Indiana (3.15%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Michigan (4.25%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Colorado (4.4%)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "High Tax States (Over 9%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1 text-gray-700 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "California (9.3% - 13.3% depending on income)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Hawaii (8.25% - 11%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "New Jersey (8.97% top rate)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Oregon (9.9% top rate)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Minnesota (9.85% top rate)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "New York (6.85% - 10.9% depending on income and locality)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3", children: "Impact Example: $100,000 Salary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-gray-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Texas (0% state tax):" }),
                " Save $0 in state taxes"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pennsylvania (3.07%):" }),
                " Pay $3,070 in state taxes"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "California (9.3%):" }),
                " Pay $9,300 in state taxes"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-semibold", children: "The difference between living in Texas vs California: $9,300 per year ($775/month)!" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "FICA Taxes Explained" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mb-4", children: [
            "FICA stands for ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Federal Insurance Contributions Act" }),
            ". FICA taxes fund Social Security and Medicare programs. Both you and your employer pay FICA taxes."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "Social Security Tax (6.2%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "You pay 6.2% of your gross income up to the wage base limit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "2024 wage base limit: $168,600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Maximum Social Security tax: $10,453.20 per year" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Once you earn more than $168,600, you stop paying Social Security tax on the excess" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Your employer matches this contribution (also 6.2%)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "Medicare Tax (1.45% + 0.9% Additional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Base Medicare tax: 1.45% on all earnings (no cap)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Additional Medicare Tax: 0.9% on earnings above $200,000 (single) or $250,000 (married filing jointly)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Your employer matches the base 1.45% but not the additional 0.9%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Total Medicare tax for high earners: 2.35% (1.45% + 0.9%)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3", children: "FICA Tax Example: $75,000 Salary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-gray-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Social Security:" }),
                " $75,000 × 6.2% = $4,650"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Medicare:" }),
                " $75,000 × 1.45% = $1,088"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Total FICA:" }),
                " $5,738 per year ($478/month)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-semibold", children: "Your employer also pays $5,738, so the total FICA contribution is $11,476" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-6 rounded-lg mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3", children: "FICA Tax Example: $250,000 Salary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-gray-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Social Security:" }),
                " $168,600 × 6.2% = $10,453 (capped)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Basic Medicare:" }),
                " $250,000 × 1.45% = $3,625"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Additional Medicare:" }),
                " ($250,000 - $200,000) × 0.9% = $450"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Total FICA:" }),
                " $14,528 per year ($1,211/month)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm italic", children: "Note: Social Security tax stops after $168,600, but Medicare continues on all income" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Pre-Tax Deductions: Reduce Your Tax Burden" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mb-4", children: [
            "Pre-tax deductions are amounts taken from your paycheck ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "before" }),
            " taxes are calculated. This reduces your taxable income and therefore your tax liability. These are powerful tools for increasing your take-home pay indirectly while building wealth and protecting your health."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "401(k) Contributions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2024 Contribution Limit:" }),
              " $23,000 per year (under age 50)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Catch-up Contribution:" }),
              " Additional $7,500 if age 50+ (total $30,500)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Contributions reduce your taxable income dollar-for-dollar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Many employers offer matching contributions (free money!)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Earnings grow tax-deferred until retirement" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 p-4 rounded-lg mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 font-semibold mb-2", children: "Example: $100,000 salary, contribute $10,000 to 401(k)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Taxable income reduced to $90,000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Tax savings (24% bracket): $2,400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Net cost of $10,000 contribution: Only $7,600!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "Health Savings Account (HSA)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2024 Contribution Limit:" }),
              " $4,150 (individual), $8,300 (family)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Catch-up Contribution:" }),
              " Additional $1,000 if age 55+"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Requires enrollment in a High Deductible Health Plan (HDHP)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Triple tax advantage:" }),
              " Tax-deductible contributions, tax-free growth, tax-free withdrawals for medical expenses"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Funds roll over year to year (no "use it or lose it")' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Can be used as retirement account after age 65" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "Flexible Spending Account (FSA)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Healthcare FSA:" }),
              " $3,200 limit (2024)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Dependent Care FSA:" }),
              " $5,000 limit (for childcare, elder care)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Pre-tax contributions reduce taxable income" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Use-it-or-lose-it:" }),
              " Must use funds by end of plan year (some plans offer grace period or limited rollover)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Good for predictable medical expenses (glasses, dental work, copays)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "Health Insurance Premiums" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Employer-sponsored health insurance premiums are typically pre-tax" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Reduces both income tax and FICA taxes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Premiums for dental and vision insurance also usually pre-tax" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Can save 20-40% on premium costs depending on tax bracket" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3", children: "Total Pre-Tax Deduction Example" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-3", children: "Salary: $100,000 | Tax Bracket: 24%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-gray-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "401(k): $15,000" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "HSA: $4,150" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Health Insurance: $3,000" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "border-t pt-2 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Total Deductions: $22,150" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "New Taxable Income: $77,850" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-700 font-semibold mt-3", children: "Tax Savings: $5,316 (federal) + $1,383 (FICA) = $6,699 per year!" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Salary Negotiation & Total Compensation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "When evaluating a job offer, don't just look at the base salary. Total compensation includes various benefits that add significant value." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "Financial Benefits Beyond Base Salary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-3 text-gray-700 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Signing Bonus:" }),
              " One-time payment when you join (typically $5,000 - $50,000+ depending on role and level). Often has clawback provisions if you leave within 1-2 years."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Annual Bonus:" }),
              " Performance-based bonus, typically 10-30% of base salary. Tech companies and finance roles often have higher bonus percentages."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Stock Options/RSUs:" }),
              " Equity compensation can be substantial, especially at tech companies. RSUs are taxed as ordinary income when they vest."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "401(k) Match:" }),
              " Common formulas: 50% match up to 6% contribution, or 100% match up to 3%. A 6% match on $100k salary = $6,000/year free money."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Profit Sharing:" }),
              " Additional retirement contributions based on company performance, often 3-6% of salary."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tuition Reimbursement:" }),
              " $5,000-$10,000/year for continuing education."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "Quality of Life Benefits (Hidden Value)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-3 text-gray-700 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Health Insurance:" }),
              " Employer coverage can save $8,000-$15,000/year compared to individual plans. Look at premium costs, deductibles, and out-of-pocket maximums."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Remote Work Flexibility:" }),
              " Saves commute time (10+ hours/week) and costs (gas, car maintenance, parking). Value: $5,000-$10,000/year."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Paid Time Off:" }),
              " 15-20 days PTO is standard, 25-30 days is generous. Each additional week off = 2% of annual salary."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Parental Leave:" }),
              " 12-16 weeks paid leave can be worth $15,000-$30,000 when needed."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Professional Development:" }),
              " Conference attendance, training budgets ($2,000-$5,000/year)."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Wellness Programs:" }),
              " Gym memberships, mental health resources, wellness stipends ($500-$1,500/year)."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3", children: "Total Compensation Comparison Example" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold mb-2", children: "Job Offer A" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm text-gray-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Base: $90,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Bonus: $0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "401k Match: $0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Health Insurance: $300/mo ($3,600/yr)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "PTO: 15 days" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Remote: 0 days" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-semibold pt-2 border-t mt-2", children: "Effective Value: ~$90,000" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold mb-2", children: "Job Offer B" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm text-gray-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Base: $85,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Bonus: 15% ($12,750)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "401k Match: 6% ($5,100)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Health Insurance: Fully covered ($0)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "PTO: 25 days" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Remote: Full time ($8,000 value)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-semibold pt-2 border-t mt-2", children: "Effective Value: ~$113,450" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mt-4 font-semibold", children: "Despite lower base salary, Offer B provides $23,450 more in total value!" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Budgeting with Net Salary: The 50/30/20 Rule" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mb-4", children: [
            "The 50/30/20 rule is a simple, effective budgeting framework that helps you allocate your ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "net income" }),
            " (take-home pay) wisely."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3", children: "50% - Needs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 mb-3", children: "Essential expenses you must pay:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1 text-sm text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Rent/Mortgage" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Utilities (electricity, water, internet)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Groceries" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Transportation (car payment, gas, insurance)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Minimum debt payments" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Insurance (health, life)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3", children: "30% - Wants" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 mb-3", children: "Discretionary spending:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1 text-sm text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Dining out" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Entertainment (movies, concerts)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Shopping (clothes, gadgets)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Hobbies" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Vacations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Subscriptions (Netflix, Spotify, gym)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3", children: "20% - Savings & Debt" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 mb-3", children: "Future and financial security:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1 text-sm text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Emergency fund (6 months expenses)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Retirement (IRA, extra 401k)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Investments (stocks, real estate)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Extra debt payments" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Down payment savings" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 p-6 rounded-lg mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3", children: "Example Budget: $60,000 Net Income ($5,000/month)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pb-2 border-b", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Monthly Take-Home:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "$5,000" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Needs (50%):" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "$2,500" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "pl-6 space-y-1 text-sm text-gray-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Rent: $1,400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Utilities: $200" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Groceries: $400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Transportation: $350" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Insurance: $150" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Wants (30%):" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "$1,500" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "pl-6 space-y-1 text-sm text-gray-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Dining out: $400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Entertainment: $300" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Shopping: $400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Subscriptions: $100" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Miscellaneous: $300" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Savings (20%):" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "$1,000" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "pl-6 space-y-1 text-sm text-gray-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Emergency fund: $300" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Retirement (Roth IRA): $500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Investments: $200" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 text-sm italic", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
            " This is a guideline, not a strict rule. In high cost-of-living cities (NYC, SF), needs might be 60-65%. If you have high-interest debt, consider allocating more than 20% to savings/debt until it's paid off."
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Frequently Asked Questions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "border-b pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold cursor-pointer text-lg", children: "How do I calculate my hourly rate from my salary?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-3", children: [
                "To calculate your hourly rate from annual salary:",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Formula:" }),
                " Annual Salary ÷ (Hours per week × 52 weeks)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
                " $75,000 salary, 40 hours/week",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Hourly Rate = $75,000 ÷ (40 × 52) = $75,000 ÷ 2,080 = $36.06/hour",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "For your ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "net hourly rate" }),
                " (after taxes), use your net annual salary instead.",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "If net salary is $55,000, net hourly = $55,000 ÷ 2,080 = $26.44/hour"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "border-b pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold cursor-pointer text-lg", children: "What's the difference between biweekly and semi-monthly pay?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Biweekly:" }),
                " Paid every two weeks (every other Friday, for example)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• 26 paychecks per year",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Two months each year have 3 paychecks instead of 2",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Paycheck amount = Annual salary ÷ 26",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Semi-monthly:" }),
                " Paid twice per month (typically 1st and 15th)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• 24 paychecks per year",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Consistent pay dates each month",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Paycheck amount = Annual salary ÷ 24",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
                " $60,000 annual salary",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Biweekly: $2,308 per paycheck (26 times/year)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Semi-monthly: $2,500 per paycheck (24 times/year)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                'Biweekly results in smaller paychecks but you get two "extra" paychecks per year, making the total the same.'
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "border-b pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold cursor-pointer text-lg", children: "How are bonuses taxed?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-3", children: [
                "Bonuses are considered ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "supplemental wages" }),
                " and are taxed differently than regular salary:",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Federal Withholding on Bonuses:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Flat rate method: 22% federal withholding (most common for bonuses under $1 million)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• For bonuses over $1 million: 37% on the amount over $1 million",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Or" }),
                " your employer may combine the bonus with regular wages and withhold based on that total (aggregate method).",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Important:" }),
                " This is just ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "withholding" }),
                ". When you file your tax return, the bonus is added to your total income and taxed at your regular marginal rate. You may get a refund if too much was withheld.",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
                " $10,000 bonus with 22% withholding",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Federal withholding: $2,200",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• State withholding (CA 9.3%): $930",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• FICA: $765",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Net bonus received: ~$6,105"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "border-b pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold cursor-pointer text-lg", children: "Can I change my W-4 withholding mid-year?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-3", children: [
                "Yes, you can change your W-4 withholding at any time. Common reasons to adjust:",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Increase Withholding If:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• You owed taxes last year",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Your spouse started working",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• You got a raise or bonus",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• You have side income without withholding",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Your tax credits decreased (kids aged out, etc.)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Decrease Withholding If:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• You got a large tax refund (you're giving the government an interest-free loan)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• You started making large 401(k) contributions",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• You had a baby or qualified for new credits",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Your spouse stopped working",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "How to Change:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "1. Complete new W-4 form (use IRS withholding calculator at irs.gov)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "2. Submit to your employer's HR/payroll department",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "3. Change takes effect within 1-2 pay periods",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Goal:" }),
                " Aim to break even or owe/receive less than $500 when you file taxes. A large refund means you withheld too much and lost access to that money all year."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold cursor-pointer text-lg", children: "Should I contribute to traditional 401(k) or Roth 401(k)?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-3", children: [
                "The choice depends on whether you expect to be in a higher or lower tax bracket in retirement:",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Traditional 401(k):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "✅ Contributions are pre-tax (reduce taxable income now)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "✅ Lower your current tax bill",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "❌ Pay taxes on withdrawals in retirement",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "✅ Good if you expect to be in a lower tax bracket in retirement",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "✅ Good if you're currently in high tax bracket (24%+)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Roth 401(k):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "❌ Contributions are after-tax (no immediate tax benefit)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "✅ Withdrawals in retirement are tax-free (including earnings!)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "✅ No required minimum distributions (RMDs) like traditional",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "✅ Good if you expect to be in a higher tax bracket in retirement",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "✅ Good if you're young and currently in low tax bracket (12% or less)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example Scenario:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Current age: 30, income: $75,000 (22% bracket), retire at 65 with $3M+ saved",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "→ Roth 401(k) likely better: Pay 22% now, avoid 24-32%+ in retirement",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Current age: 45, income: $200,000 (32% bracket), retire with modest savings",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "→ Traditional 401(k) likely better: Save 32% now, pay 12-22% in retirement",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Hedge Strategy:" }),
                " Many people split contributions between both to diversify tax exposure!"
              ] })
            ] })
          ] })
        ] }) })
      ] })
    ] }) })
  ] });
}
export {
  SalaryCalculatorUS,
  SalaryCalculatorUS as default
};
