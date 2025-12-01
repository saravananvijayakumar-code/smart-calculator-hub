import { O as useToast, r as reactExports, j as jsxRuntimeExports, S as SEOHead, C as Calculator, f as Card, a3 as Label, B as Button, U as Input, a2 as FileText, ay as ChevronUp, ax as ChevronDown, a4 as Info, T as TrendingUp, D as DollarSign, ag as backend } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { S as Switch } from "./switch-DgZVp3Rz.js";
import { S as Slider } from "./slider-5OVd4A4U.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-BNSAX0su.js";
import { E as EnhancedAIAnalysis } from "./EnhancedAIAnalysis-BZiQW2bt.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { I as InFeedAd } from "./InFeedAd-QnbVBxtz.js";
import { S as SidebarAd } from "./SidebarAd-BVe5aeTN.js";
import { Z as Zap } from "./zap-B5WxZbDS.js";
import { L as LoaderCircle } from "./loader-circle-BYW7QwsU.js";
import { C as ChartColumn } from "./chart-column-CAGIVosk.js";
import { W as Wallet } from "./wallet-7QltRvhQ.js";
import { C as CircleHelp } from "./circle-help-DPxCoKDy.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
import "./badge-fo2YvZos.js";
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
import "./AdsterraSlot--S6-7ysu.js";
const COMMON_SALARIES = [
  { label: "Minimum Wage", value: 45e3 },
  { label: "Average", value: 75e3 },
  { label: "Median", value: 68e3 },
  { label: "High Income", value: 12e4 },
  { label: "Top Bracket", value: 2e5 }
];
function PayCalculatorAustralia() {
  const { toast } = useToast();
  const [loading, setLoading] = reactExports.useState(false);
  const [result, setResult] = reactExports.useState(null);
  const [showAdvanced, setShowAdvanced] = reactExports.useState(false);
  const [autoCalculate, setAutoCalculate] = reactExports.useState(false);
  const [year, setYear] = reactExports.useState("2025-26");
  const [grossAnnual, setGrossAnnual] = reactExports.useState("75000");
  const [period, setPeriod] = reactExports.useState("fortnightly");
  const [residency, setResidency] = reactExports.useState("resident");
  const [claimTFT, setClaimTFT] = reactExports.useState(true);
  const [hasHelp, setHasHelp] = reactExports.useState(false);
  const [privateCover, setPrivateCover] = reactExports.useState(true);
  const [dependants, setDependants] = reactExports.useState("0");
  const [spouseIncome, setSpouseIncome] = reactExports.useState("0");
  const [salarySacrifice, setSalarySacrifice] = reactExports.useState("0");
  const [includeSuper, setIncludeSuper] = reactExports.useState(false);
  const [isSenior, setIsSenior] = reactExports.useState(false);
  const calculate = async () => {
    try {
      setLoading(true);
      const response = await backend.au_tax.calculate({
        year,
        grossAnnual: parseFloat(grossAnnual) || 0,
        period,
        residency,
        claimTaxFreeThreshold: claimTFT,
        hasHelp,
        privateCover,
        dependants: parseInt(dependants) || 0,
        spouseIncome: parseFloat(spouseIncome) || 0,
        salarySacrifice: parseFloat(salarySacrifice) || 0,
        includeSuper,
        isSenior
      });
      setResult(response);
    } catch (error) {
      console.error(error);
      toast({
        title: "Calculation Error",
        description: "Failed to calculate pay. Please check your inputs.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    if (autoCalculate && parseFloat(grossAnnual) > 0) {
      const timer = setTimeout(() => {
        calculate();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [grossAnnual, period, residency, claimTFT, hasHelp, privateCover, year, autoCalculate]);
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  const periodLabel = {
    weekly: "Weekly",
    fortnightly: "Fortnightly",
    monthly: "Monthly",
    annual: "Annual"
  }[period];
  const getPercentage = (part, total) => {
    return total > 0 ? (part / total * 100).toFixed(1) : "0";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Australian Pay Calculator 2025-26 | ATO-Accurate Take Home Pay",
        description: "ATO-accurate Australian pay calculator for FY 2025-26. Calculate take-home pay with PAYG withholding, HELP repayments, Medicare levy, and MLS. Includes Stage 3 tax cuts and 12% Super Guarantee.",
        keywords: "Australian pay calculator, take home pay calculator Australia, PAYG calculator, salary calculator Australia, ATO tax calculator, net pay calculator"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8 max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-primary/10 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-8 h-8 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold", children: "Australian Pay Calculator" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-1", children: [
              "ATO-accurate take-home pay with PAYG Schedule 1 formulas • FY ",
              year
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3.5 h-3.5" }),
            "Stage 3 Tax Cuts Included"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium", children: year === "2025-26" ? "SG 12.0%" : "SG 11.5%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium", children: "PAYG Certified" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6 mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-8 bg-gradient-to-br from-primary/5 via-background to-background border-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-1", children: "Quick Salary Input" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Drag the slider or enter an amount" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "auto-calc", className: "text-sm cursor-pointer", children: "Live updates" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id: "auto-calc", checked: autoCalculate, onCheckedChange: setAutoCalculate })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-lg font-semibold", children: "Annual Salary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-primary", children: formatCurrency(parseFloat(grossAnnual) || 0) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Slider,
                  {
                    value: [parseFloat(grossAnnual) || 0],
                    onValueChange: (value) => setGrossAnnual(value[0].toString()),
                    min: 2e4,
                    max: 3e5,
                    step: 1e3,
                    className: "mb-6"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-5 gap-2", children: COMMON_SALARIES.map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: parseFloat(grossAnnual) === preset.value ? "default" : "outline",
                    size: "sm",
                    onClick: () => setGrossAnnual(preset.value.toString()),
                    className: "text-xs",
                    children: preset.label
                  },
                  preset.value
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  value: grossAnnual,
                  onChange: (e) => setGrossAnnual(e.target.value),
                  placeholder: "Enter exact amount",
                  className: "text-lg h-12"
                }
              ) }),
              result && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 p-6 bg-primary/10 rounded-xl border-2 border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mb-1", children: "Your Take-Home Pay" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-primary", children: formatCurrency(result.netPeriod) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: periodLabel })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mb-1", children: "Annual" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: formatCurrency(result.netAnnual) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-green-600 dark:text-green-400 mt-1", children: [
                    getPercentage(result.netAnnual, parseFloat(grossAnnual)),
                    "% of gross"
                  ] })
                ] })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-semibold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5" }),
              "Details & Settings"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "year", className: "text-sm font-medium", children: "Tax Year" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: year, onValueChange: setYear, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "year", className: "mt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "2025-26", children: "2025-26 (SG 12.0%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "2024-25", children: "2024-25 (SG 11.5%)" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "period", className: "text-sm font-medium", children: "Pay Period" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: period, onValueChange: (v) => setPeriod(v), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "period", className: "mt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "weekly", children: "Weekly" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "fortnightly", children: "Fortnightly" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "monthly", children: "Monthly" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "annual", children: "Annual" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "residency", className: "text-sm font-medium", children: "Residency" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: residency, onValueChange: (v) => setResidency(v), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "residency", className: "mt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "resident", children: "Australian Resident" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "non-resident", children: "Non-Resident" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "whm", children: "Working Holiday Maker" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between h-full pb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "includeSuper", className: "text-sm font-medium", children: "Super Included" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id: "includeSuper", checked: includeSuper, onCheckedChange: setIncludeSuper })
              ] }) }) })
            ] }),
            residency === "resident" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-6 border-t space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
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
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "privateCover", className: "font-medium cursor-pointer", children: "Private Cover" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Avoids MLS" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id: "privateCover", checked: privateCover, onCheckedChange: setPrivateCover })
              ] })
            ] }) }),
            residency === "resident" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "ghost",
                className: "w-full justify-between",
                onClick: () => setShowAdvanced(!showAdvanced),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    showAdvanced ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" }),
                    "Advanced Options"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Dependants, salary sacrifice, etc." })
                ]
              }
            ) }),
            showAdvanced && residency === "resident" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-4 border-t space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "dependants", className: "text-sm font-medium", children: "Dependants" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "dependants",
                    type: "number",
                    value: dependants,
                    onChange: (e) => setDependants(e.target.value),
                    placeholder: "0",
                    min: "0",
                    className: "mt-1.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "For Medicare levy & MLS" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "spouseIncome", className: "text-sm font-medium", children: "Spouse Income" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "spouseIncome",
                    type: "number",
                    value: spouseIncome,
                    onChange: (e) => setSpouseIncome(e.target.value),
                    placeholder: "0",
                    className: "mt-1.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Annual amount" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "salarySacrifice", className: "text-sm font-medium", children: "Salary Sacrifice" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "salarySacrifice",
                    type: "number",
                    value: salarySacrifice,
                    onChange: (e) => setSalarySacrifice(e.target.value),
                    placeholder: "0",
                    className: "mt-1.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Pre-tax super contribution" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 rounded-lg border bg-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "isSenior", className: "font-medium cursor-pointer", children: "Senior/Pensioner" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Higher thresholds" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id: "isSenior", checked: isSenior, onCheckedChange: setIsSenior })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: calculate,
                disabled: loading || autoCalculate,
                className: "w-full mt-6",
                size: "lg",
                children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }),
                  "Calculating..."
                ] }) : autoCalculate ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 mr-2" }),
                  "Live Mode Active"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-4 h-4 mr-2" }),
                  "Calculate Take-Home Pay"
                ] })
              }
            )
          ] }),
          result && /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, {}),
          result ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-5 h-5 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Tax Breakdown" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "visual", className: "w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "visual", children: "Visual" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "detailed", children: "Detailed" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "visual", className: "space-y-4 mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Take-Home Pay" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary", children: [
                        formatCurrency(result.netAnnual),
                        " (",
                        getPercentage(result.netAnnual, parseFloat(grossAnnual)),
                        "%)"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-primary rounded-full", style: { width: `${getPercentage(result.netAnnual, parseFloat(grossAnnual))}%` } })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Income Tax" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-red-600", children: [
                        formatCurrency(result.incomeTax),
                        " (",
                        getPercentage(result.incomeTax, parseFloat(grossAnnual)),
                        "%)"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-red-500 rounded-full", style: { width: `${getPercentage(result.incomeTax, parseFloat(grossAnnual))}%` } })
                  ] }),
                  residency === "resident" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Medicare Levy" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-orange-600", children: [
                        formatCurrency(result.medicareLevy),
                        " (",
                        getPercentage(result.medicareLevy, parseFloat(grossAnnual)),
                        "%)"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-orange-500 rounded-full", style: { width: `${getPercentage(result.medicareLevy, parseFloat(grossAnnual))}%` } })
                  ] }),
                  result.helpRepayment > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "HELP Repayment" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-yellow-600", children: [
                        formatCurrency(result.helpRepayment),
                        " (",
                        getPercentage(result.helpRepayment, parseFloat(grossAnnual)),
                        "%)"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-yellow-500 rounded-full", style: { width: `${getPercentage(result.helpRepayment, parseFloat(grossAnnual))}%` } })
                  ] }),
                  result.medicareLevySurcharge > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Medicare Levy Surcharge" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-pink-600", children: [
                        formatCurrency(result.medicareLevySurcharge),
                        " (",
                        getPercentage(result.medicareLevySurcharge, parseFloat(grossAnnual)),
                        "%)"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-pink-500 rounded-full", style: { width: `${getPercentage(result.medicareLevySurcharge, parseFloat(grossAnnual))}%` } })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-4 h-4" }),
                        "Superannuation (",
                        year === "2024-25" ? "11.5%" : "12.0%",
                        ")"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-green-600", children: formatCurrency(result.superannuation) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-green-500 rounded-full", style: { width: `${year === "2024-25" ? "11.5" : "12"}%` } })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "detailed", className: "space-y-3 mt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-3 border-b font-semibold", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "Gross Income (",
                        periodLabel,
                        ")"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatCurrency(result.grossPeriod) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-2 text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Income Tax" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-600", children: [
                        "-",
                        formatCurrency(result.incomeTaxPeriod)
                      ] })
                    ] }),
                    result.lito > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-2 text-green-600", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "LITO (Low Income Tax Offset)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "+",
                        formatCurrency(result.lito / (period === "weekly" ? 52 : period === "fortnightly" ? 26 : period === "monthly" ? 12 : 1))
                      ] })
                    ] }),
                    residency === "resident" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-2 text-muted-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Medicare Levy (2%)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-orange-600", children: [
                          "-",
                          formatCurrency(result.medicareLevyPeriod)
                        ] })
                      ] }),
                      result.medicareLevySurcharge > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-2 text-muted-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Medicare Levy Surcharge" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-pink-600", children: [
                          "-",
                          formatCurrency(result.medicareLevySurchargePeriod)
                        ] })
                      ] })
                    ] }),
                    result.helpRepayment > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-2 text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "HELP Repayment" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-yellow-600", children: [
                        "-",
                        formatCurrency(result.helpRepaymentPeriod)
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-3 border-t font-bold text-base", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "Net Pay (",
                        periodLabel,
                        ")"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: formatCurrency(result.netPeriod) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Annual Net Income" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: formatCurrency(result.netAnnual) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Total Tax (Annual)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: formatCurrency(result.totalTax) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Effective Tax Rate" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                        result.effectiveTaxRate.toFixed(2),
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Marginal Tax Rate" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                        result.marginalTaxRate.toFixed(0),
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pt-2 border-t", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-4 h-4" }),
                        "Superannuation (",
                        year === "2024-25" ? "11.5%" : "12.0%",
                        ")"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-green-600", children: [
                        formatCurrency(result.superannuation),
                        " /yr"
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-blue-900 dark:text-blue-100", children: "ATO-Certified Calculation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-blue-800 dark:text-blue-200", children: [
                  "Uses official PAYG Schedule 1 withholding formulas and ",
                  year,
                  " tax brackets from the Treasury Laws Amendment (Cost of Living Tax Cuts) Act 2024. Accuracy guaranteed within ±$1 due to rounding."
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 text-center hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-8 h-8 text-green-600 mx-auto mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold", children: [
                  getPercentage(result.netAnnual, parseFloat(grossAnnual)),
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Take-home rate" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 text-center hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-8 h-8 text-primary mx-auto mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold", children: [
                  result.effectiveTaxRate.toFixed(1),
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Effective tax rate" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 text-center hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-8 h-8 text-green-600 mx-auto mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: formatCurrency(result.superannuation) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Annual super" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ExportShareButtons,
              {
                calculatorType: "au-pay",
                inputs: {
                  year,
                  grossAnnual: parseFloat(grossAnnual),
                  period,
                  residency
                },
                results: result,
                title: "Australian Pay Calculator Results"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              EnhancedAIAnalysis,
              {
                calculatorType: "au-pay",
                data: {
                  grossAnnual: parseFloat(grossAnnual),
                  period,
                  residency,
                  hasHelp,
                  year,
                  netAnnual: result.netAnnual,
                  netPeriod: result.netPeriod,
                  grossPeriod: result.grossPeriod,
                  incomeTax: result.incomeTax,
                  medicareLevy: result.medicareLevy,
                  medicareLevySurcharge: result.medicareLevySurcharge,
                  helpRepayment: result.helpRepayment,
                  totalTax: result.totalTax,
                  superannuation: result.superannuation,
                  lito: result.lito,
                  effectiveTaxRate: result.effectiveTaxRate,
                  marginalTaxRate: result.marginalTaxRate
                }
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-12 flex flex-col items-center justify-center text-center min-h-[300px] bg-gradient-to-br from-muted/30 to-background", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-primary/10 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-12 h-12 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-2", children: "Ready to Calculate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-md", children: "Adjust your salary using the slider above, then click calculate to see your accurate take-home pay breakdown" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Enable live updates for instant calculations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Stage 3 tax cuts mean lower taxes in 2024-25" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Only claim tax-free threshold at one job" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Private cover avoids Medicare Levy Surcharge" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Super is paid on top unless package includes it" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "guide", className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "guide", children: "Guide" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "tax-cuts", children: "Tax Cuts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "deductions", children: "Deductions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "faq", children: "FAQ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "guide", className: "prose prose-sm max-w-none dark:prose-invert mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "How This Calculator Works" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This pay calculator implements the exact PAYG (Pay As You Go) withholding formulas published by the Australian Taxation Office in Schedule 1 of the NAT 1004 tax tables. Unlike simplified calculators that divide annual tax by pay periods, this tool uses period-specific coefficients to match the exact withholding amounts your employer calculates." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Understanding PAYG Withholding" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "PAYG withholding is the amount your employer deducts from each pay to cover your annual tax liability. The ATO publishes mathematical formulas (Schedule 1) with specific coefficients for each pay period:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Scale 2:" }),
              " For employees claiming the tax-free threshold (most primary jobs)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Scale 6:" }),
              " For employees not claiming the threshold (second jobs, non-residents without threshold entitlement)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Low Income Tax Offset (LITO)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "LITO provides a tax offset of up to $700 for Australian residents earning under $66,667." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Medicare Levy (2%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Most Australian residents pay a 2% Medicare levy on taxable income, with reductions for low-income earners." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Superannuation Guarantee (SG)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2024-25:" }),
              " 11.5%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2025-26 onwards:" }),
              " 12.0%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "tax-cuts", className: "prose prose-sm max-w-none dark:prose-invert mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Stage 3 Tax Cuts (Effective 1 July 2024)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "From the 2024-25 financial year, the Treasury Laws Amendment (Cost of Living Tax Cuts) Act 2024 introduced revised tax brackets:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$0 – $18,200:" }),
              " 0% (tax-free threshold)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$18,201 – $45,000:" }),
              " 16% (reduced from 19%)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$45,001 – $135,000:" }),
              " 30% (reduced from 32.5%, threshold increased)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$135,001 – $190,000:" }),
              " 37%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$190,001+:" }),
              " 45%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "These changes deliver tax relief across all income levels, with the biggest benefit for middle-income earners who previously faced the 32.5% rate." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "deductions", className: "prose prose-sm max-w-none dark:prose-invert mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Medicare Levy Surcharge (MLS)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The MLS is an additional charge (1.0% to 1.5%) for higher-income earners without private hospital cover. Tiers for 2024-25:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tier 0:" }),
              " Income ≤ $97,000 (singles) / $194,000 (families) — 0%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tier 1:" }),
              " $97,001–$113,000 / $194,001–$226,000 — 1.0%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tier 2:" }),
              " $113,001–$151,000 / $226,001–$302,000 — 1.25%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tier 3:" }),
              " $151,001+ / $302,001+ — 1.5%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "HELP/HECS/VSL Repayments" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If you have a HELP (Higher Education Loan Program), HECS, or VSL debt, compulsory repayments are calculated based on your repayment income. For 2024-25:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "No repayment below $54,435" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "1% between $54,435–$62,850" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Rates increase progressively to 10% for income above $159,664" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Salary Sacrifice" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Salary sacrificing to super reduces your taxable income, lowering income tax and HELP repayments. However, it increases your ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "MLS income" }),
            " (used to determine Medicare Levy Surcharge eligibility)."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "faq", className: "prose prose-sm max-w-none dark:prose-invert mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Frequently Asked Questions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Why is my withholding different from my actual annual tax?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "PAYG withholding is an ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "estimate" }),
            " designed to approximate your final tax bill. Differences arise from LITO (applied at tax time), deductions you claim, and income variations throughout the year."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Should I claim the tax-free threshold on my second job?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No. Only claim the tax-free threshold with one employer (usually your main job). Claiming it on multiple jobs results in under-withholding and a tax debt at year-end." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Do I need private health insurance to avoid MLS?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Only if your income exceeds the MLS thresholds ($97,000 singles / $194,000 families for 2024-25). If you're below these thresholds, you won't pay MLS regardless of cover." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Can I make extra HELP repayments?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Yes, you can make voluntary HELP repayments directly to the ATO at any time. Voluntary payments reduce your debt immediately and aren't subject to indexation." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "What's the difference between PAYG and actual tax?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "PAYG is what's ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "withheld" }),
            " each pay period. Your ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "actual tax" }),
            " is calculated annually based on total income, deductions, and offsets. This calculator shows annual tax liability alongside PAYG withholding for comparison."
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mt-8 p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-sm max-w-none dark:prose-invert", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "References & Further Reading" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.legislation.gov.au/C2024A00003/latest/text",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-primary hover:underline",
              children: "Treasury Laws Amendment (Cost of Living Tax Cuts) Act 2024"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.ato.gov.au/rates-and-codes/tax-rates-australian-residents",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-primary hover:underline",
              children: "ATO Tax Rates for Australian Residents"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.ato.gov.au/businesses-and-organisations/hiring-and-paying-your-workers/paying-your-workers/withholding-from-payments-to-employees/payg-withholding",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-primary hover:underline",
              children: "ATO PAYG Withholding"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.ato.gov.au/tax-rates-and-codes/tax-offset-rates",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-primary hover:underline",
              children: "ATO Low Income Tax Offset"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mt-6 mb-3", children: "Disclaimer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "This calculator provides general information only and should not be relied upon as professional tax advice. Tax laws are complex and individual circumstances vary. Always consult a registered tax agent or the ATO for advice specific to your situation." })
      ] }) })
    ] })
  ] });
}
export {
  PayCalculatorAustralia as default
};
