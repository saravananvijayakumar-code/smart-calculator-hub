import { n as createLucideIcon, ad as useFormatting, r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, T as TrendingUp, i as CardDescription, k as CardContent, a3 as Label, U as Input, a4 as Info } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { A as AIAnalysis } from "./AIAnalysis-DnR9Up6F.js";
import { E as EnhancedAIAnalysis } from "./EnhancedAIAnalysis-BZiQW2bt.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { A as AdsterraSlot } from "./AdsterraSlot--S6-7ysu.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
import "./tabs-BNSAX0su.js";
import "./brain-U3SZm3t9.js";
import "./loader-circle-BYW7QwsU.js";
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
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "12", x2: "12", y1: "20", y2: "10", key: "1vz5eb" }],
  ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "16", key: "hq0ia6" }]
];
const ChartNoAxesColumnIncreasing = createLucideIcon("chart-no-axes-column-increasing", __iconNode);
function InvestmentCalculator() {
  const { formatCurrency, getCurrencySymbol } = useFormatting();
  const [initialAmount, setInitialAmount] = reactExports.useState("");
  const [monthlyContribution, setMonthlyContribution] = reactExports.useState("");
  const [annualReturn, setAnnualReturn] = reactExports.useState("");
  const [years, setYears] = reactExports.useState("");
  const [riskTolerance, setRiskTolerance] = reactExports.useState("");
  const [investmentGoal, setInvestmentGoal] = reactExports.useState("");
  const [taxAdvantaged, setTaxAdvantaged] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const [assetAllocation, setAssetAllocation] = reactExports.useState({
    stocks: 70,
    bonds: 25,
    cash: 3,
    other: 2
  });
  const [riskScenarios, setRiskScenarios] = reactExports.useState([]);
  const calculateInvestment = () => {
    const principal = parseFloat(initialAmount) || 0;
    const monthly = parseFloat(monthlyContribution) || 0;
    const rate = parseFloat(annualReturn) / 100 || 0;
    const time = parseFloat(years) || 0;
    if (time <= 0 || rate < -1) {
      setResult(null);
      return;
    }
    const monthlyRate = rate / 12;
    const totalMonths = time * 12;
    let futureValue = principal;
    let totalContributions = principal;
    const monthlyValues = [];
    const months = [];
    let breakEvenMonth = 0;
    for (let month = 1; month <= totalMonths; month++) {
      futureValue = futureValue * (1 + monthlyRate) + monthly;
      totalContributions += monthly;
      if (breakEvenMonth === 0 && futureValue > totalContributions * 1.1) {
        breakEvenMonth = month;
      }
      if (month % 6 === 0 || month === totalMonths) {
        monthlyValues.push(futureValue);
        months.push(month);
      }
    }
    const totalGrowth = futureValue - totalContributions;
    const averageAnnualGrowth = totalContributions > 0 ? (Math.pow(futureValue / totalContributions, 1 / time) - 1) * 100 : 0;
    const totalReturn = totalContributions > 0 ? (futureValue - totalContributions) / totalContributions * 100 : 0;
    setResult({
      futureValue,
      totalContributions,
      totalGrowth,
      monthlyValue: monthlyValues,
      months,
      averageAnnualGrowth,
      totalReturn,
      breakEvenMonth,
      isValid: true
    });
    calculateRiskScenarios(principal, monthly, rate, time);
  };
  const calculateRiskScenarios = (principal, monthly, baseRate, time) => {
    const scenarios = [
      {
        name: "Conservative",
        expectedReturn: Math.max(0.01, baseRate - 0.03),
        futureValue: 0,
        description: "Lower risk, stable returns",
        probability: "90% confidence"
      },
      {
        name: "Moderate",
        expectedReturn: baseRate,
        futureValue: 0,
        description: "Balanced risk and return",
        probability: "70% confidence"
      },
      {
        name: "Aggressive",
        expectedReturn: baseRate + 0.03,
        futureValue: 0,
        description: "Higher risk, higher potential",
        probability: "50% confidence"
      },
      {
        name: "Bear Market",
        expectedReturn: Math.max(-0.1, baseRate - 0.06),
        futureValue: 0,
        description: "Market downturn scenario",
        probability: "20% confidence"
      }
    ];
    scenarios.forEach((scenario) => {
      const monthlyRate = scenario.expectedReturn / 12;
      let value = principal;
      for (let month = 1; month <= time * 12; month++) {
        value = value * (1 + monthlyRate) + monthly;
      }
      scenario.futureValue = value;
    });
    setRiskScenarios(scenarios);
  };
  const getRecommendedAllocation = () => {
    const age = 30;
    const stockPercentage = Math.min(90, Math.max(20, 100 - age));
    switch (riskTolerance) {
      case "conservative":
        return { stocks: 30, bonds: 60, cash: 8, other: 2 };
      case "moderate":
        return { stocks: 60, bonds: 30, cash: 5, other: 5 };
      case "aggressive":
        return { stocks: 85, bonds: 10, cash: 2, other: 3 };
      default:
        return { stocks: stockPercentage, bonds: 100 - stockPercentage - 10, cash: 5, other: 5 };
    }
  };
  reactExports.useEffect(() => {
    calculateInvestment();
  }, [initialAmount, monthlyContribution, annualReturn, years]);
  reactExports.useEffect(() => {
    if (riskTolerance) {
      setAssetAllocation(getRecommendedAllocation());
    }
  }, [riskTolerance]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Investment Calculator | Portfolio Growth & Return Calculator",
      description: "Comprehensive investment calculator with asset allocation, risk scenarios, and detailed growth projections. Plan your investment strategy with advanced portfolio analysis and optimization tools.",
      keywords: "investment calculator, portfolio calculator, asset allocation calculator, investment returns, portfolio growth, investment planning, financial calculator",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "top", className: "mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Investment Planning Calculator" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter your investment parameters to see comprehensive growth projections and analysis." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "initialAmount", children: [
                "Initial Investment (",
                getCurrencySymbol(),
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "initialAmount",
                  type: "number",
                  placeholder: "10000",
                  value: initialAmount,
                  onChange: (e) => setInitialAmount(e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "monthlyContribution", children: [
                "Monthly Contribution (",
                getCurrencySymbol(),
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "monthlyContribution",
                  type: "number",
                  placeholder: "500",
                  value: monthlyContribution,
                  onChange: (e) => setMonthlyContribution(e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "annualReturn", children: "Expected Annual Return (%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "annualReturn",
                  type: "number",
                  step: "0.1",
                  placeholder: "7",
                  value: annualReturn,
                  onChange: (e) => setAnnualReturn(e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "years", children: "Investment Period (Years)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "years",
                  type: "number",
                  placeholder: "20",
                  value: years,
                  onChange: (e) => setYears(e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "riskTolerance", children: "Risk Tolerance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: riskTolerance, onValueChange: setRiskTolerance, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select risk level" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "conservative", children: "Conservative (Low Risk)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "moderate", children: "Moderate (Balanced)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "aggressive", children: "Aggressive (High Risk)" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "investmentGoal", children: "Investment Goal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: investmentGoal, onValueChange: setInvestmentGoal, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select goal" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "retirement", children: "Retirement" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "education", children: "Education" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "house", children: "Home Purchase" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "wealth", children: "Wealth Building" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "income", children: "Income Generation" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "taxAdvantaged", children: "Account Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: taxAdvantaged, onValueChange: setTaxAdvantaged, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select account type" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "taxable", children: "Taxable Account" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "traditional_401k", children: "Traditional 401(k)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "roth_401k", children: "Roth 401(k)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "traditional_ira", children: "Traditional IRA" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "roth_ira", children: "Roth IRA" })
                ] })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-6" }),
        result && result.isValid && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIAnalysis,
            {
              analysisRequest: {
                calculatorType: "investment",
                data: {
                  initialInvestment: parseFloat(initialAmount) || 0,
                  monthlyContribution: parseFloat(monthlyContribution) || 0,
                  annualReturn: parseFloat(annualReturn) || 0,
                  years: parseFloat(years) || 0,
                  finalAmount: result.futureValue,
                  totalContributions: result.totalContributions,
                  totalReturn: result.totalGrowth
                }
              },
              autoRun: true,
              title: "AI Investment Analysis",
              description: "Get personalized investment insights and portfolio optimization strategies."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 bg-green-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg font-bold text-green-800", children: "Investment Projection Summary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-green-600", children: formatCurrency(result.futureValue) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-700", children: "Future Value" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600", children: formatCurrency(result.totalContributions) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total Invested" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-orange-600", children: formatCurrency(result.totalGrowth) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Investment Growth" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-purple-600", children: [
                    result.totalReturn.toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total Return" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-4 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Average Annual Growth:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "default", children: [
                    result.averageAnnualGrowth.toFixed(2),
                    "%"
                  ] })
                ] }),
                result.breakEvenMonth > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Break-even Point:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
                    Math.floor(result.breakEvenMonth / 12),
                    " years, ",
                    result.breakEvenMonth % 12,
                    " months"
                  ] })
                ] })
              ] }) })
            ] })
          ] }),
          riskScenarios.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumnIncreasing, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Risk Scenario Analysis" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: riskScenarios.map((scenario, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-center p-4 border rounded-lg ${scenario.name === "Bear Market" ? "border-red-200 bg-red-50" : scenario.name === "Conservative" ? "border-blue-200 bg-blue-50" : scenario.name === "Aggressive" ? "border-green-200 bg-green-50" : "border-gray-200"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm mb-2", children: scenario.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold", children: formatCurrency(scenario.futureValue) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                scenario.expectedReturn > 0 ? "+" : "",
                (scenario.expectedReturn * 100).toFixed(1),
                "% annual return"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 mt-1", children: scenario.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs mt-1", children: scenario.probability })
            ] }, index)) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumnIncreasing, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Recommended Asset Allocation" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-3", children: "Asset Mix:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Stocks:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-2 bg-gray-200 rounded", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "h-full bg-blue-600 rounded",
                          style: { width: `${assetAllocation.stocks}%` }
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                        assetAllocation.stocks,
                        "%"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Bonds:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-2 bg-gray-200 rounded", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "h-full bg-green-600 rounded",
                          style: { width: `${assetAllocation.bonds}%` }
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                        assetAllocation.bonds,
                        "%"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Cash:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-2 bg-gray-200 rounded", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "h-full bg-yellow-600 rounded",
                          style: { width: `${assetAllocation.cash * 4}%` }
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                        assetAllocation.cash,
                        "%"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Other:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-2 bg-gray-200 rounded", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "h-full bg-purple-600 rounded",
                          style: { width: `${assetAllocation.other * 8}%` }
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                        assetAllocation.other,
                        "%"
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-3", children: "Investment Strategy:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-2", children: [
                  riskTolerance === "conservative" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Focus on capital preservation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Higher bond allocation for stability" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Lower volatility, modest returns" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Suitable for near-term goals" })
                  ] }),
                  riskTolerance === "moderate" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Balanced growth and stability" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Diversified across asset classes" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Moderate volatility and returns" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Good for medium-term goals" })
                  ] }),
                  riskTolerance === "aggressive" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Maximum growth potential" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• High stock allocation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Higher volatility, higher returns" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Best for long-term goals" })
                  ] })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            EnhancedAIAnalysis,
            {
              calculatorType: "investment",
              data: {
                initialInvestment: parseFloat(initialAmount) || 0,
                monthlyContribution: parseFloat(monthlyContribution) || 0,
                annualReturn: parseFloat(annualReturn) || 0,
                years: parseInt(years) || 0,
                finalAmount: (result == null ? void 0 : result.futureValue) || 0,
                totalContributions: (result == null ? void 0 : result.totalContributions) || 0,
                totalReturn: (result == null ? void 0 : result.totalGrowth) || 0
              },
              userContext: {
                riskTolerance: riskTolerance === "conservative" ? "low" : riskTolerance === "moderate" ? "medium" : "high"
              },
              className: "mt-8"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "investment",
              inputs: {
                initialInvestment: parseFloat(initialAmount) || 0,
                monthlyContribution: parseFloat(monthlyContribution) || 0,
                expectedReturn: parseFloat(annualReturn) || 0,
                timeHorizon: parseInt(years) || 0,
                riskTolerance
              },
              results: result || {},
              title: "Investment Calculator Results",
              className: "mt-6"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Complete Guide to Investment Planning and Portfolio Management" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Investment planning represents one of the most critical aspects of long-term financial success, enabling individuals to build wealth, achieve financial goals, and secure their financial future. Understanding investment principles, risk management, asset allocation, and portfolio optimization is essential for making informed investment decisions. This comprehensive guide covers fundamental investment concepts, strategic planning approaches, and practical tools for building and managing successful investment portfolios." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Understanding Investment Fundamentals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Successful investing begins with understanding the relationship between risk and return, time horizon considerations, and the power of compound growth. Higher potential returns typically require accepting higher levels of risk and volatility, while longer investment horizons allow for greater risk tolerance and potential for wealth accumulation. The key is finding the optimal balance between growth potential and risk tolerance that aligns with your specific financial goals and circumstances." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Asset Classes and Investment Vehicles" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Different asset classes offer varying risk and return characteristics that form the foundation of portfolio construction. Stocks provide growth potential but with higher volatility, bonds offer stability and income with lower potential returns, cash equivalents provide liquidity and safety but minimal growth, and alternative investments like real estate and commodities offer diversification benefits. Understanding each asset class's role helps create balanced portfolios that meet specific investment objectives." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Asset Class Characteristics:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Stocks:" }),
                    " High growth potential, high volatility, long-term focus"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bonds:" }),
                    " Steady income, lower volatility, interest rate sensitivity"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cash:" }),
                    " High liquidity, low risk, minimal returns"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Real Estate:" }),
                    " Inflation hedge, income potential, illiquidity"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Commodities:" }),
                    " Inflation protection, high volatility, cyclical"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Portfolio Diversification Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Diversification represents the only "free lunch" in investing, allowing investors to reduce risk without sacrificing expected returns. Effective diversification spreads investments across different asset classes, geographic regions, industry sectors, and investment styles to minimize the impact of any single investment's poor performance. Modern portfolio theory demonstrates that proper diversification can significantly improve risk-adjusted returns over time, making it a cornerstone of successful investment strategy.` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Risk Tolerance and Time Horizon Planning" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Risk tolerance encompasses both financial capacity to absorb losses and emotional comfort with volatility. Younger investors with longer time horizons can typically accept higher risk for greater growth potential, while those nearing retirement may prioritize capital preservation. However, risk tolerance is highly individual and should consider factors including income stability, emergency funds, other financial obligations, and personal comfort with market fluctuations." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Dollar-Cost Averaging and Regular Investing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Dollar-cost averaging involves investing fixed amounts at regular intervals regardless of market conditions, providing several benefits including reduced timing risk, emotional discipline, and potentially lower average purchase costs. This strategy works particularly well for retirement account contributions and helps investors avoid the common mistake of trying to time market movements. Regular investing also builds wealth systematically and creates positive financial habits that contribute to long-term success." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Tax-Efficient Investment Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tax considerations significantly impact investment returns, making tax-efficient strategies essential for maximizing after-tax wealth. Tax-advantaged accounts like 401(k)s and IRAs provide immediate tax benefits or tax-free growth, while taxable account strategies include tax-loss harvesting, asset location optimization, and holding investments for favorable long-term capital gains treatment. Understanding the tax implications of different investment strategies helps optimize overall returns." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Investment Costs and Fee Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Investment costs compound negatively over time, making fee management crucial for long-term wealth building. High fees can reduce investment returns by 1-2% annually, which compounds to hundreds of thousands of dollars over decades. Low-cost index funds and ETFs often provide superior long-term results compared to actively managed alternatives, while fee-conscious investors should evaluate expense ratios, trading costs, and advisory fees when making investment decisions." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Advanced Investment Strategies and Portfolio Optimization" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Strategic vs. Tactical Asset Allocation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Strategic asset allocation establishes long-term target allocations based on investment goals and risk tolerance, while tactical allocation involves short-term adjustments based on market conditions or opportunities. Most successful investors rely primarily on strategic allocation with minimal tactical adjustments, avoiding the temptation to make frequent changes based on market predictions. Rebalancing back to target allocations systematically captures gains from outperforming assets while buying underperforming assets at lower prices." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Factor Investing and Smart Beta Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Factor investing targets specific characteristics like value, momentum, quality, or low volatility that historically provide risk-adjusted returns above market averages. Smart beta strategies combine these factors in systematic approaches that aim to improve upon traditional market-cap weighted indexing. While these strategies can enhance returns, they require understanding of factor premiums, implementation costs, and the patience to maintain exposure during periods of underperformance." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "International and Emerging Market Investing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Global diversification provides access to different economic cycles, growth opportunities, and currency exposure that can enhance portfolio returns and reduce risk. Developed international markets offer similar risk profiles to domestic markets with different economic drivers, while emerging markets provide higher growth potential with increased volatility and political risk. Currency hedging decisions and allocation percentages depend on risk tolerance and long-term investment objectives." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Portfolio Optimization Checklist:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Define clear investment goals and time horizons" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Assess risk tolerance honestly and realistically" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Diversify across asset classes, regions, and sectors" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Minimize costs through low-fee investment options" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Implement tax-efficient strategies for account types" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Rebalance systematically, not emotionally" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Stay disciplined during market volatility" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Review and adjust strategies as circumstances change" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Alternative Investments and Portfolio Enhancement" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Alternative investments including REITs, commodities, private equity, and hedge funds can provide portfolio diversification and potentially enhanced returns. However, these investments often come with higher fees, lower liquidity, and increased complexity that may not be suitable for all investors. For most individual investors, simple portfolios of stocks, bonds, and REITs through low-cost funds provide adequate diversification without the complications of complex alternative strategies." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Retirement-Focused Investment Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Retirement investing requires balancing growth during accumulation years with income and preservation during distribution years. Target-date funds provide age-appropriate asset allocation that automatically becomes more conservative over time, while custom strategies allow for personalized approaches based on specific circumstances. The transition from accumulation to distribution requires careful planning around withdrawal rates, Social Security optimization, and tax-efficient distribution strategies." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Behavioral Finance and Investment Psychology" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Behavioral biases represent the greatest threat to investment success, often causing investors to buy high during market euphoria and sell low during panic. Common biases include overconfidence, loss aversion, herding behavior, and recency bias that lead to poor timing decisions. Successful investors develop systems and processes that minimize emotional decision-making while maintaining discipline during both favorable and challenging market conditions." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Technology and Modern Portfolio Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Robo-advisors and digital platforms have democratized access to sophisticated portfolio management tools previously available only to wealthy investors. These platforms often provide automatic rebalancing, tax-loss harvesting, and low-cost diversified portfolios suitable for many investors. However, technology should complement rather than replace understanding of investment principles and the importance of maintaining long-term perspective and discipline." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "ESG and Sustainable Investing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Environmental, Social, and Governance (ESG) investing integrates sustainability factors into investment decisions while potentially maintaining competitive returns. ESG strategies range from negative screening that excludes certain industries to positive screening that favors companies with strong sustainability practices. While ESG investing continues evolving, research suggests that well-implemented sustainable strategies can provide competitive returns while aligning investments with personal values." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Frequently Asked Questions" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What's a realistic expected return for long-term investing?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Historical stock market returns average 7-10% annually before inflation, but conservative planning often uses 6-7% to account for fees and taxes. Bond returns are typically 2-5% annually. Your expected return should reflect your specific asset allocation and investment approach." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How much should I invest in stocks vs. bonds?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A common rule suggests holding your age in bonds (e.g., 30-year-old holds 30% bonds, 70% stocks), but this depends on risk tolerance, goals, and time horizon. Younger investors can typically hold more stocks for growth, while those near retirement may want more bonds for stability." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Should I invest in individual stocks or mutual funds?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Most investors benefit from diversified mutual funds or ETFs rather than individual stocks. Funds provide instant diversification, professional management, and lower risk than individual securities. Stock picking requires significant research, time, and expertise that most investors lack." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How often should I rebalance my portfolio?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Rebalancing annually or when allocations drift more than 5-10% from targets typically works well for most investors. More frequent rebalancing increases costs without significant benefits, while less frequent rebalancing may allow allocations to drift too far from targets." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What's the difference between active and passive investing?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Active investing involves trying to beat market returns through security selection and timing, while passive investing seeks to match market returns through index funds. Passive investing typically provides better long-term results due to lower costs and reduced behavioral errors." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How do I invest during market volatility?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Maintain your long-term strategy and avoid emotional reactions to short-term market movements. Continue regular contributions through dollar-cost averaging, and consider volatility as an opportunity to buy quality investments at lower prices. Market timing typically reduces rather than enhances returns." })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Investment returns are not guaranteed and actual performance may vary significantly from projections." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Past performance does not guarantee future results in any investment scenario." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Consider consulting with qualified financial advisors for personalized investment strategies." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Market volatility can cause actual returns to differ significantly from steady growth assumptions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Investment fees, taxes, and inflation can substantially impact actual returns over time." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Risk tolerance and investment suitability vary by individual circumstances and goals." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• All investments carry risk of loss, including potential loss of principal." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Results are estimates only and actual investment outcomes may vary significantly from calculations." })
          ] }) })
        ] })
      ] })
    }
  );
}
export {
  InvestmentCalculator
};
