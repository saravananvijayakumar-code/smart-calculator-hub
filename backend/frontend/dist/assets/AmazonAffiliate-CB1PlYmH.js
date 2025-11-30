import { r as reactExports, j as jsxRuntimeExports } from "./index-C_OXA6OQ.js";
const getKeywordFromTitle = (title) => {
  if (!title) return "finance";
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("mortgage") || lowerTitle.includes("home loan")) return "home finance";
  if (lowerTitle.includes("car") || lowerTitle.includes("auto")) return "automotive";
  if (lowerTitle.includes("retirement") || lowerTitle.includes("401k")) return "retirement planning";
  if (lowerTitle.includes("investment") || lowerTitle.includes("roi")) return "investing";
  if (lowerTitle.includes("loan") || lowerTitle.includes("debt")) return "personal finance";
  if (lowerTitle.includes("bmi") || lowerTitle.includes("health") || lowerTitle.includes("calorie")) return "health fitness";
  if (lowerTitle.includes("tax")) return "tax software";
  if (lowerTitle.includes("insurance")) return "insurance";
  if (lowerTitle.includes("crypto") || lowerTitle.includes("bitcoin")) return "cryptocurrency";
  if (lowerTitle.includes("forex") || lowerTitle.includes("currency")) return "finance books";
  if (lowerTitle.includes("student loan")) return "college finance";
  if (lowerTitle.includes("credit card")) return "credit cards";
  if (lowerTitle.includes("emergency fund")) return "emergency preparedness";
  if (lowerTitle.includes("weight loss")) return "weight loss";
  if (lowerTitle.includes("tip calculator")) return "personal finance";
  return "finance";
};
function AmazonAffiliate({ calculatorTitle, placement = "content", className = "" }) {
  const adContainerRef = reactExports.useRef(null);
  const [scriptLoaded, setScriptLoaded] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const existingScript = document.querySelector('script[src*="amazon-adsystem.com"]');
    if (existingScript) {
      setScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => {
      setError(true);
      setScriptLoaded(false);
    };
    script.onerror = () => setError(true);
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
  reactExports.useEffect(() => {
    if (scriptLoaded && adContainerRef.current && window.amzn_assoc_ad) {
      try {
        window.amzn_assoc_ad.renderAd();
      } catch (err) {
        console.error("Amazon ad rendering error:", err);
        setError(true);
      }
    }
  }, [scriptLoaded]);
  if (error) return null;
  const keyword = getKeywordFromTitle(calculatorTitle);
  const getAdDimensions = () => {
    switch (placement) {
      case "sidebar":
        return { width: "300", height: "250" };
      case "footer":
        return { width: "728", height: "90" };
      default:
        return { width: "468", height: "60" };
    }
  };
  const { width, height } = getAdDimensions();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: adContainerRef,
      className: `amazon-affiliate-ad my-4 ${className}`,
      style: {
        minHeight: placement === "sidebar" ? "250px" : "90px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "text/javascript", children: `
          amzn_assoc_tracking_id = "smartcalculat-20";
          amzn_assoc_ad_mode = "manual";
          amzn_assoc_ad_type = "smart";
          amzn_assoc_marketplace = "amazon";
          amzn_assoc_region = "US";
          amzn_assoc_design = "enhanced_links";
          amzn_assoc_asins = "";
          amzn_assoc_placement = "";
          amzn_assoc_linkid = "";
          amzn_assoc_search_bar = "true";
          amzn_assoc_search_bar_position = "bottom";
          amzn_assoc_title = "${keyword}";
          amzn_assoc_default_search_phrase = "${keyword}";
          amzn_assoc_width = "${width}";
          amzn_assoc_height = "${height}";
        ` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            id: "amzn-assoc-ad-container",
            style: { width: "100%", maxWidth: `${width}px` }
          }
        )
      ]
    }
  );
}
export {
  AmazonAffiliate as A
};
