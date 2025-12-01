import { r as reactExports, j as jsxRuntimeExports, S as SEOHead, f as Card, g as CardHeader, h as CardTitle, D as DollarSign, k as CardContent, B as Button, T as TrendingUp, aE as formatCurrency } from "./index-CK9G4vW7.js";
import { A as AppleStyleInput } from "./AppleStyleInput-QCKt9I4w.js";
import { A as AIAnalysis } from "./AIAnalysis-B-4zh-eH.js";
import { C as ChartColumn } from "./chart-column-DAuKFntu.js";
import { T as TrendingDown } from "./trending-down-Cff5hrMM.js";
import "./badge-6THgoC_4.js";
import "./tabs-t5L32f7o.js";
import "./brain-CSngUEN8.js";
import "./target-4JeIm6Yk.js";
import "./circle-check-big-B8N3lfE-.js";
function ProfitMarginCalculator() {
  const [revenue, setRevenue] = reactExports.useState("100000");
  const [cogs, setCogs] = reactExports.useState("40000");
  const [operatingExpenses, setOperatingExpenses] = reactExports.useState("30000");
  const [otherExpenses, setOtherExpenses] = reactExports.useState("5000");
  const [calculated, setCalculated] = reactExports.useState(false);
  const revenueNum = parseFloat(revenue) || 0;
  const cogsNum = parseFloat(cogs) || 0;
  const opExNum = parseFloat(operatingExpenses) || 0;
  const otherExNum = parseFloat(otherExpenses) || 0;
  const grossProfit = revenueNum - cogsNum;
  const grossMargin = revenueNum > 0 ? grossProfit / revenueNum * 100 : 0;
  const operatingProfit = grossProfit - opExNum;
  const operatingMargin = revenueNum > 0 ? operatingProfit / revenueNum * 100 : 0;
  const netProfit = operatingProfit - otherExNum;
  const netMargin = revenueNum > 0 ? netProfit / revenueNum * 100 : 0;
  const handleCalculate = () => {
    setCalculated(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Profit Margin Calculator - Calculate Gross, Operating & Net Margins",
        description: "Free profit margin calculator. Calculate gross margin, operating margin, and net profit margin for your business. Compare industry benchmarks and improve profitability.",
        keywords: "profit margin calculator, gross margin calculator, net margin calculator, operating margin, profit calculator, business profitability, margin analysis"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 p-4 md:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4", children: "Profit Margin Calculator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Analyze your business profitability with gross, operating, and net profit margins" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-blue-500 to-purple-600 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-6 w-6" }),
            "Business Financials"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AppleStyleInput,
              {
                label: "Total Revenue",
                type: "number",
                value: revenue,
                onChange: (e) => setRevenue(e.target.value),
                placeholder: "100000",
                prefix: "$"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AppleStyleInput,
              {
                label: "Cost of Goods Sold (COGS)",
                type: "number",
                value: cogs,
                onChange: (e) => setCogs(e.target.value),
                placeholder: "40000",
                prefix: "$"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AppleStyleInput,
              {
                label: "Operating Expenses",
                type: "number",
                value: operatingExpenses,
                onChange: (e) => setOperatingExpenses(e.target.value),
                placeholder: "30000",
                prefix: "$"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AppleStyleInput,
              {
                label: "Other Expenses (Interest, Taxes)",
                type: "number",
                value: otherExpenses,
                onChange: (e) => setOtherExpenses(e.target.value),
                placeholder: "5000",
                prefix: "$"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: handleCalculate,
                className: "w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-6 text-lg",
                children: "Calculate Profit Margins"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg border-2 border-blue-200 dark:border-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-green-500 to-emerald-600 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-6 w-6" }),
              "Gross Profit Margin"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-5xl font-bold text-green-600 dark:text-green-400 mb-2", children: [
                grossMargin.toFixed(2),
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-600 dark:text-gray-400 mb-4", children: [
                "Gross Profit: ",
                formatCurrency(grossProfit, "USD")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "bg-gradient-to-r from-green-500 to-emerald-600 h-full rounded-full transition-all duration-500",
                  style: { width: `${Math.min(grossMargin, 100)}%` }
                }
              ) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg border-2 border-purple-200 dark:border-purple-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-purple-500 to-pink-600 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-6 w-6" }),
              "Operating Profit Margin"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2", children: [
                operatingMargin.toFixed(2),
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-600 dark:text-gray-400 mb-4", children: [
                "Operating Profit: ",
                formatCurrency(operatingProfit, "USD")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "bg-gradient-to-r from-purple-500 to-pink-600 h-full rounded-full transition-all duration-500",
                  style: { width: `${Math.min(Math.max(operatingMargin, 0), 100)}%` }
                }
              ) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg border-2 border-blue-200 dark:border-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-blue-500 to-cyan-600 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              netProfit >= 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-6 w-6" }),
              "Net Profit Margin"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-5xl font-bold mb-2 ${netProfit >= 0 ? "text-blue-600 dark:text-blue-400" : "text-red-600 dark:text-red-400"}`, children: [
                netMargin.toFixed(2),
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-600 dark:text-gray-400 mb-4", children: [
                "Net Profit: ",
                formatCurrency(netProfit, "USD")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `${netProfit >= 0 ? "bg-gradient-to-r from-blue-500 to-cyan-600" : "bg-gradient-to-r from-red-500 to-pink-600"} h-full rounded-full transition-all duration-500`,
                  style: { width: `${Math.min(Math.max(netMargin, 0), 100)}%` }
                }
              ) })
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Revenue Breakdown Waterfall" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-950 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Revenue" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-blue-600", children: formatCurrency(revenueNum, "USD") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-red-50 dark:bg-red-950 rounded-lg border-l-4 border-red-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "- COGS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl font-bold text-red-600", children: [
              "-",
              formatCurrency(cogsNum, "USD")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-green-50 dark:bg-green-950 rounded-lg border-l-4 border-green-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              "= Gross Profit (",
              grossMargin.toFixed(1),
              "%)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-green-600", children: formatCurrency(grossProfit, "USD") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-red-50 dark:bg-red-950 rounded-lg border-l-4 border-red-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "- Operating Expenses" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl font-bold text-red-600", children: [
              "-",
              formatCurrency(opExNum, "USD")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border-l-4 border-purple-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              "= Operating Profit (",
              operatingMargin.toFixed(1),
              "%)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-purple-600", children: formatCurrency(operatingProfit, "USD") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-red-50 dark:bg-red-950 rounded-lg border-l-4 border-red-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "- Other Expenses" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl font-bold text-red-600", children: [
              "-",
              formatCurrency(otherExNum, "USD")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between p-4 rounded-lg border-l-4 ${netProfit >= 0 ? "bg-blue-50 dark:bg-blue-950 border-blue-500" : "bg-red-50 dark:bg-red-950 border-red-500"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              "= Net Profit (",
              netMargin.toFixed(1),
              "%)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xl font-bold ${netProfit >= 0 ? "text-blue-600" : "text-red-600"}`, children: formatCurrency(netProfit, "USD") })
          ] })
        ] }) })
      ] }),
      calculated && /* @__PURE__ */ jsxRuntimeExports.jsx(
        AIAnalysis,
        {
          analysisRequest: {
            calculatorType: "profit_margin",
            data: {
              revenue: revenueNum,
              cogs: cogsNum,
              operatingExpenses: opExNum,
              otherExpenses: otherExNum,
              grossMargin,
              operatingMargin,
              netMargin,
              grossProfit,
              operatingProfit,
              netProfit
            }
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none dark:prose-invert mt-12 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Understanding Profit Margins" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: "Profit margins are critical financial metrics that measure how much profit a business generates from its revenue. They are expressed as percentages and provide insights into operational efficiency, pricing strategy, and overall financial health. Understanding your profit margins helps you make informed decisions about cost control, pricing adjustments, and business strategy." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: [
            "There are three primary types of profit margins: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Gross Profit Margin" }),
            ", ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Operating Profit Margin" }),
            ", and ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Net Profit Margin" }),
            ". Each margin reveals different aspects of your business performance, from production efficiency to overall profitability after all expenses."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Types of Profit Margins" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "Gross Profit Margin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Definition:" }),
            " Gross profit margin measures the percentage of revenue remaining after deducting the Cost of Goods Sold (COGS). It reflects how efficiently a company produces or sources its products."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Formula:" }),
            " Gross Profit Margin = ((Revenue - COGS) / Revenue) × 100"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "What it Measures:" }),
            " This margin indicates how well you control production costs and pricing. A higher gross margin means you're retaining more money from each sale to cover operating expenses and generate profit."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-6 rounded-lg mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "Industry Benchmarks for Gross Margin:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Software/SaaS:" }),
                " 70-90% (low COGS, high scalability)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Consulting:" }),
                " 50-70% (mainly labor costs)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Retail:" }),
                " 25-50% (varies by product category)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Restaurant:" }),
                " 60-70% (food costs are primary COGS)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Manufacturing:" }),
                " 20-40% (high material and labor costs)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Construction:" }),
                " 15-25% (materials and labor intensive)"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "Operating Profit Margin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Definition:" }),
            " Operating profit margin (also called EBIT margin) measures the percentage of revenue left after deducting both COGS and operating expenses like salaries, rent, utilities, and marketing."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Formula:" }),
            " Operating Profit Margin = ((Revenue - COGS - Operating Expenses) / Revenue) × 100"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "What it Measures:" }),
            " This margin reveals how efficiently your business operates day-to-day, excluding financing and tax considerations. It shows your core business profitability."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 dark:bg-purple-950 border-l-4 border-purple-500 p-6 rounded-lg mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "Industry Benchmarks for Operating Margin:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Software/SaaS:" }),
                " 10-25% (high margins after R&D)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Consulting:" }),
                " 15-25% (moderate overhead)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Retail:" }),
                " 5-10% (thin margins, high competition)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Restaurant:" }),
                " 5-10% (high labor and rent costs)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Manufacturing:" }),
                " 8-15% (moderate overhead)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Construction:" }),
                " 3-8% (competitive industry)"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "Net Profit Margin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Definition:" }),
            " Net profit margin is the ultimate measure of profitability, showing what percentage of revenue remains as actual profit after all expenses, including interest and taxes."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Formula:" }),
            " Net Profit Margin = ((Revenue - All Expenses) / Revenue) × 100"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "What it Measures:" }),
            " This is the bottom line - how much profit you actually keep from each dollar of revenue. It accounts for everything: production costs, operations, interest payments, and taxes."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950 border-l-4 border-green-500 p-6 rounded-lg mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "Industry Benchmarks for Net Margin:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Software/SaaS:" }),
                " 15-25% (high profitability)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Consulting:" }),
                " 10-20% (good margins)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Retail:" }),
                " 2-6% (competitive, thin margins)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Restaurant:" }),
                " 3-6% (challenging industry)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Manufacturing:" }),
                " 5-10% (moderate profitability)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Construction:" }),
                " 2-5% (project-based, risky)"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Strategies to Improve Profit Margins" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "Increase Revenue Per Transaction" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Upselling:" }),
              " Encourage customers to purchase higher-tier products or services with better margins"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bundling:" }),
              " Combine products/services to increase average transaction value and perceived value"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Premium Tiers:" }),
              " Introduce premium offerings that justify higher prices and margins"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Value-Based Pricing:" }),
              " Price based on customer value received rather than cost-plus pricing"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "Reduce Cost of Goods Sold (COGS)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Supplier Negotiation:" }),
              " Negotiate better rates with suppliers, especially for bulk purchases or long-term contracts"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bulk Buying:" }),
              " Purchase materials in larger quantities to reduce per-unit costs"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Waste Reduction:" }),
              " Implement lean manufacturing or inventory management to minimize waste and spoilage"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Automation:" }),
              " Invest in technology to reduce labor costs and improve production efficiency"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Alternative Suppliers:" }),
              " Research and test alternative suppliers who offer better pricing without sacrificing quality"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "Cut Operating Expenses" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Process Automation:" }),
              " Use software and technology to automate repetitive tasks and reduce labor costs"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Renegotiate Contracts:" }),
              " Review and renegotiate contracts for rent, insurance, utilities, and services annually"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Optimize Staffing:" }),
              " Right-size your workforce and consider outsourcing non-core functions"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Energy Efficiency:" }),
              " Invest in energy-efficient equipment and practices to reduce utility costs"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Remote Work:" }),
              " Consider remote or hybrid work models to reduce office space costs"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "Optimize Pricing Strategy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Competitor Analysis:" }),
              " Regularly analyze competitor pricing to ensure you're competitive yet profitable"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Psychological Pricing:" }),
              " Use pricing tactics like $9.99 instead of $10.00 to increase perceived value"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tiered Pricing:" }),
              " Offer multiple pricing tiers to capture different customer segments and maximize revenue"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Dynamic Pricing:" }),
              " Adjust prices based on demand, seasonality, or inventory levels to optimize margins"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Regular Price Reviews:" }),
              " Review and adjust prices annually to account for cost increases and market changes"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Common Profit Margin Mistakes to Avoid" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-red-800 dark:text-red-200 mb-2", children: "1. Competing on Price Alone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Racing to the bottom on price erodes margins and creates a race you can't win. Instead, focus on value differentiation, superior customer service, unique features, or brand positioning. Customers will pay premium prices for perceived value and quality." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-red-800 dark:text-red-200 mb-2", children: "2. Ignoring Hidden Costs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: 'Many businesses fail to account for indirect costs like credit card processing fees, shipping, returns, warranty claims, customer support, and administrative overhead. These "hidden" costs can significantly impact net margins if not properly tracked and priced into your offerings.' })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-red-800 dark:text-red-200 mb-2", children: "3. Not Tracking Margins by Product/Service" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Looking only at overall margins masks the truth: some products/services are highly profitable while others lose money. Track margins by individual SKU, service line, or product category to identify winners and losers. Discontinue or re-price unprofitable offerings." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-red-800 dark:text-red-200 mb-2", children: "4. Underpricing New Products" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "It's much harder to raise prices later than to start high and offer strategic discounts. New products should be priced at perceived value, not just cost-plus. You can always discount or run promotions, but raising prices after launch often alienates early customers." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-red-800 dark:text-red-200 mb-2", children: "5. Focusing Only on Gross Margin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "A high gross margin is useless if operating expenses consume it all. Always analyze all three margins together. A business with 70% gross margin but 15% net margin has significant operating inefficiencies to address." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-red-800 dark:text-red-200 mb-2", children: "6. Not Reviewing Margins Regularly" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Costs change, competition evolves, and customer preferences shift. Review profit margins monthly or quarterly. Set margin targets and create alerts when margins fall below thresholds. Regular reviews enable proactive adjustments before margins deteriorate significantly." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Margin vs Markup: Understanding the Difference" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: [
            "Many business owners confuse ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "margin" }),
            " and ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "markup" }),
            ", but they are fundamentally different concepts:"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-6 rounded-lg mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Markup" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Definition:" }),
              " Markup is the percentage added to the cost to determine the selling price."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Formula:" }),
              " Markup % = ((Selling Price - Cost) / Cost) × 100"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
              " If an item costs $50 and you sell it for $75, the markup is ($75 - $50) / $50 = 50%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950 border-l-4 border-green-500 p-6 rounded-lg mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: "Margin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Definition:" }),
              " Margin is the percentage of the selling price that is profit."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Formula:" }),
              " Margin % = ((Selling Price - Cost) / Selling Price) × 100"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
              " If an item costs $50 and you sell it for $75, the margin is ($75 - $50) / $75 = 33.3%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Key Difference:" }),
            " Markup is based on cost, while margin is based on selling price. A 50% markup equals a 33.3% margin. Understanding this difference is crucial for pricing strategy and profitability analysis."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-100 dark:bg-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 border-b text-left", children: "Cost" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 border-b text-left", children: "Selling Price" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 border-b text-left", children: "Markup %" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 border-b text-left", children: "Margin %" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "$50" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "$75" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-semibold", children: "50%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-semibold", children: "33.3%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "$50" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "$100" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-semibold", children: "100%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-semibold", children: "50%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "$50" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: "$150" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-semibold", children: "200%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-semibold", children: "66.7%" })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Using Margins for Business Decisions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "Product Profitability Analysis" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "Calculate margins for each product or service to identify your most and least profitable offerings. Focus marketing and sales efforts on high-margin products. Consider discontinuing or re-pricing low-margin items unless they serve a strategic purpose (loss leaders, customer acquisition)." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "Pricing Decisions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "Use margin analysis to set minimum acceptable prices and evaluate discount strategies. For example, if your net margin is 10%, a 20% discount eliminates all profit. Understand your margin structure before offering promotions or volume discounts." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "Cost Control Priorities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "If gross margin is strong but net margin is weak, focus on reducing operating expenses. If gross margin is weak, prioritize reducing COGS or increasing prices. Margin breakdowns reveal exactly where to focus cost-cutting efforts for maximum impact." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3", children: "Growth vs Profitability Trade-offs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "Many businesses sacrifice margins for growth, especially startups. This can be strategic (market share grab, economies of scale), but set clear milestones for margin improvement. Understand when to prioritize growth and when to optimize for profitability based on business lifecycle and market conditions." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Frequently Asked Questions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-semibold text-lg cursor-pointer text-gray-900 dark:text-white", children: "What is a good profit margin?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-700 dark:text-gray-300", children: 'A "good" profit margin varies significantly by industry. Software companies might achieve 20%+ net margins, while grocery stores operate on 2-3% net margins. Compare your margins to industry benchmarks rather than absolute numbers. Generally, net margins above 10% are considered healthy for most businesses, 5-10% is average, and below 5% indicates potential profitability challenges.' })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-semibold text-lg cursor-pointer text-gray-900 dark:text-white", children: "How often should I calculate profit margins?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-700 dark:text-gray-300", children: "Calculate and review profit margins monthly at minimum, weekly for fast-moving businesses. Real-time margin tracking through accounting software is ideal. Regular monitoring allows you to identify trends, respond to cost increases quickly, and make informed pricing decisions. Set up automated dashboards to track margins continuously without manual calculation." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-semibold text-lg cursor-pointer text-gray-900 dark:text-white", children: "Why is my gross margin high but net margin low?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-700 dark:text-gray-300", children: "This indicates high operating expenses relative to gross profit. Common causes include excessive overhead (rent, salaries, marketing), inefficient operations, or high interest/tax burdens. Focus on reducing operating expenses through automation, process improvement, or renegotiating contracts. Alternatively, increase revenue without proportionally increasing expenses to improve net margin." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-semibold text-lg cursor-pointer text-gray-900 dark:text-white", children: "What's the difference between markup and margin?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-700 dark:text-gray-300", children: "Markup is the percentage added to cost to determine selling price (based on cost). Margin is the percentage of selling price that is profit (based on revenue). A 50% markup results in a 33.3% margin. For example, a $50 item sold for $75 has a 50% markup ($25/$50) but a 33.3% margin ($25/$75). Margin is generally more useful for financial analysis since it relates profit to sales revenue." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-semibold text-lg cursor-pointer text-gray-900 dark:text-white", children: "Can profit margins be negative?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-700 dark:text-gray-300", children: "Yes, negative profit margins occur when expenses exceed revenue, resulting in a net loss. This is common for startups investing heavily in growth, seasonal businesses during off-seasons, or struggling companies. While temporarily acceptable in strategic situations (market entry, rapid expansion), sustained negative margins are unsustainable and require immediate corrective action through cost reduction or revenue growth." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-semibold text-lg cursor-pointer text-gray-900 dark:text-white", children: "How do I improve low profit margins?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-700 dark:text-gray-300", children: "Four primary strategies: (1) Increase prices through value-based pricing and better positioning, (2) Reduce COGS through supplier negotiation and waste reduction, (3) Cut operating expenses via automation and efficiency improvements, (4) Increase volume to spread fixed costs across more units. Start with the easiest wins: often pricing adjustments and supplier renegotiation yield quick improvements. Then tackle operational efficiency for sustainable long-term margin growth." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-semibold text-lg cursor-pointer text-gray-900 dark:text-white", children: "Should I focus on increasing revenue or cutting costs?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-700 dark:text-gray-300", children: "Both matter, but the right focus depends on your situation. If margins are healthy (10%+), focus on revenue growth for faster business expansion. If margins are thin (5% or less), prioritize cost reduction to ensure profitability before scaling. The ideal approach combines both: grow revenue while continuously optimizing costs. Many businesses find the fastest path to better margins is strategic price increases (3-5% annually) combined with targeted cost control in high-expense categories." })
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ProfitMarginCalculator,
  ProfitMarginCalculator as default
};
