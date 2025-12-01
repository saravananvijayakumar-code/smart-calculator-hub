import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, l as House, i as CardDescription, k as CardContent, a4 as Label, V as Input, B as Button, C as Calculator, T as TrendingUp, aE as formatCurrency, a5 as Info } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { S as Separator } from "./separator-63Q9JacM.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { A as AIAnalysis } from "./AIAnalysis-B-4zh-eH.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { C as Check } from "./check-DTsA1WpX.js";
import { C as CircleAlert } from "./circle-alert-DCAQyr8M.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
import "./EnhancedAIAnalysis-BaYCd8m5.js";
import "./brain-CSngUEN8.js";
import "./target-4JeIm6Yk.js";
import "./circle-check-big-B8N3lfE-.js";
import "./arrow-right-Bjdtr8dz.js";
import "./lightbulb-DKPyzLdJ.js";
import "./tabs-t5L32f7o.js";
import "./share-2-SpOWc355.js";
import "./link-C11IgQ5M.js";
import "./copy-BqV-1o4k.js";
import "./twitter-CFAqYlq6.js";
import "./facebook-BX8Qa6cK.js";
import "./linkedin-D9e3uSZB.js";
import "./message-circle-DZtFORhh.js";
import "./mail-DX6y6Mo7.js";
const FirstHomeBuyerCalculatorNSW = () => {
  const [propertyPrice, setPropertyPrice] = reactExports.useState("");
  const [deposit, setDeposit] = reactExports.useState("");
  const [propertyType, setPropertyType] = reactExports.useState("");
  const [purchaseLocation, setPurchaseLocation] = reactExports.useState("");
  const [isNewHome, setIsNewHome] = reactExports.useState("");
  const [annualIncome, setAnnualIncome] = reactExports.useState("");
  const [hasLivedInAustralia, setHasLivedInAustralia] = reactExports.useState("");
  const [results, setResults] = reactExports.useState(null);
  const calculateFirstHomeBuyer = () => {
    const price = parseFloat(propertyPrice);
    const depositAmount = parseFloat(deposit);
    const income = parseFloat(annualIncome) || 0;
    if (!price || !depositAmount || !propertyType || !purchaseLocation || !isNewHome) return;
    const depositPercentage = depositAmount / price * 100;
    const loanAmount = price - depositAmount;
    const lvrRatio = loanAmount / price * 100;
    let stampDuty = 0;
    let fhbStampDutyDiscount = 0;
    let fhogGrant = 0;
    let lmiPremium = 0;
    let monthlyRepayment = 0;
    stampDuty = calculateNSWStampDuty(price, false);
    const discountedStampDuty = calculateNSWStampDuty(price, true);
    fhbStampDutyDiscount = Math.max(0, stampDuty - discountedStampDuty);
    stampDuty = discountedStampDuty;
    if (isNewHome === "yes" && price <= 8e5 && propertyType !== "vacant_land") {
      fhogGrant = 1e4;
    }
    if (lvrRatio > 80) {
      lmiPremium = calculateLMI(price, lvrRatio);
    }
    const interestRate = 6.5;
    const loanTermYears = 30;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTermYears * 12;
    monthlyRepayment = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    const legalFees = 1500;
    const buildingInspection = 500;
    const pestInspection = 300;
    const conveyancingFees = 1200;
    const mortgageRegistration = 150;
    const titleSearchFees = 100;
    const totalUpfrontCosts = stampDuty + legalFees + buildingInspection + pestInspection + conveyancingFees + mortgageRegistration + titleSearchFees + lmiPremium;
    const totalSavingsNeeded = depositAmount + totalUpfrontCosts - fhogGrant;
    const totalFHBBenefits = fhbStampDutyDiscount + fhogGrant;
    const fhssMaxSavings = 5e4;
    const fhssDescription = "Save up to $50,000 in your super for your first home";
    const fhldsSupportAmount = Math.min(price * 0.2, 2e5);
    const canUseFHLDS = propertyType !== "vacant_land" && price <= 95e4;
    const affordabilityRatio = monthlyRepayment / (income / 12) * 100;
    const nhficDetails = {
      eligible: price <= 95e4 && propertyType !== "vacant_land",
      guaranteeAmount: Math.min(price * 0.15, price - depositAmount),
      description: "Up to 15% guarantee to help you avoid LMI"
    };
    const eligibilityChecks = {
      australianCitizen: hasLivedInAustralia === "yes",
      firstHomeBuyer: true,
      priceThreshold: price <= 8e5,
      neverOwnedProperty: true,
      liveInProperty: true
    };
    const qualifiesForAllBenefits = Object.values(eligibilityChecks).every((check) => check === true);
    setResults({
      propertyPrice: price,
      deposit: depositAmount,
      depositPercentage,
      loanAmount,
      lvrRatio,
      stampDuty,
      fhbStampDutyDiscount,
      fhogGrant,
      lmiPremium,
      totalUpfrontCosts,
      totalSavingsNeeded,
      monthlyRepayment,
      legalFees,
      buildingInspection,
      pestInspection,
      conveyancingFees,
      mortgageRegistration,
      titleSearchFees,
      totalFHBBenefits,
      fhssMaxSavings,
      fhssDescription,
      fhldsSupportAmount,
      canUseFHLDS,
      affordabilityRatio,
      nhficDetails,
      eligibilityChecks,
      qualifiesForAllBenefits
    });
  };
  const calculateNSWStampDuty = (value, isFirstHomeBuyer) => {
    if (isFirstHomeBuyer && value <= 65e4) {
      return 0;
    } else if (isFirstHomeBuyer && value <= 8e5) {
      return Math.max(0, (value - 65e4) * 0.0425);
    } else {
      let duty = 0;
      if (value <= 14e3) duty = value * 0.0125;
      else if (value <= 32e3) duty = 175 + (value - 14e3) * 0.015;
      else if (value <= 85e3) duty = 445 + (value - 32e3) * 0.0175;
      else if (value <= 319e3) duty = 1372.5 + (value - 85e3) * 0.035;
      else if (value <= 1064e3) duty = 9562.5 + (value - 319e3) * 0.045;
      else duty = 43087.5 + (value - 1064e3) * 0.055;
      return duty;
    }
  };
  const calculateLMI = (propertyValue, lvr) => {
    let lmiRate = 0;
    if (lvr > 95) lmiRate = 0.045;
    else if (lvr > 90) lmiRate = 0.035;
    else if (lvr > 85) lmiRate = 0.025;
    else if (lvr > 80) lmiRate = 0.015;
    return propertyValue * lmiRate;
  };
  const reset = () => {
    setPropertyPrice("");
    setDeposit("");
    setPropertyType("");
    setPurchaseLocation("");
    setIsNewHome("");
    setAnnualIncome("");
    setHasLivedInAustralia("");
    setResults(null);
  };
  const tips = [
    "First home buyers in NSW can save up to $32,475 in stamp duty for properties under $650,000",
    "The First Home Owner Grant provides $10,000 for new homes valued up to $800,000",
    "First Home Loan Deposit Scheme helps you buy with just 5% deposit without LMI",
    "Save up to $50,000 in your super through the First Home Super Saver Scheme",
    "Budget for hidden costs: inspections, conveyancing, and legal fees can add $3,000-5,000"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "First Home Buyer Calculator NSW 2024 | Calculate FHB Costs & Grants",
      description: "Complete NSW first home buyer calculator with stamp duty concessions, FHOG grants, FHLDS eligibility, and total purchase costs. Calculate savings, compare deposit scenarios, and plan your first home purchase in New South Wales.",
      keywords: "first home buyer calculator NSW, NSW stamp duty concession, first home owner grant NSW, FHLDS calculator, first home super saver scheme, NSW property calculator, first home deposit scheme",
      tips,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-5 w-5" }),
                "First Home Buyer Calculator NSW"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Calculate total costs, government grants, and eligibility for NSW first home buyers" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "propertyPrice", children: "Property Purchase Price ($)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "propertyPrice",
                    type: "number",
                    placeholder: "650000",
                    value: propertyPrice,
                    onChange: (e) => setPropertyPrice(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "deposit", children: "Your Deposit Amount ($)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "deposit",
                    type: "number",
                    placeholder: "50000",
                    value: deposit,
                    onChange: (e) => setDeposit(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "propertyType", children: "Property Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: propertyType, onValueChange: setPropertyType, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select property type" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "new_house", children: "New House/Townhouse" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "established_house", children: "Established House" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "new_apartment", children: "New Apartment/Unit" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "established_apartment", children: "Established Apartment/Unit" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vacant_land", children: "Vacant Land" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "purchaseLocation", children: "Location in NSW" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: purchaseLocation, onValueChange: setPurchaseLocation, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select location" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sydney", children: "Greater Sydney" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "regional", children: "Regional NSW" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "isNewHome", children: "Is this a new home?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: isNewHome, onValueChange: setIsNewHome, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select option" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "yes", children: "Yes - New or Newly Built" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "no", children: "No - Established Property" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "annualIncome", children: "Annual Income ($) - Optional" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "annualIncome",
                    type: "number",
                    placeholder: "80000",
                    value: annualIncome,
                    onChange: (e) => setAnnualIncome(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "hasLivedInAustralia", children: "Australian Citizen/Permanent Resident?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: hasLivedInAustralia, onValueChange: setHasLivedInAustralia, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select option" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "yes", children: "Yes" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "no", children: "No" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateFirstHomeBuyer, className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "mr-2 h-4 w-4" }),
                  "Calculate Costs"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: reset, variant: "outline", children: "Reset" })
              ] })
            ] })
          ] }),
          results && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
              "Your First Home Purchase Breakdown"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Property Price" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: formatCurrency(results.propertyPrice, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Your Deposit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-semibold text-green-600", children: [
                    formatCurrency(results.deposit, "AUD"),
                    " (",
                    results.depositPercentage.toFixed(1),
                    "%)"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Loan Amount" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: formatCurrency(results.loanAmount, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "LVR Ratio" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-semibold", children: [
                    results.lvrRatio.toFixed(1),
                    "%"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Government Benefits & Concessions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 p-3 rounded-lg space-y-2", children: [
                  results.fhbStampDutyDiscount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-green-800", children: "Stamp Duty Concession" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", className: "bg-green-600", children: formatCurrency(results.fhbStampDutyDiscount, "AUD") })
                  ] }),
                  results.fhogGrant > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-green-800", children: "First Home Owner Grant" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", className: "bg-green-600", children: formatCurrency(results.fhogGrant, "AUD") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pt-2 border-t border-green-200", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-green-900", children: "Total FHB Benefits" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", className: "bg-green-700", children: formatCurrency(results.totalFHBBenefits, "AUD") })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Upfront Costs Breakdown" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Stamp Duty" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: formatCurrency(results.stampDuty, "AUD") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "LMI Premium" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: formatCurrency(results.lmiPremium, "AUD") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Legal Fees" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: formatCurrency(results.legalFees, "AUD") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Conveyancing" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: formatCurrency(results.conveyancingFees, "AUD") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Building Inspection" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: formatCurrency(results.buildingInspection, "AUD") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Pest Inspection" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: formatCurrency(results.pestInspection, "AUD") })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center bg-blue-50 p-3 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-blue-900", children: "Total Upfront Costs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-base", children: formatCurrency(results.totalUpfrontCosts, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center bg-purple-50 p-3 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-purple-900", children: "Total Savings Needed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-base", children: formatCurrency(results.totalSavingsNeeded, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Monthly Repayment (est.)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: formatCurrency(results.monthlyRepayment, "AUD") })
                ] }),
                results.affordabilityRatio > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Affordability Ratio" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: results.affordabilityRatio > 30 ? "destructive" : "default", children: [
                    results.affordabilityRatio.toFixed(1),
                    "%"
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5 text-green-600" }),
              "NSW First Home Buyer Schemes & Programs"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-blue-900 mb-2", children: "First Home Loan Deposit Scheme (FHLDS)" }),
                results.canUseFHLDS ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-blue-800", children: "✓ You may be eligible! This scheme allows you to buy with as little as 5% deposit without paying LMI." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-700", children: [
                    "Potential LMI savings: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: formatCurrency(results.lmiPremium, "AUD") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-600 mt-2", children: "Property price limit: $950,000 in Sydney/NSW. Subject to income limits and eligibility criteria." })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-blue-800", children: "Property price or type may not meet FHLDS criteria. Scheme applies to properties up to $950,000." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-purple-900 mb-2", children: "First Home Super Saver Scheme (FHSS)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-purple-800", children: results.fhssDescription }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-purple-700 mt-2", children: [
                  "Maximum withdrawal: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: formatCurrency(results.fhssMaxSavings, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-purple-600 mt-2", children: "Save in your super with tax benefits, then withdraw for your first home deposit. Contributions are taxed at 15% instead of your marginal rate." })
              ] }),
              results.nhficDetails.eligible && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-green-900 mb-2", children: "NHFIC Guarantee (Optional)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-800", children: results.nhficDetails.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-green-700 mt-2", children: [
                  "Potential guarantee: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: formatCurrency(results.nhficDetails.guaranteeAmount, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600 mt-2", children: "Available for eligible first home buyers with participating lenders. Helps reduce LMI costs." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-amber-900 mb-2", children: "NSW Shared Equity Scheme" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-amber-800", children: "The NSW Government can contribute up to 40% equity for new homes or 30% for existing homes, helping eligible buyers with smaller deposits enter the market." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-600 mt-2", children: "Income limits apply: $90,000 for singles, $120,000 for couples. Property price caps vary by region." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-5 w-5" }),
              "Eligibility Checklist"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Australian citizen or permanent resident" }),
                results.eligibilityChecks.australianCitizen ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", className: "bg-green-600", children: "✓ Yes" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", children: "✗ No" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Never owned property before" }),
                results.eligibilityChecks.neverOwnedProperty ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", className: "bg-green-600", children: "✓ Required" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", children: "✗ Not Met" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Property under $800,000 (for full concessions)" }),
                results.eligibilityChecks.priceThreshold ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", className: "bg-green-600", children: "✓ Yes" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: "Partial concessions may apply" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Will live in the property as primary residence" }),
                results.eligibilityChecks.liveInProperty ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", className: "bg-green-600", children: "✓ Required" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", children: "✗ Not Met" })
              ] }),
              results.qualifiesForAllBenefits && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-100 border border-green-300 p-4 rounded-lg mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-900", children: "✓ You appear to meet the basic eligibility criteria for NSW first home buyer benefits!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-700 mt-2", children: "Always verify specific requirements with Service NSW and participating lenders." })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIAnalysis,
            {
              analysisRequest: {
                calculatorType: "first-home-buyer-nsw",
                data: {
                  propertyValue: results.propertyPrice,
                  deposit: results.deposit,
                  stampDuty: results.stampDuty,
                  totalCosts: results.totalSavingsNeeded,
                  monthlyRepayment: results.monthlyRepayment,
                  benefits: results.totalFHBBenefits,
                  lvrRatio: results.lvrRatio
                }
              },
              autoRun: true,
              title: "AI First Home Buyer Analysis",
              description: "Get personalized strategies to maximize your first home buyer benefits and optimize your purchase strategy."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "first-home-buyer-nsw",
              inputs: {
                propertyPrice: parseFloat(propertyPrice) || 0
              },
              results: {
                deposit: results.deposit,
                stampDuty: results.stampDuty,
                totalSavingsNeeded: results.totalSavingsNeeded,
                monthlyRepayment: results.monthlyRepayment,
                totalFHBBenefits: results.totalFHBBenefits,
                lvrRatio: results.lvrRatio
              },
              title: "First Home Buyer Calculator NSW Report",
              className: "mt-6"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Complete Guide to First Home Buying in NSW 2024" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Buying your first home in New South Wales represents one of the most significant financial decisions you'll make in your lifetime. The NSW property market offers diverse opportunities from Sydney's metropolitan areas to regional centers, each with unique characteristics, price points, and lifestyle considerations. Understanding the comprehensive landscape of first home buyer benefits, government schemes, upfront costs, and ongoing commitments is essential for making informed decisions and successfully navigating the path to homeownership. The NSW government, along with federal initiatives, provides substantial support through stamp duty concessions, grants, deposit assistance schemes, and innovative financing options designed to make the Australian dream of homeownership more accessible to first-time buyers." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "NSW Stamp Duty Concessions for First Home Buyers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Stamp duty represents the single largest upfront cost for property buyers in NSW, but first home buyers benefit from generous concessions that can save tens of thousands of dollars. For properties valued up to $650,000, eligible first home buyers pay zero stamp duty—a complete exemption that can save over $25,000 compared to standard rates. For properties between $650,000 and $800,000, concessional stamp duty rates apply, with savings gradually tapering as the property value approaches the upper threshold. This progressive concession structure means first home buyers purchasing a $700,000 property might save approximately $20,000, while those buying at $750,000 could still save around $12,000. These substantial savings can be redirected toward deposit requirements, renovation budgets, or furnishing costs, significantly improving the affordability equation for first-time buyers entering the competitive NSW property market." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "First Home Owner Grant (FHOG) in NSW" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The First Home Owner Grant provides $10,000 to eligible buyers purchasing or building a new home valued up to $800,000 in NSW. This grant applies exclusively to new dwellings, including newly constructed homes, substantially renovated homes, and new apartments or units purchased from developers. The grant does not apply to established properties, vacant land purchases, or investment properties. To qualify, applicants must be Australian citizens or permanent residents aged 18 or over, purchasing their first home to live in as their principal place of residence for at least six months. The $10,000 grant can be applied directly toward your deposit, reducing the amount you need to save before purchasing, or used to offset upfront costs like legal fees, building inspections, and conveyancing charges. When combined with stamp duty concessions, eligible first home buyers purchasing a new $650,000 property could receive total government benefits exceeding $35,000, dramatically improving purchase affordability and reducing the savings timeline." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "NSW First Home Buyer Benefits Summary:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Full stamp duty exemption for properties up to $650,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Concessional stamp duty for properties $650,000-$800,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• $10,000 First Home Owner Grant for new homes up to $800,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• First Home Loan Deposit Scheme - buy with 5% deposit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• First Home Super Saver Scheme - save up to $50,000 in super" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• NSW Shared Equity Scheme - government co-contribution up to 40%" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "First Home Loan Deposit Scheme (FHLDS)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The First Home Loan Deposit Scheme represents a game-changing federal initiative that allows eligible first home buyers to purchase property with as little as 5% deposit without paying Lender's Mortgage Insurance (LMI). The Australian Government guarantees up to 15% of the property value, allowing participating lenders to offer home loans to buyers who haven't yet saved the traditional 20% deposit. For a $700,000 property, avoiding LMI could save $20,000-$35,000 in upfront costs, dramatically reducing the barrier to entry for first-time buyers. The scheme has price caps: $950,000 in Sydney and high-cost areas, and $600,000 in regional NSW, with income limits of $125,000 for singles and $200,000 for couples. Places are allocated annually on a first-come, first-served basis through participating lenders, making early preparation and rapid decision-making crucial for securing a spot. The FHLDS cannot be combined with other government guarantee schemes but works alongside stamp duty concessions and the First Home Owner Grant." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "First Home Super Saver Scheme (FHSS)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The First Home Super Saver Scheme offers a tax-effective way to save for your first home deposit by making voluntary contributions to your superannuation fund. Eligible individuals can contribute up to $15,000 per financial year (with a lifetime cap of $50,000) and later withdraw these contributions, along with associated earnings, to put toward purchasing their first home. The key advantage lies in the tax treatment: voluntary concessional contributions are taxed at just 15% within the super fund, compared to your marginal tax rate which could be 32.5%, 37%, or 45%. For a person earning $90,000 annually contributing $15,000 per year for three years, the tax savings alone could exceed $7,500 compared to saving the same amount in a standard savings account. When withdrawn, the funds are taxed at your marginal rate less a 30% offset, creating significant net benefit for most first home savers. The scheme requires careful planning around contribution timing, eligibility verification, and coordination with your purchase timeline, but offers one of the most powerful tax advantages available to first home buyers." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "NSW Shared Equity Scheme" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The NSW Shared Equity Scheme represents an innovative approach to homeownership, with the NSW Government contributing equity to help eligible buyers purchase property with smaller deposits. Under the scheme, the government can contribute up to 40% equity for new homes or 30% for existing homes, significantly reducing the amount you need to borrow and potentially eliminating LMI requirements. For example, purchasing a $600,000 property with 40% government equity means you'd only need to secure a $360,000 mortgage, dramatically improving affordability and reducing monthly repayments. The government doesn't charge rent on its equity share, and you maintain full occupancy rights as the homeowner. When you eventually sell the property or refinance, the government receives its proportional share of any capital gain (or loss). Strict eligibility criteria apply, including income limits of $90,000 for singles and $120,000 for couples, property price caps varying by region, and requirements to occupy the property as your principal place of residence. The scheme offers a pathway to homeownership for buyers who might otherwise struggle to save sufficient deposits in Sydney's competitive market." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Hidden Costs and Upfront Expenses Beyond the Deposit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While saving for a deposit represents the most visible challenge for first home buyers, numerous additional upfront costs can catch unprepared buyers off guard. Conveyancing and legal fees typically range from $1,200-$2,500, covering the legal transfer of property ownership and contract review. Building and pest inspections, essential for identifying structural issues and potential problems, cost $500-$1,200 combined. Mortgage establishment fees, valuation costs, and title search fees add another $500-$1,500. Lender's Mortgage Insurance, while avoidable through schemes like FHLDS, can add $10,000-$40,000 for buyers with deposits below 20%. Moving costs, immediate maintenance or repairs, council rates adjustments, and connection fees for utilities create further expense layers. A comprehensive budget for purchasing a $650,000 property might include: stamp duty ($0 with FHB concession), conveyancing ($1,500), inspections ($800), mortgage costs ($800), and miscellaneous fees ($500), totaling approximately $3,600 in addition to your deposit— even with maximum government concessions. Understanding and planning for these costs prevents financial stress and ensures you're truly ready for the responsibilities of homeownership." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Ongoing Homeownership Costs and Financial Planning" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The financial commitment of homeownership extends far beyond purchase price and mortgage repayments, with ongoing costs that first home buyers must budget for to maintain financial stability. Council rates in Sydney average $1,200-$2,000 annually, varying by property value and location. Water rates add another $500-$800 per year. Strata fees for apartments can range from $2,000-$8,000+ annually, covering building maintenance, insurance, and common area upkeep. Home and contents insurance typically costs $800-$2,000 per year. Regular maintenance and repairs average 1-2% of property value annually—$6,000-$13,000 for a $650,000 home. Unexpected expenses like appliance replacements, urgent repairs, or building defects require emergency fund reserves. Energy bills, internet, and other utilities add $3,000-$6,000 annually. For a typical first home, total annual ongoing costs beyond mortgage repayments might reach $10,000-$20,000, equating to $800-$1,600 monthly on top of your mortgage. Financial institutions typically assess borrowing capacity allowing mortgage repayments of 30% of gross income, but total housing costs including rates, insurance, and maintenance can push this figure toward 40-45% for first home buyers, making comprehensive budgeting essential for sustainable homeownership." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Regional NSW Opportunities and Considerations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Regional NSW offers first home buyers compelling alternatives to Sydney's expensive property market, with median house prices in areas like Newcastle, Wollongong, Central Coast, and inland centers often 30-50% lower than Sydney equivalents. This price differential creates opportunities for larger properties, reduced mortgage stress, and faster deposit accumulation. Regional buyers access the same first home buyer concessions and federal schemes, with potentially greater benefit due to lower property values maximizing stamp duty savings and grant accessibility. However, regional purchasing requires careful consideration of employment opportunities, income potential, lifestyle preferences, and long-term capital growth prospects. Some regional areas have experienced rapid growth and gentrification, offering strong investment fundamentals, while others face population decline and limited appreciation potential. The rise of remote work has transformed regional desirability for many first home buyers, particularly those in technology, creative, and knowledge sectors. Regional first home buyers should research local market trends, employment diversity, infrastructure development plans, and demographic patterns to ensure their property choice aligns with both immediate lifestyle needs and long-term financial objectives." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Strategic First Home Buying Planning and Preparation" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Building Your Deposit: Savings Strategies and Timeline" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Accumulating a sufficient deposit represents the primary challenge for most first home buyers, requiring disciplined saving, strategic financial planning, and often significant lifestyle adjustments. With median Sydney house prices around $1.2 million and units near $750,000, even a 10% deposit represents $75,000-$120,000— a daunting figure for young professionals. Effective deposit-building strategies include automatic transfer of a fixed percentage of each paycheck to a dedicated high-interest savings account, typically 20-30% of net income for serious savers. The First Home Super Saver Scheme enables tax-advantaged saving of up to $15,000 annually, potentially reducing a 3-4 year savings timeline by 6-12 months through tax benefits. Reducing discretionary spending on dining out, entertainment, subscriptions, and holidays can free up $500-$1,500 monthly for additional deposit contributions. Many first home buyers supplement savings through side hustles, freelance work, or investment income. Family gifts or loans, while requiring careful navigation of family dynamics and lender disclosure requirements, help some buyers bridge deposit gaps. Setting clear timeline goals, tracking progress monthly, and celebrating milestones maintains motivation throughout the multi-year journey toward homeownership." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Credit Score Optimization and Financial Readiness" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Your credit score significantly influences mortgage approval likelihood, interest rates offered, and loan terms available, making credit optimization a crucial element of first home buyer preparation. Lenders typically seek credit scores above 700 for favorable rates, with scores below 600 potentially triggering higher interest rates or loan rejections. Optimizing credit involves consistently paying all bills on time, reducing credit card balances below 30% of limits, avoiding new credit applications in the 6-12 months before mortgage application, and correcting any errors in your credit report. Many first-time buyers are surprised to discover that multiple credit inquiries, even for comparison shopping, can negatively impact scores. Closing unused credit cards and consolidating debt can improve debt-to-income ratios and demonstrate financial responsibility. Beyond credit scores, lenders assess overall financial behavior through bank statements, typically reviewing 3-6 months of transactions. Regular gambling, excessive discretionary spending, frequent overdrafts, or unpaid subscriptions can raise red flags. Establishing a pattern of consistent saving, minimal discretionary spending, and responsible financial management in the 6-12 months before applying demonstrates readiness for the responsibilities of mortgage debt." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Property Selection: New vs Established, Apartments vs Houses" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'First home buyers face critical decisions about property type, each with distinct financial implications, benefits, and considerations. New properties qualify for the $10,000 First Home Owner Grant and typically offer modern amenities, energy efficiency, and lower immediate maintenance costs, but command premium prices and may appreciate more slowly than established properties in desirable locations. Established properties generally offer better value per square meter, established gardens and neighborhoods, and potentially superior locations, but require renovation budgets and immediate maintenance attention. Apartments provide affordability, lower maintenance responsibilities, and lifestyle amenities, particularly appealing to young professionals in inner-city locations, but involve strata fees, potential special levies, and sometimes limited capital growth compared to houses. Houses offer land value appreciation, renovation opportunities, privacy, and family-friendly features, but require higher purchase prices, greater maintenance commitments, and typically involve trade-offs on location proximity. First home buyers should evaluate lifestyle priorities, future family plans, work location, commute tolerance, and investment objectives when selecting property type, recognizing that the "perfect" first home likely involves compromises across location, size, type, and price dimensions.' }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "First Home Buyer Strategic Action Plan:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Research NSW first home buyer benefits and eligibility requirements" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Establish dedicated savings account and automate monthly contributions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider First Home Super Saver Scheme for tax-advantaged saving" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Monitor and optimize credit score 12+ months before applying" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Obtain pre-approval to understand realistic budget parameters" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Research target suburbs for market trends and growth potential" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Engage mortgage broker to compare lender options and rates" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Budget comprehensively for upfront costs beyond deposit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Plan for ongoing homeownership expenses in financial modeling" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Investigate government schemes like FHLDS and Shared Equity" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "The Role of Mortgage Brokers and Financial Advisers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Professional guidance through mortgage brokers and financial advisers provides first home buyers with expertise, market access, and strategic insights that can save thousands of dollars and prevent costly mistakes. Mortgage brokers access multiple lenders, including smaller institutions and non-bank lenders often offering competitive rates unavailable to direct applicants. They navigate complex eligibility criteria, structure applications to maximize approval likelihood, and identify optimal loan features for individual circumstances. Importantly, most mortgage brokers are paid by lenders through commissions, making their services free to buyers, though this creates potential conflicts of interest that informed buyers should understand. Financial advisers provide broader perspective, helping first home buyers evaluate whether purchasing represents the optimal financial decision compared to continued renting with aggressive investment, considering factors like career mobility, family planning, and long-term wealth objectives. Professional advice becomes particularly valuable for complex situations involving self-employment, irregular income, family gifts, or coordination of multiple government schemes. While professional fees for financial advisers might reach $2,000-$5,000, the strategic insights and optimization opportunities often deliver return on investment many times over, particularly for significant property purchases." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Timing Your Purchase: Market Cycles and Personal Readiness" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The decision of when to buy involves balancing market conditions with personal financial readiness, career stability, and life circumstances. Property markets move in cycles of growth, peak, correction, and recovery, with timing significantly impacting purchase price and future appreciation. Buying during market peaks often means overpaying and facing potential short-term value declines, while purchasing during corrections offers value opportunities but requires confidence to act when market sentiment is negative. However, attempting to perfectly time markets often proves counterproductive, with buyers waiting years for optimal conditions that never materialize while prices appreciate beyond reach. Personal readiness—adequate deposit, stable employment, strong credit profile, and lifestyle alignment with homeownership—often matters more than perfect market timing. The 7-10 year average property holding period means short-term market fluctuations typically smooth out over time, with long-term Sydney property trends showing consistent appreciation despite periodic corrections. First home buyers should focus on purchasing property they can afford comfortably, in locations aligned with lifestyle needs, when personal circumstances support homeownership commitments, rather than attempting to optimize for potentially imaginary perfect market conditions." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Understanding Loan Features and Mortgage Structures" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Home loans come with numerous features and structures that significantly impact total interest paid, repayment flexibility, and financial outcomes over the loan lifetime. Variable rate loans fluctuate with market interest rates, offering flexibility and typically lower rates than fixed alternatives, but creating repayment uncertainty. Fixed rate loans provide repayment certainty for 1-5 year periods, valuable for budget planning and protection against rate rises, but often include break fees and limited flexibility. Many first home buyers opt for split loans combining variable and fixed portions, balancing certainty with flexibility. Offset accounts link transaction accounts to mortgages, reducing interest charged on balances while maintaining access to funds for emergencies—particularly valuable for disciplined savers. Redraw facilities allow access to extra repayments, though often with conditions and potential fees. Interest-only periods, typically available for investors, rarely benefit first home buyers who should prioritize principal reduction. Package deals bundling credit cards, transaction accounts, and insurance sometimes offer rate discounts but require careful evaluation of overall value. Understanding these features and selecting appropriate loan structures can save tens of thousands in interest while providing flexibility for life's inevitable changes and opportunities." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Frequently Asked Questions - NSW First Home Buyers" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How much deposit do I need to buy my first home in NSW?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Traditionally, a 20% deposit is recommended to avoid Lender's Mortgage Insurance (LMI), meaning $130,000 for a $650,000 property. However, the First Home Loan Deposit Scheme allows eligible buyers to purchase with just 5% deposit ($32,500) without paying LMI. Many lenders also offer loans with 10-15% deposits, though LMI applies. Your required deposit depends on which schemes you qualify for and your lender's requirements." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Can I get stamp duty exemption in NSW if the property is $750,000?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For first home buyers, properties up to $650,000 receive full stamp duty exemption. Properties between $650,000-$800,000 qualify for concessional stamp duty rates. At $750,000, you would pay reduced stamp duty rather than the full rate—saving approximately $12,000-15,000 compared to non-first home buyers, though not receiving complete exemption." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What is the income limit for first home buyer schemes in NSW?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Income limits vary by scheme. The NSW Shared Equity Scheme has limits of $90,000 for singles and $120,000 for couples. The First Home Loan Deposit Scheme (federal) allows $125,000 for singles and $200,000 for couples. Stamp duty concessions and the First Home Owner Grant have no income limits, only property price thresholds." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Can I use the First Home Owner Grant for an established property?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No, the $10,000 First Home Owner Grant applies only to new homes—newly constructed properties, substantially renovated properties, or new apartments purchased from developers. Established properties do not qualify for the grant, though they remain eligible for stamp duty concessions if under $800,000." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How long do I need to live in the property to keep first home buyer benefits?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Generally, you must occupy the property as your principal place of residence for at least six months continuously. Some schemes have longer requirements—the NSW Shared Equity Scheme requires 10 years minimum occupancy. Moving out earlier may trigger repayment of benefits, though some schemes allow exceptions for employment relocation or genuine hardship." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Can I combine multiple first home buyer schemes?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Yes, many schemes can be combined. You can use stamp duty concessions with the First Home Owner Grant, and also access the First Home Loan Deposit Scheme for deposit assistance. The First Home Super Saver Scheme can be used alongside these. However, you cannot combine the FHLDS with other government guarantee schemes. Always verify specific combination rules with Service NSW and your lender." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What happens if I previously owned property overseas?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Generally, you remain eligible for NSW and federal first home buyer benefits if you've never owned property in Australia, even if you owned property overseas. However, specific schemes may have different rules. The First Home Owner Grant and stamp duty concessions typically focus on Australian property ownership history. Always disclose overseas property ownership when applying." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How do I apply for first home buyer benefits in NSW?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Stamp duty concessions and the First Home Owner Grant are applied for through Revenue NSW when you purchase your property, typically facilitated by your conveyancer or solicitor. The First Home Loan Deposit Scheme is accessed through participating lenders when applying for your mortgage. The NSW Shared Equity Scheme requires separate application through the scheme administrator. Start by obtaining pre-approval from your lender, then work with professionals to coordinate applications." })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator provides estimates for informational purposes only and should not be relied upon for final property purchase decisions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Eligibility for first home buyer schemes depends on numerous factors not fully assessed by this calculator." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Government schemes, rates, thresholds, and concessions change regularly—always verify current benefits with Service NSW and Revenue NSW." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Actual stamp duty, grants, and scheme availability depend on specific property characteristics and individual circumstances." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• LMI premiums, interest rates, and loan terms vary by lender and individual financial profile." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Professional advice from mortgage brokers, financial advisers, and conveyancers is essential for property purchases." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• First Home Loan Deposit Scheme places are limited and allocated on first-come, first-served basis through participating lenders." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator does not constitute financial advice and cannot replace professional consultation." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Always conduct comprehensive due diligence, including building inspections, contract review, and financial planning before purchasing property." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Results are estimates only and actual costs and benefits may vary significantly from calculations shown." })
          ] }) })
        ] })
      ] })
    }
  );
};
export {
  FirstHomeBuyerCalculatorNSW as default
};
