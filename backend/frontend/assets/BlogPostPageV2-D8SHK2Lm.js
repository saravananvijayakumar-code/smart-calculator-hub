import { j as jsxRuntimeExports, C as Calculator, L as Link, u as useParams, r as reactExports, f as Card, B as Button, d as Clock, aK as ErrorBoundary, ag as backend } from "./index-C_OXA6OQ.js";
import { A as AdsterraSlot } from "./AdsterraSlot--S6-7ysu.js";
import { M as MarkdownRenderer } from "./MarkdownRenderer-9_ZyhXa8.js";
import { A as AppleStyleCard } from "./AppleStyleCard-bNXb4kfM.js";
import { C as CALCULATOR_DATA } from "./CalculatorCategory-jKaiWaqd.js";
import { A as ArrowRight } from "./arrow-right-CtOKJdMG.js";
import { A as ArrowLeft } from "./arrow-left-C2wP0iAx.js";
import { C as Calendar } from "./calendar-CKWgIWzq.js";
import { E as Eye } from "./eye-DBVqbldf.js";
import { S as Share2 } from "./share-2-ViScha7M.js";
import "./map-pin-CJs2GFz9.js";
function BlogCalculatorLinks({ calculatorIds, title = "Try These Calculators" }) {
  const calculators = calculatorIds.map((id) => CALCULATOR_DATA.find((calc) => calc.id === id)).filter(Boolean);
  if (calculators.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { className: "mt-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-5 h-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: calculators.map((calculator) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: calculator.path,
        className: "group",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-accent/50 transition-all duration-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-foreground group-hover:text-primary transition-colors mb-1", children: calculator.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2", children: calculator.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 ml-2" })
        ] }) })
      },
      calculator.id
    )) })
  ] });
}
const BLOG_CALCULATOR_MAPPING = {
  "mortgage": ["mortgage", "loan-affordability", "property-tax", "first-home-buyer", "heloc", "compound-interest"],
  "loan": ["loan", "mortgage", "auto-loan", "student-loan", "debt-consolidation", "credit-card-payoff"],
  "tax": ["federal-tax", "state-tax", "au-income-tax", "income-tax", "gst", "cgt"],
  "retirement": ["retirement", "401k-retirement", "pension", "superannuation", "epf", "investment"],
  "health": ["bmi", "bmr", "body-fat", "calorie-burn", "weight-loss-steps", "water-intake"],
  "fitness": ["bmi", "calorie-burn", "heart-rate-zone", "bmr", "weight-loss-steps", "body-fat"],
  "investment": ["investment", "roi", "compound-interest", "sip", "ppf", "isa"],
  "insurance": ["life-insurance", "health-insurance", "car-insurance", "pet-insurance", "travel-insurance"],
  "australia": ["au-income-tax", "superannuation", "property-tax", "cgt", "negative-gearing", "first-home-buyer"],
  "uk": ["stamp-duty", "pension", "isa", "national-insurance", "btl-mortgage"],
  "india": ["income-tax", "epf", "sip", "ppf", "gst", "emi"],
  "us": ["federal-tax", "state-tax", "401k-retirement", "mortgage", "student-loan"],
  "pregnancy": ["pregnancy-due-date", "ovulation", "bmi", "baby-name-generator"],
  "compatibility": ["love-compatibility", "friend-compatibility", "zodiac-compatibility", "ai-compatibility"],
  "social-media": ["caption-generator", "hashtag-generator", "instagram-bio-analyzer", "tiktok-profile-score"]
};
function getBlogCalculatorSuggestions(blogContent, blogTags) {
  const content = blogContent.toLowerCase();
  const suggestions = /* @__PURE__ */ new Set();
  Object.entries(BLOG_CALCULATOR_MAPPING).forEach(([keyword, calculatorIds]) => {
    if (content.includes(keyword) || (blogTags == null ? void 0 : blogTags.some((tag) => tag.toLowerCase().includes(keyword)))) {
      calculatorIds.forEach((id) => suggestions.add(id));
    }
  });
  return Array.from(suggestions).slice(0, 6);
}
function BlogPostPageV2() {
  const { slug } = useParams();
  const [blog, setBlog] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const [readingTime, setReadingTime] = reactExports.useState(0);
  const [isReady, setIsReady] = reactExports.useState(false);
  const mountedRef = reactExports.useRef(false);
  const initializedRef = reactExports.useRef(false);
  const loadBlog = async () => {
    if (!slug) {
      console.log("BlogPostPageV2: No slug provided");
      return;
    }
    console.log("BlogPostPageV2: Loading blog with slug:", slug);
    try {
      setLoading(true);
      setError(null);
      console.log("BlogPostPageV2: Calling backend.blogV2.getBySlug");
      const response = await backend.blogV2.getBySlug({ slug });
      console.log("BlogPostPageV2: Got response:", response ? "success" : "null");
      if (!mountedRef.current) {
        console.log("BlogPostPageV2: Component unmounted, aborting");
        return;
      }
      if (!response) {
        throw new Error("No data received from server");
      }
      setBlog(response);
      try {
        const text = response.html.replace(/<[^>]*>/g, "");
        const words = text.split(/\s+/).filter((w) => w.length > 0).length;
        setReadingTime(Math.ceil(words / 200));
      } catch (err) {
        console.warn("Failed to calculate reading time:", err);
        setReadingTime(5);
      }
      if (mountedRef.current) {
        setIsReady(true);
        setLoading(false);
      }
      console.log("BlogPostPageV2: Blog loaded successfully");
    } catch (err) {
      console.error("BlogPostPageV2: Failed to load blog:", err);
      console.error("BlogPostPageV2: Error details:", {
        message: err.message,
        status: err.status,
        code: err.code,
        full: err
      });
      if (mountedRef.current) {
        setError(err.message || "Blog post not found");
        setLoading(false);
        setIsReady(false);
      }
    }
  };
  reactExports.useEffect(() => {
    mountedRef.current = true;
    initializedRef.current = true;
    if (!slug) {
      if (mountedRef.current) {
        setError("No blog slug provided");
        setLoading(false);
        setIsReady(false);
      }
      return;
    }
    if (mountedRef.current) {
      setIsReady(false);
      setLoading(true);
      setBlog(null);
      setError(null);
    }
    loadBlog();
    return () => {
      mountedRef.current = false;
    };
  }, [slug]);
  if (loading || !isReady) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-32 bg-gray-200 rounded animate-pulse" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-pulse space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 bg-gray-200 rounded-lg w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 bg-gray-200 rounded w-1/2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 rounded w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 rounded w-11/12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 rounded w-10/12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 rounded w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 rounded w-9/12" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 bg-gray-200 rounded-lg mt-8" })
      ] })
    ] }) });
  }
  if (error || !blog) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-12 text-center bg-white border border-gray-200 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold mb-4 text-gray-900", children: "Blog Post Not Found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6", children: error || "The blog post you're looking for doesn't exist." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-blue-600 hover:bg-blue-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
        "Back to Blog"
      ] }) })
    ] }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "border-gray-300 hover:bg-gray-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
      "Back to All Posts"
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900 leading-tight break-words", children: blog.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200", children: [
          blog.published_at && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime: blog.published_at, children: new Date(blog.published_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              readingTime,
              " min read"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4 text-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Expert Guide" })
          ] })
        ] }),
        blog.keywords && blog.keywords.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: blog.keywords.slice(0, 10).map((keyword, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-xs px-3 py-1 rounded-md bg-blue-50 text-blue-700 font-medium border border-blue-200",
            children: keyword
          },
          i
        )) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        isReady && /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-gray-800 font-medium", children: "📚 Comprehensive Guide • 🎯 Expert Tips • ✨ Practical Examples" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-8 md:p-12 bg-white shadow-sm border border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: "Unable to display blog content" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => window.location.reload(), children: "Reload Page" })
        ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          MarkdownRenderer,
          {
            content: blog.html,
            className: "prose prose-lg prose-slate max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:marker:text-blue-600"
          }
        ) }) }),
        isReady && /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-green-50 border border-green-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-gray-900", children: "✨ Key Takeaways" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Expert-level insights and tips" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Real-world examples" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Step-by-step guidance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Pro strategies included" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-blue-50 border border-blue-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-gray-900", children: "📖 What You Learned" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• How the tool works" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Common mistakes to avoid" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Advanced techniques" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Future trends" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-8 bg-blue-50 border border-blue-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-gray-900", children: "🚀 Ready to Try It Yourself?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 max-w-2xl mx-auto", children: "Now that you're an expert, it's time to put your knowledge into action! Click below to start using the tool." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: blog.source_url, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "lg",
              className: "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-md hover:shadow-lg transition-all",
              children: "Launch the Tool Now →"
            }
          ) })
        ] }) }),
        isReady && /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BlogCalculatorLinks,
          {
            calculatorIds: getBlogCalculatorSuggestions(blog.html, blog.keywords),
            title: "Related Calculators You Might Need"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-amber-50 border border-amber-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-6 h-6 text-amber-600 flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-900 mb-2", children: "Found this helpful?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 text-sm", children: "Share this guide with others who might benefit from it!" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "bg-blue-600 text-white hover:bg-blue-700 border-blue-600",
                onClick: () => {
                  const url = encodeURIComponent(window.location.href);
                  const text = encodeURIComponent(blog.title);
                  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank", "width=550,height=420");
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 mr-2", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) }),
                  "Twitter"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "bg-blue-500 text-white hover:bg-blue-600 border-blue-500",
                onClick: () => {
                  const url = encodeURIComponent(window.location.href);
                  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "width=550,height=420");
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 mr-2", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) }),
                  "Facebook"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "bg-blue-700 text-white hover:bg-blue-800 border-blue-700",
                onClick: () => {
                  const url = encodeURIComponent(window.location.href);
                  const text = encodeURIComponent(blog.title);
                  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${text}`, "_blank", "width=550,height=420");
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 mr-2", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) }),
                  "LinkedIn"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "bg-green-600 text-white hover:bg-green-700 border-green-600",
                onClick: () => {
                  const url = encodeURIComponent(window.location.href);
                  const text = encodeURIComponent(blog.title);
                  window.open(`https://wa.me/?text=${text}%20${url}`, "_blank", "width=550,height=420");
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 mr-2", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }),
                  "WhatsApp"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "bg-gray-600 text-white hover:bg-gray-700 border-gray-600",
                onClick: async () => {
                  try {
                    await navigator.clipboard.writeText(window.location.href);
                    alert("Link copied to clipboard!");
                  } catch (err) {
                    console.error("Failed to copy:", err);
                  }
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" }) }),
                  "Copy Link"
                ]
              }
            )
          ] })
        ] }) })
      ] })
    ] })
  ] }) });
}
export {
  BlogPostPageV2 as default
};
