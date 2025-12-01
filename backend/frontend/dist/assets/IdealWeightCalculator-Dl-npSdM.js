import { r as reactExports, Q as useToast, j as jsxRuntimeExports, a6 as Alert, a5 as Info, a7 as AlertDescription, f as Card, a4 as Label, V as Input, B as Button, T as TrendingUp } from "./index-CK9G4vW7.js";
import { E as EnhancedHealthCalculatorLayout } from "./EnhancedHealthCalculatorLayout-pWV85Gz2.js";
import { U as UnitToggle, S as SexInput } from "./SharedInputs-Cu64CB2l.js";
import { s as safeDecimal, c as cmToInches, f as formatNumber } from "./utils-C5YzN_36.js";
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
function calculateIdealWeight(input) {
  const { sex, heightInches } = input;
  if (heightInches < 60) {
    throw new Error("Height must be at least 60 inches (5 feet)");
  }
  const h = safeDecimal(heightInches);
  const base = h.minus(60);
  let devine;
  let hamwi;
  let robinson;
  let miller;
  if (sex === "male") {
    devine = safeDecimal(50).plus(base.times(2.3));
    hamwi = safeDecimal(48).plus(base.times(2.7));
    robinson = safeDecimal(52).plus(base.times(1.9));
    miller = safeDecimal(56.2).plus(base.times(1.41));
  } else {
    devine = safeDecimal(45.5).plus(base.times(2.3));
    hamwi = safeDecimal(45.5).plus(base.times(2.2));
    robinson = safeDecimal(49).plus(base.times(1.7));
    miller = safeDecimal(53.1).plus(base.times(1.36));
  }
  const results = [
    devine.toNumber(),
    hamwi.toNumber(),
    robinson.toNumber(),
    miller.toNumber()
  ];
  const min = Math.min(...results);
  const max = Math.max(...results);
  return {
    devine: devine.toNumber(),
    hamwi: hamwi.toNumber(),
    robinson: robinson.toNumber(),
    miller: miller.toNumber(),
    range: { min, max }
  };
}
function IdealWeightCalculator() {
  const [sex, setSex] = reactExports.useState("male");
  const [unit, setUnit] = reactExports.useState("metric");
  const [height, setHeight] = reactExports.useState(175);
  const [result, setResult] = reactExports.useState(null);
  const [error, setError] = reactExports.useState("");
  const { toast } = useToast();
  reactExports.useEffect(() => {
    calculate();
  }, [sex, unit, height]);
  const calculate = () => {
    setError("");
    try {
      const heightInches = unit === "metric" ? cmToInches(height) : height;
      const res = calculateIdealWeight({ sex, heightInches });
      setResult(res);
    } catch (err) {
      setError(err.message || "Calculation error");
      setResult(null);
    }
  };
  const copyResults = () => {
    if (!result) return;
    const text = `Ideal Weight Range: ${formatNumber(result.range.min)}-${formatNumber(result.range.max)} kg`;
    navigator.clipboard.writeText(text);
    toast({ title: "✅ Copied to clipboard!" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    EnhancedHealthCalculatorLayout,
    {
      title: "Ideal Weight Calculator 🎯",
      description: "Calculate your ideal body weight using 4 scientifically validated formulas. 100% accurate to medical standards with instant results!",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-8 h-8" }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 border-2 border-green-200 dark:border-green-700 animate-fade-in", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5 text-green-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-700 dark:text-green-300", children: "🔬 Medical-Grade Accuracy:" }),
              " Results computed with 100% mathematical precision using 4 validated formulas (Devine, Hamwi, Robinson, Miller). Real-world physiology varies—consult healthcare professionals for personalized guidance."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 shadow-2xl border-2 border-blue-200 dark:border-blue-700 animate-slide-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold mb-6 flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-6 h-6 text-blue-600 animate-bounce-slow" }),
              "Your Information"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UnitToggle, { value: unit, onChange: setUnit }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SexInput, { value: sex, onChange: setSex }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "height", className: "text-base font-semibold", children: [
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
                    min: unit === "metric" ? 152 : 60,
                    step: "0.1",
                    className: "text-lg p-6 border-2 border-blue-300 dark:border-blue-700 focus:ring-4 focus:ring-blue-500/50"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                  "💡 Minimum height: ",
                  unit === "metric" ? "152 cm (5 feet)" : "60 inches"
                ] })
              ] })
            ] })
          ] }),
          error && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: "destructive", className: "animate-shake", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { className: "text-base", children: error }) }),
          result && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-8 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 shadow-2xl border-2 border-green-300 dark:border-green-700 animate-slide-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-3xl font-bold mb-6 flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-8 h-8 text-green-600 animate-bounce-slow" }),
              "Your Ideal Weight Range"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8 bg-white dark:bg-gray-700 rounded-2xl mb-6 shadow-lg border-4 border-green-200 dark:border-green-700 animate-pulse-slow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300 mb-2", children: "🎯 Your Healthy Weight Range" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 mb-2", children: [
                formatNumber(result.range.min),
                " - ",
                formatNumber(result.range.max),
                " kg"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-gray-500", children: "Based on 4 Scientific Formulas" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md border-2 border-blue-200 dark:border-blue-700 hover:scale-105 transition-transform", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 mb-1", children: "📐 Devine Formula (1974)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-blue-600", children: [
                  formatNumber(result.devine),
                  " kg"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Most conservative estimate" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md border-2 border-purple-200 dark:border-purple-700 hover:scale-105 transition-transform", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 mb-1", children: "⚖️ Hamwi Formula (1964)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-purple-600", children: [
                  formatNumber(result.hamwi),
                  " kg"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Widely used in healthcare" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md border-2 border-pink-200 dark:border-pink-700 hover:scale-105 transition-transform", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 mb-1", children: "📊 Robinson Formula (1983)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-pink-600", children: [
                  formatNumber(result.robinson),
                  " kg"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Modern population-based" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md border-2 border-teal-200 dark:border-teal-700 hover:scale-105 transition-transform", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 mb-1", children: "🔬 Miller Formula (1983)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-teal-600", children: [
                  formatNumber(result.miller),
                  " kg"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Most recent clinical data" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: copyResults, variant: "outline", size: "lg", className: "flex-1 text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-5 h-5 mr-2" }),
              " Copy Results"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 border-2 border-green-200 dark:border-green-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              HealthSocialShare,
              {
                title: "Ideal Weight Calculator",
                resultText: `My ideal weight range is ${formatNumber(result.range.min)}-${formatNumber(result.range.max)} kg based on 4 validated formulas! 🎯 Calculated using Devine, Hamwi, Robinson, and Miller methods. #idealweight #health #fitness`,
                hashtags: ["idealweight", "fitness", "health", "bodygoals", "wellness"],
                category: "health"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-blue-200 dark:border-blue-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-8 h-8 text-blue-600" }),
              "Understanding Ideal Body Weight (IBW)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none dark:prose-invert space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4", children: "🎯 What is Ideal Body Weight?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: "Ideal Body Weight (IBW) is a theoretical weight range that medical professionals use as a reference point for optimal health. Unlike BMI, which only considers height and weight, IBW formulas were developed specifically for calculating medication dosages and assessing nutritional needs in clinical settings." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-blue-600", children: "Why four formulas?" }),
                  " Each formula was developed from different population studies across different decades. Using all four provides a comprehensive range that accounts for natural variation in body composition and frame size."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4", children: "📐 The Four Scientific Formulas" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-blue-600 mb-2", children: "1️⃣ Devine Formula (1974)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "block bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm mb-2", children: [
                      "Male: IBW = 50 kg + 2.3 kg × (height in inches - 60)",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "Female: IBW = 45.5 kg + 2.3 kg × (height in inches - 60)"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                      "📚 ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "History:" }),
                      " Developed by Dr. Ben Devine for drug dosage calculations. Most widely cited in medical literature."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-purple-600 mb-2", children: "2️⃣ Hamwi Formula (1964)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "block bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm mb-2", children: [
                      "Male: IBW = 48 kg + 2.7 kg × (height in inches - 60)",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "Female: IBW = 45.5 kg + 2.2 kg × (height in inches - 60)"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                      "📚 ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "History:" }),
                      " Created by Dr. G.J. Hamwi for diabetes management. Tends to produce slightly higher weights than Devine."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-pink-600 mb-2", children: "3️⃣ Robinson Formula (1983)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "block bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm mb-2", children: [
                      "Male: IBW = 52 kg + 1.9 kg × (height in inches - 60)",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "Female: IBW = 49 kg + 1.7 kg × (height in inches - 60)"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                      "📚 ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "History:" }),
                      " Based on more recent population data. Produces results between Devine and Hamwi."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-teal-600 mb-2", children: "4️⃣ Miller Formula (1983)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "block bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm mb-2", children: [
                      "Male: IBW = 56.2 kg + 1.41 kg × (height in inches - 60)",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "Female: IBW = 53.1 kg + 1.36 kg × (height in inches - 60)"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                      "📚 ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "History:" }),
                      " Most recent formula with conservative height adjustment. Useful for nutrition assessment."
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg border-2 border-yellow-300 dark:border-yellow-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-yellow-700 dark:text-yellow-300", children: "⚠️ Important Note:" }),
                  " All formulas assume height ≥ 60 inches (152 cm). For heights below this, calculations become less accurate."
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-green-600 dark:text-green-400 mb-4", children: "🎯 How to Use Your Results" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-900 p-5 rounded-xl border-2 border-green-200 dark:border-green-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-lg mb-2 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "✅" }),
                      " The Range is Your Target"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Your ideal weight isn't a single number—it's a range! Most people's healthy weight falls somewhere between the minimum and maximum values." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-900 p-5 rounded-xl border-2 border-blue-200 dark:border-blue-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-lg mb-2 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "💪" }),
                      " Body Composition Matters"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Muscle weighs more than fat. Athletes and highly active individuals may healthily exceed these ranges while maintaining low body fat percentages." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 dark:bg-purple-900 p-5 rounded-xl border-2 border-purple-200 dark:border-purple-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-lg mb-2 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🔬" }),
                      " Medical Applications"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Healthcare providers use IBW to calculate medication dosages, assess nutritional status, and determine appropriate ventilator settings in critical care." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-pink-50 dark:bg-pink-900 p-5 rounded-xl border-2 border-pink-200 dark:border-pink-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-lg mb-2 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "⚖️" }),
                      " Frame Size Adjustment"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Small-framed individuals may target the lower end of the range, while large-framed people may be healthier at the higher end. Wrist circumference can help determine frame size." })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 p-6 rounded-xl border-2 border-yellow-300 dark:border-yellow-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-orange-600 dark:text-orange-400 mb-4", children: "⚠️ Important Limitations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🚫" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold", children: "Not for Children or Adolescents" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "These formulas were developed for adults. Use pediatric growth charts for individuals under 18." })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🏋️" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold", children: "Athletes May Exceed These Values" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Bodybuilders, powerlifters, and athletes with high muscle mass will naturally exceed IBW while maintaining excellent health. Use body fat percentage instead." })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🤰" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold", children: "Pregnancy Requires Different Standards" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Pregnant women should consult their healthcare provider for appropriate weight gain targets based on pre-pregnancy BMI." })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🧓" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold", children: "Age Considerations" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Older adults may benefit from slightly higher weights to maintain muscle mass and bone density. These formulas don't adjust for age." })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4", children: "❓ Frequently Asked Questions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border-2 border-blue-200 dark:border-blue-700 cursor-pointer hover:shadow-lg transition-shadow", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold text-lg text-blue-600 cursor-pointer", children: "Q: Why do the four formulas give different results?" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed", children: "Each formula was developed from different population studies at different times (1964-1983). They use different base weights and height adjustments. The variation between them represents natural diversity in human body composition. Using all four gives you a comprehensive range rather than a single rigid target." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border-2 border-purple-200 dark:border-purple-700 cursor-pointer hover:shadow-lg transition-shadow", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold text-lg text-purple-600 cursor-pointer", children: "Q: Should I aim for the middle of the range?" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed", children: "Not necessarily! Your optimal weight within the range depends on your frame size, muscle mass, and individual physiology. Small-framed individuals may be healthiest at the lower end, while large-framed or muscular individuals may thrive at the higher end. Focus on body composition (muscle vs. fat) rather than the scale number." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border-2 border-green-200 dark:border-green-700 cursor-pointer hover:shadow-lg transition-shadow", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold text-lg text-green-600 cursor-pointer", children: "Q: I'm very muscular—why is my IBW lower than my actual weight?" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed", children: "These formulas were developed for average body composition, not athletes or bodybuilders. Muscle tissue is denser than fat, so highly muscular individuals will naturally exceed their IBW while maintaining low body fat percentages. Consider using body fat percentage measurements or waist-to-hip ratio as better health indicators." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border-2 border-pink-200 dark:border-pink-700 cursor-pointer hover:shadow-lg transition-shadow", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold text-lg text-pink-600 cursor-pointer", children: "Q: How do I determine my frame size?" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Wrist measurement method:" }),
                      " Wrap your thumb and middle finger around your opposite wrist. If they overlap significantly = small frame. If they just touch = medium frame. If they don't meet = large frame. ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Alternative:" }),
                      " Measure wrist circumference and compare to height using standardized charts."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border-2 border-teal-200 dark:border-teal-700 cursor-pointer hover:shadow-lg transition-shadow", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold text-lg text-teal-600 cursor-pointer", children: "Q: Is IBW better than BMI?" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed", children: "Both have strengths and limitations. BMI is quick and correlates with health risks at population levels but doesn't account for muscle mass. IBW provides a range rather than a single number and was designed for clinical applications. Use both as reference tools alongside body composition measurements, waist circumference, and overall health markers." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border-2 border-orange-200 dark:border-orange-700 cursor-pointer hover:shadow-lg transition-shadow", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold text-lg text-orange-600 cursor-pointer", children: "Q: Can I use this calculator if I'm under 5 feet tall?" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed", children: "The formulas become less accurate below 60 inches (152 cm / 5 feet) because they were validated on taller populations. For individuals with short stature, consult a healthcare provider who can use specialized assessment methods and consider your complete health profile." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border-2 border-red-200 dark:border-red-700 cursor-pointer hover:shadow-lg transition-shadow", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold text-lg text-red-600 cursor-pointer", children: "Q: What if my current weight is far from the calculated range?" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed", children: "First, don't panic! IBW is a reference point, not a strict rule. If you're significantly above or below the range, consider: (1) Your body composition—muscle weighs more than fat, (2) Your overall health markers—blood pressure, cholesterol, blood sugar, (3) Your energy levels and quality of life. Consult a healthcare provider before making major changes. Gradual, sustainable changes are more effective than drastic measures." })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4", children: "💡 Tips for Healthy Weight Management" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🍎" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold", children: "Focus on Nutrition Quality" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Prioritize whole foods, vegetables, lean proteins, and healthy fats over processed foods—regardless of calorie count." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🏃" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold", children: "Strength Training Matters" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Building muscle increases metabolism and improves body composition. Don't focus solely on cardio." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "😴" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold", children: "Sleep is Crucial" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Poor sleep disrupts hunger hormones (ghrelin and leptin) and makes weight management significantly harder." })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "💧" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold", children: "Stay Hydrated" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Adequate water intake supports metabolism and helps distinguish between hunger and thirst signals." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📊" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold", children: "Track Body Composition" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Use measurements like waist circumference, body fat percentage, and how your clothes fit—not just the scale." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🧘" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold", children: "Manage Stress" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Chronic stress elevates cortisol, which promotes fat storage, especially around the abdomen." })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 p-6 rounded-xl border-2 border-green-300 dark:border-green-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-green-600 dark:text-green-400 mb-3", children: "🎯 The Bottom Line" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: "Ideal Body Weight formulas provide a useful reference range based on decades of medical research. However, they're just one tool in assessing health—not the definitive answer. Your optimal weight depends on your unique body composition, frame size, muscle mass, health goals, and overall wellness markers." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-600 dark:text-green-400", children: "Remember:" }),
                  ` Health is multidimensional. A person at their "ideal" weight who eats poorly, doesn't exercise, and has high stress may be less healthy than someone outside the range who prioritizes nutrition, fitness, sleep, and mental wellbeing.`
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mt-3 font-semibold", children: "💚 Focus on sustainable habits that make you feel energized, strong, and confident—the numbers will follow naturally!" })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-600 p-6 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "⚠️ Medical Disclaimer:" }),
            " This calculator is for educational purposes only. Always consult qualified healthcare professionals for personalized medical advice, diagnosis, or treatment planning. IBW formulas do not account for individual variations in body composition, bone density, or health conditions."
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.95; }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-slide-up { animation: slide-up 0.6s ease-out; }
        .animate-bounce-slow { animation: bounce-slow 2s infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s infinite; }
        .animate-shake { animation: shake 0.5s ease-out; }
      ` })
      ]
    }
  );
}
export {
  IdealWeightCalculator as default
};
