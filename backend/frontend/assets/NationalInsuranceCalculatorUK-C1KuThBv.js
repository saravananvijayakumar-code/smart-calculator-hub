import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, a2 as FileText, i as CardDescription, k as CardContent, a3 as Label, U as Input, B as Button, C as Calculator, T as TrendingUp, aD as formatCurrency, a4 as Info } from "./index-C_OXA6OQ.js";
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
const NationalInsuranceCalculatorUK = () => {
  const [salary, setSalary] = reactExports.useState("");
  const [payFrequency, setPayFrequency] = reactExports.useState("annual");
  const [employmentType, setEmploymentType] = reactExports.useState("employed");
  const [age, setAge] = reactExports.useState("");
  const [results, setResults] = reactExports.useState(null);
  const calculateNI = () => {
    const grossSalary = parseFloat(salary);
    const workerAge = parseInt(age) || 25;
    if (!grossSalary) return;
    let annualSalary = grossSalary;
    if (payFrequency === "monthly") {
      annualSalary = grossSalary * 12;
    } else if (payFrequency === "weekly") {
      annualSalary = grossSalary * 52;
    }
    const primaryThreshold = 12570;
    const upperEarningsLimit = 50270;
    let employeeNI = 0;
    let employerNI = 0;
    if (employmentType === "employed") {
      if (annualSalary > primaryThreshold) {
        const niableEarnings = Math.min(annualSalary - primaryThreshold, upperEarningsLimit - primaryThreshold);
        employeeNI = niableEarnings * 0.12;
        if (annualSalary > upperEarningsLimit) {
          employeeNI += (annualSalary - upperEarningsLimit) * 0.02;
        }
      }
      if (annualSalary > primaryThreshold) {
        employerNI = (annualSalary - primaryThreshold) * 0.138;
      }
      if (workerAge >= 66) {
        employeeNI = 0;
      }
    } else {
      const class2Threshold = 6515;
      const class4LowerLimit = 12570;
      const class4UpperLimit = 50270;
      let class2NI = 0;
      if (annualSalary >= class2Threshold) {
        class2NI = 3.45 * 52;
      }
      let class4NI = 0;
      if (annualSalary > class4LowerLimit) {
        const class4Earnings = Math.min(annualSalary - class4LowerLimit, class4UpperLimit - class4LowerLimit);
        class4NI = class4Earnings * 0.09;
        if (annualSalary > class4UpperLimit) {
          class4NI += (annualSalary - class4UpperLimit) * 0.02;
        }
      }
      employeeNI = class2NI + class4NI;
    }
    const netSalary = annualSalary - employeeNI;
    const totalEmployerCost = annualSalary + employerNI;
    const effectiveEmployeeRate = employeeNI / annualSalary * 100;
    const effectiveEmployerRate = employerNI / annualSalary * 100;
    const monthlyGross = annualSalary / 12;
    const monthlyNI = employeeNI / 12;
    const monthlyNet = netSalary / 12;
    setResults({
      annualSalary,
      employeeNI,
      employerNI,
      netSalary,
      totalEmployerCost,
      effectiveEmployeeRate,
      effectiveEmployerRate,
      monthlyGross,
      monthlyNI,
      monthlyNet
    });
  };
  const reset = () => {
    setSalary("");
    setPayFrequency("annual");
    setEmploymentType("employed");
    setAge("");
    setResults(null);
  };
  const tips = [
    "Class 1 NI: 12% on earnings between £12,570-£50,270, 2% above",
    "Class 2 NI: £3.45/week for self-employed earning over £6,515",
    "Class 4 NI: 9% on profits between £12,570-£50,270, 2% above",
    "No NI contributions payable after state pension age",
    "Building NI record is important for state pension entitlement"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CalculatorLayoutWithAds,
    {
      title: "UK National Insurance Calculator 2025-26",
      description: "Calculate National Insurance contributions for employees and self-employed individuals in the UK for 2025-26 tax year",
      keywords: "UK National Insurance calculator 2025, NI contributions, Class 1 NI, Class 2 NI, Class 4 NI, 2025-26 tax year",
      tips,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5" }),
                "National Insurance Calculator"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Calculate your National Insurance contributions for 2025-26" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "salary", children: "Salary/Income (£)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "salary",
                    type: "number",
                    placeholder: "Enter your salary",
                    value: salary,
                    onChange: (e) => setSalary(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "payFrequency", children: "Pay Frequency" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: payFrequency, onValueChange: setPayFrequency, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select frequency" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "annual", children: "Annual" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "monthly", children: "Monthly" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "weekly", children: "Weekly" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "employmentType", children: "Employment Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: employmentType, onValueChange: setEmploymentType, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select employment type" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "employed", children: "Employed" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "self-employed", children: "Self-Employed" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "age", children: "Age" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "age",
                    type: "number",
                    placeholder: "Enter your age",
                    value: age,
                    onChange: (e) => setAge(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateNI, className: "flex-1", children: [
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
              "National Insurance Breakdown"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Annual Gross" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: formatCurrency(results.annualSalary, "GBP") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Employee NI" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-red-600", children: formatCurrency(results.employeeNI, "GBP") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Annual Net" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-green-600", children: formatCurrency(results.netSalary, "GBP") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Employer NI" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-orange-600", children: formatCurrency(results.employerNI, "GBP") })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Monthly Breakdown" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Gross" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: formatCurrency(results.monthlyGross, "GBP") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "NI" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: formatCurrency(results.monthlyNI, "GBP") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Net" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: formatCurrency(results.monthlyNet, "GBP") })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                  "Employee Rate: ",
                  results.effectiveEmployeeRate.toFixed(2),
                  "%"
                ] }),
                employmentType === "employed" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
                  "Employer Rate: ",
                  results.effectiveEmployerRate.toFixed(2),
                  "%"
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5" }),
            "Understanding UK National Insurance Contributions"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "National Insurance (NI) represents a fundamental component of the UK's social security system, funding crucial services including the NHS, state pensions, and unemployment benefits. Understanding how National Insurance works is essential for all UK workers, whether employed or self-employed, as these contributions directly impact both current take-home pay and future benefit entitlements." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "The Structure of National Insurance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "National Insurance operates through a class-based system, with different classes applying to various employment situations. Class 1 contributions affect employed earners and their employers, representing the most common form of NI. Class 2 and Class 4 contributions apply to self-employed individuals, with different rates and thresholds reflecting the distinct nature of self-employment income and benefit entitlements." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Class 1 Contributions: Employed Workers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For employed workers, National Insurance contributions begin once earnings exceed the Primary Threshold, currently aligned with the personal income tax allowance at £12,570 annually. The standard rate of 12% applies to earnings between the Primary Threshold and Upper Earnings Limit (£50,270), with a reduced rate of 2% on earnings above this level. This progressive structure ensures higher earners contribute proportionally more while maintaining work incentives." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Employer Contributions: The Hidden Cost" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Employers pay National Insurance contributions at 13.8% on employee earnings above the Primary Threshold, with no upper limit. These employer contributions represent a significant hidden cost of employment, effectively increasing the true cost of each employee by substantial amounts. Understanding employer NI helps explain why salary negotiations often involve complex calculations beyond basic pay figures." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Self-Employment: Class 2 and Class 4 Contributions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Self-employed individuals face a dual National Insurance structure through Class 2 and Class 4 contributions. Class 2 provides a flat weekly rate for profits above £6,515 annually, securing basic benefit entitlements including state pension credits. Class 4 operates as a percentage of profits above £12,570, currently at 9% up to £50,270 and 2% thereafter, reflecting the additional business income flexibility self-employed individuals enjoy." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Age-Related Considerations and State Pension" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "National Insurance contributions cease for employees reaching state pension age, currently 66 and gradually rising. This creates immediate take-home pay increases for older workers, though employer contributions continue regardless of employee age. The connection between NI contributions and state pension entitlement makes understanding contribution history crucial for retirement planning and benefit maximization." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Benefit Entitlements and Contribution Records" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "National Insurance contributions directly determine eligibility for various state benefits, including state pension, unemployment benefits, and statutory sick pay. A complete contribution record typically requires 35 years of qualifying contributions for full state pension entitlement, though partial pensions may be available with fewer years. Monitoring your NI record through government services ensures future benefit security." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Recent Changes and Future Outlook" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "National Insurance rates have undergone significant changes in recent years, including temporary increases to fund health and social care, subsequently reversed. The alignment of NI thresholds with income tax personal allowances has simplified the tax system while providing targeted support for lower earners. Understanding these changes helps predict future policy directions and their impact on personal finances." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Planning Strategies and Optimization" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While National Insurance offers limited optimization opportunities compared to income tax, certain strategies can minimize contributions legally. Salary sacrifice schemes can reduce NI liability for both employees and employers, creating mutual benefits through reduced pension contributions, cycle-to-work schemes, or childcare vouchers. Self-employed individuals might consider incorporation timing to optimize overall tax and NI efficiency." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "International Considerations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For workers with international connections, National Insurance interactions with foreign social security systems become important. EU citizens may retain certain rights under existing agreements, while workers moving between countries need to understand how contribution records transfer and combine. These considerations affect both current liability and future benefit entitlements across multiple jurisdictions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Record Keeping and Administration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Maintaining accurate National Insurance records protects future benefit entitlements and helps resolve any discrepancies. Employed workers typically have contributions handled automatically through PAYE, while self-employed individuals must ensure accurate reporting and timely payment. Regular monitoring through official channels helps identify and correct any gaps or errors that might affect future benefits." })
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ExportShareButtons,
          {
            calculatorType: "national-insurance-uk",
            inputs: {
              salary,
              payFrequency,
              employmentType,
              age
            },
            results,
            title: "National Insurance Calculation"
          }
        ) })
      ]
    }
  );
};
export {
  NationalInsuranceCalculatorUK as default
};
