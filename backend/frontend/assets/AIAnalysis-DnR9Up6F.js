import { r as reactExports, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, B as Button, a5 as Alert, p as TriangleAlert, a6 as AlertDescription, T as TrendingUp, ag as backend } from "./index-C_OXA6OQ.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-BNSAX0su.js";
import { B as Brain } from "./brain-U3SZm3t9.js";
import { L as LoaderCircle } from "./loader-circle-BYW7QwsU.js";
import { T as Target } from "./target-1ApqtYDG.js";
import { C as CircleCheckBig } from "./circle-check-big-BoxGYPKG.js";
const priorityConfig = {
  high: { color: "destructive", icon: TriangleAlert },
  medium: { color: "default", icon: Target },
  low: { color: "secondary", icon: CircleCheckBig }
};
const typeConfig = {
  optimization: { label: "Optimization", color: "bg-blue-50 text-blue-700 border-blue-200" },
  warning: { label: "Warning", color: "bg-red-50 text-red-700 border-red-200" },
  opportunity: { label: "Opportunity", color: "bg-green-50 text-green-700 border-green-200" },
  strategy: { label: "Strategy", color: "bg-purple-50 text-purple-700 border-purple-200" },
  engagement: { label: "Engagement", color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
  growth: { label: "Growth", color: "bg-green-50 text-green-700 border-green-200" }
};
function RecommendationCard({ recommendation }) {
  const { type, priority, title, description, actionItems, potentialSavings, estimatedImpact } = recommendation;
  const PriorityIcon = priorityConfig[priority].icon;
  const typeStyle = typeConfig[type];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityIcon, { className: "h-5 w-5 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: priorityConfig[priority].color, children: [
            priority,
            " priority"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: typeStyle.color, children: typeStyle.label })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium mb-2", children: "Action Items:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: actionItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start space-x-2 text-sm text-muted-foreground p-2 bg-muted rounded", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 mt-0.5 text-green-500 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
        ] }, index)) })
      ] }),
      (potentialSavings || estimatedImpact) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 p-3 rounded-lg border border-green-200", children: [
        potentialSavings && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-green-700", children: [
          "💰 Potential Savings: $",
          potentialSavings.toLocaleString()
        ] }),
        estimatedImpact && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-green-600 mt-1", children: [
          "📈 ",
          estimatedImpact
        ] })
      ] })
    ] }) })
  ] });
}
function InsightsList({ title, items, icon }) {
  if (items.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2 text-lg", children: [
      icon,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: title })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: items.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start space-x-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
    ] }, index)) }) })
  ] });
}
function AIAnalysis({
  analysisRequest,
  className,
  autoRun = false,
  title = "AI Financial Analysis",
  description = "Get personalized recommendations and insights based on your calculation results."
}) {
  const [analysis, setAnalysis] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const runAnalysis = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await backend.ai_analysis.analyze(analysisRequest);
      setAnalysis(response);
    } catch (err) {
      console.error("AI Analysis error:", err);
      setError("Failed to generate analysis. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    if (autoRun) {
      runAnalysis();
    }
  }, [autoRun]);
  if (!analysis && !loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: runAnalysis, className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-4 w-4 mr-2" }),
        "Generate AI Analysis"
      ] }) })
    ] });
  }
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Analyzing your results..." })
    ] }) }) });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "destructive", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: error })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: runAnalysis, variant: "outline", className: "mt-4", children: "Try Again" })
    ] }) });
  }
  if (!analysis) return null;
  const highPriorityRecommendations = analysis.recommendations.filter((r) => r.priority === "high");
  const mediumPriorityRecommendations = analysis.recommendations.filter((r) => r.priority === "medium");
  const lowPriorityRecommendations = analysis.recommendations.filter((r) => r.priority === "low");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-6 w-6 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-base", children: analysis.summary })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "recommendations", className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "recommendations", children: "Recommendations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "insights", children: "Insights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "risks", children: "Risks" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "next-steps", children: "Next Steps" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "recommendations", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          highPriorityRecommendations.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-lg mb-4 flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-red-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "High Priority" })
            ] }),
            highPriorityRecommendations.map((rec, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(RecommendationCard, { recommendation: rec }, `high-${index}`))
          ] }),
          mediumPriorityRecommendations.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-lg mb-4 flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5 text-yellow-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Medium Priority" })
            ] }),
            mediumPriorityRecommendations.map((rec, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(RecommendationCard, { recommendation: rec }, `medium-${index}`))
          ] }),
          lowPriorityRecommendations.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-lg mb-4 flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-green-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Low Priority" })
            ] }),
            lowPriorityRecommendations.map((rec, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(RecommendationCard, { recommendation: rec }, `low-${index}`))
          ] }),
          analysis.recommendations.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-12 w-12 mx-auto mb-2 text-green-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Great job! No specific recommendations at this time." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "insights", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          InsightsList,
          {
            title: "Key Insights",
            items: analysis.keyInsights,
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-blue-500" })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "risks", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          InsightsList,
          {
            title: "Risk Factors",
            items: analysis.riskFactors,
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-red-500" })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "next-steps", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          InsightsList,
          {
            title: "Next Steps",
            items: analysis.nextSteps,
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-green-500" })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-4 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: runAnalysis,
          variant: "outline",
          size: "sm",
          disabled: loading,
          children: [
            loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 mr-2 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-4 w-4 mr-2" }),
            "Refresh Analysis"
          ]
        }
      ) })
    ] })
  ] });
}
export {
  AIAnalysis as A
};
