import { r as reactExports, j as jsxRuntimeExports, a8 as Sparkles, f as Card, g as CardHeader, h as CardTitle, a3 as FileText, i as CardDescription, k as CardContent, a4 as Label, V as Input, B as Button, C as Calculator, T as TrendingUp, a5 as Info } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { S as Separator } from "./separator-63Q9JacM.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { E as EnhancedAIAnalysis } from "./EnhancedAIAnalysis-BaYCd8m5.js";
import { A as AutoAdSlot } from "./AutoAdSlot-DNRO9HTk.js";
import { G as Gift } from "./gift-hQSe-DlA.js";
import { T as TrendingDown } from "./trending-down-Cff5hrMM.js";
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
const IncomeTaxCalculatorIndia = () => {
  const [grossSalary, setGrossSalary] = reactExports.useState("");
  const [taxRegime, setTaxRegime] = reactExports.useState("old");
  const [section80C, setSection80C] = reactExports.useState("");
  const [homeLoanInterest, setHomeLoanInterest] = reactExports.useState("");
  const [hra, setHra] = reactExports.useState("");
  const [rentPaid, setRentPaid] = reactExports.useState("");
  const [cityType, setCityType] = reactExports.useState("metro");
  const [results, setResults] = reactExports.useState(null);
  const calculateTax = () => {
    const gross = parseFloat(grossSalary);
    const section80c = Math.min(parseFloat(section80C) || 0, 15e4);
    const hlInterest = Math.min(parseFloat(homeLoanInterest) || 0, 2e5);
    const hraAmount = parseFloat(hra) || 0;
    const rent = parseFloat(rentPaid) || 0;
    if (!gross) return;
    let taxableIncome = gross;
    let deductions = 0;
    if (taxRegime === "old") {
      const standardDeduction = Math.min(75e3, gross);
      deductions += standardDeduction;
      deductions += section80c;
      deductions += hlInterest;
      if (hraAmount > 0 && rent > 0) {
        const basicSalary = gross * 0.4;
        const hraExemption = Math.min(
          hraAmount,
          rent - basicSalary * 0.1,
          cityType === "metro" ? basicSalary * 0.5 : basicSalary * 0.4
        );
        deductions += Math.max(0, hraExemption);
      }
      taxableIncome = Math.max(0, gross - deductions);
    } else {
      const standardDeduction = Math.min(75e3, gross);
      taxableIncome = Math.max(0, gross - standardDeduction);
    }
    let tax = 0;
    let cess = 0;
    if (taxRegime === "old") {
      if (taxableIncome > 25e4) {
        if (taxableIncome <= 5e5) {
          tax = (taxableIncome - 25e4) * 0.05;
        } else if (taxableIncome <= 1e6) {
          tax = 25e4 * 0.05 + (taxableIncome - 5e5) * 0.2;
        } else {
          tax = 25e4 * 0.05 + 5e5 * 0.2 + (taxableIncome - 1e6) * 0.3;
        }
      }
    } else {
      if (taxableIncome > 12e5) {
        if (taxableIncome <= 16e5) {
          tax = (taxableIncome - 12e5) * 0.15;
        } else if (taxableIncome <= 2e6) {
          tax = 4e5 * 0.15 + (taxableIncome - 16e5) * 0.2;
        } else {
          tax = 4e5 * 0.15 + 4e5 * 0.2 + (taxableIncome - 2e6) * 0.3;
        }
      }
    }
    cess = tax * 0.04;
    const totalTax = tax + cess;
    const netSalary = gross - totalTax;
    const effectiveTaxRate = totalTax / gross * 100;
    const marginalTaxRate = calculateMarginalRate(taxableIncome, taxRegime);
    const otherRegimeTax = calculateOtherRegimeTax(gross, taxRegime, deductions);
    const taxSavings = Math.abs(totalTax - otherRegimeTax);
    setResults({
      grossSalary: gross,
      taxableIncome,
      totalDeductions: deductions,
      tax,
      cess,
      totalTax,
      netSalary,
      effectiveTaxRate,
      marginalTaxRate,
      otherRegimeTax,
      taxSavings,
      recommendedRegime: totalTax < otherRegimeTax ? taxRegime : taxRegime === "old" ? "new" : "old"
    });
  };
  const calculateMarginalRate = (income, regime) => {
    if (regime === "old") {
      if (income <= 25e4) return 0;
      if (income <= 5e5) return 5;
      if (income <= 1e6) return 20;
      return 30;
    } else {
      if (income <= 12e5) return 0;
      if (income <= 16e5) return 15;
      if (income <= 2e6) return 20;
      return 30;
    }
  };
  const calculateOtherRegimeTax = (gross, currentRegime, currentDeductions) => {
    let taxableIncome = gross;
    let tax = 0;
    if (currentRegime === "old") {
      taxableIncome = Math.max(0, gross - 75e3);
      if (taxableIncome > 12e5) {
        if (taxableIncome <= 16e5) {
          tax = (taxableIncome - 12e5) * 0.15;
        } else if (taxableIncome <= 2e6) {
          tax = 4e5 * 0.15 + (taxableIncome - 16e5) * 0.2;
        } else {
          tax = 4e5 * 0.15 + 4e5 * 0.2 + (taxableIncome - 2e6) * 0.3;
        }
      }
    } else {
      taxableIncome = Math.max(0, gross - currentDeductions);
      if (taxableIncome > 25e4) {
        if (taxableIncome <= 5e5) {
          tax = (taxableIncome - 25e4) * 0.05;
        } else if (taxableIncome <= 1e6) {
          tax = 25e4 * 0.05 + (taxableIncome - 5e5) * 0.2;
        } else {
          tax = 25e4 * 0.05 + 5e5 * 0.2 + (taxableIncome - 1e6) * 0.3;
        }
      }
    }
    return tax * 1.04;
  };
  const reset = () => {
    setGrossSalary("");
    setTaxRegime("old");
    setSection80C("");
    setHomeLoanInterest("");
    setHra("");
    setRentPaid("");
    setCityType("metro");
    setResults(null);
  };
  const tips = [
    "🎉 NEW: Zero tax up to ₹12 lakhs in the new tax regime for FY 2025-26!",
    "💰 Standard deduction of ₹75,000 automatically reduces your taxable income",
    "🏠 Old regime: Claim HRA + Section 80C (₹1.5L) + Home Loan Interest (₹2L)",
    "📊 New regime: Simplified slabs - 0% up to ₹12L, 15% till ₹16L, 20% till ₹20L",
    "✨ Most salaried employees benefit from the new regime in FY 2025-26"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "India Income Tax Calculator 2025-26",
      description: "Calculate your income tax liability under both old and new tax regimes in India for FY 2025-26 with latest tax slabs and rates",
      keywords: "India income tax calculator 2025, tax calculation India, old vs new tax regime, section 80C, HRA exemption, FY 2025-26",
      tips,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 p-4 bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 rounded-lg border-2 border-purple-300 animate-pulse-slow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-8 w-8 text-purple-600 animate-spin-slow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-purple-900", children: "🎉 Big Tax Relief for FY 2025-26!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-700 font-medium", children: "Zero Income Tax up to ₹12 Lakhs in New Tax Regime – More money in your pocket!" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "bg-gradient-to-r from-indigo-50 to-purple-50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5 text-indigo-600 animate-bounce-subtle" }),
                "Income Tax Calculator"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardDescription, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-yellow-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🎉 Zero tax up to ₹12 Lakhs in FY 2025-26!" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "grossSalary", children: "Annual Gross Salary (₹)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "grossSalary",
                    type: "number",
                    placeholder: "Enter annual gross salary",
                    value: grossSalary,
                    onChange: (e) => setGrossSalary(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "taxRegime", children: "Tax Regime" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: taxRegime, onValueChange: setTaxRegime, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select tax regime" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "old", children: "Old Tax Regime" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "new", children: "New Tax Regime" })
                  ] })
                ] })
              ] }),
              taxRegime === "old" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "section80C", children: "Section 80C Deductions (₹)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "section80C",
                      type: "number",
                      placeholder: "PF, ELSS, LIC etc. (Max ₹1.5L)",
                      value: section80C,
                      onChange: (e) => setSection80C(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "homeLoanInterest", children: "Home Loan Interest (₹)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "homeLoanInterest",
                      type: "number",
                      placeholder: "Section 24 deduction (Max ₹2L)",
                      value: homeLoanInterest,
                      onChange: (e) => setHomeLoanInterest(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "hra", children: "HRA Received (₹)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "hra",
                        type: "number",
                        placeholder: "Annual HRA",
                        value: hra,
                        onChange: (e) => setHra(e.target.value)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "rentPaid", children: "Rent Paid (₹)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "rentPaid",
                        type: "number",
                        placeholder: "Annual rent",
                        value: rentPaid,
                        onChange: (e) => setRentPaid(e.target.value)
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cityType", children: "City Type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: cityType, onValueChange: setCityType, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select city type" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "metro", children: "Metro City" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "non-metro", children: "Non-Metro City" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateTax, className: "flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "mr-2 h-4 w-4" }),
                  "Calculate Tax"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: reset, variant: "outline", className: "hover:bg-red-50 transition-colors", children: "Reset" })
              ] })
            ] })
          ] }),
          results && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 shadow-lg animate-slide-in-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-green-50 to-emerald-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-green-600" }),
              "Your Tax Results"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-blue-50 rounded-lg transition-all duration-300 hover:bg-blue-100 hover:scale-105", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-blue-600 font-medium", children: "Gross Salary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold text-blue-900", children: [
                    "₹",
                    results.grossSalary.toLocaleString("en-IN")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-purple-50 rounded-lg transition-all duration-300 hover:bg-purple-100 hover:scale-105", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-purple-600 font-medium", children: "Taxable Income" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold text-purple-900", children: [
                    "₹",
                    Math.round(results.taxableIncome).toLocaleString("en-IN")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-red-50 rounded-lg transition-all duration-300 hover:bg-red-100 hover:scale-105", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-600 font-medium", children: "Income Tax" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-red-700", children: [
                    "₹",
                    Math.round(results.totalTax).toLocaleString("en-IN")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-green-50 rounded-lg transition-all duration-300 hover:bg-green-100 hover:scale-105", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-600 font-medium", children: "Take Home Salary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-green-700", children: [
                    "₹",
                    Math.round(results.netSalary).toLocaleString("en-IN")
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Tax Breakdown" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Tax (Before Cess):" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                      "₹",
                      Math.round(results.tax).toLocaleString("en-IN")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Health & Education Cess:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
                      "₹",
                      Math.round(results.cess).toLocaleString("en-IN")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Total Deductions:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                      "₹",
                      Math.round(results.totalDeductions).toLocaleString("en-IN")
                    ] })
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
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200 animate-fade-in", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "font-medium text-green-800 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "h-5 w-5" }),
                  "Smart Regime Comparison"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-green-700 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Other regime tax:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                      "₹",
                      Math.round(results.otherRegimeTax).toLocaleString("en-IN")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Your savings:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-green-600", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-3 w-3 mr-1" }),
                      "₹",
                      Math.round(results.taxSavings).toLocaleString("en-IN")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "pt-2 border-t border-green-200 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-yellow-600" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "Recommended: ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-green-900", children: [
                        results.recommendedRegime === "old" ? "Old" : "New",
                        " Tax Regime"
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5" }),
            "Understanding Income Tax in India: Old vs New Tax Regime"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose prose-sm md:prose-base max-w-none space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-gray-700", children: "India's income tax system underwent significant transformation with the introduction of the new tax regime in Budget 2020, offering taxpayers a choice between the traditional regime with deductions and a simplified regime with lower tax rates. Understanding both systems is crucial for optimal tax planning and maximizing post-tax income, as the choice between regimes can result in substantial differences in tax liability depending on individual circumstances." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mt-8 mb-4", children: "Old Tax Regime: Deductions and Exemptions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-gray-700", children: "The old tax regime maintains the traditional structure with tax slabs of 5%, 20%, and 30% for income above ₹2.5 lakh, while offering extensive deduction opportunities under various sections. Section 80C allows deductions up to ₹1.5 lakh for investments in EPF, ELSS, life insurance, and housing loans. Additional deductions include Section 80D for medical insurance, Section 24 for home loan interest, and HRA exemptions for house rent, creating significant tax planning opportunities for knowledgeable taxpayers." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mt-8 mb-4", children: "🎉 New Tax Regime: Game-Changer for FY 2025-26!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base leading-relaxed text-gray-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Breaking News:" }),
              " The new tax regime for FY 2025-26 brings revolutionary changes with ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ZERO tax up to ₹12 lakh" }),
              " of taxable income! After the ₹75,000 standard deduction, this means you can earn up to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "₹12.75 lakh gross salary" }),
              " and pay absolutely no income tax. Beyond ₹12 lakhs, simplified progressive rates apply: 15% till ₹16L, 20% till ₹20L, and 30% thereafter. This game-changing update makes the new regime the clear winner for over 90% of salaried individuals, especially middle-income earners. Say goodbye to complex deduction paperwork and hello to more take-home pay!"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content", className: "max-w-full" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mt-8 mb-4", children: "💰 Standard Deduction: Your Automatic Tax Saver" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base leading-relaxed text-gray-700", children: [
              "Great news! Both tax regimes automatically give you a ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "₹75,000 standard deduction" }),
              " for FY 2025-26 – no paperwork, no investment required! Think of it as a gift from the tax department. But here's where it gets exciting: in the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "new regime, this combines with a massive ₹12 lakh tax-free threshold" }),
              ", meaning your first ₹12.75 lakh (gross) is completely tax-free! The old regime still starts taxing at ₹2.5 lakhs (after standard deduction at ₹3.25L gross). For most people, the new regime's simplicity plus zero tax up to ₹12L is a no-brainer choice."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content", className: "max-w-full" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mt-8 mb-4", children: "HRA and Housing Benefits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-gray-700", children: "HRA exemption represents one of the most valuable benefits of the old tax regime, particularly for metro city residents where exemption can reach 50% of basic salary. The calculation considers actual HRA received, rent paid minus 10% of basic salary, and 40-50% of basic salary depending on city type. Home loan interest deduction under Section 24 allows additional savings up to ₹2 lakh annually, making home ownership tax-efficient under the old regime." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mt-8 mb-4", children: "Investment-Linked Tax Planning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-gray-700", children: "The old regime encourages long-term savings through tax-linked investments, creating forced savings habits while reducing tax liability. Section 80C investments in ELSS mutual funds, PPF, NSC, and life insurance not only save taxes but also build wealth over time. This structure aligns tax benefits with financial planning goals, encouraging disciplined saving and investment behavior among taxpayers while providing immediate tax relief." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content", className: "max-w-full" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mt-8 mb-4", children: "Health Insurance and Medical Benefits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-gray-700", children: "Section 80D deductions for health insurance premiums provide dual benefits of tax savings and health coverage, with higher limits for senior citizens. Medical expenditure deductions under Section 80DDB for specific diseases and preventive health check-up deductions encourage healthcare spending while reducing tax burden. These provisions make comprehensive health coverage more affordable through tax benefits, particularly important given rising healthcare costs." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mt-8 mb-4", children: "✨ Smart Regime Selection: Your 2025-26 Strategy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base leading-relaxed text-gray-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Quick Decision Guide:" }),
              " For FY 2025-26, the new regime is the winner for 90%+ of taxpayers! With zero tax up to ₹12 lakhs, you'd need over ₹4 lakhs in total deductions (80C + HRA + home loan + others) under the old regime to match this benefit. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Choose NEW if:" }),
              " Your salary is under ₹15 lakhs OR you don't have ₹4L+ in deductions. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Choose OLD if:" }),
              " You have significant HRA + home loan interest + 80C investments totaling ₹4L+. Pro tip: You can switch regimes every year (salaried employees only), so recalculate annually! Use our calculator above to compare instantly."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content", className: "max-w-full" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mt-8 mb-4", children: "Marginal and Effective Tax Rates" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-gray-700", children: "Understanding marginal tax rates helps in making incremental income and investment decisions, as additional income gets taxed at the highest applicable rate. Effective tax rate represents the overall tax burden as a percentage of total income, providing a clearer picture of actual tax impact. These metrics guide decisions about overtime work, bonuses, and investment timing to optimize overall tax efficiency." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mt-8 mb-4", children: "Tax Planning Throughout the Year" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-gray-700", children: "Effective tax planning requires year-round awareness rather than last-minute investment decisions. Early planning allows optimal allocation across various deduction categories, timing of income recognition, and strategic investment decisions. Regular monitoring of tax implications helps identify planning opportunities and ensures compliance while maximizing post-tax income through legitimate tax optimization strategies." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content", className: "max-w-full" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mt-8 mb-4", children: "Compliance and Documentation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-gray-700", children: "Proper documentation and compliance become crucial for claiming deductions under the old regime, requiring maintenance of investment proofs, rent receipts, and insurance premium records. The new regime simplifies compliance by reducing documentation requirements, though basic income reporting remains necessary. Understanding compliance requirements helps avoid penalties while ensuring legitimate tax benefits are properly claimed and supported." })
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            EnhancedAIAnalysis,
            {
              calculatorType: "income-tax-india",
              data: {
                grossSalary: results.grossSalary,
                netSalary: results.netSalary,
                totalTax: results.totalTax,
                effectiveTaxRate: results.effectiveTaxRate,
                marginalTaxRate: results.marginalTaxRate,
                taxRegime,
                totalDeductions: results.totalDeductions,
                recommendedRegime: results.recommendedRegime,
                taxSavings: results.taxSavings
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "income-tax-india",
              inputs: {
                grossSalary,
                taxRegime,
                section80C,
                homeLoanInterest,
                hra,
                rentPaid,
                cityType
              },
              results,
              title: "Income Tax Calculation"
            }
          ) })
        ] })
      ]
    }
  );
};
export {
  IncomeTaxCalculatorIndia as default
};
