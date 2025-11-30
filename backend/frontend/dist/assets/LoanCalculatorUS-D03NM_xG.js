import { O as useToast, r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a3 as Label, U as Input, B as Button, T as TrendingUp } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-PXEBZpdG.js";
import { A as AIAnalysis } from "./AIAnalysis-DnR9Up6F.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { u as useCalculatorHistory } from "./useCalculatorHistory-CSrtPtmI.js";
import { C as CreditCard } from "./credit-card-BI-uE5kJ.js";
import { S as Save } from "./save-D6Zr6kEC.js";
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
import "./tabs-BNSAX0su.js";
import "./share-2-ViScha7M.js";
import "./link-DxXhzsoi.js";
import "./copy-DGMuG98H.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./linkedin-BSJyfSWT.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
import "./calculatorStore-DyZ3rxbe.js";
import "./middleware-DvyyThDy.js";
function LoanCalculatorUS() {
  const { saveCalculation } = useCalculatorHistory();
  const { toast } = useToast();
  const [loanAmount, setLoanAmount] = reactExports.useState("");
  const [interestRate, setInterestRate] = reactExports.useState("");
  const [loanTerm, setLoanTerm] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate) / 100;
    const years = parseInt(loanTerm);
    if (!principal || !annualRate || !years || principal <= 0 || annualRate <= 0 || years <= 0) {
      setResult(null);
      return;
    }
    const monthlyRate = annualRate / 12;
    const totalPayments = years * 12;
    let monthlyPayment;
    if (monthlyRate === 0) {
      monthlyPayment = principal / totalPayments;
    } else {
      monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    }
    const totalAmount = monthlyPayment * totalPayments;
    const totalInterest = totalAmount - principal;
    setResult({
      monthlyPayment,
      totalInterest,
      totalAmount
    });
  };
  const handleSaveCalculation = () => {
    if (!result) {
      toast({
        title: "No calculation to save",
        description: "Please complete the form to generate results first.",
        variant: "destructive"
      });
      return;
    }
    saveCalculation({
      calculatorType: "loan",
      calculatorName: "US Loan Calculator",
      inputs: {
        loanAmount: parseFloat(loanAmount),
        interestRate: parseFloat(interestRate),
        loanTerm: parseInt(loanTerm)
      },
      results: {
        monthlyPayment: result.monthlyPayment,
        totalInterest: result.totalInterest,
        totalAmount: result.totalAmount
      }
    });
    toast({
      title: "Calculation saved!",
      description: "View it in your calculation history."
    });
  };
  reactExports.useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Loan Calculator USA | Personal Loan Payment Calculator | Smart Calculator Hubs",
      description: "Free US loan calculator. Calculate loan payments, total interest, and payment schedules for personal loans, auto loans, and more. Get instant results.",
      keywords: "loan calculator USA, personal loan calculator, auto loan calculator, loan payment calculator, US loan rates, loan interest calculator",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Loan Details" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter your loan details to calculate monthly payments. All calculations are estimates only." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "loanAmount", children: "Loan Amount (USD)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "loanAmount",
                  type: "number",
                  placeholder: "25000",
                  value: loanAmount,
                  onChange: (e) => setLoanAmount(e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "interestRate", children: "Interest Rate (% APR)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "interestRate",
                  type: "number",
                  step: "0.01",
                  placeholder: "8.5",
                  value: interestRate,
                  onChange: (e) => setInterestRate(e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "loanTerm", children: "Loan Term (Years)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: loanTerm, onValueChange: setLoanTerm, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select loan term" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "1", children: "1 year" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "2", children: "2 years" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "3", children: "3 years" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "4", children: "4 years" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "5", children: "5 years" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "6", children: "6 years" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "7", children: "7 years" })
                ] })
              ] })
            ] })
          ] }) })
        ] }),
        result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleSaveCalculation, variant: "outline", className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
            "Save to History"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIAnalysis,
            {
              analysisRequest: {
                calculatorType: "loan-us",
                data: {
                  principal: parseFloat(loanAmount) || 0,
                  interestRate: parseFloat(interestRate) || 0,
                  term: parseInt(loanTerm) || 0,
                  monthlyPayment: result.monthlyPayment,
                  totalInterest: result.totalInterest,
                  totalPayment: result.totalAmount
                }
              },
              autoRun: true,
              title: "AI Loan Analysis",
              description: "Get personalized loan optimization strategies and refinancing recommendations based on your loan terms."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "loan-us",
              inputs: {
                loanAmount: parseFloat(loanAmount),
                interestRate: parseFloat(interestRate),
                loanTerm: parseInt(loanTerm)
              },
              results: {
                monthlyPayment: result.monthlyPayment,
                totalInterest: result.totalInterest,
                totalAmount: result.totalAmount
              },
              title: "US Loan Calculator Report"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Monthly Payment" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-green-600", children: [
                  "$",
                  result.monthlyPayment.toLocaleString("en-US", { maximumFractionDigits: 2 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Principal & Interest" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Total Interest" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-orange-600", children: [
                  "$",
                  result.totalInterest.toLocaleString("en-US", { maximumFractionDigits: 0 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Over life of loan" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Total Amount" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-blue-600", children: [
                  "$",
                  result.totalAmount.toLocaleString("en-US", { maximumFractionDigits: 0 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Principal + Interest" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Understanding US Loans" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A loan is a sum of money borrowed from a lender that must be repaid with interest over a specified period. In the United States, loans come in various forms including personal loans, auto loans, student loans, and business loans." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Types of US Loans:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Personal Loans:" }),
                  " Unsecured loans for various purposes (5-36% APR typical)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Auto Loans:" }),
                  " Secured by the vehicle (3-15% APR typical)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Student Loans:" }),
                  " For education expenses (federal and private options)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Home Equity Loans:" }),
                  " Secured by home equity (5-10% APR typical)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Loan Terms to Know:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "APR:" }),
                  " Annual Percentage Rate includes interest and fees"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Principal:" }),
                  " The original amount borrowed"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Term:" }),
                  " The length of time to repay the loan"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Secured vs Unsecured:" }),
                  " Whether collateral is required"
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Factors Affecting Your Loan Rate" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Credit Score Impact:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Excellent (750+): Best rates available" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Good (700-749): Competitive rates" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Fair (650-699): Higher rates" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Poor (<650): Highest rates or denial" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Other Factors:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Income and employment history" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Debt-to-income ratio" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Loan amount and term" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Type of loan (secured vs unsecured)" })
                ] })
              ] })
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Tips for Getting the Best Loan" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Before Applying:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Check your credit score" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Shop around with multiple lenders" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consider pre-qualification" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Improve your credit if needed" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Smart Strategies:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consider shorter terms for lower total cost" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Make extra payments toward principal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Avoid unnecessary fees" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Read all terms carefully" })
                ] })
              ] })
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Frequently Asked Questions" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What's the difference between APR and interest rate?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The interest rate is the cost of borrowing the principal amount. APR includes the interest rate plus other costs like fees, making it a more complete picture of the loan's total cost." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How does loan term affect my payments?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Longer terms mean lower monthly payments but more interest paid over time. Shorter terms have higher monthly payments but less total interest cost." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Can I pay off my loan early?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Most loans allow early payoff, but some have prepayment penalties. Check your loan terms and consider the penalty cost versus interest savings." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What credit score do I need for a personal loan?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Most lenders prefer a credit score of 600 or higher for personal loans. Better credit scores (720+) qualify for the best rates and terms." })
              ] })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Important Information & Disclaimer" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator provides estimates only and should not be relied upon for financial decisions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Actual loan terms may vary based on creditworthiness, lender policies, and loan type." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• APR may include additional fees not calculated here." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Interest rates are subject to change and vary significantly between lenders." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Consult with qualified financial professionals for personalized loan advice." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator is designed for US residents and standard US loan practices." })
          ] }) })
        ] })
      ] })
    }
  );
}
export {
  LoanCalculatorUS
};
