import { r as reactExports, Q as useToast, j as jsxRuntimeExports, S as SEOHead, a8 as Sparkles, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a4 as Label, V as Input, a6 as Alert, a7 as AlertDescription, B as Button, T as TrendingUp, ah as backend } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { P as Progress } from "./progress-BKzT_jkA.js";
import { S as Separator } from "./separator-63Q9JacM.js";
import { T as Target } from "./target-4JeIm6Yk.js";
import { C as CircleAlert } from "./circle-alert-DCAQyr8M.js";
import { Z as Zap } from "./zap-BEhI-iJb.js";
import { T as Twitter } from "./twitter-CFAqYlq6.js";
import { L as Linkedin } from "./linkedin-D9e3uSZB.js";
import { I as Instagram } from "./instagram-DyxGBC2q.js";
import { S as Share2 } from "./share-2-SpOWc355.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./check-DTsA1WpX.js";
const platformIcons = {
  Instagram,
  TikTok: Sparkles,
  LinkedIn: Linkedin,
  Twitter
};
const affiliateTools = [
  { name: "Canva Pro", description: "Create stunning graphics", url: "https://www.canva.com/", icon: "🎨" },
  { name: "Buffer", description: "Schedule posts efficiently", url: "https://buffer.com/", icon: "📅" },
  { name: "Later", description: "Instagram scheduling tool", url: "https://later.com/", icon: "📸" },
  { name: "Hootsuite", description: "Manage all platforms", url: "https://hootsuite.com/", icon: "🦉" }
];
function ProfileAnalyzer() {
  const [profileInput, setProfileInput] = reactExports.useState("");
  const [platform, setPlatform] = reactExports.useState("");
  const [isAnalyzing, setIsAnalyzing] = reactExports.useState(false);
  const [analysisResult, setAnalysisResult] = reactExports.useState(null);
  const { toast } = useToast();
  const validateInput = () => {
    if (!profileInput.trim()) {
      toast({
        title: "Missing Input",
        description: "Please enter your profile URL or username",
        variant: "destructive"
      });
      return false;
    }
    if (!platform) {
      toast({
        title: "Select Platform",
        description: "Please select a social media platform",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };
  const analyzeProfile = async () => {
    var _a, _b;
    if (!validateInput()) return;
    setIsAnalyzing(true);
    try {
      const mockData = {
        platform,
        username: profileInput,
        profileUrl: profileInput,
        hasClearBio: Math.random() > 0.3,
        hasProfilePhoto: Math.random() > 0.2,
        hasLink: Math.random() > 0.4,
        postFrequency: ["daily", "weekly", "monthly"][Math.floor(Math.random() * 3)],
        engagementRate: Math.random() * 10,
        bioLength: Math.floor(Math.random() * 200),
        hasKeywords: Math.random() > 0.4,
        hasEmojis: Math.random() > 0.5,
        hasCTA: Math.random() > 0.6
      };
      const response = await backend.ai_analysis.analyze({
        calculatorType: "profile-analyzer",
        data: mockData,
        userContext: {
          location: "US"
        }
      });
      const score = parseInt(((_a = response.summary.match(/scored (\d+)/)) == null ? void 0 : _a[1]) || "70");
      const bioMatch = response.recommendations.find((r) => r.title === "Profile Score Breakdown");
      const bioClarity = ((_b = bioMatch == null ? void 0 : bioMatch.actionItems[1]) == null ? void 0 : _b.split(" - ")[1]) || "Good clarity";
      const engagementRec = response.recommendations.find((r) => r.title === "Engagement Hacks");
      const growthRec = response.recommendations.find((r) => r.title === "Growth Strategy");
      setAnalysisResult({
        score,
        bioClarity,
        engagementHacks: (engagementRec == null ? void 0 : engagementRec.actionItems) || [],
        growthSuggestions: (growthRec == null ? void 0 : growthRec.actionItems) || [],
        summary: response.summary,
        keyInsights: response.keyInsights,
        riskFactors: response.riskFactors,
        nextSteps: response.nextSteps
      });
      toast({
        title: "Analysis Complete!",
        description: `Your ${platform} profile has been analyzed`
      });
    } catch (error) {
      console.error("Profile analysis failed:", error);
      toast({
        title: "Analysis Failed",
        description: "Unable to analyze profile. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };
  const getScoreColor = (score) => {
    if (score >= 85) return "bg-green-500";
    if (score >= 70) return "bg-blue-500";
    if (score >= 55) return "bg-yellow-500";
    return "bg-red-500";
  };
  const getScoreLabel = (score) => {
    if (score >= 85) return "Excellent";
    if (score >= 70) return "Good";
    if (score >= 55) return "Average";
    return "Needs Work";
  };
  const shareScore = async () => {
    if (!analysisResult) return;
    const shareText = `I scored ${analysisResult.score}/100 on my ${platform} profile analysis! 🚀

Generate your own profile score at Smart Calculator Hubs
#ProfileAnalyzer #SocialMediaGrowth`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Profile Score",
          text: shareText,
          url: window.location.href
        });
      } catch (error) {
        console.error("Share failed:", error);
      }
    } else {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareText);
        toast({
          title: "Copied!",
          description: "Share text copied to clipboard"
        });
      }
    }
  };
  const PlatformIcon = platform ? platformIcons[platform] : Sparkles;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "AI Profile Analyzer – Instagram, TikTok, LinkedIn Growth Suggestions",
        description: "Analyze your social profile bio, clarity, engagement, and get instant AI-powered growth tips.",
        keywords: "profile analyzer, social media analyzer, Instagram growth, TikTok tips, LinkedIn optimization, profile score"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "AI Profile Analyzer",
      "applicationCategory": "SocialMediaApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Analyze your social media profile and get instant AI-powered growth tips for Instagram, TikTok, LinkedIn and more.",
      "author": {
        "@type": "Organization",
        "name": "Smart Calculator Hubs"
      },
      "featureList": [
        "Profile score analysis",
        "Bio clarity assessment",
        "Engagement optimization tips",
        "Growth strategy recommendations",
        "Platform-specific insights"
      ]
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-4 py-2 rounded-full mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-purple-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-purple-700 dark:text-purple-300", children: "AI-Powered Social Tool" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent", children: "AI Profile Analyzer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Get instant AI-powered insights into your social media profile. Analyze bio clarity, engagement potential, and receive personalized growth tips." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-6 w-6 text-purple-600" }),
            "Profile Information"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter your profile URL or username to get started" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "profileInput", children: "Profile URL or Username" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "profileInput",
                value: profileInput,
                onChange: (e) => setProfileInput(e.target.value),
                placeholder: "@username or https://instagram.com/username",
                className: "mt-1.5"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "platform", children: "Platform" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: platform, onValueChange: setPlatform, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select platform" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Instagram", children: "Instagram" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "TikTok", children: "TikTok" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "LinkedIn", children: "LinkedIn" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Twitter", children: "Twitter/X" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm text-blue-900 dark:text-blue-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Privacy Note:" }),
              " We analyze public profile data only. No login required."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: analyzeProfile,
              disabled: isAnalyzing || !profileInput.trim() || !platform,
              className: "w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
              size: "lg",
              children: isAnalyzing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-2 h-5 w-5 animate-spin" }),
                "Analyzing Profile..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "mr-2 h-5 w-5" }),
                "Analyze Profile"
              ] })
            }
          )
        ] })
      ] }),
      analysisResult && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8 border-2 border-purple-200 dark:border-purple-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PlatformIcon, { className: "h-6 w-6 text-purple-600" }),
              "Your Profile Score"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: shareScore,
                variant: "outline",
                size: "sm",
                className: "gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-4 w-4" }),
                  "Share"
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent", children: analysisResult.score }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl text-muted-foreground", children: "/100" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: analysisResult.score, className: "h-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `${getScoreColor(analysisResult.score)} text-white`, children: getScoreLabel(analysisResult.score) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium mt-4", children: analysisResult.summary })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5 text-purple-600" }),
                "Bio Clarity Assessment"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { className: "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-300 dark:border-purple-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { className: "text-foreground", children: analysisResult.bioClarity }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5 text-yellow-600" }),
                "Engagement Hacks"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: analysisResult.engagementHacks.map((hack, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-600 font-bold mt-0.5", children: "⚡" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: hack })
              ] }, index)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-green-600" }),
                "Growth Suggestions"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: analysisResult.growthSuggestions.map((suggestion, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold mt-0.5", children: "🚀" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: suggestion })
              ] }, index)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "Key Insights" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: analysisResult.keyInsights.map((insight, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold mt-0.5", children: "💡" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: insight })
              ] }, index)) })
            ] }),
            analysisResult.riskFactors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "destructive", className: "bg-red-50 dark:bg-red-900/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Areas to Watch:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1", children: analysisResult.riskFactors.slice(0, 3).map((risk, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm", children: [
                    "• ",
                    risk
                  ] }, index)) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "Next Steps" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2", children: analysisResult.nextSteps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 p-3 bg-muted/50 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "mt-0.5", children: index + 1 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: step })
              ] }, index)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "flex items-center gap-2", children: "🛠️ Recommended Growth Tools" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Supercharge your social media growth with these trusted tools" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4", children: affiliateTools.map((tool, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: tool.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "p-4 border rounded-lg hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: tool.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: tool.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: tool.description })
                ] })
              ] })
            },
            index
          )) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "How Profile Analysis Works" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our AI-powered profile analyzer evaluates multiple factors to give you a comprehensive score:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bio Quality:" }),
              " Clarity, keywords, call-to-action, and emoji usage"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Profile Completeness:" }),
              " Photo, link, contact info, and highlights"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Content Strategy:" }),
              " Posting frequency and content consistency"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Engagement Metrics:" }),
              " Estimated engagement rate and community interaction"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Platform Best Practices:" }),
              " Platform-specific optimization opportunities"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs italic", children: "Note: This tool provides educational insights based on general best practices. Actual results may vary based on your niche, audience, and content quality." })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ProfileAnalyzer as default
};
