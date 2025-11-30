import { n as createLucideIcon, r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a3 as Label, U as Input, B as Button, C as Calculator, T as TrendingUp, aD as formatCurrency, c as Shield, D as DollarSign, a2 as FileText } from "./index-C_OXA6OQ.js";
import { S as Separator } from "./separator-CgM4Fzdg.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { A as AIAnalysis } from "./AIAnalysis-DnR9Up6F.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { T as Target } from "./target-1ApqtYDG.js";
import { U as Users } from "./users-fS_YAEJN.js";
import { W as Wallet } from "./wallet-7QltRvhQ.js";
import { C as ChartColumn } from "./chart-column-CAGIVosk.js";
import { L as Lightbulb } from "./lightbulb-doNczJxC.js";
import { C as Calendar } from "./calendar-CKWgIWzq.js";
import { C as CircleCheckBig } from "./circle-check-big-BoxGYPKG.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./EnhancedAIAnalysis-BZiQW2bt.js";
import "./loader-circle-BYW7QwsU.js";
import "./brain-U3SZm3t9.js";
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
const __iconNode$1 = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
];
const ArrowUp = createLucideIcon("arrow-up", __iconNode$1);
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
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ]
];
const Book = createLucideIcon("book", __iconNode);
const PensionCalculatorUK = () => {
  const [currentAge, setCurrentAge] = reactExports.useState("");
  const [retirementAge, setRetirementAge] = reactExports.useState("66");
  const [currentPension, setCurrentPension] = reactExports.useState("");
  const [monthlyContribution, setMonthlyContribution] = reactExports.useState("");
  const [employerContribution, setEmployerContribution] = reactExports.useState("");
  const [expectedReturn, setExpectedReturn] = reactExports.useState("5");
  const [inflationRate, setInflationRate] = reactExports.useState("2.5");
  const [results, setResults] = reactExports.useState(null);
  const calculatePension = () => {
    const age = parseFloat(currentAge);
    const retAge = parseFloat(retirementAge);
    const currentPot = parseFloat(currentPension) || 0;
    const monthlyEE = parseFloat(monthlyContribution) || 0;
    const monthlyER = parseFloat(employerContribution) || 0;
    const annualReturn = parseFloat(expectedReturn) / 100;
    const inflation = parseFloat(inflationRate) / 100;
    if (!age || !retAge || retAge <= age) return;
    const yearsToRetirement = retAge - age;
    const monthsToRetirement = yearsToRetirement * 12;
    const monthlyReturn = annualReturn / 12;
    const totalMonthlyContribution = monthlyEE + monthlyER;
    const futureCurrentPot = currentPot * Math.pow(1 + annualReturn, yearsToRetirement);
    let futureContributions = 0;
    if (totalMonthlyContribution > 0 && monthlyReturn > 0) {
      futureContributions = totalMonthlyContribution * (Math.pow(1 + monthlyReturn, monthsToRetirement) - 1) / monthlyReturn;
    } else if (totalMonthlyContribution > 0) {
      futureContributions = totalMonthlyContribution * monthsToRetirement;
    }
    const totalPensionPot = futureCurrentPot + futureContributions;
    const totalContributed = currentPot + totalMonthlyContribution * monthsToRetirement;
    const annualPension = totalPensionPot * 0.04;
    const monthlyPension = annualPension / 12;
    const realAnnualPension = annualPension / Math.pow(1 + inflation, yearsToRetirement);
    const realMonthlyPension = realAnnualPension / 12;
    const statePensionWeekly = 203.85;
    const statePensionAnnual = statePensionWeekly * 52;
    const annualTaxRelief = monthlyEE * 12 * 0.25;
    const calculationResults = {
      totalPensionPot,
      totalContributed,
      pensionGrowth: totalPensionPot - totalContributed,
      annualPension,
      monthlyPension,
      realAnnualPension,
      realMonthlyPension,
      statePensionAnnual,
      totalAnnualIncome: annualPension + statePensionAnnual,
      annualTaxRelief,
      yearsToRetirement
    };
    setResults(calculationResults);
  };
  const reset = () => {
    setCurrentAge("");
    setRetirementAge("66");
    setCurrentPension("");
    setMonthlyContribution("");
    setEmployerContribution("");
    setExpectedReturn("5");
    setInflationRate("2.5");
    setResults(null);
  };
  const tips = [
    "Auto-enrolment minimum: 8% total (3% employee, 5% employer)",
    "Annual allowance for pension contributions is £40,000 (2024/25)",
    "State pension provides foundation - private pensions top up income",
    "Starting early makes huge difference due to compound growth",
    "Consider salary sacrifice for tax efficiency"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "UK Pension Calculator 2024 - Free Retirement Planning Tool | Smart Calculator Hubs",
      description: "Calculate your UK pension pot growth, retirement income, and workplace pension contributions. Free pension calculator with tax relief, state pension estimates, and AI-powered analysis. Plan your retirement today!",
      keywords: "UK pension calculator 2024, retirement planning calculator, workplace pension calculator, auto enrolment calculator, pension pot calculator, UK retirement income calculator, pension contributions calculator, state pension calculator, pension planning tool, retirement savings calculator",
      tips,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5" }),
                "Pension Calculator"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Plan your retirement with pension projections" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "currentAge", children: "Current Age" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "currentAge",
                      type: "number",
                      placeholder: "Enter age",
                      value: currentAge,
                      onChange: (e) => setCurrentAge(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "retirementAge", children: "Retirement Age" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "retirementAge",
                      type: "number",
                      placeholder: "Enter retirement age",
                      value: retirementAge,
                      onChange: (e) => setRetirementAge(e.target.value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "currentPension", children: "Current Pension Pot (£)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "currentPension",
                    type: "number",
                    placeholder: "Enter current pension value",
                    value: currentPension,
                    onChange: (e) => setCurrentPension(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "monthlyContribution", children: "Your Monthly Contribution (£)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "monthlyContribution",
                      type: "number",
                      placeholder: "Employee contribution",
                      value: monthlyContribution,
                      onChange: (e) => setMonthlyContribution(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "employerContribution", children: "Employer Contribution (£)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "employerContribution",
                      type: "number",
                      placeholder: "Employer contribution",
                      value: employerContribution,
                      onChange: (e) => setEmployerContribution(e.target.value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "expectedReturn", children: "Expected Return (%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "expectedReturn",
                      type: "number",
                      step: "0.1",
                      placeholder: "Annual return",
                      value: expectedReturn,
                      onChange: (e) => setExpectedReturn(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "inflationRate", children: "Inflation Rate (%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "inflationRate",
                      type: "number",
                      step: "0.1",
                      placeholder: "Inflation rate",
                      value: inflationRate,
                      onChange: (e) => setInflationRate(e.target.value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculatePension, className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "mr-2 h-4 w-4" }),
                  "Calculate"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: reset, variant: "outline", children: "Reset" })
              ] })
            ] })
          ] }),
          results && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
              "Pension Projection"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Pension Pot at Retirement" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-green-600", children: formatCurrency(results.totalPensionPot, "GBP") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total Contributed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: formatCurrency(results.totalContributed, "GBP") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Pension Growth" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-blue-600", children: formatCurrency(results.pensionGrowth, "GBP") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Annual Tax Relief" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-orange-600", children: formatCurrency(results.annualTaxRelief, "GBP") })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Retirement Income (Annual)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Private Pension:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: formatCurrency(results.annualPension, "GBP") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "State Pension:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: formatCurrency(results.statePensionAnnual, "GBP") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-medium", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Total Income:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { children: formatCurrency(results.totalAnnualIncome, "GBP") })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "In Today's Money" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Real Annual Income:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: formatCurrency(results.realAnnualPension, "GBP") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Real Monthly Income:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: formatCurrency(results.realMonthlyPension, "GBP") })
                ] })
              ] })
            ] })
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIAnalysis,
            {
              analysisRequest: {
                calculatorType: "pension-calculator-uk",
                data: {
                  currentAge: parseFloat(currentAge) || 0,
                  retirementAge: parseFloat(retirementAge) || 66,
                  currentPension: parseFloat(currentPension) || 0,
                  monthlyContribution: (parseFloat(monthlyContribution) || 0) + (parseFloat(employerContribution) || 0),
                  expectedReturn: parseFloat(expectedReturn) || 5,
                  finalPensionPot: results.totalPensionPot,
                  annualIncome: results.annualPension
                },
                userContext: {
                  age: parseFloat(currentAge) || 0,
                  location: "UK"
                }
              },
              autoRun: true,
              title: "AI Pension Analysis",
              description: "Get personalized recommendations to optimize your pension strategy and retirement planning."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "pension-calculator-uk",
              inputs: {
                currentAge: parseFloat(currentAge) || 0,
                retirementAge: parseFloat(retirementAge) || 66,
                currentPension: parseFloat(currentPension) || 0,
                monthlyContribution: parseFloat(monthlyContribution) || 0,
                employerContribution: parseFloat(employerContribution) || 0,
                expectedReturn: parseFloat(expectedReturn) || 5
              },
              results: {
                totalPensionPot: results.totalPensionPot,
                annualPension: results.annualPension,
                monthlyPension: results.monthlyPension,
                totalContributions: results.totalContributions,
                totalTaxRelief: results.totalTaxRelief
              },
              title: "Pension Calculator UK Report",
              className: "mt-6"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Book, { className: "h-5 w-5" }),
              "Complete Guide to UK Pension Planning"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Everything you need to know about pension planning, maximizing your retirement savings, and securing your financial future in the UK" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-l-4 border-l-blue-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-6 w-6 text-blue-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-blue-900", children: "State Pension Foundation" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "£203.85 weekly with 35+ NI years" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-l-4 border-l-green-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-6 w-6 text-green-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-green-900", children: "Workplace Pension" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "8% minimum (3% employee + 5% employer)" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-l-4 border-l-purple-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-6 w-6 text-purple-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-purple-900", children: "Personal Savings" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "ISAs, SIPPs, and other investments" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-6 w-6 text-green-600" }),
                "The UK Pension Revolution: From Security to Self-Reliance"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The UK pension landscape has undergone a seismic transformation over the past three decades. Gone are the days when workers could rely solely on generous employer-provided defined benefit pensions that guaranteed a comfortable retirement income. Today's pension system places unprecedented responsibility on individuals to secure their own financial futures, making pension literacy not just beneficial but absolutely essential for anyone hoping to maintain their lifestyle in retirement." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "This shift from collective security to individual responsibility coincided with revolutionary changes in working patterns, life expectancy, and economic realities. The average person now changes jobs multiple times throughout their career, accumulating pension pots from various employers. Meanwhile, people are living longer than ever before, with many spending 20-30 years in retirement. These changes have fundamentally altered the pension planning equation, requiring more sophisticated strategies and higher levels of personal engagement." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-6 w-6 text-blue-600" }),
                "The Three-Pillar System: Building Retirement Security"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Modern UK retirement planning rests on three distinct pillars, each serving a specific purpose in creating comprehensive financial security. Understanding how these pillars work together is crucial for developing an effective retirement strategy." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mb-3 text-blue-800", children: "First Pillar: The State Pension Foundation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The state pension provides the bedrock of UK retirement income, currently offering £203.85 per week (£10,600 annually) for those with complete National Insurance records. This foundation requires 35 years of qualifying contributions, though you can receive a partial pension with just 10 years. The state pension is triple-locked, meaning it rises each year by the highest of inflation, average earnings growth, or 2.5%. While this provides valuable security, it's worth noting that this amount alone falls well short of what most people need for a comfortable retirement." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mb-3 text-green-800", children: "Second Pillar: Workplace Pensions and Auto-Enrolment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Auto-enrolment has revolutionized UK pension saving by requiring employers to automatically enroll eligible workers into workplace pension schemes. The current minimum contribution rates total 8% of qualifying earnings between £6,240 and £50,270, split between employee (5%) and employer (3%) contributions. While these percentages might seem modest, they can accumulate to substantial amounts over a full working career, particularly when enhanced by tax relief and compound investment growth." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "However, many financial experts argue that the 8% minimum is insufficient for maintaining living standards in retirement. Research suggests that workers should aim to contribute 12-15% of their income throughout their careers to achieve adequate retirement income replacement ratios of 60-70% of pre-retirement income." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mb-3 text-purple-800", children: "Third Pillar: Personal Savings and Investments" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The third pillar encompasses all additional retirement savings beyond state and workplace pensions. This includes Individual Savings Accounts (ISAs), Self-Invested Personal Pensions (SIPPs), personal pension plans, and general investment accounts. This pillar becomes increasingly important for higher earners who want to maintain their lifestyle in retirement or for those who start pension saving later in life and need to catch up." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-6 w-6 text-green-600" }),
                "Tax Relief: The Government's Hidden Contribution"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "One of the most powerful yet underappreciated aspects of UK pension saving is the generous tax relief provided by the government. This effectively means that for every pound you contribute to your pension, the government adds additional money, making pension contributions extraordinarily tax-efficient." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 p-4 rounded-lg mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-green-800 mb-2", children: "Tax Relief Examples:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Basic Rate (20%):" }),
                    " Contribute £80, government adds £20 = £100 in pension"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Higher Rate (40%):" }),
                    " Contribute £100, get £25 back via tax relief + £25 to pension"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Additional Rate (45%):" }),
                    " Even greater tax advantages for the highest earners"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The annual allowance for pension contributions is £40,000 (2024/25), though this can be reduced for very high earners through the tapered annual allowance. Most workers can contribute substantial amounts while receiving significant tax advantages, making pension contributions often the most tax-efficient form of saving available." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-6 w-6 text-blue-600" }),
                "The Magic of Compound Growth: Time as Your Greatest Asset"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The most powerful force in pension building is compound growth – the phenomenon where your investment returns generate their own returns over time. This creates an exponential growth effect that becomes more pronounced the longer you invest. Understanding compound growth is crucial because it explains why starting pension contributions early, even with smaller amounts, can be more effective than starting later with larger contributions." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-blue-800 mb-2", children: "Compound Growth Example:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-2", children: "Two people save £200 monthly with 6% annual returns:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Start at 25, save for 40 years:" }),
                    " Final pot ≈ £393,000"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Start at 35, save for 30 years:" }),
                    " Final pot ≈ £201,000"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "The 10-year head start nearly doubles the final amount!" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Historical equity market returns suggest average annual growth of 6-8% over long periods, though these come with volatility and risk. Pension investments should be diversified across different asset classes and gradually adjusted to become more conservative as retirement approaches. The key is to start early and maintain consistent contributions, allowing compound growth to work its magic over decades." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-6 w-6 text-yellow-600" }),
                "Pension Freedoms: Flexibility with Responsibility"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The pension freedoms introduced in 2015 revolutionized how people can access their pension savings, providing unprecedented flexibility from age 55 (rising to 57 in 2028). These freedoms eliminated the requirement to purchase an annuity and opened up multiple withdrawal strategies, each with distinct advantages and risks." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Pension Drawdown" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mb-2", children: "Flexible income with investment control" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ 25% tax-free lump sum" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Income as needed" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Potential for growth" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "⚠ Investment risk" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "⚠ Sequencing risk" })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Annuities" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mb-2", children: "Guaranteed income for life" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Income certainty" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ No investment risk" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Inflation protection options" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "⚠ Lower potential returns" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "⚠ Irreversible decision" })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The optimal withdrawal strategy depends on your individual circumstances, risk tolerance, other income sources, and long-term care considerations. Many retirees adopt a hybrid approach, securing basic income needs through annuities while maintaining flexibility through drawdown for discretionary spending." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-6 w-6 text-indigo-600" }),
                "Self-Invested Personal Pensions (SIPPs): Maximum Control"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "SIPPs represent the premium tier of pension flexibility, offering the widest possible range of investment options while maintaining all the tax advantages of pension saving. Unlike standard workplace or personal pension schemes that typically offer a limited menu of funds, SIPPs allow investment in individual shares, bonds, investment trusts, commercial property, and even alternative investments like wine or art (though these require careful consideration of regulations and tax implications)." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "SIPPs are particularly suitable for experienced investors who want direct control over their pension investments, those with substantial pension pots who can justify the typically higher charges, or business owners who want to invest in commercial property through their pension. However, this flexibility comes with responsibility – SIPP holders must make their own investment decisions and bear the full consequences of their choices." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 p-4 rounded-lg mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-amber-800 mb-2", children: "⚠ SIPP Considerations:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Higher charges than standard pension schemes" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Requires active investment management" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Complex regulations for certain investments" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Tax implications of investment choices" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Need for regular portfolio review and rebalancing" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-6 w-6 text-red-600" }),
                "Life-Stage Pension Planning: Adapting Your Strategy"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: `Effective pension planning isn't a "set and forget" activity but requires ongoing adjustment as you progress through different life stages. Each phase of your career and life presents unique opportunities and challenges that should inform your pension strategy.` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2 text-blue-700", children: "Early Career (20s-30s): Building the Foundation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Focus on establishing good habits and maximizing compound growth potential." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs space-y-1 ml-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Start pension contributions as early as possible" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Maximize employer matching before other investments" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider aggressive growth strategies with higher equity allocation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Build emergency fund alongside pension contributions" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Take advantage of salary sacrifice opportunities" })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2 text-green-700", children: "Mid-Career (40s-50s): Acceleration Phase" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Peak earning years offer opportunities to significantly boost pension savings." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs space-y-1 ml-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Increase contribution rates with salary progression" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider consolidating multiple pension pots" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Review and optimize investment strategy" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Plan for potential career changes or redundancy" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider additional voluntary contributions" })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2 text-purple-700", children: "Pre-Retirement (55+): Strategic Transition" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Focus on risk reduction and withdrawal planning." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs space-y-1 ml-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Gradually reduce investment risk exposure" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Plan pension access strategy from age 55/57" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider phased retirement options" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Review State Pension forecast and National Insurance record" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Seek professional financial advice for complex decisions" })
                  ] })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-6 w-6 text-purple-600" }),
                "Advanced Pension Strategies: Maximizing Your Retirement Wealth"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Beyond basic pension saving, several advanced strategies can significantly enhance your retirement outcomes. These approaches require more sophisticated planning but can deliver substantial benefits for those willing to engage with the complexities." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mb-3", children: "Salary Sacrifice: The Ultimate Tax Efficiency" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Salary sacrifice arrangements allow you to give up part of your gross salary in exchange for employer pension contributions. This strategy can save both income tax and National Insurance contributions, making it extremely tax-efficient. For a higher-rate taxpayer, salary sacrifice can deliver total tax savings of 42% (40% income tax + 2% National Insurance), making it one of the most powerful wealth-building tools available." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mb-3", children: "Pension Recycling and Tax Relief Optimization" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "For those with substantial pension pots, strategies like pension recycling (taking tax-free cash and reinvesting it in new pension contributions) can multiply tax relief benefits. However, these strategies require careful navigation of complex regulations and professional advice to avoid potential tax pitfalls." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mb-3", children: "Defined Benefit Transfer Considerations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "If you have a defined benefit pension scheme, transferring to a defined contribution arrangement might provide greater flexibility and potentially higher benefits, but it also transfers all investment and longevity risks to you. Such transfers require specialist advice and careful consideration of the guaranteed benefits you'd be giving up." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-6 w-6 text-green-600" }),
                "Creating Your Personal Pension Action Plan"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Successful pension planning requires translating knowledge into concrete action. Here's a comprehensive framework for creating and implementing your personalized pension strategy:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 p-6 rounded-lg mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-4", children: "Your 12-Step Pension Optimization Checklist:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "rounded" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Check State Pension forecast online" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "rounded" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Maximize employer pension matching" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "rounded" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Review all existing pension pots" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "rounded" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Consider pension consolidation" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "rounded" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Optimize contribution levels" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "rounded" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore salary sacrifice options" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "rounded" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Review investment strategy" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "rounded" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Check and minimize charges" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "rounded" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Plan withdrawal strategy" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "rounded" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Consider protection insurance" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "rounded" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Schedule annual reviews" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "rounded" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Seek professional advice if needed" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Remember that pension planning is a marathon, not a sprint. The decisions you make today will compound over decades, making even small optimizations incredibly valuable over time. Regular review and adjustment ensure your pension strategy remains aligned with your changing circumstances and retirement goals." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-blue-800 mb-2", children: "💡 Key Takeaway" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "The most important step in pension planning is to start now, regardless of your age or current savings level. Time is your greatest asset in building retirement wealth, and every month you delay reduces the power of compound growth. Use the calculator above to model different scenarios and find a contribution level that balances your current lifestyle needs with your future retirement security." })
              ] })
            ] })
          ] }) })
        ] })
      ]
    }
  );
};
export {
  PensionCalculatorUK as default
};
