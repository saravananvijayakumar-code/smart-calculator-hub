import { j as jsxRuntimeExports, D as DollarSign, m as Lock, L as Link, d as Clock, C as Calculator } from "./index-CK9G4vW7.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { D as DirectoryInterlinks } from "./DirectoryInterlinks-BB_jRRIu.js";
import { A as ArrowLeftRight } from "./arrow-left-right-D4O511ZZ.js";
import { T as Tag } from "./tag-CbMtaXk6.js";
import { C as Calendar } from "./calendar-DlIzODy7.js";
import { R as Ruler } from "./ruler-lXG67LSU.js";
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
const utilityCalculators = [
  {
    name: "Currency Converter",
    description: "Convert between 170+ currencies with real-time exchange rates",
    path: "/calculator/currency-converter",
    icon: ArrowLeftRight,
    category: "Finance",
    color: "blue"
  },
  {
    name: "Tip Calculator",
    description: "Calculate tips and split bills for restaurants and services",
    path: "/calculator/tip",
    icon: DollarSign,
    category: "Daily Use",
    color: "green"
  },
  {
    name: "Discount Calculator",
    description: "Calculate sale prices, discounts, and savings instantly",
    path: "/calculator/discount",
    icon: Tag,
    category: "Shopping",
    color: "red"
  },
  {
    name: "Date Calculator",
    description: "Calculate date differences and add/subtract time periods",
    path: "/calculator/date",
    icon: Calendar,
    category: "Planning",
    color: "purple"
  },
  {
    name: "Password Generator",
    description: "Generate strong, secure passwords with custom options",
    path: "/calculator/password-generator",
    icon: Lock,
    category: "Security",
    color: "orange"
  },
  {
    name: "Unit Converter",
    description: "Convert between different units of measurement",
    path: "/calculator/unit-converter",
    icon: Ruler,
    category: "Conversion",
    color: "indigo"
  }
];
const UtilityToolsPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Utility Calculators & Tools",
      description: "Everyday utility calculators for tips, currency conversion, and daily calculations. Practical tools for common tasks.",
      keywords: "utility calculators, tip calculator, currency converter, everyday tools, practical calculators",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "Utility Calculators & Tools" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "Essential calculators for everyday life. Currency conversion, discounts, dates, passwords, and more. Free, fast, and always available." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: utilityCalculators.map((calc) => {
          const Icon = calc.icon;
          const colorClasses = {
            blue: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border-blue-200 dark:border-blue-800",
            green: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 border-green-200 dark:border-green-800",
            red: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 border-red-200 dark:border-red-800",
            purple: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 border-purple-200 dark:border-purple-800",
            orange: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 border-orange-200 dark:border-orange-800",
            indigo: "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800"
          };
          const bgClass = colorClasses[calc.color];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: calc.path,
              className: "group block bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-border hover:scale-105",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-lg p-3 mr-4 ${bgClass}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-1 group-hover:text-primary transition-colors", children: calc.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground px-2 py-1 bg-accent rounded-full", children: calc.category })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: calc.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-primary text-sm font-medium flex items-center group-hover:gap-2 transition-all", children: [
                  "Use now",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block group-hover:translate-x-1 transition-transform", children: "→" })
                ] })
              ]
            },
            calc.path
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl p-8 border border-blue-200 dark:border-blue-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-6", children: "Why Use Our Utility Tools?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-4 rounded-lg border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold mb-2 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-primary" }),
                "Instant Results"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Get immediate calculations without delays. All tools work instantly in your browser." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-4 rounded-lg border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold mb-2 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-5 w-5 text-primary" }),
                "Privacy First"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "All calculations happen locally. Your data never leaves your device." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-4 rounded-lg border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold mb-2 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-5 w-5 text-primary" }),
                "Free Forever"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "No subscriptions, no hidden fees. Professional-grade tools, completely free." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-4 rounded-lg border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold mb-2 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "h-5 w-5 text-primary" }),
                "Real-Time Data"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Live exchange rates and up-to-date information for accurate results." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-4 rounded-lg border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold mb-2 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-5 w-5 text-primary" }),
                "Mobile Optimized"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Works perfectly on any device - phone, tablet, or desktop." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-4 rounded-lg border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold mb-2 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-5 w-5 text-primary" }),
                "No Registration"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Start using immediately. No sign-up, no login, no hassle." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DirectoryInterlinks, { currentPath: "/utility/tools", title: "Explore More Calculator Categories" })
      ] })
    }
  );
};
export {
  UtilityToolsPage
};
