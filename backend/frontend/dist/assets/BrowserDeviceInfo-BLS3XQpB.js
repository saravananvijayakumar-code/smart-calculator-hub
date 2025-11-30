import { n as createLucideIcon, O as useToast, r as reactExports, j as jsxRuntimeExports, S as SEOHead, B as Button, f as Card, g as CardHeader, h as CardTitle, k as CardContent, aI as Smartphone, G as Globe, aP as Wifi, a4 as Info, c as Shield } from "./index-C_OXA6OQ.js";
import { A as AdsterraSlot } from "./AdsterraSlot--S6-7ysu.js";
import { M as Monitor } from "./monitor-CWklEt6z.js";
import { C as CircleCheckBig } from "./circle-check-big-BoxGYPKG.js";
import { C as Copy } from "./copy-DGMuG98H.js";
import { Z as Zap } from "./zap-B5WxZbDS.js";
import { E as Eye } from "./eye-DBVqbldf.js";
import { A as Award } from "./award-DdRvOLEz.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["line", { x1: "21.17", x2: "12", y1: "8", y2: "8", key: "a0cw5f" }],
  ["line", { x1: "3.95", x2: "8.54", y1: "6.06", y2: "14", key: "1kftof" }],
  ["line", { x1: "10.88", x2: "15.46", y1: "21.94", y2: "14", key: "1ymyh8" }]
];
const Chrome = createLucideIcon("chrome", __iconNode$1);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "16", height: "16", x: "4", y: "4", rx: "2", key: "14l7u7" }],
  ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" }],
  ["path", { d: "M15 2v2", key: "13l42r" }],
  ["path", { d: "M15 20v2", key: "15mkzm" }],
  ["path", { d: "M2 15h2", key: "1gxd5l" }],
  ["path", { d: "M2 9h2", key: "1bbxkp" }],
  ["path", { d: "M20 15h2", key: "19e6y8" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M9 2v2", key: "165o2o" }],
  ["path", { d: "M9 20v2", key: "i2bqo8" }]
];
const Cpu = createLucideIcon("cpu", __iconNode);
function BrowserDeviceInfo() {
  const { toast } = useToast();
  const [info, setInfo] = reactExports.useState(null);
  const [copied, setCopied] = reactExports.useState(false);
  reactExports.useEffect(() => {
    detectDeviceInfo();
  }, []);
  const detectDeviceInfo = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const ua = navigator.userAgent;
    let browser = "Unknown";
    let browserVersion = "";
    if (ua.includes("Firefox/")) {
      browser = "Firefox";
      browserVersion = ((_a = ua.match(/Firefox\/(\d+\.\d+)/)) == null ? void 0 : _a[1]) || "";
    } else if (ua.includes("Edg/")) {
      browser = "Microsoft Edge";
      browserVersion = ((_b = ua.match(/Edg\/(\d+\.\d+)/)) == null ? void 0 : _b[1]) || "";
    } else if (ua.includes("Chrome/")) {
      browser = "Google Chrome";
      browserVersion = ((_c = ua.match(/Chrome\/(\d+\.\d+)/)) == null ? void 0 : _c[1]) || "";
    } else if (ua.includes("Safari/") && !ua.includes("Chrome")) {
      browser = "Safari";
      browserVersion = ((_d = ua.match(/Version\/(\d+\.\d+)/)) == null ? void 0 : _d[1]) || "";
    }
    let os = "Unknown";
    if (ua.includes("Windows NT 10.0")) os = "Windows 10/11";
    else if (ua.includes("Windows NT 6.3")) os = "Windows 8.1";
    else if (ua.includes("Windows NT 6.2")) os = "Windows 8";
    else if (ua.includes("Windows NT 6.1")) os = "Windows 7";
    else if (ua.includes("Mac OS X")) os = "macOS " + (((_e = ua.match(/Mac OS X (\d+[._]\d+)/)) == null ? void 0 : _e[1].replace("_", ".")) || "");
    else if (ua.includes("Android")) os = "Android " + (((_f = ua.match(/Android (\d+\.\d+)/)) == null ? void 0 : _f[1]) || "");
    else if (ua.includes("iPhone") || ua.includes("iPad")) os = "iOS " + (((_g = ua.match(/OS (\d+_\d+)/)) == null ? void 0 : _g[1].replace("_", ".")) || "");
    else if (ua.includes("Linux")) os = "Linux";
    let device = "Desktop";
    if (ua.includes("Mobile")) device = "Mobile";
    else if (ua.includes("Tablet") || ua.includes("iPad")) device = "Tablet";
    const deviceInfo = {
      browser,
      browserVersion,
      engine: ua.includes("Gecko") ? "Gecko" : ua.includes("WebKit") ? "WebKit" : "Unknown",
      platform: navigator.platform,
      os,
      device,
      language: navigator.language,
      languages: navigator.languages ? Array.from(navigator.languages) : [navigator.language],
      screen: `${window.screen.width} x ${window.screen.height}`,
      colorDepth: window.screen.colorDepth,
      pixelRatio: window.devicePixelRatio,
      viewport: `${window.innerWidth} x ${window.innerHeight}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      cookiesEnabled: navigator.cookieEnabled,
      doNotTrack: navigator.doNotTrack || "Not set",
      javaEnabled: false,
      onlineStatus: navigator.onLine,
      cores: navigator.hardwareConcurrency || 0,
      memory: navigator.deviceMemory,
      connection: (_h = navigator.connection) == null ? void 0 : _h.effectiveType,
      touchSupport: "ontouchstart" in window || navigator.maxTouchPoints > 0
    };
    setInfo(deviceInfo);
  };
  const copyToClipboard = () => {
    if (!info) return;
    const text = `
Browser: ${info.browser} ${info.browserVersion}
OS: ${info.os}
Device: ${info.device}
Screen: ${info.screen}
Viewport: ${info.viewport}
Language: ${info.language}
Timezone: ${info.timezone}
Online: ${info.onlineStatus ? "Yes" : "No"}
    `.trim();
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Device info copied to clipboard"
    });
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Browser & Device Info — Check Your System Details",
        description: "View your browser, operating system, screen resolution, and device information instantly. Free browser fingerprint checker.",
        keywords: "browser info, device info, user agent, screen resolution, browser fingerprint, system info, browser details, device checker"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "top", className: "mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 animate-fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "w-20 h-20 text-indigo-600 dark:text-indigo-400 animate-pulse" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent", children: "Browser & Device Info" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Discover everything about your browser, operating system, and device specifications! 🖥️" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "mb-6" }),
      info && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto mb-8 animate-bounce-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: copyToClipboard,
            size: "lg",
            variant: "outline",
            className: "border-2",
            children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 mr-2 text-green-600" }),
              "Copied!"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-5 h-5 mr-2" }),
              "Copy Info"
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: detectDeviceInfo,
            size: "lg",
            className: "bg-gradient-to-r from-indigo-600 to-purple-600",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 mr-2" }),
              "Refresh"
            ]
          }
        )
      ] }) }),
      info && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto mb-12 animate-slide-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 hover:shadow-2xl hover:shadow-indigo-500/20 transform hover:scale-105 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Chrome, { className: "w-8 h-8 text-indigo-600 dark:text-indigo-400 animate-bounce" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Browser" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-indigo-600 dark:text-indigo-400", children: info.browser }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                "Version ",
                info.browserVersion
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                info.engine,
                " Engine"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-105 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "w-8 h-8 text-purple-600 dark:text-purple-400 animate-bounce", style: { animationDelay: "0.1s" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Operating System" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-purple-600 dark:text-purple-400", children: info.os }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: info.platform })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-pink-200 dark:border-pink-800 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/50 dark:to-rose-950/50 hover:shadow-2xl hover:shadow-pink-500/20 transform hover:scale-105 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-8 h-8 text-pink-600 dark:text-pink-400 animate-bounce", style: { animationDelay: "0.2s" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Device Type" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-pink-600 dark:text-pink-400", children: info.device }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: info.touchSupport ? "✅ Touch Enabled" : "❌ No Touch" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-105 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "w-8 h-8 text-blue-600 dark:text-blue-400 animate-bounce", style: { animationDelay: "0.3s" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Screen Resolution" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400", children: info.screen }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                info.colorDepth,
                "-bit Color"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                "Pixel Ratio: ",
                info.pixelRatio,
                "x"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 hover:shadow-2xl hover:shadow-green-500/20 transform hover:scale-105 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-8 h-8 text-green-600 dark:text-green-400 animate-bounce", style: { animationDelay: "0.4s" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Viewport Size" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-green-600 dark:text-green-400", children: info.viewport }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Current Window" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/50 dark:to-yellow-950/50 hover:shadow-2xl hover:shadow-orange-500/20 transform hover:scale-105 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-8 h-8 text-orange-600 dark:text-orange-400 animate-bounce", style: { animationDelay: "0.5s" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Language" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-orange-600 dark:text-orange-400", children: info.language }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: info.languages.slice(0, 3).join(", ") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-teal-200 dark:border-teal-800 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/50 dark:to-cyan-950/50 hover:shadow-2xl hover:shadow-teal-500/20 transform hover:scale-105 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-8 h-8 text-teal-600 dark:text-teal-400 animate-bounce", style: { animationDelay: "0.6s" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Timezone" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-teal-600 dark:text-teal-400", children: info.timezone }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50 hover:shadow-2xl hover:shadow-violet-500/20 transform hover:scale-105 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "w-8 h-8 text-violet-600 dark:text-violet-400 animate-bounce", style: { animationDelay: "0.7s" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Connection" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-bold ${info.onlineStatus ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`, children: info.onlineStatus ? "🟢 Online" : "🔴 Offline" }),
              info.connection && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: info.connection.toUpperCase() })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/50 dark:to-blue-950/50 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "w-8 h-8 text-cyan-600 dark:text-cyan-400 animate-bounce", style: { animationDelay: "0.8s" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "CPU Cores" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-cyan-600 dark:text-cyan-400", children: info.cores || "Unknown" }),
              info.memory && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                info.memory,
                " GB RAM"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-6 md:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-2 border-purple-200 dark:border-purple-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Cookies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Browser Storage" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-2xl ${info.cookiesEnabled ? "text-green-600" : "text-red-600"}`, children: info.cookiesEnabled ? "✅" : "❌" })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-2 border-blue-200 dark:border-blue-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Do Not Track" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Privacy Signal" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-blue-600 dark:text-blue-400", children: info.doNotTrack })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-2 border-green-200 dark:border-green-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Java Support" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Plugin Status" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-2xl ${info.javaEnabled ? "text-green-600" : "text-gray-400"}`, children: info.javaEnabled ? "✅" : "❌" })
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AmazonAffiliate, { calculatorTitle: "Privacy Tools", placement: "content" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto mt-16 space-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-article" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-indigo-200 dark:border-indigo-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-8 h-8 text-indigo-600" }),
            "What is Browser Fingerprinting? 🔍"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose dark:prose-invert max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed", children: [
              "Every time you visit a website, your browser reveals tons of information about you! ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Browser fingerprinting" }),
              ' is a technique that combines all these details (screen size, fonts, plugins, timezone, etc.) to create a unique "fingerprint" that can track you across websites—even without cookies! 🕵️'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed mt-4", children: [
              "Your fingerprint is so unique that research shows ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "87% of browsers can be uniquely identified" }),
              " just from these technical details. Scary, right? But understanding what's exposed is the first step to protecting your privacy! 🛡️"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4 mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-red-600 dark:text-red-400 mb-2", children: "⚠️ High Risk Data" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Canvas fingerprint" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• WebGL renderer" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Installed fonts" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Audio context" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-yellow-600 dark:text-yellow-400 mb-2", children: "⚡ Medium Risk Data" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Screen resolution" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Timezone" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Language settings" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Platform details" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-2", children: "✅ Low Risk Data" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Browser type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Device type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• OS version" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Online status" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "sidebar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-200 dark:border-purple-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-8 h-8 text-purple-600" }),
            "Understanding User Agents 🤖"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose dark:prose-invert max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed mb-6", children: [
              "Your ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "User Agent" }),
              " is a text string your browser sends to every website, announcing who you are. It's like your browser's business card! Here's what a typical one looks like and what each part means:"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gray-100 dark:bg-gray-800 font-mono text-sm mb-6 overflow-x-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm break-all", children: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-blue-600 dark:text-blue-400 mb-2", children: "Mozilla/5.0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: 'Historical compatibility token. ALL browsers claim to be "Mozilla" for legacy reasons dating back to the 1990s browser wars!' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-purple-50 dark:bg-purple-950/30 border-l-4 border-purple-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-purple-600 dark:text-purple-400 mb-2", children: "(Windows NT 10.0; Win64; x64)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Operating system info: Windows 10/11, 64-bit architecture. Tells websites what OS you're running." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-green-50 dark:bg-green-950/30 border-l-4 border-green-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-2", children: "AppleWebKit/537.36" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Rendering engine version. Chrome, Safari, and Edge all use WebKit/Blink (a WebKit fork)." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-orange-600 dark:text-orange-400 mb-2", children: "Chrome/120.0.0.0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Actual browser name and version number. This is the real identity of your browser!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-pink-50 dark:bg-pink-950/30 border-l-4 border-pink-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-pink-600 dark:text-pink-400 mb-2", children: "Safari/537.36" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "More compatibility nonsense! Chrome pretends to be Safari to avoid website blocking. It's a mess! 😅" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-sm text-muted-foreground p-4 rounded-lg bg-gray-100 dark:bg-gray-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "💡 Fun Fact:" }),
              ` The User Agent string is a hilarious historical accident. Every browser lies about its identity to maintain compatibility with websites that check for specific browsers. It's basically the internet's version of "I'm not a robot" but for browsers! 🤖`
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 dark:border-green-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-8 h-8 text-green-600" }),
            "How to Protect Your Privacy 🛡️"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "1️⃣" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Use Privacy-Focused Browsers" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Try Brave, Firefox with privacy add-ons, or Tor Browser for maximum anonymity" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "2️⃣" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Install Privacy Extensions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "uBlock Origin blocks trackers, Privacy Badger stops fingerprinting, HTTPS Everywhere encrypts" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "3️⃣" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Use VPN Services" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Hide your IP address and location (but VPNs can't stop fingerprinting!)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "4️⃣" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Enable Do Not Track" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Politely asks websites not to track you (they often ignore it, but worth enabling!)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "5️⃣" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Clear Cookies Regularly" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Use containers (Firefox) or Incognito mode to separate browsing sessions" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "6️⃣" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Resist Fingerprinting" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Firefox's Enhanced Tracking Protection resists common fingerprinting techniques" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "7️⃣" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Use Different Browsers" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Separate work/personal browsing to compartmentalize your digital footprint" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "8️⃣" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Disable JavaScript Selectively" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Use NoScript or uMatrix to block scripts on sketchy sites (breaks many sites though!)" })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-orange-200 dark:border-orange-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-8 h-8 text-orange-600" }),
            "Browser Privacy Comparison 2024 🏆"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-2 border-orange-200 dark:border-orange-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-orange-600 dark:text-orange-400", children: "🦁 Brave Browser" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "⭐⭐⭐⭐⭐" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Privacy:" }),
                " Excellent • Built-in ad/tracker blocking, fingerprint randomization, Tor mode"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pros:" }),
                " Best privacy out-of-box, crypto wallet, rewards • ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cons:" }),
                " Smaller market share, some compatibility issues"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-2 border-blue-200 dark:border-blue-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-blue-600 dark:text-blue-400", children: "🦊 Firefox" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "⭐⭐⭐⭐" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Privacy:" }),
                " Very Good • Enhanced Tracking Protection, fingerprint resistance, open source"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pros:" }),
                " Customizable, great extensions, non-profit • ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cons:" }),
                " Slower than Chrome, telemetry enabled by default"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 border-2 border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-green-600 dark:text-green-400", children: "🍎 Safari" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "⭐⭐⭐⭐" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Privacy:" }),
                " Very Good • Intelligent Tracking Prevention, privacy labels in App Store"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pros:" }),
                " Apple ecosystem integration, battery efficient • ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cons:" }),
                " Mac/iOS only, limited extension support"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 border-2 border-cyan-200 dark:border-cyan-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-cyan-600 dark:text-cyan-400", children: "🔵 Microsoft Edge" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "⭐⭐⭐" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Privacy:" }),
                " Good • Tracking prevention, InPrivate mode, password leak detection"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pros:" }),
                " Fast, Windows integration, vertical tabs • ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cons:" }),
                " Microsoft telemetry, promotes Bing heavily"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 border-2 border-red-200 dark:border-red-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-red-600 dark:text-red-400", children: "🔴 Google Chrome" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "⭐⭐" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Privacy:" }),
                " Poor • Heavy tracking for ad targeting, sync with Google account"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pros:" }),
                " Fastest, best compatibility, huge extension library • ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cons:" }),
                " Google surveillance, resource-hungry, privacy nightmare"
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-article" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-in {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
      ` })
  ] });
}
export {
  BrowserDeviceInfo as default
};
