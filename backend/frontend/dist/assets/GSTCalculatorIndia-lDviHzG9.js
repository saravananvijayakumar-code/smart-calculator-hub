import { r as reactExports, j as jsxRuntimeExports, a3 as FileText, f as Card, g as CardHeader, h as CardTitle, C as Calculator, i as CardDescription, k as CardContent, a4 as Label, D as DollarSign, V as Input, B as Button, a6 as Alert, a7 as AlertDescription, aE as formatCurrency, a5 as Info } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { S as Separator } from "./separator-63Q9JacM.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { A as AIAnalysis } from "./AIAnalysis-B-4zh-eH.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { A as AutoAdSlot } from "./AutoAdSlot-DNRO9HTk.js";
import { B as Building2 } from "./building-2-BWI7-4Ai.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./check-DTsA1WpX.js";
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
const GSTCalculatorIndia = () => {
  const [amount, setAmount] = reactExports.useState("");
  const [calculationType, setCalculationType] = reactExports.useState("exclusive");
  const [transactionType, setTransactionType] = reactExports.useState("intrastate");
  const [gstRate, setGstRate] = reactExports.useState("18");
  const [result, setResult] = reactExports.useState(null);
  const calculateGST = () => {
    const amt = parseFloat(amount);
    const rate = parseFloat(gstRate);
    if (!amt || amt <= 0) {
      return;
    }
    let baseAmount;
    let gstAmount;
    let totalAmount;
    if (calculationType === "exclusive") {
      baseAmount = amt;
      gstAmount = amt * rate / 100;
      totalAmount = amt + gstAmount;
    } else {
      totalAmount = amt;
      baseAmount = amt * 100 / (100 + rate);
      gstAmount = amt - baseAmount;
    }
    const gstResult = {
      transactionType,
      baseAmount,
      gstRate: rate,
      gstAmount,
      totalAmount
    };
    if (transactionType === "intrastate") {
      gstResult.cgst = gstAmount / 2;
      gstResult.sgst = gstAmount / 2;
    } else {
      gstResult.igst = gstAmount;
    }
    setResult(gstResult);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "GST Calculator India 2025 - Calculate CGST, SGST, IGST Online | Free & Accurate",
      description: "Free GST calculator for India 2025. Calculate GST, CGST, SGST, and IGST instantly with accurate tax amounts. Supports all GST slabs (0%, 5%, 12%, 18%, 28%). Online GST calculator with reverse calculation, intra-state and inter-state GST computation. Updated for FY 2025-26.",
      keywords: "gst calculator, gst calculator india 2025, cgst sgst calculator, igst calculator, goods and services tax, gst amount calculator, gst inclusive exclusive calculator, online gst calculator, reverse gst calculator, gst calculation formula, intra state gst, inter state gst, india gst rates 2025, gst tax calculator, free gst calculator india",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-orange-100 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-8 w-8 text-orange-600" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "GST Calculator" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Calculate GST, CGST, SGST, and IGST for your transactions in India (FY 2025-26). Supports all tax slabs from 0% to 28% with both inclusive & exclusive calculations." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-5 w-5" }),
                  "GST Calculation"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter your transaction details" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "calculationType", children: "Calculation Type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: calculationType, onValueChange: setCalculationType, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "calculationType", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "exclusive", children: "GST Exclusive (Add GST to base amount)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "inclusive", children: "GST Inclusive (Extract GST from total)" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "amount", children: calculationType === "exclusive" ? "Base Amount (₹)" : "Total Amount (₹)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "absolute left-3 top-3 h-4 w-4 text-gray-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "amount",
                        type: "number",
                        value: amount,
                        onChange: (e) => setAmount(e.target.value),
                        placeholder: "10000",
                        className: "pl-10"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "transactionType", children: "Transaction Type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: transactionType, onValueChange: setTransactionType, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "transactionType", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "intrastate", children: "Intra-State (CGST + SGST)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "interstate", children: "Inter-State (IGST)" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "gstRate", children: "GST Rate (%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: gstRate, onValueChange: setGstRate, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "gstRate", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "0", children: "0% - Essential items (grains, milk, books)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "0.25", children: "0.25% - Precious stones" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "3", children: "3% - Gold, silver" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "5", children: "5% - Essential goods (sugar, tea, coal)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "12", children: "12% - Processed foods, computers" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "18", children: "18% - Most goods & services" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "28", children: "28% - Luxury items (cars, tobacco)" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateGST, className: "w-full", size: "lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "mr-2 h-4 w-4" }),
                  "Calculate GST"
                ] })
              ] })
            ] }),
            transactionType === "intrastate" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Intra-State Transaction:" }),
                " GST will be split equally into CGST (Central GST) and SGST (State GST)."
              ] })
            ] }),
            transactionType === "interstate" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Inter-State Transaction:" }),
                " GST will be charged as IGST (Integrated GST) - collected by the central government."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: result && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-orange-200 bg-orange-50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-orange-900", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5" }),
                "GST Calculation Results"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Base Amount" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-gray-900", children: formatCurrency(result.baseAmount, "INR") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Total GST" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-orange-600", children: formatCurrency(result.gstAmount, "INR") })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                transactionType === "intrastate" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 p-3 bg-blue-50 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-blue-900", children: [
                      "CGST (",
                      result.gstRate / 2,
                      "%)"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-blue-700", children: formatCurrency(result.cgst, "INR") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-600", children: "Central GST" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 p-3 bg-green-50 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-green-900", children: [
                      "SGST (",
                      result.gstRate / 2,
                      "%)"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-green-700", children: formatCurrency(result.sgst, "INR") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600", children: "State GST" })
                  ] })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-purple-50 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-purple-900", children: [
                    "IGST (",
                    result.gstRate,
                    "%)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-purple-700", children: formatCurrency(result.igst, "INR") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-purple-600", children: "Integrated GST" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mb-1", children: "Total Amount (Inc. GST)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-orange-900", children: formatCurrency(result.totalAmount, "INR") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600", children: "GST Rate:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                      result.gstRate,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600", children: "Transaction Type:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: transactionType === "intrastate" ? "Intra-State" : "Inter-State" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AIAnalysis,
              {
                analysisRequest: {
                  calculatorType: "gst_india",
                  data: {
                    transactionType: result.transactionType,
                    baseAmount: result.baseAmount,
                    gstRate: result.gstRate,
                    gstAmount: result.gstAmount,
                    cgst: result.cgst,
                    sgst: result.sgst,
                    igst: result.igst,
                    totalAmount: result.totalAmount
                  }
                },
                autoRun: true,
                title: "AI GST Analysis",
                description: "Get insights on GST calculations, compliance tips, and tax optimization strategies for your business in India."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ExportShareButtons,
              {
                calculatorType: "gst-india",
                inputs: {
                  amount: parseFloat(amount) || 0,
                  gstRate: parseFloat(gstRate) || 18,
                  calculationType,
                  transactionType
                },
                results: {
                  baseAmount: result.baseAmount,
                  gstAmount: result.gstAmount,
                  totalAmount: result.totalAmount,
                  cgst: result.cgst,
                  sgst: result.sgst,
                  igst: result.igst
                },
                title: "GST Calculator India Report",
                className: "mt-6"
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5" }),
            "Complete Guide to GST in India"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "What is GST?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 leading-relaxed", children: "Goods and Services Tax (GST) is a comprehensive, multi-stage, destination-based tax that is levied on every value addition. Implemented on July 1, 2017, GST replaced multiple indirect taxes including excise duty, VAT, service tax, and others, creating a unified tax system across India. As of 2025, GST continues to be the primary indirect tax framework, simplifying the Indian tax structure, reducing tax cascading, and improving ease of doing business." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 leading-relaxed mt-3", children: "GST is levied at every point in the supply chain, from manufacturer to consumer, with credit for tax paid at previous stages available as a set-off (Input Tax Credit - ITC). This eliminates the tax-on-tax problem and ensures that the final consumer bears only the GST charged by the last dealer in the supply chain, making it a transparent and efficient tax system." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Types of GST" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-blue-500 pl-4 py-2 bg-blue-50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-blue-900", children: "CGST - Central Goods and Services Tax" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mt-2", children: "CGST is levied by the Central Government on intra-state supplies of goods and services. For example, if a business in Maharashtra sells to another business in Maharashtra, CGST applies. The revenue collected goes to the Central Government." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 p-3 bg-white rounded border border-blue-200", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: "Example:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Product price: ₹10,000 | GST Rate: 18%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "CGST (9%): ₹900 → Goes to Central Government" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-green-500 pl-4 py-2 bg-green-50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-green-900", children: "SGST - State Goods and Services Tax" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mt-2", children: "SGST is levied by the State Government on intra-state supplies, collected along with CGST. The SGST rate is always equal to the CGST rate. Revenue goes to the respective State Government where the transaction occurs." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 p-3 bg-white rounded border border-green-200", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: "Example (same transaction):" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Product price: ₹10,000 | GST Rate: 18%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "SGST (9%): ₹900 → Goes to State Government" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-purple-500 pl-4 py-2 bg-purple-50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-purple-900", children: "IGST - Integrated Goods and Services Tax" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mt-2", children: "IGST is levied by the Central Government on inter-state supplies (transactions between two different states) and on imports. The IGST rate equals the sum of CGST and SGST rates. The Central Government collects IGST and later distributes the SGST portion to the destination state." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 p-3 bg-white rounded border border-purple-200", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: "Example:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Seller in Delhi → Buyer in Kerala | Product: ₹10,000 | GST: 18%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "IGST (18%): ₹1,800 → Collected by Central Govt, later split with Kerala" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "GST Tax Slabs in India (2025)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full border-collapse border border-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-4 py-3 text-left font-semibold", children: "GST Rate" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-4 py-3 text-left font-semibold", children: "Category" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-4 py-3 text-left font-semibold", children: "Examples" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3 font-semibold", children: "0%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Essential Items" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Fresh vegetables, fruits, grains, milk, bread, eggs, newspapers, books, educational services" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3 font-semibold", children: "0.25%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Precious Stones" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Cut and polished precious stones, semi-precious stones" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3 font-semibold", children: "3%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Precious Metals" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Gold, silver jewelry, gold coins" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3 font-semibold", children: "5%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Essential Goods" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Sugar, tea, coffee, edible oils, coal, medicines, transport services, small restaurants (turnover < ₹20L)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3 font-semibold", children: "12%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Standard Goods" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Computers, processed foods, butter, cheese, frozen meat, umbrellas, business class air tickets" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3 font-semibold", children: "18%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Most Goods & Services" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Most manufactured products, IT services, telecom services, financial services, restaurants (AC), branded garments" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3 font-semibold", children: "28%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Luxury & Sin Goods" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Automobiles, motorcycles, aircraft, luxury items, aerated drinks, tobacco products, pan masala, 5-star hotels" })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mt-3 italic", children: "Note: GST rates are periodically reviewed by the GST Council. The above slabs are current as of 2025. Always verify the latest rates for specific items on the official GST portal or consult a tax professional." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "GST Registration Requirements" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 leading-relaxed mb-4", children: "GST registration is mandatory for businesses exceeding specific turnover thresholds or engaged in certain activities:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border-l-4 border-orange-500 p-4 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-orange-900 mb-2", children: "Mandatory Registration Thresholds (2025):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-1 text-gray-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "Businesses with annual turnover exceeding ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "₹40 lakhs" }),
                    " (goods suppliers in most states)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "Service providers with turnover exceeding ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "₹20 lakhs" }),
                    " (most states)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "For special category states (NE states, J&K, Himachal Pradesh, Uttarakhand): ₹20 lakhs for goods, ₹10 lakhs for services" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Inter-state suppliers (mandatory regardless of turnover)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "E-commerce operators and sellers on e-commerce platforms" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Casual taxable persons and non-resident taxable persons" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Agents, input service distributors, and persons liable to pay tax under RCM" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 mt-4 mb-3", children: "Documents Required for GST Registration:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "For Individuals/Proprietors:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-sm space-y-1 text-gray-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "PAN card" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Aadhaar card" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Proof of business registration" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Bank account statement/canceled cheque" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Digital signature (for companies)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Business address proof" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Photographs" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "For Companies/LLPs:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-sm space-y-1 text-gray-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Certificate of Incorporation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "PAN of the company" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "MOA and AOA" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Board resolution for authorized signatory" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Identity and address proof of directors" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Address proof of business premises" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Bank account details" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Input Tax Credit (ITC)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 leading-relaxed mb-4", children: "Input Tax Credit is the cornerstone of GST and a major benefit for businesses. ITC allows businesses to reduce their GST liability by claiming credit for the GST paid on purchases (inputs)." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-blue-900 mb-3", children: "How ITC Works - Example:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 1:" }),
                    " Manufacturer buys raw materials for ₹10,000 + GST@18% (₹1,800) = ₹11,800 total"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 2:" }),
                    " Manufacturer sells finished goods for ₹20,000 + GST@18% (₹3,600)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 3:" }),
                    " ITC Calculation:"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-4 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• GST collected on sales: ₹3,600" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• GST paid on purchases (ITC): ₹1,800" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      "• ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-blue-700", children: "Net GST payable: ₹3,600 - ₹1,800 = ₹1,800" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-700 font-semibold mt-2", children: "Result: Instead of paying ₹3,600, you only pay ₹1,800 to the government!" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 mt-4 mb-3", children: "ITC is Available On:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-2 text-gray-700 ml-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Goods and services used for business purposes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Capital goods (machinery, equipment) used in the business" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Input services (legal, accounting, consulting services)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Goods sent on approval basis (if returned within 6 months)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 mt-4 mb-3", children: "ITC is NOT Available On:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-2 text-gray-700 ml-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Motor vehicles for personal use (except specific business use)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Food, beverages, and outdoor catering (except as stock-in-trade)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Personal and employee welfare expenses (club memberships, health services)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Goods/services for personal consumption" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Works contract for construction of immovable property (except plant & machinery)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "GST Returns Filing (2025)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 leading-relaxed mb-4", children: "Businesses registered under GST must file periodic returns. The frequency and type depend on the business type and turnover. As of 2025, the GST return filing system continues with the following structure:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full border-collapse border border-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-4 py-3 text-left font-semibold", children: "Return Type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-4 py-3 text-left font-semibold", children: "Who Files" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-4 py-3 text-left font-semibold", children: "Frequency" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-4 py-3 text-left font-semibold", children: "Due Date" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3 font-semibold", children: "GSTR-1" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "All registered dealers" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Monthly (turnover > ₹5 cr) or Quarterly (QRMP, ≤ ₹5 cr)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "border border-gray-300 px-4 py-3", children: [
                      "11th of next month (monthly)",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "13th of month after quarter (quarterly)"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3 font-semibold", children: "GSTR-3B" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "All registered dealers" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Monthly (turnover > ₹5 cr) or Quarterly (QRMP, ≤ ₹5 cr)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "border border-gray-300 px-4 py-3", children: [
                      "20th of next month (monthly)",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "22nd/24th after quarter (quarterly)"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3 font-semibold", children: "GSTR-2B" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Auto-generated (official ITC statement)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Monthly" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "After 14th (static, use this for ITC claims)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3 font-semibold", children: "GSTR-2A" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Auto-populated (reference only)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Real-time" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Dynamic view (not for official ITC claims)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3 font-semibold", children: "GSTR-9" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Annual return (turnover > ₹2 crore)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Annually" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "31st December of next financial year" })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-red-50 border-l-4 border-red-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-red-900 mb-2", children: "Late Filing Penalties (2025):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-1 text-gray-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "GSTR-1:" }),
                    " ₹200 per day (₹100 CGST + ₹100 SGST), maximum ₹10,000"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "GSTR-3B:" }),
                    " ₹50 per day if no tax liability, ₹200 per day if tax liability exists"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Late payment interest:" }),
                    " 18% per annum on outstanding tax amount"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-sm italic mt-2", children: "Note: Verify current penalty rates on the GST portal as rates may be revised" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "e-Invoicing System (2025)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 leading-relaxed mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "e-Invoicing is mandatory for all businesses with annual turnover exceeding ₹5 crore." }),
                " This is one of the most significant procedural changes in GST compliance, aimed at digitizing B2B invoices and reducing tax evasion."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 border-l-4 border-purple-500 p-4 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-purple-900 mb-3", children: "How e-Invoicing Works:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm text-gray-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 1:" }),
                    " Generate invoice in your billing software with mandatory fields"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 2:" }),
                    " Upload invoice to Invoice Registration Portal (IRP) for authentication"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 3:" }),
                    " IRP validates invoice and returns a unique Invoice Reference Number (IRN)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 4:" }),
                    " IRP generates a signed QR code containing invoice details"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step 5:" }),
                    " Print/email invoice with IRN and QR code to customer"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-700 font-semibold mt-2", children: "Result: Invoice is auto-reported to GST system and reflected in buyer's GSTR-2B!" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 mt-4 mb-3", children: "e-Invoicing Applicability:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-purple-200 rounded p-4 bg-purple-50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-purple-900 mb-2", children: "Mandatory For:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-sm space-y-1 text-gray-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "All B2B invoices (business to business)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Businesses with turnover > ₹5 crore" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Export invoices" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Debit notes and credit notes" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "NOT Required For:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-sm space-y-1 text-gray-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "B2C invoices (to individual consumers)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Businesses under ₹5 crore turnover" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "SEZ supplies (separate system)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Certain banking and financial services" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border border-orange-200 rounded p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-orange-900 mb-2", children: "Key Benefits of e-Invoicing:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-1 text-sm text-gray-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Real-time ITC availability:" }),
                    " Buyer sees your invoice in their GSTR-2B immediately"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Reduced return filing errors:" }),
                    " Auto-population of GSTR-1 data"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Faster payments:" }),
                    " Buyers can quickly verify and process authentic invoices"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "E-Way Bill integration:" }),
                    " Generate E-Way Bill directly from e-Invoice"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Digital invoice archival:" }),
                    " 6-year compliance made easier"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "QRMP Scheme - Simplified Compliance for Small Businesses" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 leading-relaxed mb-4", children: [
                "The ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Quarterly Return Monthly Payment (QRMP)" }),
                " scheme is a major simplification for small taxpayers with turnover up to ₹5 crore. It reduces compliance burden while ensuring regular tax payments."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border-l-4 border-green-500 p-4 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-green-900 mb-3", children: "How QRMP Works:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm text-gray-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Returns:" }),
                    " File GSTR-1 and GSTR-3B quarterly instead of monthly"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tax Payment:" }),
                    " Pay tax liability monthly (even though returns are quarterly)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
                    " For Q1 (Apr-May-Jun), file returns by July 13/20, but pay tax by May 25, Jun 25, Jul 20"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-700 font-semibold mt-2", children: "Benefit: 75% reduction in compliance effort - 4 returns/year instead of 12!" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 mt-4 mb-3", children: "Invoice Furnishing Facility (IFF):" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-3", children: "For businesses under QRMP, the IFF allows optional uploading of B2B invoices in the first two months of a quarter. This ensures your large customers don't have to wait until quarter-end to claim ITC." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full border-collapse border border-gray-300 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-3 py-2 text-left font-semibold", children: "Month" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-3 py-2 text-left font-semibold", children: "QRMP Action" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-3 py-2 text-left font-semibold", children: "Due Date" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-3 py-2", children: "Month 1 (e.g., April)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-3 py-2", children: "Pay tax via PMT-06 + Optional IFF" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-3 py-2", children: "25th of next month" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-3 py-2", children: "Month 2 (e.g., May)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-3 py-2", children: "Pay tax via PMT-06 + Optional IFF" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-3 py-2", children: "25th of next month" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-3 py-2", children: "Month 3 (e.g., June)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-3 py-2", children: "File GSTR-1 + GSTR-3B (quarterly)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-3 py-2", children: "13th & 22nd/24th" })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-50 border border-blue-200 rounded p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pro Tip:" }),
                " If you have large B2B customers who need ITC quickly, use IFF to upload invoices monthly. If most sales are B2C or to small businesses, skip IFF and just file quarterly returns."
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "E-Way Bill Requirements (2025)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 leading-relaxed mb-4", children: "An E-Way Bill is an electronic document generated on the GST portal for movement of goods worth more than ₹50,000. It's mandatory for both inter-state and intra-state movement of goods (intra-state applicability depends on state rules)." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-3", children: "When is E-Way Bill Mandatory?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "Movement of goods worth more than ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "₹50,000" }),
                  " (single invoice/bill)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Inter-state movement is mandatory; intra-state requirements vary by state" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Generated by the consignor or recipient (whoever initiates movement)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Required even for goods transport by own vehicle or hired vehicle" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Check state-specific E-Way Bill rules on the GST portal" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-3", children: "E-Way Bill Validity Periods:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full border-collapse border border-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-4 py-3 text-left font-semibold", children: "Distance" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-4 py-3 text-left font-semibold", children: "Validity Period" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Less than 200 km" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "1 day" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "For every additional 200 km" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Additional 1 day" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "Example: 500 km" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-3", children: "3 days" })
                  ] })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Common GST Mistakes to Avoid" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-red-500 pl-4 py-2 bg-red-50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-red-900", children: "1. Incorrect GSTIN on Invoices" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mt-1", children: "Always verify the buyer's GSTIN before issuing invoices. An incorrect GSTIN prevents the buyer from claiming ITC and can lead to disputes." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-red-500 pl-4 py-2 bg-red-50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-red-900", children: "2. Using GSTR-2A Instead of GSTR-2B for ITC Claims" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Critical Update:" }),
                    " Always use GSTR-2B (static, official statement) for claiming ITC, not GSTR-2A (dynamic view). GSTR-2B is generated after the 14th of each month and is the tax authority-mandated basis for ITC claims. Regularly reconcile GSTR-2B with your purchase records to ensure accuracy."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-red-500 pl-4 py-2 bg-red-50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-red-900", children: "3. Late Filing of Returns" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mt-1", children: "Late filing attracts penalties and interest. Set reminders for due dates (GSTR-1: 11th, GSTR-3B: 20th of next month)." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-red-500 pl-4 py-2 bg-red-50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-red-900", children: "4. Claiming ITC on Ineligible Expenses" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mt-1", children: "ITC cannot be claimed on personal expenses, employee welfare, motor vehicles for personal use, or food and beverages. Claiming ineligible ITC can result in penalties during audits." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-red-500 pl-4 py-2 bg-red-50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-red-900", children: "5. Wrong GST Rate Application" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mt-1", children: "Each product/service has a specific GST rate (0%, 5%, 12%, 18%, 28%). Applying the wrong rate leads to tax discrepancies. Always verify the HSN/SAC code and applicable rate." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-red-500 pl-4 py-2 bg-red-50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-red-900", children: "6. Not Maintaining Proper Documentation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mt-1", children: "Keep all invoices, bills, e-way bills, and transport documents organized for at least 6 years. Poor documentation can cause issues during GST audits." })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Frequently Asked Questions (FAQ)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-lg p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Q1: When should I use CGST+SGST vs IGST?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CGST + SGST:" }),
                    " Use for intra-state transactions (buyer and seller in the same state). The GST is split equally between central and state governments.",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "IGST:" }),
                    " Use for inter-state transactions (buyer and seller in different states) or for imports. The entire GST goes to the central government initially, which then distributes the SGST portion to the destination state."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-lg p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Q2: GSTR-2A vs GSTR-2B - Which should I use for claiming ITC?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Always use GSTR-2B" }),
                    " as the official basis for claiming ITC in your GSTR-3B return. Here's the difference:",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "GSTR-2B:" }),
                    " Static, auto-generated statement available after the 14th of each month. This is the official, tax authority-mandated document for ITC claims. Once generated, it doesn't change.",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "GSTR-2A:" }),
                    " Dynamic, real-time view of data uploaded by your suppliers. Use this for reference and early tracking, but not for official ITC claims. It changes continuously as suppliers upload invoices.",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Important:" }),
                    " If your supplier hasn't filed GSTR-1 by the due date, their invoice won't appear in your GSTR-2B, and you cannot claim ITC until it does."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-lg p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Q3: What is the penalty for not registering under GST when required?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-2", children: [
                    "If you fail to register despite crossing the threshold limit, you can face:",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside mt-2 space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Penalty of 10% of tax due or ₹10,000 (whichever is higher)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Interest at 18% per annum on unpaid tax" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Recovery of tax for the period you operated without registration" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-lg p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Q4: Can I revise a GST return after filing?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mt-2", children: "GSTR-1 can be amended in the next month's GSTR-1 using amendment tables. However, GSTR-3B cannot be revised after filing. You can only make corrections in subsequent months. Annual return (GSTR-9) allows for reconciliation of differences." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-lg p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Q5: What is Reverse Charge Mechanism (RCM)?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-2", children: [
                    "Under RCM, the recipient of goods/services pays GST instead of the supplier. This applies in specific cases:",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside mt-2 space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "When purchasing from unregistered suppliers" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Specific services like legal services, security services (from individuals)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Import of services" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Goods transport agency services (if transporter doesn't have GST registration)" })
                    ] }),
                    "The recipient must pay GST to the government and can claim ITC if eligible."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-lg p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Q6: How is GST calculated on discounts?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Discount before supply:" }),
                    " GST is calculated on the discounted price (invoice value after discount).",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Discount after supply:" }),
                    " If mentioned on the original invoice, ITC reversal is required. If not mentioned, issue a credit note and adjust in the same financial year or September of next year."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-lg p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Q7: Do I need e-Invoicing for my business?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-2", children: [
                    "e-Invoicing is ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "mandatory if your annual turnover exceeds ₹5 crore" }),
                    ". It applies to:",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside mt-2 space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "All B2B invoices (business to business transactions)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Export invoices" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Debit notes and credit notes" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "e-Invoicing is NOT required for B2C invoices (sales to individual consumers) or if your turnover is below ₹5 crore. The system generates a unique IRN and QR code that must be printed on the invoice."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-lg p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Q8: What is the QRMP scheme and should I opt for it?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-2", children: [
                    "The Quarterly Return Monthly Payment (QRMP) scheme is available for businesses with turnover up to ₹5 crore.",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Benefits:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside mt-2 space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "File GSTR-1 and GSTR-3B quarterly instead of monthly (4 returns/year vs 12)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Reduced compliance burden and filing costs" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Optional Invoice Furnishing Facility (IFF) for large B2B customers" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
                    " You still need to pay tax monthly (via PMT-06), but return filing is only quarterly. This scheme is ideal for small businesses with primarily B2C sales or small B2B transactions."
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-3", children: "Summary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 leading-relaxed", children: "GST has revolutionized India's tax system by creating a unified, transparent framework. Understanding the difference between CGST, SGST, and IGST, knowing when to apply each, properly claiming Input Tax Credit, filing returns on time, and maintaining accurate records are crucial for GST compliance. Use this calculator to quickly compute GST amounts for your transactions." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600 mt-3 italic", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Disclaimer:" }),
                " This guide is current as of 2025 but GST laws and rates may change. Always verify the latest rules on",
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.gst.gov.in", target: "_blank", rel: "noopener noreferrer", className: "underline text-orange-600 hover:text-orange-700", children: " www.gst.gov.in" }),
                " or consult a tax professional for complex scenarios, audits, and personalized advice."
              ] })
            ] }) })
          ] })
        ] }) })
      ] })
    }
  );
};
export {
  GSTCalculatorIndia as default
};
