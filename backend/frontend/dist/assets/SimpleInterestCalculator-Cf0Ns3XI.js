import { r as reactExports, j as jsxRuntimeExports, C as Calculator, f as Card, g as CardHeader, h as CardTitle, k as CardContent, a3 as Label, D as DollarSign, U as Input, T as TrendingUp, d as Clock, B as Button, a7 as Sparkles, a5 as Alert, a6 as AlertDescription } from "./index-C_OXA6OQ.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-BNSAX0su.js";
import { P as Progress } from "./progress-BN2f3CdS.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { Z as Zap } from "./zap-B5WxZbDS.js";
import { T as Target } from "./target-1ApqtYDG.js";
import { B as BookOpen } from "./book-open-BKiKsQcZ.js";
import { C as CircleAlert } from "./circle-alert-CYu8dohk.js";
import { L as Lightbulb } from "./lightbulb-doNczJxC.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./EnhancedAIAnalysis-BZiQW2bt.js";
import "./loader-circle-BYW7QwsU.js";
import "./brain-U3SZm3t9.js";
import "./circle-check-big-BoxGYPKG.js";
import "./arrow-right-CtOKJdMG.js";
import "./share-2-ViScha7M.js";
import "./link-DxXhzsoi.js";
import "./copy-DGMuG98H.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./linkedin-BSJyfSWT.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
function SimpleInterestCalculator() {
  const [principal, setPrincipal] = reactExports.useState("");
  const [rate, setRate] = reactExports.useState("");
  const [time, setTime] = reactExports.useState("");
  const [result, setResult] = reactExports.useState({
    interest: 0,
    totalAmount: 0,
    isValid: false,
    monthlyInterest: 0,
    effectiveRate: 0
  });
  const scenarios = [
    {
      name: "Emergency Fund",
      principal: "10000",
      rate: "2.5",
      time: "1",
      description: "Emergency fund in a high-yield savings account"
    },
    {
      name: "Short-term Loan",
      principal: "5000",
      rate: "8",
      time: "0.5",
      description: "6-month personal loan calculation"
    },
    {
      name: "Certificate of Deposit",
      principal: "25000",
      rate: "4.2",
      time: "2",
      description: "2-year CD investment"
    },
    {
      name: "Treasury Bill",
      principal: "1000",
      rate: "5.1",
      time: "0.25",
      description: "3-month Treasury bill investment"
    }
  ];
  reactExports.useEffect(() => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);
    if (p > 0 && r >= 0 && t > 0) {
      const interest = p * r * t / 100;
      const totalAmount = p + interest;
      const monthlyInterest = interest / (t * 12);
      const effectiveRate = interest / p * 100;
      setResult({
        interest,
        totalAmount,
        isValid: true,
        monthlyInterest,
        effectiveRate
      });
    } else {
      setResult({
        interest: 0,
        totalAmount: 0,
        isValid: false,
        monthlyInterest: 0,
        effectiveRate: 0
      });
    }
  }, [principal, rate, time]);
  const loadScenario = (scenario) => {
    setPrincipal(scenario.principal);
    setRate(scenario.rate);
    setTime(scenario.time);
  };
  const clearInputs = () => {
    setPrincipal("");
    setRate("");
    setTime("");
  };
  const tips = [
    "Simple interest is calculated only on the principal amount, never on accumulated interest",
    "Rate should be entered as an annual percentage (e.g., 5 for 5% per year)",
    "Time can be in years or fractions of years (e.g., 0.5 for 6 months)",
    "Simple interest doesn't compound - it remains linear over time",
    "Commonly used for short-term loans, basic savings accounts, and government bonds",
    "Formula: Interest = Principal × Rate × Time ÷ 100",
    "Unlike compound interest, simple interest doesn't accelerate over time",
    "Perfect for comparing different loan or investment options quickly"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "Simple Interest Calculator - Calculate Interest Earnings & Loan Costs",
      description: "Calculate simple interest for loans, savings, and investments. Compare scenarios, understand formulas, and make informed financial decisions with our comprehensive calculator.",
      keywords: "simple interest calculator, interest calculation, financial calculator, loan interest, savings interest, investment calculator",
      tips,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4 animate-fade-in mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-10 h-10 text-green-600 animate-bounce" }),
              "Simple Interest Calculator 💰"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Master your money math! Calculate interest earnings and loan costs with crystal-clear precision. Perfect for savings, loans, and smart financial planning! 🎯✨" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-2xl border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-6 w-6 text-green-600 animate-pulse" }),
                "Simple Interest Calculator",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-gradient-to-r from-green-500 to-emerald-500 text-white animate-pulse", children: "Live Calculator" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base text-gray-700 dark:text-gray-300", children: [
                "Calculate interest using the formula: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono bg-white/60 dark:bg-gray-800/60 px-2 py-1 rounded", children: "Interest = Principal × Rate × Time ÷ 100" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "principal", className: "flex items-center gap-2 text-base font-semibold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-5 w-5 text-green-600 animate-pulse" }),
                    "Principal Amount ($)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "principal",
                      type: "number",
                      value: principal,
                      onChange: (e) => setPrincipal(e.target.value),
                      placeholder: "Enter principal amount",
                      min: "0",
                      step: "0.01",
                      className: "mt-1 h-12 text-base border-2 hover:border-green-400 focus:border-green-500 transition-all"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mt-1", children: "💵 The initial amount invested or borrowed" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "rate", className: "flex items-center gap-2 text-base font-semibold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-blue-600 animate-bounce" }),
                    "Annual Interest Rate (%)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "rate",
                      type: "number",
                      value: rate,
                      onChange: (e) => setRate(e.target.value),
                      placeholder: "Enter interest rate",
                      min: "0",
                      step: "0.1",
                      className: "mt-1 h-12 text-base border-2 hover:border-blue-400 focus:border-blue-500 transition-all"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mt-1", children: "📈 The yearly interest rate as a percentage" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "time", className: "flex items-center gap-2 text-base font-semibold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-purple-600 animate-pulse" }),
                    "Time Period (Years)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "time",
                      type: "number",
                      value: time,
                      onChange: (e) => setTime(e.target.value),
                      placeholder: "Enter time period",
                      min: "0",
                      step: "0.1",
                      className: "mt-1 h-12 text-base border-2 hover:border-purple-400 focus:border-purple-500 transition-all"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mt-1", children: "⏰ Duration in years (e.g., 0.5 for 6 months)" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: clearInputs, variant: "outline", size: "sm", className: "hover:bg-red-50 hover:text-red-600 hover:border-red-400 transition-all transform hover:scale-105", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 mr-2" }),
                "Clear All"
              ] }) }),
              result.isValid && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-fade-in", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800 transform hover:scale-105 transition-all hover:shadow-xl", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-green-600 animate-bounce" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-green-800 dark:text-green-200", children: "Interest Earned" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-pulse", children: [
                      "$",
                      result.interest.toFixed(2)
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: 100, className: "mt-2 h-2 bg-green-200" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200 dark:border-blue-800 transform hover:scale-105 transition-all hover:shadow-xl", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-5 w-5 text-blue-600 animate-pulse" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-blue-800 dark:text-blue-200", children: "Total Amount" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-pulse", children: [
                      "$",
                      result.totalAmount.toFixed(2)
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: 100, className: "mt-2 h-2 bg-blue-200" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-800 transform hover:scale-105 transition-all hover:shadow-xl", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-purple-600 animate-bounce" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-purple-800 dark:text-purple-200", children: "Monthly Interest" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse", children: [
                      "$",
                      result.monthlyInterest.toFixed(2)
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: 100, className: "mt-2 h-2 bg-purple-200" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border-2 border-orange-200 dark:border-orange-800 transform hover:scale-105 transition-all hover:shadow-xl", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5 text-orange-600 animate-pulse" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-orange-800 dark:text-orange-200", children: "Effective Rate" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent animate-pulse", children: [
                      result.effectiveRate.toFixed(2),
                      "%"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: result.effectiveRate, className: "mt-2 h-2 bg-orange-200" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-2 border-indigo-200 dark:border-indigo-800 shadow-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-lg mb-3 flex items-center gap-2 text-indigo-700 dark:text-indigo-300", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 animate-pulse" }),
                    "Calculation Breakdown"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-base", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-indigo-600", children: "📐 Formula:" }),
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: "Interest = Principal × Rate × Time ÷ 100" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-purple-600", children: "🔢 Calculation:" }),
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                        "$",
                        principal,
                        " × ",
                        rate,
                        "% × ",
                        time,
                        " years ÷ 100 = $",
                        result.interest.toFixed(2)
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-pink-600", children: "💰 Total:" }),
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                        "$",
                        principal,
                        " + $",
                        result.interest.toFixed(2),
                        " = $",
                        result.totalAmount.toFixed(2)
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "scenarios", className: "w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "scenarios", children: "Scenarios" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "guide", children: "How It Works" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "comparison", children: "vs Compound" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "applications", children: "Applications" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "scenarios", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5" }),
                  "Common Financial Scenarios"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Explore real-world examples of simple interest calculations" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: scenarios.map((scenario, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Card,
                {
                  className: "p-4 cursor-pointer bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 hover:shadow-xl transition-all transform hover:scale-105 border-2 border-blue-200 dark:border-blue-800",
                  onClick: () => loadScenario(scenario),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-blue-700 dark:text-blue-300", children: scenario.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-blue-600 text-white border-0 animate-pulse", children: "Click to Load" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: scenario.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 text-sm text-gray-600 dark:text-gray-400", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "💵 $",
                        scenario.principal
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "📈 ",
                        scenario.rate,
                        "%"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "⏰ ",
                        scenario.time,
                        "yr"
                      ] })
                    ] })
                  ] })
                },
                index
              )) }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "guide", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5" }),
                "Understanding Simple Interest"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "What is Simple Interest?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Simple interest is a method of calculating interest where the interest is computed only on the principal amount. Unlike compound interest, it doesn't include interest on previously earned interest, making calculations straightforward and predictable." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "The Formula Explained" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-center text-lg mb-2", children: "Interest = (Principal × Rate × Time) ÷ 100" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Principal (P):" }),
                        " The initial amount of money invested or borrowed"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Rate (R):" }),
                        " The annual interest rate expressed as a percentage"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Time (T):" }),
                        " The duration for which the money is invested or borrowed, in years"
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Step-by-Step Calculation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "1" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Identify the principal amount (P)" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "2" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Determine the annual interest rate (R) as a percentage" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "3" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Calculate the time period (T) in years" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "4" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Apply the formula: Interest = (P × R × T) ÷ 100" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Add interest to principal for total amount" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Important Note:" }),
                    " Simple interest is linear - it remains constant over each time period. This makes it easier to calculate but typically results in lower returns compared to compound interest over longer periods."
                  ] })
                ] })
              ] }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "comparison", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
                "Simple vs Compound Interest"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-green-600", children: "Simple Interest" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-green-600", children: "✓" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Calculated only on principal" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-green-600", children: "✓" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Linear growth over time" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-green-600", children: "✓" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Easy to calculate manually" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-green-600", children: "✓" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Predictable returns" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-green-600", children: "✓" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Common in short-term loans" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-blue-600", children: "Compound Interest" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-blue-600", children: "✓" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Calculated on principal + interest" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-blue-600", children: "✓" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Exponential growth over time" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-blue-600", children: "✓" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "More complex calculations" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-blue-600", children: "✓" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Higher long-term returns" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-blue-600", children: "✓" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Standard for investments" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Example Comparison" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-2", children: "Principal: $10,000 | Rate: 5% | Time: 10 years" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Simple Interest:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Interest = $10,000 × 5% × 10 = $5,000" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Total = $15,000" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Compound Interest (Annual):" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Total = $10,000 × (1.05)^10 = $16,289" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Interest = $6,289" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "The difference becomes more significant over longer time periods and higher interest rates. For short-term financial products, simple interest is often used for its simplicity and transparency." })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "applications", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5" }),
                "Real-World Applications"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-green-600", children: "Investment Applications" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-lg", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Treasury Bills" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Short-term government securities with simple interest calculations, typically 3-12 months." })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-lg", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Fixed Deposits" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Some banks offer simple interest on fixed deposits, especially for shorter terms." })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-lg", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Bonds" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Many corporate and government bonds use simple interest for coupon payments." })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-red-600", children: "Loan Applications" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-lg", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Personal Loans" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Short-term personal loans often use simple interest, making costs predictable." })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-lg", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Auto Loans" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Some auto financing uses simple interest, particularly for shorter loan terms." })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-lg", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Bridge Loans" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Short-term financing often uses simple interest due to the brief duration." })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Financial Planning Tips" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-green-50 dark:bg-green-950 rounded-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium text-green-800 dark:text-green-200 mb-2", children: "For Savers" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-green-700 dark:text-green-300 space-y-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Compare simple vs compound interest options" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider simple interest for short-term goals" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Use for emergency fund calculations" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Evaluate Treasury bills and CDs" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-blue-50 dark:bg-blue-950 rounded-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium text-blue-800 dark:text-blue-200 mb-2", children: "For Borrowers" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-blue-700 dark:text-blue-300 space-y-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Calculate total loan costs upfront" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Compare with compound interest loans" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Plan repayment schedules effectively" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Understand exact interest obligations" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pro Tip:" }),
                    " Simple interest is ideal for situations where you need transparency and predictability. Always compare the total cost or return with compound interest alternatives to make informed decisions."
                  ] })
                ] })
              ] })
            ] }) })
          ] })
        ] }),
        result && result.isValid && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExportShareButtons,
          {
            calculatorType: "simple-interest",
            inputs: { principal, rate, time },
            results: result,
            title: "Simple Interest Calculation"
          }
        ) })
      ]
    }
  );
}
export {
  SimpleInterestCalculator as default
};
