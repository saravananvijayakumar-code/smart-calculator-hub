import { n as createLucideIcon, r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a3 as Label, U as Input, d as Clock, a7 as Sparkles, H as Heart } from "./index-C_OXA6OQ.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { P as Progress } from "./progress-BN2f3CdS.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { A as AIAnalysis } from "./AIAnalysis-DnR9Up6F.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { C as Cake } from "./cake-Dq99g00z.js";
import { C as Calendar } from "./calendar-CKWgIWzq.js";
import { Z as Zap } from "./zap-B5WxZbDS.js";
import { U as Users } from "./users-fS_YAEJN.js";
import { T as Trophy } from "./trophy-5WhHKNzM.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./EnhancedAIAnalysis-BZiQW2bt.js";
import "./loader-circle-BYW7QwsU.js";
import "./brain-U3SZm3t9.js";
import "./target-1ApqtYDG.js";
import "./circle-check-big-BoxGYPKG.js";
import "./arrow-right-CtOKJdMG.js";
import "./lightbulb-doNczJxC.js";
import "./tabs-BNSAX0su.js";
import "./share-2-ViScha7M.js";
import "./link-DxXhzsoi.js";
import "./copy-DGMuG98H.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./linkedin-BSJyfSWT.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M5.8 11.3 2 22l10.7-3.79", key: "gwxi1d" }],
  ["path", { d: "M4 3h.01", key: "1vcuye" }],
  ["path", { d: "M22 8h.01", key: "1mrtc2" }],
  ["path", { d: "M15 2h.01", key: "1cjtqr" }],
  ["path", { d: "M22 20h.01", key: "1mrys2" }],
  [
    "path",
    {
      d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",
      key: "hbicv8"
    }
  ],
  [
    "path",
    { d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17", key: "1i94pl" }
  ],
  ["path", { d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7", key: "1cofks" }],
  [
    "path",
    {
      d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",
      key: "4kbmks"
    }
  ]
];
const PartyPopper = createLucideIcon("party-popper", __iconNode);
function AgeCalculator() {
  const [birthDate, setBirthDate] = reactExports.useState("");
  const [targetDate, setTargetDate] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const [showAnimation, setShowAnimation] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!targetDate) {
      const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      setTargetDate(today);
    }
  }, []);
  reactExports.useEffect(() => {
    if (!birthDate || !targetDate) {
      setResult(null);
      setShowAnimation(false);
      return;
    }
    const birth = new Date(birthDate);
    const target = new Date(targetDate);
    if (birth > target) {
      setResult(null);
      setShowAnimation(false);
      return;
    }
    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();
    if (days < 0) {
      months--;
      const lastMonth = new Date(target.getFullYear(), target.getMonth(), 0);
      days += lastMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    const totalDays = Math.floor((target.getTime() - birth.getTime()) / (1e3 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;
    const nextBirthday = new Date(target.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday <= target) {
      nextBirthday.setFullYear(target.getFullYear() + 1);
    }
    const daysUntilBirthday = Math.floor((nextBirthday.getTime() - target.getTime()) / (1e3 * 60 * 60 * 24));
    setResult({
      years,
      months,
      days,
      totalDays,
      totalWeeks,
      totalMonths,
      nextBirthday: nextBirthday.toLocaleDateString(),
      daysUntilBirthday,
      isValid: true
    });
    setShowAnimation(true);
  }, [birthDate, targetDate]);
  const tips = [
    "Use this calculator to find your exact age for official documents",
    "Calculate age differences between family members",
    "Find out exactly how many days you've been alive",
    "Useful for planning milestone birthdays and anniversaries",
    "Can calculate age for any date in the past or future"
  ];
  const getAgeStage = (years) => {
    if (years < 1) return { stage: "Infant", emoji: "👶", color: "text-pink-600" };
    if (years < 4) return { stage: "Toddler", emoji: "🧸", color: "text-orange-600" };
    if (years < 12) return { stage: "Child", emoji: "🎈", color: "text-yellow-600" };
    if (years < 18) return { stage: "Teenager", emoji: "🎮", color: "text-green-600" };
    if (years < 30) return { stage: "Young Adult", emoji: "🚀", color: "text-blue-600" };
    if (years < 60) return { stage: "Adult", emoji: "💼", color: "text-purple-600" };
    return { stage: "Senior", emoji: "🎖️", color: "text-indigo-600" };
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Age Calculator 🎂 - Calculate Your Exact Age in Years, Months & Days",
      description: "Calculate your precise age in years, months, days, weeks, hours, and more! Find out when your next birthday is, how many days you've lived, and discover fun milestones.",
      keywords: "age calculator, calculate age, birthday calculator, days until birthday, age in days, exact age calculator, how old am I",
      tips,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3 animate-fade-in", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Cake, { className: "w-10 h-10 text-pink-600 animate-bounce" }),
            "Age Calculator 🎂"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Discover your exact age down to the second! Calculate milestones, countdown to birthdays, and explore fun facts about your time on Earth." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-2 border-blue-200 dark:border-blue-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2 text-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-6 w-6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Enter Your Dates" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-blue-100", children: "Enter your birth date and optionally a target date to calculate age" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "birthDate", className: "text-lg font-semibold", children: "🎂 Birth Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "birthDate",
                  type: "date",
                  value: birthDate,
                  onChange: (e) => setBirthDate(e.target.value),
                  className: "h-12 text-lg border-2 focus:border-blue-500 transition-all"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "targetDate", className: "text-lg font-semibold", children: "📅 Target Date (default: today)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "targetDate",
                  type: "date",
                  value: targetDate,
                  onChange: (e) => setTargetDate(e.target.value),
                  className: "h-12 text-lg border-2 focus:border-blue-500 transition-all"
                }
              )
            ] })
          ] }) })
        ] }),
        result && result.isValid && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `space-y-6 transition-all duration-700 ${showAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIAnalysis,
            {
              analysisRequest: {
                calculatorType: "age-calculator",
                data: {
                  birthDate: new Date(birthDate),
                  currentAge: { years: result.years, months: result.months, days: result.days },
                  nextBirthday: new Date(result.nextBirthday || birthDate),
                  daysUntilBirthday: result.daysUntilBirthday,
                  lifeMilestones: [
                    `Lived ${result.totalDays.toLocaleString()} days`,
                    `Next birthday in ${result.daysUntilBirthday} days`,
                    `Total weeks: ${result.totalWeeks.toLocaleString()}`,
                    `Total months: ${result.totalMonths.toLocaleString()}`
                  ]
                }
              },
              autoRun: true,
              title: "AI Age Analysis 🤖",
              description: "Get insights about your age milestones, life phases, and interesting facts about your time on Earth."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "age-calculator",
              inputs: {
                birthDate,
                targetDate
              },
              results: {
                years: result.years,
                months: result.months,
                days: result.days,
                totalDays: result.totalDays,
                daysUntilBirthday: result.daysUntilBirthday
              },
              title: "Age Calculator Report"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl animate-bounce", children: getAgeStage(result.years).emoji }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "You are a" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `text-2xl px-6 py-2 ${getAgeStage(result.years).color} bg-white dark:bg-gray-800`, children: getAgeStage(result.years).stage })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 animate-pulse", children: [
                  result.years,
                  " years, ",
                  result.months,
                  " months, ",
                  result.days,
                  " days"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-gray-600 dark:text-gray-400", children: [
                  "As of ",
                  new Date(targetDate).toLocaleDateString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 opacity-10 rounded-full -mr-10 -mt-10" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-8 h-8 text-pink-600 mb-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-pink-600", children: result.years }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Years Old" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-10 rounded-full -mr-10 -mt-10" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-8 h-8 text-blue-600 mb-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-blue-600", children: result.totalMonths }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Total Months" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-400 opacity-10 rounded-full -mr-10 -mt-10" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-8 h-8 text-purple-600 mb-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-purple-600", children: result.totalWeeks.toLocaleString() }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Total Weeks" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "transform hover:scale-105 transition-all hover:shadow-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 bg-gradient-to-br from-green-400 to-emerald-500 text-white rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-medium flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
                "Days Lived"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-green-600", children: result.totalDays.toLocaleString() }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: result.totalDays % 365 / 365 * 100, className: "mt-2 h-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-2", children: "That's a lot of sunrises! 🌅" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "transform hover:scale-105 transition-all hover:shadow-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-medium flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4" }),
                "Heartbeats"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-orange-600", children: Math.round(result.totalDays * 24 * 60 * 70).toLocaleString() }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: 70, className: "mt-2 h-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-2", children: "Your heart is amazing! 💓" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "transform hover:scale-105 transition-all hover:shadow-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-medium flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PartyPopper, { className: "w-4 h-4" }),
                "Next Birthday"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-purple-600", children: [
                  result.daysUntilBirthday,
                  " days"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: (365 - result.daysUntilBirthday) / 365 * 100, className: "mt-2 h-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-2", children: result.nextBirthday })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "transform hover:scale-105 transition-all hover:shadow-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 bg-gradient-to-br from-blue-400 to-cyan-500 text-white rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-medium flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
                "Life Stage"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600", children: getAgeStage(result.years).stage }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mt-2", children: getAgeStage(result.years).emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-2", children: "Embrace every moment! ✨" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6" }),
              "Fun Age Facts & Milestones"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-yellow-600" }),
                  "Time You've Experienced:"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⏰ Hours:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: Math.round(result.totalDays * 24).toLocaleString() })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between p-2 bg-blue-50 dark:bg-blue-900/20 rounded", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⏱️ Minutes:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: Math.round(result.totalDays * 24 * 60).toLocaleString() })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between p-2 bg-purple-50 dark:bg-purple-900/20 rounded", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🥱 Breaths (approx):" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: Math.round(result.totalDays * 24 * 60 * 16).toLocaleString() })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "😴 Hours of sleep (if 8h/day):" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: Math.round(result.totalDays * 8).toLocaleString() })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-5 h-5 text-green-600" }),
                  "Milestone Achievements:"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 p-2 bg-pink-50 dark:bg-pink-900/20 rounded", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: result.totalDays >= 1e4 ? "✅" : "⏳" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "10,000 days old ",
                      result.totalDays < 1e4 ? `(in ${1e4 - result.totalDays} days)` : "🎉"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 p-2 bg-orange-50 dark:bg-orange-900/20 rounded", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: result.totalWeeks >= 1e3 ? "✅" : "⏳" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "1,000 weeks old ",
                      result.totalWeeks < 1e3 ? `(in ${1e3 - result.totalWeeks} weeks)` : "🎊"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: result.totalMonths >= 500 ? "✅" : "⏳" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "500 months old ",
                      result.totalMonths < 500 ? `(in ${500 - result.totalMonths} months)` : "🥳"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 p-2 bg-cyan-50 dark:bg-cyan-900/20 rounded", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: result.years >= 100 ? "✅" : "⏳" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "Century club ",
                      result.years < 100 ? `(${100 - result.years} years to go!)` : "🏆"
                    ] })
                  ] })
                ] })
              ] })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl", children: "📖 The Complete Guide to Age Calculation & Life Milestones" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose prose-lg max-w-none dark:prose-invert p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-8 h-8 text-blue-600" }),
                "What is Age and Why Calculate It?"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Age is more than just a number—it's a celebration of every sunrise you've witnessed, every challenge you've overcome, and every moment you've experienced. From the day you were born, time has been your constant companion, marking your journey through life's incredible adventure. But have you ever stopped to think about the fascinating mathematics behind age calculation?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mt-4", children: "Our Age Calculator doesn't just tell you how old you are; it unveils the incredible story of your life in numbers. Whether you're counting down to a milestone birthday, calculating age differences for legal documents, or simply curious about how many heartbeats you've experienced, understanding your precise age opens up a world of interesting insights and perspective on your life's journey." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-8 h-8 text-purple-600" }),
                "The Science Behind Age Calculation"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Calculating age might seem straightforward—just subtract your birth year from the current year, right? Not quite! Accurate age calculation is actually a fascinating dance with time that accounts for months, days, and even leap years. Our calculator uses sophisticated algorithms to give you precision down to the day, accounting for all those tricky calendar quirks that make time measurement so interesting." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mt-4", children: "The Gregorian calendar, which most of the world uses today, has some interesting mathematical properties. Years divisible by 4 are leap years (except those divisible by 100, unless they're also divisible by 400). This means that 2000 was a leap year, but 1900 wasn't! Our calculator handles all these complexities automatically, ensuring you get the most accurate age calculation possible. It's like having a mini time-travel mathematician in your pocket!" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "🎂 Understanding Different Life Stages" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-6", children: "As we journey through life, we pass through distinct stages, each with its own joys, challenges, and developmental milestones. Understanding these stages helps us appreciate where we are and where we're headed:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 my-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl border-l-4 border-pink-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-pink-700 dark:text-pink-300 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "👶" }),
                    "Infant (0-1 year)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The most rapid growth period of your entire life! Infants triple their birth weight and develop at an astonishing pace. Every day brings new discoveries—from first smiles to first words. This is when the foundation of all future development is laid." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border-l-4 border-orange-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "🧸" }),
                    "Toddler (1-4 years)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'The age of exploration and "why?" questions! Toddlers develop language, motor skills, and independence at lightning speed. Their curiosity is endless, and their energy seems infinite. This is when personality really starts to shine through.' })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border-l-4 border-yellow-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-yellow-700 dark:text-yellow-300 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "🎈" }),
                    "Child (4-12 years)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The golden age of learning and play! Children absorb knowledge like sponges, develop friendships, and discover their interests. From learning to read to mastering multiplication tables, these years build the intellectual foundation for life." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-l-4 border-green-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "🎮" }),
                    "Teenager (12-18 years)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The transformation years! Teens navigate physical, emotional, and social changes while developing their identity. It's a time of self-discovery, independence-seeking, and preparation for adulthood. Friendships deepen, and life goals start to take shape." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "🚀" }),
                    "Young Adult (18-30 years)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The launch pad years! Young adults explore careers, relationships, and life paths. It's a time of freedom, experimentation, and establishing independence. Many make major life decisions—education, career, partnerships—that shape their future trajectory." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "💼" }),
                    "Adult (30-60 years)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The peak performance years! Adults typically hit their stride in careers, raise families, and build wealth and stability. Wisdom from experience combines with energy and capability. It's often the most productive and influential period of life." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "🎖️" }),
                    "Senior (60+ years)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The wisdom years! Seniors often report the highest life satisfaction, freed from many earlier pressures. It's a time for reflection, legacy-building, and often renewed creativity. Modern 60+ adults are more active and engaged than any previous generation!" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "🌟 Fascinating Age Milestones" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-4", children: "Life is full of meaningful milestones that mark our journey. Here are some fascinating age markers and what they represent:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-green-600 mb-2", children: "🎯 10,000 Days (27.4 years)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `You've lived through ten thousand sunrises and sunsets! This milestone represents over a decade of adulthood and countless experiences. Many people celebrate this unique "10K day" as a reminder to appreciate life's journey.` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-blue-600 mb-2", children: "⏰ 1,000 Weeks (19.2 years)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A thousand weeks of life experiences! Visualizing your life in weeks puts everything in perspective. With an average lifespan of about 4,000 weeks, each one becomes more precious when you see the bigger picture." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-purple-600 mb-2", children: "🎊 1,000,000 Minutes (1.9 years)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Your first million minutes! It happens faster than you'd think—before age 2. It's a reminder that time is our most valuable currency, and we're constantly spending it, minute by minute." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-orange-600 mb-2", children: "💝 Your Golden Birthday" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The day when your age matches the day you were born (e.g., turning 15 on the 15th). It only happens once in a lifetime, making it extra special. Some cultures consider this particularly lucky!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-pink-600 mb-2", children: "🏆 Century Mark (100 years)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Reaching 100 is an extraordinary achievement! Centenarians have witnessed over a century of human history, technological revolutions, and countless global changes. They're living history books!" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "💓 Your Body's Amazing Timeline" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-4", children: "While you're counting years, your body is performing millions of incredible processes every single day. Let's put your age into perspective with some mind-blowing biological facts:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-900/20 p-6 rounded-xl mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-red-700 dark:text-red-300 mb-3", children: "❤️ Your Heart's Journey" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: "Your heart beats approximately 100,000 times per day. That means:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "At 1 year old: Your heart has beaten about 36.5 million times" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "At 20 years old: Over 730 million heartbeats" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "At 50 years old: Nearly 2 billion heartbeats!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "At 80 years old: An astounding 3+ billion heartbeats" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 italic", children: "Your heart is incredibly hardworking, never taking a vacation, pumping about 2,000 gallons of blood daily!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-blue-700 dark:text-blue-300 mb-3", children: "🫁 Breathing Life" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: "You take approximately 20,000 breaths per day. Over your lifetime:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "By age 10: About 73 million breaths" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "By age 30: Over 219 million breaths" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "By age 70: Nearly 511 million breaths!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 italic", children: "Each breath is a gift, bringing fresh oxygen to every cell in your body!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-purple-700 dark:text-purple-300 mb-3", children: "🧠 Brain Power" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: "Your brain processes thousands of thoughts daily and never stops learning:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "By age 7: Your brain has reached 95% of adult size" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "By age 25: Your prefrontal cortex is fully developed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Throughout life: Your brain can form new neural connections (neuroplasticity)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Older adults: Can have vocabulary and wisdom that younger people can't match" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 italic", children: "Age brings wisdom—literally! Your brain accumulates knowledge and pattern recognition with every passing year." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "🎉 Celebrating Birthdays Around the World" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-4", children: "Different cultures celebrate birthdays in fascinating ways. Your age and birthday aren't just numbers—they're opportunities for celebration, reflection, and cultural traditions:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-orange-600", children: "🎂 Western Traditions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Birthday cakes with candles (one for each year plus one for good luck), birthday songs, and parties with friends and family. Sweet 16, 21st, 30th, 40th, and 50th birthdays are often celebrated with special significance." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-red-600", children: "🏮 Chinese Traditions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Eating longevity noodles (the longer, the better—never cut them!), red eggs for babies' first month, and big celebrations for 60th and 80th birthdays. Age 60 marks the completion of one zodiac cycle, making it extra special." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600", children: "🌺 Hawaiian Traditions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lei giving and makahiki celebrations. The first birthday (baby's luau) is particularly special, with traditional foods and family gatherings celebrating the child's first year of life." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-purple-600", children: "🇲🇽 Mexican Traditions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Quinceañera at 15 marks a girl's transition to womanhood. Piñatas, mariachi music, and pan dulce (sweet bread) make celebrations festive. Las mañanitas birthday song is sung with great joy." })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "🤔 Frequently Asked Questions About Age" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-blue-500 pl-4 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-2", children: "Why does age matter for official documents?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Age determines legal rights and responsibilities—voting age, driving age, drinking age, retirement age, and eligibility for various programs. Accurate age calculation ensures compliance with legal requirements and access to age-appropriate services and benefits." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-green-500 pl-4 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-2", children: "Does everyone age at the same rate biologically?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No! While chronological age (time since birth) is universal, biological age varies based on genetics, lifestyle, stress, diet, exercise, and environmental factors. Some 60-year-olds have the biological markers of 40-year-olds, while some 40-year-olds show markers of 60-year-olds. Healthy habits can slow biological aging!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-purple-500 pl-4 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-2", children: "Why do we feel like time speeds up as we age?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `This is a real psychological phenomenon! When you're 5, one year is 20% of your life. When you're 50, one year is only 2% of your life. Additionally, novel experiences make time feel slower, and as we age, we have fewer "firsts." Trying new things can help slow down perceived time!` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-orange-500 pl-4 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-2", children: "What's the oldest verified human age?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Jeanne Calment of France lived to 122 years and 164 days (1875-1997), the longest verified human lifespan ever recorded. She witnessed the Eiffel Tower's construction, both World Wars, the invention of television, computers, and the moon landing. What an incredible journey through history!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-pink-500 pl-4 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-2", children: "Do leap year babies age differently?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `People born on February 29th (leap day) age just like everyone else biologically! They typically celebrate birthdays on February 28th or March 1st in non-leap years. Technically, they only have an actual birthday every 4 years, which some find fun to joke about—imagine being "8 years old" when you're really 32!` })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "💪 Making the Most of Every Age" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-4", children: "Every age is a gift with its own unique opportunities. Here's how to embrace and maximize each stage:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-pink-600 mb-2", children: "🌟 Stay Curious" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Never stop learning! Whether you're 8 or 80, curiosity keeps your mind sharp and life interesting. Try new hobbies, learn new skills, ask questions, and explore the world around you." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-blue-600 mb-2", children: "❤️ Nurture Relationships" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Strong relationships are the best predictor of happiness at every age. Invest time in family and friends, make new connections, and maintain meaningful bonds throughout your life." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 mb-2", children: "🏃 Stay Active" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Physical activity isn't just for the young! Movement keeps your body strong, mind sharp, and mood elevated at any age. Find activities you enjoy and make them part of your routine." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-purple-600 mb-2", children: "🎯 Set Goals" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "It's never too early or too late to dream big! Having goals gives life direction and purpose. Whether it's learning a language, running a marathon, or writing a book, pursue what excites you." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-orange-600 mb-2", children: "🙏 Practice Gratitude" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Each day, each birthday, each milestone is a gift. Taking time to appreciate what you have and how far you've come increases happiness and life satisfaction at every age." })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-8 h-8 text-yellow-500" }),
                "Final Thoughts: Celebrate Every Moment"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Age is more than a mathematical calculation—it's a testament to your resilience, growth, and the countless moments that make up your unique story. Whether you're 7 or 77, every single day adds to the rich tapestry of your life experience. Your age represents every laugh you've shared, every challenge you've overcome, every person you've touched, and every dream you've pursued." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mt-4", children: "So use this calculator not just to count your years, but to celebrate them! Whether you're planning a milestone birthday, calculating age for official documents, or simply curious about your time on this beautiful planet, remember that every single day you've lived is special. Here's to making the most of every moment, at every age! 🎉✨" })
            ] })
          ] }) })
        ] })
      ] })
    }
  );
}
export {
  AgeCalculator
};
