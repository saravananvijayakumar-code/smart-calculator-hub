import { j as jsxRuntimeExports, l as House, D as DollarSign, a2 as FileText, C as Calculator, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, B as Button, L as Link } from "./index-C_OXA6OQ.js";
import { A as AmazonAffiliate } from "./AmazonAffiliate-CB1PlYmH.js";
import { N as NativeBanner } from "./NativeBanner-B6XByCG6.js";
import { D as DirectoryInterlinks } from "./DirectoryInterlinks-DAUa2fRu.js";
import { C as Calendar } from "./calendar-CKWgIWzq.js";
import { G as GraduationCap } from "./graduation-cap-Cj_W1XUu.js";
import { C as Car } from "./car-B_NUcg_I.js";
import { B as Building2 } from "./building-2-DUu7gAIv.js";
import { C as CreditCard } from "./credit-card-BI-uE5kJ.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./AppleStyleCard-bNXb4kfM.js";
import "./interlinking-BQgzUxEI.js";
import "./arrow-right-CtOKJdMG.js";
const calculators = [
  {
    title: "Mortgage Calculator",
    description: "Calculate monthly mortgage payments, total interest, and amortization schedules for US home loans.",
    icon: House,
    path: "/calculator/mortgage",
    category: "Real Estate",
    color: "bg-blue-50 dark:bg-blue-950 text-blue-600"
  },
  {
    title: "Loan Calculator",
    description: "Calculate payments for personal loans, auto loans, and other installment loans.",
    icon: DollarSign,
    path: "/calculator/loan",
    category: "Lending",
    color: "bg-green-50 dark:bg-green-950 text-green-600"
  },
  {
    title: "Federal Tax Calculator",
    description: "Estimate your federal income tax liability and take-home pay for any tax year.",
    icon: FileText,
    path: "/calculator/federal-tax",
    category: "Taxes",
    color: "bg-red-50 dark:bg-red-950 text-red-600"
  },
  {
    title: "State Tax Calculator",
    description: "Calculate state income tax for all 50 states plus DC, with state-specific deductions.",
    icon: Calculator,
    path: "/calculator/state-tax",
    category: "Taxes",
    color: "bg-red-50 dark:bg-red-950 text-red-600"
  },
  {
    title: "Loan Affordability Calculator",
    description: "Determine how much you can afford to borrow based on your income and expenses.",
    icon: House,
    path: "/calculator/loan-affordability",
    category: "Real Estate",
    color: "bg-blue-50 dark:bg-blue-950 text-blue-600"
  },
  {
    title: "401k Retirement Calculator",
    description: "Plan your 401k contributions and estimate retirement savings with employer matching.",
    icon: Calendar,
    path: "/calculator/401k-retirement",
    category: "Retirement",
    color: "bg-purple-50 dark:bg-purple-950 text-purple-600"
  },
  {
    title: "Student Loan Calculator",
    description: "Calculate student loan payments with different repayment plans and forgiveness options.",
    icon: GraduationCap,
    path: "/calculator/student-loan",
    category: "Education",
    color: "bg-yellow-50 dark:bg-yellow-950 text-yellow-600"
  },
  {
    title: "Auto Loan Calculator",
    description: "Calculate car payments, total cost, and determine if an auto loan fits your budget.",
    icon: Car,
    path: "/calculator/auto-loan",
    category: "Automotive",
    color: "bg-orange-50 dark:bg-orange-950 text-orange-600"
  },
  {
    title: "HELOC Calculator",
    description: "Calculate Home Equity Line of Credit payments, available credit, and costs.",
    icon: House,
    path: "/calculator/heloc",
    category: "Real Estate",
    color: "bg-blue-50 dark:bg-blue-950 text-blue-600"
  },
  {
    title: "Business Loan Calculator",
    description: "Calculate business loan payments and analyze debt service coverage ratios.",
    icon: Building2,
    path: "/calculator/business-loan",
    category: "Business",
    color: "bg-indigo-50 dark:bg-indigo-950 text-indigo-600"
  },
  {
    title: "Debt Consolidation Calculator",
    description: "Compare debt consolidation options and calculate potential savings.",
    icon: CreditCard,
    path: "/calculator/debt-consolidation",
    category: "Debt Management",
    color: "bg-pink-50 dark:bg-pink-950 text-pink-600"
  },
  {
    title: "Salary Calculator",
    description: "Calculate take-home pay after federal and state taxes with detailed breakdown.",
    icon: DollarSign,
    path: "/calculator/salary",
    category: "Payroll",
    color: "bg-teal-50 dark:bg-teal-950 text-teal-600"
  }
];
const categories = [...new Set(calculators.map((calc) => calc.category))];
function USToolsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NativeBanner, { position: "top" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4", children: "🇺🇸 United States Financial Calculators" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "Specialized financial calculators designed for US residents, featuring tax laws, lending practices, and financial products specific to the United States." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NativeBanner, { position: "middle" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-card rounded-lg border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600", children: calculators.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "US Calculators" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-card rounded-lg border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-green-600", children: categories.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Categories" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-card rounded-lg border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-purple-600", children: "50+" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "States Supported" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 bg-card rounded-lg border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-orange-600", children: "2025" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Tax Year" })
      ] })
    ] }),
    categories.map((category, categoryIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold mb-4 flex items-center", children: [
        category === "Real Estate" && /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "mr-2 h-6 w-6" }),
        category === "Taxes" && /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "mr-2 h-6 w-6" }),
        category === "Lending" && /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "mr-2 h-6 w-6" }),
        category === "Retirement" && /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "mr-2 h-6 w-6" }),
        category === "Education" && /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "mr-2 h-6 w-6" }),
        category === "Automotive" && /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "mr-2 h-6 w-6" }),
        category === "Business" && /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "mr-2 h-6 w-6" }),
        category === "Debt Management" && /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "mr-2 h-6 w-6" }),
        category === "Payroll" && /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "mr-2 h-6 w-6" }),
        category
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: calculators.filter((calc) => calc.category === category).map((calculator, index) => {
        const IconComponent = calculator.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2 rounded-lg ${calculator.color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "h-5 w-5" }) }),
              calculator.title
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: calculator.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: calculator.path, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "mr-2 h-4 w-4" }),
            "Calculate Now"
          ] }) }) })
        ] }, index);
      }) })
    ] }) }, category)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AmazonAffiliate, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NativeBanner, { position: "bottom" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 p-6 bg-muted rounded-lg text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-2", children: "Why US-Specific Calculators?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "These calculators are tailored for the United States financial system, incorporating federal and state tax codes, typical lending practices, retirement account rules (401k, IRA), and US-specific financial products. Results are more accurate for US residents compared to generic international calculators." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DirectoryInterlinks, { currentPath: "/us/tools", title: "Explore International Tax & Finance Tools" })
  ] }) }) });
}
export {
  USToolsPage
};
