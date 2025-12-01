import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, k as CardContent, a4 as Label, B as Button, T as TrendingUp } from "./index-CK9G4vW7.js";
import { T as Textarea } from "./textarea-DIKih6_2.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { E as EnhancedAIAnalysis } from "./EnhancedAIAnalysis-BaYCd8m5.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { I as InFeedAd } from "./InFeedAd-qGRsmhMx.js";
import { C as ChartBar } from "./chart-bar-B4209ZZm.js";
import { C as ChartColumn } from "./chart-column-DAuKFntu.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
import "./badge-6THgoC_4.js";
import "./brain-CSngUEN8.js";
import "./target-4JeIm6Yk.js";
import "./circle-check-big-B8N3lfE-.js";
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
function StatisticsCalculator() {
  const [input, setInput] = reactExports.useState("10, 20, 30, 40, 50, 60, 70, 80, 90, 100");
  const [showAI, setShowAI] = reactExports.useState(false);
  const results = reactExports.useMemo(() => {
    try {
      const numbers = input.split(/[\s,;]+/).map((n) => parseFloat(n.trim())).filter((n) => !isNaN(n));
      if (numbers.length === 0) return null;
      const sortedData = [...numbers].sort((a, b) => a - b);
      const count = numbers.length;
      const sum = numbers.reduce((acc, val) => acc + val, 0);
      const mean = sum / count;
      const median = count % 2 === 0 ? (sortedData[count / 2 - 1] + sortedData[count / 2]) / 2 : sortedData[Math.floor(count / 2)];
      const frequencyMap = /* @__PURE__ */ new Map();
      numbers.forEach((num) => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
      });
      const maxFreq = Math.max(...Array.from(frequencyMap.values()));
      const mode = Array.from(frequencyMap.entries()).filter(([_, freq]) => freq === maxFreq && maxFreq > 1).map(([num]) => num);
      const variance = numbers.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / count;
      const standardDeviation = Math.sqrt(variance);
      const q1Index = Math.floor(count / 4);
      const q3Index = Math.floor(3 * count / 4);
      const q1 = sortedData[q1Index];
      const q3 = sortedData[q3Index];
      const iqr = q3 - q1;
      return {
        count,
        sum,
        mean,
        median,
        mode,
        range: sortedData[count - 1] - sortedData[0],
        variance,
        standardDeviation,
        min: sortedData[0],
        max: sortedData[count - 1],
        q1,
        q3,
        iqr,
        sortedData
      };
    } catch (error) {
      return null;
    }
  }, [input]);
  const handleCalculate = () => {
    if (results) {
      setShowAI(true);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Statistics Calculator - Mean, Median, Mode, Standard Deviation",
      description: "Professional statistics calculator for data analysis. Calculate mean, median, mode, range, variance, standard deviation, quartiles, and more. Perfect for students, researchers, and data analysts. Get instant results with comprehensive statistical insights and AI-powered analysis.",
      keywords: "statistics calculator, mean median mode calculator, standard deviation calculator, variance calculator, quartiles, data analysis, descriptive statistics, statistical analysis",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block p-4 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl shadow-lg mb-4 animate-bounce", style: { animationDuration: "2s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartBar, { className: "h-12 w-12 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent", children: "Statistics Calculator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Transform raw data into actionable insights! Calculate mean, median, mode, standard deviation, and advanced statistical measures with professional precision. Perfect for data analysis! 📊✨" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-white to-teal-50 dark:from-gray-900 dark:to-teal-950/30 border-2 border-teal-200 dark:border-teal-800 shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl font-bold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-6 w-6 text-teal-600" }),
              "Enter Your Data"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-lg font-bold mb-3 block", children: [
                  "Data Values",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-gray-500 ml-2", children: "(Separate with commas, spaces, or new lines)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: input,
                    onChange: (e) => setInput(e.target.value),
                    placeholder: "Enter numbers separated by commas, spaces, or new lines\nExample: 10, 20, 30, 40, 50",
                    className: "min-h-[200px] text-lg font-mono bg-white dark:bg-gray-900 border-2 border-teal-300 dark:border-teal-600 focus:border-teal-500 dark:focus:border-teal-400"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-300 mt-2", children: [
                  "💡 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Quick tip:" }),
                  " Paste data from Excel, copy from a list, or type manually!"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    onClick: () => setInput("10, 20, 30, 40, 50, 60, 70, 80, 90, 100"),
                    className: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm",
                    children: "Sample Data 1"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    onClick: () => setInput("5, 10, 15, 20, 25, 30, 35"),
                    className: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-sm",
                    children: "Sample Data 2"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    onClick: () => setInput("100, 200, 150, 175, 225, 250, 300"),
                    className: "bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-sm",
                    children: "Sample Data 3"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    onClick: () => setInput(""),
                    variant: "outline",
                    className: "border-2 border-red-300 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 text-sm",
                    children: "Clear"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: handleCalculate,
                  disabled: !results,
                  className: "w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-4 text-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChartBar, { className: "h-5 w-5 mr-2" }),
                    "Analyze Data"
                  ]
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 border-2 border-cyan-200 dark:border-cyan-800 shadow-lg sticky top-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xl font-bold", children: "Quick Info" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm text-gray-700 dark:text-gray-300 mb-1", children: "Data Points" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-teal-600", children: (results == null ? void 0 : results.count) || 0 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm text-gray-700 dark:text-gray-300 mb-1", children: "Sum Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-teal-600", children: (results == null ? void 0 : results.sum.toLocaleString(void 0, { maximumFractionDigits: 2 })) || "0" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm text-gray-700 dark:text-gray-300 mb-1", children: "Range" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-teal-600", children: [
                  (results == null ? void 0 : results.min) || 0,
                  " - ",
                  (results == null ? void 0 : results.max) || 0
                ] })
              ] })
            ] })
          ] }) })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-2 opacity-90", children: "Mean (Average)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold", children: results.mean.toFixed(2) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-2 opacity-80", children: "Sum of all values ÷ count" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-2 opacity-90", children: "Median" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold", children: results.median.toFixed(2) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-2 opacity-80", children: "Middle value when sorted" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-gradient-to-br from-pink-500 to-pink-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-2 opacity-90", children: "Mode" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold", children: results.mode.length > 0 ? results.mode.join(", ") : "None" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-2 opacity-80", children: "Most frequent value(s)" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-2 opacity-90", children: "Range" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold", children: results.range.toFixed(2) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-2 opacity-80", children: "Max - Min" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl font-bold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-6 w-6 text-green-600" }),
                "Dispersion Measures"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gray-700 dark:text-gray-300", children: "Variance" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-green-600", children: results.variance.toFixed(4) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 dark:text-gray-300", children: "Average of squared deviations from mean" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gray-700 dark:text-gray-300", children: "Standard Deviation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-green-600", children: results.standardDeviation.toFixed(4) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 dark:text-gray-300", children: "Square root of variance - spread of data" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gray-700 dark:text-gray-300", children: "Coefficient of Variation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-bold text-green-600", children: [
                      (results.standardDeviation / results.mean * 100).toFixed(2),
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 dark:text-gray-300", children: "Relative measure of variability" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border-2 border-indigo-200 dark:border-indigo-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl font-bold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-6 w-6 text-indigo-600" }),
                "Quartiles & Outliers"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1", children: "Q1" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-indigo-600", children: results.q1.toFixed(2) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1", children: "Q2 (Median)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-indigo-600", children: results.median.toFixed(2) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1", children: "Q3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-indigo-600", children: results.q3.toFixed(2) })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gray-700 dark:text-gray-300", children: "IQR (Interquartile Range)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-indigo-600", children: results.iqr.toFixed(2) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 dark:text-gray-300", children: "Q3 - Q1: Middle 50% spread" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-gray-700 dark:text-gray-300 mb-2", children: "Outlier Boundaries" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Lower:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 font-bold text-indigo-600", children: (results.q1 - 1.5 * results.iqr).toFixed(2) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Upper:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 font-bold text-indigo-600", children: (results.q3 + 1.5 * results.iqr).toFixed(2) })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900 dark:to-slate-900 border-2 border-gray-200 dark:border-gray-700 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl font-bold", children: "Sorted Data & Distribution" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-gray-300 dark:border-gray-600 font-mono text-sm overflow-x-auto", children: results.sortedData.join(", ") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Minimum" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-gray-900 dark:text-white", children: results.min })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Q1 (25%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-gray-900 dark:text-white", children: results.q1.toFixed(2) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Q3 (75%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-gray-900 dark:text-white", children: results.q3.toFixed(2) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Maximum" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-gray-900 dark:text-white", children: results.max })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}),
          showAI && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              EnhancedAIAnalysis,
              {
                calculatorType: "statistics",
                data: {
                  count: results.count,
                  mean: results.mean,
                  median: results.median,
                  mode: results.mode,
                  standardDeviation: results.standardDeviation,
                  range: results.range,
                  variance: results.variance
                }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ExportShareButtons,
              {
                calculatorType: "statistics",
                inputs: { dataValues: input },
                results,
                title: "Statistics Calculator Results"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-200 dark:border-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl font-bold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "📊" }),
              "Key Concepts"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: "Mean (Average)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 text-sm", children: "Sum of all values divided by the count. Represents the central tendency of your data." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: "Median" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 text-sm", children: "The middle value when data is sorted. Less affected by outliers than the mean." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: "Mode" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 text-sm", children: "The most frequently occurring value(s) in your dataset." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: "Standard Deviation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 text-sm", children: "Measures how spread out values are from the mean. Low = clustered, High = dispersed." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-200 dark:border-purple-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl font-bold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "💡" }),
              "Quick Tips"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "1️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Data Quality:" }),
                  " Remove invalid entries before analysis"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "2️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Outliers:" }),
                  " Check if extreme values are errors or meaningful"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "3️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sample Size:" }),
                  " Larger datasets give more reliable statistics"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "4️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Context Matters:" }),
                  " Numbers alone don't tell the whole story"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "5️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Compare Measures:" }),
                  " Use multiple statistics for complete understanding"
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-2 border-orange-200 dark:border-orange-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl font-bold flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "📚" }),
            "Complete Statistics Guide"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose dark:prose-invert max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-4 mb-3", children: "What is Statistics?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: "Statistics is the science of collecting, organizing, analyzing, and interpreting data. It helps us make sense of numbers, identify patterns, and make informed decisions. Whether you're analyzing test scores, sales data, or scientific measurements, statistics provides the tools you need! 📊" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Measures of Central Tendency" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-3", children: 'These statistics tell you where the "center" of your data lies:' }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl border-l-4 border-blue-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Mean (Arithmetic Average)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Formula:" }),
                  " (Sum of all values) ÷ (Number of values)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
                  " For data ",
                  "{10, 20, 30, 40, 50}",
                  ":",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Mean = (10 + 20 + 30 + 40 + 50) ÷ 5 = 150 ÷ 5 = 30"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "When to use:" }),
                  " For normally distributed data without extreme outliers"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-purple-100 dark:bg-purple-900/30 rounded-xl border-l-4 border-purple-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Median (Middle Value)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "How to find:" }),
                  " Sort the data and find the middle value"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "• Odd count: ",
                  "{10, 20, 30, 40, 50}",
                  " → Median = 30",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "• Even count: ",
                  "{10, 20, 30, 40}",
                  " → Median = (20 + 30) ÷ 2 = 25"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "When to use:" }),
                  " When data has outliers or is skewed"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-green-100 dark:bg-green-900/30 rounded-xl border-l-4 border-green-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Mode (Most Frequent)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Definition:" }),
                  " The value(s) that appear most often"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
                  " ",
                  "{10, 20, 20, 30, 30, 30, 40}",
                  " → Mode = 30",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Multiple modes: ",
                  "{10, 10, 20, 20, 30}",
                  " → Modes = 10 and 20"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "When to use:" }),
                  " For categorical data or finding the most common value"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Measures of Dispersion" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-3", children: "These statistics tell you how spread out your data is:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-orange-100 dark:bg-orange-900/30 rounded-xl border-l-4 border-orange-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Range" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Formula:" }),
                  " Maximum value - Minimum value"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
                  " ",
                  "{10, 25, 30, 45, 50}",
                  " → Range = 50 - 10 = 40"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-pink-100 dark:bg-pink-900/30 rounded-xl border-l-4 border-pink-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Variance" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Formula:" }),
                  " Average of squared differences from the mean"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Interpretation:" }),
                  " Higher variance = more spread out data"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl border-l-4 border-cyan-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Standard Deviation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Formula:" }),
                  " Square root of variance"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "68-95-99.7 Rule:" }),
                  " In normal distribution:",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "• 68% of data within 1 standard deviation",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "• 95% within 2 standard deviations",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "• 99.7% within 3 standard deviations"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Quartiles and Box Plots" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-3", children: "Quartiles divide your data into four equal parts:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300 ml-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Q1 (First Quartile):" }),
                " 25% of data falls below this value"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Q2 (Second Quartile):" }),
                " Same as the median - 50% below"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Q3 (Third Quartile):" }),
                " 75% of data falls below this value"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "IQR (Interquartile Range):" }),
                " Q3 - Q1, represents the middle 50% of data"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl border-l-4 border-indigo-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Detecting Outliers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                "Values are considered outliers if they fall outside:",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Lower boundary:" }),
                " Q1 - (1.5 × IQR)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Upper boundary:" }),
                " Q3 + (1.5 × IQR)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Real-World Applications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "📈 Business Analytics" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Sales trends, customer behavior, inventory management, performance metrics" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🎓 Education" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Test score analysis, grade distributions, student performance tracking" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🏥 Healthcare" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Patient data analysis, treatment effectiveness, epidemic tracking" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🔬 Research" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Experimental results, hypothesis testing, data validation" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Choosing the Right Statistic" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 border-l-4 border-teal-500 p-4 rounded-r-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "✓ ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Mean:" }),
                " Best for symmetric data without outliers"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "✓ ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Median:" }),
                " Better for skewed data or when outliers exist"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "✓ ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Mode:" }),
                " Ideal for categorical data or finding popularity"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "✓ ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Standard Deviation:" }),
                " Shows data consistency and reliability"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "✓ ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "IQR:" }),
                " Robust measure of spread, not affected by outliers"
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-3", children: "Pro Tips for Data Analysis" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border-l-4 border-purple-500 p-4 rounded-r-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "📊 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Visualize first:" }),
                " Create graphs to spot patterns before calculating"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "🔍 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Check for outliers:" }),
                " They can drastically affect your results"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "📏 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Use multiple measures:" }),
                " Don't rely on just one statistic"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "🎯 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Consider context:" }),
                " Numbers need interpretation based on the situation"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "✅ ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Verify calculations:" }),
                " Double-check important results"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "📝 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Document your process:" }),
                " Keep track of how you analyzed the data"
              ] })
            ] }) })
          ] })
        ] })
      ] })
    }
  );
}
export {
  StatisticsCalculator as default
};
