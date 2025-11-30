import { n as createLucideIcon, r as reactExports, j as jsxRuntimeExports, f as Card, k as CardContent, p as TriangleAlert, B as Button, g as CardHeader, h as CardTitle, a7 as Sparkles, T as TrendingUp, ag as backend } from "./index-C_OXA6OQ.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { L as LoaderCircle } from "./loader-circle-BYW7QwsU.js";
import { B as Brain } from "./brain-U3SZm3t9.js";
import { T as Target } from "./target-1ApqtYDG.js";
import { C as CircleCheckBig } from "./circle-check-big-BoxGYPKG.js";
import { A as ArrowRight } from "./arrow-right-CtOKJdMG.js";
import { L as Lightbulb } from "./lightbulb-doNczJxC.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
];
const ShieldAlert = createLucideIcon("shield-alert", __iconNode);
function EnhancedAIAnalysis({
  calculatorType,
  data,
  userContext,
  onAnalysisComplete,
  className = ""
}) {
  const [analysis, setAnalysis] = reactExports.useState(null);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const debounceTimerRef = reactExports.useRef(null);
  const previousDataRef = reactExports.useRef("");
  const handleAnalyze = async () => {
    setIsLoading(true);
    setError(null);
    try {
      console.log("Calling AI analysis with:", { calculatorType, data, userContext });
      const result = await backend.ai_analysis.analyze({
        calculatorType,
        data,
        userContext
      });
      console.log("AI Analysis result:", result);
      if (!result) {
        console.error("No result received from AI analysis");
        setError("No analysis data received. Please try again.");
        return;
      }
      if (!result.summary && (!result.recommendations || result.recommendations.length === 0)) {
        console.error("Empty analysis received:", result);
        setError("Received empty analysis. Please try again.");
        return;
      }
      setAnalysis(result);
      onAnalysisComplete == null ? void 0 : onAnalysisComplete(result);
    } catch (err) {
      console.error("AI Analysis error:", err);
      setError(`Failed to generate analysis: ${err instanceof Error ? err.message : "Unknown error"}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };
  reactExports.useEffect(() => {
    const currentData = JSON.stringify({ calculatorType, data, userContext });
    if (currentData === previousDataRef.current) {
      return;
    }
    previousDataRef.current = currentData;
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      handleAnalyze();
    }, 1500);
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [calculatorType, JSON.stringify(data), JSON.stringify(userContext)]);
  const getPriorityConfig = (priority) => {
    switch (priority) {
      case "high":
        return {
          badge: "bg-gradient-to-r from-red-500 to-pink-500 text-white border-0",
          card: "border-red-200 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30",
          icon: "text-red-600 dark:text-red-400"
        };
      case "medium":
        return {
          badge: "bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0",
          card: "border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30",
          icon: "text-orange-600 dark:text-orange-400"
        };
      case "low":
        return {
          badge: "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0",
          card: "border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
          icon: "text-green-600 dark:text-green-400"
        };
      default:
        return {
          badge: "bg-gradient-to-r from-gray-500 to-slate-500 text-white border-0",
          card: "border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/30 dark:to-slate-950/30",
          icon: "text-gray-600 dark:text-gray-400"
        };
    }
  };
  const getRecommendationIcon = (type) => {
    switch (type) {
      case "optimization":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" });
      case "warning":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5" });
      case "opportunity":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5" });
      case "risk":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-5 w-5" });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-5 w-5" });
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: `border-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-col items-center justify-center py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/30 rounded-full blur-2xl animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-16 w-16 animate-spin text-white drop-shadow-lg relative z-10" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-2xl drop-shadow-md", children: "Generating AI Analysis..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm", children: "Analyzing your data with advanced AI models" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-white rounded-full animate-bounce", style: { animationDelay: "0ms" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-white rounded-full animate-bounce", style: { animationDelay: "150ms" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-white rounded-full animate-bounce", style: { animationDelay: "300ms" } })
        ] })
      ] })
    ] }) });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: `border-0 bg-gradient-to-br from-red-500 to-rose-600 text-white ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-white/20 backdrop-blur-sm rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-12 w-12" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl mb-2", children: "Analysis Failed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90", children: error })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: handleAnalyze,
          className: "bg-white text-red-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all",
          size: "lg",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-4 w-4 mr-2" }),
            "Try Again"
          ]
        }
      )
    ] }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 text-white overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMCAzdjItMnptLTIgMGgyLTJ6bTAgMGgyLTJ6bS0yIDBoMi0yem0wLTNoMi0yem0yIDB2Mi0yem0wLTN2Mi0yem0tMiAwaDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-white/20 backdrop-blur-sm rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl font-bold", children: "AI Analysis Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-white/20 backdrop-blur-sm border-white/30 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 mr-1" }),
          "AI Generated"
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/95 leading-relaxed text-lg", children: analysis == null ? void 0 : analysis.summary }) })
    ] }),
    (analysis == null ? void 0 : analysis.recommendations) && analysis.recommendations.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-6 w-6 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "Personalized Recommendations" })
      ] }),
      analysis.recommendations.map((rec, index) => {
        const config = getPriorityConfig(rec.priority);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: `${config.card} border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2.5 bg-white dark:bg-gray-900 rounded-xl shadow-md ${config.icon}`, children: getRecommendationIcon(rec.type) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xl text-foreground", children: rec.title }),
                    rec.estimatedImpact && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: rec.estimatedImpact })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `${config.badge} text-sm font-semibold px-3 py-1 shadow-md`, children: rec.priority.toUpperCase() })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/90 mb-4 leading-relaxed", children: rec.description }),
              rec.potentialSavings && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-4 mb-4 shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lg", children: "Potential Savings" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-bold", children: [
                  "$",
                  rec.potentialSavings.toLocaleString()
                ] })
              ] }) }),
              rec.actionItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/60 dark:border-gray-700/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "font-bold text-foreground mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4" }),
                  "Action Items:"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: rec.actionItems.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-foreground/90", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 p-1 bg-primary/20 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: item })
                ] }, idx)) })
              ] })
            ] })
          },
          index
        );
      })
    ] }),
    (analysis == null ? void 0 : analysis.keyInsights) && analysis.keyInsights.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-blue-500 text-white rounded-xl shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl font-bold text-foreground", children: "Key Insights" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: analysis.keyInsights.map((insight, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 p-3 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg border border-blue-200 dark:border-blue-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90 leading-relaxed", children: insight })
      ] }, index)) }) })
    ] }),
    (analysis == null ? void 0 : analysis.riskFactors) && analysis.riskFactors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-orange-500 text-white rounded-xl shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl font-bold text-foreground", children: "Risk Factors" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: analysis.riskFactors.map((risk, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 p-3 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg border border-orange-200 dark:border-orange-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90 leading-relaxed", children: risk })
      ] }, index)) }) })
    ] }),
    (analysis == null ? void 0 : analysis.nextSteps) && analysis.nextSteps.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-emerald-500 text-white rounded-xl shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl font-bold text-foreground", children: "Next Steps" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: analysis.nextSteps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 p-3 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg border border-emerald-200 dark:border-emerald-800 hover:bg-white/80 dark:hover:bg-gray-900/80 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-emerald-500 text-white rounded-full mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: index + 1 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90 leading-relaxed flex-1", children: step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" })
      ] }, index)) }) })
    ] })
  ] });
}
export {
  EnhancedAIAnalysis as E,
  ShieldAlert as S
};
