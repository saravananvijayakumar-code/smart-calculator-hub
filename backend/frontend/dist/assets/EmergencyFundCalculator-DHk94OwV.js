import { ae as useFormatting, r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, c as Shield, k as CardContent, a4 as Label, V as Input, T as TrendingUp, a5 as Info } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { A as AIAnalysis } from "./AIAnalysis-B-4zh-eH.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { A as AdsterraSlot } from "./AdsterraSlot-DCXIaKPD.js";
import { A as AdsettraSlot } from "./AdsettraSlot-eVTrqIXX.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./check-DTsA1WpX.js";
import "./EnhancedAIAnalysis-BaYCd8m5.js";
import "./brain-CSngUEN8.js";
import "./target-4JeIm6Yk.js";
import "./circle-check-big-B8N3lfE-.js";
import "./arrow-right-Bjdtr8dz.js";
import "./lightbulb-DKPyzLdJ.js";
import "./tabs-t5L32f7o.js";
import "./share-2-SpOWc355.js";
import "./link-C11IgQ5M.js";
import "./copy-BqV-1o4k.js";
import "./twitter-CFAqYlq6.js";
import "./facebook-BX8Qa6cK.js";
import "./linkedin-D9e3uSZB.js";
import "./message-circle-DZtFORhh.js";
import "./mail-DX6y6Mo7.js";
function EmergencyFundCalculator() {
  const { formatCurrency, getCurrencySymbol } = useFormatting();
  const [monthlyExpenses, setMonthlyExpenses] = reactExports.useState("");
  const [currentSavings, setCurrentSavings] = reactExports.useState("");
  const [monthlySavings, setMonthlySavings] = reactExports.useState("");
  const [months, setMonths] = reactExports.useState("6");
  const [jobSecurity, setJobSecurity] = reactExports.useState("");
  const [dependents, setDependents] = reactExports.useState("");
  const [result, setResult] = reactExports.useState({
    recommendedAmount: 0,
    currentShortfall: 0,
    monthsToGoal: 0,
    isValid: false,
    monthsOfExpensesCovered: 0,
    adequacyLevel: "insufficient"
  });
  const [scenarios, setScenarios] = reactExports.useState([]);
  const calculateEmergencyFund = () => {
    const expenses = parseFloat(monthlyExpenses);
    const current = parseFloat(currentSavings) || 0;
    const savings = parseFloat(monthlySavings) || 0;
    const monthsNum = parseFloat(months);
    if (expenses > 0 && monthsNum > 0) {
      const recommendedAmount = expenses * monthsNum;
      const currentShortfall = Math.max(0, recommendedAmount - current);
      const monthsToGoal = savings > 0 ? Math.ceil(currentShortfall / savings) : 0;
      const monthsOfExpensesCovered = current / expenses;
      let adequacyLevel;
      if (monthsOfExpensesCovered < 1) adequacyLevel = "insufficient";
      else if (monthsOfExpensesCovered < 3) adequacyLevel = "minimal";
      else if (monthsOfExpensesCovered < 6) adequacyLevel = "adequate";
      else adequacyLevel = "excellent";
      setResult({
        recommendedAmount,
        currentShortfall,
        monthsToGoal,
        isValid: true,
        monthsOfExpensesCovered,
        adequacyLevel
      });
      if (currentShortfall > 0) {
        const savingsScenarios = [
          {
            monthlyAmount: currentShortfall / 60,
            // 5 years
            timeToGoal: 60,
            description: "Conservative (5 years)"
          },
          {
            monthlyAmount: currentShortfall / 36,
            // 3 years
            timeToGoal: 36,
            description: "Moderate (3 years)"
          },
          {
            monthlyAmount: currentShortfall / 24,
            // 2 years
            timeToGoal: 24,
            description: "Aggressive (2 years)"
          },
          {
            monthlyAmount: currentShortfall / 12,
            // 1 year
            timeToGoal: 12,
            description: "Very Aggressive (1 year)"
          }
        ];
        setScenarios(savingsScenarios);
      } else {
        setScenarios([]);
      }
    } else {
      setResult({
        recommendedAmount: 0,
        currentShortfall: 0,
        monthsToGoal: 0,
        isValid: false,
        monthsOfExpensesCovered: 0,
        adequacyLevel: "insufficient"
      });
      setScenarios([]);
    }
  };
  reactExports.useEffect(() => {
    calculateEmergencyFund();
  }, [monthlyExpenses, currentSavings, monthlySavings, months]);
  const getRecommendedMonths = () => {
    let baseMonths = 6;
    if (jobSecurity === "unstable") baseMonths += 3;
    else if (jobSecurity === "stable") baseMonths -= 1;
    else if (jobSecurity === "very_stable") baseMonths -= 2;
    if (dependents === "many") baseMonths += 2;
    else if (dependents === "some") baseMonths += 1;
    return Math.max(3, Math.min(12, baseMonths));
  };
  const tips = [
    "Start with a small emergency fund of $1,000 if you have high-interest debt",
    "Aim for 3-6 months of expenses for most people, more for unstable income",
    "Keep emergency funds in high-yield savings accounts for accessibility",
    "Don't invest emergency funds in stocks or volatile investments",
    "Review and adjust your emergency fund as life circumstances change"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Emergency Fund Calculator | How Much Emergency Savings Do You Need?",
      description: "Calculate the ideal emergency fund size based on your expenses, job security, and family situation. Get personalized savings strategies and timelines to build financial security.",
      keywords: "emergency fund calculator, emergency savings calculator, financial safety net, how much emergency fund, savings goal calculator, financial security planning",
      tips,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "top", className: "mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsettraSlot, { position: "top", className: "mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Emergency Fund Calculator" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "monthlyExpenses", children: [
                  "Monthly Expenses (",
                  getCurrencySymbol(),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "monthlyExpenses",
                    type: "number",
                    placeholder: "4000",
                    value: monthlyExpenses,
                    onChange: (e) => setMonthlyExpenses(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "currentSavings", children: [
                  "Current Emergency Savings (",
                  getCurrencySymbol(),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "currentSavings",
                    type: "number",
                    placeholder: "2000",
                    value: currentSavings,
                    onChange: (e) => setCurrentSavings(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "monthlySavings", children: [
                  "Monthly Savings Ability (",
                  getCurrencySymbol(),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "monthlySavings",
                    type: "number",
                    placeholder: "500",
                    value: monthlySavings,
                    onChange: (e) => setMonthlySavings(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "months", children: "Target Months of Expenses" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: months, onValueChange: setMonths, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select months" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "3", children: "3 months" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "6", children: "6 months (Recommended)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "9", children: "9 months" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "12", children: "12 months" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "jobSecurity", children: "Job Security Level" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: jobSecurity, onValueChange: setJobSecurity, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select job security" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "very_stable", children: "Very Stable (Government, Tenure)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "stable", children: "Stable (Corporate, Union)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "average", children: "Average" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "unstable", children: "Unstable (Contract, Seasonal)" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "dependents", children: "Number of Dependents" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: dependents, onValueChange: setDependents, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select dependents" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: "None" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "some", children: "1-2 Dependents" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "many", children: "3+ Dependents" })
                  ] })
                ] })
              ] })
            ] }),
            jobSecurity && dependents && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-50 p-4 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Personalized Recommendation:" }),
              " Based on your job security and dependents, consider saving for ",
              getRecommendedMonths(),
              " months of expenses."
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsettraSlot, { position: "middle", className: "my-6" }),
        result.isValid && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIAnalysis,
            {
              analysisRequest: {
                calculatorType: "emergency-fund",
                data: {
                  monthlyExpenses: parseFloat(monthlyExpenses) || 0,
                  targetMonths: parseFloat(months) || 6,
                  currentSavings: parseFloat(currentSavings) || 0,
                  targetAmount: result.recommendedAmount,
                  shortfall: result.currentShortfall,
                  monthlyContribution: parseFloat(monthlySavings) || 0
                }
              },
              autoRun: true,
              title: "AI Emergency Fund Analysis",
              description: "Get personalized strategies to build and optimize your emergency fund based on your situation."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "emergency-fund",
              inputs: {
                monthlyExpenses: parseFloat(monthlyExpenses) || 0,
                months: parseFloat(months) || 6,
                currentSavings: parseFloat(currentSavings) || 0,
                monthlySavings: parseFloat(monthlySavings) || 0
              },
              results: {
                recommendedAmount: result.recommendedAmount,
                currentShortfall: result.currentShortfall,
                monthsToGoal: result.monthsToGoal,
                adequacyLevel: result.adequacyLevel
              },
              title: "Emergency Fund Calculator Report"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `border-2 ${result.adequacyLevel === "excellent" ? "border-green-200 bg-green-50" : result.adequacyLevel === "adequate" ? "border-blue-200 bg-blue-50" : result.adequacyLevel === "minimal" ? "border-yellow-200 bg-yellow-50" : "border-red-200 bg-red-50"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: `text-lg font-bold ${result.adequacyLevel === "excellent" ? "text-green-800" : result.adequacyLevel === "adequate" ? "text-blue-800" : result.adequacyLevel === "minimal" ? "text-yellow-800" : "text-red-800"}`, children: [
              "Emergency Fund Status: ",
              result.adequacyLevel.charAt(0).toUpperCase() + result.adequacyLevel.slice(1)
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-green-600", children: formatCurrency(result.recommendedAmount) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Target Amount" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600", children: formatCurrency(parseFloat(currentSavings) || 0) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Current Savings" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-orange-600", children: formatCurrency(result.currentShortfall) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Amount Needed" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-purple-600", children: [
                    result.monthsOfExpensesCovered.toFixed(1),
                    " months"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Current Coverage" })
                ] })
              ] }),
              result.monthsToGoal > 0 && parseFloat(monthlySavings) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-4 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm", children: [
                "At ",
                formatCurrency(parseFloat(monthlySavings)),
                "/month, you'll reach your goal in",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                  result.monthsToGoal,
                  " months"
                ] }),
                result.monthsToGoal > 12 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  " (",
                  (result.monthsToGoal / 12).toFixed(1),
                  " years)"
                ] })
              ] }) })
            ] })
          ] }),
          scenarios.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Savings Strategy Options" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: scenarios.map((scenario, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 border rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm mb-2", children: scenario.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-blue-600", children: formatCurrency(scenario.monthlyAmount) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "per month" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                scenario.timeToGoal,
                " months to goal"
              ] })
            ] }, index)) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Emergency Fund Size Guidelines" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-3", children: "Recommended by Situation:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Single income, stable job:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "3-6 months" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Dual income, stable jobs:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "3-4 months" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Variable income:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: "6-12 months" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Self-employed:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: "6-12 months" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "High medical expenses:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: "9-12 months" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-3", children: "Building Strategy:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-blue-600 rounded-full" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Start with $1,000 minimum fund" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-blue-600 rounded-full" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Pay off high-interest debt first" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-blue-600 rounded-full" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Build to 1 month of expenses" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-blue-600 rounded-full" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Gradually increase to target" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-blue-600 rounded-full" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Automate savings contributions" })
                  ] })
                ] })
              ] })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Complete Guide to Emergency Fund Planning" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "An emergency fund represents one of the most critical components of personal financial security, providing a financial buffer against unexpected expenses, job loss, medical emergencies, or major life disruptions. Building and maintaining an adequate emergency fund is essential for financial stability and peace of mind, preventing the need to rely on high-interest debt during difficult times. This comprehensive guide covers everything you need to know about emergency fund planning, from determining the right size to optimizing your savings strategy and choosing appropriate accounts." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Why Emergency Funds Are Essential" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Emergency funds serve as financial shock absorbers, protecting your long-term financial goals from unexpected events that could otherwise derail your progress. Without an emergency fund, people often resort to credit cards, personal loans, or early retirement account withdrawals to handle crises, creating additional financial stress and long-term consequences. Studies show that households with emergency funds are significantly less likely to experience financial hardship during economic downturns or personal emergencies, making this the foundation of sound financial planning." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Determining Your Emergency Fund Size" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The traditional recommendation of 3-6 months of expenses serves as a starting point, but your ideal emergency fund size depends on personal circumstances including job security, income stability, health status, and family responsibilities. Government employees or those with union protection might need less, while freelancers, commissioned sales professionals, or those in volatile industries should aim for larger reserves. Additionally, homeowners typically need larger emergency funds than renters due to potential major repair expenses." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Emergency Fund Size Factors:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Job Security:" }),
                    " Stable employment = 3-4 months, Unstable = 6-12 months"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Income Variability:" }),
                    " Fixed salary = 3-6 months, Variable = 6-12 months"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Health Factors:" }),
                    " Good health = Standard, Chronic conditions = Extra 2-3 months"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Dependents:" }),
                    " Single = 3-6 months, Large family = 6-9 months"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Home Ownership:" }),
                    " Renter = Standard, Homeowner = Add 1-2 months"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Building Your Emergency Fund Strategy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Building an emergency fund requires a systematic approach that balances urgency with financial reality. For those with high-interest debt, financial experts recommend building a small starter emergency fund ($1,000-2,500) before aggressively paying down debt, then completing the full emergency fund afterward. This approach prevents the cycle of debt accumulation while addressing immediate emergency needs. Once debt is managed, focus entirely on building the complete emergency fund before pursuing other financial goals." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Choosing the Right Account for Emergency Funds" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Emergency funds require a careful balance between accessibility, safety, and growth. High-yield savings accounts typically offer the best combination of these factors, providing FDIC insurance, easy access, and competitive interest rates. Money market accounts, certificates of deposit with penalty considerations, and even some government bond funds may be appropriate for portions of larger emergency funds. The key is avoiding investments with principal risk or significant liquidity constraints that could compromise the fund's primary purpose." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Automating Emergency Fund Contributions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Automation represents the most effective strategy for building emergency funds consistently. Setting up automatic transfers immediately after payday ensures savings happen before discretionary spending can interfere. Many successful savers use the "pay yourself first" principle, treating emergency fund contributions like any other essential bill. Even modest automated contributions of $50-100 per month can build substantial emergency funds over time, with the psychological benefit of removing the decision-making burden from the savings process.' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Emergency Fund vs. Other Financial Priorities" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Emergency fund building must be balanced against other financial priorities including debt repayment, retirement savings, and major purchases. While conventional wisdom suggests completing emergency funds before investing, some financial advisors recommend simultaneous approaches for those with employer 401(k) matches or extremely stable employment. The key is ensuring adequate liquidity for genuine emergencies while not sacrificing significant long-term growth opportunities or allowing high-interest debt to compound." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Advanced Emergency Fund Strategies and Optimization" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Tiered Emergency Fund Approach" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sophisticated emergency fund strategies often employ tiered approaches that balance accessibility with returns. The first tier might include 1-2 months of expenses in immediately accessible checking or savings accounts for urgent needs. The second tier could hold 2-4 months in high-yield savings accounts that may take 1-2 days to access. A third tier might include longer-term vehicles like short-term CDs or government bond funds for extended unemployment scenarios, accepting some liquidity constraints for higher returns." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Credit Lines as Emergency Fund Supplements" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Home equity lines of credit (HELOCs) and personal credit lines can supplement traditional emergency funds for homeowners with significant equity and stable income. These credit facilities provide additional liquidity without requiring large cash reserves, potentially allowing more aggressive investment of excess funds. However, credit lines should never replace core emergency savings, as they may become unavailable precisely when needed most during economic downturns or personal financial stress." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Tax-Advantaged Emergency Fund Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Roth IRA accounts can serve dual purposes as retirement savings and emergency fund supplements, since contributions can be withdrawn penalty-free at any time. This strategy works particularly well for young professionals who struggle to balance emergency fund building with retirement savings. However, this approach requires discipline to avoid treating retirement accounts as general savings, and withdrawn contributions lose their tax-advantaged growth potential permanently." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Emergency Fund Optimization Checklist:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Calculate precise monthly expenses including insurance, utilities, and debt payments" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Assess job security and income stability realistically" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider family health history and potential medical expenses" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Evaluate homeownership responsibilities and potential major repairs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Choose appropriate account types balancing access and returns" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Automate contributions to build the fund systematically" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Review and adjust fund size as life circumstances change" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "When and How to Use Emergency Funds" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Defining what constitutes a genuine emergency helps preserve the fund for its intended purpose. True emergencies typically involve unexpected expenses that threaten financial stability, such as job loss, major medical expenses, essential home repairs, or urgent travel for family emergencies. Non-emergencies include predictable expenses like annual insurance premiums, desired purchases, investment opportunities, or vacation funding. Establishing clear criteria helps maintain fund integrity and ensures resources remain available for genuine crises." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Replenishing Emergency Funds After Use" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "After using emergency funds, immediate replenishment should become the highest financial priority, temporarily superseding other goals including additional investments or major purchases. The psychological and financial security provided by a complete emergency fund is too valuable to leave depleted for extended periods. Consider temporarily reducing other savings goals or increasing income through side work to rebuild the fund quickly, restoring full financial security and peace of mind." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Emergency Funds for Different Life Stages" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Emergency fund needs evolve throughout different life stages, requiring periodic reassessment and adjustment. Young professionals might start with smaller funds focused on job transition support, while parents need larger reserves for family medical emergencies and childcare disruptions. Pre-retirees should consider larger emergency funds to bridge potential early retirement or unexpected healthcare costs. Retirees may need different emergency fund strategies that account for fixed incomes and potentially higher healthcare expenses." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "International Considerations for Emergency Funds" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Expatriates and frequent international travelers face unique emergency fund challenges including currency risk, international transfer delays, and varying healthcare systems. These individuals may benefit from maintaining emergency funds in multiple currencies or countries, ensuring access regardless of location. Travel insurance, international health coverage, and emergency evacuation policies can supplement traditional emergency funds for those with significant international exposure." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Technology and Emergency Fund Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Modern technology offers tools to optimize emergency fund management including automatic savings apps, high-yield online banks, and financial planning software that can model different emergency scenarios. Mobile banking ensures access to funds from anywhere, while budget tracking apps help monitor both fund building progress and spending patterns that inform fund size decisions. However, technology should enhance rather than complicate the fundamental goal of maintaining accessible, secure emergency reserves." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Frequently Asked Questions" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Should I build an emergency fund or pay off debt first?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Start with a small emergency fund ($1,000-2,500) to avoid creating new debt during emergencies, then focus on high-interest debt payoff. After eliminating high-interest debt, build your full emergency fund before pursuing other goals." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Where should I keep my emergency fund?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "High-yield savings accounts typically offer the best balance of accessibility, safety, and returns. Consider online banks offering competitive rates while maintaining FDIC insurance. Avoid investments with principal risk or significant withdrawal penalties." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How much should I save if I'm self-employed?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Self-employed individuals should target 6-12 months of expenses due to irregular income and limited safety nets. Consider higher amounts if your industry is seasonal or cyclical, and ensure the fund covers both personal and business emergency needs." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Can I use my emergency fund for a good investment opportunity?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No, emergency funds should remain dedicated to genuine emergencies. Investment opportunities, no matter how attractive, don't qualify as emergencies. Protect your financial security by maintaining fund integrity and pursuing investments with separate resources." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Should I count my Roth IRA contributions as part of my emergency fund?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Roth IRA contributions can serve as emergency fund supplements since they're accessible penalty-free, but shouldn't replace dedicated emergency savings. This strategy works for young savers balancing multiple goals, but requires discipline to preserve retirement savings." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How often should I review my emergency fund size?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Review your emergency fund annually or after major life changes like job changes, marriage, divorce, home purchase, or having children. Ensure the fund size still aligns with your current expenses, income stability, and risk factors." })
              ] })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Important Information & Disclaimer" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator provides estimates only and should not be relied upon for final financial planning decisions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Emergency fund needs vary significantly based on personal circumstances and risk tolerance." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Consider consulting with a financial advisor for personalized emergency fund strategies." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Account interest rates and fees can impact the growth and accessibility of emergency funds." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Emergency fund guidelines may need adjustment based on changing life circumstances." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator doesn't account for inflation's impact on long-term emergency fund adequacy." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Actual emergency scenarios may require different amounts than calculated estimates." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Balance emergency fund building with other important financial goals like debt payoff and retirement." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Results are estimates only and actual emergency fund needs may vary from calculations shown." })
          ] }) })
        ] })
      ] })
    }
  );
}
export {
  EmergencyFundCalculator as default
};
