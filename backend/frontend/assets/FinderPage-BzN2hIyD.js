import { j as jsxRuntimeExports, S as SEOHead, b as Search, l as House, F as Flame, L as Link } from "./index-C_OXA6OQ.js";
import { A as AppleStyleCard } from "./AppleStyleCard-bNXb4kfM.js";
import { L as Leaf } from "./leaf-BNDQ33Ih.js";
import { D as Dog } from "./dog-CjWE-tb9.js";
const finderTools = [
  {
    title: "AI Plant Finder 🌿",
    description: "Identify your plant and check its health using AI. Upload a photo to get instant care tips — 100% free and powered by OpenAI.",
    icon: Leaf,
    path: "/finder/tools/plantfinder",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    emoji: "🌿",
    tooltip: "Snap & Identify"
  },
  {
    title: "Pet Breed Finder 🐾",
    description: "Identify dog & cat breeds instantly with AI! Upload a photo and discover breed name, fun facts, and care tips — 100% free.",
    icon: Dog,
    path: "/finder/tools/pet-breed-finder",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    emoji: "🐶",
    tooltip: "What breed is it?"
  },
  {
    title: "Home Decor Style Finder 🏠",
    description: "Discover your interior design style with AI! Upload a room photo and get style analysis, color palette, and decor tips — free!",
    icon: House,
    path: "/finder/tools/home-decor-style-finder",
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    emoji: "🎨",
    tooltip: "Find your style"
  },
  {
    title: "Calorie Burn Calculator 🔥",
    description: "Find out how long to exercise to burn off your favorite foods! From burgers to donuts - see the truth.",
    icon: Flame,
    path: "/calculators/viral/calorie-burn",
    color: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    emoji: "🔥",
    tooltip: "Worth the workout?"
  }
];
function FinderPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Finder - Discovery Tools | Smart Calculator Hubs",
        description: "Discover powerful tools to find information and make smart decisions. Explore our collection of finder and discovery calculators.",
        keywords: "finder tools, discovery calculators, calorie burn calculator, food finder, workout finder"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-gray-900", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8 max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl mb-6 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-10 h-10 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent mb-4", children: "Finder Tools 🔍" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Discover and explore with our powerful finder tools. Get instant insights and make informed decisions." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", children: finderTools.map((calc, index) => {
        const Icon = calc.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: calc.path, className: "group", title: calc.tooltip, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { className: "h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex items-center justify-center w-16 h-16 ${calc.bgColor} rounded-2xl mb-4 group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-8 h-8 ${calc.color}` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors", children: calc.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400 mt-1", children: calc.tooltip })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 leading-relaxed", children: calc.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center text-orange-600 dark:text-orange-400 font-semibold group-hover:gap-3 gap-2 transition-all text-sm", children: [
            "Try it now",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-hover:translate-x-1 transition-transform", children: "→" })
          ] })
        ] }) }) }, index);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-8 h-8 text-orange-600" }),
          "Why Use Finder Tools?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2", children: "🎯 Quick Discovery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Find exactly what you're looking for with our specialized finder tools designed for accuracy and speed." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2", children: "📊 Data-Driven" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "All tools are powered by accurate data and proven algorithms to give you reliable results." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2", children: "🚀 Fast Results" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Get instant results without complex forms or lengthy processes. Simple, fast, and effective." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2", children: "💯 100% Free" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "All finder tools are completely free to use with no hidden costs or subscriptions required." })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  FinderPage as default
};
