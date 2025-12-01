import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, a4 as Info, k as CardContent, i as CardDescription, a3 as Label, D as DollarSign, U as Input, C as Calculator, B as Button, aD as formatCurrency, T as TrendingUp, c as Shield, p as TriangleAlert } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-BNSAX0su.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { C as Car } from "./car-B_NUcg_I.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
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
function AutoLoanCalculatorUS() {
  const [vehiclePrice, setVehiclePrice] = reactExports.useState("30000");
  const [downPayment, setDownPayment] = reactExports.useState("5000");
  const [interestRate, setInterestRate] = reactExports.useState("4.5");
  const [loanTerm, setLoanTerm] = reactExports.useState("60");
  const [tradeInValue, setTradeInValue] = reactExports.useState("0");
  const [salesTax, setSalesTax] = reactExports.useState("8.5");
  const [monthlyIncome, setMonthlyIncome] = reactExports.useState("5000");
  const [results, setResults] = reactExports.useState(null);
  const calculateLoan = () => {
    const price = parseFloat(vehiclePrice) || 0;
    const down = parseFloat(downPayment) || 0;
    const rate = parseFloat(interestRate) / 100 || 0;
    const months = parseInt(loanTerm) || 0;
    const tradeIn = parseFloat(tradeInValue) || 0;
    const tax = parseFloat(salesTax) / 100 || 0;
    const income = parseFloat(monthlyIncome) || 0;
    if (price <= 0 || months <= 0) {
      setResults(null);
      return;
    }
    const taxAmount = price * tax;
    const totalVehicleCost = price + taxAmount;
    const loanAmount = Math.max(0, totalVehicleCost - down - tradeIn);
    const monthlyRate = rate / 12;
    let monthlyPayment = 0;
    if (loanAmount > 0 && rate > 0) {
      monthlyPayment = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    } else if (loanAmount > 0) {
      monthlyPayment = loanAmount / months;
    }
    const totalAmountPaid = monthlyPayment * months;
    const totalInterestPaid = totalAmountPaid - loanAmount;
    const totalCostOfOwnership = totalAmountPaid + down + (price - tradeIn) * 0.15;
    const affordabilityRatio = income > 0 ? monthlyPayment / income * 100 : 0;
    setResults({
      monthlyPayment,
      totalInterestPaid,
      totalAmountPaid,
      totalCostOfOwnership,
      affordabilityRatio
    });
  };
  const tips = [
    "Aim for total car expenses (payment + insurance + gas) under 20% of income",
    "Consider certified pre-owned vehicles for better value and lower insurance costs",
    "Larger down payments reduce monthly payments and total interest paid",
    "Shop around for the best interest rates from banks, credit unions, and online lenders",
    "Factor in depreciation when considering new vs used vehicles - new cars lose 20-30% value in first year",
    "Get pre-approved for financing before shopping to understand your budget and negotiate better",
    "Consider the total cost of ownership including maintenance, insurance, fuel, and depreciation",
    "Shorter loan terms save money on interest but increase monthly payments"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "Auto Loan Calculator - Car Payment & Financing Calculator",
      description: "Calculate monthly car payments, total interest, and determine if an auto loan fits your budget. Get instant results with our comprehensive auto financing calculator.",
      keywords: "auto loan calculator, car payment calculator, vehicle financing, car loan, auto financing, monthly payment calculator, car loan rates, vehicle loan calculator",
      tips,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5" }),
            "Understanding Auto Loans"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-sm max-w-none dark:prose-invert", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground mb-4", children: "An auto loan is a secured loan where the vehicle serves as collateral. This comprehensive calculator helps you understand the true cost of financing a vehicle, including monthly payments, total interest, and affordability based on your income." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "basics", className: "w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "basics", children: "Loan Basics" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "rates", children: "Interest Rates" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "terms", children: "Loan Terms" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "tips", children: "Smart Tips" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "basics", className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground", children: "How Auto Loans Work" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Principal:" }),
                    " The amount you borrow (vehicle price minus down payment and trade-in)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Interest:" }),
                    " The cost of borrowing money, expressed as an Annual Percentage Rate (APR)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Term:" }),
                    " The length of time to repay the loan, typically 36-84 months"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Monthly Payment:" }),
                    " Fixed amount paid each month including principal and interest"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: "Auto loans are typically secured by the vehicle itself, meaning the lender can repossess the car if payments aren't made. This security allows for lower interest rates compared to unsecured loans." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "rates", className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground", children: "Interest Rate Factors" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium text-foreground mb-2", children: "Credit Score Impact:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 text-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Excellent (750+): 3-5% APR" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Good (700-749): 5-7% APR" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Fair (650-699): 7-12% APR" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Poor (600-649): 12-18% APR" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Bad (below 600): 18%+ APR" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium text-foreground mb-2", children: "Other Rate Factors:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 text-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Vehicle age and mileage" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• New vs. used vehicle" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Loan term length" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Down payment amount" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Debt-to-income ratio" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "terms", className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground", children: "Choosing the Right Loan Term" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium text-green-600 mb-2", children: "✅ Shorter Terms (36-48 months)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 text-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Lower total interest paid" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Higher monthly payments" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Build equity faster" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Less risk of being upside down" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium text-orange-600 mb-2", children: "⚠️ Longer Terms (60-84 months)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 text-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Lower monthly payments" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Much higher total interest" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Higher risk of negative equity" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• May exceed warranty period" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "tips", className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground", children: "Smart Auto Financing Tips" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-green-500 pl-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium text-foreground", children: "Before You Shop" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 text-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Check your credit score" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Get pre-approved for financing" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Research vehicle values" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Set a realistic budget" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-blue-500 pl-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium text-foreground", children: "Shopping Strategy" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 text-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Compare dealer vs. bank financing" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Negotiate price before financing" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider certified pre-owned" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Factor in all costs" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-orange-500 pl-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium text-foreground", children: "Financial Wisdom" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 text-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 20% down payment ideal" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Keep total transport costs under 20% of income" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Emergency fund comes first" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider insurance costs" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-red-500 pl-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium text-foreground", children: "Avoid These Mistakes" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 text-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Focusing only on monthly payment" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Extending loan for lower payment" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Rolling negative equity into new loan" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Skipping gap insurance on new cars" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "h-5 w-5" }),
                "Vehicle & Loan Details"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter your vehicle and financing information" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "vehiclePrice", children: "Vehicle Price" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "vehiclePrice",
                      type: "number",
                      placeholder: "30000",
                      value: vehiclePrice,
                      onChange: (e) => setVehiclePrice(e.target.value),
                      className: "pl-10"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "downPayment", children: "Down Payment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "downPayment",
                      type: "number",
                      placeholder: "5000",
                      value: downPayment,
                      onChange: (e) => setDownPayment(e.target.value),
                      className: "pl-10"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "tradeInValue", children: "Trade-In Value" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "tradeInValue",
                      type: "number",
                      placeholder: "0",
                      value: tradeInValue,
                      onChange: (e) => setTradeInValue(e.target.value),
                      className: "pl-10"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "interestRate", children: "APR (Annual Percentage Rate)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "interestRate",
                      type: "number",
                      step: "0.1",
                      placeholder: "4.5",
                      value: interestRate,
                      onChange: (e) => setInterestRate(e.target.value),
                      className: "pl-10"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "loanTerm", children: "Loan Term" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: loanTerm, onValueChange: setLoanTerm, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "36", children: "36 months (3 years)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "48", children: "48 months (4 years)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "60", children: "60 months (5 years)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "72", children: "72 months (6 years)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "84", children: "84 months (7 years)" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "salesTax", children: "Sales Tax Rate" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "salesTax",
                      type: "number",
                      step: "0.1",
                      placeholder: "8.5",
                      value: salesTax,
                      onChange: (e) => setSalesTax(e.target.value),
                      className: "pl-10"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "monthlyIncome", children: "Monthly Gross Income" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "monthlyIncome",
                      type: "number",
                      placeholder: "5000",
                      value: monthlyIncome,
                      onChange: (e) => setMonthlyIncome(e.target.value),
                      className: "pl-10"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "For affordability analysis" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateLoan, className: "w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "mr-2 h-4 w-4" }),
                "Calculate Auto Loan"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Calculation Results" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Your auto loan payment breakdown and affordability" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: results ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600", children: formatCurrency(results.monthlyPayment) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Monthly Payment" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-center p-4 rounded-lg ${results.affordabilityRatio <= 15 ? "bg-green-50 dark:bg-green-950" : results.affordabilityRatio <= 20 ? "bg-yellow-50 dark:bg-yellow-950" : "bg-red-50 dark:bg-red-950"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-2xl font-bold ${results.affordabilityRatio <= 15 ? "text-green-600" : results.affordabilityRatio <= 20 ? "text-yellow-600" : "text-red-600"}`, children: [
                    results.affordabilityRatio.toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Of Income" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Interest Paid:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: formatCurrency(results.totalInterestPaid) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Amount Paid:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: formatCurrency(results.totalAmountPaid) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Est. Total Cost of Ownership:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: formatCurrency(results.totalCostOfOwnership) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-lg ${results.affordabilityRatio <= 15 ? "bg-green-50 dark:bg-green-950" : results.affordabilityRatio <= 20 ? "bg-yellow-50 dark:bg-yellow-950" : "bg-red-50 dark:bg-red-950"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `font-semibold mb-2 ${results.affordabilityRatio <= 15 ? "text-green-800 dark:text-green-200" : results.affordabilityRatio <= 20 ? "text-yellow-800 dark:text-yellow-200" : "text-red-800 dark:text-red-200"}`, children: results.affordabilityRatio <= 15 ? "✅ Affordable" : results.affordabilityRatio <= 20 ? "⚠️ Borderline" : "❌ May Be Too Expensive" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: `text-sm space-y-1 ${results.affordabilityRatio <= 15 ? "text-green-700 dark:text-green-300" : results.affordabilityRatio <= 20 ? "text-yellow-700 dark:text-yellow-300" : "text-red-700 dark:text-red-300"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Recommended: Keep auto payments under 15% of income" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider gap insurance for new vehicles" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Factor in insurance, maintenance, and fuel costs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Shorter terms save money but increase monthly payments" })
                ] })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-muted-foreground py-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Enter your vehicle details to see calculation results" })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
                "Factors Affecting Your Auto Loan"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-2", children: "Credit Score Impact" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground mb-2", children: "Your credit score is the most significant factor in determining your interest rate. A difference of just 2% in APR can cost thousands over the life of the loan." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-50 dark:bg-blue-950 p-3 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-800 dark:text-blue-200", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
                    " On a $25,000 loan for 60 months, improving your credit from 650 to 750 could save you over $3,000 in interest."
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-2", children: "Down Payment Benefits" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 text-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Reduces loan amount and monthly payment" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Lowers total interest paid" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Provides immediate equity in the vehicle" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• May qualify you for better rates" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Reduces risk of being upside down on the loan" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-2", children: "Vehicle Age Considerations" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: "Newer vehicles typically qualify for lower interest rates and longer terms. However, they also depreciate faster. Vehicles older than 7-10 years may have limited financing options or higher rates." })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5" }),
                "Total Cost of Vehicle Ownership"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground mb-4", children: "The monthly payment is just one part of vehicle ownership costs. Consider these additional expenses when budgeting:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-foreground mb-2", children: "Insurance Costs" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 text-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Full coverage required on financed vehicles" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Newer/more expensive cars cost more to insure" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Shop around for competitive rates" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider deductibles and coverage limits" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-foreground mb-2", children: "Maintenance & Repairs" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 text-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Regular maintenance: $500-$1,200/year" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Unexpected repairs increase with age" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Warranty coverage considerations" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Premium fuel requirements for some vehicles" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-foreground mb-2", children: "Depreciation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 text-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• New cars lose 20-30% value in first year" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 50-60% value lost in first 5 years" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Certified pre-owned can offer better value" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider gap insurance for new vehicles" })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5" }),
              "Avoiding Common Auto Loan Mistakes"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-red-600 dark:text-red-400", children: "Costly Mistakes to Avoid" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-red-500 pl-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium text-foreground", children: "Focusing Only on Monthly Payment" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: "Dealers may extend loan terms to lower monthly payments while increasing total cost. Always consider the total amount you'll pay." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-red-500 pl-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium text-foreground", children: "Rolling Negative Equity" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: "Adding what you owe on your current car to a new loan puts you further underwater and increases costs significantly." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-red-500 pl-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium text-foreground", children: "Skipping Pre-approval" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: "Getting pre-approved gives you negotiating power and helps you understand your true budget before shopping." })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-green-600 dark:text-green-400", children: "Smart Strategies" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-green-500 pl-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium text-foreground", children: "Shop Multiple Lenders" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: "Banks, credit unions, and online lenders often offer better rates than dealer financing. Compare all options." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-green-500 pl-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium text-foreground", children: "Negotiate Separately" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: "Negotiate the vehicle price, trade-in value, and financing separately to ensure you get the best deal on each." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-green-500 pl-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium text-foreground", children: "Consider Total Transportation Budget" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: "Keep total transportation costs (payment, insurance, gas, maintenance) under 15-20% of gross income." })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-yellow-800 dark:text-yellow-200 mb-2", children: "💡 Pro Tip" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-yellow-700 dark:text-yellow-300", children: "Consider making extra principal payments early in the loan to significantly reduce total interest paid. Even an extra $50/month can save thousands over the loan term." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Auto Loan Calculator FAQ" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-2", children: "What's a good interest rate for an auto loan?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: "Auto loan rates vary based on credit score, loan term, and vehicle type. As of 2024, excellent credit (750+) can secure rates around 3-5% for new cars, while average credit (650-700) typically sees 6-10% rates. Used car rates are generally 1-3% higher." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-2", children: "How much should I put down on a car?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: "Financial experts recommend putting down at least 20% for a new car and 10% for a used car. This reduces your loan amount, monthly payment, and helps avoid being upside down on the loan. However, ensure you maintain an emergency fund." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-2", children: "Should I finance through the dealer or my bank?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: "Shop both options. Banks and credit unions often offer competitive rates, especially for borrowers with good credit. Dealers may have promotional rates but could mark up the interest. Get pre-approved from your bank for comparison leverage." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-2", children: "What's the maximum loan term I should consider?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: "While loans up to 84 months are available, shorter terms (36-60 months) are generally better. Longer terms mean more interest paid and higher risk of being upside down. Choose the shortest term you can comfortably afford." })
              ] })
            ] }) })
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExportShareButtons,
          {
            calculatorType: "auto-loan-us",
            inputs: { vehiclePrice, downPayment, interestRate, loanTerm, tradeInValue, salesTax, monthlyIncome },
            results,
            title: "Auto Loan Estimate"
          }
        ) })
      ]
    }
  );
}
export {
  AutoLoanCalculatorUS
};
