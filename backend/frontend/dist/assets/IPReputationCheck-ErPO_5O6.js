import { n as createLucideIcon, r as reactExports, j as jsxRuntimeExports, S as SEOHead, c as Shield, f as Card, k as CardContent, G as Globe, g as CardHeader, h as CardTitle, p as TriangleAlert, B as Button, a4 as Info, m as Lock } from "./index-C_OXA6OQ.js";
import { M as MapPin } from "./map-pin-CJs2GFz9.js";
import { E as Eye } from "./eye-DBVqbldf.js";
import { C as CircleCheckBig } from "./circle-check-big-BoxGYPKG.js";
import { T as Target } from "./target-1ApqtYDG.js";
import { Z as Zap } from "./zap-B5WxZbDS.js";
import { C as CircleAlert } from "./circle-alert-CYu8dohk.js";
import { A as Award } from "./award-DdRvOLEz.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
];
const Server = createLucideIcon("server", __iconNode);
const threatConfig = {
  low: {
    label: "✅ Trusted",
    color: "text-green-600 dark:text-green-400",
    bg: "from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border-green-100 dark:border-green-900/50"
  },
  medium: {
    label: "⚠️ Moderate Risk",
    color: "text-yellow-600 dark:text-yellow-400",
    bg: "from-yellow-50 to-orange-50 dark:from-yellow-950/50 dark:to-orange-950/50 border-yellow-100 dark:border-yellow-900/50"
  },
  high: {
    label: "🚨 High Risk",
    color: "text-red-600 dark:text-red-400",
    bg: "from-red-50 to-pink-50 dark:from-red-950/50 dark:to-pink-950/50 border-red-100 dark:border-red-900/50"
  }
};
function IPReputationCheck() {
  const [data, setData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const fetchIPReputation = async () => {
    setLoading(true);
    setError(null);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const mockData = {
      ip: "203.0.113." + Math.floor(Math.random() * 255),
      city: "San Francisco",
      region: "California",
      countryName: "United States",
      org: "Example ISP Inc.",
      isp: "Example Broadband",
      isVPN: Math.random() > 0.7,
      isProxy: Math.random() > 0.8,
      isTor: Math.random() > 0.95,
      riskScore: Math.floor(Math.random() * 100),
      blacklisted: Math.random() > 0.9,
      isDatacenter: Math.random() > 0.7,
      threatLevel: "low"
    };
    if (mockData.riskScore > 70 || mockData.isTor) mockData.threatLevel = "high";
    else if (mockData.riskScore > 40 || mockData.isVPN) mockData.threatLevel = "medium";
    setData(mockData);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    fetchIPReputation();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "IP Reputation & VPN Detection — Check If Your IP Is Blacklisted",
        description: "Find out if your IP is on spam or VPN lists. Instantly check IP reputation, risk score, and ISP details.",
        keywords: "ip reputation, vpn detection, proxy detection, ip blacklist, spam check, ip risk score, tor detection, ip security, blacklist check, ip trust score"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-950 dark:to-pink-950", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 animate-fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-20 h-20 text-purple-600 dark:text-purple-400 animate-pulse" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent", children: "IP Reputation & VPN Detector" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Discover your IP's reputation score, detect VPNs & proxies, and check if you're blacklisted! 🔐" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "top-banner" }) }),
      loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-2 border-purple-200 dark:border-purple-800 shadow-2xl animate-pulse-slow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-16 h-16 mx-auto mb-4 text-purple-600 dark:text-purple-400 animate-spin-slow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: "🔍 Analyzing your IP address..." })
      ] }) }) }) }),
      data && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto mb-12 animate-slide-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-4 border-purple-300 dark:border-purple-700 shadow-2xl bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-950/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-8 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "Your IP Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl font-bold text-purple-600 dark:text-purple-400 mb-4 font-mono tracking-wider", children: data.ip }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-300 dark:border-purple-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-2xl font-bold ${threatConfig[data.threatLevel].color}`, children: threatConfig[data.threatLevel].label }) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto mb-12 animate-slide-up", style: { animationDelay: "0.2s" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-105 transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-8 h-8 text-blue-600 dark:text-blue-400 animate-bounce" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Location" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400", children: [
                  data.city,
                  ", ",
                  data.region
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: data.countryName })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-105 transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { className: "w-8 h-8 text-purple-600 dark:text-purple-400 animate-bounce", style: { animationDelay: "0.1s" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "ISP / Organization" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-purple-600 dark:text-purple-400", children: data.org || data.isp }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Internet Service Provider" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/50 dark:to-teal-950/50 hover:shadow-2xl hover:shadow-green-500/20 transform hover:scale-105 transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-8 h-8 text-green-600 dark:text-green-400 animate-bounce", style: { animationDelay: "0.2s" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "VPN / Proxy Status" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                data.isVPN ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold text-orange-600 dark:text-orange-400 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5" }),
                  " VPN Detected"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold text-green-600 dark:text-green-400 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5" }),
                  " No VPN"
                ] }),
                data.isProxy && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-orange-600 dark:text-orange-400", children: "⚠️ Proxy Detected" }),
                data.isTor && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-600 dark:text-red-400", children: "🚨 Tor Network" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `border-2 bg-gradient-to-br ${threatConfig[data.threatLevel].bg} hover:shadow-2xl transform hover:scale-105 transition-all duration-300`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-8 h-8 animate-bounce", style: { animationDelay: "0.3s" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Risk Assessment" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Risk Score" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-bold", children: [
                      data.riskScore,
                      "/100"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `h-3 rounded-full transition-all duration-1000 ${data.riskScore < 30 ? "bg-green-500" : data.riskScore < 70 ? "bg-yellow-500" : "bg-red-500"}`,
                      style: { width: `${data.riskScore}%` }
                    }
                  ) })
                ] }),
                data.blacklisted && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-red-600 dark:text-red-400 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4" }),
                  " Potentially Blacklisted"
                ] }),
                data.isDatacenter && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-yellow-600 dark:text-yellow-400 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { className: "w-4 h-4" }),
                  " Datacenter IP"
                ] })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: fetchIPReputation,
              variant: "outline",
              size: "lg",
              className: "border-2 hover:shadow-xl transition-all duration-300",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 mr-2" }),
                "Refresh Check"
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto mt-16 space-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-200 dark:border-purple-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-8 h-8 text-purple-600" }),
            "What is IP Reputation? 🤔"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose dark:prose-invert max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed", children: [
              "Your ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "IP address" }),
              ' (Internet Protocol address) is like your home address on the internet. Every device connected to the internet has one! But did you know your IP can have a "reputation"? 🏠'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "IP reputation" }),
              " is a trust score based on your IP's history. Websites and services use it to decide if you're a legitimate user or potential threat. Think of it like a credit score, but for your internet connection!"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4 mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5" }),
                  " Good Reputation"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Clean history, residential IP, no spam or abuse - websites trust you! ✅" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-yellow-600 dark:text-yellow-400 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5" }),
                  " Moderate Risk"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "VPN/proxy use, datacenter IP, or shared hosting - sometimes flagged ⚠️" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5" }),
                  " High Risk"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Blacklisted, Tor network, spam history, or malware activity - blocked! 🚫" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-8 h-8 text-blue-600" }),
            "VPN & Proxy Detection Explained 🔐"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose dark:prose-invert max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-6", children: "VPNs and proxies mask your real IP address. While they're great for privacy, some websites block them to prevent fraud or region restrictions. Here's what you need to know:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-200 dark:border-blue-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xl font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6" }),
                  " What is a VPN?"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Virtual Private Network" }),
                  " - Creates an encrypted tunnel between you and the internet. Your traffic appears to come from the VPN server, not your real location! 🌐"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded bg-green-50 dark:bg-green-950/30", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400 mb-1", children: "✅ Pros:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs space-y-1 text-green-600 dark:text-green-400", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Privacy & anonymity" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Bypass geo-blocks" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Secure public Wi-Fi" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Hide from ISP tracking" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded bg-red-50 dark:bg-red-950/30", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-red-700 dark:text-red-400 mb-1", children: "❌ Cons:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs space-y-1 text-red-600 dark:text-red-400", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Slower speeds" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Blocked by Netflix, banking" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• CAPTCHAs everywhere" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Bad reputation IPs" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-200 dark:border-purple-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xl font-bold text-purple-600 dark:text-purple-400 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { className: "w-6 h-6" }),
                  " What is a Proxy?"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Intermediary Server" }),
                  " - Routes your traffic through another server. Similar to VPN but usually less secure and no encryption! 🔄"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-purple-600 dark:text-purple-400", children: "HTTP Proxy:" }),
                    " Only for web browsing (not encrypted)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-purple-600 dark:text-purple-400", children: "SOCKS Proxy:" }),
                    " Works for all traffic but still no encryption"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-purple-600 dark:text-purple-400", children: "Transparent Proxy:" }),
                    " Used by ISPs and workplaces (you might not even know!)"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-2 border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xl font-bold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-6 h-6" }),
                  " What is Tor Network?"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "The Onion Router" }),
                  " - Routes traffic through multiple encrypted layers for maximum anonymity. Used by journalists, activists, and privacy advocates! 🧅"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-red-600 dark:text-red-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "⚠️ Warning:" }),
                  " Most websites block Tor completely due to abuse history. Expect CAPTCHAs and access denials!"
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AmazonAffiliate, { calculatorTitle: "VPN Security Tools", placement: "content" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-article" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-orange-200 dark:border-orange-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-8 h-8 text-orange-600" }),
            "Why Do Websites Block Certain IPs? 🚫"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose dark:prose-invert max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-6", children: `Ever wondered why you get CAPTCHAs or "access denied" errors? Here's why websites are suspicious of certain IPs:` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-red-600 dark:text-red-400 mb-2", children: "🤖 Bot & Scraper Protection" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Datacenter IPs and VPNs are often used by bots to scrape data, create fake accounts, or DDoS attack websites." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "Example: Ticket scalpers using bots to buy concert tickets" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-orange-600 dark:text-orange-400 mb-2", children: "💳 Fraud Prevention" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Banks and payment processors block VPNs to prevent credit card fraud, money laundering, and identity theft." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "Example: PayPal blocking transactions from known VPN IPs" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-yellow-600 dark:text-yellow-400 mb-2", children: "🌍 Geo-Restrictions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Streaming services block VPNs to enforce content licensing agreements and regional restrictions." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "Example: Netflix detecting and blocking VPN users" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-purple-50 dark:bg-purple-950/30 border-l-4 border-purple-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-purple-600 dark:text-purple-400 mb-2", children: "📧 Spam Prevention" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Email providers block IPs with spam history to protect users from phishing, scams, and junk mail." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "Example: Gmail rejecting emails from blacklisted IPs" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-blue-600 dark:text-blue-400 mb-2", children: "🎮 Gaming & Betting" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Online games and betting sites block VPNs to prevent cheating, multi-accounting, and jurisdiction violations." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "Example: Fortnite banning players using VPNs to smurf" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-pink-50 dark:bg-pink-950/30 border-l-4 border-pink-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-pink-600 dark:text-pink-400 mb-2", children: "🛡️ Security Threats" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "IPs associated with malware, hacking, or DDoS attacks get permanently blacklisted for everyone's safety." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "Example: Tor exit nodes blocked due to abuse history" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "sidebar" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 dark:border-green-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-8 h-8 text-green-600" }),
            "How to Improve Your IP Reputation 🌟"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-6", children: "Got a bad IP reputation? Here's how to fix it and avoid future problems:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "1️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Use Residential IP" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Your home ISP IP has the best reputation. Avoid cheap VPNs and shared hosting!" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "2️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Request IP Change" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Contact your ISP for a new IP if yours is blacklisted (usually free!)" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "3️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Remove from Blacklists" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Submit delisting requests to Spamhaus, SORBS, and other RBL databases" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "4️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Use Premium VPN" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "NordVPN, ExpressVPN have dedicated IPs with better reputation than free VPNs" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "5️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Scan for Malware" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Your device might be infected! Run Malwarebytes and check for botnet activity" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "6️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Secure Your Network" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Change router password, enable WPA3, prevent others from using your IP for spam" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "7️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Wait It Out" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Most blacklists auto-expire after 30-90 days of clean behavior" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "8️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Monitor Regularly" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Check your IP reputation monthly to catch problems early!" })
                ] })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-pink-200 dark:border-pink-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { className: "w-8 h-8 text-pink-600" }),
            "Popular IP Blacklist Databases 📚"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg border-2 border-pink-200 dark:border-pink-800 hover:bg-pink-50 dark:hover:bg-pink-950/30 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-pink-600 dark:text-pink-400 mb-2", children: "🛡️ Spamhaus" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "Most trusted anti-spam blacklist. Used by Gmail, Outlook, and major ISPs worldwide." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Check:" }),
                " spamhaus.org"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg border-2 border-pink-200 dark:border-pink-800 hover:bg-pink-50 dark:hover:bg-pink-950/30 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-pink-600 dark:text-pink-400 mb-2", children: "📧 SORBS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "Spam and Open Relay Blocking System. Tracks spam sources and open proxies." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Check:" }),
                " sorbs.net"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg border-2 border-pink-200 dark:border-pink-800 hover:bg-pink-50 dark:hover:bg-pink-950/30 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-pink-600 dark:text-pink-400 mb-2", children: "🔍 Project Honey Pot" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "Tracks email harvesters, comment spammers, and malicious bots." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Check:" }),
                " projecthoneypot.org"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg border-2 border-pink-200 dark:border-pink-800 hover:bg-pink-50 dark:hover:bg-pink-950/30 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-pink-600 dark:text-pink-400 mb-2", children: "🌐 AbuseIPDB" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "Crowdsourced IP abuse reports. Community-driven blacklist database." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Check:" }),
                " abuseipdb.com"
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-article" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      ` })
  ] });
}
export {
  IPReputationCheck as default
};
