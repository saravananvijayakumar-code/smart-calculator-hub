import { r as reactExports, j as jsxRuntimeExports, S as SEOHead, f as Card, g as CardHeader, h as CardTitle, C as Calculator, i as CardDescription, k as CardContent, a4 as Label, V as Input, B as Button, T as TrendingUp, aE as formatCurrency, a5 as Info, a3 as FileText, D as DollarSign, l as House, a6 as Alert, a7 as AlertDescription, d as Clock, c as Shield } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { S as Separator } from "./separator-63Q9JacM.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-t5L32f7o.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { A as AdsterraSlot } from "./AdsterraSlot-DCXIaKPD.js";
import { A as AdsettraSlot } from "./AdsettraSlot-eVTrqIXX.js";
import { A as AutoAdSlot } from "./AutoAdSlot-DNRO9HTk.js";
import { A as AIAnalysis } from "./AIAnalysis-B-4zh-eH.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { B as Building } from "./building-C7va4eDd.js";
import { C as CircleAlert } from "./circle-alert-DCAQyr8M.js";
import { W as Wallet } from "./wallet-DxIJPdsI.js";
import { U as Users } from "./users-Cu_sVhna.js";
import { T as Target } from "./target-4JeIm6Yk.js";
import { C as CircleHelp } from "./circle-help-D9-5Kmcr.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./check-DTsA1WpX.js";
import "./EnhancedAIAnalysis-BaYCd8m5.js";
import "./brain-CSngUEN8.js";
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
const StampDutyCalculatorUK = () => {
  const [propertyValue, setPropertyValue] = reactExports.useState("");
  const [propertyType, setPropertyType] = reactExports.useState("");
  const [buyerType, setBuyerType] = reactExports.useState("");
  const [results, setResults] = reactExports.useState(null);
  const [analysisRequest, setAnalysisRequest] = reactExports.useState(null);
  const calculateStampDuty = () => {
    const value = parseFloat(propertyValue);
    if (!value || !propertyType || !buyerType) return;
    let stampDuty = 0;
    let rate = 0;
    if (propertyType === "residential") {
      if (buyerType === "first-time") {
        if (value <= 425e3) {
          stampDuty = 0;
          rate = 0;
        } else if (value <= 625e3) {
          stampDuty = (value - 425e3) * 0.05;
          rate = 5;
        } else {
          stampDuty = (625e3 - 425e3) * 0.05 + (value - 625e3) * 0.1;
          rate = 10;
        }
      } else if (buyerType === "additional") {
        if (value <= 25e4) {
          stampDuty = value * 0.03;
          rate = 3;
        } else if (value <= 925e3) {
          stampDuty = 25e4 * 0.03 + (value - 25e4) * 0.08;
          rate = 8;
        } else if (value <= 15e5) {
          stampDuty = 25e4 * 0.03 + (925e3 - 25e4) * 0.08 + (value - 925e3) * 0.13;
          rate = 13;
        } else {
          stampDuty = 25e4 * 0.03 + (925e3 - 25e4) * 0.08 + (15e5 - 925e3) * 0.13 + (value - 15e5) * 0.15;
          rate = 15;
        }
      } else {
        if (value <= 25e4) {
          stampDuty = 0;
          rate = 0;
        } else if (value <= 925e3) {
          stampDuty = (value - 25e4) * 0.05;
          rate = 5;
        } else if (value <= 15e5) {
          stampDuty = (925e3 - 25e4) * 0.05 + (value - 925e3) * 0.1;
          rate = 10;
        } else {
          stampDuty = (925e3 - 25e4) * 0.05 + (15e5 - 925e3) * 0.1 + (value - 15e5) * 0.12;
          rate = 12;
        }
      }
    } else {
      if (value <= 15e4) {
        stampDuty = 0;
        rate = 0;
      } else if (value <= 25e4) {
        stampDuty = (value - 15e4) * 0.02;
        rate = 2;
      } else {
        stampDuty = (25e4 - 15e4) * 0.02 + (value - 25e4) * 0.05;
        rate = 5;
      }
    }
    const totalCost = value + stampDuty;
    const effectiveRate = stampDuty / value * 100;
    const calculationResults = {
      propertyValue: value,
      stampDuty,
      totalCost,
      effectiveRate,
      marginalRate: rate
    };
    setResults(calculationResults);
    const analysisData = {
      propertyValue: value,
      stampDuty,
      effectiveRate,
      buyerType: buyerType || "standard",
      location: "England/Northern Ireland"
    };
    setAnalysisRequest({
      calculatorType: "stamp-duty-uk",
      data: analysisData
    });
  };
  const reset = () => {
    setPropertyValue("");
    setPropertyType("");
    setBuyerType("");
    setResults(null);
    setAnalysisRequest(null);
  };
  const tips = [
    "First-time buyers get relief on properties up to £425,000",
    "Additional property purchases attract a 3% surcharge",
    "Commercial properties have different rates from residential",
    "Stamp duty is payable within 14 days of completion",
    "Consider getting professional advice for complex purchases",
    "Scotland has LBTT and Wales has LTT with different rates",
    "Budget for additional costs like legal fees and surveys",
    "Multiple dwellings relief may apply for bulk purchases"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "UK Stamp Duty Calculator 2024 | SDLT Calculator with AI Analysis",
        description: "Calculate UK Stamp Duty Land Tax (SDLT) for 2024 with our comprehensive calculator. Get AI-powered insights, first-time buyer relief calculations, and expert property tax guidance for England and Northern Ireland.",
        keywords: "UK stamp duty calculator 2024, SDLT calculator, stamp duty land tax, first time buyer relief, property tax UK, additional property surcharge, commercial property tax, AI property analysis"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      CalculatorLayoutWithAds,
      {
        title: "UK Stamp Duty Calculator 2024",
        description: "Calculate stamp duty land tax (SDLT) for property purchases in England and Northern Ireland with AI-powered insights",
        keywords: "UK stamp duty calculator, SDLT calculator, property tax UK, first time buyer relief",
        tips,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "top", className: "mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsettraSlot, { position: "top", className: "mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-5 w-5" }),
                  "Stamp Duty Calculator"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter property details to calculate stamp duty land tax" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "propertyValue", children: "Property Value (£)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "propertyValue",
                      type: "number",
                      placeholder: "Enter property value",
                      value: propertyValue,
                      onChange: (e) => setPropertyValue(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "propertyType", children: "Property Type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: propertyType, onValueChange: setPropertyType, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select property type" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "residential", children: "Residential" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "commercial", children: "Commercial" })
                    ] })
                  ] })
                ] }),
                propertyType === "residential" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "buyerType", children: "Buyer Type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: buyerType, onValueChange: setBuyerType, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select buyer type" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "standard", children: "Standard Purchase" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "first-time", children: "First-Time Buyer" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "additional", children: "Additional Property" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateStampDuty, className: "flex-1", children: [
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
                "Stamp Duty Calculation"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Property Value" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: formatCurrency(results.propertyValue, "en-GB") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Stamp Duty" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-red-600", children: formatCurrency(results.stampDuty, "en-GB") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total Cost" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: formatCurrency(results.totalCost, "en-GB") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Effective Rate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-semibold", children: [
                      results.effectiveRate.toFixed(2),
                      "%"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                    "Marginal Rate: ",
                    results.marginalRate,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: results.stampDuty === 0 ? "secondary" : "destructive", children: results.stampDuty === 0 ? "No SDLT Due" : "SDLT Payable" }),
                  buyerType === "first-time" && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", children: "First-Time Buyer Relief" }),
                  buyerType === "additional" && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", children: "3% Additional Property Surcharge" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsettraSlot, { position: "middle", className: "my-6" }),
          analysisRequest && results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AIAnalysis,
              {
                analysisRequest,
                className: "mt-8",
                title: "AI Stamp Duty Analysis",
                description: "Get personalized insights about your stamp duty calculation and property purchase strategy."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ExportShareButtons,
              {
                calculatorType: "stamp-duty-uk",
                inputs: {
                  propertyValue: parseFloat(propertyValue) || 0,
                  propertyType,
                  buyerType
                },
                results: {
                  stampDuty: results.totalStampDuty,
                  effectiveRate: results.effectiveRate,
                  totalCost: results.totalCost
                },
                title: "Stamp Duty Calculator UK Report",
                className: "mt-6"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsettraSlot, { position: "middle", className: "my-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5" }),
                "Complete Guide to UK Stamp Duty Land Tax (SDLT) 2024"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Everything you need to know about stamp duty calculations, reliefs, and property tax planning" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "overview", className: "w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "overview", children: "Overview" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "rates", children: "Rates & Bands" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "reliefs", children: "Reliefs & Exemptions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "planning", children: "Tax Planning" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "overview", className: "mt-6 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose max-w-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center gap-2 text-xl font-semibold mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5" }),
                  "What is Stamp Duty Land Tax?"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed mb-4", children: "Stamp Duty Land Tax (SDLT) is a crucial tax levied on property purchases in England and Northern Ireland. Administered by HM Revenue and Customs (HMRC), SDLT can significantly impact your total property costs, making it essential to understand how calculations work and when the tax applies to your situation." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-blue-900 mb-2", children: "Key Facts About SDLT:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-blue-800 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Progressive tax system with multiple rate bands" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Different rates for residential and commercial properties" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Special reliefs available for first-time buyers" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Additional 3% surcharge for second homes and buy-to-let" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Payment due within 14 days of completion" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3", children: "How SDLT Works" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "SDLT operates on a progressive system similar to income tax bands. You only pay higher rates on the portion of the purchase price that exceeds each threshold, not on the entire property value. This ensures fairness and means that higher-value properties contribute proportionally more to public finances." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3", children: "Geographic Coverage" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "This calculator applies to property purchases in England and Northern Ireland. Scotland uses the Land and Buildings Transaction Tax (LBTT) system, while Wales has its own Land Transaction Tax (LTT). These devolved systems have different rates and thresholds, reflecting local priorities and housing market conditions." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3", children: "Market Impact and Considerations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "SDLT significantly influences property market dynamics across the UK. The various thresholds create natural clustering points in property prices, particularly around the £250,000 nil-rate threshold and the £425,000 first-time buyer relief limit. Understanding these market effects helps both buyers and sellers make informed decisions about pricing and timing." })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "rates", className: "mt-6 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose max-w-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center gap-2 text-xl font-semibold mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-5 w-5" }),
                  "SDLT Rates and Thresholds 2024"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-5 w-5" }),
                      "Residential Properties"
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-green-50 border border-green-200 rounded", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-green-900", children: "£0 - £250,000" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-700", children: "0% (No SDLT)" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-blue-50 border border-blue-200 rounded", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-blue-900", children: "£250,001 - £925,000" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-700", children: "5% on excess" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-orange-50 border border-orange-200 rounded", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-orange-900", children: "£925,001 - £1,500,000" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-700", children: "10% on excess" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-red-50 border border-red-200 rounded", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-red-900", children: "Above £1,500,000" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-700", children: "12% on excess" })
                      ] })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "h-5 w-5" }),
                      "Commercial Properties"
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-green-50 border border-green-200 rounded", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-green-900", children: "£0 - £150,000" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-700", children: "0% (No SDLT)" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-blue-50 border border-blue-200 rounded", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-blue-900", children: "£150,001 - £250,000" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-700", children: "2% on excess" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-orange-50 border border-orange-200 rounded", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-orange-900", children: "Above £250,000" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-700", children: "5% on excess" })
                      ] })
                    ] }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "mt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Additional Property Surcharge:" }),
                    " Buyers purchasing additional residential properties (second homes, buy-to-let investments) pay an extra 3% on top of standard rates across the entire purchase price."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mt-6 mb-3", children: "Rate Calculation Examples" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-2", children: "Example: £400,000 residential property (standard purchase)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• First £250,000: £0 (0%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Next £150,000 (£250,001-£400,000): £7,500 (5%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      "• ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Total SDLT: £7,500" })
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "reliefs", className: "mt-6 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose max-w-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center gap-2 text-xl font-semibold mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-5 w-5" }),
                  "SDLT Reliefs and Exemptions"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }),
                    "First-Time Buyer Relief"
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The government provides substantial SDLT relief for first-time buyers to help them enter the property market. This relief can save thousands of pounds and makes homeownership more accessible." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-green-50 border border-green-200 rounded-lg", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-green-900 mb-2", children: "Relief Thresholds" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-green-800 space-y-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Properties up to £425,000: 0% SDLT" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• £425,001 - £625,000: 5% on excess only" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Above £625,000: Standard rates apply" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-blue-50 border border-blue-200 rounded-lg", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-blue-900 mb-2", children: "Eligibility Criteria" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-blue-800 space-y-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Must be first property purchase" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Property must be your main residence" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Maximum property value £625,000" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Cannot own property anywhere else" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 border border-yellow-200 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-yellow-900 mb-2", children: "Potential Savings Example" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-yellow-800", children: "On a £500,000 first home: Standard SDLT would be £12,500, but with first-time buyer relief, you pay only £3,750 - saving £8,750!" })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Other Important Reliefs" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-blue-500 pl-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-1", children: "Multiple Dwellings Relief" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Available when purchasing multiple residential properties in a single transaction. Can provide significant savings for bulk purchases or property developers." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-green-500 pl-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-1", children: "Shared Ownership Relief" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Special SDLT treatment for shared ownership purchases, typically resulting in lower tax liability as you only pay on your share of the property value." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-purple-500 pl-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-1", children: "Corporate Transactions" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Various reliefs available for corporate restructuring, group relief, and acquisition relief for companies purchasing property assets." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-red-500 pl-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-1", children: "Disadvantaged Areas Relief" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Historically available for certain designated areas, though most schemes have now ended. Always check current availability for specific locations." })
                    ] })
                  ] }) })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "planning", className: "mt-6 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose max-w-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center gap-2 text-xl font-semibold mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5" }),
                  "Strategic SDLT Planning"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5" }),
                      "Timing Strategies"
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Coordinate completion dates in property chains to manage additional property surcharge" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Consider 36-month replacement of main residence rule for avoiding surcharge" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Plan disposals within three years to reclaim additional property surcharge" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Monitor potential temporary reliefs or rate changes" })
                      ] })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5" }),
                      "Legal Structures"
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Consider joint ownership structures for married couples" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Evaluate corporate ownership for investment properties" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Assess trust structures for family property arrangements" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Review partnership arrangements for commercial investments" })
                      ] })
                    ] }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "mt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Professional Advice Recommended:" }),
                    " SDLT planning can be complex, especially for high-value properties or investment purchases. Consider consulting a tax advisor or solicitor specializing in property law."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Additional Cost Considerations" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "While SDLT is often the largest additional cost in a property purchase, don't forget to budget for these other expenses:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Legal and Professional Fees" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-muted-foreground space-y-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Solicitor/conveyancer fees (£800-£2,000+)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Survey costs (£300-£1,500+)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Search fees (£200-£500)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Mortgage arrangement fees" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Moving and Setup Costs" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-muted-foreground space-y-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Removal/moving costs" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Buildings insurance" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Utility connections and deposits" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Council tax and other ongoing costs" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 p-4 rounded-lg mt-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-900 font-semibold mb-1", children: "Total Additional Costs" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-800 text-sm", children: "Typically budget 3-5% of property value for all additional costs beyond the purchase price, including SDLT, legal fees, surveys, and moving expenses." })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Payment and Compliance Requirements" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-red-900 mb-2", children: "Payment Deadline" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-800 text-sm", children: "SDLT must be paid within 14 days of completion. Late payment incurs penalties and interest charges." })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-blue-50 border border-blue-200 rounded-lg", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-blue-900 mb-2", children: "SDLT Return" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-800 text-sm", children: "Form SDLT1 must be submitted to HMRC, usually handled by your solicitor or conveyancer." })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-green-50 border border-green-200 rounded-lg", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-green-900 mb-2", children: "Certificate" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-800 text-sm", children: "HMRC issues an SDLT5 certificate confirming payment, needed for Land Registry registration." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "Most conveyancers handle SDLT payment and returns as part of their service. Ensure this is included in your conveyancing quote and that adequate funds are available for completion." })
                    ] })
                  ] }) })
                ] })
              ] }) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "bottom", className: "mt-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsettraSlot, { position: "bottom", className: "mt-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { position: "bottom", className: "mt-6" })
        ]
      }
    )
  ] });
};
export {
  StampDutyCalculatorUK as default
};
