import { r as reactExports, Q as useToast, j as jsxRuntimeExports, B as Button, Y as Download } from "./index-CK9G4vW7.js";
import { S as Share2 } from "./share-2-SpOWc355.js";
import { T as Twitter } from "./twitter-CFAqYlq6.js";
import { F as Facebook } from "./facebook-BX8Qa6cK.js";
import { M as MessageCircle } from "./message-circle-DZtFORhh.js";
import { M as Mail } from "./mail-DX6y6Mo7.js";
import { C as Check } from "./check-DTsA1WpX.js";
import { L as Link2 } from "./link-2-D14Yk-9q.js";
function HealthSocialShare({
  title,
  resultText,
  hashtags = ["health", "fitness", "wellness"],
  category = "health"
}) {
  const [copied, setCopied] = reactExports.useState(false);
  const [canShare, setCanShare] = reactExports.useState(false);
  const { toast } = useToast();
  const url = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(resultText);
  const encodedTitle = encodeURIComponent(title);
  const hashtagString = hashtags.map((tag) => `#${tag}`).join(" ");
  reactExports.useEffect(() => {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      const shareData = { title, text: resultText, url };
      if ("canShare" in navigator && typeof navigator.canShare === "function") {
        setCanShare(navigator.canShare(shareData));
      } else {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        setCanShare(isMobile);
      }
    }
  }, [title, resultText, url]);
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}&hashtags=${hashtags.join(",")}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedText}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`
  };
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: resultText,
          url
        });
        toast({
          title: "✅ Shared successfully!",
          description: "Thanks for spreading health knowledge!"
        });
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }
        if (error.name === "NotAllowedError") {
          console.error("Share not allowed:", error);
          toast({
            title: "⚠️ Sharing not available",
            description: 'Use the "Copy Link" button below to share manually.',
            variant: "destructive"
          });
          return;
        }
        console.error("Error sharing:", error);
        toast({
          title: "⚠️ Share failed",
          description: "Please try copying the link instead.",
          variant: "destructive"
        });
      }
    }
  };
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({
        title: "✅ Link copied!",
        description: "Share it anywhere you like!"
      });
      setTimeout(() => setCopied(false), 3e3);
    } catch (error) {
      console.error("Error copying:", error);
    }
  };
  const handleDownloadResults = () => {
    const blob = new Blob(
      [`${title}

${resultText}

Calculated at: ${url}
Date: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`],
      { type: "text/plain" }
    );
    const downloadUrl = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = `${title.toLowerCase().replace(/\s+/g, "-")}-results.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(downloadUrl);
    toast({
      title: "📥 Results downloaded!",
      description: "Saved to your downloads folder"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-lg flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-5 h-5 text-blue-600" }),
      "Share Your Results"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Help others achieve their health goals by sharing this calculator! 💪" }),
    canShare && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        onClick: handleNativeShare,
        className: "w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4 mr-2" }),
          "Share Results"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => window.open(shareLinks.twitter, "_blank"),
          className: "bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white",
          size: "sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "w-4 h-4 mr-2" }),
            "Twitter"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => window.open(shareLinks.facebook, "_blank"),
          className: "bg-[#1877F2] hover:bg-[#166fe5] text-white",
          size: "sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "w-4 h-4 mr-2" }),
            "Facebook"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => window.open(shareLinks.whatsapp, "_blank"),
          className: "bg-[#25D366] hover:bg-[#20bd5a] text-white",
          size: "sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 mr-2" }),
            "WhatsApp"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => window.open(shareLinks.telegram, "_blank"),
          className: "bg-[#0088cc] hover:bg-[#0077b5] text-white",
          size: "sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 mr-2" }),
            "Telegram"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => window.open(shareLinks.linkedin, "_blank"),
          className: "bg-[#0A66C2] hover:bg-[#095196] text-white",
          size: "sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4 mr-2" }),
            "LinkedIn"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => window.open(shareLinks.reddit, "_blank"),
          className: "bg-[#FF4500] hover:bg-[#e63e00] text-white",
          size: "sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4 mr-2" }),
            "Reddit"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => window.open(shareLinks.pinterest, "_blank"),
          className: "bg-[#E60023] hover:bg-[#cc001f] text-white",
          size: "sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4 mr-2" }),
            "Pinterest"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => window.open(shareLinks.email, "_blank"),
          className: "bg-gray-600 hover:bg-gray-700 text-white",
          size: "sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 mr-2" }),
            "Email"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: handleCopyLink,
          variant: "outline",
          className: `${copied ? "bg-green-50 border-green-500 text-green-700" : ""}`,
          children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 mr-2" }),
            "Copied!"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "w-4 h-4 mr-2" }),
            "Copy Link"
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: handleDownloadResults,
          variant: "outline",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 mr-2" }),
            "Download"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-gray-700 dark:text-gray-200 mb-2", children: "📢 Your Shareable Message:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm italic text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-blue-600", children: [
        '"',
        resultText,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400 mt-2", children: hashtagString })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-600 p-4 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "💡 Pro Tip:" }),
      " Sharing health calculators helps friends and family make informed decisions about their wellness. Your share could inspire someone to start their fitness journey!"
    ] }) })
  ] });
}
export {
  HealthSocialShare as H
};
