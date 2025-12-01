import { Q as useToast, r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, l as House, i as CardDescription, k as CardContent, a4 as Label, V as Input, B as Button, a5 as Info } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { C as Checkbox } from "./checkbox-Cbsqwr6g.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { A as AIAnalysis } from "./AIAnalysis-B-4zh-eH.js";
import { R as RelatedCalculators } from "./RelatedCalculators-CFMy6W9D.js";
import { E as EnhancedAIAnalysis } from "./EnhancedAIAnalysis-BaYCd8m5.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { u as useCalculatorHistory } from "./useCalculatorHistory-D-0eO727.js";
import { S as Save } from "./save-DNawQ5RZ.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./check-DTsA1WpX.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
import "./badge-6THgoC_4.js";
import "./tabs-t5L32f7o.js";
import "./brain-CSngUEN8.js";
import "./target-4JeIm6Yk.js";
import "./circle-check-big-B8N3lfE-.js";
import "./AppleStyleCard-DyiWjqNf.js";
import "./CalculatorCategory-D_glaRKB.js";
import "./map-pin-DTtorPjp.js";
import "./interlinking-DH1ZPh0L.js";
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
import "./calculatorStore-CZ9YYacT.js";
import "./middleware-Xu_RK28m.js";
function MortgageCalculatorUS() {
  const { saveCalculation } = useCalculatorHistory();
  const { toast } = useToast();
  const [loanAmount, setLoanAmount] = reactExports.useState("");
  const [homeValue, setHomeValue] = reactExports.useState("");
  const [downPayment, setDownPayment] = reactExports.useState("");
  const [interestRate, setInterestRate] = reactExports.useState("");
  const [loanTerm, setLoanTerm] = reactExports.useState("");
  const [propertyTaxRate, setPropertyTaxRate] = reactExports.useState("1.2");
  const [homeInsuranceRate, setHomeInsuranceRate] = reactExports.useState("0.5");
  const [pmiRate, setPmiRate] = reactExports.useState("0.5");
  const [includePmi, setIncludePmi] = reactExports.useState(true);
  const [includePropertyTax, setIncludePropertyTax] = reactExports.useState(true);
  const [includeHomeInsurance, setIncludeHomeInsurance] = reactExports.useState(true);
  const [result, setResult] = reactExports.useState(null);
  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate) / 100;
    const years = parseInt(loanTerm);
    const homeVal = parseFloat(homeValue) || principal;
    const downPmt = parseFloat(downPayment) || 0;
    if (!principal || !annualRate || !years || principal <= 0 || annualRate <= 0 || years <= 0) {
      setResult(null);
      return;
    }
    const monthlyRate = annualRate / 12;
    const totalPayments = years * 12;
    let monthlyPI;
    if (monthlyRate === 0) {
      monthlyPI = principal / totalPayments;
    } else {
      monthlyPI = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    }
    const downPaymentPercent = downPmt / homeVal * 100;
    let monthlyPmi = 0;
    let totalPmiPaid = 0;
    if (includePmi && downPaymentPercent < 20) {
      monthlyPmi = principal * (parseFloat(pmiRate) / 100) / 12;
      const targetBalance = homeVal * 0.78;
      let balance = principal;
      let monthsUntilPmiRemoval = totalPayments;
      for (let month = 1; month <= totalPayments; month++) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = monthlyPI - interestPayment;
        balance -= principalPayment;
        if (balance <= targetBalance) {
          monthsUntilPmiRemoval = month;
          break;
        }
      }
      totalPmiPaid = monthlyPmi * Math.min(monthsUntilPmiRemoval, totalPayments);
    }
    const monthlyPropertyTax = includePropertyTax ? homeVal * (parseFloat(propertyTaxRate) / 100) / 12 : 0;
    const monthlyInsurance = includeHomeInsurance ? homeVal * (parseFloat(homeInsuranceRate) / 100) / 12 : 0;
    const totalAmount = monthlyPI * totalPayments;
    const totalInterest = totalAmount - principal;
    const totalMonthlyPayment = monthlyPI + monthlyPmi + monthlyPropertyTax + monthlyInsurance;
    setResult({
      monthlyPayment: monthlyPI,
      principalAndInterest: monthlyPI,
      pmi: monthlyPmi,
      propertyTax: monthlyPropertyTax,
      homeInsurance: monthlyInsurance,
      totalMonthlyPayment,
      totalInterest,
      totalAmount,
      totalPmiPaid
    });
  };
  reactExports.useEffect(() => {
    const homeVal = parseFloat(homeValue);
    const downPmt = parseFloat(downPayment);
    if (homeVal && downPmt >= 0) {
      setLoanAmount((homeVal - downPmt).toString());
    }
  }, [homeValue, downPayment]);
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
      calculatorType: "mortgage-us",
      calculatorName: "US Mortgage Calculator",
      inputs: {
        loanAmount: parseFloat(loanAmount),
        homeValue: parseFloat(homeValue),
        downPayment: parseFloat(downPayment),
        interestRate: parseFloat(interestRate),
        loanTerm: parseInt(loanTerm),
        propertyTaxRate: parseFloat(propertyTaxRate),
        homeInsuranceRate: parseFloat(homeInsuranceRate),
        pmiRate: parseFloat(pmiRate)
      },
      results: {
        monthlyPayment: result.monthlyPayment,
        totalMonthlyPayment: result.totalMonthlyPayment,
        totalInterest: result.totalInterest,
        totalAmount: result.totalAmount,
        totalPmiPaid: result.totalPmiPaid
      }
    });
    toast({
      title: "Calculation saved!",
      description: "View it in your calculation history."
    });
  };
  reactExports.useEffect(() => {
    calculateMortgage();
  }, [
    loanAmount,
    interestRate,
    loanTerm,
    homeValue,
    downPayment,
    propertyTaxRate,
    homeInsuranceRate,
    pmiRate,
    includePmi,
    includePropertyTax,
    includeHomeInsurance
  ]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "US Mortgage Calculator with PMI & Property Tax | Complete Home Loan Calculator",
      description: "Comprehensive US mortgage calculator with PMI, property taxes, and insurance. Calculate total monthly payments, interest costs, and affordability for your home purchase.",
      keywords: "US mortgage calculator, PMI calculator, property tax calculator, home loan calculator, mortgage payment calculator, total monthly payment, home affordability",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Complete Mortgage Calculator" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Calculate your total monthly housing payment including PMI, property taxes, and insurance." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "homeValue", children: "Home Value (USD)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "homeValue",
                    type: "number",
                    placeholder: "450000",
                    value: homeValue,
                    onChange: (e) => setHomeValue(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "downPayment", children: "Down Payment (USD)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "downPayment",
                    type: "number",
                    placeholder: "50000",
                    value: downPayment,
                    onChange: (e) => setDownPayment(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "loanAmount", children: "Loan Amount (USD)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "loanAmount",
                    type: "number",
                    placeholder: "400000",
                    value: loanAmount,
                    onChange: (e) => setLoanAmount(e.target.value),
                    readOnly: true,
                    className: "bg-gray-50"
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "10", children: "10 years" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "15", children: "15 years" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "20", children: "20 years" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "25", children: "25 years" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "30", children: "30 years" })
                  ] })
                ] })
              ] }),
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
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Checkbox,
                  {
                    id: "includePropertyTax",
                    checked: includePropertyTax,
                    onCheckedChange: (checked) => setIncludePropertyTax(checked === true)
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "includePropertyTax", className: "text-sm", children: "Include Property Tax" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Checkbox,
                  {
                    id: "includeHomeInsurance",
                    checked: includeHomeInsurance,
                    onCheckedChange: (checked) => setIncludeHomeInsurance(checked === true)
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "includeHomeInsurance", className: "text-sm", children: "Include Home Insurance" })
              ] })
            ] })
          ] })
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
                calculatorType: "mortgage-us",
                data: {
                  loanAmount: parseFloat(loanAmount) || 0,
                  interestRate: parseFloat(interestRate) || 0,
                  loanTerm: parseInt(loanTerm) || 30,
                  downPayment: parseFloat(downPayment) || 0,
                  propertyValue: parseFloat(homeValue) || parseFloat(loanAmount) || 0,
                  monthlyPayment: result.principalAndInterest,
                  totalInterest: result.totalInterest,
                  totalPayment: result.totalAmount,
                  pmi: result.pmi,
                  propertyTax: result.propertyTax,
                  insurance: result.homeInsurance
                }
              },
              autoRun: true,
              title: "AI Mortgage Analysis",
              description: "Get personalized recommendations for your mortgage strategy, including optimization opportunities and risk factors."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 bg-green-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg font-bold text-green-800", children: "Total Monthly Payment" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-bold text-green-600", children: [
                "$",
                result.totalMonthlyPayment.toLocaleString("en-US", { maximumFractionDigits: 2 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-700 mt-1", children: "Including all selected components" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Principal & Interest" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-blue-600", children: [
                "$",
                result.principalAndInterest.toLocaleString("en-US", { maximumFractionDigits: 2 })
              ] }) })
            ] }),
            includePmi && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "PMI" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-orange-600", children: [
                  "$",
                  result.pmi.toLocaleString("en-US", { maximumFractionDigits: 2 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Until 20% equity" })
              ] })
            ] }),
            includePropertyTax && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Property Tax" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-purple-600", children: [
                "$",
                result.propertyTax.toLocaleString("en-US", { maximumFractionDigits: 2 })
              ] }) })
            ] }),
            includeHomeInsurance && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Home Insurance" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-red-600", children: [
                "$",
                result.homeInsurance.toLocaleString("en-US", { maximumFractionDigits: 2 })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Total Interest Paid" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-orange-600", children: [
                  "$",
                  result.totalInterest.toLocaleString("en-US", { maximumFractionDigits: 0 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Over life of loan" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Total Amount Paid" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-blue-600", children: [
                  "$",
                  result.totalAmount.toLocaleString("en-US", { maximumFractionDigits: 0 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Principal + Interest only" })
              ] })
            ] }),
            includePmi && result.totalPmiPaid > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Total PMI Paid" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-orange-600", children: [
                  "$",
                  result.totalPmiPaid.toLocaleString("en-US", { maximumFractionDigits: 0 })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Until PMI removal" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            EnhancedAIAnalysis,
            {
              calculatorType: "mortgage-us",
              data: {
                loanAmount: parseFloat(loanAmount) || 0,
                interestRate: parseFloat(interestRate) || 0,
                loanTerm: parseInt(loanTerm) || 0,
                downPayment: parseFloat(downPayment) || 0,
                propertyValue: parseFloat(homeValue) || parseFloat(loanAmount) || 0,
                monthlyPayment: (result == null ? void 0 : result.principalAndInterest) || 0,
                totalInterest: (result == null ? void 0 : result.totalInterest) || 0,
                totalPayment: (result == null ? void 0 : result.totalAmount) || 0,
                pmi: (result == null ? void 0 : result.pmi) || 0,
                propertyTax: (result == null ? void 0 : result.propertyTax) || 0,
                insurance: (result == null ? void 0 : result.homeInsurance) || 0
              },
              className: "mt-8"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "mortgage-us",
              inputs: {
                loanAmount: parseFloat(loanAmount) || 0,
                homeValue: parseFloat(homeValue) || 0,
                downPayment: parseFloat(downPayment) || 0,
                interestRate: parseFloat(interestRate) || 0,
                loanTerm: parseInt(loanTerm) || 0,
                propertyTaxRate: parseFloat(propertyTaxRate) || 0,
                homeInsuranceRate: parseFloat(homeInsuranceRate) || 0,
                pmiRate: parseFloat(pmiRate) || 0,
                includePmi,
                includePropertyTax,
                includeHomeInsurance
              },
              results: result || {},
              title: "US Mortgage Calculation",
              className: "mt-6"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Complete Guide to US Mortgage Calculations" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Understanding your complete monthly housing payment is crucial for effective budgeting and home affordability planning. This comprehensive mortgage calculator includes all major components: principal, interest, PMI, property taxes, and homeowners insurance - often referred to as PITI+PMI in the mortgage industry." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Components of Your Total Payment:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Principal & Interest:" }),
                  " Your base mortgage payment calculated using the loan amount, interest rate, and term"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "PMI (Private Mortgage Insurance):" }),
                  " Required when down payment is less than 20% of home value"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Property Taxes:" }),
                  " Annual taxes paid to local government, typically 0.5-2.5% of home value"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Homeowners Insurance:" }),
                  " Protects your investment, typically 0.3-1.5% of home value annually"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Understanding PMI in Detail:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Private Mortgage Insurance (PMI) is an additional monthly cost for conventional loans with down payments less than 20%. PMI rates typically range from 0.3% to 1.5% of the loan amount annually, depending on your credit score, loan-to-value ratio, and loan type. The good news is PMI can be removed once you reach 20% equity in your home through payments or appreciation." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Property Tax Considerations:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Property taxes vary significantly by location and are based on your local tax rate and assessed home value. High-tax states like New Jersey and New Hampshire may have rates exceeding 2%, while states like Hawaii and Alabama typically have rates below 1%. These taxes fund local services like schools, roads, and emergency services." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Smart Strategies for US Homebuyers" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Reduce PMI Costs:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Save for a 20% down payment" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consider piggyback loans (80/10/10)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Look into lender-paid PMI options" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Monitor home value for early PMI removal" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Make extra principal payments to reach 20% equity faster" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Optimize Your Mortgage:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Shop multiple lenders for best rates" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Improve credit score before applying" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consider different loan terms (15 vs 30 years)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Understand points vs. no-points options" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Factor in closing costs and fees" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Regional Considerations:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Housing costs vary dramatically across the United States. High-cost areas like California, New York, and Massachusetts often have higher property values, insurance costs, and property taxes. Conversely, states like Texas, Tennessee, and Florida may offer lower overall housing costs but with varying tax structures. Research local market conditions and cost factors specific to your target area." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "First-Time Buyer Programs:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Many states and localities offer first-time homebuyer programs with benefits like down payment assistance, reduced interest rates, or PMI alternatives. FHA loans require only 3.5% down, VA loans offer 0% down for eligible veterans, and USDA loans provide 0% down options for rural properties. Research available programs in your area to maximize your purchasing power." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Affordability Guidelines and Best Practices" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "The 28/36 Rule:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Most lenders follow the 28/36 rule: your total housing payment (PITI+PMI) should not exceed 28% of your gross monthly income, and your total debt payments should not exceed 36% of gross monthly income. However, some loan programs allow higher ratios with compensating factors like high credit scores or significant assets." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Example Affordability Calculation:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Gross Monthly Income: $8,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Maximum Housing Payment (28%): $2,240" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Maximum Total Debt (36%): $2,880" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Available for Other Debts: $640" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Beyond the Calculator:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Emergency Fund:" }),
                  " Maintain 3-6 months of expenses for homeownership emergencies"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Maintenance Costs:" }),
                  " Budget 1-3% of home value annually for repairs and maintenance"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Utilities:" }),
                  " Factor in electricity, gas, water, internet, and other monthly services"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "HOA Fees:" }),
                  " If applicable, homeowners association fees can range from $50-500+ monthly"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Moving Costs:" }),
                  " Budget for professional movers, deposits, and immediate home needs"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mt-6 mb-3", children: "Long-term Financial Planning:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Consider your mortgage within your broader financial picture. Factor in retirement savings goals, children's education costs, and career trajectory. A more conservative approach might target 25% or less of income for housing, allowing more flexibility for other financial goals and unexpected life changes." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Frequently Asked Questions" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How accurate is this mortgage calculator?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our calculator provides comprehensive estimates including PMI, property taxes, and insurance. However, actual payments may vary based on lender-specific fees, exact tax rates, insurance quotes, and loan terms. Use this as a starting point and get pre-qualified with lenders for precise figures." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "When can I remove PMI from my mortgage?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "PMI can typically be removed when you reach 20% equity in your home. You can request removal at 20% equity or it's automatically removed at 22% equity. Equity builds through monthly payments and home value appreciation. Some loans have different PMI removal rules." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How do property taxes affect my mortgage payment?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Most lenders require property taxes to be escrowed with your mortgage payment. The lender collects 1/12th of annual taxes monthly and pays them when due. Tax rates vary by location and can change annually based on local assessments and budget needs." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Should I put down 20% to avoid PMI?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While 20% down eliminates PMI, it's not always the best choice. Consider opportunity costs of tying up cash, current interest rates, PMI costs, and your overall financial situation. Sometimes keeping cash for investments or emergencies while paying PMI temporarily makes sense." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What's included in escrow besides property taxes?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Escrow typically includes property taxes and homeowners insurance. Some areas may also escrow flood insurance, special assessments, or HOA fees. Your lender analyzes these annually and adjusts your payment if escrow balances are too high or low." })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator provides estimates only and should not be relied upon for final financial decisions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Actual payments will vary based on lender fees, exact tax rates, insurance costs, and specific loan terms." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• PMI rates and removal criteria vary by lender and loan type - confirm details with your lender." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Property tax rates are estimates - check with local tax authorities for exact rates." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Insurance costs vary by location, home features, and coverage levels - get actual quotes." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Interest rates change daily and vary based on credit score, down payment, and other factors." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Consider additional costs like HOA fees, utilities, maintenance, and closing costs." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Consult with qualified mortgage professionals and financial advisors for personalized guidance." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator is designed for US conventional mortgage loans and may not apply to all loan types." })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RelatedCalculators, { currentCalculatorId: "mortgage" })
      ] })
    }
  );
}
export {
  MortgageCalculatorUS
};
