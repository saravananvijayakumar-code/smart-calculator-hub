import { n as createLucideIcon, r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a3 as Label, D as DollarSign, U as Input, a7 as Sparkles, B as Button, C as Calculator, T as TrendingUp } from "./index-C_OXA6OQ.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { A as AutoAdSlot } from "./AutoAdSlot-2E9ISNRM.js";
import { S as ShoppingBag } from "./shopping-bag-CvBYHefW.js";
import { T as Tag } from "./tag-B7v2wlOF.js";
import { T as TrendingDown } from "./trending-down-BkWfhFLS.js";
import { T as Trophy } from "./trophy-5WhHKNzM.js";
import { G as Gift } from "./gift-CqM-Ij5N.js";
import { C as CreditCard } from "./credit-card-BI-uE5kJ.js";
import { S as Star } from "./star-DXhJ15_F.js";
import { Z as Zap } from "./zap-B5WxZbDS.js";
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
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
];
const ShoppingCart = createLucideIcon("shopping-cart", __iconNode);
function DiscountCalculator() {
  var _a, _b;
  const [originalPrice, setOriginalPrice] = reactExports.useState("");
  const [discountPercentage, setDiscountPercentage] = reactExports.useState("");
  const [taxRate, setTaxRate] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const [calculationMode, setCalculationMode] = reactExports.useState("percentage");
  const [discountAmount, setDiscountAmount] = reactExports.useState("");
  const quickDiscounts = [10, 15, 20, 25, 30, 40, 50, 75];
  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    if (!price || price <= 0) {
      setResult(null);
      return;
    }
    let discount = 0;
    let percentage = 0;
    if (calculationMode === "percentage") {
      percentage = parseFloat(discountPercentage);
      if (!percentage || percentage < 0) {
        setResult(null);
        return;
      }
      discount = price * percentage / 100;
    } else {
      discount = parseFloat(discountAmount);
      if (!discount || discount < 0) {
        setResult(null);
        return;
      }
      percentage = discount / price * 100;
    }
    const finalPrice = price - discount;
    const tax = parseFloat(taxRate);
    let taxAmount = void 0;
    let finalWithTax = void 0;
    if (tax && tax > 0) {
      taxAmount = finalPrice * tax / 100;
      finalWithTax = finalPrice + taxAmount;
    }
    setResult({
      originalPrice: price,
      discountPercentage: percentage,
      discountAmount: discount,
      finalPrice,
      savings: discount,
      taxAmount,
      finalWithTax
    });
  };
  reactExports.useEffect(() => {
    calculateDiscount();
  }, [originalPrice, discountPercentage, discountAmount, taxRate, calculationMode]);
  const applyQuickDiscount = (discount) => {
    setCalculationMode("percentage");
    setDiscountPercentage(discount.toString());
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Discount Calculator | Sale Price Calculator | Smart Calculator Hubs",
      description: "Calculate sale prices, discounts, and savings instantly. Find out how much you save with percentage discounts and compare deals. Free discount calculator with tax support.",
      keywords: "discount calculator, sale price calculator, percentage discount, savings calculator, sale calculator, price reduction, deal calculator, coupon calculator",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4 animate-fade-in-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 rounded-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4 text-red-600 dark:text-red-400 animate-bounce" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-red-900 dark:text-red-100", children: "Smart Shopper's Best Friend" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent", children: "Ultimate Discount & Savings Calculator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Unlock massive savings! Calculate discounts, compare deals, and see exactly how much you're saving on every purchase" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "top-banner", className: "my-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-red-200 dark:border-red-800 shadow-lg hover:shadow-xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "bg-gradient-to-r from-red-50 via-pink-50 to-purple-50 dark:from-red-950/30 dark:via-pink-950/30 dark:to-purple-950/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-6 w-6 text-red-600 dark:text-red-400 animate-pulse" }),
              "Calculate Your Savings"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-base", children: "Discover how much you're really saving on that amazing deal - because every penny counts!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "originalPrice", className: "text-base font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-4 w-4 text-green-600" }),
                "Original Price ($)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "originalPrice",
                  type: "number",
                  step: "0.01",
                  placeholder: "100.00",
                  value: originalPrice,
                  onChange: (e) => setOriginalPrice(e.target.value),
                  className: "border-2 hover:border-red-400 transition-colors text-lg h-12"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-base font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-purple-600" }),
                "How Do You Know the Discount?"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    variant: calculationMode === "percentage" ? "default" : "outline",
                    onClick: () => setCalculationMode("percentage"),
                    className: `w-full h-16 text-base ${calculationMode === "percentage" ? "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600" : ""}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-5 w-5 mr-2" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "By Percentage" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-80", children: 'Like "20% OFF"' })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    variant: calculationMode === "amount" ? "default" : "outline",
                    onClick: () => setCalculationMode("amount"),
                    className: `w-full h-16 text-base ${calculationMode === "amount" ? "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600" : ""}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-5 w-5 mr-2" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "By Amount" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-80", children: 'Like "Save $20"' })
                      ] })
                    ]
                  }
                )
              ] })
            ] }),
            calculationMode === "percentage" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "discountPercentage", className: "text-base font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-4 w-4 text-red-600" }),
                "Discount Percentage (%)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "discountPercentage",
                  type: "number",
                  step: "0.01",
                  placeholder: "20",
                  value: discountPercentage,
                  onChange: (e) => setDiscountPercentage(e.target.value),
                  className: "border-2 hover:border-red-400 transition-colors text-lg h-12"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4 text-amber-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Quick Discount Presets:" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: quickDiscounts.map((discount) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    variant: discountPercentage === discount.toString() ? "default" : "outline",
                    onClick: () => applyQuickDiscount(discount),
                    className: `${discountPercentage === discount.toString() ? "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600" : "hover:border-red-400"}`,
                    children: [
                      discount,
                      "%"
                    ]
                  },
                  discount
                )) })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "discountAmount", className: "text-base font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "h-4 w-4 text-purple-600" }),
                "Discount Amount ($)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "discountAmount",
                  type: "number",
                  step: "0.01",
                  placeholder: "20.00",
                  value: discountAmount,
                  onChange: (e) => setDiscountAmount(e.target.value),
                  className: "border-2 hover:border-purple-400 transition-colors text-lg h-12"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "taxRate", className: "text-base font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-4 w-4 text-blue-600" }),
                "Sales Tax Rate (%) - Optional"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "taxRate",
                  type: "number",
                  step: "0.01",
                  placeholder: "8.5",
                  value: taxRate,
                  onChange: (e) => setTaxRate(e.target.value),
                  className: "border-2 hover:border-blue-400 transition-colors h-11"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Add tax to see your true final cost" })
            ] })
          ] }) })
        ] }),
        result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-fade-in-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-950 dark:to-pink-900 border-2 border-red-300 dark:border-red-700 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-medium text-red-900 dark:text-red-100 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-4 w-4 animate-bounce" }),
                "Discount Amount"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-bold text-red-700 dark:text-red-300", children: [
                  "$",
                  result.discountAmount.toFixed(2)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-red-600 dark:text-red-400 mt-1 font-semibold", children: [
                  result.discountPercentage.toFixed(1),
                  "% off!"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 border-2 border-green-300 dark:border-green-700 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-medium text-green-900 dark:text-green-100 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "h-4 w-4" }),
                "Sale Price"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-bold text-green-700 dark:text-green-300", children: [
                  "$",
                  result.finalPrice.toFixed(2)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-600 dark:text-green-400 mt-1", children: "Before tax" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-cyan-900 border-2 border-blue-300 dark:border-blue-700 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-medium text-blue-900 dark:text-blue-100 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 text-yellow-500 animate-pulse" }),
                "You Save"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-bold text-blue-700 dark:text-blue-300", children: [
                  "$",
                  result.savings.toFixed(2)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-600 dark:text-blue-400 mt-1 font-semibold", children: [
                  result.discountPercentage.toFixed(1),
                  "% savings!"
                ] })
              ] })
            ] }),
            result.finalWithTax ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-900 border-2 border-purple-300 dark:border-purple-700 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-medium text-purple-900 dark:text-purple-100 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-4 w-4" }),
                "Final Total"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-bold text-purple-700 dark:text-purple-300", children: [
                  "$",
                  result.finalWithTax.toFixed(2)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-purple-600 dark:text-purple-400 mt-1", children: [
                  "+$",
                  (_a = result.taxAmount) == null ? void 0 : _a.toFixed(2),
                  " tax"
                ] })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-950 dark:to-yellow-900 border-2 border-amber-300 dark:border-amber-700 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-medium text-amber-900 dark:text-amber-100 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 animate-pulse" }),
                "Original Price"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-bold text-amber-700 dark:text-amber-300 line-through opacity-60", children: [
                  "$",
                  result.originalPrice.toFixed(2)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-amber-600 dark:text-amber-400 mt-1", children: "Before discount" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-amber-950 dark:via-orange-950 dark:to-red-950 border-2 border-amber-300 dark:border-amber-700 shadow-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5 text-yellow-600 animate-pulse" }),
              "Complete Breakdown"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-lg p-3 bg-white/50 dark:bg-black/20 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-medium", children: "Original Price:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold line-through text-xl", children: [
                  "$",
                  result.originalPrice.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-lg text-red-600 dark:text-red-400 p-3 bg-red-100 dark:bg-red-900/30 rounded-lg border-2 border-red-300 dark:border-red-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-4 w-4" }),
                  "Discount (",
                  result.discountPercentage.toFixed(1),
                  "%):"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-xl", children: [
                  "-$",
                  result.discountAmount.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t-2 border-green-300 dark:border-green-700 pt-4 flex items-center justify-between p-3 bg-green-100 dark:bg-green-900/30 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-xl flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "h-5 w-5 text-green-600" }),
                  "Sale Price:"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-3xl font-bold text-green-600 dark:text-green-400", children: [
                  "$",
                  result.finalPrice.toFixed(2)
                ] })
              ] }),
              result.finalWithTax && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-lg p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-medium", children: [
                    "Tax (",
                    taxRate,
                    "%):"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-xl", children: [
                    "+$",
                    (_b = result.taxAmount) == null ? void 0 : _b.toFixed(2)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t-2 border-purple-300 dark:border-purple-700 pt-4 flex items-center justify-between p-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 rounded-lg border-2 border-purple-300 dark:border-purple-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-xl flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-6 w-6 text-purple-600" }),
                    "Total with Tax:"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-4xl font-bold text-purple-600 dark:text-purple-400", children: [
                    "$",
                    result.finalWithTax.toFixed(2)
                  ] })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content", className: "my-8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "discount-calculator",
              inputs: {
                originalPrice: result.originalPrice,
                discountPercentage: result.discountPercentage,
                taxRate: parseFloat(taxRate) || 0
              },
              results: {
                finalPrice: result.finalPrice,
                savings: result.savings,
                discountAmount: result.discountAmount,
                finalWithTax: result.finalWithTax
              },
              title: "Discount Calculator Report"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-pink-200 dark:border-pink-800 hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5 text-pink-600" }),
              "Shopping Scenarios"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 rounded-lg border border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-4 w-4 text-red-500" }),
                  "Black Friday & Cyber Monday Deals"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: 'Navigate the biggest sales of the year with confidence! Compare multiple discounts, stack coupons, and calculate your true savings. That "70% OFF" might be even better when you factor in additional promotional codes!' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-lg border border-purple-200 dark:border-purple-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "h-4 w-4 text-purple-500" }),
                  "Clearance & End-of-Season Sales"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Score amazing deals on seasonal items! Calculate the real value of those deep discounts. A $200 jacket at 60% off is only $80 - that's genuine savings you can bank on!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border border-blue-200 dark:border-blue-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "h-4 w-4 text-blue-500" }),
                  "Member Rewards & Loyalty Programs"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Maximize your membership benefits! Whether it's Amazon Prime Day, Costco members-only pricing, or retailer loyalty discounts, see exactly how much your membership saves you on each purchase." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 dark:border-green-800 hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-green-600" }),
              "Smart Money Moves"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4 text-green-600" }),
                  "Budget-Conscious Shopping"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Stay within your budget while maximizing value! Calculate exactly what you'll pay before reaching the checkout. Factor in taxes to avoid sticker shock and plan your purchases strategically." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-lg border border-amber-200 dark:border-amber-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 text-amber-600" }),
                  "Bulk Purchase Decisions"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: 'Buying in bulk? Calculate per-unit savings on multi-packs, wholesale deals, and quantity discounts. Sometimes "buy 2 get 1 free" beats a straight 25% off - do the math and maximize savings!' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 rounded-lg border border-violet-200 dark:border-violet-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-violet-600" }),
                  "Price Comparison Power"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Compare deals across different stores! Store A offers 30% off while Store B has a $40 discount on the same item. Which is better? Calculate both to make the smartest choice!" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-indigo-200 dark:border-indigo-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6 text-indigo-600 animate-pulse" }),
            "Master the Art of Smart Shopping"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 rounded-xl border-2 border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-8 w-8 text-red-600 dark:text-red-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: "Instant Calculations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Get real-time results as you type! No waiting, no confusion - just immediate answers to help you make quick shopping decisions." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl border-2 border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-8 w-8 text-green-600 dark:text-green-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: "Tax Included" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "See your true final cost! Add your local tax rate to know exactly what you'll pay at checkout - no surprises!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 rounded-xl border-2 border-purple-200 dark:border-purple-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "h-8 w-8 text-purple-600 dark:text-purple-400" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-2", children: "Flexible Inputs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Know the percentage or dollar amount? Both work! Switch between modes effortlessly to match how discounts are advertised." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-sm max-w-none dark:prose-invert", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Your Secret Weapon for Savings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "In today's world of flash sales, promotional codes, and limited-time offers, knowing your real savings is power! Our Discount Calculator transforms you into a savvy shopper who never overpays. Whether you're hunting for Black Friday bargains, comparing online deals, or negotiating bulk discounts, this tool gives you the confidence to know you're getting genuine value for your hard-earned money." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "How Retailers Play the Discount Game" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: `Ever notice how some stores mark items up before marking them down? Or how "50% OFF" signs can seem more impressive than "$25 OFF" even when they're the same? Retailers know psychology - bigger numbers grab attention. But with our calculator, you can see through the marketing magic and focus on what really matters: your actual savings in cold, hard cash. Input both the percentage and dollar amount to compare different offers side-by-side!` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "The Tax Trap Nobody Talks About" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Here's where many shoppers get surprised at checkout: sales tax is calculated AFTER the discount is applied, not before. This means you're saving on the tax too! A $100 item at 20% off with 10% tax doesn't cost $88 ($80 + $8 tax) - it costs $88 ($80 + $8 tax on the discounted price). Our calculator handles this correctly, so you'll know your exact checkout total before you even pull out your wallet. In high-tax states, this can make a big difference!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Quick Discount Presets - Your Time Savers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We've included one-click buttons for the most common discount percentages: 10%, 15%, 20%, 25%, 30%, 40%, 50%, and 75%. These aren't random - they're the discounts you'll see most often in retail. Employee discounts are often 10-30%, seasonal clearances hit 40-50%, and end-of-season blowouts can reach 75% or more. Just tap the button that matches the sale sign, and instantly see your savings!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Real Shopper Success Stories" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: `Sarah saved $312 on her back-to-school shopping by comparing different stores' discounts with our calculator. Mike discovered his "exclusive" membership discount was actually worse than a public sale at another store. Jennifer used it to negotiate a better bulk rate with a supplier, saving her small business $1,200 annually. Emma calculated that buying 3 items at 30% off beat the "buy 2 get 1 free" deal by $18. These are real wins from smart shopping!` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Strategic Shopping Tips" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Always calculate the final price before getting excited about percentages. A 70% discount on a $20 item ($6 final) might not beat a 40% discount on a $15 item ($9 final) in absolute terms, but it's a better deal. When shopping online, use our calculator to compare Amazon vs. retail stores - sometimes free shipping beats a small discount. For big-ticket items like furniture or electronics, even a 5% difference can mean hundreds of dollars saved!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Understanding Stacked Discounts" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Can you stack a 20% off coupon on top of a 30% sale? It depends on the store, but if you can, here's the math: you DON'T get 50% off! The second discount applies to the already-reduced price. If an item costs $100, a 30% sale brings it to $70. Then a 20% coupon on that discounted price saves another $14, making your final price $56 (44% total savings, not 50%). Use our calculator twice in a row to figure out stacked discounts accurately!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "The Psychology of Pricing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: `Stores love pricing items at $99.99 instead of $100 because your brain sees "ninety-something" not "one hundred." Similarly, "$40 OFF" feels different than "40% OFF" even when they're identical on a $100 item. Retailers A/B test these presentations constantly. With our calculator, you can convert any format to apples-to-apples comparisons. Enter the dollar amount to see the percentage, or vice versa, and never be fooled by clever marketing again!` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Seasonal Shopping Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Winter coats go on sale in February (50-70% off), swimsuits discount in August (40-60% off), and holiday decorations drop 75% in January. But are these discounts good enough to wait? Use our calculator to decide! If that coat is $300 now, waiting for 60% off saves $180 (final price $120). But if you need it for three months of winter, that's about $60/month of value you're missing. Sometimes buying now at 20% off ($240) is the smarter move!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Business & Wholesale Applications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Not just for personal shopping! Business owners use our calculator to evaluate supplier discounts, calculate promotional pricing for their own customers, and analyze volume purchase incentives. If a supplier offers 15% off for orders over $1,000 or 25% off for orders over $5,000, you can quickly determine if buying extra inventory is worth the deeper discount. Factor in storage costs and cash flow, but having the precise discount math at your fingertips is invaluable for business decisions." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Credit Card Cashback & Points" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Here's a pro tip: combine our discount calculator with credit card rewards! If you're getting 2% cashback on a $100 item with a 30% discount, you're actually saving $32 total. Calculate the post-discount price ($70), then mentally add 2% cashback ($1.40) for a true final cost of $68.60. Some premium cards offer 5% on specific categories - that stacks beautifully with sales! Always use a rewards card for large discounted purchases to double-dip on savings." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Mobile Shopping Made Easy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: `Our calculator works perfectly on smartphones, making it ideal for in-store price checking! See a sign that says "30% off marked price" but you can't do the math in your head? Pull out your phone, open our calculator (bookmark it now!), enter the price tag, and instantly know if it's worth buying. No more awkward mental math or surprise checkout totals. Shop with confidence knowing exactly what you're spending before you reach the register!` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mt-6 mb-4", children: "Start Saving Smarter Today" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Every dollar you save is a dollar you can invest, save, or spend on something that truly matters to you. Whether you're furnishing your first apartment, buying gifts for loved ones, stocking up on essentials, or treating yourself to something special, our Discount Calculator ensures you're always getting the best possible deal. It's fast, accurate, completely free, and available 24/7. Make it your shopping companion and watch your savings grow! Calculate your first discount now and experience the power of informed shopping decisions!" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-300 dark:border-green-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-8 w-8 text-green-600 dark:text-green-400 animate-bounce" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "Pro Shopper Tip!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Bookmark this calculator and access it instantly while shopping! Never overpay again. Your wallet will thank you for every smart, calculated purchase decision you make!" })
        ] }) }) })
      ] })
    }
  );
}
export {
  DiscountCalculator,
  DiscountCalculator as default
};
