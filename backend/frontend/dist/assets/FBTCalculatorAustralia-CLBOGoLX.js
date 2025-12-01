import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a4 as Label, V as Input, B as Button, C as Calculator, T as TrendingUp, aE as formatCurrency, a5 as Info } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { S as Separator } from "./separator-63Q9JacM.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { A as AIAnalysis } from "./AIAnalysis-B-4zh-eH.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { C as Car } from "./car-DUL12XTS.js";
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
const FBTCalculatorAustralia = () => {
  const [benefitType, setBenefitType] = reactExports.useState("");
  const [carValue, setCarValue] = reactExports.useState("");
  const [businessUse, setBusinessUse] = reactExports.useState("");
  const [employeeContribution, setEmployeeContribution] = reactExports.useState("");
  const [daysAvailable, setDaysAvailable] = reactExports.useState("365");
  const [annualSalary, setAnnualSalary] = reactExports.useState("");
  const [results, setResults] = reactExports.useState(null);
  const calculateFBT = () => {
    const value = parseFloat(carValue);
    const business = parseFloat(businessUse) / 100;
    const contribution = parseFloat(employeeContribution) || 0;
    const days = parseFloat(daysAvailable);
    if (!value || business === void 0 || !days) return;
    let fbtValue = 0;
    let fbtRate = 0.47;
    let statutoryRate = 0;
    if (benefitType === "car") {
      statutoryRate = 0.2;
      if (business < 0.25) statutoryRate = 0.2;
      else if (business < 0.5) statutoryRate = 0.15;
      else if (business < 0.75) statutoryRate = 0.1;
      else statutoryRate = 0.075;
      const baseTaxableValue = value * statutoryRate * (days / 365);
      const netTaxableValue = Math.max(0, baseTaxableValue - contribution);
      fbtValue = netTaxableValue;
    } else if (benefitType === "expense") {
      fbtValue = Math.max(0, value - contribution);
    } else if (benefitType === "property") {
      fbtValue = Math.max(0, value - contribution);
    }
    const grossedUpValue = fbtValue * 2.0802;
    const fbtLiability = grossedUpValue * fbtRate;
    const employeeIncomeTaxEquivalent = fbtValue;
    const totalEmployeeBenefit = fbtValue;
    const totalCostToEmployer = value + fbtLiability;
    const incomeTaxSavings = fbtValue * 0.325;
    setResults({
      fbtValue,
      grossedUpValue,
      fbtLiability,
      statutoryRate: benefitType === "car" ? statutoryRate * 100 : 0,
      grossUpRate: 2.0802,
      employeeIncomeTaxEquivalent,
      totalCostToEmployer,
      totalEmployeeBenefit,
      incomeTaxSavings,
      effectiveTaxRate: value > 0 ? fbtLiability / value * 100 : 0,
      netBenefitToEmployee: totalEmployeeBenefit - totalEmployeeBenefit * 0.47,
      fbtYearStart: "1 April 2024",
      fbtYearEnd: "31 March 2025"
    });
  };
  const reset = () => {
    setBenefitType("");
    setCarValue("");
    setBusinessUse("");
    setEmployeeContribution("");
    setDaysAvailable("365");
    setAnnualSalary("");
    setResults(null);
  };
  const tips = [
    "FBT rate is 47% for FY 2024-25 on grossed-up taxable value",
    "Car fringe benefits use statutory formula or operating cost method",
    "Employee contributions reduce the taxable value of benefits",
    "Some benefits like work-related items may be FBT-exempt",
    "Salary packaging can provide tax advantages when structured correctly"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Australia Fringe Benefits Tax Calculator | FBT Calculator 2024-25",
      description: "Comprehensive Australian Fringe Benefits Tax calculator for car benefits, expense payments, and salary packaging. Calculate FBT liability, gross-up amounts, and total employment costs.",
      keywords: "Australia FBT calculator, fringe benefits tax, car fringe benefit, salary packaging, FBT rate 2024, employee benefits tax, novated lease FBT",
      tips,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "h-5 w-5" }),
                "FBT Calculator"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Calculate fringe benefits tax liability for various employee benefits" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "benefitType", children: "Benefit Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: benefitType, onValueChange: setBenefitType, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select benefit type" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "car", children: "Car Fringe Benefit" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "expense", children: "Expense Payment Benefit" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "property", children: "Property Fringe Benefit" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "carValue", children: benefitType === "car" ? "Car Value ($)" : benefitType === "expense" ? "Expense Amount ($)" : "Benefit Value ($)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "carValue",
                    type: "number",
                    placeholder: "Enter benefit value",
                    value: carValue,
                    onChange: (e) => setCarValue(e.target.value)
                  }
                )
              ] }),
              benefitType === "car" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "businessUse", children: "Business Use (%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "businessUse",
                      type: "number",
                      placeholder: "Percentage business use",
                      value: businessUse,
                      onChange: (e) => setBusinessUse(e.target.value),
                      min: "0",
                      max: "100"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "daysAvailable", children: "Days Available per Year" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "daysAvailable",
                      type: "number",
                      placeholder: "Days car available",
                      value: daysAvailable,
                      onChange: (e) => setDaysAvailable(e.target.value),
                      max: "365"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "employeeContribution", children: "Employee Contribution ($)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "employeeContribution",
                    type: "number",
                    placeholder: "Employee's contribution",
                    value: employeeContribution,
                    onChange: (e) => setEmployeeContribution(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "annualSalary", children: "Annual Salary ($ - Optional)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "annualSalary",
                    type: "number",
                    placeholder: "For context analysis",
                    value: annualSalary,
                    onChange: (e) => setAnnualSalary(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateFBT, className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "mr-2 h-4 w-4" }),
                  "Calculate FBT"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: reset, variant: "outline", children: "Reset" })
              ] })
            ] })
          ] }),
          results && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
              "FBT Calculation Results"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Taxable Value" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: formatCurrency(results.fbtValue, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Grossed-Up Value" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-blue-600", children: formatCurrency(results.grossedUpValue, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "FBT Liability" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-red-600", children: formatCurrency(results.fbtLiability, "AUD") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total Cost to Employer" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-orange-600", children: formatCurrency(results.totalCostToEmployer, "AUD") })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "FBT Details" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "FBT Rate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "47%" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Gross-up Rate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: "2.0802" })
                  ] }),
                  results.statutoryRate > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Statutory Rate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                      results.statutoryRate.toFixed(1),
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Effective Tax Rate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "destructive", children: [
                      results.effectiveTaxRate.toFixed(1),
                      "%"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-50 p-3 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium", children: [
                "FBT Year: ",
                results.fbtYearStart,
                " to ",
                results.fbtYearEnd
              ] }) })
            ] })
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AIAnalysis,
            {
              analysisRequest: {
                calculatorType: "fbt-calculator-australia",
                data: {
                  benefitValue: parseFloat(carValue) || 0,
                  fbtRate: 0.47,
                  fbtLiability: results.fbtLiability,
                  grossUpValue: results.grossedUpValue,
                  effectiveRate: results.effectiveTaxRate
                }
              },
              autoRun: true,
              title: "AI FBT Analysis & Optimization",
              description: "Get personalized strategies to optimize your fringe benefits tax position and employee remuneration packages."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExportShareButtons,
            {
              calculatorType: "fbt-calculator-australia",
              inputs: {
                carValue: parseFloat(carValue) || 0,
                businessUse: parseFloat(businessUse) || 0,
                daysAvailable: parseFloat(daysAvailable) || 365
              },
              results: {
                fbtLiability: results.fbtLiability,
                grossedUpValue: results.grossedUpValue,
                effectiveTaxRate: results.effectiveTaxRate,
                employerCost: results.employerCost
              },
              title: "FBT Calculator Australia Report",
              className: "mt-6"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Complete Guide to Australian Fringe Benefits Tax (FBT)" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Fringe Benefits Tax (FBT) is a crucial component of Australia's tax system that affects millions of employees and employers across the country. Unlike income tax, FBT is paid by employers on certain benefits provided to employees in addition to their salary or wages. Understanding FBT is essential for businesses designing competitive remuneration packages and employees evaluating the true value of their total compensation package, including popular arrangements like novated leases and salary packaging." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "What is Fringe Benefits Tax?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "FBT is a tax imposed on employers who provide fringe benefits to their employees or their employees' family members. The tax operates on a different financial year (1 April to 31 March) compared to income tax and is charged at a flat rate of 47% on the grossed-up taxable value of benefits. This rate includes the Medicare levy and is designed to ensure that providing benefits in lieu of salary doesn't result in tax advantages that would undermine the income tax system." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Types of Fringe Benefits" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Fringe benefits encompass a wide range of non-cash benefits including company cars, car parking, expense reimbursements, low-interest loans, entertainment, property benefits, and residual benefits. The most common fringe benefit in Australia is the car fringe benefit, which includes company-provided vehicles available for private use. Other significant benefits include expense payment fringe benefits (where employers pay for employee expenses) and property fringe benefits (such as providing accommodation or goods)." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Car Fringe Benefits: The Statutory Formula Method" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Car fringe benefits are calculated using either the statutory formula method or the operating cost method. The statutory formula method is more common and simpler to administer, calculating the taxable value based on the car's base value and a statutory percentage that varies with business use. For cars purchased after 10 May 2011, the rates are: 20% for less than 25% business use, 15% for 25-49% business use, 10% for 50-74% business use, and 7.5% for 75% or more business use." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-lg mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Car Fringe Benefit Example:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Car Value: $45,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Business Use: 60% (statutory rate 10%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Days Available: 365" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Employee Contribution: $2,000" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Taxable Value: $45,000 × 10% - $2,000 = $2,500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Grossed-up Value: $2,500 × 2.0802 = $5,201" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• FBT Liability: $5,201 × 47% = $2,444" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Gross-up Rates and Tax Calculation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "FBT uses a gross-up mechanism to account for the income tax that would have been paid if cash salary was provided instead of the benefit. Type 1 fringe benefits (where the employer can claim GST credits) use a gross-up rate of 2.0802, while Type 2 benefits use 1.8868. This ensures the FBT liability represents the true economic cost of providing the benefit rather than just the benefit's face value." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Employee Contributions and Salary Packaging" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Employee contributions can significantly reduce FBT liability by reducing the taxable value of benefits. These contributions can be made through post-tax dollars or, more commonly, through salary sacrifice arrangements. Salary packaging allows employees to redirect part of their gross salary toward fringe benefits, potentially providing tax advantages. Popular salary packaging items include motor vehicles through novated leases, superannuation contributions, and expense payment benefits for work-related items." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mt-6 mb-4", children: "Novated Leases and Motor Vehicle Benefits" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Novated leases represent one of the most popular salary packaging arrangements in Australia. Under a novated lease, an employee leases a vehicle through their employer, with lease payments deducted from pre-tax salary. This arrangement can provide tax benefits through reduced taxable income, though FBT still applies to the benefit. The total tax outcome depends on the employee's marginal tax rate, the FBT liability, and the specific terms of the arrangement." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "FBT Compliance and Strategic Planning" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "FBT Registration and Lodgment Requirements" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Employers must register for FBT if they provide fringe benefits and their notional taxable value exceeds $300 in an FBT year. FBT returns must be lodged by 21 May following the end of the FBT year (or later if using a tax agent). The FBT liability is payable in quarterly installments for larger employers or annually for smaller employers. Proper registration and compliance are essential to avoid penalties and interest charges." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Record Keeping Requirements" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "FBT compliance requires meticulous record keeping, particularly for car benefits where business use must be substantiated. Employers must maintain logbooks for car benefits, receipts for expense payments, and documentation supporting benefit valuations. Records must be kept for five years after the relevant FBT return is lodged. Electronic record keeping is acceptable and often more practical for ongoing compliance." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "FBT Exemptions and Concessions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Several benefits are exempt from FBT or qualify for reduced rates. Work-related items such as laptops, mobile phones, and protective clothing may be exempt if they're primarily for work use. Car parking benefits under $8.77 per day (2024 rates) are exempt. Public hospitals and charitable institutions may qualify for FBT concessions, significantly reducing their FBT liability on certain benefits." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Common FBT-Exempt Benefits:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Work-related items (computers, mobile phones, tools)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Minor benefits under $300 (occasional gifts, functions)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Car parking under the daily threshold" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Taxi travel for work purposes" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Protective clothing and uniforms" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Training and education directly related to work" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Relocation benefits in certain circumstances" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Strategic FBT Planning" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Effective FBT planning involves structuring remuneration packages to minimize total tax costs while maximizing employee benefits. This might include timing benefit provision to optimize FBT years, maximizing exempt benefits, structuring employee contributions effectively, and considering alternative remuneration structures. Professional advice is often valuable given the complexity of FBT rules and their interaction with income tax provisions." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "FBT and Superannuation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Superannuation contributions made by employers generally don't attract FBT, making them a tax-effective form of remuneration. However, contributions above the concessional cap may trigger additional tax obligations. Salary sacrifice superannuation arrangements allow employees to boost their retirement savings while potentially reducing their overall tax burden." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-800 text-lg mb-4", children: "Impact on Employees" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While FBT is paid by employers, it affects employees through the total cost of their employment package. High FBT costs may limit an employer's ability to provide certain benefits or increase base salaries. Employees should understand how FBT affects their total remuneration package value and consider whether salary packaging arrangements provide genuine after-tax benefits." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Frequently Asked Questions" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What is the current FBT rate for 2024-25?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The FBT rate for 2024-25 is 47%, which includes the Medicare levy. This rate applies to the grossed-up taxable value of fringe benefits after employee contributions are deducted." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How do I know if my benefit is Type 1 or Type 2?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Type 1 benefits are those where the employer can claim GST credits (like car benefits and most expense payments). Type 2 benefits are those where GST credits aren't available (like loan benefits). Type 1 benefits use a gross-up rate of 2.0802, while Type 2 use 1.8868." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Can I reduce FBT by making employee contributions?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Yes, employee contributions directly reduce the taxable value of fringe benefits. These can be made through post-tax cash payments or salary sacrifice arrangements. The contribution amount is deducted from the benefit value before calculating FBT." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "What records do I need to keep for car benefits?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For car benefits, maintain a logbook showing business vs private use, records of all expenses if using the operating cost method, and documentation of employee contributions. Records must be kept for five years after lodging the relevant FBT return." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Are all company cars subject to FBT?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "FBT only applies to cars available for private use by employees. Work-only vehicles (like utility trucks restricted to business use) generally don't attract FBT. The key test is whether the vehicle is available for private use, not whether it's actually used privately." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "How does FBT interact with salary sacrifice arrangements?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Salary sacrifice can provide tax benefits by reducing taxable income, but FBT still applies to the benefits provided. The total tax outcome depends on the employee's marginal tax rate versus the effective FBT cost. Professional advice is recommended for complex arrangements." })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator provides estimates only and should not be relied upon for final FBT compliance decisions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• FBT laws are complex and subject to change - current rates apply to FBT year 1 April 2024 to 31 March 2025." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Individual circumstances may significantly affect FBT calculations and eligibility for exemptions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Car benefit calculations use simplified statutory formula - operating cost method may provide different results." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Actual FBT liability depends on proper record keeping and compliance with ATO requirements." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• This calculator doesn't cover all benefit types or exemptions available under FBT legislation." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Professional tax and legal advice is recommended for significant FBT arrangements or compliance issues." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• The Australian Taxation Office is the authoritative source for current FBT law and interpretations." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Results are estimates only and actual FBT outcomes may vary significantly from calculations shown." })
          ] }) })
        ] })
      ] })
    }
  );
};
export {
  FBTCalculatorAustralia as default
};
