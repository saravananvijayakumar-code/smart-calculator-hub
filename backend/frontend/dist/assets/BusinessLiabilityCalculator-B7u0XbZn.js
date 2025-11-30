import { r as reactExports, j as jsxRuntimeExports, c as Shield, D as DollarSign, T as TrendingUp, a4 as Info } from "./index-C_OXA6OQ.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { A as AppleStyleCard } from "./AppleStyleCard-bNXb4kfM.js";
import { A as AppleStyleInput } from "./AppleStyleInput-BFag-KzQ.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { B as Building2 } from "./building-2-DUu7gAIv.js";
import { C as CircleCheckBig } from "./circle-check-big-BoxGYPKG.js";
import { C as CircleAlert } from "./circle-alert-CYu8dohk.js";
import { U as Users } from "./users-fS_YAEJN.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./EnhancedAIAnalysis-BZiQW2bt.js";
import "./badge-fo2YvZos.js";
import "./loader-circle-BYW7QwsU.js";
import "./brain-U3SZm3t9.js";
import "./target-1ApqtYDG.js";
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
const businessTypes = [
  "Retail Store",
  "Restaurant/Food Service",
  "Professional Services",
  "Consulting",
  "Technology/Software",
  "Healthcare Services",
  "Construction",
  "Manufacturing",
  "Wholesale Distribution",
  "Real Estate",
  "Marketing/Advertising",
  "E-commerce"
];
const usStates = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY"
];
const businessTypeRiskFactors = {
  "Technology/Software": 0.7,
  "Consulting": 0.8,
  "Professional Services": 0.85,
  "Marketing/Advertising": 0.9,
  "E-commerce": 0.95,
  "Real Estate": 1,
  "Retail Store": 1.1,
  "Healthcare Services": 1.2,
  "Wholesale Distribution": 1.3,
  "Restaurant/Food Service": 1.5,
  "Manufacturing": 1.6,
  "Construction": 2
};
const highCostStates = ["CA", "NY", "FL", "TX", "IL", "NJ", "PA"];
function BusinessLiabilityCalculator() {
  const [inputs, setInputs] = reactExports.useState({
    businessType: "Professional Services",
    annualRevenue: 5e5,
    employeeCount: 5,
    coverageLimit: 1e6,
    yearsInBusiness: 3,
    claimsHistory: 0,
    location: "CA",
    professionalServices: false,
    cyberCoverage: false,
    productLiability: false
  });
  const [results, setResults] = reactExports.useState(null);
  const calculatePremium = reactExports.useCallback(() => {
    let basePremium = 1200;
    const typeFactor = businessTypeRiskFactors[inputs.businessType] || 1;
    basePremium *= typeFactor;
    const revenueMultiplier = Math.sqrt(inputs.annualRevenue / 5e5);
    basePremium *= revenueMultiplier;
    const employeeFactor = 1 + Math.log(inputs.employeeCount + 1) * 0.15;
    basePremium *= employeeFactor;
    if (inputs.coverageLimit === 5e5) basePremium *= 0.75;
    else if (inputs.coverageLimit === 1e6) basePremium *= 1;
    else basePremium *= 1.4;
    if (inputs.yearsInBusiness < 2) basePremium *= 1.3;
    else if (inputs.yearsInBusiness >= 5) basePremium *= 0.85;
    else if (inputs.yearsInBusiness >= 10) basePremium *= 0.75;
    if (inputs.claimsHistory > 0) {
      basePremium *= 1 + inputs.claimsHistory * 0.25;
    }
    const locationFactor = highCostStates.includes(inputs.location) ? 1.3 : 1;
    basePremium *= locationFactor;
    let totalPremium = basePremium;
    if (inputs.professionalServices) {
      totalPremium += basePremium * 0.4;
    }
    if (inputs.cyberCoverage) {
      totalPremium += 800 + inputs.annualRevenue / 1e6 * 500;
    }
    if (inputs.productLiability) {
      totalPremium += basePremium * 0.3;
    }
    const annualPremium = Math.round(totalPremium * 100) / 100;
    const monthlyPremium = Math.round(annualPremium / 12 * 100) / 100;
    const coveragePerIncident = inputs.coverageLimit;
    const annualAggregate = inputs.coverageLimit * 2;
    const costPerEmployee = inputs.employeeCount > 0 ? Math.round(annualPremium / inputs.employeeCount * 100) / 100 : 0;
    setResults({
      annualPremium,
      monthlyPremium,
      coveragePerIncident,
      annualAggregate,
      costPerEmployee
    });
  }, [inputs]);
  reactExports.useEffect(() => {
    calculatePremium();
  }, [calculatePremium]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "Business Liability Insurance Calculator | Small Business Insurance Cost Estimator",
      description: "Calculate business liability insurance costs for your company. Estimate general liability, E&O, and cyber insurance premiums based on industry, revenue, and coverage needs.",
      keywords: "business liability insurance calculator, small business insurance cost, general liability premium, commercial insurance estimator, business insurance quote",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent", children: "🏢 Business Liability Insurance Calculator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Estimate insurance costs to protect your business from lawsuits, claims, and unexpected liabilities" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { className: "bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold mb-6 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-6 h-6" }),
                "Business Information"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Business Type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "select",
                    {
                      value: inputs.businessType,
                      onChange: (e) => setInputs((prev) => ({ ...prev, businessType: e.target.value })),
                      className: "w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-teal-500",
                      children: businessTypes.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: type, children: type }, type))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Annual Revenue ($)",
                    type: "number",
                    value: inputs.annualRevenue,
                    onChange: (value) => setInputs((prev) => ({ ...prev, annualRevenue: Number(value) })),
                    min: 0,
                    step: 5e4
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Number of Employees",
                    type: "number",
                    value: inputs.employeeCount,
                    onChange: (value) => setInputs((prev) => ({ ...prev, employeeCount: Number(value) })),
                    min: 0
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Years in Business",
                    type: "number",
                    value: inputs.yearsInBusiness,
                    onChange: (value) => setInputs((prev) => ({ ...prev, yearsInBusiness: Number(value) })),
                    min: 0
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Claims History (past 5 years)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: inputs.claimsHistory,
                      onChange: (e) => setInputs((prev) => ({ ...prev, claimsHistory: Number(e.target.value) })),
                      className: "w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-teal-500",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 0, children: "No Claims" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 1, children: "1 Claim" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 2, children: "2 Claims" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 3, children: "3 Claims" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 4, children: "4 Claims" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 5, children: "5+ Claims" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Location (State)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "select",
                    {
                      value: inputs.location,
                      onChange: (e) => setInputs((prev) => ({ ...prev, location: e.target.value })),
                      className: "w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-teal-500",
                      children: usStates.map((state) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: state, children: state }, state))
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { className: "mt-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold mb-6 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6" }),
                "Coverage Options"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Coverage Limit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: inputs.coverageLimit,
                      onChange: (e) => setInputs((prev) => ({ ...prev, coverageLimit: Number(e.target.value) })),
                      className: "w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-teal-500",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 5e5, children: "$500,000" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 1e6, children: "$1,000,000" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 2e6, children: "$2,000,000" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Professional Services (E&O)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Errors & Omissions coverage" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setInputs((prev) => ({ ...prev, professionalServices: !prev.professionalServices })),
                      className: `w-12 h-6 rounded-full transition-colors ${inputs.professionalServices ? "bg-teal-500" : "bg-gray-300 dark:bg-gray-600"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-5 h-5 bg-white rounded-full shadow-md transition-transform ${inputs.professionalServices ? "translate-x-6" : "translate-x-0.5"}` })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Cyber Coverage" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Data breach & cyber liability" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setInputs((prev) => ({ ...prev, cyberCoverage: !prev.cyberCoverage })),
                      className: `w-12 h-6 rounded-full transition-colors ${inputs.cyberCoverage ? "bg-teal-500" : "bg-gray-300 dark:bg-gray-600"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-5 h-5 bg-white rounded-full shadow-md transition-transform ${inputs.cyberCoverage ? "translate-x-6" : "translate-x-0.5"}` })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Product Liability" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "For physical product sales" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setInputs((prev) => ({ ...prev, productLiability: !prev.productLiability })),
                      className: `w-12 h-6 rounded-full transition-colors ${inputs.productLiability ? "bg-teal-500" : "bg-gray-300 dark:bg-gray-600"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-5 h-5 bg-white rounded-full shadow-md transition-transform ${inputs.productLiability ? "translate-x-6" : "translate-x-0.5"}` })
                    }
                  )
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { className: "bg-gradient-to-br from-teal-600 to-cyan-600 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-12 h-12 mx-auto mb-4 opacity-80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg opacity-90 mb-2", children: "Estimated Annual Premium" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-5xl font-bold mb-4", children: [
                "$",
                results.annualPremium.toLocaleString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl opacity-90", children: [
                "$",
                results.monthlyPremium.toFixed(2),
                " / month"
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5" }),
                "Coverage Details"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-2 border-b border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Per Incident Coverage" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                    "$",
                    results.coveragePerIncident.toLocaleString()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-2 border-b border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Annual Aggregate" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                    "$",
                    results.annualAggregate.toLocaleString()
                  ] })
                ] }),
                inputs.employeeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-2 bg-teal-50 dark:bg-teal-950/20 rounded-lg px-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Cost Per Employee" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-lg text-teal-600 dark:text-teal-400", children: [
                    "$",
                    results.costPerEmployee.toFixed(2)
                  ] })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5" }),
                "Coverage Breakdown"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "General Liability" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-green-500" })
                ] }),
                inputs.professionalServices && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Professional Liability (E&O)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-green-500" })
                ] }),
                inputs.cyberCoverage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cyber Liability" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-green-500" })
                ] }),
                inputs.productLiability && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Product Liability" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-green-500" })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { className: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5" }),
                "Recommendations"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                businessTypeRiskFactors[inputs.businessType] > 1.4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 mt-0.5 text-amber-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Your industry has higher liability risk. Consider umbrella coverage for additional protection." })
                ] }),
                inputs.employeeCount > 10 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "With ",
                    inputs.employeeCount,
                    " employees, also consider Employment Practices Liability Insurance (EPLI)."
                  ] })
                ] }),
                inputs.claimsHistory > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 mt-0.5 text-red-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Your claims history affects pricing. Implementing risk management practices can reduce future premiums." })
                ] }),
                !inputs.cyberCoverage && inputs.businessType.includes("Technology") && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 mt-0.5 text-amber-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Technology businesses should strongly consider cyber liability coverage for data breach protection." })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ExportShareButtons,
              {
                calculatorType: "business-liability",
                inputs,
                results,
                title: "Business Liability Insurance Estimate"
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BusinessLiabilityArticle, {})
      ]
    }
  );
}
function BusinessLiabilityArticle() {
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const faqs = [
    {
      q: "What does general liability insurance cover?",
      a: "General liability (GL) insurance protects your business against claims of bodily injury, property damage, and personal/advertising injury caused by your operations, products, or services. This includes customer slip-and-fall accidents, damage to client property during work, libel or slander claims, and copyright infringement in your advertising. It's the foundation of business insurance and often required by contracts and leases."
    },
    {
      q: "What's the difference between General Liability and Professional Liability (E&O)?",
      a: "General Liability covers physical injuries and property damage. Professional Liability (Errors & Omissions or E&O) covers financial losses resulting from your professional advice, services, or work product - like a consultant's bad advice costing a client money, or a designer's mistake causing project delays. Service-based businesses need both types of coverage."
    },
    {
      q: "How much business insurance coverage do I need?",
      a: "Most small businesses start with $1 million per occurrence and $2 million aggregate. However, needs vary: if you have commercial leases, landlords often require $1-2M. Client contracts may mandate $2-5M or more. High-risk industries or large contracts need higher limits. Consider your revenue, assets, contract requirements, and industry standards when deciding."
    },
    {
      q: "What is cyber liability insurance and do I need it?",
      a: "Cyber liability covers costs from data breaches, including forensic investigation, customer notification, credit monitoring, legal defense, regulatory fines, and business interruption. ANY business storing customer data electronically needs it - not just tech companies. Even a small breach affecting 100 customers can cost $50,000-$100,000+. If you collect emails, payment info, or personal data, you need cyber coverage."
    },
    {
      q: "Why do premiums vary so much by industry?",
      a: "Insurers price based on claim frequency and severity in your industry. Construction and manufacturing have high injury rates (expensive claims). Restaurants face food poisoning lawsuits. Consultants risk costly E&O claims. Retail has slip-and-fall exposure. Tech companies need cyber coverage. Your industry's loss history directly affects what insurers charge. Higher risk = higher premiums."
    },
    {
      q: "Can I get business insurance if I work from home or am self-employed?",
      a: "Absolutely! In fact, home-based businesses especially need coverage since homeowners policies exclude business activities. If you have clients visiting, deliver services, or sell products, you need business insurance. Many insurers offer affordable policies for sole proprietors and home-based businesses, often starting at $400-600/year for basic GL coverage."
    },
    {
      q: "What's the difference between occurrence and claims-made policies?",
      a: "Occurrence policies cover incidents that happened during the policy period, regardless of when the claim is filed. Claims-made policies only cover claims filed while the policy is active. Occurrence is simpler and provides longer protection but costs more. Claims-made is cheaper but requires 'tail coverage' if you cancel to protect against future claims for past work."
    },
    {
      q: "How can I reduce my business insurance costs?",
      a: "Several strategies work: Bundle multiple policies (GL, property, auto) with one insurer for 10-25% discounts. Choose higher deductibles if you can afford them. Implement safety programs and employee training. Maintain a claims-free history. Join industry associations offering group rates. Increase your deductible from $500 to $2,500 can save 15-30% annually."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-lg max-w-none mt-16 dark:prose-invert", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent", children: "🏢 The Complete Guide to Business Liability Insurance" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-2xl p-8 mb-8 not-prose", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-0", children: "Starting a business is exciting - until you realize how many things can go wrong! 😰 A customer slips in your store, a client sues over bad advice, a data breach exposes customer information, or a product defect causes injury. Without proper insurance, a single lawsuit could bankrupt your business and wipe out your personal assets. Business liability insurance is your financial shield against the unexpected risks of running a company. Let's explore how to protect everything you've worked so hard to build!" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4", children: "🎯 Types of Business Liability Insurance Explained" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Business insurance isn't one-size-fits-all. Different types of liability insurance protect against different risks. Understanding each type helps you build comprehensive protection:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 my-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-xl p-6 not-prose", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xl font-bold mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6" }),
          "1. General Liability Insurance (GL)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The foundation of business insurance, covering bodily injury, property damage, and personal/advertising injury. This is what protects you when a customer falls in your store, your work damages client property, or your ad infringes on a competitor's trademark." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-2", children: "✅ What's Covered:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-xs ml-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Customer injuries at your location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Property damage during operations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Libel, slander, defamation claims" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Copyright/trademark infringement" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Legal defense costs" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-2", children: "❌ What's NOT Covered:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-xs ml-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Professional mistakes/advice" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Employee injuries (need Workers Comp)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Auto accidents (need Commercial Auto)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Intentional acts" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Pollution/environmental damage" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Typical Cost:" }),
          " $400-$1,500/year for small businesses | ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Who Needs It:" }),
          " Every business"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-6 not-prose", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xl font-bold mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6" }),
          "2. Professional Liability / E&O Insurance"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Errors & Omissions (E&O) insurance protects service-based professionals against claims of negligence, mistakes, or failure to deliver promised services. If your advice, designs, or professional work causes financial harm to a client, this coverage pays for defense and damages." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-100 dark:bg-blue-900/50 rounded-lg p-4 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-2 font-semibold", children: "💼 Industries That MUST Have E&O:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Consultants" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Lawyers/Accountants" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Real Estate Agents" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Insurance Agents" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• IT/Tech Services" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Marketing Agencies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Engineers/Architects" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Healthcare Providers" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Typical Cost:" }),
          " $500-$3,000/year | ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Coverage:" }),
          " $1M-$5M per claim"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl p-6 not-prose", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xl font-bold mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-6 h-6" }),
          "3. Cyber Liability Insurance"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "In today's digital world, data breaches aren't just a big-company problem. If you store ANY customer information electronically (emails, payment data, addresses), you're at risk. Cyber insurance covers breach response costs, customer notification, credit monitoring, legal fees, and regulatory fines." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-100 dark:bg-purple-900/50 rounded-lg p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-2", children: "⚠️ Average Cost of a Data Breach:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded p-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg text-purple-600", children: "$150/record" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Average per-customer cost" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded p-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg text-purple-600", children: "$40,000+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Small breach (100-500 records)" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Typical Cost:" }),
          " $800-$2,500/year | ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Who Needs It:" }),
          " Any business with customer data"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-xl p-6 not-prose", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xl font-bold mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-6 h-6" }),
          "4. Product Liability Insurance"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3", children: "If you manufacture, wholesale, distribute, or sell physical products, you need product liability coverage. This protects against claims that your product caused injury or property damage due to defects, inadequate warnings, or design flaws." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold mb-1", children: "Manufacturing Defect" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: "Product differs from design specs and causes harm" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold mb-1", children: "Design Defect" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: "Inherently dangerous design even when properly made" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold mb-1", children: "Failure to Warn" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: "Inadequate instructions or safety warnings" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Typical Cost:" }),
          " Varies widely | ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
          " Food/supplements/health products cost significantly more"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4", children: "📊 Industry-Specific Insurance Needs" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Different industries face unique liability risks. Here's what businesses in various sectors typically need:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-5 border-l-4 border-teal-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-bold mb-2", children: "🏪 Retail & Restaurants" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• General Liability (slip-and-fall, injuries)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Product Liability (if selling products)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Liquor Liability (for bars/restaurants)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Property Insurance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Workers Compensation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-2 text-muted-foreground", children: "Premium range: $1,200-$3,500/year" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-5 border-l-4 border-blue-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-bold mb-2", children: "💼 Professional Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Professional Liability/E&O (essential)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• General Liability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Cyber Liability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Directors & Officers (D&O) if incorporated" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-2 text-muted-foreground", children: "Premium range: $1,500-$5,000/year" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-5 border-l-4 border-purple-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-bold mb-2", children: "💻 Technology & Software" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Tech E&O (software errors/failures)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Cyber Liability (data breaches)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• General Liability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Media Liability (content risks)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-2 text-muted-foreground", children: "Premium range: $2,000-$7,000/year" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-5 border-l-4 border-orange-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-bold mb-2", children: "🔨 Construction & Trades" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• General Liability (injury/property damage)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Tools & Equipment Insurance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Commercial Auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Workers Compensation (if employees)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Completed Operations coverage" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-2 text-muted-foreground", children: "Premium range: $2,500-$8,000/year" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-5 border-l-4 border-pink-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-bold mb-2", children: "🏥 Healthcare Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Medical Malpractice/Professional Liability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• General Liability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Cyber Liability (HIPAA compliance)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• EPLI (Employment Practices)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-2 text-muted-foreground", children: "Premium range: $3,000-$15,000+/year" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-5 border-l-4 border-indigo-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-bold mb-2", children: "🏭 Manufacturing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Product Liability (critical)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• General Liability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Property/Equipment Insurance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Completed Operations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Workers Compensation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-2 text-muted-foreground", children: "Premium range: $3,000-$12,000+/year" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4", children: "💡 Pro Tips for Reducing Insurance Costs" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 my-8 not-prose", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/30 rounded-xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: "📦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Bundle Policies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Combine GL, property, and auto insurance with one carrier for 10-25% discounts. Business Owner's Policies (BOP) bundle GL and property at lower cost than buying separately." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: "🎓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Implement Safety Programs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Employee safety training, workplace safety procedures, and documented risk management practices can earn 5-15% premium discounts from many insurers." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: "💰" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Higher Deductibles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Increasing deductible from $500 to $2,500 can reduce premiums 15-30%. Only makes sense if you have emergency funds to cover potential claims." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/30 rounded-xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: "🏆" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Maintain Claims-Free History" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No claims for 3-5 years can earn 10-20% discounts. Consider paying small claims out-of-pocket to avoid rate increases that cost more long-term." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/30 rounded-xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: "🤝" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Join Industry Associations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Many professional/trade associations offer group insurance rates 15-30% below retail. Membership dues often pay for themselves in insurance savings alone." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950/30 dark:to-cyan-900/30 rounded-xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: "🔍" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Shop Around Annually" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Insurance markets fluctuate. Get 3-4 quotes every renewal. You might find 20-40% savings by switching carriers for identical coverage." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4", children: "⚠️ Common Mistakes That Cost Businesses Dearly" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 my-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 border-l-4 border-red-500 rounded-r-xl p-5 not-prose", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2 text-red-600 dark:text-red-400", children: "❌ Assuming You're Too Small to Need Insurance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: `"I'm just a freelancer/solopreneur" is the #1 mistake. A single lawsuit can bankrupt even small businesses. Sole proprietors are personally liable - your home, savings, and future earnings are at risk. Basic GL coverage costs $400-800/year - far cheaper than one lawsuit.` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 border-l-4 border-orange-500 rounded-r-xl p-5 not-prose", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2 text-orange-600 dark:text-orange-400", children: "❌ Relying Only on Client's Insurance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: `If you're an independent contractor or vendor, don't assume the client's insurance covers you. Most contracts require YOU to carry insurance and often name the client as "additional insured." Without it, you can't get contracts with larger companies.` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 border-l-4 border-amber-500 rounded-r-xl p-5 not-prose", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2 text-amber-600 dark:text-amber-400", children: "❌ Underestimating Coverage Limits" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Choosing minimum coverage ($100K-$300K) to save money backfires when facing serious claims. Medical bills for severe injuries easily exceed $500K. Court judgments can be millions. Most businesses need $1-2M minimum, with umbrella policies providing additional $1-5M coverage." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 border-l-4 border-yellow-500 rounded-r-xl p-5 not-prose", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2 text-yellow-600 dark:text-yellow-400", children: "❌ Not Reading Policy Exclusions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Assuming you're covered without reading the policy is dangerous. GL doesn't cover professional advice. E&O might exclude certain services. Cyber policies may not cover employee errors. Know what's excluded and add riders or separate policies to close gaps." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 border-l-4 border-lime-500 rounded-r-xl p-5 not-prose", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2 text-lime-600 dark:text-lime-400", children: "❌ Letting Coverage Lapse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Gaps in coverage can haunt you for years. With claims-made policies (common for E&O), you're only covered for claims filed while the policy is active. If you let it lapse, incidents from your covered period become uninsured if claimed later. Maintain continuous coverage!" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4", children: "📋 Frequently Asked Questions" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mt-6", children: faqs.map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setOpenFaq(openFaq === index ? null : index),
              className: "w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold pr-4", children: faq.q }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "transition-transform duration-300",
                    style: { transform: openFaq === index ? "rotate(180deg)" : "rotate(0deg)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5 text-teal-500 flex-shrink-0" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "overflow-hidden transition-all duration-300",
              style: {
                maxHeight: openFaq === index ? "500px" : "0",
                opacity: openFaq === index ? 1 : 0
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-4 text-muted-foreground", children: faq.a })
            }
          )
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-2xl p-8 mt-12 not-prose", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: "🏁 Final Thoughts: Insurance as a Business Asset" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Many entrepreneurs view insurance as an expensive necessity - a cost center that drains resources. But smart business owners understand that insurance is actually a strategic asset that enables growth, protects personal wealth, and provides competitive advantages." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Insurance lets you say YES to opportunities:" }),
        " Win contracts with major clients who require insurance. Take on higher-risk, higher-reward projects without betting the farm. Grow confidently knowing one mistake won't destroy everything. Sleep soundly knowing your family's financial security isn't tied to business risks."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4", children: [
        "For most businesses, the sweet spot is: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$1-2M General Liability, industry-appropriate E&O/Professional Liability, cyber coverage if handling data, and a $1-3M umbrella policy" }),
        ". Total cost? Often $2,000-$5,000/year - a small price for protecting assets worth orders of magnitude more."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg text-teal-700 dark:text-teal-400 mb-0", children: "Remember: The cheapest insurance is useless if it doesn't actually protect you. Invest in quality coverage from rated carriers, understand what you're buying, and review it annually as your business grows. Your future self will thank you! 🏢" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mt-8 text-sm text-muted-foreground not-prose", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "⚠️ Disclaimer:" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This calculator provides rough estimates for educational purposes only and does not constitute insurance advice or a binding quote. Actual premiums vary significantly based on detailed underwriting factors including specific business activities, location, claims history, revenue details, employee information, and numerous other risk factors. Coverage terms, exclusions, and availability differ substantially between insurers and jurisdictions. Always consult with licensed insurance professionals and carefully review all policy documents before purchasing coverage. This information should not be considered legal, financial, or professional advice." })
    ] })
  ] }) });
}
export {
  BusinessLiabilityCalculator as default
};
