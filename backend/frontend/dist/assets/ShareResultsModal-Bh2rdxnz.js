import { r as reactExports, O as useToast, j as jsxRuntimeExports, E as Dialog, I as DialogContent, J as DialogHeader, K as DialogTitle, M as DialogDescription, F as Flame, A as Activity, B as Button } from "./index-C_OXA6OQ.js";
import { S as Separator } from "./separator-CgM4Fzdg.js";
import { S as Share2 } from "./share-2-ViScha7M.js";
import { T as Target } from "./target-1ApqtYDG.js";
import { M as MapPin } from "./map-pin-CJs2GFz9.js";
import { I as Instagram } from "./instagram-C8g9yIpG.js";
import { M as MessageCircle } from "./message-circle-Bn7lRM51.js";
import { F as Facebook } from "./facebook-D2PZyBek.js";
import { T as Twitter } from "./twitter-CGBC1eTU.js";
import { C as Check } from "./check-BMzwQJZ4.js";
import { C as Copy } from "./copy-DGMuG98H.js";
const ShareResultsModal = ({ isOpen, onClose, shareData }) => {
  const [copiedPlatform, setCopiedPlatform] = reactExports.useState(null);
  const { toast } = useToast();
  const getBaseUrl = () => {
    return typeof window !== "undefined" ? window.location.origin : "";
  };
  const formatNumber = (num) => num.toLocaleString();
  const isWebShareSupported = () => {
    return typeof navigator !== "undefined" && "share" in navigator;
  };
  const shareFormats = {
    twitter: {
      icon: Twitter,
      name: "Twitter",
      color: "bg-blue-500 hover:bg-blue-600",
      content: `🎯 My Weight Loss Plan:
${formatNumber(shareData.stepsPerDay)} steps/day
🚶 ${shareData.distancePerDay.toFixed(1)} km daily
🔥 ${shareData.caloriesPerDay} calories burned
📊 Goal: ${shareData.targetWeightLoss} ${shareData.weightUnit} in ${shareData.timeframe} ${shareData.timeframeUnit}

Calculated with Smart Calculator Hubs
${getBaseUrl()}/calculators/health/weight-loss-step`,
      action: () => {
        const text = encodeURIComponent(shareFormats.twitter.content);
        window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
      }
    },
    facebook: {
      icon: Facebook,
      name: "Facebook",
      color: "bg-blue-600 hover:bg-blue-700",
      content: `🎯 My Personalized Weight Loss Walking Plan!

📈 Daily Targets:
• ${formatNumber(shareData.stepsPerDay)} steps per day
• ${shareData.distancePerDay.toFixed(1)} km distance
• ${shareData.caloriesPerDay} calories burned

🏆 My Goal: Lose ${shareData.targetWeightLoss} ${shareData.weightUnit} in ${shareData.timeframe} ${shareData.timeframeUnit}

💪 Health Progress:
• Current BMI: ${shareData.currentBMI.toFixed(1)}
• Target BMI: ${shareData.targetBMI.toFixed(1)}
• Weekly Loss Rate: ${shareData.weeklyWeightLoss.toFixed(1)} ${shareData.weightUnit}/week

Ready to start my fitness journey! 🚀

Try the calculator: ${getBaseUrl()}/calculators/health/weight-loss-step`,
      action: () => {
        const url = encodeURIComponent(`${getBaseUrl()}/calculators/health/weight-loss-step`);
        const quote = encodeURIComponent(shareFormats.facebook.content);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${quote}`, "_blank");
      }
    },
    whatsapp: {
      icon: MessageCircle,
      name: "WhatsApp",
      color: "bg-green-500 hover:bg-green-600",
      content: `🎯 *My Weight Loss Walking Plan*

📊 *Daily Targets:*
• ${formatNumber(shareData.stepsPerDay)} steps
• ${shareData.distancePerDay.toFixed(1)} km distance  
• ${shareData.caloriesPerDay} calories burned

🏆 *Goal:* ${shareData.targetWeightLoss} ${shareData.weightUnit} in ${shareData.timeframe} ${shareData.timeframeUnit}

💪 *Health Metrics:*
• Current BMI: ${shareData.currentBMI.toFixed(1)}
• Target BMI: ${shareData.targetBMI.toFixed(1)}
• Weekly Loss: ${shareData.weeklyWeightLoss.toFixed(1)} ${shareData.weightUnit}

Let's get fit together! 🚶‍♀️🚶‍♂️

Calculator: ${getBaseUrl()}/calculators/health/weight-loss-step`,
      action: () => {
        const text = encodeURIComponent(shareFormats.whatsapp.content);
        window.open(`https://wa.me/?text=${text}`, "_blank");
      }
    },
    instagram: {
      icon: Instagram,
      name: "Instagram",
      color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      content: `🎯 MY WEIGHT LOSS WALKING PLAN 🎯

📈 DAILY TARGETS:
👟 ${formatNumber(shareData.stepsPerDay)} steps
🗺️ ${shareData.distancePerDay.toFixed(1)} km walk
🔥 ${shareData.caloriesPerDay} calories

🏆 GOAL: ${shareData.targetWeightLoss} ${shareData.weightUnit} in ${shareData.timeframe} ${shareData.timeframeUnit}

💪 HEALTH JOURNEY:
📊 Current BMI: ${shareData.currentBMI.toFixed(1)}
🎯 Target BMI: ${shareData.targetBMI.toFixed(1)}
📉 Weekly: ${shareData.weeklyWeightLoss.toFixed(1)} ${shareData.weightUnit}/week

Ready to transform! 🚀💪

#weightloss #walking #fitness #health #goals #transformation #weightlossjourney #healthylifestyle #fitnessgoals #walkingplan

Get your plan: ${getBaseUrl()}/calculators/health/weight-loss-step`,
      action: () => {
        copyToClipboard("instagram", shareFormats.instagram.content);
      }
    }
  };
  const copyToClipboard = async (platform, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPlatform(platform);
      toast({
        title: "Copied to clipboard!",
        description: `${shareFormats[platform].name} post copied. Paste it on ${shareFormats[platform].name}!`
      });
      setTimeout(() => setCopiedPlatform(null), 2e3);
    } catch (error) {
      console.error("Copy failed:", error);
      toast({
        title: "Copy failed",
        description: "Please manually copy the text",
        variant: "destructive"
      });
    }
  };
  const shareNatively = async () => {
    const shareDataObj = {
      title: "My Weight Loss Step Calculator Results",
      text: shareFormats.twitter.content,
      url: `${getBaseUrl()}/calculators/health/weight-loss-step`
    };
    if (isWebShareSupported() && navigator.share) {
      try {
        await navigator.share(shareDataObj);
        toast({
          title: "Shared successfully!",
          description: "Your results have been shared"
        });
      } catch (error) {
        console.error("Native share failed:", error);
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-5 w-5" }),
        "Share Your Results"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Share your weight loss walking plan on social media to inspire others and stay accountable!" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-4 w-4 text-blue-600 mx-auto mb-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-blue-700", children: formatNumber(shareData.stepsPerDay) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "steps/day" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-green-600 mx-auto mb-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-green-700", children: shareData.distancePerDay.toFixed(1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "km/day" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-4 w-4 text-orange-600 mx-auto mb-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-orange-700", children: shareData.caloriesPerDay }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "calories" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4 text-purple-600 mx-auto mb-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-purple-700", children: shareData.targetWeightLoss }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            shareData.weightUnit,
            " goal"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
      isWebShareSupported() && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: shareNatively, className: "w-full", size: "lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-4 w-4 mr-2" }),
          "Share via Device"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg", children: "Share on Social Media" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: Object.entries(shareFormats).map(([platform, format]) => {
          const IconComponent = format.icon;
          const isCopied = copiedPlatform === platform;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "h-5 w-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: format.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: () => copyToClipboard(platform, format.content),
                    variant: "outline",
                    size: "sm",
                    children: [
                      isCopied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4" }),
                      isCopied ? "Copied!" : "Copy"
                    ]
                  }
                ),
                platform !== "instagram" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    onClick: format.action,
                    className: format.color,
                    size: "sm",
                    children: "Share"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/50 rounded p-3 text-sm font-mono whitespace-pre-wrap max-h-32 overflow-y-auto", children: format.content }),
            platform === "instagram" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "💡 Instagram doesn't support direct sharing. Copy the text and paste it manually on Instagram." })
          ] }, platform);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-blue-900 dark:text-blue-100 mb-2", children: "💡 Sharing Tips" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-blue-800 dark:text-blue-200 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Add your own personal touch to make it more engaging" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Tag friends who might be interested in joining your journey" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Share progress updates as you work toward your goal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Use relevant hashtags to reach a wider audience" })
        ] })
      ] })
    ] })
  ] }) });
};
export {
  ShareResultsModal as S
};
