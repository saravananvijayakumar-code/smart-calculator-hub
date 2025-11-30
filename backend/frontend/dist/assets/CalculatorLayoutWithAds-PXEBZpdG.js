import { j as jsxRuntimeExports, S as SEOHead } from "./index-C_OXA6OQ.js";
import { A as AdsterraSlot } from "./AdsterraSlot--S6-7ysu.js";
import { E as EnhancedAIAnalysis } from "./EnhancedAIAnalysis-BZiQW2bt.js";
function CalculatorLayoutWithAds({
  title,
  description,
  keywords,
  tips,
  children,
  showAd = true,
  aiAnalysisRequest,
  showAIAnalysis = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title,
        description,
        keywords: keywords || ""
      }
    ),
    showAd && /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "top", className: "mb-6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children }),
      showAIAnalysis && aiAnalysisRequest && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        EnhancedAIAnalysis,
        {
          calculatorType: aiAnalysisRequest.calculatorType,
          data: aiAnalysisRequest.data,
          userContext: aiAnalysisRequest.userContext
        }
      ) }),
      showAd && /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-8" }),
      tips && tips.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950 p-6 rounded-lg mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4 text-blue-900 dark:text-blue-100", children: "Tips & Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: tips.map((tip, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-blue-800 dark:text-blue-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 dark:text-blue-400 mt-1", children: "•" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: tip })
        ] }, index)) })
      ] }),
      showAd && /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "bottom", className: "mt-8" })
    ] }) }) })
  ] }) });
}
export {
  CalculatorLayoutWithAds as C
};
