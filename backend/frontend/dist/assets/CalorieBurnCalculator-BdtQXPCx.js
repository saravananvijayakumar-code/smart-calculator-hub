import { n as createLucideIcon, r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a4 as Label, V as Input, a6 as Alert, q as TriangleAlert, a7 as AlertDescription, B as Button, a8 as Sparkles, A as Activity, X, c as Shield, o as LoaderCircle, F as Flame, ah as backend, S as SEOHead, aJ as Smartphone } from "./index-CK9G4vW7.js";
import { A as AdsterraSlot } from "./AdsterraSlot-DCXIaKPD.js";
import { A as AdsettraSlot } from "./AdsettraSlot-eVTrqIXX.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { P as Progress } from "./progress-BKzT_jkA.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { I as InFeedAd } from "./InFeedAd-qGRsmhMx.js";
import { Z as Zap } from "./zap-BEhI-iJb.js";
import { C as Camera } from "./camera-DU7V0LE5.js";
import { U as Upload } from "./upload-4q82zR6I.js";
import { c as create, p as persist } from "./middleware-Xu_RK28m.js";
import { M as Monitor } from "./monitor-DWwpLw_r.js";
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
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m12 14-1 1", key: "11onhr" }],
  ["path", { d: "m13.75 18.25-1.25 1.42", key: "1yisr3" }],
  ["path", { d: "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12", key: "1qtqk6" }],
  ["path", { d: "M18.8 9.3a1 1 0 0 0 2.1 7.7", key: "fbbbr2" }],
  [
    "path",
    {
      d: "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z",
      key: "1hyfdd"
    }
  ]
];
const Pizza = createLucideIcon("pizza", __iconNode);
const MET_ACTIVITIES = [
  { name: "Running (8 mph)", met: 9.8, emoji: "🏃", intensity: "High" },
  { name: "Walking (Brisk)", met: 3.8, emoji: "🚶‍♂️", intensity: "Low" },
  { name: "Cycling (Moderate)", met: 7.5, emoji: "🚴", intensity: "Medium" },
  { name: "Swimming", met: 6, emoji: "🏊", intensity: "Medium" },
  { name: "Yoga", met: 3, emoji: "🧘", intensity: "Low" },
  { name: "Jump Rope", met: 11, emoji: "🪢", intensity: "High" },
  { name: "Dancing", met: 6, emoji: "💃", intensity: "Medium" },
  { name: "Weight Lifting", met: 5, emoji: "🏋️", intensity: "Medium" },
  { name: "Basketball", met: 8, emoji: "🏀", intensity: "High" },
  { name: "Soccer", met: 9, emoji: "⚽", intensity: "High" },
  { name: "Tennis", met: 7, emoji: "🎾", intensity: "Medium" },
  { name: "Walking (Slow)", met: 2.5, emoji: "🚶", intensity: "Low" }
];
function getBurnTimeForAllActivities(calories, weightLbs) {
  return MET_ACTIVITIES.map((activity) => {
    const weightKg = weightLbs / 2.2;
    const minutes = Math.ceil(calories / (activity.met * 3.5 * weightKg / 200));
    const hours = parseFloat((minutes / 60).toFixed(1));
    return {
      activity,
      minutes,
      hours
    };
  });
}
const popularFoods = [
  { name: "Big Mac", calories: 563, emoji: "🍔", category: "Fast Food" },
  { name: "Large Pizza Slice", calories: 285, emoji: "🍕", category: "Fast Food" },
  { name: "Chocolate Bar", calories: 235, emoji: "🍫", category: "Snacks" },
  { name: "Can of Soda", calories: 140, emoji: "🥤", category: "Drinks" },
  { name: "French Fries (Medium)", calories: 365, emoji: "🍟", category: "Fast Food" },
  { name: "Donut", calories: 250, emoji: "🍩", category: "Snacks" },
  { name: "Ice Cream Cone", calories: 207, emoji: "🍦", category: "Desserts" },
  { name: "Starbucks Frappuccino", calories: 420, emoji: "☕", category: "Drinks" },
  { name: "Bagel with Cream Cheese", calories: 359, emoji: "🥯", category: "Breakfast" },
  { name: "Burrito", calories: 510, emoji: "🌯", category: "Fast Food" },
  { name: "KFC Chicken Breast", calories: 320, emoji: "🍗", category: "Fast Food" },
  { name: "Cheeseburger", calories: 300, emoji: "🍔", category: "Fast Food" },
  { name: "Hot Dog", calories: 290, emoji: "🌭", category: "Fast Food" },
  { name: 'Subway 6" Turkey Sub', calories: 280, emoji: "🥪", category: "Fast Food" },
  { name: "Taco Bell Burrito Supreme", calories: 400, emoji: "🌮", category: "Fast Food" },
  { name: "Croissant", calories: 231, emoji: "🥐", category: "Breakfast" },
  { name: "Pancakes (3)", calories: 350, emoji: "🥞", category: "Breakfast" },
  { name: "Waffles (2)", calories: 400, emoji: "🧇", category: "Breakfast" },
  { name: "Bacon (3 strips)", calories: 130, emoji: "🥓", category: "Breakfast" },
  { name: "Scrambled Eggs (2)", calories: 200, emoji: "🍳", category: "Breakfast" },
  { name: "Avocado Toast", calories: 250, emoji: "🥑", category: "Breakfast" },
  { name: "Cookies (3)", calories: 150, emoji: "🍪", category: "Snacks" },
  { name: "Chips (1 oz)", calories: 150, emoji: "🥔", category: "Snacks" },
  { name: "Popcorn (Medium)", calories: 400, emoji: "🍿", category: "Snacks" },
  { name: "Candy Bar (Snickers)", calories: 250, emoji: "🍬", category: "Snacks" },
  { name: "Granola Bar", calories: 120, emoji: "🥜", category: "Snacks" },
  { name: "Protein Bar", calories: 200, emoji: "💪", category: "Snacks" },
  { name: "Apple", calories: 95, emoji: "🍎", category: "Fruits" },
  { name: "Banana", calories: 105, emoji: "🍌", category: "Fruits" },
  { name: "Orange", calories: 62, emoji: "🍊", category: "Fruits" },
  { name: "Grapes (1 cup)", calories: 104, emoji: "🍇", category: "Fruits" },
  { name: "Strawberries (1 cup)", calories: 49, emoji: "🍓", category: "Fruits" },
  { name: "Cake Slice", calories: 350, emoji: "🍰", category: "Desserts" },
  { name: "Cupcake", calories: 305, emoji: "🧁", category: "Desserts" },
  { name: "Brownie", calories: 243, emoji: "🍫", category: "Desserts" },
  { name: "Pie Slice", calories: 300, emoji: "🥧", category: "Desserts" },
  { name: "Milkshake", calories: 500, emoji: "🥤", category: "Desserts" },
  { name: "Orange Juice (12 oz)", calories: 165, emoji: "🧃", category: "Drinks" },
  { name: "Beer (12 oz)", calories: 150, emoji: "🍺", category: "Drinks" },
  { name: "Wine (5 oz)", calories: 125, emoji: "🍷", category: "Drinks" },
  { name: "Latte (Grande)", calories: 190, emoji: "☕", category: "Drinks" },
  { name: "Energy Drink", calories: 110, emoji: "🥤", category: "Drinks" },
  { name: "Smoothie", calories: 250, emoji: "🥤", category: "Drinks" },
  { name: "Sushi Roll (8 pieces)", calories: 300, emoji: "🍣", category: "Meals" },
  { name: "Pasta Plate", calories: 400, emoji: "🍝", category: "Meals" },
  { name: "Ramen Bowl", calories: 450, emoji: "🍜", category: "Meals" },
  { name: "Fried Rice", calories: 370, emoji: "🍚", category: "Meals" },
  { name: "Caesar Salad", calories: 350, emoji: "🥗", category: "Meals" },
  { name: "Chicken Wings (6)", calories: 430, emoji: "🍗", category: "Meals" }
];
function DesktopCalorieCalculator({ onAddToHistory }) {
  const [selectedFood, setSelectedFood] = reactExports.useState("");
  const [weight, setWeight] = reactExports.useState("");
  const [weightUnit, setWeightUnit] = reactExports.useState("lbs");
  const [results, setResults] = reactExports.useState(null);
  const [selectedFoodData, setSelectedFoodData] = reactExports.useState(null);
  const [isCalculating, setIsCalculating] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [showAnimation, setShowAnimation] = reactExports.useState(false);
  const handleCalculate = () => {
    if (!selectedFood) {
      setError("Please select a food item");
      return;
    }
    const weightValue = parseFloat(weight);
    const minWeight = weightUnit === "lbs" ? 20 : 9;
    const maxWeight = weightUnit === "lbs" ? 500 : 227;
    if (!weight || weightValue < minWeight || weightValue > maxWeight) {
      setError(`Please enter a valid weight (${minWeight}-${maxWeight} ${weightUnit})`);
      return;
    }
    setError(null);
    setIsCalculating(true);
    setShowAnimation(false);
    setTimeout(() => {
      const food = popularFoods.find((f) => f.name === selectedFood);
      if (!food) return;
      const weightValue2 = parseFloat(weight);
      const weightInPounds = weightUnit === "kg" ? weightValue2 * 2.20462 : weightValue2;
      const burnResults = getBurnTimeForAllActivities(food.calories, weightInPounds);
      setResults(burnResults);
      setSelectedFoodData(food);
      setIsCalculating(false);
      setShowAnimation(true);
      if (onAddToHistory) {
        onAddToHistory({
          food: food.name,
          calories: food.calories,
          weight: weightInPounds,
          weightUnit,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
    }, 800);
  };
  const shareText = results && selectedFoodData ? `🔥 It takes ${results[0].minutes} minutes of ${results[0].activity.name} to burn off ${selectedFoodData.name}! How long would it take you?` : "";
  const intensityColor = (intensity) => {
    switch (intensity) {
      case "High":
        return "text-red-600 dark:text-red-400";
      case "Medium":
        return "text-orange-600 dark:text-orange-400";
      case "Low":
        return "text-green-600 dark:text-green-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };
  const intensityBg = (intensity) => {
    switch (intensity) {
      case "High":
        return "bg-red-50 dark:bg-red-900/20";
      case "Medium":
        return "bg-orange-50 dark:bg-orange-900/20";
      case "Low":
        return "bg-green-50 dark:bg-green-900/20";
      default:
        return "bg-gray-50 dark:bg-gray-900/20";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pizza, { className: "w-6 h-6 text-orange-600" }),
          "Calculate Calorie Burn Time"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Choose your food and we'll show you how long you need to exercise" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "food", className: "text-base font-semibold", children: "Select Food Item" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selectedFood, onValueChange: setSelectedFood, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "text-lg h-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Choose a food item..." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: popularFoods.map((food) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: food.name, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: food.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: food.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-500", children: [
                "(",
                food.calories,
                " cal)"
              ] })
            ] }) }, food.name)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "weight", className: "text-base font-semibold", children: "Your Weight" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "weight",
                type: "number",
                placeholder: "Enter your weight",
                value: weight,
                onChange: (e) => setWeight(e.target.value),
                className: "text-lg h-12 flex-1",
                min: weightUnit === "lbs" ? "20" : "9",
                max: weightUnit === "lbs" ? "500" : "227"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: weightUnit, onValueChange: (value) => setWeightUnit(value), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-24 h-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "lbs", children: "lbs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "kg", children: "kg" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Heavier people burn more calories during exercise" })
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
            className: "w-full h-14 text-lg bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg",
            children: isCalculating ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-2 h-5 w-5 animate-spin" }),
              " Calculating..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Calculate Burn Time" })
          }
        )
      ] })
    ] }),
    results && selectedFoodData && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `transform transition-all duration-700 ${showAnimation ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-2xl border-0 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/40 dark:to-red-900/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-4", children: selectedFoodData.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-2", children: selectedFoodData.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-lg px-4 py-2 bg-orange-500 text-white", children: [
            selectedFoodData.calories,
            " Calories"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300", children: "Here's how long you need to exercise to burn it off:" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExportShareButtons,
          {
            calculatorType: "calorie-burn",
            inputs: { selectedFood, weight },
            results: { food: selectedFoodData.name, calories: selectedFoodData.calories },
            title: shareText
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}, "desktop-calorie-infeed"),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-6 h-6 text-red-600" }),
            "Exercise Time Needed"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardDescription, { children: [
            "Times are calculated based on your weight of ",
            weight,
            " ",
            weightUnit
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-4", children: results.map((result, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 ${intensityBg(result.activity.intensity)} rounded-lg`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: result.activity.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg", children: result.activity.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: intensityColor(result.activity.intensity), children: [
                  result.activity.intensity,
                  " Intensity"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-orange-600 dark:text-orange-400", children: [
                result.minutes,
                " min"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                "(",
                result.hours,
                " hours)"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: Math.min(result.minutes / 180 * 100, 100), className: "h-2" })
        ] }, idx)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-6 h-6 text-yellow-600" }),
          "Quick Comparison"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-green-50 dark:bg-green-900/20 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-green-700 dark:text-green-300 mb-2", children: "Fastest Way" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: results[0].activity.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: results[0].activity.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                  results[0].minutes,
                  " minutes"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-blue-700 dark:text-blue-300 mb-2", children: "Easiest Way" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: results[results.length - 1].activity.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: results[results.length - 1].activity.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                  results[results.length - 1].minutes,
                  " minutes"
                ] })
              ] })
            ] })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
