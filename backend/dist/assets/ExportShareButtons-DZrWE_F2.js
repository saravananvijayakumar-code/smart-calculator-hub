import { r as reactExports, O as useToast, j as jsxRuntimeExports, f as Card, k as CardContent, B as Button, Y as DropdownMenu, Z as DropdownMenuTrigger, $ as DropdownMenuContent, a0 as DropdownMenuItem, aA as DropdownMenuSeparator, a2 as FileText } from "./index-C_OXA6OQ.js";
import { S as Share2 } from "./share-2-ViScha7M.js";
import { L as Link } from "./link-DxXhzsoi.js";
import { C as Copy } from "./copy-DGMuG98H.js";
import { T as Twitter } from "./twitter-CGBC1eTU.js";
import { F as Facebook } from "./facebook-D2PZyBek.js";
import { L as Linkedin } from "./linkedin-BSJyfSWT.js";
import { M as MessageCircle } from "./message-circle-Bn7lRM51.js";
import { M as Mail } from "./mail-CbNEH7Kl.js";
import { L as LoaderCircle } from "./loader-circle-BYW7QwsU.js";
function ExportShareButtons({
  calculatorType,
  inputs,
  results,
  analysis,
  title,
  className = ""
}) {
  const [isGeneratingPDF, setIsGeneratingPDF] = reactExports.useState(false);
  const [copied, setCopied] = reactExports.useState(false);
  const { toast } = useToast();
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const formatCalculatorType = (type) => {
    return type.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };
  const calculatorTitle = title || formatCalculatorType(calculatorType);
  const getKeyResult = () => {
    if (calculatorType.includes("mortgage")) {
      return results.monthlyPayment ? `$${results.monthlyPayment}/month` : "";
    }
    if (calculatorType.includes("loan")) {
      return results.monthlyPayment ? `$${results.monthlyPayment}/month` : "";
    }
    if (calculatorType.includes("investment") || calculatorType.includes("retirement")) {
      return results.finalAmount ? `$${results.finalAmount.toLocaleString()} projected` : "";
    }
    if (calculatorType === "bmi") {
      return results.bmi ? `BMI: ${results.bmi}` : "";
    }
    if (calculatorType === "income-tax-australia") {
      const effectiveRate = results.effectiveTaxRate ? `${results.effectiveTaxRate.toFixed(1)}%` : "";
      const netIncome = results.netIncome ? `$${Math.round(results.netIncome).toLocaleString()} net` : "";
      return effectiveRate && netIncome ? `${effectiveRate} effective rate, ${netIncome}` : "";
    }
    if (calculatorType.includes("tax")) {
      return results.totalTax ? `$${Math.round(results.totalTax).toLocaleString()} tax` : "";
    }
    if (calculatorType.includes("superannuation") || calculatorType.includes("super")) {
      return results.finalBalance ? `$${Math.round(results.finalBalance).toLocaleString()} at retirement` : "";
    }
    if (calculatorType.includes("cgt")) {
      return results.cgtLiability ? `$${Math.round(results.cgtLiability).toLocaleString()} CGT` : "";
    }
    return "";
  };
  const getHashtags = () => {
    const baseHashtags = ["SmartCalculator", "FinancialPlanning"];
    if (calculatorType.includes("tax")) {
      return [...baseHashtags, "Tax", "TaxPlanning"];
    }
    if (calculatorType.includes("mortgage") || calculatorType.includes("loan")) {
      return [...baseHashtags, "Mortgage", "HomeLoan", "Finance"];
    }
    if (calculatorType.includes("investment") || calculatorType.includes("retirement")) {
      return [...baseHashtags, "Investment", "Retirement", "WealthBuilding"];
    }
    if (calculatorType.includes("health") || calculatorType.includes("bmi") || calculatorType.includes("bmr")) {
      return ["Health", "Fitness", "Wellness", "HealthCalculator"];
    }
    if (calculatorType.includes("insurance")) {
      return [...baseHashtags, "Insurance", "Protection"];
    }
    return baseHashtags;
  };
  const generateShareText = () => {
    const calculatorName = formatCalculatorType(calculatorType);
    const keyResult = getKeyResult();
    return `I just calculated my ${calculatorName.toLowerCase()}${keyResult ? `: ${keyResult}` : ""}. Check out this calculator!`;
  };
  const generateDetailedShareText = () => {
    const calculatorName = formatCalculatorType(calculatorType);
    const keyResult = getKeyResult();
    const hashtagString = getHashtags().map((tag) => `#${tag}`).join(" ");
    return `📊 ${calculatorName}

${keyResult ? `Results: ${keyResult}

` : ""}Try it yourself: ${currentUrl}

${hashtagString}`;
  };
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: calculatorTitle,
          text: generateShareText(),
          url: currentUrl
        });
        toast({
          title: "Shared Successfully!",
          description: "Thanks for sharing!"
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Native share failed:", error);
        }
      }
    }
  };
  const copyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      toast({
        title: "Link Copied!",
        description: "Share link has been copied to your clipboard."
      });
      setTimeout(() => setCopied(false), 3e3);
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy link. Please try again.",
        variant: "destructive"
      });
    }
  };
  const copyResultsText = async () => {
    try {
      const resultsText = generateDetailedShareText();
      await navigator.clipboard.writeText(resultsText);
      toast({
        title: "Results Copied!",
        description: "Results have been copied to your clipboard."
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy results. Please try again.",
        variant: "destructive"
      });
    }
  };
  const shareOnSocial = (platform) => {
    const summary = generateShareText();
    const detailedText = generateDetailedShareText();
    const text = encodeURIComponent(summary);
    const detailedTextEncoded = encodeURIComponent(detailedText);
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(calculatorTitle);
    const hashtags = getHashtags();
    let shareUrlTemplate = "";
    switch (platform) {
      case "twitter":
        shareUrlTemplate = `https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}&hashtags=${hashtags.join(",")}`;
        break;
      case "linkedin":
        shareUrlTemplate = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case "facebook":
        shareUrlTemplate = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${text}`;
        break;
      case "whatsapp":
        shareUrlTemplate = `https://wa.me/?text=${detailedTextEncoded}`;
        break;
      case "telegram":
        shareUrlTemplate = `https://t.me/share/url?url=${encodedUrl}&text=${text}`;
        break;
      case "email":
        shareUrlTemplate = `mailto:?subject=${encodedTitle}&body=${detailedTextEncoded}`;
        break;
    }
    window.open(shareUrlTemplate, "_blank", "width=600,height=400");
    toast({
      title: "Opening Share Dialog",
      description: `Sharing your results on ${platform.charAt(0).toUpperCase() + platform.slice(1)}...`
    });
  };
  const handlePDFExport = async () => {
    setIsGeneratingPDF(true);
    try {
      const resultsText = `${calculatorTitle}

Date: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}

Results:
${JSON.stringify(results, null, 2)}

Inputs:
${JSON.stringify(inputs, null, 2)}

` + (analysis ? `Analysis:
${JSON.stringify(analysis, null, 2)}

` : "") + `URL: ${currentUrl}`;
      const blob = new Blob([resultsText], { type: "text/plain" });
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = `${calculatorType}-results-${Date.now()}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);
      toast({
        title: "Download Complete!",
        description: "Your results have been downloaded."
      });
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "Download Failed",
        description: "Failed to download results. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGeneratingPDF(false);
    }
  };
  const canNativeShare = typeof navigator !== "undefined" && "share" in navigator;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: `bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 border-slate-200 dark:border-slate-700 ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
      canNativeShare && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: handleNativeShare,
          className: "flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-4 w-4 mr-2" }),
            "Share Results"
          ]
        }
      ),
      !canNativeShare && /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            className: "flex-1 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-4 w-4 mr-2" }),
              "Share Results"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", className: "w-48", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onSelect: copyShareLink, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "h-4 w-4 mr-2" }),
            copied ? "Link Copied!" : "Copy Share Link"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onSelect: copyResultsText, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4 mr-2" }),
            "Copy Results Text"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onSelect: () => shareOnSocial("twitter"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "h-4 w-4 mr-2" }),
            "Share on Twitter"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onSelect: () => shareOnSocial("facebook"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4 mr-2" }),
            "Share on Facebook"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onSelect: () => shareOnSocial("linkedin"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4 mr-2" }),
            "Share on LinkedIn"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onSelect: () => shareOnSocial("whatsapp"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4 mr-2" }),
            "Share on WhatsApp"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onSelect: () => shareOnSocial("telegram"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4 mr-2" }),
            "Share on Telegram"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onSelect: () => shareOnSocial("email"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 mr-2" }),
            "Share via Email"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: handlePDFExport,
          className: "flex-1 bg-blue-600 hover:bg-blue-700 text-white",
          disabled: isGeneratingPDF,
          children: [
            isGeneratingPDF ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 mr-2 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 mr-2" }),
            isGeneratingPDF ? "Generating..." : "Download Report"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-xs text-gray-600 dark:text-gray-400 text-center", children: "Share your calculations with friends or save them for future reference" })
  ] }) });
}
export {
  ExportShareButtons as E
};
