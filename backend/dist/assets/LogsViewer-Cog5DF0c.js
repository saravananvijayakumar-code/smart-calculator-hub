import { n as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button, aB as RefreshCw, f as Card, g as CardHeader, h as CardTitle, k as CardContent, a3 as Label, U as Input, i as CardDescription, a4 as Info, ax as ChevronDown, p as TriangleAlert } from "./index-C_OXA6OQ.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { T as Trash2 } from "./trash-2-Bv8CIGm6.js";
import { F as Funnel } from "./funnel-Bna8i9Lj.js";
import { C as ChevronRight } from "./chevron-right-CuSmhiY5.js";
import { B as Bug } from "./bug-DM2Wq0Yv.js";
import { C as CircleAlert } from "./circle-alert-CYu8dohk.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m12.5 17-.5-1-.5 1h1z", key: "3me087" }],
  [
    "path",
    {
      d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",
      key: "1o5pge"
    }
  ],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }]
];
const Skull = createLucideIcon("skull", __iconNode);
function LogsViewer() {
  const [logs, setLogs] = reactExports.useState([]);
  const [stats, setStats] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [filterLevel, setFilterLevel] = reactExports.useState("all");
  const [filterService, setFilterService] = reactExports.useState("");
  const [expandedLogs, setExpandedLogs] = reactExports.useState(/* @__PURE__ */ new Set());
  const [refreshing, setRefreshing] = reactExports.useState(false);
  const fetchLogs = async () => {
    setLogs([]);
  };
  const fetchStats = async () => {
    setStats({
      totalLogs: 0,
      criticalErrors: 0,
      recentErrors: 0,
      byLevel: { error: 0, warn: 0, info: 0, debug: 0, critical: 0 }
    });
  };
  const loadData = async () => {
    setLoading(true);
    await Promise.all([fetchLogs(), fetchStats()]);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    loadData();
  }, [filterLevel, filterService]);
  const handleRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };
  const handleClearLogs = async () => {
    if (!confirm("Are you sure you want to clear all logs?")) return;
    console.log("Logs service not implemented");
  };
  const handleTestError = async () => {
    console.log("Logs service not implemented");
  };
  const toggleExpanded = (logId) => {
    const newExpanded = new Set(expandedLogs);
    if (newExpanded.has(logId)) {
      newExpanded.delete(logId);
    } else {
      newExpanded.add(logId);
    }
    setExpandedLogs(newExpanded);
  };
  const getLevelIcon = (level) => {
    switch (level) {
      case "critical":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Skull, { className: "w-4 h-4" });
      case "error":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4" });
      case "warn":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4" });
      case "info":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-4 h-4" });
      case "debug":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Bug, { className: "w-4 h-4" });
    }
  };
  const getLevelColor = (level) => {
    switch (level) {
      case "critical":
        return "bg-red-900 text-white border-red-950";
      case "error":
        return "bg-red-100 text-red-800 border-red-200";
      case "warn":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "info":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "debug":
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "System Logs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mt-1", children: "Monitor and analyze application errors" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleTestError, variant: "outline", children: "Test Error" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleRefresh, variant: "outline", disabled: refreshing, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-4 h-4 mr-2 ${refreshing ? "animate-spin" : ""}` }),
          "Refresh"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleClearLogs, variant: "destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4 mr-2" }),
          "Clear Logs"
        ] })
      ] })
    ] }),
    stats && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium", children: "Total Logs" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: stats.totalLogs.toLocaleString() }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-red-200 bg-red-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-red-900", children: "Critical" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-red-900", children: stats.criticalErrors.toLocaleString() }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-orange-200 bg-orange-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium text-orange-900", children: "Recent (24h)" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-orange-900", children: stats.recentErrors.toLocaleString() }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium", children: "Errors" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: stats.byLevel.error.toLocaleString() }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-medium", children: "Warnings" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: stats.byLevel.warn.toLocaleString() }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-5 h-5" }),
        "Filters"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Log Level" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterLevel, onValueChange: setFilterLevel, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All levels" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All levels" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "critical", children: "Critical" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "error", children: "Error" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "warn", children: "Warning" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "info", children: "Info" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "debug", children: "Debug" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Service Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Filter by service...",
              value: filterService,
              onChange: (e) => setFilterService(e.target.value)
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { children: [
          "Error Logs (",
          logs.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Recent errors and warnings from the application" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: logs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 text-gray-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-12 h-12 mx-auto mb-4 opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium", children: "No logs found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Try adjusting your filters or create a test error" })
      ] }) : logs.map((log) => {
        const isExpanded = expandedLogs.has(log.id);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "p-4 cursor-pointer hover:bg-gray-50 transition-colors",
              onClick: () => toggleExpanded(log.id),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 flex-1", children: [
                isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-5 h-5 text-gray-400 mt-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5 text-gray-400 mt-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: getLevelColor(log.level), children: [
                      getLevelIcon(log.level),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1", children: log.level.toUpperCase() })
                    ] }),
                    log.serviceName && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: log.serviceName }),
                    log.errorType && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: log.errorType }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500 ml-auto", children: new Date(log.timestamp).toLocaleString() })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-gray-900", children: log.message }),
                  log.endpoint && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [
                    "Endpoint: ",
                    log.endpoint
                  ] })
                ] })
              ] }) })
            }
          ),
          isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t bg-gray-50 p-4 space-y-3", children: [
            log.stackTrace && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-gray-700", children: "Stack Trace" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-1 text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto", children: log.stackTrace })
            ] }),
            log.metadata && Object.keys(log.metadata).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold text-gray-700", children: "Metadata" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-1 text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto", children: JSON.stringify(log.metadata, null, 2) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-2 text-xs", children: [
              log.requestId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gray-700", children: "Request ID:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600", children: log.requestId })
              ] }),
              log.userId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gray-700", children: "User ID:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600", children: log.userId })
              ] }),
              log.ipAddress && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gray-700", children: "IP Address:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600", children: log.ipAddress })
              ] }),
              log.environment && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gray-700", children: "Environment:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600", children: log.environment })
              ] })
            ] })
          ] })
        ] }, log.id);
      }) }) })
    ] })
  ] });
}
export {
  LogsViewer
};
