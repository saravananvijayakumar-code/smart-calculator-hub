import { r as reactExports, Q as useToast, j as jsxRuntimeExports, S as SEOHead, e as Bot, f as Card, g as CardHeader, h as CardTitle, a3 as FileText, i as CardDescription, k as CardContent, a4 as Label, a6 as Alert, a7 as AlertDescription, B as Button, a8 as Sparkles, T as TrendingUp, ah as backend } from "./index-CK9G4vW7.js";
import { T as Textarea } from "./textarea-DIKih6_2.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { P as Progress } from "./progress-BKzT_jkA.js";
import { S as Separator } from "./separator-63Q9JacM.js";
import { S as StructuredData } from "./StructuredData-Cx_xmqIq.js";
import { A as AutoAdSlot } from "./AutoAdSlot-DNRO9HTk.js";
import { C as CircleAlert } from "./circle-alert-DCAQyr8M.js";
import { Z as Zap } from "./zap-BEhI-iJb.js";
import { B as Brain } from "./brain-CSngUEN8.js";
import { G as Gauge } from "./gauge-BNfaVlf8.js";
import "./AdsterraSlot-DCXIaKPD.js";
function AITextDetector() {
  const [text, setText] = reactExports.useState("");
  const [isAnalyzing, setIsAnalyzing] = reactExports.useState(false);
  const [result, setResult] = reactExports.useState(null);
  const { toast } = useToast();
  const analyzeText = async () => {
    if (!text.trim() || text.trim().length < 50) {
      toast({
        title: "Text Too Short",
        description: "Please enter at least 50 characters for analysis",
        variant: "destructive"
      });
      return;
    }
    setIsAnalyzing(true);
    try {
      const response = await backend.ai_text_detector.detect({ text: text.trim() });
      setResult(response);
      toast({
        title: "Analysis Complete!",
        description: "Your text has been analyzed for AI patterns"
      });
    } catch (error) {
      console.error("Text analysis failed:", error);
      toast({
        title: "Analysis Failed",
        description: "Unable to analyze text. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };
  const getVerdictBadgeColor = (verdict) => {
    if (verdict.includes("AI-written")) return "bg-red-500";
    if (verdict.includes("Mixed")) return "bg-yellow-500";
    return "bg-green-500";
  };
  const faqItems = [
    {
      question: "How does AI text detection work?",
      answer: "AI text detectors analyze patterns in writing including sentence structure, word choice, vocabulary richness, and linguistic patterns that are common in AI-generated content."
    },
    {
      question: "What is perplexity in AI detection?",
      answer: "Perplexity measures how predictable text is. AI-generated text tends to have lower perplexity (more predictable), while human writing often has higher perplexity (more varied and unpredictable)."
    },
    {
      question: "What is burstiness in text analysis?",
      answer: "Burstiness measures variation in sentence length. Human writing typically has high burstiness with varied sentence lengths, while AI text often has more uniform sentence structures."
    },
    {
      question: "How accurate are AI text detectors?",
      answer: "AI text detectors typically range from 60-85% accuracy. They work best on longer texts and should be used as one of multiple verification methods, not as the sole determiner."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "AI Text Detector – Free AI-Generated Content Detector Tool",
        description: "Detect AI-generated text with our advanced AI detector. Analyze perplexity, burstiness, and patterns to identify ChatGPT, GPT-4, and other AI-written content. Free & accurate.",
        keywords: "AI text detector, AI content detector, ChatGPT detector, AI writing detector, detect AI text, AI vs human text, perplexity checker, burstiness analyzer"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StructuredData,
      {
        type: "WebApplication",
        name: "AI Text Detector",
        description: "Detect whether text is AI-generated or human-written using advanced analysis",
        url: "https://www.smartcalculatorhubs.com/ai/ai-text-detector",
        applicationCategory: "UtilityApplication"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StructuredData,
      {
        type: "FAQPage",
        faqItems
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-5 w-5 text-blue-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-blue-700 dark:text-blue-300", children: "AI Detection Tool" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-6xl font-bold mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "AI Text Detector" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto", children: "Detect whether text is AI-generated or human-written. Analyze perplexity, burstiness, and linguistic patterns to identify ChatGPT, GPT-4, and other AI-written content." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8 border-2 border-blue-200 dark:border-blue-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-6 w-6 text-blue-600" }),
            "Text Analysis"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Paste the text you want to analyze (minimum 50 characters, up to 10,000)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "text", children: "Text to Analyze" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-sm ${text.length > 1e4 ? "text-red-500" : "text-muted-foreground"}`, children: [
                text.length.toLocaleString(),
                "/10,000"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "text",
                value: text,
                onChange: (e) => setText(e.target.value.slice(0, 1e4)),
                placeholder: "Paste your text here for AI detection analysis...\n\nExample: In the rapidly evolving landscape of artificial intelligence, machine learning algorithms have demonstrated remarkable capabilities in natural language processing tasks...",
                className: "min-h-[300px] resize-none font-mono text-sm",
                maxLength: 1e4
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "For best results, use at least 200 characters. Longer texts provide more accurate analysis." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm text-blue-900 dark:text-blue-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Privacy Note:" }),
              " Your text is analyzed securely and is not stored or shared"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: analyzeText,
              disabled: isAnalyzing || !text.trim() || text.trim().length < 50,
              className: "w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",
              size: "lg",
              children: isAnalyzing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-2 h-5 w-5 animate-spin" }),
                "Analyzing Text..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "mr-2 h-5 w-5" }),
                "Analyze Text"
              ] })
            }
          )
        ] })
      ] }) }),
      result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8 border-2 border-purple-200 dark:border-purple-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-6 w-6 text-purple-600" }),
            "Detection Results"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "inline-flex items-center justify-center w-40 h-40 rounded-full mb-4",
                  style: {
                    background: `linear-gradient(135deg, ${result.aiProbability >= 70 ? "#ef4444 0%, #f97316 100%" : result.aiProbability >= 40 ? "#eab308 0%, #f97316 100%" : "#10b981 0%, #3b82f6 100%"})`
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-36 h-36 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: result.aiProbability }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "% AI" })
                  ] }) })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `${getVerdictBadgeColor(result.verdict)} text-white text-lg px-4 py-2`, children: result.verdict }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "AI Probability" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                      result.aiProbability,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: result.aiProbability, className: "h-3" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "h-5 w-5 text-blue-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "Confidence" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-bold text-blue-600 mb-2", children: [
                  result.confidence,
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: result.confidence, className: "h-2 mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "How certain we are about this result" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-purple-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "Burstiness" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-purple-600 mb-2", children: result.burstiness }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: result.burstiness, className: "h-2 mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Sentence length variation (higher = more human-like)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-900/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-5 w-5 text-pink-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "Perplexity" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-pink-600 mb-2", children: result.perplexity }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: result.perplexity, className: "h-2 mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Text unpredictability (higher = more varied)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-green-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "Pattern Score" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-green-600 mb-2", children: result.details.patternScore }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: result.details.patternScore, className: "h-2 mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Common AI writing patterns detected" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "Text Statistics" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-muted/50 rounded-lg text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-foreground", children: result.details.sentenceCount }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Sentences" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-muted/50 rounded-lg text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-foreground", children: result.details.averageLength }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Avg Length" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-muted/50 rounded-lg text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-foreground", children: [
                    result.details.vocabularyRichness,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Vocab Richness" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-muted/50 rounded-lg text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-foreground", children: text.length }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Characters" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: result.aiProbability >= 70 ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800" : "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: `h-4 w-4 ${result.aiProbability >= 70 ? "text-red-600" : "text-green-600"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Analysis Summary:" }),
                " This text shows ",
                result.aiProbability >= 70 ? "strong indicators of AI generation" : result.aiProbability >= 40 ? "mixed characteristics that could be either AI or human-written" : "characteristics typical of human writing",
                ".",
                result.aiProbability >= 70 && " Common AI patterns, uniform sentence structure, and predictable word choice were detected.",
                result.aiProbability < 40 && " High variation in sentence structure and rich vocabulary usage suggest human authorship."
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-3xl", children: "Understanding AI Text Detection: The Complete Guide" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose prose-sm max-w-none space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3 text-foreground", children: "What Is AI Text Detection?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed", children: "AI text detection is the process of analyzing written content to determine whether it was created by artificial intelligence (like ChatGPT, GPT-4, Claude, or Gemini) or by a human writer. As AI language models become increasingly sophisticated, the ability to distinguish between AI-generated and human-written content has become crucial for educators, employers, content moderators, and anyone concerned about content authenticity." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed mt-3", children: "The rise of powerful AI writing tools has revolutionized content creation, but it has also raised important questions about academic integrity, content originality, and information authenticity. AI detectors serve as a critical tool in maintaining standards and verifying the source of written work." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4 text-foreground", children: "How AI Text Detectors Work: The Science Behind Detection" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "AI text detectors use multiple analytical approaches to identify patterns characteristic of AI-generated content. Our detector analyzes several key metrics:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border rounded-lg bg-muted/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-foreground flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-blue-600", children: "1" }),
                  "Perplexity Analysis"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: 'Perplexity measures how "surprised" a language model is by a piece of text. AI-generated text tends to have low perplexity because the model generates words it finds most predictable. Human writing typically has higher perplexity because humans make less predictable, more creative word choices. A low perplexity score (predictable text) often indicates AI generation, while high perplexity (unpredictable choices) suggests human authorship.' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border rounded-lg bg-muted/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-foreground flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-purple-600", children: "2" }),
                  "Burstiness Measurement"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Burstiness refers to the variation in sentence and paragraph length throughout a text. Human writers naturally vary their sentence structures—mixing short, punchy sentences with longer, complex ones for rhythm and emphasis. AI-generated text often exhibits uniform sentence lengths with less variation. High burstiness indicates human writing patterns, while low burstiness suggests AI generation. This is one of the most reliable indicators of AI content." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border rounded-lg bg-muted/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-foreground flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-pink-600", children: "3" }),
                  "Vocabulary Richness"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "This metric measures the diversity of word usage by calculating the ratio of unique words to total words. Human writers often use synonyms, varied expressions, and unique phrasings. AI models, despite their vast training data, tend to rely on more common word patterns and may exhibit less lexical diversity in certain contexts. A vocabulary richness score below 40% often indicates repetitive AI patterns." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border rounded-lg bg-muted/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-foreground flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-600", children: "4" }),
                  "Pattern Recognition"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: 'AI models tend to use certain phrases, transitions, and structural patterns more frequently than human writers. Common AI patterns include overuse of words like "furthermore," "moreover," "delve," "leverage," "optimize," and "facilitate." Phrases like "it is important to note" or "one might argue" appear with higher frequency in AI text. Our detector scans for these telltale linguistic fingerprints that reveal AI authorship.' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border rounded-lg bg-muted/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold mb-2 text-foreground flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-orange-600", children: "5" }),
                  "Sentence Structure Analysis"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Average sentence length provides insights into writing style. AI-generated text often maintains a consistent sentence length (typically 15-25 words), creating a predictable rhythm. Human writers naturally fluctuate between short impactful statements and longer explanatory sentences. The detector analyzes whether sentence lengths fall within typical AI ranges or show human-like variation." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-300 dark:border-yellow-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3 text-foreground", children: "Understanding Your Detection Results" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "Our AI detector provides a comprehensive analysis with several scores to help you understand the likelihood of AI generation:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-500 text-white", children: "70-100%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Likely AI-Written" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "The text shows strong indicators of AI generation including common AI patterns, uniform structure, and predictable word choices. High confidence that this content was created by an AI language model." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-yellow-500 text-white", children: "40-69%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Mixed / Uncertain" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "The text contains characteristics of both AI and human writing. It may be AI-generated content that was heavily edited, human writing influenced by AI tools, or collaborative human-AI authorship. Additional verification recommended." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-500 text-white", children: "0-39%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Likely Human-Written" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "The text exhibits characteristics typical of human writing including varied sentence structure, high burstiness, rich vocabulary, and natural linguistic patterns. Low probability of AI generation." })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4 text-foreground", children: "Why Perplexity Matters in AI Detection" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "Perplexity is a fundamental concept in natural language processing and one of the most powerful indicators of AI-generated text. Here's why it's so important:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-5 rounded-lg border border-pink-200 dark:border-pink-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-2", children: "The Perplexity Paradox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-3", children: 'When AI generates text, it calculates probabilities for the next word based on the context. It typically chooses high-probability words that "make sense" statistically. This results in text that is coherent but predictable—hence low perplexity. Human writers, however, make choices based on creativity, emotion, personal style, and context that goes beyond statistical likelihood. They use unexpected metaphors, informal expressions, and unique phrasings that increase perplexity.' }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
                ' An AI might write "The weather was beautiful" (low perplexity, high probability). A human might write "The sky was a canvas of impossible blues" (higher perplexity, less statistically predictable but more creative and personal).'
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4 text-foreground", children: "Understanding Burstiness: The Human Writing Fingerprint" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "Burstiness is arguably the most distinctive feature separating human from AI writing. Here's what you need to know:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-blue-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "High Burstiness = Human:" }),
                  ` Humans naturally vary sentence length for rhythm, emphasis, and readability. You'll see short sentences for impact. Then longer, more complex sentences that explore ideas in greater depth with multiple clauses and additional context. This creates a "bursty" pattern.`
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { className: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Low Burstiness = AI:" }),
                " AI-generated text tends toward uniformity. Sentences cluster around a similar length (typically 15-25 words). The rhythm feels mechanical and predictable. There's less variation between shortest and longest sentences. This consistency is a hallmark of AI generation."
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 bg-muted/50 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mb-2", children: "Real Example Comparison:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-2 bg-green-600", children: "Human Writing" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono bg-white dark:bg-gray-800 p-3 rounded border text-foreground", children: "The storm arrived. Without warning, without mercy, it tore through the coastal town with winds that screamed like wounded animals and rain that fell in sheets so thick you couldn't see your hand in front of your face. Buildings shook. Power lines snapped and sparked in the darkness, casting brief, terrifying shadows across flooded streets where abandoned cars sat half-submerged like forgotten toys." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Sentence lengths: 3, 31, 2, 24 words — High burstiness (varied)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-2 bg-red-600", children: "AI Writing" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono bg-white dark:bg-gray-800 p-3 rounded border text-foreground", children: "The storm arrived at the coastal town with significant intensity. Strong winds and heavy rainfall characterized the weather event. Infrastructure experienced damage from the severe conditions. Power outages affected many residents throughout the impacted area. Emergency services responded to numerous calls for assistance." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Sentence lengths: 10, 9, 8, 9, 9 words — Low burstiness (uniform)" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3 text-foreground", children: "Accuracy and Limitations of AI Detectors" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "It's crucial to understand both the capabilities and limitations of AI detection technology:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "✅ When AI Detectors Work Best:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-muted-foreground ml-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Longer texts (200+ words) provide more data points for analysis" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Unedited AI output shows the clearest patterns" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Academic or formal writing where AI patterns are most distinct" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Content from popular AI models (ChatGPT, GPT-4, Claude)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Text generated in a single session without human intervention" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "⚠️ Limitations and Challenges:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-muted-foreground ml-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Edited AI content:" }),
                    " Heavy human editing can mask AI patterns"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Collaborative writing:" }),
                    " Human-AI partnerships create mixed signals"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Short texts:" }),
                    " Brief passages lack sufficient data for confident detection"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Evolving AI models:" }),
                    " Newer models produce increasingly human-like text"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Highly structured content:" }),
                    " Technical writing may appear AI-generated even when human-written"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Non-native speakers:" }),
                    " May write in patterns that resemble AI output"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "False positives:" }),
                    " 10-20% of human writing may be flagged as AI"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "False negatives:" }),
                    " 15-25% of AI text may pass as human"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "mt-4 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-red-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-sm text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Important:" }),
                " AI detectors should never be used as the sole basis for important decisions like academic penalties, job rejections, or content removal. Always use them as one tool among many, and verify results through multiple methods including direct conversation, follow-up questions, and contextual evidence."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4 text-foreground", children: "Common Use Cases for AI Text Detection" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2 text-foreground", children: "🎓 Education" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Teachers and professors use AI detectors to verify student work authenticity, uphold academic integrity, and identify when students may need additional guidance on proper AI tool usage." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2 text-foreground", children: "💼 Content Verification" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Publishers, editors, and content managers ensure originality of submitted work, verify freelancer deliverables, and maintain content quality standards across their platforms." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2 text-foreground", children: "🔍 SEO and Marketing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Digital marketers verify that published content isn't purely AI-generated, which can negatively impact search rankings and brand authenticity in Google's evaluation algorithms." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2 text-foreground", children: "👨‍💼 Hiring and Recruitment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "HR professionals check cover letters and writing samples to ensure candidates demonstrate genuine communication skills rather than relying on AI-generated applications." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2 text-foreground", children: "📰 Journalism" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "News organizations verify the authenticity of contributed articles and maintain journalistic standards by ensuring human authorship and original reporting." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg bg-muted/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2 text-foreground", children: "⚖️ Legal and Compliance" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Legal professionals verify authenticity of documents, contracts, and correspondence, particularly in cases where AI-generated content could raise ethical or legal concerns." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3 text-foreground", children: "Best Practices for Using AI Detectors" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "1. Use Multiple Detection Methods" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Don't rely on a single AI detector. Test the same text with multiple tools (like GPTZero, Originality.ai, and our detector) to cross-verify results and build confidence in your assessment." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "2. Consider Context" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Evaluate the detection results alongside other factors: Does this align with the writer's previous work? Is the content area one where AI is commonly used? Are there other red flags or supporting evidence?" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "3. Longer Samples = Better Results" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Analyze at least 200-500 words when possible. Short snippets don't provide enough data for reliable detection. The more text you can analyze, the more accurate the results." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "4. Engage in Direct Conversation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "For academic or professional contexts, follow up with questions about the content. Ask the author to explain their reasoning, discuss specific points, or elaborate on ideas. AI users often struggle with these follow-ups." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "5. Check for Consistency" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Compare the suspected AI text with the person's other verified writing. Significant differences in style, vocabulary, complexity, or tone can indicate AI usage." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "6. Be Transparent About AI Usage Policies" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "In educational or professional settings, clearly communicate policies around AI tool usage. When expectations are clear, you reduce misunderstandings and encourage honest disclosure." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4 text-foreground", children: "The Future of AI Detection" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "As AI writing technology evolves, detection methods must advance in parallel. Here's what's on the horizon:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-2", children: "Advanced Machine Learning Models" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Next-generation detectors will use transformer-based models trained on millions of AI and human text samples, achieving 90%+ accuracy by learning subtle patterns invisible to current heuristic methods." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg border border-blue-200 dark:border-blue-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-2", children: "Watermarking and Provenance Tracking" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "AI companies are developing invisible watermarks embedded in AI-generated text that can be detected by specialized tools, providing definitive proof of AI authorship without affecting human readability." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 rounded-lg border border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-2", children: "Behavioral Analysis" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Future tools may analyze not just the final text, but the writing process itself—keystroke patterns, revision history, time spent, and editing behaviors that distinguish human composition from AI generation." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-2", children: "Ethical AI Integration" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Rather than just detecting AI use, future tools will help verify proper AI usage—distinguishing between appropriate AI assistance (editing, research) and inappropriate use (wholesale content generation), fostering responsible AI integration." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3 text-foreground", children: "Frequently Asked Questions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "Q: Can AI detectors identify specific AI models (ChatGPT vs Claude vs Gemini)?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "A: Most detectors can identify AI-generated content in general but cannot reliably distinguish between specific AI models. Different models share similar underlying architectures and training approaches, making them difficult to differentiate based solely on output text." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "Q: Will paraphrasing AI text fool the detector?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "A: Simple paraphrasing or using AI to rewrite AI content usually won't fool modern detectors, as the underlying patterns persist. However, substantial human editing that changes sentence structures, adds personal examples, and introduces natural variation can make AI text harder to detect." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "Q: Are there any texts that are undetectable?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "A: Yes. Very short texts, heavily edited AI content, human-AI collaborative work, and content from cutting-edge AI models specifically designed to avoid detection can be challenging or impossible to accurately classify. The arms race between AI generation and detection continues to evolve." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "Q: Is it possible to make human text appear AI-generated?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "A: Yes. Formal, technical writing with consistent sentence structure and common transitions can sometimes be flagged as AI-generated, even when written by humans. This is why detectors should never be the sole basis for important decisions." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground mb-1", children: "Q: How often should I update my testing approach?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "A: As AI models improve every few months, detection approaches should be reviewed quarterly. Stay informed about new AI releases, updated detection tools, and evolving best practices in your specific field (education, publishing, etc.)." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-3 text-foreground", children: "Final Thoughts: Using AI Detection Responsibly" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-3", children: "AI detection is a powerful tool, but it's not infallible. The technology continues to improve, but so do AI writing models. The key is to use AI detectors as part of a comprehensive approach to maintaining content authenticity and academic integrity, not as a definitive judgment mechanism." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-3", children: "Remember that AI writing tools aren't inherently bad—they can be valuable assistants for brainstorming, editing, and research. The concern arises when AI is used to replace human thought, originality, and effort. Detection tools help us strike the right balance." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed italic", children: "Use our AI Text Detector regularly to stay informed about the content you're evaluating, but always pair technological analysis with human judgment, contextual understanding, and clear communication about expectations and standards." })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  AITextDetector as default
};
