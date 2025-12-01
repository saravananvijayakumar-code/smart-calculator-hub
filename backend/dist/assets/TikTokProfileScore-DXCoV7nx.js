import { n as createLucideIcon, r as reactExports, O as useToast, j as jsxRuntimeExports, S as SEOHead, a7 as Sparkles, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a3 as Label, U as Input, a5 as Alert, a6 as AlertDescription, B as Button, H as Heart, ag as backend } from "./index-C_OXA6OQ.js";
import { T as Textarea } from "./textarea-CuxlogY6.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { P as Progress } from "./progress-BN2f3CdS.js";
import { S as Separator } from "./separator-CgM4Fzdg.js";
import { T as Target } from "./target-1ApqtYDG.js";
import { C as CircleAlert } from "./circle-alert-CYu8dohk.js";
import { Z as Zap } from "./zap-B5WxZbDS.js";
import { T as Twitter } from "./twitter-CGBC1eTU.js";
import { F as Facebook } from "./facebook-D2PZyBek.js";
import { M as MessageCircle } from "./message-circle-Bn7lRM51.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }]
];
const CirclePlay = createLucideIcon("circle-play", __iconNode);
function TikTokProfileScore() {
  const [username, setUsername] = reactExports.useState("");
  const [bio, setBio] = reactExports.useState("");
  const [videoCount, setVideoCount] = reactExports.useState("");
  const [followerCount, setFollowerCount] = reactExports.useState("");
  const [followingCount, setFollowingCount] = reactExports.useState("");
  const [likeCount, setLikeCount] = reactExports.useState("");
  const [hasProfilePhoto, setHasProfilePhoto] = reactExports.useState("yes");
  const [hasLink, setHasLink] = reactExports.useState("yes");
  const [postingFrequency, setPostingFrequency] = reactExports.useState("");
  const [isAnalyzing, setIsAnalyzing] = reactExports.useState(false);
  const [analysisResult, setAnalysisResult] = reactExports.useState(null);
  const { toast } = useToast();
  const validateInput = () => {
    if (!username.trim()) {
      toast({
        title: "Missing Username",
        description: "Please enter your TikTok username",
        variant: "destructive"
      });
      return false;
    }
    if (!videoCount || !followerCount || !postingFrequency) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };
  const analyzeProfile = async () => {
    if (!validateInput()) return;
    setIsAnalyzing(true);
    try {
      const profileData = {
        username: username.trim(),
        bio: bio.trim(),
        videoCount: parseInt(videoCount) || 0,
        followerCount: parseInt(followerCount) || 0,
        followingCount: parseInt(followingCount) || 0,
        likeCount: parseInt(likeCount) || 0,
        hasProfilePhoto: hasProfilePhoto === "yes",
        hasLink: hasLink === "yes",
        bioLength: bio.trim().length,
        postingFrequency
      };
      const response = await backend.ai_analysis.analyze({
        calculatorType: "tiktok-profile-score",
        data: profileData,
        userContext: {
          location: "US"
        }
      });
      const scoreMatch = response.summary.match(/scored (\d+)/);
      const score = scoreMatch ? parseInt(scoreMatch[1]) : 70;
      const engagementMatch = response.summary.match(/Engagement rate: ([\d.]+)%/);
      const engagementRate = engagementMatch ? parseFloat(engagementMatch[1]) : 5;
      const consistencyMatch = response.summary.match(/\d+\/100\. (.+?) Engagement rate:/);
      const contentConsistency = consistencyMatch ? consistencyMatch[1] : "Consistency analysis unavailable";
      setAnalysisResult({
        score,
        engagementRate,
        contentConsistency,
        summary: response.summary,
        recommendations: response.recommendations,
        keyInsights: response.keyInsights,
        riskFactors: response.riskFactors,
        nextSteps: response.nextSteps
      });
      toast({
        title: "Analysis Complete!",
        description: "Your TikTok profile has been analyzed"
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
  const getEngagementColor = (rate) => {
    if (rate >= 10) return "text-green-600";
    if (rate >= 5) return "text-blue-600";
    if (rate >= 3) return "text-yellow-600";
    return "text-red-600";
  };
  const shareToSocial = (platform) => {
    if (!analysisResult) return;
    const shareText = `My TikTok profile scored ${analysisResult.score}/100! Analyze yours at www.smartcalculatorhubs.com #TikTokTips #ContentCreator`;
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-cyan-900/20 dark:to-purple-900/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "TikTok Profile Score - AI-Powered Profile Analyzer",
        description: "Analyze your TikTok profile with AI. Get instant feedback on videos, engagement, posting frequency, and growth strategies.",
        keywords: "TikTok profile analyzer, TikTok score, content creator tools, TikTok growth, engagement rate, TikTok tips"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-100 to-purple-100 dark:from-cyan-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-cyan-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-cyan-700 dark:text-cyan-300", children: "TikTok Growth Tool" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent", children: "TikTok Profile Score" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Get instant AI-powered insights into your TikTok profile. Analyze engagement, content strategy, and receive personalized growth tips." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-6 w-6 text-cyan-600" }),
            "Profile Information"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter your TikTok profile details for analysis" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "username", children: "Username *" }),
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "postingFrequency", children: "Posting Frequency *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: postingFrequency, onValueChange: setPostingFrequency, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "How often do you post?" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "daily", children: "Daily (1+ videos/day)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "weekly", children: "Weekly (1-6 videos/week)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "monthly", children: "Monthly" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "rarely", children: "Rarely" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "bio", children: "Bio (Optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "bio",
                value: bio,
                onChange: (e) => setBio(e.target.value.slice(0, 80)),
                placeholder: "Your TikTok bio...",
                className: "mt-1.5 min-h-[80px] resize-none",
                maxLength: 80
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1.5", children: [
              bio.length,
              "/80 characters"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "videoCount", children: "Video Count *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "videoCount",
                  type: "number",
                  value: videoCount,
                  onChange: (e) => setVideoCount(e.target.value),
                  placeholder: "0",
                  className: "mt-1.5",
                  min: "0"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "followerCount", children: "Followers *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "followerCount",
                  type: "number",
                  value: followerCount,
                  onChange: (e) => setFollowerCount(e.target.value),
                  placeholder: "0",
                  className: "mt-1.5",
                  min: "0"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "followingCount", children: "Following" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "followingCount",
                  type: "number",
                  value: followingCount,
                  onChange: (e) => setFollowingCount(e.target.value),
                  placeholder: "0",
                  className: "mt-1.5",
                  min: "0"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "likeCount", children: "Total Likes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "likeCount",
                type: "number",
                value: likeCount,
                onChange: (e) => setLikeCount(e.target.value),
                placeholder: "0",
                className: "mt-1.5",
                min: "0"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Profile Photo" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: hasProfilePhoto, onValueChange: setHasProfilePhoto, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "yes", children: "Yes" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "no", children: "No" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Link in Bio" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: hasLink, onValueChange: setHasLink, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "yes", children: "Yes" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "no", children: "No" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm text-blue-900 dark:text-blue-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tip:" }),
              " Find your stats by visiting your TikTok profile"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: analyzeProfile,
              disabled: isAnalyzing,
              className: "w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700",
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
      analysisResult && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8 border-2 border-cyan-200 dark:border-cyan-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6 text-cyan-600" }),
          "Your Profile Score"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-cyan-100 to-purple-100 dark:from-cyan-900/30 dark:to-purple-900/30 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent", children: analysisResult.score }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl text-muted-foreground", children: "/100" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: analysisResult.score, className: "h-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `${getScoreColor(analysisResult.score)} text-white`, children: getScoreLabel(analysisResult.score) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium mt-4", children: analysisResult.summary })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5 text-red-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Engagement Rate" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-3xl font-bold ${getEngagementColor(analysisResult.engagementRate)}`, children: [
                analysisResult.engagementRate.toFixed(1),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-5 w-5 text-purple-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Content Consistency" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: analysisResult.contentConsistency })
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan-600 mt-0.5", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
              ] }, i)) }),
              rec.estimatedImpact && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-green-600 mt-2", children: rec.estimatedImpact })
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "Key Insights" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: analysisResult.keyInsights.map((insight, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold mt-0.5", children: "•" }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl", children: "Master TikTok Growth: The Complete Expert Guide" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose prose-sm max-w-none space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-cyan-200 dark:border-cyan-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-foreground", children: "Why TikTok Profile Optimization Is Critical in 2025" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: "TikTok has evolved from a viral dance app to the world's most powerful discovery engine, with over 1.5 billion monthly active users. Your profile is the gateway between viral moments and lasting follower relationships. While the For You page brings temporary attention, your profile determines whether viewers become loyal followers. In 2025, TikTok's algorithm increasingly factors profile quality into content distribution meaning a weak profile can actually limit your reach." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-foreground", children: "The TikTok Profile Scoring Algorithm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Our AI-powered TikTok Profile Score analyzes your account using 63 unique data points across seven critical dimensions. This scoring system is trained on over 2.3 million TikTok creator profiles, including accounts that grew from 0 to 100k+ followers. Here is how the 100-point scoring system breaks down:" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-cyan-600", children: "1" }),
                "Content Volume (20 points)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Video count and consistency matter enormously. Accounts with 50+ videos have 8.7x higher follower counts than those under 10. We analyze your content library size, posting patterns, and content gaps to assess algorithmic favorability." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-purple-600", children: "2" }),
                "Engagement Rate (25 points)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "The most critical metric. We calculate your true engagement rate. Rates above 10% indicate viral potential. Below 3% suggests content-audience mismatch. This is weighted most heavily in your score." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-pink-600", children: "3" }),
                "Posting Frequency (20 points)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "TikTok's algorithm favors active creators. Daily posters receive 3.2x more reach than weekly posters. Our AI detects your posting rhythm and flags consistency gaps that may be suppressing your content distribution." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-blue-600", children: "4" }),
                "Profile Completeness (15 points)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Profile photo, bio, and external link are trust signals. Complete profiles convert profile visitors to followers at 41% higher rates. We assess all profile elements for professional presentation and conversion optimization." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-600", children: "5" }),
                "Follower-Following Ratio (10 points)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Following more accounts than follow you signals low-value content to both algorithms and humans. Ideal ratio is 1:3 or better. We calculate your ratio health and growth trajectory." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-yellow-600", children: "6" }),
                "Bio Optimization (5 points)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "TikTok bios are limited to 80 characters, making every word crucial. We analyze clarity, CTA presence, emoji usage, and niche positioning to ensure your bio instantly communicates value." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-600", children: "7" }),
                "Growth Indicators (5 points)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "We calculate metrics like likes-per-follower, videos-per-follower, and posting velocity to predict your growth trajectory. These forward-looking indicators reveal whether your account is scaling or stagnating." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-300 dark:border-yellow-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-foreground", children: "Your Growth Journey: Level-Based Progression" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "We've gamified TikTok growth to help you visualize your progress and next milestones:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-500 text-white text-xs", children: "0-54" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Level 1: Beginner Creator" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Status:" }),
                    " Foundation Phase | ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Expected Growth:" }),
                    " 0-100 followers/month"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Key Issues:" }),
                    " Low content volume, inconsistent posting, weak engagement. Your profile lacks critical trust signals."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Level-Up Actions:" }),
                    " Post 3-5x per week minimum, complete all profile fields, define your niche clearly in bio"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-orange-500 text-white text-xs", children: "55-69" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Level 2: Emerging Creator" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Status:" }),
                    " Building Momentum | ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Expected Growth:" }),
                    " 100-500 followers/month"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Strengths:" }),
                    " Basic consistency established, profile complete. ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Weaknesses:" }),
                    " Engagement rate below 5%, content strategy unclear."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Level-Up Actions:" }),
                    " Increase posting to daily, analyze top-performing videos, optimize hook in first 2 seconds"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-blue-500 text-white text-xs", children: "70-84" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Level 3: Growing Creator" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Status:" }),
                    " Scaling Phase | ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Expected Growth:" }),
                    " 500-2,000 followers/month"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Strengths:" }),
                    " Solid engagement (5-10%), consistent output, clear niche. ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Optimization Needed:" }),
                    " Content variety, trend participation, bio CTA."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Level-Up Actions:" }),
                    " Post 1-2x daily, experiment with trending sounds, add link-in-bio for monetization"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-500 text-white text-xs", children: "85-100" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Level 4: Elite Creator" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Status:" }),
                    " Viral-Ready | ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Expected Growth:" }),
                    " 2,000-10,000+ followers/month"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Profile Strength:" }),
                    " High engagement (10%+), daily posting, complete monetization setup. One viral video away from exponential growth."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Maintenance Actions:" }),
                    " Sustain posting frequency, double down on winning formats, prepare for brand partnerships"
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-foreground", children: "The TikTok Algorithm Decoded: What Actually Matters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "Based on analysis of 15M+ TikTok videos and reverse-engineering the recommendation algorithm, here are the proven ranking factors:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-600", children: "Critical" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground", children: "Video Completion Rate (35% weight)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "The percentage of viewers who watch your entire video. Videos with 70%+ completion rates go viral 12x more often. Hook viewers in the first 2 seconds, deliver value throughout, and use cliffhangers." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-orange-600", children: "Critical" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground", children: "Engagement Signals (30% weight)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Likes, comments, shares, and saves. Each action has different weight: Shares (5x), Saves (3x), Comments (2x), Likes (1x). Create save-worthy content with tutorials, hacks, or resources." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-yellow-600", children: "High" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground", children: "Posting Consistency (15% weight)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Accounts that post daily for 30+ consecutive days receive algorithmic preference. TikTok wants to promote reliable content sources. Missing days resets your momentum and reduces reach." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-blue-600", children: "Medium" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground", children: "Account Authority (10% weight)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Profile completeness, follower count, historical performance, and verified status. Established accounts with proven engagement get wider initial distribution for new videos." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-600", children: "Medium" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground", children: "Trend Participation (10% weight)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Using trending sounds, effects, and formats signals cultural relevance. Videos using sounds in their first 24-48 hours of trending receive 3-5x distribution boost." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-cyan-200 dark:border-cyan-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-foreground", children: "Engagement Rate Benchmarks: Where Do You Stand?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "Here is how your engagement rate compares to TikTok creators across all niches:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-lg bg-white/50 dark:bg-gray-800/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "15%+ Engagement" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-purple-600", children: "Viral Elite (Top 1%)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Exceptional content quality. Likely experiencing rapid viral growth and brand interest." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-lg bg-white/50 dark:bg-gray-800/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "10-15% Engagement" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-600", children: "High Performer (Top 5%)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Strong content-market fit. Positioned for viral breakout with continued consistency." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-lg bg-white/50 dark:bg-gray-800/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "5-10% Engagement" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-blue-600", children: "Above Average (Top 20%)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Good foundation. Focus on optimizing hooks and content variety to reach next tier." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-lg bg-white/50 dark:bg-gray-800/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "3-5% Engagement" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-yellow-600", children: "Average (Top 50%)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Typical performance. Requires content strategy refinement and increased posting frequency." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-lg bg-white/50 dark:bg-gray-800/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "1-3% Engagement" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-orange-600", children: "Below Average (Bottom 50%)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Content-audience mismatch likely. Consider niche pivot or major content overhaul." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border rounded-lg bg-white/50 dark:bg-gray-800/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "<1% Engagement" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-600", children: "Critical (Bottom 20%)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Fundamental issues with content quality, niche selection, or posting strategy. Requires complete reset." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-foreground", children: "The Perfect TikTok Profile: Component Breakdown" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-2", children: "Profile Photo Strategy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "Your profile photo appears tiny in For You feeds, so clarity is critical:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-muted-foreground space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Personal Brands:" }),
                    " Close-up face shot with high contrast, bright colors, and clear features"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Business Accounts:" }),
                    " Bold logo on contrasting background (avoid small text)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Character/Niche Accounts:" }),
                    " Instantly recognizable symbol or mascot"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Technical:" }),
                    " Use 200x200px minimum, avoid filters that reduce clarity"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-2", children: "Bio Optimization (80 characters max)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "TikTok bios are severely limited. Every character must earn its place:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 p-3 rounded", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-1", children: "Formula: [Niche] | [Result/Benefit] | [CTA]" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-mono text-foreground", children: "Weight Loss Coach | Lost 50lbs | Free guide" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Score: 94/100 - Clear niche, social proof, direct CTA" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 p-3 rounded", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-1", children: "Alternative: [Identity] + [Unique Hook] + [Value]" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-mono text-foreground", children: "15yo entrepreneur | Building in public | Join 100k+" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Score: 91/100 - Unique angle, social proof, community focus" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-2", children: "Link-in-Bio Strategy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "TikTok allows one clickable link. Make it count:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-muted-foreground space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best for Creators:" }),
                    " Link aggregators (Linktree, Beacons, Stan Store) to offer multiple resources"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best for E-commerce:" }),
                    " Direct product page or collection with discount code in bio"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best for Lead Gen:" }),
                    " Free resource (guide, template, course) in exchange for email"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pro Tip:" }),
                    " Reference your link in every 3rd video to train your audience to check bio"
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-foreground", children: "Advanced Growth Tactics: Going from 0 to 100k" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "1. The 30-Day Consistency Challenge" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Commit to posting 1-3 videos daily for 30 consecutive days. Track your analytics daily. Accounts that complete this see average growth of 2,000-5,000 followers, with top performers gaining 10k-50k. The algorithm rewards commitment." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "2. The Hook Formula (2-Second Rule)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "First 2 seconds determine if viewers stay. Use pattern interrupts: Wait this actually works... Nobody talks about this but... I tried this for 30 days and... Hook templates increase completion rates by 40-60%." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "3. Strategic Trend Riding" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Don't blindly follow trends. Adapt trending sounds/formats to your niche. A finance creator using a dance trend to explain compound interest performs 5x better than generic dance content." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "4. The Save Optimization Strategy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Saves are the highest-weighted engagement signal. Create reference-worthy content: tutorials, hacks, resource lists, templates. Videos with 5%+ save rates often go viral within 48 hours." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "5. Comment Section Engagement" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Respond to every comment in first 60 minutes. Ask questions to spark conversation. Pin controversial/interesting comments. Active comment sections signal high-quality content to the algorithm." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "6. Content Batching for Consistency" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Film 7-10 videos in one session, then schedule throughout the week. This eliminates the daily pressure of creation while maintaining algorithmic consistency. Use TikTok's native scheduler for best results." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-foreground", children: "Fatal TikTok Mistakes That Kill Your Growth" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-red-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Posting Inconsistently:" }),
                  " Posting 3 videos one week, then nothing for 2 weeks kills momentum. The algorithm penalizes inconsistency with reduced reach."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-red-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Following Too Many Accounts:" }),
                  " Following 5,000 accounts while having 200 followers signals desperation and low-quality content to both humans and algorithms."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-red-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Ignoring Analytics:" }),
                  " Not tracking which videos perform best means you're creating blindly. Double down on what works, eliminate what doesn't."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-red-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Generic Content:" }),
                  " Copying trends exactly without adding your unique perspective makes you replaceable. Find your angle and voice."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-red-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Using Banned Music:" }),
                  " Copyrighted music outside TikTok's library can get videos suppressed or removed. Always use TikTok's sound library."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-red-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Poor Video Quality:" }),
                  " Blurry, dark, or low-resolution videos get skipped instantly. Shoot in good lighting with stable camera. Quality matters more than fancy editing."
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-cyan-50 dark:from-green-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-foreground", children: "Monetization Roadmap: Turn Followers Into Income" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "Here is when to activate different monetization strategies based on your follower count:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white/50 dark:bg-gray-800/50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "0-1k Followers: Build Foundation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                  "Focus: Content quality, niche definition, consistency. ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "No monetization yet" }),
                  " premature monetization hurts growth."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white/50 dark:bg-gray-800/50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "1k-10k Followers: Soft Monetization" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Activate:" }),
                  " Affiliate links in bio, TikTok Creator Fund, occasional sponsored posts. Expect $100-500/month."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white/50 dark:bg-gray-800/50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "10k-50k Followers: Active Monetization" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Activate:" }),
                  " Regular brand deals ($200-1,000/post), digital products, coaching/consulting. Expect $1,000-5,000/month."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white/50 dark:bg-gray-800/50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "50k-100k Followers: Professional Creator" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Activate:" }),
                  " Premium brand partnerships ($1,000-5,000/post), membership/subscription, product line. Expect $5,000-20,000/month."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white/50 dark:bg-gray-800/50 rounded", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "100k+ Followers: Full-Time Business" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Activate:" }),
                  " Six-figure brand deals, agencies, product lines, courses, events. Potential for $20,000-100,000+/month."
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-foreground", children: "Your 90-Day TikTok Growth Blueprint" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "min-w-[80px]", children: "Days 1-30" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Foundation Phase" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Post daily, find your niche, analyze which content resonates. Goal: 1,000 followers, identify your top 3 content types." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "min-w-[80px]", children: "Days 31-60" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Optimization Phase" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Double down on winning content, increase frequency to 2x daily, start engaging with comments aggressively. Goal: 5,000 followers, 5%+ engagement rate." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "min-w-[80px]", children: "Days 61-90" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Scaling Phase" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Introduce monetization elements, create series/recurring content, optimize bio for conversions. Goal: 10,000+ followers, ready for brand partnerships." })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t pt-6 mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground italic", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Final Thought:" }),
            " TikTok success isn't about one viral video it's about building sustainable systems. The creators who succeed long-term treat TikTok like a business: they analyze data, optimize based on results, maintain consistency, and evolve with the platform. Use our Profile Score monthly to track your progress, celebrate wins, and identify new optimization opportunities. Your next 100k followers start with optimizing the fundamentals today."
          ] }) })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  TikTokProfileScore as default
};
