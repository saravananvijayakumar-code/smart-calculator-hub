import { r as reactExports, R as React, j as jsxRuntimeExports, D as DollarSign, c as Shield, C as Calculator, T as TrendingUp, a5 as Info } from "./index-CK9G4vW7.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { A as AppleStyleCard } from "./AppleStyleCard-DyiWjqNf.js";
import { A as AppleStyleInput } from "./AppleStyleInput-QCKt9I4w.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { U as Users } from "./users-Cu_sVhna.js";
import { B as BookOpen } from "./book-open-BOdZdTJO.js";
import { C as CircleAlert } from "./circle-alert-DCAQyr8M.js";
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
const LifeInsuranceCalculator = () => {
  const [inputs, setInputs] = reactExports.useState({
    currentAge: 35,
    annualIncome: 75e3,
    spouseIncome: 45e3,
    numChildren: 2,
    childrenAges: "8, 12",
    currentDebts: 25e3,
    mortgageBalance: 2e5,
    creditCardDebt: 8e3,
    studentLoans: 12e3,
    otherDebts: 5e3,
    monthlyExpenses: 5500,
    yearsOfSupport: 20,
    educationCosts: 1e5,
    emergencyFund: 35e3,
    existingLifeInsurance: 1e5,
    existingSavings: 5e4,
    retirementSavings: 125e3,
    expectedInflation: 3,
    rateOfReturn: 6
  });
  const [results, setResults] = reactExports.useState(null);
  const handleInputChange = (field, value) => {
    setInputs((prev) => ({
      ...prev,
      [field]: field === "childrenAges" ? value : parseFloat(value) || 0
    }));
  };
  const calculateLifeInsurance = reactExports.useCallback(() => {
    const {
      currentAge,
      annualIncome,
      spouseIncome,
      numChildren,
      currentDebts,
      mortgageBalance,
      creditCardDebt,
      studentLoans,
      otherDebts,
      monthlyExpenses,
      yearsOfSupport,
      educationCosts,
      emergencyFund,
      existingLifeInsurance,
      existingSavings,
      retirementSavings,
      expectedInflation,
      rateOfReturn
    } = inputs;
    const inflationRate = expectedInflation / 100;
    const returnRate = rateOfReturn / 100;
    const realReturnRate = (1 + returnRate) / (1 + inflationRate) - 1;
    const annualExpenses = monthlyExpenses * 12;
    const socialSecurityBenefit = Math.min(annualIncome * 0.4, 35e3);
    const netIncomeNeeded = annualExpenses - spouseIncome * 0.8 - socialSecurityBenefit;
    let incomeReplacement = 0;
    if (Math.abs(realReturnRate) > 1e-3) {
      incomeReplacement = Math.max(0, netIncomeNeeded) * (1 - Math.pow(1 + realReturnRate, -yearsOfSupport)) / realReturnRate;
    } else {
      incomeReplacement = Math.max(0, netIncomeNeeded) * yearsOfSupport;
    }
    const totalCurrentDebts = mortgageBalance + creditCardDebt + studentLoans + otherDebts + currentDebts;
    const finalExpenses = 15e3 * Math.pow(1 + inflationRate, 1);
    const childrenAgesList = inputs.childrenAges.split(",").map((age) => parseInt(age.trim())).filter((age) => !isNaN(age));
    let totalEducationCosts = 0;
    childrenAgesList.forEach((childAge) => {
      const yearsToCollege = Math.max(0, 18 - childAge);
      const inflatedEducationCost = educationCosts * Math.pow(1 + inflationRate, yearsToCollege);
      totalEducationCosts += inflatedEducationCost / Math.pow(1 + returnRate, yearsToCollege);
    });
    if (childrenAgesList.length === 0 && numChildren > 0) {
      const avgYearsToCollege = 10;
      const inflatedEducationCost = educationCosts * Math.pow(1 + inflationRate, avgYearsToCollege);
      totalEducationCosts = inflatedEducationCost / Math.pow(1 + returnRate, avgYearsToCollege) * numChildren;
    }
    const emergencyReserve = Math.max(emergencyFund, annualExpenses * 0.75);
    const totalCoverageNeeded = incomeReplacement + totalCurrentDebts + finalExpenses + totalEducationCosts + emergencyReserve;
    const availableAssets = existingSavings + retirementSavings * 0.3;
    const netCoverageNeeded = Math.max(0, totalCoverageNeeded - availableAssets);
    const additionalCoverageNeeded = Math.max(0, netCoverageNeeded - existingLifeInsurance);
    const getMonthlyRate = (age) => {
      if (age < 25) return 0.8;
      if (age < 30) return 1;
      if (age < 35) return 1.3;
      if (age < 40) return 1.7;
      if (age < 45) return 2.4;
      if (age < 50) return 3.5;
      if (age < 55) return 5.2;
      if (age < 60) return 7.8;
      return 12;
    };
    const monthlyRate = getMonthlyRate(currentAge);
    const monthlyPremiumEstimate = additionalCoverageNeeded / 1e3 * monthlyRate;
    const annualPremiumEstimate = monthlyPremiumEstimate * 12;
    const presentValueNeeded = totalCoverageNeeded;
    const coverageBreakdown = {
      incomeReplacement,
      immediateNeeds: totalCurrentDebts + finalExpenses,
      futureObligations: totalEducationCosts,
      emergencyBuffer: emergencyReserve
    };
    const calculatedResults = {
      totalCoverageNeeded,
      additionalCoverageNeeded,
      incomeReplacement,
      debtCoverage: totalCurrentDebts,
      educationFunding: totalEducationCosts,
      emergencyReserve,
      finalExpenses,
      presentValueNeeded,
      monthlyPremiumEstimate,
      annualPremiumEstimate,
      coverageBreakdown
    };
    setResults(calculatedResults);
  }, [inputs]);
  React.useEffect(() => {
    calculateLifeInsurance();
  }, [calculateLifeInsurance]);
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "Life Insurance Coverage Calculator",
      description: "Calculate the optimal life insurance coverage amount based on your income, debts, expenses, and financial goals. Get personalized recommendations with AI analysis.",
      keywords: "life insurance calculator, coverage calculator, term life insurance, whole life insurance, insurance needs analysis",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-blue-600 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "Personal Information" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Current Age",
                    type: "number",
                    value: inputs.currentAge.toString(),
                    onChange: (e) => handleInputChange("currentAge", e.target.value),
                    min: "18",
                    max: "80"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Annual Income",
                    type: "number",
                    value: inputs.annualIncome.toString(),
                    onChange: (e) => handleInputChange("annualIncome", e.target.value),
                    placeholder: "75000"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Spouse Annual Income",
                    type: "number",
                    value: inputs.spouseIncome.toString(),
                    onChange: (e) => handleInputChange("spouseIncome", e.target.value),
                    placeholder: "45000"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Number of Children",
                    type: "number",
                    value: inputs.numChildren.toString(),
                    onChange: (e) => handleInputChange("numChildren", e.target.value),
                    min: "0",
                    max: "10"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Children's Ages (comma separated)",
                    type: "text",
                    value: inputs.childrenAges,
                    onChange: (e) => handleInputChange("childrenAges", e.target.value),
                    placeholder: "8, 12, 15"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Monthly Expenses",
                    type: "number",
                    value: inputs.monthlyExpenses.toString(),
                    onChange: (e) => handleInputChange("monthlyExpenses", e.target.value),
                    placeholder: "5500"
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-6 h-6 text-green-600 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "Debts & Obligations" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Mortgage Balance",
                    type: "number",
                    value: inputs.mortgageBalance.toString(),
                    onChange: (e) => handleInputChange("mortgageBalance", e.target.value),
                    placeholder: "200000"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Credit Card Debt",
                    type: "number",
                    value: inputs.creditCardDebt.toString(),
                    onChange: (e) => handleInputChange("creditCardDebt", e.target.value),
                    placeholder: "8000"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Student Loans",
                    type: "number",
                    value: inputs.studentLoans.toString(),
                    onChange: (e) => handleInputChange("studentLoans", e.target.value),
                    placeholder: "12000"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Other Debts",
                    type: "number",
                    value: inputs.otherDebts.toString(),
                    onChange: (e) => handleInputChange("otherDebts", e.target.value),
                    placeholder: "5000"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Education Costs per Child",
                    type: "number",
                    value: inputs.educationCosts.toString(),
                    onChange: (e) => handleInputChange("educationCosts", e.target.value),
                    placeholder: "100000"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Years of Income Support",
                    type: "number",
                    value: inputs.yearsOfSupport.toString(),
                    onChange: (e) => handleInputChange("yearsOfSupport", e.target.value),
                    min: "5",
                    max: "30"
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6 text-purple-600 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "Current Assets & Insurance" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Existing Life Insurance",
                    type: "number",
                    value: inputs.existingLifeInsurance.toString(),
                    onChange: (e) => handleInputChange("existingLifeInsurance", e.target.value),
                    placeholder: "100000"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Current Savings",
                    type: "number",
                    value: inputs.existingSavings.toString(),
                    onChange: (e) => handleInputChange("existingSavings", e.target.value),
                    placeholder: "50000"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Retirement Savings",
                    type: "number",
                    value: inputs.retirementSavings.toString(),
                    onChange: (e) => handleInputChange("retirementSavings", e.target.value),
                    placeholder: "125000"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Emergency Fund Target",
                    type: "number",
                    value: inputs.emergencyFund.toString(),
                    onChange: (e) => handleInputChange("emergencyFund", e.target.value),
                    placeholder: "35000"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Expected Inflation Rate (%)",
                    type: "number",
                    value: inputs.expectedInflation.toString(),
                    onChange: (e) => handleInputChange("expectedInflation", e.target.value),
                    step: "0.1",
                    min: "1",
                    max: "10"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Expected Rate of Return (%)",
                    type: "number",
                    value: inputs.rateOfReturn.toString(),
                    onChange: (e) => handleInputChange("rateOfReturn", e.target.value),
                    step: "0.1",
                    min: "3",
                    max: "12"
                  }
                )
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-6 h-6 text-blue-600 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "Coverage Analysis" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Total Coverage Needed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-blue-600 dark:text-blue-400", children: formatCurrency(results.totalCoverageNeeded) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Additional Coverage Needed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-green-600 dark:text-green-400", children: formatCurrency(results.additionalCoverageNeeded) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Estimated Monthly Premium" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-purple-600 dark:text-purple-400", children: formatCurrency(results.monthlyPremiumEstimate) })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-6 h-6 text-green-600 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "Coverage Breakdown" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-400", children: "Income Replacement" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-900 dark:text-white", children: formatCurrency(results.coverageBreakdown.incomeReplacement) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-400", children: "Immediate Needs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-900 dark:text-white", children: formatCurrency(results.coverageBreakdown.immediateNeeds) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-400", children: "Future Obligations" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-900 dark:text-white", children: formatCurrency(results.coverageBreakdown.futureObligations) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-400", children: "Emergency Buffer" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-900 dark:text-white", children: formatCurrency(results.coverageBreakdown.emergencyBuffer) })
                ] })
              ] })
            ] }) })
          ] }) })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExportShareButtons,
          {
            calculatorType: "life-insurance",
            inputs,
            results,
            title: "Life Insurance Coverage Estimate"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-6 h-6 text-blue-600 mr-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "Understanding Life Insurance Needs" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose dark:prose-invert max-w-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 mb-4", children: "Life insurance serves as a financial safety net for your loved ones, replacing your income and covering essential expenses if something happens to you. The right coverage amount depends on multiple factors including your income, debts, family size, and future financial obligations." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-2", children: "Key Components of Coverage" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Income Replacement:" }),
                  " Typically 10-12 times your annual income to maintain your family's lifestyle"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Debt Coverage:" }),
                  " Pay off mortgage, credit cards, and other outstanding debts"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Education Funding:" }),
                  " Ensure children can attend college without financial burden"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Final Expenses:" }),
                  " Cover funeral costs and immediate expenses"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Emergency Buffer:" }),
                  " Additional funds for unexpected situations"
                ] })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-6 h-6 text-green-600 mr-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "Types of Life Insurance" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-blue-900 dark:text-blue-100 mb-2", children: "Term Life Insurance" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-blue-800 dark:text-blue-200", children: "Provides coverage for a specific period (10, 20, or 30 years). Most affordable option with pure death benefit protection. Ideal for temporary needs like mortgage protection." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-green-50 dark:bg-green-900/20 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-green-900 dark:text-green-100 mb-2", children: "Whole Life Insurance" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-800 dark:text-green-200", children: "Permanent coverage with cash value component. Higher premiums but provides lifelong protection and investment growth. Good for estate planning and long-term wealth building." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-purple-900 dark:text-purple-100 mb-2", children: "Universal Life Insurance" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-purple-800 dark:text-purple-200", children: "Flexible permanent insurance allowing premium and death benefit adjustments. Cash value earns interest based on market performance. Suitable for changing financial needs." })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-8 h-8 text-orange-600 mr-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "Life Insurance Planning Guide" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-4", children: "Factors Affecting Premium Costs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-gray-600 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Age:" }),
                    " Younger applicants receive significantly lower premiums"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Health:" }),
                    " Medical exams and health history impact rates"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Lifestyle:" }),
                    " Smoking, drinking, and risky hobbies increase costs"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Coverage Amount:" }),
                    " Higher death benefits mean higher premiums"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Policy Type:" }),
                    " Term vs. permanent insurance pricing differences"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-4", children: "Money-Saving Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-gray-600 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Buy Young:" }),
                    " Locking in rates early saves money long-term"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Annual Premiums:" }),
                    " Pay yearly instead of monthly to avoid fees"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Shop Around:" }),
                    " Compare quotes from multiple insurers"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Group Policies:" }),
                    " Employer-sponsored coverage may be cost-effective"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Healthy Lifestyle:" }),
                    " Maintain good health for better rates"
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-4", children: "When to Review Your Coverage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 dark:text-white mb-1", children: "Life Changes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Marriage, divorce, birth of children, or career changes" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-6 h-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 dark:text-white mb-1", children: "Financial Milestones" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Debt payoff, income changes, or major purchases" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 dark:text-white mb-1", children: "Policy Changes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Term expiration, rate increases, or new product options" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-yellow-800 dark:text-yellow-200 mb-1", children: "Important Disclaimer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-yellow-700 dark:text-yellow-300", children: "This calculator provides estimates based on general assumptions and should not replace professional financial advice. Actual insurance needs and premiums may vary based on individual circumstances, health conditions, and insurer underwriting guidelines. Consult with a licensed insurance professional for personalized recommendations." })
            ] })
          ] }) })
        ] }) }) })
      ]
    }
  );
};
export {
  LifeInsuranceCalculator as default
};
