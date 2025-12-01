import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a4 as Label, V as Input, B as Button, C as Calculator, T as TrendingUp, aE as formatCurrency, a5 as Info } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { S as Separator } from "./separator-63Q9JacM.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { A as AIAnalysis } from "./AIAnalysis-B-4zh-eH.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { B as Building } from "./building-C7va4eDd.js";
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
const BTLMortgageCalculatorUK = () => {
  const [propertyValue, setPropertyValue] = reactExports.useState("");
  const [deposit, setDeposit] = reactExports.useState("");
  const [interestRate, setInterestRate] = reactExports.useState("");
  const [mortgageTerm, setMortgageTerm] = reactExports.useState("25");
  const [monthlyRent, setMonthlyRent] = reactExports.useState("");
  const [monthlyExpenses, setMonthlyExpenses] = reactExports.useState("");
  const [taxRate, setTaxRate] = reactExports.useState("20");
  const [results, setResults] = reactExports.useState(null);
  const calculateBTL = () => {
    const propValue = parseFloat(propertyValue);
    const depositAmount = parseFloat(deposit);
    const rate = parseFloat(interestRate) / 100;
    const termYears = parseFloat(mortgageTerm);
    const rent = parseFloat(monthlyRent);
    const expenses = parseFloat(monthlyExpenses) || 0;
    const tax = parseFloat(taxRate) / 100;
    if (!propValue || !depositAmount || !rate || !termYears || !rent) return;
    const loanAmount = propValue - depositAmount;
    const monthlyRate = rate / 12;
    const totalPayments = termYears * 12;
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    const grossRentalIncome = rent * 12;
    const totalAnnualExpenses = expenses * 12 + monthlyPayment * 12;
    const netRentalIncome = grossRentalIncome - totalAnnualExpenses;
    const annualInterest = loanAmount * rate;
    const taxableProfit = Math.max(0, grossRentalIncome - expenses * 12 - annualInterest);
    const taxLiability = taxableProfit * tax;
    const netIncomeAfterTax = netRentalIncome - taxLiability;
    const grossYield = grossRentalIncome / propValue * 100;
    const netYield = netIncomeAfterTax / propValue * 100;
    const cashOnCashReturn = netIncomeAfterTax / depositAmount * 100;
    const ltv = loanAmount / propValue * 100;
    const rentCover = rent / monthlyPayment;
    const stressRate = 0.055 / 12;
    const stressPayment = loanAmount * (stressRate * Math.pow(1 + stressRate, totalPayments)) / (Math.pow(1 + stressRate, totalPayments) - 1);
    const stressRentCover = rent / stressPayment;
    const stampDuty = calculateStampDutyBTL(propValue);
    const totalUpfrontCosts = depositAmount + stampDuty + 5e3;
    setResults({
      loanAmount,
      monthlyPayment,
      grossYield,
      netYield,
      cashOnCashReturn,
      ltv,
      rentCover,
      stressRentCover,
      netIncomeAfterTax,
      monthlyNetIncome: netIncomeAfterTax / 12,
      totalUpfrontCosts,
      stampDuty,
      taxLiability
    });
  };
  const calculateStampDutyBTL = (value) => {
    let stampDuty = 0;
    if (value <= 25e4) {
      stampDuty = value * 0.03;
    } else if (value <= 925e3) {
      stampDuty = 25e4 * 0.03 + (value - 25e4) * 0.08;
    } else if (value <= 15e5) {
      stampDuty = 25e4 * 0.03 + (925e3 - 25e4) * 0.08 + (value - 925e3) * 0.13;
    } else {
      stampDuty = 25e4 * 0.03 + (925e3 - 25e4) * 0.08 + (15e5 - 925e3) * 0.13 + (value - 15e5) * 0.15;
    }
    return stampDuty;
  };
  const reset = () => {
    setPropertyValue("");
    setDeposit("");
    setInterestRate("");
    setMortgageTerm("25");
    setMonthlyRent("");
    setMonthlyExpenses("");
    setTaxRate("20");
    setResults(null);
  };
  const tips = [
    "BTL mortgages typically require 25% minimum deposit",
    "Rental income should cover 125-145% of mortgage payments",
    "Consider additional costs: management fees, void periods, maintenance",
    "BTL properties attract 3% stamp duty surcharge",
    "Rental income is subject to income tax - consider tax efficiency"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "UK Buy-to-Let Mortgage Calculator",
      description: "Calculate buy-to-let mortgage payments, yields, and rental returns for UK property investment",
      keywords: "UK buy to let calculator, BTL mortgage calculator, rental yield calculator, property investment UK",
      tips,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "h-5 w-5" }),
                "BTL Mortgage Calculator"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Calculate buy-to-let investment returns and cash flow" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "propertyValue", children: "Property Value (£)" }),
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
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "deposit", children: "Deposit (£)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "deposit",
                    type: "number",
                    placeholder: "Enter deposit amount",
                    value: deposit,
                    onChange: (e) => setDeposit(e.target.value)
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "mortgageTerm", children: "Term (Years)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "mortgageTerm",
                      type: "number",
                      placeholder: "Enter term",
                      value: mortgageTerm,
                      onChange: (e) => setMortgageTerm(e.target.value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "monthlyRent", children: "Monthly Rent (£)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "monthlyRent",
                    type: "number",
                    placeholder: "Enter monthly rent",
                    value: monthlyRent,
                    onChange: (e) => setMonthlyRent(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "monthlyExpenses", children: "Monthly Expenses (£)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "monthlyExpenses",
                    type: "number",
                    placeholder: "Management, insurance, maintenance",
                    value: monthlyExpenses,
                    onChange: (e) => setMonthlyExpenses(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "taxRate", children: "Tax Rate (%)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: taxRate, onValueChange: setTaxRate, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select tax rate" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "20", children: "Basic Rate (20%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "40", children: "Higher Rate (40%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "45", children: "Additional Rate (45%)" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateBTL, className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "mr-2 h-4 w-4" }),
                  "Calculate"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: reset, variant: "outline", children: "Reset" })
              ] })
            ] })
          ] }),
          results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
                "BTL Analysis"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Monthly Payment" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-red-600", children: formatCurrency(results.monthlyPayment, "GBP") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Monthly Net Income" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-green-600", children: formatCurrency(results.monthlyNetIncome, "GBP") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Gross Yield" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-semibold", children: [
                      results.grossYield.toFixed(2),
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Net Yield" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-semibold text-blue-600", children: [
                      results.netYield.toFixed(2),
                      "%"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Investment Metrics" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "LTV" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                        results.ltv.toFixed(1),
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Rent Cover" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: results.rentCover >= 1.25 ? "default" : "destructive", children: [
                        results.rentCover.toFixed(2),
                        "x"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Cash-on-Cash Return" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
                        results.cashOnCashReturn.toFixed(2),
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Stress Test (5.5%)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: results.stressRentCover >= 1.25 ? "default" : "destructive", children: [
                        results.stressRentCover.toFixed(2),
                        "x"
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Upfront Costs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Deposit:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatCurrency(parseFloat(deposit), "GBP") })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Stamp Duty:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatCurrency(results.stampDuty, "GBP") })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-medium", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Upfront:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatCurrency(results.totalUpfrontCosts, "GBP") })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AIAnalysis,
              {
                analysisRequest: {
                  calculatorType: "btl-mortgage-uk",
                  data: {
                    propertyValue: parseFloat(propertyValue) || 0,
                    loanAmount: results.loanAmount,
                    interestRate: parseFloat(interestRate) || 0,
                    loanTerm: parseFloat(mortgageTerm) || 25,
                    monthlyRent: parseFloat(monthlyRent) || 0,
                    monthlyPayment: results.monthlyPayment,
                    rentalYield: results.grossYield,
                    ltvRatio: results.ltv,
                    monthlyCashFlow: results.monthlyNetIncome
                  }
                },
                autoRun: true,
                title: "AI BTL Investment Analysis",
                description: "Get personalized recommendations for your buy-to-let investment strategy, including yield optimization and risk factors."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ExportShareButtons,
              {
                calculatorType: "btl-mortgage-uk",
                inputs: {
                  propertyValue: parseFloat(propertyValue) || 0,
                  deposit: parseFloat(deposit) || 0,
                  interestRate: parseFloat(interestRate) || 0,
                  mortgageTerm: parseFloat(mortgageTerm) || 25,
                  monthlyRent: parseFloat(monthlyRent) || 0
                },
                results: {
                  monthlyPayment: results.monthlyPayment,
                  grossYield: results.grossYield,
                  netYield: results.netYield,
                  monthlyNetIncome: results.monthlyNetIncome,
                  ltv: results.ltv
                },
                title: "BTL Mortgage Calculator UK Report"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5" }),
            "Understanding UK Buy-to-Let Property Investment"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Buy-to-let property investment in the UK has evolved into a sophisticated asset class requiring careful analysis of yields, tax implications, and market dynamics. While property remains a cornerstone of UK wealth building, recent regulatory changes and tax reforms have fundamentally altered the investment landscape, making thorough financial analysis essential for successful property investment strategies." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "The Current Buy-to-Let Landscape" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Today's buy-to-let market operates in a heavily regulated environment with specific lending criteria, tax treatments, and regulatory requirements. Lenders typically require 20-25% deposits for BTL mortgages, with interest rates generally higher than residential mortgages. The rental income must typically cover 125-145% of mortgage payments at a stressed interest rate, ensuring adequate cash flow even during challenging periods." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Section 24 Tax Changes: The Game Changer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The introduction of Section 24 tax rules fundamentally changed BTL profitability by restricting mortgage interest tax relief. Previously, landlords could deduct all mortgage interest from rental income before calculating tax. Now, interest relief is limited to a basic rate tax credit, meaning higher-rate taxpayers face significantly increased tax liabilities. This change particularly impacts highly leveraged properties and higher-rate taxpayer landlords." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Stamp Duty Surcharge and Capital Costs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "BTL investors face a 3% stamp duty surcharge on top of standard rates, significantly increasing upfront costs. For a £300,000 property, this surcharge alone costs £9,000, requiring careful consideration in investment calculations. Combined with legal fees, surveys, and potential refurbishment costs, total upfront expenses often reach 30-35% of property value, affecting overall returns and cash requirements." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Yield Calculations and Investment Metrics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Successful BTL investment requires understanding multiple yield calculations. Gross yield measures annual rent as a percentage of property value, providing basic return comparisons. Net yield accounts for all expenses including mortgage payments, management fees, insurance, and maintenance, offering realistic income expectations. Cash-on-cash return measures annual net income against initial cash invested, helping evaluate capital efficiency." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Rental Coverage and Stress Testing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lenders require rental income to cover mortgage payments by specific multiples, typically 125-145% of monthly payments calculated at stressed interest rates around 5.5-6%. This stress testing ensures properties remain viable during interest rate rises or rental voids. Properties failing stress tests may require larger deposits or different financing structures, impacting overall investment viability and returns." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Property Management and Ongoing Costs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Successful BTL investment requires realistic budgeting for ongoing costs beyond mortgage payments. Professional management typically costs 8-12% of rental income, while maintenance, insurance, and periodic refurbishment add further expenses. Void periods between tenants, potential rent arrears, and regulatory compliance costs must all factor into investment planning and yield calculations." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Location Analysis and Market Dynamics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Property location fundamentally determines rental demand, yield potential, and capital growth prospects. Areas with strong employment, transport links, and local amenities typically offer better rental security and tenant demand. Student areas might offer higher yields but increased management complexity, while professional areas provide stability but potentially lower returns. Understanding local rental markets is crucial for investment success." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Financing Structures and Portfolio Building" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "BTL financing offers various structures from simple buy-to-let mortgages to complex limited company arrangements. Limited company ownership can provide tax advantages for higher-rate taxpayers, allowing full mortgage interest deductibility and corporation tax rates on profits. However, company structures involve additional costs and complexity, requiring careful analysis of individual circumstances and long-term investment goals." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Exit Strategies and Capital Gains" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Successful BTL investment requires clear exit strategy planning, considering both capital gains tax implications and market timing. Capital gains tax applies to investment property sales, with rates depending on total income and gains. Private residence relief doesn't apply to BTL properties, making tax planning essential for portfolio optimization. Market cycles affect optimal exit timing, requiring flexibility in investment strategies." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Regulatory Environment and Future Considerations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The BTL sector faces ongoing regulatory evolution including energy efficiency requirements, selective licensing schemes, and potential rent controls. Properties must meet minimum energy ratings, requiring investment in improvements or restrictions on letting. Understanding current and proposed regulations helps investors prepare for compliance costs and operational changes that might affect investment viability and returns." })
          ] })
        ] })
      ]
    }
  );
};
export {
  BTLMortgageCalculatorUK as default
};
