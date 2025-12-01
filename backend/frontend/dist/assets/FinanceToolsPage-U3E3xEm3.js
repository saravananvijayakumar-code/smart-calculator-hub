import { j as jsxRuntimeExports, C as Calculator, T as TrendingUp, D as DollarSign, L as Link } from "./index-CK9G4vW7.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { D as DirectoryInterlinks } from "./DirectoryInterlinks-BB_jRRIu.js";
import { B as Building } from "./building-C7va4eDd.js";
import { W as Wallet } from "./wallet-DxIJPdsI.js";
import { C as CreditCard } from "./credit-card-BaXCqM2u.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
import "./EnhancedAIAnalysis-BaYCd8m5.js";
import "./badge-6THgoC_4.js";
import "./brain-CSngUEN8.js";
import "./target-4JeIm6Yk.js";
import "./circle-check-big-B8N3lfE-.js";
import "./arrow-right-Bjdtr8dz.js";
import "./lightbulb-DKPyzLdJ.js";
import "./AppleStyleCard-DyiWjqNf.js";
import "./interlinking-DH1ZPh0L.js";
const financeCalculators = [
  {
    name: "Mortgage Calculator",
    description: "Calculate monthly mortgage payments, total interest, and amortization schedules",
    path: "/calculator/mortgage",
    icon: Building,
    category: "Real Estate"
  },
  {
    name: "Loan Calculator",
    description: "Calculate loan payments for personal, auto, or business loans",
    path: "/calculator/loan",
    icon: Calculator,
    category: "Loans"
  },
  {
    name: "Investment Calculator",
    description: "Calculate returns on investments with compound interest",
    path: "/calculator/investment",
    icon: TrendingUp,
    category: "Investments"
  },
  {
    name: "Simple Interest Calculator",
    description: "Calculate simple interest on loans and investments",
    path: "/calculator/simple-interest",
    icon: Calculator,
    category: "Interest"
  },
  {
    name: "Compound Interest Calculator",
    description: "Calculate compound interest and see the power of compounding",
    path: "/calculator/compound-interest",
    icon: TrendingUp,
    category: "Interest"
  },
  {
    name: "ROI Calculator",
    description: "Calculate return on investment for business and financial decisions",
    path: "/calculator/roi",
    icon: TrendingUp,
    category: "Investments"
  },
  {
    name: "Retirement Calculator",
    description: "Plan for retirement and calculate required savings",
    path: "/calculator/retirement",
    icon: Wallet,
    category: "Planning"
  },
  {
    name: "Credit Card Payoff Calculator",
    description: "Calculate how long it will take to pay off credit card debt",
    path: "/calculator/credit-card-payoff",
    icon: CreditCard,
    category: "Debt"
  },
  {
    name: "Emergency Fund Calculator",
    description: "Calculate how much you need in your emergency fund",
    path: "/calculator/emergency-fund",
    icon: Wallet,
    category: "Planning"
  },
  {
    name: "Profit Margin Calculator",
    description: "Calculate gross, operating, and net profit margins for your business",
    path: "/calculator/profit-margin",
    icon: TrendingUp,
    category: "Business"
  },
  {
    name: "Paycheck Calculator",
    description: "Calculate take-home pay after federal tax, state tax, and all deductions",
    path: "/calculator/paycheck",
    icon: DollarSign,
    category: "Salary"
  }
];
const FinanceToolsPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Financial Calculators & Tools",
      description: "Comprehensive collection of financial calculators for mortgages, loans, investments, retirement planning, and more. Make informed financial decisions with our easy-to-use tools.",
      keywords: "financial calculators, mortgage calculator, loan calculator, investment calculator, retirement planning, financial planning",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Financial Calculators & Tools" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Make informed financial decisions with our comprehensive collection of calculators. From mortgages and loans to retirement planning and investments." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: financeCalculators.map((calc) => {
          const Icon = calc.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: calc.path,
              className: "block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-100 rounded-lg p-3 mr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-blue-600" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: calc.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-blue-600 font-medium", children: calc.category })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: calc.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-blue-600 text-sm font-medium", children: "Calculate now →" })
              ]
            },
            calc.path
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 bg-gray-50 rounded-xl p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Why Use Our Financial Calculators?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Accurate Calculations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Our calculators use industry-standard formulas to provide precise results for your financial planning." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Easy to Use" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Simple, intuitive interfaces that make complex financial calculations accessible to everyone." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Comprehensive Results" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Get detailed breakdowns, charts, and explanations to help you understand your financial situation." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Free to Use" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "All our financial calculators are completely free with no hidden fees or registration required." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DirectoryInterlinks, { currentPath: "/financial/tools", title: "Explore Regional Financial Tools" })
      ] })
    }
  );
};
export {
  FinanceToolsPage
};
