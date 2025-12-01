import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, l as House, i as CardDescription, k as CardContent, a4 as Label, V as Input, a5 as Info } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { C as Checkbox } from "./checkbox-Cbsqwr6g.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
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
function LoanAffordabilityCalculatorUS() {
  const [monthlyIncome, setMonthlyIncome] = reactExports.useState("");
  const [monthlyDebts, setMonthlyDebts] = reactExports.useState("");
  const [creditScore, setCreditScore] = reactExports.useState("740");
  const [downPaymentPercent, setDownPaymentPercent] = reactExports.useState("20");
  const [interestRate, setInterestRate] = reactExports.useState("7.0");
  const [loanTerm, setLoanTerm] = reactExports.useState("30");
  const [propertyTaxRate, setPropertyTaxRate] = reactExports.useState("1.2");
  const [homeInsuranceRate, setHomeInsuranceRate] = reactExports.useState("0.5");
  const [hoaFees, setHoaFees] = reactExports.useState("");
  const [includePmi, setIncludePmi] = reactExports.useState(true);
  const [pmiRate, setPmiRate] = reactExports.useState("0.5");
  const [useConservativeRatio, setUseConservativeRatio] = reactExports.useState(false);
  const [result, setResult] = reactExports.useState(null);
  const calculateAffordability = () => {
    const income = parseFloat(monthlyIncome);
    const debts = parseFloat(monthlyDebts) || 0;
    const creditScoreNum = parseInt(creditScore);
    const rate = parseFloat(interestRate) / 100 / 12;
    const payments = parseInt(loanTerm) * 12;
    const downPayment = parseFloat(downPaymentPercent) / 100;
    const propTaxRate = parseFloat(propertyTaxRate) / 100 / 12;
    const insuranceRate = parseFloat(homeInsuranceRate) / 100 / 12;
    const hoa = parseFloat(hoaFees) || 0;
    if (!income || income <= 0) {
      setResult(null);
      return;
    }
    let maxBackEndRatio = 0.36;
    let maxFrontEndRatio = 0.28;
    if (creditScoreNum >= 740) {
      maxBackEndRatio = 0.43;
      maxFrontEndRatio = 0.31;
    } else if (creditScoreNum >= 680) {
      maxBackEndRatio = 0.4;
      maxFrontEndRatio = 0.3;
    } else if (creditScoreNum >= 620) {
      maxBackEndRatio = 0.37;
      maxFrontEndRatio = 0.29;
    } else {
      maxBackEndRatio = 0.35;
      maxFrontEndRatio = 0.27;
    }
    if (useConservativeRatio) {
      maxBackEndRatio = Math.min(maxBackEndRatio, 0.36);
      maxFrontEndRatio = Math.min(maxFrontEndRatio, 0.28);
    }
    const maxTotalDebt = income * maxBackEndRatio;
    const maxHousingPayment = Math.min(
      income * maxFrontEndRatio,
      maxTotalDebt - debts
    );
    let maxPIPayment = maxHousingPayment - hoa;
    let maxLoanAmount = 0;
    let homePrice = 0;
    let monthlyPI = 0;
    if (rate > 0 && maxPIPayment > 0) {
      let testLoan = maxPIPayment / rate * (1 - Math.pow(1 + rate, -payments));
      for (let i = 0; i < 10; i++) {
        homePrice = testLoan / (1 - downPayment);
        const monthlyPropTax2 = homePrice * propTaxRate;
        const monthlyInsurance2 = homePrice * insuranceRate;
        let monthlyPmi2 = 0;
        if (includePmi && downPayment < 0.2) {
          monthlyPmi2 = testLoan * (parseFloat(pmiRate) / 100) / 12;
        }
        const otherHousingCosts = monthlyPropTax2 + monthlyInsurance2 + monthlyPmi2 + hoa;
        const availableForPI = maxHousingPayment - otherHousingCosts;
        if (availableForPI <= 0) {
          testLoan = 0;
          break;
        }
        const supportedLoan = availableForPI / rate * (1 - Math.pow(1 + rate, -payments));
        if (Math.abs(supportedLoan - testLoan) < 100) {
          testLoan = supportedLoan;
          break;
        }
        testLoan = supportedLoan;
      }
      maxLoanAmount = Math.max(0, testLoan);
      homePrice = maxLoanAmount / (1 - downPayment);
      monthlyPI = maxLoanAmount * rate / (1 - Math.pow(1 + rate, -payments));
    }
    const monthlyPropTax = homePrice * propTaxRate;
    const monthlyInsurance = homePrice * insuranceRate;
    let monthlyPmi = 0;
    if (includePmi && downPayment < 0.2) {
      monthlyPmi = maxLoanAmount * (parseFloat(pmiRate) / 100) / 12;
    }
    const totalMonthlyHousing = monthlyPI + monthlyPropTax + monthlyInsurance + monthlyPmi + hoa;
    const totalMonthlyDebts = totalMonthlyHousing + debts;
    const frontEndRatio = totalMonthlyHousing / income * 100;
    const backEndRatio = totalMonthlyDebts / income * 100;
    const remainingIncome = income - totalMonthlyDebts;
    const downPaymentNeeded = homePrice * downPayment;
    let qualificationStatus = "poor";
    if (backEndRatio <= 30 && frontEndRatio <= 25) {
      qualificationStatus = "excellent";
    } else if (backEndRatio <= 36 && frontEndRatio <= 28) {
      qualificationStatus = "good";
    } else if (backEndRatio <= 43 && frontEndRatio <= 31) {
      qualificationStatus = "marginal";
    }
    const recommendations = [];
    if (backEndRatio > 36) {
      recommendations.push("Consider paying down existing debts to improve your debt-to-income ratio");
    }
    if (frontEndRatio > 28) {
      recommendations.push("Look for homes in a lower price range or increase your down payment");
    }
    if (creditScoreNum < 740) {
      recommendations.push("Improve your credit score to qualify for better rates and higher loan amounts");
    }
    if (downPayment < 0.2) {
      recommendations.push("Consider saving for a 20% down payment to eliminate PMI");
    }
    if (remainingIncome < income * 0.2) {
      recommendations.push("Ensure you have enough remaining income for emergencies and other expenses");
    }
    setResult({
      maxLoanAmount,
      maxHomePrice: homePrice,
      monthlyPayment: monthlyPI,
      monthlyHousingPayment: totalMonthlyHousing,
      debtToIncomeRatio: backEndRatio,
      housingToIncomeRatio: frontEndRatio,
      frontEndRatio,
      backEndRatio,
      remainingMonthlyIncome: remainingIncome,
      downPaymentNeeded,
      qualificationStatus,
      recommendations
    });
  };
  reactExports.useEffect(() => {
    calculateAffordability();
  }, [
    monthlyIncome,
    monthlyDebts,
    creditScore,
    downPaymentPercent,
    interestRate,
    loanTerm,
    propertyTaxRate,
    homeInsuranceRate,
    hoaFees,
    includePmi,
    pmiRate,
    useConservativeRatio
  ]);
  const getStatusColor = (status) => {
    switch (status) {
      case "excellent":
        return "text-green-600 bg-green-50 border-green-200";
      case "good":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "marginal":
        return "text-orange-600 bg-orange-50 border-orange-200";
      case "poor":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "Loan Affordability Calculator USA | How Much House Can I Afford? | Smart Calculator Hubs",
      description: "Calculate how much house you can afford with our comprehensive loan affordability calculator. Includes DTI ratios, PMI, taxes, and personalized recommendations.",
      keywords: "loan affordability calculator, house affordability, how much house can I afford, DTI calculator, mortgage pre-qualification, home loan calculator USA",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-5 w-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Income & Debt Information" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter your financial details to calculate your maximum loan affordability." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "monthlyIncome", children: "Gross Monthly Income (USD)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "monthlyIncome",
                        type: "number",
                        placeholder: "6000",
                        value: monthlyIncome,
                        onChange: (e) => setMonthlyIncome(e.target.value)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Before taxes and deductions" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "monthlyDebts", children: "Monthly Debt Payments (USD)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "monthlyDebts",
                        type: "number",
                        placeholder: "500",
                        value: monthlyDebts,
                        onChange: (e) => setMonthlyDebts(e.target.value)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Credit cards, auto loans, student loans, etc." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "creditScore", children: "Credit Score" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: creditScore, onValueChange: setCreditScore, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select score range" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "800", children: "800+ (Excellent)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "760", children: "760-799 (Very Good)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "740", children: "740-759 (Good)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "700", children: "700-739 (Good)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "660", children: "660-699 (Fair)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "620", children: "620-659 (Fair)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "580", children: "580-619 (Poor)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "500", children: "Below 580 (Poor)" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "downPaymentPercent", children: "Down Payment (%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "downPaymentPercent",
                        type: "number",
                        placeholder: "20",
                        min: "3",
                        max: "50",
                        value: downPaymentPercent,
                        onChange: (e) => setDownPaymentPercent(e.target.value)
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
                        step: "0.1",
                        placeholder: "7.0",
                        value: interestRate,
                        onChange: (e) => setInterestRate(e.target.value)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "loanTerm", children: "Loan Term" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: loanTerm, onValueChange: setLoanTerm, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select term" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "15", children: "15 years" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "20", children: "20 years" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "25", children: "25 years" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "30", children: "30 years" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "propertyTaxRate", children: "Property Tax Rate (%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "propertyTaxRate",
                        type: "number",
                        step: "0.1",
                        placeholder: "1.2",
                        value: propertyTaxRate,
                        onChange: (e) => setPropertyTaxRate(e.target.value)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "homeInsuranceRate", children: "Home Insurance Rate (%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "homeInsuranceRate",
                        type: "number",
                        step: "0.1",
                        placeholder: "0.5",
                        value: homeInsuranceRate,
                        onChange: (e) => setHomeInsuranceRate(e.target.value)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "hoaFees", children: "Monthly HOA Fees (USD)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "hoaFees",
                        type: "number",
                        placeholder: "0",
                        value: hoaFees,
                        onChange: (e) => setHoaFees(e.target.value)
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      id: "includePmi",
                      checked: includePmi,
                      onCheckedChange: (checked) => setIncludePmi(checked === true)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "includePmi", className: "text-sm", children: "Include PMI" })
                ] }),
                includePmi && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "pmiRate", children: "PMI Rate (%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "pmiRate",
                      type: "number",
                      step: "0.1",
                      placeholder: "0.5",
                      value: pmiRate,
                      onChange: (e) => setPmiRate(e.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      id: "useConservativeRatio",
                      checked: useConservativeRatio,
                      onCheckedChange: (checked) => setUseConservativeRatio(checked === true)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "useConservativeRatio", className: "text-sm", children: "Use Conservative DTI Ratios" })
                ] })
              ] })
            ] })
          ] }),
          result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `border-2 ${getStatusColor(result.qualificationStatus)}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-lg", children: [
                "Loan Qualification Status: ",
                result.qualificationStatus.charAt(0).toUpperCase() + result.qualificationStatus.slice(1)
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-bold", children: [
                    "$",
                    result.maxHomePrice.toLocaleString("en-US", { maximumFractionDigits: 0 })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Maximum home price" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold", children: [
                    "$",
                    result.maxLoanAmount.toLocaleString("en-US", { maximumFractionDigits: 0 })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Maximum loan amount" })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Monthly Housing Payment" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-blue-600", children: [
                    "$",
                    result.monthlyHousingPayment.toLocaleString("en-US", { maximumFractionDigits: 0 })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "PITI + PMI + HOA" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Principal & Interest" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-green-600", children: [
                    "$",
                    result.monthlyPayment.toLocaleString("en-US", { maximumFractionDigits: 0 })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Loan payment only" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Down Payment Needed" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-purple-600", children: [
                    "$",
                    result.downPaymentNeeded.toLocaleString("en-US", { maximumFractionDigits: 0 })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
                    downPaymentPercent,
                    "% of home price"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Remaining Income" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-orange-600", children: [
                    "$",
                    result.remainingMonthlyIncome.toLocaleString("en-US", { maximumFractionDigits: 0 })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "After all payments" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Debt-to-Income Ratios" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Front-end Ratio (Housing):" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-bold ${result.frontEndRatio <= 28 ? "text-green-600" : result.frontEndRatio <= 31 ? "text-orange-600" : "text-red-600"}`, children: [
                        result.frontEndRatio.toFixed(1),
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `h-2 rounded-full ${result.frontEndRatio <= 28 ? "bg-green-500" : result.frontEndRatio <= 31 ? "bg-orange-500" : "bg-red-500"}`,
                        style: { width: `${Math.min(result.frontEndRatio, 100)}%` }
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Recommended: ≤28%" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Back-end Ratio (Total Debt):" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-bold ${result.backEndRatio <= 36 ? "text-green-600" : result.backEndRatio <= 43 ? "text-orange-600" : "text-red-600"}`, children: [
                        result.backEndRatio.toFixed(1),
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `h-2 rounded-full ${result.backEndRatio <= 36 ? "bg-green-500" : result.backEndRatio <= 43 ? "bg-orange-500" : "bg-red-500"}`,
                        style: { width: `${Math.min(result.backEndRatio, 100)}%` }
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Recommended: ≤36%" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Recommendations" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: result.recommendations.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: result.recommendations.map((rec, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start space-x-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500 mt-1", children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: rec })
                ] }, index)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-600", children: "✓ Your financial profile looks excellent for home buying! You have strong ratios and good affordability." }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Understanding Loan Affordability in the USA" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Determining how much house you can afford is one of the most important financial decisions you'll make. Lenders use specific ratios and criteria to evaluate your ability to repay a mortgage, but understanding these requirements helps you make informed decisions about your home purchase budget." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Key Affordability Factors:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Debt-to-Income Ratio (DTI):" }),
                    " The percentage of your monthly income that goes to debt payments"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Credit Score:" }),
                    " Higher scores qualify for better rates and higher DTI ratios"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Down Payment:" }),
                    " Larger down payments reduce loan amounts and may eliminate PMI"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Employment History:" }),
                    " Stable employment for 2+ years preferred by lenders"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cash Reserves:" }),
                    " Money left over after down payment and closing costs"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "The 28/36 Rule:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Traditional lending guidelines suggest your housing payment shouldn't exceed 28% of gross monthly income (front-end ratio), and total debt payments shouldn't exceed 36% (back-end ratio). However, many modern loan programs allow higher ratios with compensating factors like excellent credit or significant assets." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Beyond Basic Ratios:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While DTI ratios are important, they don't tell the whole story. Consider your lifestyle, career stability, future financial goals, and comfort level with debt. A conservative approach might target 25% for housing and 30% for total debt, leaving more room for emergencies and other financial priorities." })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Maximizing Your Home Buying Power" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Improve Your Credit Score:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Pay all bills on time consistently" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Pay down credit card balances below 30% utilization" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Don't close old credit accounts" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Check credit reports for errors and dispute them" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Avoid new credit applications before buying" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Reduce Debt-to-Income Ratio:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Pay off credit cards and personal loans" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Avoid taking on new debt" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consider debt consolidation if beneficial" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Increase income through raises or side work" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Pay down student loan balances" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Down Payment Strategies:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While 20% down is ideal to avoid PMI, many programs offer lower down payment options. FHA loans require only 3.5% down, VA loans offer 0% down for veterans, and conventional loans may accept as little as 3% down. Consider the trade-offs between lower down payments (higher monthly costs) versus saving longer for a larger down payment." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg mt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Down Payment Options:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Conventional: 3-5% minimum" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• FHA: 3.5% minimum" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• VA: 0% for eligible veterans" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• USDA: 0% for rural properties" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Jumbo: Often 10-20% minimum" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Additional Costs to Budget For:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Closing Costs:" }),
                    " Typically 2-5% of loan amount"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Moving Expenses:" }),
                    " Professional movers, utility deposits, immediate needs"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Home Maintenance:" }),
                    " Budget 1-3% of home value annually"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Property Improvements:" }),
                    " Immediate repairs, upgrades, furnishings"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Emergency Fund:" }),
                    " Maintain 3-6 months of expenses after purchase"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "First-Time Buyer Programs:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Many states and localities offer first-time homebuyer programs with benefits like down payment assistance, reduced interest rates, or closing cost help. These programs often have income limits and may require homebuyer education courses, but they can significantly improve affordability for qualified buyers." })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Loan Types and Qualification Requirements" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Conventional Loans:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Not backed by the government, these loans typically offer the most flexibility but may have stricter requirements. They're available with down payments as low as 3% but require PMI for anything less than 20% down. Conventional loans often have the best rates for borrowers with excellent credit." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold mb-2", children: "Conventional Loan Benefits:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• No upfront mortgage insurance premium" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• PMI can be removed at 20% equity" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Available for vacation homes and investment properties" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Higher loan limits than government programs" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• No funding fee" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold mb-2", children: "FHA Loan Benefits:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 3.5% down payment minimum" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• More flexible credit requirements" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Higher DTI ratios allowed" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Gift funds allowed for down payment" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Assumable loans" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Government-Backed Loans:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "FHA Loans:" }),
                    " 3.5% down, more lenient credit (580+ typically), MIP required"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "VA Loans:" }),
                    " 0% down for veterans, no PMI, competitive rates, funding fee applies"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "USDA Loans:" }),
                    " 0% down for rural areas, income limits apply, guarantee fee required"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Jumbo Loans:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For home purchases exceeding conforming loan limits ($766,550 in most areas for 2024), jumbo loans are required. These typically require larger down payments (10-20%), excellent credit scores (740+), lower DTI ratios, and significant cash reserves. Rates may be slightly higher or lower than conforming loans depending on market conditions." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Alternative Loan Programs:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bank Statement Loans:" }),
                    " For self-employed borrowers with non-traditional income documentation"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Asset-Based Loans:" }),
                    " Qualify based on assets rather than income"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Non-QM Loans:" }),
                    " Non-qualified mortgages for unique situations"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Portfolio Loans:" }),
                    " Kept by lenders, more flexible underwriting"
                  ] })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Frequently Asked Questions" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How accurate is this affordability calculator?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This calculator provides estimates based on standard lending guidelines and the information you provide. Actual qualification depends on many factors including employment history, assets, and specific lender requirements. Use this as a starting point and get pre-qualified with lenders for accurate figures." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Should I buy the most house I can afford?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Not necessarily. While lenders may approve you for a certain amount, consider your comfort level, other financial goals, and potential life changes. Many financial advisors recommend staying below maximum approval amounts to maintain financial flexibility." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What if my DTI is too high?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Focus on paying down existing debts, increasing your income, or considering a less expensive home. Some loan programs allow higher DTI ratios with compensating factors like excellent credit, significant assets, or larger down payments." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How does my credit score affect affordability?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Higher credit scores typically qualify for better interest rates, which can significantly increase affordability. They also allow for higher DTI ratios and may require smaller down payments. Even a 20-point improvement in credit score can save thousands over the loan term." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What's included in the debt-to-income calculation?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Monthly debt payments include credit cards, auto loans, student loans, personal loans, alimony, and other recurring debts. It does not include utilities, insurance (except mortgage insurance), taxes, or other living expenses." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Can I use gift money for my down payment?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Most loan programs allow gift funds from family members for down payments. You'll typically need a gift letter stating the money doesn't need to be repaid and documentation of the source of funds." })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator provides estimates only and does not guarantee loan approval or specific terms." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Actual qualification depends on employment history, assets, credit profile, and lender-specific requirements." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• DTI ratios and qualification standards vary between lenders and loan programs." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Consider additional costs like closing costs, moving expenses, maintenance, and emergency funds." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Interest rates change daily and vary based on credit score, down payment, and other factors." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator assumes current income will continue - consider job stability and future earnings potential." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Some loan programs have specific requirements not reflected in these general calculations." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Consult with qualified mortgage professionals and financial advisors for personalized guidance." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Regional costs for taxes, insurance, and other expenses can vary significantly from estimates used here." })
            ] }) })
          ] })
        ] }),
        result && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExportShareButtons,
          {
            calculatorType: "loan-affordability-us",
            inputs: { monthlyIncome, monthlyDebts, creditScore, downPaymentPercent, interestRate, loanTerm, propertyTaxRate, homeInsuranceRate, hoaFees, pmiRate },
            results: result,
            title: "Loan Affordability Analysis"
          }
        ) })
      ]
    }
  );
}
export {
  LoanAffordabilityCalculatorUS
};
