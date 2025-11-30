import { r as reactExports, j as jsxRuntimeExports, f as Card, C as Calculator, a3 as Label, U as Input, D as DollarSign, c as Shield } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { S as Slider } from "./slider-5OVd4A4U.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { E as EnhancedAIAnalysis } from "./EnhancedAIAnalysis-BZiQW2bt.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { A as AdsterraSlot } from "./AdsterraSlot--S6-7ysu.js";
import { C as Car } from "./car-B_NUcg_I.js";
import { T as TrendingDown } from "./trending-down-BkWfhFLS.js";
import { A as Award } from "./award-DdRvOLEz.js";
import { C as CircleAlert } from "./circle-alert-CYu8dohk.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
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
function CarInsurancePremiumEstimator() {
  const [state, setState] = reactExports.useState("nsw");
  const [age, setAge] = reactExports.useState(35);
  const [gender, setGender] = reactExports.useState("male");
  const [vehicleAge, setVehicleAge] = reactExports.useState(3);
  const [vehicleValue, setVehicleValue] = reactExports.useState(3e4);
  const [vehicleType, setVehicleType] = reactExports.useState("sedan");
  const [annualKm, setAnnualKm] = reactExports.useState(15e3);
  const [parkingLocation, setParkingLocation] = reactExports.useState("garage");
  const [claimsHistory, setClaimsHistory] = reactExports.useState(0);
  const [ncdYears, setNcdYears] = reactExports.useState(5);
  const [excess, setExcess] = reactExports.useState(500);
  const [coverageType, setCoverageType] = reactExports.useState("comprehensive");
  const [result, setResult] = reactExports.useState(null);
  const stateRiskFactors = {
    nsw: 1.1,
    vic: 1,
    qld: 1.05,
    sa: 0.95,
    wa: 1,
    tas: 0.85,
    nt: 1.15,
    act: 0.9
  };
  const vehicleTypeFactors = {
    sedan: 1,
    hatchback: 0.95,
    suv: 1.1,
    ute: 1.15,
    van: 1.2,
    sports: 1.5,
    luxury: 1.4,
    electric: 1.25
  };
  const parkingFactors = {
    garage: 0.9,
    carport: 0.95,
    driveway: 1,
    street: 1.15
  };
  reactExports.useEffect(() => {
    calculatePremium();
  }, [state, age, gender, vehicleAge, vehicleValue, vehicleType, annualKm, parkingLocation, claimsHistory, ncdYears, excess, coverageType]);
  const calculatePremium = () => {
    let basePremium = 800;
    let ageAdjustment = 0;
    if (age < 25) {
      ageAdjustment = 300;
      basePremium *= 1.4;
    } else if (age < 30) {
      ageAdjustment = 150;
      basePremium *= 1.2;
    } else if (age > 65) {
      ageAdjustment = 100;
      basePremium *= 1.1;
    }
    if (gender === "male" && age < 25) {
      basePremium *= 1.1;
    }
    const locationFactor = stateRiskFactors[state];
    const locationAdjustment = basePremium * (locationFactor - 1);
    basePremium *= locationFactor;
    const vehicleFactor = vehicleTypeFactors[vehicleType];
    const valueImpact = vehicleValue / 3e4 * 0.3 + 0.7;
    const vehicleAdjustment = basePremium * (vehicleFactor * valueImpact - 1);
    basePremium *= vehicleFactor * valueImpact;
    const ageDiscount = Math.min(vehicleAge * 0.03, 0.15);
    basePremium *= 1 - ageDiscount;
    if (annualKm > 2e4) {
      basePremium *= 1.1;
    } else if (annualKm < 1e4) {
      basePremium *= 0.95;
    }
    const parkingFactor = parkingFactors[parkingLocation];
    basePremium *= parkingFactor;
    const claimsAdjustment = basePremium * (claimsHistory * 0.25);
    basePremium *= 1 + claimsHistory * 0.25;
    const ncdRate = Math.min(ncdYears * 0.1, 0.65);
    const ncdDiscount = basePremium * ncdRate;
    basePremium *= 1 - ncdRate;
    const excessDiscount = (excess - 500) / 500 * 0.1 * basePremium;
    if (excess > 500) {
      basePremium *= 1 - (excess - 500) / 500 * 0.1;
    } else if (excess < 500) {
      basePremium *= 1 + (500 - excess) / 500 * 0.15;
    }
    const comprehensivePremium = basePremium;
    const thirdPartyProperty = comprehensivePremium * 0.35;
    const thirdPartyFireTheft = comprehensivePremium * 0.55;
    let estimatedAnnualCost = comprehensivePremium;
    if (coverageType === "thirdPartyProperty") {
      estimatedAnnualCost = thirdPartyProperty;
    } else if (coverageType === "thirdPartyFireTheft") {
      estimatedAnnualCost = thirdPartyFireTheft;
    }
    const potentialSavings = comprehensivePremium * 0.25;
    setResult({
      comprehensivePremium,
      thirdPartyProperty,
      thirdPartyFireTheft,
      basePremium: 800,
      ageAdjustment,
      locationAdjustment,
      vehicleAdjustment,
      claimsAdjustment,
      excessDiscount,
      ncdDiscount,
      estimatedAnnualCost,
      potentialSavings
    });
  };
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Car Insurance Premium Calculator Australia",
      description: "Estimate your car insurance premium based on age, vehicle, location, and driving history for Australian drivers",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "top", className: "mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "w-8 h-8" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent", children: "Car Insurance Premium Calculator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Get accurate car insurance premium estimates for Australia based on your age, vehicle, location, and driving history" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-8 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950 border-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-5 h-5 text-blue-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Your Details" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "State/Territory" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: state, onValueChange: setState, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "nsw", children: "New South Wales" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vic", children: "Victoria" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "qld", children: "Queensland" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sa", children: "South Australia" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "wa", children: "Western Australia" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "tas", children: "Tasmania" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "nt", children: "Northern Territory" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "act", children: "Australian Capital Territory" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                "Your Age: ",
                age
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Slider,
                {
                  value: [age],
                  onValueChange: (value) => setAge(value[0]),
                  min: 18,
                  max: 80,
                  step: 1,
                  className: "py-4"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Gender" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: gender, onValueChange: setGender, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "male", children: "Male" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "female", children: "Female" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "other", children: "Other" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Vehicle Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: vehicleType, onValueChange: setVehicleType, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sedan", children: "Sedan" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hatchback", children: "Hatchback" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "suv", children: "SUV" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "ute", children: "Ute" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "van", children: "Van" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sports", children: "Sports Car" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "luxury", children: "Luxury Vehicle" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "electric", children: "Electric Vehicle" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Vehicle Value" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  value: vehicleValue,
                  onChange: (e) => setVehicleValue(Number(e.target.value)),
                  min: 5e3,
                  max: 2e5,
                  step: 5e3
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                "Vehicle Age: ",
                vehicleAge,
                " years"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Slider,
                {
                  value: [vehicleAge],
                  onValueChange: (value) => setVehicleAge(value[0]),
                  min: 0,
                  max: 20,
                  step: 1,
                  className: "py-4"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Annual Kilometers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  value: annualKm,
                  onChange: (e) => setAnnualKm(Number(e.target.value)),
                  min: 1e3,
                  max: 5e4,
                  step: 1e3
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Parking Location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: parkingLocation, onValueChange: setParkingLocation, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "garage", children: "Locked Garage" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "carport", children: "Carport" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "driveway", children: "Driveway" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "street", children: "Street Parking" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                "Claims in Last 5 Years: ",
                claimsHistory
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Slider,
                {
                  value: [claimsHistory],
                  onValueChange: (value) => setClaimsHistory(value[0]),
                  min: 0,
                  max: 5,
                  step: 1,
                  className: "py-4"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                "No Claim Discount Years: ",
                ncdYears
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Slider,
                {
                  value: [ncdYears],
                  onValueChange: (value) => setNcdYears(value[0]),
                  min: 0,
                  max: 10,
                  step: 1,
                  className: "py-4"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Excess Amount" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: excess.toString(), onValueChange: (value) => setExcess(Number(value)), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "250", children: "$250" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "500", children: "$500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "750", children: "$750" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "1000", children: "$1,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "1500", children: "$1,500" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-5 h-5 text-green-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Premium Estimates" })
            ] }),
            result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setCoverageType("comprehensive"),
                    className: `w-full p-4 rounded-xl border-2 transition-all ${coverageType === "comprehensive" ? "border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950" : "border-gray-200 dark:border-gray-700 hover:border-blue-300"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Comprehensive" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Full coverage" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-bold", children: [
                        formatCurrency(result.comprehensivePremium),
                        "/yr"
                      ] })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setCoverageType("thirdPartyFireTheft"),
                    className: `w-full p-4 rounded-xl border-2 transition-all ${coverageType === "thirdPartyFireTheft" ? "border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950" : "border-gray-200 dark:border-gray-700 hover:border-blue-300"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Third Party Fire & Theft" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Basic protection" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-bold", children: [
                        formatCurrency(result.thirdPartyFireTheft),
                        "/yr"
                      ] })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setCoverageType("thirdPartyProperty"),
                    className: `w-full p-4 rounded-xl border-2 transition-all ${coverageType === "thirdPartyProperty" ? "border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950" : "border-gray-200 dark:border-gray-700 hover:border-blue-300"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Third Party Property" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Minimum coverage" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-bold", children: [
                        formatCurrency(result.thirdPartyProperty),
                        "/yr"
                      ] })
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium mb-2", children: "Estimated Annual Premium" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold mb-1", children: formatCurrency(result.estimatedAnnualCost) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm opacity-90", children: [
                  "Monthly: ",
                  formatCurrency(result.estimatedAnnualCost / 12)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-4 h-4 text-amber-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: "Potential Savings" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-amber-600", children: formatCurrency(result.potentialSavings) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "By comparing quotes from multiple insurers" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-white dark:bg-gray-800 border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4" }),
                  "Premium Breakdown"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                  result.ncdDiscount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "No Claim Discount:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-green-600", children: [
                      "-",
                      formatCurrency(result.ncdDiscount)
                    ] })
                  ] }),
                  result.excessDiscount !== 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Excess Adjustment:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-medium ${result.excessDiscount > 0 ? "text-green-600" : "text-red-600"}`, children: [
                      result.excessDiscount > 0 ? "-" : "+",
                      formatCurrency(Math.abs(result.excessDiscount))
                    ] })
                  ] }),
                  result.claimsAdjustment > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Claims History:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-red-600", children: [
                      "+",
                      formatCurrency(result.claimsAdjustment)
                    ] })
                  ] })
                ] })
              ] }),
              ncdYears >= 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4 text-purple-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: "Great Driver!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  "Your ",
                  ncdYears,
                  " years claim-free driving has earned you a ",
                  Math.min(ncdYears * 10, 65),
                  "% discount"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 mt-0.5 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "This is an estimate only. Actual premiums vary by insurer and individual circumstances. Always compare quotes from multiple providers for the best rate." })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ExportShareButtons,
              {
                calculatorType: "car-insurance",
                inputs: { coverageType },
                results: result || {},
                title: "Car Insurance Premium Estimate"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-6" }),
        result && /* @__PURE__ */ jsxRuntimeExports.jsx(
          EnhancedAIAnalysis,
          {
            calculatorType: "car-insurance",
            data: {
              age,
              vehicleType,
              vehicleValue,
              vehicleAge,
              state,
              estimatedPremium: result.estimatedAnnualCost,
              estimatedAnnualCost: result.estimatedAnnualCost,
              coverageType,
              ncdYears,
              claimsHistory,
              parkingLocation,
              annualKm,
              excess,
              potentialSavings: result.potentialSavings
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-8 h-8 text-blue-600" }),
            "Understanding Car Insurance in Australia"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-6", children: "Car insurance is a critical financial protection for Australian drivers, yet many people don't fully understand how premiums are calculated or how to get the best value for their coverage. Whether you're a new driver purchasing your first policy or a seasoned motorist looking to reduce costs, understanding the factors that influence insurance premiums can save you hundreds or even thousands of dollars annually." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Types of Car Insurance Coverage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Australian car insurance comes in three main types, each offering different levels of protection and corresponding premium costs. Understanding these options is essential for choosing the right coverage for your situation and budget." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Comprehensive insurance provides the most complete protection, covering damage to your vehicle regardless of fault, as well as theft, fire, vandalism, and weather damage. It also covers damage you cause to other vehicles and property. While comprehensive insurance has the highest premiums, it offers peace of mind and financial protection in almost any scenario. This coverage is typically required if you have a car loan or lease." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Third party property damage insurance is the minimum legal requirement in most Australian states. It covers damage you cause to other people's vehicles and property but doesn't cover your own vehicle. This option has the lowest premiums but leaves you financially exposed if your car is damaged or stolen. It's most suitable for older vehicles with low market value where the cost of comprehensive coverage exceeds the vehicle's worth." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Third party fire and theft insurance sits between comprehensive and basic third party coverage. It covers damage to other vehicles and property, plus damage to your vehicle from fire or theft. This option provides more protection than basic third party at a moderate additional cost, making it popular for vehicles that are valuable enough to warrant theft protection but not expensive enough to justify comprehensive coverage." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "not-prose my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content", className: "mx-auto" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "How Insurance Premiums Are Calculated" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Insurance companies use sophisticated actuarial models to assess risk and determine premiums. While the exact formulas vary between insurers, several key factors consistently influence your insurance costs. Understanding these factors helps you make informed decisions about reducing your premiums." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Age is one of the most significant premium factors. Drivers under 25 face substantially higher premiums due to statistical evidence showing higher accident rates in this age group. Young male drivers typically pay the highest premiums, sometimes 50-100% more than drivers in their 30s and 40s. Premiums generally decrease as you gain experience, with the lowest rates typically occurring between ages 30-60. After 65, premiums may increase slightly as reflexes and vision decline." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Your vehicle's make, model, and value significantly impact premiums. Sports cars, luxury vehicles, and high-performance models attract higher premiums due to increased theft risk, expensive repair costs, and statistical correlation with higher claim rates. Conversely, family sedans and vehicles with strong safety ratings often receive lower premiums. Electric vehicles may face higher premiums due to expensive battery replacement costs and limited repair networks." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Geographic location affects premiums substantially. Urban areas typically have higher rates due to increased accident frequency, theft rates, and vandalism. Specific suburbs within cities can vary significantly—areas with high crime rates or accident statistics will have higher premiums. Regional and rural areas generally enjoy lower premiums, though this can be offset by factors like limited repair facilities and wildlife collision risks." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Your claims history is crucial to premium calculations. Even a single claim can increase your premiums for several years. Multiple claims can result in dramatic premium increases or even make it difficult to obtain coverage. Conversely, maintaining a claim-free record earns you a No Claim Discount (NCD) or No Claim Bonus, which can reduce premiums by up to 65% depending on how many consecutive claim-free years you've accumulated." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "The No Claim Discount Explained" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The No Claim Discount (NCD) is one of the most valuable benefits available to Australian drivers. It rewards claim-free driving with substantial premium reductions that grow each year you don't make a claim. Understanding how NCDs work helps you maximize this valuable discount." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Most insurers offer NCD scales that increase your discount by 10% per claim-free year, typically capping at 60-65% after six or seven years. For example, after one year without claims, you might receive a 10% discount. After two years, 20%, and so on. Once you reach the maximum discount, maintaining it requires continued claim-free driving." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Making a claim typically resets your NCD to zero or reduces it significantly, depending on the insurer's policy. However, many insurers now offer NCD protection as an add-on feature. For an additional premium, you can make one or two claims without losing your NCD. This protection is particularly valuable if you have a high NCD percentage that would be costly to rebuild." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "When switching insurers, your NCD usually transfers, but you'll need to provide proof from your previous insurer. Some insurers have partnerships allowing automatic NCD transfer, while others require you to request a letter confirming your claim-free history. Don't assume your NCD will transfer automatically—always confirm this when getting quotes." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Understanding Excess and How It Affects Premiums" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The excess (or deductible) is the amount you pay when making a claim before insurance coverage applies. Choosing the right excess involves balancing lower premiums against potential out-of-pocket costs if you need to claim." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Standard excess amounts range from $250 to $1,500, with $500-$750 being most common. Choosing a higher excess reduces your premiums because you're assuming more financial risk. For example, increasing your excess from $500 to $1,000 might reduce your annual premium by 10-15%. However, this means paying an additional $500 if you need to claim." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "In addition to your chosen excess, insurers may apply additional excess amounts based on risk factors. Age excess applies to drivers under 25, typically adding $400-$1,000 to claims. Inexperienced driver excess may apply to those who've held their license for less than two years. Some policies include excess for drivers not listed on the policy or those with suspended licenses." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "When deciding on excess amounts, consider your emergency savings and risk tolerance. If you have substantial savings and drive carefully, a higher excess can save money on premiums. However, if you'd struggle to pay a $1,000-$1,500 excess in an emergency, choosing a lower excess provides financial security despite higher premiums." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-8 h-8 text-indigo-600" }),
            "Reducing Your Insurance Costs"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Effective Strategies to Lower Premiums" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "While some premium factors like age and location are beyond your control, numerous strategies can significantly reduce your insurance costs. Implementing multiple approaches can lead to substantial savings without compromising necessary coverage." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Installing security devices can reduce premiums by 5-15%. Approved car alarms, immobilizers, GPS tracking devices, and steering wheel locks all demonstrate reduced theft risk to insurers. Many modern vehicles have factory-installed security features that qualify for discounts—ensure you inform your insurer about all security equipment in your vehicle." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Parking location significantly affects premiums. Vehicles parked in locked garages attract the lowest premiums, while street parking results in the highest. If you have access to secure parking but haven't told your insurer, updating this information could immediately reduce your premium. Even upgrading from street parking to a carport or driveway can provide meaningful savings." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Reducing annual kilometers driven can lower premiums. Many insurers offer low-mileage discounts for drivers who travel less than 10,000-12,000 kilometers annually. If you work from home, use public transport, or have reduced your driving for any reason, inform your insurer. Some companies now offer usage-based insurance where premiums are directly tied to kilometers driven, monitored through smartphone apps or vehicle telematics." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Bundling insurance policies with a single provider often yields multi-policy discounts of 10-25%. If you have home insurance, contents insurance, or multiple vehicles, combining them with one insurer can significantly reduce total insurance costs. However, always compare the bundled price against separate policies from different providers to ensure you're actually saving money." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "The Importance of Comparing Quotes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "One of the most effective ways to reduce insurance costs is simply shopping around. Premium variations between insurers for identical coverage can range from 20-40% or more, meaning you could save hundreds of dollars by comparing quotes annually." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Insurance companies regularly adjust their pricing strategies, targeting different customer segments at different times. An insurer offering competitive rates one year might increase prices significantly the next, while competitors lower their rates to attract customers. This dynamic means your cheapest option changes regularly, making annual comparison essential." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "When comparing quotes, ensure you're comparing identical coverage levels, excess amounts, and policy features. A cheaper policy might exclude coverage included in a more expensive one, such as rental car coverage, windscreen protection, or coverage for modifications. Read policy documents carefully and create a comparison spreadsheet noting all coverage differences." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Don't ignore smaller or online-only insurers when comparing quotes. While major brands have name recognition and established reputations, smaller insurers often offer competitive rates and excellent service. Check insurer financial strength ratings and customer reviews to ensure reliability, but don't automatically dismiss unfamiliar companies." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "not-prose my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content", className: "mx-auto" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "When to Make a Claim vs. Pay Out of Pocket" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Deciding whether to make an insurance claim or pay for repairs yourself is a crucial decision that significantly impacts your long-term insurance costs. Making unnecessary claims can cost you far more in increased premiums than paying for minor repairs yourself." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Consider the claim's value relative to your excess and potential premium increases. If repair costs are only slightly higher than your excess, paying yourself may be wiser. For example, if repairs cost $800 and your excess is $500, you'd only receive $300 from insurance. However, making this claim could increase your premiums by several hundred dollars annually for the next 3-5 years and reset your NCD." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Small claims (under $1,000-$1,500) often aren't financially worthwhile when considering long-term premium impacts. A single claim can increase premiums by 20-40% annually for several years. If your premium is $1,000 per year, a 30% increase costs you an extra $300 annually. Over five years, that's $1,500 in additional premiums for a small claim that might have cost $800 to pay yourself." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Reserve insurance claims for significant damage where repair costs substantially exceed your excess and where paying yourself would create financial hardship. Claims for major accidents, total vehicle loss, or damage exceeding several thousand dollars are exactly what insurance is designed to cover. Don't hesitate to claim for these situations—that's why you pay premiums." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Understanding Policy Exclusions and Limitations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Every insurance policy contains exclusions and limitations that could affect your coverage when you need it most. Understanding these before you buy prevents unpleasant surprises when making claims." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Common exclusions include damage occurring while driving under the influence of alcohol or drugs, intentional damage, wear and tear, mechanical failures, and damage from driving on unsealed roads (unless specifically covered). Some policies exclude coverage if your vehicle is used for business purposes, ride-sharing, or courier work without disclosure." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Market value limitations affect how much you'll receive for total loss claims. Insurers typically pay your vehicle's market value at the time of loss, which may be less than you paid or what you owe on a loan. New car replacement coverage (available on vehicles less than 1-2 years old) provides a new car if yours is totaled, but read the conditions carefully—some policies have mileage limits or other restrictions." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Agreed value versus market value policies handle claims differently. Agreed value policies pay a pre-agreed amount regardless of depreciation, providing certainty about claim payouts. Market value policies pay what your vehicle is worth at claim time, which can be disputed. Agreed value policies typically cost more but provide greater certainty for owners of unique, modified, or collectable vehicles." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Special Considerations for Different Driver Groups" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Different driver demographics face unique insurance challenges and opportunities. Understanding your specific situation helps you optimize coverage and costs." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Young drivers face the highest premiums but have options to reduce costs. Choosing a lower-performance vehicle significantly reduces premiums. Remaining on parents' policies as named drivers (where permitted) is often cheaper than separate policies. Some insurers offer young driver programs with telematics monitoring—safe driving earns discounts, though privacy and driving freedom trade-offs exist." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Senior drivers may see premium increases after 65-70 as insurers account for age-related factors. However, mature driver discounts, reduced annual kilometers, and excellent claim histories often offset these increases. If premiums rise significantly, don't assume all insurers will increase rates equally—shop around specifically among insurers targeting mature drivers." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "High-performance and luxury vehicle owners face premium challenges due to expensive repairs and higher theft risk. Specialist insurers focusing on prestige vehicles often provide better coverage and rates than mainstream insurers. Agreed value coverage is particularly important for these vehicles to avoid market value disputes. Consider higher excess amounts to reduce premiums if you have the financial capacity." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "The Claims Process: What to Expect" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Understanding the claims process before you need it reduces stress and ensures smoother resolution when accidents occur. Knowing your responsibilities and insurer's obligations helps you navigate claims effectively." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Immediately after an accident, prioritize safety and legal obligations. Call emergency services if anyone is injured. Exchange details with other parties including names, addresses, phone numbers, license plate numbers, and insurance information. Take photographs of damage, road conditions, and accident scene. Don't admit fault or make statements about the accident—factual information only." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Contact your insurer as soon as possible, ideally within 24-48 hours. Most insurers have 24/7 claims lines. Provide accurate information about the accident, but again, stick to facts without admitting fault. Your insurer will guide you through their specific claims process, which typically involves completing claim forms, providing photographs, and possibly having your vehicle assessed." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The assessment and repair process varies by insurer and claim type. Some insurers have preferred repair networks offering guaranteed repairs and direct billing. Others allow you to choose your repairer, though you may need to obtain quotes and handle payment before reimbursement. Ask about rental car coverage during repairs—some policies include this, others charge extra." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "If your claim is denied or you disagree with the settlement amount, you have options. Request a detailed explanation in writing. Gather additional evidence supporting your position. Many insurers have internal dispute resolution processes. If unresolved, you can escalate to the Australian Financial Complaints Authority (AFCA), which provides free, independent dispute resolution for financial services including insurance." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Future Trends in Australian Car Insurance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The Australian car insurance market is evolving rapidly with technological advances and changing mobility patterns. Understanding emerging trends helps you make informed long-term decisions about coverage." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Telematics and usage-based insurance are growing in popularity. These programs use smartphone apps or vehicle devices to monitor driving behavior—acceleration, braking, cornering, speed, and time of day. Safe drivers receive discounts or cashback, while risky drivers pay more. Privacy-conscious consumers may resist this monitoring, but potential savings of 20-30% attract many drivers, particularly young people facing high premiums." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Electric and autonomous vehicles are reshaping insurance. EVs currently face higher premiums due to expensive battery repairs and limited repairer networks, but this is changing as EV technology matures. Autonomous vehicle insurance will likely shift from individual driver coverage to manufacturer liability, fundamentally changing the insurance landscape in coming decades." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Climate change impacts are increasingly affecting insurance. More frequent severe weather events—floods, storms, bushfires—lead to higher claims and potentially higher premiums, particularly in affected areas. Some insurers are adjusting coverage for climate-related damage or increasing premiums in high-risk regions. Consider climate risks when choosing where to live and vehicle type." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6", children: "Subscription and pay-per-drive insurance models are emerging, offering flexibility for occasional drivers. Instead of annual policies, you might pay only for months you need coverage or even per trip. These models suit people with multiple vehicles, seasonal usage, or those reducing car dependency. While currently niche, these could become mainstream as mobility patterns change." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-8" })
      ] })
    }
  );
}
export {
  CarInsurancePremiumEstimator as default
};
