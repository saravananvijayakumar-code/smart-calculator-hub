import { r as reactExports, j as jsxRuntimeExports, B as Button, aJ as Smartphone, aC as RefreshCw, f as Card, T as TrendingUp, G as Globe, ah as backend } from "./index-CK9G4vW7.js";
import { U as Users } from "./users-Cu_sVhna.js";
function PWAAnalytics() {
  const [stats, setStats] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const fetchStats = async () => {
    try {
      setLoading(true);
      const data = await backend.pwa_install.getStats();
      setStats(data);
    } catch (error) {
      console.error("Error fetching PWA analytics:", error);
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    fetchStats();
  }, []);
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };
  const formatDateTime = (date) => {
    return new Date(date).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-96", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500" }) }) }) });
  }
  if (!stats) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Failed to load PWA analytics" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: fetchStats, className: "mt-4", children: "Retry" })
    ] }) }) });
  }
  const last7DaysTotal = stats.last7Days.reduce((sum, day) => sum + day.installs, 0);
  const last30DaysTotal = stats.last30Days.reduce((sum, day) => sum + day.installs, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-10 h-10 text-purple-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-white", children: "PWA Install Analytics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-300 mt-1", children: "Track progressive web app installations" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: fetchStats,
          variant: "outline",
          className: "gap-2 bg-purple-500/10 border-purple-500/50 text-white hover:bg-purple-500/20",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
            "Refresh"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-purple-300 mb-1", children: "Total Installs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white", children: stats.totalInstalls })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-12 h-12 text-purple-400 opacity-50" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-blue-300 mb-1", children: "Last 7 Days" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white", children: last7DaysTotal })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-12 h-12 text-blue-400 opacity-50" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-gradient-to-br from-cyan-500/20 to-green-500/20 border-cyan-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-cyan-300 mb-1", children: "Last 30 Days" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white", children: last30DaysTotal })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-12 h-12 text-cyan-400 opacity-50" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-300 mb-1", children: "Countries" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-white", children: stats.byCountry.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-12 h-12 text-green-400 opacity-50" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-slate-800/50 border-purple-500/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-white mb-4", children: "Installs by Platform" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: stats.byPlatform.length > 0 ? stats.byPlatform.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-200", children: item.platform }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-2 bg-slate-700 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-full bg-gradient-to-r from-purple-500 to-blue-500",
                style: {
                  width: `${item.count / stats.totalInstalls * 100}%`
                }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold w-12 text-right", children: item.count })
          ] })
        ] }, index)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-300 text-center py-4", children: "No platform data available" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-slate-800/50 border-purple-500/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-white mb-4", children: "Installs by Country" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: stats.byCountry.length > 0 ? stats.byCountry.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-200", children: item.country }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-2 bg-slate-700 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-full bg-gradient-to-r from-blue-500 to-cyan-500",
                style: {
                  width: `${item.count / stats.totalInstalls * 100}%`
                }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold w-12 text-right", children: item.count })
          ] })
        ] }, index)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-300 text-center py-4", children: "No country data available" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-slate-800/50 border-purple-500/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-white mb-4", children: "Recent Installs (Last 50)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-purple-500/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left text-purple-300 pb-3 px-4", children: "Date & Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left text-purple-300 pb-3 px-4", children: "Platform" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left text-purple-300 pb-3 px-4", children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left text-purple-300 pb-3 px-4", children: "User Agent" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: stats.recentInstalls.length > 0 ? stats.recentInstalls.map((install) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-slate-700/50 hover:bg-purple-500/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-white text-sm", children: formatDateTime(install.installed_at) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-purple-200 text-sm", children: install.platform || "Unknown" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-purple-200 text-sm", children: install.city && install.country ? `${install.city}, ${install.country}` : install.country || "Unknown" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-purple-200 text-sm max-w-md truncate", children: install.user_agent || "Unknown" })
        ] }, install.id)) : /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 4, className: "py-8 text-center text-purple-300", children: "No install records available" }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-slate-800/50 border-purple-500/30 mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-white mb-4", children: "Daily Install Trend (Last 30 Days)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-purple-500/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left text-purple-300 pb-3 px-4", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left text-purple-300 pb-3 px-4", children: "Installs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left text-purple-300 pb-3 px-4", children: "Trend" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: stats.last30Days.length > 0 ? stats.last30Days.map((day, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-slate-700/50 hover:bg-purple-500/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-white text-sm", children: formatDate(day.date) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-purple-200 text-sm font-semibold", children: day.installs }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-xs h-2 bg-slate-700 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full bg-gradient-to-r from-purple-500 to-blue-500",
              style: {
                width: `${Math.min(day.installs / Math.max(...stats.last30Days.map((d) => d.installs)) * 100, 100)}%`
              }
            }
          ) }) })
        ] }, day.date)) : /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 3, className: "py-8 text-center text-purple-300", children: "No trend data available" }) }) })
      ] }) })
    ] })
  ] }) });
}
export {
  PWAAnalytics as default
};
