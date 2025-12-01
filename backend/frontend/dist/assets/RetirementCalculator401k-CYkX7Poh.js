import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a4 as Label, V as Input, a5 as Info } from "./index-CK9G4vW7.js";
import { S as Slider } from "./slider-DWqvXvDh.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { W as Wallet } from "./wallet-DxIJPdsI.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
import "./EnhancedAIAnalysis-BaYCd8m5.js";
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
function RetirementCalculator401k() {
  const [currentAge, setCurrentAge] = reactExports.useState("30");
  const [retirementAge, setRetirementAge] = reactExports.useState("65");
  const [currentSalary, setCurrentSalary] = reactExports.useState("");
  const [currentBalance, setCurrentBalance] = reactExports.useState("");
  const [contributionPercent, setContributionPercent] = reactExports.useState([10]);
  const [employerMatch, setEmployerMatch] = reactExports.useState("50");
  const [employerMatchLimit, setEmployerMatchLimit] = reactExports.useState("6");
  const [salaryGrowthRate, setSalaryGrowthRate] = reactExports.useState("3");
  const [returnRate, setReturnRate] = reactExports.useState("7");
  const [result, setResult] = reactExports.useState(null);
  const calculate401k = () => {
    const age = parseInt(currentAge);
    const retAge = parseInt(retirementAge);
    const salary = parseFloat(currentSalary);
    const currentBal = parseFloat(currentBalance) || 0;
    if (!age || !retAge || !salary || age >= retAge || age < 18 || retAge > 100) {
      setResult(null);
      return;
    }
    const yearsToRetirement = retAge - age;
    const contributionRate = contributionPercent[0] / 100;
    const empMatch = parseFloat(employerMatch) / 100;
    const empMatchLimit = parseFloat(employerMatchLimit) / 100;
    const salaryGrowth = parseFloat(salaryGrowthRate) / 100;
    const annualReturn = parseFloat(returnRate) / 100;
    let balance = currentBal;
    let currentYearSalary = salary;
    let totalPersonalContributions = 0;
    let totalEmployerContributions = 0;
    const yearlyProjections = [];
    const contributionLimit2024 = 23e3;
    const catchUpLimit = 7500;
    for (let year = 1; year <= yearsToRetirement; year++) {
      const currentEmployeeAge = age + year - 1;
      let maxContribution = contributionLimit2024;
      if (currentEmployeeAge >= 50) {
        maxContribution += catchUpLimit;
      }
      let employeeContribution = currentYearSalary * contributionRate;
      employeeContribution = Math.min(employeeContribution, maxContribution);
      const matchableContribution = Math.min(currentYearSalary * empMatchLimit, employeeContribution);
      const employerContribution = matchableContribution * empMatch;
      balance = balance * (1 + annualReturn);
      balance += employeeContribution + employerContribution;
      totalPersonalContributions += employeeContribution;
      totalEmployerContributions += employerContribution;
      yearlyProjections.push({
        year,
        age: currentEmployeeAge + 1,
        contribution: employeeContribution,
        employerMatch: employerContribution,
        balance,
        totalContributions: totalPersonalContributions + totalEmployerContributions
      });
      currentYearSalary *= 1 + salaryGrowth;
    }
    const currentAnnualContribution = salary * contributionRate;
    const maxCurrentContribution = age >= 50 ? contributionLimit2024 + catchUpLimit : contributionLimit2024;
    const finalAnnualContribution = Math.min(currentAnnualContribution, maxCurrentContribution);
    const currentEmployerMatch = Math.min(salary * empMatchLimit, finalAnnualContribution) * empMatch;
    setResult({
      monthlyContribution: finalAnnualContribution / 12,
      annualContribution: finalAnnualContribution,
      employerMatch: currentEmployerMatch,
      totalContributions: totalPersonalContributions + totalEmployerContributions + currentBal,
      finalBalance: balance,
      totalEmployerMatch: totalEmployerContributions,
      totalGrowth: balance - (totalPersonalContributions + totalEmployerContributions + currentBal),
      yearlyProjections
    });
  };
  reactExports.useEffect(() => {
    calculate401k();
  }, [
    currentAge,
    retirementAge,
    currentSalary,
    currentBalance,
    contributionPercent,
    employerMatch,
    employerMatchLimit,
    salaryGrowthRate,
    returnRate
  ]);
  const currentContributionLimit = parseInt(currentAge) >= 50 ? 30500 : 23e3;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "401(k) Retirement Calculator 2024 | US Retirement Planning Calculator",
      description: "Calculate your 401(k) retirement savings with employer matching, contribution limits, and compound growth. Plan your retirement with accurate projections and strategies.",
      keywords: "401k calculator, retirement calculator, 401k planning, employer match calculator, retirement savings, compound interest, retirement planning USA",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-5 w-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "401(k) Planning Details" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter your information to calculate your 401(k) retirement projections with employer matching." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "currentAge", children: "Current Age" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "currentAge",
                      type: "number",
                      placeholder: "30",
                      min: "18",
                      max: "100",
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
                      placeholder: "65",
                      min: "50",
                      max: "100",
                      value: retirementAge,
                      onChange: (e) => setRetirementAge(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "currentSalary", children: "Current Annual Salary (USD)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "currentSalary",
                      type: "number",
                      placeholder: "75000",
                      value: currentSalary,
                      onChange: (e) => setCurrentSalary(e.target.value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "currentBalance", children: "Current 401(k) Balance (USD)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "currentBalance",
                      type: "number",
                      placeholder: "25000",
                      value: currentBalance,
                      onChange: (e) => setCurrentBalance(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                    "Contribution Percentage: ",
                    contributionPercent[0],
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Slider,
                    {
                      value: contributionPercent,
                      onValueChange: setContributionPercent,
                      min: 1,
                      max: 25,
                      step: 0.5,
                      className: "w-full"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    "2024 limit: $",
                    currentContributionLimit.toLocaleString()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "employerMatch", children: "Employer Match Rate (%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "employerMatch",
                      type: "number",
                      placeholder: "50",
                      min: "0",
                      max: "100",
                      value: employerMatch,
                      onChange: (e) => setEmployerMatch(e.target.value)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "e.g., 50% means 50¢ per $1 you contribute" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "employerMatchLimit", children: "Employer Match Limit (%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "employerMatchLimit",
                      type: "number",
                      placeholder: "6",
                      min: "0",
                      max: "25",
                      value: employerMatchLimit,
                      onChange: (e) => setEmployerMatchLimit(e.target.value)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Maximum salary % eligible for matching" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "salaryGrowthRate", children: "Annual Salary Growth (%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "salaryGrowthRate",
                      type: "number",
                      step: "0.1",
                      placeholder: "3",
                      value: salaryGrowthRate,
                      onChange: (e) => setSalaryGrowthRate(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "returnRate", children: "Expected Annual Return (%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "returnRate",
                      type: "number",
                      step: "0.1",
                      placeholder: "7",
                      value: returnRate,
                      onChange: (e) => setReturnRate(e.target.value)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Historical S&P 500 average: ~10%" })
                ] })
              ] })
            ] }) })
          ] }),
          result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 bg-green-50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-green-800", children: "Projected Balance at Retirement" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-green-600", children: [
                    "$",
                    result.finalBalance.toLocaleString("en-US", { maximumFractionDigits: 0 })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-green-700 mt-1", children: [
                    "At age ",
                    retirementAge
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-blue-200 bg-blue-50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-blue-800", children: "Monthly Contribution" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-blue-600", children: [
                    "$",
                    result.monthlyContribution.toLocaleString("en-US", { maximumFractionDigits: 0 })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-blue-700 mt-1", children: "Your contribution" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-200 bg-purple-50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-purple-800", children: "Annual Employer Match" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-purple-600", children: [
                    "$",
                    result.employerMatch.toLocaleString("en-US", { maximumFractionDigits: 0 })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-purple-700 mt-1", children: "Free money!" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-orange-200 bg-orange-50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-orange-800", children: "Total Growth" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-orange-600", children: [
                    "$",
                    result.totalGrowth.toLocaleString("en-US", { maximumFractionDigits: 0 })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-orange-700 mt-1", children: "Investment gains" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Contribution Breakdown" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Your Total Contributions:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      "$",
                      (result.totalContributions - result.totalEmployerMatch - parseFloat(currentBalance || "0")).toLocaleString()
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Employer Match Total:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      "$",
                      result.totalEmployerMatch.toLocaleString()
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Starting Balance:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      "$",
                      parseFloat(currentBalance || "0").toLocaleString()
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Investment Growth:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      "$",
                      result.totalGrowth.toLocaleString()
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t pt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Final Balance:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", children: [
                      "$",
                      result.finalBalance.toLocaleString()
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Current Year Details" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Annual Contribution:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      "$",
                      result.annualContribution.toLocaleString()
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Monthly Contribution:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      "$",
                      result.monthlyContribution.toLocaleString()
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Employer Match:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      "$",
                      result.employerMatch.toLocaleString()
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Contribution %:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      contributionPercent[0],
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t pt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Years to Retirement:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: parseInt(retirementAge) - parseInt(currentAge) })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Growth Projection Summary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Key milestones in your retirement journey" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [10, 20, 30, parseInt(retirementAge) - parseInt(currentAge)].map((years) => {
                const projection = result.yearlyProjections[Math.min(years - 1, result.yearlyProjections.length - 1)];
                if (!projection) return null;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-gray-50 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mb-1", children: years === parseInt(retirementAge) - parseInt(currentAge) ? "At Retirement" : `After ${years} Years` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg font-bold text-blue-600", children: [
                    "$",
                    projection.balance.toLocaleString("en-US", { maximumFractionDigits: 0 })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                    "Age ",
                    projection.age
                  ] })
                ] }, years);
              }) }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Understanding 401(k) Retirement Plans" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A 401(k) plan is an employer-sponsored retirement savings account that allows you to contribute pre-tax dollars from your paycheck, reducing your current taxable income while building wealth for retirement. Many employers offer matching contributions, which is essentially free money that can significantly boost your retirement savings." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "How 401(k) Plans Work:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pre-tax Contributions:" }),
                    " Money is deducted from your paycheck before taxes, lowering your current tax bill"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Employer Matching:" }),
                    " Many employers match a percentage of your contributions, typically 50% to 100% up to 3-6% of salary"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tax-deferred Growth:" }),
                    " Your investments grow without paying taxes until you withdraw in retirement"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Contribution Limits:" }),
                    " For 2024, you can contribute up to $23,000 ($30,500 if 50 or older)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Vesting:" }),
                    " You may need to work for a certain period before employer contributions are fully yours"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Types of 401(k) Contributions:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Traditional 401(k):" }),
                    " Pre-tax contributions, taxed upon withdrawal in retirement"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Roth 401(k):" }),
                    " After-tax contributions, tax-free withdrawals in retirement (if available)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Catch-up Contributions:" }),
                    " Additional $7,500 allowed for employees 50 and older"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Employer Match:" }),
                    " Free money from your employer, often the best return on investment available"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "The Power of Compound Growth:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The key to successful 401(k) investing is starting early and contributing consistently. Compound growth means your money earns returns, and those returns earn returns over time. Even small contributions in your 20s can grow to substantial amounts by retirement due to decades of compounding." })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "401(k) Investment Strategies and Best Practices" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Maximize Your Employer Match:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Always contribute enough to get the full employer match" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "This is typically an immediate 50-100% return on investment" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Missing the match is like turning down free money" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Some employers offer "true-up" matching for bonus periods' }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Understand your vesting schedule for employer contributions" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Smart Contribution Strategies:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Start with at least the employer match, then increase gradually" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consider increasing contributions with each pay raise" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Use automatic escalation features if available" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Maximize contributions if you're a high earner" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consider Roth 401(k) if in a lower tax bracket now" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Investment Allocation Guidelines:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Your 401(k) investment allocation should reflect your age, risk tolerance, and retirement timeline. A common rule of thumb is to subtract your age from 100 to determine your stock allocation percentage (e.g., a 30-year-old might have 70% stocks, 30% bonds). However, many financial advisors now recommend more aggressive allocations given longer life expectancies and low interest rates." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg mt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Sample Age-Based Allocations:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 20s-30s: 80-90% stocks, 10-20% bonds (aggressive growth)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 40s: 70-80% stocks, 20-30% bonds (moderate growth)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 50s: 60-70% stocks, 30-40% bonds (balanced)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 60s+: 40-60% stocks, 40-60% bonds (conservative)" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Common 401(k) Mistakes to Avoid:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Not Contributing Enough:" }),
                    " Missing out on employer match or not maximizing tax benefits"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Poor Investment Choices:" }),
                    " Being too conservative early or too aggressive near retirement"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "High Fees:" }),
                    " Not paying attention to expense ratios in investment options"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Early Withdrawals:" }),
                    " Taking loans or withdrawals that hurt long-term growth"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Not Increasing Contributions:" }),
                    " Failing to increase contributions with salary increases"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Forgetting About Old Accounts:" }),
                    " Leaving 401(k)s with former employers without management"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Advanced 401(k) Strategies:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'High earners should consider maximizing their 401(k) contributions, especially if they exceed IRA contribution limits. The "mega backdoor Roth" strategy allows high earners to contribute after-tax dollars to 401(k) plans and convert them to Roth IRAs. Some plans also allow in-service withdrawals or Roth conversions during employment.' })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Retirement Planning Beyond 401(k)" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "The Three-Legged Stool of Retirement:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Financial advisors often refer to retirement planning as a three-legged stool: employer-sponsored plans (401k), personal savings (IRAs, taxable accounts), and Social Security. Diversifying across all three provides the most stable retirement foundation." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold mb-2", children: "401(k) Plans" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Employer-sponsored" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• High contribution limits" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Potential employer match" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Limited investment options" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold mb-2", children: "Personal Savings" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• IRAs (traditional/Roth)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Taxable investment accounts" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• More investment flexibility" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• No employer dependence" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold mb-2", children: "Social Security" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Government-provided" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Inflation-adjusted" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Lifetime benefits" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Delayed retirement credits" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Retirement Income Rules of Thumb:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "70-80% Rule:" }),
                    " Plan to need 70-80% of pre-retirement income in retirement"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "4% Rule:" }),
                    " Withdraw 4% of your portfolio value in the first year of retirement, then adjust for inflation"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "10x Rule:" }),
                    " Aim to have 10-12 times your final salary saved by retirement"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Age-Based Targets:" }),
                    " Have 1x salary saved by 30, 3x by 40, 6x by 50, 8x by 60"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Healthcare and Long-term Care Planning:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Healthcare costs are often underestimated in retirement planning. Medicare doesn't cover everything, and long-term care can be extremely expensive. Consider Health Savings Accounts (HSAs) for triple tax advantages, and research long-term care insurance options while you're still healthy and employed." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Estate Planning Considerations:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Your 401(k) should be part of a comprehensive estate plan. Ensure your beneficiaries are up to date, understand required minimum distributions (RMDs) starting at age 73, and consider the tax implications for your heirs. Roth conversions during lower-income years can help reduce future tax burdens." })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Frequently Asked Questions" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How much should I contribute to my 401(k)?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "At minimum, contribute enough to get your full employer match. Ideally, aim to contribute 10-15% of your salary. High earners should consider maximizing the annual contribution limit ($23,000 in 2024, $30,500 if 50+)." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What if I can't afford to maximize my 401(k)?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Start with whatever you can afford, even if it's just 1-2%. The key is to start contributing and increase your contribution rate over time. Many plans offer automatic escalation features that increase your contribution by 1% annually." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Should I choose traditional or Roth 401(k) contributions?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Traditional 401(k) contributions reduce current taxes but are taxed in retirement. Roth contributions are made with after-tax dollars but grow tax-free. Choose Roth if you expect to be in a higher tax bracket in retirement, traditional if you expect lower." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Can I take money out of my 401(k) before retirement?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Generally, withdrawals before age 59½ incur a 10% penalty plus income taxes. Some plans allow loans or hardship withdrawals, but these should be last resorts as they hurt your long-term retirement savings." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What happens to my 401(k) if I change jobs?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You typically have four options: leave it with your former employer, roll it to your new employer's plan, roll it to an IRA, or cash out (not recommended). Rolling to an IRA often provides more investment options and lower fees." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How should I invest my 401(k) money?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Choose a diversified portfolio appropriate for your age and risk tolerance. Target-date funds are good default options for beginners. Younger investors can typically afford more aggressive allocations focused on growth." })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator provides estimates only and should not be relied upon for final retirement planning decisions." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Actual investment returns will vary and past performance does not guarantee future results." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Calculations assume constant contribution rates and returns, which may not reflect real-world scenarios." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Employer match details, vesting schedules, and plan rules vary significantly between employers." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator does not account for inflation, taxes in retirement, or required minimum distributions." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Consider consulting with a qualified financial advisor for comprehensive retirement planning." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• 401(k) rules and contribution limits are subject to change by legislation and IRS regulations." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Early withdrawals may be subject to penalties and taxes not reflected in these calculations." })
            ] }) })
          ] })
        ] }),
        result && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExportShareButtons,
          {
            calculatorType: "401k-us",
            inputs: { currentAge, retirementAge, currentBalance, currentSalary, contributionPercent, employerMatch, employerMatchLimit, salaryGrowthRate, returnRate },
            results: result,
            title: "401(k) Retirement Projection"
          }
        ) })
      ]
    }
  );
}
export {
  RetirementCalculator401k
};
