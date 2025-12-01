import { Q as useToast, r as reactExports, j as jsxRuntimeExports, S as SEOHead, a3 as FileText, f as Card, a4 as Label, D as DollarSign, V as Input, a5 as Info, B as Button, o as LoaderCircle, C as Calculator, T as TrendingUp, ah as backend } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { S as Switch } from "./switch-DFWixaoG.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-t5L32f7o.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { I as InFeedAd } from "./InFeedAd-qGRsmhMx.js";
import { S as SidebarAd } from "./SidebarAd-BcLzed3D.js";
import { A as Award } from "./award-Bl7Nn9A9.js";
import { W as Wallet } from "./wallet-DxIJPdsI.js";
import { C as CircleHelp } from "./circle-help-D9-5Kmcr.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./check-DTsA1WpX.js";
import "./share-2-SpOWc355.js";
import "./link-C11IgQ5M.js";
import "./copy-BqV-1o4k.js";
import "./twitter-CFAqYlq6.js";
import "./facebook-BX8Qa6cK.js";
import "./linkedin-D9e3uSZB.js";
import "./message-circle-DZtFORhh.js";
import "./mail-DX6y6Mo7.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
function BonusTaxCalculatorAustralia() {
  const { toast } = useToast();
  const [loading, setLoading] = reactExports.useState(false);
  const [result, setResult] = reactExports.useState(null);
  const [year, setYear] = reactExports.useState("2024-25");
  const [regularGross, setRegularGross] = reactExports.useState("3000");
  const [payPeriod, setPayPeriod] = reactExports.useState("fortnightly");
  const [bonusAmount, setBonusAmount] = reactExports.useState("5000");
  const [residency, setResidency] = reactExports.useState("resident");
  const [claimTFT, setClaimTFT] = reactExports.useState(true);
  const [hasHelp, setHasHelp] = reactExports.useState(false);
  const [method, setMethod] = reactExports.useState("B");
  const calculate = async () => {
    try {
      setLoading(true);
      const response = await backend.au_tax.bonusWithholding({
        year,
        regularGross: parseFloat(regularGross) || 0,
        payPeriod,
        bonusAmount: parseFloat(bonusAmount) || 0,
        residency,
        claimTaxFreeThreshold: claimTFT,
        hasHelp,
        method
      });
      setResult(response);
    } catch (error) {
      console.error(error);
      toast({
        title: "Calculation Error",
        description: "Failed to calculate bonus withholding.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Bonus Tax Calculator Australia | ATO Schedule 5 Withholding",
        description: "Calculate PAYG withholding on bonuses, commissions, and back-pay using ATO Schedule 5 methods. Accurate bonus tax calculator for Australian residents and non-residents.",
        keywords: "bonus tax calculator Australia, commission tax calculator, back pay tax, ATO Schedule 5, bonus withholding calculator"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8 max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-primary/10 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-8 h-8 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold", children: "Bonus Tax Calculator" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-1", children: [
              "ATO Schedule 5 withholding for bonuses, commissions & back-pay • FY ",
              year
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5" }),
            "Schedule 5 Certified"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium", children: "Method A & B Supported" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6 mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-8 bg-gradient-to-br from-primary/5 via-background to-background border-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-1", children: "Bonus & Payment Details" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Enter your bonus and regular pay information" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-8 h-8 text-primary opacity-50" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "bonusAmount", className: "text-sm font-medium", children: "Bonus / Commission Amount" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "bonusAmount",
                        type: "number",
                        value: bonusAmount,
                        onChange: (e) => setBonusAmount(e.target.value),
                        placeholder: "5000",
                        className: "pl-9 h-11 text-base"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "regularGross", className: "text-sm font-medium", children: "Regular Gross Pay (per period)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "regularGross",
                        type: "number",
                        value: regularGross,
                        onChange: (e) => setRegularGross(e.target.value),
                        placeholder: "3000",
                        className: "pl-9 h-11 text-base"
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "year", className: "text-sm font-medium", children: "Tax Year" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: year, onValueChange: setYear, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "year", className: "mt-1.5 h-11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "2024-25", children: "2024-25" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "2025-26", children: "2025-26" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "payPeriod", className: "text-sm font-medium", children: "Pay Period" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: payPeriod, onValueChange: (v) => setPayPeriod(v), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "payPeriod", className: "mt-1.5 h-11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "weekly", children: "Weekly" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "fortnightly", children: "Fortnightly" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "monthly", children: "Monthly" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "residency", className: "text-sm font-medium", children: "Residency" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: residency, onValueChange: (v) => setResidency(v), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "residency", className: "mt-1.5 h-11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "resident", children: "Resident" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "non-resident", children: "Non-Resident" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "whm", children: "WHM" })
                    ] })
                  ] })
                ] })
              ] }),
              residency === "resident" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "method", className: "text-sm font-medium", children: "Withholding Method" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: method, onValueChange: (v) => setMethod(v), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "method", className: "mt-1.5 h-11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "B", children: "Method B - Annualised (Recommended)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "A", children: "Method A - Flat 47%" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-2 flex items-start gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-3.5 h-3.5 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Method B calculates more accurate withholding based on your regular income" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "claimTFT", className: "font-medium cursor-pointer", children: "Tax-Free Threshold" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "PAYG Scale 2" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id: "claimTFT", checked: claimTFT, onCheckedChange: setClaimTFT })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "hasHelp", className: "font-medium cursor-pointer", children: "HELP/HECS Debt" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Student loan" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id: "hasHelp", checked: hasHelp, onCheckedChange: setHasHelp })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: calculate, disabled: loading, className: "w-full mt-6", size: "lg", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }),
                "Calculating..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-4 h-4 mr-2" }),
                "Calculate Bonus Withholding"
              ] }) })
            ] })
          ] }),
          result ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 border-2 border-green-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-green-700 dark:text-green-400 font-medium mb-1", children: "Your Net Bonus" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold text-green-600 dark:text-green-500 mb-2", children: formatCurrency(result.netBonus) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-green-600/80 dark:text-green-400/80", children: "After tax withholding" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-green-600/10 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-8 h-8 text-green-600 dark:text-green-500" }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Withholding Breakdown" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "summary", className: "w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "summary", children: "Summary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "details", children: "Details" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "summary", className: "space-y-4 mt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-3 border-b", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Gross Bonus" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold", children: formatCurrency(result.bonusAmount) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-2 text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-4 h-4" }),
                        "Tax Withheld (",
                        result.withholdingRate.toFixed(1),
                        "%)"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-red-600", children: [
                        "-",
                        formatCurrency(result.withholdingAmount)
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-3 border-t-2 font-semibold text-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Net Bonus" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600", children: formatCurrency(result.netBonus) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-4 bg-primary/5 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium mb-2", children: "Withholding Rate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-bold text-primary", children: [
                        result.withholdingRate.toFixed(1),
                        "%"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "of gross bonus" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "details", className: "space-y-4 mt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-4 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-blue-900 dark:text-blue-100 mb-1", children: [
                        "Method ",
                        result.method,
                        " Used"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-blue-800 dark:text-blue-200", children: result.explanation })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                        "Regular Pay (",
                        payPeriod,
                        ")"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: formatCurrency(parseFloat(regularGross)) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Bonus Payment" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: formatCurrency(result.bonusAmount) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-2 border-t", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Residency Status" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: residency === "resident" ? "Australian Resident" : residency === "non-resident" ? "Non-Resident" : "Working Holiday Maker" })
                    ] }),
                    residency === "resident" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Tax-Free Threshold" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: claimTFT ? "Claimed" : "Not Claimed" })
                      ] }),
                      hasHelp && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "HELP Debt" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Yes" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 text-center hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-8 h-8 text-green-600 mx-auto mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: formatCurrency(result.netBonus) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Take-home amount" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 text-center hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-8 h-8 text-red-600 mx-auto mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold", children: [
                  result.withholdingRate.toFixed(1),
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Withholding rate" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 text-center hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-8 h-8 text-primary mx-auto mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold", children: [
                  (result.netBonus / result.bonusAmount * 100).toFixed(1),
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Net to gross" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ExportShareButtons,
              {
                calculatorType: "au-bonus-tax",
                inputs: {
                  year,
                  bonusAmount: parseFloat(bonusAmount),
                  regularGross: parseFloat(regularGross),
                  payPeriod
                },
                results: result,
                title: "Bonus Tax Calculator Results"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-12 flex flex-col items-center justify-center text-center min-h-[400px] bg-gradient-to-br from-muted/30 to-background", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-primary/10 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-12 h-12 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-2", children: "Ready to Calculate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-md", children: "Enter your bonus and regular pay details above to calculate your take-home amount after tax withholding" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-8 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarAd, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-purple-200 dark:border-purple-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { className: "w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm", children: "Quick Tips" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Method B provides more accurate withholding than Method A" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Method A withholds at the top rate (47%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Bonuses are added to total income at tax time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Over-withholding results in a refund when you file" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• HELP repayments increase with bonus income" })
            ] })
          ] })
        ] }) })
      ] }),
      result && /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mt-12 p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "guide", className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "guide", children: "Guide" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "methods", children: "Methods" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "examples", children: "Examples" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "faq", children: "FAQ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "guide", className: "prose prose-sm max-w-none dark:prose-invert", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Bonus & Commission Tax Calculator: Complete Guide" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "How Bonus Withholding Works" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "When you receive a bonus, commission, or back-payment, your employer must withhold PAYG tax according to ATO Schedule 5. Unlike regular pay, bonuses are irregular payments that can push you into a higher tax bracket for that pay period, so special withholding methods apply." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "methods", className: "prose prose-sm max-w-none dark:prose-invert", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: "ATO Schedule 5 Methods" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mt-4 mb-2", children: "Method A: Flat Top Rate (47%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "The simplest method applies the top marginal tax rate (45% + 2% Medicare levy = 47%) to the entire bonus. This ensures sufficient tax is withheld but often results in over-withholding, which you'll reclaim as a refund at tax time." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "When to use:" }),
            " Quick calculations, one-off large bonuses, or when regular income data isn't available."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mt-6 mb-2", children: "Method B: Annualised Income (Recommended)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Method B calculates withholding by comparing annualised income with and without the bonus:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Calculate annual PAYG withholding based on regular pay" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Calculate annual PAYG withholding on regular pay + bonus" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The difference is withheld from the bonus" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "This method is more accurate because it accounts for your actual marginal tax rate, avoiding excessive over-withholding. Most employers use Method B for regular bonuses and commissions." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Non-Residents and Working Holiday Makers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "For non-residents and WHMs, bonus withholding uses flat rates:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Non-residents:" }),
              " 30% withholding on bonuses"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Working Holiday Makers:" }),
              " 15% withholding (aligned with their first-tier rate)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No Method A/B choice—flat rates always apply per ATO Schedule 5." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Common Bonus Types" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Annual Performance Bonus:" }),
              " Lump sum based on individual or company performance"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sales Commission:" }),
              " Variable pay based on sales targets"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sign-On Bonus:" }),
              " One-time payment for joining a company"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Back-Pay:" }),
              " Arrears from salary increases or award adjustments"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Retention Bonus:" }),
              " Incentive to stay with employer for a specified period"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "All are treated the same under Schedule 5 withholding rules." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "HELP Debt Considerations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "If you have a HELP/HECS debt, bonuses increase your repayment income, potentially triggering or increasing your compulsory repayment. PAYG withholding on bonuses includes an additional component for HELP repayments when applicable." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Tax Time Adjustments" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
            "Bonus withholding is an ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "estimate" }),
            ". At tax time, your bonus is simply added to your total assessable income and taxed at your marginal rate with all deductions and offsets applied. If too much was withheld (common with Method A), you'll receive a refund. If too little (rare), you'll owe the ATO."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "examples", className: "prose prose-sm max-w-none dark:prose-invert", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: "Example Scenarios" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mt-4 mb-2", children: "Example 1: $10,000 Bonus (Resident, Method B)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/50 p-4 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Regular fortnightly pay: $3,000 ($78,000/year)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Bonus: $10,000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Annual income without bonus: $78,000 → PAYG ~$14,500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Annual income with bonus: $88,000 → PAYG ~$18,200" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-semibold text-primary", children: "Bonus withholding: $18,200 - $14,500 = $3,700 (37%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-semibold text-green-600", children: "Net bonus: $10,000 - $3,700 = $6,300" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mt-6 mb-2", children: "Example 2: Same Bonus, Method A" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/50 p-4 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Withholding: $10,000 × 47% = $4,700" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-semibold text-green-600", children: "Net bonus: $5,300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-semibold text-blue-600", children: "Likely refund at tax time: ~$1,000" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Employer Obligations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Employers must:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Apply Schedule 5 withholding rules to all bonuses and commissions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Report bonus payments on employee payslips and PAYG summaries" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Remit withheld amounts to the ATO" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Use either Method A or B consistently for similar payment types" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "faq", className: "prose prose-sm max-w-none dark:prose-invert", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: "Frequently Asked Questions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mt-4 mb-2", children: "Which method will my employer use?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Most employers use Method B for accuracy, but some payroll systems default to Method A for simplicity. Check your payslip or ask your payroll team." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mt-4 mb-2", children: "Can I choose the withholding method?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No—the employer decides, though you can request they use Method B if they currently use A. The ATO allows both methods." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mt-4 mb-2", children: "Why is my bonus taxed so heavily?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
            `It's not "taxed more"—it's `,
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "withheld" }),
            " at a higher rate because it's treated as additional income on top of your regular pay. The withholding rate approximates your marginal rate. Final tax is calculated normally at year-end."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold mt-4 mb-2", children: "Can I salary sacrifice my bonus to super?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Yes, if your employer agrees. Salary sacrificing part or all of your bonus to super reduces taxable income and PAYG withholding, though you'll pay 15% contributions tax in your super fund instead." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mt-8 p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-sm max-w-none dark:prose-invert", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "References & Further Reading" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.ato.gov.au/businesses-and-organisations/hiring-and-paying-your-workers/paying-your-workers/withholding-from-payments-to-employees/payg-withholding/schedule-5-tax-table-for-back-payments-commissions-bonuses-and-similar-payments",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-primary hover:underline",
              children: "ATO Schedule 5: Tax Table for Bonuses & Commissions"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.ato.gov.au/businesses-and-organisations/hiring-and-paying-your-workers/paying-your-workers/withholding-from-payments-to-employees/payg-withholding",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-primary hover:underline",
              children: "ATO PAYG Withholding Guide"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mt-6 mb-3", children: "Disclaimer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "This calculator provides estimates based on ATO Schedule 5 formulas. Actual withholding may vary based on your employer's payroll system and specific circumstances. This is not tax advice—consult a registered tax agent for advice specific to your situation." })
      ] }) })
    ] })
  ] });
}
export {
  BonusTaxCalculatorAustralia as default
};
