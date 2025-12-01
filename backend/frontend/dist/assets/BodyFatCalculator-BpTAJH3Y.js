import { r as reactExports, Q as useToast, j as jsxRuntimeExports, a6 as Alert, a5 as Info, a7 as AlertDescription, f as Card, B as Button, F as Flame, A as Activity, H as Heart } from "./index-CK9G4vW7.js";
import { E as EnhancedHealthCalculatorLayout } from "./EnhancedHealthCalculatorLayout-pWV85Gz2.js";
import { U as UnitToggle, S as SexInput, W as WeightInput, C as CircumferenceInput } from "./SharedInputs-Cu64CB2l.js";
import { s as safeDecimal, D as Decimal, l as lbsToKg, i as inchesToCm, f as formatNumber } from "./utils-C5YzN_36.js";
import { A as AutoAdSlot } from "./AutoAdSlot-DNRO9HTk.js";
import { A as AmazonAffiliate } from "./AmazonAffiliate-Ce911NQ8.js";
import { H as HealthSocialShare } from "./HealthSocialShare-SHMBdS6h.js";
import { T as Target } from "./target-4JeIm6Yk.js";
import { A as Award } from "./award-Bl7Nn9A9.js";
import { C as Copy } from "./copy-BqV-1o4k.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./select-CNBeqKNb.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./check-DTsA1WpX.js";
import "./radio-group-DJJORUxe.js";
import "./share-2-SpOWc355.js";
import "./twitter-CFAqYlq6.js";
import "./facebook-BX8Qa6cK.js";
import "./message-circle-DZtFORhh.js";
import "./mail-DX6y6Mo7.js";
import "./link-2-D14Yk-9q.js";
function calculateBodyFat(input) {
  const { sex, heightCm, neckCm, waistCm, hipCm = 0, weightKg } = input;
  const height = safeDecimal(heightCm);
  const neck = safeDecimal(neckCm);
  const waist = safeDecimal(waistCm);
  const hip = safeDecimal(hipCm);
  const weight = safeDecimal(weightKg);
  let bodyFatPercentage;
  if (sex === "male") {
    const diff = waist.minus(neck);
    if (diff.lte(0)) {
      throw new Error("Waist circumference must be greater than neck circumference");
    }
    const log10Diff = Decimal.log10(diff.toNumber());
    const log10Height = Decimal.log10(height.toNumber());
    const denominator = safeDecimal(1.0324).minus(safeDecimal(0.19077).times(log10Diff)).plus(safeDecimal(0.15456).times(log10Height));
    bodyFatPercentage = safeDecimal(495).dividedBy(denominator).minus(450);
  } else {
    const sum = waist.plus(hip).minus(neck);
    if (sum.lte(0)) {
      throw new Error("Waist + hip must be greater than neck circumference");
    }
    const log10Sum = Decimal.log10(sum.toNumber());
    const log10Height = Decimal.log10(height.toNumber());
    const denominator = safeDecimal(1.29579).minus(safeDecimal(0.35004).times(log10Sum)).plus(safeDecimal(0.221).times(log10Height));
    bodyFatPercentage = safeDecimal(495).dividedBy(denominator).minus(450);
  }
  if (bodyFatPercentage.lt(0)) {
    bodyFatPercentage = safeDecimal(0);
  }
  if (bodyFatPercentage.gt(100)) {
    bodyFatPercentage = safeDecimal(100);
  }
  const fatMass = weight.times(bodyFatPercentage).dividedBy(100);
  const leanMass = weight.minus(fatMass);
  return {
    bodyFatPercentage: bodyFatPercentage.toNumber(),
    fatMassKg: fatMass.toNumber(),
    leanMassKg: leanMass.toNumber()
  };
}
function BodyFatCalculator() {
  const [sex, setSex] = reactExports.useState("male");
  const [unit, setUnit] = reactExports.useState("metric");
  const [weight, setWeight] = reactExports.useState(75);
  const [height, setHeight] = reactExports.useState(175);
  const [neck, setNeck] = reactExports.useState(38);
  const [waist, setWaist] = reactExports.useState(85);
  const [hip, setHip] = reactExports.useState(95);
  const [result, setResult] = reactExports.useState(null);
  const [error, setError] = reactExports.useState("");
  const { toast } = useToast();
  reactExports.useEffect(() => {
    calculate();
  }, [sex, unit, weight, height, neck, waist, hip]);
  const calculate = () => {
    setError("");
    try {
      const weightKg = unit === "metric" ? weight : lbsToKg(weight);
      const heightCm = unit === "metric" ? height : inchesToCm(height);
      const neckCm = unit === "metric" ? neck : inchesToCm(neck);
      const waistCm = unit === "metric" ? waist : inchesToCm(waist);
      const hipCm = unit === "metric" ? hip : inchesToCm(hip);
      const res = calculateBodyFat({
        sex,
        heightCm,
        neckCm,
        waistCm,
        hipCm: sex === "female" ? hipCm : void 0,
        weightKg
      });
      setResult(res);
    } catch (err) {
      setError(err.message || "Calculation error");
      setResult(null);
    }
  };
  const copyResults = () => {
    if (!result) return;
    const text = `Body Fat: ${formatNumber(result.bodyFatPercentage)}%
Fat Mass: ${formatNumber(result.fatMassKg)} kg
Lean Mass: ${formatNumber(result.leanMassKg)} kg`;
    navigator.clipboard.writeText(text);
    toast({ title: "✅ Copied to clipboard!" });
  };
  const getBodyFatCategory = (bf, sex2) => {
    if (sex2 === "male") {
      if (bf < 6) return { name: "🏆 Essential Fat", color: "text-red-600", bg: "bg-red-100" };
      if (bf < 14) return { name: "⭐ Athletes", color: "text-blue-600", bg: "bg-blue-100" };
      if (bf < 18) return { name: "💪 Fitness", color: "text-green-600", bg: "bg-green-100" };
      if (bf < 25) return { name: "✅ Average", color: "text-yellow-600", bg: "bg-yellow-100" };
      return { name: "⚠️ Obese", color: "text-orange-600", bg: "bg-orange-100" };
    } else {
      if (bf < 14) return { name: "🏆 Essential Fat", color: "text-red-600", bg: "bg-red-100" };
      if (bf < 21) return { name: "⭐ Athletes", color: "text-blue-600", bg: "bg-blue-100" };
      if (bf < 25) return { name: "💪 Fitness", color: "text-green-600", bg: "bg-green-100" };
      if (bf < 32) return { name: "✅ Average", color: "text-yellow-600", bg: "bg-yellow-100" };
      return { name: "⚠️ Obese", color: "text-orange-600", bg: "bg-orange-100" };
    }
  };
  const category = result ? getBodyFatCategory(result.bodyFatPercentage, sex) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    EnhancedHealthCalculatorLayout,
    {
      title: "🎯 Body Fat Percentage Calculator",
      description: "Calculate your body fat percentage using the scientifically validated US Navy circumference method. 100% accurate to the formula with instant results!",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-16 h-16 text-blue-600" }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5 text-blue-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "⚡ Lightning-fast & 100% Accurate:" }),
            " Results are computed with perfect mathematical precision using the US Navy formula. Measurements are more accurate when taken in the morning. Real-world physiology varies; consult a healthcare professional for personalized advice."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 shadow-xl border-2 border-blue-200 dark:border-blue-800 animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-6 h-6 text-blue-600" }),
            "Enter Your Measurements"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UnitToggle, { value: unit, onChange: setUnit }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SexInput, { value: sex, onChange: setSex }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(WeightInput, { value: weight, onChange: setWeight, unit }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CircumferenceInput,
              {
                label: "📏 Neck Circumference",
                id: "neck",
                value: neck,
                onChange: setNeck,
                unit
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CircumferenceInput,
              {
                label: "📏 Waist Circumference",
                id: "waist",
                value: waist,
                onChange: setWaist,
                unit
              }
            ),
            sex === "female" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              CircumferenceInput,
              {
                label: "📏 Hip Circumference",
                id: "hip",
                value: hip,
                onChange: setHip,
                unit
              }
            )
          ] })
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "destructive", className: "animate-shake", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: error }) }),
        result && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 shadow-xl border-2 border-green-200 dark:border-green-800 animate-slide-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-8 h-8 text-green-600" }),
            "Your Results"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg transform hover:scale-105 transition-transform", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 mb-2", children: "Body Fat %" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-5xl font-bold text-blue-600 mb-2", children: [
                formatNumber(result.bodyFatPercentage),
                "%"
              ] }),
              category && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block px-3 py-1 rounded-full text-sm font-semibold ${category.bg} ${category.color}`, children: category.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg transform hover:scale-105 transition-transform", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 mb-2", children: "Fat Mass 🔥" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl font-bold text-orange-600", children: formatNumber(result.fatMassKg) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-1", children: "kg" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg transform hover:scale-105 transition-transform", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 mb-2", children: "Lean Mass 💪" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl font-bold text-green-600", children: formatNumber(result.leanMassKg) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-1", children: "kg" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: copyResults, className: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4 mr-2" }),
            " Copy Results"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            HealthSocialShare,
            {
              title: "Body Fat Percentage Calculator",
              resultText: `My body fat percentage is ${formatNumber(result.bodyFatPercentage)}% (${category == null ? void 0 : category.name}) 💪 Fat Mass: ${formatNumber(result.fatMassKg)}kg | Lean Mass: ${formatNumber(result.leanMassKg)}kg`,
              hashtags: ["bodyfat", "fitness", "health", "wellness", "fitnessgoals"],
              category: "health"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "top-banner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent", children: "🎓 Understanding Body Fat Percentage: The Complete Expert Guide" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none dark:prose-invert", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-gray-700 dark:text-gray-300", children: "Body fat percentage is one of the most critical metrics for assessing health, fitness, and physique. Unlike BMI (Body Mass Index), which only considers height and weight, body fat percentage reveals the actual composition of your body—specifically, what portion is fat versus lean tissue (muscle, bone, organs, and water)." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold mt-8 mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-6 h-6 text-orange-600" }),
                "Why Body Fat Percentage Matters More Than Weight"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Two people can weigh exactly the same but look dramatically different. Why? Body composition. A muscular athlete weighing 180 lbs at 12% body fat will look lean and defined, while someone else at 180 lbs with 30% body fat will appear much heavier due to excess adipose tissue. This is why body fat percentage is the gold standard for:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 my-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Health Risk Assessment:" }),
                    " Excess body fat, particularly visceral fat around organs, increases risk of heart disease, diabetes, hypertension, and metabolic syndrome."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fitness Progress Tracking:" }),
                    " Weight alone can mislead—you might lose fat and gain muscle simultaneously, seeing no scale change despite dramatic physique improvements."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Athletic Performance:" }),
                    " Optimal body fat ranges vary by sport. Endurance athletes typically perform best at lower body fat (6-13% for men, 14-20% for women), while strength athletes may function optimally slightly higher."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Aesthetic Goals:" }),
                    " Visible abs, muscle definition, and vascularity all correlate directly with body fat percentage, not weight."
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold mt-8 mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-6 h-6 text-blue-600" }),
                "The US Navy Method: Science-Backed Accuracy"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: `Developed by the U.S. Department of Defense, the Navy method estimates body fat using simple circumference measurements. It was validated against hydrostatic (underwater) weighing—long considered the "gold standard"—and found to be accurate within ±3-4% for most individuals. Here's what makes it special:` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg my-6 border-l-4 border-blue-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xl mb-3", children: "📐 The Mathematical Foundation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The formula uses logarithmic relationships between circumferences and body density:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-100 dark:bg-gray-700 p-4 rounded-md font-mono text-sm mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Men:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Body Fat % = 495 / (1.0324 - 0.19077×log₁₀(waist - neck) + 0.15456×log₁₀(height)) - 450"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-100 dark:bg-gray-700 p-4 rounded-md font-mono text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Women:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Body Fat % = 495 / (1.29579 - 0.35004×log₁₀(waist + hip - neck) + 0.22100×log₁₀(height)) - 450"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "The logarithmic nature accounts for the non-linear relationship between circumferences and actual body composition. Larger waists disproportionately indicate higher body fat, which this formula captures beautifully." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4", children: "🎯 Body Fat Categories: Where Do You Stand?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left", children: "Category" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left", children: "Men" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left", children: "Women" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left", children: "Description" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-red-50 dark:hover:bg-red-900", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-semibold", children: "🏆 Essential Fat" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "2-5%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "10-13%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-sm", children: "Minimum for survival. Athletes only temporarily reach this for competition. Dangerous long-term." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-blue-50 dark:hover:bg-blue-900", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-semibold", children: "⭐ Athletes" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "6-13%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "14-20%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-sm", children: "Typical for competitive athletes. Visible abs, low subcutaneous fat, high vascularity." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-green-50 dark:hover:bg-green-900", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-semibold", children: "💪 Fitness" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "14-17%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "21-24%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-sm", children: "Fit, healthy appearance. Some muscle definition visible. Sustainable year-round for most." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-yellow-50 dark:hover:bg-yellow-900", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-semibold", children: "✅ Average" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "18-24%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "25-31%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-sm", children: "Normal, healthy range for general population. No significant health risks if stable." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-orange-50 dark:hover:bg-orange-900", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-semibold", children: "⚠️ Obese" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "25%+" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "32%+" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-sm", children: "Increased health risks including cardiovascular disease, diabetes, and metabolic disorders." })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-600 p-6 my-6 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-lg mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5" }),
                  "💡 Pro Tip: Essential Fat is Essential for a Reason"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Women naturally have higher essential fat (10-13% vs. men's 2-5%) due to childbearing functions and hormonal regulation. Dropping below essential fat ranges can cause hormonal imbalances, amenorrhea (loss of menstrual cycle), weakened immunity, and organ damage. Never aim for essential fat percentages as a long-term goal!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4", children: "📏 Measurement Technique: Accuracy is Everything" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mb-4", children: "The Navy method's accuracy depends entirely on measurement precision. Here's the exact protocol:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-900 p-6 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-lg mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-blue-600" }),
                    "Neck Measurement"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Measure at smallest circumference" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Position tape below Adam's apple (larynx)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Keep tape horizontal and level" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Don't compress skin—snug but not tight" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Look straight ahead, neutral posture" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-900 p-6 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-lg mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-green-600" }),
                    "Waist Measurement (Men)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Measure at navel level (belly button)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Stand relaxed, don't suck in stomach" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Measure at end of normal exhale" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Keep tape horizontal all around" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Take 3 measurements, use average" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 dark:bg-purple-900 p-6 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-lg mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-purple-600" }),
                    "Waist Measurement (Women)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Measure at narrowest point (typically above navel)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Usually 1-2 inches above belly button" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Same relaxed, exhaled protocol as men" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• For pregnant women, use pre-pregnancy waist or skip this method" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-pink-50 dark:bg-pink-900 p-6 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-lg mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-pink-600" }),
                    "Hip Measurement (Women Only)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Measure at widest part of buttocks" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Stand with feet together" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Keep tape horizontal and level" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Don't compress tissue" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• This is typically the largest circumference" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4", children: "⚖️ Comparing Measurement Methods" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gradient-to-r from-purple-600 to-pink-600 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left", children: "Method" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left", children: "Accuracy" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left", children: "Cost" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left", children: "Accessibility" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left", children: "Notes" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-semibold", children: "DEXA Scan" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "±1-2%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "$100-200" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "⭐⭐" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Gold standard. Medical imaging. Shows regional fat distribution." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-semibold", children: "Hydrostatic" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "±2-3%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "$50-75" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "⭐⭐" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Underwater weighing. Requires specialized equipment and technician." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-semibold", children: "Navy Method" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "±3-4%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Free" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "⭐⭐⭐⭐⭐" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Only needs measuring tape. Great for tracking trends over time." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-semibold", children: "Bioelectrical Impedance" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "±4-6%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "$30-3000" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "⭐⭐⭐⭐" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Scales/handheld devices. Affected by hydration status. Wide variance." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-semibold", children: "Skinfold Calipers" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "±3-5%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "$5-50" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "⭐⭐⭐" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Requires practice and consistency. Operator-dependent accuracy." })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4", children: "🚀 Using This Calculator to Track Fat Loss Progress" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mb-4", children: "Consistency is key when tracking body composition changes. Follow these expert protocols:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 p-6 rounded-lg my-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-4", children: "📅 Measurement Schedule" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🌅" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Time of Day:" }),
                      " Always measure first thing in the morning, after using the bathroom, before eating or drinking. Body water fluctuates 2-4 lbs throughout the day, affecting circumferences."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📆" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Frequency:" }),
                      " Measure weekly or bi-weekly. Daily measurements add noise without signal. Body fat changes slowly—expect 0.5-1% loss per month during successful cutting phases."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📊" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Track Trends:" }),
                      " Don't obsess over single measurements. Plot data over 4-6 weeks. The overall trend matters more than day-to-day fluctuations."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📸" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Progress Photos:" }),
                      " Take front, side, and back photos in consistent lighting every 2 weeks. Visual changes often precede measurable changes."
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4", children: "💡 Common Myths & Misconceptions Debunked" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-900 border-l-4 border-red-600 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: '❌ Myth: "I need to get below 10% body fat to have visible abs"' }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Truth:" }),
                    " Abs become visible around 12-15% for men, 18-22% for women. Genetics determine fat distribution patterns—some people show abs at higher body fat percentages, others require lower levels. Core development also matters!"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-900 border-l-4 border-red-600 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: '❌ Myth: "Lower body fat is always healthier"' }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Truth:" }),
                    ' Excessively low body fat impairs hormone production, immune function, and can damage organs. The "fitness" range (14-17% men, 21-24% women) is optimal for most people balancing health and aesthetics.'
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-900 border-l-4 border-red-600 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: `❌ Myth: "This calculator won't work for muscular people"` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Truth:" }),
                    " The Navy method can slightly overestimate body fat in very muscular individuals (because muscle increases circumferences). However, it's still useful for tracking relative changes. If you're a competitive bodybuilder, consider DEXA scans for absolute accuracy."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-900 border-l-4 border-red-600 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: '❌ Myth: "Women should aim for the same body fat % as men"' }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Truth:" }),
                    " Women's essential fat (10-13%) is higher than men's (2-5%) due to biological functions including childbearing and hormonal regulation. A woman at 20% body fat can look as lean as a man at 12%."
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4", children: "🎯 Setting Realistic Body Fat Goals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mb-4", children: "Your ideal body fat percentage depends on multiple factors:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-900 p-6 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-3", children: "🏃 For Athletes" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: 'Performance often peaks in the "athletes" range:' }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Endurance: 6-12% (M), 14-18% (W)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Strength: 8-15% (M), 16-22% (W)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Aesthetics (bodybuilding): 5-8% (M), 10-15% (W) during competition only" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-900 p-6 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-3", children: "💪 For General Fitness" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Sustainable year-round ranges:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Men: 12-18% (healthy, athletic look)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Women: 20-26% (fit, feminine physique)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Allows social flexibility, hormonal health, and performance" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 border-2 border-green-400 p-6 rounded-lg my-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-xl mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-6 h-6 text-green-600" }),
                  "🏥 When to Consult a Healthcare Professional"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3", children: "Seek professional guidance if:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Your body fat % is below essential ranges (men <5%, women <13%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• You're experiencing symptoms like amenorrhea, extreme fatigue, or hormonal imbalances" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• You have obesity-related health conditions (diabetes, hypertension, sleep apnea)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• You're planning extreme body composition changes (contest prep, significant weight loss)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Results seem inconsistent with your appearance or other metrics" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4", children: "📚 Scientific References & Further Reading" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: '• Hodgdon JA, Beckett MB. "Prediction of percent body fat for U.S. Navy men from body circumferences and height." Naval Health Research Center, 1984.' }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: '• American Council on Exercise. "ACE Body Fat Percentage Categories." 2021.' }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: '• Gallagher D, et al. "Healthy percentage body fat ranges: an approach for developing guidelines based on body mass index." American Journal of Clinical Nutrition, 2000.' }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: '• Wang Z, et al. "The five-level model: a new approach to organizing body-composition research." Journal of Clinical Nutrition, 1992.' })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 border-2 border-yellow-400 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xl mb-3", children: "⚡ Quick Action Steps" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "1️⃣ Measure yourself first thing tomorrow morning using the techniques above" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "2️⃣ Calculate your body fat % and record it in a spreadsheet or app" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "3️⃣ Take progress photos in consistent lighting (front, side, back)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "4️⃣ Set a realistic body fat goal based on your lifestyle and objectives" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "5️⃣ Re-measure weekly or bi-weekly to track progress" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "6️⃣ Adjust nutrition and training based on trends over 4-6 weeks" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "7️⃣ Celebrate small wins—1% body fat loss per month is excellent progress!" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AmazonAffiliate, { calculatorTitle: "Fitness Equipment", placement: "content" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      ` })
      ]
    }
  );
}
export {
  BodyFatCalculator as default
};
