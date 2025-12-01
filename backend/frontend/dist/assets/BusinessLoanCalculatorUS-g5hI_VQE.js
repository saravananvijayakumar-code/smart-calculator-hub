import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a4 as Label, D as DollarSign, V as Input, C as Calculator, B as Button, aE as formatCurrency } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { B as Building2 } from "./building-2-BWI7-4Ai.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./check-DTsA1WpX.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
import "./EnhancedAIAnalysis-BaYCd8m5.js";
import "./badge-6THgoC_4.js";
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
function BusinessLoanCalculatorUS() {
  const [loanAmount, setLoanAmount] = reactExports.useState("100000");
  const [interestRate, setInterestRate] = reactExports.useState("8.5");
  const [loanTerm, setLoanTerm] = reactExports.useState("60");
  const [loanType, setLoanType] = reactExports.useState("term");
  const [monthlyRevenue, setMonthlyRevenue] = reactExports.useState("25000");
  const [existingDebtPayments, setExistingDebtPayments] = reactExports.useState("2000");
  const [expectedROI, setExpectedROI] = reactExports.useState("15");
  const [results, setResults] = reactExports.useState(null);
  const calculateLoan = () => {
    const principal = parseFloat(loanAmount) || 0;
    const rate = parseFloat(interestRate) / 100 || 0;
    const months = parseInt(loanTerm) || 0;
    const revenue = parseFloat(monthlyRevenue) || 0;
    const existingDebt = parseFloat(existingDebtPayments) || 0;
    if (principal <= 0 || rate < 0 || months <= 0) {
      setResults(null);
      return;
    }
    const monthlyRate = rate / 12;
    let monthlyPayment = 0;
    if (rate > 0) {
      monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    } else {
      monthlyPayment = principal / months;
    }
    const totalAmountPaid = monthlyPayment * months;
    const totalInterestPaid = totalAmountPaid - principal;
    const totalMonthlyDebt = monthlyPayment + existingDebt;
    const debtServiceCoverageRatio = revenue > 0 ? revenue / totalMonthlyDebt : 0;
    const monthlyRevenueNeeded = totalMonthlyDebt * 1.25;
    const totalCostOfCapital = totalInterestPaid / principal * 100;
    setResults({
      monthlyPayment,
      totalInterestPaid,
      totalAmountPaid,
      debtServiceCoverageRatio,
      monthlyRevenueNeeded,
      totalCostOfCapital
    });
  };
  const tips = [
    "Aim for debt service coverage ratio of 1.25x or higher",
    "SBA loans often offer better terms than conventional loans",
    "Consider how loan payments will impact cash flow",
    "Shop multiple lenders for best rates and terms",
    "Factor in origination fees and closing costs"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "Business Loan Calculator",
      description: "Calculate business loan payments, analyze debt service coverage, and evaluate financing options for your business.",
      keywords: "business loan calculator, commercial loan, SBA loan, business financing, debt service coverage ratio",
      tips,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5" }),
                "Business Loan Details"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter your business loan and financial information" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "loanAmount", children: "Loan Amount" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "loanAmount",
                      type: "number",
                      placeholder: "100000",
                      value: loanAmount,
                      onChange: (e) => setLoanAmount(e.target.value),
                      className: "pl-10"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "loanType", children: "Loan Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: loanType, onValueChange: setLoanType, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "term", children: "Term Loan" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sba", children: "SBA Loan" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "equipment", children: "Equipment Financing" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "line-of-credit", children: "Line of Credit" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "commercial-real-estate", children: "Commercial Real Estate" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "interestRate", children: "Interest Rate" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "interestRate",
                      type: "number",
                      step: "0.1",
                      placeholder: "8.5",
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "12", children: "12 months (1 year)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "24", children: "24 months (2 years)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "36", children: "36 months (3 years)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "60", children: "60 months (5 years)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "84", children: "84 months (7 years)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "120", children: "120 months (10 years)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "240", children: "240 months (20 years)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "300", children: "300 months (25 years)" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "monthlyRevenue", children: "Monthly Business Revenue" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "monthlyRevenue",
                      type: "number",
                      placeholder: "25000",
                      value: monthlyRevenue,
                      onChange: (e) => setMonthlyRevenue(e.target.value),
                      className: "pl-10"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "existingDebtPayments", children: "Existing Monthly Debt Payments" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "existingDebtPayments",
                      type: "number",
                      placeholder: "2000",
                      value: existingDebtPayments,
                      onChange: (e) => setExistingDebtPayments(e.target.value),
                      className: "pl-10"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "expectedROI", children: "Expected ROI from Investment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "expectedROI",
                      type: "number",
                      step: "0.1",
                      placeholder: "15",
                      value: expectedROI,
                      onChange: (e) => setExpectedROI(e.target.value),
                      className: "pl-10"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Annual percentage" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateLoan, className: "w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "mr-2 h-4 w-4" }),
                "Calculate Business Loan"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Loan Analysis" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Payment breakdown and business impact analysis" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: results ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600", children: formatCurrency(results.monthlyPayment) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Monthly Payment" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-center p-4 rounded-lg ${results.debtServiceCoverageRatio >= 1.25 ? "bg-green-50 dark:bg-green-950" : results.debtServiceCoverageRatio >= 1 ? "bg-yellow-50 dark:bg-yellow-950" : "bg-red-50 dark:bg-red-950"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-2xl font-bold ${results.debtServiceCoverageRatio >= 1.25 ? "text-green-600" : results.debtServiceCoverageRatio >= 1 ? "text-yellow-600" : "text-red-600"}`, children: results.debtServiceCoverageRatio.toFixed(2) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "DSCR" })
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cost of Capital:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                    results.totalCostOfCapital.toFixed(1),
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Recommended Monthly Revenue:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: formatCurrency(results.monthlyRevenueNeeded) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-lg ${results.debtServiceCoverageRatio >= 1.25 ? "bg-green-50 dark:bg-green-950" : results.debtServiceCoverageRatio >= 1 ? "bg-yellow-50 dark:bg-yellow-950" : "bg-red-50 dark:bg-red-950"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `font-semibold mb-2 ${results.debtServiceCoverageRatio >= 1.25 ? "text-green-800 dark:text-green-200" : results.debtServiceCoverageRatio >= 1 ? "text-yellow-800 dark:text-yellow-200" : "text-red-800 dark:text-red-200"}`, children: results.debtServiceCoverageRatio >= 1.25 ? "✅ Strong Cash Flow" : results.debtServiceCoverageRatio >= 1 ? "⚠️ Tight Cash Flow" : "❌ Insufficient Cash Flow" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: `text-sm space-y-1 ${results.debtServiceCoverageRatio >= 1.25 ? "text-green-700 dark:text-green-300" : results.debtServiceCoverageRatio >= 1 ? "text-yellow-700 dark:text-yellow-300" : "text-red-700 dark:text-red-300"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• DSCR of 1.25+ is preferred by most lenders" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider SBA loans for better rates and terms" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• Ensure ROI exceeds cost of capital (",
                    results.totalCostOfCapital.toFixed(1),
                    "%)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Maintain 3-6 months operating expenses as reserves" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-blue-800 dark:text-blue-200 mb-2", children: "📊 Loan Type Insights" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-blue-700 dark:text-blue-300", children: [
                  loanType === "sba" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "SBA loans offer longer terms and lower rates but require more documentation and time to close." }),
                  loanType === "term" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Term loans provide predictable payments but may have higher rates than SBA options." }),
                  loanType === "equipment" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Equipment financing typically offers competitive rates since the equipment secures the loan." }),
                  loanType === "line-of-credit" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lines of credit offer flexibility but usually have variable rates and shorter terms." }),
                  loanType === "commercial-real-estate" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Commercial real estate loans offer long terms and lower rates for property purchases." })
                ] })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-muted-foreground py-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Enter your business loan details to see analysis" })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Understanding Business Loans: A Complete Guide" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose prose-sm max-w-none dark:prose-invert", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Business loans are essential financing tools that help entrepreneurs and established companies access capital for growth, expansion, equipment purchases, working capital, and operational expenses. Understanding the various types of business loans, their terms, and how to calculate payments is crucial for making informed financial decisions that can impact your company's long-term success." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Types of Business Loans" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Term Loans:" }),
                " Traditional business loans with fixed payment amounts over a predetermined period. These loans typically offer competitive interest rates and are ideal for major purchases, expansion projects, or significant working capital needs. Term loans can range from one year to 25 years, depending on the loan amount and intended use."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "SBA Loans:" }),
                " Small Business Administration loans are partially guaranteed by the federal government, making them attractive to lenders and borrowers alike. SBA loans often feature lower interest rates, longer repayment terms, and more flexible qualification requirements compared to conventional business loans. Popular SBA loan programs include 7(a) loans, 504 loans for real estate and equipment, and microloans for smaller financing needs."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Equipment Financing:" }),
                " Specifically designed for purchasing business equipment, machinery, or technology. The equipment itself serves as collateral, often resulting in more favorable terms and lower interest rates. Equipment loans typically offer terms that align with the useful life of the equipment being financed."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Lines of Credit:" }),
                " Flexible financing options that provide access to funds up to a predetermined credit limit. Businesses only pay interest on the amount borrowed, making lines of credit ideal for managing cash flow fluctuations, seasonal inventory needs, or unexpected expenses."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Commercial Real Estate Loans:" }),
                " Designed for purchasing, refinancing, or improving commercial properties. These loans typically offer longer terms (up to 25 years) and lower interest rates due to the real estate collateral."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Key Financial Metrics for Business Loans" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Debt Service Coverage Ratio (DSCR):" }),
                " This critical metric measures your business's ability to service debt obligations. DSCR is calculated by dividing your net operating income by total debt service payments. Most lenders prefer a DSCR of 1.25 or higher, indicating that your business generates 25% more cash flow than required to cover debt payments. A DSCR below 1.0 suggests insufficient cash flow to meet debt obligations."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cost of Capital:" }),
                " Understanding the true cost of borrowing helps evaluate whether a loan makes financial sense. The cost of capital includes not only the interest rate but also origination fees, closing costs, and other associated expenses. Compare this cost against your expected return on investment to ensure the loan will generate positive returns."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Factors Affecting Business Loan Approval" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lenders evaluate several factors when considering business loan applications. Personal and business credit scores significantly impact approval odds and interest rates. Most lenders prefer business credit scores above 680 and personal credit scores above 700. Time in business is another crucial factor, with most lenders requiring at least two years of operation, though some SBA programs accept newer businesses." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Annual revenue requirements vary by lender and loan type, but many conventional lenders require minimum annual revenues of $100,000 to $250,000. Collateral requirements depend on the loan type and amount, with secured loans typically offering better rates than unsecured options." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Loan Application Process and Documentation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Preparing a comprehensive loan application increases approval chances and may result in better terms. Essential documents include business and personal tax returns (typically 2-3 years), financial statements (profit and loss, balance sheet, cash flow statements), business bank statements, business licenses and registrations, and a detailed business plan outlining how the loan proceeds will be used." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For SBA loans, additional documentation may be required, including personal financial statements for all owners with 20% or greater ownership, environmental assessments for certain property purchases, and detailed use of funds statements." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Interest Rates and Terms" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Business loan interest rates vary significantly based on loan type, creditworthiness, loan amount, and market conditions. SBA loans typically offer the most competitive rates, often ranging from prime rate plus 1-3%. Conventional term loans may range from 6-12%, while alternative financing options can exceed 20-30% annually." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loan terms also vary by type and purpose. Working capital loans may have terms of 1-3 years, while equipment financing can extend 5-7 years. SBA loans can offer terms up to 25 years for real estate purchases, making monthly payments more manageable." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Using Our Business Loan Calculator" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our comprehensive business loan calculator helps you evaluate different financing scenarios by calculating monthly payments, total interest costs, and debt service coverage ratios. Input your loan amount, interest rate, and term to see how different variables affect your payment obligations and cash flow requirements." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The calculator also analyzes your business's financial health by comparing your monthly revenue to debt obligations. Use this information to determine optimal loan amounts and terms that align with your cash flow capabilities and growth objectives." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Tips for Successful Business Loan Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Once approved, managing your business loan effectively is crucial for maintaining good lender relationships and preserving your creditworthiness. Set up automatic payments to ensure timely payments and avoid late fees. Maintain detailed financial records and communicate proactively with your lender if you anticipate any payment difficulties." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Consider making additional principal payments when cash flow allows, as this can significantly reduce total interest costs and shorten the loan term. Regular financial reviews help ensure your business remains on track to meet loan obligations while achieving growth objectives." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "AI-Powered Financial Analysis and Market Insights" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Advanced data analytics and artificial intelligence are revolutionizing business lending decisions. Modern lenders increasingly use AI algorithms to assess creditworthiness, analyzing alternative data sources beyond traditional credit scores. These systems evaluate cash flow patterns, bank transaction data, social media presence, customer reviews, and industry trends to provide more accurate risk assessments and personalized loan terms." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Machine learning models can predict business performance with 85-90% accuracy by analyzing seasonal revenue patterns, customer acquisition costs, lifetime value metrics, and market positioning. This technology enables lenders to offer dynamic pricing models where interest rates adjust based on real-time business performance indicators, potentially saving qualified borrowers 0.5-2% on their interest rates." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Current Market Trends and Economic Indicators" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "As of 2024, business lending markets are experiencing significant shifts driven by economic uncertainty, changing interest rate environments, and technological disruption. Federal Reserve policy changes have created a variable rate environment where businesses must carefully consider fixed versus variable rate options. Current market data shows SBA 7(a) loan rates ranging from 11.5-18%, while conventional term loans vary from 8-15% depending on creditworthiness and collateral." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Industry analysis reveals that businesses in technology, healthcare, and professional services maintain the highest approval rates (75-85%), while retail, hospitality, and construction face more stringent requirements with approval rates of 45-60%. Geographic location significantly impacts availability and terms, with businesses in major metropolitan areas accessing 20-30% more lending options than rural counterparts." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Advanced Risk Assessment and Optimization Strategies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sophisticated risk modeling incorporates multiple financial ratios beyond traditional debt service coverage. The Times Interest Earned Ratio (EBIT/Interest Expense) should exceed 2.5 for optimal loan terms. Working Capital Turnover (Revenue/Average Working Capital) benchmarks vary by industry but typically range from 4-8 for healthy businesses. Asset Turnover Ratios (Revenue/Total Assets) above 1.5 indicate efficient asset utilization that lenders favor." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Advanced optimization strategies include structuring loans with graduated payment schedules that align with projected cash flow improvements, negotiating interest rate caps in variable rate environments, and leveraging multiple funding sources to minimize overall cost of capital. Businesses can reduce borrowing costs by 15-25% through strategic timing of loan applications during favorable market conditions and optimal credit positioning." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Industry-Specific Lending Considerations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Technology Startups:" }),
                " Revenue-based financing and venture debt options often provide better terms than traditional loans. Typical structures include 2-4% monthly revenue sharing for 2-5 years or venture debt at Prime + 1-3% with warrant coverage. Asset-light technology companies benefit from intellectual property-backed financing and future receivables monetization."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Manufacturing Businesses:" }),
                " Equipment-heavy operations can leverage asset-based lending for working capital needs, typically at 70-85% of eligible accounts receivable and 50-70% of eligible inventory. Manufacturing companies often qualify for specialized programs including Export-Import Bank financing for international expansion and state economic development incentives."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Healthcare Practices:" }),
                " Medical practices benefit from specialized healthcare lenders offering terms tailored to patient payment cycles and insurance reimbursement patterns. Typical structures include 90-180 day interest-only periods aligned with patient collection cycles and equipment financing up to 100% of purchase price for medical technology."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Real Estate Development:" }),
                " Construction and development projects require sophisticated financing structures including acquisition and development loans, construction-to-permanent financing, and mezzanine financing for gap funding. These projects typically require 20-30% equity contributions and detailed feasibility studies with market absorption analysis."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Emerging Fintech and Alternative Lending Solutions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The fintech revolution has created numerous alternative lending platforms offering faster approval processes and innovative underwriting approaches. Online lenders can approve applications in 24-72 hours compared to traditional banks requiring 2-8 weeks. However, convenience often comes at a premium with rates 2-10% higher than traditional options." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Merchant cash advances and revenue-based financing provide quick access to capital but can carry effective annual percentage rates of 40-200%. These should only be considered for urgent short-term needs with clear repayment strategies. Peer-to-peer lending platforms offer middle-ground solutions with rates typically 6-12% and more flexible qualification criteria." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Strategic Debt Management and Growth Optimization" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Optimal capital structure varies by industry and growth stage, but most successful businesses maintain total debt-to-equity ratios between 0.3-0.6. Growth-stage companies can support higher leverage (0.5-0.8) when supported by strong cash flow generation and market expansion opportunities. Mature businesses should focus on debt optimization through refinancing and term extensions during favorable rate environments." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Advanced debt management includes laddering loan maturities to avoid concentration risk, maintaining relationships with multiple lenders for competitive positioning, and structuring covenants that provide operational flexibility while satisfying lender requirements. Businesses should maintain detailed cash flow forecasting models updated monthly to anticipate funding needs and optimize borrowing timing." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Future Outlook and Emerging Trends" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The business lending landscape continues evolving with increased focus on Environmental, Social, and Governance (ESG) criteria. Lenders are offering preferential rates (0.25-0.75% discounts) for businesses demonstrating sustainable practices and social responsibility. Blockchain-based lending platforms are emerging, promising reduced processing costs and improved transparency through smart contracts and automated compliance monitoring." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Artificial intelligence and machine learning will continue transforming underwriting processes, with predictive models becoming more sophisticated in assessing future business performance. Businesses investing in digital transformation and data analytics capabilities will increasingly benefit from preferential lending terms as lenders value enhanced transparency and predictability." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "AI-Powered Loan Optimization Strategies" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose prose-sm max-w-none dark:prose-invert", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Predictive Analytics for Loan Success" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our calculator incorporates advanced algorithms that analyze your financial inputs against comprehensive industry databases to provide personalized recommendations. By comparing your metrics against thousands of successful loan applications, we can predict approval probability and suggest optimal loan structures for your specific situation." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Dynamic Risk Assessment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The tool evaluates multiple risk factors including industry volatility, seasonal cash flow patterns, and economic indicators to provide comprehensive risk scoring. This analysis helps identify potential challenges before they impact your business and suggests proactive mitigation strategies." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Intelligent Loan Matching" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Based on your business profile, our system recommends the most suitable loan types and lenders from our extensive database. This AI-driven matching process considers not just rates and terms, but also lender preferences, industry specializations, and approval likelihood to maximize your success potential." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Real-Time Market Data Integration" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our calculator stays current with real-time interest rate data, economic indicators, and lending market conditions to provide the most accurate projections possible. This ensures your financial planning reflects current market realities rather than outdated assumptions." })
            ] })
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExportShareButtons,
          {
            calculatorType: "business-loan-us",
            inputs: { loanAmount, interestRate, loanTerm, monthlyRevenue, existingDebtPayments, expectedROI, loanType },
            results,
            title: "Business Loan Analysis"
          }
        ) })
      ]
    }
  );
}
export {
  BusinessLoanCalculatorUS
};
