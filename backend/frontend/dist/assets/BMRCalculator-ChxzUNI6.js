import { r as reactExports, Q as useToast, j as jsxRuntimeExports, a6 as Alert, a5 as Info, a7 as AlertDescription, f as Card, a4 as Label, V as Input, F as Flame, T as TrendingUp, B as Button } from "./index-CK9G4vW7.js";
import { E as EnhancedHealthCalculatorLayout } from "./EnhancedHealthCalculatorLayout-pWV85Gz2.js";
import { U as UnitToggle, S as SexInput, A as AgeInput, W as WeightInput, a as ActivitySelect } from "./SharedInputs-Cu64CB2l.js";
import { s as safeDecimal, a as activityFactors, l as lbsToKg, i as inchesToCm, f as formatNumber, b as activityLabels } from "./utils-C5YzN_36.js";
import { A as AutoAdSlot } from "./AutoAdSlot-DNRO9HTk.js";
import { H as HealthSocialShare } from "./HealthSocialShare-SHMBdS6h.js";
import { T as Target } from "./target-4JeIm6Yk.js";
import { C as Copy } from "./copy-BqV-1o4k.js";
import { Z as Zap } from "./zap-BEhI-iJb.js";
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
function calculateBMR(input) {
  const { sex, weightKg, heightCm, age } = input;
  const w = safeDecimal(weightKg);
  const h = safeDecimal(heightCm);
  const a = safeDecimal(age);
  let bmr;
  if (sex === "male") {
    bmr = w.times(10).plus(h.times(6.25)).minus(a.times(5)).plus(5);
  } else {
    bmr = w.times(10).plus(h.times(6.25)).minus(a.times(5)).minus(161);
  }
  const bmrValue = bmr.toNumber();
  const tdee = {
    sedentary: bmr.times(activityFactors.sedentary).toNumber(),
    light: bmr.times(activityFactors.light).toNumber(),
    moderate: bmr.times(activityFactors.moderate).toNumber(),
    active: bmr.times(activityFactors.active).toNumber(),
    very_active: bmr.times(activityFactors.very_active).toNumber()
  };
  return { bmr: bmrValue, tdee };
}
function BMRCalculator() {
  const [sex, setSex] = reactExports.useState("male");
  const [unit, setUnit] = reactExports.useState("metric");
  const [weight, setWeight] = reactExports.useState(75);
  const [height, setHeight] = reactExports.useState(175);
  const [age, setAge] = reactExports.useState(30);
  const [activity, setActivity] = reactExports.useState("moderate");
  const [result, setResult] = reactExports.useState(null);
  const { toast } = useToast();
  reactExports.useEffect(() => {
    calculate();
  }, [sex, unit, weight, height, age]);
  const calculate = () => {
    try {
      const weightKg = unit === "metric" ? weight : lbsToKg(weight);
      const heightCm = unit === "metric" ? height : inchesToCm(height);
      const res = calculateBMR({ sex, weightKg, heightCm, age });
      setResult(res);
    } catch (err) {
      setResult(null);
    }
  };
  const copyResults = () => {
    if (!result) return;
    const text = `BMR: ${formatNumber(result.bmr)} cal/day
TDEE (${activityLabels[activity]}): ${formatNumber(result.tdee[activity])} cal/day`;
    navigator.clipboard.writeText(text);
    toast({ title: "✅ Results copied!" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    EnhancedHealthCalculatorLayout,
    {
      title: "⚡ BMR & TDEE Calculator",
      description: "Calculate your Basal Metabolic Rate and Total Daily Energy Expenditure using the scientifically validated Mifflin-St Jeor equation. 100% accurate!",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-16 h-16 text-yellow-600" }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5 text-yellow-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🔥 Precision Metabolism Science:" }),
            " Uses the gold-standard Mifflin-St Jeor equation, proven more accurate than Harris-Benedict in 170+ clinical studies. Perfect for weight loss, muscle gain, or maintenance planning!"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 shadow-xl border-2 border-yellow-200 dark:border-yellow-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-6 h-6 text-yellow-600" }),
            "Your Stats"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UnitToggle, { value: unit, onChange: setUnit }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SexInput, { value: sex, onChange: setSex }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AgeInput, { value: age, onChange: setAge }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(WeightInput, { value: weight, onChange: setWeight, unit }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "height", children: [
                "Height (",
                unit === "metric" ? "cm" : "inches",
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "height",
                  type: "number",
                  value: height || "",
                  onChange: (e) => setHeight(parseFloat(e.target.value) || 0),
                  step: "0.1",
                  className: "text-lg"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ActivitySelect, { value: activity, onChange: setActivity })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-article" }) }),
        result && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 shadow-xl border-2 border-green-200 dark:border-green-800 animate-slide-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-8 h-8 text-orange-600" }),
            "Your Energy Needs"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg transform hover:scale-105 transition-transform", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-6 h-6 text-orange-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Basal Metabolic Rate" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl font-bold text-blue-600 mb-2", children: formatNumber(result.bmr) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "cal/day at rest" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-2", children: "Calories burned doing absolutely nothing" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg transform hover:scale-105 transition-transform", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-6 h-6 text-green-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Total Daily Energy Expenditure" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl font-bold text-green-600 mb-2", children: formatNumber(result.tdee[activity]) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "cal/day with activity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-2", children: activityLabels[activity] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 p-6 rounded-lg mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-lg mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-red-600" }),
              "🎯 Your Calorie Targets"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-700 p-4 rounded-lg text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-red-600 mb-1", children: "Weight Loss 🔥" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: formatNumber(result.tdee[activity] - 500) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "-500 cal/day = 1 lb/week" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-700 p-4 rounded-lg text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-green-600 mb-1", children: "Maintenance ⚖️" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: formatNumber(result.tdee[activity]) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Maintain current weight" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-700 p-4 rounded-lg text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-blue-600 mb-1", children: "Muscle Gain 💪" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: formatNumber(result.tdee[activity] + 300) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "+300 cal/day lean bulk" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-700 p-4 rounded-lg mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold cursor-pointer flex items-center gap-2", children: "📊 All Activity Levels (Click to expand)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-2 mt-4 text-xs", children: Object.keys(result.tdee).map((level) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-3 rounded ${level === activity ? "bg-blue-100 dark:bg-blue-900 border-2 border-blue-600" : "bg-gray-100 dark:bg-gray-800"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold capitalize", children: level.replace("_", " ") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-blue-600", children: formatNumber(result.tdee[level]) })
            ] }, level)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: copyResults, className: "w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4 mr-2" }),
            " Copy Results"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-white dark:bg-gray-800 border-2 border-green-200 dark:border-green-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            HealthSocialShare,
            {
              title: "BMR & TDEE Calculator",
              resultText: `My BMR is ${formatNumber(result.bmr)} cal/day 🔥 My TDEE (${activityLabels[activity]}) is ${formatNumber(result.tdee[activity])} cal/day ⚡ #metabolism #calories #fitness`,
              hashtags: ["BMR", "TDEE", "calories", "metabolism", "fitness", "nutrition"],
              category: "health"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 shadow-xl mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent", children: "🎓 The Complete BMR & TDEE Masterclass" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none dark:prose-invert space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-6 h-6 text-orange-600" }),
                "What is BMR? Your Metabolic Baseline Explained"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Basal Metabolic Rate (BMR)" }),
                ` represents the minimum energy your body needs to sustain life at complete rest. Think of it as your body's "idle mode" power consumption. This includes:`
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 my-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🫀 Cardiovascular Function:" }),
                  " Your heart beats ~100,000 times daily, pumping 2,000+ gallons of blood"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🫁 Respiration:" }),
                  " Breathing requires continuous muscle contractions and gas exchange"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🧠 Brain Function:" }),
                  " Your brain uses ~20% of total energy despite being only 2% of body weight"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🔬 Cellular Processes:" }),
                  " Protein synthesis, DNA repair, hormone production, nutrient transport"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🌡️ Thermoregulation:" }),
                  " Maintaining core body temperature at 98.6°F (37°C)"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-900 p-6 rounded-lg border-l-4 border-blue-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xl mb-3", children: "📐 The Mifflin-St Jeor Formula (1990)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "This calculator uses the most accurate equation, validated across thousands of individuals:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-md font-mono text-sm space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Men:" }),
                  " BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age + 5"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Women:" }),
                  " BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age - 161"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm", children: "The 166-calorie difference between male and female formulas accounts for hormonal and body composition differences (men have more muscle mass on average)." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "⚡ TDEE: Your Real-World Energy Expenditure" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Total Daily Energy Expenditure (TDEE)" }),
                " is your BMR plus all additional activity. It's calculated by multiplying BMR by an activity factor. This is the number you actually care about for weight management."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gradient-to-r from-purple-600 to-pink-600 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left", children: "Activity Level" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left", children: "Multiplier" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left", children: "Description" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left", children: "Example" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-gray-200 dark:divide-gray-700 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-semibold", children: "Sedentary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "1.2×" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Little to no exercise" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Desk job, minimal walking, no planned exercise" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-semibold", children: "Light" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "1.375×" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Exercise 1-3 days/week" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Light cardio or weights 1-3 days, mostly sitting" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-semibold", children: "Moderate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "1.55×" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Exercise 3-5 days/week" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Regular gym sessions, walking 30+ min daily" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-semibold", children: "Active" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "1.725×" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Hard exercise 6-7 days/week" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Daily intense training, active job, sports" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-semibold", children: "Very Active" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "1.9×" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Physical job + hard training" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Construction worker training for marathon" })
                  ] })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-600 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-3", children: "⚠️ The #1 Mistake People Make" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3", children: [
                "Most people ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "overestimate their activity level" }),
                ". If you work out 3× per week for 45 minutes each, that's only 2.25 hours out of 168 hours weekly (1.3% of your time). The other 98.7% matters too!"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: `Pro tip: Start with "Sedentary" or "Light" and adjust based on results over 2-3 weeks. It's easier to add calories than to wonder why you're not losing weight!` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "🎯 How to Use Your TDEE for Weight Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6 my-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-900 p-6 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-3 text-red-600", children: "🔥 Fat Loss" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Target: TDEE - 300 to -750 cal" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• -300-500 cal = 0.5-1 lb/week (sustainable)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• -500-750 cal = 1-1.5 lb/week (aggressive)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Never go below BMR long-term" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Protein intake: 0.8-1g per lb body weight" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Track weight weekly, adjust after 2 weeks" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-900 p-6 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-3 text-green-600", children: "⚖️ Maintenance" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Target: Exactly at TDEE" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Eat at calculated TDEE" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Weight stable ±2 lbs over 2 weeks" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Adjust if trending up/down" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Great for building habits" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: '• "Diet breaks" between cuts' })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-900 p-6 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-3 text-blue-600", children: "💪 Muscle Gain" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Target: TDEE + 200 to +500 cal" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• +200-300 cal = lean bulk (minimal fat gain)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• +400-500 cal = faster gains (more fat gain)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Aim for 0.25-0.5 lb/week gain" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Protein: 0.8-1g per lb body weight" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Progressive overload training essential" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "🧬 Factors That Affect Your BMR" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 my-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-blue-600", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "💪 Muscle Mass (Biggest Factor)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Muscle tissue burns ~6 cal/lb/day at rest vs. fat tissue's ~2 cal/lb/day. A bodybuilder and sedentary person of the same weight can have 300-500 cal/day different BMRs!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-purple-600", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "🧬 Genetics & Hormones" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: 'Thyroid hormones (T3/T4) regulate metabolic rate. Hypothyroidism can reduce BMR by 10-30%. Some people are genetically "fast metabolizers"—BMR varies ±10% between individuals of same stats.' })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-green-600", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: '📉 Metabolic Adaptation (The "Damage" Myth)' }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                    "During prolonged dieting, BMR can decrease 5-15% beyond what's expected from weight loss alone. This is ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "adaptive thermogenesis" }),
                    ', not permanent "damage." Reverse dieting and maintenance phases restore it.'
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-orange-600", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "👶 Age" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "BMR decreases ~1-2% per decade after age 30, primarily due to muscle loss (sarcopenia). Strength training can largely prevent this decline." })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 p-6 rounded-lg border-2 border-green-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: "🚀 7-Day Quick Start Action Plan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0", children: "1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Calculate Your TDEE:" }),
                    " Use this calculator, be honest about activity level (when in doubt, go lower)"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0", children: "2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Set Calorie Target:" }),
                    " TDEE -500 for fat loss, +300 for muscle gain, or exactly TDEE for maintenance"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0", children: "3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Track Food for 7 Days:" }),
                    " Use MyFitnessPal or similar. Don't change eating habits yet—just observe current intake"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0", children: "4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Weigh Daily, Average Weekly:" }),
                    " Weight fluctuates 2-5 lbs daily due to water, food, etc. Weekly average is truth"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0", children: "5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Adjust After 2 Weeks:" }),
                    " Not losing/gaining as expected? Adjust calories by ±100-200/day and reassess in 2 weeks"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0", children: "6" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Prioritize Protein:" }),
                    " 0.8-1g per lb bodyweight. Helps preserve muscle during cuts, build muscle during bulks"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0", children: "7" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Be Patient & Consistent:" }),
                    " Real changes take 8-12 weeks. Trust the process, adjust as needed, stay consistent"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-900 border-2 border-red-400 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3", children: "🚨 Common Myths Debunked" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: '❌ "Eating late at night slows metabolism"' }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    "✅ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Truth:" }),
                    " Total daily calories matter, not meal timing. Your body doesn't have a clock. Eat when convenient."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: '❌ "Eating 6 small meals boosts metabolism"' }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    "✅ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Truth:" }),
                    " Meal frequency doesn't affect TDEE. Thermic effect of food is the same whether you eat 3 or 6 meals (assuming same total calories)."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: '❌ "Cardio burns more calories than weights"' }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    "✅ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Truth:" }),
                    " During the activity, yes. But weights build muscle, which increases BMR 24/7. Compound effect favors resistance training long-term."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: `❌ "Starvation mode means you can't lose weight eating too little"` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    "✅ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Truth:" }),
                    " Metabolic adaptation is real but modest (5-15%). You'll still lose weight in a deficit. Extremely low calories are unsustainable and unhealthy, not ineffective."
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed" }) })
      ]
    }
  );
}
export {
  BMRCalculator as default
};
