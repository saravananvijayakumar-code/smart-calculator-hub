import { ae as useFormatting, r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, C as Calculator, i as CardDescription, k as CardContent, a4 as Label, V as Input, a5 as Info } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { A as AIAnalysis } from "./AIAnalysis-B-4zh-eH.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { C as ChartColumn } from "./chart-column-DAuKFntu.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./check-DTsA1WpX.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
import "./EnhancedAIAnalysis-BaYCd8m5.js";
import "./brain-CSngUEN8.js";
import "./target-4JeIm6Yk.js";
import "./circle-check-big-B8N3lfE-.js";
import "./arrow-right-Bjdtr8dz.js";
import "./lightbulb-DKPyzLdJ.js";
import "./tabs-t5L32f7o.js";
import "./share-2-SpOWc355.js";
import "./link-C11IgQ5M.js";
import "./copy-BqV-1o4k.js";
import "./twitter-CFAqYlq6.js";
import "./facebook-BX8Qa6cK.js";
import "./linkedin-D9e3uSZB.js";
import "./message-circle-DZtFORhh.js";
import "./mail-DX6y6Mo7.js";
function ROICalculator() {
  const { formatCurrency, getCurrencySymbol } = useFormatting();
  const [calculationType, setCalculationType] = reactExports.useState("basic");
  const [initialInvestment, setInitialInvestment] = reactExports.useState("");
  const [finalValue, setFinalValue] = reactExports.useState("");
  const [timeHeld, setTimeHeld] = reactExports.useState("");
  const [additionalCosts, setAdditionalCosts] = reactExports.useState("");
  const [dividendsReceived, setDividendsReceived] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const [costBenefit, setCostBenefit] = reactExports.useState(null);
  const [comparisons, setComparisons] = reactExports.useState([]);
  const calculateROI = () => {
    const initial = parseFloat(initialInvestment);
    const final = parseFloat(finalValue);
    const time = parseFloat(timeHeld) || 1;
    const additionalCost = parseFloat(additionalCosts) || 0;
    const dividends = parseFloat(dividendsReceived) || 0;
    if (!initial || !final || initial <= 0 || final < 0) {
      setResult(null);
      return;
    }
    const totalInvestment = initial + additionalCost;
    const totalReturns = final + dividends;
    const profit = totalReturns - totalInvestment;
    const roi = profit / totalInvestment * 100;
    const totalReturn = totalReturns;
    let annualizedROI = 0;
    if (time > 0) {
      annualizedROI = (Math.pow(totalReturns / totalInvestment, 1 / time) - 1) * 100;
    }
    const isGain = profit > 0;
    const breakEvenAmount = totalInvestment;
    const profitabilityIndex = totalReturns / totalInvestment;
    setResult({
      roi,
      profit,
      totalReturn,
      annualizedROI,
      isGain,
      breakEvenAmount,
      profitabilityIndex
    });
    if (calculationType === "business") {
      setCostBenefit({
        totalCosts: totalInvestment,
        totalBenefits: totalReturns,
        netBenefit: profit,
        benefitCostRatio: totalReturns / totalInvestment
      });
    }
    generateComparisons(initial, final, time);
  };
  const generateComparisons = (initial, final, time) => {
    const scenarios = [
      {
        investment: "Current Investment",
        initialAmount: initial,
        finalValue: final,
        roi: (final - initial) / initial * 100,
        annualizedROI: time > 0 ? (Math.pow(final / initial, 1 / time) - 1) * 100 : 0
      },
      {
        investment: "S&P 500 (7% avg)",
        initialAmount: initial,
        finalValue: initial * Math.pow(1.07, time),
        roi: (Math.pow(1.07, time) - 1) * 100,
        annualizedROI: 7
      },
      {
        investment: "Conservative (4% avg)",
        initialAmount: initial,
        finalValue: initial * Math.pow(1.04, time),
        roi: (Math.pow(1.04, time) - 1) * 100,
        annualizedROI: 4
      },
      {
        investment: "High-Growth (10% avg)",
        initialAmount: initial,
        finalValue: initial * Math.pow(1.1, time),
        roi: (Math.pow(1.1, time) - 1) * 100,
        annualizedROI: 10
      }
    ];
    setComparisons(scenarios);
  };
  reactExports.useEffect(() => {
    calculateROI();
  }, [initialInvestment, finalValue, timeHeld, additionalCosts, dividendsReceived, calculationType]);
  const getROIInterpretation = (roi, annualized) => {
    if (roi > 0) {
      if (annualized > 15) return { level: "Excellent", color: "text-green-600", description: "Outstanding returns" };
      if (annualized > 10) return { level: "Very Good", color: "text-green-500", description: "Above average performance" };
      if (annualized > 7) return { level: "Good", color: "text-blue-600", description: "Solid returns" };
      if (annualized > 3) return { level: "Fair", color: "text-yellow-600", description: "Below average returns" };
      return { level: "Poor", color: "text-orange-600", description: "Underperforming" };
    } else {
      return { level: "Loss", color: "text-red-600", description: "Negative returns" };
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "ROI Calculator | Return on Investment & Profitability Calculator",
      description: "Comprehensive ROI calculator with annualized returns, cost-benefit analysis, and investment comparisons. Calculate return on investment for stocks, business projects, and financial decisions.",
      keywords: "ROI calculator, return on investment calculator, profitability calculator, annualized return calculator, cost benefit analysis, investment performance",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ROI Calculator" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Calculate return on investment with comprehensive analysis and comparisons." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "calculationType", children: "Calculation Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: calculationType, onValueChange: setCalculationType, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select calculation type" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "basic", children: "Basic ROI" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "investment", children: "Investment with Dividends" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "business", children: "Business Project" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "real_estate", children: "Real Estate" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "initialInvestment", children: [
                  "Initial Investment (",
                  getCurrencySymbol(),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "initialInvestment",
                    type: "number",
                    placeholder: "10000",
                    value: initialInvestment,
                    onChange: (e) => setInitialInvestment(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "finalValue", children: [
                  calculationType === "business" ? "Final Value/Revenue" : "Final Value",
                  " (",
                  getCurrencySymbol(),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "finalValue",
                    type: "number",
                    placeholder: "12000",
                    value: finalValue,
                    onChange: (e) => setFinalValue(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "timeHeld", children: "Time Period (Years)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "timeHeld",
                    type: "number",
                    step: "0.1",
                    placeholder: "2",
                    value: timeHeld,
                    onChange: (e) => setTimeHeld(e.target.value)
                  }
                )
              ] }),
              (calculationType === "investment" || calculationType === "real_estate" || calculationType === "business") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "additionalCosts", children: [
                  calculationType === "real_estate" ? "Transaction Costs" : calculationType === "business" ? "Operating Costs" : "Additional Costs",
                  " (",
                  getCurrencySymbol(),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "additionalCosts",
                    type: "number",
                    placeholder: "500",
                    value: additionalCosts,
                    onChange: (e) => setAdditionalCosts(e.target.value)
                  }
                )
              ] }),
              (calculationType === "investment" || calculationType === "real_estate") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "dividendsReceived", children: [
                  calculationType === "real_estate" ? "Rental Income" : "Dividends/Income",
                  " (",
                  getCurrencySymbol(),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "dividendsReceived",
                    type: "number",
                    placeholder: "400",
                    value: dividendsReceived,
                    onChange: (e) => setDividendsReceived(e.target.value)
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIAnalysis,
            {
              analysisRequest: {
                calculatorType: "roi",
                data: {
                  initialInvestment: parseFloat(initialInvestment) || 0,
                  finalValue: parseFloat(finalValue) || 0,
                  roi: result.roi,
                  annualizedReturn: result.annualizedROI,
                  profit: result.profit,
                  timeHeld: parseFloat(timeHeld) || 1
                }
              },
              autoRun: true,
              title: "AI ROI Analysis",
              description: "Get personalized insights on your investment performance and optimization strategies."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "roi",
              inputs: {
                initialInvestment: parseFloat(initialInvestment) || 0,
                finalValue: parseFloat(finalValue) || 0,
                timeHeld: parseFloat(timeHeld) || 1
              },
              results: {
                roi: result.roi,
                annualizedROI: result.annualizedROI,
                profit: result.profit
              },
              title: "ROI Calculator Report"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `border-2 ${result.isGain ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: `text-lg font-bold ${result.isGain ? "text-green-800" : "text-red-800"}`, children: "ROI Analysis Results" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-3xl font-bold ${result.isGain ? "text-green-600" : "text-red-600"}`, children: [
                    result.roi > 0 ? "+" : "",
                    result.roi.toFixed(2),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total ROI" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-blue-600", children: [
                    result.annualizedROI > 0 ? "+" : "",
                    result.annualizedROI.toFixed(2),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Annualized ROI" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-2xl font-bold ${result.isGain ? "text-green-600" : "text-red-600"}`, children: formatCurrency(result.profit) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: result.isGain ? "Profit" : "Loss" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-purple-600", children: result.profitabilityIndex.toFixed(2) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Profitability Index" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Performance Rating:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: getROIInterpretation(result.roi, result.annualizedROI).color, children: getROIInterpretation(result.roi, result.annualizedROI).level })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Break-even Amount:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: formatCurrency(result.breakEvenAmount) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: getROIInterpretation(result.roi, result.annualizedROI).description })
              ] })
            ] })
          ] }),
          costBenefit && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cost-Benefit Analysis" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 border rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm mb-2", children: "Total Costs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-red-600", children: formatCurrency(costBenefit.totalCosts) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 border rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm mb-2", children: "Total Benefits" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-green-600", children: formatCurrency(costBenefit.totalBenefits) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 border rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm mb-2", children: "Net Benefit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xl font-bold ${costBenefit.netBenefit >= 0 ? "text-green-600" : "text-red-600"}`, children: formatCurrency(costBenefit.netBenefit) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 border rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm mb-2", children: "Benefit-Cost Ratio" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-blue-600", children: costBenefit.benefitCostRatio.toFixed(2) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 p-3 bg-blue-50 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Interpretation:" }),
                " A benefit-cost ratio above 1.0 indicates a profitable investment. Ratios above 2.0 are generally considered very attractive."
              ] }) })
            ] })
          ] }),
          comparisons.length > 0 && parseFloat(timeHeld) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Investment Performance Comparison" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-2", children: "Investment Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-2", children: "Initial Amount" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-2", children: "Final Value" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-2", children: "Total ROI" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-2", children: "Annualized ROI" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: comparisons.map((comp, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: `border-b hover:bg-gray-50 ${index === 0 ? "bg-blue-50" : ""}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 font-medium", children: comp.investment }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right", children: formatCurrency(comp.initialAmount) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right", children: formatCurrency(comp.finalValue) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: `p-2 text-right font-semibold ${comp.roi >= 0 ? "text-green-600" : "text-red-600"}`, children: [
                  comp.roi > 0 ? "+" : "",
                  comp.roi.toFixed(2),
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: `p-2 text-right font-semibold ${comp.annualizedROI >= 0 ? "text-green-600" : "text-red-600"}`, children: [
                  comp.annualizedROI > 0 ? "+" : "",
                  comp.annualizedROI.toFixed(2),
                  "%"
                ] })
              ] }, index)) })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Complete Guide to Return on Investment (ROI) Analysis" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Return on Investment (ROI) is one of the most fundamental and widely used metrics for evaluating investment performance and business profitability. Understanding how to calculate, interpret, and apply ROI analysis is essential for making informed financial decisions, comparing investment alternatives, and measuring the success of financial strategies. This comprehensive guide covers ROI fundamentals, advanced applications, and strategic considerations for optimizing investment returns across different scenarios." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Understanding ROI Fundamentals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ROI measures the efficiency of an investment by comparing the gain or loss relative to the initial investment cost. The basic ROI formula (Gain - Cost) / Cost × 100 provides a percentage return that enables easy comparison between different investments. However, effective ROI analysis requires understanding various calculation methods, time considerations, and the limitations of simple ROI metrics in complex investment scenarios." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Annualized ROI and Time-Adjusted Returns" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Simple ROI doesn't account for the time factor, making it inadequate for comparing investments with different holding periods. Annualized ROI provides a standardized metric by calculating the equivalent annual return rate. For example, a 44% total return over 4 years equals approximately 9.6% annualized return, which is more meaningful for comparison with other investments or market benchmarks. Time-adjusted metrics provide better insights into investment efficiency and compounding effects." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "ROI Calculation Examples:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Basic ROI:" }),
                    " ($12,000 - $10,000) / $10,000 = 20%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Annualized ROI:" }),
                    " (12,000/10,000)^(1/2) - 1 = 9.54% per year"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "With Dividends:" }),
                    " ($12,000 + $400 - $10,000) / $10,000 = 24%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Including Costs:" }),
                    " ($12,000 + $400 - $10,000 - $100) / $10,100 = 22.77%"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Cost-Benefit Analysis and Business ROI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Business ROI analysis extends beyond simple investment returns to include comprehensive cost-benefit evaluation. This involves identifying all direct and indirect costs, quantifying tangible and intangible benefits, and calculating metrics like benefit-cost ratios and net present value. Business ROI helps evaluate projects, marketing campaigns, technology investments, and operational improvements by providing a framework for comparing diverse initiatives on a common financial basis." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Risk-Adjusted ROI and Performance Metrics" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "High ROI doesn't automatically indicate superior investment performance if it comes with excessive risk. Risk-adjusted metrics like the Sharpe ratio (return per unit of risk) and alpha (excess return above market expectations) provide better insights into investment quality. These metrics help investors understand whether higher returns justify additional risk and compare investments with different risk profiles on an equivalent basis." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Tax Implications and After-Tax ROI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tax considerations significantly impact actual investment returns, making after-tax ROI calculations essential for accurate performance evaluation. Different investment types face varying tax treatment: ordinary income tax on dividends and interest, capital gains tax on asset appreciation, and potential tax benefits from depreciation or losses. Understanding these implications helps optimize investment strategies and provides realistic expectations for net returns." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Industry-Specific ROI Benchmarks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ROI expectations vary significantly across industries and investment types. Technology and growth companies may target 15-25% annual returns but with higher volatility, while utility stocks might provide 4-8% returns with greater stability. Real estate investments typically target 8-12% returns including rental income, while private equity often seeks 20%+ returns to compensate for illiquidity and risk. Understanding industry benchmarks helps set realistic expectations and evaluate relative performance." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Limitations of ROI Analysis" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While ROI is valuable for investment evaluation, it has important limitations that investors should understand. ROI doesn't account for cash flow timing, risk differences, opportunity costs, or qualitative factors that may affect investment success. Additionally, ROI calculations can be manipulated through different accounting methods or selective time period choices. Comprehensive investment analysis should supplement ROI with other metrics and qualitative considerations." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Advanced ROI Applications and Optimization Strategies" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Portfolio-Level ROI Analysis" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Portfolio ROI requires weighted analysis that accounts for different asset sizes and holding periods within the overall portfolio. This involves calculating individual asset returns, weighting them by portfolio allocation, and considering correlation effects and rebalancing impacts. Portfolio-level analysis helps identify which investments contribute most to overall performance and guides strategic allocation decisions." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Real Estate ROI Calculations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Real estate ROI involves multiple income streams and cost factors that require specialized calculation methods. Cash-on-cash return measures annual cash flow against initial cash investment, while total return includes appreciation, tax benefits, and loan principal reduction. Real estate ROI must also consider transaction costs, ongoing maintenance, property management fees, and potential vacancy periods for accurate performance assessment." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Marketing and Business Investment ROI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Marketing ROI calculation requires tracking customer acquisition costs, lifetime value, attribution across multiple touchpoints, and long-term brand effects. Business investment ROI for technology, equipment, or process improvements often includes productivity gains, cost savings, and competitive advantages that extend beyond direct financial returns. These analyses require sophisticated modeling to capture all relevant benefits and costs." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "ROI Optimization Strategies:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Include all relevant costs and benefits in calculations" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Use annualized returns for meaningful comparisons" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider risk-adjusted metrics alongside raw returns" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Account for tax implications in after-tax analysis" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Compare against relevant benchmarks and alternatives" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Monitor performance regularly and adjust strategies" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider qualitative factors beyond pure ROI numbers" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Technology and ROI Tracking" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Modern portfolio management software and financial tracking tools enable sophisticated ROI analysis with real-time performance monitoring, automated calculations, and comprehensive reporting. These tools can account for dividend reinvestment, fee impacts, tax implications, and multi-currency investments while providing historical performance analysis and future projection capabilities." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Behavioral Factors in ROI Analysis" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Psychological biases can significantly impact ROI evaluation and decision-making. Anchoring bias may cause overemphasis on purchase prices, while confirmation bias leads to selective interpretation of performance data. Recency bias overweights recent performance, and loss aversion may cause premature exit from temporarily underperforming investments. Recognizing these biases helps maintain objective ROI analysis and long-term investment discipline." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "ESG and Sustainable ROI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Environmental, Social, and Governance (ESG) investing requires expanded ROI analysis that incorporates non-financial returns and long-term sustainability factors. This may include carbon footprint reduction, social impact measurement, and governance quality assessment alongside traditional financial metrics. ESG ROI analysis helps investors align values with returns while potentially identifying companies better positioned for long-term success." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "International Investment ROI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "International investment ROI requires consideration of currency fluctuations, foreign tax implications, and different market dynamics. Currency hedging decisions significantly impact returns, while foreign tax credits and treaties affect after-tax performance. International diversification benefits must be weighed against additional costs and complexity in comprehensive ROI analysis." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Alternative Investment ROI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Alternative investments like private equity, hedge funds, commodities, and collectibles require specialized ROI calculation methods that account for illiquidity, J-curve effects, and unique fee structures. These investments often involve longer time horizons, limited transparency, and complex return distributions that make traditional ROI analysis insufficient for comprehensive performance evaluation." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Frequently Asked Questions" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What's considered a good ROI for investments?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Good ROI varies by asset class and risk level. Stock market historical average is 7-10% annually. Conservative investments might yield 3-5%, while growth investments may target 10-15%+. Consider risk, time horizon, and inflation when evaluating ROI adequacy." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Should I use simple ROI or annualized ROI for comparisons?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Use annualized ROI for meaningful comparisons between investments with different time periods. Simple ROI is useful for quick calculations but doesn't account for time value of money or compounding effects that are crucial for investment evaluation." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How do I calculate ROI for investments with regular dividends?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Include all cash received (dividends, interest, distributions) in your return calculation: (Final Value + Total Dividends - Initial Investment) / Initial Investment. This provides total return that reflects the complete investment benefit." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What costs should I include in ROI calculations?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Include all costs directly related to the investment: purchase price, transaction fees, management fees, taxes, and opportunity costs. For business investments, include implementation, training, and ongoing operational costs for accurate ROI assessment." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How does inflation affect ROI analysis?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Inflation reduces purchasing power of returns. Calculate real ROI by subtracting inflation rate from nominal ROI. For example, 8% nominal return with 3% inflation equals 5% real return in purchasing power terms." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Can ROI be negative, and what does it mean?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Yes, negative ROI indicates a loss where the investment value declined below the initial cost. This is normal for some periods but concerning for long-term investments. Consider whether losses are temporary market volatility or fundamental performance issues." })
              ] })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Important Information & Disclaimer" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator provides estimates only and should not be relied upon for final investment decisions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• ROI calculations may not include all relevant costs, taxes, or fees that affect actual returns." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Past performance and calculated ROI do not guarantee future investment results." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Consider risk factors, liquidity needs, and time horizon alongside ROI analysis." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Tax implications can significantly impact after-tax ROI and should be considered separately." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Market conditions and economic factors can affect actual investment performance." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Consult with qualified financial advisors for comprehensive investment analysis and planning." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• ROI analysis should be supplemented with other financial metrics and qualitative factors." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Results are estimates only and actual investment outcomes may vary significantly from calculations." })
          ] }) })
        ] })
      ] })
    }
  );
}
export {
  ROICalculator
};
