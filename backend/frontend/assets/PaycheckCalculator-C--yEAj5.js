import { r as reactExports, j as jsxRuntimeExports, S as SEOHead, f as Card, g as CardHeader, h as CardTitle, D as DollarSign, k as CardContent, C as Calculator, B as Button, aD as formatCurrency } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { A as AppleStyleInput } from "./AppleStyleInput-BFag-KzQ.js";
import { A as AIAnalysis } from "./AIAnalysis-DnR9Up6F.js";
import { T as TrendingDown } from "./trending-down-BkWfhFLS.js";
import { W as Wallet } from "./wallet-7QltRvhQ.js";
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
  "IN": 3.23,
  "IA": 6,
  "KS": 5.7,
  "KY": 5,
  "LA": 4.25,
  "ME": 7.15,
  "MD": 5.75,
  "MA": 5,
  "MI": 4.25,
  "MN": 9.85,
  "MS": 5,
  "MO": 5.3,
  "MT": 6.75,
  "NE": 6.84,
  "NV": 0,
  "NH": 0,
  "NJ": 8.97,
  "NM": 5.9,
  "NY": 8.82,
  "NC": 4.99,
  "ND": 2.9,
  "OH": 3.99,
  "OK": 4.75,
  "OR": 9.9,
  "PA": 3.07,
  "RI": 5.99,
  "SC": 6.5,
  "SD": 0,
  "TN": 0,
  "TX": 0,
  "UT": 4.95,
  "VT": 8.75,
  "VA": 5.75,
  "WA": 0,
  "WV": 6.5,
  "WI": 7.65,
  "WY": 0
};
const STATES = Object.keys(STATE_TAX_RATES).sort();
function PaycheckCalculator() {
  const [annualSalary, setAnnualSalary] = reactExports.useState("75000");
  const [payFrequency, setPayFrequency] = reactExports.useState("biweekly");
  const [state, setState] = reactExports.useState("CA");
  const [filingStatus, setFilingStatus] = reactExports.useState("single");
  const [k401Percent, setK401Percent] = reactExports.useState("5");
  const [healthInsurance, setHealthInsurance] = reactExports.useState("200");
  const [hsaContribution, setHsaContribution] = reactExports.useState("0");
  const [fsaContribution, setFsaContribution] = reactExports.useState("0");
  const [additionalWithholding, setAdditionalWithholding] = reactExports.useState("0");
  const [calculated, setCalculated] = reactExports.useState(false);
  const salary = parseFloat(annualSalary) || 0;
  const k401Rate = parseFloat(k401Percent) || 0;
  const healthPremium = parseFloat(healthInsurance) || 0;
  const hsaAnnual = parseFloat(hsaContribution) || 0;
  const fsaAnnual = parseFloat(fsaContribution) || 0;
  const additionalAnnual = parseFloat(additionalWithholding) || 0;
  const paychecksPerYear = {
    weekly: 52,
    biweekly: 26,
    semimonthly: 24,
    monthly: 12
  }[payFrequency] || 26;
  const grossPerPaycheck = salary / paychecksPerYear;
  const k401PerPaycheck = grossPerPaycheck * (k401Rate / 100);
  const healthPerPaycheck = healthPremium * 12 / paychecksPerYear;
  const hsaPerPaycheck = hsaAnnual / paychecksPerYear;
  const fsaPerPaycheck = fsaAnnual / paychecksPerYear;
  const preTaxDeductions = k401PerPaycheck + healthPerPaycheck + hsaPerPaycheck + fsaPerPaycheck;
  const taxableIncome = grossPerPaycheck - preTaxDeductions;
  const calculateFederalWithholding = (income, status) => {
    const annualIncome = income * paychecksPerYear;
    let tax = 0;
    if (status === "single") {
      if (annualIncome <= 11e3) tax = annualIncome * 0.1;
      else if (annualIncome <= 44725) tax = 1100 + (annualIncome - 11e3) * 0.12;
      else if (annualIncome <= 95375) tax = 5147 + (annualIncome - 44725) * 0.22;
      else if (annualIncome <= 182100) tax = 16290 + (annualIncome - 95375) * 0.24;
      else if (annualIncome <= 231250) tax = 37104 + (annualIncome - 182100) * 0.32;
      else if (annualIncome <= 578125) tax = 52832 + (annualIncome - 231250) * 0.35;
      else tax = 174238.25 + (annualIncome - 578125) * 0.37;
    } else {
      if (annualIncome <= 22e3) tax = annualIncome * 0.1;
      else if (annualIncome <= 89075) tax = 2200 + (annualIncome - 22e3) * 0.12;
      else if (annualIncome <= 190750) tax = 10294 + (annualIncome - 89075) * 0.22;
      else if (annualIncome <= 364200) tax = 32580 + (annualIncome - 190750) * 0.24;
      else if (annualIncome <= 462500) tax = 74208 + (annualIncome - 364200) * 0.32;
      else if (annualIncome <= 693750) tax = 105664 + (annualIncome - 462500) * 0.35;
      else tax = 186601.5 + (annualIncome - 693750) * 0.37;
    }
    return tax / paychecksPerYear;
  };
  const federalWithholding = calculateFederalWithholding(taxableIncome, filingStatus);
  const stateTaxRate = STATE_TAX_RATES[state] || 0;
  const stateWithholding = taxableIncome * paychecksPerYear * stateTaxRate / 100 / paychecksPerYear;
  const socialSecurityCap = 168600;
  const yearToDateGross = grossPerPaycheck * Math.min(paychecksPerYear, 26);
  const socialSecurityTaxable = Math.min(taxableIncome, Math.max(0, (socialSecurityCap - yearToDateGross) / paychecksPerYear + taxableIncome));
  const socialSecurity = socialSecurityTaxable * 0.062;
  const medicareBase = taxableIncome * 0.0145;
  const additionalMedicare = taxableIncome * paychecksPerYear > 2e5 ? (taxableIncome - 2e5 / paychecksPerYear) * 9e-3 : 0;
  const medicare = medicareBase + additionalMedicare;
  const ficaTotal = socialSecurity + medicare;
  const postTaxDeductions = additionalAnnual / paychecksPerYear;
  const netPerPaycheck = grossPerPaycheck - preTaxDeductions - federalWithholding - stateWithholding - ficaTotal - postTaxDeductions;
  const annualGross = salary;
  const annualPreTaxDeductions = preTaxDeductions * paychecksPerYear;
  const annualFederalTax = federalWithholding * paychecksPerYear;
  const annualStateTax = stateWithholding * paychecksPerYear;
  const annualFICA = ficaTotal * paychecksPerYear;
  const annualPostTaxDeductions = postTaxDeductions * paychecksPerYear;
  const annualNet = netPerPaycheck * paychecksPerYear;
  const handleCalculate = () => {
    setCalculated(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Paycheck Calculator - Calculate Take-Home Pay After Taxes & Deductions",
        description: "Free paycheck calculator. Calculate your net pay after federal tax, state tax, FICA, and deductions. See detailed breakdown of all withholdings by pay period.",
        keywords: "paycheck calculator, paycheck calculator after taxes, biweekly paycheck calculator, net pay calculator, check calculator, take home pay"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-green-50 dark:from-gray-900 dark:to-green-950 p-4 md:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4", children: "Paycheck Calculator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Calculate your take-home pay after federal tax, state tax, FICA, and all deductions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-green-500 to-emerald-600 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-6 w-6" }),
              "Salary Information"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AppleStyleInput,
                {
                  label: "Annual Salary",
                  type: "number",
                  value: annualSalary,
                  onChange: (e) => setAnnualSalary(e.target.value),
                  placeholder: "75000",
                  prefix: "$"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2", children: "Pay Frequency" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: payFrequency, onValueChange: setPayFrequency, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "weekly", children: "Weekly (52 paychecks)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "biweekly", children: "Bi-weekly (26 paychecks)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "semimonthly", children: "Semi-monthly (24 paychecks)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "monthly", children: "Monthly (12 paychecks)" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2", children: "State" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: state, onValueChange: setState, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "max-h-[300px]", children: STATES.map((st) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: st, children: [
                    st,
                    " ",
                    STATE_TAX_RATES[st] === 0 ? "(No state tax)" : `(${STATE_TAX_RATES[st]}%)`
                  ] }, st)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2", children: "Filing Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filingStatus, onValueChange: setFilingStatus, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "single", children: "Single" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "married", children: "Married Filing Jointly" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "head", children: "Head of Household" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-blue-500 to-cyan-600 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-6 w-6" }),
              "Pre-Tax Deductions"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AppleStyleInput,
                {
                  label: "401(k) Contribution",
                  type: "number",
                  value: k401Percent,
                  onChange: (e) => setK401Percent(e.target.value),
                  placeholder: "5",
                  suffix: "%"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AppleStyleInput,
                {
                  label: "Health Insurance Premium (Monthly)",
                  type: "number",
                  value: healthInsurance,
                  onChange: (e) => setHealthInsurance(e.target.value),
                  placeholder: "200",
                  prefix: "$"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AppleStyleInput,
                {
                  label: "HSA Contribution (Annual)",
                  type: "number",
                  value: hsaContribution,
                  onChange: (e) => setHsaContribution(e.target.value),
                  placeholder: "0",
                  prefix: "$"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AppleStyleInput,
                {
                  label: "FSA Contribution (Annual)",
                  type: "number",
                  value: fsaContribution,
                  onChange: (e) => setFsaContribution(e.target.value),
                  placeholder: "0",
                  prefix: "$"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-purple-500 to-pink-600 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-6 w-6" }),
              "Post-Tax Deductions"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              AppleStyleInput,
              {
                label: "Additional Withholding (Annual)",
                type: "number",
                value: additionalWithholding,
                onChange: (e) => setAdditionalWithholding(e.target.value),
                placeholder: "0",
                prefix: "$"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: handleCalculate,
              className: "w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-6 text-lg",
              children: "Calculate Paycheck"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg border-2 border-green-200 dark:border-green-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-green-500 to-emerald-600 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-6 w-6" }),
              "Net Pay Per Paycheck"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl font-bold text-green-600 dark:text-green-400 mb-4", children: formatCurrency(netPerPaycheck, "USD") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-600 dark:text-gray-400 text-lg", children: [
                paychecksPerYear,
                " paychecks per year"
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Paycheck Breakdown" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Gross Pay" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-blue-600", children: formatCurrency(grossPerPaycheck, "USD") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-purple-500 pl-3 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-purple-700 dark:text-purple-400", children: "Pre-Tax Deductions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "401(k) (",
                    k401Rate,
                    "%)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-600", children: [
                    "-",
                    formatCurrency(k401PerPaycheck, "USD")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Health Insurance" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-600", children: [
                    "-",
                    formatCurrency(healthPerPaycheck, "USD")
                  ] })
                ] }),
                hsaPerPaycheck > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "HSA" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-600", children: [
                    "-",
                    formatCurrency(hsaPerPaycheck, "USD")
                  ] })
                ] }),
                fsaPerPaycheck > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "FSA" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-600", children: [
                    "-",
                    formatCurrency(fsaPerPaycheck, "USD")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-semibold pt-2 border-t", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Pre-Tax" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-600", children: [
                    "-",
                    formatCurrency(preTaxDeductions, "USD")
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Taxable Income" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold", children: formatCurrency(taxableIncome, "USD") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-red-500 pl-3 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-red-700 dark:text-red-400", children: "Taxes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Federal Tax" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-600", children: [
                    "-",
                    formatCurrency(federalWithholding, "USD")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "State Tax (",
                    state,
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-600", children: [
                    "-",
                    formatCurrency(stateWithholding, "USD")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Social Security" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-600", children: [
                    "-",
                    formatCurrency(socialSecurity, "USD")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Medicare" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-600", children: [
                    "-",
                    formatCurrency(medicare, "USD")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-semibold pt-2 border-t", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Taxes" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-600", children: [
                    "-",
                    formatCurrency(federalWithholding + stateWithholding + ficaTotal, "USD")
                  ] })
                ] })
              ] }),
              postTaxDeductions > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-950 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Post-Tax Deductions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-bold text-red-600", children: [
                  "-",
                  formatCurrency(postTaxDeductions, "USD")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-4 bg-green-50 dark:bg-green-950 rounded-lg border-2 border-green-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lg", children: "Net Pay" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-green-600", children: formatCurrency(netPerPaycheck, "USD") })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Annual Totals" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Annual Gross" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: formatCurrency(annualGross, "USD") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Pre-Tax Deductions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-red-600", children: [
                  "-",
                  formatCurrency(annualPreTaxDeductions, "USD")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Federal Tax" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-red-600", children: [
                  "-",
                  formatCurrency(annualFederalTax, "USD")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "State Tax" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-red-600", children: [
                  "-",
                  formatCurrency(annualStateTax, "USD")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "FICA" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-red-600", children: [
                  "-",
                  formatCurrency(annualFICA, "USD")
                ] })
              ] }),
              annualPostTaxDeductions > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Post-Tax Deductions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-red-600", children: [
                  "-",
                  formatCurrency(annualPostTaxDeductions, "USD")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pt-3 border-t-2 border-green-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lg", children: "Annual Net Pay" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-xl text-green-600", children: formatCurrency(annualNet, "USD") })
              ] })
            ] })
          ] })
        ] })
      ] }),
      calculated && /* @__PURE__ */ jsxRuntimeExports.jsx(
        AIAnalysis,
        {
          analysisRequest: {
            calculatorType: "paycheck_calculator",
            data: {
              annualSalary: salary,
              payFrequency,
              state,
              grossPerPaycheck,
              netPerPaycheck,
              federalWithholding,
              stateWithholding,
              ficaTotal,
              preTaxDeductions,
              postTaxDeductions,
              annualNetPay: annualNet
            }
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none dark:prose-invert mt-12 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Understanding Your Paycheck" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: "Your paycheck is more than just a number - it's a detailed breakdown of your earnings, taxes, and deductions. Understanding each component helps you optimize your take-home pay, plan your budget effectively, and make informed financial decisions. This paycheck calculator provides a comprehensive analysis of your gross pay, all deductions, tax withholdings, and net pay based on your salary, pay frequency, and location." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: "The anatomy of a paycheck stub includes gross pay (your salary before deductions), pre-tax deductions (401k, health insurance, HSA, FSA), taxes (federal, state, FICA), post-tax deductions, and net pay (your actual take-home amount). Each line item affects your bottom line differently, with pre-tax deductions reducing your taxable income and post-tax deductions coming out of your net pay." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Pay Frequency Impact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "How often you get paid significantly impacts your budgeting and cash flow management:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Weekly (52 paychecks)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-2", children: "Receive payment every week, typically on the same day." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pros:" }),
                " Most frequent cash flow, easier to budget short-term expenses"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cons:" }),
                " Smaller per-paycheck amount, more paychecks to track"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950 border-l-4 border-green-500 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Bi-weekly (26 paychecks)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-2", children: "Paid every two weeks, most common pay frequency in the US." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pros:" }),
                ' Two "extra" paychecks per year (2 months have 3 paychecks), balanced frequency'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cons:" }),
                " Pay dates shift throughout the year, varying paychecks per month"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 dark:bg-purple-950 border-l-4 border-purple-500 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Semi-monthly (24 paychecks)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-2", children: "Paid twice per month, often on the 15th and last day." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pros:" }),
                " Consistent 2 paychecks per month, easier to align with monthly bills"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cons:" }),
                " Varying days between paychecks (13-16 days)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 dark:bg-orange-950 border-l-4 border-orange-500 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Monthly (12 paychecks)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-2", children: "Paid once per month, common for salaried professionals." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pros:" }),
                " Largest per-paycheck amount, aligns perfectly with monthly bills"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cons:" }),
                " Requires strongest budgeting discipline, longest wait between paychecks"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Federal Withholding" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: 'Federal income tax is withheld from each paycheck based on the information you provide on your Form W-4. The 2024 W-4 uses a different system than previous years, eliminating "allowances" in favor of more accurate withholding calculations.' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "How Federal Withholding Works" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "Your employer calculates federal withholding using your filing status, number of dependents, and any additional withholding you request. The system uses progressive tax brackets, meaning different portions of your income are taxed at different rates. Your actual annual tax liability may differ from withholding, resulting in either a refund or additional tax owed when you file your return." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "Form W-4 Explained (2024 Version)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "The W-4 has five steps:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 1:" }),
              " Enter personal information (name, address, SSN, filing status)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 2:" }),
              " Account for multiple jobs or spouse's income (use worksheet or online estimator)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 3:" }),
              " Claim dependents (number of qualifying children and other dependents)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 4:" }),
              " Optional adjustments (other income, deductions, extra withholding)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 5:" }),
              " Sign and date the form"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "Adjusting Your Withholding" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "You should update your W-4 when you experience major life changes:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Marriage or divorce" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Birth or adoption of a child" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Purchase of a home" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Starting a second job or side business" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Large refund or tax bill in previous year" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Significant increase or decrease in income" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "State Withholding Variations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "State income tax withholding varies dramatically across the United States. Nine states have no income tax, while others have rates ranging from under 3% to over 13% for high earners." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950 border-l-4 border-green-500 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "No Income Tax States (9)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Alaska" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Florida" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Nevada" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• New Hampshire*" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• South Dakota" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Tennessee" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Texas" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Washington" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Wyoming" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-2", children: "*NH taxes dividends & interest only" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Low Tax States (<4%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• North Dakota: 2.9%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Pennsylvania: 3.07%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Indiana: 3.23%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Arizona: 2.59%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Ohio: 3.99%" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "High Tax States (>9%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• California: 9.3%+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• New York: 8.82%+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• New Jersey: 8.97%+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Minnesota: 9.85%+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Oregon: 9.9%+" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-2", children: "Top marginal rates shown" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: "Some localities also impose additional income taxes. For example, New York City residents pay an additional 3.876% on top of state taxes. Consider both state and local tax rates when evaluating job offers or relocation decisions." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "FICA Taxes on Paychecks" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "FICA (Federal Insurance Contributions Act) taxes fund Social Security and Medicare. These are mandatory payroll taxes that apply to nearly all employees." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "Social Security Tax" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-6 rounded-lg mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Rate:" }),
              " 6.2% of gross wages"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2024 Wage Cap:" }),
              " $168,600"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Maximum Annual Tax:" }),
              " $10,453.20"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-3", children: "Once your year-to-date earnings exceed $168,600, you stop paying Social Security tax for the remainder of the year. High earners see a noticeable bump in net pay once they hit this threshold (usually in November or December)." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "Medicare Tax" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950 border-l-4 border-green-500 p-6 rounded-lg mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Base Rate:" }),
              " 1.45% of all wages (no cap)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Additional Medicare Tax:" }),
              " 0.9% on earnings over $200,000 (single) or $250,000 (married)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-3", children: "Unlike Social Security, Medicare tax applies to all wages with no cap. The Additional Medicare Tax kicks in at high income levels and is an extra 0.9% on top of the base 1.45%, bringing total Medicare tax to 2.35% on wages above the threshold." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Employer Match:" }),
            " Your employer also pays matching FICA taxes (6.2% Social Security + 1.45% Medicare). This is in addition to your salary and is part of the true cost of employing you. Self-employed individuals pay both the employee and employer portions (15.3% total) via self-employment tax."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Pre-Tax Deductions (Advantages)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "Pre-tax deductions reduce your taxable income, lowering your federal and state income tax liability. These are powerful tools for reducing your overall tax burden." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "401(k) Contributions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 dark:bg-purple-950 border-l-4 border-purple-500 p-6 rounded-lg mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2024 Contribution Limit:" }),
              " $23,000 (under age 50), $30,500 (age 50+)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tax Impact:" }),
              " Every $1,000 contributed saves approximately $220-370 in federal taxes (depending on tax bracket)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Employer Match:" }),
              " Free money! Common matches: 50% of first 6%, or 100% of first 3%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-3", children: "Contributing to your 401(k) reduces your current taxable income, meaning you pay less tax now. You'll pay taxes when you withdraw in retirement, ideally when you're in a lower tax bracket. Always contribute enough to get the full employer match - it's an immediate 50-100% return on investment." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "Health Savings Account (HSA)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950 border-l-4 border-green-500 p-6 rounded-lg mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2024 Contribution Limit:" }),
              " $4,150 (individual), $8,300 (family)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Triple Tax Advantage:" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tax-deductible contributions (like 401k)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tax-free growth (like Roth IRA)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tax-free withdrawals for qualified medical expenses" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-3", children: "HSAs are available only with High Deductible Health Plans (HDHPs). Funds roll over year-to-year and can be invested like a 401(k). After age 65, you can withdraw for any purpose (taxed as ordinary income), making it similar to a traditional IRA with medical expense advantages." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "Health Insurance Premiums" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "Employer-sponsored health insurance premiums are typically deducted pre-tax, reducing your taxable income. If your employer offers multiple plan tiers, calculate whether a higher premium / lower deductible plan makes sense based on your expected healthcare usage." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "Flexible Spending Account (FSA)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 dark:bg-yellow-950 border-l-4 border-yellow-500 p-6 rounded-lg mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2024 Contribution Limit:" }),
              " $3,200 (healthcare FSA), $5,000 (dependent care FSA)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Use-It-or-Lose-It:" }),
              " Funds must generally be used by year-end or during grace period"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Carryover:" }),
              " Some employers allow up to $640 to carry over to the next year"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-3", children: "FSAs reduce taxable income but require careful planning. Only contribute what you're confident you'll spend on qualified medical expenses (copays, prescriptions, glasses, dental) or dependent care (daycare, after-school programs). Unlike HSAs, you can't invest FSA funds or carry large balances forward." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "Commuter Benefits" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "Some employers offer pre-tax deductions for transit passes and parking (up to $315/month each in 2024). If you commute regularly, this benefit can save $600-1,200 annually in taxes." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Post-Tax Deductions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "Post-tax deductions come out of your net pay after all taxes are withheld. These don't reduce your taxable income but may offer other benefits:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Roth 401(k) Contributions:" }),
              " Unlike traditional 401(k), Roth contributions are made after-tax. You pay taxes now but enjoy tax-free withdrawals in retirement. Beneficial if you expect to be in a higher tax bracket later or want tax diversification."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Disability Insurance:" }),
              " Premiums for supplemental disability insurance are often post-tax, but this means benefits are tax-free if you need to use them."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Life Insurance:" }),
              " Employer-provided life insurance over $50,000 is taxable, and any additional coverage you purchase through your employer typically uses post-tax dollars."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Wage Garnishments:" }),
              " Court-ordered garnishments for child support, alimony, student loans, or tax liens are automatically deducted after taxes."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Union Dues:" }),
              " Labor union membership dues are typically post-tax deductions."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Optimizing Your Paycheck" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "1. Maximize Pre-Tax Deductions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "Every dollar you contribute pre-tax saves you 20-40% in taxes depending on your bracket. Prioritize:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "401(k) up to employer match (minimum)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "HSA maximum if eligible (best tax treatment)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Additional 401(k) contributions (up to limit)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "FSA for predictable medical expenses" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "2. Adjust W-4 to Avoid Large Refunds" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "A $3,000 tax refund means you gave the government an interest-free loan of $250/month. Use the IRS Tax Withholding Estimator to dial in your W-4 and get that money in your paychecks throughout the year instead. Invest or pay down debt with the extra cash flow rather than waiting for a refund." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "3. Calculate Your True Hourly Rate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "Divide your net annual pay by hours worked to understand your true take-home hourly rate. For example, $75,000 gross might be $55,000 net. If you work 2,080 hours/year (40 hrs/week × 52 weeks), your true rate is $26.44/hr, not $36.06/hr. This perspective helps evaluate side gigs, overtime, and time-money trade-offs." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "4. Understand Bonus and Overtime Taxation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "Bonuses and overtime are often withheld at higher rates (supplemental wage rate of 22% or your marginal rate). This doesn't mean you're taxed more - it's just withholding. You'll get overpaid taxes back when you file your return. Don't panic when your bonus check is withheld at 40-50% total." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Frequently Asked Questions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-semibold text-lg cursor-pointer text-gray-900 dark:text-white", children: "Why does my paycheck vary even though my salary is the same?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-700 dark:text-gray-300", children: "Paycheck variations occur for several reasons: (1) Different number of pay periods per month with bi-weekly pay, (2) Changes to pre-tax deductions like 401(k) contributions or insurance premiums, (3) Hitting the Social Security wage cap ($168,600) gives you a bump in late-year paychecks, (4) Overtime or bonus pay in some periods, (5) Updated tax withholding from a new W-4, or (6) Changes to benefits enrollment. Review your paystub details to identify the specific cause." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-semibold text-lg cursor-pointer text-gray-900 dark:text-white", children: "Should I change my W-4 if I got a large refund or owed taxes?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-700 dark:text-gray-300", children: "Yes! A large refund means you're over-withholding (giving an interest-free loan to the government). Owing significant taxes means you're under-withholding and may face penalties. Use the IRS Tax Withholding Estimator tool to calculate optimal withholding and submit a new W-4. Aim to owe or receive less than $500 at tax time. Update your W-4 whenever you have major life changes (marriage, children, home purchase, second job)." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-semibold text-lg cursor-pointer text-gray-900 dark:text-white", children: "How are bonuses taxed differently than regular pay?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-700 dark:text-gray-300", children: 'Bonuses are "supplemental wages" and are typically withheld at either 22% (flat rate for bonuses under $1M) or your marginal tax rate. The total withholding including FICA and state tax can reach 40-50%. However, this is just withholding - your actual tax rate is determined when you file your annual return. If too much was withheld, you get it back as a refund. Bonuses are NOT taxed at a higher rate than regular income; they just have different withholding rules.' })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-semibold text-lg cursor-pointer text-gray-900 dark:text-white", children: "What's the maximum I can contribute to my 401(k)?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-700 dark:text-gray-300", children: "For 2024, you can contribute up to $23,000 to your 401(k) if you're under age 50, or $30,500 if you're 50 or older (includes $7,500 catch-up contribution). These limits apply to employee deferrals only - employer matching contributions don't count toward this limit. The total combined limit (employee + employer) is $69,000 ($76,500 for age 50+). Highly compensated employees may face additional restrictions based on company plan rules." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-semibold text-lg cursor-pointer text-gray-900 dark:text-white", children: "Should I do pre-tax or Roth 401(k) contributions?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-700 dark:text-gray-300", children: "Choose pre-tax (traditional) if you expect lower tax rates in retirement or want to reduce current taxable income. Choose Roth if you expect higher tax rates in retirement, are early in your career with a relatively low current salary, or want tax diversification. Many experts recommend a mix of both. General rule of thumb: if you're in the 22% bracket or higher now and expect to be in the 12% bracket in retirement, choose pre-tax. If you're currently in the 12% bracket, Roth may be better." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-semibold text-lg cursor-pointer text-gray-900 dark:text-white", children: "What happens to my paycheck if I hit the Social Security wage cap?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-700 dark:text-gray-300", children: "Once your year-to-date earnings reach $168,600 (2024), you stop paying the 6.2% Social Security tax for the remainder of the year. This means an immediate 6.2% increase in your net pay. For example, if you earn $200,000/year paid bi-weekly ($7,692/paycheck), you'll hit the cap around mid-November and see your net pay increase by about $477 per paycheck for the rest of the year. Medicare tax continues with no cap." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-semibold text-lg cursor-pointer text-gray-900 dark:text-white", children: "How do I calculate my effective tax rate from my paycheck?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-700 dark:text-gray-300", children: "Effective tax rate = Total taxes paid / Gross income. Add federal tax + state tax + FICA (Social Security + Medicare) from your paystub, then divide by gross pay. For example: Federal tax $600 + State tax $300 + FICA $230 = $1,130 total taxes. $1,130 / $3,000 gross = 37.7% effective rate on your paycheck. Note that this paycheck rate may differ from your annual effective rate due to progressive tax brackets, and doesn't account for tax credits you might receive when filing your return." })
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  PaycheckCalculator,
  PaycheckCalculator as default
};
