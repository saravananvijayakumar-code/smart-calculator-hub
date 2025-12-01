import { Q as useToast, r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, a3 as FileText, i as CardDescription, k as CardContent, a4 as Label, V as Input, B as Button, o as LoaderCircle, D as DollarSign, aE as formatCurrency, a5 as Info, ah as backend } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { S as Switch } from "./switch-DFWixaoG.js";
import { S as Separator } from "./separator-63Q9JacM.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { C as CircleCheck } from "./circle-check-CJ5pTUz4.js";
import { C as CircleAlert } from "./circle-alert-DCAQyr8M.js";
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
import "./share-2-SpOWc355.js";
import "./link-C11IgQ5M.js";
import "./copy-BqV-1o4k.js";
import "./twitter-CFAqYlq6.js";
import "./facebook-BX8Qa6cK.js";
import "./linkedin-D9e3uSZB.js";
import "./message-circle-DZtFORhh.js";
import "./mail-DX6y6Mo7.js";
function UnusedLeaveCalculatorAustralia() {
  const { toast } = useToast();
  const [loading, setLoading] = reactExports.useState(false);
  const [result, setResult] = reactExports.useState(null);
  const [year, setYear] = reactExports.useState("2024-25");
  const [unusedLeaveAmount, setUnusedLeaveAmount] = reactExports.useState("15000");
  const [ytdGross, setYtdGross] = reactExports.useState("60000");
  const [residency, setResidency] = reactExports.useState("resident");
  const [claimTFT, setClaimTFT] = reactExports.useState(true);
  const [hasHelp, setHasHelp] = reactExports.useState(false);
  const calculate = async () => {
    try {
      setLoading(true);
      const response = await backend.au_tax.leaveWithholding({
        year,
        unusedLeaveAmount: parseFloat(unusedLeaveAmount) || 0,
        ytdGross: parseFloat(ytdGross) || 0,
        residency,
        claimTaxFreeThreshold: claimTFT,
        hasHelp
      });
      setResult(response);
    } catch (error) {
      console.error(error);
      toast({
        title: "Calculation Error",
        description: "Failed to calculate leave withholding.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Unused Leave Tax Calculator",
      description: "Calculate PAYG withholding on unused annual leave & termination payments (ATO Schedule 7)",
      keywords: "unused leave tax calculator, termination payment tax, annual leave payout tax, ATO Schedule 7, leave loading tax calculator Australia",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5 text-purple-600" }),
                "Leave Payment Details"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter your termination payment information" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "year", className: "text-sm font-medium", children: "Tax Year" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: year, onValueChange: setYear, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "year", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "2024-25", children: "2024-25" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "2025-26", children: "2025-26" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "unusedLeaveAmount", className: "text-sm font-medium", children: "Unused Leave Payment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground", children: "$" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "unusedLeaveAmount",
                      type: "number",
                      value: unusedLeaveAmount,
                      onChange: (e) => setUnusedLeaveAmount(e.target.value),
                      placeholder: "15000",
                      className: "pl-7"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Total unused annual leave payout (including leave loading if applicable)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ytdGross", className: "text-sm font-medium", children: "Year-to-Date Gross Earnings" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground", children: "$" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "ytdGross",
                      type: "number",
                      value: ytdGross,
                      onChange: (e) => setYtdGross(e.target.value),
                      placeholder: "60000",
                      className: "pl-7"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Total gross income earned this financial year before the leave payment" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "residency", className: "text-sm font-medium", children: "Residency Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: residency, onValueChange: (v) => setResidency(v), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "residency", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "resident", children: "Australian Resident" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "non-resident", children: "Non-Resident" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "whm", children: "Working Holiday Maker" })
                  ] })
                ] })
              ] }),
              residency === "resident" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-4 bg-muted/50 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "claimTFT", className: "text-sm font-medium", children: "Claim Tax-Free Threshold" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "First $18,200 of income is tax-free" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id: "claimTFT", checked: claimTFT, onCheckedChange: setClaimTFT })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "hasHelp", className: "text-sm font-medium", children: "HELP/HECS/VSL Debt" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Student loan repayment required" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id: "hasHelp", checked: hasHelp, onCheckedChange: setHasHelp })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: calculate, disabled: loading, className: "w-full", size: "lg", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }),
                "Calculating..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-4 h-4 mr-2" }),
                "Calculate Leave Tax"
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: result ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border-purple-200 dark:border-purple-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-purple-600 dark:text-purple-500" }),
                "Net Leave Payment"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold text-purple-600 dark:text-purple-500 mb-1", children: formatCurrency(result.netLeave) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "After tax withholding" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5 text-purple-600" }),
                  "Withholding Breakdown"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Detailed tax calculation for your leave payment" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-3 border-b", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Gross Leave Payment" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-semibold", children: formatCurrency(result.leaveAmount) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: "Tax Withheld" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
                      "Effective rate: ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs ml-1", children: [
                        result.withholdingRate.toFixed(1),
                        "%"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-600 dark:text-red-500 font-medium", children: [
                    "-",
                    formatCurrency(result.withholdingAmount)
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-3 bg-purple-50 dark:bg-purple-950/20 px-4 rounded-lg -mx-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-lg", children: "Net Leave Payment" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-purple-600 dark:text-purple-500", children: formatCurrency(result.netLeave) })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-4 h-4 text-blue-600 dark:text-blue-500" }),
                "ATO Schedule 7 Method"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-blue-800 dark:text-blue-200", children: result.explanation }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-4 h-4" }),
                  "Payment Summary"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Leave Payment" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: formatCurrency(result.leaveAmount) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "YTD Gross" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: formatCurrency(parseFloat(ytdGross)) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-medium", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Income" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatCurrency(result.leaveAmount + parseFloat(ytdGross)) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-amber-900 dark:text-amber-100", children: "Tax Time" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-amber-800 dark:text-amber-200 text-xs", children: "This withholding is an estimate. Your final tax liability will be calculated when you lodge your return." })
                ] })
              ] }) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ExportShareButtons,
              {
                calculatorType: "au-unused-leave",
                inputs: {
                  year,
                  unusedLeaveAmount: parseFloat(unusedLeaveAmount),
                  ytdGross: parseFloat(ytdGross)
                },
                results: result,
                title: "Unused Leave Tax Calculator Results"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full min-h-[500px] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-muted rounded-full w-fit mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-12 h-12 text-muted-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-2", children: "Ready to Calculate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-sm mx-auto", children: "Enter your leave payment details to calculate tax withholding using ATO Schedule 7" })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 max-w-3xl mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6", children: "Unused Leave Tax Calculator: Complete Guide" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4", children: "What is Unused Leave?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-4", children: "Unused annual leave (also called annual leave on termination) is the payout you receive for accrued but untaken annual leave when you cease employment. This can include:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6 ml-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-900 dark:text-gray-100", children: "Unused annual leave:" }),
              " Standard leave accrual"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-900 dark:text-gray-100", children: "Leave loading:" }),
              " Additional 17.5% payment (if applicable under your award/agreement)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-900 dark:text-gray-100", children: "Long service leave:" }),
              " Treated differently—not covered by Schedule 7 in all cases"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4", children: "How Schedule 7 Withholding Works" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-4", children: [
            "The ATO requires employers to use the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-900 dark:text-gray-100", children: "annualised income method" }),
            " when calculating PAYG withholding on unused leave payments:"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 dark:bg-purple-950/30 border-l-4 border-purple-400 dark:border-purple-500 p-4 rounded-lg my-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-purple-900 dark:text-purple-100 mb-3 text-lg", children: "📋 Step-by-Step Method" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-2 text-purple-800 dark:text-purple-200 text-sm ml-6 list-decimal", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Add the leave payment to your year-to-date (YTD) gross earnings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Calculate the annualised PAYG withholding on the total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Subtract the PAYG already withheld on YTD earnings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The difference is withheld from the leave payment" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-800 dark:text-purple-200 text-sm mt-3", children: "This method ensures withholding reflects your actual marginal tax rate based on total annual income." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "my-6 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "cursor-pointer font-semibold text-lg text-gray-800 dark:text-gray-200 p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors", children: "Non-Residents and Working Holiday Makers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 text-base leading-relaxed text-gray-700 dark:text-gray-300 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For non-residents and Working Holiday Makers, unused leave withholding uses flat rates per ATO Schedule 7:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full border border-gray-300 dark:border-gray-600 my-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-100 dark:bg-gray-800", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 px-3 py-2 text-left text-gray-900 dark:text-gray-100", children: "Residency Status" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 px-3 py-2 text-left text-gray-900 dark:text-gray-100", children: "Withholding Rate" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 px-3 py-2", children: "Non-residents" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 px-3 py-2", children: "32%" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 px-3 py-2", children: "Working Holiday Makers" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 px-3 py-2", children: "15%" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "my-6 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "cursor-pointer font-semibold text-lg text-gray-800 dark:text-gray-200 p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors", children: "Leave Loading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 text-base leading-relaxed text-gray-700 dark:text-gray-300 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Many awards and enterprise agreements provide a 17.5% leave loading on annual leave. When paid on termination:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 ml-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The entire amount (base leave + loading) is subject to PAYG withholding" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "Leave loading is ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "not" }),
                  " taxed differently—it's treated as ordinary income"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Include the loading in your "unused leave amount" input' })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-400 dark:border-blue-500 p-4 rounded-lg my-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-blue-900 dark:text-blue-100 mb-1 text-base", children: "💡 Genuine Redundancy vs Regular Termination" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-blue-800 dark:text-blue-200 text-sm leading-relaxed", children: [
              "Unused annual leave is always taxed the same way regardless of termination reason. However, ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "other" }),
              " termination payments may qualify for concessional tax treatment under genuine redundancy rules (not covered by this calculator). Consult a tax professional for complex redundancy scenarios."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4", children: "Example Calculation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-5 rounded-lg my-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900 dark:text-gray-100 mb-3 text-base", children: "Scenario: You resign in March with $60,000 YTD earnings and $15,000 unused leave." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-2 text-gray-700 dark:text-gray-300 text-sm ml-6 list-decimal", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "YTD earnings: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-900 dark:text-gray-100", children: "$60,000" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "Unused leave: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-900 dark:text-gray-100", children: "$15,000" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "Total income: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-900 dark:text-gray-100", children: "$75,000" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Annualised PAYG on $75,000: ~$13,200 (resident, claiming TFT)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Annualised PAYG on $60,000: ~$9,500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "Withholding on leave: $13,200 - $9,500 = ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-emerald-600 dark:text-emerald-400", children: "$3,700" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "Net leave payment: $15,000 - $3,700 = ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-emerald-600 dark:text-emerald-400", children: "$11,300" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4", children: "Tax Time Treatment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6", children: "At tax time, unused leave is added to your assessable income and taxed at your marginal rate like any other employment income. PAYG withheld on the leave payment counts toward your total withholding credits. If too much was withheld, you'll receive a refund; if too little, you'll owe the difference." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "my-6 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "cursor-pointer font-semibold text-lg text-gray-800 dark:text-gray-200 p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors", children: "Common Scenarios" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2", children: "Mid-Year Resignation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-gray-700 dark:text-gray-300", children: "If you resign mid-year and don't work again that year, the withholding rate on your leave may be higher than your final tax liability because it assumes full-year employment. You'll likely receive a refund when you lodge your return." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2", children: "Immediate New Job" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-gray-700 dark:text-gray-300", children: "If you start a new job immediately, your total annual income will be higher than your previous employer estimated, potentially resulting in under-withholding. Ensure your new employer withholds correctly to avoid a tax bill." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2", children: "Multiple Jobs in One Year" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-gray-700 dark:text-gray-300", children: "If you've had multiple jobs, sum all YTD earnings across all employers. The ATO calculates your final tax on total income, so accurate YTD figures ensure correct withholding estimates." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "my-6 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "cursor-pointer font-semibold text-lg text-gray-800 dark:text-gray-200 p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors", children: "Employer Obligations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 text-base leading-relaxed text-gray-700 dark:text-gray-300 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Employers must:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 ml-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Apply Schedule 7 withholding to all unused leave payments on termination" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Report leave payments separately on the employee's PAYG payment summary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Use the annualised method based on YTD earnings + leave payment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Remit withheld tax to the ATO as per normal PAYG schedules" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "my-6 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "cursor-pointer font-semibold text-lg text-gray-800 dark:text-gray-200 p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors", children: "Frequently Asked Questions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2", children: "Is unused leave taxed more than regular pay?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base leading-relaxed text-gray-700 dark:text-gray-300", children: [
                  "No. It's taxed at your marginal rate. The withholding ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "rate" }),
                  " may appear high because it's calculated based on your total annual income, but the final tax is the same as if you'd taken the leave during employment."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2", children: "Can I split my leave payment across financial years?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-gray-700 dark:text-gray-300", children: "Generally no. Leave is paid when employment ceases, which determines the financial year. However, if termination occurs near year-end, timing may affect which year it's assessable—consult your employer or tax agent." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2", children: "What if I had no other income this year?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-gray-700 dark:text-gray-300", children: "Enter $0 for YTD gross earnings. Withholding will be calculated based solely on the leave payment, likely resulting in lower withholding due to access to the full tax-free threshold (if resident and claiming TFT)." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2", children: "Does leave loading affect my tax?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-gray-700 dark:text-gray-300", children: "Leave loading increases your total assessable income, so yes—it increases your tax liability proportionally. But it's not taxed at a special rate; it's simply added to your total income." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-3", children: "References" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6 ml-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.ato.gov.au/businesses-and-organisations/hiring-and-paying-your-workers/paying-your-workers/withholding-from-payments-to-employees/payg-withholding/schedule-7-statement-of-formulas-for-calculating-amounts-to-be-withheld", target: "_blank", rel: "noopener", className: "text-blue-600 dark:text-blue-400 hover:underline", children: "ATO Schedule 7: Formulas for Unused Leave Withholding" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.ato.gov.au/businesses-and-organisations/hiring-and-paying-your-workers/paying-your-workers/withholding-from-payments-to-employees/payg-withholding", target: "_blank", rel: "noopener", className: "text-blue-600 dark:text-blue-400 hover:underline", children: "ATO PAYG Withholding Guide" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-4 rounded-lg my-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2", children: "Disclaimer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-gray-600 dark:text-gray-400", children: "This calculator provides estimates based on ATO Schedule 7 formulas. Actual withholding depends on your specific circumstances and employer's payroll system. This is not tax advice—consult a registered tax agent for personalized guidance." })
          ] })
        ] })
      ] })
    }
  );
}
export {
  UnusedLeaveCalculatorAustralia as default
};
