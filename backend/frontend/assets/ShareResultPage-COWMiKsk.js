import { u as useParams, r as reactExports, j as jsxRuntimeExports, N as Navigation, o as Footer, S as SEOHead, p as TriangleAlert, B as Button, C as Calculator, f as Card, g as CardHeader, h as CardTitle, k as CardContent, T as TrendingUp } from "./index-C_OXA6OQ.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { L as LoaderCircle } from "./loader-circle-BYW7QwsU.js";
import { A as ArrowLeft } from "./arrow-left-C2wP0iAx.js";
import { C as Calendar } from "./calendar-CKWgIWzq.js";
import { B as Brain } from "./brain-U3SZm3t9.js";
function ShareResultPage() {
  const { shareId } = useParams();
  const [result, setResult] = reactExports.useState(null);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (shareId) {
      loadSharedResult();
    }
  }, [shareId]);
  const loadSharedResult = async (id) => {
    try {
      setError("Share results service not implemented");
    } catch (err) {
      console.error("Error loading shared result:", err);
      setError("Failed to load shared calculation. The link may be invalid or expired.");
    } finally {
      setIsLoading(false);
    }
  };
  const formatCalculatorType = (type) => {
    return type.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };
  const formatValue = (value) => {
    if (typeof value === "number") {
      if (value > 1e3) {
        return value.toLocaleString();
      }
      return value.toString();
    }
    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }
    return (value == null ? void 0 : value.toString()) || "";
  };
  const formatKey = (key) => {
    return key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()).trim();
  };
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  const getRecommendationIcon = (type) => {
    switch (type) {
      case "optimization":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" });
      case "warning":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-4 w-4" });
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center min-h-96", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Loading Shared Calculation..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Please wait while we retrieve the shared results." })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] });
  }
  if (error || !result) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SEOHead,
        {
          title: "Shared Calculation Not Found",
          description: "The shared calculation you're looking for could not be found."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 border border-red-200 rounded-lg p-8 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-16 w-16 text-red-500 mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-red-900 mb-2", children: "Calculation Not Found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-700 mb-6", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => window.location.href = "/", className: "bg-blue-600 hover:bg-blue-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
          "Go to Homepage"
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] });
  }
  const calculatorName = formatCalculatorType(result.calculatorType);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: `Shared ${calculatorName} Calculation`,
        description: `View shared ${calculatorName.toLowerCase()} calculation results and AI analysis from Smart Calculator Hubs.`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            onClick: () => window.history.back(),
            className: "mb-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
              "Back"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-8 w-8 text-blue-600 mr-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold text-gray-900", children: [
            "Shared ",
            calculatorName,
            " Calculation"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-gray-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 mr-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Calculated on ",
            new Date(result.createdAt).toLocaleDateString()
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-gray-900", children: "Calculation Results" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: Object.entries(result.results).map(([key, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 mb-1", children: formatKey(key) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold text-gray-900", children: formatValue(value) })
        ] }, key)) }) })
      ] }),
      result.analysis && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-6 w-6 text-blue-600 mr-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-blue-900", children: "AI Analysis" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-800 leading-relaxed", children: result.analysis.summary }) })
        ] }),
        result.analysis.recommendations.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-gray-900", children: "Recommendations" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-4", children: result.analysis.recommendations.map((rec, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "border border-gray-200 rounded-lg p-4 bg-white shadow-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                    getRecommendationIcon(rec.type),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 ml-2", children: rec.title })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: getPriorityColor(rec.priority), children: rec.priority })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-3", children: rec.description }),
                rec.actionItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium text-gray-900 mb-2", children: "Action Items:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: rec.actionItems.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start text-sm text-gray-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0" }),
                    item
                  ] }, idx)) })
                ] })
              ]
            },
            index
          )) })
        ] }),
        result.analysis.keyInsights.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-gray-900", children: "Key Insights" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: result.analysis.keyInsights.map((insight, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start text-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0" }),
            insight
          ] }, index)) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "text-center py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2", children: "Try Your Own Calculations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 opacity-90", children: "Explore our comprehensive suite of financial, health, and utility calculators" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: () => window.location.href = "/",
            className: "bg-white text-blue-600 hover:bg-gray-100",
            size: "lg",
            children: "Visit SmartCalculatorHub"
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ShareResultPage as default
};
