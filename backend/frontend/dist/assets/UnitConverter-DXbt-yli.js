import { n as createLucideIcon, r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a3 as Label, U as Input, a7 as Sparkles, G as Globe, T as TrendingUp } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { P as Progress } from "./progress-BN2f3CdS.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { A as AIAnalysis } from "./AIAnalysis-DnR9Up6F.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { A as ArrowLeftRight } from "./arrow-left-right-BvEw5c4e.js";
import { T as Thermometer } from "./thermometer-DY1RDwgn.js";
import { R as Ruler } from "./ruler-CZWk2-MO.js";
import { T as Target } from "./target-1ApqtYDG.js";
import { Z as Zap } from "./zap-B5WxZbDS.js";
import { B as BookOpen } from "./book-open-BKiKsQcZ.js";
import { L as Lightbulb } from "./lightbulb-doNczJxC.js";
import { A as Award } from "./award-DdRvOLEz.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./EnhancedAIAnalysis-BZiQW2bt.js";
import "./loader-circle-BYW7QwsU.js";
import "./brain-U3SZm3t9.js";
import "./circle-check-big-BoxGYPKG.js";
import "./arrow-right-CtOKJdMG.js";
import "./tabs-BNSAX0su.js";
import "./share-2-ViScha7M.js";
import "./link-DxXhzsoi.js";
import "./copy-DGMuG98H.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./linkedin-BSJyfSWT.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "5", r: "3", key: "rqqgnr" }],
  [
    "path",
    {
      d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",
      key: "56o5sh"
    }
  ]
];
const Weight = createLucideIcon("weight", __iconNode);
function UnitConverter() {
  var _a, _b;
  const [category, setCategory] = reactExports.useState("length");
  const [fromUnit, setFromUnit] = reactExports.useState("");
  const [toUnit, setToUnit] = reactExports.useState("");
  const [inputValue, setInputValue] = reactExports.useState("");
  const [result, setResult] = reactExports.useState({
    result: 0,
    formula: "",
    isValid: false
  });
  const conversions = {
    length: {
      meters: { feet: 3.28084, inches: 39.3701, yards: 1.09361, centimeters: 100, millimeters: 1e3, kilometers: 1e-3 },
      feet: { meters: 0.3048, inches: 12, yards: 0.333333, centimeters: 30.48, millimeters: 304.8, kilometers: 3048e-7 },
      inches: { meters: 0.0254, feet: 0.0833333, yards: 0.0277778, centimeters: 2.54, millimeters: 25.4, kilometers: 254e-7 },
      yards: { meters: 0.9144, feet: 3, inches: 36, centimeters: 91.44, millimeters: 914.4, kilometers: 9144e-7 },
      centimeters: { meters: 0.01, feet: 0.0328084, inches: 0.393701, yards: 0.0109361, millimeters: 10, kilometers: 1e-5 },
      millimeters: { meters: 1e-3, feet: 328084e-8, inches: 0.0393701, yards: 109361e-8, centimeters: 0.1, kilometers: 1e-6 },
      kilometers: { meters: 1e3, feet: 3280.84, inches: 39370.1, yards: 1093.61, centimeters: 1e5, millimeters: 1e6 }
    },
    weight: {
      kilograms: { pounds: 2.20462, ounces: 35.274, grams: 1e3, tons: 1e-3, stones: 0.157473 },
      pounds: { kilograms: 0.453592, ounces: 16, grams: 453.592, tons: 453592e-9, stones: 0.0714286 },
      ounces: { kilograms: 0.0283495, pounds: 0.0625, grams: 28.3495, tons: 283495e-10, stones: 446429e-8 },
      grams: { kilograms: 1e-3, pounds: 220462e-8, ounces: 0.035274, tons: 1e-6, stones: 157473e-9 },
      tons: { kilograms: 1e3, pounds: 2204.62, ounces: 35274, grams: 1e6, stones: 157.473 },
      stones: { kilograms: 6.35029, pounds: 14, ounces: 224, grams: 6350.29, tons: 635029e-8 }
    },
    temperature: {
      celsius: { fahrenheit: (c) => c * 9 / 5 + 32, kelvin: (c) => c + 273.15 },
      fahrenheit: { celsius: (f) => (f - 32) * 5 / 9, kelvin: (f) => (f - 32) * 5 / 9 + 273.15 },
      kelvin: { celsius: (k) => k - 273.15, fahrenheit: (k) => (k - 273.15) * 9 / 5 + 32 }
    }
  };
  const units = {
    length: ["meters", "feet", "inches", "yards", "centimeters", "millimeters", "kilometers"],
    weight: ["kilograms", "pounds", "ounces", "grams", "tons", "stones"],
    temperature: ["celsius", "fahrenheit", "kelvin"]
  };
  const categoryIcons = {
    length: Ruler,
    weight: Weight,
    temperature: Thermometer
  };
  const categoryColors = {
    length: "from-blue-500 to-cyan-500",
    weight: "from-purple-500 to-pink-500",
    temperature: "from-orange-500 to-red-500"
  };
  reactExports.useEffect(() => {
    setFromUnit("");
    setToUnit("");
    setInputValue("");
    setResult({ result: 0, formula: "", isValid: false });
  }, [category]);
  reactExports.useEffect(() => {
    var _a2;
    const value = parseFloat(inputValue);
    if (!value || !fromUnit || !toUnit || fromUnit === toUnit) {
      setResult({ result: 0, formula: "", isValid: false });
      return;
    }
    let convertedValue;
    let formula;
    if (category === "temperature") {
      const tempConversions = conversions[category][fromUnit];
      if (tempConversions && tempConversions[toUnit]) {
        const conversion = tempConversions[toUnit];
        convertedValue = typeof conversion === "function" ? conversion(value) : value * conversion;
        formula = `${value}° ${fromUnit} = ${convertedValue.toFixed(2)}° ${toUnit}`;
      } else {
        setResult({ result: 0, formula: "", isValid: false });
        return;
      }
    } else {
      const conversionFactor = (_a2 = conversions[category][fromUnit]) == null ? void 0 : _a2[toUnit];
      if (conversionFactor) {
        if (typeof conversionFactor === "function") {
          convertedValue = conversionFactor(value);
          formula = `${value} ${fromUnit} = ${convertedValue.toFixed(4)} ${toUnit}`;
        } else {
          convertedValue = value * conversionFactor;
          formula = `${value} ${fromUnit} × ${conversionFactor} = ${convertedValue} ${toUnit}`;
        }
      } else {
        setResult({ result: 0, formula: "", isValid: false });
        return;
      }
    }
    setResult({
      result: convertedValue,
      formula,
      isValid: true
    });
  }, [inputValue, fromUnit, toUnit, category]);
  const CategoryIcon = categoryIcons[category];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Unit Converter | Measurement Converter | Smart Calculator Hubs",
      description: "Convert between different units of measurement including length, weight, temperature, and more. Free online unit converter.",
      keywords: "unit converter, measurement converter, length converter, weight converter, temperature converter",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4 animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "w-10 h-10 text-blue-600 animate-pulse" }),
            "Universal Unit Converter ⚡"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Transform measurements instantly across length, weight, and temperature! Your ultimate conversion companion for science, cooking, travel, and everyday life. 🌍📏" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-2 bg-gradient-to-r ${categoryColors[category]} animate-pulse` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2 text-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryIcon, { className: "h-6 w-6 animate-bounce" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Unit Conversion" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-gradient-to-r from-green-500 to-emerald-500 text-white animate-pulse", children: "Instant Results" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-base", children: "Select your measurement category and watch the magic happen! ✨" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "category", className: "text-base font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-4 h-4 text-purple-600" }),
                "Measurement Category"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: category, onValueChange: setCategory, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-12 text-base border-2 hover:border-blue-400 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select category" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "length", className: "text-base", children: "📏 Length (Distance)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "weight", className: "text-base", children: "⚖️ Weight (Mass)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "temperature", className: "text-base", children: "🌡️ Temperature" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 items-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "fromUnit", className: "text-base font-semibold", children: "From Unit" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: fromUnit, onValueChange: setFromUnit, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-12 border-2 hover:border-purple-400 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select unit" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: (_a = units[category]) == null ? void 0 : _a.map((unit) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: unit, className: "text-base", children: unit.charAt(0).toUpperCase() + unit.slice(1) }, unit)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "inputValue", className: "text-base font-semibold flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-yellow-600 animate-pulse" }),
                  "Value"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "inputValue",
                    type: "number",
                    placeholder: "Enter value",
                    value: inputValue,
                    onChange: (e) => setInputValue(e.target.value),
                    className: "h-12 text-base border-2 hover:border-green-400 focus:border-green-500 transition-all"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "toUnit", className: "text-base font-semibold", children: "To Unit" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: toUnit, onValueChange: setToUnit, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-12 border-2 hover:border-pink-400 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select unit" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: (_b = units[category]) == null ? void 0 : _b.map((unit) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: unit, className: "text-base", children: unit.charAt(0).toUpperCase() + unit.slice(1) }, unit)) })
                ] })
              ] })
            ] })
          ] }) })
        ] }),
        result.isValid && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 transform hover:scale-105 transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-lg font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-green-600 animate-pulse" }),
              "Conversion Result"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3 animate-pulse", children: category === "temperature" ? `${result.result.toFixed(2)}° ${toUnit}` : `${result.result.toFixed(6)} ${toUnit}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: result.formula }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: 100, className: "mt-4 h-2 bg-green-200" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIAnalysis,
            {
              analysisRequest: {
                calculatorType: "unit-converter",
                data: {
                  fromUnit,
                  toUnit,
                  fromValue: parseFloat(inputValue) || 0,
                  toValue: result.result,
                  category,
                  conversionFactor: result.result / (parseFloat(inputValue) || 1)
                }
              },
              autoRun: true,
              title: "AI Unit Conversion Analysis",
              description: "Get practical insights and real-world applications for your unit conversions."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "unit-converter",
              inputs: {
                inputValue: parseFloat(inputValue) || 0,
                fromUnit,
                toUnit,
                category
              },
              results: {
                result: result.result,
                formula: result.formula
              },
              title: "Unit Converter Report"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg border-2 border-blue-100 dark:border-blue-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-6 h-6 animate-bounce" }),
            "Quick Reference Guide"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg transform hover:scale-105 transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2 text-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Ruler, { className: "w-5 h-5 animate-pulse" }),
                "Length 📏"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-blue-100 text-blue-700", children: "1m" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "= 3.28 feet" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-blue-100 text-blue-700", children: '1"' }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "= 2.54 cm" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-blue-100 text-blue-700", children: "1 mi" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "= 1.609 km" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-blue-100 text-blue-700", children: "1 yd" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "= 0.914 m" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg transform hover:scale-105 transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2 text-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Weight, { className: "w-5 h-5 animate-pulse" }),
                "Weight ⚖️"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-purple-100 text-purple-700", children: "1 kg" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "= 2.205 lbs" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-purple-100 text-purple-700", children: "1 lb" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "= 16 oz" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-purple-100 text-purple-700", children: "1 st" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "= 14 lbs" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-purple-100 text-purple-700", children: "1 ton" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "= 1000 kg" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg transform hover:scale-105 transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2 text-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Thermometer, { className: "w-5 h-5 animate-pulse" }),
                "Temperature 🌡️"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-orange-100 text-orange-700", children: "0°C" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "= 32°F = 273K" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-orange-100 text-orange-700", children: "100°C" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "= 212°F" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-orange-100 text-orange-700", children: "°F" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "= (°C × 9/5) + 32" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-orange-100 text-orange-700", children: "°C" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "= (°F - 32) × 5/9" })
                ] })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-6 h-6 animate-bounce" }),
            "What Are Unit Conversions? 🤔"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6 space-y-4 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Unit conversions are the mathematical process of changing a measurement from one unit to another while keeping the actual quantity the same. Think of it like translating between languages—you're expressing the same idea in different words! Whether you're converting kilometers to miles for a road trip, grams to ounces for a recipe, or Celsius to Fahrenheit for the weather forecast, you're performing a unit conversion. 🌍" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-xl mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-purple-600 animate-pulse" }),
                "Why Do We Need Different Units?"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mb-4", children: 'Throughout history, different cultures developed their own measurement systems based on what was available and practical. The ancient Egyptians used cubits (the length from elbow to fingertip), while the Romans created the mile (from "mille passus"—a thousand paces). Today, we have two main systems:' }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-blue-600 mt-1", children: "🌍 Metric" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "The Metric System (SI):" }),
                    " Used by most of the world, based on powers of 10. Super logical and easy to convert—1 kilometer = 1000 meters = 1,000,000 millimeters! It was invented during the French Revolution to standardize measurements."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-purple-600 mt-1", children: "🇺🇸 Imperial" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "The Imperial System:" }),
                    ' Primarily used in the United States, Myanmar, and Liberia. It includes feet, pounds, and Fahrenheit. While it seems quirky (12 inches = 1 foot, 3 feet = 1 yard), it evolved from practical everyday objects—a "foot" was literally the length of a human foot!'
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-xl mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-5 h-5 text-green-600 animate-spin", style: { animationDuration: "3s" } }),
                "Real-World Applications 🎯"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-green-700 dark:text-green-300", children: "🧑‍🍳 Cooking & Baking" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Converting recipes from one country to another! American recipes use cups and Fahrenheit, while European recipes use grams and Celsius. A cup of flour = ~125 grams." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-blue-700 dark:text-blue-300", children: "✈️ International Travel" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Understanding road signs (speed limits in km/h vs mph), weather forecasts (°C vs °F), and distances (kilometers vs miles) when traveling abroad." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-purple-700 dark:text-purple-300", children: "🔬 Science & Engineering" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Scientists worldwide use metric units for consistency. NASA once lost a $125 million Mars orbiter because one team used metric and another used imperial units!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-orange-700 dark:text-orange-300", children: "💪 Fitness & Health" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Converting body weight (kg to lbs), tracking running distances (km to miles), and understanding nutritional labels (grams to ounces)." })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-6 h-6 animate-bounce" }),
            "Mastering the Three Main Categories 📊"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6 space-y-6 text-gray-700 dark:text-gray-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-xl mb-4 flex items-center gap-2 text-blue-700 dark:text-blue-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Ruler, { className: "w-6 h-6 animate-pulse" }),
                "1. Length (Distance) Conversions 📏"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 leading-relaxed", children: "Length measures how far apart two points are. From the microscopic (nanometers in computer chips) to the astronomical (light-years between stars), length conversions help us make sense of our universe!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/60 dark:bg-gray-800/60 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2 text-blue-600", children: "🔢 Common Conversions:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 ml-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1 inch = 2.54 centimeters" }),
                      " (exactly defined since 1959)"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1 foot = 12 inches = 30.48 cm" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1 yard = 3 feet = 36 inches = 91.44 cm" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1 meter = 100 cm = 3.28 feet = 39.37 inches" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1 kilometer = 1000 meters = 0.621 miles" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1 mile = 5,280 feet = 1.609 kilometers" }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/60 dark:bg-gray-800/60 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2 text-cyan-600", children: "🌟 Fun Facts:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 ml-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "📌 The meter was originally defined as 1/10,000,000 of the distance from the North Pole to the equator through Paris!" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: `📌 A "nautical mile" (1.852 km) is used in aviation and maritime travel because it's based on the Earth's circumference—one minute of latitude.` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "📌 The tallest building in the world, Burj Khalifa, is 828 meters (2,717 feet) tall—that's over half a mile straight up!" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-xl mb-4 flex items-center gap-2 text-purple-700 dark:text-purple-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Weight, { className: "w-6 h-6 animate-pulse" }),
                "2. Weight (Mass) Conversions ⚖️"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 leading-relaxed", children: "Weight and mass are often used interchangeably, though technically mass is the amount of matter in an object while weight is the force of gravity on that mass. For everyday purposes on Earth, they're essentially the same!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/60 dark:bg-gray-800/60 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2 text-purple-600", children: "🔢 Common Conversions:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 ml-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1 gram = 0.035 ounces" }),
                      " (about the weight of a paperclip)"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1 ounce = 28.35 grams" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1 pound = 16 ounces = 453.6 grams = 0.454 kg" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1 kilogram = 1000 grams = 2.205 pounds" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1 stone = 14 pounds = 6.35 kg" }),
                      " (mainly used in UK/Ireland)"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1 metric ton = 1000 kg = 2,204.6 pounds" }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/60 dark:bg-gray-800/60 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2 text-pink-600", children: "🌟 Fun Facts:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 ml-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "📌 The kilogram was redefined in 2019! It's no longer based on a physical object (the International Prototype Kilogram) but on fundamental constants of physics." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: '📌 Gold is measured in "troy ounces" (31.1 grams) which are heavier than regular ounces (28.35 grams)—so you get less gold than you think!' }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: '📌 The word "pound" comes from the Latin "libra pondo" (a pound by weight), which is why the abbreviation is "lb"!' }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "📌 An African elephant weighs about 6,000 kg (13,200 lbs or 6 metric tons)—equivalent to about 85 average adult humans!" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-xl mb-4 flex items-center gap-2 text-orange-700 dark:text-orange-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Thermometer, { className: "w-6 h-6 animate-pulse" }),
                "3. Temperature Conversions 🌡️"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 leading-relaxed", children: "Temperature is unique because it's not a simple multiplication—it requires addition or subtraction too! That's because the zero points are different in each scale. Temperature measures the average kinetic energy of particles in a substance." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/60 dark:bg-gray-800/60 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2 text-orange-600", children: "🔢 The Three Main Scales:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 ml-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Celsius (°C):" }),
                      " Used worldwide. Water freezes at 0°C and boils at 100°C at sea level. Named after Swedish astronomer Anders Celsius."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fahrenheit (°F):" }),
                      " Used in the US. Water freezes at 32°F and boils at 212°F. Named after German physicist Daniel Gabriel Fahrenheit. The scale was based on three points: 0°F (a brine solution), 32°F (water freezing), and 96°F (human body temperature, though it's actually ~98.6°F)."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Kelvin (K):" }),
                      ' The scientific standard. It starts at "absolute zero" (−273.15°C or −459.67°F), the coldest possible temperature where all molecular motion stops! Water freezes at 273.15K and boils at 373.15K.'
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/60 dark:bg-gray-800/60 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2 text-red-600", children: "🔢 Conversion Formulas:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 ml-4 font-mono text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "°F = (°C × 9/5) + 32" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "°C = (°F − 32) × 5/9" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "K = °C + 273.15" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "°C = K − 273.15" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/60 dark:bg-gray-800/60 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2 text-pink-600", children: "🌟 Fun Facts:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 ml-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "📌 -40°C and -40°F are exactly the same temperature—the only point where the two scales meet!" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "📌 The hottest temperature ever recorded on Earth was 134°F (56.7°C) in Death Valley, California in 1913." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "📌 The coldest temperature ever recorded was -128.6°F (-89.2°C) at Antarctica's Vostok Station in 1983." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "📌 The surface of the Sun is about 5,500°C (9,932°F), while its core reaches 15 million°C (27 million°F)!" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "📌 Scientists have created temperatures colder than outer space (which is about -270°C) in laboratories—getting within billionths of a degree from absolute zero!" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-6 h-6 animate-bounce" }),
            "Pro Tips for Perfect Conversions 🎯"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6 space-y-4 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg transform hover:scale-105 transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-600", children: "1" }),
                  "Understand the Conversion Factor"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Every conversion uses a multiplication factor. For example, 1 inch = 2.54 cm, so to convert inches to cm, multiply by 2.54. To go the other way, divide by 2.54!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg transform hover:scale-105 transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-blue-600", children: "2" }),
                  "Double-Check Your Units"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Always verify you're converting to the right unit. Converting 5 kilometers to meters? That's 5,000 meters. To millimeters? 5,000,000 millimeters!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg transform hover:scale-105 transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-purple-600", children: "3" }),
                  "Use Dimensional Analysis"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: 'Write out your conversions as fractions so units cancel out. Converting 60 mph to km/h? (60 miles/hour) × (1.609 km/mile) = 96.54 km/h. The "miles" cancel!' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-lg transform hover:scale-105 transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-orange-700 dark:text-orange-300 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-orange-600", children: "4" }),
                  "Remember Context Matters"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "For everyday use, rounding is fine (1 kg ≈ 2.2 lbs). For science and engineering, use precise conversion factors (1 kg = 2.20462262 lbs) to avoid compound errors!" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-lg mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-lg mb-3 flex items-center gap-2 text-yellow-700 dark:text-yellow-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-5 h-5 animate-pulse" }),
                "Quick Mental Math Tricks 🧠"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-yellow-600 mt-0.5", children: "📌" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Miles to Kilometers:" }),
                    " Multiply by 1.6 (or use the Fibonacci sequence! 5 mi ≈ 8 km, 8 mi ≈ 13 km, 13 mi ≈ 21 km)"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-yellow-600 mt-0.5", children: "📌" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Celsius to Fahrenheit (roughly):" }),
                    " Double it and add 30. (20°C × 2 = 40, + 30 = 70°F vs actual 68°F—close enough!)"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-yellow-600 mt-0.5", children: "📌" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Kilograms to Pounds:" }),
                    " Double it and add 10%. (10 kg × 2 = 20, + 10% = 22 lbs vs actual 22.05 lbs)"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-yellow-600 mt-0.5", children: "📌" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Feet to Meters:" }),
                    " Divide by 3 (roughly). (6 feet ÷ 3 = 2 meters vs actual 1.83 meters—good for estimates!)"
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 animate-pulse" }),
            "Frequently Asked Questions ❓"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6 space-y-6 text-gray-700 dark:text-gray-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-5 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2 text-indigo-700 dark:text-indigo-300", children: "Q: Why doesn't the US use the metric system?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " The US actually officially adopted the metric system in 1975, but it remains optional! The imperial system was already deeply embedded in American infrastructure, industry, and culture. Converting everything—from road signs to tools to recipes—would cost billions of dollars. Interestingly, the US military, scientists, and many industries already use metric internally. Fun fact: US customary units are legally defined in terms of metric units (1 inch = exactly 2.54 cm by law)!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2 text-blue-700 dark:text-blue-300", children: "Q: What's the difference between weight and mass?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                ' Mass is the amount of matter in an object, measured in kilograms or grams—it never changes regardless of location. Weight is the force of gravity on that mass, measured in newtons (or pounds-force). An astronaut has the same mass on Earth and the Moon, but weighs only 1/6th as much on the Moon due to lower gravity! In everyday language, we use "weight" for both concepts because gravity is constant on Earth.'
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-5 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2 text-green-700 dark:text-green-300", children: "Q: Why do temperature conversions use addition/subtraction instead of just multiplication?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " Because Celsius and Fahrenheit have different zero points! The Celsius scale sets 0° at water's freezing point, while Fahrenheit sets 32° at that same temperature. So you need to offset by 32°, then adjust for the different scale sizes (Celsius degrees are bigger—100° spans the same range as 180° Fahrenheit). That's why the formula is °F = (°C × 9/5) + 32. Kelvin starts at absolute zero, so converting from Celsius is simple: just add 273.15!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-5 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2 text-purple-700 dark:text-purple-300", children: "Q: How accurate do my conversions need to be?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " It depends on the application! For cooking, rounding to the nearest gram or ounce is perfectly fine. For carpentry, accuracy to the nearest millimeter or 1/16th inch matters. For aerospace engineering, you need extreme precision—NASA calculations use 15+ decimal places! A good rule: match the precision of your input. If you measure 5.0 cm, converting to 1.968503937 inches is overkill—2.0 inches is more appropriate."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-5 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2 text-orange-700 dark:text-orange-300", children: "Q: What's the most common conversion mistake?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " Confusing square units and cubic units! Converting area or volume requires squaring or cubing the conversion factor. 1 square meter ≠ 10.76 square feet... it equals 10.76² = 115.8 square feet! Similarly, 1 cubic meter = 35.3 cubic feet (not 3.28). Always think about dimensions: length (1D), area (2D), or volume (3D). Another common error: mixing up the direction—dividing when you should multiply, or vice versa. Always check if your answer makes sense!"
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg border-2 border-purple-200 dark:border-purple-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-6 h-6 animate-bounce" }),
            "Become a Conversion Master! 🏆"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-4", children: "Understanding unit conversions opens up a world of possibilities! Whether you're traveling internationally, following a recipe, working on a science project, or just satisfying your curiosity, being able to fluently translate between measurement systems is a superpower. 🦸" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-6", children: 'This converter handles all the math for you instantly, but understanding the "why" behind conversions helps you catch errors, estimate in your head, and appreciate the fascinating history of how humans have measured their world throughout the ages. From ancient Egyptian cubits to modern quantum definitions of the kilogram, measurement is the foundation of civilization itself!' }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 p-6 rounded-lg text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-bold mb-2 flex items-center justify-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 text-purple-600 animate-pulse" }),
                "Ready to Convert Like a Pro?",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 text-pink-600 animate-pulse" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", children: "Start converting above and explore the amazing world of measurements! 🌈📐⚖️🌡️" })
            ] })
          ] })
        ] })
      ] })
    }
  );
}
export {
  UnitConverter
};