function MobileCameraMode({ onSwitchToDesktop, onAddToHistory }) {
  const [weight, setWeight] = reactExports.useState("");
  const [weightUnit, setWeightUnit] = reactExports.useState("lbs");
  const [selectedImage, setSelectedImage] = reactExports.useState(null);
  const [isAnalyzing, setIsAnalyzing] = reactExports.useState(false);
  const [detectedFood, setDetectedFood] = reactExports.useState(null);
  const [calories, setCalories] = reactExports.useState(null);
  const [burnResults, setBurnResults] = reactExports.useState(null);
  const [error, setError] = reactExports.useState(null);
  const [showCamera, setShowCamera] = reactExports.useState(false);
  const fileInputRef = reactExports.useRef(null);
  const videoRef = reactExports.useRef(null);
  const [stream, setStream] = reactExports.useState(null);
  const compressImage = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        var _a;
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;
          const maxDimension = 1024;
          if (width > height && width > maxDimension) {
            height = height / width * maxDimension;
            width = maxDimension;
          } else if (height > maxDimension) {
            width = width / height * maxDimension;
            height = maxDimension;
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx == null ? void 0 : ctx.drawImage(img, 0, 0, width, height);
          let quality = 0.8;
          let base64 = canvas.toDataURL("image/jpeg", quality);
          while (base64.length > 5e5 && quality > 0.1) {
            quality -= 0.1;
            base64 = canvas.toDataURL("image/jpeg", quality);
          }
          resolve(base64.split(",")[1]);
        };
        img.onerror = reject;
        img.src = (_a = e.target) == null ? void 0 : _a.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };
  const handleImageUpload = async (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    const weightValue = parseFloat(weight);
    const minWeight = weightUnit === "lbs" ? 20 : 9;
    const maxWeight = weightUnit === "lbs" ? 500 : 227;
    if (!weight || weightValue < minWeight || weightValue > maxWeight) {
      setError(`Please enter your weight (${minWeight}-${maxWeight} ${weightUnit}) first`);
      return;
    }
    try {
      setError(null);
      setIsAnalyzing(true);
      setSelectedImage(URL.createObjectURL(file));
      const base64 = await compressImage(file);
      const visionResult = await backend.vision.analyze({ imageBase64: base64 });
      const foodName = visionResult.topFood;
      setDetectedFood(foodName);
      const nutritionResult = await backend.vision.getNutrition({ foodName });
      const calorieAmount = nutritionResult.calories;
      setCalories(calorieAmount);
      const weightValue2 = parseFloat(weight);
      const weightInPounds = weightUnit === "kg" ? weightValue2 * 2.20462 : weightValue2;
      const results = getBurnTimeForAllActivities(calorieAmount, weightInPounds);
      setBurnResults(results);
      if (onAddToHistory) {
        onAddToHistory({
          food: foodName,
          calories: calorieAmount,
          weight: weightInPounds,
          weightUnit,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          source: "camera"
        });
      }
      setIsAnalyzing(false);
    } catch (err) {
      console.error("Analysis error:", err);
      setError(err.message || "Failed to analyze image. Please try again or use manual mode.");
      setIsAnalyzing(false);
    }
  };
  const openCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }
      });
      setStream(mediaStream);
      setShowCamera(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      }, 100);
    } catch (err) {
      console.error("Camera error:", err);
      setError("Unable to access camera. Please use the upload option instead.");
    }
  };
  const capturePhoto = async () => {
    if (!videoRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx == null ? void 0 : ctx.drawImage(videoRef.current, 0, 0);
    closeCamera();
    canvas.toBlob(async (blob) => {
      if (blob) {
        const file = new File([blob], "camera-photo.jpg", { type: "image/jpeg" });
        const fakeEvent = {
          target: { files: [file] }
        };
        await handleImageUpload(fakeEvent);
      }
    }, "image/jpeg", 0.8);
  };
  const closeCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
    setShowCamera(false);
  };
  const resetAnalysis = () => {
    setSelectedImage(null);
    setDetectedFood(null);
    setCalories(null);
    setBurnResults(null);
    setError(null);
  };
  const intensityColor = (intensity) => {
    switch (intensity) {
      case "High":
        return "text-red-600 dark:text-red-400";
      case "Medium":
        return "text-orange-600 dark:text-orange-400";
      case "Low":
        return "text-green-600 dark:text-green-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };
  const intensityBg = (intensity) => {
    switch (intensity) {
      case "High":
        return "bg-red-50 dark:bg-red-900/20";
      case "Medium":
        return "bg-orange-50 dark:bg-orange-900/20";
      case "Low":
        return "bg-green-50 dark:bg-green-900/20";
      default:
        return "bg-gray-50 dark:bg-gray-900/20";
    }
  };
  if (showCamera) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "video",
        {
          ref: videoRef,
          autoPlay: true,
          playsInline: true,
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: closeCamera,
            size: "lg",
            variant: "outline",
            className: "rounded-full w-16 h-16",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: capturePhoto,
            size: "lg",
            className: "rounded-full w-20 h-20 bg-white text-black hover:bg-gray-200",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-8 h-8" })
          }
        )
      ] }) })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-6 h-6 text-purple-600" }),
          "AI Camera Mode"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Snap a photo of your food and get instant calorie burn analysis" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4 text-blue-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { className: "text-blue-800 dark:text-blue-200", children: "Your photo is processed securely and never stored on our servers" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "weight-mobile", className: "text-base font-semibold", children: "Your Weight" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "weight-mobile",
                type: "number",
                placeholder: "Enter your weight",
                value: weight,
                onChange: (e) => setWeight(e.target.value),
                className: "text-lg h-12 flex-1",
                min: weightUnit === "lbs" ? "20" : "9",
                max: weightUnit === "lbs" ? "500" : "227"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: weightUnit, onValueChange: (value) => setWeightUnit(value), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-24 h-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "lbs", children: "lbs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "kg", children: "kg" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: openCamera,
              disabled: isAnalyzing,
              className: "h-24 flex-col gap-2 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-8 h-8" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Take Photo" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => {
                var _a;
                return (_a = fileInputRef.current) == null ? void 0 : _a.click();
              },
              disabled: isAnalyzing,
              variant: "outline",
              className: "h-24 flex-col gap-2 border-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-8 h-8" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Upload" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: fileInputRef,
            type: "file",
            accept: "image/*",
            onChange: handleImageUpload,
            className: "hidden"
          }
        ),
        error && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: error })
        ] }),
        onSwitchToDesktop && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: onSwitchToDesktop,
            variant: "ghost",
            className: "w-full",
            children: "Switch to Manual Mode"
          }
        )
      ] })
    ] }),
    isAnalyzing && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-xl border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-12 h-12 animate-spin mx-auto mb-4 text-purple-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2", children: "Analyzing Your Food..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Using AI to identify food and calculate calories" })
    ] }) }),
    selectedImage && !isAnalyzing && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-xl border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: selectedImage,
          alt: "Selected food",
          className: "w-full rounded-lg mb-4 max-h-64 object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: resetAnalysis, variant: "outline", className: "w-full", children: "Analyze Another Food" })
    ] }) }),
    detectedFood && calories !== null && burnResults && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-2xl border-0 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/40 dark:to-red-900/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-24 h-24 mx-auto mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-full animate-pulse opacity-50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-12 h-12 text-orange-600" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-2", children: detectedFood }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-lg px-4 py-2 bg-orange-500 text-white", children: [
            calories,
            " Calories"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExportShareButtons,
          {
            calculatorType: "calorie-burn-ai",
            inputs: { food: detectedFood, weight },
            results: { food: detectedFood, calories },
            title: `🔥 ${detectedFood} has ${calories} calories! See how long it takes to burn off.`
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-5 h-5 text-blue-600" }),
            "AI Nutrition Insights"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Personalized recommendations based on your food analysis" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
            "💡 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Quick Tip:" }),
            " To burn off ",
            detectedFood,
            " (",
            calories,
            " cal), the most efficient exercise is ",
            burnResults[0].activity.name,
            " for just ",
            burnResults[0].minutes,
            " minutes!"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
            "🔥 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Calorie Context:" }),
            " ",
            calories,
            " calories represents ",
            (calories / 2e3 * 100).toFixed(1),
            "% of a typical 2,000 calorie daily diet."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
            "⚡ ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Activity Alternative:" }),
            " If high-intensity isn't your thing, you could also burn this with ",
            burnResults[burnResults.length - 1].minutes,
            " minutes of ",
            burnResults[burnResults.length - 1].activity.name,
            "."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}, "mobile-calorie-infeed"),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-6 h-6 text-red-600" }),
            "Time to Burn It Off"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardDescription, { children: [
            "Based on your weight of ",
            weight,
            " ",
            weightUnit
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-4", children: burnResults.slice(0, 6).map((result, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 ${intensityBg(result.activity.intensity)} rounded-lg`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: result.activity.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg", children: result.activity.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: intensityColor(result.activity.intensity), children: [
                  result.activity.intensity,
                  " Intensity"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-orange-600 dark:text-orange-400", children: [
                result.minutes,
                " min"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                "(",
                result.hours,
                "h)"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: Math.min(result.minutes / 180 * 100, 100), className: "h-2" })
        ] }, idx)) })
      ] })
    ] })
  ] });
}
const useCalorieHistoryStore = create()(
  persist(
    (set) => ({
      history: [],
      addToHistory: (item) => set((state) => ({
        history: [item, ...state.history].slice(0, 5)
      })),
      clearHistory: () => set({ history: [] })
    }),
    {
      name: "calorie-history-storage"
    }
  )
);
function CalorieBurnCalculator() {
  const [isMobile, setIsMobile] = reactExports.useState(false);
  const [forcedMode, setForcedMode] = reactExports.useState(null);
  const { addToHistory } = useCalorieHistoryStore();
  reactExports.useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const showMobileMode = forcedMode === "mobile" || forcedMode === null && isMobile;
  const showDesktopMode = forcedMode === "desktop" || forcedMode === null && !isMobile;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "AI Calorie Burn Calculator 🔥 - Snap Food Photos & Get Instant Burn Time | MET-Based Exercise Calculator",
        description: "Revolutionary AI-powered calorie burn calculator! Mobile: snap food photos for instant AI analysis. Desktop: choose from popular foods. Get personalized exercise time using scientifically accurate MET values. Privacy-first design.",
        keywords: "AI calorie burn calculator, food photo calorie analysis, MET calculator, exercise time calculator, burn calories, food calories, AI nutrition tracker, camera calorie counter, workout time calculator, MET values",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebApplication",
              "name": "AI Calorie Burn Calculator",
              "url": "https://smartcalculatorhubs.com/calculators/viral/calorie-burn-calculator",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "AI-powered food photo recognition",
                "MET-based burn time calculations",
                "Mobile camera mode",
                "Desktop manual mode",
                "Personalized results based on weight",
                "Privacy-first design"
              ],
              "screenshot": "https://smartcalculatorhubs.com/og-calorie-burn.png"
            },
            {
              "@type": "Article",
              "headline": "Understanding MET Values and Calorie Burn Science",
              "author": {
                "@type": "Organization",
                "name": "Smart Calculator Hubs"
              },
              "datePublished": (/* @__PURE__ */ new Date()).toISOString(),
              "dateModified": (/* @__PURE__ */ new Date()).toISOString(),
              "description": "Comprehensive guide to MET values, calorie burn calculations, and using AI technology for nutrition tracking"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What are MET values?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MET stands for Metabolic Equivalent of Task, a standardized way to measure the energy cost of physical activities. One MET equals the amount of oxygen consumed while sitting at rest (3.5 ml/kg/min or 1 calorie per kg per hour). An activity rated at 6 METs burns 6 times the calories you'd burn while sitting."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How accurate are calorie burn calculators?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Calorie calculators provide estimates based on average values. Individual variation can be 20-30% above or below these estimates due to genetics, fitness level, movement efficiency, and other factors. Use them as general guides rather than absolute measurements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does the AI Camera Mode work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI Camera Mode uses OpenAI's Vision API to identify food items from photos. Photos are compressed to under 500KB, analyzed for food identification, and calorie data is fetched from the Nutritionix database. The system then calculates burn time using MET-based formulas. Photos are processed securely and never stored on our servers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why does weight matter in calorie burn calculations?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Heavier people burn significantly more calories performing the same activity because they're moving more mass. For example, a 200-pound person running burns about 33% more calories than a 150-pound person at the same speed. This is why our calculator requires your weight for personalized accuracy."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's the formula used to calculate burn time?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Burn Time (minutes) = Calories ÷ (MET × 3.5 × Weight in kg ÷ 200). This scientifically validated formula accounts for the activity's MET value, your body weight, and the calories you want to burn."
                  }
                }
              ]
            }
          ]
        }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-red-900/20 dark:to-gray-900 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "top", className: "mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AdsettraSlot, { position: "top", className: "mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl mb-4 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-10 h-10 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent mb-4 animate-fade-in", children: "Calorie Burn Calculator 🔥" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-slide-up", children: "📸 Snap your food & discover instantly! From burgers to donuts, see how long it takes to burn those calories through fun activities!" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-xl border-0 mb-8 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-orange-900/20 overflow-hidden animate-scale-in", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium text-purple-700 dark:text-purple-300", children: [
          isMobile ? /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-5 h-5 animate-bounce" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "w-5 h-5 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: forcedMode ? "Mode:" : `${isMobile ? "📱 Mobile" : "💻 Desktop"} Mode` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: showMobileMode ? "default" : "outline",
              onClick: () => setForcedMode("mobile"),
              className: `transition-all duration-300 ${showMobileMode ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/50 scale-105" : "hover:scale-105 hover:border-purple-400"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-4 h-4 mr-1" }),
                "📸 AI Camera"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: showDesktopMode ? "default" : "outline",
              onClick: () => setForcedMode("desktop"),
              className: `transition-all duration-300 ${showDesktopMode ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/50 scale-105" : "hover:scale-105 hover:border-blue-400"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "w-4 h-4 mr-1" }),
                "⌨️ Manual"
              ]
            }
          )
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsettraSlot, { position: "middle", className: "mb-6" }),
          showMobileMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            MobileCameraMode,
            {
              onSwitchToDesktop: () => setForcedMode("desktop"),
              onAddToHistory: addToHistory
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopCalorieCalculator, { onAddToHistory: addToHistory })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsettraSlot, { position: "middle", className: "mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0 sticky top-4 bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-orange-900/20 animate-slide-in-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent", children: "✨ How AI Camera Works" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 text-sm text-gray-600 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-4 rounded-xl border-2 border-purple-200 dark:border-purple-700 transition-all hover:scale-105", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2", children: "📸 Snap & Analyze" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Point your camera at any food and our AI instantly identifies it! Using advanced computer vision, we recognize thousands of foods with amazing accuracy." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 p-4 rounded-xl border-2 border-blue-200 dark:border-blue-700 transition-all hover:scale-105", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2", children: "🔥 Smart Calculations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Using MET (Metabolic Equivalent) values, we calculate exactly how long you'd need to exercise to burn those calories. Personalized to YOUR weight!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-4 rounded-xl border-2 border-green-200 dark:border-green-700 transition-all hover:scale-105", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2", children: "🎯 Fun Activities" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "From running to dancing, see burn times for activities YOU enjoy! No boring gym routines required - find what makes fitness fun for you." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 p-4 rounded-xl border-2 border-yellow-200 dark:border-yellow-700 transition-all hover:scale-105", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-orange-700 dark:text-orange-300 mb-2 flex items-center gap-2", children: "🔒 Privacy First" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Your photos are analyzed in real-time and NEVER stored! We respect your privacy - what you eat is your business." })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0 mb-8 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 dark:from-orange-900/30 dark:via-pink-900/30 dark:to-purple-900/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 dark:from-orange-400 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent animate-fade-in", children: "🔬 Understanding MET Values and Calorie Burn Science" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose prose-lg max-w-none dark:prose-invert", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 md:p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-700 my-6 transform hover:scale-[1.02] transition-all duration-300 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3 text-blue-700 dark:text-blue-300", children: "💡 What Are MET Values?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base md:text-lg leading-relaxed mb-4", children: [
              "MET stands for ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-blue-600 dark:text-blue-400", children: "Metabolic Equivalent of Task" }),
              ", and it's a standardized way to measure the energy cost of physical activities. One MET is defined as the amount of oxygen consumed while sitting at rest, which equals approximately ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded font-mono", children: "3.5 ml/kg/min" }),
              " of oxygen per kilogram of body weight per minute, or about ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded font-mono", children: "1 calorie per kg per hour" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base md:text-lg leading-relaxed", children: [
              "When you see an activity rated at ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-orange-600 dark:text-orange-400", children: "6 METs" }),
              ", it means you're burning ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "6 times" }),
              " the calories you would burn while sitting quietly. This system allows us to compare the intensity of different activities on a standardized scale, regardless of your body weight! 📊"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 md:p-8 rounded-2xl border-2 border-purple-200 dark:border-purple-700 my-6 transform hover:scale-[1.02] transition-all duration-300 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-bold mb-4 flex items-center gap-3 text-purple-700 dark:text-purple-300", children: "🧮 The MET Formula Explained" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg leading-relaxed mb-4", children: "Our calculator uses the scientifically validated MET formula to calculate burn time:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 p-6 rounded-xl my-4 font-mono text-sm md:text-base border-2 border-indigo-300 dark:border-indigo-600 shadow-inner transform hover:scale-105 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center font-bold text-purple-700 dark:text-purple-300", children: "Burn Time (minutes) = Calories ÷ (MET × 3.5 × Weight in kg ÷ 200)" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-purple-700 dark:text-purple-300 mb-3", children: "Where:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 bg-white dark:bg-gray-800 p-3 rounded-lg transform hover:translate-x-2 transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🍔" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-orange-600 dark:text-orange-400", children: "Calories" }),
                  ": The food calories you want to burn"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 bg-white dark:bg-gray-800 p-3 rounded-lg transform hover:translate-x-2 transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🏃" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-blue-600 dark:text-blue-400", children: "MET" }),
                  ": The metabolic equivalent of the activity (e.g., 9.8 for running, 3.8 for brisk walking)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 bg-white dark:bg-gray-800 p-3 rounded-lg transform hover:translate-x-2 transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "⚖️" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-600 dark:text-green-400", children: "Weight in kg" }),
                  ": Your body weight in kilograms (lbs ÷ 2.2)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 bg-white dark:bg-gray-800 p-3 rounded-lg transform hover:translate-x-2 transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🔬" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-cyan-600 dark:text-cyan-400", children: "3.5" }),
                  ": The oxygen consumption constant in ml/kg/min"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 bg-white dark:bg-gray-800 p-3 rounded-lg transform hover:translate-x-2 transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🔢" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-pink-600 dark:text-pink-400", children: "200" }),
                  ": Conversion factor to get calories per minute"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent", children: "🏃‍♂️ MET Values for Common Activities" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-gray-600 dark:text-gray-300 mb-6 text-lg", children: "Here's a comprehensive breakdown of MET values we use in our calculator:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-2xl border-2 border-red-200 dark:border-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-red-700 dark:text-red-300", children: "🔥 High-Intensity (8.0+ METs)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-3 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-orange-600 dark:text-orange-400", children: "Jump Rope (11.0)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Most efficient calorie burner! 🏆" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-3 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-orange-600 dark:text-orange-400", children: "Running 8 mph (9.8)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Fast-paced sustainable running 🏃" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-3 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-orange-600 dark:text-orange-400", children: "Soccer (9.0)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Constant movement & sprinting ⚽" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-3 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-orange-600 dark:text-orange-400", children: "Basketball (8.0)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Full-court sprints & jumps 🏀" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-2xl border-2 border-yellow-200 dark:border-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-yellow-700 dark:text-yellow-300", children: "⚡ Moderate (5.0-7.9 METs)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-3 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-amber-600 dark:text-amber-400", children: "Cycling Moderate (7.5)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Biking at 12-14 mph 🚴" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-3 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-amber-600 dark:text-amber-400", children: "Tennis (7.0)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Singles with consistent rallies 🎾" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-3 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-amber-600 dark:text-amber-400", children: "Swimming (6.0)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Moderate freestyle 🏊" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-3 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-amber-600 dark:text-amber-400", children: "Dancing (6.0)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Zumba & aerobic dance 💃" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-3 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-amber-600 dark:text-amber-400", children: "Weight Lifting (5.0)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Resistance training 🏋️" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border-2 border-green-200 dark:border-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-green-700 dark:text-green-300", children: "🌱 Low-Intensity (2.5-4.9 METs)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-3 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-green-600 dark:text-green-400", children: "Brisk Walking (3.8)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Walking at 3.5-4 mph 🚶" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-3 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-green-600 dark:text-green-400", children: "Yoga (3.0)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Hatha or general practice 🧘" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-3 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-green-600 dark:text-green-400", children: "Walking Slow (2.5)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Casual strolling 🚶‍♀️" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 md:p-8 rounded-2xl border-2 border-indigo-200 dark:border-indigo-700 my-8 transform hover:scale-[1.02] transition-all duration-300 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-indigo-700 dark:text-indigo-300", children: "⚖️ Why Weight Matters in Calorie Burn" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base md:text-lg leading-relaxed mb-4", children: [
              "One of the most important factors in calorie expenditure is ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-indigo-600 dark:text-indigo-400", children: "body weight" }),
              ". A heavier person burns significantly more calories performing the same activity because they're moving more mass against gravity and generating more force with each movement. 💪"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md transform hover:scale-105 transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: "👤" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-blue-600 dark:text-blue-400 text-lg", children: "150-pound person" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 p-4 rounded-lg font-mono text-sm border-2 border-blue-300 dark:border-blue-600", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: "9.8 × 3.5 × (150 ÷ 2.2) ÷ 200" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center font-bold text-xl mt-2 text-blue-700 dark:text-blue-300", children: "= 11.7 cal/min" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md transform hover:scale-105 transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: "👥" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-purple-600 dark:text-purple-400 text-lg", children: "200-pound person" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 p-4 rounded-lg font-mono text-sm border-2 border-purple-300 dark:border-purple-600", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: "9.8 × 3.5 × (200 ÷ 2.2) ÷ 200" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center font-bold text-xl mt-2 text-purple-700 dark:text-purple-300", children: "= 15.6 cal/min" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 p-5 rounded-xl border-2 border-orange-300 dark:border-orange-600 text-center transform hover:scale-105 transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl md:text-2xl font-bold text-orange-700 dark:text-orange-300", children: [
                "That's a ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl text-red-600 dark:text-red-400", children: "33% difference!" }),
                " 🚀"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-gray-700 dark:text-gray-300", children: "This is why our calculator requires your weight—personalized calculations are far more accurate than generic estimates." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 md:p-8 rounded-2xl border-2 border-pink-200 dark:border-pink-700 my-8 transform hover:scale-[1.02] transition-all duration-300 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-pink-700 dark:text-pink-300", children: "🔋 Understanding Calories and Energy Balance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "💡" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base md:text-lg leading-relaxed", children: [
                  "A ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-pink-600 dark:text-pink-400", children: "calorie" }),
                  ` is a unit of energy. Specifically, it's the amount of energy needed to raise the temperature of one gram of water by one degree Celsius. When we talk about "calories" in food, we're actually referring to`,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-pink-200 dark:bg-pink-800 px-2 py-1 rounded font-mono mx-1", children: "kilocalories (1000 calories = 1 kcal)" }),
                  ', but the term "calorie" has become standard in nutrition.'
                ] }) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "⚡" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base md:text-lg leading-relaxed", children: [
                  "Your body needs energy for ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "everything" }),
                  ": breathing, thinking, moving, digesting food, and maintaining body temperature. The calories you consume from food provide this energy."
                ] }) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-4 rounded-xl border-2 border-green-300 dark:border-green-600 transform hover:scale-105 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "📈" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-green-700 dark:text-green-300", children: "Calorie Surplus" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mt-2", children: "Consume MORE than you burn = stored as fat" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 p-4 rounded-xl border-2 border-blue-300 dark:border-blue-600 transform hover:scale-105 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "📉" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-blue-700 dark:text-blue-300", children: "Calorie Deficit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mt-2", children: "Burn MORE than you consume = uses stored fat" })
                ] }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "How Many Calories Do You Burn Daily?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Your total daily energy expenditure (TDEE) consists of three main components:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Basal Metabolic Rate (BMR):" }),
              " 60-75% of total calories burned. This is the energy your body uses for basic functions while at rest—heart beating, breathing, cell production, and nutrient processing."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Thermic Effect of Food (TEF):" }),
              " 10% of total calories. This is the energy required to digest, absorb, and process nutrients from food."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Activity Energy Expenditure:" }),
              " 15-30% of total calories. This includes both structured exercise and non-exercise activity thermogenesis (NEAT)—all the movement you do throughout the day."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Factors Affecting Calorie Burn" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Body Weight and Composition" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Heavier people burn more calories doing the same activity because they're moving more mass. A 200-pound person will burn significantly more calories running a mile than a 130-pound person. Additionally, muscle tissue burns more calories at rest than fat tissue, so people with higher muscle mass have higher metabolic rates." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Age" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Metabolism gradually slows with age, primarily due to muscle loss and hormonal changes. On average, metabolic rate decreases by 1-2% per decade after age 30. However, staying active and maintaining muscle mass can significantly offset this decline." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Gender" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Men typically have higher metabolic rates than women because they generally have more muscle mass and less body fat. Hormonal differences also play a role. However, this is a general trend with significant individual variation." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Exercise Intensity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Higher intensity activities burn more calories per minute. Running burns more than walking, swimming laps burns more than leisurely floating. The relationship isn't always linear though—extremely high intensity can't be sustained as long as moderate intensity." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Genetics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Some people are genetically predisposed to faster or slower metabolisms. While you can't change your genes, understanding this helps set realistic expectations and focus on what you can control." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Popular Foods and Their Calorie Content" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Fast Food" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Fast food is notoriously calorie-dense due to high fat and sugar content:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Big Mac: 563 calories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Medium McDonald's Fries: 365 calories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Large Pizza Slice: 285 calories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Chipotle Burrito: 500-1,000+ calories (depending on fillings)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "KFC Chicken Breast (Original): 320 calories" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Snacks and Treats" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Standard Chocolate Bar: 235 calories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Bag of Chips (1 oz): 150 calories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Glazed Donut: 250 calories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Cookies (3 medium): 150 calories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Candy Bar (Snickers): 250 calories" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Beverages" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Liquid calories are often forgotten but add up quickly:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Can of Soda (12 oz): 140 calories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Starbucks Grande Frappuccino: 420 calories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Orange Juice (12 oz): 165 calories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Beer (12 oz): 150 calories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Glass of Wine (5 oz): 125 calories" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Calories Burned by Different Activities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "High-Intensity Activities (10+ cal/min)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Running (8 mph): 12-15 cal/min" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Jump Rope: 11-14 cal/min" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Swimming (vigorous): 10-13 cal/min" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Burpees: 10-12 cal/min" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Boxing: 10-12 cal/min" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Rowing (vigorous): 10-11 cal/min" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Moderate-Intensity Activities (5-10 cal/min)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Cycling (moderate): 7-9 cal/min" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Basketball: 8-10 cal/min" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Soccer: 9-11 cal/min" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tennis: 7-9 cal/min" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Dancing: 6-8 cal/min" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Hiking: 6-8 cal/min" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Low-Intensity Activities (3-5 cal/min)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Walking (brisk): 4-5 cal/min" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Weight Lifting: 4-6 cal/min" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Yoga: 3-4 cal/min" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Golf (walking): 4-5 cal/min" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Gardening: 3-5 cal/min" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "The Afterburn Effect (EPOC)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Excess Post-Exercise Oxygen Consumption (EPOC), commonly called the "afterburn effect," refers to the elevated oxygen consumption and calorie burning that continues after exercise ends. High-intensity workouts, especially interval training and heavy resistance training, create a significant afterburn effect that can last 24-48 hours.' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While the extra calories burned are often modest (50-200 calories), this effect means your workout continues working for you long after you've hit the shower. This is one reason why intense, shorter workouts can be as effective as longer, moderate-intensity sessions." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Practical Strategies for Burning More Calories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Increase Daily Movement (NEAT)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Non-exercise activity thermogenesis can account for hundreds of calories daily:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Take stairs instead of elevators" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Park farther away from destinations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Stand or walk during phone calls" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Use a standing desk" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Do household chores actively" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Walk or bike for short errands instead of driving" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Build Muscle Through Strength Training" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Every pound of muscle burns about 6-7 calories per day at rest, compared to 2-3 calories for fat. While this might seem small, it adds up. Ten pounds of additional muscle burns an extra 40-50 calories daily—that's 14,600-18,250 calories per year, equivalent to 4-5 pounds of fat." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Try High-Intensity Interval Training (HIIT)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "HIIT alternates short bursts of intense activity with recovery periods. This approach:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Burns more calories in less time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Creates a significant afterburn effect" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Improves cardiovascular fitness efficiently" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Can be adapted to any fitness level" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Prevents workout boredom" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Stay Consistent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The best exercise for burning calories is the one you'll actually do consistently. A moderate workout you do regularly beats an intense workout you rarely complete. Find activities you enjoy and make them habits." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: 'The Reality of "Burning Off" Foods' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsettraSlot, { position: "middle", className: "my-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While our calculator shows how long you'd need to exercise to burn specific foods, the reality is more complex. Your body doesn't work in a vacuum—calories consumed and burned interact in sophisticated ways throughout the day." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'More importantly, focusing solely on "earning" food through exercise or "burning off" indulgences can create an unhealthy relationship with food and fitness. Exercise should be about health, strength, mood, and longevity—not punishment for eating.' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "That said, understanding the energy content of foods and the effort required to burn those calories can help with mindful eating decisions. It's eye-opening to realize a 420-calorie Frappuccino requires 40+ minutes of running to burn off!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "The Role of Diet vs. Exercise in Weight Management" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `There's a saying in fitness: "You can't out-exercise a bad diet." Research supports this—weight loss is typically about 75% diet and 25% exercise. Why?` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "It's much easier to consume calories than burn them" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "A Big Mac (563 calories) takes 5 minutes to eat but 55+ minutes of running to burn" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Exercise increases appetite, potentially leading to compensatory eating" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "People often overestimate calories burned and underestimate calories consumed" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The most effective approach combines mindful eating with regular physical activity. Use exercise for health, fitness, and mental wellbeing, while using nutrition for weight management." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Common Myths About Burning Calories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Myth: Spot Reduction Works" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You cannot target fat loss in specific body areas through exercise. Doing crunches won't specifically burn belly fat—your body decides where to lose fat based on genetics, hormones, and overall body composition. Focus on overall fat loss through diet and full-body exercise." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Myth: Cardio Burns More Fat Than Strength Training" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While cardio burns more calories during the workout, strength training builds muscle that increases your metabolic rate 24/7. The best approach includes both cardio and resistance training for optimal body composition and calorie burning." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Myth: You Must Exercise Fasted to Burn More Fat" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While fasted exercise does burn a higher percentage of calories from fat, total calorie burn matters more for weight loss. Many people perform better and burn more total calories when properly fueled. Do what works best for your body and schedule." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Myth: More Sweat = More Calories Burned" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sweat indicates body temperature regulation, not calorie burn. You might sweat heavily in a hot yoga class but burn fewer calories than a cool-weather run. Don't equate perspiration with effectiveness." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Creating a Sustainable Approach" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The goal isn't to meticulously track every calorie in and out—that's exhausting and often counterproductive. Instead, use this knowledge to:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Make informed food choices" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Understand the energy cost of different activities" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Find enjoyable ways to stay active" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Develop a healthy relationship with food and exercise" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Focus on overall health rather than just numbers" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Frequently Asked Questions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "How accurate are calorie burn calculators?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Calorie calculators provide estimates based on average values. Individual variation can be 20-30% above or below these estimates due to genetics, fitness level, efficiency of movement, and other factors. Use them as general guides, not absolute measurements." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Can I eat anything if I exercise enough?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While increasing exercise allows for more caloric intake, food quality matters for health beyond just calories. Nutrient-dense foods provide vitamins, minerals, and other compounds essential for health that empty calories don't offer. Balance treats with nutritious foods." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Why does the scale go up when I start exercising?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "New exercise, especially strength training, causes temporary water retention for muscle repair. Your muscles also store more glycogen (and associated water) when you exercise regularly. Don't panic—this is normal and temporary. Focus on how you feel and how clothes fit rather than just scale weight." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "How long should I exercise daily?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Health guidelines recommend 150 minutes of moderate activity or 75 minutes of vigorous activity weekly, plus strength training twice weekly. However, any movement is better than none. Start where you are and gradually increase duration and intensity." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "How does the AI Camera Mode work?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our mobile AI Camera Mode uses advanced computer vision technology to identify food items from photos. When you take or upload a photo, it's compressed to under 500KB and sent to OpenAI's Vision API, which analyzes the image and identifies the food with high accuracy. We then use the Nutritionix nutrition database to fetch precise calorie information for that food item, which feeds into our MET-based burn time calculator. Your photos are processed securely and never stored on our servers—privacy is our priority." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "What's the difference between desktop and mobile modes?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Desktop mode offers a traditional calculator experience with a dropdown menu of popular foods where you can manually select items and see detailed burn time breakdowns. Mobile mode features our innovative AI Camera Mode, which lets you simply snap a photo of your food for instant calorie and burn time analysis. Both modes use the same scientifically accurate MET formula, but mobile mode provides a faster, more convenient experience when you're on the go." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Real-World Examples Using MET Calculations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Let's walk through some practical examples to show how MET values work in real scenarios:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Example 1: Burning Off a Big Mac (563 calories)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sarah weighs 140 pounds and just enjoyed a Big Mac. Let's calculate how long she needs to run at 8 mph (9.8 METs) to burn it off:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-sm", children: "Weight in kg: 140 ÷ 2.2 = 63.6 kg" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-sm", children: "Calories per minute: 9.8 × 3.5 × 63.6 ÷ 200 = 10.9 cal/min" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-sm", children: "Burn time: 563 ÷ 10.9 = 51.7 minutes" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sarah needs to run for approximately 52 minutes. If she prefers brisk walking (3.8 METs), it would take 134 minutes or about 2.2 hours." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Example 2: A Lighter Snack (Donut, 250 calories)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Mike weighs 180 pounds and had a donut. He wants to cycle it off at moderate intensity (7.5 METs):" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-sm", children: "Weight in kg: 180 ÷ 2.2 = 81.8 kg" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-sm", children: "Calories per minute: 7.5 × 3.5 × 81.8 ÷ 200 = 10.7 cal/min" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-sm", children: "Burn time: 250 ÷ 10.7 = 23.4 minutes" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Mike needs about 23 minutes of moderate cycling. Because he's heavier than Sarah, he burns more calories per minute during the same activity." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Optimizing Your Calorie Burn Strategy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Interval Training for Maximum Efficiency" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "High-Intensity Interval Training (HIIT) combines short bursts of high-MET activities (10-12 METs) with recovery periods. This approach can burn calories more efficiently than steady-state exercise and creates a significant afterburn effect. A 20-minute HIIT session might be as effective as 45 minutes of moderate cardio." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Compound Movements Burn More" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Activities that engage multiple muscle groups simultaneously have higher MET values. Burpees, rowing, swimming, and running engage your entire body, resulting in higher calorie burn compared to isolated exercises like bicep curls." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Build Muscle to Increase Resting Metabolism" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While strength training has a moderate MET value (5.0), it builds muscle that burns more calories 24/7. Each pound of muscle burns about 6 calories per day at rest, compared to 2 calories for fat. Over time, increased muscle mass significantly boosts your total daily energy expenditure." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Mobile AI Technology: The Future of Calorie Tracking" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Traditional calorie tracking requires manual database searches and portion estimation, which can be time-consuming and inaccurate. Our AI Camera Mode represents the future of nutrition tracking—simply point your camera and get instant, personalized results." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The technology combines computer vision (identifying what food you're eating), nutrition databases (finding accurate calorie data), and exercise science (calculating burn times using MET values). This integration makes calorie awareness more accessible and practical for everyday use." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Privacy and Security" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We understand that food photos can be personal. That's why our AI Camera Mode processes images in real-time and never stores them. Your photos are compressed, analyzed, and immediately discarded. We only save your calculated results locally in your browser's cache (last 5 searches) for your convenience—no server-side storage of personal data." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Conclusion" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Understanding calorie burn helps create awareness about energy balance, but shouldn't become an obsession. The best approach to health combines enjoyable physical activity with nutritious eating, adequate sleep, stress management, and self-compassion." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Use tools like this calculator for fun, education, and occasional reality checks—not as a rigid system for controlling every calorie. Your body is remarkably intelligent at regulating energy when you listen to hunger cues, eat mindfully, and move regularly." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Remember: fitness is a journey, not a destination. Focus on building sustainable habits that enhance your life rather than restrict it. Enjoy your favorite foods in moderation, find activities you love, and celebrate what your amazing body can do!" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  CalorieBurnCalculator as default
};
