import { n as createLucideIcon, j as jsxRuntimeExports, C as Calculator, L as Link } from "./index-CK9G4vW7.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { D as DirectoryInterlinks } from "./DirectoryInterlinks-BB_jRRIu.js";
import { C as Calendar } from "./calendar-DlIzODy7.js";
import { R as RotateCcw } from "./rotate-ccw-DwrwK92l.js";
import { D as Divide } from "./divide-CPOfDPg4.js";
import { C as ChartBar } from "./chart-bar-B4209ZZm.js";
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
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2",
      key: "wuwx1p"
    }
  ]
];
const Sigma = createLucideIcon("sigma", __iconNode);
const mathCalculators = [
  {
    name: "Percentage Calculator",
    description: "Master percentages with our lightning-fast calculator. Calculate increases, decreases, and changes instantly!",
    path: "/calculator/percentage",
    icon: Calculator,
    category: "Basic Math",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Age Calculator",
    description: "Calculate your exact age down to seconds! Perfect for birthdays, anniversaries, and life milestones.",
    path: "/calculator/age",
    icon: Calendar,
    category: "Date & Time",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Unit Converter",
    description: "Convert anything to everything! Length, weight, temperature, and more with pinpoint accuracy.",
    path: "/calculator/unit-converter",
    icon: RotateCcw,
    category: "Conversions",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Scientific Calculator",
    description: "Advanced calculations at your fingertips! Trigonometry, logarithms, exponents, and complex operations.",
    path: "/calculator/scientific",
    icon: Calculator,
    category: "Advanced Math",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Fraction Calculator",
    description: "Simplify, add, subtract, multiply, and divide fractions like a pro! Step-by-step solutions included.",
    path: "/calculator/fraction",
    icon: Divide,
    category: "Basic Math",
    color: "from-indigo-500 to-purple-500"
  },
  {
    name: "Statistics Calculator",
    description: "Crunch numbers like never before! Mean, median, mode, standard deviation, and more statistical magic.",
    path: "/calculator/statistics",
    icon: ChartBar,
    category: "Data Analysis",
    color: "from-teal-500 to-cyan-500"
  }
];
const MathToolsPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "Professional Math Calculators & Computational Tools",
      description: "Unlock the power of mathematics with our expert-level calculators. From basic arithmetic to advanced statistics, solve any math problem with precision, speed, and style.",
      keywords: "math calculators, scientific calculator, fraction calculator, statistics calculator, percentage calculator, age calculator, unit converter, advanced math tools",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 blur-3xl animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-lg opacity-50 animate-pulse" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sigma, { className: "h-16 w-16 text-purple-600 relative z-10 mx-auto" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient", children: "Math Calculators & Tools" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed", children: [
                "Transform complex calculations into simple solutions! Our professional-grade calculators combine",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-purple-600", children: " 100% accuracy" }),
                " with",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-pink-600", children: " lightning-fast results" }),
                ". Whether you're a student, professional, or math enthusiast, we've got the perfect tool for you! 🚀"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", children: mathCalculators.map((calc, index) => {
            const Icon = calc.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: calc.path,
                className: "block group relative overflow-hidden",
                style: {
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${calc.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-2 border-gray-100 dark:border-gray-700 group-hover:border-purple-300 dark:group-hover:border-purple-600 group-hover:scale-105 transform", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `bg-gradient-to-br ${calc.color} rounded-xl p-3 mr-4 shadow-md group-hover:shadow-lg transition-shadow duration-300 group-hover:rotate-6 transform`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7 text-white" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors", children: calc.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-semibold bg-gradient-to-r ${calc.color} bg-clip-text text-transparent`, children: calc.category })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4", children: calc.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex items-center font-semibold text-sm bg-gradient-to-r ${calc.color} bg-clip-text text-transparent group-hover:translate-x-2 transition-transform`, children: "Start Calculating →" })
                  ] })
                ]
              },
              calc.path
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-800 shadow-lg hover:shadow-xl transition-shadow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-md mr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "Why Choose Our Calculators?" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "⚡" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900 dark:text-white", children: "Lightning-Fast Results" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 text-sm", children: "Instant calculations that save you time and effort" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "🎯" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900 dark:text-white", children: "100% Accuracy Guaranteed" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 text-sm", children: "Precision-engineered algorithms for perfect results every time" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "📚" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900 dark:text-white", children: "Step-by-Step Solutions" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 text-sm", children: "Learn while you calculate with detailed explanations" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-xl transition-shadow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-md mr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sigma, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "Smart Features" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "🎨" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900 dark:text-white", children: "Beautiful Visualizations" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 text-sm", children: "See your data come to life with stunning graphs and charts" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "🤖" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900 dark:text-white", children: "AI-Powered Insights" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 text-sm", children: "Get personalized recommendations and deep analysis" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "📱" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900 dark:text-white", children: "Works Everywhere" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 text-sm", children: "Seamlessly optimized for desktop, tablet, and mobile" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 dark:from-orange-950/30 dark:via-red-950/30 dark:to-pink-950/30 rounded-2xl p-10 border-2 border-orange-200 dark:border-orange-800 shadow-xl mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent", children: "Mathematical Mastery Awaits! 🎓" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-orange-200 dark:border-orange-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-orange-600 mb-2", children: "10M+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 font-medium", children: "Calculations Performed" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-red-200 dark:border-red-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-red-600 mb-2", children: "99.9%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 font-medium", children: "User Satisfaction" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-pink-200 dark:border-pink-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-pink-600 mb-2", children: "24/7" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 font-medium", children: "Always Available" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-2xl p-8 border-2 border-indigo-200 dark:border-indigo-800 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white", children: "Perfect For Everyone! 🌟" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "👨‍🎓" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900 dark:text-white text-sm", children: "Students" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "👨‍🏫" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900 dark:text-white text-sm", children: "Teachers" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "👨‍💼" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900 dark:text-white text-sm", children: "Professionals" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "🔬" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900 dark:text-white text-sm", children: "Researchers" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DirectoryInterlinks, { currentPath: "/math/tools", title: "Explore More Calculator Categories" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      ` })
      ]
    }
  );
};
export {
  MathToolsPage
};
