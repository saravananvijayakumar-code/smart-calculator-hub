import { r as reactExports, A as Activity, T as TrendingUp, H as Heart, j as jsxRuntimeExports, U as Input, L as Link } from "./index-C_OXA6OQ.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { D as DirectoryInterlinks } from "./DirectoryInterlinks-DAUa2fRu.js";
import { S as Scale } from "./scale-Dek729zp.js";
import { Z as Zap } from "./zap-B5WxZbDS.js";
import { R as Ruler } from "./ruler-CZWk2-MO.js";
import { D as Droplet } from "./droplet-5vYH0HZZ.js";
import { T as Target } from "./target-1ApqtYDG.js";
import { M as Moon } from "./moon-Bl8ilOKt.js";
import { B as Baby } from "./baby-CHHdrdrL.js";
import { C as Calendar } from "./calendar-CKWgIWzq.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./EnhancedAIAnalysis-BZiQW2bt.js";
import "./badge-fo2YvZos.js";
import "./loader-circle-BYW7QwsU.js";
import "./brain-U3SZm3t9.js";
import "./circle-check-big-BoxGYPKG.js";
import "./arrow-right-CtOKJdMG.js";
import "./lightbulb-doNczJxC.js";
import "./AppleStyleCard-bNXb4kfM.js";
import "./interlinking-BQgzUxEI.js";
const healthCalculators = [
  {
    name: "BMI Calculator",
    description: "Calculate your Body Mass Index and understand your weight category with WHO standards",
    path: "/calculator/bmi",
    icon: Scale,
    category: "Weight & Fitness",
    keywords: "bmi body mass index weight height obesity underweight"
  },
  {
    name: "Body Fat Percentage Calculator",
    description: "Calculate body fat % using US Navy method with circumference measurements",
    path: "/calculators/health/body-fat",
    icon: Activity,
    category: "Body Composition",
    keywords: "body fat percentage navy method circumference lean mass fat mass"
  },
  {
    name: "BMR & TDEE Calculator",
    description: "Calculate Basal Metabolic Rate and Total Daily Energy Expenditure (Mifflin-St Jeor)",
    path: "/calculators/health/bmr",
    icon: Zap,
    category: "Metabolism & Energy",
    keywords: "bmr tdee basal metabolic rate calories energy expenditure mifflin"
  },
  {
    name: "Ideal Weight Calculator",
    description: "Calculate ideal body weight using 4 validated formulas (Devine, Hamwi, Robinson, Miller)",
    path: "/calculators/health/ideal-weight",
    icon: Ruler,
    category: "Weight & Fitness",
    keywords: "ideal weight devine hamwi robinson miller target weight goal"
  },
  {
    name: "Water Intake Calculator",
    description: "Calculate daily water needs based on weight, activity, and climate (35ml/kg baseline)",
    path: "/calculators/health/water-intake",
    icon: Droplet,
    category: "Hydration",
    keywords: "water intake hydration daily water needs fluid ounces liters cups"
  },
  {
    name: "Weight Loss Step Calculator",
    description: "Calculate daily steps needed to reach your weight loss goals through walking",
    path: "/calculator/weight-loss-steps",
    icon: Target,
    category: "Weight Loss & Fitness",
    keywords: "weight loss steps walking exercise daily activity pedometer"
  },
  {
    name: "Waist to Hip Ratio Calculator",
    description: "Calculate waist-to-hip ratio to assess body fat distribution and health risk",
    path: "/calculator/waist-to-hip-ratio",
    icon: TrendingUp,
    category: "Body Composition",
    keywords: "waist hip ratio whr body fat distribution health risk circumference"
  },
  {
    name: "Sleep Cycle Calculator",
    description: "Calculate optimal sleep and wake times based on 90-minute sleep cycles",
    path: "/calculators/health/sleep",
    icon: Moon,
    category: "Sleep & Recovery",
    keywords: "sleep cycle calculator wake time bedtime rem nrem sleep quality"
  },
  {
    name: "Heart Rate Zone Calculator",
    description: "Calculate training heart rate zones using max HR or Karvonen method",
    path: "/calculators/health/heart-rate-zone",
    icon: Heart,
    category: "Cardio & Training",
    keywords: "heart rate zone training cardio max hr karvonen tanaka bpm"
  },
  {
    name: "Pregnancy Due Date Calculator",
    description: "Calculate estimated due date using Naegele's rule with cycle adjustment",
    path: "/calculators/health/pregnancy-due-date",
    icon: Baby,
    category: "Pregnancy & Fertility",
    keywords: "pregnancy due date edd lmp naegele trimester gestational age"
  },
  {
    name: "Ovulation & Fertility Calculator",
    description: "Predict ovulation date and fertile window based on menstrual cycle",
    path: "/calculators/health/ovulation",
    icon: Calendar,
    category: "Pregnancy & Fertility",
    keywords: "ovulation calculator fertile window fertility period cycle tracking conception"
  }
];
const HealthToolsPage = () => {
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const filteredCalculators = healthCalculators.filter((calc) => {
    const query = searchQuery.toLowerCase();
    return calc.name.toLowerCase().includes(query) || calc.description.toLowerCase().includes(query) || calc.category.toLowerCase().includes(query) || calc.keywords.toLowerCase().includes(query);
  });
  const categories = [...new Set(healthCalculators.map((c) => c.category))];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Health Calculators & Tools - BMI, BMR, Body Fat & More",
      description: "Comprehensive health calculators including BMI, body fat percentage, BMR/TDEE, ideal weight, water intake, sleep cycles, heart rate zones, and pregnancy calculators. All medically accurate.",
      keywords: "health calculators, BMI calculator, body fat calculator, BMR calculator, TDEE, ideal weight, water intake, sleep calculator, heart rate zones, pregnancy calculator, ovulation calculator",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-gray-900 dark:text-white mb-4", children: "Health Calculators & Tools" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6", children: "Comprehensive health calculators with 100% formula accuracy. Monitor fitness, nutrition, sleep, and more with medically validated tools." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-md mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "text",
              placeholder: "Search calculators... (e.g., BMI, calories, sleep)",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: "w-full"
            }
          ) })
        ] }),
        searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 text-center text-gray-600 dark:text-gray-400", children: [
          "Found ",
          filteredCalculators.length,
          " calculator",
          filteredCalculators.length !== 1 ? "s" : ""
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", children: filteredCalculators.map((calc) => {
          const Icon = calc.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: calc.path,
              className: "block bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100 dark:border-gray-700",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-100 dark:bg-green-900 rounded-lg p-3 mr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-green-600 dark:text-green-400" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: calc.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-green-600 dark:text-green-400 font-medium", children: calc.category })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 text-sm leading-relaxed", children: calc.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-green-600 dark:text-green-400 text-sm font-medium", children: "Calculate now →" })
              ]
            },
            calc.path
          );
        }) }),
        filteredCalculators.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-400 text-lg", children: [
            'No calculators found matching "',
            searchQuery,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setSearchQuery(""),
              className: "mt-4 text-green-600 dark:text-green-400 hover:underline",
              children: "Clear search"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-6", children: "Calculator Categories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8", children: categories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setSearchQuery(category),
              className: "bg-white dark:bg-gray-700 rounded-lg p-3 text-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-900 dark:text-white", children: category }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-xs text-gray-500 dark:text-gray-400 mt-1", children: [
                  healthCalculators.filter((c) => c.category === category).length,
                  " tools"
                ] })
              ]
            },
            category
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-4", children: "Health & Wellness Resources" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-700 rounded-lg p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-2", children: "100% Formula Accuracy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 text-sm", children: "All calculators use medically validated formulas with decimal.js precision. Results match clinical standards exactly." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-700 rounded-lg p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-2", children: "Educational Content" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 text-sm", children: "Learn about health metrics with detailed explanations, formulas, and interpretation guides." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-700 rounded-lg p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-2", children: "Privacy Focused" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 text-sm", children: "Your health data stays private - we don't store or share any personal health information." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-700 rounded-lg p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-2", children: "Professional Guidance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 text-sm", children: "Always consult with healthcare professionals for medical advice and health decisions." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-900 dark:text-white mb-3", children: "Featured Calculators" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Body Composition:" }),
              " BMI, Body Fat %, Waist-to-Hip Ratio, Ideal Weight (4 formulas)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Metabolism:" }),
              " BMR (Mifflin-St Jeor), TDEE, Daily Calorie Needs"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Nutrition & Hydration:" }),
              " Calorie Calculator, Water Intake (35ml/kg + adjustments)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fitness:" }),
              " Weight Loss Steps, Heart Rate Training Zones (Karvonen method)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sleep & Recovery:" }),
              " Sleep Cycle Calculator (90-min cycles)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pregnancy & Fertility:" }),
              " Due Date (Naegele's Rule), Ovulation & Fertile Window"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DirectoryInterlinks, { currentPath: "/health/tools", title: "Explore More Health & Wellness Tools" })
      ] })
    }
  );
};
export {
  HealthToolsPage
};
