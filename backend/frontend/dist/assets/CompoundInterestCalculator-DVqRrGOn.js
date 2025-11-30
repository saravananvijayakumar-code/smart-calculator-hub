import { aC as useTranslation, ad as useFormatting, r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, T as TrendingUp, k as CardContent, a3 as Label, U as Input, a4 as Info } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { A as AIAnalysis } from "./AIAnalysis-DnR9Up6F.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { A as AdsterraSlot } from "./AdsterraSlot--S6-7ysu.js";
import { C as ChartColumn } from "./chart-column-CAGIVosk.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
import "./EnhancedAIAnalysis-BZiQW2bt.js";
import "./loader-circle-BYW7QwsU.js";
import "./brain-U3SZm3t9.js";
import "./target-1ApqtYDG.js";
import "./circle-check-big-BoxGYPKG.js";
import "./arrow-right-CtOKJdMG.js";
import "./lightbulb-doNczJxC.js";
import "./tabs-BNSAX0su.js";
import "./share-2-ViScha7M.js";
import "./link-DxXhzsoi.js";
import "./copy-DGMuG98H.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./linkedin-BSJyfSWT.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
function CompoundInterestCalculator() {
  const { t } = useTranslation();
  const { formatCurrency, getCurrencySymbol } = useFormatting();
  const [principal, setPrincipal] = reactExports.useState("");
  const [rate, setRate] = reactExports.useState("");
  const [time, setTime] = reactExports.useState("");
  const [frequency, setFrequency] = reactExports.useState("12");
  const [monthlyContribution, setMonthlyContribution] = reactExports.useState("");
  const [contributionTiming, setContributionTiming] = reactExports.useState("end");
  const [result, setResult] = reactExports.useState({
    finalAmount: 0,
    totalInterest: 0,
    totalContributions: 0,
    isValid: false,
    yearByYearBreakdown: [],
    effectiveAnnualRate: 0
  });
  const [comparisonScenarios, setComparisonScenarios] = reactExports.useState([]);
  const calculateCompoundInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t2 = parseFloat(time);
    const n = parseFloat(frequency);
    const pmt = parseFloat(monthlyContribution) || 0;
    if (p > 0 && r >= 0 && t2 > 0 && n > 0) {
      const monthlyRate = r / 100 / 12;
      let balance = p;
      let totalContributionsSum = p;
      const yearlyBreakdown = [];
      for (let year = 1; year <= t2; year++) {
        const startingBalance = balance;
        let yearContributions = 0;
        let yearInterest = 0;
        for (let month = 1; month <= 12; month++) {
          if (contributionTiming === "beginning" && pmt > 0) {
            balance += pmt;
            yearContributions += pmt;
            totalContributionsSum += pmt;
          }
          const monthlyInterest = balance * monthlyRate;
          balance += monthlyInterest;
          yearInterest += monthlyInterest;
          if (contributionTiming === "end" && pmt > 0) {
            balance += pmt;
            yearContributions += pmt;
            totalContributionsSum += pmt;
          }
        }
        yearlyBreakdown.push({
          year,
          startingBalance,
          contributions: yearContributions,
          interestEarned: yearInterest,
          endingBalance: balance
        });
      }
      const finalAmount = balance;
      const totalInterest = finalAmount - totalContributionsSum;
      const effectiveAnnualRate = totalContributionsSum > 0 ? (Math.pow(finalAmount / totalContributionsSum, 1 / t2) - 1) * 100 : 0;
      setResult({
        finalAmount,
        totalInterest,
        totalContributions: totalContributionsSum,
        isValid: true,
        yearByYearBreakdown: yearlyBreakdown,
        effectiveAnnualRate
      });
      calculateComparisonScenarios(p, r, t2, n, pmt);
    } else {
      setResult({
        finalAmount: 0,
        totalInterest: 0,
        totalContributions: 0,
        isValid: false,
        yearByYearBreakdown: [],
        effectiveAnnualRate: 0
      });
      setComparisonScenarios([]);
    }
  };
  const calculateComparisonScenarios = (p, r, t2, n, pmt) => {
    const scenarios = [];
    if (pmt > 0) {
      const simpleCompound = p * Math.pow(1 + r / 100 / n, n * t2);
      scenarios.push({
        name: "Principal Only",
        finalAmount: simpleCompound,
        totalInterest: simpleCompound - p,
        description: "No monthly contributions"
      });
    }
    if (r > 1) {
      const lowerRate = Math.max(1, r - 2);
      const lowerRateResult = calculateScenario(p, lowerRate, t2, n, pmt);
      scenarios.push({
        name: `${lowerRate}% Rate`,
        finalAmount: lowerRateResult.final,
        totalInterest: lowerRateResult.interest,
        description: "2% lower interest rate"
      });
    }
    const higherRate = r + 2;
    const higherRateResult = calculateScenario(p, higherRate, t2, n, pmt);
    scenarios.push({
      name: `${higherRate}% Rate`,
      finalAmount: higherRateResult.final,
      totalInterest: higherRateResult.interest,
      description: "2% higher interest rate"
    });
    if (t2 < 20) {
      const doubleTimeResult = calculateScenario(p, r, t2 * 2, n, pmt);
      scenarios.push({
        name: `${t2 * 2} Years`,
        finalAmount: doubleTimeResult.final,
        totalInterest: doubleTimeResult.interest,
        description: "Double the time period"
      });
    }
    setComparisonScenarios(scenarios);
  };
  const calculateScenario = (p, r, t2, n, pmt) => {
    const monthlyRate = r / 100 / 12;
    let balance = p;
    let totalContributions = p;
    for (let month = 1; month <= t2 * 12; month++) {
      if (contributionTiming === "beginning" && pmt > 0) {
        balance += pmt;
        totalContributions += pmt;
      }
      balance += balance * monthlyRate;
      if (contributionTiming === "end" && pmt > 0) {
        balance += pmt;
        totalContributions += pmt;
      }
    }
    return {
      final: balance,
      interest: balance - totalContributions
    };
  };
  reactExports.useEffect(() => {
    calculateCompoundInterest();
  }, [principal, rate, time, frequency, monthlyContribution, contributionTiming]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Compound Interest Calculator | Investment Growth & Savings Calculator",
      description: "Calculate compound interest with regular contributions, different compounding frequencies, and detailed year-by-year breakdowns. See the power of compounding over time with comprehensive scenarios.",
      keywords: "compound interest calculator, investment calculator, savings growth calculator, compounding frequency, investment returns, financial calculator",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "top", className: "mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Compound Interest Calculator" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "principal", children: [
                "Initial Investment (",
                getCurrencySymbol(),
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "principal",
                  type: "number",
                  value: principal,
                  onChange: (e) => setPrincipal(e.target.value),
                  placeholder: "10000"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "rate", children: "Annual Interest Rate (%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "rate",
                  type: "number",
                  value: rate,
                  onChange: (e) => setRate(e.target.value),
                  placeholder: "7",
                  step: "0.1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "time", children: "Time Period (Years)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "time",
                  type: "number",
                  value: time,
                  onChange: (e) => setTime(e.target.value),
                  placeholder: "20"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "frequency", children: "Compounding Frequency" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: frequency, onValueChange: setFrequency, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select frequency" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "1", children: "Annually" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "2", children: "Semi-annually" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "4", children: "Quarterly" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "12", children: "Monthly" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "365", children: "Daily" })
                ] })
              ] })
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
                  value: monthlyContribution,
                  onChange: (e) => setMonthlyContribution(e.target.value),
                  placeholder: "500"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contributionTiming", children: "Contribution Timing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: contributionTiming, onValueChange: setContributionTiming, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select timing" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "beginning", children: "Beginning of Month" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "end", children: "End of Month" })
                ] })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-6" }),
        result.isValid && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIAnalysis,
            {
              analysisRequest: {
                calculatorType: "compound-interest",
                data: {
                  initialInvestment: parseFloat(principal) || 0,
                  monthlyContribution: parseFloat(monthlyContribution) || 0,
                  annualReturn: parseFloat(rate) || 0,
                  years: parseFloat(time) || 0,
                  finalAmount: result.finalAmount,
                  totalContributions: result.totalContributions,
                  totalReturn: result.totalInterest
                }
              },
              autoRun: true,
              title: "AI Compound Interest Analysis",
              description: "Get personalized investment insights and optimization strategies for your compound interest calculations."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "compound-interest",
              inputs: {
                principal: parseFloat(principal) || 0,
                rate: parseFloat(rate) || 0,
                time: parseFloat(time) || 0,
                monthlyContribution: parseFloat(monthlyContribution) || 0,
                compoundingFrequency: frequency
              },
              results: {
                finalAmount: result.finalAmount,
                totalInterest: result.totalInterest,
                totalContributions: result.totalContributions
              },
              title: "Compound Interest Calculator Report"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 bg-green-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg font-bold text-green-800", children: "Investment Growth Summary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-green-600", children: formatCurrency(result.finalAmount) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-700", children: "Final Amount" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600", children: formatCurrency(result.totalContributions) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total Contributions" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-orange-600", children: formatCurrency(result.totalInterest) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Interest Earned" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-purple-600", children: [
                    result.effectiveAnnualRate.toFixed(2),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Effective Annual Return" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-4 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Interest to Contributions Ratio:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "default", children: [
                  (result.totalInterest / result.totalContributions * 100).toFixed(1),
                  "%"
                ] })
              ] }) })
            ] })
          ] }),
          comparisonScenarios.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Scenario Comparisons" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: comparisonScenarios.map((scenario, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 border rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm mb-2", children: scenario.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-blue-600", children: formatCurrency(scenario.finalAmount) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: scenario.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-green-600 mt-1", children: [
                "Interest: ",
                formatCurrency(scenario.totalInterest)
              ] })
            ] }, index)) }) })
          ] }),
          result.yearByYearBreakdown.length > 0 && result.yearByYearBreakdown.length <= 30 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Year-by-Year Growth Breakdown" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-2", children: "Year" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-2", children: "Starting Balance" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-2", children: "Contributions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-2", children: "Interest Earned" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-2", children: "Ending Balance" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: result.yearByYearBreakdown.map((year) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b hover:bg-gray-50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 font-medium", children: year.year }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right", children: formatCurrency(year.startingBalance) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right text-blue-600", children: formatCurrency(year.contributions) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right text-green-600", children: formatCurrency(year.interestEarned) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right font-semibold", children: formatCurrency(year.endingBalance) })
              ] }, year.year)) })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Complete Guide to Compound Interest and Investment Growth" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Compound interest represents one of the most powerful forces in personal finance, often called the "eighth wonder of the world" by Albert Einstein. Understanding how compound interest works and leveraging its power effectively can transform your financial future, turning modest savings into substantial wealth over time. This comprehensive guide explores the mechanics of compound interest, optimal strategies for maximizing its benefits, and real-world applications across different investment scenarios.' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Understanding the Compound Interest Formula" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Compound interest differs fundamentally from simple interest by earning returns not only on your initial principal but also on previously earned interest. The compound interest formula A = P(1 + r/n)^(nt) reveals how time, interest rate, and compounding frequency work together to generate exponential growth. Each variable plays a crucial role: principal (P) provides the foundation, interest rate (r) determines growth speed, compounding frequency (n) affects acceleration, and time (t) creates the exponential effect that makes compound interest so powerful." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "The Time Factor: Why Starting Early Matters" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Time represents the most critical factor in compound interest calculations, with even small delays in starting dramatically reducing final outcomes. A 25-year-old investing $200 monthly at 7% annual return will accumulate approximately $1.37 million by age 65, while a 35-year-old making identical contributions will reach only $610,000. This $760,000 difference demonstrates why financial advisors emphasize starting investments as early as possible, even with modest amounts that can be increased over time." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "The Power of Starting Early Example:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Person A:" }),
                    " Invests $2,000/year from age 25-35 (10 years, $20,000 total)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Person B:" }),
                    " Invests $2,000/year from age 35-65 (30 years, $60,000 total)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "At 7% annual return:" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Person A at 65:" }),
                    " $314,000 (despite stopping at 35)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Person B at 65:" }),
                    " $245,000 (despite investing 3x longer)"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Compounding Frequency and Its Impact" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The frequency of compounding affects investment growth, though the impact is often less dramatic than investors expect. Daily compounding versus annual compounding on a 7% investment typically improves returns by less than 0.1% annually. However, this small difference compounds over time, and many modern investment accounts offer daily compounding at no additional cost. More importantly, the psychological benefit of seeing more frequent growth can encourage continued investing and better financial behaviors." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Regular Contributions and Dollar-Cost Averaging" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Regular monthly contributions can dramatically enhance compound interest outcomes while providing the benefits of dollar-cost averaging. Instead of trying to time market entry points, consistent investing smooths out market volatility by purchasing more shares when prices are low and fewer when prices are high. This strategy reduces average cost per share over time while building the habit of systematic investing that leads to long-term wealth accumulation." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Interest Rate Sensitivity and Risk Considerations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Small differences in interest rates create large differences in final outcomes over long periods, making rate selection crucial for long-term investors. A 2% difference in annual returns (5% vs. 7%) on $500 monthly contributions over 30 years results in approximately $400,000 difference in final value. This sensitivity explains why investors often accept higher risk for potentially higher returns, though the relationship between risk and return must be carefully balanced based on individual circumstances and risk tolerance." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Tax-Advantaged Compound Interest Accounts" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tax-advantaged accounts like 401(k)s, IRAs, and Roth IRAs can significantly enhance compound interest outcomes by eliminating or deferring taxes on investment growth. Traditional retirement accounts defer taxes until withdrawal, allowing the full investment amount to compound without annual tax drag. Roth accounts use after-tax contributions but provide tax-free growth and withdrawals, making them particularly valuable for young investors who expect to be in higher tax brackets during retirement." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Inflation's Impact on Real Returns" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `While compound interest calculations often use nominal returns, investors must consider inflation's erosive effect on purchasing power. A 7% nominal return with 3% inflation provides only 4% real return in terms of purchasing power. Long-term financial planning should focus on real returns and consider assets that historically outpace inflation, such as stocks and real estate, rather than low-yield "safe" investments that may lose purchasing power over time despite positive nominal returns.` })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Advanced Compound Interest Strategies and Applications" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Contribution Timing and Optimization" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The timing of contributions within each month or year can impact compound interest outcomes, though the difference is often modest. Contributing at the beginning of each period allows that money to earn returns for the full period, while end-of-period contributions miss some growth opportunity. For monthly contributions, beginning-of-month timing typically adds 0.3-0.5% to annual returns. However, the most important factor remains consistency rather than perfect timing." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Reinvestment Strategies and Dividend Compounding" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Dividend reinvestment plans (DRIPs) harness compound interest by automatically purchasing additional shares with dividend payments, often without transaction fees. This strategy ensures that all returns immediately begin generating their own returns, maximizing the compounding effect. Many investors underestimate dividend compounding's impact, but reinvested dividends have historically provided 40-50% of stock market total returns over long periods." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Debt and Negative Compounding" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Compound interest works against borrowers just as powerfully as it works for investors, making high-interest debt elimination a priority before aggressive investing. Credit card debt at 18% APR compounding monthly creates negative wealth at a rate that few investments can overcome. The mathematical principle suggests paying off debt with interest rates above expected investment returns before increasing investment contributions, creating a guaranteed "return" equal to the debt's interest rate.` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Compound Interest Optimization Strategies:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Start investing as early as possible, even with small amounts" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Maximize contributions to tax-advantaged retirement accounts" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Reinvest all dividends and interest payments automatically" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Eliminate high-interest debt before aggressive investing" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider increasing contributions with salary raises" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Choose low-cost investment options to maximize net returns" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Stay invested during market volatility to capture long-term growth" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Asset Allocation and Compound Interest" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Different asset classes provide varying compound interest potential, with stocks historically offering higher long-term returns than bonds or cash equivalents. However, higher returns come with increased volatility that can disrupt compounding if investors panic during market downturns. Age-appropriate asset allocation balances growth potential with stability, typically favoring stocks for young investors with long time horizons and gradually shifting toward more conservative allocations as retirement approaches." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "International Diversification and Currency Compounding" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Global diversification can enhance compound interest outcomes by accessing different economic cycles and growth opportunities worldwide. However, currency fluctuations add complexity to international compound interest calculations, potentially enhancing or reducing returns for domestic investors. Many investors achieve international exposure through domestic mutual funds or ETFs that handle currency management professionally while maintaining the benefits of global diversification." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Technology and Automated Compound Interest" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Modern technology enables sophisticated compound interest strategies through robo-advisors, automatic rebalancing, and micro-investing platforms that invest spare change from purchases. These tools remove behavioral barriers to consistent investing while optimizing factors like tax-loss harvesting and asset allocation that enhance compound returns. However, technology should supplement rather than replace understanding of compound interest principles and long-term investment strategies." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Behavioral Factors in Compound Interest Success" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The greatest threat to compound interest success is often investor behavior rather than market performance. Emotional responses to market volatility, the temptation to time markets, and lifestyle inflation that reduces contribution capacity can all undermine long-term compounding. Successful compound interest investors develop systems and habits that automate good decisions while minimizing opportunities for emotional interference with their long-term strategies." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Estate Planning and Multi-Generational Compounding" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Compound interest strategies can extend beyond individual lifetimes through estate planning techniques that benefit multiple generations. Trust structures, education funding accounts, and strategic gift-giving can create multi-generational wealth-building that harnesses decades of compound growth. These strategies require professional guidance but can create lasting financial legacies that benefit families for generations while teaching valuable lessons about long-term financial planning." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Frequently Asked Questions" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What's the difference between compound and simple interest?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Simple interest only earns returns on the original principal, while compound interest earns returns on both principal and previously earned interest. Over time, this difference becomes substantial - $10,000 at 7% for 20 years yields $24,000 with simple interest but $38,697 with compound interest." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How often should investments compound for best results?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While daily compounding is theoretically best, the practical difference between daily and monthly compounding is minimal (typically less than 0.1% annually). More important factors include the interest rate, time period, and consistent contributions rather than compounding frequency." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Is it better to invest a lump sum or make regular contributions?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Mathematically, lump sum investing often wins due to longer market exposure, but regular contributions provide dollar-cost averaging benefits and are more practical for most people. The key is starting consistently rather than waiting for perfect timing or large amounts." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What interest rate should I use for long-term projections?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Historical stock market returns average 7-10% annually, but conservative planning often uses 6-7% to account for inflation and fees. For guaranteed returns, current bond or CD rates apply. Always consider your risk tolerance and investment timeline when selecting rates." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How does inflation affect compound interest calculations?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Inflation reduces the purchasing power of future dollars, so focus on real (inflation-adjusted) returns rather than nominal returns. If your investment earns 7% but inflation is 3%, your real return is approximately 4% in terms of purchasing power." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Can compound interest work against me?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Yes, compound interest works against borrowers. High-interest debt like credit cards compound against you, making debt elimination often more valuable than investing. Pay off debt with rates above your expected investment returns before increasing investment contributions." })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Consider inflation's impact on purchasing power when evaluating long-term projections." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Tax implications of investments are not included in calculations and may affect actual returns." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Investment fees and expenses can significantly impact compound interest outcomes over time." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Market volatility may cause actual returns to differ from steady compound interest assumptions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Consult with qualified financial advisors for personalized investment strategies and planning." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Past performance does not guarantee future results in any investment scenario." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Results are estimates only and actual investment outcomes may vary significantly from calculations." })
          ] }) })
        ] })
      ] })
    }
  );
}
export {
  CompoundInterestCalculator as default
};
