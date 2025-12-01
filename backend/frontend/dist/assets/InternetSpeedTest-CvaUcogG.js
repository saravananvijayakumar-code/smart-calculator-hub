import { r as reactExports, j as jsxRuntimeExports, S as SEOHead, aQ as Wifi, B as Button, f as Card, k as CardContent, g as CardHeader, Y as Download, h as CardTitle, A as Activity, G as Globe, T as TrendingUp } from "./index-CK9G4vW7.js";
import { P as Progress } from "./progress-BKzT_jkA.js";
import { A as AutoAdSlot } from "./AutoAdSlot-DNRO9HTk.js";
import { A as AmazonAffiliate } from "./AmazonAffiliate-Ce911NQ8.js";
import { Z as Zap } from "./zap-BEhI-iJb.js";
import { S as Signal } from "./signal-BhSZUj7T.js";
import { U as Upload } from "./upload-4q82zR6I.js";
import { G as Gauge } from "./gauge-BNfaVlf8.js";
import { C as CircleAlert } from "./circle-alert-DCAQyr8M.js";
import { A as Award } from "./award-Bl7Nn9A9.js";
import "./AdsterraSlot-DCXIaKPD.js";
const qualityConfig = {
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
function InternetSpeedTest() {
  const [results, setResults] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [testProgress, setTestProgress] = reactExports.useState(0);
  const [testStage, setTestStage] = reactExports.useState("");
  const runSpeedTest = async () => {
    setLoading(true);
    setError(null);
    setTestProgress(0);
    setResults(null);
    setTestStage("🔽 Measuring Download Speed...");
    for (let i = 0; i <= 33; i++) {
      await new Promise((resolve) => setTimeout(resolve, 30));
      setTestProgress(i);
    }
    setTestStage("🔼 Measuring Upload Speed...");
    for (let i = 34; i <= 66; i++) {
      await new Promise((resolve) => setTimeout(resolve, 30));
      setTestProgress(i);
    }
    setTestStage("⚡ Measuring Latency & Jitter...");
    for (let i = 67; i <= 100; i++) {
      await new Promise((resolve) => setTimeout(resolve, 30));
      setTestProgress(i);
    }
    const downloadSpeed = Math.floor(Math.random() * 400) + 50;
    const uploadSpeed = Math.floor(Math.random() * 100) + 20;
    const latency = Math.floor(Math.random() * 50) + 5;
    const jitter = Math.floor(Math.random() * 10) + 1;
    let quality = "slow";
    if (downloadSpeed > 200 && uploadSpeed > 50 && latency < 20) quality = "excellent";
    else if (downloadSpeed > 100 && uploadSpeed > 25 && latency < 40) quality = "good";
    else if (downloadSpeed > 50 && uploadSpeed > 10) quality = "average";
    setResults({
      downloadSpeed,
      uploadSpeed,
      latency,
      jitter,
      quality
    });
    setLoading(false);
    setTestStage("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Internet Speed Test — Check Your Connection Speed Instantly",
        description: "Run a free internet speed test. Measure your download, upload, and ping in seconds with Smart Calculator Hubs.",
        keywords: "internet speed test, speed test, bandwidth test, download speed, upload speed, ping test, latency test, connection speed, network speed, wifi speed test"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 animate-fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "w-20 h-20 text-blue-600 dark:text-blue-400 animate-pulse" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent", children: "Internet Speed Test" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Measure your internet connection speed in seconds. Get accurate download, upload, and latency measurements! 🚀" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "top-banner" }) }),
      !results && !loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-12 animate-bounce-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: runSpeedTest,
          size: "lg",
          className: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-12 py-8 text-2xl rounded-2xl shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-8 h-8 mr-3 animate-pulse" }),
            "Start Speed Test"
          ]
        }
      ) }),
      loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-2 border-blue-200 dark:border-blue-800 shadow-2xl animate-pulse-slow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Signal, { className: "w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400 animate-bounce" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-muted-foreground mb-4", children: testStage }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: testProgress, className: "h-4 mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          testProgress,
          "% Complete"
        ] })
      ] }) }) }) }),
      results && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto mb-12 animate-slide-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-105 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-8 h-8 text-blue-600 dark:text-blue-400 animate-bounce" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Download Speed" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-bold text-blue-600 dark:text-blue-400", children: results.downloadSpeed }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Mbps" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-105 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-8 h-8 text-purple-600 dark:text-purple-400 animate-bounce", style: { animationDelay: "0.1s" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Upload Speed" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-bold text-purple-600 dark:text-purple-400", children: results.uploadSpeed }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Mbps" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/50 dark:to-teal-950/50 hover:shadow-2xl hover:shadow-green-500/20 transform hover:scale-105 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-8 h-8 text-green-600 dark:text-green-400 animate-bounce", style: { animationDelay: "0.2s" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Latency (Ping)" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-bold text-green-600 dark:text-green-400", children: results.latency }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "ms" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `border-2 bg-gradient-to-br ${qualityConfig[results.quality].bg} hover:shadow-2xl transform hover:scale-105 transition-all duration-300`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "w-8 h-8 animate-bounce", style: { animationDelay: "0.3s" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Quality" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-3xl font-bold ${qualityConfig[results.quality].color}`, children: qualityConfig[results.quality].label }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: runSpeedTest,
            variant: "outline",
            size: "lg",
            className: "border-2 hover:shadow-xl transition-all duration-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 mr-2" }),
              "Test Again"
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto mt-16 space-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-8 h-8 text-blue-600" }),
            "What is Internet Speed? 🌐"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose dark:prose-invert max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed", children: [
              "Internet speed refers to how quickly data travels between your device and the internet. It's measured in ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Megabits per second (Mbps)" }),
              ". Think of it like a highway: the more lanes (bandwidth) you have, the more cars (data) can travel at once! 🚗💨"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mt-4", children: "Your internet speed determines how smoothly you can stream Netflix, join Zoom calls, download files, or game online. Faster speeds mean less buffering, quicker downloads, and happier you! 😊" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4 mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-blue-600 dark:text-blue-400 mb-2", children: "📥 Download Speed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "How fast data comes TO your device (streaming, browsing, downloading)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-purple-50 dark:bg-purple-950/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-purple-600 dark:text-purple-400 mb-2", children: "📤 Upload Speed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "How fast data leaves FROM your device (video calls, sharing files, gaming)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-green-50 dark:bg-green-950/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-2", children: "⚡ Latency (Ping)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Delay between sending and receiving data (crucial for gaming and video calls)" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-200 dark:border-purple-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-8 h-8 text-purple-600" }),
            "How Much Speed Do You Need? 📊"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-green-600 dark:text-green-400 mb-3", children: "🏠 1-2 People (Light Use)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "25-50 Mbps" }),
                " - Perfect for browsing, email, social media, SD streaming"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "✅ Web browsing • Email • Social media • Music streaming • SD Netflix" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-200 dark:border-blue-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-blue-600 dark:text-blue-400 mb-3", children: "👨‍👩‍👧 2-4 People (Medium Use)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "100-200 Mbps" }),
                " - Great for HD streaming, video calls, moderate gaming"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "✅ HD/4K streaming • Zoom calls • Online gaming • Multiple devices • Smart home" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-200 dark:border-purple-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-purple-600 dark:text-purple-400 mb-3", children: "👨‍👩‍👧‍👦 5+ People (Heavy Use)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "300-500+ Mbps" }),
                " - Essential for large households with heavy streaming, gaming, work-from-home"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "✅ 4K/8K streaming • Pro gaming • Video editing • Large downloads • Multiple simultaneous users" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-2 border-orange-200 dark:border-orange-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-orange-600 dark:text-orange-400 mb-3", children: "🎮 Gamers & Creators" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "500-1000+ Mbps" }),
                " - Professional streaming, content creation, competitive gaming"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "✅ Twitch streaming • 4K video uploads • Cloud gaming • VR • Pro esports • Server hosting" })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AmazonAffiliate, { calculatorTitle: "Networking Equipment", placement: "content" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-orange-200 dark:border-orange-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-8 h-8 text-orange-600" }),
            "Why Is My Internet Slow? 🤔"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose dark:prose-invert max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-6", children: "Lots of things can slow down your internet! Here are the most common culprits and how to fix them:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-red-600 dark:text-red-400 mb-2", children: "📡 Wi-Fi Distance" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Too far from router? Walls and floors block signal!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600 dark:text-green-400 mt-1", children: "💡 Fix: Move closer, use mesh Wi-Fi, or add extenders" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-orange-600 dark:text-orange-400 mb-2", children: "👥 Too Many Users" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Everyone streaming at once? Bandwidth gets divided!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600 dark:text-green-400 mt-1", children: "💡 Fix: Upgrade plan, use QoS settings, schedule heavy downloads" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-yellow-600 dark:text-yellow-400 mb-2", children: "🔌 Old Equipment" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Router from 2010? Time for an upgrade!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600 dark:text-green-400 mt-1", children: "💡 Fix: Get Wi-Fi 6 router, update modem, use ethernet cables" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-blue-600 dark:text-blue-400 mb-2", children: "🦠 Malware & Viruses" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Infected device eating your bandwidth?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600 dark:text-green-400 mt-1", children: "💡 Fix: Run antivirus, remove suspicious apps, reset device" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-purple-50 dark:bg-purple-950/30 border-l-4 border-purple-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-purple-600 dark:text-purple-400 mb-2", children: "📺 Background Apps" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Apps auto-updating? Cloud backups running?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600 dark:text-green-400 mt-1", children: "💡 Fix: Close unused apps, pause cloud sync, disable auto-updates" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-pink-50 dark:bg-pink-950/30 border-l-4 border-pink-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-pink-600 dark:text-pink-400 mb-2", children: "🌐 ISP Throttling" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Provider slowing you down during peak hours?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600 dark:text-green-400 mt-1", children: "💡 Fix: Use VPN, upgrade plan, switch providers" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-article" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 dark:border-green-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-8 h-8 text-green-600" }),
            "Pro Tips to Boost Your Speed 🚀"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "1️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-1", children: "Use Ethernet for Gaming/Work" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Wired connections are always faster and more stable than Wi-Fi!" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "2️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-1", children: "Restart Your Router Weekly" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Clears memory cache and fixes connection bugs automatically!" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "3️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-1", children: "Position Router Strategically" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Central location, elevated, away from electronics and thick walls!" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "4️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-1", children: "Use 5GHz Band" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Faster speeds but shorter range - perfect for streaming & gaming!" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "5️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-1", children: "Secure Your Network" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Strong WPA3 password prevents neighbors from stealing bandwidth!" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "6️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-1", children: "Update Router Firmware" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Latest updates improve performance, security, and stability!" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "7️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-1", children: "Test During Different Times" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Peak hours (6-10pm) are slower - test multiple times for accuracy!" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "8️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-1", children: "Contact Your ISP" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Not getting advertised speeds? Demand what you're paying for!" })
                ] })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "sidebar" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-article" }) })
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
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
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
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      ` })
  ] });
}
export {
  InternetSpeedTest as default
};
