import { r as reactExports, j as jsxRuntimeExports, S as SEOHead, A as Activity, H as Heart, f as Card, g as CardHeader, h as CardTitle, a8 as Sparkles, k as CardContent, a4 as Label, a5 as Info, V as Input, B as Button, C as Calculator, q as TriangleAlert } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-t5L32f7o.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { E as EnhancedAIAnalysis, S as ShieldAlert } from "./EnhancedAIAnalysis-BaYCd8m5.js";
import { I as InFeedAd } from "./InFeedAd-qGRsmhMx.js";
import { S as SidebarAd } from "./SidebarAd-BcLzed3D.js";
import { A as AutoAdSlot } from "./AutoAdSlot-DNRO9HTk.js";
import { T as Target } from "./target-4JeIm6Yk.js";
import { C as CircleCheckBig } from "./circle-check-big-B8N3lfE-.js";
import { B as Brain } from "./brain-CSngUEN8.js";
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
import "./arrow-right-Bjdtr8dz.js";
import "./lightbulb-DKPyzLdJ.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
function WaistToHipRatioCalculator() {
  const [waist, setWaist] = reactExports.useState("32");
  const [hip, setHip] = reactExports.useState("40");
  const [gender, setGender] = reactExports.useState("female");
  const [unit, setUnit] = reactExports.useState("imperial");
  const [result, setResult] = reactExports.useState(null);
  const [showAIAnalysis, setShowAIAnalysis] = reactExports.useState(false);
  const calculateWHR = () => {
    const waistValue = parseFloat(waist);
    const hipValue = parseFloat(hip);
    if (!waistValue || !hipValue || waistValue <= 0 || hipValue <= 0) {
      return;
    }
    const ratio = waistValue / hipValue;
    let riskLevel = "low";
    let bodyShape = "";
    if (gender === "female") {
      if (ratio < 0.8) {
        riskLevel = "low";
        bodyShape = "Pear Shape";
      } else if (ratio >= 0.8 && ratio < 0.85) {
        riskLevel = "moderate";
        bodyShape = "Transitional Shape";
      } else if (ratio >= 0.85 && ratio < 0.9) {
        riskLevel = "high";
        bodyShape = "Apple Shape";
      } else {
        riskLevel = "very-high";
        bodyShape = "High-Risk Apple Shape";
      }
    } else {
      if (ratio < 0.9) {
        riskLevel = "low";
        bodyShape = "V-Shape";
      } else if (ratio >= 0.9 && ratio < 0.95) {
        riskLevel = "moderate";
        bodyShape = "Transitional Shape";
      } else if (ratio >= 0.95 && ratio < 1) {
        riskLevel = "high";
        bodyShape = "Apple Shape";
      } else {
        riskLevel = "very-high";
        bodyShape = "High-Risk Apple Shape";
      }
    }
    const recommendations = getRecommendations(riskLevel);
    const healthImplications = getHealthImplications(riskLevel);
    const idealRatio = gender === "female" ? { min: 0.7, max: 0.8 } : { min: 0.85, max: 0.9 };
    const resultData = {
      waistToHipRatio: ratio,
      riskLevel,
      bodyShape,
      recommendations,
      healthImplications,
      idealRatio
    };
    setResult(resultData);
    setShowAIAnalysis(true);
  };
  const getRecommendations = (risk, gender2) => {
    const baseRecommendations = [
      "Engage in regular cardiovascular exercise (150+ minutes/week)",
      "Include strength training 2-3 times per week",
      "Focus on core exercises to strengthen abdominal muscles",
      "Maintain a balanced diet rich in whole foods",
      "Reduce processed foods and added sugars"
    ];
    if (risk === "high" || risk === "very-high") {
      return [
        ...baseRecommendations,
        "Consult with a healthcare provider for personalized advice",
        "Consider working with a registered dietitian",
        "Monitor blood pressure and cholesterol regularly",
        "Reduce alcohol consumption",
        "Manage stress through mindfulness or meditation"
      ];
    } else if (risk === "moderate") {
      return [
        ...baseRecommendations,
        "Increase daily physical activity",
        "Monitor your waist circumference monthly",
        "Stay hydrated and get adequate sleep"
      ];
    } else {
      return [
        "Maintain your current healthy lifestyle",
        "Continue regular physical activity",
        "Monitor measurements periodically",
        "Keep eating a balanced, nutritious diet"
      ];
    }
  };
  const getHealthImplications = (risk) => {
    switch (risk) {
      case "very-high":
        return [
          "Significantly elevated risk of cardiovascular disease",
          "Higher risk of type 2 diabetes",
          "Increased risk of metabolic syndrome",
          "Greater likelihood of hypertension",
          "Elevated risk of certain cancers",
          "Potential increased risk of stroke"
        ];
      case "high":
        return [
          "Elevated risk of heart disease",
          "Increased risk of type 2 diabetes",
          "Higher chance of developing metabolic issues",
          "Moderate risk of hypertension"
        ];
      case "moderate":
        return [
          "Slightly elevated cardiovascular risk",
          "Moderate risk of metabolic issues if left unaddressed",
          "Should monitor health markers regularly"
        ];
      default:
        return [
          "Healthy waist-to-hip ratio",
          "Lower risk of obesity-related diseases",
          "Good metabolic health indicators"
        ];
    }
  };
  const getRiskConfig = (risk) => {
    switch (risk) {
      case "low":
        return {
          color: "text-green-600",
          bgColor: "bg-green-50 dark:bg-green-950/30",
          borderColor: "border-green-200 dark:border-green-800",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-12 h-12 text-green-600" }),
          label: "Low Risk",
          badgeClass: "bg-green-500"
        };
      case "moderate":
        return {
          color: "text-yellow-600",
          bgColor: "bg-yellow-50 dark:bg-yellow-950/30",
          borderColor: "border-yellow-200 dark:border-yellow-800",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-12 h-12 text-yellow-600" }),
          label: "Moderate Risk",
          badgeClass: "bg-yellow-500"
        };
      case "high":
        return {
          color: "text-orange-600",
          bgColor: "bg-orange-50 dark:bg-orange-950/30",
          borderColor: "border-orange-200 dark:border-orange-800",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-12 h-12 text-orange-600" }),
          label: "High Risk",
          badgeClass: "bg-orange-500"
        };
      case "very-high":
        return {
          color: "text-red-600",
          bgColor: "bg-red-50 dark:bg-red-950/30",
          borderColor: "border-red-200 dark:border-red-800",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-12 h-12 text-red-600" }),
          label: "Very High Risk",
          badgeClass: "bg-red-500"
        };
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Waist to Hip Ratio Calculator (WHR) | Health Risk Assessment Tool",
        description: "Calculate your waist-to-hip ratio (WHR) and assess your health risk. Based on WHO standards for cardiovascular disease, diabetes, and metabolic syndrome risk evaluation.",
        keywords: "waist to hip ratio, WHR calculator, body shape calculator, health risk assessment, cardiovascular risk, metabolic health, obesity risk"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8 max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-10 h-10 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent", children: "Waist to Hip Ratio Calculator" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mt-2", children: "Discover your body shape and assess your health risk with WHO-approved standards ✨" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0 shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-3.5 h-3.5 mr-1" }),
            "WHO Standards"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-0 shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-3.5 h-3.5 mr-1" }),
            "Health Risk Assessment"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-3.5 h-3.5 mr-1" }),
            "Body Shape Analysis"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 shadow-xl bg-gradient-to-br from-white via-pink-50/30 to-purple-50/30 dark:from-gray-900 dark:via-pink-950/10 dark:to-purple-950/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl font-bold mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-6 h-6 text-primary" }),
                  "Body Measurements"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Measure at the narrowest point of waist & widest point of hips" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-8 h-8 text-purple-500 animate-pulse" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "gender", className: "text-sm font-medium flex items-center gap-2", children: [
                    "Gender",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-3.5 h-3.5 text-muted-foreground" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: gender, onValueChange: (v) => setGender(v), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "gender", className: "h-11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "female", children: "Female" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "male", children: "Male" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "unit", className: "text-sm font-medium flex items-center gap-2", children: [
                    "Units",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-3.5 h-3.5 text-muted-foreground" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: unit, onValueChange: (v) => setUnit(v), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "unit", className: "h-11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "imperial", children: "Inches" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "metric", children: "Centimeters" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-blue-900 dark:text-blue-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "How to measure:" }),
                  " Waist = narrowest point (usually above belly button). Hips = widest point around buttocks. Stand relaxed, don't hold your breath!"
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "waist", className: "text-base font-semibold flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-pink-600 dark:text-pink-400" }) }),
                    "Waist Circumference"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "waist",
                        type: "number",
                        step: "0.1",
                        value: waist,
                        onChange: (e) => setWaist(e.target.value),
                        placeholder: unit === "metric" ? "80" : "32",
                        className: "h-12 text-lg pr-20"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground", children: unit === "metric" ? "cm" : "inches" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "hip", className: "text-base font-semibold flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-purple-600 dark:text-purple-400" }) }),
                    "Hip Circumference"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "hip",
                        type: "number",
                        step: "0.1",
                        value: hip,
                        onChange: (e) => setHip(e.target.value),
                        placeholder: unit === "metric" ? "100" : "40",
                        className: "h-12 text-lg pr-20"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground", children: unit === "metric" ? "cm" : "inches" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: calculateWHR,
                  className: "w-full h-14 text-lg font-semibold bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all",
                  size: "lg",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-5 h-5 mr-2" }),
                    "Calculate My WHR",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 ml-2" })
                  ]
                }
              )
            ] })
          ] }),
          result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-in fade-in duration-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: `border-3 ${getRiskConfig(result.riskLevel).borderColor} ${getRiskConfig(result.riskLevel).bgColor} shadow-2xl`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-8 pb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center sm:text-left", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `${getRiskConfig(result.riskLevel).badgeClass} text-white text-sm px-3 py-1`, children: getRiskConfig(result.riskLevel).label }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mb-2", children: "Your Waist-to-Hip Ratio" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-6xl font-bold ${getRiskConfig(result.riskLevel).color} mb-2`, children: result.waistToHipRatio.toFixed(3) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold text-foreground", children: result.bodyShape })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: getRiskConfig(result.riskLevel).icon })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium mb-2", children: [
                  "Ideal Range for ",
                  gender === "female" ? "Women" : "Men",
                  ":"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-primary", children: [
                  result.idealRatio.min.toFixed(2),
                  " - ",
                  result.idealRatio.max.toFixed(2)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `h-full ${getRiskConfig(result.riskLevel).badgeClass} transition-all duration-1000 ease-out rounded-full`,
                    style: { width: `${Math.min(result.waistToHipRatio / (gender === "female" ? 1 : 1.1) * 100, 100)}%` }
                  }
                ) })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 shadow-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-6 h-6 text-red-500" }),
                "Health Implications"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: result.healthImplications.map((implication, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 p-3 bg-muted/50 rounded-lg", children: [
                result.riskLevel === "low" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: `w-5 h-5 ${getRiskConfig(result.riskLevel).color} flex-shrink-0 mt-0.5` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: implication })
              ] }, index)) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 shadow-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-6 h-6 text-purple-600" }),
                "Personalized Recommendations"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: result.recommendations.map((rec, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 p-3 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg border border-purple-200 dark:border-purple-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-purple-600 text-white rounded-full text-xs font-bold flex-shrink-0", children: index + 1 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground flex-1", children: rec })
              ] }, index)) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}),
            showAIAnalysis && /* @__PURE__ */ jsxRuntimeExports.jsx(
              EnhancedAIAnalysis,
              {
                calculatorType: "waist-to-hip-ratio",
                data: {
                  waist: parseFloat(waist),
                  hip: parseFloat(hip),
                  ratio: result.waistToHipRatio,
                  riskLevel: result.riskLevel,
                  bodyShape: result.bodyShape,
                  unit
                },
                userContext: {
                  riskTolerance: result.riskLevel === "low" ? "low" : result.riskLevel === "moderate" ? "medium" : "high"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ExportShareButtons,
              {
                calculatorType: "waist-to-hip-ratio",
                inputs: {
                  waist: parseFloat(waist),
                  hip: parseFloat(hip),
                  gender,
                  unit
                },
                results: result,
                title: "Waist-to-Hip Ratio Calculator Results"
              }
            )
          ] }),
          !result && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-12 text-center min-h-[400px] flex flex-col items-center justify-center bg-gradient-to-br from-muted/30 via-pink-50/20 to-purple-50/20 border-2 border-dashed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mb-6 animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-16 h-16 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "Ready to Calculate Your WHR?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-md text-lg", children: "Enter your measurements above to discover your body shape and assess your health risk profile! 🎯" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-8 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarAd, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-200 dark:border-blue-800 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg", children: "Quick Facts" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "WHR is a better predictor of cardiovascular risk than BMI" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Apple shapes have more visceral (organ) fat" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Pear shapes store more subcutaneous fat" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "You can improve your WHR with targeted exercise" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Diet changes can reduce waist circumference" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5 text-green-600 dark:text-green-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg", children: "Ideal Ranges" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium mb-1", children: "Women" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-green-600 dark:text-green-400", children: "< 0.80" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Low health risk" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 border-t", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium mb-1", children: "Men" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400", children: "< 0.90" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Low health risk" })
              ] })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mt-12 p-8 border-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "guide", className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "guide", children: "Complete Guide" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "science", children: "The Science" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "improve", children: "How to Improve" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "faq", children: "FAQ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "guide", className: "prose prose-sm max-w-none dark:prose-invert", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-6", children: "Complete Guide to Waist-to-Hip Ratio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "What is Waist-to-Hip Ratio (WHR)?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Your waist-to-hip ratio (WHR) is a simple yet powerful measurement that compares the circumference of your waist to the circumference of your hips. Unlike BMI which only considers height and weight, WHR reveals how your body fat is distributed—a crucial factor in determining your risk for various health conditions." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: `Think of it as your body's way of telling a story. Are you more of an "apple" shape (weight concentrated around the middle) or a "pear" shape (weight distributed around the hips)? This distinction matters tremendously for your long-term health outcomes!` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Why WHR Matters More Than You Think" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Research consistently shows that people who carry excess weight around their midsection (high WHR) face significantly elevated risks for:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-base", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cardiovascular Disease:" }),
              " Up to 2x higher risk with elevated WHR"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Type 2 Diabetes:" }),
              " Visceral fat interferes with insulin sensitivity"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Metabolic Syndrome:" }),
              " Cluster of conditions including high blood pressure and cholesterol"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Certain Cancers:" }),
              " Including colorectal, breast, and pancreatic cancers"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Stroke:" }),
              " Increased inflammation and arterial plaque buildup"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "How to Measure Accurately" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Accuracy is everything! Follow these steps for the most reliable measurements:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Measuring Your Waist:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-2 text-base", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Stand up straight and breathe out naturally (don't hold your breath or suck in!)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Find the natural crease of your waist—usually the narrowest point between your ribcage and hip bones" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Wrap a measuring tape around your waist at this point, parallel to the floor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The tape should be snug but not compressing your skin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Record the measurement to the nearest 0.1 inch or 0.5 cm" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Measuring Your Hips:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-2 text-base", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Stand with your feet together" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Find the widest part of your hips/buttocks—this is usually around 7-9 inches below your waist" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Wrap the measuring tape around your hips at this widest point" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Keep the tape parallel to the floor and snug but not tight" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Record this measurement as well" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Understanding Your Results" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 p-6 rounded-lg my-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mb-4", children: "For Women:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Less than 0.80:" }),
                " ✅ Low health risk (Excellent!)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "0.80 - 0.84:" }),
                " ⚠️ Moderate health risk"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "0.85 - 0.89:" }),
                " 🚨 High health risk"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "0.90 or higher:" }),
                " 🔴 Very high health risk"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 p-6 rounded-lg my-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mb-4", children: "For Men:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Less than 0.90:" }),
                " ✅ Low health risk (Excellent!)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "0.90 - 0.94:" }),
                " ⚠️ Moderate health risk"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "0.95 - 0.99:" }),
                " 🚨 High health risk"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1.00 or higher:" }),
                " 🔴 Very high health risk"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Body Shape Categories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Your WHR determines your body shape category, which has important health implications:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "🍐 Pear Shape (Gynoid)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Lower WHR, with more weight distributed in the hips and thighs. This shape is generally associated with lower health risks because the fat stored in these areas is mostly subcutaneous (under the skin) rather than visceral (around organs). Pear shapes are more common in women due to hormonal factors." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "🍎 Apple Shape (Android)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Higher WHR, with more weight concentrated around the abdomen. This shape carries greater health risks because abdominal fat is more likely to be visceral fat, which wraps around internal organs and releases inflammatory substances. Apple shapes are more common in men and post-menopausal women." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "The Visceral Fat Connection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: `Not all fat is created equal! Visceral fat—the type that accumulates around your abdominal organs—is metabolically active and produces hormones and inflammatory substances that interfere with normal metabolic function. This is why a high WHR is such a strong predictor of health problems, even in people who aren't technically "overweight" by BMI standards.` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Subcutaneous fat (under the skin on your hips and thighs) is much less harmful and may even have some protective effects. This explains why pear-shaped individuals often have better metabolic health markers than apple-shaped individuals, even at the same total body weight." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "science", className: "prose prose-sm max-w-none dark:prose-invert", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-6", children: "The Science Behind WHR" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-6 mb-4", children: "Why WHO Recommends WHR" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "The World Health Organization (WHO) has extensively studied body composition and health outcomes. Their research demonstrates that WHR is one of the most reliable predictors of cardiovascular disease risk, often outperforming BMI in accuracy. This is because WHR directly reflects the distribution of body fat, not just total body mass." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Hormonal Influences on Body Fat Distribution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Sex hormones play a crucial role in determining where your body stores fat:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Estrogen and Female Fat Distribution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Estrogen promotes gluteofemoral fat storage (hips and thighs), creating the typical pear shape in pre-menopausal women. This pattern evolved as an energy reserve for pregnancy and breastfeeding. After menopause, declining estrogen levels often lead to a shift toward abdominal fat storage, increasing WHR and cardiovascular risk." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Testosterone and Male Fat Distribution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Testosterone promotes abdominal fat storage, contributing to the apple shape more common in men. While testosterone is often considered protective, when it declines with age, it paradoxically leads to even more abdominal fat accumulation and increased WHR." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Cortisol and Stress-Related Weight Gain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Chronic stress elevates cortisol levels, which preferentially deposits fat around the abdomen. This is why stress management is crucial for maintaining a healthy WHR, especially for those genetically predisposed to apple-shaped weight distribution." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Genetic Factors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Research suggests that 40-60% of the variation in body fat distribution is genetic. However, lifestyle factors still play a dominant role—you can significantly improve your WHR through diet, exercise, and stress management, regardless of your genetic predisposition." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "The Metabolic Syndrome Connection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Metabolic syndrome is diagnosed when you have at least three of the following:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Large waist circumference (high WHR)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Elevated triglycerides" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Low HDL ("good") cholesterol' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "High blood pressure" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Elevated fasting blood sugar" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Notice that waist circumference is the first criterion! A high WHR is often the earliest warning sign of metabolic dysfunction, appearing years before other symptoms develop." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "improve", className: "prose prose-sm max-w-none dark:prose-invert", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-6", children: "How to Improve Your WHR" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-6 mb-4", children: "🏃‍♀️ Exercise Strategies That Work" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Cardiovascular Exercise" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Aerobic exercise is your best weapon against visceral fat. Aim for:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "150-300 minutes of moderate-intensity cardio weekly" }),
              " (brisk walking, cycling, swimming)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "75-150 minutes of vigorous-intensity cardio" }),
              " (running, HIIT, spinning)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Or a combination of both" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Studies show that cardio preferentially targets visceral fat, making it especially effective for reducing WHR." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Strength Training" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Don't skip the weights! Resistance training:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Builds lean muscle mass, which increases metabolic rate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Improves insulin sensitivity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Helps reshape body composition even without weight loss" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Should be performed 2-3 times per week, targeting all major muscle groups" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Core Strengthening" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "While spot reduction is a myth, strengthening your core muscles:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Improves posture, making your waist appear smaller" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Provides structural support, preventing age-related waist expansion" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Enhances functional fitness and reduces injury risk" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Effective exercises:" }),
            " Planks, side planks, bird dogs, dead bugs, Pallof presses, and rotational movements."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "🥗 Nutritional Strategies" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Reduce Refined Carbohydrates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Refined carbs and added sugars are strongly linked to visceral fat accumulation. Minimize:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "White bread, pasta, and rice" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Sugary drinks and fruit juices" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Pastries, cookies, and candy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Processed snack foods" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Increase Protein Intake" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Higher protein intake (25-30% of calories) is associated with:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Greater satiety and reduced overall calorie intake" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Preservation of lean muscle mass during weight loss" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Increased thermogenesis (calorie burning from digestion)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Better blood sugar control" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Prioritize Healthy Fats" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Not all fats are equal. Focus on:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Monounsaturated fats:" }),
              " Olive oil, avocados, nuts"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Omega-3 fatty acids:" }),
              " Fatty fish, flaxseeds, walnuts"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Limit saturated fats" }),
              " from red meat and full-fat dairy"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Avoid trans fats" }),
              " completely (partially hydrogenated oils)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Increase Fiber Consumption" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Soluble fiber, in particular, helps reduce visceral fat by:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Slowing digestion and improving satiety" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Reducing insulin spikes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Feeding beneficial gut bacteria" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best sources:" }),
            " Oats, beans, apples, citrus fruits, carrots, barley, and psyllium husk."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "😴 Sleep and Stress Management" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Prioritize Quality Sleep" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Poor sleep (less than 7 hours nightly) is independently associated with increased visceral fat. Sleep deprivation:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Increases cortisol and hunger hormones (ghrelin)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Decreases satiety hormones (leptin)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Impairs insulin sensitivity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Reduces willpower and decision-making capacity" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Manage Chronic Stress" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Elevated cortisol from chronic stress directly promotes abdominal fat storage. Evidence-based stress reduction techniques include:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Mindfulness meditation:" }),
              " Even 10 minutes daily shows benefits"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Yoga:" }),
              " Combines physical activity with stress reduction"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Deep breathing exercises:" }),
              " Activates the parasympathetic nervous system"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Regular social connection:" }),
              " Strong social ties buffer against stress"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Time in nature:" }),
              " Proven to reduce cortisol levels"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "⏱️ Timeline for Results" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Be patient! Meaningful improvements in WHR typically take:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "4-6 weeks:" }),
              " Noticeable changes in waist circumference"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "8-12 weeks:" }),
              " Measurable reduction in WHR (0.01-0.03 decrease)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "3-6 months:" }),
              " Significant improvements and new habits solidified"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1 year+:" }),
              " Sustainable lifestyle changes and optimal results"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed font-semibold", children: "Remember: Small, consistent changes compound over time. A 5-10% reduction in body weight can significantly improve your WHR and health markers!" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "faq", className: "prose prose-sm max-w-none dark:prose-invert", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-6", children: "Frequently Asked Questions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Is WHR more accurate than BMI?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "For predicting cardiovascular disease and metabolic health risks, yes! WHR provides information about fat distribution that BMI cannot. However, both measurements have value—WHR for metabolic risk, BMI for overall weight status. Using both together gives the most complete picture." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Can I be healthy with a high WHR?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "While a high WHR increases your statistical risk, it's just one factor. Some people with elevated WHR maintain excellent metabolic health through diet, exercise, and genetics. However, you can always improve your long-term health outlook by reducing your WHR through lifestyle changes." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Does age affect WHR?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Yes, significantly. Both men and women tend to develop higher WHRs with age due to hormonal changes (decreased estrogen in women, decreased testosterone in men), reduced muscle mass, and often decreased physical activity. This is why maintaining healthy habits becomes increasingly important as we age." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "How often should I measure my WHR?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Monthly measurements are ideal for tracking progress without obsessing over daily fluctuations (which are normal due to water retention, digestion, etc.). Always measure at the same time of day, preferably in the morning before eating, for consistency." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Can exercise alone improve my WHR?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Exercise can improve WHR even without weight loss by reducing visceral fat and building muscle. However, the combination of exercise AND dietary improvements produces the best and fastest results. Neither approach alone is as effective as both together." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Does genetics determine my WHR?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Genetics influence your natural body shape and where you tend to store fat, but lifestyle factors still have a dominant impact. Even with genetic predisposition to apple-shaped weight distribution, you can significantly improve your WHR through diet, exercise, and stress management." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "What's the difference between subcutaneous and visceral fat?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Subcutaneous fat is located directly under the skin (you can pinch it). Visceral fat surrounds internal organs in the abdominal cavity. Visceral fat is metabolically active and produces inflammatory substances, making it far more dangerous to health. High WHR indicates higher visceral fat levels." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Can stress really increase my waist size?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Absolutely! Chronic stress elevates cortisol, which directly promotes fat storage around the abdomen. This is why stress management techniques like meditation, yoga, and adequate sleep are essential components of any WHR reduction strategy." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: `Should I be concerned if I'm in the "moderate risk" category?` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Moderate risk is a wake-up call, not a crisis. It's the perfect time to make lifestyle changes before problems develop. Small improvements in diet and activity level can quickly move you from moderate to low risk. Think of it as preventive medicine!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mt-6 mb-3", children: "Can medication affect my WHR?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Yes, several medications can influence fat distribution, including corticosteroids, certain antidepressants, antipsychotics, and some diabetes medications. If you're on medication and struggling with WHR, discuss alternatives with your doctor—but never stop medications without medical supervision." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mt-8 p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-2 border-amber-200 dark:border-amber-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-sm max-w-none dark:prose-invert", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5 text-amber-600 dark:text-amber-400" }),
          "Important Disclaimer"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "This calculator provides estimates based on World Health Organization (WHO) standards for waist-to-hip ratio assessment. WHR is a screening tool, not a diagnostic tool. Individual health risks depend on many factors including age, genetics, lifestyle, family history, and existing health conditions." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "This is not medical advice." }),
          " If you have concerns about your health, cardiovascular risk, or weight management, please consult with a qualified healthcare provider, registered dietitian, or certified fitness professional. They can provide personalized guidance based on your complete health profile."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "References:" }),
          " World Health Organization (WHO), American Heart Association, National Institutes of Health (NIH), Centers for Disease Control and Prevention (CDC)."
        ] })
      ] }) })
    ] })
  ] });
}
export {
  WaistToHipRatioCalculator as default
};
