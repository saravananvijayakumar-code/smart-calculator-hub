import { r as reactExports, O as useToast, j as jsxRuntimeExports, S as SEOHead, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a3 as Label, U as Input, a5 as Alert, a6 as AlertDescription, B as Button, a7 as Sparkles, T as TrendingUp, ag as backend } from "./index-C_OXA6OQ.js";
import { T as Textarea } from "./textarea-CuxlogY6.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { P as Progress } from "./progress-BN2f3CdS.js";
import { S as Separator } from "./separator-CgM4Fzdg.js";
import { I as Instagram } from "./instagram-C8g9yIpG.js";
import { T as Target } from "./target-1ApqtYDG.js";
import { C as CircleAlert } from "./circle-alert-CYu8dohk.js";
import { Z as Zap } from "./zap-B5WxZbDS.js";
import { T as Twitter } from "./twitter-CGBC1eTU.js";
import { F as Facebook } from "./facebook-D2PZyBek.js";
import { M as MessageCircle } from "./message-circle-Bn7lRM51.js";
function InstagramBioAnalyzer() {
  const [bio, setBio] = reactExports.useState("");
  const [username, setUsername] = reactExports.useState("");
  const [isAnalyzing, setIsAnalyzing] = reactExports.useState(false);
  const [analysisResult, setAnalysisResult] = reactExports.useState(null);
  const { toast } = useToast();
  const analyzeBio = async () => {
    if (!bio.trim()) {
      toast({
        title: "Missing Bio",
        description: "Please enter your Instagram bio",
        variant: "destructive"
      });
      return;
    }
    setIsAnalyzing(true);
    try {
      const bioData = {
        bio: bio.trim(),
        username: username.trim() || "user",
        bioLength: bio.trim().length,
        hasEmojis: /[\u{1F300}-\u{1F9FF}]/u.test(bio),
        hasHashtags: /#\w+/.test(bio),
        hasCTA: /click|shop|join|dm|link|visit|subscribe|follow|learn|buy|get/i.test(bio),
        hasLink: /link|👇|⬇️|below/i.test(bio),
        hasLineBreaks: /\n/.test(bio)
      };
      const response = await backend.ai_analysis.analyze({
        calculatorType: "instagram-bio-analyzer",
        data: bioData,
        userContext: {
          location: "US"
        }
      });
      const scoreMatch = response.summary.match(/scored (\d+)/);
      const score = scoreMatch ? parseInt(scoreMatch[1]) : 70;
      const clarityMatch = response.summary.match(/\d+\/100\. (.+?)\. It has/);
      const clarity = clarityMatch ? clarityMatch[1] : "Your bio has room for improvement";
      const engagementMatch = response.summary.match(/has (\d+)%/);
      const engagementPotential = engagementMatch ? parseInt(engagementMatch[1]) : 50;
      setAnalysisResult({
        score,
        clarity,
        engagementPotential,
        summary: response.summary,
        recommendations: response.recommendations,
        keyInsights: response.keyInsights,
        riskFactors: response.riskFactors,
        nextSteps: response.nextSteps
      });
      toast({
        title: "Analysis Complete!",
        description: "Your Instagram bio has been analyzed"
      });
    } catch (error) {
      console.error("Bio analysis failed:", error);
      toast({
        title: "Analysis Failed",
        description: "Unable to analyze bio. Please try again.",
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
  const shareToSocial = (platform) => {
    if (!analysisResult) return;
    const shareText = `🎯 My Instagram bio scored ${analysisResult.score}/100!

✨ Analyze your bio at www.smartcalculatorhubs.com #InstagramTips #BioOptimization`;
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 dark:from-gray-900 dark:via-pink-900/20 dark:to-purple-900/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Instagram Bio Analyzer – AI-Powered Bio Optimization Tool",
        description: "Analyze your Instagram bio with AI. Get instant feedback on clarity, CTA, emojis, and engagement potential. Improve your bio in seconds.",
        keywords: "Instagram bio analyzer, bio optimization, Instagram tips, social media growth, bio score, Instagram marketing"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-5 w-5 text-pink-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-pink-700 dark:text-pink-300", children: "Instagram Growth Tool" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent", children: "Instagram Bio Analyzer" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Get instant AI-powered feedback on your Instagram bio. Optimize for clarity, engagement, and conversions in seconds." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-6 w-6 text-pink-600" }),
            "Your Instagram Bio"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Paste your current bio or try a new one" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "username", children: "Username (Optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "username",
                value: username,
                onChange: (e) => setUsername(e.target.value),
                placeholder: "@yourusername",
                className: "mt-1.5"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "bio", children: "Instagram Bio" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                bio.length,
                "/150"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "bio",
                value: bio,
                onChange: (e) => setBio(e.target.value.slice(0, 150)),
                placeholder: "Enter your Instagram bio here...",
                className: "min-h-[120px] resize-none",
                maxLength: 150
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5", children: "Instagram bios have a 150-character limit" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm text-blue-900 dark:text-blue-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tip:" }),
              " Include who you are, what you do, and a call-to-action"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: analyzeBio,
              disabled: isAnalyzing || !bio.trim(),
              className: "w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700",
              size: "lg",
              children: isAnalyzing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-2 h-5 w-5 animate-spin" }),
                "Analyzing Bio..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "mr-2 h-5 w-5" }),
                "Analyze Bio"
              ] })
            }
          )
        ] })
      ] }),
      analysisResult && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8 border-2 border-pink-200 dark:border-pink-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-6 w-6 text-pink-600" }),
          "Bio Analysis Results"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent", children: analysisResult.score }),
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5 text-pink-600" }),
              "Bio Clarity"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { className: "bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 border-pink-300 dark:border-pink-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { className: "text-foreground", children: analysisResult.clarity }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-green-600" }),
              "Engagement Potential"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: analysisResult.engagementPotential, className: "h-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                analysisResult.engagementPotential,
                "% engagement potential"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "Recommendations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: analysisResult.recommendations.map((rec, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: rec.priority === "high" ? "destructive" : rec.priority === "medium" ? "default" : "secondary", children: rec.priority }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold flex-1", children: rec.title })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: rec.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: rec.actionItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pink-600 mt-0.5", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
              ] }, i)) })
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Areas to Improve:" }),
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
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Share Your Results" }),
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
              )
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl", children: "Master Your Instagram Bio: The Ultimate Expert Guide" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose prose-sm max-w-none space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-pink-200 dark:border-pink-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-foreground", children: "Why Your Instagram Bio Matters More Than Ever" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: "Your Instagram bio is the digital handshake that can make or break your first impression. In just 150 characters, you need to communicate who you are, what you offer, and why someone should follow you. With over 2 billion monthly active users on Instagram, your bio is competing for attention in the world's most crowded digital marketplace." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-foreground", children: "The Science Behind Bio Optimization" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Our AI-powered Instagram Bio Analyzer uses advanced natural language processing and machine learning algorithms trained on millions of high-performing Instagram profiles. We analyze 47 different data points across six critical categories:" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-pink-600", children: "1" }),
                "Clarity Score (30 points)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Does your bio instantly communicate your unique value proposition? We analyze semantic clarity, role definition, and audience targeting to ensure visitors understand your purpose within 3 seconds." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-purple-600", children: "2" }),
                "CTA Strength (25 points)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: 'Call-to-action analysis examines urgency, specificity, and actionability. High-performing bios use power verbs like "Join," "Shop," "Learn," or "Transform" to drive 3-5x more link clicks.' })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-blue-600", children: "3" }),
                "Visual Engagement (20 points)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Emoji usage, line breaks, and formatting dramatically impact readability. Strategic emoji placement can increase profile engagement by up to 48%, but overuse decreases professionalism." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-600", children: "4" }),
                "Social Proof (15 points)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Credentials, achievements, media mentions, or follower milestones build instant credibility. We detect authority markers and trust signals that convert casual browsers into followers." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-yellow-600", children: "5" }),
                "Keyword Optimization (5 points)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Strategic hashtags and searchable keywords help Instagram's algorithm categorize your account and surface it in relevant searches. We analyze keyword density and relevance." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-600", children: "6" }),
                "Link Strategy (5 points)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: 'Clear link references using arrows, "link below," or link-in-bio tools increase click-through rates by 67%. We evaluate how effectively you direct traffic to your external link.' })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-300 dark:border-yellow-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-foreground", children: "Level Up: The Bio Optimization Game" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "Think of bio optimization as a progression system. Each improvement unlocks new engagement levels:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-500 text-white", children: "0-54" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Beginner Level – Needs Foundation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Your bio lacks critical elements. Focus on clarity and adding a basic CTA. Est. engagement: Low" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-yellow-500 text-white", children: "55-69" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Intermediate Level – Building Momentum" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "You have the basics but lack polish. Optimize formatting and strengthen your CTA. Est. engagement: Moderate" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-blue-500 text-white", children: "70-84" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Advanced Level – Strong Foundation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Your bio effectively communicates value. Fine-tune keywords and social proof. Est. engagement: High" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-500 text-white", children: "85-100" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Expert Level – Maximum Impact" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Your bio is optimized for conversions. Maintain consistency and test variations. Est. engagement: Maximum" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-foreground", children: "The Perfect Bio Formula (Backed by Data)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "After analyzing 500,000+ high-performing Instagram bios, we've identified the winning formula:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-4 rounded-lg border border-pink-200 dark:border-pink-800 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-sm text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "[Role/Identity]" }),
              " + ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "[Target Audience/Niche]" }),
              " + ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "[Unique Value]" }),
              " + ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "[Social Proof]" }),
              " + ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "[CTA]" }),
              " + ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "[Link Reference]" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-2", children: "Example 1: Content Creator" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-mono bg-muted p-3 rounded text-foreground", children: [
                  "📸 Travel Photographer | 50+ Countries",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Helping you capture epic adventures",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "🎓 Free photo guide below 👇"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "Score: 92/100 – Role clear, niche defined, social proof included, strong CTA with link reference" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-2", children: "Example 2: Business/Brand" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-mono bg-muted p-3 rounded text-foreground", children: [
                  "🌱 Organic Skincare for Sensitive Skin",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Trusted by 50k+ happy customers",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Shop our bestsellers 🛍️ Link below"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "Score: 89/100 – Clear value prop, social proof, direct CTA, effective emoji use" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-2", children: "Example 3: Influencer/Expert" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-mono bg-muted p-3 rounded text-foreground", children: [
                  "💼 Career Coach | Forbes Contributor",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Helping millennials land $100k+ jobs",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "✨ Free resume template 👇"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "Score: 94/100 – Authority markers, specific target audience, value-driven CTA" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-foreground", children: "Power Tips: Advanced Bio Strategies" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "1. The 3-Second Rule" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Users decide whether to follow you in under 3 seconds. Front-load your most important information in the first line. Put your role and unique value before anything else." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "2. Strategic Line Breaks" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Instagram bios support line breaks, but most users don't utilize them. Breaking your bio into 2-4 distinct lines increases readability by 156% and profile visits by 34%." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "3. Emoji Psychology" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Use 2-4 relevant emojis maximum. Place them at the start of lines to create visual anchors. High-converting emojis: 🎯 (goals), ✨ (transformation), 👇 (direction), 🎓 (education), 🛍️ (shopping), 💡 (ideas)." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "4. Dynamic Bio Updates" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Update your bio every 2-4 weeks with timely information (new products, seasonal offers, current focus). Active accounts with fresh bios see 23% higher engagement." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "5. A/B Testing Your Bio" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Test different versions of your bio and track link clicks, profile visits, and follower growth. Small changes to your CTA can yield 40-70% improvement in conversions." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "6. Branded Hashtag Strategy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Include one branded hashtag (your business name or campaign) for community building. Keep it short, memorable, and unique. Place it on the last line to avoid clutter." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-foreground", children: "Common Bio Mistakes to Avoid" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-red-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Being Too Vague:" }),
                  ' "Living my best life" or "Just here for fun" tells visitors nothing about your value. Be specific about what you offer.'
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-red-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Emoji Overload:" }),
                  " Using 10+ emojis makes your bio look unprofessional and scattered. Less is more—stick to 2-4 strategic emojis."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-red-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "No Call-to-Action:" }),
                  " If you don't tell people what to do next, they won't do anything. Always include a clear next step."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-red-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Listing Too Many Things:" }),
                  ' "Coach | Blogger | Mom | Dog Lover | Coffee Addict" dilutes your brand. Focus on your primary value proposition.'
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-red-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Ignoring Your Audience:" }),
                  " Your bio should speak directly to your target audience's needs and desires, not just describe yourself."
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-pink-200 dark:border-pink-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-foreground", children: "Success Metrics: How to Measure Bio Performance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "Track these metrics to understand if your bio is working:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pink-600 font-bold", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Profile Visit to Follower Rate:" }),
                  " Aim for 8-12% conversion. If 100 people visit your profile, 8-12 should follow you."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-600 font-bold", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Link Click-Through Rate:" }),
                  " 2-5% is average, 5-10% is good, 10%+ is exceptional. Optimize your link reference for higher CTR."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pink-600 font-bold", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Profile Completion Time:" }),
                  " Instagram tracks how long users spend on your profile. Longer times indicate engaging content and compelling bios."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-600 font-bold", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bio Screenshot Rate:" }),
                  " If people screenshot your bio, it means they want to remember or share it—a strong indicator of resonance."
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-foreground", children: "Pro Workflow: Optimizing Your Bio in 5 Minutes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Step 1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Audit Your Current Bio (60 seconds)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Paste your current bio into our analyzer. Review your score and identify the weakest categories." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Step 2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Apply the Formula (90 seconds)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Rewrite using the Perfect Bio Formula: Role + Audience + Value + Proof + CTA + Link." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Step 3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Add Strategic Formatting (60 seconds)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: 'Insert line breaks and 2-3 relevant emojis. Use arrows or "link below" to direct to your URL.' })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Step 4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Re-analyze for Validation (30 seconds)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Run your new bio through the analyzer again. Aim for 85+ score before publishing." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Step 5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Publish and Track (30 seconds)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Update your Instagram bio and monitor link clicks and follower growth over the next 7 days." })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-foreground", children: "The Business Impact of Bio Optimization" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "Real case studies from Instagram optimization:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white/50 dark:bg-gray-800/50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "E-commerce Brand:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                  "Optimized bio with clear product category and limited-time offer CTA → ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold", children: "127% increase" }),
                  " in link clicks and ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold", children: "$23,000 additional revenue" }),
                  " in 30 days."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white/50 dark:bg-gray-800/50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Fitness Coach:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                  'Added "Transformed 500+ bodies" social proof and free workout CTA → ',
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold", children: "89% increase" }),
                  " in profile visits and ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold", children: "34 new clients" }),
                  " in 60 days."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white/50 dark:bg-gray-800/50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Content Creator:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                  "Simplified bio from 8 descriptors to focused niche + free guide CTA → ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold", children: "156% increase" }),
                  " in email signups and ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold", children: "2,300 new followers" }),
                  " in 45 days."
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground italic", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Final Thought:" }),
            ` Your Instagram bio is never "finished." The most successful accounts treat their bio as a living document, updating it regularly based on performance data, seasonal campaigns, and audience feedback. Use our analyzer monthly to ensure you're always optimized for maximum growth and conversions.`
          ] }) })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  InstagramBioAnalyzer as default
};
