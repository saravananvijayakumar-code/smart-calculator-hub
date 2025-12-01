import { n as createLucideIcon, r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a3 as Label, U as Input, T as TrendingUp, B as Button, C as Calculator, a7 as Sparkles, a4 as Info } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { S as Separator } from "./separator-CgM4Fzdg.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { E as EnhancedAIAnalysis } from "./EnhancedAIAnalysis-BZiQW2bt.js";
import { R as Rocket } from "./rocket-DSbm9x1S.js";
import { C as ChartColumn } from "./chart-column-CAGIVosk.js";
import { T as Target } from "./target-1ApqtYDG.js";
import { Z as Zap } from "./zap-B5WxZbDS.js";
import { G as Gift } from "./gift-CqM-Ij5N.js";
import { A as Award } from "./award-DdRvOLEz.js";
import { W as Wallet } from "./wallet-7QltRvhQ.js";
import { B as Brain } from "./brain-U3SZm3t9.js";
import { C as ChevronRight } from "./chevron-right-CuSmhiY5.js";
import { T as TrendingDown } from "./trending-down-BkWfhFLS.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./share-2-ViScha7M.js";
import "./link-DxXhzsoi.js";
import "./copy-DGMuG98H.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./linkedin-BSJyfSWT.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
import "./loader-circle-BYW7QwsU.js";
import "./circle-check-big-BoxGYPKG.js";
import "./arrow-right-CtOKJdMG.js";
import "./lightbulb-doNczJxC.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
];
const ChartLine = createLucideIcon("chart-line", __iconNode);
const SIPCalculatorIndia = () => {
  const [sipAmount, setSipAmount] = reactExports.useState("");
  const [sipPeriod, setSipPeriod] = reactExports.useState("");
  const [expectedReturn, setExpectedReturn] = reactExports.useState("12");
  const [sipType, setSipType] = reactExports.useState("monthly");
  const [stepUpPercentage, setStepUpPercentage] = reactExports.useState("");
  const [results, setResults] = reactExports.useState(null);
  const [showAIAnalysis, setShowAIAnalysis] = reactExports.useState(false);
  const calculateSIP = () => {
    const amount = parseFloat(sipAmount);
    const years = parseFloat(sipPeriod);
    const annualReturn = parseFloat(expectedReturn) / 100;
    const stepUp = parseFloat(stepUpPercentage) / 100 || 0;
    if (!amount || !years || !annualReturn) return;
    const monthlyReturn = annualReturn / 12;
    const totalMonths = years * 12;
    let maturityAmount = 0;
    let totalInvestment = 0;
    let currentSIPAmount = amount;
    if (stepUp > 0) {
      for (let year = 1; year <= years; year++) {
        const monthsInYear = 12;
        for (let month = 1; month <= monthsInYear; month++) {
          const remainingMonths = totalMonths - ((year - 1) * 12 + month - 1);
          maturityAmount += currentSIPAmount * Math.pow(1 + monthlyReturn, remainingMonths);
          totalInvestment += currentSIPAmount;
        }
        currentSIPAmount = currentSIPAmount * (1 + stepUp);
      }
    } else {
      maturityAmount = amount * (Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn * (1 + monthlyReturn);
      totalInvestment = amount * totalMonths;
    }
    const wealthGained = maturityAmount - totalInvestment;
    const absoluteReturn = (maturityAmount - totalInvestment) / totalInvestment * 100;
    const cagrReturn = Math.pow(maturityAmount / totalInvestment, 1 / years) - 1;
    const ltcgTax = Math.max(0, (wealthGained - 1e5) * 0.1);
    const netAmount = maturityAmount - ltcgTax;
    const fdReturns = totalInvestment * Math.pow(1.065, years);
    const ppfReturns = amount * 12 * (Math.pow(1.075, years) - 1) / 0.075;
    setResults({
      maturityAmount,
      totalInvestment,
      wealthGained,
      absoluteReturn,
      cagrReturn: cagrReturn * 100,
      ltcgTax,
      netAmount,
      fdReturns,
      ppfReturns,
      sipAdvantage: maturityAmount - fdReturns
    });
  };
  const reset = () => {
    setSipAmount("");
    setSipPeriod("");
    setExpectedReturn("12");
    setSipType("monthly");
    setStepUpPercentage("");
    setResults(null);
    setShowAIAnalysis(false);
  };
  const tips = [
    "SIP averages out market volatility through rupee cost averaging",
    "ELSS funds offer tax benefits under Section 80C with 3-year lock-in",
    "Step-up SIP increases investment amount annually for better returns",
    "Long-term equity gains (>1 year) taxed at 10% above ₹1 lakh",
    "Start early to leverage the power of compounding"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "India SIP Calculator - Mutual Fund Investment Planner 2024",
      description: "Calculate your Systematic Investment Plan (SIP) returns and wealth creation potential in India with step-up options, tax calculations, and AI-powered insights",
      keywords: "India SIP calculator, mutual fund SIP, systematic investment plan, SIP returns, ELSS calculator, step-up SIP, SIP tax calculator",
      tips,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white rounded-3xl p-8 shadow-2xl animate-fade-in", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-white/20 backdrop-blur-sm rounded-2xl animate-bounce", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-10 w-10" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold mb-2", children: "SIP Investment Calculator" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-lg", children: "Plan Your Wealth Journey with Smart SIP Investing! 🚀" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-base leading-relaxed", children: "Transform your financial future with disciplined SIP investing. Watch your wealth grow exponentially through the power of compounding and rupee cost averaging!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-slide-in-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "bg-gradient-to-r from-purple-50 to-pink-50 border-b-2 border-purple-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-purple-500 text-white rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-6 w-6" }) }),
                  "SIP Calculator"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-base", children: "Calculate your SIP returns and investment growth 💰" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6 pt-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "sipAmount", className: "text-base font-semibold flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "h-4 w-4 text-purple-500" }),
                    "Monthly SIP Amount (₹)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "sipAmount",
                      type: "number",
                      placeholder: "e.g., 5000",
                      value: sipAmount,
                      onChange: (e) => setSipAmount(e.target.value),
                      className: "border-2 border-purple-200 focus:border-purple-500 transition-all h-12 text-lg"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "💡 Even small amounts grow significantly over time!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "sipPeriod", className: "text-base font-semibold flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-4 w-4 text-pink-500" }),
                    "Investment Period (Years)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "sipPeriod",
                      type: "number",
                      placeholder: "e.g., 10",
                      value: sipPeriod,
                      onChange: (e) => setSipPeriod(e.target.value),
                      className: "border-2 border-pink-200 focus:border-pink-500 transition-all h-12 text-lg"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "⏰ Longer periods = Greater compounding magic!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "expectedReturn", className: "text-base font-semibold flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-orange-500" }),
                    "Expected Annual Return (%)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "expectedReturn",
                      type: "number",
                      step: "0.1",
                      placeholder: "e.g., 12",
                      value: expectedReturn,
                      onChange: (e) => setExpectedReturn(e.target.value),
                      className: "border-2 border-orange-200 focus:border-orange-500 transition-all h-12 text-lg"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "📈 Equity funds historically average 12-15% annually" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "sipType", className: "text-base font-semibold flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-blue-500" }),
                    "SIP Frequency"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: sipType, onValueChange: setSipType, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "border-2 border-blue-200 focus:border-blue-500 h-12 text-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select SIP frequency" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "monthly", children: "💫 Monthly SIP" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "quarterly", children: "📅 Quarterly SIP" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "yearly", children: "🎯 Yearly SIP" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "stepUpPercentage", className: "text-base font-semibold flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "h-4 w-4 text-green-500" }),
                    "Annual Step-up (%)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "stepUpPercentage",
                      type: "number",
                      step: "0.1",
                      placeholder: "e.g., 10 (optional)",
                      value: stepUpPercentage,
                      onChange: (e) => setStepUpPercentage(e.target.value),
                      className: "border-2 border-green-200 focus:border-green-500 transition-all h-12 text-lg"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "🚀 Boost returns by increasing SIP amount yearly!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      onClick: calculateSIP,
                      className: "flex-1 h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "mr-2 h-5 w-5" }),
                        "Calculate Returns"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      onClick: reset,
                      variant: "outline",
                      className: "h-14 px-6 border-2 border-gray-300 hover:bg-gray-100 transition-all",
                      children: "Reset"
                    }
                  )
                ] })
              ] })
            ] }),
            results && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-in-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "bg-gradient-to-r from-green-50 to-emerald-50 border-b-2 border-green-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-green-500 text-white rounded-xl animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-6 w-6" }) }),
                  "Your SIP Projection"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-base", children: "Watch your wealth grow! 📊✨" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6 pt-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl border-2 border-green-200 transform hover:scale-105 transition-all", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5 text-green-600" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-green-800", children: "Maturity Amount" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-green-700", children: [
                      "₹",
                      Math.round(results.maturityAmount).toLocaleString("en-IN")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl border-2 border-blue-200 transform hover:scale-105 transition-all", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-5 w-5 text-blue-600" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-blue-800", children: "Total Investment" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-blue-700", children: [
                      "₹",
                      Math.round(results.totalInvestment).toLocaleString("en-IN")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl border-2 border-purple-200 transform hover:scale-105 transition-all", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-purple-600" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-purple-800", children: "Wealth Gained" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-purple-700", children: [
                      "₹",
                      Math.round(results.wealthGained).toLocaleString("en-IN")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl border-2 border-orange-200 transform hover:scale-105 transition-all", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartLine, { className: "h-5 w-5 text-orange-600" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-orange-800", children: "CAGR Returns" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-orange-700", children: [
                      results.cagrReturn.toFixed(2),
                      "%"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-6" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-5 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border-2 border-amber-200", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-lg flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5 text-amber-600" }),
                    "Tax Implications"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-white rounded-xl", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "LTCG Tax (10%):" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-base font-semibold", children: [
                        "₹",
                        Math.round(results.ltcgTax).toLocaleString("en-IN")
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl shadow-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "Net Amount (After Tax):" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl font-bold", children: [
                        "₹",
                        Math.round(results.netAmount).toLocaleString("en-IN")
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-6" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-lg flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-5 w-5 text-blue-600" }),
                    "Comparison with Other Investments"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white rounded-xl border border-blue-200", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Fixed Deposit (6.5%)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-lg", children: [
                        "₹",
                        Math.round(results.fdReturns).toLocaleString("en-IN")
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white rounded-xl border border-blue-200", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "PPF (7.5%)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-lg", children: [
                        "₹",
                        Math.round(results.ppfReturns).toLocaleString("en-IN")
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl shadow-lg mt-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" }),
                      "SIP Advantage over FD:"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl font-bold", children: [
                      "₹",
                      Math.round(results.sipAdvantage).toLocaleString("en-IN")
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          results && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-fade-in", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-2 border-indigo-200 shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: () => setShowAIAnalysis(!showAIAnalysis),
                className: "w-full h-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.02]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "mr-3 h-6 w-6 animate-pulse" }),
                  showAIAnalysis ? "🔒 Hide AI Analysis" : "✨ Get AI-Powered Investment Insights",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: `ml-3 h-5 w-5 transition-transform ${showAIAnalysis ? "rotate-90" : ""}` })
                ]
              }
            ) }) }),
            showAIAnalysis && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-slide-in-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              EnhancedAIAnalysis,
              {
                calculatorType: "sip-calculator-india",
                data: {
                  monthlyInvestment: parseFloat(sipAmount),
                  expectedReturn: parseFloat(expectedReturn),
                  years: parseFloat(sipPeriod),
                  finalAmount: results.maturityAmount,
                  totalInvestment: results.totalInvestment,
                  wealthGained: results.wealthGained
                },
                className: "mt-6"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-8 border-2 border-purple-200 shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-purple-50 to-pink-50 border-b-2 border-purple-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-3 text-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-purple-500 text-white rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-6 w-6" }) }),
              "Understanding Systematic Investment Plans (SIP) in India 🇮🇳"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose max-w-none pt-8 pb-8 space-y-8 text-base leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border-2 border-blue-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-blue-700", children: "Systematic Investment Plans (SIPs)" }),
                " have revolutionized investment behavior in India, making mutual fund investments accessible to millions of Indians through disciplined, periodic investing. This powerful investment strategy leverages the principles of ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "compounding" }),
                " and ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "rupee cost averaging" }),
                " to help investors build substantial wealth over time, regardless of market volatility and timing considerations that typically intimidate first-time investors. 🚀💰"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-purple-500 pl-6 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-purple-700 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6" }),
                    "The SIP Investment Philosophy"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg", children: [
                    "SIP embodies the philosophy of disciplined, long-term wealth creation through regular investments in mutual funds. Unlike lump-sum investing, ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "SIPs allow investors to invest fixed amounts at regular intervals" }),
                    ", typically monthly, reducing the impact of market volatility through rupee cost averaging. This approach helps investors buy more units when markets are low and fewer units when markets are high, potentially lowering the average cost per unit over time. Think of it as your personal wealth-building autopilot! ✈️💎"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 p-4 bg-purple-100 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-purple-800", children: "💡 Pro Tip: Set up auto-debit to ensure you never miss a SIP installment. Consistency is the key to maximizing returns!" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-green-500 pl-6 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-green-700 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-6 w-6" }),
                    "Power of Compounding in SIPs"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg", children: [
                    "The true magic of SIPs lies in harnessing the ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-600", children: "power of compounding" }),
                    ", where returns generated on investments are reinvested to generate additional returns. Over long periods, this compounding effect can create exponential wealth growth. For instance, investing ₹5,000 monthly for 20 years at 12% annual returns could potentially grow to over ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-2xl text-green-600", children: "₹50 lakhs" }),
                    ", with more than half coming from compounding rather than principal contributions! 🌟"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-5 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border-2 border-green-300", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-6 w-6 text-green-600" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-green-800 text-lg", children: "The Eighth Wonder of the World" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-700", children: `Albert Einstein famously called compound interest "the eighth wonder of the world." Those who understand it, earn it; those who don't, pay it. Start your SIP today and let compounding work its magic for you!` })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-orange-500 pl-6 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-orange-700 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-6 w-6" }),
                    "Rupee Cost Averaging Advantage"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg", children: [
                    "SIPs automatically implement ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-orange-600", children: "rupee cost averaging" }),
                    ", a strategy that helps reduce the average cost of investment over time. When market prices fall, your fixed SIP amount buys more units; when prices rise, it buys fewer units. This mechanism helps smooth out market volatility and reduces the risk of making poorly timed investment decisions. Over long periods, this averaging effect can significantly enhance overall returns compared to attempting to time the market. 📈⚖️"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-red-100 rounded-xl border-2 border-red-300", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-red-700 mb-2 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-5 w-5" }),
                        "Market Down"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-600", children: "Buy MORE units with same amount 📉➡️🛒" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-green-100 rounded-xl border-2 border-green-300", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-green-700 mb-2 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
                        "Market Up"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-600", children: "Buy FEWER units with same amount 📈➡️🎯" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-pink-500 pl-6 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-pink-700 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "h-6 w-6" }),
                    "Tax Efficiency and ELSS Benefits"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg", children: [
                    "SIPs in ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-pink-600", children: "Equity Linked Savings Schemes (ELSS)" }),
                    " provide triple benefits: potential for higher returns, tax deduction under ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Section 80C" }),
                    " up to ₹1.5 lakh annually, and shorter lock-in period of just ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "three years" }),
                    "compared to other tax-saving instruments. Long-term capital gains from equity mutual funds are taxed at 10% only on gains exceeding ₹1 lakh annually, making SIPs highly tax-efficient for wealth creation. 💸✨"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-5 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl border-2 border-pink-300", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-pink-800 text-lg mb-3", children: "🎁 Triple Tax Advantage" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-pink-700", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-pink-500", children: "1" }),
                        "Tax deduction on investment (Section 80C) - Save up to ₹46,800 annually!"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-pink-500", children: "2" }),
                        "Tax-free growth during investment period"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-pink-500", children: "3" }),
                        "Concessional tax on LTCG (10% above ₹1 lakh)"
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-blue-500 pl-6 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-blue-700 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-6 w-6" }),
                    "Step-up SIPs for Inflation Protection"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-blue-600", children: "Step-up SIPs" }),
                    " allow investors to increase their SIP amount periodically, typically annually, to combat inflation and enhance wealth creation. As incomes grow, increasing SIP contributions by 10-15% annually can dramatically improve long-term wealth accumulation. This strategy ensures that your investment keeps pace with income growth and inflation, maintaining the real purchasing power of your wealth over time. Start small, grow big! 🌱➡️🌳"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-5 bg-blue-100 rounded-xl border-2 border-blue-300", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-blue-800 mb-3", children: "🚀 Example: Step-up SIP Impact" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm text-blue-700", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Starting SIP: ₹5,000/month with 10% annual step-up" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 mt-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-2 rounded", children: "Year 1: ₹5,000" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-2 rounded", children: "Year 5: ₹7,321" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-2 rounded", children: "Year 10: ₹11,796" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-semibold text-blue-900", children: "Result: 2.36x more corpus compared to regular SIP! 💪" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-indigo-500 pl-6 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-indigo-700 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-6 w-6" }),
                    "Flexibility and Investor Control"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg", children: [
                    "Modern SIP offerings provide remarkable flexibility, allowing investors to ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-indigo-600", children: "pause, modify, or stop SIPs" }),
                    "based on changing financial circumstances. Features like SIP top-ups, flexible SIP amounts, and partial withdrawals provide investors with control over their investments. Additionally, investors can start multiple SIPs across different fund categories to create diversified portfolios aligned with their risk tolerance and financial goals. Your money, your rules! 🎮💼"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-cyan-500 pl-6 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-cyan-700 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-6 w-6" }),
                    "Technology and Digital SIP Management"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg", children: [
                    "Digital platforms and mobile apps have transformed SIP investing, making it possible to start, monitor, and manage SIPs entirely online. Features like ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-cyan-600", children: "goal-based investing" }),
                    ", automated portfolio rebalancing, and real-time portfolio tracking have made SIP investing more accessible and user-friendly. Investors can now set up SIPs in minutes and track their progress toward specific financial goals through intuitive digital interfaces. The future of investing is in your pocket! 📱💎"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-5 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl border-2 border-cyan-300", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-cyan-800 text-lg mb-3", children: "📱 Digital SIP Advantages" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "grid grid-cols-2 gap-3 text-sm text-cyan-700", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "flex items-center gap-2", children: "✅ Instant KYC verification" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "flex items-center gap-2", children: "✅ Real-time portfolio tracking" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "flex items-center gap-2", children: "✅ Paperless transactions" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "flex items-center gap-2", children: "✅ Goal-based planning tools" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "flex items-center gap-2", children: "✅ Auto-debit facility" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "flex items-center gap-2", children: "✅ Easy fund switching" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-teal-500 pl-6 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-teal-700 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-6 w-6" }),
                    "Asset Allocation Through Multiple SIPs"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg", children: [
                    "Strategic investors use multiple SIPs across different asset classes and fund categories to create well-diversified portfolios. A typical strategy might include SIPs in ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-teal-600", children: "large-cap funds" }),
                    " for stability,",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-teal-600", children: " mid-cap funds" }),
                    " for growth, ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-teal-600", children: "international funds" }),
                    " for global diversification, and ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-teal-600", children: "debt funds" }),
                    " for stability. This approach allows investors to benefit from different market cycles and asset class performances while maintaining overall portfolio balance. Don't put all eggs in one basket! 🧺🥚"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 md:grid-cols-4 gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-green-100 rounded-xl border-2 border-green-300 text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-green-700", children: "Large Cap" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600 mt-1", children: "30-40%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: "Stability 🛡️" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-blue-100 rounded-xl border-2 border-blue-300 text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-blue-700", children: "Mid Cap" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-600 mt-1", children: "20-30%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: "Growth 📈" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-purple-100 rounded-xl border-2 border-purple-300 text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-purple-700", children: "International" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-purple-600 mt-1", children: "10-20%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: "Global 🌍" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-orange-100 rounded-xl border-2 border-orange-300 text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-orange-700", children: "Debt" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-orange-600 mt-1", children: "20-30%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: "Safety 🔒" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-amber-500 pl-6 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-amber-700 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChartLine, { className: "h-6 w-6" }),
                    "SIP vs. Traditional Investments"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg", children: [
                    "Compared to traditional investment options like ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "fixed deposits, NSC, or PPF" }),
                    ", SIPs in equity mutual funds have historically delivered superior inflation-adjusted returns over long periods. While traditional investments offer capital protection, they often fail to beat inflation in real terms. SIPs, though subject to market risks, have the potential to create substantial wealth and maintain purchasing power over long investment horizons. The choice between safety and growth is yours! 🏦 vs 📈"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-5 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl border-2 border-amber-300", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-amber-800 text-lg mb-3", children: "📊 Historical Returns Comparison (20-year average)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-white rounded-lg", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Equity Mutual Funds (SIP)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-500 text-white text-base", children: "12-15%" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-white rounded-lg", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Public Provident Fund (PPF)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-blue-500 text-white text-base", children: "7-8%" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-white rounded-lg", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Fixed Deposit (FD)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-orange-500 text-white text-base", children: "6-7%" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-white rounded-lg", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Inflation Rate" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-500 text-white text-base", children: "5-6%" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-700 mt-3", children: "⚠️ Past performance is not indicative of future results. Market-linked investments carry risk." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-rose-500 pl-6 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-rose-700 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-6 w-6" }),
                    "Behavioral Benefits and Financial Discipline"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg", children: [
                    "SIPs promote ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-rose-600", children: "financial discipline" }),
                    " by automating the investment process, removing emotional decision-making from investing. The automated nature of SIPs helps investors stay committed to their financial goals regardless of market conditions or personal biases. This behavioral advantage often proves more valuable than the mathematical benefits, as it ensures consistent wealth creation habits that compound over time to build substantial financial assets. Set it and forget it (but review periodically)! 🧠💪"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-5 bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl border-2 border-rose-300", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-rose-800 text-lg mb-3", children: "🎯 The Psychology of SIP Success" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-rose-700", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-rose-500 text-white mt-0.5", children: "1" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Removes emotion:" }),
                          " No panic selling during market crashes or greed buying during rallies"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-rose-500 text-white mt-0.5", children: "2" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Builds habit:" }),
                          " Regular investing becomes automatic, like brushing teeth!"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-rose-500 text-white mt-0.5", children: "3" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Prevents procrastination:" }),
                          ' Start small today rather than waiting for "perfect" timing'
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-rose-500 text-white mt-0.5", children: "4" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Creates accountability:" }),
                          " Auto-debit ensures commitment to financial goals"
                        ] })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white p-8 rounded-3xl shadow-2xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-3xl font-bold mb-4 flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-8 w-8" }),
                    "Start Your SIP Journey Today!"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-4", children: "Whether you're saving for retirement, your child's education, buying a home, or building an emergency fund, SIPs offer a flexible, disciplined, and tax-efficient way to achieve your financial goals. The best time to start was yesterday, the next best time is TODAY! 🌟" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur-sm p-4 rounded-xl", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-xl mb-2", children: "Start Small" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Begin with as little as ₹500/month" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur-sm p-4 rounded-xl", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-xl mb-2", children: "Stay Consistent" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Never miss a SIP installment" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur-sm p-4 rounded-xl", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-xl mb-2", children: "Think Long-term" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Minimum 5-10 years for best results" })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          results && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "sip-calculator-india",
              inputs: {
                sipAmount,
                sipPeriod,
                expectedReturn,
                sipType,
                stepUpPercentage
              },
              results,
              title: "SIP Investment Returns Estimate"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out;
        }
      ` })
      ]
    }
  );
};
export {
  SIPCalculatorIndia as default
};
