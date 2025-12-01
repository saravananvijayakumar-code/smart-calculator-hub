import { r as reactExports, j as jsxRuntimeExports, f as Card, B as Button } from "./index-C_OXA6OQ.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { C as CircleCheckBig } from "./circle-check-big-BoxGYPKG.js";
import { C as CircleX } from "./circle-x-BU1mdvut.js";
import { C as CircleAlert } from "./circle-alert-CYu8dohk.js";
const EZOIC_CONFIG = {
  PLACEMENTS: {
    TOP_BANNER: "ezoic-pub-ad-placeholder-101",
    MID_CONTENT_1: "ezoic-pub-ad-placeholder-102",
    MID_CONTENT_2: "ezoic-pub-ad-placeholder-103",
    SIDEBAR_TOP: "ezoic-pub-ad-placeholder-104",
    SIDEBAR_MID: "ezoic-pub-ad-placeholder-105",
    BOTTOM_STICKY: "ezoic-pub-ad-placeholder-106",
    IN_FEED: "ezoic-pub-ad-placeholder-107",
    FOOTER: "ezoic-pub-ad-placeholder-108"
  }
};
function EzoicAdsManager() {
  const [adsEnabled, setAdsEnabled] = reactExports.useState(true);
  const [ezoicLoaded, setEzoicLoaded] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const disabled = localStorage.getItem("ezoic_ads_disabled") === "true";
    setAdsEnabled(!disabled);
    if (typeof window !== "undefined" && window.ezstandalone) {
      setEzoicLoaded(true);
    } else {
      const timer = setTimeout(() => {
        if (window.ezstandalone) {
          setEzoicLoaded(true);
        }
      }, 2e3);
      return () => clearTimeout(timer);
    }
  }, []);
  const toggleAds = () => {
    const newState = !adsEnabled;
    setAdsEnabled(newState);
    if (newState) {
      localStorage.removeItem("ezoic_ads_disabled");
      console.log("✅ Ezoic ads enabled");
    } else {
      localStorage.setItem("ezoic_ads_disabled", "true");
      console.log("🚫 Ezoic ads disabled");
    }
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  const adPlacements = [
    { id: EZOIC_CONFIG.PLACEMENTS.TOP_BANNER, name: "Top Banner", location: "Above content" },
    { id: EZOIC_CONFIG.PLACEMENTS.MID_CONTENT_1, name: "Mid Content 1", location: "After main content" },
    { id: EZOIC_CONFIG.PLACEMENTS.MID_CONTENT_2, name: "Mid Content 2", location: "Before tips section" },
    { id: EZOIC_CONFIG.PLACEMENTS.SIDEBAR_TOP, name: "Sidebar Top", location: "Desktop sidebar top" },
    { id: EZOIC_CONFIG.PLACEMENTS.SIDEBAR_MID, name: "Sidebar Mid", location: "Desktop sidebar middle" },
    { id: EZOIC_CONFIG.PLACEMENTS.BOTTOM_STICKY, name: "Bottom Sticky", location: "Mobile bottom (fixed)" },
    { id: EZOIC_CONFIG.PLACEMENTS.IN_FEED, name: "In-Feed", location: "End of content" },
    { id: EZOIC_CONFIG.PLACEMENTS.FOOTER, name: "Footer", location: "Page footer" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8 max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold mb-2", children: "Ezoic Ads Manager" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Manage Ezoic advertising integration for Smart Calculator Hubs" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-2", children: "Ezoic Integration Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: ezoicLoaded ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-green-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-green-600", children: "Script Loaded" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-5 h-5 text-red-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-red-600", children: "Script Not Detected" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: adsEnabled ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-green-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-green-600", children: "Ads Enabled" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-5 h-5 text-orange-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-orange-600", children: "Ads Disabled" })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: toggleAds,
            variant: adsEnabled ? "destructive" : "default",
            className: "min-w-[140px]",
            children: adsEnabled ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4 mr-2" }),
              "Disable Ads"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 mr-2" }),
              "Enable Ads"
            ] })
          }
        )
      ] }),
      !ezoicLoaded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5 text-orange-500 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-orange-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-1", children: "Ezoic Script Not Detected" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Make sure the Ezoic scripts are properly loaded in index.html. Check the browser console for any script loading errors." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-semibold mb-4", children: [
        "Ad Placements (",
        adPlacements.length,
        " slots)"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: adPlacements.map((placement) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "font-mono text-xs", children: placement.id }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: placement.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: placement.location })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: adsEnabled ? "default" : "secondary", children: adsEnabled ? "Active" : "Disabled" })
          ]
        },
        placement.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-4", children: "Ezoic Setup Checklist" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-green-500 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "1. Scripts Added to index.html" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Ezoic privacy and ad scripts are loaded in the HTML head" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-green-500 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "2. Ad Slots Configured" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "8 responsive ad placements across calculator pages" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5 text-orange-500 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "3. Update ads.txt File" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Get your Ezoic Publisher ID from the Ezoic dashboard and update /public/ads.txt" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://pubdash.ezoic.com/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-sm text-blue-600 hover:underline mt-1 inline-block",
                children: "Open Ezoic Dashboard →"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5 text-orange-500 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "4. Verify Domain in Ezoic" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Add smartcalculatorhubs.com to your Ezoic account and complete domain verification" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-4 bg-gray-900 rounded-lg text-white font-mono text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-green-400 mb-2", children: ezoicLoaded ? "✅ Ezoic integrated successfully" : "⚠️ Waiting for Ezoic script..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-400", children: [
        "window.ezstandalone: ",
        ezoicLoaded ? "detected" : "undefined"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-400", children: [
        "Ads status: ",
        adsEnabled ? "enabled" : "disabled"
      ] })
    ] })
  ] });
}
export {
  EzoicAdsManager as default
};
