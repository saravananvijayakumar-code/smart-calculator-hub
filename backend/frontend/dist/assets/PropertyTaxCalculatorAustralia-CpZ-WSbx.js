import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, l as House, i as CardDescription, k as CardContent, a3 as Label, U as Input, B as Button, C as Calculator, T as TrendingUp, aD as formatCurrency, p as TriangleAlert, a4 as Info } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { S as Separator } from "./separator-CgM4Fzdg.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { A as AIAnalysis } from "./AIAnalysis-DnR9Up6F.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
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
import "./tabs-BNSAX0su.js";
import "./share-2-ViScha7M.js";
import "./link-DxXhzsoi.js";
import "./copy-DGMuG98H.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./linkedin-BSJyfSWT.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
const PropertyTaxCalculatorAustralia = () => {
  const [propertyValue, setPropertyValue] = reactExports.useState("");
  const [state, setState] = reactExports.useState("");
  const [propertyType, setPropertyType] = reactExports.useState("");
  const [purchaseType, setPurchaseType] = reactExports.useState("");
  const [isFirstHome, setIsFirstHome] = reactExports.useState("");
  const [purchaseDate, setPurchaseDate] = reactExports.useState("");
  const [results, setResults] = reactExports.useState(null);
  const calculatePropertyTax = () => {
    const value = parseFloat(propertyValue);
    if (!value || !state || !propertyType || !purchaseType) return;
    let stampDuty = 0;
    let landTax = 0;
    let transferFee = 0;
    let registrationFee = 200;
    stampDuty = calculateStampDuty(value, state, propertyType, purchaseType, isFirstHome === "yes");
    landTax = calculateLandTax(value, state, propertyType);
    transferFee = calculateTransferFee(value, state);
    const legalFees = Math.min(value * 1e-3, 2e3);
    const inspectionFees = 500;
    const lmiPremium = calculateLMI(value, purchaseType);
    const foreignBuyerSurcharge = calculateForeignBuyerSurcharge(value, state, purchaseType);
    const totalUpfrontCosts = stampDuty + transferFee + registrationFee + legalFees + inspectionFees + lmiPremium + foreignBuyerSurcharge;
    const annualCosts = landTax;
    const fhbBenefits = calculateFHBBenefits(value, state, isFirstHome === "yes");
    setResults({
      stampDuty,
      landTax,
      transferFee,
      registrationFee,
      legalFees,
      inspectionFees,
      lmiPremium,
      foreignBuyerSurcharge,
      totalUpfrontCosts,
      annualCosts,
      fhbBenefits,
      netUpfrontCosts: totalUpfrontCosts - fhbBenefits.totalBenefit,
      stampDutyRate: stampDuty / value * 100,
      totalCostPercentage: totalUpfrontCosts / value * 100
    });
  };
  const calculateStampDuty = (value, state2, propType, purchaseType2, firstHome) => {
    let duty = 0;
    switch (state2) {
      case "nsw":
        if (firstHome && value <= 65e4) {
          duty = 0;
        } else if (firstHome && value <= 8e5) {
          duty = Math.max(0, (value - 65e4) * 0.0425);
        } else {
          if (value <= 14e3) duty = value * 0.0125;
          else if (value <= 32e3) duty = 175 + (value - 14e3) * 0.015;
          else if (value <= 85e3) duty = 445 + (value - 32e3) * 0.0175;
          else if (value <= 319e3) duty = 1372.5 + (value - 85e3) * 0.035;
          else if (value <= 1064e3) duty = 9562.5 + (value - 319e3) * 0.045;
          else duty = 43087.5 + (value - 1064e3) * 0.055;
        }
        break;
      case "vic":
        if (firstHome && value <= 6e5) {
          duty = 0;
        } else if (firstHome && value <= 75e4) {
          duty = Math.max(0, (value - 6e5) * 0.05);
        } else {
          if (value <= 25e3) duty = value * 0.014;
          else if (value <= 13e4) duty = 350 + (value - 25e3) * 0.024;
          else if (value <= 96e4) duty = 2870 + (value - 13e4) * 0.06;
          else duty = 52670 + (value - 96e4) * 0.065;
        }
        break;
      case "qld":
        if (firstHome && value <= 55e4) {
          duty = 0;
        } else {
          if (value <= 5e3) duty = 0;
          else if (value <= 75e3) duty = (value - 5e3) * 0.015;
          else if (value <= 54e4) duty = 1050 + (value - 75e3) * 0.035;
          else if (value <= 1e6) duty = 17325 + (value - 54e4) * 0.045;
          else duty = 38025 + (value - 1e6) * 0.0575;
        }
        break;
      case "wa":
        if (value <= 12e4) duty = value * 0.02;
        else if (value <= 15e4) duty = 2400 + (value - 12e4) * 0.03;
        else if (value <= 36e4) duty = 3300 + (value - 15e4) * 0.04;
        else if (value <= 725e3) duty = 11700 + (value - 36e4) * 0.05;
        else duty = 29950 + (value - 725e3) * 0.06;
        break;
      case "sa":
        if (value <= 12e3) duty = value * 0.01;
        else if (value <= 3e4) duty = 120 + (value - 12e3) * 0.02;
        else if (value <= 5e4) duty = 480 + (value - 3e4) * 0.03;
        else if (value <= 1e5) duty = 1080 + (value - 5e4) * 0.035;
        else if (value <= 2e5) duty = 2830 + (value - 1e5) * 0.04;
        else if (value <= 25e4) duty = 6830 + (value - 2e5) * 0.045;
        else if (value <= 3e5) duty = 9080 + (value - 25e4) * 0.05;
        else if (value <= 5e5) duty = 11580 + (value - 3e5) * 0.055;
        else duty = 22580 + (value - 5e5) * 0.065;
        break;
      default:
        duty = value * 0.04;
    }
    return Math.max(0, duty);
  };
  const calculateForeignBuyerSurcharge = (value, state2, purchaseType2) => {
    if (purchaseType2 !== "foreign") return 0;
    switch (state2) {
      case "nsw":
        return value * 0.08;
      // 8% surcharge
      case "vic":
        return value * 0.08;
      // 8% surcharge
      case "qld":
        return value * 0.075;
      // 7.5% surcharge
      case "wa":
        return value * 0.07;
      // 7% surcharge
      case "sa":
        return value * 0.075;
      // 7.5% surcharge
      default:
        return value * 0.07;
    }
  };
  const calculateLandTax = (value, state2, propType) => {
    if (propType === "ppor") return 0;
    const landValue = value * 0.7;
    let landTax = 0;
    switch (state2) {
      case "nsw":
        if (landValue > 755e3) {
          landTax = Math.max(0, 100 + (landValue - 755e3) * 0.016);
        }
        break;
      case "vic":
        if (landValue > 3e5) {
          if (landValue <= 6e5) {
            landTax = (landValue - 3e5) * 5e-3;
          } else if (landValue <= 1e6) {
            landTax = 1500 + (landValue - 6e5) * 0.01;
          } else {
            landTax = 5500 + (landValue - 1e6) * 0.02;
          }
        }
        break;
      case "qld":
        if (landValue > 6e5) {
          landTax = (landValue - 6e5) * 0.01;
        }
        break;
      case "wa":
        if (landValue > 3e5) {
          landTax = (landValue - 3e5) * 0.025;
        }
        break;
      case "sa":
        if (landValue > 391e3) {
          landTax = (landValue - 391e3) * 5e-3;
        }
        break;
      default:
        if (landValue > 5e5) {
          landTax = (landValue - 5e5) * 0.01;
        }
    }
    return landTax;
  };
  const calculateTransferFee = (value, state2) => {
    switch (state2) {
      case "nsw":
        return Math.min(value * 2e-4, 500);
      case "vic":
        return Math.min(value * 3e-4, 800);
      case "qld":
        return Math.min(value * 2e-4, 400);
      case "wa":
        return Math.min(value * 2e-4, 600);
      case "sa":
        return Math.min(value * 2e-4, 500);
      default:
        return Math.min(value * 2e-4, 500);
    }
  };
  const calculateLMI = (value, purchaseType2) => {
    if (purchaseType2 === "investment") {
      const loanAmount = value * 0.9;
      if (loanAmount > value * 0.8) {
        return loanAmount * 0.015;
      }
    }
    return 0;
  };
  const calculateFHBBenefits = (value, state2, firstHome) => {
    if (!firstHome) return { stampDutyConcession: 0, grant: 0, totalBenefit: 0 };
    let stampDutyConcession = 0;
    let grant = 0;
    switch (state2) {
      case "nsw":
        if (value <= 65e4) {
          stampDutyConcession = calculateStampDuty(value, state2, "residential", "resident", false);
        } else if (value <= 8e5) {
          const fullDuty = calculateStampDuty(value, state2, "residential", "resident", false);
          const concessionalDuty = calculateStampDuty(value, state2, "residential", "resident", true);
          stampDutyConcession = fullDuty - concessionalDuty;
        }
        grant = 1e4;
        break;
      case "vic":
        if (value <= 6e5) {
          stampDutyConcession = calculateStampDuty(value, state2, "residential", "resident", false);
        } else if (value <= 75e4) {
          const fullDuty = calculateStampDuty(value, state2, "residential", "resident", false);
          const concessionalDuty = calculateStampDuty(value, state2, "residential", "resident", true);
          stampDutyConcession = fullDuty - concessionalDuty;
        }
        grant = 1e4;
        break;
      case "qld":
        if (value <= 55e4) {
          stampDutyConcession = calculateStampDuty(value, state2, "residential", "resident", false);
        }
        grant = 15e3;
        break;
      case "wa":
        grant = 1e4;
        break;
      case "sa":
        grant = 15e3;
        break;
    }
    return {
      stampDutyConcession,
      grant,
      totalBenefit: stampDutyConcession + grant
    };
  };
  const reset = () => {
    setPropertyValue("");
    setState("");
    setPropertyType("");
    setPurchaseType("");
    setIsFirstHome("");
    setPurchaseDate("");
    setResults(null);
  };
  const tips = [
    "Stamp duty rates vary significantly between Australian states",
    "First home buyer concessions can provide substantial savings",
    "Foreign buyer surcharges apply in most states",
    "Land tax is ongoing - consider this in investment decisions",
    "Professional conveyancing advised for property transactions"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Australia Property Tax Calculator | Stamp Duty & Land Tax Calculator 2024",
      description: "Comprehensive Australian property tax calculator covering stamp duty, land tax, transfer fees, and first home buyer concessions across all states. Calculate total property purchase costs and ongoing tax obligations.",
      keywords: "Australia property tax calculator, stamp duty calculator Australia, land tax calculator, first home buyer concessions, property transaction costs Australia, foreign buyer surcharge",
      tips,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-5 w-5" }),
                "Property Tax Calculator"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Calculate comprehensive property taxes and transaction costs by state" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "propertyValue", children: "Property Value ($)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "propertyValue",
                    type: "number",
                    placeholder: "650000",
                    value: propertyValue,
                    onChange: (e) => setPropertyValue(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "state", children: "State/Territory" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: state, onValueChange: setState, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select state" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "nsw", children: "New South Wales" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vic", children: "Victoria" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "qld", children: "Queensland" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "wa", children: "Western Australia" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sa", children: "South Australia" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "tas", children: "Tasmania" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "nt", children: "Northern Territory" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "act", children: "Australian Capital Territory" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "propertyType", children: "Property Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: propertyType, onValueChange: setPropertyType, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select property type" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "ppor", children: "Principal Place of Residence" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "investment", children: "Investment Property" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "commercial", children: "Commercial Property" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vacant_land", children: "Vacant Land" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "purchaseType", children: "Buyer Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: purchaseType, onValueChange: setPurchaseType, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select buyer type" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "resident", children: "Australian Resident" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "foreign", children: "Foreign Buyer" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "isFirstHome", children: "First Home Buyer?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: isFirstHome, onValueChange: setIsFirstHome, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select option" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "yes", children: "Yes" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "no", children: "No" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "purchaseDate", children: "Expected Purchase Date (Optional)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "purchaseDate",
                    type: "date",
                    value: purchaseDate,
                    onChange: (e) => setPurchaseDate(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculatePropertyTax, className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "mr-2 h-4 w-4" }),
                  "Calculate Tax"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: reset, variant: "outline", children: "Reset" })
              ] })
            ] })
          ] }),
          results && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
              "Property Tax Breakdown"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Stamp Duty" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-red-600", children: formatCurrency(results.stampDuty, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Transfer Fee" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: formatCurrency(results.transferFee, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Registration Fee" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: formatCurrency(results.registrationFee, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Legal Fees (Est.)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-blue-600", children: formatCurrency(results.legalFees, "AUD") })
                ] })
              ] }),
              results.foreignBuyerSurcharge > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-50 p-3 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-red-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-red-800", children: [
                  "Foreign Buyer Surcharge: ",
                  formatCurrency(results.foreignBuyerSurcharge, "AUD")
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Total Costs Summary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Total Upfront Costs:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: formatCurrency(results.totalUpfrontCosts, "AUD") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Annual Land Tax:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: formatCurrency(results.landTax, "AUD") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Stamp Duty Rate:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                      results.stampDutyRate.toFixed(2),
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Total Cost as % of Value:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "destructive", children: [
                      results.totalCostPercentage.toFixed(2),
                      "%"
                    ] })
                  ] })
                ] })
              ] }),
              results.fhbBenefits.totalBenefit > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "First Home Buyer Benefits" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Stamp Duty Concession" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-green-600", children: formatCurrency(results.fhbBenefits.stampDutyConcession, "AUD") })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "First Home Grant" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-green-600", children: formatCurrency(results.fhbBenefits.grant, "AUD") })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Net Upfront Costs:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", children: formatCurrency(results.netUpfrontCosts, "AUD") })
                  ] })
                ] })
              ] }),
              results.lmiPremium > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-amber-50 p-3 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-amber-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "LMI Premium:" }),
                " ",
                formatCurrency(results.lmiPremium, "AUD"),
                "(estimated for high LVR loans)"
              ] }) })
            ] })
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIAnalysis,
            {
              analysisRequest: {
                calculatorType: "property-tax-australia",
                data: {
                  propertyValue: parseFloat(propertyValue) || 0,
                  taxRate: results.stampDutyRate / 100,
                  annualTax: results.landTax,
                  exemptions: results.fhbBenefits.totalBenefit,
                  netTax: results.netUpfrontCosts
                }
              },
              autoRun: true,
              title: "AI Property Tax Analysis",
              description: "Get personalized strategies to minimize property taxes and optimize your property purchase timing."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "property-tax-australia",
              inputs: {
                propertyValue: parseFloat(propertyValue) || 0,
                state,
                propertyType,
                buyerType: propertyType
              },
              results: {
                stampDuty: results.stampDuty,
                landTax: results.landTax,
                totalUpfrontCosts: results.totalUpfrontCosts,
                netUpfrontCosts: results.netUpfrontCosts
              },
              title: "Property Tax Calculator Australia Report",
              className: "mt-6"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Complete Guide to Australian Property Taxes and Transaction Costs" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Property ownership in Australia involves a complex web of taxes, fees, and transaction costs that can significantly impact the affordability and profitability of real estate investments. Understanding these costs is crucial for property buyers, investors, and homeowners to make informed decisions and budget appropriately for their property transactions. The Australian property tax landscape varies considerably across states and territories, with different rules, rates, and concessions that can dramatically affect the total cost of property ownership." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Stamp Duty: Australia's Major Property Tax" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Stamp duty represents the largest upfront cost when purchasing property in Australia, functioning as a state-based transaction tax calculated as a percentage of the property's value. Each state and territory operates its own stamp duty regime with unique rate structures, typically featuring progressive scales where higher-value properties incur proportionally higher rates. The duty can range from 3% to over 7% of the property value, making it a substantial consideration in property affordability calculations and a key factor in interstate property investment decision-making." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "State-by-State Stamp Duty Variations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The variation in stamp duty rates across Australian jurisdictions creates significant opportunities for strategic property investment and location selection. New South Wales and Victoria typically have the highest stamp duty rates, particularly for premium properties, while states like Queensland and Western Australia may offer more favorable rates for certain property types and price ranges. Understanding these variations helps investors optimize their property portfolio allocation and can influence decisions about where to buy primary residences versus investment properties." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Stamp Duty Rate Comparison (Approximate for $650,000 Property):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• NSW: $25,080 (3.86%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• VIC: $31,070 (4.78%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• QLD: $21,175 (3.26%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• WA: $23,200 (3.57%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• SA: $26,330 (4.05%)" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "First Home Buyer Concessions and Support" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Australian governments provide extensive support to first home buyers through various concessions, grants, and schemes designed to improve housing affordability. These benefits include stamp duty concessions or complete exemptions for properties below certain price thresholds, first home owner grants for new construction, and shared equity schemes in some jurisdictions. The value and eligibility criteria vary significantly by state, with some offering complete stamp duty exemptions for first home buyers purchasing below specified price caps, potentially saving tens of thousands of dollars." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Land Tax: The Ongoing Annual Obligation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Land tax represents an annual liability imposed on land holdings above specified thresholds, with each state maintaining different rates, thresholds, and aggregation rules. Generally, principal places of residence are exempt from land tax, making it primarily relevant for investment property owners and commercial property holders. Land tax calculations are based on the unimproved value of land and can accumulate across multiple properties within a state, making portfolio management and jurisdiction selection critical considerations for property investors seeking to minimize ongoing tax obligations." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Foreign Buyer Additional Duties and Surcharges" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Foreign property buyers face substantial additional costs through surcharges and duties designed to moderate foreign investment in Australian residential real estate. These surcharges typically range from 7% to 8% above standard stamp duty rates, effectively doubling the upfront tax cost for foreign purchasers. Additionally, foreign buyers often face annual land tax surcharges and must comply with Foreign Investment Review Board (FIRB) approval requirements for certain property purchases, adding both complexity and ongoing costs to their property investment strategies." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Transaction Costs Beyond Government Taxes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Property transactions involve numerous costs beyond government-imposed taxes, creating a comprehensive expense structure that buyers must consider. These include legal and conveyancing fees (typically $1,000-3,000), building and pest inspections ($400-800), mortgage establishment fees, valuation costs, and various searches and certificates. Transfer fees and registration costs add to upfront expenses, while ongoing costs may include council rates, strata fees, and property management expenses for investment properties." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Lender's Mortgage Insurance (LMI) Considerations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Borrowers with deposits below 20% typically must pay Lender's Mortgage Insurance, which protects lenders against default risk while enabling buyers to purchase with smaller deposits. LMI premiums vary based on loan-to-value ratios, loan amounts, and borrower profiles, potentially adding $10,000-50,000+ to purchase costs for high LVR loans. While LMI enables earlier property market entry, the substantial additional cost must be weighed against the benefits of entering the market sooner versus accumulating a larger deposit to avoid LMI requirements altogether." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Strategic Property Tax Planning and Optimization" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Timing Strategies for Property Purchases" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Strategic timing of property purchases can result in significant tax savings through careful consideration of rate changes, concession availability, and personal circumstances. Many states periodically adjust stamp duty rates and thresholds, creating windows of opportunity for savvy buyers. Additionally, first home buyer concessions often have sunset clauses or changing eligibility criteria, making timing crucial for maximizing available benefits. Coordinating property settlements with financial year boundaries can also optimize depreciation claims and other tax deductions for investment properties." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Interstate Investment Property Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The significant variations in property taxes between Australian states create opportunities for tax arbitrage and strategic property portfolio allocation. Sophisticated investors often consider total holding costs, including both acquisition expenses and ongoing tax liabilities, when selecting investment locations. Some states offer more favorable land tax treatment for certain property types or investor categories, while others provide better depreciation opportunities or capital gains tax treatment, making jurisdiction selection a critical component of long-term wealth building strategies." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Trust Structures and Tax Optimization" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sophisticated property investors often utilize trust structures to optimize their property tax positions across multiple jurisdictions and properties. Discretionary trusts can provide flexibility in distributing income and capital gains among beneficiaries in different tax brackets, while unit trusts can facilitate joint investments and succession planning. However, these structures come with additional compliance costs and complexity, requiring professional advice to ensure they provide net benefits and remain compliant with changing tax laws and regulations." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Property Tax Optimization Strategies:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Research first home buyer concessions before purchasing" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider interstate opportunities for lower stamp duty" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Plan purchase timing around policy changes" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Evaluate trust structures for investment properties" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Factor ongoing land tax into investment decisions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Understand foreign buyer implications if applicable" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Budget for all transaction costs, not just purchase price" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Property Tax Reform and Future Changes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Australian property taxation continues evolving through various reform proposals and policy adjustments across different jurisdictions. Some states have implemented or are considering broad-based land tax systems to replace stamp duty, which would fundamentally change the property cost structure from large upfront payments to ongoing annual liabilities. Understanding current reform trajectories and potential changes helps property owners and investors anticipate future tax obligations and adapt their strategies accordingly, particularly for long-term investment planning and retirement property decisions." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Capital Gains Tax Integration" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While not technically a property tax, Capital Gains Tax (CGT) significantly impacts overall property investment returns and must be considered alongside acquisition and holding costs. CGT applies to gains on investment properties upon sale, with a 50% discount available for assets held longer than 12 months. Principal places of residence generally qualify for the main residence exemption, though complex rules apply when properties have been used for income generation or when multiple residences are involved throughout the ownership period." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Professional Advice and Compliance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The complexity of Australian property taxation across multiple jurisdictions, combined with the substantial financial implications of property transactions, makes professional advice invaluable for significant property decisions. Tax professionals, qualified conveyancers, and financial advisers can help navigate the various obligations, optimize tax positions, and ensure compliance with all applicable requirements. Professional guidance becomes particularly important for foreign buyers, complex investment structures, interstate transactions, and situations involving multiple properties or sophisticated timing strategies." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Technology and Property Tax Calculation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Modern property tax calculators and digital tools provide valuable preliminary estimates for planning purposes, but they cannot replace professional advice for actual transactions. These tools help buyers understand the magnitude of costs across different scenarios and jurisdictions, enabling informed preliminary decisions about budget allocation and property selection. However, actual calculations may vary due to specific circumstances, recent law changes, and individual eligibility factors that automated calculators may not fully capture." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Frequently Asked Questions" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Which Australian state has the lowest stamp duty?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Stamp duty rates vary by property value, but generally Queensland and Western Australia offer more competitive rates for many price ranges. However, the "lowest" depends on specific property value, with different states being more favorable at different price points. Always calculate for your specific scenario.' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Can I avoid stamp duty as a first home buyer?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Yes, many states offer stamp duty exemptions or significant concessions for first home buyers. NSW offers full exemption up to $650,000, Victoria up to $600,000, and Queensland up to $550,000. Eligibility criteria and thresholds vary by state and change periodically." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Do I pay land tax on my principal place of residence?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No, your principal place of residence is generally exempt from land tax in all Australian states. Land tax only applies to investment properties, vacant land, and commercial properties above the tax-free threshold, which varies by state." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What additional costs do foreign buyers face?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Foreign buyers typically pay stamp duty surcharges of 7-8% above standard rates, annual land tax surcharges of 0.5-2%, and may require FIRB approval costing $13,200-117,100+ depending on property value. These additional costs can effectively double the tax burden." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How is land tax calculated across multiple properties?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Land tax is calculated on the total unimproved land value of all taxable properties owned within a state. Properties are aggregated, and tax is calculated on the combined value using progressive rates. This means multiple smaller properties can push you into higher tax brackets." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "When is stamp duty payable?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Stamp duty is typically payable within 30-90 days of contract signing, varying by state. Some states require payment by settlement, while others have earlier deadlines. Late payment incurs penalties and interest charges, so ensure you understand your state's specific requirements." })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator provides estimates only and should not be relied upon for final property transaction decisions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Tax rates, thresholds, and concessions change regularly - always verify current rates with relevant authorities." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• First home buyer eligibility has specific criteria that may not be covered by this simplified calculator." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Foreign buyer surcharges and FIRB requirements have complex rules requiring professional advice." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Land tax calculations are simplified estimates - actual assessments may vary based on official valuations." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Additional costs like mortgage establishment fees, conveyancing, and insurance are not included in calculations." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Professional conveyancing and tax advice is recommended for all significant property transactions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• State revenue offices are the authoritative source for current tax rates and payment requirements." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Results are estimates only and actual costs may vary significantly from calculations shown." })
          ] }) })
        ] })
      ] })
    }
  );
};
export {
  PropertyTaxCalculatorAustralia as default
};
