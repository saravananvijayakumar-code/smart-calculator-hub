import { Q as useToast, r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, A as Activity, i as CardDescription, k as CardContent, a4 as Label, V as Input, B as Button, H as Heart, a5 as Info, a6 as Alert, a7 as AlertDescription } from "./index-CK9G4vW7.js";
import { R as RadioGroup, a as RadioGroupItem } from "./radio-group-DJJORUxe.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { A as AIAnalysis } from "./AIAnalysis-B-4zh-eH.js";
import { R as RelatedCalculators } from "./RelatedCalculators-CFMy6W9D.js";
import { E as EnhancedAIAnalysis } from "./EnhancedAIAnalysis-BaYCd8m5.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { u as useCalculatorHistory } from "./useCalculatorHistory-D-0eO727.js";
import { S as Save } from "./save-DNawQ5RZ.js";
import "./index-CjCmdDH1.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
import "./badge-6THgoC_4.js";
import "./tabs-t5L32f7o.js";
import "./brain-CSngUEN8.js";
import "./target-4JeIm6Yk.js";
import "./circle-check-big-B8N3lfE-.js";
import "./AppleStyleCard-DyiWjqNf.js";
import "./CalculatorCategory-D_glaRKB.js";
import "./map-pin-DTtorPjp.js";
import "./interlinking-DH1ZPh0L.js";
import "./arrow-right-Bjdtr8dz.js";
import "./lightbulb-DKPyzLdJ.js";
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
const BMICalculator = () => {
  const { saveCalculation } = useCalculatorHistory();
  const { toast } = useToast();
  const [height, setHeight] = reactExports.useState("");
  const [weight, setWeight] = reactExports.useState("");
  const [unit, setUnit] = reactExports.useState("imperial");
  const [result, setResult] = reactExports.useState(null);
  const calculateBMI = () => {
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
    if (!heightNum || !weightNum || heightNum <= 0 || weightNum <= 0) {
      setResult(null);
      return;
    }
    let bmi;
    if (unit === "metric") {
      const heightInM = heightNum / 100;
      bmi = weightNum / (heightInM * heightInM);
    } else {
      bmi = weightNum / (heightNum * heightNum) * 703;
    }
    let category;
    let description;
    let healthyRange;
    let recommendations;
    let riskLevel;
    if (bmi < 16) {
      category = "Severely Underweight";
      description = "Significantly below normal weight range";
      riskLevel = "high";
      recommendations = [
        "Seek immediate medical attention",
        "Work with healthcare team including nutritionist",
        "Address potential eating disorders or medical conditions",
        "Focus on safe, medically supervised weight gain"
      ];
    } else if (bmi < 18.5) {
      category = "Underweight";
      description = "Below normal weight range";
      riskLevel = "moderate";
      recommendations = [
        "Consult with a healthcare provider or nutritionist",
        "Focus on nutrient-dense, calorie-rich foods",
        "Consider strength training to build muscle mass",
        "Monitor for underlying health conditions"
      ];
    } else if (bmi < 25) {
      category = "Normal Weight";
      description = "Healthy weight range";
      riskLevel = "low";
      recommendations = [
        "Maintain current healthy lifestyle",
        "Continue regular physical activity",
        "Eat a balanced, nutritious diet",
        "Monitor weight periodically"
      ];
    } else if (bmi < 30) {
      category = "Overweight";
      description = "Above normal weight range";
      riskLevel = "moderate";
      recommendations = [
        "Aim for gradual weight loss of 1-2 lbs per week",
        "Increase physical activity to 150+ minutes weekly",
        "Focus on portion control and healthy eating",
        "Consider consulting a healthcare provider"
      ];
    } else if (bmi < 35) {
      category = "Obese Class I";
      description = "Moderately obese";
      riskLevel = "high";
      recommendations = [
        "Consult healthcare provider for comprehensive plan",
        "Consider medically supervised weight loss",
        "Focus on sustainable lifestyle changes",
        "Regular monitoring of blood pressure and diabetes risk"
      ];
    } else if (bmi < 40) {
      category = "Obese Class II";
      description = "Severely obese";
      riskLevel = "high";
      recommendations = [
        "Immediate medical consultation required",
        "Consider comprehensive weight management program",
        "Evaluate for bariatric surgery options",
        "Close monitoring of cardiovascular health"
      ];
    } else {
      category = "Obese Class III";
      description = "Very severely obese (morbidly obese)";
      riskLevel = "high";
      recommendations = [
        "Urgent medical intervention recommended",
        "Comprehensive evaluation by obesity specialist",
        "Strong consideration for bariatric surgery",
        "Intensive medical monitoring required"
      ];
    }
    if (unit === "metric") {
      const heightInM = heightNum / 100;
      const minWeight = Math.round(18.5 * heightInM * heightInM * 10) / 10;
      const maxWeight = Math.round(24.9 * heightInM * heightInM * 10) / 10;
      healthyRange = `${minWeight} - ${maxWeight} kg`;
    } else {
      const minWeight = Math.round(18.5 * heightNum * heightNum / 703 * 10) / 10;
      const maxWeight = Math.round(24.9 * heightNum * heightNum / 703 * 10) / 10;
      healthyRange = `${minWeight} - ${maxWeight} lbs`;
    }
    setResult({
      bmi: Math.round(bmi * 10) / 10,
      category,
      description,
      healthyRange,
      recommendations,
      riskLevel
    });
  };
  const handleSaveCalculation = () => {
    if (!result) {
      toast({
        title: "No calculation to save",
        description: "Please complete the form to generate results first.",
        variant: "destructive"
      });
      return;
    }
    saveCalculation({
      calculatorType: "bmi",
      calculatorName: "BMI Calculator",
      inputs: {
        height: parseFloat(height),
        weight: parseFloat(weight),
        unit
      },
      results: {
        bmi: result.bmi,
        category: result.category,
        healthyRange: result.healthyRange,
        riskLevel: result.riskLevel
      }
    });
    toast({
      title: "Calculation saved!",
      description: "View it in your calculation history."
    });
  };
  reactExports.useEffect(() => {
    calculateBMI();
  }, [height, weight, unit]);
  const getCategoryColor = (category) => {
    switch (category) {
      case "Underweight":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "Normal Weight":
        return "text-green-600 bg-green-50 border-green-200";
      case "Overweight":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "Obese":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "BMI Calculator - Body Mass Index Calculator with Health Insights",
      description: "Calculate your BMI (Body Mass Index) with our comprehensive calculator. Get personalized health recommendations, understand BMI categories, and learn about healthy weight ranges.",
      keywords: "BMI calculator, body mass index, weight calculator, health calculator, BMI chart, healthy weight, obesity calculator",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-5 w-5" }),
              "BMI Calculator"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter your height and weight to calculate your Body Mass Index and get personalized health recommendations" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium mb-3 block", children: "Unit System" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioGroup, { value: unit, onValueChange: (value) => setUnit(value), className: "flex gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "imperial", id: "imperial" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "imperial", children: "Imperial (ft/in, lbs)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "metric", id: "metric" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "metric", children: "Metric (cm, kg)" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "height", children: [
                  "Height ",
                  unit === "metric" ? "(cm)" : "(inches)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "height",
                    type: "number",
                    placeholder: unit === "metric" ? "175" : "70",
                    value: height,
                    onChange: (e) => setHeight(e.target.value)
                  }
                ),
                unit === "imperial" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: `Tip: 5'10" = 70 inches, 6'0" = 72 inches` })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "weight", children: [
                  "Weight ",
                  unit === "metric" ? "(kg)" : "(lbs)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "weight",
                    type: "number",
                    placeholder: unit === "metric" ? "70" : "150",
                    value: weight,
                    onChange: (e) => setWeight(e.target.value)
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleSaveCalculation, variant: "outline", className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
            "Save to History"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIAnalysis,
            {
              analysisRequest: {
                calculatorType: "bmi",
                data: {
                  bmi: result.bmi,
                  category: result.category,
                  height: parseFloat(height) || 0,
                  weight: parseFloat(weight) || 0,
                  unit,
                  riskLevel: result.riskLevel,
                  idealWeightRange: {
                    min: unit === "metric" ? Math.round(18.5 * Math.pow(parseFloat(height) / 100, 2)) : Math.round(18.5 * Math.pow(parseFloat(height), 2) / 703),
                    max: unit === "metric" ? Math.round(24.9 * Math.pow(parseFloat(height) / 100, 2)) : Math.round(24.9 * Math.pow(parseFloat(height), 2) / 703)
                  }
                }
              },
              autoRun: true,
              title: "AI Health Analysis",
              description: "Get personalized health recommendations based on your BMI category and individual profile."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `border-2 ${getCategoryColor(result.category)}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-center", children: "Your BMI Result" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "text-center space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl font-bold", children: result.bmi }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-2xl font-semibold ${getCategoryColor(result.category).split(" ")[0]}`, children: result.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: result.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/50 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Healthy weight range for your height:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: result.healthyRange })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5 text-red-500" }),
              "Personalized Recommendations"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: result.recommendations.map((rec, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: rec })
            ] }, index)) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "BMI Categories Chart" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
              { range: "Below 18.5", category: "Underweight", color: "bg-blue-500" },
              { range: "18.5 - 24.9", category: "Normal Weight", color: "bg-green-500" },
              { range: "25.0 - 29.9", category: "Overweight", color: "bg-yellow-500" },
              { range: "30.0 and above", category: "Obese", color: "bg-red-500" }
            ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded ${item.color}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium w-32", children: item.range }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600", children: item.category }),
              result.category === item.category && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-medium", children: "← Your Category" })
            ] }, index)) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            EnhancedAIAnalysis,
            {
              calculatorType: "bmi",
              data: {
                bmi: (result == null ? void 0 : result.bmi) || 0,
                category: (result == null ? void 0 : result.category) || "",
                height: parseFloat(height) || 0,
                weight: parseFloat(weight) || 0,
                unit,
                riskLevel: (result == null ? void 0 : result.riskLevel) || "low",
                idealWeightRange: { min: 0, max: 0 }
                // Could calculate based on BMI range
              },
              className: "mt-8"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "bmi",
              inputs: {
                height: parseFloat(height) || 0,
                weight: parseFloat(weight) || 0,
                unit
              },
              results: result || {},
              title: "BMI Calculation",
              className: "mt-6"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Understanding Body Mass Index (BMI)" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-700 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Body Mass Index (BMI) is a widely used screening tool that estimates body fat based on height and weight. Developed in the 1830s by Belgian mathematician Adolphe Quetelet, BMI provides a quick assessment of weight status and potential health risks associated with being underweight, normal weight, overweight, or obese." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "How BMI is Calculated:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Metric:" }),
                  " BMI = weight (kg) / height (m)²"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Imperial:" }),
                  " BMI = (weight (lbs) / height (inches)²) × 703"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "BMI Categories and Health Implications:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Underweight (BMI < 18.5)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "May indicate malnutrition, eating disorders, or underlying health conditions. Can lead to weakened immunity, osteoporosis, and irregular menstruation." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Normal Weight (BMI 18.5-24.9)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Associated with lowest risk of weight-related health problems. Indicates a healthy balance between height and weight." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Overweight (BMI 25.0-29.9)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Increased risk of heart disease, type 2 diabetes, high blood pressure, and sleep apnea. Prevention focus is key." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Obese (BMI ≥ 30.0)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Significantly increased risk of serious health conditions including cardiovascular disease, diabetes, and certain cancers." })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Limitations and Considerations" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-700 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Important BMI Limitations:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Muscle vs. Fat:" }),
                  " BMI doesn't distinguish between muscle and fat. Athletes and bodybuilders may have high BMIs despite low body fat."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Age and Gender:" }),
                  " BMI doesn't account for age-related muscle loss or gender differences in body composition."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Ethnicity:" }),
                  " Health risks may vary among different ethnic groups at the same BMI levels."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Body Shape:" }),
                  " BMI doesn't consider where fat is distributed (waist vs. hips), which affects health risks."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Overall Health:" }),
                  " BMI doesn't measure fitness level, bone density, or overall health status."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Additional Health Assessments:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Waist Circumference" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Measures abdominal fat. High risk: men >40 inches, women >35 inches." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Waist-to-Hip Ratio" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Assesses fat distribution. Higher ratios indicate increased health risks." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Body Fat Percentage" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "More accurate than BMI for assessing body composition and health risks." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Overall Fitness" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Cardiovascular fitness, strength, and flexibility are crucial health indicators." })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Healthy Weight Management Strategies" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-700 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "For Weight Loss:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Create moderate calorie deficit (500-750 calories/day)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Focus on whole, nutrient-dense foods" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Increase protein intake to preserve muscle" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Combine cardio and strength training" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Aim for 1-2 pounds loss per week" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Stay hydrated and get adequate sleep" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consider professional guidance" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "For Weight Gain:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Increase calorie intake with nutritious foods" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Focus on healthy fats and complex carbs" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Eat frequent, smaller meals" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Include strength training to build muscle" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consider protein supplements if needed" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Address any underlying health issues" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Monitor progress with healthcare provider" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Lifestyle Factors for Healthy Weight:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-50 p-4 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Regular physical activity (150+ minutes/week)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Balanced, portion-controlled diet" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Adequate sleep (7-9 hours nightly)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Stress management techniques" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Regular health screenings" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Strong social support system" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consistent daily routines" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Mindful eating practices" })
              ] }) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Frequently Asked Questions" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-700 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Is BMI accurate for everyone?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "BMI is a useful screening tool but has limitations. It may not accurately reflect health status for athletes, elderly individuals, pregnant women, or people with high muscle mass. Consider additional assessments for a complete health picture." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How often should I check my BMI?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For most adults, checking BMI monthly or quarterly is sufficient unless you're actively working on weight management. Focus more on overall health habits than frequent BMI monitoring." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Can BMI predict my health future?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "BMI indicates increased risk for certain health conditions but doesn't predict individual outcomes. Many factors influence health including genetics, lifestyle, fitness level, and medical history." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What if I'm at the border between categories?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "BMI categories have some flexibility. Focus on overall health trends rather than exact numbers. A BMI of 24.9 vs 25.1 doesn't represent a significant health difference." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Should children use adult BMI calculations?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No, children and teens need age and gender-specific BMI percentiles. Adult BMI categories don't apply to growing bodies. Consult pediatric growth charts or healthcare providers for youth assessments." })
              ] })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5" }),
            "Important Health Disclaimer"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This BMI calculator is for educational purposes and general health awareness only." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• BMI results should not replace professional medical advice, diagnosis, or treatment." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Individual health assessment requires consideration of multiple factors beyond BMI." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Consult healthcare providers for personalized health and weight management guidance." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator is not suitable for pregnant women, children under 18, or professional athletes." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• If you have health concerns or medical conditions, seek professional medical consultation." })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RelatedCalculators, { currentCalculatorId: "bmi" })
      ] })
    }
  );
};
export {
  BMICalculator
};
