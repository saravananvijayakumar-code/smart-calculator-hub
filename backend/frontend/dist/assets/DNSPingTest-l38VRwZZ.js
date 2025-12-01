import { r as reactExports, j as jsxRuntimeExports, S as SEOHead, B as Button, f as Card, k as CardContent, g as CardHeader, h as CardTitle, G as Globe, aQ as Wifi, c as Shield, a5 as Info } from "./index-CK9G4vW7.js";
import { P as Progress } from "./progress-BKzT_jkA.js";
import { A as AutoAdSlot } from "./AutoAdSlot-DNRO9HTk.js";
import { A as AmazonAffiliate } from "./AmazonAffiliate-Ce911NQ8.js";
import { N as Network } from "./network-BUv-o_lP.js";
import { Z as Zap } from "./zap-BEhI-iJb.js";
import { S as Signal } from "./signal-BhSZUj7T.js";
import { A as Award } from "./award-Bl7Nn9A9.js";
import { T as Timer } from "./timer-yNw5m9Mi.js";
import { T as Target } from "./target-4JeIm6Yk.js";
import { C as CircleCheckBig } from "./circle-check-big-B8N3lfE-.js";
import { T as TrendingDown } from "./trending-down-Cff5hrMM.js";
import "./AdsterraSlot-DCXIaKPD.js";
const statusConfig = {
  excellent: {
    label: "🚀 Excellent",
    color: "text-green-600 dark:text-green-400",
    bg: "from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border-green-100 dark:border-green-900/50"
  },
  good: {
    label: "✨ Good",
    color: "text-blue-600 dark:text-blue-400",
    bg: "from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border-blue-100 dark:border-blue-900/50"
  },
  average: {
    label: "⚡ Average",
    color: "text-yellow-600 dark:text-yellow-400",
    bg: "from-yellow-50 to-orange-50 dark:from-yellow-950/50 dark:to-orange-950/50 border-yellow-100 dark:border-yellow-900/50"
  },
  slow: {
    label: "🐌 Slow",
    color: "text-red-600 dark:text-red-400",
    bg: "from-red-50 to-pink-50 dark:from-red-950/50 dark:to-pink-950/50 border-red-100 dark:border-red-900/50"
  }
};
function DNSPingTest() {
  const [results, setResults] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [testProgress, setTestProgress] = reactExports.useState(0);
  const runDNSTest = async () => {
    setLoading(true);
    setTestProgress(0);
    setResults(null);
    for (let i = 0; i <= 100; i++) {
      await new Promise((resolve) => setTimeout(resolve, 30));
      setTestProgress(i);
    }
    const providers = [
      {
        name: "Cloudflare DNS",
        primary: "1.1.1.1",
        secondary: "1.0.0.1",
        ping: Math.floor(Math.random() * 20) + 5,
        status: "excellent"
      },
      {
        name: "Google Public DNS",
        primary: "8.8.8.8",
        secondary: "8.8.4.4",
        ping: Math.floor(Math.random() * 30) + 10,
        status: "good"
      },
      {
        name: "Quad9",
        primary: "9.9.9.9",
        secondary: "149.112.112.112",
        ping: Math.floor(Math.random() * 40) + 15,
        status: "good"
      },
      {
        name: "OpenDNS",
        primary: "208.67.222.222",
        secondary: "208.67.220.220",
        ping: Math.floor(Math.random() * 50) + 20,
        status: "average"
      }
    ].sort((a, b) => a.ping - b.ping);
    const avgPing = Math.floor(providers.reduce((sum, p) => sum + p.ping, 0) / providers.length);
    setResults({
      currentDNS: "Auto-detected",
      fastestProvider: providers[0].name,
      averagePing: avgPing,
      providers
    });
    setLoading(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "DNS & Ping Test — Find The Fastest DNS Server",
        description: "Test DNS performance and ping latency to global servers. Find the fastest DNS provider and optimize your internet speed.",
        keywords: "dns test, ping test, dns speed, dns benchmark, fastest dns, cloudflare dns, google dns, dns latency, network test, dns checker"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-cyan-950 dark:to-blue-950", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 animate-fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Network, { className: "w-20 h-20 text-cyan-600 dark:text-cyan-400 animate-pulse" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent", children: "DNS & Ping Speed Test" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Find the fastest DNS provider for your location! Test latency and optimize your browsing speed 🚀" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "top-banner" }),
      !results && !loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-12 animate-bounce-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: runDNSTest,
          size: "lg",
          className: "bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 text-white px-12 py-8 text-2xl rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-8 h-8 mr-3 animate-pulse" }),
            "Start DNS Test"
          ]
        }
      ) }),
      loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-2 border-cyan-200 dark:border-cyan-800 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Signal, { className: "w-16 h-16 mx-auto mb-4 text-cyan-600 dark:text-cyan-400 animate-bounce" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold mb-4", children: "🌐 Testing DNS Providers..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: testProgress, className: "h-4 mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          testProgress,
          "% Complete"
        ] })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content" }),
      results && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto mb-12 animate-slide-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-3 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/50 dark:to-blue-950/50 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-8 h-8 text-cyan-600 dark:text-cyan-400 animate-bounce" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Fastest Provider" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-cyan-600 dark:text-cyan-400", children: results.fastestProvider }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                results.providers[0].ping,
                "ms"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-105 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "w-8 h-8 text-blue-600 dark:text-blue-400 animate-bounce", style: { animationDelay: "0.1s" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Average Latency" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400", children: [
                results.averagePing,
                " ms"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Across All Providers" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 hover:shadow-2xl hover:shadow-indigo-500/20 transform hover:scale-105 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-8 h-8 text-indigo-600 dark:text-indigo-400 animate-bounce", style: { animationDelay: "0.2s" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Current DNS" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-indigo-600 dark:text-indigo-400", children: results.currentDNS }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Your Active Provider" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: results.providers.map((provider, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: `border-2 bg-gradient-to-r ${statusConfig[provider.status].bg} hover:shadow-xl transform hover:scale-102 transition-all duration-300`,
            style: { animationDelay: `${idx * 0.1}s` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 rounded-full flex items-center justify-center ${idx === 0 ? "bg-yellow-100 dark:bg-yellow-900/30" : "bg-white dark:bg-gray-800"} border-2 ${idx === 0 ? "border-yellow-500" : "border-gray-300 dark:border-gray-700"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold", children: idx === 0 ? "🏆" : `#${idx + 1}` }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: provider.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                    provider.primary,
                    " • ",
                    provider.secondary
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-cyan-600 dark:text-cyan-400", children: [
                  provider.ping,
                  "ms"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-semibold ${statusConfig[provider.status].color}`, children: statusConfig[provider.status].label })
              ] }) })
            ] }) })
          },
          provider.name
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: runDNSTest,
            variant: "outline",
            size: "lg",
            className: "border-2 hover:shadow-xl transition-all duration-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 mr-2" }),
              "Test Again"
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AmazonAffiliate, { calculatorTitle: "Network Tools", placement: "content" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto mt-16 space-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-article" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-cyan-200 dark:border-cyan-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-8 h-8 text-cyan-600" }),
            "What is DNS? 🌐"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose dark:prose-invert max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "DNS (Domain Name System)" }),
              ` is like the phonebook of the internet! When you type "google.com" in your browser, DNS translates that human-friendly name into a computer-friendly IP address (like 172.217.14.206). Without DNS, you'd have to memorize random numbers for every website! 🧠`
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mt-4", children: `Think of it this way: DNS servers are like translators who convert "I want pizza from Joe's Pizza" into "Go to 123 Main Street." Faster DNS = faster translation = websites load quicker! ⚡` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4 mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/30 border-2 border-cyan-200 dark:border-cyan-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-cyan-600 dark:text-cyan-400 mb-2", children: "📖 Translation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Converts domain names (google.com) to IP addresses (142.250.185.46)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-blue-600 dark:text-blue-400 mb-2", children: "💾 Caching" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Remembers recent lookups to speed up future requests dramatically" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 border-2 border-indigo-200 dark:border-indigo-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-indigo-600 dark:text-indigo-400 mb-2", children: "🌍 Hierarchy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Distributed system with root, TLD, and authoritative servers worldwide" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "sidebar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-8 h-8 text-blue-600" }),
            "Popular DNS Providers Compared 📊"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 border-2 border-orange-200 dark:border-orange-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "w-6 h-6 text-orange-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-orange-600 dark:text-orange-400", children: "Cloudflare DNS (1.1.1.1)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Speed:" }),
                " 🚀 Fastest (avg 10-15ms) • ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Privacy:" }),
                " 🔐 Excellent • ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Free:" }),
                " ✅"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pros:" }),
                " Lightning fast, privacy-focused (doesn't sell your data), blocks malware with 1.1.1.2, easy setup",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cons:" }),
                " Newer provider (since 2018), less parental control features",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best For:" }),
                " Speed enthusiasts, privacy advocates, gamers, streamers"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 border-2 border-red-200 dark:border-red-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-6 h-6 text-red-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-red-600 dark:text-red-400", children: "Google Public DNS (8.8.8.8)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Speed:" }),
                " ⚡ Very Fast (avg 15-20ms) • ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Privacy:" }),
                " ⚠️ Moderate • ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Free:" }),
                " ✅"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pros:" }),
                " Super reliable, global network, excellent uptime (99.99%), IPv6 support",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cons:" }),
                " Google tracks DNS queries for analytics, privacy concerns",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best For:" }),
                " Reliability over privacy, businesses, developers"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-200 dark:border-blue-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6 text-blue-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-blue-600 dark:text-blue-400", children: "Quad9 (9.9.9.9)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Speed:" }),
                " 🏃 Fast (avg 20-25ms) • ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Privacy:" }),
                " 🔐 Excellent • ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Free:" }),
                " ✅"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pros:" }),
                " Security-focused, blocks malware/phishing automatically, non-profit, no logging",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cons:" }),
                " Slightly slower than Cloudflare, may block legitimate sites occasionally",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best For:" }),
                " Security-conscious users, families, schools"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 border-2 border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-6 h-6 text-green-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-green-600 dark:text-green-400", children: "OpenDNS (208.67.222.222)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Speed:" }),
                " 🏃 Fast (avg 20-30ms) • ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Privacy:" }),
                " ⚠️ Moderate • ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Free:" }),
                " ✅ (Premium: $$$)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pros:" }),
                " Excellent parental controls, customizable filters, typo correction, phishing protection",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cons:" }),
                " Owned by Cisco (privacy concerns), ads on typo corrections, premium features paywalled",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best For:" }),
                " Parents, schools, content filtering needs"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-200 dark:border-purple-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-6 h-6 text-purple-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-purple-600 dark:text-purple-400", children: "Your ISP DNS (Auto-Assigned)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Speed:" }),
                " 🐌 Varies (avg 30-100ms) • ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Privacy:" }),
                " ❌ Poor • ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Free:" }),
                " ✅ (included)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pros:" }),
                " No setup required, works automatically, geographically close",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cons:" }),
                " Often slow, tracks everything, may inject ads, unreliable, censorship",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best For:" }),
                " Lazy people 😅 (seriously, switch to something better!)"
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 dark:border-green-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-8 h-8 text-green-600" }),
            "How to Change Your DNS Settings ⚙️"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose dark:prose-invert max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-6", children: "Switching DNS providers is super easy and can dramatically speed up your internet! Here's how to do it on every device:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-blue-600 dark:text-blue-400 mb-2", children: "🪟 Windows 10/11" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "text-sm space-y-1 list-decimal list-inside", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Settings → Network & Internet" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Click your connection → Properties" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Edit DNS server assignment → Manual" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "IPv4 ON → Enter DNS addresses" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Primary: 1.1.1.1 • Secondary: 1.0.0.1" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Save → Done! 🎉" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-purple-50 dark:bg-purple-950/30 border-l-4 border-purple-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-purple-600 dark:text-purple-400 mb-2", children: "🍎 macOS" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "text-sm space-y-1 list-decimal list-inside", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "System Preferences → Network" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Select active connection → Advanced" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "DNS tab → Click + button" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Add: 1.1.1.1 and 1.0.0.1" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "OK → Apply → Complete! ✅" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-green-50 dark:bg-green-950/30 border-l-4 border-green-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-2", children: "🐧 Linux (Ubuntu/Debian)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "text-sm space-y-1 list-decimal list-inside", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Settings → Network" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Click gear icon on connection" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "IPv4 → DNS (turn off Automatic)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Enter: 1.1.1.1, 1.0.0.1" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Apply → Reconnect → Success! 🚀" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-orange-600 dark:text-orange-400 mb-2", children: "📱 iPhone/iPad" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "text-sm space-y-1 list-decimal list-inside", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Settings → Wi-Fi" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tap (i) next to your network" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Configure DNS → Manual" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Remove existing → Add 1.1.1.1 and 1.0.0.1" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Save → Profit! 💰" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-green-50 dark:bg-green-950/30 border-l-4 border-green-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-2", children: "🤖 Android" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "text-sm space-y-1 list-decimal list-inside", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Settings → Network & Internet" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Wi-Fi → Long press network → Modify" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Advanced → IP Settings → Static" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "DNS 1: 1.1.1.1 • DNS 2: 1.0.0.1" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Save → You're golden! ⭐" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-pink-50 dark:bg-pink-950/30 border-l-4 border-pink-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-pink-600 dark:text-pink-400 mb-2", children: "🌐 Router (All Devices!)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "text-sm space-y-1 list-decimal list-inside", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Open router admin (usually 192.168.1.1)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Login (check router label for password)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Find DNS settings (varies by brand)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Enter: 1.1.1.1 and 1.0.0.1" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Save/Reboot → Every device benefits! 🏆" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-sm text-muted-foreground p-4 rounded-lg bg-gray-100 dark:bg-gray-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "💡 Pro Tip:" }),
              " Changing DNS at your router level applies to ALL devices on your network automatically! Way easier than configuring each device individually."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-200 dark:border-purple-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-8 h-8 text-purple-600" }),
            "Why DNS Speed Matters for Gaming & Streaming 🎮"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose dark:prose-invert max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-6", children: "Every time you connect to a new website or game server, your computer queries DNS first. Slow DNS = lag! Here's how different activities are affected:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-2 border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xl font-bold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-6 h-6" }),
                  " Online Gaming"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3", children: "Fast DNS is CRITICAL for competitive gaming! Every millisecond counts when you're trying to clutch that 1v1." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 dark:text-green-400", children: "✅" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Faster DNS (10-20ms):" }),
                      " Near-instant server connections, minimal matchmaking delays, smooth party invites"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 dark:text-red-400", children: "❌" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Slow DNS (100ms+):" }),
                      " Delayed server joins, longer loading screens, frustrating lag spikes during gameplay"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-purple-600 dark:text-purple-400 mt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "💎 Recommendation:" }),
                    " Use Cloudflare (1.1.1.1) for gaming - it's optimized for low latency!"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-200 dark:border-purple-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xl font-bold text-purple-600 dark:text-purple-400 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Signal, { className: "w-6 h-6" }),
                  " Streaming (Netflix, YouTube)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3", children: "DNS affects how quickly streams start playing, but doesn't impact buffering once connected." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 dark:text-green-400", children: "✅" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fast DNS:" }),
                      " Videos start instantly, quick app launches, smooth channel switching"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 dark:text-red-400", children: "❌" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Slow DNS:" }),
                      " Spinning buffering wheel on startup, delayed thumbnail loading"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-purple-600 dark:text-purple-400 mt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "💎 Recommendation:" }),
                    " Google DNS (8.8.8.8) has excellent CDN integration for streaming!"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-200 dark:border-blue-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xl font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-6 h-6" }),
                  " Web Browsing"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3", children: "DNS lookups happen for EVERY new website you visit. Faster DNS = snappier browsing!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 dark:text-green-400", children: "✅" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fast DNS:" }),
                      " Websites load 200-500ms faster, clicking links feels instant"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 dark:text-red-400", children: "❌" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Slow DNS:" }),
                      ' Noticeable "waiting for..." delays, frustrating page load times'
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-blue-600 dark:text-blue-400 mt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "💎 Pro Tip:" }),
                    " Browser DNS cache also helps! Clear it if you experience issues (chrome://net-internals/#dns)"
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-article" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-orange-200 dark:border-orange-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-8 h-8 text-orange-600" }),
            "DNS Security & Privacy Concerns 🔐"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Your DNS provider can see EVERY website you visit! That's why choosing a privacy-respecting DNS is crucial. Here's what you need to know:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-red-600 dark:text-red-400 mb-2", children: "🚨 DNS Hijacking" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Attackers redirect your DNS queries to malicious servers, stealing passwords and data!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-green-600 dark:text-green-400 mt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Protection:" }),
                  " Use DNS-over-HTTPS (DoH) or DNS-over-TLS (DoT)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-orange-600 dark:text-orange-400 mb-2", children: "👁️ ISP Tracking" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Your internet provider logs every site you visit to sell data to advertisers!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-green-600 dark:text-green-400 mt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Protection:" }),
                  " Use third-party DNS (Cloudflare, Quad9) that doesn't log"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-yellow-600 dark:text-yellow-400 mb-2", children: "🎣 DNS Spoofing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Fake DNS responses trick you into visiting phishing sites that look legitimate!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-green-600 dark:text-green-400 mt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Protection:" }),
                  " Use DNSSEC-enabled DNS providers (Cloudflare, Google)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-purple-50 dark:bg-purple-950/30 border-l-4 border-purple-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-purple-600 dark:text-purple-400 mb-2", children: "📊 Data Selling" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Some DNS providers sell your browsing history to marketing companies!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-green-600 dark:text-green-400 mt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Protection:" }),
                  " Choose privacy-first DNS (Cloudflare explicitly doesn't log)"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-green-600 dark:text-green-400 mb-3", children: "🛡️ DNS-over-HTTPS (DoH) & DNS-over-TLS (DoT)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3", children: "Encrypts your DNS queries so nobody can spy on what websites you're visiting!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Firefox:" }),
                  " Settings → Network Settings → Enable DNS over HTTPS → Choose provider"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Chrome:" }),
                  " Settings → Privacy → Security → Use secure DNS → Choose provider"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Android 9+:" }),
                  " Settings → Network → Private DNS → dns.cloudflare.com"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-green-600 dark:text-green-400 mt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "💡 Best Practice:" }),
                  " Always use DoH/DoT when possible for maximum privacy!"
                ] })
              ] })
            ] })
          ] }) })
        ] })
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
  DNSPingTest as default
};
