import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, l as House, i as CardDescription, k as CardContent, a3 as Label, U as Input, B as Button, C as Calculator, T as TrendingUp, a4 as Info } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { S as Separator } from "./separator-CgM4Fzdg.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
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
import "./share-2-ViScha7M.js";
import "./link-DxXhzsoi.js";
import "./copy-DGMuG98H.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./linkedin-BSJyfSWT.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
const HomeLoanCalculatorIndia = () => {
  const [propertyValue, setPropertyValue] = reactExports.useState("");
  const [downPayment, setDownPayment] = reactExports.useState("");
  const [interestRate, setInterestRate] = reactExports.useState("");
  const [loanTenure, setLoanTenure] = reactExports.useState("");
  const [processingFee, setProcessingFee] = reactExports.useState("");
  const [taxRate, setTaxRate] = reactExports.useState("20");
  const [results, setResults] = reactExports.useState(null);
  const calculateHomeLoan = () => {
    const propValue = parseFloat(propertyValue);
    const downPmt = parseFloat(downPayment);
    const rate = parseFloat(interestRate) / 100;
    const tenure = parseFloat(loanTenure);
    const procFee = parseFloat(processingFee) || 0;
    const tax = parseFloat(taxRate) / 100;
    if (!propValue || !downPmt || !rate || !tenure) return;
    const loanAmount = propValue - downPmt;
    const monthlyRate = rate / 12;
    const totalMonths = tenure * 12;
    const emi = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    const totalPayment = emi * totalMonths;
    const totalInterest = totalPayment - loanAmount;
    const maxPrincipalDeduction = 15e4;
    const maxInterestDeduction = 2e5;
    let remainingPrincipal = loanAmount;
    let yearlyBreakdown = [];
    for (let year = 1; year <= Math.min(5, tenure); year++) {
      let yearlyInterest = 0;
      let yearlyPrincipal = 0;
      for (let month = 1; month <= 12; month++) {
        const monthlyInterest = remainingPrincipal * monthlyRate;
        const monthlyPrincipal = emi - monthlyInterest;
        yearlyInterest += monthlyInterest;
        yearlyPrincipal += monthlyPrincipal;
        remainingPrincipal -= monthlyPrincipal;
      }
      const taxBenefit = Math.min(yearlyInterest, maxInterestDeduction) * tax + Math.min(yearlyPrincipal, maxPrincipalDeduction) * tax;
      yearlyBreakdown.push({
        year,
        yearlyInterest,
        yearlyPrincipal,
        taxBenefit,
        remainingBalance: remainingPrincipal
      });
    }
    const avgAnnualInterest = totalInterest / tenure;
    const avgAnnualPrincipal = loanAmount / tenure;
    const avgTaxBenefit = Math.min(avgAnnualInterest, maxInterestDeduction) * tax + Math.min(avgAnnualPrincipal, maxPrincipalDeduction) * tax;
    const totalTaxBenefits = avgTaxBenefit * tenure;
    const ltv = loanAmount / propValue * 100;
    const stampDuty = propValue * 0.05;
    const registrationCost = propValue * 0.01;
    const totalUpfrontCosts = downPmt + procFee + stampDuty + registrationCost;
    setResults({
      loanAmount,
      emi,
      totalPayment,
      totalInterest,
      totalTaxBenefits,
      ltv,
      yearlyBreakdown,
      totalUpfrontCosts,
      stampDuty,
      registrationCost,
      effectiveInterestRate: (totalInterest - totalTaxBenefits) / loanAmount / tenure * 100,
      netEMI: emi - avgTaxBenefit / 12
    });
  };
  const reset = () => {
    setPropertyValue("");
    setDownPayment("");
    setInterestRate("");
    setLoanTenure("");
    setProcessingFee("");
    setTaxRate("20");
    setResults(null);
  };
  const tips = [
    "Home loan interest eligible for deduction up to ₹2 lakh under Section 24(b)",
    "Principal repayment qualifies for ₹1.5 lakh deduction under Section 80C",
    "First-time buyers get additional ₹50,000 deduction under Section 80EE",
    "Affordable housing loans offer ₹1.5 lakh interest deduction under Section 80EEA",
    "Consider prepayment to reduce interest burden significantly"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "India Home Loan Calculator",
      description: "Calculate home loan EMI, tax benefits, and total costs for property purchase in India",
      keywords: "India home loan calculator, home loan EMI, home loan tax benefits, section 24b, section 80C",
      tips,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-5 w-5" }),
                "Home Loan Calculator"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Calculate EMI, tax benefits, and total costs" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "propertyValue", children: "Property Value (₹)" }),
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
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "downPayment", children: "Down Payment (₹)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "downPayment",
                    type: "number",
                    placeholder: "Enter down payment (min 20%)",
                    value: downPayment,
                    onChange: (e) => setDownPayment(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "interestRate", children: "Interest Rate (%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "interestRate",
                      type: "number",
                      step: "0.01",
                      placeholder: "Enter rate",
                      value: interestRate,
                      onChange: (e) => setInterestRate(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "loanTenure", children: "Tenure (Years)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "loanTenure",
                      type: "number",
                      placeholder: "Enter tenure",
                      value: loanTenure,
                      onChange: (e) => setLoanTenure(e.target.value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "processingFee", children: "Processing Fee (₹)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "processingFee",
                    type: "number",
                    placeholder: "Enter processing fee",
                    value: processingFee,
                    onChange: (e) => setProcessingFee(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "taxRate", children: "Income Tax Rate (%)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: taxRate, onValueChange: setTaxRate, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select tax rate" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "0", children: "No Tax (Below ₹2.5L)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "5", children: "5% (₹2.5L - ₹5L)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "20", children: "20% (₹5L - ₹10L)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "30", children: "30% (Above ₹10L)" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateHomeLoan, className: "flex-1", children: [
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
              "Loan Analysis"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Loan Amount" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-semibold", children: [
                    "₹",
                    Math.round(results.loanAmount).toLocaleString("en-IN")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Monthly EMI" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-semibold text-red-600", children: [
                    "₹",
                    Math.round(results.emi).toLocaleString("en-IN")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total Interest" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-semibold text-orange-600", children: [
                    "₹",
                    Math.round(results.totalInterest).toLocaleString("en-IN")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Tax Benefits" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-semibold text-green-600", children: [
                    "₹",
                    Math.round(results.totalTaxBenefits).toLocaleString("en-IN")
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "After Tax Benefits" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Effective Interest Rate:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                      results.effectiveInterestRate.toFixed(2),
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Net EMI (After Tax):" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "default", children: [
                      "₹",
                      Math.round(results.netEMI).toLocaleString("en-IN")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "LTV Ratio:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
                      results.ltv.toFixed(1),
                      "%"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Upfront Costs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Down Payment:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "₹",
                      Math.round(parseFloat(downPayment)).toLocaleString("en-IN")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Stamp Duty (Est.):" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "₹",
                      Math.round(results.stampDuty).toLocaleString("en-IN")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Registration:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "₹",
                      Math.round(results.registrationCost).toLocaleString("en-IN")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-medium", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Upfront:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "₹",
                      Math.round(results.totalUpfrontCosts).toLocaleString("en-IN")
                    ] })
                  ] })
                ] })
              ] }),
              results.yearlyBreakdown && results.yearlyBreakdown.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "First 3 Years Breakdown" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 text-sm", children: results.yearlyBreakdown.slice(0, 3).map((year) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                        "Year ",
                        year.year
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium", children: [
                        "Interest: ₹",
                        Math.round(year.yearlyInterest).toLocaleString("en-IN", { maximumFractionDigits: 0 })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Principal" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium", children: [
                        "₹",
                        Math.round(year.yearlyPrincipal).toLocaleString("en-IN", { maximumFractionDigits: 0 })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Tax Benefit" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-green-600", children: [
                        "₹",
                        Math.round(year.taxBenefit).toLocaleString("en-IN", { maximumFractionDigits: 0 })
                      ] })
                    ] })
                  ] }, year.year)) })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5" }),
            "Understanding Home Loans in India: Tax Benefits and Financial Planning"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Home loans in India represent more than just financing for property purchase; they serve as powerful financial planning tools that combine wealth creation through real estate ownership with significant tax benefits. Understanding the intricate relationship between loan structuring, tax implications, and long-term financial impact is crucial for making informed decisions about one of life's largest financial commitments and most important wealth-building opportunities." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Home Loan Structure and Interest Calculation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Indian home loans typically operate on reducing balance method where interest is calculated on the outstanding principal amount, resulting in higher interest components in initial EMIs gradually shifting toward principal repayment in later years. Interest rates vary based on credit profiles, loan amounts, and market conditions, with options including fixed rates for certainty or floating rates for potential savings during declining rate cycles. Understanding this structure helps borrowers optimize their loan terms and prepayment strategies." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Tax Benefits: Section 80C and Section 24" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Home loans offer dual tax benefits through Section 80C deductions for principal repayment up to ₹1.5 lakh annually and Section 24 deductions for interest payments up to ₹2 lakh for self-occupied properties. These deductions can result in substantial tax savings, effectively reducing the cost of borrowing and enhancing the affordability of home ownership. For rental properties, the entire interest amount is deductible against rental income, making investment properties more tax-efficient." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Down Payment and LTV Considerations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Reserve Bank of India regulations mandate minimum 20% down payment for home loans, creating a maximum loan-to-value ratio of 80%. Higher down payments reduce EMI burden, total interest outflow, and qualification requirements while potentially securing better interest rates. Strategic down payment planning involves balancing immediate cash flow requirements with long-term interest savings, considering opportunity costs of deploying large amounts as down payment versus alternative investments." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "EMI Affordability and Debt Service Ratios" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lenders typically limit EMI obligations to 40-50% of net monthly income, ensuring sustainable debt service without compromising lifestyle quality. This ratio includes all existing loan obligations, making it crucial to consider overall debt portfolio when planning home loan amounts. Conservative borrowers often target lower ratios to maintain financial flexibility for other goals and emergency situations, while aggressive borrowers might maximize leverage to acquire larger properties." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Prepayment Strategies and Interest Savings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Strategic prepayments can dramatically reduce total interest outflow and loan tenure, with even modest additional payments creating substantial savings over time. Prepayment decisions should consider tax benefits foregone, opportunity costs of alternative investments, and personal financial goals. Some borrowers use annual bonuses, tax refunds, or windfalls for prepayments, while others increase EMIs gradually as income grows, balancing debt reduction with wealth creation opportunities." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Property Registration and Associated Costs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Home purchases involve significant additional costs beyond the property price, including stamp duty varying by state (typically 3-8% of property value), registration charges, legal fees, and processing charges. These costs require substantial upfront capital and should be factored into total investment calculations. Some states offer stamp duty concessions for women buyers or first-time homebuyers, providing additional savings opportunities for eligible purchasers." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Fixed vs. Floating Interest Rate Decision" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Choosing between fixed and floating interest rates involves balancing interest rate risk with potential savings. Fixed rates provide EMI certainty throughout the loan tenure, facilitating budget planning but potentially missing benefits from declining rate cycles. Floating rates offer potential savings when rates decline but expose borrowers to payment increases during rising rate periods. Many borrowers opt for floating rates with prepayment flexibility to manage rate risk actively." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Home Loan Insurance and Protection" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Comprehensive protection through term life insurance and home insurance safeguards against financial disruption from unforeseen events. Term insurance should cover outstanding loan amounts ensuring family members aren't burdened with debt obligations. Home insurance protects the property investment while some lenders mandate coverage as loan conditions. Credit protection insurance, though expensive, provides EMI payment support during unemployment or disability, though term insurance often offers better value." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Refinancing and Balance Transfer Opportunities" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Changing market conditions and improved credit profiles create opportunities for refinancing at better rates or terms. Home loan balance transfers can reduce interest costs, extend tenures, or access additional funding for renovations or other needs. However, switching costs including processing fees, legal charges, and prepayment penalties must be weighed against potential savings to ensure financial benefit from refinancing decisions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Long-term Wealth Building Through Real Estate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Beyond providing shelter, home ownership creates forced savings through EMI payments while building equity in appreciating real estate. Property appreciation combined with loan amortization gradually increases net worth, providing financial security and potential borrowing capacity for future needs. Strategic property selection in growth areas can enhance appreciation potential, making home loans effective wealth creation tools when combined with disciplined repayment and sound property choices." })
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExportShareButtons,
          {
            calculatorType: "home-loan-india",
            inputs: {
              propertyValue,
              downPayment,
              interestRate,
              loanTenure,
              processingFee,
              taxRate
            },
            results,
            title: "Home Loan Analysis"
          }
        ) })
      ]
    }
  );
};
export {
  HomeLoanCalculatorIndia as default
};
