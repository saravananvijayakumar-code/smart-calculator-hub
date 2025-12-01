import { j as jsxRuntimeExports, S as SEOHead, a7 as Sparkles, H as Heart, d as Clock, L as Link, C as Calculator } from "./index-C_OXA6OQ.js";
import { A as AppleStyleCard } from "./AppleStyleCard-bNXb4kfM.js";
const viralCalculators = [
  {
    title: "Love Compatibility Calculator 💕",
    description: "Discover your cosmic connection! Calculate love compatibility with your crush based on zodiac signs and numerology.",
    icon: Heart,
    path: "/calculators/viral/love-compatibility",
    color: "text-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/20",
    emoji: "💕",
    tooltip: "Test your love chemistry!"
  },
  {
    title: "Zodiac Compatibility Calculator ✨",
    description: "Discover your cosmic connection! Find out how compatible you are with your crush based on zodiac signs.",
    icon: Heart,
    path: "/calculators/viral/zodiac-compatibility",
    color: "text-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/20",
    emoji: "✨",
    tooltip: "Match your stars!"
  },
  {
    title: "Life Path Number Calculator 🔮",
    description: "Unlock numerology secrets! Calculate your Life Path Number and discover your destiny, personality traits, and life purpose.",
    icon: Sparkles,
    path: "/calculators/viral/life-path-number",
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    emoji: "🔮",
    tooltip: "What's your destiny number?"
  },
  {
    title: "Friend Compatibility Test 👯",
    description: "Test your friendship! Calculate compatibility score with your BFF based on interests, personality, and vibes.",
    icon: Heart,
    path: "/calculators/viral/friend-compatibility",
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    emoji: "👯",
    tooltip: "Are you really BFFs?"
  },
  {
    title: "Life Expectancy Calculator ⏰",
    description: "Estimate your lifespan based on lifestyle, health habits, and genetics. Get personalized longevity insights!",
    icon: Clock,
    path: "/calculators/viral/life-expectancy",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    emoji: "⏰",
    tooltip: "How many years left?"
  },
  {
    title: "Binge Watch Calculator 📺",
    description: "Calculate exactly how much time you need to binge your favorite TV shows and movies!",
    icon: Clock,
    path: "/calculators/viral/how-long-to-watch",
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    emoji: "📺",
    tooltip: "Plan your binge session!"
  }
];
function ViralToolsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Viral Calculators 🔥 - Fun & Shareable Tools | Smart Calculator Hubs",
        description: "Explore our collection of fun, viral calculators! From zodiac compatibility to binge-watch time calculators - share with friends and have fun!",
        keywords: "viral calculators, fun calculators, zodiac compatibility, binge watch calculator, shareable tools, entertainment calculators"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8 max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-3xl mb-6 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-10 h-10 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent mb-4", children: "Viral Calculators 🔥" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Fun, shareable calculators that everyone loves! From zodiac compatibility to binge-watching time - discover entertaining tools you'll want to share with friends." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", children: viralCalculators.map((calc, index) => {
        const Icon = calc.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: calc.path, className: "group", title: calc.tooltip, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { className: "h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex items-center justify-center w-16 h-16 ${calc.bgColor} rounded-2xl mb-4 group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-8 h-8 ${calc.color}` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors", children: calc.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400 mt-1", children: calc.tooltip })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 leading-relaxed", children: calc.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:gap-3 gap-2 transition-all text-sm", children: [
            "Try it now",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-hover:translate-x-1 transition-transform", children: "→" })
          ] })
        ] }) }) }, index);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-8 h-8 text-purple-600" }),
          "Why Use Viral Calculators?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2", children: "🎉 Fun & Entertaining" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "These calculators are designed to be enjoyable and shareable. Perfect for social media, group chats, and conversations with friends." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2", children: "🤖 AI-Powered Insights" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Get personalized, entertaining insights powered by advanced AI analysis based on your inputs." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2", children: "📱 Easy Sharing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Share your results instantly on Twitter, Instagram, WhatsApp, or copy a shareable link with one click." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2", children: "💯 100% Free" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "All viral calculators are completely free to use with no hidden costs or subscriptions required." })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ViralToolsPage as default
};
