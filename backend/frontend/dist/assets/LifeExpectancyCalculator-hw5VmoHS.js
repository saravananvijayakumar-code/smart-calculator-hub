import { r as reactExports, Q as useToast, j as jsxRuntimeExports, S as SEOHead, d as Clock, f as Card, g as CardHeader, h as CardTitle, H as Heart, i as CardDescription, k as CardContent, a4 as Label, V as Input, a6 as Alert, q as TriangleAlert, a7 as AlertDescription, B as Button, a8 as Sparkles, T as TrendingUp, A as Activity } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { P as Progress } from "./progress-BKzT_jkA.js";
import { S as Separator } from "./separator-63Q9JacM.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { A as AdsterraSlot } from "./AdsterraSlot-DCXIaKPD.js";
import { A as AdsettraSlot } from "./AdsettraSlot-eVTrqIXX.js";
import { C as Cake } from "./cake-BNA8mCMA.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./check-DTsA1WpX.js";
import "./share-2-SpOWc355.js";
import "./link-C11IgQ5M.js";
import "./copy-BqV-1o4k.js";
import "./twitter-CFAqYlq6.js";
import "./facebook-BX8Qa6cK.js";
import "./linkedin-D9e3uSZB.js";
import "./message-circle-DZtFORhh.js";
import "./mail-DX6y6Mo7.js";
function LifeExpectancyCalculator() {
  const [age, setAge] = reactExports.useState("");
  const [gender, setGender] = reactExports.useState("");
  const [smokingStatus, setSmokingStatus] = reactExports.useState("");
  const [exerciseFrequency, setExerciseFrequency] = reactExports.useState("");
  const [diet, setDiet] = reactExports.useState("");
  const [familyHistory, setFamilyHistory] = reactExports.useState("");
  const [stressLevel, setStressLevel] = reactExports.useState("");
  const [results, setResults] = reactExports.useState(null);
  const [isCalculating, setIsCalculating] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [showAnimation, setShowAnimation] = reactExports.useState(false);
  useToast();
  const handleCalculate = () => {
    const currentAge = parseInt(age);
    if (!age || currentAge < 1 || currentAge > 120) {
      setError("Please enter a valid age (1-120)");
      return;
    }
    if (!gender) {
      setError("Please select your gender");
      return;
    }
    if (!smokingStatus) {
      setError("Please select your smoking status");
      return;
    }
    if (!exerciseFrequency) {
      setError("Please select your exercise frequency");
      return;
    }
    if (!diet) {
      setError("Please select your diet quality");
      return;
    }
    if (!familyHistory) {
      setError("Please select your family history");
      return;
    }
    if (!stressLevel) {
      setError("Please select your stress level");
      return;
    }
    setError(null);
    setIsCalculating(true);
    setShowAnimation(false);
    setTimeout(() => {
      let baseLifeExpectancy = gender === "male" ? 76 : 81;
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      const birthYear = currentYear - currentAge;
      const healthFactors = [];
      let totalAdjustment = 0;
      if (smokingStatus === "never") {
        totalAdjustment += 5;
        healthFactors.push({
          category: "Smoking",
          impact: "positive",
          description: "Non-smoker: Adds 5 years to life expectancy"
        });
      } else if (smokingStatus === "former") {
        totalAdjustment += 2;
        healthFactors.push({
          category: "Smoking",
          impact: "positive",
          description: "Former smoker: Adds 2 years (great job quitting!)"
        });
      } else if (smokingStatus === "current") {
        totalAdjustment -= 10;
        healthFactors.push({
          category: "Smoking",
          impact: "negative",
          description: "Current smoker: Reduces life expectancy by 10 years"
        });
      }
      if (exerciseFrequency === "daily") {
        totalAdjustment += 7;
        healthFactors.push({
          category: "Exercise",
          impact: "positive",
          description: "Daily exercise: Adds 7 years to life expectancy"
        });
      } else if (exerciseFrequency === "regular") {
        totalAdjustment += 4;
        healthFactors.push({
          category: "Exercise",
          impact: "positive",
          description: "Regular exercise (3-5x/week): Adds 4 years"
        });
      } else if (exerciseFrequency === "occasional") {
        totalAdjustment += 1;
        healthFactors.push({
          category: "Exercise",
          impact: "positive",
          description: "Occasional exercise: Adds 1 year"
        });
      } else if (exerciseFrequency === "sedentary") {
        totalAdjustment -= 3;
        healthFactors.push({
          category: "Exercise",
          impact: "negative",
          description: "Sedentary lifestyle: Reduces life expectancy by 3 years"
        });
      }
      if (diet === "excellent") {
        totalAdjustment += 6;
        healthFactors.push({
          category: "Diet",
          impact: "positive",
          description: "Excellent diet: Adds 6 years to life expectancy"
        });
      } else if (diet === "good") {
        totalAdjustment += 3;
        healthFactors.push({
          category: "Diet",
          impact: "positive",
          description: "Good diet: Adds 3 years to life expectancy"
        });
      } else if (diet === "average") {
        healthFactors.push({
          category: "Diet",
          impact: "neutral",
          description: "Average diet: Neutral impact"
        });
      } else if (diet === "poor") {
        totalAdjustment -= 4;
        healthFactors.push({
          category: "Diet",
          impact: "negative",
          description: "Poor diet: Reduces life expectancy by 4 years"
        });
      }
      if (familyHistory === "excellent") {
        totalAdjustment += 5;
        healthFactors.push({
          category: "Genetics",
          impact: "positive",
          description: "Excellent family history: Adds 5 years"
        });
      } else if (familyHistory === "good") {
        totalAdjustment += 2;
        healthFactors.push({
          category: "Genetics",
          impact: "positive",
          description: "Good family history: Adds 2 years"
        });
      } else if (familyHistory === "average") {
        healthFactors.push({
          category: "Genetics",
          impact: "neutral",
          description: "Average family history: Neutral impact"
        });
      } else if (familyHistory === "poor") {
        totalAdjustment -= 3;
        healthFactors.push({
          category: "Genetics",
          impact: "negative",
          description: "Family history concerns: Reduces by 3 years"
        });
      }
      if (stressLevel === "low") {
        totalAdjustment += 3;
        healthFactors.push({
          category: "Stress",
          impact: "positive",
          description: "Low stress: Adds 3 years to life expectancy"
        });
      } else if (stressLevel === "moderate") {
        healthFactors.push({
          category: "Stress",
          impact: "neutral",
          description: "Moderate stress: Neutral impact"
        });
      } else if (stressLevel === "high") {
        totalAdjustment -= 4;
        healthFactors.push({
          category: "Stress",
          impact: "negative",
          description: "High stress: Reduces life expectancy by 4 years"
        });
      }
      const finalLifeExpectancy = Math.round(baseLifeExpectancy + totalAdjustment);
      const yearsRemaining = Math.max(0, finalLifeExpectancy - currentAge);
      const estimatedDeathYear = birthYear + finalLifeExpectancy;
      const healthScore = Math.min(100, Math.max(0, Math.round(50 + totalAdjustment * 2)));
      const lifeStage = currentAge < 18 ? "Youth" : currentAge < 30 ? "Young Adult" : currentAge < 50 ? "Adult" : currentAge < 65 ? "Middle Age" : currentAge < 80 ? "Senior" : "Elderly";
      const recommendations = [];
      if (smokingStatus === "current") {
        recommendations.push("🚭 Quit smoking - it's the single best thing you can do for longevity");
      }
      if (exerciseFrequency === "sedentary" || exerciseFrequency === "occasional") {
        recommendations.push("🏃 Increase physical activity to at least 150 minutes per week");
      }
      if (diet === "poor" || diet === "average") {
        recommendations.push("🥗 Improve diet quality - eat more vegetables, fruits, and whole grains");
      }
      if (stressLevel === "high") {
        recommendations.push("🧘 Practice stress management - meditation, yoga, or therapy can help");
      }
      if (familyHistory === "poor") {
        recommendations.push("🏥 Regular health screenings are especially important given family history");
      }
      recommendations.push("💪 Build strong social connections - loneliness impacts longevity");
      recommendations.push("😴 Prioritize 7-9 hours of quality sleep per night");
      const milestones = [];
      if (currentAge < 50) {
        milestones.push({ age: 50, description: "Reach half a century - time for comprehensive health screening" });
      }
      if (currentAge < 65) {
        milestones.push({ age: 65, description: "Retirement age - begin a new chapter of life" });
      }
      if (currentAge < 75) {
        milestones.push({ age: 75, description: "75th birthday - three-quarters of a century!" });
      }
      if (currentAge < 80) {
        milestones.push({ age: 80, description: "80th birthday - octogenarian status achieved" });
      }
      if (currentAge < 90 && finalLifeExpectancy >= 90) {
        milestones.push({ age: 90, description: "90th birthday - nonagenarian milestone" });
      }
      if (currentAge < 100 && finalLifeExpectancy >= 100) {
        milestones.push({ age: 100, description: "100th birthday - join the centenarian club!" });
      }
      const result = {
        lifeExpectancy: finalLifeExpectancy,
        yearsRemaining,
        estimatedDeathYear,
        healthScore,
        lifeStage,
        healthFactors,
        recommendations,
        milestones
      };
      setResults(result);
      setIsCalculating(false);
      setShowAnimation(true);
    }, 1500);
  };
  const shareText = results ? `⏰ My estimated life expectancy is ${results.lifeExpectancy} years with ${results.yearsRemaining} years remaining! My health score: ${results.healthScore}/100. Calculate yours!` : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Life Expectancy Calculator ⏰ - Estimate Your Lifespan | Longevity Calculator",
        description: "Calculate your estimated life expectancy based on lifestyle, health habits, and genetics. Get personalized insights and recommendations to live longer and healthier. Free life expectancy calculator with health score.",
        keywords: "life expectancy calculator, lifespan calculator, longevity calculator, how long will I live, life expectancy, health calculator, mortality calculator, death calculator"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "top", className: "mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AdsettraSlot, { position: "top", className: "mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl mb-4 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-10 h-10 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4", children: "Life Expectancy Calculator ⏰" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Discover your estimated life expectancy based on your lifestyle, health habits, and genetics. Get personalized insights to live longer!" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsettraSlot, { position: "middle", className: "mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-6 h-6 text-blue-600" }),
                "Calculate Your Life Expectancy"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Answer these questions honestly for the most accurate estimate" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "age", className: "text-base font-semibold", children: "Current Age" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "age",
                      type: "number",
                      placeholder: "Enter your age",
                      value: age,
                      onChange: (e) => setAge(e.target.value),
                      className: "text-lg h-12",
                      min: "1",
                      max: "120"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "gender", className: "text-base font-semibold", children: "Gender" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: gender, onValueChange: setGender, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "text-lg h-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select gender" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "male", children: "Male" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "female", children: "Female" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "smoking", className: "text-base font-semibold", children: "Smoking Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: smokingStatus, onValueChange: setSmokingStatus, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "text-lg h-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select smoking status" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "never", children: "Never smoked" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "former", children: "Former smoker (quit)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "current", children: "Current smoker" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "exercise", className: "text-base font-semibold", children: "Exercise Frequency" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: exerciseFrequency, onValueChange: setExerciseFrequency, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "text-lg h-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "How often do you exercise?" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "daily", children: "Daily (7+ days/week)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "regular", children: "Regular (3-5 days/week)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "occasional", children: "Occasional (1-2 days/week)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sedentary", children: "Sedentary (rarely)" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "diet", className: "text-base font-semibold", children: "Diet Quality" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: diet, onValueChange: setDiet, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "text-lg h-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "How would you rate your diet?" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "excellent", children: "Excellent (mostly whole foods)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "good", children: "Good (balanced, some treats)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "average", children: "Average (could be better)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "poor", children: "Poor (lots of processed foods)" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "family", className: "text-base font-semibold", children: "Family History" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: familyHistory, onValueChange: setFamilyHistory, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "text-lg h-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Family longevity and health" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "excellent", children: "Excellent (most lived past 80)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "good", children: "Good (many lived past 75)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "average", children: "Average (mixed)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "poor", children: "Concerning (early deaths/diseases)" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "stress", className: "text-base font-semibold", children: "Stress Level" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: stressLevel, onValueChange: setStressLevel, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "text-lg h-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "How stressed are you?" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "low", children: "Low (well-managed)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "moderate", children: "Moderate (some stress)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "high", children: "High (often overwhelmed)" })
                  ] })
                ] })
              ] }),
              error && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "destructive", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: error })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: handleCalculate,
                  disabled: isCalculating,
                  className: "w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg",
                  children: isCalculating ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-2 h-5 w-5 animate-spin" }),
                    " Calculating..."
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "mr-2 h-5 w-5" }),
                    " Calculate Life Expectancy"
                  ] })
                }
              )
            ] })
          ] }),
          results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `transform transition-all duration-700 ${showAnimation ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-2xl border-0 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-8 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 mb-2", children: "Your Estimated Life Expectancy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-2xl mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl font-bold text-white", children: results.lifeExpectancy }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-2", children: [
                  results.yearsRemaining,
                  " years remaining"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-400", children: [
                  "Estimated year: ",
                  results.estimatedDeathYear
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-2", children: "Health Score" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: results.healthScore, className: "h-4 flex-1 max-w-md" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400", children: [
                    results.healthScore,
                    "/100"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-lg px-4 py-2 bg-cyan-500 text-white mb-6", children: [
                "Life Stage: ",
                results.lifeStage
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ExportShareButtons,
                {
                  calculatorType: "life-expectancy",
                  inputs: { age, gender, smokingStatus, exerciseFrequency, diet, familyHistory, stressLevel },
                  results: { lifeExpectancy: results.lifeExpectancy, yearsRemaining: results.yearsRemaining },
                  title: shareText
                }
              )
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AdsettraSlot, { position: "middle" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-6 h-6 text-blue-600" }),
                "Health Factors Impact"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: results.healthFactors.map((factor, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `p-4 rounded-lg ${factor.impact === "positive" ? "bg-green-50 dark:bg-green-900/20" : factor.impact === "negative" ? "bg-red-50 dark:bg-red-900/20" : "bg-gray-50 dark:bg-gray-800/50"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-3 h-3 rounded-full mt-1 ${factor.impact === "positive" ? "bg-green-500" : factor.impact === "negative" ? "bg-red-500" : "bg-gray-400"}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 dark:text-white", children: factor.category }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: factor.description })
                    ] })
                  ] })
                },
                idx
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-6 h-6 text-green-600" }),
                  "Personalized Recommendations"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Follow these to increase your life expectancy" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: results.recommendations.map((rec, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-green-50 dark:bg-green-900/20 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: rec }) }, idx)) }) })
            ] }),
            results.milestones.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Cake, { className: "w-6 h-6 text-purple-600" }),
                "Upcoming Life Milestones"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: results.milestones.map((milestone, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-white dark:bg-gray-800 rounded-lg shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold", children: milestone.age }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: milestone.description })
              ] }) }, idx)) }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsettraSlot, { position: "middle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0 sticky top-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xl", children: "⚠️ Important Disclaimer" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 text-sm text-gray-600 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-blue-600 dark:text-blue-400 mb-2", children: "For Entertainment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This calculator provides estimates based on statistical averages. It cannot predict your actual lifespan, which depends on many unpredictable factors." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-blue-600 dark:text-blue-400 mb-2", children: "Not Medical Advice" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This tool is not a substitute for professional medical advice. Always consult healthcare providers for health concerns and decisions." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-blue-600 dark:text-blue-400 mb-2", children: "Use Positively" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Use results as motivation to adopt healthier habits, not as a source of anxiety. Every healthy choice you make can improve your outcomes!" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-3xl", children: "The Science of Longevity: Living Longer and Healthier" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose prose-lg max-w-none dark:prose-invert", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-6 mb-4", children: "Understanding Life Expectancy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Life expectancy is a statistical measure of the average time a person is expected to live based on current age, gender, and various demographic factors. It's important to understand that this is an average—not a prediction for any individual. Some people will live much longer, others shorter, depending on genetics, lifestyle, environment, and pure chance." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Global life expectancy has dramatically increased over the past century, rising from about 31 years in 1900 to over 72 years today. This improvement comes primarily from reduced infant mortality, better sanitation, vaccines, antibiotics, and improved medical care. However, lifestyle factors now play an increasingly important role in determining how long—and how well—we live." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "The Biggest Factors Affecting Longevity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Genetics (20-30%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While you can't choose your genes, they play a significant role in longevity. Family history of longevity is one of the strongest predictors of your own lifespan. If your parents and grandparents lived into their 90s, you have a better chance of doing the same. However, genes are not destiny—lifestyle can amplify or diminish genetic advantages." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Lifestyle Choices (70-80%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The good news: most factors affecting longevity are within your control. Research shows that lifestyle choices account for 70-80% of how long you live and, importantly, the quality of those years. The main lifestyle factors include smoking, diet, exercise, alcohol consumption, sleep, stress management, and social connections." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Smoking: The Biggest Killer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Smoking is the single most preventable cause of death, reducing life expectancy by an average of 10 years. Smokers face dramatically increased risks of cancer, heart disease, stroke, and respiratory diseases. However, quitting at any age provides benefits:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Quit before 30: Avoid almost all smoking-related risks" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Quit before 40: Avoid 90% of excess mortality risk" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Quit before 50: Cut excess risk in half" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Quit at any age: Immediate and long-term health benefits" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Exercise: The Longevity Drug" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If exercise were a pill, it would be the most prescribed medication in the world. Regular physical activity can add up to 7 years to your life expectancy. It reduces risk of:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Heart disease by 35%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Stroke by 30%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Type 2 diabetes by 50%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Certain cancers by 20-30%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Dementia by 30%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Depression by 30%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The sweet spot is 150-300 minutes of moderate activity or 75-150 minutes of vigorous activity weekly, plus strength training twice weekly. However, even small amounts of activity provide benefits—every minute counts!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Diet: You Are What You Eat" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Diet quality significantly impacts both lifespan and healthspan. The Mediterranean diet, rich in vegetables, fruits, whole grains, legumes, nuts, fish, and olive oil, is consistently associated with longevity. Key principles include:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Eat mostly plants—vegetables, fruits, whole grains, legumes, nuts" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Choose healthy fats—olive oil, avocados, fatty fish" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Limit processed foods, added sugars, and excessive red meat" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Practice portion control and mindful eating" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Stay hydrated with water" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Social Connections: The Hidden Longevity Factor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loneliness and social isolation are as harmful to health as smoking 15 cigarettes daily. Strong social connections can increase longevity by 50%. Social relationships:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Reduce stress hormones" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Boost immune function" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Encourage healthier behaviors" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Provide emotional support during challenges" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Give life purpose and meaning" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Sleep: The Foundation of Health" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Consistently sleeping 7-9 hours per night is crucial for longevity. Both too little sleep (under 6 hours) and too much (over 9 hours) are associated with increased mortality. Quality sleep:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Repairs cellular damage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consolidates memories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Regulates hormones" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Supports immune function" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Reduces inflammation" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Stress Management: The Silent Killer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Chronic stress accelerates aging at the cellular level, literally shortening telomeres (protective caps on chromosomes). Effective stress management through meditation, yoga, time in nature, hobbies, or therapy can add years to your life by reducing stress-related diseases." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Blue Zones: Lessons from the Longest-Living People" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Blue Zones are regions where people consistently live past 100 at much higher rates than average. These include Okinawa (Japan), Sardinia (Italy), Nicoya (Costa Rica), Ikaria (Greece), and Loma Linda (California). Common factors among Blue Zone centenarians:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Move naturally:" }),
              " Regular low-intensity physical activity integrated into daily life"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Purpose:" }),
              " A clear sense of why they wake up each morning"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Downshift:" }),
              " Routines to shed stress (prayer, naps, happy hour)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "80% Rule:" }),
              " Stop eating when 80% full"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Plant slant:" }),
              " Diets based on beans, nuts, and vegetables"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Wine at 5:" }),
              " Moderate alcohol consumption (1-2 glasses daily) with friends"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Belong:" }),
              " Participation in a faith-based community"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Loved ones first:" }),
              " Keeping aging parents nearby, commitment to life partner"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Right tribe:" }),
              " Social circles that support healthy behaviors"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "The Difference Between Lifespan and Healthspan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While lifespan refers to how long you live, healthspan refers to how many of those years you live in good health. The goal isn't just to add years to your life, but to add life to your years. Many people spend their last 10-20 years with chronic diseases, disability, and reduced quality of life." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Focusing on healthspan means:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Maintaining physical function and independence" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Preserving cognitive abilities" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Preventing or managing chronic diseases" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Sustaining social engagement and purpose" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Enjoying activities you love" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Cutting-Edge Longevity Research" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Caloric Restriction" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Eating 20-40% fewer calories while maintaining nutrition has extended lifespan in many organisms. In humans, caloric restriction shows promise for slowing aging markers, though long-term studies are ongoing. A more practical approach might be intermittent fasting, which shows similar benefits." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Senolytic Drugs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'These experimental drugs target and eliminate senescent cells—"zombie cells" that accumulate with age and contribute to aging and age-related diseases. Early results in animals are promising, with human trials underway.' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Rapamycin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Originally an immunosuppressant, rapamycin has extended lifespan in multiple organisms by inhibiting the mTOR pathway involved in aging. Some longevity enthusiasts take it off-label, though long-term effects in healthy humans are unknown." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "NAD+ Boosters" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "NAD+ (nicotinamide adenine dinucleotide) declines with age, affecting cellular energy and DNA repair. Supplements like NMN and NR aim to restore NAD+ levels, with early research showing promise for healthspan extension." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Practical Steps to Increase Your Life Expectancy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Start Today" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You don't need to overhaul your entire life at once. Small, consistent changes compound over time:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Add one vegetable serving daily" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Walk 10 minutes after meals" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Sleep 30 minutes earlier" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Call a friend weekly" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Practice 5 minutes of meditation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Replace one processed snack with nuts or fruit" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Regular Health Screenings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Early detection saves lives. Follow recommended screening schedules for:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Blood pressure (annually)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Cholesterol (every 4-6 years)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Diabetes (every 3 years if at risk)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Colonoscopy (starting at 45-50)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Mammography (annually after 40-50)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Skin checks (annually if at risk)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Optimize What You Control" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While you can't change your genes or prevent all disease, you can optimize controllable factors:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Don't smoke:" }),
              " Or quit immediately if you do"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Move daily:" }),
              " At least 30 minutes of activity"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Eat real food:" }),
              " Mostly plants, not too much"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Manage stress:" }),
              " Find what works for you"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Prioritize sleep:" }),
              " 7-9 hours nightly"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cultivate relationships:" }),
              " Invest in social connections"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Find purpose:" }),
              " Have reasons to get up each morning"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Stay curious:" }),
              " Keep learning and growing"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Frequently Asked Questions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Can you really predict when someone will die?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No. Life expectancy calculators provide statistical estimates based on population averages and known risk factors. They cannot predict individual outcomes, which depend on countless variables including pure chance. Use these tools for general awareness and motivation, not as definitive predictions." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Is it ever too late to improve my life expectancy?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Never. Every healthy change provides benefits regardless of age. Quitting smoking at 60 still adds years to your life. Starting exercise at 70 still reduces disease risk. Improving diet at any age supports better health. The best time to start was yesterday; the second-best time is today." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Why do women live longer than men?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Women outlive men by an average of 5-7 years across nearly all countries. Reasons include biological factors (hormones, genetics), behavioral differences (men take more risks, are less likely to seek medical care), and social factors. However, the gap is narrowing as lifestyle behaviors become more similar." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "What's the maximum human lifespan?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The verified oldest person lived to 122 years. Most scientists believe the maximum human lifespan is somewhere between 120-150 years, though this could potentially increase with future medical advances. However, very few people currently live past 110, and reaching 100 remains a rare achievement." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Conclusion: Focus on Life Quality, Not Just Quantity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While extending lifespan is valuable, the ultimate goal should be maximizing healthspan—the years you live in good health, with vitality, independence, and joy. The strategies that extend life also improve its quality:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Exercise gives you energy and strength for daily activities" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Good nutrition improves mood and mental clarity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Social connections provide happiness and support" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Purpose gives meaning beyond mere existence" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Stress management enhances daily wellbeing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Quality sleep improves everything" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Don't become obsessed with the number of years. Instead, focus on making each day count. Invest in your health, nurture relationships, pursue meaningful goals, and enjoy the journey. A life well-lived is measured not just in years, but in moments of joy, love, growth, and contribution." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Remember: you have far more control over your longevity than you might think. The choices you make today shape the years ahead. Choose wisely, but also choose joy. After all, what's the point of living longer if you're not truly living?" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  LifeExpectancyCalculator as default
};
