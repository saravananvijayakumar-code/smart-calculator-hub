import { u as useParams, j as jsxRuntimeExports, S as SEOHead, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent } from "./index-C_OXA6OQ.js";
import { B as Badge } from "./badge-fo2YvZos.js";
const countryInfo = {
  au: { name: "Australia", flag: "🇦🇺", currency: "AUD" },
  us: { name: "United States", flag: "🇺🇸", currency: "USD" },
  uk: { name: "United Kingdom", flag: "🇬🇧", currency: "GBP" },
  in: { name: "India", flag: "🇮🇳", currency: "INR" }
};
function CalculatorLayout({ country }) {
  const { calculator } = useParams();
  const countryData = countryInfo[country];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: `${calculator} Calculator - ${countryData.name} | Smart Calculator Hubs`,
        description: `Professional ${calculator} calculator for ${countryData.name}. Get accurate results with our easy-to-use financial tools.`,
        keywords: `${calculator}, calculator, ${countryData.name}, financial, ${countryData.currency}`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-3 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: countryData.flag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: countryData.name })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold capitalize mb-2", children: [
          calculator == null ? void 0 : calculator.replace("-", " "),
          " Calculator"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-muted-foreground", children: [
          "Professional ",
          calculator == null ? void 0 : calculator.replace("-", " "),
          " calculator designed for ",
          countryData.name
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Calculator" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardDescription, { children: [
              "Enter your details below to calculate your ",
              calculator == null ? void 0 : calculator.replace("-", " ")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center py-12 text-muted-foreground", children: "Calculator form will be implemented here" }) }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Results" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center py-8 text-muted-foreground", children: "Results will appear here" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "About This Calculator" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              "This calculator is specifically designed for ",
              countryData.name,
              " and uses local financial regulations and standards to provide accurate results."
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "How to Use This Calculator" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose max-w-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "This ",
            calculator == null ? void 0 : calculator.replace("-", " "),
            " calculator is designed to help you make informed financial decisions. Here's how to get the most accurate results:"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Enter all required fields accurately" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Use current market rates and conditions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Review results carefully before making decisions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consider consulting with a financial advisor for complex situations" })
          ] })
        ] }) })
      ] }) })
    ] })
  ] });
}
export {
  CalculatorLayout as C
};
