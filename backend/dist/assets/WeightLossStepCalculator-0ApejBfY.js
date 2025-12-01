import { r as reactExports, O as useToast, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a3 as Label, U as Input, a5 as Alert, p as TriangleAlert, a6 as AlertDescription, B as Button, A as Activity, F as Flame } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { P as Progress } from "./progress-BN2f3CdS.js";
import { S as Separator } from "./separator-CgM4Fzdg.js";
import { A as AIAnalysis } from "./AIAnalysis-DnR9Up6F.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { S as ShareResultsModal } from "./ShareResultsModal-Bh2rdxnz.js";
import { T as Target } from "./target-1ApqtYDG.js";
import { M as MapPin } from "./map-pin-CJs2GFz9.js";
import { C as CircleCheckBig } from "./circle-check-big-BoxGYPKG.js";
import { S as Share2 } from "./share-2-ViScha7M.js";
import { C as Copy } from "./copy-DGMuG98H.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
import "./tabs-BNSAX0su.js";
import "./brain-U3SZm3t9.js";
import "./loader-circle-BYW7QwsU.js";
import "./link-DxXhzsoi.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./linkedin-BSJyfSWT.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./EnhancedAIAnalysis-BZiQW2bt.js";
import "./arrow-right-CtOKJdMG.js";
import "./lightbulb-doNczJxC.js";
import "./instagram-C8g9yIpG.js";
const WeightLossStepCalculator = () => {
  const [currentWeight, setCurrentWeight] = reactExports.useState("");
  const [height, setHeight] = reactExports.useState("");
  const [heightFeet, setHeightFeet] = reactExports.useState("");
  const [heightInches, setHeightInches] = reactExports.useState("");
  const [targetWeightLoss, setTargetWeightLoss] = reactExports.useState("");
  const [timeframe, setTimeframe] = reactExports.useState("");
  const [timeframeUnit, setTimeframeUnit] = reactExports.useState("weeks");
  const [weightUnit, setWeightUnit] = reactExports.useState("kg");
  const [heightUnit, setHeightUnit] = reactExports.useState("cm");
  const [results, setResults] = reactExports.useState(null);
  const [analysisData, setAnalysisData] = reactExports.useState(null);
  const [isCalculating, setIsCalculating] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [showShareModal, setShowShareModal] = reactExports.useState(false);
  const { toast } = useToast();
  const validateInputs = () => {
    if (!currentWeight || parseFloat(currentWeight) <= 0) {
      return "Please enter a valid current weight";
    }
    if (!targetWeightLoss || parseFloat(targetWeightLoss) <= 0) {
      return "Please enter a valid target weight loss";
    }
    if (!timeframe || parseFloat(timeframe) <= 0) {
      return "Please enter a valid timeframe";
    }
    if (heightUnit === "cm") {
      if (!height || parseFloat(height) <= 0) {
        return "Please enter a valid height";
      }
    } else {
      if (!heightFeet || parseFloat(heightFeet) <= 0 || !heightInches || parseFloat(heightInches) < 0) {
        return "Please enter valid height in feet and inches";
      }
    }
    const currentWeightValue = parseFloat(currentWeight);
    const targetWeightLossValue = parseFloat(targetWeightLoss);
    if (targetWeightLossValue >= currentWeightValue) {
      return "Target weight loss cannot be equal to or greater than current weight";
    }
    return null;
  };
  const convertWeight = (value, from) => {
    if (from === "lbs") {
      return value * 0.453592;
    }
    return value;
  };
  const calculateResults = () => {
    let currentWeightKg = convertWeight(parseFloat(currentWeight), weightUnit);
    let targetWeightLossKg = convertWeight(parseFloat(targetWeightLoss), weightUnit);
    let heightCm;
    if (heightUnit === "cm") {
      heightCm = parseFloat(height);
    } else {
      const totalInches = parseFloat(heightFeet) * 12 + parseFloat(heightInches);
      heightCm = totalInches * 2.54;
    }
    let timeframeDays;
    const timeframeValue = parseFloat(timeframe);
    switch (timeframeUnit) {
      case "days":
        timeframeDays = timeframeValue;
        break;
      case "weeks":
        timeframeDays = timeframeValue * 7;
        break;
      case "months":
        timeframeDays = timeframeValue * 30.44;
        break;
      default:
        timeframeDays = timeframeValue * 7;
    }
    const caloriesPerKgLoss = 7700;
    const caloriesPerStep = currentWeightKg * 8e-4 + 0.04;
    const strideLength = heightCm * 0.414 / 100;
    const totalCaloriesNeeded = caloriesPerKgLoss * targetWeightLossKg;
    const totalStepsRequired = totalCaloriesNeeded / caloriesPerStep;
    const stepsPerDay = Math.round(totalStepsRequired / timeframeDays);
    const distancePerDay = stepsPerDay * strideLength / 1e3;
    const caloriesPerDay = Math.round(stepsPerDay * caloriesPerStep);
    const heightM = heightCm / 100;
    const currentBMI = Math.round(currentWeightKg / (heightM * heightM) * 10) / 10;
    const targetWeight = currentWeightKg - targetWeightLossKg;
    const targetBMI = Math.round(targetWeight / (heightM * heightM) * 10) / 10;
    const weeklyWeightLoss = Math.round(targetWeightLossKg * 7 / timeframeDays * 100) / 100;
    return {
      stepsPerDay,
      distancePerDay: Math.round(distancePerDay * 100) / 100,
      // Round to 2 decimal places
      caloriesPerDay,
      totalStepsRequired: Math.round(totalStepsRequired),
      strideLength,
      currentBMI,
      targetWeight,
      targetBMI,
      weeklyWeightLoss,
      timeframeDays
    };
  };
  const handleCalculate = async () => {
    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    setIsCalculating(true);
    try {
      const calculatedResults = calculateResults();
      setResults(calculatedResults);
      const analysisPayload = {
        currentWeight: parseFloat(currentWeight),
        height: heightUnit === "cm" ? parseFloat(height) : parseFloat(heightFeet) * 12 + parseFloat(heightInches),
        targetWeightLoss: parseFloat(targetWeightLoss),
        timeframeDays: calculatedResults.timeframeDays,
        weightUnit,
        heightUnit,
        stepsPerDay: calculatedResults.stepsPerDay,
        distancePerDay: calculatedResults.distancePerDay,
        caloriesPerDay: calculatedResults.caloriesPerDay,
        totalStepsRequired: calculatedResults.totalStepsRequired,
        strideLength: calculatedResults.strideLength,
        currentBMI: calculatedResults.currentBMI,
        targetWeight: calculatedResults.targetWeight,
        targetBMI: calculatedResults.targetBMI,
        weeklyWeightLoss: calculatedResults.weeklyWeightLoss
      };
      setAnalysisData(analysisPayload);
    } catch (error2) {
      setError("An error occurred during calculation. Please try again.");
      console.error("Calculation error:", error2);
    } finally {
      setIsCalculating(false);
    }
  };
  const handleShare = async () => {
    if (!results) return;
    const shareText = `🎯 My Weight Loss Walking Plan:
• ${results.stepsPerDay.toLocaleString()} steps/day
• ${results.distancePerDay.toFixed(1)} km daily
• ${results.caloriesPerDay} calories burned
• Goal: ${targetWeightLoss} ${weightUnit} in ${timeframe} ${timeframeUnit}

Calculated with Smart Calculator Hubs`;
    const canShare = navigator.share && typeof navigator.share === "function" && window.isSecureContext && navigator.canShare;
    if (canShare) {
      const shareData = {
        title: "My Weight Loss Step Calculator Results",
        text: shareText,
        url: window.location.href
      };
      try {
        if (navigator.canShare && !navigator.canShare(shareData)) {
          throw new Error("Share data not supported");
        }
        await navigator.share(shareData);
        toast({
          title: "Shared successfully!",
          description: "Your results have been shared"
        });
      } catch (error2) {
        console.error("Error sharing:", error2);
        copyToClipboard(shareText);
      }
    } else {
      copyToClipboard(shareText);
    }
  };
  const copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        toast({
          title: "Copied to clipboard!",
          description: "Share your results on social media"
        });
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand("copy");
          toast({
            title: "Copied to clipboard!",
            description: "Share your results on social media"
          });
        } catch (fallbackError) {
          console.error("Fallback copy failed:", fallbackError);
          toast({
            title: "Copy failed",
            description: "Please manually copy your results",
            variant: "destructive"
          });
        } finally {
          document.body.removeChild(textArea);
        }
      }
    } catch (error2) {
      console.error("Clipboard error:", error2);
      toast({
        title: "Copy failed",
        description: "Please manually copy your results",
        variant: "destructive"
      });
    }
  };
  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return { category: "Underweight", color: "text-blue-600" };
    if (bmi < 25) return { category: "Normal", color: "text-green-600" };
    if (bmi < 30) return { category: "Overweight", color: "text-yellow-600" };
    return { category: "Obese", color: "text-red-600" };
  };
  const getMotivationalMessage = () => {
    if (!results) return "";
    const { stepsPerDay, distancePerDay, timeframeDays } = results;
    return `Walking ${stepsPerDay.toLocaleString()} steps daily (${distancePerDay.toFixed(1)} km) will help you lose ${parseFloat(targetWeightLoss)} ${weightUnit} in ${Math.round(timeframeDays)} days! 🎯`;
  };
  const getProgressCategory = (steps) => {
    if (steps <= 5e3) return { label: "Light Activity", percentage: 25, color: "bg-blue-500" };
    if (steps <= 8e3) return { label: "Moderate Activity", percentage: 50, color: "bg-green-500" };
    if (steps <= 12e3) return { label: "Active", percentage: 75, color: "bg-yellow-500" };
    return { label: "Very Active", percentage: 100, color: "bg-red-500" };
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Weight Loss Step Calculator",
      description: "Calculate daily steps needed to reach your weight loss goals through walking",
      keywords: "weight loss calculator, step calculator, walking for weight loss, daily steps, calorie burn calculator",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-6 w-6" }),
              "Weight Loss Goals"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter your current stats and weight loss target to calculate your daily walking requirements" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "currentWeight", children: "Current Weight" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "currentWeight",
                      type: "number",
                      placeholder: "70",
                      value: currentWeight,
                      onChange: (e) => setCurrentWeight(e.target.value),
                      className: "flex-1"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: weightUnit, onValueChange: setWeightUnit, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "kg", children: "kg" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "lbs", children: "lbs" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "height", children: "Height" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  heightUnit === "cm" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "height",
                      type: "number",
                      placeholder: "170",
                      value: height,
                      onChange: (e) => setHeight(e.target.value),
                      className: "flex-1"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "number",
                        placeholder: "5",
                        value: heightFeet,
                        onChange: (e) => setHeightFeet(e.target.value),
                        className: "flex-1"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center text-sm text-muted-foreground", children: "ft" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "number",
                        placeholder: "8",
                        value: heightInches,
                        onChange: (e) => setHeightInches(e.target.value),
                        className: "flex-1"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center text-sm text-muted-foreground", children: "in" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: heightUnit, onValueChange: setHeightUnit, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cm", children: "cm" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "ft", children: "ft" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "targetWeightLoss", children: "Target Weight Loss" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "targetWeightLoss",
                      type: "number",
                      placeholder: "5",
                      value: targetWeightLoss,
                      onChange: (e) => setTargetWeightLoss(e.target.value),
                      className: "flex-1"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-3 py-2 bg-muted rounded text-sm", children: weightUnit })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "timeframe", children: "Timeframe" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "timeframe",
                      type: "number",
                      placeholder: "12",
                      value: timeframe,
                      onChange: (e) => setTimeframe(e.target.value),
                      className: "flex-1"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: timeframeUnit, onValueChange: setTimeframeUnit, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "days", children: "days" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "weeks", children: "weeks" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "months", children: "months" })
                    ] })
                  ] })
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
                className: "w-full",
                size: "lg",
                children: isCalculating ? "Calculating..." : "Calculate My Daily Steps"
              }
            )
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-6 w-6" }),
                "Your Daily Walking Plan"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Here's what you need to do daily to reach your weight loss goal" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Activity Level" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: getProgressCategory(results.stepsPerDay).color, children: getProgressCategory(results.stepsPerDay).label })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Progress,
                  {
                    value: getProgressCategory(results.stepsPerDay).percentage,
                    className: "h-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5 text-blue-600" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-blue-600", children: "Daily Steps" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-700", children: results.stepsPerDay.toLocaleString() }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "steps per day" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-green-600" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-green-600", children: "Distance" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-green-700", children: results.distancePerDay.toFixed(1) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "km per day" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-5 w-5 text-orange-600" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-orange-600", children: "Calories" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-orange-700", children: results.caloriesPerDay }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "burned per day" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { className: "text-green-700", children: getMotivationalMessage() })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 pt-4 border-t", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Body Metrics" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Current BMI:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: getBMICategory(results.currentBMI).color, children: [
                        results.currentBMI.toFixed(1),
                        " (",
                        getBMICategory(results.currentBMI).category,
                        ")"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Target BMI:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: getBMICategory(results.targetBMI).color, children: [
                        results.targetBMI.toFixed(1),
                        " (",
                        getBMICategory(results.targetBMI).category,
                        ")"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Weekly Loss Rate:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: results.weeklyWeightLoss > 1 ? "text-orange-600" : "text-green-600", children: [
                        results.weeklyWeightLoss.toFixed(1),
                        " ",
                        weightUnit,
                        "/week"
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Walking Details" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Stride Length:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        (results.strideLength * 100).toFixed(0),
                        " cm"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Steps Needed:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: results.totalStepsRequired.toLocaleString() })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Walking Time:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "~",
                        Math.round(results.stepsPerDay / 100),
                        " minutes"
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleShare, variant: "outline", className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-4 w-4 mr-2" }),
                  "Share Results"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    onClick: () => copyToClipboard(`Steps: ${results.stepsPerDay.toLocaleString()}/day, Distance: ${results.distancePerDay.toFixed(1)} km, Calories: ${results.caloriesPerDay}/day`),
                    variant: "outline",
                    size: "icon",
                    title: "Copy to clipboard",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4" })
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Medical Disclaimer:" }),
              " Always consult with a healthcare professional before starting any weight loss program. This calculator provides estimates based on general formulas and should not replace professional medical advice."
            ] })
          ] }),
          analysisData && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AIAnalysis,
              {
                analysisRequest: {
                  calculatorType: "weight-loss-steps",
                  data: analysisData
                },
                autoRun: true,
                title: "AI-Powered Weight Loss Analysis",
                description: "Get personalized recommendations for your weight loss journey"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ExportShareButtons,
              {
                calculatorType: "weight-loss-steps",
                inputs: {
                  currentWeight: parseFloat(currentWeight) || 0,
                  targetWeightLoss: parseFloat(targetWeightLoss) || 0,
                  timeframe: parseFloat(timeframe) || 0,
                  timeframeUnit,
                  height: parseFloat(height) || 0,
                  weightUnit,
                  heightUnit
                },
                results: {
                  stepsPerDay: (results == null ? void 0 : results.stepsPerDay) || 0,
                  distancePerDay: (results == null ? void 0 : results.distancePerDay) || 0,
                  caloriesPerDay: (results == null ? void 0 : results.caloriesPerDay) || 0,
                  currentBMI: (results == null ? void 0 : results.currentBMI) || 0,
                  targetBMI: (results == null ? void 0 : results.targetBMI) || 0,
                  weeklyWeightLoss: (results == null ? void 0 : results.weeklyWeightLoss) || 0
                },
                title: "Weight Loss Step Calculator Report",
                className: "mt-6"
              }
            )
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ShareResultsModal,
          {
            isOpen: showShareModal,
            onClose: () => setShowShareModal(false),
            shareData: {
              stepsPerDay: results.stepsPerDay,
              distancePerDay: results.distancePerDay,
              caloriesPerDay: results.caloriesPerDay,
              targetWeightLoss,
              timeframe,
              timeframeUnit,
              weightUnit,
              currentBMI: results.currentBMI,
              targetBMI: results.targetBMI,
              weeklyWeightLoss: results.weeklyWeightLoss
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Complete Guide to Weight Loss Through Walking" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "A comprehensive understanding of how walking can be your most effective weight loss tool" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose prose-sm max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "Introduction: Why Walking Works for Weight Loss" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Walking is one of the most accessible, sustainable, and effective forms of exercise for weight loss. Unlike high-intensity workouts that can be intimidating or cause injury, walking provides a low-impact, gentle approach to burning calories and improving overall health. This Weight Loss Step Calculator uses scientifically proven formulas to determine exactly how many steps you need to take daily to reach your weight loss goals." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2", children: "The beauty of walking lies in its simplicity and sustainability. You don't need expensive equipment, gym memberships, or specialized training. All you need is a good pair of shoes and the determination to put one foot in front of the other. Research consistently shows that people who walk regularly are more successful at maintaining long-term weight loss compared to those who rely solely on restrictive diets." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "The Science Behind Our Calculations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our Weight Loss Step Calculator is built on well-established scientific principles that govern energy expenditure and fat loss. Understanding these foundations helps you appreciate why the recommendations are accurate and effective." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "The 7,700 Calorie Rule" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The cornerstone of our calculation is the widely accepted principle that approximately 7,700 calories equals one kilogram of body fat. This figure comes from the fact that one gram of fat contains 9 calories, and body fat tissue is roughly 85% fat, making the caloric value of body fat about 7.7 calories per gram, or 7,700 calories per kilogram." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Calorie Burn Per Step Formula" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our calculator uses the formula: 0.57 × body weight (kg) ÷ 1,000 calories per step. This formula is derived from extensive research on walking biomechanics and energy expenditure. The 0.57 factor represents the average energy cost of taking one step relative to body weight, accounting for the mechanical work required to move your body forward and the metabolic processes involved." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Stride Length Calculation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "To estimate distance, we use the formula: Height (cm) × 0.415 ÷ 100 meters. This relationship between height and stride length has been validated through numerous biomechanical studies. Taller individuals naturally take longer steps, while shorter people take more frequent, shorter steps. The 0.415 factor represents the average ratio of stride length to height across diverse populations." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "Understanding Your Results" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Daily Step Target" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Your calculated daily step target represents the minimum number of steps needed to create the caloric deficit required for your weight loss goal. This number might seem daunting initially, but remember that it includes all steps taken throughout your day, not just dedicated walking sessions. Many people are surprised to learn they already take 3,000-5,000 steps during normal daily activities." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Distance and Time Commitment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The distance calculation helps you plan your walking sessions effectively. On average, people walk at a pace of 3-4 mph (5-6.5 km/h), meaning each kilometer takes approximately 10-12 minutes to complete. Use this information to schedule your walking time throughout the day, breaking longer distances into manageable segments." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Caloric Expenditure" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The daily calorie burn from walking represents only part of your total energy expenditure. Your body also burns calories through your basal metabolic rate (BMR), the thermic effect of food, and other activities. Walking calories are additional to these baseline burns, creating the deficit needed for fat loss." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "Factors That Impact Your Results" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Individual Metabolic Variations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While our calculator provides accurate estimates for most people, individual metabolism can vary by 10-15% from the average. Factors like age, gender, genetics, muscle mass, and hormonal status all influence how efficiently your body burns calories. Some people may see results faster than predicted, while others might need to be more patient." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Walking Intensity and Terrain" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The calculator assumes moderate-intensity walking on level ground. Walking uphill, on sand, or at a brisk pace can increase calorie burn by 25-50%. Conversely, walking downhill or at a very slow pace burns fewer calories. Consider varying your routes to include hills, stairs, or different terrains to maximize your caloric expenditure." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Body Composition Changes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "As you lose weight, your calorie burn per step decreases slightly because you're moving less mass. This is why weight loss often slows down over time. However, if you incorporate strength training alongside walking, you can maintain or even increase muscle mass, keeping your metabolism elevated." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Dietary Considerations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Walking alone may not be sufficient for weight loss if dietary changes aren't made. While our calculator focuses on the exercise component, successful weight loss typically requires a combined approach of increased physical activity and modest caloric restriction through improved food choices." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "How to Implement Your Walking Plan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Starting Gradually" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If your current activity level is low, don't attempt to reach your target step count immediately. Start with a manageable increase of 1,000-2,000 steps above your current daily average, then add another 500-1,000 steps each week until you reach your goal. This progressive approach reduces injury risk and improves long-term adherence." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Tracking Your Progress" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Accurate step tracking is crucial for success. Smartphone apps provide basic tracking, but dedicated fitness trackers or smartwatches offer more precision and motivation through features like step reminders, achievement badges, and social challenges. Consistency in tracking helps identify patterns and maintain accountability." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Creating Walking Habits" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Success comes from making walking a natural part of your daily routine. Take the stairs instead of elevators, park farther from destinations, walk during phone calls, or schedule walking meetings. Small changes accumulate into significant daily step increases without requiring dedicated exercise time." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Weather and Environmental Planning" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Prepare for weather challenges by identifying indoor walking options like shopping malls, gyms, or treadmills. Having backup plans ensures consistency regardless of external conditions. Many successful walkers maintain their routines by embracing all weather conditions with appropriate clothing and gear." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "Advanced Strategies for Maximizing Results" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Interval Walking" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Incorporate periods of brisk walking or brief jogging intervals to increase calorie burn and improve cardiovascular fitness. For example, alternate between 2 minutes of normal walking and 30 seconds of fast walking. This approach can increase total caloric expenditure by 15-25% compared to steady-state walking." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Strength Training Integration" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Combine walking with bodyweight exercises or resistance training 2-3 times per week. Building lean muscle mass increases your resting metabolic rate, meaning you burn more calories even when not exercising. Simple exercises like pushups, squats, and lunges can be done anywhere without equipment." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Nutrition Timing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While not a substitute for overall dietary improvements, timing your nutrition around walks can optimize fat burning. Walking before meals can improve insulin sensitivity and glucose uptake, while walking after meals aids digestion and helps stabilize blood sugar levels." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "Overcoming Common Challenges" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Time Constraints" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Many people believe they don't have time for the recommended daily steps. The solution is breaking walking into smaller chunks throughout the day. Three 10-minute walks are as effective as one 30-minute session for both calorie burning and health benefits. Use lunch breaks, waiting periods, and transition times as walking opportunities." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Motivation and Plateaus" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Weight loss plateaus are normal and expected. When progress stalls, reassess your approach by slightly increasing walking intensity, adding variety to routes, or incorporating other activities. Setting non-weight goals like walking duration, distance milestones, or energy levels helps maintain motivation during plateau periods." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Joint Discomfort" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If joint pain develops, focus on proper footwear, walking surfaces, and gradual progression. Low-impact alternatives like water walking, elliptical machines, or cycling can substitute for traditional walking while maintaining caloric expenditure. Always consult healthcare providers for persistent joint issues." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "Maintaining Long-term Success" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sustainable weight loss requires permanent lifestyle changes rather than temporary interventions. The walking habits you develop during your weight loss journey should continue after reaching your goal weight, albeit possibly at a slightly reduced intensity for maintenance rather than further loss." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2", children: "Research shows that people who maintain significant weight loss average 10,000-15,000 steps daily. This high activity level becomes easier and more enjoyable as fitness improves and walking becomes an established habit. Many successful maintainers report that walking is no longer seen as exercise but as an essential, enjoyable part of their daily routine." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2", children: "Remember that our Weight Loss Step Calculator provides a roadmap, but your journey may have detours and adjustments along the way. Stay flexible, patient, and committed to the process rather than fixated solely on outcomes. The habits you build while working toward your weight loss goal will serve your health and well-being for years to come." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "Safety and Medical Considerations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While walking is generally safe for most people, certain conditions require medical consultation before beginning an intensive walking program. These include heart disease, diabetes, joint problems, or any condition that affects mobility or exercise tolerance. Your healthcare provider can help determine appropriate intensity levels and modifications for your specific situation." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2", children: "Pay attention to your body's signals during your walking program. Mild muscle soreness is normal, especially when starting, but sharp pains, persistent joint discomfort, chest pain, or excessive fatigue warrant medical evaluation. Proper hydration, appropriate footwear, and gradual progression minimize most risks associated with increased walking activity." })
            ] })
          ] }) })
        ] })
      ] })
    }
  );
};
export {
  WeightLossStepCalculator as default
};
