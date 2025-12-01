import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, k as CardContent, a3 as Label, U as Input, B as Button, X } from "./index-C_OXA6OQ.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { E as EnhancedAIAnalysis } from "./EnhancedAIAnalysis-BZiQW2bt.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { I as InFeedAd } from "./InFeedAd-QnbVBxtz.js";
import { D as Divide } from "./divide-Cnfrp5Ws.js";
import { P as Plus } from "./plus-CjFC_9XE.js";
import { M as Minus } from "./minus-D27nm_Nm.js";
import { A as ArrowRight } from "./arrow-right-CtOKJdMG.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./badge-fo2YvZos.js";
import "./loader-circle-BYW7QwsU.js";
import "./brain-U3SZm3t9.js";
import "./target-1ApqtYDG.js";
import "./circle-check-big-BoxGYPKG.js";
import "./lightbulb-doNczJxC.js";
import "./share-2-ViScha7M.js";
import "./link-DxXhzsoi.js";
import "./copy-DGMuG98H.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./linkedin-BSJyfSWT.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
function FractionCalculator() {
  const [fraction1, setFraction1] = reactExports.useState({ numerator: 1, denominator: 2 });
  const [fraction2, setFraction2] = reactExports.useState({ numerator: 1, denominator: 3 });
  const [operation, setOperation] = reactExports.useState("add");
  const [result, setResult] = reactExports.useState(null);
  const [steps, setSteps] = reactExports.useState([]);
  const [showAI, setShowAI] = reactExports.useState(false);
  const gcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };
  const lcm = (a, b) => {
    return Math.abs(a * b) / gcd(a, b);
  };
  const simplifyFraction = (num, den) => {
    if (den === 0) return { numerator: NaN, denominator: 1 };
    const divisor = gcd(num, den);
    let simplifiedNum = num / divisor;
    let simplifiedDen = den / divisor;
    if (simplifiedDen < 0) {
      simplifiedNum = -simplifiedNum;
      simplifiedDen = -simplifiedDen;
    }
    return { numerator: simplifiedNum, denominator: simplifiedDen };
  };
  const fractionToMixed = (frac) => {
    if (isNaN(frac.numerator)) return "Undefined";
    const whole = Math.floor(Math.abs(frac.numerator) / frac.denominator);
    const remainder = Math.abs(frac.numerator) % frac.denominator;
    const sign = frac.numerator < 0 ? "-" : "";
    if (whole === 0) {
      return `${sign}${remainder}/${frac.denominator}`;
    } else if (remainder === 0) {
      return `${sign}${whole}`;
    } else {
      return `${sign}${whole} ${remainder}/${frac.denominator}`;
    }
  };
  const fractionToDecimal = (frac) => {
    if (isNaN(frac.numerator) || frac.denominator === 0) return "Undefined";
    return (frac.numerator / frac.denominator).toFixed(6);
  };
  const calculate = () => {
    const calculationSteps = [];
    let resultFraction;
    calculationSteps.push(`Step 1: Starting with ${fraction1.numerator}/${fraction1.denominator} and ${fraction2.numerator}/${fraction2.denominator}`);
    switch (operation) {
      case "add":
        const addLcm = lcm(fraction1.denominator, fraction2.denominator);
        const addNum1 = fraction1.numerator * (addLcm / fraction1.denominator);
        const addNum2 = fraction2.numerator * (addLcm / fraction2.denominator);
        calculationSteps.push(`Step 2: Find LCD (Least Common Denominator) = ${addLcm}`);
        calculationSteps.push(`Step 3: Convert to equivalent fractions: ${addNum1}/${addLcm} + ${addNum2}/${addLcm}`);
        calculationSteps.push(`Step 4: Add numerators: (${addNum1} + ${addNum2})/${addLcm} = ${addNum1 + addNum2}/${addLcm}`);
        resultFraction = simplifyFraction(addNum1 + addNum2, addLcm);
        calculationSteps.push(`Step 5: Simplify: ${resultFraction.numerator}/${resultFraction.denominator}`);
        break;
      case "subtract":
        const subLcm = lcm(fraction1.denominator, fraction2.denominator);
        const subNum1 = fraction1.numerator * (subLcm / fraction1.denominator);
        const subNum2 = fraction2.numerator * (subLcm / fraction2.denominator);
        calculationSteps.push(`Step 2: Find LCD (Least Common Denominator) = ${subLcm}`);
        calculationSteps.push(`Step 3: Convert to equivalent fractions: ${subNum1}/${subLcm} - ${subNum2}/${subLcm}`);
        calculationSteps.push(`Step 4: Subtract numerators: (${subNum1} - ${subNum2})/${subLcm} = ${subNum1 - subNum2}/${subLcm}`);
        resultFraction = simplifyFraction(subNum1 - subNum2, subLcm);
        calculationSteps.push(`Step 5: Simplify: ${resultFraction.numerator}/${resultFraction.denominator}`);
        break;
      case "multiply":
        calculationSteps.push(`Step 2: Multiply numerators: ${fraction1.numerator} × ${fraction2.numerator} = ${fraction1.numerator * fraction2.numerator}`);
        calculationSteps.push(`Step 3: Multiply denominators: ${fraction1.denominator} × ${fraction2.denominator} = ${fraction1.denominator * fraction2.denominator}`);
        calculationSteps.push(`Step 4: Result: ${fraction1.numerator * fraction2.numerator}/${fraction1.denominator * fraction2.denominator}`);
        resultFraction = simplifyFraction(
          fraction1.numerator * fraction2.numerator,
          fraction1.denominator * fraction2.denominator
        );
        calculationSteps.push(`Step 5: Simplify: ${resultFraction.numerator}/${resultFraction.denominator}`);
        break;
      case "divide":
        calculationSteps.push(`Step 2: Flip the second fraction (reciprocal): ${fraction2.numerator}/${fraction2.denominator} becomes ${fraction2.denominator}/${fraction2.numerator}`);
        calculationSteps.push(`Step 3: Multiply: ${fraction1.numerator}/${fraction1.denominator} × ${fraction2.denominator}/${fraction2.numerator}`);
        calculationSteps.push(`Step 4: Multiply numerators and denominators: ${fraction1.numerator * fraction2.denominator}/${fraction1.denominator * fraction2.numerator}`);
        resultFraction = simplifyFraction(
          fraction1.numerator * fraction2.denominator,
          fraction1.denominator * fraction2.numerator
        );
        calculationSteps.push(`Step 5: Simplify: ${resultFraction.numerator}/${resultFraction.denominator}`);
        break;
    }
    setResult(resultFraction);
    setSteps(calculationSteps);
    setShowAI(true);
  };
  const getOperationSymbol = () => {
    switch (operation) {
      case "add":
        return "+";
      case "subtract":
        return "-";
      case "multiply":
        return "×";
      case "divide":
        return "÷";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Fraction Calculator - Add, Subtract, Multiply, Divide Fractions",
      description: "Master fractions with our advanced calculator! Simplify, add, subtract, multiply, and divide fractions with step-by-step solutions. Convert between improper fractions, mixed numbers, and decimals. Perfect for students and professionals. 100% accurate with AI-powered insights.",
      keywords: "fraction calculator, simplify fractions, add fractions, subtract fractions, multiply fractions, divide fractions, mixed numbers, improper fractions, fraction to decimal",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl shadow-lg mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Divide, { className: "h-12 w-12 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent", children: "Fraction Calculator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Simplify your fraction calculations! Add, subtract, multiply, and divide with crystal-clear step-by-step solutions. Transform fractions into decimals and mixed numbers effortlessly! 🎯" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950/30 border-2 border-indigo-200 dark:border-indigo-800 shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl font-bold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Divide, { className: "h-6 w-6 text-indigo-600" }),
              "Fraction Calculator"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border-2 border-indigo-200 dark:border-indigo-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-lg font-bold mb-3 block", children: "First Fraction" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm text-gray-600 dark:text-gray-300 mb-1 block", children: "Numerator" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "number",
                        value: fraction1.numerator,
                        onChange: (e) => setFraction1({ ...fraction1, numerator: parseInt(e.target.value) || 0 }),
                        className: "text-center text-2xl font-bold bg-white dark:bg-gray-900 border-2 border-indigo-300 dark:border-indigo-600"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-indigo-600 pb-6", children: "/" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm text-gray-600 dark:text-gray-300 mb-1 block", children: "Denominator" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "number",
                        value: fraction1.denominator,
                        onChange: (e) => setFraction1({ ...fraction1, denominator: parseInt(e.target.value) || 1 }),
                        className: "text-center text-2xl font-bold bg-white dark:bg-gray-900 border-2 border-indigo-300 dark:border-indigo-600"
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-center flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: () => setOperation("add"),
                    className: `${operation === "add" ? "bg-gradient-to-br from-green-600 to-green-700" : "bg-gray-500"} text-white font-bold px-6 py-3 text-xl`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-5 w-5 mr-1" }),
                      " Add"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: () => setOperation("subtract"),
                    className: `${operation === "subtract" ? "bg-gradient-to-br from-blue-600 to-blue-700" : "bg-gray-500"} text-white font-bold px-6 py-3 text-xl`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-5 w-5 mr-1" }),
                      " Subtract"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: () => setOperation("multiply"),
                    className: `${operation === "multiply" ? "bg-gradient-to-br from-purple-600 to-purple-700" : "bg-gray-500"} text-white font-bold px-6 py-3 text-xl`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5 mr-1" }),
                      " Multiply"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: () => setOperation("divide"),
                    className: `${operation === "divide" ? "bg-gradient-to-br from-orange-600 to-orange-700" : "bg-gray-500"} text-white font-bold px-6 py-3 text-xl`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Divide, { className: "h-5 w-5 mr-1" }),
                      " Divide"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border-2 border-indigo-200 dark:border-indigo-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-lg font-bold mb-3 block", children: "Second Fraction" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm text-gray-600 dark:text-gray-300 mb-1 block", children: "Numerator" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "number",
                        value: fraction2.numerator,
                        onChange: (e) => setFraction2({ ...fraction2, numerator: parseInt(e.target.value) || 0 }),
                        className: "text-center text-2xl font-bold bg-white dark:bg-gray-900 border-2 border-indigo-300 dark:border-indigo-600"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-indigo-600 pb-6", children: "/" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm text-gray-600 dark:text-gray-300 mb-1 block", children: "Denominator" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "number",
                        value: fraction2.denominator,
                        onChange: (e) => setFraction2({ ...fraction2, denominator: parseInt(e.target.value) || 1 }),
                        className: "text-center text-2xl font-bold bg-white dark:bg-gray-900 border-2 border-indigo-300 dark:border-indigo-600"
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: calculate,
                  className: "w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 text-xl shadow-lg hover:shadow-xl transition-all",
                  children: "Calculate Result"
                }
              )
            ] })
          ] }),
          result && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-200 dark:border-purple-800 shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl font-bold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-6 w-6 text-purple-600" }),
              "Result"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-300 dark:border-purple-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 dark:text-gray-300 mb-2", children: [
                    fraction1.numerator,
                    "/",
                    fraction1.denominator,
                    " ",
                    getOperationSymbol(),
                    " ",
                    fraction2.numerator,
                    "/",
                    fraction2.denominator,
                    " ="
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-5xl font-bold text-purple-600 mb-2", children: [
                    result.numerator,
                    "/",
                    result.denominator
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1", children: "Simplified Fraction" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-blue-700 dark:text-blue-300", children: [
                      result.numerator,
                      "/",
                      result.denominator
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1", children: "Mixed Number" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-green-700 dark:text-green-300", children: fractionToMixed(result) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1", children: "Decimal" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-orange-700 dark:text-orange-300", children: fractionToDecimal(result) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1", children: "Percentage" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-purple-700 dark:text-purple-300", children: [
                      (result.numerator / result.denominator * 100).toFixed(2),
                      "%"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-300 dark:border-purple-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-lg mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📝" }),
                  "Step-by-Step Solution"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: steps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-white dark:bg-gray-900 rounded-lg border border-purple-200 dark:border-purple-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: step }) }, index)) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}),
        showAI && result && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            EnhancedAIAnalysis,
            {
              calculatorType: "fraction",
              data: {
                fraction1,
                fraction2,
                operation,
                result,
                decimal: fractionToDecimal(result),
                mixed: fractionToMixed(result)
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "fraction",
              inputs: { fraction1, fraction2, operation },
              results: { result, steps, decimal: fractionToDecimal(result), mixed: fractionToMixed(result) },
              title: "Fraction Calculator Results"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-200 dark:border-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl font-bold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "🎯" }),
              "Quick Tips"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "💡" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Simplification:" }),
                  " Always simplify fractions to their lowest terms by dividing by the GCD"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🔄" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Common Denominator:" }),
                  " Find LCD when adding or subtracting fractions"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "✖️" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Multiplication:" }),
                  " Multiply straight across - no common denominator needed!"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🔁" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Division:" }),
                  " Flip the second fraction and multiply (Keep-Change-Flip)"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl font-bold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "📚" }),
              "Common Examples"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1/2 + 1/4 =" }),
                " 3/4"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "3/4 - 1/2 =" }),
                " 1/4"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2/3 × 3/4 =" }),
                " 1/2"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1/2 ÷ 1/4 =" }),
                " 2"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-2 border-orange-200 dark:border-orange-800 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl font-bold flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "🎓" }),
            "Understanding Fractions - Complete Guide"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose dark:prose-invert max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-4 mb-3", children: "What Are Fractions?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: [
              "A fraction represents a part of a whole. It consists of two numbers: the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "numerator" }),
              " (top number) and the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "denominator" }),
              " (bottom number). The numerator tells you how many parts you have, while the denominator tells you how many equal parts make up the whole. For example, 3/4 means you have 3 parts out of 4 equal parts! 🍕"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Types of Fractions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl border-2 border-orange-300 dark:border-orange-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🔵 Proper Fractions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 mb-2", children: "Numerator is less than denominator" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-orange-600", children: "1/2, 3/4, 5/8" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl border-2 border-orange-300 dark:border-orange-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🟢 Improper Fractions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 mb-2", children: "Numerator is greater than or equal to denominator" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-orange-600", children: "5/3, 7/4, 9/5" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl border-2 border-orange-300 dark:border-orange-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🟡 Mixed Numbers" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 mb-2", children: "Whole number plus a proper fraction" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-orange-600", children: "1 1/2, 2 3/4" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Addition and Subtraction" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-3", children: [
              "When adding or subtracting fractions, you need a ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "common denominator" }),
              ". This is like making sure you're comparing apples to apples! Here's how:"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-2 text-gray-700 dark:text-gray-300 ml-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 1:" }),
                " Find the Least Common Denominator (LCD) of both fractions"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 2:" }),
                " Convert each fraction to an equivalent fraction with the LCD"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 3:" }),
                " Add or subtract the numerators, keeping the denominator the same"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 4:" }),
                " Simplify the result if possible"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl border-l-4 border-blue-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Example: 1/4 + 1/6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                "• LCD of 4 and 6 is 12",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Convert: 1/4 = 3/12 and 1/6 = 2/12",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Add: 3/12 + 2/12 = 5/12",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Result: 5/12 (already simplified!)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Multiplication" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-3", children: "Multiplying fractions is actually easier than adding them! Just multiply straight across:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-2 text-gray-700 dark:text-gray-300 ml-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 1:" }),
                " Multiply the numerators together"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 2:" }),
                " Multiply the denominators together"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 3:" }),
                " Simplify the result"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-purple-100 dark:bg-purple-900/30 rounded-xl border-l-4 border-purple-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Example: 2/3 × 3/4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                "• Multiply numerators: 2 × 3 = 6",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Multiply denominators: 3 × 4 = 12",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Result: 6/12",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Simplify: 6/12 = 1/2"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Division" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-3", children: [
              "Division uses the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: '"Keep-Change-Flip"' }),
              " method - one of math's coolest tricks! 🎩✨"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-2 text-gray-700 dark:text-gray-300 ml-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Keep:" }),
                " Keep the first fraction as it is"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Change:" }),
                " Change the division sign to multiplication"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Flip:" }),
                " Flip the second fraction (reciprocal)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Multiply:" }),
                " Now multiply the fractions"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-xl border-l-4 border-green-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Example: 1/2 ÷ 1/4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                "• Keep: 1/2",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Change: ÷ becomes ×",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Flip: 1/4 becomes 4/1",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Multiply: 1/2 × 4/1 = 4/2 = 2"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Simplifying Fractions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-3", children: [
              "Simplifying means reducing a fraction to its lowest terms by dividing both numerator and denominator by their",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " Greatest Common Divisor (GCD)" }),
              ". This makes fractions easier to understand and work with!"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-orange-100 dark:bg-orange-900/30 rounded-xl border-l-4 border-orange-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Example: Simplify 12/16" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                "• Find GCD of 12 and 16 = 4",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Divide numerator: 12 ÷ 4 = 3",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Divide denominator: 16 ÷ 4 = 4",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Result: 3/4"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Converting Between Forms" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-pink-100 dark:bg-pink-900/30 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Improper Fraction → Mixed Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                  "Divide the numerator by denominator. The quotient is the whole number, the remainder is the new numerator.",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
                  " 11/4 = 2 3/4 (11 ÷ 4 = 2 remainder 3)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Mixed Number → Improper Fraction" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                  "Multiply whole number by denominator, add numerator, place over original denominator.",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
                  " 2 3/4 = (2×4 + 3)/4 = 11/4"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-lime-100 dark:bg-lime-900/30 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Fraction → Decimal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                  "Divide numerator by denominator.",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
                  " 3/4 = 3 ÷ 4 = 0.75"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Real-World Applications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🍕 Cooking & Recipes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: 'Adjust ingredients: "If the recipe calls for 2/3 cup but I need to double it..."' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🏗️ Construction" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: 'Measurements: "I need 3 1/2 inches of wood plus 2 3/4 inches..."' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "💰 Finance" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: 'Splitting costs: "If we split the bill 3 ways..."' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "📊 Data Analysis" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: 'Proportions: "3/5 of respondents said yes..."' })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Pro Tips for Success" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border-l-4 border-purple-500 p-4 rounded-r-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "✓ ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Always simplify:" }),
                " Make your final answer as simple as possible"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "✓ ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Check your work:" }),
                " Convert to decimals to verify your answer"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "✓ ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Draw pictures:" }),
                " Visual representations help understand fractions better"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "✓ ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Practice regularly:" }),
                " The more you work with fractions, the easier they become"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "✓ ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Use our calculator:" }),
                " Learn from the step-by-step solutions provided!"
              ] })
            ] }) })
          ] })
        ] })
      ] })
    }
  );
}
export {
  FractionCalculator as default
};
