import { r as reactExports, O as useToast, j as jsxRuntimeExports, S as SEOHead, f as Card, g as CardHeader, h as CardTitle, H as Heart, i as CardDescription, k as CardContent, a3 as Label, U as Input, a5 as Alert, p as TriangleAlert, a6 as AlertDescription, B as Button, a7 as Sparkles, V as Download, ag as backend } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { P as Progress } from "./progress-BN2f3CdS.js";
import { S as Separator } from "./separator-CgM4Fzdg.js";
import { A as AIAnalysis } from "./AIAnalysis-DnR9Up6F.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { A as AdsterraSlot } from "./AdsterraSlot--S6-7ysu.js";
import { C as CircleCheck } from "./circle-check-BDDR1Xl_.js";
import { T as Twitter } from "./twitter-CGBC1eTU.js";
import { F as Facebook } from "./facebook-D2PZyBek.js";
import { M as MessageCircle } from "./message-circle-Bn7lRM51.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
import "./tabs-BNSAX0su.js";
import "./brain-U3SZm3t9.js";
import "./loader-circle-BYW7QwsU.js";
import "./target-1ApqtYDG.js";
import "./circle-check-big-BoxGYPKG.js";
import "./share-2-ViScha7M.js";
import "./link-DxXhzsoi.js";
import "./copy-DGMuG98H.js";
import "./linkedin-BSJyfSWT.js";
import "./mail-CbNEH7Kl.js";
const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces"
];
function LoveCompatibilityCalculator() {
  const [partner1Name, setPartner1Name] = reactExports.useState("");
  const [partner1Birthday, setPartner1Birthday] = reactExports.useState("");
  const [partner1StarSign, setPartner1StarSign] = reactExports.useState("");
  const [partner2Name, setPartner2Name] = reactExports.useState("");
  const [partner2Birthday, setPartner2Birthday] = reactExports.useState("");
  const [partner2StarSign, setPartner2StarSign] = reactExports.useState("");
  const [results, setResults] = reactExports.useState(null);
  const [analysisData, setAnalysisData] = reactExports.useState(null);
  const [isCalculating, setIsCalculating] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [showShareModal, setShowShareModal] = reactExports.useState(false);
  const { toast } = useToast();
  const validateInputs = () => {
    if (!partner1Name.trim()) return "Please enter Partner 1 name";
    if (!partner1Birthday) return "Please enter Partner 1 birthday";
    if (!partner1StarSign) return "Please select Partner 1 star sign";
    if (!partner2Name.trim()) return "Please enter Partner 2 name";
    if (!partner2Birthday) return "Please enter Partner 2 birthday";
    if (!partner2StarSign) return "Please select Partner 2 star sign";
    const date1 = new Date(partner1Birthday);
    const date2 = new Date(partner2Birthday);
    const now = /* @__PURE__ */ new Date();
    if (date1 > now) return "Partner 1 birthday cannot be in the future";
    if (date2 > now) return "Partner 2 birthday cannot be in the future";
    return null;
  };
  const handleCalculate = async () => {
    var _a, _b, _c;
    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    setIsCalculating(true);
    try {
      const response = await backend.compatibility.calculate({
        partner1: {
          name: partner1Name,
          birthday: partner1Birthday,
          starSign: partner1StarSign
        },
        partner2: {
          name: partner2Name,
          birthday: partner2Birthday,
          starSign: partner2StarSign
        }
      });
      setResults(response);
      const emotionalScore = ((_a = response.traitBreakdown.find((t) => t.trait === "Emotional Connection")) == null ? void 0 : _a.score) || 70;
      const communicationScore = ((_b = response.traitBreakdown.find((t) => t.trait === "Communication")) == null ? void 0 : _b.score) || 70;
      const lifeGoalsScore = ((_c = response.traitBreakdown.find((t) => t.trait === "Life Goals Alignment")) == null ? void 0 : _c.score) || 70;
      const analysisPayload = {
        partner1Name,
        partner1Birthday,
        partner1StarSign,
        partner2Name,
        partner2Birthday,
        partner2StarSign,
        compatibilityPercentage: response.compatibilityPercentage,
        overallMatch: response.overallMatch,
        zodiacCompatibility: response.zodiacCompatibility,
        numerologyScore: response.numerologyScore,
        birthdayHarmony: response.birthdayHarmony,
        emotionalScore,
        communicationScore,
        lifeGoalsScore
      };
      setAnalysisData(analysisPayload);
    } catch (error2) {
      setError("An error occurred during calculation. Please try again.");
      console.error("Calculation error:", error2);
    } finally {
      setIsCalculating(false);
    }
  };
  const getCompatibilityColor = (percentage) => {
    if (percentage >= 85) return "text-pink-600";
    if (percentage >= 75) return "text-purple-600";
    if (percentage >= 65) return "text-blue-600";
    if (percentage >= 55) return "text-yellow-600";
    return "text-orange-600";
  };
  const getCompatibilityGradient = (percentage) => {
    if (percentage >= 85) return "from-pink-500 to-rose-500";
    if (percentage >= 75) return "from-purple-500 to-pink-500";
    if (percentage >= 65) return "from-blue-500 to-purple-500";
    if (percentage >= 55) return "from-yellow-500 to-orange-500";
    return "from-orange-500 to-red-500";
  };
  const shareToSocial = (platform) => {
    if (!results) return;
    const shareText = `💕 ${partner1Name} & ${partner2Name} are ${results.compatibilityPercentage}% compatible! ${results.overallMatch}

✨ Calculate your love compatibility at www.smartcalculatorhubs.com #LoveCalculator #Compatibility`;
    const shareUrl = "https://www.smartcalculatorhubs.com";
    if (platform === "twitter") {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
      window.open(twitterUrl, "_blank");
    } else if (platform === "facebook") {
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
      window.open(facebookUrl, "_blank");
    } else if (platform === "whatsapp") {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
      window.open(whatsappUrl, "_blank");
    }
  };
  const downloadAsValentineCard = () => {
    if (!results) return;
    const cardContent = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━
💕 LOVE COMPATIBILITY CARD 💕
━━━━━━━━━━━━━━━━━━━━━━━━━━━

${partner1Name} (${partner1StarSign})
        ❤️ + ❤️
${partner2Name} (${partner2StarSign})

━━━━━━━━━━━━━━━━━━━━━━━━━━━
${results.compatibilityPercentage}% COMPATIBLE!
${results.overallMatch}
━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ ${results.funFact}

💪 YOUR STRENGTHS:
${results.strengths.map((s, i) => `${i + 1}. ${s}`).join("\n")}

💡 AREAS TO WORK ON:
${results.challenges.map((c, i) => `${i + 1}. ${c}`).join("\n")}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
Created with ❤️ at
Smart Calculator Hubs
━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();
    const blob = new Blob([cardContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${partner1Name}-${partner2Name}-compatibility-card.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({
      title: "Valentine's Card Downloaded!",
      description: "Share your love compatibility card with the world 💕"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Love & Compatibility Calculator - Test Your Relationship Match",
        description: "Calculate your love compatibility based on names, birthdays, and zodiac signs. Get personalized insights, relationship tips, and share as Valentine's card. Free viral love calculator!",
        keywords: "love calculator, compatibility calculator, relationship calculator, zodiac compatibility, love match, valentine calculator, couple calculator"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "top", className: "mb-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent px-4", children: "❤️ Love & Compatibility Calculator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-base sm:text-lg text-muted-foreground mb-8 px-4", children: "Discover your romantic compatibility through astrology, numerology, and cosmic alignment ✨" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-pink-200 dark:border-pink-900", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-6 w-6 text-pink-600" }),
                "Enter Partner Details"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Fill in both partners' information to calculate your cosmic compatibility" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-pink-700 dark:text-pink-400", children: "Partner 1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "partner1Name", children: "Name" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "partner1Name",
                        type: "text",
                        placeholder: "Enter name",
                        value: partner1Name,
                        onChange: (e) => setPartner1Name(e.target.value)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "partner1Birthday", children: "Birthday" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "partner1Birthday",
                        type: "date",
                        value: partner1Birthday,
                        onChange: (e) => setPartner1Birthday(e.target.value)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "partner1StarSign", children: "Star Sign" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: partner1StarSign, onValueChange: setPartner1StarSign, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "partner1StarSign", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select zodiac sign" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: zodiacSigns.map((sign) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: sign, children: sign }, sign)) })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-blue-700 dark:text-blue-400", children: "Partner 2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "partner2Name", children: "Name" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "partner2Name",
                        type: "text",
                        placeholder: "Enter name",
                        value: partner2Name,
                        onChange: (e) => setPartner2Name(e.target.value)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "partner2Birthday", children: "Birthday" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "partner2Birthday",
                        type: "date",
                        value: partner2Birthday,
                        onChange: (e) => setPartner2Birthday(e.target.value)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "partner2StarSign", children: "Star Sign" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: partner2StarSign, onValueChange: setPartner2StarSign, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "partner2StarSign", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select zodiac sign" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: zodiacSigns.map((sign) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: sign, children: sign }, sign)) })
                    ] })
                  ] })
                ] })
              ] }),
              error && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "destructive", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: error })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: handleCalculate,
                  disabled: isCalculating,
                  className: `w-full bg-gradient-to-r ${getCompatibilityGradient(75)} hover:opacity-90 transition-opacity text-white`,
                  size: "lg",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 mr-2" }),
                    isCalculating ? "Calculating Cosmic Compatibility..." : "Calculate Our Compatibility ❤️"
                  ]
                }
              )
            ] })
          ] }),
          results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-pink-200 dark:border-pink-900 overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-2 bg-gradient-to-r ${getCompatibilityGradient(results.compatibilityPercentage)}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-6 w-6 text-pink-600", fill: "currentColor" }),
                "Your Compatibility Results"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20 rounded-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-6xl font-bold mb-2 ${getCompatibilityColor(results.compatibilityPercentage)}`, children: [
                    results.compatibilityPercentage,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-semibold mb-4", children: results.overallMatch }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: results.compatibilityPercentage, className: "h-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-muted-foreground italic", children: [
                    "✨ ",
                    results.funFact
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg", children: "Compatibility Breakdown" }),
                  results.traitBreakdown.map((trait, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: trait.trait }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: getCompatibilityColor(trait.score), children: [
                        trait.score,
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: trait.score, className: "h-2" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: trait.description })
                  ] }, index))
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-green-600" }),
                      "Your Strengths"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: results.strengths.map((strength, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm flex items-start gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 mt-0.5", children: "💪" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: strength })
                    ] }, index)) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-orange-600" }),
                      "Areas to Work On"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: results.challenges.map((challenge, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm flex items-start gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-600 mt-0.5", children: "💡" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: challenge })
                    ] }, index)) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Detailed Scores" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-purple-600", children: [
                        results.zodiacCompatibility,
                        "%"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Zodiac Match" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-pink-50 dark:bg-pink-950/20 rounded-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-pink-600", children: [
                        results.numerologyScore,
                        "%"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Numerology" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-blue-600", children: [
                        results.birthdayHarmony,
                        "%"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Birthday Harmony" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Share Your Results 💕" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        onClick: () => shareToSocial("twitter"),
                        variant: "outline",
                        className: "w-full",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "h-4 w-4 mr-2" }),
                          "X"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        onClick: () => shareToSocial("facebook"),
                        variant: "outline",
                        className: "w-full",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4 mr-2" }),
                          "Facebook"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        onClick: () => shareToSocial("whatsapp"),
                        variant: "outline",
                        className: "w-full",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4 mr-2" }),
                          "WhatsApp"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        onClick: downloadAsValentineCard,
                        variant: "outline",
                        className: "w-full sm:col-span-3",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4 mr-2" }),
                          "Valentine's Card"
                        ]
                      }
                    )
                  ] })
                ] })
              ] })
            ] }),
            analysisData && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AIAnalysis,
                {
                  analysisRequest: {
                    calculatorType: "love-compatibility",
                    data: analysisData
                  },
                  autoRun: true,
                  title: "AI-Powered Relationship Insights",
                  description: "Get personalized tips and recommendations for your relationship"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ExportShareButtons,
                {
                  calculatorType: "love-compatibility",
                  inputs: {
                    person1Name: partner1Name,
                    person2Name: partner2Name,
                    person1Birthday: partner1Birthday || "",
                    person2Birthday: partner2Birthday || "",
                    person1Zodiac: partner1StarSign,
                    person2Zodiac: partner2StarSign
                  },
                  results: {
                    compatibilityPercentage: (results == null ? void 0 : results.compatibilityPercentage) || 0,
                    overallMatch: (results == null ? void 0 : results.overallMatch) || "",
                    zodiacCompatibility: (results == null ? void 0 : results.zodiacCompatibility) || 0,
                    numerologyScore: (results == null ? void 0 : results.numerologyScore) || 0
                  },
                  title: "Love Compatibility Calculator Report",
                  className: "mt-6"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Complete Guide to Love Compatibility" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Understanding the science and art of romantic compatibility" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "prose prose-sm max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "What is Love Compatibility?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Love compatibility is the measure of how well two people match in terms of personality, values, communication styles, and life goals. While there's no perfect formula for love, compatibility calculators like ours combine ancient wisdom from astrology and numerology with modern relationship psychology to give you insights into your romantic potential." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2", children: "Our Love & Compatibility Calculator analyzes multiple dimensions of your relationship: zodiac sign compatibility based on elemental energies, numerological harmony derived from your names, and birthday alignment that reveals cosmic timing. Together, these create a comprehensive picture of your romantic compatibility, giving you both strengths to celebrate and areas to work on." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "How Our Calculator Works" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Zodiac Sign Compatibility" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Each zodiac sign belongs to one of four elements: Fire (Aries, Leo, Sagittarius), Earth (Taurus, Virgo, Capricorn), Air (Gemini, Libra, Aquarius), and Water (Cancer, Scorpio, Pisces). Signs of the same element naturally understand each other, while certain elements complement each other beautifully—Fire with Air creates excitement, while Earth with Water creates stability." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Numerology Analysis" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Your name carries a unique vibrational energy in numerology. By converting the letters of both partners' names into numbers and analyzing their relationship, we reveal hidden patterns of compatibility. When two names vibrate at complementary frequencies, communication flows naturally and understanding deepens effortlessly." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Birthday Harmony" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The cosmic alignment of your birthdays reveals timing and rhythm in your relationship. Couples born in the same month often share similar life experiences and seasonal energies. Those born on similar days of the month may find natural synchronicity in their daily rhythms and decision-making styles." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "Understanding Your Results" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "85-100%: Exceptional Match" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You've found something truly special! This level of compatibility is rare and indicates natural harmony across multiple dimensions. Your energies align, communication flows easily, and you likely share similar values and life goals. However, don't take this for granted—even the most compatible couples need to nurture their relationship through communication, appreciation, and quality time together." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "70-84%: Strong Potential" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You have a solid foundation for a beautiful relationship! While you may have some differences, your core compatibility is strong enough to build something lasting. Focus on your strengths as a couple, communicate openly about your differences, and be willing to grow together. Many of the world's happiest couples fall into this range." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "55-69%: Moderate Match" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Your relationship will require more conscious effort and communication, but that doesn't mean it can't work! Many successful couples in this range report that working through their differences made them stronger. You'll need to be intentional about understanding each other's perspectives, finding common ground, and appreciating what makes each of you unique." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Below 55%: Growth Required" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This match suggests significant differences in your natural energies, communication styles, or life approaches. While challenging, these relationships can work with exceptional commitment, professional guidance, and a willingness to grow. Sometimes our greatest teachers come disguised as difficult partners. If you choose to continue, be honest about the work required and ensure both partners are equally committed." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "The Five Compatibility Dimensions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Emotional Connection" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `This measures how well you understand and respond to each other's feelings. High emotional compatibility means you intuitively "get" each other, can comfort each other effectively, and feel safe being vulnerable. Low scores here suggest you may need to work harder to validate each other's emotions and create emotional safety.` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Communication Style" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Communication is the foundation of every successful relationship. This dimension reveals whether your natural communication styles complement or clash. Do you both process feelings verbally, or does one need time alone? Does one person prefer direct conversation while the other hints indirectly? Understanding these patterns helps you communicate more effectively." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Life Goals Alignment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You might have incredible chemistry, but if you want fundamentally different futures, the relationship will struggle. This measures whether your visions for life—career ambitions, family plans, lifestyle preferences, and core values—align or conflict. Couples with high scores here find it easier to make joint decisions and build a shared future." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Energy & Vibe" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Do you energize or exhaust each other? This dimension looks at your natural energy levels, social needs, and activity preferences. Introverts and extroverts can absolutely make it work, but they need to understand and respect each other's needs. High scores mean your natural rhythms sync beautifully." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Long-term Potential" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This synthesizes all factors to predict long-term success. It considers whether your relationship has the foundation to weather life's inevitable storms. High scores suggest resilience and adaptability as a couple. Lower scores don't mean failure—they mean you'll need to be more intentional about relationship maintenance." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "Making Your Relationship Work" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Play to Your Strengths" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Every couple has areas where they naturally excel. Maybe you communicate effortlessly, or perhaps you share the same vision for the future. Identify these strengths and lean into them, especially during difficult times. Your strengths are your relationship's foundation—build on them deliberately." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Address Challenges Early" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Don't ignore red flags or areas of incompatibility. The earlier you address potential issues, the easier they are to resolve. If you scored low in communication, take a couples communication workshop. If your life goals don't align, have honest conversations about compromise and priorities. Small problems become relationship-enders when left unaddressed." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Keep Dating Each Other" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Compatibility isn't static—it requires maintenance. Continue doing the things that brought you together. Schedule regular date nights, try new experiences together, surprise each other with thoughtful gestures, and never stop flirting. Complacency is a compatibility killer." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mt-4 mb-2", children: "Grow Together" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "People change over time, and your compatibility can evolve with you. The key is growing together rather than apart. Share your personal growth journeys, support each other's development, and regularly check in about your relationship's health. Couples who grow together report increasing compatibility over time." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "Beyond the Numbers" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'While our calculator provides valuable insights, remember that love is ultimately about choice, commitment, and action. The most "compatible" couple on paper can fail without effort, while seemingly mismatched partners can build beautiful relationships through dedication and understanding.' }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2", children: "Use these results as a starting point for deeper conversations about your relationship. They're meant to illuminate patterns and provide guidance, not to dictate your romantic destiny. Trust your heart, communicate openly, and be willing to work for what you want. Real love is built through daily choices to understand, appreciate, and cherish your partner—compatibility just makes it a bit easier." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "Frequently Asked Questions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "mt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-semibold cursor-pointer", children: "How accurate are love compatibility calculators?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 ml-4", children: "Compatibility calculators provide insights based on astrological and numerological principles, but they're not definitive predictors of relationship success. Use them as conversation starters and tools for self-reflection, not as absolute truth. Real relationships succeed through communication, effort, and mutual respect—not just cosmic alignment." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "mt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-semibold cursor-pointer", children: "Can low compatibility scores work out?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 ml-4", children: "Absolutely! Many successful long-term relationships have lower compatibility scores. These relationships require more conscious effort, better communication skills, and greater willingness to understand differences. Sometimes our most challenging partners teach us the most valuable lessons about love, patience, and growth." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "mt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-semibold cursor-pointer", children: "What if our zodiac signs are incompatible?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 ml-4", children: `Zodiac incompatibility isn't a relationship death sentence. It simply means you'll need to work harder to understand each other's natural tendencies and communication styles. Many "incompatible" zodiac pairings thrive because their differences create balance and growth opportunities. Focus on emotional connection and shared values over astrological matching.` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "mt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-semibold cursor-pointer", children: "Should I break up if we have low compatibility?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 ml-4", children: "No! A calculator should never dictate major life decisions. Low compatibility scores simply highlight areas that need attention and work. If you love your partner and they treat you well, use these insights to strengthen your relationship rather than end it. However, if the results confirm concerns you already had, they might provide clarity for difficult decisions." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "mt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "font-semibold cursor-pointer", children: "Can compatibility change over time?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 ml-4", children: "Yes! While your zodiac signs and numerology remain constant, your actual compatibility can absolutely improve or decline over time. Couples who work on their relationship, grow together, and maintain open communication often find their compatibility increasing. Conversely, neglecting relationship maintenance can decrease compatibility even for naturally matched pairs." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "Important Disclaimer" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "This Love & Compatibility Calculator is designed for entertainment and self-reflection purposes. While based on traditional astrological and numerological principles, it should not be used as the sole basis for making important relationship decisions. Every relationship is unique, and real compatibility depends on countless factors including communication, shared values, mutual respect, and individual growth. If you're experiencing relationship difficulties, please consider speaking with a licensed therapist or relationship counselor." })
              ] })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-8 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle" }) }) })
      ] })
    ] }) })
  ] });
}
export {
  LoveCompatibilityCalculator as default
};
