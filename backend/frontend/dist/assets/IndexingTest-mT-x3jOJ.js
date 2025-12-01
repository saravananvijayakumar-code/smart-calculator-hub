import { Q as useToast, r as reactExports, j as jsxRuntimeExports, S as SEOHead, f as Card, g as CardHeader, h as CardTitle, G as Globe, k as CardContent, V as Input, B as Button, o as LoaderCircle, a6 as Alert, a7 as AlertDescription, aC as RefreshCw } from "./index-CK9G4vW7.js";
import { C as CircleCheckBig } from "./circle-check-big-B8N3lfE-.js";
import { C as CircleX } from "./circle-x-BSY8IAkr.js";
function IndexingTest() {
  const { toast } = useToast();
  const [testUrl, setTestUrl] = reactExports.useState("/blog/test");
  const [isIndexing, setIsIndexing] = reactExports.useState(false);
  const [indexResult, setIndexResult] = reactExports.useState(null);
  const [isIndexingStatic, setIsIndexingStatic] = reactExports.useState(false);
  const [staticIndexResult, setStaticIndexResult] = reactExports.useState(null);
  const handleIndexUrl = async () => {
    if (!testUrl.trim()) {
      toast({
        title: "Error",
        description: "Please enter a URL to index",
        variant: "destructive"
      });
      return;
    }
    setIsIndexing(true);
    setIndexResult(null);
    try {
      const fullUrl = testUrl.startsWith("http") ? testUrl : `https://smartcalculatorhubs.com${testUrl.startsWith("/") ? testUrl : `/${testUrl}`}`;
      setIndexResult({
        success: false,
        message: "Google indexing service not implemented"
      });
      toast({
        title: "Error",
        description: "Google indexing service not implemented",
        variant: "destructive"
      });
    } catch (error) {
      console.error("Indexing error:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to index URL";
      setIndexResult({
        success: false,
        message: errorMessage
      });
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsIndexing(false);
    }
  };
  const handleIndexStaticPages = async () => {
    setIsIndexingStatic(true);
    setStaticIndexResult(null);
    try {
      setStaticIndexResult({
        success: false,
        message: "Google indexing service not implemented"
      });
      toast({
        title: "Error",
        description: "Google indexing service not implemented",
        variant: "destructive"
      });
    } catch (error) {
      console.error("Static indexing error:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to index static pages";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsIndexingStatic(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8 px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Google Indexing Test - Admin Panel",
        description: "Test and manage Google indexing for SmartCalculatorHub pages"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-slate-900 dark:text-white mb-2", children: "Google Indexing Test Panel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 dark:text-slate-400", children: "Test and monitor Google indexing for your pages" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-5 h-5" }),
          "URL Indexing"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-slate-700 dark:text-slate-300", children: "Enter URL to Index" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "text",
                placeholder: "/blog/my-article or https://smartcalculatorhubs.com/...",
                value: testUrl,
                onChange: (e) => setTestUrl(e.target.value),
                className: "w-full"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400", children: "Enter a relative path (e.g., /blog/my-article) or full URL" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: handleIndexUrl,
              disabled: isIndexing || !testUrl.trim(),
              className: "flex-1",
              children: isIndexing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
                "Indexing..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "mr-2 h-4 w-4" }),
                "Index URL"
              ] })
            }
          ) }),
          indexResult && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: indexResult.success ? "default" : "destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
            indexResult.success ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 mt-0.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { className: "whitespace-pre-wrap", children: indexResult.message })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-green-900 dark:text-green-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-5 h-5" }),
          "SmartTimer Auto-Indexing"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-800 dark:text-green-200", children: "Index all SmartTimer pages with Google Indexing API. This submits 6 URLs immediately for crawling." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-slate-900 p-3 rounded border border-green-200 dark:border-green-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-slate-700 dark:text-slate-300 mb-2", children: "Pages to index:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs text-slate-600 dark:text-slate-400 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• /smarttimer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• /smarttimer/stopwatch" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• /smarttimer/countdown" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• /smarttimer/pomodoro" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• /smarttimer/multi-timer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• /smarttimer/event" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: handleIndexStaticPages,
              disabled: isIndexingStatic,
              className: "w-full bg-green-600 hover:bg-green-700",
              children: isIndexingStatic ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
                "Indexing SmartTimer Pages..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "mr-2 h-4 w-4" }),
                "Index All SmartTimer Pages"
              ] })
            }
          ),
          staticIndexResult && /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { variant: staticIndexResult.success ? "default" : "destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
              staticIndexResult.success ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 mt-0.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: staticIndexResult.message })
            ] }),
            staticIndexResult.results && staticIndexResult.results.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-6 mt-2 space-y-1", children: staticIndexResult.results.map((result, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs flex items-center gap-2", children: [
              result.success ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-3 w-3 text-green-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-3 w-3 text-red-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: result.url }),
              !result.success && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-600 dark:text-red-400", children: [
                "- ",
                result.message
              ] })
            ] }, index)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
            " Rate-limited to once per 24 hours to avoid Google API quotas. The system automatically tracks when pages were last indexed."
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-blue-900 dark:text-blue-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-5 h-5" }),
          "Sitemap Information"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-blue-800 dark:text-blue-200", children: "Your sitemap is available at:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://smartcalculatorhubs.com/sitemap.xml",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "font-mono text-xs bg-white dark:bg-slate-900 px-3 py-2 rounded border border-blue-200 dark:border-blue-700 block hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors",
                children: "https://smartcalculatorhubs.com/sitemap.xml"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
            " Google's sitemap ping endpoint is deprecated. Google automatically discovers your sitemap from robots.txt. To manually submit your sitemap, go to",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://search.google.com/search-console",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "underline font-medium",
                children: "Google Search Console"
              }
            ),
            " ",
            "→ Sitemaps → Add sitemap URL."
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Documentation" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-slate-600 dark:text-slate-400 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-slate-900 dark:text-white", children: "How it works:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-1 ml-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Index URL:" }),
              " Submits a specific URL to Google Indexing API for immediate crawling"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sitemap:" }),
              " Auto-generated and discoverable by Google via robots.txt"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Auto-indexing:" }),
              " New blog posts are automatically indexed when published"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-slate-900 dark:text-white mt-4", children: "Requirements:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-1 ml-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Google Service Account JSON must be configured in Settings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Service account must have Indexing API permissions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Site must be verified in Google Search Console" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Submit sitemap manually in Search Console (one-time setup)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-slate-900 dark:text-white mt-4", children: "Manual Sitemap Submission:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "list-decimal list-inside space-y-1 ml-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "Go to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://search.google.com/search-console", target: "_blank", rel: "noopener noreferrer", className: "underline text-blue-600", children: "Google Search Console" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Select your property" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Click "Sitemaps" in the left sidebar' }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "Enter: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-slate-100 dark:bg-slate-800 px-1 rounded", children: "sitemap.xml" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Click "Submit"' })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  IndexingTest as default
};
