import { r as reactExports, j as jsxRuntimeExports, a3 as Label, A as Activity, U as Input, B as Button, f as Card, g as CardHeader, h as CardTitle, k as CardContent, a5 as Alert, a6 as AlertDescription, a4 as Info, H as Heart } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { E as EnhancedHealthCalculatorLayout } from "./EnhancedHealthCalculatorLayout-Dx17gN3N.js";
import { H as HealthSocialShare } from "./HealthSocialShare-DDs9xXKE.js";
import { Z as Zap } from "./zap-B5WxZbDS.js";
import { C as CircleAlert } from "./circle-alert-CYu8dohk.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./share-2-ViScha7M.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
import "./link-2-CINC0lIp.js";
function WaterIntakeCalculator() {
  const [weight, setWeight] = reactExports.useState("");
  const [weightUnit, setWeightUnit] = reactExports.useState("kg");
  const [activityLevel, setActivityLevel] = reactExports.useState("");
  const [climate, setClimate] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const calculateWaterIntake = () => {
    if (!weight || !activityLevel || !climate) return;
    let weightInKg = parseFloat(weight);
    if (weightUnit === "lbs") {
      weightInKg = weightInKg * 0.453592;
    }
    let waterIntake = weightInKg * 33;
    const activityMultipliers = {
      sedentary: 1,
      light: 1.1,
      moderate: 1.3,
      active: 1.5,
      veryActive: 1.7
    };
    waterIntake *= activityMultipliers[activityLevel] || 1;
    const climateAdjustments = {
      cold: 0,
      temperate: 250,
      warm: 500,
      hot: 750
    };
    waterIntake += climateAdjustments[climate] || 0;
    setResult(Math.round(waterIntake));
  };
  const reset = () => {
    setWeight("");
    setWeightUnit("kg");
    setActivityLevel("");
    setClimate("");
    setResult(null);
  };
  const educationalContent = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12 mt-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-2xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-8 h-8 text-blue-600" }),
        "💧 The Science of Hydration"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose dark:prose-invert max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-gray-700 dark:text-gray-300", children: "Water makes up approximately 60% of your body weight and is essential for virtually every bodily function. Understanding your hydration needs is crucial for maintaining optimal health, energy levels, and physical performance." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100", children: "🔬 Why Water Matters" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-blue-500 animate-slide-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400", children: "Cellular Function" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Water transports nutrients to cells, removes waste products, and maintains the structure and function of every cell in your body. Without adequate hydration, cellular processes slow down dramatically." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-cyan-500 animate-slide-up", style: { animationDelay: "0.1s" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-cyan-600 dark:text-cyan-400", children: "Temperature Regulation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Through sweating and respiration, water helps maintain your core body temperature. This is especially critical during exercise or in hot climates." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-teal-500 animate-slide-up", style: { animationDelay: "0.2s" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-teal-600 dark:text-teal-400", children: "Joint Lubrication" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Water is a key component of synovial fluid, which lubricates joints and allows smooth movement. Dehydration can lead to joint pain and stiffness." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-blue-400 animate-slide-up", style: { animationDelay: "0.3s" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-blue-500 dark:text-blue-300", children: "Cognitive Performance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Even mild dehydration (1-2% body weight loss) can impair concentration, mood, and cognitive function. Your brain is 75% water!" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-10 mb-4 text-gray-900 dark:text-gray-100", children: "💎 Understanding Water Balance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: "Your body loses water continuously through breathing, sweating, urination, and bowel movements. On average, adults lose about 2-3 liters of water daily, though this can increase significantly with exercise, heat, or illness. This lost fluid must be replaced to maintain proper hydration." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mt-4", children: "The kidneys play a crucial role in maintaining water balance by adjusting urine output based on your hydration status. When you're well-hydrated, urine is pale yellow and plentiful. When dehydrated, the kidneys conserve water, producing concentrated, dark yellow urine." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", style: { animationDelay: "0.2s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-8 h-8 text-purple-600" }),
        "⚡ Electrolytes & Hydration"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose dark:prose-invert max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-gray-700 dark:text-gray-300", children: "Hydration isn't just about water—it's about maintaining the right balance of electrolytes. These minerals carry electrical charges and are essential for nerve signaling, muscle contraction, and fluid balance." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6 my-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: "🧂" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-purple-600 dark:text-purple-400", children: "Sodium" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Critical for fluid balance and nerve function. Lost through sweat during exercise. Most people get adequate sodium from diet." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: "🍌" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-pink-600 dark:text-pink-400", children: "Potassium" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Essential for heart function and muscle contraction. Found in fruits, vegetables, and dairy products." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: "🥛" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-purple-500 dark:text-purple-300", children: "Calcium" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Important for bone health and muscle function. Helps regulate fluid movement across cell membranes." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-100 dark:bg-purple-900/30 rounded-xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-lg mb-3 flex items-center gap-2 text-purple-800 dark:text-purple-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5" }),
            "When to Consider Electrolyte Drinks"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-600 dark:text-purple-400 mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "During or after intense exercise lasting more than 60 minutes" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-600 dark:text-purple-400 mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "In hot, humid conditions when sweating heavily" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-600 dark:text-purple-400 mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "During illness with vomiting or diarrhea" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-600 dark:text-purple-400 mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "For endurance athletes training for multiple hours" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", style: { animationDelay: "0.4s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-2xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-8 h-8 text-orange-600" }),
        "⚠️ Recognizing Dehydration"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose dark:prose-invert max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-gray-700 dark:text-gray-300", children: "Dehydration occurs when you lose more fluid than you take in. Recognizing the signs early can prevent serious health complications." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-yellow-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-lg mb-4 text-yellow-600 dark:text-yellow-400 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "😓" }),
              " Mild Dehydration (1-2%)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600 dark:text-gray-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Increased thirst" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Dry mouth and lips" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Slightly decreased urine output" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Dark yellow urine" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Mild fatigue" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Headache" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-orange-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-lg mb-4 text-orange-600 dark:text-orange-400 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🥵" }),
              " Moderate Dehydration (3-5%)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600 dark:text-gray-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Very dry mouth" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Significantly reduced urine" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Dizziness when standing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Rapid heartbeat" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Decreased skin elasticity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Muscle cramps" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-100 dark:bg-red-900/30 rounded-xl p-6 my-6 border-l-4 border-red-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-lg mb-3 flex items-center gap-2 text-red-800 dark:text-red-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5" }),
            "🚨 Severe Dehydration - Seek Medical Help"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
            "Severe dehydration (",
            ">",
            "6% body weight loss) is a medical emergency. Symptoms include:"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Extreme thirst" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Little to no urination" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Sunken eyes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Rapid breathing and heartbeat" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Confusion or irritability" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Fainting or loss of consciousness" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-100 dark:bg-blue-900/30 rounded-xl p-6 mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-blue-800 dark:text-blue-300", children: "💡 The Urine Color Test" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: "One of the easiest ways to check your hydration status is to monitor urine color:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: "💧" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-yellow-900 dark:text-yellow-200", children: "Pale Yellow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-yellow-700 dark:text-yellow-400", children: "Well Hydrated" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-amber-100 dark:bg-amber-900/20 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: "💛" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-amber-900 dark:text-amber-200", children: "Light Yellow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-700 dark:text-amber-400", children: "Normal" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-orange-200 dark:bg-orange-900/30 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: "🟠" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-orange-900 dark:text-orange-200", children: "Dark Yellow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-orange-700 dark:text-orange-400", children: "Mild Dehydration" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-red-200 dark:bg-red-900/30 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: "🔴" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-red-900 dark:text-red-200", children: "Amber/Brown" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-700 dark:text-red-400", children: "Dehydrated" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", style: { animationDelay: "0.6s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-8 h-8 text-green-600" }),
        "🏃 Hydration for Different Activities"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose dark:prose-invert max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-gray-700 dark:text-gray-300", children: "Your hydration needs vary significantly based on your activity level. Here's how to optimize your water intake for different scenarios." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-lg mb-3 text-green-600 dark:text-green-400 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🏋️" }),
              " Strength Training"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-3", children: "Moderate fluid loss through sweating. Hydration strategy:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600 dark:text-gray-400 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 2-3 cups (500-750ml) 2-3 hours before workout" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 1 cup (250ml) 15 minutes before starting" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Sip 150-250ml every 15-20 minutes during workout" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 2-3 cups (500-750ml) for every pound lost after workout" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-lg mb-3 text-emerald-600 dark:text-emerald-400 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🏃‍♀️" }),
              " Endurance Training"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-3", children: "High fluid loss, electrolyte replacement needed:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600 dark:text-gray-400 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 3-4 cups (750ml-1L) 2-3 hours before" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 1-2 cups (250-500ml) 15-30 minutes before" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 150-250ml every 15-20 minutes during activity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Include electrolyte drinks after 60+ minutes" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-lg mb-3 text-teal-600 dark:text-teal-400 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🧘" }),
              " Yoga/Pilates"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-3", children: "Moderate hydration needs, steady intake:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600 dark:text-gray-400 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 1-2 cups (250-500ml) 1-2 hours before" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Sip small amounts during practice" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 1-2 cups (250-500ml) after session" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Hot yoga requires increased intake" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-lg mb-3 text-green-500 dark:text-green-300 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🏊" }),
              " Swimming"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-3", children: "Often overlooked - you still sweat in water!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600 dark:text-gray-400 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 2 cups (500ml) 1-2 hours before swim" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Drink between sets/laps" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 250ml every 20 minutes for longer sessions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 2-3 cups (500-750ml) post-swim" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-100 dark:bg-green-900/30 rounded-xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-lg mb-3 flex items-center gap-2 text-green-800 dark:text-green-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5" }),
            "Hot Weather & High Altitude Adjustments"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium mb-2", children: "🌡️ Hot/Humid Conditions:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Add 500-750ml to base intake" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Increase frequency of hydration" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider electrolyte replacement" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Monitor sweat rate closely" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium mb-2", children: [
                "⛰️ High Altitude (",
                ">",
                "8,000 ft):"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Add 1-1.5L to daily intake" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Increased respiratory water loss" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Altitude sickness prevention" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Monitor urine color frequently" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", style: { animationDelay: "0.8s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-2xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-8 h-8 text-indigo-600" }),
        "🔍 Hydration Myths Debunked"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose dark:prose-invert max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-red-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-red-600 dark:text-red-400", children: "❌ Myth: Everyone needs 8 glasses per day" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-600 dark:text-green-400", children: "✅ Truth:" }),
            " Water needs are highly individual and depend on body size, activity level, climate, and overall health. Some people need more, others less."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-red-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-red-600 dark:text-red-400", children: "❌ Myth: Coffee and tea dehydrate you" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-600 dark:text-green-400", children: "✅ Truth:" }),
            " While caffeine has a mild diuretic effect, the water in coffee and tea contributes to your daily fluid intake. You'd need to consume very high amounts for dehydration to occur."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-red-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-red-600 dark:text-red-400", children: "❌ Myth: Clear urine means perfect hydration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-600 dark:text-green-400", children: "✅ Truth:" }),
            " Completely clear urine may indicate overhydration. Pale yellow is the ideal color. Overhydration can dilute electrolytes and cause hyponatremia."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-red-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-red-600 dark:text-red-400", children: "❌ Myth: You can't drink too much water" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-600 dark:text-green-400", children: "✅ Truth:" }),
            " Hyponatremia (water intoxication) can occur when you drink excessive amounts, diluting sodium levels. This is rare but can be dangerous, especially during endurance events."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-red-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-red-600 dark:text-red-400", children: "❌ Myth: Thirst is the best hydration indicator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-600 dark:text-green-400", children: "✅ Truth:" }),
            " Thirst signals you're already mildly dehydrated (1-2%). By the time you feel thirsty, you've already lost significant fluid. Drink regularly, not just when thirsty."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-red-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-red-600 dark:text-red-400", children: "❌ Myth: Only water counts for hydration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-600 dark:text-green-400", children: "✅ Truth:" }),
            " All beverages contribute to hydration, and food provides about 20% of daily water intake. Fruits and vegetables with high water content (watermelon, cucumber, lettuce) are excellent sources."
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", style: { animationDelay: "1s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-2xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-8 h-8 text-cyan-600" }),
        "💪 Practical Hydration Tips"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose dark:prose-invert max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-cyan-700 dark:text-cyan-300", children: "📱 Use Technology" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Set phone reminders every hour" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Use water tracking apps" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Smart water bottles with tracking" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Calendar notifications" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-blue-700 dark:text-blue-300", children: "🍽️ Link to Routines" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Glass before each meal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Water with every snack" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Drink after bathroom breaks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Hydrate when waking/sleeping" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-purple-700 dark:text-purple-300", children: "🎯 Visual Cues" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Keep bottle in sight always" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Rubber bands on bottle to track" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Motivational water bottle marks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Colorful attractive bottles" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-green-700 dark:text-green-300", children: "🌟 Make It Enjoyable" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Add fruit/herb infusions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Try different temperatures" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Sparkling water variations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Ice cubes with fruit inside" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cyan-100 dark:bg-cyan-900/30 rounded-xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-cyan-800 dark:text-cyan-300", children: "🏆 The Gallon Challenge Approach" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: "While not suitable for everyone, the gallon-a-day method can work well for larger individuals or very active people:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-3 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-white dark:bg-gray-800 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-cyan-600 dark:text-cyan-400 text-2xl", children: "25%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "By 10 AM" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-white dark:bg-gray-800 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-cyan-600 dark:text-cyan-400 text-2xl", children: "50%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "By 2 PM" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-white dark:bg-gray-800 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-cyan-600 dark:text-cyan-400 text-2xl", children: "75%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "By 6 PM" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-white dark:bg-gray-800 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-cyan-600 dark:text-cyan-400 text-2xl", children: "100%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "By bedtime" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", style: { animationDelay: "1.2s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900 dark:to-slate-900 rounded-2xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-gray-700 to-slate-700 dark:from-gray-300 dark:to-slate-300 bg-clip-text text-transparent", children: "❓ Frequently Asked Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-semibold text-lg text-gray-900 dark:text-gray-100 list-none flex items-center justify-between", children: [
            "Can you drink too much water?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-400 leading-relaxed", children: "Yes, overhydration (hyponatremia) occurs when you drink excessive amounts of water, diluting sodium levels in your blood. This is rare but can be serious. Symptoms include nausea, headache, confusion, and in severe cases, seizures. It's most common during endurance events when athletes drink large amounts without replacing electrolytes. Generally, drinking when thirsty and maintaining pale yellow urine is safe." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-semibold text-lg text-gray-900 dark:text-gray-100 list-none flex items-center justify-between", children: [
            "Does drinking water help with weight loss?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-400 leading-relaxed", children: "Water can support weight loss in several ways: it increases satiety (feeling full), especially when consumed before meals; it has zero calories while replacing sugary drinks; it supports metabolic processes; and it helps with exercise performance. Studies show drinking 500ml before meals can reduce calorie intake by 13%. However, water alone won't cause weight loss—it's one component of a healthy lifestyle including proper diet and exercise." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-semibold text-lg text-gray-900 dark:text-gray-100 list-none flex items-center justify-between", children: [
            "Is it better to sip water throughout the day or drink larger amounts at once?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-400 leading-relaxed", children: "Sipping water throughout the day is generally better for maintaining consistent hydration. Your body can only absorb about 200-300ml per 15 minutes, so drinking large amounts at once can lead to more frequent urination without better hydration. Consistent sipping helps maintain fluid balance, supports ongoing bodily functions, and prevents the peaks and valleys of hydration levels. However, drinking larger amounts before, during, and after exercise is appropriate for those specific needs." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-semibold text-lg text-gray-900 dark:text-gray-100 list-none flex items-center justify-between", children: [
            "How does water intake affect skin health?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-400 leading-relaxed", children: "Proper hydration supports skin health by maintaining elasticity, delivering nutrients to skin cells, and flushing out toxins. Dehydrated skin can appear dull, flaky, and show fine lines more prominently. However, drinking extra water won't necessarily improve already-healthy skin or cure skin conditions. Skin hydration is also affected by humidity, skin care products, diet, and genetics. Maintain adequate hydration for overall health, which includes skin health, but don't expect water alone to transform your skin." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-semibold text-lg text-gray-900 dark:text-gray-100 list-none flex items-center justify-between", children: [
            "What's the best temperature for drinking water?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-400 leading-relaxed", children: "Room temperature or cool water is generally best for optimal absorption and comfort. Very cold water can cause temporary vasoconstriction and may slow digestion if consumed with meals. However, cold water is fine during exercise as it helps lower body temperature. Warm water can aid digestion and is soothing, especially in the morning or before bed. The best temperature is ultimately what encourages you to drink more water consistently." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-semibold text-lg text-gray-900 dark:text-gray-100 list-none flex items-center justify-between", children: [
            "Should pregnant women drink more water?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-400 leading-relaxed", children: "Yes, pregnant women need about 8-12 cups (2-3 liters) of fluids daily, or roughly 300ml more than non-pregnant women. Adequate hydration supports increased blood volume, amniotic fluid production, and helps prevent common pregnancy issues like constipation, urinary tract infections, and hemorrhoids. It's especially important during breastfeeding, when fluid needs increase by about 700-1000ml daily. Pregnant women should drink to thirst and monitor urine color, consulting their healthcare provider about specific needs." })
        ] })
      ] })
    ] }) })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    EnhancedHealthCalculatorLayout,
    {
      title: "Water Intake Calculator",
      description: "Calculate your personalized daily water intake based on weight, activity level, and climate",
      category: "Hydration",
      metaTitle: "Water Intake Calculator - Personalized Daily Hydration Needs",
      metaDescription: "Calculate your optimal daily water intake based on body weight, activity level, and climate. Get personalized hydration recommendations for better health and performance.",
      calculatorContent: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 rounded-xl p-6 shadow-sm animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "weight", className: "flex items-center gap-2 text-gray-700 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-blue-600" }),
                "Body Weight"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "weight",
                    type: "number",
                    value: weight,
                    onChange: (e) => setWeight(e.target.value),
                    placeholder: "Enter weight",
                    className: "flex-1"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: weightUnit, onValueChange: (value) => setWeightUnit(value), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "kg", children: "kg" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "lbs", children: "lbs" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "activity", className: "flex items-center gap-2 text-gray-700 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-blue-600" }),
                "Activity Level"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: activityLevel, onValueChange: setActivityLevel, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "activity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select activity level" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sedentary", children: "Sedentary (little/no exercise)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "light", children: "Light (1-3 days/week)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "moderate", children: "Moderate (3-5 days/week)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "active", children: "Active (6-7 days/week)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "veryActive", children: "Very Active (2x per day)" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 md:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "climate", className: "flex items-center gap-2 text-gray-700 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-blue-600" }),
                "Climate"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: climate, onValueChange: setClimate, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "climate", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select climate" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cold", children: "Cold (Below 10°C/50°F)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "temperate", children: "Temperate (10-25°C/50-77°F)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "warm", children: "Warm (25-35°C/77-95°F)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hot", children: "Hot (Above 35°C/95°F)" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateWaterIntake, className: "flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 mr-2" }),
              "Calculate Intake"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: reset, variant: "outline", className: "flex-1", children: "Reset" })
          ] })
        ] }),
        result !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border-blue-200 dark:border-blue-800 animate-slide-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-blue-700 dark:text-blue-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5" }),
            "Your Daily Water Intake"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2 animate-pulse-slow", children: [
                result,
                " ml"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl text-gray-600 dark:text-gray-400", children: [
                "(",
                (result / 1e3).toFixed(2),
                " liters / ",
                (result / 236.588).toFixed(1),
                " cups)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-blue-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { className: "text-blue-800 dark:text-blue-200", children: "This is your recommended daily water intake. Adjust based on thirst, urine color, and individual needs. Consult a healthcare provider for personalized advice." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100", children: "💧 Quick Breakdown" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/30 rounded-lg p-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400", children: Math.round(result / 8) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "ml per hour" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cyan-50 dark:bg-cyan-950/30 rounded-lg p-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-cyan-600 dark:text-cyan-400", children: Math.round(result / 250) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "glasses/day" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-teal-50 dark:bg-teal-950/30 rounded-lg p-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-teal-600 dark:text-teal-400", children: Math.round(result / 500) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "bottles/day" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-700 dark:text-blue-300", children: Math.round(result / 4) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "ml every 15min" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              HealthSocialShare,
              {
                title: "Check out my daily water intake recommendation!",
                resultText: `I should drink ${result}ml (${(result / 1e3).toFixed(2)}L) of water per day based on my activity level and climate.`
              }
            )
          ] })
        ] })
      ] }),
      educationalContent
    }
  );
}
export {
  WaterIntakeCalculator as default
};
