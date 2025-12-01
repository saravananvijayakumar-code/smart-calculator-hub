import { aR as useLocation, j as jsxRuntimeExports, E as cn, L as Link, l as House, S as SEOHead, r as reactExports, T as TrendingUp, q as TriangleAlert } from "./index-CK9G4vW7.js";
import { C as ChevronRight } from "./chevron-right-DQ2_hrld.js";
import { R as RelatedCalculators } from "./RelatedCalculators-CFMy6W9D.js";
import { A as AppleStyleCard, a as AppleStyleCardHeader } from "./AppleStyleCard-DyiWjqNf.js";
import { A as AppleStyleButton } from "./AppleStyleButton-CynkKNA9.js";
import { A as AdsterraSlot } from "./AdsterraSlot-DCXIaKPD.js";
import { A as ArrowLeft } from "./arrow-left-BHhqs2at.js";
import { S as Share2 } from "./share-2-SpOWc355.js";
import { B as BookOpen } from "./book-open-BOdZdTJO.js";
import { C as CircleHelp } from "./circle-help-D9-5Kmcr.js";
import { A as AppleStyleInput } from "./AppleStyleInput-QCKt9I4w.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { C as CircleX } from "./circle-x-BSY8IAkr.js";
import { C as CircleCheckBig } from "./circle-check-big-B8N3lfE-.js";
import "./CalculatorCategory-D_glaRKB.js";
import "./map-pin-DTtorPjp.js";
import "./interlinking-DH1ZPh0L.js";
import "./arrow-right-Bjdtr8dz.js";
import "./link-C11IgQ5M.js";
import "./copy-BqV-1o4k.js";
import "./twitter-CFAqYlq6.js";
import "./facebook-BX8Qa6cK.js";
import "./linkedin-D9e3uSZB.js";
import "./message-circle-DZtFORhh.js";
import "./mail-DX6y6Mo7.js";
function Breadcrumbs({ items, className }) {
  const location = useLocation();
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const breadcrumbs = [
      { label: "Home", href: "/" }
    ];
    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      let label = segment.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
      if (segment === "calculator") label = "Calculator";
      if (segment === "calculators") label = "Calculators";
      if (segment === "tools") label = "Tools";
      if (segment === "us") label = "United States";
      if (segment === "uk") label = "United Kingdom";
      if (segment === "au" || segment === "australia") label = "Australia";
      if (segment === "in" || segment === "india") label = "India";
      breadcrumbs.push({
        label,
        href: currentPath,
        current: isLast
      });
    });
    return breadcrumbs;
  };
  const breadcrumbItems = items || generateBreadcrumbs();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: cn("flex items-center space-x-1 text-sm", className), "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "flex items-center space-x-1", children: breadcrumbItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
    index > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-muted-foreground mx-2" }),
    item.current ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", "aria-current": "page", children: item.label }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: item.href,
        className: "text-muted-foreground hover:text-foreground transition-colors",
        children: index === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-4 h-4" }) : item.label
      }
    )
  ] }, item.href)) }) });
}
function EnhancedCalculatorLayout({
  id,
  title,
  description,
  category,
  region,
  seoTitle,
  seoDescription,
  keywords,
  children,
  results,
  explanation,
  faqs,
  formula,
  examples
}) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: seoTitle || title,
          text: seoDescription || description,
          url: window.location.href
        });
      } catch (error) {
        navigator.clipboard.writeText(window.location.href);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };
  const faqStructuredData = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;
  const calculatorStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": title,
    "description": seoDescription || description,
    "url": window.location.href,
    "applicationCategory": "CalculatorApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2547"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Smart Calculator Hubs",
      "url": "https://www.smartcalculatorhubs.com"
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: seoTitle || `${title} | Smart Calculator Hub`,
        description: seoDescription || description,
        keywords: keywords || `${title.toLowerCase()}, calculator, ${category}, ${region || "global"}`,
        type: "website"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(calculatorStructuredData)
        }
      }
    ),
    faqStructuredData && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(faqStructuredData)
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-6 max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-muted-foreground hover:text-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AppleStyleButton,
          {
            variant: "outline",
            size: "sm",
            onClick: handleShare,
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4" }),
            children: "Share"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { variant: "elevated", padding: "lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AppleStyleCardHeader,
            {
              title: "Calculator",
              subtitle: "Enter your details below to get instant results"
            }
          ),
          children
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          results && /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { variant: "elevated", padding: "lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCardHeader, { title: "Results" }),
            results
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { padding: "lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCardHeader, { title: "About This Calculator" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 mt-0.5 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Free and easy to use calculator designed for accuracy and reliability." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { className: "w-4 h-4 mt-0.5 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No registration required. Your data is processed locally for privacy." })
              ] })
            ] })
          ] })
        ] })
      ] }),
      explanation && /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { className: "mb-12", padding: "lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AppleStyleCardHeader,
          {
            title: "How It Works",
            subtitle: "Understanding the calculations and methodology"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose max-w-none dark:prose-invert", children: explanation })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, {}) }),
      formula && /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { className: "mb-12", padding: "lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AppleStyleCardHeader,
          {
            title: "Formula Used",
            subtitle: "Mathematical formula behind the calculations"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-accent/50 rounded-xl p-6 font-mono text-sm", children: formula })
      ] }),
      examples && /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { className: "mb-12", padding: "lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AppleStyleCardHeader,
          {
            title: "Examples",
            subtitle: "Real-world examples to help you understand"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose max-w-none dark:prose-invert", children: examples })
      ] }),
      faqs && faqs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { className: "mb-12", padding: "lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AppleStyleCardHeader,
          {
            title: "Frequently Asked Questions",
            subtitle: "Common questions and helpful answers"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: faqs.map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border last:border-0 pb-6 last:pb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg mb-3", children: faq.question }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground prose prose-sm max-w-none dark:prose-invert", children: faq.answer })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RelatedCalculators, { currentCalculatorId: id, limit: 4 })
    ] })
  ] });
}
const EnhancedBMICalculator = () => {
  const [height, setHeight] = reactExports.useState("");
  const [weight, setWeight] = reactExports.useState("");
  const [unit, setUnit] = reactExports.useState("imperial");
  const [result, setResult] = reactExports.useState(null);
  const calculateBMI = () => {
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
    if (!heightNum || !weightNum || heightNum <= 0 || weightNum <= 0) {
      setResult(null);
      return;
    }
    let bmi;
    let idealWeight;
    if (unit === "metric") {
      const heightInM = heightNum / 100;
      bmi = weightNum / (heightInM * heightInM);
      idealWeight = {
        min: Math.round(18.5 * heightInM * heightInM),
        max: Math.round(24.9 * heightInM * heightInM)
      };
    } else {
      bmi = weightNum / (heightNum * heightNum) * 703;
      idealWeight = {
        min: Math.round(18.5 * heightNum * heightNum / 703),
        max: Math.round(24.9 * heightNum * heightNum / 703)
      };
    }
    let category;
    let description;
    let recommendations;
    let riskLevel;
    if (bmi < 18.5) {
      category = "Underweight";
      description = "Below normal weight range";
      riskLevel = "moderate";
      recommendations = [
        "Consult with a healthcare provider or nutritionist",
        "Focus on nutrient-dense, calorie-rich foods",
        "Consider strength training to build muscle mass",
        "Monitor for underlying health conditions",
        "Track weight gain progress regularly"
      ];
    } else if (bmi < 25) {
      category = "Normal Weight";
      description = "Healthy weight range";
      riskLevel = "low";
      recommendations = [
        "Maintain current healthy lifestyle",
        "Continue regular physical activity",
        "Eat a balanced, nutritious diet",
        "Monitor weight periodically",
        "Focus on overall wellness"
      ];
    } else if (bmi < 30) {
      category = "Overweight";
      description = "Above normal weight range";
      riskLevel = "moderate";
      recommendations = [
        "Aim for gradual weight loss of 1-2 lbs per week",
        "Increase physical activity to 150+ minutes weekly",
        "Focus on portion control and healthy eating",
        "Consider consulting a healthcare provider",
        "Track progress with measurements and photos"
      ];
    } else {
      category = "Obese";
      description = "Significantly above normal weight range";
      riskLevel = "high";
      recommendations = [
        "Consult healthcare provider for comprehensive plan",
        "Consider medically supervised weight loss",
        "Focus on sustainable lifestyle changes",
        "Address underlying health conditions",
        "Join support groups or programs"
      ];
    }
    const healthyRange = `${idealWeight.min} - ${idealWeight.max} ${unit === "metric" ? "kg" : "lbs"}`;
    setResult({
      bmi: Math.round(bmi * 10) / 10,
      category,
      description,
      healthyRange,
      recommendations,
      riskLevel,
      idealWeight
    });
  };
  reactExports.useEffect(() => {
    calculateBMI();
  }, [height, weight, unit]);
  const getRiskIcon = (riskLevel) => {
    switch (riskLevel) {
      case "low":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-6 h-6 text-green-500" });
      case "moderate":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-6 h-6 text-yellow-500" });
      case "high":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-6 h-6 text-red-500" });
      default:
        return null;
    }
  };
  const getRiskColor = (riskLevel) => {
    switch (riskLevel) {
      case "low":
        return "border-green-200 bg-green-50/50";
      case "moderate":
        return "border-yellow-200 bg-yellow-50/50";
      case "high":
        return "border-red-200 bg-red-50/50";
      default:
        return "border-gray-200";
    }
  };
  const calculatorForm = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex bg-accent/50 rounded-xl p-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `flex-1 py-3 px-4 text-sm font-medium rounded-lg transition-all ${unit === "imperial" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
          onClick: () => setUnit("imperial"),
          children: "Imperial (ft/in, lbs)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `flex-1 py-3 px-4 text-sm font-medium rounded-lg transition-all ${unit === "metric" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
          onClick: () => setUnit("metric"),
          children: "Metric (cm, kg)"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AppleStyleInput,
        {
          large: true,
          label: `Height ${unit === "metric" ? "(cm)" : "(inches)"}`,
          placeholder: unit === "metric" ? "175" : "70",
          value: height,
          onChange: (e) => setHeight(e.target.value),
          type: "number",
          helperText: unit === "imperial" ? `Tip: 5'10" = 70 inches, 6'0" = 72 inches` : void 0
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AppleStyleInput,
        {
          large: true,
          label: `Weight ${unit === "metric" ? "(kg)" : "(lbs)"}`,
          placeholder: unit === "metric" ? "70" : "150",
          value: weight,
          onChange: (e) => setWeight(e.target.value),
          type: "number"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { padding: "md", className: "bg-accent/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium mb-3", children: "Quick Tips:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-muted-foreground space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Results are calculated instantly as you type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• BMI is a screening tool, not a diagnostic test" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consider overall health and fitness, not just BMI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Consult healthcare providers for personalized advice" })
      ] })
    ] })
  ] });
  const resultsDisplay = result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ExportShareButtons,
      {
        calculatorType: "bmi-enhanced",
        inputs: { height, weight, unit },
        results: result,
        title: "BMI Analysis"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { className: `text-center ${getRiskColor(result.riskLevel)}`, padding: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold text-foreground", children: result.bmi }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
        getRiskIcon(result.riskLevel),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-semibold", children: result.category })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: result.description })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { padding: "md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Healthy weight range for your height" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: result.healthyRange })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { padding: "md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCardHeader, { title: "Recommendations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: result.recommendations.map((rec, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: rec })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { padding: "md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCardHeader, { title: "BMI Categories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
        { range: "Below 18.5", category: "Underweight", color: "bg-blue-500" },
        { range: "18.5 - 24.9", category: "Normal Weight", color: "bg-green-500" },
        { range: "25.0 - 29.9", category: "Overweight", color: "bg-yellow-500" },
        { range: "30.0 and above", category: "Obese", color: "bg-red-500" }
      ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-3 h-3 rounded ${item.color}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium w-24", children: item.range }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground flex-1", children: item.category }),
        result.category === item.category && /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-primary" })
      ] }, index)) })
    ] })
  ] });
  const explanation = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed", children: "Body Mass Index (BMI) is a widely used screening tool that estimates body fat based on height and weight. Developed in the 1830s by Belgian mathematician Adolphe Quetelet, BMI provides a quick assessment of weight status and potential health risks associated with being underweight, normal weight, overweight, or obese." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: "How BMI Works" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "BMI is calculated by dividing your weight by the square of your height. This simple calculation provides a standardized way to assess whether your weight falls within a healthy range for your height. The resulting number is then categorized into one of four main BMI categories." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: "BMI Categories and Health Implications" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg text-blue-600", children: "Underweight (BMI < 18.5)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "May indicate malnutrition, eating disorders, or underlying health conditions. Can lead to weakened immunity, osteoporosis, and irregular menstruation." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg text-green-600", children: "Normal Weight (BMI 18.5-24.9)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Associated with lowest risk of weight-related health problems. Indicates a healthy balance between height and weight." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg text-yellow-600", children: "Overweight (BMI 25.0-29.9)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Increased risk of heart disease, type 2 diabetes, high blood pressure, and sleep apnea. Prevention focus is key." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg text-red-600", children: "Obese (BMI ≥ 30.0)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Significantly increased risk of serious health conditions including cardiovascular disease, diabetes, and certain cancers." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: "Important Limitations" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While BMI is a useful screening tool, it has several important limitations. BMI doesn't distinguish between muscle and fat, doesn't account for age-related changes in body composition, and may not accurately reflect health risks for all ethnic groups. Athletes and individuals with high muscle mass may have elevated BMIs despite having low body fat percentages." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: "Beyond BMI: Additional Health Indicators" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For a complete health assessment, consider other measurements such as waist circumference, waist-to-hip ratio, body fat percentage, and overall fitness level. These additional metrics can provide a more comprehensive picture of your health status and risk factors." })
  ] });
  const examples = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "BMI Calculation Examples" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { padding: "md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-3", children: "Example 1: Metric System" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Height:" }),
            " 175 cm (1.75 m)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Weight:" }),
            " 70 kg"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Calculation:" }),
            " 70 ÷ (1.75)² = 70 ÷ 3.06 = 22.9"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Result:" }),
            " BMI 22.9 (Normal Weight)"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { padding: "md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-3", children: "Example 2: Imperial System" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Height:" }),
            ` 70 inches (5'10")`
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Weight:" }),
            " 154 lbs"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Calculation:" }),
            " (154 ÷ 70²) × 703 = 22.1"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Result:" }),
            " BMI 22.1 (Normal Weight)"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-8", children: "Weight Management Scenarios" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { padding: "md", className: "bg-green-50/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-green-700 mb-2", children: "Scenario: Maintaining Healthy Weight" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: `Sarah, 5'6" (168 cm), weighs 140 lbs (64 kg) with a BMI of 22.6. To maintain her healthy weight, she should continue her current routine of regular exercise, balanced nutrition, and periodic monitoring.` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { padding: "md", className: "bg-yellow-50/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-yellow-700 mb-2", children: "Scenario: Gradual Weight Loss" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: `Mike, 6'0" (183 cm), weighs 200 lbs (91 kg) with a BMI of 27.1. To reach a healthy BMI of 24, he would need to lose about 22 lbs through a combination of diet and exercise over 3-6 months.` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { padding: "md", className: "bg-blue-50/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-blue-700 mb-2", children: "Scenario: Healthy Weight Gain" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: `Emma, 5'4" (163 cm), weighs 105 lbs (48 kg) with a BMI of 18.0. To reach a healthy weight range, she should aim to gain 15-20 lbs through increased caloric intake and strength training.` })
      ] })
    ] })
  ] });
  const faqs = [
    {
      question: "Is BMI accurate for everyone?",
      answer: "BMI is a useful screening tool but has limitations. It may not accurately reflect health status for athletes, elderly individuals, pregnant women, or people with high muscle mass. Consider additional assessments for a complete health picture."
    },
    {
      question: "How often should I check my BMI?",
      answer: "For most adults, checking BMI monthly or quarterly is sufficient unless you're actively working on weight management. Focus more on overall health habits than frequent BMI monitoring."
    },
    {
      question: "Can BMI predict my health future?",
      answer: "BMI indicates increased risk for certain health conditions but doesn't predict individual outcomes. Many factors influence health including genetics, lifestyle, fitness level, and medical history."
    },
    {
      question: "What if I'm at the border between categories?",
      answer: "BMI categories have some flexibility. Focus on overall health trends rather than exact numbers. A BMI of 24.9 vs 25.1 doesn't represent a significant health difference."
    },
    {
      question: "Should children use adult BMI calculations?",
      answer: "No, children and teens need age and gender-specific BMI percentiles. Adult BMI categories don't apply to growing bodies. Consult pediatric growth charts or healthcare providers for youth assessments."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    EnhancedCalculatorLayout,
    {
      id: "bmi",
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index (BMI) with our comprehensive calculator. Get personalized health recommendations, understand BMI categories, and learn about healthy weight ranges.",
      category: "health",
      seoTitle: "BMI Calculator - Body Mass Index Calculator with Health Insights | Smart Calculator Hubs",
      seoDescription: "Free BMI calculator with instant results. Calculate your Body Mass Index, get personalized health recommendations, and understand healthy weight ranges. Supports both metric and imperial units.",
      keywords: "BMI calculator, body mass index, weight calculator, health calculator, BMI chart, healthy weight, obesity calculator, metric BMI, imperial BMI",
      children: calculatorForm,
      results: resultsDisplay,
      explanation,
      examples,
      faqs,
      formula: "BMI = weight (kg) / height (m)² or BMI = (weight (lbs) / height (inches)²) × 703"
    }
  );
};
export {
  EnhancedBMICalculator
};
