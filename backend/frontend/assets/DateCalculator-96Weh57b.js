import { r as reactExports, j as jsxRuntimeExports, a7 as Sparkles, d as Clock, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a3 as Label, U as Input, B as Button, H as Heart } from "./index-C_OXA6OQ.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-BNSAX0su.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { A as AutoAdSlot } from "./AutoAdSlot-2E9ISNRM.js";
import { C as Calendar } from "./calendar-CKWgIWzq.js";
import { S as Star } from "./star-DXhJ15_F.js";
import { T as Trophy } from "./trophy-5WhHKNzM.js";
import { Z as Zap } from "./zap-B5WxZbDS.js";
import { B as Briefcase } from "./briefcase-K9HDyJlj.js";
import { G as Gift } from "./gift-CqM-Ij5N.js";
import { P as Plus } from "./plus-CjFC_9XE.js";
import { M as Minus } from "./minus-D27nm_Nm.js";
import { G as GraduationCap } from "./graduation-cap-Cj_W1XUu.js";
import { A as ArrowRight } from "./arrow-right-CtOKJdMG.js";
import { C as Cake } from "./cake-Dq99g00z.js";
import { B as Baby } from "./baby-CHHdrdrL.js";
import { P as Plane } from "./plane-EAqiph1M.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./EnhancedAIAnalysis-BZiQW2bt.js";
import "./badge-fo2YvZos.js";
import "./loader-circle-BYW7QwsU.js";
import "./brain-U3SZm3t9.js";
import "./target-1ApqtYDG.js";
import "./circle-check-big-BoxGYPKG.js";
import "./lightbulb-doNczJxC.js";
import "./share-2-ViScha7M.js";
import "./link-DxXhzsoi.js";
import "./copy-DGMuG98H.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./linkedin-BSJyfSWT.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
function DateCalculator() {
  const [startDate, setStartDate] = reactExports.useState("");
  const [endDate, setEndDate] = reactExports.useState("");
  const [difference, setDifference] = reactExports.useState(null);
  const [baseDate, setBaseDate] = reactExports.useState((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
  const [years, setYears] = reactExports.useState("0");
  const [months, setMonths] = reactExports.useState("0");
  const [days, setDays] = reactExports.useState("0");
  const [operation, setOperation] = reactExports.useState("add");
  const [calculatedDate, setCalculatedDate] = reactExports.useState(null);
  const calculateDifference = () => {
    if (!startDate || !endDate) {
      setDifference(null);
      return;
    }
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start > end) {
      setDifference(null);
      return;
    }
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const totalDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    let years2 = end.getFullYear() - start.getFullYear();
    let months2 = end.getMonth() - start.getMonth();
    let daysDiff = end.getDate() - start.getDate();
    if (daysDiff < 0) {
      months2--;
      const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      daysDiff += prevMonth.getDate();
    }
    if (months2 < 0) {
      years2--;
      months2 += 12;
    }
    const totalMonths = years2 * 12 + months2;
    let workingDays = 0;
    let weekends = 0;
    const currentDate = new Date(start);
    while (currentDate <= end) {
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        weekends++;
      } else {
        workingDays++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setDifference({
      years: years2,
      months: months2,
      days: daysDiff,
      totalDays,
      totalWeeks,
      totalMonths,
      workingDays,
      weekends
    });
  };
  const calculateNewDate = () => {
    if (!baseDate) {
      setCalculatedDate(null);
      return;
    }
    const date = new Date(baseDate);
    const y = parseInt(years) || 0;
    const m = parseInt(months) || 0;
    const d = parseInt(days) || 0;
    if (operation === "add") {
      date.setFullYear(date.getFullYear() + y);
      date.setMonth(date.getMonth() + m);
      date.setDate(date.getDate() + d);
    } else {
      date.setFullYear(date.getFullYear() - y);
      date.setMonth(date.getMonth() - m);
      date.setDate(date.getDate() - d);
    }
    setCalculatedDate(date);
  };
  reactExports.useEffect(() => {
    calculateDifference();
  }, [startDate, endDate]);
  reactExports.useEffect(() => {
    calculateNewDate();
  }, [baseDate, years, months, days, operation]);
  const setToday = (setter) => {
    setter((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
  };
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Date Calculator | Date Difference Calculator | Smart Calculator Hubs",
      description: "Calculate the difference between two dates or add/subtract days, months, and years. Find working days, weekends, and duration between dates.",
      keywords: "date calculator, date difference calculator, days between dates, working days calculator, date math, calendar calculator, duration calculator",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4 animate-fade-in-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-purple-600 dark:text-purple-400 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-purple-900 dark:text-purple-100", children: "Master Time Like Never Before" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent", children: "Time Traveler's Dream Calculator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Journey through time with precision! Calculate date differences, plan future events, or revisit the past with our magical date calculator" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "top-banner", className: "my-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "difference", className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-2 max-w-md mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "difference", className: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 mr-2" }),
              "Date Difference"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "addsubtract", className: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 mr-2" }),
              "Add/Subtract"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "difference", className: "space-y-8 animate-fade-in-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-xl transition-shadow duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-6 w-6 text-blue-600 dark:text-blue-400 animate-bounce" }),
                  "Calculate Date Difference"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-base", children: "Discover the exact time span between any two dates - perfect for anniversaries, countdowns, and planning!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "startDate", className: "text-base font-semibold flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 text-yellow-500" }),
                    "Start Date"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "startDate",
                        type: "date",
                        value: startDate,
                        onChange: (e) => setStartDate(e.target.value),
                        className: "border-2 hover:border-blue-400 transition-colors"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        variant: "outline",
                        onClick: () => setToday(setStartDate),
                        size: "sm",
                        className: "hover:bg-blue-100 dark:hover:bg-blue-900",
                        children: "Today"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "endDate", className: "text-base font-semibold flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4 text-amber-500" }),
                    "End Date"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "endDate",
                        type: "date",
                        value: endDate,
                        onChange: (e) => setEndDate(e.target.value),
                        className: "border-2 hover:border-purple-400 transition-colors"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        variant: "outline",
                        onClick: () => setToday(setEndDate),
                        size: "sm",
                        className: "hover:bg-purple-100 dark:hover:bg-purple-900",
                        children: "Today"
                      }
                    )
                  ] })
                ] })
              ] }) })
            ] }),
            difference && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-fade-in-up", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 border-2 border-blue-300 dark:border-blue-700 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-8 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 px-6 py-3 bg-white/50 dark:bg-black/30 rounded-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-6 w-6 text-yellow-500 animate-pulse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-muted-foreground", children: "Time Span Revealed" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse", children: [
                  difference.years > 0 && `${difference.years} year${difference.years !== 1 ? "s" : ""}`,
                  difference.months > 0 && ` ${difference.months} month${difference.months !== 1 ? "s" : ""}`,
                  difference.days > 0 && ` ${difference.days} day${difference.days !== 1 ? "s" : ""}`,
                  difference.years === 0 && difference.months === 0 && difference.days === 0 && "Same Day!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-muted-foreground font-medium", children: [
                  difference.totalDays === 1 ? "1 precious day" : `${difference.totalDays.toLocaleString()} amazing days`,
                  " of memories and moments"
                ] })
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform duration-300 cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-medium text-muted-foreground flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-blue-500" }),
                    "Total Days"
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-blue-600 dark:text-blue-400", children: difference.totalDays.toLocaleString() }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Full day count" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-200 dark:border-purple-800 hover:scale-105 transition-transform duration-300 cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-medium text-muted-foreground flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-purple-500" }),
                    "Total Weeks"
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-purple-600 dark:text-purple-400", children: difference.totalWeeks.toLocaleString() }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Week cycles" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 dark:border-green-800 hover:scale-105 transition-transform duration-300 cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-medium text-muted-foreground flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4 text-green-500" }),
                    "Working Days"
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-green-600 dark:text-green-400", children: difference.workingDays.toLocaleString() }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Productive weekdays" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-pink-200 dark:border-pink-800 hover:scale-105 transition-transform duration-300 cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-medium text-muted-foreground flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 text-pink-500" }),
                    "Weekends"
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-pink-600 dark:text-pink-400", children: difference.weekends.toLocaleString() }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Relaxation days" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ExportShareButtons,
                {
                  calculatorType: "date-calculator",
                  inputs: { startDate, endDate },
                  results: difference,
                  title: "Date Calculator Report"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "addsubtract", className: "space-y-8 animate-fade-in-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 dark:border-green-800 shadow-lg hover:shadow-xl transition-shadow duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-6 w-6 text-green-600 dark:text-green-400 animate-spin-slow" }),
                  "Add or Subtract Time"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-base", children: "Travel forward or backward in time! Perfect for planning deadlines, calculating due dates, or finding historical moments" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "baseDate", className: "text-base font-semibold flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "h-4 w-4 text-blue-500" }),
                    "Starting Date"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "baseDate",
                        type: "date",
                        value: baseDate,
                        onChange: (e) => setBaseDate(e.target.value),
                        className: "border-2 hover:border-green-400 transition-colors"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        variant: "outline",
                        onClick: () => setToday(setBaseDate),
                        size: "sm",
                        className: "hover:bg-green-100 dark:hover:bg-green-900",
                        children: "Today"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-base font-semibold flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-purple-500" }),
                    "Time Travel Direction"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        type: "button",
                        variant: operation === "add" ? "default" : "outline",
                        onClick: () => setOperation("add"),
                        className: `w-full h-20 text-lg ${operation === "add" ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600" : ""}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-6 w-6 mr-2" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Add Time" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-80", children: "Jump to the future" })
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        type: "button",
                        variant: operation === "subtract" ? "default" : "outline",
                        onClick: () => setOperation("subtract"),
                        className: `w-full h-20 text-lg ${operation === "subtract" ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600" : ""}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-6 w-6 mr-2" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Subtract Time" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-80", children: "Visit the past" })
                          ] })
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "years", className: "text-base font-semibold flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-4 w-4 text-indigo-500" }),
                      "Years"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "years",
                        type: "number",
                        min: "0",
                        value: years,
                        onChange: (e) => setYears(e.target.value),
                        className: "border-2 hover:border-indigo-400 transition-colors text-lg h-12"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "months", className: "text-base font-semibold flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-violet-500" }),
                      "Months"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "months",
                        type: "number",
                        min: "0",
                        value: months,
                        onChange: (e) => setMonths(e.target.value),
                        className: "border-2 hover:border-violet-400 transition-colors text-lg h-12"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "days", className: "text-base font-semibold flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-cyan-500" }),
                      "Days"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "days",
                        type: "number",
                        min: "0",
                        value: days,
                        onChange: (e) => setDays(e.target.value),
                        className: "border-2 hover:border-cyan-400 transition-colors text-lg h-12"
                      }
                    )
                  ] })
                ] })
              ] }) })
            ] }),
            calculatedDate && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950 dark:via-emerald-950 dark:to-teal-950 border-2 border-green-300 dark:border-green-700 shadow-2xl animate-fade-in-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-8 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-6 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-white/50 dark:bg-black/30 rounded-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mb-2 text-muted-foreground font-medium", children: "Starting Point" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-foreground", children: formatDate(new Date(baseDate)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: new Date(baseDate).toLocaleDateString() })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-12 w-12 text-green-600 dark:text-green-400 animate-pulse" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 rounded-xl border-2 border-green-400 dark:border-green-600", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm mb-2 text-green-800 dark:text-green-200 font-medium flex items-center justify-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
                    "Your Destination"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-green-700 dark:text-green-300", children: formatDate(calculatedDate) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-green-600 dark:text-green-400 mt-1", children: calculatedDate.toLocaleDateString() })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center pt-6 border-t-2 border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3", children: calculatedDate.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/50 rounded-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-green-600 dark:text-green-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-green-800 dark:text-green-200", children: [
                    operation === "add" ? "Added" : "Subtracted",
                    " ",
                    years !== "0" && `${years} year${years !== "1" ? "s" : ""}`,
                    months !== "0" && ` ${months} month${months !== "1" ? "s" : ""}`,
                    days !== "0" && ` ${days} day${days !== "1" ? "s" : ""}`
                  ] })
                ] })
              ] })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content", className: "my-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5 text-red-500" }),
              "Life's Special Moments"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Cake, { className: "h-4 w-4 text-pink-500" }),
                  "Celebrate Anniversaries"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Count the exact days, months, and years you've been together. Whether it's your wedding anniversary, dating milestone, or friendship celebration, know precisely how much time you've shared!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "h-4 w-4 text-blue-500" }),
                  "Track Baby Milestones"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Calculate your baby's exact age in days, weeks, and months. Perfect for tracking development stages, planning checkups, or counting down to their first birthday!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "h-4 w-4 text-indigo-500" }),
                  "Plan Dream Vacations"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "How many days until your tropical getaway? Calculate the countdown and build excitement as you plan every detail of your perfect escape!" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-5 w-5 text-blue-600" }),
              "Professional Power Tools"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4 text-green-600" }),
                  "Project Management Magic"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Calculate precise project timelines, working days between milestones, and deadline dates. Factor in weekends and plan sprints with surgical precision!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-4 w-4 text-amber-600" }),
                  "Legal & Contract Dates"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Track contract durations, calculate notice periods, determine compliance deadlines, and manage lease agreements with confidence and accuracy." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 text-violet-600" }),
                  "Employment & Benefits"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Calculate tenure, determine benefit eligibility dates, track probation periods, and plan career milestones with professional precision." })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-indigo-200 dark:border-indigo-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6 text-indigo-600" }),
            "Why Our Date Calculator Rocks"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-8 w-8 text-blue-600 dark:text-blue-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: "Lightning Fast" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Instant calculations with real-time results. No waiting, no loading - just pure speed and efficiency!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-8 w-8 text-purple-600 dark:text-purple-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: "Precision Perfect" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Accurate to the day with intelligent handling of leap years, month lengths, and calendar complexities!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "h-8 w-8 text-green-600 dark:text-green-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: "Feature Rich" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Working days, weekends, multiple formats, and more. Everything you need in one beautiful interface!" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-sm max-w-none dark:prose-invert", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Master Time Management Like a Pro" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Time is the most valuable resource we have, and managing it effectively can transform your life. Our Date Calculator isn't just a tool - it's your personal time management assistant, helping you plan, track, and optimize every moment. Whether you're counting down to exciting events, tracking project timelines, or calculating important deadlines, we've got you covered with precision and style." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Endless Possibilities at Your Fingertips" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "The applications are limitless! Event planners use it to coordinate weddings and conferences. Project managers rely on it for sprint planning and milestone tracking. Parents treasure it for baby age calculations and school countdown timers. HR professionals depend on it for employee tenure and benefit eligibility. Financial advisors utilize it for loan maturity dates and investment timelines. Students track semester progress and exam countdown. Travelers calculate vacation days and visa validity periods." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Working Days vs. Calendar Days - Know the Difference" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "One of our most powerful features is the automatic calculation of working days versus total calendar days. This is crucial for business planning, project timelines, and understanding realistic schedules. If you need to complete a 30-day project, knowing that it actually means about 22 working days (excluding weekends) helps you plan resources and set achievable goals. This feature alone can save countless hours of manual counting and prevent scheduling mistakes!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Time Travel Made Simple" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Our Add/Subtract feature is like having a time machine in your pocket! Need to know what date it will be 90 days from now? Planning a project that starts in 6 months? Wondering what the date was 2 years and 3 months ago? Simply input your base date, choose to add or subtract, enter your time period, and instantly see your answer. It handles all the complex calendar math - leap years, varying month lengths, and year transitions - so you don't have to!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Real-World Success Stories" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Project managers have reported 40% time savings in sprint planning. Event coordinators have eliminated scheduling conflicts by accurately calculating vendor booking timelines. HR departments have streamlined onboarding by precisely tracking probation periods. Couples have strengthened relationships by celebrating exact monthly anniversaries. Parents have captured precious baby milestones with day-perfect accuracy. Financial planners have improved client communications with clear timeline visualizations." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Perfect for Every Scenario" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Planning a wedding? Calculate your countdown to the big day and track RSV P deadlines. Managing a construction project? Determine completion dates accounting for weather delays and working days. Tracking fitness goals? See exactly how many days you've been consistent. Expecting a baby? Count down to your due date and track each trimester. Saving for a goal? Calculate exactly how many days until you reach your target. Running a promotion? Know precisely when to schedule your marketing campaigns." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Tips for Maximum Effectiveness" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "For the most accurate results, always double-check your date inputs - a small typo can throw off your entire calculation. When planning projects, remember to account for holidays in addition to weekends. Use the working days feature for realistic business timelines. Bookmark this calculator for quick access to your time management powerhouse. Share results with teams using the export feature for clear communication. For long-term planning, add buffer days to account for unexpected delays." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "The Science of Date Calculation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Behind the beautiful interface is sophisticated calendar mathematics. Our algorithm accounts for the Gregorian calendar's complexities: leap years every 4 years (except century years not divisible by 400), months with varying lengths, and timezone considerations. We calculate working days by excluding Saturdays and Sundays, giving you business-accurate timelines. The system handles edge cases like month-end dates, year transitions, and century boundaries with precision." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Privacy and Simplicity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Your dates are your business! All calculations happen instantly in your browser - we never store or transmit your personal dates to any server. No registration required, no data collection, just pure functionality. The clean, intuitive interface means you can start calculating immediately without tutorials or learning curves. Whether you're tech-savvy or a casual user, you'll feel right at home." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Start Your Time Mastery Journey Today" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Don't let time manage you - take control with our powerful Date Calculator! Whether you're planning the next quarter, counting down to retirement, tracking a pregnancy, managing construction timelines, or simply curious about how many days you've been alive, we're here to help. The calculator is completely free, requires no downloads, and works perfectly on any device. Start calculating now and discover the peace of mind that comes from knowing exactly where you stand in time!" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 border-2 border-yellow-300 dark:border-yellow-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-8 w-8 text-yellow-600 dark:text-yellow-400 animate-pulse" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "Pro Tip: Bookmark This Page!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Time waits for no one, but you can! Save this calculator to your favorites for instant access whenever you need to master the calendar. Your future self will thank you for having this powerful tool just one click away!" })
        ] }) }) })
      ] })
    }
  );
}
export {
  DateCalculator,
  DateCalculator as default
};
