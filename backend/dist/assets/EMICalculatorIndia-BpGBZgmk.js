import { r as reactExports, j as jsxRuntimeExports, S as SEOHead, f as Card, g as CardHeader, h as CardTitle, D as DollarSign, k as CardContent, a3 as Label, B as Button, T as TrendingUp, aD as formatCurrency } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { A as AppleStyleInput } from "./AppleStyleInput-BFag-KzQ.js";
import { A as AIAnalysis } from "./AIAnalysis-DnR9Up6F.js";
import { C as Calendar } from "./calendar-CKWgIWzq.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
import "./badge-fo2YvZos.js";
import "./tabs-BNSAX0su.js";
import "./brain-U3SZm3t9.js";
import "./loader-circle-BYW7QwsU.js";
import "./target-1ApqtYDG.js";
import "./circle-check-big-BoxGYPKG.js";
function EMICalculatorIndia() {
  const [loanAmount, setLoanAmount] = reactExports.useState("2500000");
  const [interestRate, setInterestRate] = reactExports.useState("8.5");
  const [tenure, setTenure] = reactExports.useState("20");
  const [tenureType, setTenureType] = reactExports.useState("years");
  const [showResults, setShowResults] = reactExports.useState(false);
  const calculateEMI = () => {
    const P = parseFloat(loanAmount) || 0;
    const annualRate = parseFloat(interestRate) || 0;
    const R = annualRate / 12 / 100;
    const tenureValue = parseFloat(tenure) || 0;
    const N = tenureType === "years" ? tenureValue * 12 : tenureValue;
    if (P <= 0 || R <= 0 || N <= 0) return null;
    const emi = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1);
    const totalPayment = emi * N;
    const totalInterest = totalPayment - P;
    const amortization = [];
    let balance = P;
    for (let i = 1; i <= Math.min(N, 360); i++) {
      const interestPayment = balance * R;
      const principalPayment = emi - interestPayment;
      balance -= principalPayment;
      amortization.push({
        month: i,
        emi,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, balance)
      });
    }
    return {
      emi,
      totalPayment,
      totalInterest,
      principal: P,
      tenure: N,
      amortization
    };
  };
  const results = calculateEMI();
  const handleCalculate = () => {
    setShowResults(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "EMI Calculator India - Home Loan, Car Loan, Personal Loan EMI Calculator",
        description: "Calculate your Equated Monthly Installment (EMI) for home loans, car loans, and personal loans in India. Get detailed amortization schedule and tax benefit information.",
        keywords: "emi calculator, emi calculator india, home loan emi, car loan emi, personal loan emi, loan emi, equated monthly installment, emi calculation"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "EMI Calculator India" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Calculate your monthly loan payments for home loans, car loans, and personal loans with detailed amortization schedule" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-6 w-6 text-orange-600" }),
            "Loan Details"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AppleStyleInput,
              {
                label: "Loan Amount",
                type: "number",
                value: loanAmount,
                onChange: (e) => setLoanAmount(e.target.value),
                placeholder: "2500000",
                prefix: "₹"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AppleStyleInput,
              {
                label: "Interest Rate (per annum)",
                type: "number",
                value: interestRate,
                onChange: (e) => setInterestRate(e.target.value),
                placeholder: "8.5",
                suffix: "%",
                step: "0.1"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Loan Tenure" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    type: "number",
                    value: tenure,
                    onChange: (e) => setTenure(e.target.value),
                    placeholder: "20"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: tenureType, onValueChange: (value) => setTenureType(value), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "years", children: "Years" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "months", children: "Months" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: handleCalculate,
                className: "w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
                size: "lg",
                children: "Calculate EMI"
              }
            )
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg bg-gradient-to-br from-orange-50 to-orange-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-6 w-6 text-orange-600" }),
            "Your EMI Results"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-white rounded-lg shadow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mb-2", children: "Monthly EMI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-bold text-orange-600", children: formatCurrency(results.emi, "INR") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg shadow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 mb-1", children: "Principal Amount" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-gray-900", children: formatCurrency(results.principal, "INR") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg shadow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 mb-1", children: "Total Interest" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-red-600", children: formatCurrency(results.totalInterest, "INR") })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg shadow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mb-2", children: "Total Payment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-gray-900", children: formatCurrency(results.totalPayment, "INR") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-orange-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Payment Breakdown" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Principal:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                    (results.principal / results.totalPayment * 100).toFixed(1),
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "bg-green-500 h-2 rounded-full",
                    style: { width: `${results.principal / results.totalPayment * 100}%` }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Interest:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                    (results.totalInterest / results.totalPayment * 100).toFixed(1),
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "bg-red-500 h-2 rounded-full",
                    style: { width: `${results.totalInterest / results.totalPayment * 100}%` }
                  }
                ) })
              ] })
            ] })
          ] })
        ] })
      ] }),
      results && results.amortization.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-lg mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-6 w-6 text-orange-600" }),
          "Amortization Schedule (First 12 Months)"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left", children: "Month" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-right", children: "EMI" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-right", children: "Principal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-right", children: "Interest" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-right", children: "Balance" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: results.amortization.slice(0, 12).map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b hover:bg-gray-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: entry.month }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right", children: formatCurrency(entry.emi, "INR") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right text-green-600", children: formatCurrency(entry.principal, "INR") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right text-red-600", children: formatCurrency(entry.interest, "INR") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right font-semibold", children: formatCurrency(entry.balance, "INR") })
          ] }, entry.month)) })
        ] }) }) })
      ] }),
      showResults && results && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        AIAnalysis,
        {
          analysisRequest: {
            calculatorType: "emi_india",
            data: {
              loanAmount: results.principal,
              interestRate: parseFloat(interestRate),
              tenure: results.tenure,
              emi: results.emi,
              totalInterest: results.totalInterest,
              totalPayment: results.totalPayment
            }
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "What is EMI?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mb-4", children: [
            "EMI stands for ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Equated Monthly Installment" }),
            ". It is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both the principal and interest on a loan over a specific period, ensuring that the loan is fully paid by the end of the tenure."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "In India, EMIs are the most common way to repay loans, including home loans, car loans, personal loans, and education loans. The EMI payment structure makes it easier for borrowers to plan their finances as they know exactly how much they need to pay each month." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "The EMI amount remains constant throughout the loan tenure (in case of fixed-rate loans), but the proportion of principal and interest changes. In the initial years, a larger portion goes towards interest, while in later years, more goes towards the principal repayment." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "EMI Calculation Formula" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "The EMI is calculated using the following mathematical formula:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-orange-50 p-6 rounded-lg mb-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-lg", children: "EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Where:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "P" }),
              " = Principal loan amount"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "R" }),
              " = Monthly interest rate (Annual rate / 12 / 100)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "N" }),
              " = Loan tenure in months"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "Example Calculation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-3", children: "Let's say you take a home loan of ₹25,00,000 at an annual interest rate of 8.5% for 20 years:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "P = ₹25,00,000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Annual Interest Rate = 8.5%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "R = 8.5 / 12 / 100 = 0.00708333" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "N = 20 × 12 = 240 months" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "EMI = [25,00,000 × 0.00708333 × (1.00708333)^240] / [(1.00708333)^240 - 1]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "EMI ≈ ₹21,698" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Total Payment = ₹21,698 × 240 = ₹52,07,520" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Total Interest = ₹52,07,520 - ₹25,00,000 = ₹27,07,520" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Types of Loans Using EMI in India" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3 mt-6", children: "1. Home Loans" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-3", children: "Home loans are the most popular type of loan in India, allowing individuals to purchase residential property." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Interest Rates:" }),
              " Typically range from 8.0% to 9.5% per annum"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tenure:" }),
              " Usually 10 to 30 years"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Loan Amount:" }),
              " Up to 90% of property value (80-85% common)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tax Benefits:" }),
              " Section 80C (principal) and Section 24(b) (interest)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3 mt-6", children: "2. Car Loans" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-3", children: "Car loans help finance the purchase of new or used vehicles." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Interest Rates:" }),
              " Typically 7.5% to 12% per annum"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tenure:" }),
              " Usually 3 to 7 years"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Loan Amount:" }),
              " Up to 90% of vehicle value"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Processing:" }),
              " Quick approval, often within 24-48 hours"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3 mt-6", children: "3. Personal Loans" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-3", children: "Personal loans are unsecured loans that can be used for any purpose - medical emergencies, weddings, travel, debt consolidation, etc." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Interest Rates:" }),
              " Typically 10.5% to 24% per annum (higher due to unsecured nature)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tenure:" }),
              " Usually 1 to 5 years"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Loan Amount:" }),
              " ₹50,000 to ₹40,00,000 (based on income)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "No Tax Benefits:" }),
              " Unlike home loans"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3 mt-6", children: "4. Education Loans" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-3", children: "Education loans help students finance higher education in India or abroad." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Interest Rates:" }),
              " Typically 7.5% to 13% per annum"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tenure:" }),
              " Usually 10 to 15 years"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Moratorium Period:" }),
              " Course duration + 6 months to 1 year"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tax Benefits:" }),
              " Interest deduction under Section 80E (for 8 years)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "No Collateral:" }),
              " For loans up to ₹7.5 lakh"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Tax Benefits on Home Loans in India" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3 mt-4", children: "Section 80C - Principal Repayment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "Deduction up to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "₹1.5 lakh per year" }),
              " on principal repayment"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Available for self-occupied property only" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Property should not be sold within 5 years of possession" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Stamp duty and registration charges also eligible in the year of payment" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3 mt-6", children: "Section 24(b) - Interest Deduction" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "Deduction up to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "₹2 lakh per year" }),
              " on interest paid"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "For self-occupied property" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "No limit on interest deduction for let-out property" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Pre-construction interest can be claimed in 5 equal installments" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3 mt-6", children: "Section 80EEA - Additional Deduction for First-Time Buyers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "Additional deduction of ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "₹1.5 lakh" }),
              " on interest"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Only for first-time home buyers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Property value should be less than ₹45 lakh" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Loan sanctioned between April 1, 2019, and March 31, 2022" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 p-6 rounded-lg mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3", children: "Maximum Tax Benefit Example" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-3", children: "For a first-time home buyer in the highest tax bracket (30%):" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Principal deduction (80C): ₹1,50,000 × 30% = ₹45,000" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Interest deduction (24b): ₹2,00,000 × 30% = ₹60,000" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Additional interest (80EEA): ₹1,50,000 × 30% = ₹45,000" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Total Annual Tax Savings: ₹1,50,000" }) })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Factors Affecting Your EMI" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "1. Principal Amount Impact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "The loan amount is directly proportional to EMI. A higher loan amount means a higher EMI and vice versa. Even a 10% increase in loan amount can significantly impact your monthly outflow and total interest paid over the tenure." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "2. Interest Rate Sensitivity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Even a small change in interest rate can have a substantial impact on your EMI and total interest outflow. Let's see how a 0.5% difference affects a ₹25 lakh loan for 20 years:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full border-collapse border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border p-3 text-left", children: "Interest Rate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border p-3 text-right", children: "Monthly EMI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border p-3 text-right", children: "Total Interest" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border p-3 text-right", children: "Difference" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "8.0%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3 text-right", children: "₹20,911" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3 text-right", children: "₹25,18,640" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3 text-right", children: "-" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "8.5%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3 text-right", children: "₹21,698" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3 text-right", children: "₹27,07,520" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3 text-right text-red-600", children: "+₹1,88,880" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "9.0%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3 text-right", children: "₹22,500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3 text-right", children: "₹29,00,000" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3 text-right text-red-600", children: "+₹3,81,360" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3 mt-6", children: "3. Tenure Selection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Tenure has an inverse relationship with EMI but a direct relationship with total interest. Let's compare different tenures for a ₹25 lakh loan at 8.5%:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full border-collapse border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border p-3 text-left", children: "Tenure" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border p-3 text-right", children: "Monthly EMI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border p-3 text-right", children: "Total Interest" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "10 years" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3 text-right", children: "₹30,942" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3 text-right", children: "₹12,13,040" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "15 years" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3 text-right", children: "₹24,629" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3 text-right", children: "₹19,33,220" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "20 years" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3 text-right", children: "₹21,698" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3 text-right", children: "₹27,07,520" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3", children: "30 years" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3 text-right", children: "₹19,228" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-3 text-right", children: "₹44,22,080" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Key Insight:" }),
            " While a longer tenure reduces monthly EMI, it significantly increases the total interest paid. Choose the shortest tenure you can comfortably afford."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3 mt-6", children: "4. Fixed vs Floating Interest Rates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fixed Rate:" }),
            " EMI remains constant throughout the tenure. Provides certainty but usually starts higher than floating rates."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Floating Rate:" }),
            " EMI changes with market rates (linked to MCLR or repo rate). Can benefit from rate cuts but exposes you to rate hike risk. Most home loans in India are floating rate loans."
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "EMI Payment Strategies" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3", children: "1. Prepayment Strategies" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Prepaying your loan can significantly reduce your interest burden. Here are effective prepayment strategies:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-3 text-gray-700 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Partial Prepayment:" }),
              " Make lump sum payments whenever you have surplus funds (bonus, inheritance, tax refund). Most banks allow partial prepayment without penalty for floating rate loans."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Annual Prepayment:" }),
              " Commit to prepaying a fixed amount annually, say 10% of the outstanding principal. This can reduce your tenure by several years."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Step-up EMI:" }),
              " Increase your EMI by 5-10% every year as your income grows. This dramatically reduces interest outflow."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Early Years Focus:" }),
              " Prepayments in the first 5 years of the loan have the maximum impact as the outstanding principal is highest."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-6 rounded-lg mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3", children: "Prepayment Example" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-2", children: "Loan: ₹25 lakh at 8.5% for 20 years (EMI: ₹21,698)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-2", children: "If you prepay ₹1 lakh every year:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1 text-gray-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tenure reduces from 20 years to approximately 13 years" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Total interest paid: ₹16.8 lakh (vs ₹27.1 lakh)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Interest Saved: ₹10.3 lakh" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3 mt-6", children: "2. Balance Transfer Options" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Transferring your loan to another lender offering lower interest rates can reduce your EMI or tenure." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "When to Consider Balance Transfer:" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Interest rate difference is at least 0.5% - 1%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Substantial loan amount and tenure remaining" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Processing fees and charges are lower than potential savings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Your credit score has improved since taking the original loan" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Costs vs Benefits:" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Processing fee: 0.5% - 1% of loan amount" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Legal and technical charges: ₹5,000 - ₹10,000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Prepayment charges on old loan: Usually nil for floating rate home loans" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Calculate break-even: Time taken to recover the transfer costs from EMI savings" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3 mt-6", children: "3. EMI Affordability Rules" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mb-4", children: [
            "Financial experts recommend that your total EMI obligations (all loans combined) should not exceed ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "40-50% of your monthly income" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3", children: "Affordability Example" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-2", children: "Monthly Income: ₹1,00,000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-2", children: "Maximum EMI (40%): ₹40,000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Maximum EMI (50%): ₹50,000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-2", children: "If you already have a car loan EMI of ₹15,000, your home loan EMI should ideally be between ₹25,000 - ₹35,000 to maintain financial stability." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 font-semibold mt-4", children: "Remember: Keep a buffer for emergencies, investments, and lifestyle expenses. Don't max out your EMI capacity." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Common EMI Mistakes to Avoid" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2 text-red-600", children: "1. Taking Maximum Eligible Loan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Just because a bank approves you for a ₹50 lakh loan doesn't mean you should take it. Borrow based on your actual need and comfortable repayment capacity, not maximum eligibility. Leave room for other financial goals and emergencies." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2 text-red-600", children: "2. Ignoring Processing Fees and Hidden Costs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Many borrowers focus only on interest rates and ignore other costs like processing fees (0.5-2% of loan amount), legal charges, valuation fees, insurance, and prepayment penalties. These can add ₹50,000 - ₹1,00,000 to your loan cost." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2 text-red-600", children: "3. Not Reading the Fine Print" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Always read the loan agreement thoroughly. Check for clauses related to prepayment penalties, interest rate reset frequency (for floating rate loans), foreclosure charges, and bounce charges. Some lenders have unfavorable terms hidden in complex legal language." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2 text-red-600", children: "4. Missing EMI Payments" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Missing even one EMI payment can have serious consequences: late payment fees (₹500-₹1,000 per delay), negative impact on CIBIL score (can drop by 50-100 points), and difficulty in getting loans in the future. Set up auto-debit to avoid missing payments." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2 text-red-600", children: "5. Choosing Wrong Tenure" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Many borrowers opt for maximum tenure to get lower EMI, but this means paying 2-3 times the principal amount in interest. Conversely, choosing too short a tenure can strain your monthly budget. Find the right balance based on your income growth trajectory and other financial commitments." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2 text-red-600", children: "6. Not Considering Insurance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "While home loan insurance is not mandatory, it protects your family from the burden of the loan in case of your untimely death. The premium is tax-deductible and provides peace of mind. Similarly, consider critical illness riders." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2 text-red-600", children: "7. Ignoring the Impact of Inflation on Income" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "While your EMI remains fixed (for fixed-rate loans), your income typically grows with time due to salary hikes and inflation. What seems like a high EMI today (40% of income) will become more manageable in 5-10 years. However, don't bank entirely on future income growth when deciding loan amount." })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "EMI Affordability - The 50/30/20 Rule" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "The 50/30/20 rule is a simple budgeting framework that can help you manage your finances while servicing EMIs:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3", children: "50% - Needs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-2", children: "Essential expenses including:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1 text-sm text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "EMIs (home, car, personal loans)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Rent (if not paid off)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Utilities (electricity, water, gas)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Groceries" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Insurance premiums" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Transportation" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3", children: "30% - Wants" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-2", children: "Lifestyle and discretionary spending:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1 text-sm text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Dining out and entertainment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Shopping (clothes, gadgets)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Hobbies and recreation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Vacations and travel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Subscriptions (OTT, gym)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3", children: "20% - Savings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-2", children: "Future planning and wealth building:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1 text-sm text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Emergency fund (6 months expenses)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Retirement savings (EPF, NPS, PPF)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Investments (mutual funds, stocks)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Children's education fund" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Additional loan prepayment" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3", children: "Example: ₹1,00,000 Monthly Income" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-gray-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pb-2 border-b", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Monthly Income:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "₹1,00,000" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Needs (50%):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "₹50,000" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pl-6 space-y-1 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "• Home Loan EMI:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "₹25,000" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "• Car Loan EMI:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "₹10,000" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "• Utilities & Groceries:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "₹15,000" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Wants (30%):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "₹30,000" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Savings (20%):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "₹20,000" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mt-4 italic", children: "Note: This is a guideline. Adjust percentages based on your life stage, city, and financial goals. In expensive cities, needs might go up to 60-65%." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Frequently Asked Questions (FAQ)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "border-b pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold cursor-pointer text-lg", children: "What is the difference between reducing balance and flat rate interest?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Reducing Balance:" }),
                " Interest is calculated on the outstanding principal, which reduces with each EMI payment. This is the most common and borrower-friendly method used in India. Your interest burden decreases over time.",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Flat Rate:" }),
                " Interest is calculated on the original principal throughout the tenure, even though you're paying it back. This results in a much higher effective interest rate. A 10% flat rate is equivalent to approximately 18-19% reducing balance rate.",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Always check which method is being used. All our calculators use the reducing balance method, which is standard for home, car, and personal loans in India."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "border-b pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold cursor-pointer text-lg", children: "Can I change my EMI amount during the loan tenure?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-3", children: [
                "Yes, there are several ways to change your EMI:",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1. Step-up EMI:" }),
                " Some lenders offer increasing EMI schemes where your EMI increases by a fixed percentage every year. Good for young professionals expecting salary growth.",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2. Partial Prepayment:" }),
                " After making a lump sum prepayment, you can choose to either reduce tenure (EMI stays same) or reduce EMI (tenure stays same).",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "3. Balance Transfer:" }),
                " Moving to a new lender with different interest rates will change your EMI.",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "4. Top-up Loan:" }),
                " Taking an additional loan will increase your total EMI.",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Note: For fixed-rate loans, the EMI remains constant. For floating-rate loans, EMI may change when the lender revises interest rates based on RBI policy changes or MCLR adjustments."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "border-b pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold cursor-pointer text-lg", children: "What happens if I miss an EMI payment?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-3", children: [
                "Missing an EMI payment can have several consequences:",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Immediate Impact:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Late payment fee charged (typically ₹500-₹1,000)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Penal interest of 2-4% per annum on the overdue amount",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Daily interest accumulation on the unpaid EMI",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CIBIL Score Impact:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• 30 days overdue: Score can drop by 50-80 points",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• 60 days overdue: Score can drop by 100+ points",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• 90+ days overdue: Marked as default, severe score damage",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Long-term Consequences:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Difficulty in getting future loans",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Higher interest rates even if approved",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Legal action by lender for recovery",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• In case of secured loans (home/car), asset may be repossessed",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "What to do if you can't pay:" }),
                " Contact your lender immediately. Many banks offer restructuring options, temporary EMI reduction, or moratorium during genuine financial hardship."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "border-b pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold cursor-pointer text-lg", children: "Is it better to reduce tenure or reduce EMI when prepaying?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-3", children: [
                "This depends on your financial goals and situation:",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Reduce Tenure (Keep EMI Same):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "✅ Saves more on total interest paid",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "✅ Become debt-free faster",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "✅ Better if you have stable income and no cash flow issues",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "✅ Recommended for most borrowers",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Reduce EMI (Keep Tenure Same):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "✅ Improves monthly cash flow",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "✅ Helpful during financial uncertainty",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "✅ Better if you're approaching retirement",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "✅ Good if you have other high-priority expenses",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
                " ₹25 lakh loan at 8.5% for 20 years, prepay ₹2 lakh after 2 years:",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Reduce Tenure: Saves ₹5.2 lakh in interest, loan ends 3.5 years earlier",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Reduce EMI: Saves ₹3.8 lakh in interest, EMI reduces by ₹1,850",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Recommendation:" }),
                " If you can afford it, always choose to reduce tenure for maximum interest savings. The goal should be to become debt-free as soon as possible."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "border-b pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold cursor-pointer text-lg", children: "What is MCLR and how does it affect my home loan EMI?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-3", children: [
                "MCLR stands for ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Marginal Cost of Funds based Lending Rate" }),
                ". It is the internal benchmark rate that banks use to determine interest rates on loans.",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "How it works:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Your loan interest rate = MCLR + Spread (e.g., MCLR 8.25% + Spread 0.50% = 8.75%)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• MCLR changes based on RBI's repo rate and bank's cost of funds",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Your loan rate resets on the reset date (annual, quarterly, or monthly)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Spread remains constant throughout the loan tenure",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Impact on EMI:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• When MCLR decreases: Your EMI reduces (or tenure reduces if EMI is kept constant)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• When MCLR increases: Your EMI increases (or tenure increases)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
                " If your loan is linked to 1-year MCLR and it decreases from 8.50% to 8.25% on your reset date, your effective rate drops to 8.75% to 8.50%, reducing your EMI.",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "New Alternative - Repo Rate Linked Loans:" }),
                " Since October 2019, many banks offer loans linked directly to RBI's repo rate. These adjust faster to rate changes and are generally more transparent and beneficial for borrowers."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "border-b pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold cursor-pointer text-lg", children: "Can I claim tax benefits on EMI for a second home?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-3", children: [
                "Yes, but the rules differ from the first home:",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "For Second Home (Self-Occupied):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• From FY 2019-20 onwards, you can claim both homes as self-occupied",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Combined interest deduction limit of ₹2 lakh under Section 24(b) for both homes",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Principal repayment: ₹1.5 lakh under Section 80C (combined limit for all investments)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "For Second Home (Let-Out/Deemed Let-Out):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• No limit on interest deduction under Section 24(b)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• You can claim full interest amount as deduction",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Rental income is taxable",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Net income = Rental Income - (Interest + 30% standard deduction on rent)",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Principal repayment still eligible for ₹1.5 lakh deduction under 80C",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
                " If you earn ₹3 lakh as rent and pay ₹4 lakh as interest:",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Taxable rental income = ₹3,00,000 - ₹90,000 (30% deduction) - ₹4,00,000 (interest) = ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Loss of ₹1,90,000" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• This loss can be set off against other income, reducing your overall tax liability",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
                " If you have more than 2 houses, all properties beyond the first two are deemed to be let-out for tax purposes, even if you don't earn any rent."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-bold cursor-pointer text-lg", children: "Should I take a loan with longer tenure and invest the difference, or take shorter tenure?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mt-3", children: [
                "This is a common dilemma. Let's analyze with numbers:",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Scenario:" }),
                " ₹25 lakh loan at 8.5%",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Option 1 - 20-year tenure:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• EMI: ₹21,698",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Total interest paid: ₹27.1 lakh",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Option 2 - 10-year tenure:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• EMI: ₹30,942",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Total interest paid: ₹12.1 lakh",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Interest saved: ₹15 lakh",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Additional monthly outflow: ₹9,244",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Investment Math:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "If you invest the ₹9,244 difference for 10 years at 12% annual return:",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• Total corpus after 10 years: ₹21.4 lakh",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "• But you still have 10 years of loan remaining with ₹14 lakh outstanding",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Verdict:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "✅ If you can earn >12-15% returns consistently: Longer tenure + invest might work",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "✅ For most people: Shorter tenure is safer and guaranteed savings",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "✅ Middle path: Take moderate tenure (15 years), prepay regularly, and invest surplus",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Risk Factor:" }),
                " Investment returns are not guaranteed, but loan interest is a guaranteed cost. The psychological burden of debt and risk of job loss also favor shorter tenure."
              ] })
            ] })
          ] })
        ] }) })
      ] })
    ] }) })
  ] });
}
export {
  EMICalculatorIndia,
  EMICalculatorIndia as default
};
