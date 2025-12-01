import { r as reactExports, R as React, j as jsxRuntimeExports, G as Globe, c as Shield, C as Calculator, T as TrendingUp, a4 as Info } from "./index-C_OXA6OQ.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { A as AppleStyleCard } from "./AppleStyleCard-bNXb4kfM.js";
import { A as AppleStyleInput } from "./AppleStyleInput-BFag-KzQ.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { P as Plane } from "./plane-EAqiph1M.js";
import { C as CircleAlert } from "./circle-alert-CYu8dohk.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./EnhancedAIAnalysis-BZiQW2bt.js";
import "./badge-fo2YvZos.js";
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
const TravelInsuranceCalculator = () => {
  const [inputs, setInputs] = reactExports.useState({
    tripCost: 5e3,
    tripDuration: 10,
    destination: "Europe",
    travelerAge: 35,
    numTravelers: 2,
    tripType: "leisure",
    departureDate: "",
    preExistingConditions: false,
    adventureActivities: false,
    rentalCar: true,
    cancelForAnyReason: false,
    medicalCoverage: 5e4,
    evacuationCoverage: 1e5,
    baggageDelay: true,
    tripDelay: true
  });
  const [results, setResults] = reactExports.useState(null);
  const handleInputChange = (field, value) => {
    setInputs((prev) => ({
      ...prev,
      [field]: typeof value === "boolean" ? value : field === "destination" || field === "tripType" || field === "departureDate" ? value : parseFloat(value) || 0
    }));
  };
  const calculateTravelInsurance = reactExports.useCallback(() => {
    const {
      tripCost,
      tripDuration,
      destination,
      travelerAge,
      numTravelers,
      tripType,
      preExistingConditions,
      adventureActivities,
      rentalCar,
      cancelForAnyReason,
      medicalCoverage,
      evacuationCoverage,
      baggageDelay,
      tripDelay
    } = inputs;
    let basePremium = tripCost * 0.055;
    const destMultipliers = {
      "Europe": 1.1,
      "Asia": 1.3,
      "Africa": 1.5,
      "South America": 1.2,
      "Caribbean": 1,
      "North America": 0.9,
      "Australia": 1.2,
      "Middle East": 1.6
    };
    basePremium *= destMultipliers[destination] || 1;
    if (tripDuration > 30) basePremium *= 1.4;
    else if (tripDuration > 14) basePremium *= 1.2;
    else if (tripDuration < 7) basePremium *= 0.9;
    let ageMultiplier = 1;
    if (travelerAge < 25) ageMultiplier = 1.1;
    else if (travelerAge >= 60) ageMultiplier = 1.5;
    else if (travelerAge >= 70) ageMultiplier = 2;
    else if (travelerAge >= 80) ageMultiplier = 3;
    basePremium *= ageMultiplier;
    if (preExistingConditions) basePremium *= 1.4;
    if (adventureActivities) basePremium *= 1.6;
    if (cancelForAnyReason) basePremium *= 1.5;
    if (tripType === "business") basePremium *= 1.2;
    else if (tripType === "cruise") basePremium *= 1.3;
    const tripCancellationPremium = basePremium * 0.4;
    const medicalPremium = medicalCoverage / 1e4 * 35;
    const evacuationPremium = evacuationCoverage / 1e4 * 25;
    const baggageDelayPremium = baggageDelay ? 15 : 0;
    const tripDelayPremium = tripDelay ? 20 : 0;
    const adventureAddonPremium = adventureActivities ? basePremium * 0.3 : 0;
    const totalPremium = (tripCancellationPremium + medicalPremium + evacuationPremium + baggageDelayPremium + tripDelayPremium + adventureAddonPremium) * numTravelers;
    setResults({
      totalPremium,
      costPerTraveler: totalPremium / numTravelers,
      coverageBreakdown: {
        tripCancellation: tripCancellationPremium * numTravelers,
        medical: medicalPremium * numTravelers,
        evacuation: evacuationPremium * numTravelers,
        baggageDelay: baggageDelayPremium * numTravelers,
        tripDelay: tripDelayPremium * numTravelers,
        adventureAddon: adventureAddonPremium * numTravelers
      },
      recommendedCoverage: {
        tripCancellation: tripCost * 1.1,
        medicalExpense: destination === "Europe" || destination === "Asia" ? 1e5 : 5e4,
        evacuation: 15e4,
        baggage: 3e3
      }
    });
  }, [inputs]);
  React.useEffect(() => {
    calculateTravelInsurance();
  }, [calculateTravelInsurance]);
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Travel Insurance Coverage Estimator",
      description: "Calculate travel insurance costs based on trip value, destination, duration, and traveler age. Get comprehensive coverage estimates for international and domestic trips.",
      keywords: "travel insurance calculator, trip insurance cost, travel coverage, international insurance, vacation insurance",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "w-6 h-6 text-blue-600 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "✈️ Trip Details" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Total Trip Cost",
                    type: "number",
                    value: inputs.tripCost.toString(),
                    onChange: (e) => handleInputChange("tripCost", e.target.value),
                    placeholder: "5000"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Trip Duration (days)",
                    type: "number",
                    value: inputs.tripDuration.toString(),
                    onChange: (e) => handleInputChange("tripDuration", e.target.value),
                    min: "1",
                    max: "365"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2", children: "Destination" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: inputs.destination,
                      onChange: (e) => handleInputChange("destination", e.target.value),
                      className: "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "North America", children: "North America" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Europe", children: "Europe" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Asia", children: "Asia" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Africa", children: "Africa" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "South America", children: "South America" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Caribbean", children: "Caribbean" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Australia", children: "Australia/Oceania" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Middle East", children: "Middle East" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2", children: "Trip Type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: inputs.tripType,
                      onChange: (e) => handleInputChange("tripType", e.target.value),
                      className: "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "leisure", children: "Leisure/Vacation" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "business", children: "Business Travel" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cruise", children: "Cruise" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "adventure", children: "Adventure/Extreme Sports" })
                      ]
                    }
                  )
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-6 h-6 text-purple-600 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "👥 Traveler Information" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Primary Traveler Age",
                    type: "number",
                    value: inputs.travelerAge.toString(),
                    onChange: (e) => handleInputChange("travelerAge", e.target.value),
                    min: "1",
                    max: "100"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Number of Travelers",
                    type: "number",
                    value: inputs.numTravelers.toString(),
                    onChange: (e) => handleInputChange("numTravelers", e.target.value),
                    min: "1",
                    max: "10"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-4", children: [
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "preExisting", className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: "Pre-existing Medical Conditions" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "checkbox",
                        id: "adventure",
                        checked: inputs.adventureActivities,
                        onChange: (e) => handleInputChange("adventureActivities", e.target.checked),
                        className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "adventure", className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: "Adventure/Extreme Activities" })
                  ] })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6 text-green-600 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "🛡️ Coverage Options" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Medical Coverage Limit",
                    type: "number",
                    value: inputs.medicalCoverage.toString(),
                    onChange: (e) => handleInputChange("medicalCoverage", e.target.value),
                    placeholder: "50000"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Emergency Evacuation Limit",
                    type: "number",
                    value: inputs.evacuationCoverage.toString(),
                    onChange: (e) => handleInputChange("evacuationCoverage", e.target.value),
                    placeholder: "100000"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "checkbox",
                        id: "cfar",
                        checked: inputs.cancelForAnyReason,
                        onChange: (e) => handleInputChange("cancelForAnyReason", e.target.checked),
                        className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "cfar", className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: "Cancel For Any Reason (CFAR)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "checkbox",
                        id: "baggageDelay",
                        checked: inputs.baggageDelay,
                        onChange: (e) => handleInputChange("baggageDelay", e.target.checked),
                        className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "baggageDelay", className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: "Baggage Delay Coverage" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "checkbox",
                        id: "tripDelay",
                        checked: inputs.tripDelay,
                        onChange: (e) => handleInputChange("tripDelay", e.target.checked),
                        className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "tripDelay", className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: "Trip Delay Coverage" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "checkbox",
                        id: "rentalCar",
                        checked: inputs.rentalCar,
                        onChange: (e) => handleInputChange("rentalCar", e.target.checked),
                        className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "rentalCar", className: "ml-2 text-sm text-gray-700 dark:text-gray-300", children: "Rental Car Damage" })
                  ] })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: results && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-6 h-6 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Premium Estimate" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-white/10 backdrop-blur rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Total Premium" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold", children: formatCurrency(results.totalPremium) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-3 bg-white/10 backdrop-blur rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Per Traveler" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold", children: formatCurrency(results.costPerTraveler) })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-6 h-6 text-green-600 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "Coverage Breakdown" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: Object.entries(results.coverageBreakdown).map(([key, value]) => value > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-400 capitalize", children: key.replace(/([A-Z])/g, " $1").trim() }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-900 dark:text-white", children: formatCurrency(value) })
              ] }, key)) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-6 h-6 text-blue-600 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: "Recommended Limits" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: Object.entries(results.recommendedCoverage).map(([key, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-400 capitalize", children: key.replace(/([A-Z])/g, " $1").trim() }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-blue-600 dark:text-blue-400", children: formatCurrency(value) })
              ] }, key)) })
            ] }) })
          ] }) })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExportShareButtons,
          {
            calculatorType: "travel-insurance",
            inputs,
            results,
            title: "Travel Insurance Coverage Estimate"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 prose prose-lg max-w-none dark:prose-invert", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "✈️ Travel Insurance Ultimate Guide: Protect Your Adventure!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6", children: "Planning a trip? Don't let unexpected events ruin your vacation! 🌍 Travel insurance provides peace of mind whether you're exploring Europe, relaxing on a Caribbean beach, or trekking through Asia. Let's dive into everything you need to know!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4", children: "🎯 What Does Travel Insurance Cover?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-gray-900 dark:text-white mb-3", children: "✅ Typically Covered" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-500 mr-2", children: "✓" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Trip Cancellation:" }),
                      " Get refund if you can't travel"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-500 mr-2", children: "✓" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Medical Emergencies:" }),
                      " Hospital & doctor visits abroad"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-500 mr-2", children: "✓" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Emergency Evacuation:" }),
                      " Medical flight home ($50K+!)"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-500 mr-2", children: "✓" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Lost/Delayed Baggage:" }),
                      " Compensation for belongings"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-500 mr-2", children: "✓" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Trip Delays:" }),
                      " Hotel & meal reimbursement"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-gray-900 dark:text-white mb-3", children: "❌ Usually NOT Covered" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 mr-2", children: "✗" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pre-existing conditions" }),
                      " (unless waiver purchased)"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 mr-2", children: "✗" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Risky activities" }),
                      " (skydiving, scuba without cert)"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 mr-2", children: "✗" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Travel to high-risk" }),
                      " countries with warnings"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 mr-2", children: "✗" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Change of mind" }),
                      " (need CFAR upgrade!)"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 mr-2", children: "✗" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Non-refundable costs" }),
                      " you already knew about"
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4", children: "🎫 Types of Travel Insurance Plans" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-xl shadow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-gray-900 dark:text-white mb-2", children: "🏖️ Single Trip Insurance" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm mb-2", children: "Covers one specific trip from departure to return. Best for occasional travelers! Cost: 4-10% of trip cost." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-600 dark:text-green-400 text-xs font-semibold", children: "✓ Best for: Once-a-year vacations, honeymoons, expensive cruises" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-xl shadow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-gray-900 dark:text-white mb-2", children: "🌍 Annual/Multi-Trip Insurance" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm mb-2", children: "Covers unlimited trips within one year (usually max 30-90 days each). Cost: $200-$500/year." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-600 dark:text-green-400 text-xs font-semibold", children: "✓ Best for: Frequent travelers, business trips, digital nomads" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-xl shadow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-gray-900 dark:text-white mb-2", children: "⚕️ Medical-Only Travel Insurance" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm mb-2", children: "Focuses on emergency medical care abroad. No cancellation coverage. Cost: $50-$200 for 2-week trip." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-600 dark:text-green-400 text-xs font-semibold", children: "✓ Best for: Budget travelers, short trips, travelers with non-refundable flights" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-xl shadow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-gray-900 dark:text-white mb-2", children: "🚢 Specialty Insurance (Cruise, Adventure, etc.)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm mb-2", children: "Tailored coverage for specific travel types. Includes extreme sports, ski trips, or cruise-specific benefits." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-600 dark:text-green-400 text-xs font-semibold", children: "✓ Best for: Ski vacations, adventure tours, cruise passengers" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-orange-600 dark:text-orange-400 mb-4", children: "💡 When Should You Buy Travel Insurance?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-green-700 dark:text-green-400 mb-3", children: "✅ Definitely Buy If..." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Your trip costs $3,000+ (big financial loss risk!)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Traveling to remote or developing countries" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• You have pre-existing health conditions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Traveling during hurricane/typhoon season" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Elderly travelers or those with mobility issues" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Multi-leg international trip with connections" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Renting expensive vacation property" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-yellow-700 dark:text-yellow-400 mb-3", children: "🤔 Consider Skipping If..." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Road trip within your home country" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Trip costs under $500 total" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• You have excellent existing coverage (check first!)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Flexible/refundable bookings already" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Weekend getaway with no flights" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Visiting family domestically" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-6 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4", children: "🎯 Pro Tips to Maximize Value" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "⏰" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-900 dark:text-white mb-2", children: "Buy Within 14 Days of Deposit" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Many policies waive pre-existing condition exclusions if you buy within 10-21 days of your first trip payment!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "🔍" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-900 dark:text-white mb-2", children: "Read the Fine Print" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Check coverage limits, deductibles, and exclusions. Not all plans are equal! Compare 3-5 quotes." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "💳" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-900 dark:text-white mb-2", children: "Check Credit Card Benefits" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Premium credit cards may include travel insurance! But coverage is often limited. Verify what's included." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "📸" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-900 dark:text-white mb-2", children: "Document Everything" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Keep receipts, take photos, get police reports for theft. Claims need proof!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "🌡️" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-900 dark:text-white mb-2", children: "Get Medical Coverage = Replacement Cost" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Emergency medical care abroad can cost $50K+! Get $100K minimum for international trips." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "🚨" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-900 dark:text-white mb-2", children: "Emergency Assistance Numbers" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Save 24/7 emergency contact info BEFORE you leave. Add to phone contacts + print paper copy!" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4", children: "❓ Frequently Asked Questions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold text-gray-900 dark:text-white", children: "Do I need travel insurance for a cruise?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-gray-600 dark:text-gray-400 text-sm", children: "YES! Cruise insurance is highly recommended. It covers medical emergencies at sea (ship medical care is expensive!), trip interruption if you miss embarkation, and evacuation. Regular travel insurance often excludes some cruise scenarios, so get cruise-specific coverage." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold text-gray-900 dark:text-white", children: `What's "Cancel For Any Reason" (CFAR) coverage?` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-gray-600 dark:text-gray-400 text-sm", children: "CFAR lets you cancel your trip for ANY reason and get 50-75% refund of non-refundable costs. Must buy within 10-21 days of initial deposit. Adds 40-60% to premium cost. Worth it for expensive trips or uncertain plans!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-xl cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold text-gray-900 dark:text-white", children: "Does my health insurance work abroad?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-gray-600 dark:text-gray-400 text-sm", children: "Usually NO! Medicare doesn't cover foreign care. Many U.S. health plans offer limited/no international coverage. Even if covered, you'll pay upfront and file claims later. Travel medical insurance pays directly and includes evacuation (which health insurance doesn't)." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-4 rounded-xl cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold text-gray-900 dark:text-white", children: "How much does travel insurance typically cost?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-gray-600 dark:text-gray-400 text-sm", children: "4-10% of total trip cost. $5,000 trip = $200-$500 insurance. Factors: destination, age, trip length, coverage level. Seniors (70+) pay 2-3x more. Cheaper for short trips, domestic travel, or medical-only plans." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-4 rounded-xl cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold text-gray-900 dark:text-white", children: "Will travel insurance cover pandemic-related cancellations?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-gray-600 dark:text-gray-400 text-sm", children: "It depends! Post-COVID, many policies exclude pandemics or known events. Some cover COVID diagnosis preventing travel. Cancel For Any Reason (CFAR) provides the most protection. Always read the policy's pandemic/epidemic exclusions carefully!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-4 rounded-xl cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold text-gray-900 dark:text-white", children: "Can I buy travel insurance after booking my trip?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-gray-600 dark:text-gray-400 text-sm", children: "Yes, but buy ASAP! Certain benefits (like pre-existing condition waivers) require purchase within 10-21 days of initial deposit. You can buy up until departure day, but early purchase gives better protection and more coverage options." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 dark:from-red-900/30 dark:to-yellow-900/30 rounded-2xl p-8 border-4 border-orange-300 dark:border-orange-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-8 h-8 text-orange-600 dark:text-orange-400 mt-1 mr-4 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-orange-900 dark:text-orange-200 mb-3", children: "⚠️ Important Disclaimer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-orange-800 dark:text-orange-300 leading-relaxed", children: [
                "This calculator provides ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "estimates only" }),
                " for educational purposes. Actual travel insurance costs vary by provider, exact destination, traveler health status, specific coverage options, and policy terms. Prices shown are approximations based on industry averages."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-800 dark:text-orange-300 mt-3 leading-relaxed", children: "Always compare multiple quotes from licensed insurers. Read policy documents carefully. This tool does NOT constitute insurance advice. Consult with licensed travel insurance agents for personalized recommendations. Safe travels! ✈️🌍" })
            ] })
          ] }) })
        ] }) })
      ] })
    }
  );
};
export {
  TravelInsuranceCalculator as default
};
