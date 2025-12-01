import { n as createLucideIcon, r as reactExports, Q as useToast, j as jsxRuntimeExports, S as SEOHead, a8 as Sparkles, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a4 as Label, V as Input, H as Heart, d as Clock, B as Button, o as LoaderCircle, T as TrendingUp, Y as Download, D as DollarSign, a5 as Info, ah as backend } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { T as Textarea } from "./textarea-DIKih6_2.js";
import { C as CircleCheck } from "./circle-check-CJ5pTUz4.js";
import { C as ChartColumn } from "./chart-column-DAuKFntu.js";
import { U as Users } from "./users-Cu_sVhna.js";
import { T as Target } from "./target-4JeIm6Yk.js";
import { M as MessageCircle } from "./message-circle-DZtFORhh.js";
import { S as Share2 } from "./share-2-SpOWc355.js";
import { L as Lightbulb } from "./lightbulb-DKPyzLdJ.js";
import { B as Brain } from "./brain-CSngUEN8.js";
import { A as Award } from "./award-Bl7Nn9A9.js";
import { R as Rocket } from "./rocket-3HJWnO3v.js";
import { E as Eye } from "./eye-C-BlrwvK.js";
import { Z as Zap } from "./zap-BEhI-iJb.js";
import { C as CircleAlert } from "./circle-alert-DCAQyr8M.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./check-DTsA1WpX.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M9 21V9", key: "1oto5p" }]
];
const PanelsTopLeft = createLucideIcon("panels-top-left", __iconNode$1);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
];
const UserPlus = createLucideIcon("user-plus", __iconNode);
function AudienceAnalyzer() {
  const [followers, setFollowers] = reactExports.useState("");
  const [avgLikes, setAvgLikes] = reactExports.useState("");
  const [avgComments, setAvgComments] = reactExports.useState("");
  const [avgShares, setAvgShares] = reactExports.useState("");
  const [niche, setNiche] = reactExports.useState("");
  const [platform, setPlatform] = reactExports.useState("");
  const [contentType, setContentType] = reactExports.useState("");
  const [postingFrequency, setPostingFrequency] = reactExports.useState("");
  const [topCompetitors, setTopCompetitors] = reactExports.useState("");
  const [audienceGoals, setAudienceGoals] = reactExports.useState("");
  const [analysis, setAnalysis] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const { toast } = useToast();
  const handleAnalyze = async () => {
    if (!followers || !avgLikes || !niche) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    setLoading(true);
    try {
      const engagementRate = (parseInt(avgLikes) + parseInt(avgComments || "0")) / parseInt(followers) * 100;
      const prompt = `You are an elite social media strategist and audience intelligence expert. Conduct a comprehensive, advanced analysis of this account.

Account Metrics:
- Platform: ${platform || "Not specified"}
- Followers: ${followers}
- Average Likes: ${avgLikes}
- Average Comments: ${avgComments || "Not provided"}
- Average Shares: ${avgShares || "Not provided"}
- Niche: ${niche}
- Primary Content Type: ${contentType || "Not specified"}
- Posting Frequency: ${postingFrequency || "Not specified"}
- Calculated Engagement Rate: ${engagementRate.toFixed(2)}%
- Top Competitors: ${topCompetitors || "Not provided"}
- Audience Goals: ${audienceGoals || "Not provided"}

Provide an ADVANCED, comprehensive analysis with:

## 1. 🎯 Audience Health Score (1-10)
- Overall quality rating with detailed justification
- Comparison to platform and niche benchmarks
- Key factors elevating or lowering the score

## 2. 📊 Deep Engagement Intelligence
- Engagement rate analysis for ${platform || "this platform"} in ${niche}
- Likes-to-comments ratio (quality indicator)
- Shares analysis (viral potential)
- Algorithm favorability prediction
- Audience authenticity assessment

## 3. 👥 Psychographic Audience Profile
- Predicted demographics (age, gender, location)
- Psychographic traits (values, interests, lifestyle)
- Pain points and desires
- Buying behavior and decision-making patterns
- Community engagement style
- Emotional triggers that resonate

## 4. 📈 Growth Trajectory Analysis
- Current growth stage assessment
- 3-month and 12-month growth predictions
- Bottlenecks limiting growth
- Untapped growth opportunities
- Viral potential assessment

## 5. 🎬 Content Format Strategy
- Best-performing content types for this audience
- Video vs. image vs. carousel recommendations
- Content length preferences
- Visual aesthetic recommendations (colors, style, tone)
- Trending formats to leverage

## 6. ⏰ Optimal Posting Schedule
- Best days to post (based on niche and audience)
- Ideal posting times (with timezone considerations)
- Recommended posting frequency
- Content calendar structure

## 7. 🔥 Competitor Intelligence
${topCompetitors ? `- Analysis of competitors: ${topCompetitors}
- Competitive advantages to leverage
- Gaps in competitor content you can fill
- Collaboration vs. competition strategy` : `- General competitive landscape in ${niche} niche
- How to differentiate from competitors`}

## 8. 💰 Monetization Roadmap
- Current monetization readiness (1-10)
- Estimated earnings per sponsored post: $X-$Y range
- Revenue stream recommendations (ranked by potential)
- Brand partnership opportunities
- Product/service launch viability
- Audience's willingness to pay assessment

## 9. 🎨 Content Strategy Blueprint
- Content pillar recommendations (3-5 themes)
- Hook strategies for this audience
- Call-to-action effectiveness tips
- Hashtag strategy (number and type)
- Trending topics to leverage
- Content gaps to fill

## 10. 🚨 Red Flags & Warnings
- Engagement quality concerns
- Fake follower indicators (if any)
- Algorithm penalty risks
- Sustainability concerns

## 11. 💡 Advanced Growth Hacks
- Platform-specific algorithm tips for ${platform || "growth"}
- Collaboration opportunities
- Cross-promotion strategies
- Community building tactics
- Viral content formulas for this niche

## 12. ✅ 30-Day Action Plan
**Week 1:**
- [Specific immediate action items]

**Week 2:**
- [Content strategy adjustments]

**Week 3:**
- [Engagement and community focus]

**Week 4:**
- [Growth and experimentation]

**Quick Wins (Do Today):**
- [3-5 actions they can take right now]

**Stop Doing:**
- [Things that are hurting growth]

**Double Down On:**
- [What's working that needs more focus]

Format using markdown with clear sections (##). Be extremely specific, data-driven, and actionable. Include specific numbers, percentages, and realistic projections. Make this analysis feel personalized and highly valuable.`;
      const response = await backend.ai_analysis.analyze({
        calculatorType: "audience-analyzer",
        data: {
          followers: parseInt(followers),
          avgLikes: parseInt(avgLikes),
          avgComments: parseInt(avgComments || "0"),
          avgShares: parseInt(avgShares || "0"),
          niche,
          platform,
          contentType,
          postingFrequency,
          topCompetitors,
          audienceGoals,
          engagementRate
        }
      });
      setAnalysis(response.summary);
    } catch (error) {
      console.error("Error analyzing audience:", error);
      toast({
        title: "Analysis Failed",
        description: "Unable to analyze audience. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "AI Audience Intelligence Analyzer - Deep Social Media Analytics & Insights 2024",
        description: "Transform your social media strategy with AI-powered audience analysis. Get expert insights on engagement, demographics, growth potential, and monetization opportunities. Free audience analyzer tool for Instagram, TikTok, and more.",
        keywords: "audience analyzer, social media analytics, engagement rate calculator, follower analysis, Instagram analytics, TikTok analytics, audience demographics, social media insights, influencer analytics, audience intelligence"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20 px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto max-w-6xl relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center animate-fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-yellow-300 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold tracking-wide", children: "AI-Powered Intelligence" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl font-black mb-6 leading-tight", children: [
          "Audience Intelligence ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden md:block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent", children: "Analyzer" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto font-light leading-relaxed", children: "Unlock deep insights about your followers and discover exactly what your audience wants with cutting-edge AI analytics" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Real-time Analysis" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Expert Insights" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Actionable Strategies" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-6xl px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-2xl mb-8 border-2 border-blue-200 dark:border-blue-800 hover:shadow-3xl transition-all duration-300 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-3 text-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-6 w-6 text-white" }) }),
            "Enter Your Social Media Metrics"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-base", children: "Provide your account statistics for comprehensive AI-powered analysis" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "followers", className: "text-base font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4 text-blue-600" }),
                "Total Followers *"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "followers",
                  type: "number",
                  placeholder: "e.g., 10,000",
                  value: followers,
                  onChange: (e) => setFollowers(e.target.value),
                  className: "text-lg h-12 border-2 focus:border-blue-500 transition-all"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Your current follower count" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "niche", className: "text-base font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-4 w-4 text-purple-600" }),
                "Niche/Industry *"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "niche",
                  placeholder: "e.g., Fitness, Fashion, Tech, Food",
                  value: niche,
                  onChange: (e) => setNiche(e.target.value),
                  className: "text-lg h-12 border-2 focus:border-purple-500 transition-all"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Your content category or industry" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "likes", className: "text-base font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 text-pink-600" }),
                "Average Likes per Post *"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "likes",
                  type: "number",
                  placeholder: "e.g., 500",
                  value: avgLikes,
                  onChange: (e) => setAvgLikes(e.target.value),
                  className: "text-lg h-12 border-2 focus:border-pink-500 transition-all"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Average likes across recent posts" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "comments", className: "text-base font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4 text-green-600" }),
                "Average Comments per Post"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "comments",
                  type: "number",
                  placeholder: "e.g., 50",
                  value: avgComments,
                  onChange: (e) => setAvgComments(e.target.value),
                  className: "text-lg h-12 border-2 focus:border-green-500 transition-all"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Average comments per post (optional)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "shares", className: "text-base font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-4 w-4 text-orange-600" }),
                "Average Shares per Post"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "shares",
                  type: "number",
                  placeholder: "e.g., 20",
                  value: avgShares,
                  onChange: (e) => setAvgShares(e.target.value),
                  className: "text-lg h-12 border-2 focus:border-orange-500 transition-all"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Average shares/reposts per post (optional)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "platform", className: "text-base font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-4 w-4 text-indigo-600" }),
                "Platform"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: platform, onValueChange: setPlatform, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "platform", className: "text-lg h-12 border-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select platform" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "instagram", children: "Instagram" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "tiktok", children: "TikTok" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "youtube", children: "YouTube" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "twitter", children: "Twitter/X" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "linkedin", children: "LinkedIn" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "facebook", children: "Facebook" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Your primary social media platform" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 group md:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "contentType", className: "text-base font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PanelsTopLeft, { className: "h-4 w-4 text-pink-600" }),
                "Primary Content Type"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: contentType, onValueChange: setContentType, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "contentType", className: "text-lg h-12 border-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select content type" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "short-video", children: "Short-Form Video (Reels/Shorts/TikToks)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "long-video", children: "Long-Form Video" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "images", children: "Photos/Images" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "carousels", children: "Carousels/Slideshows" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "mixed", children: "Mixed Content" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "text", children: "Text Posts" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "What format do you post most often?" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "frequency", className: "text-base font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-teal-600" }),
                "Posting Frequency"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "frequency",
                  placeholder: "e.g., 5 times per week, daily",
                  value: postingFrequency,
                  onChange: (e) => setPostingFrequency(e.target.value),
                  className: "text-lg h-12 border-2 focus:border-teal-500 transition-all"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "How often do you post? (optional)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "competitors", className: "text-base font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-4 w-4 text-cyan-600" }),
                "Top Competitors"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "competitors",
                  placeholder: "e.g., @user1, @user2, @user3",
                  value: topCompetitors,
                  onChange: (e) => setTopCompetitors(e.target.value),
                  className: "text-lg h-12 border-2 focus:border-cyan-500 transition-all"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Similar accounts in your niche (optional)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 group md:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "goals", className: "text-base font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-4 w-4 text-yellow-600" }),
                "Audience Goals"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "goals",
                  placeholder: "e.g., Want to monetize through brand deals, grow to 100K followers, increase engagement rate to 5%",
                  value: audienceGoals,
                  onChange: (e) => setAudienceGoals(e.target.value),
                  className: "text-lg border-2 focus:border-yellow-500 transition-all min-h-[80px]"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "What are your main goals for your audience? (optional)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: handleAnalyze,
              disabled: loading,
              className: "w-full mt-8 h-14 text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300",
              children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-5 w-5 animate-spin" }),
                "Analyzing Your Audience Intelligence..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "mr-2 h-5 w-5" }),
                "Analyze My Audience with AI"
              ] })
            }
          )
        ] })
      ] }),
      analysis && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-2xl animate-fade-in border-2 border-green-300 dark:border-green-800 mb-8 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-3 text-2xl justify-between flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-6 w-6 text-white" }) }),
              "Your Audience Intelligence Report"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: () => {
                  const element = document.createElement("a");
                  const file = new Blob([`# Audience Intelligence Report

${analysis}`], { type: "text/markdown" });
                  element.href = URL.createObjectURL(file);
                  element.download = `audience-analysis-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.md`;
                  document.body.appendChild(element);
                  element.click();
                  document.body.removeChild(element);
                  toast({ title: "Downloaded!", description: "Your analysis has been saved." });
                },
                variant: "outline",
                size: "sm",
                className: "gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                  "Export Report"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-base", children: "AI-generated insights and actionable recommendations tailored to your audience" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-lg max-w-none dark:prose-invert", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap text-foreground leading-relaxed", children: analysis }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-8 border-t", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold mb-6 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-5 w-5 text-blue-600" }),
              "Your Metrics at a Glance"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 rounded-xl border-2 border-blue-200 dark:border-blue-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mb-1", children: "Followers" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600", children: parseInt(followers).toLocaleString() })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/20 rounded-xl border-2 border-pink-200 dark:border-pink-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mb-1", children: "Avg. Likes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-pink-600", children: parseInt(avgLikes).toLocaleString() })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 rounded-xl border-2 border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mb-1", children: "Engagement Rate" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-green-600", children: [
                  ((parseInt(avgLikes) + parseInt(avgComments || "0")) / parseInt(followers) * 100).toFixed(2),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mb-1", children: "Platform" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-purple-600 capitalize", children: platform || "N/A" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8 border-2 border-blue-200 dark:border-blue-800 overflow-hidden shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5 text-blue-600" }),
          "Understanding Your Metrics: The Complete Guide"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border-2 border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-blue-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground text-lg", children: "Engagement Rate" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 font-semibold", children: "Poor:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "<1%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-600 font-semibold", children: "Good:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "3-6%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-semibold", children: "Great:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "6-10%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-semibold", children: "Excellent:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: ">10%" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border-2 border-purple-200 dark:border-purple-800 hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-5 w-5 text-purple-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground text-lg", children: "Follower Growth" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-600 font-semibold", children: "Slow:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "<2% monthly" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-semibold", children: "Healthy:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "2-5% monthly" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-semibold", children: "Strong:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "5-10% monthly" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-600 font-semibold", children: "Viral:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: ">10% monthly" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-xl border-2 border-pink-200 dark:border-pink-800 hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-5 w-5 text-pink-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground text-lg", children: "Audience Quality" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "High engagement + consistent growth" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Active comment interactions" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Regular shares and saves" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Genuine follower interest" })
              ] })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-indigo-200 dark:border-indigo-800 hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-5 w-5 text-indigo-600" }),
            "Why Audience Intelligence Matters"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "In today's digital landscape, understanding your audience isn't just important—it's essential. With over 4.5 billion social media users worldwide, the competition for attention is fierce." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Our AI-powered analyzer" }),
              " goes beyond basic metrics to provide deep insights into who your followers are, what they want, and how to serve them better. This translates directly into higher engagement, faster growth, and better monetization opportunities."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-indigo-50 dark:bg-indigo-950/30 p-4 rounded-lg border-l-4 border-indigo-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-indigo-700 dark:text-indigo-300", children: "💡 Pro Tip: Creators who analyze their audience data regularly see 3x higher engagement rates than those who don't." }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 dark:border-green-800 hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5 text-green-600" }),
            "Key Benefits of Audience Analysis"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
            { icon: TrendingUp, text: "Boost engagement rates by understanding what resonates", color: "text-blue-600" },
            { icon: Target, text: "Create content tailored to your audience preferences", color: "text-purple-600" },
            { icon: DollarSign, text: "Unlock monetization opportunities with quality insights", color: "text-green-600" },
            { icon: Rocket, text: "Accelerate growth with data-driven strategies", color: "text-orange-600" },
            { icon: Award, text: "Build authentic connections with your community", color: "text-pink-600" }
          ].map((benefit, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/20 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(benefit.icon, { className: `h-5 w-5 ${benefit.color} mt-0.5 flex-shrink-0` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground leading-relaxed", children: benefit.text })
          ] }, index)) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8 border-2 border-purple-200 dark:border-purple-800 overflow-hidden shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-6 w-6 text-purple-600" }),
            "Deep Dive: Understanding Each Metric"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-base", children: "Master the art of audience analytics with our comprehensive metric guide" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10 rounded-xl border-2 border-blue-200 dark:border-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-foreground mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5 text-blue-600" }),
              "Engagement Rate: Your Audience Connection Score"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-4 leading-relaxed", children: [
              "Engagement rate is the percentage of your followers who actively interact with your content. It's calculated as: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "(Likes + Comments + Shares) ÷ Followers × 100" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-900 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-green-600 mb-2", children: "High Engagement Signals:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-muted-foreground space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Authentic, engaged audience" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Content resonates with followers" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Strong community building" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Higher monetization potential" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-900 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-red-600 mb-2", children: "Low Engagement Signals:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-muted-foreground space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Possible bot/inactive followers" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Content not aligned with audience" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Poor posting timing" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Need strategy adjustment" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-100 dark:bg-blue-950/50 p-4 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-blue-700 dark:text-blue-300", children: "📊 Industry Benchmark: Micro-influencers (10K-100K) average 3-5%, while mega-influencers (1M+) typically see 1-2% due to larger, less engaged audiences." }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10 rounded-xl border-2 border-purple-200 dark:border-purple-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-foreground mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-purple-600" }),
              "Follower Count: Your Reach Potential"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-4 leading-relaxed", children: [
              "Your follower count represents your potential reach—the maximum number of people who could see your content. However, ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "quality always trumps quantity" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 bg-white dark:bg-gray-900 p-3 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "Nano-Influencers (1K-10K)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Highest engagement rates, strong niche authority, authentic connections" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 bg-white dark:bg-gray-900 p-3 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "Micro-Influencers (10K-100K)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Great engagement, monetization ready, brand partnership opportunities" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 bg-white dark:bg-gray-900 p-3 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "Macro-Influencers (100K-1M)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Wide reach, established authority, premium brand deals" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/10 rounded-xl border-2 border-green-200 dark:border-green-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-foreground mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5 text-green-600" }),
              "Comments & Shares: Depth of Engagement"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-4 leading-relaxed", children: [
              "While likes are great, ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "comments and shares indicate deeper engagement" }),
              ". They show your audience is willing to invest time and associate their personal brand with yours."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-900 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-green-600 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
                  "Comments Matter Because:"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-muted-foreground space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Algorithm boost (platform prioritizes)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Community building indicator" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Valuable audience feedback" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Higher than likes in value" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-900 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-orange-600 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-4 w-4" }),
                  "Shares Are Gold Because:"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-muted-foreground space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Exponential reach expansion" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Strongest engagement signal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Indicates exceptional value" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Viral potential marker" })
                ] })
              ] })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8 border-2 border-yellow-200 dark:border-yellow-800 overflow-hidden shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-6 w-6 text-yellow-600" }),
          "Monetization Insights: Turn Followers into Revenue"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Understanding your audience metrics is the first step to monetization. Here's what brands and sponsors look for:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-900/10 rounded-xl border-2 border-green-300 dark:border-green-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-green-600 mb-2", children: "$10-$100" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground mb-1", children: "Nano-Influencers (1K-10K)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Per sponsored post. Focus on niche authority and high engagement." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-900/10 rounded-xl border-2 border-blue-300 dark:border-blue-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-blue-600 mb-2", children: "$100-$500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground mb-1", children: "Micro-Influencers (10K-100K)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Per post. Sweet spot for brand partnerships and consistent income." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-900/10 rounded-xl border-2 border-purple-300 dark:border-purple-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-purple-600 mb-2", children: "$500-$10K+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground mb-1", children: "Macro-Influencers (100K-1M)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Per campaign. Premium rates for established creators." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 dark:bg-yellow-950/30 p-6 rounded-xl border-2 border-yellow-300 dark:border-yellow-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-foreground mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-yellow-600" }),
              "What Brands Look For:"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-600 mt-1 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Engagement Rate:" }),
                    " Minimum 2-3% for partnerships"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-600 mt-1 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Audience Authenticity:" }),
                    " Real, active followers"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-600 mt-1 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Niche Alignment:" }),
                    " Relevant audience demographics"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-600 mt-1 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Content Quality:" }),
                    " Professional, consistent posting"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-600 mt-1 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Growth Trend:" }),
                    " Steady upward trajectory"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-600 mt-1 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Professionalism:" }),
                    " Easy to work with, reliable"
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8 border-2 border-pink-200 dark:border-pink-800 overflow-hidden shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-6 w-6 text-pink-600" }),
          "Actionable Growth Strategies for Every Stage"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10 rounded-xl border-2 border-blue-200 dark:border-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-foreground mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5 text-blue-600" }),
              "For Nano & Micro-Influencers (1K-100K)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-yellow-600" }),
                  "Focus on:"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold mt-0.5", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Niche domination:" }),
                      " Be the go-to expert in your specific area"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold mt-0.5", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Engagement first:" }),
                      " Reply to every comment, build community"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold mt-0.5", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Consistency:" }),
                      " Post 3-5 times per week minimum"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold mt-0.5", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Collaborations:" }),
                      " Partner with similar-sized creators"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-foreground flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-red-600" }),
                  "Avoid:"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 font-bold mt-0.5", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Buying followers or engagement (kills credibility)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 font-bold mt-0.5", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Posting inconsistently or disappearing for weeks" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 font-bold mt-0.5", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ignoring your audience's comments and messages" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 font-bold mt-0.5", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Trying to appeal to everyone (be niche-specific)" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10 rounded-xl border-2 border-purple-200 dark:border-purple-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-foreground mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-purple-600" }),
              "For Growing Accounts (100K-500K)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-900 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-2", children: "💼 Monetization Focus" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Start reaching out to brands, create a media kit, set your rates based on engagement metrics." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-900 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-2", children: "📊 Data-Driven Decisions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Use analytics to double down on what works. Track peak posting times, best-performing content types." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-900 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-2", children: "🎯 Diversification" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Expand to multiple platforms, create digital products, build email lists for owned audience." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-950/20 dark:to-emerald-900/10 rounded-xl border-2 border-green-200 dark:border-green-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-foreground mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-green-600" }),
              "Universal Growth Principles (All Sizes)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4", children: [
              { title: "Value First", desc: "Every post should educate, entertain, or inspire. No filler content." },
              { title: "Authenticity Wins", desc: "Be genuine. Audiences can spot fake from a mile away." },
              { title: "Test & Iterate", desc: "Try new content formats, analyze results, refine your strategy." },
              { title: "Community Building", desc: "Treat followers as community members, not just numbers." },
              { title: "Stay Current", desc: "Jump on trends early, but only if relevant to your niche." },
              { title: "Long-term Mindset", desc: "Sustainable growth beats viral spikes. Play the long game." }
            ].map((tip, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: tip.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: tip.desc })
              ] })
            ] }, index)) })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-indigo-200 dark:border-indigo-800 overflow-hidden shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-6 w-6 text-indigo-600" }),
          "Frequently Asked Questions"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: [
          {
            q: "How often should I analyze my audience metrics?",
            a: "Ideally, perform a deep analysis monthly, but check your basic metrics (engagement, growth) weekly. This helps you spot trends early and adjust your strategy quickly. Major changes in your niche or content strategy warrant immediate analysis."
          },
          {
            q: "What's more important: followers or engagement?",
            a: "Engagement wins every time. An account with 10K highly engaged followers is more valuable than 100K inactive ones. High engagement means: 1) Better algorithm performance, 2) Higher monetization potential, 3) Stronger community, 4) More authentic influence."
          },
          {
            q: "Why is my engagement rate dropping?",
            a: "Common causes include: Algorithm changes (platforms constantly update), Inactive follower buildup, Content not resonating, Posting at wrong times, Decreased posting frequency, Or the natural effect of growth (larger accounts typically have lower engagement rates)."
          },
          {
            q: "How can I improve my engagement rate?",
            a: "Try these proven tactics: Ask questions in captions, Use interactive features (polls, quizzes), Reply to every comment within first hour, Post when your audience is most active, Create share-worthy content, Use trending audio/hashtags strategically, Go live regularly, Create series that keep people coming back."
          },
          {
            q: "When am I ready for brand partnerships?",
            a: "You're ready when you have: 1) Minimum 5,000 engaged followers, 2) Engagement rate of 2%+ consistently, 3) Clear niche and content theme, 4) Professional content quality, 5) Authentic audience (not bought followers). Many nano-influencers (1K-10K) successfully partner with small brands!"
          },
          {
            q: "How do I know if my followers are real?",
            a: "Check for: Meaningful comments (not just emojis), Profile pictures and bios on commenters, Consistent engagement across posts, Comments related to your content, Reasonable follower-to-following ratios, Geographic distribution that makes sense. Use our analyzer to get AI insights on audience authenticity!"
          }
        ].map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-900/10 rounded-xl border-l-4 border-indigo-500 hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground mb-2 text-lg", children: faq.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: faq.a })
        ] }, index)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 text-center p-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Ready to Unlock Your Audience Intelligence?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-blue-100 mb-6 max-w-2xl mx-auto", children: "Join thousands of creators who use our AI-powered analyzer to grow faster, engage better, and monetize smarter." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
            className: "bg-white text-purple-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-bold shadow-xl hover:shadow-2xl transition-all duration-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-2 h-5 w-5" }),
              "Analyze My Audience Now - It's Free!"
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  AudienceAnalyzer as default
};
