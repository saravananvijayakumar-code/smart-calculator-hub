import { r as reactExports, Q as useToast, j as jsxRuntimeExports, S as SEOHead, G as Globe, f as Card, o as LoaderCircle, B as Button, aC as RefreshCw, aQ as Wifi } from "./index-CK9G4vW7.js";
import { A as AffiliateBanner } from "./AffiliateBanner-DioKya-c.js";
import { E as EnhancedAIAnalysis } from "./EnhancedAIAnalysis-BaYCd8m5.js";
import { A as ADS_CONFIG } from "./ads-CX9341oB.js";
import { N as NativeBanner } from "./NativeBanner-w1KNuLDX.js";
import { A as AutoAdSlot } from "./AutoAdSlot-DNRO9HTk.js";
import { C as CircleCheckBig } from "./circle-check-big-B8N3lfE-.js";
import { C as Copy } from "./copy-BqV-1o4k.js";
import { M as MapPin } from "./map-pin-DTtorPjp.js";
import "./zap-BEhI-iJb.js";
import "./award-Bl7Nn9A9.js";
import "./external-link-BLvGw9rL.js";
import "./badge-6THgoC_4.js";
import "./brain-CSngUEN8.js";
import "./target-4JeIm6Yk.js";
import "./arrow-right-Bjdtr8dz.js";
import "./lightbulb-DKPyzLdJ.js";
import "./AdsterraSlot-DCXIaKPD.js";
function KnowMyIPPage() {
  const [ipData, setIpData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const [copied, setCopied] = reactExports.useState(false);
  const { toast } = useToast();
  const fetchIPData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://ipapi.co/json/");
      if (!response.ok) {
        throw new Error("Failed to fetch IP data from primary source");
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.reason || "API error");
      }
      setIpData(data);
    } catch (err) {
      console.error("Primary API failed, trying fallback:", err);
      try {
        const fallbackResponse = await fetch("https://api.ipify.org?format=json");
        if (!fallbackResponse.ok) {
          throw new Error("Fallback API also failed");
        }
        const fallbackData = await fallbackResponse.json();
        setIpData({
          ip: fallbackData.ip,
          version: fallbackData.ip.includes(":") ? "IPv6" : "IPv4"
        });
      } catch (fallbackErr) {
        console.error("All API attempts failed:", fallbackErr);
        setError("Unable to fetch IP information. Please check your connection and try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    fetchIPData();
  }, []);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined" && window.adsbygoogle && ADS_CONFIG.AUTO_ADS.ENABLED) {
      try {
        const adElements = document.querySelectorAll(".adsbygoogle");
        adElements.forEach(() => {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        });
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, [ipData]);
  const copyToClipboard = async () => {
    if (!(ipData == null ? void 0 : ipData.ip)) return;
    try {
      await navigator.clipboard.writeText(ipData.ip);
      setCopied(true);
      toast({
        title: "IP Address Copied!",
        description: "Your IP address has been copied to clipboard."
      });
      setTimeout(() => setCopied(false), 2e3);
    } catch (err) {
      console.error("Failed to copy:", err);
      toast({
        title: "Copy Failed",
        description: "Unable to copy to clipboard.",
        variant: "destructive"
      });
    }
  };
  const getIPVersion = () => {
    if (!(ipData == null ? void 0 : ipData.ip)) return "Unknown";
    return ipData.ip.includes(":") ? "IPv6" : "IPv4";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Know My IP Address — Instantly Check Your Public IP, Location & ISP",
        description: "Find your public IP address instantly with Smart Calculator Hubs. See your location, ISP, and IP type, plus learn how IP addresses work in our expert guide.",
        keywords: "IP address, what is my IP, public IP, IP lookup, IP location, ISP lookup, IPv4, IPv6, IP geolocation, check my IP"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-8 md:py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8 md:mb-12 animate-fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-4 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-8 h-8 md:w-10 md:h-10 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent", children: "Know Your IP Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg text-muted-foreground max-w-2xl mx-auto", children: "Instantly discover your public IP address, location, and internet service provider" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-8 p-6 md:p-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl border-2 border-white/20 dark:border-gray-700/20 animate-slide-up", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-12 md:py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-12 h-12 md:w-16 md:h-16 animate-spin text-blue-600 mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm md:text-base", children: "Detecting your IP address..." })
      ] }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-12 md:py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-6 h-6 md:w-8 md:h-8 text-red-600" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-600 dark:text-red-400 mb-4 text-center text-sm md:text-base", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: fetchIPData, className: "gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
          "Try Again"
        ] })
      ] }) : ipData ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 md:space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center border-b pb-6 md:pb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-muted-foreground mb-2 uppercase tracking-wider font-semibold", children: "Your Public IP Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 md:gap-4 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl lg:text-6xl font-mono font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight", children: ipData.ip }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: copyToClipboard,
                variant: "outline",
                size: "icon",
                className: "h-10 w-10 md:h-12 md:w-12 rounded-full hover:scale-110 transition-transform",
                children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 md:w-6 md:h-6 text-green-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-5 h-5 md:w-6 md:h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-green-500 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs md:text-sm font-semibold text-blue-900 dark:text-blue-100", children: getIPVersion() })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6", children: [
          ipData.city && ipData.region && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group p-4 md:p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border border-blue-100 dark:border-blue-900/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 md:gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 md:p-3 rounded-lg bg-blue-600 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5 md:w-6 md:h-6 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-muted-foreground mb-1 font-semibold", children: "Location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base md:text-lg font-bold text-foreground truncate", children: [
                ipData.city,
                ", ",
                ipData.region
              ] }),
              ipData.country_name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-muted-foreground mt-1", children: ipData.country_name })
            ] })
          ] }) }),
          ipData.org && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group p-4 md:p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border border-purple-100 dark:border-purple-900/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 md:gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 md:p-3 rounded-lg bg-purple-600 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "w-5 h-5 md:w-6 md:h-6 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-muted-foreground mb-1 font-semibold", children: "ISP" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg font-bold text-foreground break-words", children: ipData.org })
            ] })
          ] }) }),
          ipData.timezone && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group p-4 md:p-6 rounded-xl bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/50 dark:to-teal-950/50 border border-green-100 dark:border-green-900/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 md:gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 md:p-3 rounded-lg bg-green-600 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-5 h-5 md:w-6 md:h-6 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-muted-foreground mb-1 font-semibold", children: "Timezone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg font-bold text-foreground", children: ipData.timezone })
            ] })
          ] }) }),
          ipData.postal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group p-4 md:p-6 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50 border border-orange-100 dark:border-orange-900/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 md:gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 md:p-3 rounded-lg bg-orange-600 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5 md:w-6 md:h-6 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-muted-foreground mb-1 font-semibold", children: "Postal Code" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg font-bold text-foreground", children: ipData.postal })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: fetchIPData,
            variant: "outline",
            className: "gap-2 hover:scale-105 transition-transform",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
              "Refresh IP Information"
            ]
          }
        ) })
      ] }) : null }),
      ipData && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        EnhancedAIAnalysis,
        {
          calculatorType: "ip-lookup",
          data: {
            ip: ipData.ip,
            location: ipData.city && ipData.region ? `${ipData.city}, ${ipData.region}` : void 0,
            isp: ipData.org,
            ipVersion: getIPVersion()
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NativeBanner, { position: "middle" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-lg dark:prose-invert max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-xl border border-gray-200 dark:border-gray-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "🌐 Complete Guide to IP Addresses: Everything You Need to Know" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl md:text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white text-lg", children: "1" }),
            "What is an IP Address?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-base md:text-lg leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "An ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "IP address" }),
              " (Internet Protocol address) is a unique numerical identifier assigned to every device connected to the internet or a local network. Think of it as your device's digital home address—it allows computers, smartphones, servers, and IoT devices to find and communicate with each other across the vast internet infrastructure."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "IP addresses serve two primary functions: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "host identification" }),
              " and ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "location addressing" }),
              ". When you visit a website, send an email, or stream a video, your IP address tells servers where to send the requested data. Without IP addresses, the internet as we know it simply couldn't function."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-6 rounded-xl border-l-4 border-blue-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-blue-900 dark:text-blue-100 mb-2", children: "💡 Quick Analogy:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "If the internet is a massive city, your IP address is your street address. Just as the postal service needs your address to deliver mail, internet servers need your IP address to deliver web pages, emails, and other data to your device." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl md:text-3xl font-bold mb-4 text-purple-600 dark:text-purple-400 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white text-lg", children: "2" }),
            "IPv4 vs IPv6: Understanding the Difference"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-base md:text-lg leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "There are two versions of IP addresses currently in use: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "IPv4" }),
              " and ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "IPv6" }),
              ". Understanding the difference between them is crucial for grasping the evolution of internet infrastructure."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3 text-blue-700 dark:text-blue-300", children: "IPv4 (Version 4)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Format:" }),
                    " Four numbers separated by dots (e.g., 192.168.1.1)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Range:" }),
                    " 0-255 for each number"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Total Addresses:" }),
                    " ~4.3 billion"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
                    " 203.0.113.45"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Status:" }),
                    " Still widely used, but addresses are depleted"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3 text-purple-700 dark:text-purple-300", children: "IPv6 (Version 6)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Format:" }),
                    " Eight groups of hexadecimal numbers (e.g., 2001:0db8:85a3::8a2e:0370:7334)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Range:" }),
                    " 0-9 and a-f for each character"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Total Addresses:" }),
                    " 340 undecillion (340 trillion trillion trillion)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
                    " 2001:0db8:85a3:0000:0000:8a2e:0370:7334"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Status:" }),
                    " Gradually replacing IPv4"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The transition from IPv4 to IPv6 was necessary because we simply ran out of IPv4 addresses. With the explosive growth of internet-connected devices—smartphones, smart homes, IoT devices, and more—the 4.3 billion addresses provided by IPv4 weren't enough. IPv6's 340 undecillion addresses ensure we'll never run out again." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl md:text-3xl font-bold mb-4 text-green-600 dark:text-green-400 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-600 text-white text-lg", children: "3" }),
            "Public vs Private IP Addresses"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-base md:text-lg leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "Not all IP addresses are created equal. There are two main categories: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "public IP addresses" }),
              " and ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "private IP addresses" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 p-6 rounded-xl border-l-4 border-green-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3 text-green-700 dark:text-green-300", children: "🌍 Public IP Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                "Your ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "public IP address" }),
                " is the address visible to the outside world. It's assigned by your Internet Service Provider (ISP) and is what websites see when you visit them. This is the IP address displayed on this page."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Unique across the entire internet" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Assigned by your ISP" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Can be static (doesn't change) or dynamic (changes periodically)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Visible to websites and services you connect to" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 p-6 rounded-xl border-l-4 border-orange-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3 text-orange-700 dark:text-orange-300", children: "🏠 Private IP Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                "Your ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "private IP address" }),
                " is used within your local network (home or office). Your router assigns these addresses to devices connected to your Wi-Fi or Ethernet."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Only unique within your local network" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Assigned by your router (using DHCP)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Common ranges: 192.168.x.x, 10.x.x.x, 172.16.x.x" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Not visible to the outside internet" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "Your router uses a technology called ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Network Address Translation (NAT)" }),
              " to allow multiple devices with private IP addresses to share a single public IP address. This is why all devices in your home appear to websites as coming from the same public IP address."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl md:text-3xl font-bold mb-4 text-indigo-600 dark:text-indigo-400 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 text-white text-lg", children: "4" }),
            "Static vs Dynamic IP Addresses"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-base md:text-lg leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "Public IP addresses can be either ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "static" }),
              " or ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "dynamic" }),
              ", each with its own advantages and use cases."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3 text-indigo-700 dark:text-indigo-300", children: "🔒 Static IP Address" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: "A permanent address that never changes." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-indigo-700 dark:text-indigo-300 mb-2", children: "Best For:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Web servers" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Email servers" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "VPN connections" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Remote desktop access" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Gaming servers" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-indigo-700 dark:text-indigo-300 mb-2", children: "Pros:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Reliable for hosting services" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Easier for remote access" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Better for certain applications" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3 text-purple-700 dark:text-purple-300", children: "🔄 Dynamic IP Address" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: "Changes periodically (days, weeks, or months)." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-purple-700 dark:text-purple-300 mb-2", children: "Best For:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Home internet users" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Small businesses" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Mobile devices" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "General browsing" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-purple-700 dark:text-purple-300 mb-2", children: "Pros:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Usually free from ISPs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Better security (harder to track)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "More efficient IP allocation" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Most home internet users have dynamic IP addresses. Your ISP typically charges extra for a static IP address since it requires dedicated resources. Unless you're running a server or need reliable remote access, a dynamic IP is perfectly fine for everyday use." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl md:text-3xl font-bold mb-4 text-red-600 dark:text-red-400 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-pink-600 text-white text-lg", children: "5" }),
            "How Websites Detect Your IP Address"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-base md:text-lg leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Every time you connect to a website, your IP address is automatically shared as part of the connection process. This isn't a security flaw—it's how the internet works. Here's what happens:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 p-6 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-3 text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-red-600 dark:text-red-400", children: "1." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "You type a URL into your browser and hit Enter" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-red-600 dark:text-red-400", children: "2." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Your browser sends a request to the website's server, including your IP address in the request header" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-red-600 dark:text-red-400", children: "3." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "The server processes your request and uses your IP address to know where to send the response" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-red-600 dark:text-red-400", children: "4." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "The website can also use your IP to determine your approximate location, ISP, and other details" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-red-600 dark:text-red-400", children: "5." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "This information might be logged for analytics, security, or personalization purposes" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Websites use IP addresses for various legitimate purposes, including:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300 ml-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Geolocation:" }),
                " Serving content in your language or currency"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Security:" }),
                " Detecting suspicious activity or preventing fraud"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Analytics:" }),
                " Understanding where visitors come from"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Compliance:" }),
                " Restricting access based on geographic regulations"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Rate limiting:" }),
                " Preventing abuse or spam"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl md:text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-white text-lg", children: "6" }),
            "How to Change or Hide Your IP Address"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-base md:text-lg leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "There are several legitimate reasons to change or hide your IP address: privacy, security, accessing geo-restricted content, or avoiding IP-based tracking. Here are the most effective methods:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-l-4 border-blue-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3 text-blue-700 dark:text-blue-300", children: "🔐 1. Use a VPN (Virtual Private Network)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: "The most popular and effective method. A VPN encrypts your internet traffic and routes it through a server in a location of your choice." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pros:" }),
                    " Strong encryption, easy to use, fast speeds"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cons:" }),
                    " Requires subscription (paid VPNs are more reliable)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best For:" }),
                    " Privacy, security, accessing streaming services"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Popular Options:" }),
                    " NordVPN, ExpressVPN, Surfshark, ProtonVPN"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 p-6 rounded-xl border-l-4 border-purple-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3 text-purple-700 dark:text-purple-300", children: "🌐 2. Use a Proxy Server" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: "Acts as an intermediary between your device and the internet, masking your IP address." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pros:" }),
                    " Simple, often free, no software required"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cons:" }),
                    " Slower than VPNs, less secure, may not work with all sites"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best For:" }),
                    " Quick IP changes, bypassing simple geo-blocks"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Types:" }),
                    " HTTP proxies, SOCKS proxies, web proxies"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border-l-4 border-green-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3 text-green-700 dark:text-green-300", children: "🧅 3. Use Tor Browser" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: "Routes your traffic through multiple encrypted nodes for maximum anonymity." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pros:" }),
                    " Free, extremely private, decentralized"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cons:" }),
                    " Very slow, some sites block Tor, learning curve"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best For:" }),
                    " Maximum privacy, whistleblowing, accessing .onion sites"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
                    " Not suitable for streaming or torrenting"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 rounded-xl border-l-4 border-orange-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3 text-orange-700 dark:text-orange-300", children: "📱 4. Use Mobile Data or Switch Networks" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: "Your IP changes when you switch between Wi-Fi and mobile data or connect to different networks." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pros:" }),
                    " Simple, free, no additional software"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cons:" }),
                    " Temporary, limited control over new IP location"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best For:" }),
                    " Quick IP changes, bypassing IP bans"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 p-6 rounded-xl border-l-4 border-red-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3 text-red-700 dark:text-red-300", children: "🔄 5. Restart Your Router (for Dynamic IPs)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: "If you have a dynamic IP, your ISP might assign you a new one when you reconnect." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-gray-700 dark:text-gray-300 list-disc list-inside", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pros:" }),
                    " Free, simple, no additional tools"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cons:" }),
                    " Not guaranteed to work, new IP from same ISP/region"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best For:" }),
                    " Bypassing temporary IP bans"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "How:" }),
                    " Unplug router for 5-10 minutes, then reconnect"
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl md:text-3xl font-bold mb-4 text-yellow-600 dark:text-yellow-400 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 text-white text-lg", children: "7" }),
            "Frequently Asked Questions (FAQs)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 p-6 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold mb-2 text-yellow-800 dark:text-yellow-200", children: "❓ Can someone track me using my IP address?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Your IP address can reveal your approximate location (city/region), ISP, and timezone, but it cannot pinpoint your exact physical address or identify you personally. Law enforcement with a court order can request your identity from your ISP, but regular individuals cannot track you to your doorstep using just your IP." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold mb-2 text-blue-800 dark:text-blue-200", children: "❓ What's the difference between my IP and my MAC address?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Your IP address is assigned by your ISP or router and can change. Your MAC (Media Access Control) address is a permanent hardware identifier burned into your device's network card during manufacturing. MAC addresses are only visible on your local network, while IP addresses are visible across the internet." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold mb-2 text-purple-800 dark:text-purple-200", children: "❓ Is my IP address the same on all devices?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                "Devices connected to the same Wi-Fi network share the same ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "public IP address" }),
                " but have different ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "private IP addresses" }),
                " within your local network. If you use mobile data, your phone will have a different public IP from your home network."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 p-6 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold mb-2 text-green-800 dark:text-green-200", children: "❓ Can websites see my private IP address?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                "No, websites can only see your ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "public IP address" }),
                ". Your private IP (like 192.168.1.x) is only visible to other devices on your local network. Your router's NAT (Network Address Translation) ensures that only your public IP is exposed to the internet."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 p-6 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold mb-2 text-red-800 dark:text-red-200", children: "❓ Why does my IP address keep changing?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                "If you have a ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "dynamic IP address" }),
                " (which most home users do), your ISP periodically changes it to efficiently manage their IP address pool. This typically happens when you restart your router or after a certain lease period expires (days to months). If you need a consistent IP, you can request a static IP from your ISP for an additional fee."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 p-6 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold mb-2 text-indigo-800 dark:text-indigo-200", children: "❓ Is it illegal to hide my IP address?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                "No, using a VPN or other methods to hide your IP address is completely legal in most countries. It's a legitimate privacy measure. However, what you ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "do" }),
                " while your IP is hidden must still be legal. Using a VPN doesn't make illegal activities legal—it just makes them harder to trace."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold mb-2 text-orange-800 dark:text-orange-200", children: "❓ How accurate is IP-based geolocation?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "IP geolocation is typically accurate to the city or metropolitan area level, but it's not precise enough to identify your exact address or building. Accuracy varies by ISP and location—it's generally better in urban areas than rural ones. Factors like VPNs, proxies, and mobile networks can also affect accuracy." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-6 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold mb-2 text-cyan-800 dark:text-cyan-200", children: "❓ What is an IP blacklist?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "An IP blacklist is a database of IP addresses known for sending spam, malware, or engaging in malicious activity. If your IP gets blacklisted (often due to malware on your network or sharing an IP with bad actors), you might have trouble sending emails or accessing certain websites. Contact your ISP if this happens." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-article", className: "my-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl md:text-3xl font-bold mb-4 text-purple-600 dark:text-purple-400 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white text-lg", children: "8" }),
            "Understanding IP Security and Privacy"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-base md:text-lg leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Your IP address is a valuable piece of information that can be used for both legitimate and malicious purposes. Understanding the security implications helps you protect your privacy online." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 p-6 rounded-xl border-l-4 border-red-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3 text-red-700 dark:text-red-300", children: "⚠️ Potential Security Risks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "DDoS Attacks:" }),
                  " Hackers can flood your IP with traffic, causing service disruptions"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Targeted Attacks:" }),
                  " Knowing your IP allows attackers to probe for vulnerabilities"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "IP Spoofing:" }),
                  " Criminals can fake your IP to commit fraud or cybercrimes"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tracking:" }),
                  " Websites and advertisers can track your browsing habits across sessions"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Doxxing:" }),
                  " Your approximate location can be revealed through IP lookup"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border-l-4 border-green-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3 text-green-700 dark:text-green-300", children: "✅ Best Practices for IP Security" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Use a VPN:" }),
                  " Especially on public Wi-Fi networks"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Enable Firewall:" }),
                  " Both on your router and individual devices"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Keep Software Updated:" }),
                  " Patch security vulnerabilities promptly"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Avoid Clicking Suspicious Links:" }),
                  " IP grabbers can capture your IP through malicious links"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Use Strong Router Passwords:" }),
                  " Prevent unauthorized access to your network"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Monitor Network Activity:" }),
                  " Check for unusual connections or devices"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Be Cautious with IP-Based Games:" }),
                  " Some online games expose your IP to other players"
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl md:text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-teal-600 text-white text-lg", children: "9" }),
            "Future of IP Addresses"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-base md:text-lg leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "As the internet continues to evolve, so does the infrastructure that supports it. Here's what the future holds for IP addresses:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3 text-blue-700 dark:text-blue-300", children: "🚀 IPv6 Adoption" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "The transition to IPv6 is gradually accelerating. Major internet providers, cloud services, and mobile networks are prioritizing IPv6. By 2030, IPv6 is expected to dominate internet traffic, though IPv4 will likely coexist for decades." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 p-6 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3 text-purple-700 dark:text-purple-300", children: "🌐 IoT Explosion" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "The Internet of Things (IoT) requires billions of IP addresses for smart devices. IPv6's massive address space makes it possible to assign unique IPs to every sensor, appliance, and wearable device." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3 text-green-700 dark:text-green-300", children: "🔒 Enhanced Security" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "IPv6 includes built-in security features like IPsec (Internet Protocol Security), making encryption and authentication more robust. Future IP protocols will prioritize privacy and security by design." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 p-6 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-3 text-orange-700 dark:text-orange-300", children: "⚡ 5G and Beyond" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "5G networks are designed with IPv6 in mind, enabling faster deployment and better device management. As 6G development begins, IP addressing will evolve to support even higher speeds and lower latency." })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-bold mb-4", children: "🎯 Conclusion" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg leading-relaxed", children: "Your IP address is a fundamental component of how the internet works, serving as your device's unique identifier in the vast digital landscape. Whether you're concerned about privacy, need to troubleshoot network issues, or simply want to understand how you're connected to the world, knowing your IP address and how it works is essential knowledge in today's connected world." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base md:text-lg", children: "Use this tool whenever you need to quickly check your public IP, location, and ISP information—it's instant, free, and always accurate." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "bottom-sticky", className: "mt-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AffiliateBanner, { type: "amazon-tools", className: "mt-12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "mt-8" })
    ] }) })
  ] });
}
export {
  KnowMyIPPage as default
};
