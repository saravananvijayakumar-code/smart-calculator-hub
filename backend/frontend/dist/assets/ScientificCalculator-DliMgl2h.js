import { n as createLucideIcon, r as reactExports, j as jsxRuntimeExports, C as Calculator, f as Card, k as CardContent, B as Button, g as CardHeader, h as CardTitle } from "./index-CK9G4vW7.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { I as InFeedAd } from "./InFeedAd-qGRsmhMx.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
import "./EnhancedAIAnalysis-BaYCd8m5.js";
import "./badge-6THgoC_4.js";
import "./brain-CSngUEN8.js";
import "./target-4JeIm6Yk.js";
import "./circle-check-big-B8N3lfE-.js";
import "./arrow-right-Bjdtr8dz.js";
import "./lightbulb-DKPyzLdJ.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",
      key: "1yo7s0"
    }
  ],
  ["path", { d: "m12 9 6 6", key: "anjzzh" }],
  ["path", { d: "m18 9-6 6", key: "1fp51s" }]
];
const Delete = createLucideIcon("delete", __iconNode);
function ScientificCalculator() {
  const [display, setDisplay] = reactExports.useState("0");
  const [equation, setEquation] = reactExports.useState("");
  const [memory, setMemory] = reactExports.useState(0);
  const [history, setHistory] = reactExports.useState([]);
  const [angleMode, setAngleMode] = reactExports.useState("deg");
  const appendToDisplay = (value) => {
    if (display === "0" && value !== ".") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };
  const clear = () => {
    setDisplay("0");
    setEquation("");
  };
  const deleteLast = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  };
  const calculate = () => {
    try {
      let expr = display.replace(/×/g, "*").replace(/÷/g, "/").replace(/π/g, Math.PI.toString()).replace(/e/g, Math.E.toString());
      const safeEval = new Function("return " + expr);
      const result = safeEval();
      const fullEquation = `${display} = ${result}`;
      setHistory([fullEquation, ...history.slice(0, 9)]);
      setEquation(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };
  const calculateTrig = (func) => {
    try {
      const value = parseFloat(display);
      const radians = angleMode === "deg" ? value * Math.PI / 180 : value;
      let result = 0;
      switch (func) {
        case "sin":
          result = Math.sin(radians);
          break;
        case "cos":
          result = Math.cos(radians);
          break;
        case "tan":
          result = Math.tan(radians);
          break;
      }
      const fullEquation = `${func}(${display}${angleMode === "deg" ? "°" : " rad"}) = ${result}`;
      setHistory([fullEquation, ...history.slice(0, 9)]);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };
  const calculateFunction = (func) => {
    try {
      const value = parseFloat(display);
      let result = 0;
      let equation2 = "";
      switch (func) {
        case "sqrt":
          result = Math.sqrt(value);
          equation2 = `√${value} = ${result}`;
          break;
        case "square":
          result = value * value;
          equation2 = `${value}² = ${result}`;
          break;
        case "cube":
          result = value * value * value;
          equation2 = `${value}³ = ${result}`;
          break;
        case "log":
          result = Math.log10(value);
          equation2 = `log(${value}) = ${result}`;
          break;
        case "ln":
          result = Math.log(value);
          equation2 = `ln(${value}) = ${result}`;
          break;
        case "exp":
          result = Math.exp(value);
          equation2 = `e^${value} = ${result}`;
          break;
        case "factorial":
          result = factorial(value);
          equation2 = `${value}! = ${result}`;
          break;
        case "inverse":
          result = 1 / value;
          equation2 = `1/${value} = ${result}`;
          break;
        case "abs":
          result = Math.abs(value);
          equation2 = `|${value}| = ${result}`;
          break;
      }
      setHistory([equation2, ...history.slice(0, 9)]);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };
  const factorial = (n) => {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };
  const memoryStore = () => setMemory(parseFloat(display));
  const memoryRecall = () => setDisplay(memory.toString());
  const memoryClear = () => setMemory(0);
  const memoryAdd = () => setMemory(memory + parseFloat(display));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Scientific Calculator - Advanced Mathematical Computations",
      description: "Professional scientific calculator with trigonometry, logarithms, exponents, and advanced functions. Perfect for students, engineers, and researchers. 100% accurate calculations with step-by-step solutions and AI-powered insights.",
      keywords: "scientific calculator, trigonometry calculator, logarithm calculator, advanced math, engineering calculator, sine cosine tangent, exponential calculator, factorial calculator",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-12 w-12 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent", children: "Scientific Calculator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Unlock the power of advanced mathematics! From trigonometry to logarithms, solve complex equations with precision and speed. 🚀" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-gradient-to-br from-gray-900 to-gray-800 border-0 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 bg-gray-950 rounded-xl p-4 min-h-[100px] flex flex-col justify-end border-2 border-orange-500/30", children: [
              equation && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-sm mb-2 truncate", children: equation }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-4xl font-mono text-right truncate", children: display }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-400 text-xs", children: [
                  "Memory: ",
                  memory !== 0 ? memory : "Empty"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-400 text-xs", children: [
                  "Mode: ",
                  angleMode.toUpperCase()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-5 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => setAngleMode(angleMode === "deg" ? "rad" : "deg"), className: "bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold", children: angleMode.toUpperCase() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: memoryClear, className: "bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold", children: "MC" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: memoryRecall, className: "bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold", children: "MR" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: memoryStore, className: "bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold", children: "MS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: memoryAdd, className: "bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold", children: "M+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => calculateTrig("sin"), className: "bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold", children: "sin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => calculateTrig("cos"), className: "bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold", children: "cos" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => calculateTrig("tan"), className: "bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold", children: "tan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => calculateFunction("log"), className: "bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold", children: "log" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => calculateFunction("ln"), className: "bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold", children: "ln" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => appendToDisplay("("), className: "bg-gradient-to-br from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold", children: "(" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => appendToDisplay(")"), className: "bg-gradient-to-br from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold", children: ")" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => calculateFunction("square"), className: "bg-gradient-to-br from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold", children: "x²" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => calculateFunction("cube"), className: "bg-gradient-to-br from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold", children: "x³" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => calculateFunction("sqrt"), className: "bg-gradient-to-br from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold", children: "√" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => appendToDisplay("7"), className: "bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-xl font-bold", children: "7" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => appendToDisplay("8"), className: "bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-xl font-bold", children: "8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => appendToDisplay("9"), className: "bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-xl font-bold", children: "9" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => appendToDisplay("÷"), className: "bg-gradient-to-br from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white text-xl font-bold", children: "÷" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: deleteLast, className: "bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Delete, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => appendToDisplay("4"), className: "bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-xl font-bold", children: "4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => appendToDisplay("5"), className: "bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-xl font-bold", children: "5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => appendToDisplay("6"), className: "bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-xl font-bold", children: "6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => appendToDisplay("×"), className: "bg-gradient-to-br from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white text-xl font-bold", children: "×" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => calculateFunction("factorial"), className: "bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold", children: "n!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => appendToDisplay("1"), className: "bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-xl font-bold", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => appendToDisplay("2"), className: "bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-xl font-bold", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => appendToDisplay("3"), className: "bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-xl font-bold", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => appendToDisplay("-"), className: "bg-gradient-to-br from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white text-xl font-bold", children: "-" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => appendToDisplay("π"), className: "bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold", children: "π" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => appendToDisplay("0"), className: "bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-xl font-bold col-span-2", children: "0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => appendToDisplay("."), className: "bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-xl font-bold", children: "." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => appendToDisplay("+"), className: "bg-gradient-to-br from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white text-xl font-bold", children: "+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => appendToDisplay("e"), className: "bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold", children: "e" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: clear, className: "bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xl font-bold col-span-3", children: "Clear" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: calculate, className: "bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-xl font-bold col-span-2", children: "=" })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-2 border-orange-200 dark:border-orange-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xl font-bold", children: "Calculation History" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: history.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm text-center py-4", children: "No calculations yet. Start computing! 🧮" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-96 overflow-y-auto", children: history.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "p-3 bg-white dark:bg-gray-900 rounded-lg border border-orange-200 dark:border-orange-800 text-sm font-mono hover:shadow-md transition-shadow cursor-pointer",
                onClick: () => {
                  const parts = item.split(" = ");
                  if (parts.length === 2) {
                    setDisplay(parts[1]);
                  }
                },
                children: item
              },
              index
            )) }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-200 dark:border-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl font-bold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "🎯" }),
              "Key Features"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: "Trigonometric Functions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Calculate sine, cosine, and tangent in both degrees and radians with perfect precision." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: "Logarithmic Operations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Compute natural logarithms (ln) and base-10 logarithms (log) instantly." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: "Memory Functions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Store, recall, clear, and add to memory for complex multi-step calculations." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-200 dark:border-purple-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl font-bold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "📚" }),
              "Quick Guide"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "1️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Basic Operations:" }),
                  " Use +, -, ×, ÷ for arithmetic calculations."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "2️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Trigonometry:" }),
                  " Switch between DEG and RAD modes for angle measurements."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "3️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Advanced Functions:" }),
                  " Use buttons like √, x², log, ln for complex operations."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "4️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Constants:" }),
                  " Click π or e to use mathematical constants."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "5️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "History:" }),
                  " Click any previous calculation to reuse the result."
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl font-bold flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "🔬" }),
            "Understanding Scientific Calculations"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose dark:prose-invert max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-4 mb-3", children: "What is a Scientific Calculator?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: "A scientific calculator is an advanced computational tool designed to perform complex mathematical operations beyond basic arithmetic. It's essential for students, engineers, scientists, and anyone working with advanced mathematics. Our calculator brings professional-grade functionality right to your browser! 🚀" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Trigonometric Functions Explained" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-3", children: "Trigonometry is the study of relationships between angles and sides of triangles. Our calculator supports:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sine (sin):" }),
                " The ratio of the opposite side to the hypotenuse in a right triangle"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cosine (cos):" }),
                " The ratio of the adjacent side to the hypotenuse"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tangent (tan):" }),
                " The ratio of the opposite side to the adjacent side"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mt-3", children: [
              "You can switch between ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "degrees (DEG)" }),
              " and ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "radians (RAD)" }),
              " depending on your needs. Most everyday calculations use degrees, while advanced mathematics often uses radians."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Logarithmic Functions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: 'Logarithms are the inverse of exponential functions. They answer the question: "To what power must we raise a base number to get another number?" Our calculator provides:' }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300 mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "log (Base-10):" }),
                " Common logarithm used in pH calculations, decibels, and more"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ln (Natural Log):" }),
                " Logarithm base e, essential in calculus and exponential growth/decay"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Exponential Functions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: "Powers and exponents are fundamental in science and engineering:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300 mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "x²:" }),
                " Square a number (multiply it by itself)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "x³:" }),
                " Cube a number (multiply it by itself three times)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "√:" }),
                " Square root - find what number multiplied by itself gives you the input"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "e^x:" }),
                " Exponential function using Euler's number (2.71828...)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Special Functions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-3", children: "Advanced mathematical operations at your fingertips:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Factorial (n!):" }),
                " The product of all positive integers up to n. For example, 5! = 5×4×3×2×1 = 120"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pi (π):" }),
                " The mathematical constant approximately equal to 3.14159, representing the ratio of a circle's circumference to its diameter"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Euler's Number (e):" }),
                " The base of natural logarithms, approximately 2.71828, fundamental in calculus"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Absolute Value (|x|):" }),
                " The distance of a number from zero, always positive"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Memory Functions - Your Calculation Assistant" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-3", children: "Memory functions help you perform complex multi-step calculations efficiently:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "MS (Memory Store):" }),
                " Save the current display value to memory"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "MR (Memory Recall):" }),
                " Retrieve the stored value from memory"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "MC (Memory Clear):" }),
                " Erase the stored memory value"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "M+ (Memory Add):" }),
                " Add the current display value to the stored memory"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Real-World Applications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-3", children: "Scientific calculators are indispensable in numerous fields:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🏗️ Engineering" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Structural calculations, circuit design, signal processing, and stress analysis" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🔬 Science" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "pH calculations, radioactive decay, chemical concentrations, and physics equations" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "📊 Statistics" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Probability distributions, standard deviations, and data analysis" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "💼 Finance" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Compound interest, present value, growth rates, and investment calculations" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Tips for Accurate Calculations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-orange-100 dark:bg-orange-900/30 border-l-4 border-orange-500 p-4 rounded-r-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Always check your angle mode (DEG/RAD) before trigonometric calculations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Use parentheses to ensure correct order of operations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Double-check your input before pressing equals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Use memory functions for complex multi-step problems" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Refer to calculation history to track your work" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Common Calculation Examples" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Example 1: Calculate sin(30°)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                  "1. Ensure calculator is in DEG mode",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "2. Enter: 30",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "3. Click: sin",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Result: 0.5"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-purple-100 dark:bg-purple-900/30 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Example 2: Calculate log(100)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                  "1. Enter: 100",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "2. Click: log",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Result: 2 (because 10² = 100)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-green-100 dark:bg-green-900/30 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Example 3: Calculate 5!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                  "1. Enter: 5",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "2. Click: n!",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Result: 120 (5×4×3×2×1)"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    }
  );
}
export {
  ScientificCalculator as default
};
