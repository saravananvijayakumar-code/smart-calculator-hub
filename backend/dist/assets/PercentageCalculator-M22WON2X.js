import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, C as Calculator, i as CardDescription, k as CardContent, a3 as Label, U as Input, T as TrendingUp, a4 as Info, a5 as Alert, a6 as AlertDescription } from "./index-C_OXA6OQ.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-BNSAX0su.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { A as AIAnalysis } from "./AIAnalysis-DnR9Up6F.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { R as RelatedCalculators } from "./RelatedCalculators-D0TIDU0V.js";
import { B as BookOpen } from "./book-open-BKiKsQcZ.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./EnhancedAIAnalysis-BZiQW2bt.js";
import "./badge-fo2YvZos.js";
import "./loader-circle-BYW7QwsU.js";
import "./brain-U3SZm3t9.js";
import "./target-1ApqtYDG.js";
import "./circle-check-big-BoxGYPKG.js";
import "./arrow-right-CtOKJdMG.js";
import "./lightbulb-doNczJxC.js";
import "./share-2-ViScha7M.js";
import "./link-DxXhzsoi.js";
import "./copy-DGMuG98H.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./linkedin-BSJyfSWT.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
import "./AppleStyleCard-bNXb4kfM.js";
import "./CalculatorCategory-jKaiWaqd.js";
import "./map-pin-CJs2GFz9.js";
import "./interlinking-BQgzUxEI.js";
function PercentageCalculator() {
  const [percentage1, setPercentage1] = reactExports.useState("");
  const [number1, setNumber1] = reactExports.useState("");
  const [result1, setResult1] = reactExports.useState(null);
  const [value2, setValue2] = reactExports.useState("");
  const [total2, setTotal2] = reactExports.useState("");
  const [result2, setResult2] = reactExports.useState(null);
  const [oldValue, setOldValue] = reactExports.useState("");
  const [newValue, setNewValue] = reactExports.useState("");
  const [result3, setResult3] = reactExports.useState(null);
  const [baseValue, setBaseValue] = reactExports.useState("");
  const [percentChange, setPercentChange] = reactExports.useState("");
  const [result4, setResult4] = reactExports.useState(null);
  const calculatePercentageOf = () => {
    const perc = parseFloat(percentage1);
    const num = parseFloat(number1);
    if (isNaN(perc) || isNaN(num) || percentage1 === "" || number1 === "") {
      setResult1(null);
      return;
    }
    const result = perc / 100 * num;
    const precision = Math.abs(result) < 1 ? 4 : 2;
    setResult1({
      result,
      calculation: `${perc}% of ${num} = ${result.toFixed(precision)}`,
      formatted: result.toLocaleString(void 0, { maximumFractionDigits: precision })
    });
  };
  const calculateWhatPercent = () => {
    const val = parseFloat(value2);
    const total = parseFloat(total2);
    if (isNaN(val) || isNaN(total) || value2 === "" || total2 === "" || total === 0) {
      setResult2(null);
      return;
    }
    const result = val / total * 100;
    const precision = Math.abs(result) < 1 ? 4 : 2;
    setResult2({
      result,
      calculation: `${val} is ${result.toFixed(precision)}% of ${total}`,
      formatted: `${result.toFixed(precision)}%`
    });
  };
  const calculatePercentChange = () => {
    const oldVal = parseFloat(oldValue);
    const newVal = parseFloat(newValue);
    if (isNaN(oldVal) || isNaN(newVal) || oldValue === "" || newValue === "" || oldVal === 0) {
      setResult3(null);
      return;
    }
    const result = (newVal - oldVal) / Math.abs(oldVal) * 100;
    const changeType = result >= 0 ? "increase" : "decrease";
    const precision = Math.abs(result) < 1 ? 4 : 2;
    setResult3({
      result,
      calculation: `${Math.abs(result).toFixed(precision)}% ${changeType} from ${oldVal} to ${newVal}`,
      formatted: `${result > 0 ? "+" : ""}${result.toFixed(precision)}%`
    });
  };
  const calculatePercentIncrease = () => {
    const base = parseFloat(baseValue);
    const percent = parseFloat(percentChange);
    if (!base || !percent || isNaN(base) || isNaN(percent)) {
      setResult4(null);
      return;
    }
    const result = base + base * (percent / 100);
    setResult4({
      result,
      calculation: `${base} ${percent >= 0 ? "+" : ""} ${percent}% = ${result.toFixed(2)}`,
      formatted: result.toLocaleString()
    });
  };
  reactExports.useEffect(() => calculatePercentageOf(), [percentage1, number1]);
  reactExports.useEffect(() => calculateWhatPercent(), [value2, total2]);
  reactExports.useEffect(() => calculatePercentChange(), [oldValue, newValue]);
  reactExports.useEffect(() => calculatePercentIncrease(), [baseValue, percentChange]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Percentage Calculator - All-in-One Percent Calculator with Examples",
      description: "Complete percentage calculator for all types of percent calculations. Calculate percentages, percentage change, percentage increase/decrease, and more with step-by-step examples.",
      keywords: "percentage calculator, percent calculator, percentage change, percent increase, percent decrease, math calculator, percentage formula",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Percentage Calculator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "Calculate any type of percentage with our comprehensive calculator. From basic percentages to percentage changes, increases, and decreases - all with step-by-step explanations and real-world examples." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "percentage-of", className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-2 lg:grid-cols-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "percentage-of", children: "% of Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "what-percent", children: "What %" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "percent-change", children: "% Change" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "increase-decrease", children: "+/- %" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "percentage-of", className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-5 w-5" }),
                  "What is X% of Y?"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Calculate a percentage of a number (e.g., 20% of 150 = 30)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "percentage1", children: "Percentage (%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "percentage1",
                        type: "number",
                        placeholder: "20",
                        value: percentage1,
                        onChange: (e) => setPercentage1(e.target.value)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "number1", children: "Number" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "number1",
                        type: "number",
                        placeholder: "150",
                        value: number1,
                        onChange: (e) => setNumber1(e.target.value)
                      }
                    )
                  ] })
                ] }),
                result1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 rounded-lg p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-blue-900 mb-2", children: "Result:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-blue-700", children: result1.formatted }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-blue-600 mt-1", children: result1.calculation })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-lg p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-4", children: "Common Examples:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Shopping & Discounts:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-gray-600", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 25% off $80 = $20 discount" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 15% tip on $50 bill = $7.50" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 8.5% sales tax on $100 = $8.50" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Finance & Business:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-gray-600", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 5% interest on $1000 = $50" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 10% commission on $5000 = $500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 20% down payment on $300k = $60k" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "what-percent", className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-5 w-5" }),
                  "X is what % of Y?"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Find what percentage one number is of another (e.g., 30 is what % of 150 = 20%)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "value2", children: "Value (X)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "value2",
                        type: "number",
                        placeholder: "30",
                        value: value2,
                        onChange: (e) => setValue2(e.target.value)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "total2", children: "Total (Y)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "total2",
                        type: "number",
                        placeholder: "150",
                        value: total2,
                        onChange: (e) => setTotal2(e.target.value)
                      }
                    )
                  ] })
                ] }),
                result2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 rounded-lg p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-green-900 mb-2", children: "Result:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-green-700", children: result2.formatted }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-600 mt-1", children: result2.calculation })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-lg p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-4", children: "Real-World Applications:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Academic & Testing:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-gray-600", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 85 out of 100 points = 85%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 340 out of 400 SAT = 85%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 18 out of 20 correct = 90%" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Business & Statistics:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-gray-600", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 250 of 1000 customers = 25%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• $50k of $200k budget = 25%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 75 of 300 responses = 25%" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "percent-change", className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
                  "Percentage Change"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Calculate percentage increase or decrease between two values" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "oldValue", children: "Original Value" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "oldValue",
                        type: "number",
                        placeholder: "100",
                        value: oldValue,
                        onChange: (e) => setOldValue(e.target.value)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "newValue", children: "New Value" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "newValue",
                        type: "number",
                        placeholder: "120",
                        value: newValue,
                        onChange: (e) => setNewValue(e.target.value)
                      }
                    )
                  ] })
                ] }),
                result3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-lg p-4 ${result3.result >= 0 ? "bg-green-50" : "bg-red-50"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-semibold mb-2 ${result3.result >= 0 ? "text-green-900" : "text-red-900"}`, children: "Result:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-bold ${result3.result >= 0 ? "text-green-700" : "text-red-700"}`, children: result3.formatted }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm mt-1 ${result3.result >= 0 ? "text-green-600" : "text-red-600"}`, children: result3.calculation })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-lg p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-4", children: "Common Use Cases:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Investment & Finance:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-gray-600", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Stock price changes" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Portfolio performance" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Revenue growth" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Profit margins" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Business Metrics:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-gray-600", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Sales growth" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Customer acquisition" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Cost reductions" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Market share" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Personal & Health:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-gray-600", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Weight changes" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Salary increases" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Expense tracking" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Performance metrics" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "increase-decrease", className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-5 w-5" }),
                  "Increase/Decrease by Percentage"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Add or subtract a percentage from a number" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "baseValue", children: "Base Value" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "baseValue",
                        type: "number",
                        placeholder: "100",
                        value: baseValue,
                        onChange: (e) => setBaseValue(e.target.value)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "percentChange", children: "Percentage Change (%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "percentChange",
                        type: "number",
                        placeholder: "20",
                        value: percentChange,
                        onChange: (e) => setPercentChange(e.target.value)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Use positive for increase, negative for decrease" })
                  ] })
                ] }),
                result4 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 rounded-lg p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-purple-900 mb-2", children: "Result:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-purple-700", children: result4.formatted }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-purple-600 mt-1", children: result4.calculation })
                ] }) })
              ] })
            ] }),
            (result1 || result2 || result3 || result4) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AIAnalysis,
                {
                  analysisRequest: {
                    calculatorType: "percentage",
                    data: {
                      type: result1 ? "percentage_of" : result2 ? "what_percent" : result3 ? "percent_change" : "increase_decrease",
                      result1: result1 == null ? void 0 : result1.result,
                      result2: result2 == null ? void 0 : result2.result,
                      result3: result3 == null ? void 0 : result3.result,
                      result4: result4 == null ? void 0 : result4.result,
                      inputs: {
                        percentage1: parseFloat(percentage1) || 0,
                        number1: parseFloat(number1) || 0,
                        value2: parseFloat(value2) || 0,
                        total2: parseFloat(total2) || 0,
                        oldValue: parseFloat(oldValue) || 0,
                        newValue: parseFloat(newValue) || 0,
                        baseValue: parseFloat(baseValue) || 0,
                        percentChange: parseFloat(percentChange) || 0
                      }
                    }
                  },
                  autoRun: true,
                  title: "AI Percentage Analysis",
                  description: "Get insights on percentage calculations and their practical applications in finance, statistics, and everyday scenarios."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ExportShareButtons,
                {
                  calculatorType: "percentage",
                  inputs: {
                    percentage1: parseFloat(percentage1) || 0,
                    number1: parseFloat(number1) || 0,
                    value2: parseFloat(value2) || 0,
                    total2: parseFloat(total2) || 0,
                    oldValue: parseFloat(oldValue) || 0,
                    newValue: parseFloat(newValue) || 0,
                    baseValue: parseFloat(baseValue) || 0,
                    percentChange: parseFloat(percentChange) || 0
                  },
                  results: {
                    result1: (result1 == null ? void 0 : result1.result) || 0,
                    result2: (result2 == null ? void 0 : result2.result) || 0,
                    result3: (result3 == null ? void 0 : result3.result) || 0,
                    result4: (result4 == null ? void 0 : result4.result) || 0
                  },
                  title: "Percentage Calculator Report"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5" }),
              "Understanding Percentages: Complete Guide"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-700 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Percentages are one of the most useful mathematical concepts in daily life. From calculating tips and discounts to understanding financial growth and business metrics, percentages help us express proportions and changes in an easily understandable way. The word "percent" literally means "per hundred" (from Latin "per centum").' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Essential Percentage Formulas:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Basic Percentage" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Percentage of Number = (Percent ÷ 100) × Number" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600", children: "Example: 25% of 200 = (25 ÷ 100) × 200 = 50" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Finding Percentage" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Percentage = (Part ÷ Whole) × 100" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600", children: "Example: 40 is what % of 160? = (40 ÷ 160) × 100 = 25%" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Percentage Change" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "% Change = ((New - Old) ÷ Old) × 100" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600", children: "Example: From 50 to 75 = ((75-50) ÷ 50) × 100 = 50%" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Finding the Whole" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Whole = Part ÷ (Percent ÷ 100)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600", children: "Example: 30 is 25% of what? = 30 ÷ (25 ÷ 100) = 120" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Percentage vs. Percentage Points:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Understanding the difference between percentage and percentage points is crucial for interpreting data correctly. If interest rates increase from 5% to 6%, that's a 1 percentage point increase but a 20% relative increase ((6-5)/5 × 100 = 20%). Always clarify which measurement is being used in financial and statistical contexts." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Real-World Applications & Examples" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-700 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Shopping & Consumer:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sales Tax:" }),
                      " Calculate total cost with tax"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Discounts:" }),
                      " Find sale prices and savings"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tips:" }),
                      " Calculate appropriate gratuities"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Interest:" }),
                      " Compare loan and savings rates"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Price Changes:" }),
                      " Track inflation and deflation"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Business & Finance:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Growth Rates:" }),
                      " Measure business performance"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Profit Margins:" }),
                      " Calculate profitability"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Market Share:" }),
                      " Analyze competitive position"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ROI:" }),
                      " Evaluate investment returns"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Budget Allocation:" }),
                      " Distribute resources"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Academic & Personal:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Grades:" }),
                      " Convert scores to percentages"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Statistics:" }),
                      " Express survey results"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Health Metrics:" }),
                      " Track fitness progress"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Probability:" }),
                      " Express likelihood"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Data Analysis:" }),
                      " Compare and contrast values"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Step-by-Step Example Walkthrough:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium mb-2", children: "Scenario: Restaurant Bill Calculation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bill amount:" }),
                    " $85.00"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sales tax (8.5%):" }),
                    " $85.00 × 0.085 = $7.23"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Subtotal:" }),
                    " $85.00 + $7.23 = $92.23"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tip (18% of pre-tax):" }),
                    " $85.00 × 0.18 = $15.30"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Total amount:" }),
                    " $92.23 + $15.30 = $107.53"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Common Percentage Mistakes to Avoid:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Base Confusion:" }),
                  ' Always identify what the percentage is "of" (the base value)'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Direction Errors:" }),
                  " Be clear about increases vs. decreases"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Rounding Too Early:" }),
                  " Keep precision through calculations, round at the end"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Percentage vs. Decimal:" }),
                  " Remember 25% = 0.25 in calculations"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Compounding:" }),
                  " Multiple percentage changes don't simply add together"
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Advanced Percentage Concepts" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-700 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Compound Percentage Changes:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "When percentages are applied sequentially, they compound rather than add. For example, if a price increases by 10% and then decreases by 10%, the final price is not the original price. Starting with $100: $100 → $110 (up 10%) → $99 (down 10%). The net effect is a 1% decrease, not zero change." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium mb-2", children: "Compound Percentage Formula:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Final Value = Initial × (1 + r₁) × (1 + r₂) × ... × (1 + rₙ)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600", children: "Where r₁, r₂, etc. are percentage changes as decimals" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Percentage in Statistics:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Percentiles:" }),
                  " Position within a distribution (e.g., 90th percentile)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Confidence Intervals:" }),
                  " Statistical certainty levels (e.g., 95% confidence)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Error Rates:" }),
                  " Accuracy and precision measurements"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Population Samples:" }),
                  " Representative subset analysis"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Financial Applications:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Investment Returns:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Annual percentage yield (APY)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Return on investment (ROI)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Portfolio allocation percentages" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Risk assessment percentages" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: "Loan Calculations:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Annual percentage rate (APR)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Down payment percentages" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Debt-to-income ratios" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Loan-to-value ratios" })
                  ] })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Frequently Asked Questions" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-700 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What's the difference between 50% more and 50% of?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: '"50% more" means adding 50% to the original value (100 + 50% = 150), while "50% of" means taking half the value (50% of 100 = 50). The words "more," "of," "less," and "off" are crucial for understanding the operation.' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How do I convert between percentages, decimals, and fractions?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "To convert: Percentage to decimal (divide by 100), Decimal to percentage (multiply by 100), Percentage to fraction (put over 100 and simplify). For example: 25% = 0.25 = 1/4." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Why doesn't a 50% increase followed by a 50% decrease return to the original value?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Because the base changes after the first operation. Starting with 100: 100 + 50% = 150, then 150 - 50% = 75. The 50% decrease is calculated from 150, not 100. To return to the original value after a 50% increase, you need a 33.33% decrease." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How accurate should my percentage calculations be?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "It depends on the context. For financial calculations, 2-4 decimal places are common. For general purposes, 1-2 decimal places are usually sufficient. Always consider the precision of your input data and round appropriately for your use case." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Can percentages exceed 100%?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Yes! Percentages can exceed 100% when representing increases, multiples, or ratios. For example, "200% increase" means tripling the original value, and "150% of the original" means 1.5 times the original value.' })
              ] })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5" }),
            "Calculator Notes & Tips"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator provides precise percentage calculations for educational and general use." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• For financial decisions, always verify calculations with appropriate financial tools and professionals." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Round results appropriately based on your specific use case and required precision." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Remember that percentage changes compound when applied sequentially." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Use negative values for percentage decreases in the increase/decrease calculator." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• All calculations are performed in real-time as you type for immediate results." })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RelatedCalculators, { currentCalculatorId: "percentage" })
      ] })
    }
  );
}
export {
  PercentageCalculator
};
