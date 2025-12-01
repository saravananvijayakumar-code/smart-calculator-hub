import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, a3 as FileText, i as CardDescription, k as CardContent, a4 as Label, V as Input, B as Button, C as Calculator, T as TrendingUp, aE as formatCurrency, a5 as Info } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { S as Separator } from "./separator-63Q9JacM.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { A as AIAnalysis } from "./AIAnalysis-B-4zh-eH.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
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
const CGTCalculatorAustralia = () => {
  const [purchasePrice, setPurchasePrice] = reactExports.useState("");
  const [salePrice, setSalePrice] = reactExports.useState("");
  const [purchaseCosts, setPurchaseCosts] = reactExports.useState("");
  const [improvementCosts, setImprovementCosts] = reactExports.useState("");
  const [saleCosts, setSaleCosts] = reactExports.useState("");
  const [holdingPeriod, setHoldingPeriod] = reactExports.useState("");
  const [taxableIncome, setTaxableIncome] = reactExports.useState("");
  const [assetType, setAssetType] = reactExports.useState("");
  const [results, setResults] = reactExports.useState(null);
  const calculateCGT = () => {
    const purchase = parseFloat(purchasePrice);
    const sale = parseFloat(salePrice);
    const purchaseCost = parseFloat(purchaseCosts) || 0;
    const improvements = parseFloat(improvementCosts) || 0;
    const saleCost = parseFloat(saleCosts) || 0;
    const holding = parseFloat(holdingPeriod);
    const income = parseFloat(taxableIncome);
    if (!purchase || !sale || !holding || !income) return;
    const costBase = purchase + purchaseCost + improvements;
    const netProceeds = sale - saleCost;
    const capitalGain = Math.max(0, netProceeds - costBase);
    const discountEligible = holding >= 12;
    const discountRate = discountEligible ? 0.5 : 0;
    const discountedGain = capitalGain * (1 - discountRate);
    let marginalRate = 0;
    if (income <= 18200) marginalRate = 0;
    else if (income <= 45e3) marginalRate = 0.19;
    else if (income <= 12e4) marginalRate = 0.325;
    else if (income <= 18e4) marginalRate = 0.37;
    else marginalRate = 0.45;
    const cgtLiability = discountedGain * marginalRate;
    const netGain = capitalGain - cgtLiability;
    setResults({
      capitalGain,
      costBase,
      netProceeds,
      discountAmount: capitalGain * discountRate,
      discountedGain,
      cgtLiability,
      netGain,
      marginalRate: marginalRate * 100,
      discountEligible,
      effectiveCGTRate: capitalGain > 0 ? cgtLiability / capitalGain * 100 : 0
    });
  };
  const reset = () => {
    setPurchasePrice("");
    setSalePrice("");
    setPurchaseCosts("");
    setImprovementCosts("");
    setSaleCosts("");
    setHoldingPeriod("");
    setTaxableIncome("");
    setAssetType("");
    setResults(null);
  };
  const tips = [
    "CGT discount of 50% applies to assets held longer than 12 months",
    "Principal place of residence is generally CGT-free",
    "Include purchase costs, improvement costs, and sale costs in calculations",
    "Consider timing of asset sales for tax optimization",
    "Small business CGT concessions may apply to qualifying business assets"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Australia Capital Gains Tax Calculator | CGT Calculator 2024-25",
      description: "Comprehensive Australian Capital Gains Tax calculator with CGT discount, cost base calculation, and marginal tax rates. Calculate your CGT liability accurately for investment properties, shares, and other assets.",
      keywords: "Australia CGT calculator, capital gains tax Australia, CGT discount, asset disposal tax, Australian tax calculator, investment property CGT, share CGT Australia",
      tips,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5" }),
                "CGT Calculator"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Calculate your capital gains tax liability with Australian tax rates" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "assetType", children: "Asset Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: assetType, onValueChange: setAssetType, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select asset type" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "property", children: "Investment Property" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "shares", children: "Shares/Stocks" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "crypto", children: "Cryptocurrency" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "collectibles", children: "Collectibles" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "business", children: "Business Assets" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "other", children: "Other Assets" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "purchasePrice", children: "Purchase Price ($)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "purchasePrice",
                      type: "number",
                      placeholder: "Original cost",
                      value: purchasePrice,
                      onChange: (e) => setPurchasePrice(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "salePrice", children: "Sale Price ($)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "salePrice",
                      type: "number",
                      placeholder: "Sale proceeds",
                      value: salePrice,
                      onChange: (e) => setSalePrice(e.target.value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "purchaseCosts", children: "Purchase Costs ($)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "purchaseCosts",
                      type: "number",
                      placeholder: "Stamp duty, legal fees",
                      value: purchaseCosts,
                      onChange: (e) => setPurchaseCosts(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "saleCosts", children: "Sale Costs ($)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "saleCosts",
                      type: "number",
                      placeholder: "Agent, legal fees",
                      value: saleCosts,
                      onChange: (e) => setSaleCosts(e.target.value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "improvementCosts", children: "Improvement Costs ($)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "improvementCosts",
                    type: "number",
                    placeholder: "Capital improvements",
                    value: improvementCosts,
                    onChange: (e) => setImprovementCosts(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "holdingPeriod", children: "Holding Period (Months)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "holdingPeriod",
                      type: "number",
                      placeholder: "Months owned",
                      value: holdingPeriod,
                      onChange: (e) => setHoldingPeriod(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "taxableIncome", children: "Annual Taxable Income ($)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "taxableIncome",
                      type: "number",
                      placeholder: "Other taxable income",
                      value: taxableIncome,
                      onChange: (e) => setTaxableIncome(e.target.value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateCGT, className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "mr-2 h-4 w-4" }),
                  "Calculate CGT"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: reset, variant: "outline", children: "Reset" })
              ] })
            ] })
          ] }),
          results && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
              "CGT Calculation Results"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Capital Gain" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-green-600", children: formatCurrency(results.capitalGain, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "CGT Liability" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-red-600", children: formatCurrency(results.cgtLiability, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "CGT Discount" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-blue-600", children: formatCurrency(results.discountAmount, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Net Gain After Tax" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-green-600", children: formatCurrency(results.netGain, "AUD") })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Tax Details" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Marginal Tax Rate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                      results.marginalRate.toFixed(1),
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Effective CGT Rate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
                      results.effectiveCGTRate.toFixed(1),
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "CGT Discount Eligible" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: results.discountEligible ? "default" : "destructive", children: results.discountEligible ? "Yes (50%)" : "No" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Cost Base" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: formatCurrency(results.costBase, "AUD") })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIAnalysis,
            {
              analysisRequest: {
                calculatorType: "cgt-calculator-australia",
                data: {
                  purchasePrice: parseFloat(purchasePrice) || 0,
                  salePrice: parseFloat(salePrice) || 0,
                  capitalGain: results.capitalGain,
                  cgtLiability: results.cgtLiability,
                  discount: results.discountAmount,
                  netGain: results.netGain
                }
              },
              autoRun: true,
              title: "AI CGT Analysis & Tax Optimization",
              description: "Get personalized strategies to minimize your capital gains tax and optimize your investment timing."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "cgt-calculator-australia",
              inputs: {
                purchasePrice: parseFloat(purchasePrice) || 0,
                salePrice: parseFloat(salePrice) || 0,
                purchaseCosts: parseFloat(purchaseCosts) || 0,
                improvementCosts: parseFloat(improvementCosts) || 0,
                saleCosts: parseFloat(saleCosts) || 0,
                holdingPeriod: parseFloat(holdingPeriod) || 0,
                taxableIncome: parseFloat(taxableIncome) || 0
              },
              results: {
                capitalGain: results.capitalGain,
                cgtLiability: results.cgtLiability,
                discountAmount: results.discountAmount,
                netGain: results.netGain,
                effectiveCGTRate: results.effectiveCGTRate
              },
              title: "CGT Calculator Australia Report",
              className: "mt-6"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Complete Guide to Australian Capital Gains Tax (CGT)" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Capital Gains Tax (CGT) is one of Australia's most significant investment taxes, affecting millions of property investors, share traders, and asset holders across the country. Understanding CGT is crucial for making informed investment decisions, optimizing tax outcomes, and ensuring compliance with Australian Tax Office (ATO) requirements. This comprehensive guide covers everything you need to know about CGT calculations, exemptions, and strategic planning." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "What is Capital Gains Tax?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Capital Gains Tax is not a separate tax but forms part of your income tax assessment. When you dispose of an asset (such as selling, gifting, or transferring it), any capital gain is included in your assessable income and taxed at your marginal tax rate. CGT applies to assets acquired after 20 September 1985, including investment properties, shares, units in unit trusts, cryptocurrency, collectibles, and business assets." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "The 50% CGT Discount: Australia's Most Valuable Tax Benefit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Australian tax residents can claim a 50% CGT discount on assets held for more than 12 months. This means only half of your capital gain is subject to tax, effectively halving your CGT liability. For example, if you make a $100,000 capital gain on shares held for 18 months, only $50,000 is added to your taxable income. This substantial benefit makes long-term investing extremely attractive and is one of the key reasons why property and share investments remain popular in Australia." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Understanding Cost Base Calculations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The cost base of an asset includes the original purchase price plus incidental costs such as stamp duty, legal fees, brokerage, and transfer costs. Capital improvements that increase the asset's value or extend its useful life can also be added to the cost base. However, maintenance and repair costs generally cannot be included. For investment properties, this might include renovations, extensions, or major upgrades, but not routine maintenance like painting or garden care." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Cost Base Example - Investment Property:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Purchase Price: $500,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Stamp Duty: $25,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Legal Fees: $2,500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Building Inspection: $800" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Kitchen Renovation: $30,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Total Cost Base: $558,300" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Main Residence Exemption" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The family home is generally exempt from CGT under the main residence exemption, provided it has been your principal place of residence throughout the ownership period. The exemption can apply to up to 2 hectares of land and may be partially available when a property has been used for income production (such as rental) or when you've had multiple residences. This exemption represents one of the most valuable benefits in the Australian tax system, allowing families to build wealth through their primary residence without tax consequences." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Investment Property and CGT Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For investment property owners, CGT planning is crucial for maximizing returns. Consider these strategies: timing sales to coincide with lower income years, using the six-year rule if you move out and rent your former home, claiming all eligible cost base improvements, and considering partial exemptions if the property was your main residence for part of the ownership period. The six-year rule allows you to treat your former main residence as CGT-exempt for up to six years after you stop living in it and start renting it out." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Share Trading and CGT" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Share investors must distinguish between capital gains and ordinary income. If you're considered a share trader (buying and selling frequently for profit), your gains may be treated as ordinary income without access to the CGT discount. Factors the ATO considers include frequency of transactions, intention to make profit, use of borrowed money, and whether share trading is part of a business. Dividend reinvestment plans (DRPs) can complicate cost base calculations, requiring careful record-keeping of each parcel's acquisition cost and date." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Cryptocurrency and Digital Assets" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cryptocurrency transactions are subject to CGT in Australia. Each disposal (sale, exchange, or spend) is a CGT event requiring calculation of capital gains or losses. The ATO requires records of all transactions including dates, amounts in AUD, purposes of transactions, and parties involved. Using the FIFO (First In, First Out) method for cost base calculations is generally accepted, though specific record-keeping for each unit can be more accurate." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Small Business CGT Concessions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Small business owners may access additional CGT concessions that can significantly reduce or eliminate CGT liability. These include the small business 15-year exemption (for assets owned for 15+ years), 50% active asset reduction, retirement exemption (up to $500,000 lifetime limit), and roll-over relief for replacement assets. To qualify, businesses must meet specific tests including maximum net asset value of $6 million, aggregated turnover under $2 million, and active asset requirements." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Advanced CGT Planning Strategies" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Tax Loss Harvesting" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Capital losses can offset capital gains in the same tax year, and excess losses can be carried forward indefinitely. Strategic realization of losses near year-end can reduce current year tax liability. However, be aware of wash sale rules and ensure investment decisions aren't purely tax-driven. Consider the 30-day rule for shares to avoid having the loss disallowed if you repurchase the same or substantially similar assets." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Timing Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Consider timing asset sales to optimize tax outcomes. Selling in a lower income year, spreading sales across multiple years, or accelerating/deferring sales based on expected income changes can significantly impact tax liability. Remember that the 12-month holding period for CGT discount eligibility starts from the contract date, not settlement date." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Family and Estate Planning" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "CGT has implications for estate planning and family wealth transfers. Assets receive a 'stepped-up basis' when inherited, meaning beneficiaries acquire the asset at market value at the time of death, potentially eliminating unrealized capital gains. Joint ownership structures, family discretionary trusts, and gifting strategies can be used to optimize CGT outcomes across family groups, though professional advice is essential." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Key CGT Planning Tips:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Hold assets for at least 12 months to access the 50% CGT discount" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Keep detailed records of all purchase costs and improvements" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider timing of sales to coincide with lower income years" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Use capital losses to offset capital gains where possible" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Understand main residence exemption rules for property investments" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider small business concessions if eligible" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Seek professional advice for complex situations" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Record Keeping Requirements" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The ATO requires taxpayers to keep CGT records for five years after disposal of the asset. For assets held for many years, this means maintaining records potentially decades old. Digital record-keeping is recommended, with cloud storage ensuring accessibility. Essential records include purchase contracts, settlement statements, improvement receipts, professional valuations, and any relevant correspondence with advisors." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "CGT and Superannuation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Superannuation funds pay CGT at concessional rates: 15% during accumulation phase and 0% during pension phase (for funds in retirement mode). This makes superannuation an attractive vehicle for long-term wealth building, especially for assets likely to generate significant capital gains. The CGT discount also applies to super funds for assets held longer than 12 months, reducing the effective rate to 10% during accumulation." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Frequently Asked Questions" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How accurate is this CGT calculator?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This calculator provides estimates based on current Australian tax rates and standard CGT rules. Actual calculations may vary based on specific circumstances, ATO interpretations, and changes to tax law. Always consult a qualified tax professional for complex situations or significant transactions." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What assets are exempt from CGT?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Main residence (with conditions), personal use assets under $10,000, cars and motorcycles for personal use, assets acquired before 20 September 1985, and certain government bonds are generally CGT-exempt. Collectibles under $500 and personal use assets under $10,000 may also be exempt." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Can I claim a capital loss if my asset decreased in value?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Yes, capital losses can offset capital gains in the same year. Excess losses can be carried forward indefinitely to offset future capital gains. However, capital losses cannot be offset against ordinary income like salary or business income." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What's the difference between CGT and ordinary income?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Capital gains arise from disposal of assets and may qualify for the 50% CGT discount if held for more than 12 months. Ordinary income (like salary, rent, or business income) doesn't qualify for the discount. The ATO considers factors like frequency of transactions and business intention when determining classification." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How does CGT apply to inherited assets?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Inherited assets receive a 'stepped-up basis' equal to market value at the time of death, potentially eliminating unrealized capital gains. Beneficiaries acquire the asset at this market value, and future CGT calculations are based on this stepped-up cost base rather than the original purchase price." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What records do I need to keep for CGT purposes?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Keep purchase contracts, settlement statements, receipts for improvements and incidental costs, professional valuations, and any relevant legal documents. Records must be kept for five years after asset disposal. For shares, maintain dividend statements and any corporate action notifications." })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator provides estimates only and should not be relied upon for final tax decisions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Tax laws are complex and subject to change - current rates and rules apply to 2024-25 financial year." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Individual circumstances may affect CGT calculations including residency status and asset classification." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Main residence exemption has specific conditions that may not be covered by this calculator." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Small business CGT concessions have detailed eligibility requirements not assessed here." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator doesn't consider indexation (abolished for assets acquired after September 1999)." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Professional tax advice is recommended for significant transactions or complex situations." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• The ATO is the authoritative source for current tax law and interpretations." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Results are estimates only and actual tax outcomes may vary significantly from calculations." })
          ] }) })
        ] })
      ] })
    }
  );
};
export {
  CGTCalculatorAustralia as default
};
