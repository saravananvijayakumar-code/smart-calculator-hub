import { Q as useToast, r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, C as Calculator, k as CardContent, a4 as Label, V as Input, D as DollarSign, T as TrendingUp, a8 as Sparkles, B as Button, c as Shield } from "./index-CK9G4vW7.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { A as AIAnalysis } from "./AIAnalysis-B-4zh-eH.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { u as useCalculatorHistory } from "./useCalculatorHistory-D-0eO727.js";
import { A as AdsterraSlot } from "./AdsterraSlot-DCXIaKPD.js";
import { A as AdsettraSlot } from "./AdsettraSlot-eVTrqIXX.js";
import { A as AutoAdSlot } from "./AutoAdSlot-DNRO9HTk.js";
import { W as Wallet } from "./wallet-DxIJPdsI.js";
import { C as Calendar } from "./calendar-DlIzODy7.js";
import { T as Target } from "./target-4JeIm6Yk.js";
import { A as Award } from "./award-Bl7Nn9A9.js";
import { S as Save } from "./save-DNawQ5RZ.js";
import { C as CircleCheck } from "./circle-check-CJ5pTUz4.js";
import { L as Lightbulb } from "./lightbulb-DKPyzLdJ.js";
import { C as CircleAlert } from "./circle-alert-DCAQyr8M.js";
import "./EnhancedAIAnalysis-BaYCd8m5.js";
import "./badge-6THgoC_4.js";
import "./brain-CSngUEN8.js";
import "./circle-check-big-B8N3lfE-.js";
import "./arrow-right-Bjdtr8dz.js";
import "./tabs-t5L32f7o.js";
import "./share-2-SpOWc355.js";
import "./link-C11IgQ5M.js";
import "./copy-BqV-1o4k.js";
import "./twitter-CFAqYlq6.js";
import "./facebook-BX8Qa6cK.js";
import "./linkedin-D9e3uSZB.js";
import "./message-circle-DZtFORhh.js";
import "./mail-DX6y6Mo7.js";
import "./calculatorStore-CZ9YYacT.js";
import "./middleware-Xu_RK28m.js";
function RetirementCalculator() {
  const { saveCalculation } = useCalculatorHistory();
  const { toast } = useToast();
  const [currentAge, setCurrentAge] = reactExports.useState("");
  const [retirementAge, setRetirementAge] = reactExports.useState("");
  const [currentSavings, setCurrentSavings] = reactExports.useState("");
  const [monthlyContribution, setMonthlyContribution] = reactExports.useState("");
  const [expectedReturn, setExpectedReturn] = reactExports.useState("");
  const [retirementGoal, setRetirementGoal] = reactExports.useState("");
  const [result, setResult] = reactExports.useState({
    finalAmount: 0,
    totalContributions: 0,
    totalEarnings: 0,
    monthlyNeeded: 0,
    isValid: false
  });
  reactExports.useEffect(() => {
    const currentAgeNum = parseFloat(currentAge);
    const retirementAgeNum = parseFloat(retirementAge);
    const currentSavingsNum = parseFloat(currentSavings) || 0;
    const monthlyContributionNum = parseFloat(monthlyContribution) || 0;
    const expectedReturnNum = parseFloat(expectedReturn);
    const retirementGoalNum = parseFloat(retirementGoal) || 0;
    if (currentAgeNum > 0 && retirementAgeNum > currentAgeNum && expectedReturnNum >= 0) {
      const yearsToRetirement2 = retirementAgeNum - currentAgeNum;
      const monthsToRetirement = yearsToRetirement2 * 12;
      const monthlyRate = expectedReturnNum / 100 / 12;
      const futureValueCurrent = currentSavingsNum * Math.pow(1 + monthlyRate, monthsToRetirement);
      let futureValueContributions = 0;
      if (monthlyContributionNum > 0 && monthlyRate > 0) {
        futureValueContributions = monthlyContributionNum * ((Math.pow(1 + monthlyRate, monthsToRetirement) - 1) / monthlyRate);
      } else if (monthlyContributionNum > 0) {
        futureValueContributions = monthlyContributionNum * monthsToRetirement;
      }
      const finalAmount = futureValueCurrent + futureValueContributions;
      const totalContributions = currentSavingsNum + monthlyContributionNum * monthsToRetirement;
      const totalEarnings = finalAmount - totalContributions;
      let monthlyNeeded = 0;
      if (retirementGoalNum > futureValueCurrent) {
        const needed = retirementGoalNum - futureValueCurrent;
        if (monthlyRate > 0) {
          monthlyNeeded = needed * monthlyRate / (Math.pow(1 + monthlyRate, monthsToRetirement) - 1);
        } else {
          monthlyNeeded = needed / monthsToRetirement;
        }
      }
      setResult({
        finalAmount,
        totalContributions,
        totalEarnings,
        monthlyNeeded,
        isValid: true
      });
    } else {
      setResult({
        finalAmount: 0,
        totalContributions: 0,
        totalEarnings: 0,
        monthlyNeeded: 0,
        isValid: false
      });
    }
  }, [currentAge, retirementAge, currentSavings, monthlyContribution, expectedReturn, retirementGoal]);
  const handleSaveCalculation = () => {
    if (!result.isValid) {
      toast({
        title: "No calculation to save",
        description: "Please complete the form to generate results first.",
        variant: "destructive"
      });
      return;
    }
    saveCalculation({
      calculatorType: "retirement",
      calculatorName: "Retirement Calculator",
      inputs: {
        currentAge: parseFloat(currentAge),
        retirementAge: parseFloat(retirementAge),
        currentSavings: parseFloat(currentSavings) || 0,
        monthlyContribution: parseFloat(monthlyContribution) || 0,
        expectedReturn: parseFloat(expectedReturn),
        retirementGoal: parseFloat(retirementGoal) || 0
      },
      results: {
        finalAmount: result.finalAmount,
        totalContributions: result.totalContributions,
        totalEarnings: result.totalEarnings,
        monthlyNeeded: result.monthlyNeeded
      }
    });
    toast({
      title: "Calculation saved!",
      description: "View it in your calculation history."
    });
  };
  const monthlyIncome = result.finalAmount > 0 ? result.finalAmount * 0.04 / 12 : 0;
  const goalProgress = parseFloat(retirementGoal) > 0 ? result.finalAmount / parseFloat(retirementGoal) * 100 : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Retirement Calculator - Plan Your Financial Freedom | 2025",
      description: "Free retirement calculator to plan your golden years. Calculate retirement savings, investment growth, and monthly income needed. Expert retirement planning tools for 2025.",
      keywords: "retirement calculator, retirement planning, pension calculator, 401k calculator, retirement savings calculator, financial freedom calculator, retire early calculator",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "top", className: "mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsettraSlot, { position: "top", className: "mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-950/30 dark:via-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border border-purple-200 dark:border-purple-800 animate-in fade-in slide-in-from-bottom-4 duration-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg animate-in zoom-in duration-500 delay-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-8 h-8 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-3 animate-in slide-in-from-left duration-500 delay-200", children: "Retirement Planning Calculator: Design Your Dream Retirement" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed animate-in slide-in-from-left duration-500 delay-300", children: "Your journey to financial independence starts here. Calculate exactly how much you need to save, when you can retire, and what your golden years will look like. Let's build your retirement roadmap together! 🚀" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-2 border-purple-100 dark:border-purple-900/50 animate-in slide-in-from-bottom-4 duration-700 delay-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/50 dark:to-indigo-950/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-6 h-6 text-purple-600" }),
              "Your Retirement Blueprint"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Fill in your details to see your personalized retirement projection. Every dollar counts, every year matters!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6 pt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "currentAge", className: "flex items-center gap-2 text-base font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" }),
                  "Current Age"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "currentAge",
                    type: "number",
                    value: currentAge,
                    onChange: (e) => setCurrentAge(e.target.value),
                    placeholder: "e.g., 30",
                    min: "18",
                    max: "100",
                    className: "border-purple-200 focus:border-purple-400 focus:ring-purple-400 transition-all duration-300 hover:border-purple-300"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "retirementAge", className: "flex items-center gap-2 text-base font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" }),
                  "Target Retirement Age"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "retirementAge",
                    type: "number",
                    value: retirementAge,
                    onChange: (e) => setRetirementAge(e.target.value),
                    placeholder: "e.g., 65",
                    min: "50",
                    max: "100",
                    className: "border-indigo-200 focus:border-indigo-400 focus:ring-indigo-400 transition-all duration-300 hover:border-indigo-300"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "currentSavings", className: "flex items-center gap-2 text-base font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" }),
                  "Current Retirement Savings"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "currentSavings",
                    type: "number",
                    value: currentSavings,
                    onChange: (e) => setCurrentSavings(e.target.value),
                    placeholder: "e.g., 50000",
                    min: "0",
                    step: "1000",
                    className: "border-green-200 focus:border-green-400 focus:ring-green-400 transition-all duration-300 hover:border-green-300"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Total in 401k, IRA, and other retirement accounts" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "monthlyContribution", className: "flex items-center gap-2 text-base font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" }),
                  "Monthly Contribution"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "monthlyContribution",
                    type: "number",
                    value: monthlyContribution,
                    onChange: (e) => setMonthlyContribution(e.target.value),
                    placeholder: "e.g., 500",
                    min: "0",
                    step: "50",
                    className: "border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300 hover:border-blue-300"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "How much you'll save each month" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "expectedReturn", className: "flex items-center gap-2 text-base font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" }),
                  "Expected Annual Return (%)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "expectedReturn",
                    type: "number",
                    value: expectedReturn,
                    onChange: (e) => setExpectedReturn(e.target.value),
                    placeholder: "e.g., 7",
                    min: "0",
                    step: "0.5",
                    className: "border-amber-200 focus:border-amber-400 focus:ring-amber-400 transition-all duration-300 hover:border-amber-300"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Historical average: 7-10% for stocks, 4-6% for bonds" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "retirementGoal", className: "flex items-center gap-2 text-base font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4 text-rose-600 group-hover:scale-110 transition-transform" }),
                  "Retirement Goal (Optional)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "retirementGoal",
                    type: "number",
                    value: retirementGoal,
                    onChange: (e) => setRetirementGoal(e.target.value),
                    placeholder: "e.g., 1000000",
                    min: "0",
                    step: "10000",
                    className: "border-rose-200 focus:border-rose-400 focus:ring-rose-400 transition-all duration-300 hover:border-rose-300"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Your target retirement nest egg" })
              ] })
            ] }),
            result.isValid && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end animate-in fade-in slide-in-from-right duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleSaveCalculation, variant: "outline", className: "gap-2 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
                "Save to History"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-in fade-in slide-in-from-bottom duration-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950/30 dark:via-green-950/30 dark:to-teal-950/30 rounded-2xl border-2 border-emerald-200 dark:border-emerald-800 shadow-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-6 h-6 text-white" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent", children: "Your Retirement Projection" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/80 dark:bg-gray-900/80 rounded-xl border border-emerald-200 dark:border-emerald-800 hover:shadow-md transition-all duration-300 hover:scale-105", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-1 flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-4 h-4" }),
                        "Final Balance"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent", children: [
                        "$",
                        result.finalAmount.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                        "At age ",
                        retirementAge
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/80 dark:bg-gray-900/80 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-md transition-all duration-300 hover:scale-105", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-1 flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
                        "Investment Earnings"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent", children: [
                        "$",
                        result.totalEarnings.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Compound magic! ✨" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/80 dark:bg-gray-900/80 rounded-xl border border-purple-200 dark:border-purple-800 hover:shadow-md transition-all duration-300 hover:scale-105", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-1 flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-4 h-4" }),
                        "Total Contributions"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-purple-600 dark:text-purple-400", children: [
                        "$",
                        result.totalContributions.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Your hard work pays off" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/80 dark:bg-gray-900/80 rounded-xl border border-amber-200 dark:border-amber-800 hover:shadow-md transition-all duration-300 hover:scale-105", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-1 flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
                        "Monthly Income"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-amber-600 dark:text-amber-400", children: [
                        "$",
                        monthlyIncome.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Using 4% rule" })
                    ] })
                  ] }),
                  parseFloat(retirementGoal) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-4 bg-white/80 dark:bg-gray-900/80 rounded-xl border border-rose-200 dark:border-rose-800", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-4 h-4 text-rose-600" }),
                        "Goal Progress"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold text-rose-600 dark:text-rose-400", children: [
                        goalProgress.toFixed(1),
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-full bg-gradient-to-r from-rose-500 to-pink-600 transition-all duration-1000 ease-out rounded-full",
                        style: { width: `${Math.min(goalProgress, 100)}%` }
                      }
                    ) }),
                    result.finalAmount < parseFloat(retirementGoal) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-amber-800 dark:text-amber-300 mb-1", children: [
                        "💡 Need $",
                        result.monthlyNeeded.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
                        "/month to reach your goal"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-700 dark:text-amber-400", children: [
                        "That's $",
                        (result.monthlyNeeded - parseFloat(monthlyContribution || "0")).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
                        " more than your current contribution"
                      ] })
                    ] }),
                    result.finalAmount >= parseFloat(retirementGoal) && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
                      "Congratulations! You're on track to exceed your goal! 🎉"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AIAnalysis,
                  {
                    analysisRequest: {
                      calculatorType: "retirement",
                      data: {
                        currentAge: parseFloat(currentAge) || 30,
                        retirementAge: parseFloat(retirementAge) || 65,
                        currentSavings: parseFloat(currentSavings) || 0,
                        monthlyContribution: parseFloat(monthlyContribution) || 0,
                        expectedReturn: parseFloat(expectedReturn) || 7,
                        retirementGoal: parseFloat(retirementGoal) || result.finalAmount,
                        projectedSavings: result.finalAmount,
                        monthlyIncomeNeeded: result.finalAmount * 0.04 / 12
                      }
                    },
                    autoRun: true,
                    title: "AI Retirement Analysis",
                    description: "Get personalized retirement planning strategies and optimization recommendations based on your financial profile."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ExportShareButtons,
                  {
                    calculatorType: "retirement",
                    inputs: {
                      currentAge: parseFloat(currentAge) || 0,
                      retirementAge: parseFloat(retirementAge) || 0,
                      currentSavings: parseFloat(currentSavings) || 0,
                      monthlyContribution: parseFloat(monthlyContribution) || 0,
                      expectedReturn: parseFloat(expectedReturn) || 0,
                      retirementGoal: parseFloat(retirementGoal) || 0
                    },
                    results: {
                      finalAmount: result.finalAmount,
                      totalContributions: result.totalContributions,
                      totalEarnings: result.totalEarnings,
                      monthlyNeeded: result.monthlyNeeded
                    },
                    title: "Retirement Calculator Report"
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsettraSlot, { position: "middle", className: "my-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom duration-700 delay-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-blue-100 dark:border-blue-900/50 hover:shadow-xl transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-5 h-5 text-blue-600" }),
              "Pro Retirement Tips"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6 space-y-4", children: [
              { icon: TrendingUp, text: "Start early - compound interest is your superpower! Even $100/month at age 25 beats $500/month at age 45", color: "text-emerald-600" },
              { icon: Award, text: "Max out employer 401(k) match - it's literally free money. Never leave this on the table!", color: "text-purple-600" },
              { icon: Shield, text: "Diversify across stocks, bonds, and real estate. Don't put all eggs in one basket", color: "text-blue-600" },
              { icon: Target, text: "Aim for 10-12x your annual salary by retirement age for comfortable living", color: "text-amber-600" },
              { icon: Sparkles, text: "Review annually and increase contributions with raises. Pay yourself first!", color: "text-rose-600" }
            ].map((tip, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 p-3 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-transform duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(tip.icon, { className: `w-5 h-5 mt-0.5 ${tip.color} flex-shrink-0` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: tip.text })
            ] }, idx)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-100 dark:border-purple-900/50 hover:shadow-xl transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5 text-purple-600" }),
              "Common Retirement Mistakes"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6 space-y-4", children: [
              { icon: "⏰", text: "Delaying retirement savings - time is your biggest ally, don't waste it!", color: "bg-red-100 dark:bg-red-950/30" },
              { icon: "💸", text: "Withdrawing from retirement accounts early - penalties and lost growth hurt!", color: "bg-orange-100 dark:bg-orange-950/30" },
              { icon: "📊", text: "Being too conservative or aggressive - balance risk based on your age", color: "bg-yellow-100 dark:bg-yellow-950/30" },
              { icon: "🏥", text: "Ignoring healthcare costs - they can eat 20-30% of retirement income", color: "bg-blue-100 dark:bg-blue-950/30" },
              { icon: "📈", text: "Forgetting inflation - $1M today ≠ $1M in 30 years. Plan accordingly!", color: "bg-purple-100 dark:bg-purple-950/30" }
            ].map((mistake, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-3 p-3 ${mistake.color} rounded-lg border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-transform duration-300`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl flex-shrink-0", children: mistake.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: mistake.text })
            ] }, idx)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsettraSlot, { position: "middle", className: "my-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-indigo-100 dark:border-indigo-900/50 animate-in fade-in slide-in-from-bottom duration-700 delay-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl", children: "🎯 Understanding Retirement Planning: The Complete Guide" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6 space-y-6 text-base leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-indigo-600 dark:text-indigo-400", children: "What is Retirement Planning?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Retirement planning is the art and science of determining how much money you'll need to live comfortably after you stop working, and creating a strategic roadmap to get there. Think of it as building a financial bridge from today to your golden years - you need to know how long the bridge needs to be, how strong it must be, and what materials (investments) you'll use to construct it." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The beauty of retirement planning lies in its simplicity once you understand the core principles. It's not about complex formulas or Wall Street wizardry - it's about consistent saving, smart investing, and the magical power of compound interest working in your favor over decades. Every dollar you invest today becomes a small money-making machine, working 24/7 to build your future wealth." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "Modern retirement planning goes beyond just accumulating money. It encompasses tax optimization, healthcare planning, estate considerations, and lifestyle design. The goal isn't just to have enough money - it's to have the ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "right kind" }),
                " of money in the ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "right places" }),
                " to support the retirement lifestyle you've dreamed about."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-blue-600 dark:text-blue-400", children: "The Power of Compound Interest: Your Money's Superpower" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: `Albert Einstein allegedly called compound interest "the eighth wonder of the world." Here's why: when you invest $1,000 at 8% annual return, you don't just earn $80 per year forever. In the second year, you earn interest on your interest too! That $1,000 becomes $1,080, then $1,166, then $1,260, and it keeps accelerating.` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4", children: [
                "Let's get real with numbers: If you invest $500 per month starting at age 25 with a 7% return, you'll have approximately ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$1.1 million" }),
                " by age 65. Start at age 35 with the same contribution? You'll have only around ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$500,000" }),
                ". That 10-year delay costs you $600,000! Time is literally money when it comes to retirement."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white dark:bg-gray-900 rounded-lg border border-blue-300 dark:border-blue-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-emerald-600 dark:text-emerald-400 mb-1", children: "Start at 25 (40 years)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: "$1,142,811" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "$500/mo @ 7% return" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white dark:bg-gray-900 rounded-lg border border-blue-300 dark:border-blue-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-amber-600 dark:text-amber-400 mb-1", children: "Start at 35 (30 years)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: "$566,764" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "$500/mo @ 7% return" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-purple-600 dark:text-purple-400", children: "How Much Do You Really Need to Retire?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4", children: [
                "The million-dollar question (sometimes literally!) is: how much is enough? Financial planners traditionally use the ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: '"4% rule"' }),
                " - you can withdraw 4% of your retirement savings annually with minimal risk of running out. Want $50,000/year in retirement? You'll need about $1.25 million ($50,000 ÷ 0.04)."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4", children: [
                "But here's the nuance: your actual needs depend on your lifestyle, location, health, and goals. Planning to travel the world? You might need more. Have a paid-off house and modest needs? You might need less. A better approach is the ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "replacement ratio" }),
                " - aim to replace 70-80% of your pre-retirement income. If you earn $100,000 now, target $70,000-$80,000 in retirement."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border border-purple-300 dark:border-purple-700 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-2", children: "💡 Quick Retirement Savings Benchmarks:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Age 30:" }),
                    " 1x annual salary saved"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Age 40:" }),
                    " 3x annual salary saved"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Age 50:" }),
                    " 6x annual salary saved"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Age 60:" }),
                    " 8x annual salary saved"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Age 67:" }),
                    " 10x annual salary saved"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-rose-600 dark:text-rose-400", children: "Retirement Account Types: Choose Your Weapons Wisely" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30 rounded-lg border border-rose-200 dark:border-rose-800", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🏢 401(k) - The Workplace Powerhouse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
                    "Your employer-sponsored retirement plan is often your best starting point. Why? ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Employer matching" }),
                    " - typically 3-6% of your salary in free money! Plus, contributions are pre-tax, lowering your current tax bill while your money grows tax-deferred."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2025 Limit:" }),
                    " $23,000 ($30,500 if age 50+)"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border border-blue-200 dark:border-blue-800", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🎯 Traditional IRA - The Tax Deduction Champion" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: "Individual Retirement Accounts give you more investment control than 401(k)s. Traditional IRAs offer tax deductions today, with taxes due when you withdraw in retirement. Perfect if you expect to be in a lower tax bracket later." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2025 Limit:" }),
                    " $7,000 ($8,000 if age 50+)"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border border-emerald-200 dark:border-emerald-800", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "✨ Roth IRA - The Tax-Free Future" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: "Pay taxes now, enjoy tax-free withdrawals forever! Roth IRAs are magical for young earners in lower tax brackets. Your money grows tax-free, and qualified withdrawals in retirement are 100% tax-free. No required minimum distributions either!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2025 Limit:" }),
                    " $7,000 ($8,000 if age 50+) - Income limits apply"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 rounded-lg border border-amber-200 dark:border-amber-800", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "💼 SEP IRA & Solo 401(k) - The Entrepreneur's Edge" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2", children: "Self-employed or small business owner? These accounts let you contribute way more - up to $69,000 in 2025! SEP IRAs are simpler; Solo 401(k)s offer Roth options and higher contribution flexibility." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Perfect for:" }),
                    " Freelancers, consultants, gig workers, small business owners"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-indigo-600 dark:text-indigo-400", children: "Investment Strategy: Age-Based Asset Allocation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Your investment mix should evolve as you age. The classic rule of thumb: subtract your age from 110 to get your stock percentage. At age 30, that's 80% stocks, 20% bonds. At age 60, it's 50/50. Why? You have less time to recover from market downturns as retirement approaches." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4", children: [
                "But modern life expectancy and market conditions challenge old rules. Many financial advisors now recommend more aggressive allocations, especially with people retiring at 65 but potentially living to 95+. A ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "target-date fund" }),
                " automatically adjusts your mix - set it and (mostly) forget it!"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-emerald-100 dark:bg-emerald-950/30 rounded-lg border border-emerald-300 dark:border-emerald-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-emerald-700 dark:text-emerald-400 mb-2", children: "Ages 20-40" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold mb-1", children: "80-90%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Stocks (aggressive growth)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-blue-100 dark:bg-blue-950/30 rounded-lg border border-blue-300 dark:border-blue-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-blue-700 dark:text-blue-400 mb-2", children: "Ages 40-60" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold mb-1", children: "60-70%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Stocks (balanced)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-amber-100 dark:bg-amber-950/30 rounded-lg border border-amber-300 dark:border-amber-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-amber-700 dark:text-amber-400 mb-2", children: "Ages 60+" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold mb-1", children: "40-50%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Stocks (conservative)" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "p-4 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950/30 dark:via-pink-950/30 dark:to-rose-950/30 rounded-xl border border-purple-200 dark:border-purple-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-purple-600 dark:text-purple-400", children: "Advanced Strategies for Maximum Growth" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2", children: "🚀 The Mega Backdoor Roth Strategy" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If your 401(k) allows after-tax contributions and in-plan conversions, you can contribute an additional $46,000 (2025 limit) to a Roth account. This advanced move is perfect for high earners who exceed Roth IRA income limits but want tax-free growth." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2", children: "💰 Tax-Loss Harvesting" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "In taxable accounts, sell losing investments to offset gains and reduce your tax bill by up to $3,000/year. Then immediately buy similar (but not identical) investments to maintain your asset allocation. Free tax savings!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2", children: "📊 Asset Location Optimization" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Not just allocation - location matters! Keep tax-inefficient investments (bonds, REITs) in tax-deferred accounts, and tax-efficient investments (index funds, growth stocks) in taxable accounts. This can add 0.5-1% annual return boost." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2", children: "🎯 The Roth Conversion Ladder" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Planning early retirement? Convert traditional IRA money to Roth IRA gradually during low-income years. After 5 years, you can access converted amounts penalty-free before age 59½. Perfect for FIRE (Financial Independence, Retire Early) enthusiasts!" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-teal-600 dark:text-teal-400", children: "Healthcare in Retirement: The Hidden Cost Monster" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4", children: [
                "Here's a sobering fact: the average retired couple needs approximately ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$315,000" }),
                " for healthcare costs in retirement (Fidelity, 2024). That's not including long-term care! Medicare covers a lot, but not everything - there are premiums, deductibles, copays, and gaps."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "If you retire before 65, you'll need a bridge to Medicare. Options include COBRA (expensive but comprehensive), ACA marketplace plans (income-dependent subsidies available), or spousal coverage. After 65, budget for Medicare Part B ($174.70/mo in 2024), Part D (drug coverage), and Medigap or Medicare Advantage plans." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pro tip:" }),
                " Health Savings Accounts (HSAs) are retirement secret weapons! Contribute pre-tax, grow tax-free, withdraw tax-free for medical expenses. After 65, you can use HSA funds for anything (taxed like IRA). It's the only triple-tax-advantaged account!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-orange-600 dark:text-orange-400", children: "Social Security: When to Claim Makes a Huge Difference" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "You can claim Social Security as early as 62, but here's the catch: taking benefits early permanently reduces your monthly amount by up to 30%! Wait until your Full Retirement Age (67 for most people) to get 100%. Delay until 70? Get 124% of your full benefit - an 8% increase per year you wait." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The break-even analysis: If you claim at 62 vs 70, you'll collect more total benefits if you live past roughly age 78-80. Given increasing life expectancies, waiting often makes financial sense - especially if you're healthy, married, or have longevity in your family." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-orange-100 dark:bg-orange-950/30 rounded-lg border border-orange-300 dark:border-orange-700 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-2", children: "Social Security Claiming Strategy Example:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Claim at 62:" }),
                    " $1,750/month ($21,000/year)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Claim at 67:" }),
                    " $2,500/month ($30,000/year)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Claim at 70:" }),
                    " $3,100/month ($37,200/year)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "pt-2 border-t border-orange-300 dark:border-orange-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Lifetime difference (age 85):" }),
                    " Waiting to 70 = $150,000+ more!"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-pink-600 dark:text-pink-400", children: "Retirement Withdrawal Strategies: Making Your Money Last" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4", children: [
                "The 4% rule is a starting point, but dynamic withdrawal strategies can extend your money's lifespan. The ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "bucket strategy" }),
                " divides your portfolio into three buckets: cash for 1-2 years (safety), bonds for years 3-10 (stability), and stocks for 10+ years (growth). This lets you ride out market downturns without selling stocks at losses."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4", children: [
                "Another approach: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "variable percentage withdrawal" }),
                ". In good market years, take 5%. In down years, take 3%. This flexibility, combined with minor lifestyle adjustments, can significantly reduce the risk of running out of money. Studies show this can support a 30-year retirement with 90%+ success rates."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Don't forget Required Minimum Distributions (RMDs)! Starting at age 73, you must withdraw from traditional IRAs and 401(k)s whether you need the money or not. Plan for the tax impact - large RMDs can push you into higher tax brackets. Roth IRAs have no RMDs during your lifetime, another reason they're powerful!" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "p-4 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl border border-indigo-200 dark:border-indigo-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-indigo-600 dark:text-indigo-400", children: "Inflation: The Silent Retirement Killer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: `At just 3% annual inflation, your purchasing power cuts in half every 24 years. That $50,000/year you need today? It'll need to be $81,000 in 20 years to buy the same lifestyle. This is why keeping 100% in "safe" bonds can be dangerous - you're guaranteed to lose purchasing power.` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Combat inflation by maintaining stock exposure even in retirement. Dividend-growing stocks from companies like Coca-Cola, Johnson & Johnson, and Procter & Gamble have increased dividends for 50+ consecutive years, outpacing inflation. Treasury Inflation-Protected Securities (TIPS) and I-Bonds also provide direct inflation protection." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-3 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white dark:bg-gray-900 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-red-600 dark:text-red-400 mb-1", children: "Cost of $50k Today" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                    "• In 10 years: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$67,195" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                    "• In 20 years: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$90,306" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                    "• In 30 years: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$121,363" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white dark:bg-gray-900 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-emerald-600 dark:text-emerald-400 mb-1", children: "Protection Strategies" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "• Keep 40-60% in stocks" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "• Buy TIPS and I-Bonds" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "• Invest in dividend growers" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-cyan-600 dark:text-cyan-400", children: "The FIRE Movement: Retire Decades Early" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Financial Independence, Retire Early (FIRE) followers save 50-70% of their income to retire in their 30s or 40s. The math: if you save 50% of your income and invest at 7% return, you can retire in about 17 years. Save 70%? Retire in just 8.5 years! It requires aggressive saving and often frugal living, but it's mathematically sound." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4", children: [
                "There are different flavors: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Lean FIRE" }),
                " (minimal expenses, $40k/year), ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Regular FIRE" }),
                " (comfortable middle-class lifestyle, $60-80k/year), and ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fat FIRE" }),
                " (luxury retirement, $100k+/year). Calculate your FIRE number: annual expenses × 25. Want to spend $50k/year? You need $1.25 million invested."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The key to FIRE isn't just the math - it's optimizing your life for happiness per dollar spent. Many FIRE adherents report greater life satisfaction not from spending less, but from spending intentionally on what truly matters to them. Retirement becomes less about age and more about having options." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-violet-600 dark:text-violet-400", children: "Retirement Lifestyle Design: It's Not Just About Money" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4", children: [
                "Financial planning is half the battle - the other half is emotional preparation. Many retirees struggle with loss of identity, purpose, and social connections that work provided. The happiest retirees plan not just their finances, but their ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "time" }),
                "."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: 'Create a "retirement resume" - list hobbies, volunteer opportunities, travel goals, and learning pursuits. Budget not just money but hours per week for each. Research shows retirees with structured routines, social engagement, and purpose-driven activities report 40% higher life satisfaction than those who "wing it."' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Consider geographic arbitrage - retiring in lower cost-of-living areas (or countries!) can stretch your dollars 2-3x. $3,000/month goes much further in Portugal, Mexico, or Thailand than in San Francisco. But don't underestimate the value of being near family and friends - money can't buy those connections." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-emerald-600 dark:text-emerald-400", children: "Your Action Plan: Start Today, Not Tomorrow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Retirement planning isn't a one-time event - it's a lifelong journey that starts with a single step. The best time to start was 10 years ago. The second best time is right now, today, this moment." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold", children: "1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Calculate Your Number" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Use this calculator to determine your retirement savings goal and monthly contribution needed" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold", children: "2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Maximize Free Money" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Contribute at least enough to get full employer 401(k) match - never leave this on the table" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold", children: "3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Automate Everything" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Set up automatic contributions - if you don't see it, you won't spend it" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold", children: "4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Increase Annually" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Boost contributions by 1-2% each year or with every raise - you won't miss it" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold", children: "5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Review & Rebalance" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Check your progress every 6-12 months and adjust asset allocation as needed" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-blue-600 dark:text-blue-400", children: "Final Thoughts: Your Future Self Will Thank You" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Every dollar you invest in your retirement is a gift to your future self. It's choosing future freedom over present consumption. Yes, it requires discipline. Yes, it means saying no to some things today. But imagine the peace of mind knowing you're building a life where work becomes optional, not obligatory." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The retirement landscape will continue evolving - tax laws change, investment vehicles emerge, life expectancies shift. But the fundamentals remain constant: start early, save consistently, invest wisely, and stay the course. Market crashes will happen. Doubts will creep in. Stay focused on your long-term vision." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-lg text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent py-4", children: "Your retirement isn't something that happens to you - it's something you create, one contribution at a time. Start building your dream retirement today! 🎯✨" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "bottom", className: "mt-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsettraSlot, { position: "bottom", className: "mt-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { position: "bottom", className: "mt-6" })
      ] })
    }
  );
}
export {
  RetirementCalculator as default
};
