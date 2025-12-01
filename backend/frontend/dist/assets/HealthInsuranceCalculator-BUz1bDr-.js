import { r as reactExports, R as React, j as jsxRuntimeExports, A as Activity, H as Heart, D as DollarSign, C as Calculator, T as TrendingUp, a5 as Info, c as Shield } from "./index-CK9G4vW7.js";
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
const HealthInsuranceCalculator = () => {
  const [inputs, setInputs] = reactExports.useState({
    age: 35,
    spouseAge: 33,
    numChildren: 2,
    location: "Texas",
    annualIncome: 85e3,
    employerContribution: 3600,
    currentHealthStatus: "good",
    preExistingConditions: false,
    smoker: false,
    preferredDeductible: 2500,
    maxOutOfPocket: 8e3,
    preferredCoinsurance: 20,
    doctorVisitsPerYear: 4,
    prescriptionsPerMonth: 2,
    chronicConditions: false,
    hospitalVisitsPerYear: 0,
    familyMedicalHistory: false,
    planType: "ppo",
    networkPreference: "broad",
    hsa_eligible: true
  });
  const [results, setResults] = reactExports.useState(null);
  const handleInputChange = (field, value) => {
    setInputs((prev) => ({
      ...prev,
      [field]: typeof value === "boolean" ? value : field === "location" || field === "currentHealthStatus" || field === "planType" || field === "networkPreference" ? value : parseFloat(value) || 0
    }));
  };
  const calculateHealthInsurance = reactExports.useCallback(() => {
    const {
      age,
      spouseAge,
      numChildren,
      annualIncome,
      employerContribution,
      currentHealthStatus,
      preExistingConditions,
      smoker,
      preferredDeductible,
      maxOutOfPocket,
      preferredCoinsurance,
      doctorVisitsPerYear,
      prescriptionsPerMonth,
      chronicConditions,
      hospitalVisitsPerYear,
      familyMedicalHistory,
      planType,
      networkPreference,
      hsa_eligible
    } = inputs;
    let basePremium = 450;
    if (age > 50) basePremium += 150;
    else if (age > 40) basePremium += 75;
    else if (age < 30) basePremium -= 50;
    if (spouseAge > 0) {
      let spousePremium = 400;
      if (spouseAge > 50) spousePremium += 140;
      else if (spouseAge > 40) spousePremium += 70;
      else if (spouseAge < 30) spousePremium -= 45;
      basePremium += spousePremium;
    }
    basePremium += numChildren * 275;
    if (smoker) basePremium *= 1.5;
    if (preExistingConditions) basePremium *= 1.3;
    if (chronicConditions) basePremium *= 1.25;
    if (familyMedicalHistory) basePremium *= 1.1;
    if (currentHealthStatus === "excellent") basePremium *= 0.9;
    else if (currentHealthStatus === "poor") basePremium *= 1.4;
    if (planType === "hmo") basePremium *= 0.85;
    else if (planType === "epo") basePremium *= 0.95;
    else if (planType === "ppo") basePremium *= 1.1;
    if (networkPreference === "narrow") basePremium *= 0.9;
    else if (networkPreference === "broad") basePremium *= 1.05;
    const fpl = 3e4;
    const incomeRatio = annualIncome / fpl;
    let subsidyEligible = false;
    let subsidyAmount = 0;
    if (incomeRatio <= 4 && annualIncome >= fpl) {
      subsidyEligible = true;
      if (incomeRatio <= 1.33) subsidyAmount = basePremium * 0.7;
      else if (incomeRatio <= 1.5) subsidyAmount = basePremium * 0.6;
      else if (incomeRatio <= 2) subsidyAmount = basePremium * 0.5;
      else if (incomeRatio <= 2.5) subsidyAmount = basePremium * 0.4;
      else if (incomeRatio <= 3) subsidyAmount = basePremium * 0.3;
      else if (incomeRatio <= 4) subsidyAmount = basePremium * 0.2;
    }
    const netMonthlyPremium = Math.max(0, basePremium - subsidyAmount - employerContribution / 12);
    const annualPremium = netMonthlyPremium * 12;
    const copayAmount = doctorVisitsPerYear * 35 + hospitalVisitsPerYear * 250;
    const prescriptionCosts = prescriptionsPerMonth * 12 * 25;
    let estimatedMedicalExpenses = doctorVisitsPerYear * 200 + hospitalVisitsPerYear * 5e3;
    if (chronicConditions) estimatedMedicalExpenses += 3e3;
    if (preExistingConditions) estimatedMedicalExpenses += 2e3;
    const deductibleAmount = Math.min(preferredDeductible, estimatedMedicalExpenses);
    const remainingExpenses = Math.max(0, estimatedMedicalExpenses - preferredDeductible);
    const coinsuranceAmount = remainingExpenses * (preferredCoinsurance / 100);
    const totalOutOfPocket = Math.min(
      deductibleAmount + coinsuranceAmount + copayAmount + prescriptionCosts,
      maxOutOfPocket
    );
    const totalAnnualCost = annualPremium + totalOutOfPocket;
    const planRecommendations = {
      bronze: {
        premium: basePremium * 0.75,
        deductible: 7e3,
        maxOutOfPocket: 8700
      },
      silver: {
        premium: basePremium * 1,
        deductible: 4500,
        maxOutOfPocket: 8700
      },
      gold: {
        premium: basePremium * 1.35,
        deductible: 1500,
        maxOutOfPocket: 8700
      },
      platinum: {
        premium: basePremium * 1.75,
        deductible: 350,
        maxOutOfPocket: 8200
      }
    };
    const costBreakdown = {
      premiums: annualPremium,
      deductible: deductibleAmount,
      copays: copayAmount,
      coinsurance: coinsuranceAmount,
      prescriptions: prescriptionCosts
    };
    const calculatedResults = {
      estimatedMonthlyPremium: basePremium,
      annualPremium,
      totalAnnualCost,
      outOfPocketEstimate: totalOutOfPocket,
      deductibleAmount,
      coinsuranceAmount,
      copayAmount,
      subsidyEligible,
      subsidyAmount,
      netMonthlyPremium,
      planRecommendations,
      costBreakdown
    };
    setResults(calculatedResults);
  }, [inputs]);
  React.useEffect(() => {
    calculateHealthInsurance();
  }, [calculateHealthInsurance]);
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
      title: "Health Insurance Premium Calculator",
      description: "Calculate health insurance premiums and compare plans based on your age, location, health status, and coverage needs. Get personalized recommendations with AI analysis.",
      keywords: "health insurance calculator, premium calculator, healthcare costs, insurance plans, ACA marketplace, health insurance comparison",
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
                    label: "Your Age",
                    type: "number",
                    value: inputs.age.toString(),
                    onChange: (e) => handleInputChange("age", e.target.value),
                    min: "18",
                    max: "80"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Spouse Age (if applicable)",
                    type: "number",
                    value: inputs.spouseAge.toString(),
                    onChange: (e) => handleInputChange("spouseAge", e.target.value),
                    min: "0",
                    max: "80"
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
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2", children: "Location (State)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: inputs.location,
                      onChange: (e) => handleInputChange("location", e.target.value),
                      className: "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Texas", children: "Texas" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "California", children: "California" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Florida", children: "Florida" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "New York", children: "New York" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Illinois", children: "Illinois" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Other", children: "Other" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Annual Household Income",
                    type: "number",
                    value: inputs.annualIncome.toString(),
                    onChange: (e) => handleInputChange("annualIncome", e.target.value),
                    placeholder: "85000"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Employer Contribution (Annual)",
                    type: "number",
                    value: inputs.employerContribution.toString(),
                    onChange: (e) => handleInputChange("employerContribution", e.target.value),
                    placeholder: "3600"
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-6 h-6 text-green-600 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "Health Profile" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2", children: "Current Health Status" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: inputs.currentHealthStatus,
                      onChange: (e) => handleInputChange("currentHealthStatus", e.target.value),
                      className: "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "excellent", children: "Excellent" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "good", children: "Good" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "fair", children: "Fair" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "poor", children: "Poor" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "checkbox",
                        id: "smoker",
                        checked: inputs.smoker,
                        onChange: (e) => handleInputChange("smoker", e.target.checked),
                        className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "smoker", className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: "Smoker" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "checkbox",
                        id: "preExisting",
                        checked: inputs.preExistingConditions,
                        onChange: (e) => handleInputChange("preExistingConditions", e.target.checked),
                        className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "preExisting", className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: "Pre-existing Conditions" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "checkbox",
                        id: "chronic",
                        checked: inputs.chronicConditions,
                        onChange: (e) => handleInputChange("chronicConditions", e.target.checked),
                        className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "chronic", className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: "Chronic Conditions" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "checkbox",
                        id: "familyHistory",
                        checked: inputs.familyMedicalHistory,
                        onChange: (e) => handleInputChange("familyMedicalHistory", e.target.checked),
                        className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "familyHistory", className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: "Family Medical History" })
                  ] })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-6 h-6 text-red-600 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "Healthcare Usage" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Doctor Visits per Year",
                    type: "number",
                    value: inputs.doctorVisitsPerYear.toString(),
                    onChange: (e) => handleInputChange("doctorVisitsPerYear", e.target.value),
                    min: "0",
                    max: "50"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Prescriptions per Month",
                    type: "number",
                    value: inputs.prescriptionsPerMonth.toString(),
                    onChange: (e) => handleInputChange("prescriptionsPerMonth", e.target.value),
                    min: "0",
                    max: "20"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Hospital Visits per Year",
                    type: "number",
                    value: inputs.hospitalVisitsPerYear.toString(),
                    onChange: (e) => handleInputChange("hospitalVisitsPerYear", e.target.value),
                    min: "0",
                    max: "10"
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-6 h-6 text-purple-600 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "Coverage Preferences" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Preferred Deductible",
                    type: "number",
                    value: inputs.preferredDeductible.toString(),
                    onChange: (e) => handleInputChange("preferredDeductible", e.target.value),
                    placeholder: "2500"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Max Out-of-Pocket",
                    type: "number",
                    value: inputs.maxOutOfPocket.toString(),
                    onChange: (e) => handleInputChange("maxOutOfPocket", e.target.value),
                    placeholder: "8000"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Preferred Coinsurance (%)",
                    type: "number",
                    value: inputs.preferredCoinsurance.toString(),
                    onChange: (e) => handleInputChange("preferredCoinsurance", e.target.value),
                    min: "0",
                    max: "50"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2", children: "Plan Type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: inputs.planType,
                      onChange: (e) => handleInputChange("planType", e.target.value),
                      className: "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "hmo", children: "HMO" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ppo", children: "PPO" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "epo", children: "EPO" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pos", children: "POS" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2", children: "Network Preference" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: inputs.networkPreference,
                      onChange: (e) => handleInputChange("networkPreference", e.target.value),
                      className: "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "narrow", children: "Narrow Network" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "standard", children: "Standard Network" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "broad", children: "Broad Network" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      id: "hsaEligible",
                      checked: inputs.hsa_eligible,
                      onChange: (e) => handleInputChange("hsa_eligible", e.target.checked),
                      className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "hsaEligible", className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: "HSA Eligible Plan Preferred" })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-6 h-6 text-blue-600 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "Premium Estimate" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Monthly Premium" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-blue-600 dark:text-blue-400", children: formatCurrency(results.estimatedMonthlyPremium) })
                ] }),
                results.subsidyEligible && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "After Subsidies" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-green-600 dark:text-green-400", children: formatCurrency(results.netMonthlyPremium) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Estimated Out-of-Pocket" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-purple-600 dark:text-purple-400", children: formatCurrency(results.outOfPocketEstimate) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Total Annual Cost" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-orange-600 dark:text-orange-400", children: formatCurrency(results.totalAnnualCost) })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-6 h-6 text-green-600 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "Plan Comparison" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border border-gray-200 dark:border-gray-600 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-orange-600", children: "Bronze" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium", children: [
                      formatCurrency(results.planRecommendations.bronze.premium),
                      "/mo"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: [
                    "Deductible: ",
                    formatCurrency(results.planRecommendations.bronze.deductible)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-blue-50 dark:bg-blue-900/20", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-blue-600", children: "Silver" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium", children: [
                      formatCurrency(results.planRecommendations.silver.premium),
                      "/mo"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: [
                    "Deductible: ",
                    formatCurrency(results.planRecommendations.silver.deductible)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border border-gray-200 dark:border-gray-600 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-yellow-600", children: "Gold" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium", children: [
                      formatCurrency(results.planRecommendations.gold.premium),
                      "/mo"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: [
                    "Deductible: ",
                    formatCurrency(results.planRecommendations.gold.deductible)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border border-gray-200 dark:border-gray-600 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gray-600", children: "Platinum" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium", children: [
                      formatCurrency(results.planRecommendations.platinum.premium),
                      "/mo"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: [
                    "Deductible: ",
                    formatCurrency(results.planRecommendations.platinum.deductible)
                  ] })
                ] })
              ] })
            ] }) })
          ] }) })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExportShareButtons,
          {
            calculatorType: "health-insurance",
            inputs,
            results,
            title: "Health Insurance Premium Estimate"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-6 h-6 text-blue-600 mr-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "Understanding Health Insurance Plans" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose dark:prose-invert max-w-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 mb-4", children: "Health insurance helps protect you from high medical costs by sharing expenses between you and your insurance company. Understanding different plan types and their costs helps you choose the right coverage for your health needs and budget." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-2", children: "Key Cost Components" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Premium:" }),
                  " Monthly payment to maintain coverage"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Deductible:" }),
                  " Amount you pay before insurance kicks in"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Copayment:" }),
                  " Fixed amount for specific services"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Coinsurance:" }),
                  " Percentage you pay after meeting deductible"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Out-of-pocket maximum:" }),
                  " Most you'll pay in a year"
                ] })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-6 h-6 text-green-600 mr-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "Health Plan Metal Tiers" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-orange-900 dark:text-orange-100 mb-2", children: "Bronze Plans (60% Coverage)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-orange-800 dark:text-orange-200", children: "Lowest premiums, highest deductibles. Good for healthy individuals who want protection against major medical expenses but don't expect frequent care." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-blue-900 dark:text-blue-100 mb-2", children: "Silver Plans (70% Coverage)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-blue-800 dark:text-blue-200", children: "Balanced premiums and out-of-pocket costs. May qualify for cost-sharing reductions if income is between 100-250% of federal poverty level." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-yellow-900 dark:text-yellow-100 mb-2", children: "Gold Plans (80% Coverage)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-yellow-800 dark:text-yellow-200", children: "Higher premiums, lower out-of-pocket costs. Good if you use medical services frequently or take expensive medications regularly." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 dark:text-gray-100 mb-2", children: "Platinum Plans (90% Coverage)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-800 dark:text-gray-200", children: "Highest premiums, lowest out-of-pocket costs. Best for those with chronic conditions or who expect high medical expenses." })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-8 h-8 text-orange-600 mr-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "Health Insurance Planning Guide" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-4", children: "Choosing the Right Plan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-gray-600 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Assess Your Health Needs:" }),
                    " Consider current conditions, medications, and expected care"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Check Provider Networks:" }),
                    " Ensure your doctors and hospitals are covered"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Calculate Total Costs:" }),
                    " Consider premiums plus expected out-of-pocket expenses"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Review Drug Formularies:" }),
                    " Check if your medications are covered"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Consider HSA Options:" }),
                    " High-deductible plans may qualify for tax-advantaged savings"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-4", children: "Cost-Saving Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-gray-600 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Use Preventive Care:" }),
                    " Most plans cover annual checkups and screenings at no cost"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Generic Medications:" }),
                    " Choose generic drugs when available to reduce costs"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "In-Network Providers:" }),
                    " Stay within your plan's network to minimize expenses"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Urgent Care vs ER:" }),
                    " Use urgent care for non-emergency situations"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "HSA Contributions:" }),
                    " Maximize tax-deductible health savings account contributions"
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-4", children: "Special Enrollment Periods" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 dark:text-white mb-1", children: "Life Events" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Marriage, birth, adoption, or loss of coverage" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-6 h-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 dark:text-white mb-1", children: "Income Changes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Significant income increase or decrease affecting subsidies" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 dark:text-white mb-1", children: "Coverage Loss" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Job loss, employer plan changes, or aging out of parents' plan" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-yellow-800 dark:text-yellow-200 mb-1", children: "Important Disclaimer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-yellow-700 dark:text-yellow-300", children: "This calculator provides estimates based on general market data and should not replace professional insurance advice. Actual premiums may vary significantly based on specific plan details, insurance company, exact location, and individual health factors. Always compare actual quotes from licensed insurance agents or marketplace plans." })
            ] })
          ] }) })
        ] }) }) })
      ]
    }
  );
};
export {
  HealthInsuranceCalculator as default
};
