import { r as reactExports, O as useToast, j as jsxRuntimeExports, S as SEOHead, f as Card, g as CardHeader, h as CardTitle, a7 as Sparkles, i as CardDescription, k as CardContent, a3 as Label, B as Button, aB as RefreshCw, T as TrendingUp, ag as backend } from "./index-C_OXA6OQ.js";
import { T as Textarea } from "./textarea-CuxlogY6.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { T as Type } from "./type-C9uKE8qy.js";
import { L as LoaderCircle } from "./loader-circle-BYW7QwsU.js";
import { C as Copy } from "./copy-DGMuG98H.js";
import { Z as Zap } from "./zap-B5WxZbDS.js";
import { T as Target } from "./target-1ApqtYDG.js";
import { A as Award } from "./award-DdRvOLEz.js";
import { C as CircleCheck } from "./circle-check-BDDR1Xl_.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
function CaptionGenerator() {
  const [imageDescription, setImageDescription] = reactExports.useState("");
  const [platform, setPlatform] = reactExports.useState("instagram");
  const [tone, setTone] = reactExports.useState("casual");
  const [caption, setCaption] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const { toast } = useToast();
  const handleGenerate = async () => {
    if (!imageDescription.trim()) {
      toast({
        title: "Missing Information",
        description: "Please describe your image or video.",
        variant: "destructive"
      });
      return;
    }
    setLoading(true);
    setCaption("");
    try {
      const response = await backend.caption_gen.generate({
        description: imageDescription,
        platform,
        tone
      });
      setCaption(response.caption);
    } catch (error) {
      console.error("Error generating caption:", error);
      toast({
        title: "Generation Failed",
        description: "Unable to generate caption. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(caption);
        toast({
          title: "Copied!",
          description: "Caption copied to clipboard."
        });
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = caption;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand("copy");
          toast({
            title: "Copied!",
            description: "Caption copied to clipboard."
          });
        } catch (err) {
          console.error("Fallback copy failed:", err);
          toast({
            title: "Copy Failed",
            description: "Please manually select and copy the text.",
            variant: "destructive"
          });
        }
        document.body.removeChild(textArea);
      }
    } catch (error) {
      console.error("Copy failed:", error);
      toast({
        title: "Copy Failed",
        description: "Please manually select and copy the text.",
        variant: "destructive"
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "AI Caption Generator - Free Social Media Caption Writer | Smart Calculator Hubs",
        description: "Generate viral social media captions with AI. Perfect for Instagram, TikTok, Twitter, LinkedIn. Create scroll-stopping captions in seconds. Free caption generator tool.",
        keywords: "caption generator, AI caption writer, Instagram captions, TikTok captions, social media captions, viral captions, free caption tool"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12 max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 animate-fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-6 py-3 rounded-full mb-6 shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Type, { className: "h-6 w-6 text-purple-600 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold text-purple-700 dark:text-purple-300", children: "AI Caption Wizard" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent leading-tight", children: "AI Caption Generator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: "Transform boring descriptions into scroll-stopping captions that get likes, comments, and shares 🚀" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border-2 hover:border-purple-300 animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-3 text-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6 text-purple-600" }),
              "Generate Your Caption"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-base", children: "Describe your content and let AI work its magic" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6 pt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "description", className: "text-base font-semibold", children: "What's your post about?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "description",
                  placeholder: "E.g., A sunset photo at the beach with palm trees, vibrant orange and purple sky, peaceful and inspiring mood...",
                  value: imageDescription,
                  onChange: (e) => setImageDescription(e.target.value),
                  rows: 5,
                  className: "resize-none text-base border-2 focus:border-purple-400 transition-colors"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "💡 Tip: The more details, the better the caption!" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "platform", className: "text-base font-semibold", children: "Platform" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: platform, onValueChange: setPlatform, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "platform", className: "border-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "instagram", children: "📸 Instagram" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "tiktok", children: "🎵 TikTok" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "twitter", children: "🐦 Twitter/X" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "linkedin", children: "💼 LinkedIn" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "facebook", children: "👍 Facebook" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "tone", className: "text-base font-semibold", children: "Tone & Vibe" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: tone, onValueChange: setTone, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "tone", className: "border-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "casual", children: "😊 Casual & Friendly" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "professional", children: "👔 Professional" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "funny", children: "😂 Funny & Witty" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "inspirational", children: "✨ Inspirational" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "educational", children: "📚 Educational" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "promotional", children: "🎯 Promotional" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: handleGenerate,
                disabled: loading,
                className: "w-full h-14 text-lg bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300",
                children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-3 h-6 w-6 animate-spin" }),
                  "Crafting Your Perfect Caption..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-3 h-6 w-6" }),
                  "Generate Caption Magic ✨"
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-2xl bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20 border-2 border-purple-200 animate-fade-in", style: { animationDelay: "200ms" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "bg-gradient-to-r from-pink-50 to-orange-50 dark:from-pink-900/20 dark:to-orange-900/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-3 text-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Type, { className: "h-6 w-6 text-pink-600" }),
              "Your Viral Caption"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-base", children: "Ready to copy & paste" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: caption ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-fade-in", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-800 min-h-[280px] shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground whitespace-pre-wrap text-lg leading-relaxed", children: caption }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleCopy, className: "flex-1 h-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-base shadow-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "mr-2 h-5 w-5" }),
                "Copy Caption"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleGenerate, variant: "outline", disabled: loading, className: "h-12 px-6 border-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-5 w-5" }) })
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-[350px] text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Type, { className: "h-20 w-20 mx-auto opacity-20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg", children: "Your AI-generated caption will appear here" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Fill in the details and click generate!" })
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-300 dark:border-purple-700 shadow-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-8 w-8" }),
            "The Science of Viral Captions: Your Complete Masterclass"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-100 text-base mt-2", children: "⏱️ 12-min read | 🎯 Expert Level | 💎 Game-Changing Insights" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose prose-lg max-w-none dark:prose-invert p-8 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-8 rounded-2xl border-2 border-orange-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold text-orange-700 dark:text-orange-400 mb-4 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-8 w-8" }),
              "Why Your Captions Fail (And How to Fix Them)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed text-foreground", children: [
              "Here's a brutal truth: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "90% of social media captions are forgettable trash" }),
              ". They're generic, boring, and scroll-past-worthy. But you're here because you're ready to join the elite 10% who actually get engagement."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-100 dark:bg-red-900/30 p-6 rounded-xl border-2 border-red-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-red-700 dark:text-red-400 mb-3 text-xl", children: "❌ Caption Fails" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: '• "Great day! #blessed #happy"' }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: '• "Check out my new post!"' }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: '• "No caption needed 🔥"' }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Generic motivational quotes" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Hashtag vomit with no context" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-red-600 font-bold", children: "Result: 0.5% engagement rate 😴" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-100 dark:bg-green-900/30 p-6 rounded-xl border-2 border-green-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-green-700 dark:text-green-400 mb-3 text-xl", children: "✅ Caption Wins" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Strong hook in first 7 words" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Tells a micro-story" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Asks engaging questions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Strategic emoji placement" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Clear, compelling CTA" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-green-600 font-bold", children: "Result: 8-15% engagement rate 🚀" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold text-purple-600 mb-6 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-8 w-8" }),
              "The 7-Second Rule: Hook or Die"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg mb-4", children: [
              "Instagram users spend an average of ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-purple-600", children: "7 seconds" }),
              " deciding whether to engage with a post. Your caption's first line is EVERYTHING."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-600 my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-blue-700 dark:text-blue-400 mb-4 text-xl", children: "🎣 The Hook Formula That Never Fails:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white dark:bg-gray-900 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground mb-2", children: "1. Question Hook" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: `"Ever wonder why some people gain 10k followers in a month while you're stuck at 500?"` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white dark:bg-gray-900 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground mb-2", children: "2. Shocking Statement" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: '"I lost $50,000 because I ignored this one social media rule."' })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white dark:bg-gray-900 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground mb-2", children: "3. Promise Hook" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: `"This 3-step formula tripled my engagement in 14 days (and it'll work for you too)"` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white dark:bg-gray-900 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground mb-2", children: "4. Curiosity Gap" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: `"Nobody talks about this Instagram feature, but it's the secret to viral posts..."` })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-purple-700 dark:text-purple-400 mb-3 text-xl", children: "📊 Data-Backed Hook Performance:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Question hooks:" }),
                  " 2.8x more comments than statements"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Numbered lists:" }),
                  ' "5 ways to..." get 73% more saves'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Personal stories:" }),
                  " 3.2x higher engagement than generic posts"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Controversial takes:" }),
                  " 4.1x more shares (use carefully!)"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold text-pink-600 mb-6 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-8 w-8" }),
              "Platform-Specific Caption Strategies"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg mb-6", children: "One caption does NOT fit all. Here's how to optimize for each platform's unique algorithm and audience:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-2 border-purple-300 rounded-xl p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-purple-600 mb-4", children: "📸 Instagram: The Storytelling Platform" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Optimal Length:" }),
                    ' 138-150 characters (2 lines before "more") for feed + longer story in continuation'
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Hashtag Sweet Spot:" }),
                    " 5-9 hashtags (30 max, but don't use all)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best Practices:" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Use line breaks for readability (3-5 lines max per paragraph)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Front-load value in first 2 lines before "...more"' }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Include 3-5 emojis max (more = spam)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'End with clear CTA: "Double tap if you agree" or "Tag someone who needs this"' }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Hide hashtags: Drop 3-5 line breaks, then add hashtags" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-white dark:bg-gray-900 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-purple-600 font-bold mb-2", children: "WINNING FORMULA:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-mono", children: "Hook (7-10 words) + Story/Value (100-200 words) + CTA (1 line) + Hashtags (hidden)" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-2 border-cyan-300 rounded-xl p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-cyan-600 mb-4", children: "🎵 TikTok: The Viral Velocity Engine" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Optimal Length:" }),
                    " Under 150 characters (keep it PUNCHY)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Hashtag Strategy:" }),
                    " 3-5 hashtags max (trending + niche)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best Practices:" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Make it conversation-starter worthy" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Use trending phrases/slang relevant to your niche" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Pose questions that beg comments" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Include POV/storytime hooks when relevant" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Don't explain the video—enhance it with context" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-white dark:bg-gray-900 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-cyan-600 font-bold mb-2", children: "VIRAL CAPTION HACKS:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: '• "Wait for it..." (completion rate ↑)' }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: '• "Part 1/3" (series engagement ↑)' }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: '• "Controversial opinion:" (comment storm ↑)' })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-2 border-blue-300 rounded-xl p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-blue-600 mb-4", children: "🐦 Twitter/X: The Thought Leadership Arena" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Optimal Length:" }),
                    " 71-100 characters (short & punchy wins)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Hashtag Strategy:" }),
                    " 1-2 hashtags max (more = amateur hour)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best Practices:" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lead with bold claims or hot takes" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Use thread format for longer insights (1/7, 2/7, etc.)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Engage with trending topics strategically" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Quote retweet with added value, not just emoji reactions" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "End with question to drive replies" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-white dark:bg-gray-900 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-600 font-bold mb-2", children: "HIGH-ENGAGEMENT FORMATS:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: '• "Unpopular opinion:" (debate starter)' }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: `• "Here's what nobody tells you about [topic]"` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: '• "Thread: How I [achieved result] in [timeframe]"' })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-2 border-indigo-300 rounded-xl p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-indigo-600 mb-4", children: "💼 LinkedIn: The Authority Builder" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Optimal Length:" }),
                    " 150-300 characters first paragraph, longer insight below"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Hashtag Strategy:" }),
                    " 3-5 industry-specific hashtags"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best Practices:" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-1 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Professional ≠ boring (inject personality!)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Share lessons, failures, and insights" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Use single-line paragraphs for mobile readability" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: `End with "What's your experience?" type questions` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Avoid excessive self-promotion (70% value, 30% promotion)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-white dark:bg-gray-900 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-indigo-600 font-bold mb-2", children: "ENGAGEMENT GOLD:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: `• "3 years ago I was [struggle]. Today [success]. Here's what changed:"` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: '• "The biggest mistake I see in [industry]..."' }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: `• "Here's what 10 years in [field] taught me:"` })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl border-2 border-green-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold text-green-700 dark:text-green-400 mb-6 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-8 w-8" }),
              "The Caption Conversion Formula"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg mb-6 text-foreground", children: "Every caption should follow this proven structure for maximum engagement:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0", children: "1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground mb-1", children: "HOOK (First 7-10 Words)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Grab attention immediately. No warmup fluff." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0", children: "2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground mb-1", children: "VALUE/STORY (Middle Section)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Deliver the goods. Educate, entertain, or inspire." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0", children: "3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground mb-1", children: "ENGAGEMENT TRIGGER" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Pose a question, spark debate, or request action." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0", children: "4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground mb-1", children: "CTA (Call-to-Action)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Tell them exactly what to do next. Be specific!" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0", children: "5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground mb-1", children: "HASHTAGS (Strategic Placement)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Mix trending, niche, and branded tags. Hide on Instagram." })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-orange-600 mb-6", children: "🚀 Advanced Caption Hacks The Pros Use" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-orange-50 dark:bg-orange-900/20 rounded-xl border-2 border-orange-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-orange-700 dark:text-orange-400 mb-3 text-lg", children: "💡 The Pattern Interrupt" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground mb-2", children: "Start with something unexpected to break scroll mode:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs italic text-muted-foreground", children: '"Delete this app right now. No seriously, hear me out..."' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-2 border-blue-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-blue-700 dark:text-blue-400 mb-3 text-lg", children: "🎯 The Specificity Principle" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground mb-2", children: "Specific numbers and details = credibility:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs italic text-muted-foreground", children: '"I gained 847 followers in 12 days using this exact method"' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border-2 border-purple-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-purple-700 dark:text-purple-400 mb-3 text-lg", children: "⚡ The Controversy Catalyst" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground mb-2", children: "Politely challenge common beliefs:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs italic text-muted-foreground", children: `"Everyone says 'post daily' but that's terrible advice. Here's why..."` })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-pink-50 dark:bg-pink-900/20 rounded-xl border-2 border-pink-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-pink-700 dark:text-pink-400 mb-3 text-lg", children: "🔮 The Future Pacing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground mb-2", children: "Help them visualize the outcome:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs italic text-muted-foreground", children: `"Imagine waking up to 100+ notifications. Here's how to make it happen..."` })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-8 rounded-2xl border-2 border-red-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-red-700 dark:text-red-400 mb-6", children: "⚠️ Caption Killers to Avoid" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "❌" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: "Asking for engagement directly" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: '"Please like and share!" = algorithm red flag' })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "❌" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: "Hashtag stuffing" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "30 random hashtags = desperate spam energy" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "❌" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: "Zero formatting" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Wall of text = instant scroll past" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "❌" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: "Generic questions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: '"What do you think?" = low-effort garbage' })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "❌" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: "Ignoring your niche" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Random content = confused audience" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white p-10 rounded-2xl text-center shadow-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-extrabold mb-4", children: "🎯 Your Caption Mastery Action Plan" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-8 text-purple-100", children: "Ready to write captions that convert? Here's your 7-day challenge:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4 mb-8 text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold mb-2", children: "Days 1-2: Research" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-purple-100", children: "Study top 10 posts in your niche. What captions work?" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold mb-2", children: "Days 3-5: Practice" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-purple-100", children: "Write 15 captions using this guide. A/B test 3 formats." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold mb-2", children: "Days 6-7: Optimize" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-purple-100", children: "Analyze what worked. Double down. Refine your formula." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: "📈 Expected Result: 200-400% engagement increase" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-purple-200 mt-4", children: "The difference between 500 and 50,000 followers? Better captions." })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  CaptionGenerator as default
};
