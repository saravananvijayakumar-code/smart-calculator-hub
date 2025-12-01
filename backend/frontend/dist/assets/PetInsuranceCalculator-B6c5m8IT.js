import { r as reactExports, j as jsxRuntimeExports, c as Shield, D as DollarSign, T as TrendingUp, H as Heart, a5 as Info } from "./index-CK9G4vW7.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { A as AppleStyleCard } from "./AppleStyleCard-DyiWjqNf.js";
import { A as AppleStyleInput } from "./AppleStyleInput-QCKt9I4w.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { D as Dog } from "./dog-5ejxDOjF.js";
import { C as Cat } from "./cat-BGr7TTJj.js";
import { C as CircleAlert } from "./circle-alert-DCAQyr8M.js";
import { C as CircleCheckBig } from "./circle-check-big-B8N3lfE-.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
import "./EnhancedAIAnalysis-BaYCd8m5.js";
import "./badge-6THgoC_4.js";
import "./brain-CSngUEN8.js";
import "./target-4JeIm6Yk.js";
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
const dogBreeds = [
  "Mixed Breed",
  "Labrador Retriever",
  "German Shepherd",
  "Golden Retriever",
  "French Bulldog",
  "Bulldog",
  "Poodle",
  "Beagle",
  "Rottweiler",
  "Yorkshire Terrier",
  "Boxer",
  "Dachshund",
  "Siberian Husky",
  "Great Dane",
  "Doberman",
  "Shih Tzu",
  "Boston Terrier",
  "Pomeranian",
  "Havanese",
  "Cavalier King Charles",
  "Chihuahua",
  "Cocker Spaniel"
];
const catBreeds = [
  "Mixed Breed",
  "Persian",
  "Maine Coon",
  "Siamese",
  "Ragdoll",
  "Bengal",
  "Abyssinian",
  "Birman",
  "Oriental Shorthair",
  "Sphynx",
  "Devon Rex",
  "American Shorthair",
  "British Shorthair",
  "Scottish Fold",
  "Russian Blue",
  "Himalayan",
  "Burmese",
  "Exotic Shorthair",
  "Norwegian Forest",
  "Cornish Rex",
  "Manx",
  "Balinese"
];
const breedRiskFactors = {
  "Mixed Breed": 0.9,
  "French Bulldog": 1.8,
  "Bulldog": 1.9,
  "Great Dane": 1.7,
  "Rottweiler": 1.5,
  "German Shepherd": 1.4,
  "Doberman": 1.4,
  "Persian": 1.6,
  "Maine Coon": 1.4,
  "Sphynx": 1.5,
  "Scottish Fold": 1.5,
  "Himalayan": 1.6
};
function PetInsuranceCalculator() {
  const [inputs, setInputs] = reactExports.useState({
    petType: "dog",
    breed: "Mixed Breed",
    age: 3,
    zipCode: "10001",
    coverageLevel: "accident-illness",
    annualLimit: 1e4,
    deductible: 250,
    reimbursement: 80,
    preExisting: false,
    wellness: false,
    dental: false
  });
  const [results, setResults] = reactExports.useState(null);
  const calculatePremium = reactExports.useCallback(() => {
    let basePremium = 0;
    if (inputs.petType === "dog") {
      if (inputs.coverageLevel === "accident") basePremium = 20;
      else if (inputs.coverageLevel === "accident-illness") basePremium = 45;
      else basePremium = 65;
    } else {
      if (inputs.coverageLevel === "accident") basePremium = 15;
      else if (inputs.coverageLevel === "accident-illness") basePremium = 35;
      else basePremium = 50;
    }
    const breedFactor = breedRiskFactors[inputs.breed] || 1;
    basePremium *= breedFactor;
    let ageFactor = 1;
    if (inputs.age < 2) ageFactor = 0.8;
    else if (inputs.age <= 5) ageFactor = 1;
    else if (inputs.age <= 8) ageFactor = 1.3;
    else if (inputs.age <= 11) ageFactor = 1.7;
    else ageFactor = 2.2;
    basePremium *= ageFactor;
    if (inputs.annualLimit === 5e3) basePremium *= 0.85;
    else if (inputs.annualLimit === 1e4) basePremium *= 1;
    else basePremium *= 1.25;
    if (inputs.deductible === 100) basePremium *= 1.15;
    else if (inputs.deductible === 250) basePremium *= 1;
    else if (inputs.deductible === 500) basePremium *= 0.85;
    else basePremium *= 0.7;
    if (inputs.reimbursement === 70) basePremium *= 0.9;
    else if (inputs.reimbursement === 80) basePremium *= 1;
    else basePremium *= 1.15;
    const zipNum = parseInt(inputs.zipCode) || 1e4;
    const locationFactor = 0.9 + zipNum % 100 / 200;
    basePremium *= locationFactor;
    let wellnessCost = 0;
    let dentalCost = 0;
    if (inputs.wellness) {
      wellnessCost = 15;
      basePremium += wellnessCost;
    }
    if (inputs.dental) {
      dentalCost = 12;
      basePremium += dentalCost;
    }
    if (inputs.preExisting) {
      basePremium *= 1.2;
    }
    const monthlyPremium = Math.round(basePremium * 100) / 100;
    const annualPremium = Math.round(monthlyPremium * 12 * 100) / 100;
    const avgAnnualClaim = inputs.petType === "dog" ? 800 : 600;
    const reimbursementDecimal = inputs.reimbursement / 100;
    const estimatedOOP = Math.round((inputs.deductible + (avgAnnualClaim - inputs.deductible) * (1 - reimbursementDecimal)) * 100) / 100;
    const coverageBreakdown = {
      accidentCoverage: inputs.annualLimit,
      illnessCoverage: inputs.coverageLevel !== "accident" ? inputs.annualLimit : 0,
      wellnessCoverage: inputs.wellness ? 300 : 0,
      dentalCoverage: inputs.dental ? inputs.annualLimit : 0
    };
    setResults({
      monthlyPremium,
      annualPremium,
      estimatedOOP,
      coverageBreakdown
    });
  }, [inputs]);
  reactExports.useEffect(() => {
    calculatePremium();
  }, [calculatePremium]);
  const breeds = inputs.petType === "dog" ? dogBreeds : catBreeds;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "Pet Insurance Premium Estimator | Dog & Cat Coverage Calculator",
      description: "Calculate pet insurance costs for dogs and cats. Compare coverage levels, deductibles, and reimbursement rates to find the best pet insurance plan for your furry friend.",
      keywords: "pet insurance calculator, dog insurance cost, cat insurance premium, pet coverage estimator, veterinary insurance",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent", children: "🐾 Pet Insurance Premium Estimator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Calculate the cost of protecting your furry family member with comprehensive pet insurance coverage" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { className: "bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold mb-6 flex items-center gap-2", children: [
                inputs.petType === "dog" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Dog, { className: "w-6 h-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Cat, { className: "w-6 h-6" }),
                "Pet Information"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Pet Type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => setInputs((prev) => ({ ...prev, petType: "dog", breed: "Mixed Breed" })),
                        className: `flex-1 py-3 px-4 rounded-lg font-medium transition-all ${inputs.petType === "dog" ? "bg-orange-500 text-white shadow-lg" : "bg-background border border-border hover:border-orange-500"}`,
                        children: "🐕 Dog"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => setInputs((prev) => ({ ...prev, petType: "cat", breed: "Mixed Breed" })),
                        className: `flex-1 py-3 px-4 rounded-lg font-medium transition-all ${inputs.petType === "cat" ? "bg-amber-500 text-white shadow-lg" : "bg-background border border-border hover:border-amber-500"}`,
                        children: "🐈 Cat"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Breed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "select",
                    {
                      value: inputs.breed,
                      onChange: (e) => setInputs((prev) => ({ ...prev, breed: e.target.value })),
                      className: "w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-orange-500",
                      children: breeds.map((breed) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: breed, children: breed }, breed))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Age (years)",
                    type: "number",
                    value: inputs.age,
                    onChange: (value) => setInputs((prev) => ({ ...prev, age: Number(value) })),
                    min: 0,
                    max: 20
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "ZIP Code",
                    type: "text",
                    value: inputs.zipCode,
                    onChange: (e) => setInputs((prev) => ({ ...prev, zipCode: e.target.value })),
                    maxLength: 5
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { className: "mt-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold mb-6 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6" }),
                "Coverage Options"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Coverage Level" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: inputs.coverageLevel,
                      onChange: (e) => setInputs((prev) => ({ ...prev, coverageLevel: e.target.value })),
                      className: "w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-orange-500",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "accident", children: "Accident Only" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "accident-illness", children: "Accident + Illness" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "comprehensive", children: "Comprehensive" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Annual Limit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: inputs.annualLimit,
                      onChange: (e) => setInputs((prev) => ({ ...prev, annualLimit: Number(e.target.value) })),
                      className: "w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-orange-500",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 5e3, children: "$5,000" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 1e4, children: "$10,000" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 999999, children: "Unlimited" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Deductible" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: inputs.deductible,
                      onChange: (e) => setInputs((prev) => ({ ...prev, deductible: Number(e.target.value) })),
                      className: "w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-orange-500",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 100, children: "$100" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 250, children: "$250" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 500, children: "$500" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 1e3, children: "$1,000" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Reimbursement %" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: inputs.reimbursement,
                      onChange: (e) => setInputs((prev) => ({ ...prev, reimbursement: Number(e.target.value) })),
                      className: "w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-orange-500",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 70, children: "70%" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 80, children: "80%" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 90, children: "90%" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Pre-existing Conditions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setInputs((prev) => ({ ...prev, preExisting: !prev.preExisting })),
                      className: `w-12 h-6 rounded-full transition-colors ${inputs.preExisting ? "bg-orange-500" : "bg-gray-300 dark:bg-gray-600"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-5 h-5 bg-white rounded-full shadow-md transition-transform ${inputs.preExisting ? "translate-x-6" : "translate-x-0.5"}` })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Wellness Add-on" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setInputs((prev) => ({ ...prev, wellness: !prev.wellness })),
                      className: `w-12 h-6 rounded-full transition-colors ${inputs.wellness ? "bg-orange-500" : "bg-gray-300 dark:bg-gray-600"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-5 h-5 bg-white rounded-full shadow-md transition-transform ${inputs.wellness ? "translate-x-6" : "translate-x-0.5"}` })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Dental Coverage" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setInputs((prev) => ({ ...prev, dental: !prev.dental })),
                      className: `w-12 h-6 rounded-full transition-colors ${inputs.dental ? "bg-orange-500" : "bg-gray-300 dark:bg-gray-600"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-5 h-5 bg-white rounded-full shadow-md transition-transform ${inputs.dental ? "translate-x-6" : "translate-x-0.5"}` })
                    }
                  )
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { className: "bg-gradient-to-br from-orange-500 to-amber-500 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-12 h-12 mx-auto mb-4 opacity-80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg opacity-90 mb-2", children: "Estimated Monthly Premium" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-5xl font-bold mb-4", children: [
                "$",
                results.monthlyPremium.toFixed(2)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl opacity-90", children: [
                "$",
                results.annualPremium.toFixed(2),
                " / year"
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5" }),
                "Coverage Breakdown"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-2 border-b border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Accident Coverage" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                    "$",
                    results.coverageBreakdown.accidentCoverage === 999999 ? "Unlimited" : results.coverageBreakdown.accidentCoverage.toLocaleString()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-2 border-b border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Illness Coverage" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: results.coverageBreakdown.illnessCoverage === 0 ? "Not Covered" : results.coverageBreakdown.illnessCoverage === 999999 ? "Unlimited" : `$${results.coverageBreakdown.illnessCoverage.toLocaleString()}` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-2 border-b border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Wellness Coverage" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: results.coverageBreakdown.wellnessCoverage === 0 ? "Not Included" : `$${results.coverageBreakdown.wellnessCoverage}` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Dental Coverage" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: results.coverageBreakdown.dentalCoverage === 0 ? "Not Included" : results.coverageBreakdown.dentalCoverage === 999999 ? "Unlimited" : `$${results.coverageBreakdown.dentalCoverage.toLocaleString()}` })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5" }),
                "Estimated Annual Costs"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-2 border-b border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Annual Premium" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                    "$",
                    results.annualPremium.toFixed(2)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-2 border-b border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Est. Out-of-Pocket" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                    "$",
                    results.estimatedOOP.toFixed(2)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-2 bg-amber-50 dark:bg-amber-950/20 rounded-lg px-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Total Annual Cost" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-lg text-amber-600 dark:text-amber-400", children: [
                    "$",
                    (results.annualPremium + results.estimatedOOP).toFixed(2)
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { className: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5" }),
                "Recommended for ",
                inputs.breed
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                breedRiskFactors[inputs.breed] && breedRiskFactors[inputs.breed] > 1.4 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 mt-0.5 text-amber-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "This breed is prone to certain health conditions. Consider comprehensive coverage with dental." })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "This breed is generally healthy. Accident + Illness coverage is often sufficient." })
                ] }),
                inputs.age > 8 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 mt-0.5 text-amber-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Senior pets benefit from higher coverage limits and wellness add-ons for preventive care." })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ExportShareButtons,
              {
                calculatorType: "pet-insurance",
                inputs,
                results,
                title: "Pet Insurance Coverage Estimate"
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PetInsuranceArticle, {})
      ]
    }
  );
}
function PetInsuranceArticle() {
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const faqs = [
    {
      q: "When is the best time to buy pet insurance?",
      a: "The best time to buy pet insurance is when your pet is young and healthy, ideally as a puppy or kitten. This ensures that you lock in lower premiums and avoid exclusions for pre-existing conditions. Most insurers don't cover conditions that existed before the policy start date, so waiting until your pet gets sick could leave you with significant gaps in coverage."
    },
    {
      q: "What's the difference between accident-only and comprehensive coverage?",
      a: "Accident-only coverage protects against injuries from accidents like broken bones, cuts, or poisoning, but doesn't cover illnesses. Comprehensive coverage includes both accidents and illnesses (like cancer, infections, or chronic conditions) plus preventive care. For most pet owners, accident + illness coverage offers the best balance of protection and cost."
    },
    {
      q: "Are pre-existing conditions covered?",
      a: "No, pet insurance does not cover pre-existing conditions - any illness or injury that occurred before coverage began or during the waiting period. However, some conditions may become eligible if they're cured and don't recur for a certain period (typically 6-12 months). This is why getting coverage early is so important."
    },
    {
      q: "How do deductibles and reimbursement rates work?",
      a: "The deductible is what you pay out-of-pocket before insurance kicks in. You can choose annual or per-incident deductibles. The reimbursement rate (typically 70-90%) is the percentage of covered costs the insurer pays after the deductible. For example, with an 80% reimbursement rate and $1,000 vet bill, you'd pay your deductible plus 20% of the remaining amount."
    },
    {
      q: "Is wellness coverage worth it?",
      a: "Wellness add-ons (also called preventive care riders) cover routine care like vaccinations, annual exams, flea prevention, and teeth cleaning. They typically cost $15-25/month and reimburse up to $250-500 annually. Whether it's worth it depends on your pet's needs - if you're diligent about preventive care, it can pay for itself. Otherwise, you might save more by paying out-of-pocket."
    },
    {
      q: "Why do certain breeds cost more to insure?",
      a: "Breed-specific pricing reflects the statistical likelihood of health problems. Brachycephalic breeds (like Bulldogs, Pugs, Persians) often have respiratory issues. Large breeds (Great Danes, Mastiffs) are prone to joint problems and have shorter lifespans. Mixed breeds typically cost less because they have fewer hereditary conditions. Insurers use veterinary data to price these risks."
    },
    {
      q: "What's typically not covered by pet insurance?",
      a: "Most policies exclude: pre-existing conditions, elective procedures (cosmetic surgeries, tail docking), breeding costs, behavioral issues, preventive care (unless you have a wellness add-on), bilateral conditions if one side was pre-existing, and experimental treatments. Some policies also exclude certain breed-specific conditions. Always read the policy exclusions carefully."
    },
    {
      q: "How do I file a claim and how long does reimbursement take?",
      a: "Most insurers use a reimbursement model: you pay the vet bill upfront, then submit a claim with the invoice and medical records. Claims are typically submitted online or via app. Processing time varies from a few days to 2-3 weeks depending on the complexity. Some insurers now offer direct payment to vets, eliminating the need for you to pay upfront."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-lg max-w-none mt-16 dark:prose-invert", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-6", children: "🐾 Complete Guide to Pet Insurance" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-6", children: `Your furry friend brings unlimited joy to your life - but unexpected vet bills can bring unlimited stress to your wallet! 💰 Whether it's a playful puppy who swallowed something they shouldn't or a senior cat developing chronic kidney disease, veterinary care costs are rising faster than ever. Pet insurance helps you say "yes" to the best care without the financial heartbreak. Let's dive into everything you need to know about protecting your four-legged family member!` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4", children: "📋 Frequently Asked Questions" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mt-6", children: faqs.map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setOpenFaq(openFaq === index ? null : index),
              className: "w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold pr-4", children: faq.q }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "transition-transform duration-300",
                    style: { transform: openFaq === index ? "rotate(180deg)" : "rotate(0deg)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5 text-orange-500 flex-shrink-0" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "overflow-hidden transition-all duration-300",
              style: {
                maxHeight: openFaq === index ? "500px" : "0",
                opacity: openFaq === index ? 1 : 0
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-4 text-muted-foreground", children: faq.a })
            }
          )
        ]
      },
      index
    )) })
  ] }) });
}
export {
  PetInsuranceCalculator as default
};
