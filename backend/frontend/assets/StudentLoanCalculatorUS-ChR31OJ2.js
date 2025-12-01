import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a3 as Label, D as DollarSign, U as Input, C as Calculator, B as Button, aD as formatCurrency } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { E as EnhancedAIAnalysis } from "./EnhancedAIAnalysis-BZiQW2bt.js";
import { B as BookOpen } from "./book-open-BKiKsQcZ.js";
import { C as Calendar } from "./calendar-CKWgIWzq.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./share-2-ViScha7M.js";
import "./link-DxXhzsoi.js";
import "./copy-DGMuG98H.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./linkedin-BSJyfSWT.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
import "./loader-circle-BYW7QwsU.js";
import "./badge-fo2YvZos.js";
import "./brain-U3SZm3t9.js";
import "./target-1ApqtYDG.js";
import "./circle-check-big-BoxGYPKG.js";
import "./arrow-right-CtOKJdMG.js";
import "./lightbulb-doNczJxC.js";
function StudentLoanCalculatorUS() {
  const [loanAmount, setLoanAmount] = reactExports.useState("50000");
  const [interestRate, setInterestRate] = reactExports.useState("5.5");
  const [loanTerm, setLoanTerm] = reactExports.useState("10");
  const [repaymentPlan, setRepaymentPlan] = reactExports.useState("standard");
  const [gracePeriod, setGracePeriod] = reactExports.useState("6");
  const [results, setResults] = reactExports.useState(null);
  const calculateLoan = () => {
    const principal = parseFloat(loanAmount) || 0;
    const annualRate = parseFloat(interestRate) / 100 || 0;
    const years = parseFloat(loanTerm) || 0;
    const grace = parseInt(gracePeriod) || 0;
    if (principal <= 0 || annualRate < 0 || years <= 0) {
      setResults(null);
      return;
    }
    const monthlyRate = annualRate / 12;
    const totalPayments = years * 12;
    let monthlyPayment;
    if (repaymentPlan === "standard") {
      monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    } else if (repaymentPlan === "graduated") {
      monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments) / (Math.pow(1 + monthlyRate, totalPayments) - 1) * 0.7;
    } else {
      monthlyPayment = principal * 2e-3;
    }
    const totalAmountPaid = monthlyPayment * totalPayments;
    const totalInterestPaid = totalAmountPaid - principal;
    const currentDate = /* @__PURE__ */ new Date();
    currentDate.setMonth(currentDate.getMonth() + grace + totalPayments);
    const payoffDate = currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long"
    });
    const monthlyBudgetNeeded = monthlyPayment / 0.1;
    setResults({
      monthlyPayment,
      totalInterestPaid,
      totalAmountPaid,
      payoffDate,
      monthlyBudgetNeeded
    });
  };
  const tips = [
    "Federal loans typically offer better terms than private loans",
    "Income-driven repayment plans can reduce monthly payments",
    "Consider loan forgiveness programs for public service careers",
    "Pay extra toward principal to reduce total interest",
    "Consolidation may simplify payments but could increase costs"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "Student Loan Calculator",
      description: "Calculate monthly payments, total interest, and repayment strategies for student loans with different repayment plans.",
      keywords: "student loan calculator, education financing, loan repayment, student debt",
      tips,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5" }),
                "Student Loan Details"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter your student loan information to calculate payments" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "loanAmount", children: "Total Loan Amount" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "loanAmount",
                      type: "number",
                      placeholder: "50000",
                      value: loanAmount,
                      onChange: (e) => setLoanAmount(e.target.value),
                      className: "pl-10"
                    }
                  )
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
                      placeholder: "5.5",
                      value: interestRate,
                      onChange: (e) => setInterestRate(e.target.value),
                      className: "pl-10"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "loanTerm", children: "Loan Term" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "loanTerm",
                      type: "number",
                      placeholder: "10",
                      value: loanTerm,
                      onChange: (e) => setLoanTerm(e.target.value),
                      className: "pl-10"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Years" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "repaymentPlan", children: "Repayment Plan" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: repaymentPlan, onValueChange: setRepaymentPlan, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "standard", children: "Standard (Fixed)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "graduated", children: "Graduated (Increasing)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "income-driven", children: "Income-Driven" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "gracePeriod", children: "Grace Period" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: gracePeriod, onValueChange: setGracePeriod, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "0", children: "0 months" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "6", children: "6 months" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "9", children: "9 months" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "12", children: "12 months" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateLoan, className: "w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "mr-2 h-4 w-4" }),
                "Calculate Student Loan"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Calculation Results" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Your student loan payment breakdown and timeline" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: results ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600", children: formatCurrency(results.monthlyPayment) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Monthly Payment" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-green-600", children: results.payoffDate }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Payoff Date" })
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Recommended Monthly Income:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: formatCurrency(results.monthlyBudgetNeeded) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-yellow-800 dark:text-yellow-200 mb-2", children: "💡 Quick Tips" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-yellow-700 dark:text-yellow-300 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider automatic payments for interest rate reductions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Make extra principal payments to reduce total interest" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Research loan forgiveness programs for your career" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider refinancing if you have good credit" })
                ] })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-muted-foreground py-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Enter your loan details to see calculation results" })
            ] }) })
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            EnhancedAIAnalysis,
            {
              calculatorType: "student-loan",
              data: {
                loanAmount: parseFloat(loanAmount),
                interestRate: parseFloat(interestRate),
                loanTerm: parseInt(loanTerm),
                monthlyPayment: results.monthlyPayment,
                totalInterest: results.totalInterestPaid,
                totalAmount: results.totalAmountPaid,
                repaymentPlan
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "student-loan-us",
              inputs: { loanAmount, interestRate, loanTerm, repaymentPlan, gracePeriod },
              results,
              title: "Student Loan Repayment Plan"
            }
          ) })
        ] })
      ]
    }
  );
}
export {
  StudentLoanCalculatorUS
};
