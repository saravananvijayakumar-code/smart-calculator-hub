import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a3 as Label, U as Input, B as Button, C as Calculator, T as TrendingUp, aD as formatCurrency, a4 as Info } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { S as Separator } from "./separator-CgM4Fzdg.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { W as Wallet } from "./wallet-7QltRvhQ.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./EnhancedAIAnalysis-BZiQW2bt.js";
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
const ISACalculatorUK = () => {
  const [isaType, setIsaType] = reactExports.useState("");
  const [monthlyContribution, setMonthlyContribution] = reactExports.useState("");
  const [initialInvestment, setInitialInvestment] = reactExports.useState("");
  const [expectedReturn, setExpectedReturn] = reactExports.useState("");
  const [investmentPeriod, setInvestmentPeriod] = reactExports.useState("");
  const [results, setResults] = reactExports.useState(null);
  const calculateISA = () => {
    const monthly = parseFloat(monthlyContribution) || 0;
    const initial = parseFloat(initialInvestment) || 0;
    const annualReturn = parseFloat(expectedReturn) / 100 || 0;
    const years = parseFloat(investmentPeriod) || 0;
    if (years <= 0) return;
    const monthlyReturn = annualReturn / 12;
    const totalMonths = years * 12;
    const futureValueInitial = initial * Math.pow(1 + annualReturn, years);
    let futureValueContributions = 0;
    if (monthly > 0 && monthlyReturn > 0) {
      futureValueContributions = monthly * (Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn;
    } else if (monthly > 0) {
      futureValueContributions = monthly * totalMonths;
    }
    const totalValue = futureValueInitial + futureValueContributions;
    const totalContributed = initial + monthly * totalMonths;
    const totalGrowth = totalValue - totalContributed;
    const taxSaved = totalGrowth * 0.2;
    const currentAllowance = 2e4;
    const annualContribution = initial + monthly * 12;
    const allowanceUsed = Math.min(annualContribution, currentAllowance);
    const allowanceRemaining = currentAllowance - allowanceUsed;
    setResults({
      totalValue,
      totalContributed,
      totalGrowth,
      taxSaved,
      allowanceUsed,
      allowanceRemaining,
      effectiveReturn: (totalValue - totalContributed) / totalContributed * 100,
      annualizedReturn: Math.pow(totalValue / totalContributed, 1 / years) - 1
    });
  };
  const reset = () => {
    setIsaType("");
    setMonthlyContribution("");
    setInitialInvestment("");
    setExpectedReturn("");
    setInvestmentPeriod("");
    setResults(null);
  };
  const tips = [
    "Current ISA allowance is £20,000 per tax year (2024/25)",
    "Stocks & Shares ISAs offer higher growth potential than Cash ISAs",
    "ISA gains and income are completely tax-free",
    "You can split your allowance between different ISA types",
    "Consider your risk tolerance when choosing ISA investments"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "UK ISA Calculator",
      description: "Calculate potential returns and tax savings from Individual Savings Accounts (ISAs) in the UK",
      keywords: "UK ISA calculator, stocks and shares ISA, cash ISA calculator, ISA allowance, tax free savings",
      tips,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-5 w-5" }),
                "ISA Calculator"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Calculate your ISA returns and tax savings" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "isaType", children: "ISA Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: isaType, onValueChange: setIsaType, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select ISA type" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cash", children: "Cash ISA" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "stocks", children: "Stocks & Shares ISA" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "lifetime", children: "Lifetime ISA" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "innovative", children: "Innovative Finance ISA" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "initialInvestment", children: "Initial Investment (£)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "initialInvestment",
                    type: "number",
                    placeholder: "Enter initial amount",
                    value: initialInvestment,
                    onChange: (e) => setInitialInvestment(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "monthlyContribution", children: "Monthly Contribution (£)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "monthlyContribution",
                    type: "number",
                    placeholder: "Enter monthly contribution",
                    value: monthlyContribution,
                    onChange: (e) => setMonthlyContribution(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "expectedReturn", children: "Expected Annual Return (%)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "expectedReturn",
                    type: "number",
                    step: "0.1",
                    placeholder: "Enter expected return",
                    value: expectedReturn,
                    onChange: (e) => setExpectedReturn(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "investmentPeriod", children: "Investment Period (Years)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "investmentPeriod",
                    type: "number",
                    placeholder: "Enter investment period",
                    value: investmentPeriod,
                    onChange: (e) => setInvestmentPeriod(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateISA, className: "flex-1", children: [
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
              "ISA Projection"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total Value" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-green-600", children: formatCurrency(results.totalValue, "GBP") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total Contributed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: formatCurrency(results.totalContributed, "GBP") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total Growth" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-blue-600", children: formatCurrency(results.totalGrowth, "GBP") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Tax Saved" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-orange-600", children: formatCurrency(results.taxSaved, "GBP") })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Allowance Used:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: formatCurrency(results.allowanceUsed, "GBP") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Allowance Remaining:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: formatCurrency(results.allowanceRemaining, "GBP") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Effective Return:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                    results.effectiveReturn.toFixed(2),
                    "%"
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5" }),
            "Understanding UK Individual Savings Accounts (ISAs)"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Individual Savings Accounts (ISAs) represent one of the most valuable tax-efficient savings vehicles available to UK residents. These government-backed schemes allow you to save and invest money while enjoying complete freedom from income tax, capital gains tax, and dividend tax on your returns. Understanding ISAs is crucial for anyone serious about building wealth in the UK." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "The ISA Landscape: Types and Opportunities" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The UK offers several ISA variants, each designed for different financial goals and life stages. Cash ISAs provide secure, accessible savings with guaranteed capital protection, making them ideal for emergency funds and short-term goals. Stocks and Shares ISAs offer higher growth potential through investment in funds, shares, and bonds, though with associated market risks. Lifetime ISAs specifically target first-time home buyers and retirement savers aged 18-39, offering a 25% government bonus on contributions up to £1,000 annually." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Annual Allowances and Strategic Planning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The 2024/25 ISA allowance stands at £20,000, representing a substantial opportunity for tax-efficient saving. This allowance operates on a use-it-or-lose-it basis, resetting each April without the ability to carry forward unused portions. Strategic planners often maximize their ISA contributions early in the tax year to maximize compound growth benefits. The allowance can be split across different ISA types, though specific rules govern combinations and transfers." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Compound Growth and Tax Benefits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The true power of ISAs lies in their ability to shelter compound growth from taxation indefinitely. While a basic-rate taxpayer might lose 20% of their investment gains to tax in a general investment account, ISA holders keep every penny of growth. Over long periods, this tax advantage compounds dramatically. A £20,000 annual investment growing at 7% annually would be worth significantly more in an ISA wrapper than in a taxable account after 20 years." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Cash ISAs: Security and Accessibility" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cash ISAs offer the security of guaranteed capital protection while providing tax-free interest. Current interest rates, while historically low, still benefit from tax shelter advantages. Easy-access Cash ISAs provide immediate liquidity for emergency funds, while fixed-rate versions offer higher returns for savers who can commit funds for specific periods. Regular savings Cash ISAs encourage disciplined monthly saving habits with competitive rates." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Stocks and Shares ISAs: Growth Potential" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For long-term wealth building, Stocks and Shares ISAs offer unparalleled opportunities. These accounts can hold individual shares, investment funds, ETFs, and bonds, all growing completely tax-free. Historical market returns suggest average annual growth of 6-8% over long periods, though past performance never guarantees future results. The key advantage lies in tax-free dividend income and capital gains, which can be substantial over decades." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Lifetime ISAs: Targeted Incentives" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lifetime ISAs uniquely combine ISA tax benefits with direct government contributions. Savers aged 18-39 can contribute up to £4,000 annually and receive a 25% government bonus, effectively earning immediate 25% returns. However, early withdrawal penalties and specific usage restrictions make LISAs suitable only for committed home buyers or retirement savers. The government bonus continues until age 50, making LISAs powerful long-term wealth-building tools." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Portfolio Construction and Risk Management" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Successful ISA investing requires thoughtful portfolio construction balancing growth potential with risk tolerance. Diversified index funds offer broad market exposure with low costs, while individual shares provide opportunities for higher returns with increased risk. Asset allocation should reflect investment timeframes, with younger investors typically accepting higher equity exposure for growth potential, while those approaching retirement might favor more conservative allocations." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "ISA Transfers and Flexibility" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ISA holders enjoy significant flexibility through transfer mechanisms allowing movement between providers and ISA types without losing tax advantages. Current year contributions can be transferred unlimited times, while previous years' ISAs can be consolidated or moved for better terms. This flexibility ensures savers can always access the best rates and investment options without sacrificing their valuable ISA wrapper benefits." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Common Mistakes and Optimization Strategies" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Many savers underutilize their ISA allowances or make suboptimal choices that limit long-term wealth accumulation. Common mistakes include keeping Cash ISAs with poor interest rates, not maximizing annual allowances, or choosing inappropriate risk levels for investment timeframes. Successful ISA strategies involve regular allowance maximization, periodic provider reviews, and maintaining appropriate asset allocation as circumstances change." })
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExportShareButtons,
          {
            calculatorType: "isa-uk",
            inputs: {
              isaType,
              monthlyContribution,
              initialInvestment,
              expectedReturn,
              investmentPeriod
            },
            results,
            title: "ISA Investment Projection"
          }
        ) })
      ]
    }
  );
};
export {
  ISACalculatorUK as default
};
