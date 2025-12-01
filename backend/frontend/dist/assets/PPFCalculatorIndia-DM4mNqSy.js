import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, c as Shield, i as CardDescription, k as CardContent, a4 as Label, V as Input, B as Button, C as Calculator, T as TrendingUp, a8 as Sparkles, a5 as Info } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { S as Separator } from "./separator-63Q9JacM.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { E as EnhancedAIAnalysis } from "./EnhancedAIAnalysis-BaYCd8m5.js";
import { S as ShareResultsModal } from "./ShareResultsModal-Bjm17tbd.js";
import { I as InFeedAd } from "./InFeedAd-qGRsmhMx.js";
import { A as AutoAdSlot } from "./AutoAdSlot-DNRO9HTk.js";
import { S as Share2 } from "./share-2-SpOWc355.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./check-DTsA1WpX.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
import "./link-C11IgQ5M.js";
import "./copy-BqV-1o4k.js";
import "./twitter-CFAqYlq6.js";
import "./facebook-BX8Qa6cK.js";
import "./linkedin-D9e3uSZB.js";
import "./message-circle-DZtFORhh.js";
import "./mail-DX6y6Mo7.js";
import "./brain-CSngUEN8.js";
import "./target-4JeIm6Yk.js";
import "./circle-check-big-B8N3lfE-.js";
import "./arrow-right-Bjdtr8dz.js";
import "./lightbulb-DKPyzLdJ.js";
import "./map-pin-DTtorPjp.js";
import "./instagram-DyxGBC2q.js";
const PPFCalculatorIndia = () => {
  const [currentBalance, setCurrentBalance] = reactExports.useState("");
  const [annualContribution, setAnnualContribution] = reactExports.useState("");
  const [contributionType, setContributionType] = reactExports.useState("beginning");
  const [yearsToMaturity, setYearsToMaturity] = reactExports.useState("15");
  const [interestRate, setInterestRate] = reactExports.useState("7.1");
  const [results, setResults] = reactExports.useState(null);
  const [showShareModal, setShowShareModal] = reactExports.useState(false);
  const [showAIAnalysis, setShowAIAnalysis] = reactExports.useState(false);
  const calculatePPF = () => {
    const currentBal = parseFloat(currentBalance) || 0;
    const annualCont = parseFloat(annualContribution) || 0;
    const years = parseFloat(yearsToMaturity);
    const rate = parseFloat(interestRate) / 100;
    if (!years || !rate) return;
    const maxAnnualContribution = 15e4;
    const validContribution = Math.min(Math.max(annualCont, 0), maxAnnualContribution);
    let maturityAmount = currentBal;
    let totalContributions = 0;
    for (let year = 1; year <= years; year++) {
      if (contributionType === "beginning") {
        maturityAmount += validContribution;
        maturityAmount = maturityAmount * (1 + rate);
      } else {
        maturityAmount = maturityAmount * (1 + rate);
        maturityAmount += validContribution;
      }
      totalContributions += validContribution;
    }
    const totalInterest = maturityAmount - currentBal - totalContributions;
    const totalInvestment = currentBal + totalContributions;
    const taxSaved = totalContributions * 0.3;
    const totalTaxBenefit = taxSaved;
    const monthlyPension = maturityAmount * 0.05 / 12;
    const fiveYearExtension = calculateExtension(maturityAmount, 5, rate);
    const fdReturns = totalInvestment * Math.pow(1.065, years);
    const taxableFDReturns = fdReturns - (fdReturns - totalInvestment) * 0.3;
    setResults({
      maturityAmount,
      totalInvestment,
      totalContributions,
      totalInterest,
      taxSaved,
      totalTaxBenefit,
      monthlyPension,
      fiveYearExtension,
      fdReturns,
      taxableFDReturns,
      ppfAdvantage: maturityAmount - taxableFDReturns,
      effectiveReturn: Math.pow(maturityAmount / totalInvestment, 1 / years) - 1,
      validContribution
    });
  };
  const calculateExtension = (principal, extYears, rate) => {
    const withoutContribution = principal * Math.pow(1 + rate, extYears);
    const maxWithdrawal = principal * 0.6;
    const remainingAfterWithdrawal = principal - maxWithdrawal;
    const withPartialWithdrawal = (remainingAfterWithdrawal + 15e4) * Math.pow(1 + rate, extYears);
    return {
      withoutContribution,
      withPartialWithdrawal,
      maxWithdrawal
    };
  };
  const reset = () => {
    setCurrentBalance("");
    setAnnualContribution("");
    setContributionType("beginning");
    setYearsToMaturity("15");
    setInterestRate("7.1");
    setResults(null);
  };
  const tips = [
    "PPF offers EEE tax benefit: deduction, growth, and withdrawal all tax-free",
    "Minimum investment: ₹500/year, Maximum: ₹1.5 lakh/year",
    "15-year lock-in period with option to extend in 5-year blocks",
    "Current PPF interest rate: 7.1% per annum (Q4 FY 2024-25)",
    "Partial withdrawal allowed from 7th year onwards"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "India PPF Calculator",
      description: "Calculate your Public Provident Fund (PPF) maturity amount and tax benefits in India",
      keywords: "India PPF calculator, public provident fund, PPF maturity amount, section 80C, EEE tax benefit",
      tips,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5" }),
                "PPF Calculator"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Calculate your PPF maturity and tax benefits" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "currentBalance", children: "Current PPF Balance (₹)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "currentBalance",
                    type: "number",
                    placeholder: "Enter current PPF balance",
                    value: currentBalance,
                    onChange: (e) => setCurrentBalance(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "annualContribution", children: "Annual Contribution (₹)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "annualContribution",
                    type: "number",
                    placeholder: "Enter annual contribution (Max ₹1.5L)",
                    value: annualContribution,
                    onChange: (e) => setAnnualContribution(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contributionType", children: "Contribution Timing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: contributionType, onValueChange: setContributionType, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select contribution timing" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "beginning", children: "Beginning of Year" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "end", children: "End of Year" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "yearsToMaturity", children: "Years to Maturity" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "yearsToMaturity",
                      type: "number",
                      placeholder: "Enter years",
                      value: yearsToMaturity,
                      onChange: (e) => setYearsToMaturity(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "interestRate", children: "Interest Rate (%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "interestRate",
                      type: "number",
                      step: "0.1",
                      placeholder: "Current rate",
                      value: interestRate,
                      onChange: (e) => setInterestRate(e.target.value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculatePPF, className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "mr-2 h-4 w-4" }),
                  "Calculate"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: reset, variant: "outline", children: "Reset" })
              ] })
            ] })
          ] }),
          results && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "animate-in fade-in-50 slide-in-from-top-4 duration-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
              "PPF Projection"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Maturity Amount" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-semibold text-green-600", children: [
                    "₹",
                    Math.round(results.maturityAmount).toLocaleString("en-IN")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total Investment" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-semibold", children: [
                    "₹",
                    Math.round(results.totalInvestment).toLocaleString("en-IN")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Interest Earned" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-semibold text-blue-600", children: [
                    "₹",
                    Math.round(results.totalInterest).toLocaleString("en-IN")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Tax Saved" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-semibold text-orange-600", children: [
                    "₹",
                    Math.round(results.taxSaved).toLocaleString("en-IN")
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Post-Maturity Options" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Monthly Pension (5%):" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                      "₹",
                      Math.round(results.monthlyPension).toLocaleString("en-IN")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "5-Year Extension:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
                      "₹",
                      Math.round(results.fiveYearExtension.withoutContribution).toLocaleString("en-IN")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Effective Return:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                      (results.effectiveReturn * 100).toFixed(2),
                      "%"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "vs Fixed Deposit" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "FD (Post-tax)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium", children: [
                      "₹",
                      Math.round(results.taxableFDReturns).toLocaleString("en-IN")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "PPF Advantage" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-green-600", children: [
                      "₹",
                      Math.round(results.ppfAdvantage).toLocaleString("en-IN")
                    ] })
                  ] })
                ] })
              ] }),
              results.validContribution !== parseFloat(annualContribution) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-amber-50 p-3 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-amber-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
                " Contribution adjusted to ₹",
                results.validContribution.toLocaleString("en-IN"),
                "(within ₹500 - ₹1.5L limit)"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: () => setShowAIAnalysis(!showAIAnalysis),
                    className: "flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-2 h-4 w-4" }),
                      showAIAnalysis ? "Hide" : "Get",
                      " AI Insights"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: () => setShowShareModal(true),
                    variant: "outline",
                    className: "transition-all duration-300 hover:scale-105",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "mr-2 h-4 w-4" }),
                      "Share"
                    ]
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        results && showAIAnalysis && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 animate-in fade-in-50 slide-in-from-bottom-4 duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          EnhancedAIAnalysis,
          {
            calculatorType: "ppf-calculator-india",
            data: {
              annualContribution: parseFloat(annualContribution) || 0,
              currentBalance: parseFloat(currentBalance) || 0,
              years: parseFloat(yearsToMaturity) || 15,
              finalAmount: results.maturityAmount,
              totalContributions: results.totalContributions,
              totalReturns: results.totalInterest
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5" }),
            "Understanding Public Provident Fund (PPF) in India"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The Public Provident Fund (PPF) stands as one of India's most trusted and tax-efficient long-term savings instruments, offering a unique combination of guaranteed returns, complete tax exemption, and government backing. Designed to encourage long-term savings for retirement and other financial goals, PPF has become a cornerstone of financial planning for millions of Indians seeking safe, tax-free wealth accumulation over extended periods." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-in slide-in-from-left duration-700", children: "Structure and Investment Framework" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "PPF operates as a 15-year lock-in savings scheme with annual contribution limits between ₹500 and ₹1.5 lakh. The scheme allows individuals to make contributions throughout the year, with interest calculated monthly on the lowest balance between the 5th and last day of each month. This structure incentivizes early monthly contributions to maximize interest earnings, making timing of deposits crucial for optimal returns over the long term." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent animate-in slide-in-from-right duration-700", children: "Interest Rates and Government Guarantee" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "PPF interest rates are set quarterly by the government based on market conditions, currently offering 7.1% per annum compounded annually. Unlike market-linked investments, PPF provides completely guaranteed returns backed by the Government of India, ensuring capital protection and predictable growth. Historical rates have generally exceeded inflation and bank deposit rates, providing real wealth appreciation while maintaining absolute safety of principal and interest." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent animate-in slide-in-from-left duration-700", children: "Triple Tax Exemption (EEE Status)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "PPF enjoys the coveted EEE tax status, meaning contributions are eligible for tax deduction under Section 80C, interest earned is completely tax-free, and maturity proceeds are exempt from tax. This triple exemption makes PPF extremely tax-efficient, particularly for higher tax bracket individuals where the effective yield after considering tax savings can significantly exceed the stated interest rate. The tax benefits compound over time, creating substantial additional value." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-in slide-in-from-right duration-700", children: "Withdrawal Rules and Flexibility Options" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "PPF provides limited liquidity options during the 15-year tenure, including partial withdrawals from the 7th year onwards up to 50% of the balance, and loans against PPF from the 3rd to 6th year at favorable interest rates. These features provide emergency access to funds while maintaining the long-term savings discipline. After maturity, account holders can choose full withdrawal, extend for additional 5-year blocks with or without contributions, or opt for systematic withdrawal plans." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent animate-in slide-in-from-left duration-700", children: "Extension Options Post-Maturity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Upon maturity, PPF offers flexible extension options allowing account holders to continue earning tax-free returns. Extensions can be made in 5-year blocks with or without additional contributions, providing continued tax-free compounding. Alternatively, partial withdrawals up to 60% of the balance are permitted annually during extended periods, creating a tax-free income stream while preserving capital growth. These options make PPF suitable for retirement income planning." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent animate-in slide-in-from-right duration-700", children: "Nomination and Succession Benefits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "PPF accounts include nomination facilities ensuring smooth transfer to beneficiaries upon the account holder's death. Nominees can continue the account until the original maturity date, receiving all accumulated benefits without tax implications. This feature provides family financial security and ensures that long-term savings plans benefit intended recipients. Minor children can have PPF accounts opened by parents, creating early wealth accumulation opportunities." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent animate-in slide-in-from-left duration-700", children: "Comparison with Alternative Investments" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Compared to other tax-saving investments like ELSS, NSC, or tax-saving fixed deposits, PPF offers unique advantages in terms of complete tax exemption and guaranteed returns. While ELSS might provide higher returns through equity exposure, PPF's certainty and tax benefits appeal to conservative investors seeking predictable outcomes. The 15-year lock-in, though restrictive, enforces savings discipline that many investors struggle to maintain voluntarily." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent animate-in slide-in-from-right duration-700", children: "Strategic Contribution Planning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Optimizing PPF returns requires strategic contribution planning, including timing of deposits to maximize monthly interest calculation and utilizing the full ₹1.5 lakh annual limit for maximum tax benefits. Contributing early in each month maximizes interest earnings, while spreading contributions throughout the year provides better cash flow management. Family strategies might involve multiple PPF accounts for spouses and children to multiply tax benefits and long-term accumulation." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent animate-in slide-in-from-left duration-700", children: "Digital Services and Account Management" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Modern PPF account management has been simplified through digital platforms offering online contributions, balance inquiries, statement downloads, and loan applications. Internet banking integration allows automatic monthly contributions, ensuring optimal interest calculations and preventing missed contributions. Digital services have made PPF more accessible and convenient while maintaining the scheme's fundamental characteristics of safety and guaranteed returns." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent animate-in slide-in-from-right duration-700", children: "Long-term Wealth Creation Potential" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "PPF's true power lies in long-term compounding, where consistent maximum contributions over 15 years can create substantial wealth accumulation. The combination of tax-deductible contributions, tax-free growth, and tax-free maturity creates an effective yield significantly higher than stated rates. For disciplined investors seeking guaranteed, tax-efficient wealth creation without market risks, PPF remains one of India's most attractive long-term savings options, particularly suitable for retirement planning and major life goals." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent animate-in slide-in-from-left duration-700 mt-8", children: "PPF Account Opening and Eligibility" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Any Indian resident can open a PPF account at designated banks or post offices, with only one account permitted per individual. The account opening process requires basic KYC documents including PAN card, Aadhaar, and address proof. Parents or guardians can open accounts for minor children, creating early savings habits and long-term wealth accumulation. NRIs are not eligible to open new PPF accounts but can continue existing accounts opened before changing residential status until maturity, though without making further contributions or claiming tax benefits." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent animate-in slide-in-from-right duration-700", children: "Interest Calculation Methodology" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "PPF interest calculation follows a monthly methodology where interest accrues on the minimum balance between the 5th and last day of each month. This calculation method emphasizes the importance of making deposits before the 5th of every month to ensure the contribution earns interest for that entire month. The interest compounds annually on March 31st, adding accumulated interest to the principal for the next year's calculations. Understanding this mechanism helps investors maximize returns through strategic timing of contributions, particularly for lump sum deposits early in the financial year." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent animate-in slide-in-from-left duration-700", children: "Loan Facility Against PPF Balance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "PPF account holders can avail loans against their PPF balance from the 3rd financial year up to the 6th financial year of account opening. The maximum loan amount is limited to 25% of the balance at the end of the second year preceding the year of loan application. The loan must be repaid within 36 months, with interest charged at 2% above the prevailing PPF interest rate on the outstanding loan amount. This facility provides emergency liquidity while maintaining the long-term savings structure, though it reduces overall returns due to loan interest charges." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent animate-in slide-in-from-right duration-700", children: "Premature Closure Conditions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While PPF is designed as a long-term investment with a 15-year lock-in, premature closure is permitted under specific circumstances after completion of 5 financial years. Permitted reasons include serious illness of account holder or dependents, higher education expenses of children, or change of residential status from resident to NRI. Premature closure results in interest rate reduction by 1% for the entire period, significantly impacting overall returns. The restrictive premature closure rules emphasize PPF's role as a disciplined long-term savings instrument rather than a short-term investment vehicle." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent animate-in slide-in-from-left duration-700", children: "Tax Implications and Section 80C Benefits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "PPF contributions qualify for tax deduction under Section 80C of the Income Tax Act up to ₹1.5 lakh annually, forming part of the overall 80C limit. For individuals in the highest tax bracket, this deduction can result in tax savings of up to ₹46,800 per year including cess. The complete tax exemption on interest and maturity proceeds creates a compounding tax benefit over the 15-year period, significantly enhancing effective returns. Unlike some Section 80C investments where maturity proceeds are taxable, PPF's EEE status makes it exceptionally tax-efficient for long-term wealth accumulation." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent animate-in slide-in-from-right duration-700", children: "Family Planning Strategies with PPF" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Strategic family planning with PPF involves opening multiple accounts for family members to maximize tax benefits and wealth accumulation. A family can have separate accounts for both spouses and minor children, potentially multiplying the annual ₹1.5 lakh contribution limit across family members. Each account builds independently, creating diversified long-term savings pools for different family goals like retirement, education, or marriage expenses. This approach particularly benefits dual-income families where both partners can claim separate 80C deductions while building substantial tax-free retirement corpus." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent animate-in slide-in-from-left duration-700", children: "Historical Interest Rate Trends" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "PPF interest rates have evolved over decades, reaching peaks above 12% in the 1980s and gradually declining to current levels around 7.1% following global interest rate trends. Government reviews rates quarterly based on 10-year government securities yields, maintaining rates above inflation to preserve real returns. Historical analysis shows PPF consistently outperforming bank fixed deposits on post-tax basis, particularly for higher income brackets. Understanding rate trends helps investors appreciate PPF's relative attractiveness across different economic cycles while maintaining guaranteed return safety." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent animate-in slide-in-from-right duration-700", children: "Retirement Planning with PPF" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "PPF serves as an excellent retirement planning vehicle through its long-term compounding and tax-free accumulation. Starting PPF investments early, such as in one's 20s or 30s, allows multiple 15-year cycles potentially reaching retirement age. Post-maturity extensions create tax-free income streams through systematic withdrawals while preserving capital growth. Combined with other retirement instruments like NPS or pension plans, PPF provides the tax-free, guaranteed returns component balancing portfolio risk. The nomination facility ensures spousal security while the government guarantee provides peace of mind for conservative retirement planning." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent animate-in slide-in-from-left duration-700", children: "Common Mistakes to Avoid" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Common PPF mistakes include missing the 5th of month deadline for interest calculation, contributing below the ₹1.5 lakh maximum limit thus losing tax benefits, and forgetting annual contributions leading to account dormancy requiring reactivation penalties. Opening multiple accounts violates regulations and creates compliance issues. Premature closure for non-essential reasons sacrifices significant returns through interest rate reduction. Not updating nominations leaves succession uncertain. Understanding and avoiding these pitfalls maximizes PPF benefits while ensuring smooth account operation throughout the long investment tenure." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-in slide-in-from-right duration-700", children: "PPF vs EPF: Key Differences" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While both PPF and EPF (Employees' Provident Fund) offer retirement savings with tax benefits, they differ significantly in structure and accessibility. EPF is employer-linked with mandatory contributions from both employer and employee, while PPF is voluntary individual investment. EPF typically offers higher contribution limits through employer matching but with employment-linked accessibility constraints. PPF provides greater flexibility in contribution timing and amounts within limits, along with simpler withdrawal rules. Both enjoy similar tax benefits, but PPF's independence from employment makes it particularly valuable for self-employed individuals and as supplementary retirement savings for salaried employees." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent animate-in slide-in-from-left duration-700", children: "Future of PPF in Changing Economic Environment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "PPF's future relevance continues despite evolving investment alternatives like mutual funds, REITs, and digital gold. The scheme's government guarantee, tax-free status, and simplicity maintain appeal particularly among risk-averse investors and those seeking guaranteed retirement savings components. Potential regulatory changes might include interest rate adjustments, contribution limit revisions, or digital account management enhancements. The fundamental value proposition of safe, tax-efficient, long-term wealth creation ensures PPF remains relevant in India's savings culture, particularly as financial literacy improves and more individuals appreciate diversified portfolio approaches combining guaranteed and market-linked instruments for optimal risk-adjusted returns." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, {}) }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExportShareButtons,
          {
            calculatorType: "ppf-india",
            inputs: {
              currentBalance,
              annualContribution,
              contributionType,
              yearsToMaturity,
              interestRate
            },
            results,
            title: "PPF Maturity Estimate"
          }
        ) }),
        showShareModal && results && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ShareResultsModal,
          {
            isOpen: showShareModal,
            onClose: () => setShowShareModal(false),
            shareData: {
              stepsPerDay: 0,
              distancePerDay: 0,
              caloriesPerDay: 0,
              targetWeightLoss: `₹${Math.round(results.maturityAmount).toLocaleString("en-IN")}`,
              timeframe: yearsToMaturity,
              timeframeUnit: "years",
              weightUnit: "PPF",
              currentBMI: parseFloat(annualContribution || "0"),
              targetBMI: results.maturityAmount,
              weeklyWeightLoss: results.totalInterest / (parseFloat(yearsToMaturity) * 52)
            }
          }
        )
      ]
    }
  );
};
export {
  PPFCalculatorIndia as default
};
