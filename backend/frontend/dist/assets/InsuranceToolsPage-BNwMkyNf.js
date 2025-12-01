import { j as jsxRuntimeExports, S as SEOHead, c as Shield, H as Heart, L as Link, C as Calculator, T as TrendingUp, D as DollarSign } from "./index-CK9G4vW7.js";
import { A as AppleStyleCard } from "./AppleStyleCard-DyiWjqNf.js";
import { D as DirectoryInterlinks } from "./DirectoryInterlinks-BB_jRRIu.js";
import { C as Car } from "./car-DUL12XTS.js";
import "./interlinking-DH1ZPh0L.js";
import "./arrow-right-Bjdtr8dz.js";
const calculators = [
  {
    title: "Life Insurance Coverage Calculator",
    description: "Calculate the optimal life insurance coverage amount based on your income, debts, expenses, and financial goals.",
    path: "/calculators/insurance/life-insurance",
    icon: Heart,
    features: ["Income replacement calculation", "Debt coverage analysis", "Future expense planning", "Beneficiary needs assessment"],
    category: "Life Insurance"
  },
  {
    title: "Health Insurance Premium Calculator",
    description: "Estimate health insurance premiums and compare plans based on your age, location, coverage needs, and family size.",
    path: "/calculators/insurance/health-insurance",
    icon: Shield,
    features: ["Premium estimation", "Plan comparison", "Deductible analysis", "Coverage optimization"],
    category: "Health Insurance"
  },
  {
    title: "Car Insurance Cost Calculator",
    description: "Calculate auto insurance costs based on vehicle type, driving history, coverage options, and personal factors.",
    path: "/calculators/insurance/car-insurance",
    icon: Car,
    features: ["Premium calculation", "Coverage comparison", "Discount analysis", "Risk assessment"],
    category: "Auto Insurance"
  }
];
const InsuranceToolsPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Insurance Calculators & Tools - Smart Calculator Hubs",
        description: "Comprehensive insurance calculators for life, health, and auto insurance. Calculate premiums, coverage amounts, and compare plans with our advanced tools.",
        keywords: "insurance calculator, life insurance, health insurance, car insurance, premium calculator, coverage calculator"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-12 h-12 text-white" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4", children: "Insurance Calculators" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Make informed insurance decisions with our comprehensive calculators. Calculate coverage needs, compare premiums, and optimize your insurance portfolio for maximum protection and value." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12", children: calculators.map((calc, index) => {
        const IconComponent = calc.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { className: "group hover:scale-105 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: calc.path, className: "block p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mr-4 group-hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "w-6 h-6 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors", children: calc.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-blue-600 dark:text-blue-400 font-medium", children: calc.category })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 mb-4", children: calc.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: calc.features.map((feature, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-sm text-gray-500 dark:text-gray-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-4 h-4 mr-2 text-green-500" }),
            feature
          ] }, idx)) })
        ] }) }, index);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-8 h-8 text-green-500 mr-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "Why Use Insurance Calculators?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-gray-600 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Determine optimal coverage amounts based on your specific needs" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Compare premiums across different insurance providers and plans" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Understand how various factors affect your insurance costs" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Make informed decisions to protect your financial future" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-8 h-8 text-blue-500 mr-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "Smart Insurance Planning" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-gray-600 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI-powered analysis provides personalized recommendations" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Real-time calculations based on current market rates" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Comprehensive coverage analysis for complete protection" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Educational content to help you understand insurance basics" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DirectoryInterlinks, { currentPath: "/insurance/tools", title: "Explore Related Financial Tools" })
    ] })
  ] });
};
export {
  InsuranceToolsPage as default
};
