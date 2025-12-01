import { n as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button, X, S as SEOHead, f as Card, a8 as Sparkles, o as LoaderCircle, a6 as Alert, q as TriangleAlert, a7 as AlertDescription, l as House, aC as RefreshCw, ah as backend } from "./index-CK9G4vW7.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { a as compressImage } from "./imageCompression-D8fkPMvD.js";
import { S as StructuredData } from "./StructuredData-Cx_xmqIq.js";
import { A as AutoAdSlot } from "./AutoAdSlot-DNRO9HTk.js";
import { A as AmazonAffiliate } from "./AmazonAffiliate-Ce911NQ8.js";
import { C as Camera } from "./camera-DU7V0LE5.js";
import { U as Upload } from "./upload-4q82zR6I.js";
import { S as Share2 } from "./share-2-SpOWc355.js";
import { L as Lightbulb } from "./lightbulb-DKPyzLdJ.js";
import "./AdsterraSlot-DCXIaKPD.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8"
    }
  ]
];
const Palette = createLucideIcon("palette", __iconNode);
const styles = { "Modern": { "description": "Clean lines, minimalist aesthetic, and focus on functionality. Characterized by neutral colors, sleek furniture, and uncluttered spaces.", "keyElements": ["Clean geometric lines and shapes", "Minimal ornamentation", "Neutral color palette (white, gray, black, beige)", "Natural materials (wood, stone, metal)", "Open floor plans"], "colorPalette": ["#FFFFFF", "#F5F5F5", "#9E9E9E", "#424242", "#D4B896"], "tips": ["Remove excessive decorations and keep surfaces clear", "Invest in quality statement furniture pieces", "Use subtle textures to add visual interest", "Install simple, streamlined lighting fixtures", "Incorporate abstract or geometric artwork"], "amazonProducts": "modern minimalist furniture, geometric wall art, led strip lights" }, "Scandinavian": { "description": "Light, airy spaces with functionality at the core. Features pale colors, natural materials, and cozy textiles (hygge vibes!).", "keyElements": ["White and light gray walls", "Natural wood furniture", "Cozy textiles (knit blankets, sheepskin rugs)", "Plants and greenery", "Functional, beautiful storage"], "colorPalette": ["#FFFFFF", "#F0F0F0", "#D4C5B9", "#8B9A8F", "#B8AA9D"], "tips": ["Paint walls white or very light gray", "Add warm wood tones through furniture", "Layer soft textiles for coziness", "Maximize natural light with sheer curtains", "Incorporate indoor plants"], "amazonProducts": "scandinavian furniture, sheepskin rug, hygge candles" }, "Bohemian": { "description": "Eclectic, colorful, and free-spirited. Mix of patterns, textures, and global-inspired decor with a relaxed, artistic vibe.", "keyElements": ["Layered textiles and patterns", "Vibrant colors and metallics", "Vintage and handmade items", "Plants and natural elements", "Collected, curated look"], "colorPalette": ["#E63946", "#F4A261", "#2A9D8F", "#264653", "#E9C46A"], "tips": ["Mix and match patterns boldly", "Layer rugs and textiles for depth", "Display collections and travel finds", "Add macrame, rattan, and woven pieces", "Use floor cushions and low seating"], "amazonProducts": "macrame wall hanging, boho throw pillows, rattan furniture" }, "Industrial": { "description": "Raw, unfinished aesthetic inspired by warehouses and factories. Exposed brick, metal, and reclaimed wood are key.", "keyElements": ["Exposed brick or concrete walls", "Metal and reclaimed wood furniture", "Open ceilings with pipes/ducts", "Edison bulbs and vintage lighting", "Neutral with pops of bold color"], "colorPalette": ["#3E3E3E", "#757575", "#A67C52", "#C0C0C0", "#2C2C2C"], "tips": ["Expose brick walls if possible", "Use metal shelving and furniture", "Install Edison bulb pendant lights", "Add vintage industrial accessories", "Keep color palette neutral with metal accents"], "amazonProducts": "industrial pipe shelves, edison bulb lights, metal bar stools" }, "Farmhouse": { "description": "Rustic charm meets cozy comfort. Features distressed wood, vintage finds, and a warm, welcoming atmosphere.", "keyElements": ["Shiplap or wood plank walls", "Vintage and antique pieces", "Farmhouse sink and apron-front details", "Neutral colors with natural textures", "Rustic wood and metal combinations"], "colorPalette": ["#FFFDF7", "#E8DCC7", "#8B7D6B", "#A9A9A9", "#4A4A4A"], "tips": ["Install shiplap or wood paneling", "Use barn doors or sliding doors", "Display vintage kitchenware and signs", "Add fresh flowers or greenery", "Use white with natural wood accents"], "amazonProducts": "farmhouse decor, shiplap wallpaper, barn door hardware" }, "Mid-Century Modern": { "description": "Retro 1950s-60s style with organic curves, bold colors, and iconic furniture pieces. Clean and timeless.", "keyElements": ["Organic and geometric shapes", "Tapered furniture legs", "Bold accent colors (mustard, teal, orange)", "Starburst clocks and atomic designs", "Mix of wood and plastic materials"], "colorPalette": ["#F4A261", "#E76F51", "#2A9D8F", "#264653", "#E9C46A"], "tips": ["Invest in iconic mid-century furniture pieces", "Use bold accent colors strategically", "Add geometric patterns and prints", "Install sunburst mirrors or clocks", "Mix warm wood with colorful accents"], "amazonProducts": "mid century modern furniture, sunburst mirror, retro wall clock" }, "Minimalist": { "description": "Less is more. Extremely simplified spaces with only essential furniture and decor. Calm, clutter-free, and intentional.", "keyElements": ["Very few decorative items", "Monochromatic or neutral palette", "Hidden storage solutions", "Quality over quantity", "Negative space as design element"], "colorPalette": ["#FFFFFF", "#F5F5F5", "#E0E0E0", "#BDBDBD", "#757575"], "tips": ["Declutter ruthlessly - keep only essentials", "Invest in multi-functional furniture", "Use hidden storage to maintain clean lines", "Stick to 2-3 colors maximum", "Embrace empty wall space"], "amazonProducts": "minimalist storage, floating shelves, hidden storage furniture" }, "Coastal": { "description": "Beach-inspired, light and breezy. Features ocean colors, natural textures, and nautical touches.", "keyElements": ["Blue and white color scheme", "Light, weathered wood", "Natural fibers (jute, rattan, linen)", "Nautical and beach-themed decor", "Airy, open feel"], "colorPalette": ["#A8DADC", "#457B9D", "#F1FAEE", "#E63946", "#FFFFFF"], "tips": ["Use white as base with blue accents", "Add natural fiber rugs and baskets", "Display coral, shells, and driftwood", "Use sheer white curtains for light", "Incorporate nautical stripes"], "amazonProducts": "coastal decor, jute rug, rope mirror" }, "Traditional": { "description": "Classic, elegant, and timeless. Features rich colors, ornate details, and symmetrical arrangements.", "keyElements": ["Symmetrical furniture arrangements", "Rich, warm color palettes", "Ornate details and moldings", "Classic patterns (damask, floral, plaid)", "Antique or antique-style furniture"], "colorPalette": ["#8B4513", "#DAA520", "#2F4F4F", "#800020", "#F5E6D3"], "tips": ["Arrange furniture symmetrically", "Use classic patterns in textiles", "Add crown molding and wainscoting", "Display antique or heirloom pieces", "Layer window treatments"], "amazonProducts": "traditional furniture, damask curtains, ornate picture frames" }, "Contemporary": { "description": "Current and ever-evolving. Smooth lines, comfortable furnishings, and a mix of textures and materials.", "keyElements": ["Curved and flowing lines", "Mix of textures (smooth, rough, soft)", "Neutral with bold accent colors", "Large windows and natural light", "Comfortable, livable spaces"], "colorPalette": ["#F0F0F0", "#4A4A4A", "#D4AF37", "#008B8B", "#FFFFFF"], "tips": ["Mix different textures throughout", "Use one or two bold accent colors", "Keep furniture low and streamlined", "Add oversized art pieces", "Incorporate current design trends"], "amazonProducts": "contemporary furniture, abstract wall art, modern lighting" }, "Rustic": { "description": "Nature-inspired with rough, organic textures. Features raw wood, stone, and earthy colors for a cabin-like feel.", "keyElements": ["Rough-hewn wood beams", "Stone or brick accents", "Earthy, natural color palette", "Animal hides and natural textiles", "Handcrafted, artisanal pieces"], "colorPalette": ["#8B4513", "#654321", "#D2691E", "#A0522D", "#F5DEB3"], "tips": ["Expose natural wood beams if possible", "Use stone for fireplace or accent wall", "Add cowhide or fur rugs", "Display antlers or nature-themed art", "Use wrought iron hardware and fixtures"], "amazonProducts": "rustic wood furniture, antler decor, stone veneer" }, "Eclectic": { "description": "Curated mix of different styles, eras, and colors. Balanced chaos with a cohesive thread tying everything together.", "keyElements": ["Mix of furniture styles and periods", "Bold color combinations", "Global and cultural influences", "Unique statement pieces", "Personal and collected feel"], "colorPalette": ["#FF6B6B", "#4ECDC4", "#FFE66D", "#95E1D3", "#F38181"], "tips": ["Choose one unifying element (color, texture, etc.)", "Mix high and low-end pieces", "Don't be afraid of bold combinations", "Display personal collections", "Layer patterns and textures"], "amazonProducts": "eclectic decor, vintage furniture, global textiles" } };
const decorStylesData = {
  styles
};
function HomeDecorStyleFinder() {
  var _a;
  const [selectedImage, setSelectedImage] = reactExports.useState(null);
  const [isAnalyzing, setIsAnalyzing] = reactExports.useState(false);
  const [result, setResult] = reactExports.useState(null);
  const [error, setError] = reactExports.useState(null);
  const [showCamera, setShowCamera] = reactExports.useState(false);
  const fileInputRef = reactExports.useRef(null);
  const videoRef = reactExports.useRef(null);
  const [stream, setStream] = reactExports.useState(null);
  const compressImageForAPI = async (file) => {
    try {
      const compressed = await compressImage(file, {
        quality: 80,
        maxWidth: 1024,
        maxHeight: 1024,
        outputFormat: "image/jpeg"
      });
      return compressed.dataUrl.split(",")[1];
    } catch (err) {
      throw new Error("Failed to compress image");
    }
  };
  const handleImageUpload = async (e) => {
    var _a2;
    const file = (_a2 = e.target.files) == null ? void 0 : _a2[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      setError("Image size must be less than 10MB. Please choose a smaller image.");
      return;
    }
    await processImage(file);
  };
  const processImage = async (file) => {
    try {
      setError(null);
      setIsAnalyzing(true);
      setResult(null);
      setSelectedImage(URL.createObjectURL(file));
      const base64 = await compressImageForAPI(file);
      const analysisResult = await backend.vision.analyzeDecorStyle({
        imageBase64: base64
      });
      setResult(analysisResult);
      if (analysisResult.topStyles.length === 0) {
        setError("Couldn't identify a clear style — try a photo with more visible furniture and decor!");
      }
    } catch (err) {
      console.error("Analysis error:", err);
      setError(err.message || "Failed to analyze room. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };
  const openCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }
      });
      setStream(mediaStream);
      setShowCamera(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      }, 100);
    } catch (err) {
      console.error("Camera error:", err);
      setError("Unable to access camera. Please use the upload option instead.");
    }
  };
  const capturePhoto = async () => {
    if (!videoRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx == null ? void 0 : ctx.drawImage(videoRef.current, 0, 0);
    closeCamera();
    canvas.toBlob(async (blob) => {
      if (blob) {
        const file = new File([blob], "camera-photo.jpg", { type: "image/jpeg" });
        await processImage(file);
      }
    }, "image/jpeg", 0.8);
  };
  const closeCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
    setShowCamera(false);
  };
  const resetAnalysis = () => {
    setSelectedImage(null);
    setResult(null);
    setError(null);
    closeCamera();
  };
  const shareResult = () => {
    var _a2;
    if (!result) return;
    const url = window.location.href;
    const topStyle = ((_a2 = result.topStyles[0]) == null ? void 0 : _a2.styleName) || "Unknown";
    const text = `My room style is ${topStyle}! 🏠 Check it out:`;
    if (navigator.share) {
      navigator.share({ title: "Home Decor Style Finder", text, url });
    } else {
      navigator.clipboard.writeText(`${text} ${url}`);
      alert("Link copied to clipboard!");
    }
  };
  const getStyleDetails = (styleName) => {
    const styles2 = decorStylesData.styles;
    return styles2[styleName];
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Home Decor Style Finder — Discover Your Room's Style with AI",
    "description": "Free AI-powered interior design style identifier. Upload a room photo and instantly discover your decor style, color palette, and enhancement tips.",
    "url": "https://smart-calculator-hub-d3409cs82vjl9890lfm0.lp.dev/finder/tools/home-decor-style-finder",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is the home decor style finder free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! 100% free with no subscriptions or hidden fees. We believe interior design guidance should be accessible to everyone."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is the AI style detection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI uses OpenAI GPT-4 Vision to analyze furniture, colors, patterns, and layout. Accuracy is highest with well-lit, uncluttered room photos showing multiple design elements."
        }
      },
      {
        "@type": "Question",
        "name": "What if lighting conditions aren't perfect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Natural daylight works best. Avoid photos taken at night with yellow artificial lighting, as this skews color detection. If needed, take multiple photos at different times of day."
        }
      },
      {
        "@type": "Question",
        "name": "Do you store my room photos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No! Photos are analyzed in real-time via secure AI API and never stored on our servers. Your privacy is our top priority."
        }
      }
    ]
  };
  if (showCamera) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[9999] bg-black", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "video",
        {
          ref: videoRef,
          autoPlay: true,
          playsInline: true,
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 p-6 pb-safe bg-gradient-to-t from-black/80 to-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: closeCamera,
            size: "lg",
            variant: "outline",
            className: "rounded-full w-16 h-16",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: capturePhoto,
            size: "lg",
            className: "rounded-full w-20 h-20 bg-white text-black hover:bg-gray-200",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-8 h-8" })
          }
        )
      ] }) })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Home Decor Style Finder — Discover Your Room's Style with AI Camera (Free) | Smart Calculator Hubs",
        description: "Free AI home decor style identifier! Upload a room photo and instantly discover your interior design style, color palette, and personalized enhancement tips. Powered by OpenAI — 100% free.",
        keywords: "home decor style finder, interior design style identifier, AI room analyzer, what is my decor style, room style detector, free interior design tool"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StructuredData, { data: structuredData }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StructuredData, { data: faqData }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDE1MCwgNTAsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8 max-w-5xl relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "top-banner", className: "mb-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 space-y-4 animate-in fade-in slide-in-from-top duration-700 overflow-visible", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center justify-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl md:text-6xl", children: "🏠" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent", children: "Home Decor Style Finder" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl md:text-6xl", children: "🏠" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed", children: [
            "Snap a pic of your room & discover your interior design style instantly!",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-600 font-bold", children: " FREE" }),
            " AI-powered analysis + color palette + decor tips 🚀"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "mb-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "backdrop-blur-xl bg-white/80 border-2 border-orange-200 shadow-2xl rounded-3xl overflow-hidden mb-8 transform transition-all duration-300 hover:shadow-orange-200/50 hover:shadow-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
          !selectedImage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-3", children: "🎨 Ready to Discover Your Style?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Take a photo or upload from your gallery!" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: openCamera,
                  className: "h-40 bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-600 hover:via-orange-600 hover:to-yellow-600 text-white rounded-3xl shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-1 border-2 border-white/20",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-14 h-14 animate-pulse" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold", children: "📸 Take Photo" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-90", children: "Use your camera" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: () => {
                    var _a2;
                    return (_a2 = fileInputRef.current) == null ? void 0 : _a2.click();
                  },
                  variant: "outline",
                  className: "h-40 border-3 border-orange-400 hover:bg-orange-100 bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-xl transition-all duration-300 hover:scale-105 hover:-rotate-1",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-14 h-14 text-orange-600 animate-bounce" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-orange-700", children: "📤 Upload Image" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-600", children: "From your gallery" })
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: fileInputRef,
                type: "file",
                accept: "image/*",
                onChange: handleImageUpload,
                className: "hidden"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-gray-800 mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-purple-600" }),
                "Pro Tips for Best Results:"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-600 font-bold mt-0.5", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Natural daylight" }),
                    " — Take photos during daytime. Avoid yellow artificial lighting."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-600 font-bold mt-0.5", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Wide angle view" }),
                    " — Show furniture, walls, and decor. Corner angles work great!"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-600 font-bold mt-0.5", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tidy space helps" }),
                    " — Clean up clutter so AI can focus on design elements."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-600 font-bold mt-0.5", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Multiple elements" }),
                    " — Include furniture, textiles, wall art for accurate style detection."
                  ] })
                ] })
              ] })
            ] })
          ] }),
          selectedImage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-200", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: selectedImage,
                    alt: "Room photo",
                    className: "w-full h-auto object-cover bg-gradient-to-br from-gray-50 to-orange-50"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: resetAnalysis,
                    variant: "outline",
                    size: "sm",
                    className: "absolute top-4 right-4 bg-white/95 backdrop-blur-md hover:bg-white shadow-xl border-2 border-gray-200 rounded-xl",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 mr-1" }),
                      "Clear"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center", children: [
                isAnalyzing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-6 animate-pulse", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-20 h-20 animate-spin text-orange-600 mx-auto" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-8 h-8 text-yellow-500 absolute top-0 right-0 animate-ping" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-gray-800 mb-2", children: "🔬 AI is Analyzing..." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600", children: "Detecting your room's style!" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-2", children: "Usually takes 3-5 seconds ⏱️" })
                  ] })
                ] }),
                error && !isAnalyzing && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "border-2 border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-6 h-6 text-amber-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { className: "text-amber-900 font-medium", children: error })
                ] }),
                result && !isAnalyzing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-5 border-2 border-orange-300", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-gray-900 mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-6 h-6 text-orange-600" }),
                      "Your Room's Style"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: result.topStyles.slice(0, 3).map((style, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-white/70 p-3 rounded-xl", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gray-800", children: style.styleName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-orange-500/20 text-orange-700 border border-orange-500/30", children: [
                        Math.round(style.confidence * 100),
                        "%"
                      ] })
                    ] }, i)) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      onClick: shareResult,
                      variant: "outline",
                      className: "w-full border-2 border-orange-400",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4 mr-2" }),
                        "Share Your Style"
                      ]
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-8" }),
            result && !isAnalyzing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 border-2 border-orange-200 shadow-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-gray-900 mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 text-orange-600 animate-pulse" }),
                  "AI Summary 📝"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 leading-relaxed text-lg", children: result.summary })
              ] }),
              result.colorPalette.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200 shadow-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-gray-900 mb-5 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "w-6 h-6 text-purple-600" }),
                  "🎨 Color Palette"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4 justify-center", children: result.colorPalette.map((color, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-20 h-20 rounded-2xl shadow-lg border-4 border-white",
                      style: { backgroundColor: color }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono font-bold text-gray-700 bg-white px-2 py-1 rounded", children: color })
                ] }, i)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-8" }),
              result.enhancementTips.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-200 shadow-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-gray-900 mb-5 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-6 h-6 text-blue-600" }),
                  "💡 Enhancement Tips"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: result.enhancementTips.map((tip, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 bg-white/70 p-4 rounded-2xl border border-blue-200", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-blue-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-md", children: i + 1 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-800 font-medium text-base", children: tip })
                ] }, i)) })
              ] }),
              result.topStyles.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 shadow-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-gray-900 mb-5", children: [
                  "📚 About ",
                  result.topStyles[0].styleName,
                  " Style"
                ] }),
                (() => {
                  const styleDetails = getStyleDetails(result.topStyles[0].styleName);
                  if (!styleDetails) return null;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 leading-relaxed", children: styleDetails.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-900 mb-2", children: "Key Elements:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: styleDetails.keyElements.map((element, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-gray-700", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold mt-0.5", children: "•" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: element })
                      ] }, i)) })
                    ] })
                  ] });
                })()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AmazonAffiliate,
                {
                  calculatorTitle: `${(_a = result.topStyles[0]) == null ? void 0 : _a.styleName.toLowerCase().replace(/ /g, "-")} home decor furniture`,
                  placement: "content"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: resetAnalysis,
                  className: "w-full bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 hover:from-amber-700 hover:via-orange-700 hover:to-yellow-700 text-white rounded-2xl py-8 text-xl font-bold shadow-2xl transform transition-all duration-300 hover:scale-105 border-2 border-white/20",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-6 h-6 mr-3" }),
                    "🔄 Analyze Another Room"
                  ]
                }
              )
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AmazonAffiliate,
          {
            calculatorTitle: "home decor furniture accessories",
            placement: "content"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 border-2 border-indigo-200 rounded-3xl p-10 shadow-2xl mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-extrabold text-gray-900 mb-6 text-center", children: "🎓 Complete Guide to Interior Design Styles" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none space-y-6 text-gray-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-indigo-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-indigo-700 mb-3", children: "🏡 Why Your Decor Style Matters" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Your home isn't just where you live — it's a reflection of your personality, values, and lifestyle! Understanding your decor style helps you make cohesive design decisions, avoid impulse purchases that clash, and create spaces that genuinely feel like YOU." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mt-4", children: "Maybe you're drawn to clean lines and minimalism (hello, Modern!), or you love eclectic patterns and global treasures (Bohemian vibes!). Our AI analyzes your room's existing elements — furniture shapes, color schemes, patterns, textures — to identify your dominant style. It's like having an interior designer's eye, minus the $200/hour consultation fee!" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-blue-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-blue-700 mb-3", children: "📸 How to Get Accurate Style Detection" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mb-4", children: "AI is powerful, but garbage in = garbage out! Here's how to get the BEST results:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 ml-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "⏰ Timing is Everything:" }),
                  " Take photos during daylight hours (10am-4pm works best). Night photos with yellow lamps distort colors!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "📐 Capture the Whole Room:" }),
                  " Stand in a corner and shoot diagonally to show multiple walls, furniture, and decor. Wide-angle beats close-ups!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🧹 Declutter First:" }),
                  " Remove random items like laundry, toys, and dishes. AI focuses on intentional design elements, not chaos!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🎨 Show Key Elements:" }),
                  " Include furniture, textiles (rugs, curtains, pillows), wall art, and architectural details."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🚫 Avoid Filters:" }),
                  " Upload original, unedited photos. Instagram filters mess with color accuracy!"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-cyan-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-cyan-700 mb-3", children: "🎨 The 12 Major Interior Design Styles Explained" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mb-4", children: "Not sure what these style names mean? Here's the ultimate cheat sheet:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "1️⃣ Modern" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Clean lines, neutral colors, minimal clutter. Think IKEA showroom meets luxury penthouse. Function over fluff!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "2️⃣ Scandinavian (Scandi)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "White walls + natural wood + cozy textiles = hygge heaven. Light, airy, and effortlessly beautiful." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "3️⃣ Bohemian (Boho)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Maximalist paradise! Mix ALL the patterns, colors, and global treasures. Free-spirited and artistic." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "4️⃣ Industrial" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Exposed brick, metal pipes, reclaimed wood. Urban warehouse converted into loft living. Raw and edgy!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "5️⃣ Farmhouse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Rustic charm meets country comfort. Shiplap, vintage signs, and mason jars galore. Cozy and welcoming!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "6️⃣ Mid-Century Modern" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "1950s-60s retro vibes! Organic curves, tapered legs, bold colors (mustard, teal). Iconic and timeless." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "7️⃣ Minimalist" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Less is MORE. Extreme simplicity, neutral palette, almost nothing on display. Marie Kondo would approve!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "8️⃣ Coastal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Beach house energy! Blue + white + natural fibers. Breezy, relaxed, nautical touches. Smells like ocean (metaphorically)." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "9️⃣ Traditional" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Classic elegance. Ornate details, rich colors, symmetrical arrangements. Think English manor or Downton Abbey." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "🔟 Contemporary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Ever-evolving and current. Modern's trendy cousin. Smooth lines, mixed textures, comfortable yet chic." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "1️⃣1️⃣ Rustic" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Nature-inspired cabin vibes. Rough wood, stone, earthy tones. Mountains + campfire aesthetic." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "1️⃣2️⃣ Eclectic" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "The wild card! Mix styles, eras, and cultures with one unifying thread. Curated chaos that somehow WORKS." })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-teal-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-teal-700 mb-3", children: "🎨 Color Psychology in Interior Design" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mb-4", children: "Colors aren't just pretty — they affect your MOOD! Here's what your palette says about your space:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 ml-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🤍 White & Neutrals:" }),
                  " Calm, spacious, clean. Perfect for bedrooms and minimalist spaces."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "💙 Blue:" }),
                  " Tranquil, trustworthy, serene. Great for bathrooms and offices."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "💚 Green:" }),
                  " Refreshing, balanced, nature-connected. Ideal for living rooms and home offices."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "💛 Yellow:" }),
                  " Happy, energizing, optimistic. Best in kitchens and dining areas (stimulates appetite!)."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "❤️ Red:" }),
                  " Bold, passionate, stimulating. Use sparingly as accents (too much = overwhelming)."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🖤 Black & Dark Tones:" }),
                  " Sophisticated, dramatic, grounding. Accent walls and statement pieces."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-green-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-green-700 mb-3", children: "🛋️ Mixing Styles Like a Pro" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mb-4", children: "Don't want to commit to ONE style? You don't have to! Here's how to blend without creating chaos:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 ml-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Rule of Three:" }),
                  " Pick ONE dominant style (60%), ONE secondary style (30%), and ONE accent style (10%). Boom — cohesive eclectic!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Unifying Element:" }),
                  " Use consistent color palette OR material (e.g., all wood tones) to tie disparate pieces together."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Balance Opposites:" }),
                  " Modern + Rustic works. Industrial + Boho works. Traditional + Contemporary? Harder but possible!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Anchor with Neutrals:" }),
                  " When in doubt, use neutral base (walls, large furniture) and go wild with accessories."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-purple-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-purple-700 mb-3", children: "💰 Budget-Friendly Style Upgrades" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mb-4", children: "Don't have $10K for a full redesign? No problem! Small changes = BIG impact:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 ml-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "💡 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swap Lighting:" }),
                  " New light fixtures instantly elevate any room. Under $100!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "🎨 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Paint Accent Wall:" }),
                  " One gallon of paint = dramatic transformation. DIY for ~$40."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "🛋️ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "New Throw Pillows:" }),
                  " Cheapest way to update color scheme. $20-50 per pillow."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "🖼️ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Gallery Wall:" }),
                  " Print your own photos, use thrifted frames. Costs almost nothing!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "🪴 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Add Plants:" }),
                  " Instant life and color. Pothos, snake plants = hard to kill!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "🧺 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Baskets for Storage:" }),
                  " Hides clutter AND adds texture. Win-win!"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-pink-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-pink-700 mb-3", children: "🎉 Fun Interior Design Facts" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "🏛️ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Ancient Roots:" }),
                  " Interior design dates back to ancient Egypt — they had furniture designers 4,000 years ago!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "🧠 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Color Affects Productivity:" }),
                  " Blue increases productivity by 12% (science says!). Yellow boosts creativity."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "📏 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "The Golden Ratio:" }),
                  ` 1.618 ratio appears in "beautiful" room proportions. Nature's secret design code!`
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "🪴 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Plants = Cleaner Air:" }),
                  " NASA study found houseplants remove 87% of air toxins in 24 hours!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "🛋️ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Most Popular Style:" }),
                  " Modern Farmhouse is #1 in the US (thanks, HGTV!)."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "💸 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ROI Winner:" }),
                  " Kitchen and bathroom upgrades give highest return on investment when selling."
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-rose-50 to-red-50 border-2 border-rose-200 rounded-3xl p-10 shadow-2xl mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-extrabold text-gray-900 mb-6 text-center", children: "❓ Frequently Asked Questions (FAQ)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: Is this home decor style finder really free?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " YES! 100% free forever. No subscriptions, no trials that turn into charges, no BS. We believe interior design guidance should be accessible to everyone!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: How accurate is the AI style detection?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " Our AI uses OpenAI GPT-4 Vision to analyze furniture, colors, patterns, layout, and textures. Accuracy is highest (85-95%) with well-lit, uncluttered photos showing multiple design elements. Mixed-style rooms may show lower confidence."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: What if my room doesn't match any style?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " That's totally fine! Most real homes are a MIX of styles (Eclectic). The AI will identify your top 3 dominant styles. Use this as a starting point to refine your vision!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: Can I use this for empty rooms or renovation planning?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " It works best on furnished, decorated spaces. For empty rooms, try uploading inspiration photos from Pinterest or magazines to see what style they are — then recreate it in your space!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: What if lighting conditions aren't perfect?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " Natural daylight is best. Yellow artificial lighting can skew color detection. If needed, take photos at different times of day and use the clearest, most color-accurate one!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: Do you store my room photos or personal data?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " Absolutely NOT! Photos are analyzed in real-time via secure OpenAI API and never stored on our servers. Zero data retention. Your privacy is sacred."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: Can this help me redesign my space?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " YES! Use the style identification to understand your current aesthetic, then follow our enhancement tips and color palette suggestions. It's like having a mini interior designer consultation!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: Does it work on outdoor spaces?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " It's optimized for indoor rooms, but you can try! Outdoor spaces (patios, decks) might get style suggestions, though accuracy may vary since outdoor design has different rules."
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-lime-50 to-green-50 border-2 border-lime-200 rounded-3xl p-10 shadow-2xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-16 h-16 text-orange-600 mx-auto mb-4 animate-bounce" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-extrabold text-gray-900 mb-4", children: "🏠 Transform Your Space Today!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto", children: "Join thousands of homeowners, renters, and design enthusiasts discovering their interior style! Whether you're decorating your first apartment or redesigning your dream home, we're here to help! 🎨" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
              className: "bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 hover:from-amber-700 hover:via-orange-700 hover:to-yellow-700 text-white px-10 py-6 rounded-2xl text-xl font-bold shadow-2xl transform transition-all hover:scale-110",
              children: "🚀 Discover Your Style Now!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center text-sm text-gray-600 bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium", children: [
          "🔒 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Privacy Notice:" }),
          " Images are analyzed locally or via secure AI API. Never stored or shared."
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "bottom-sticky", className: "mt-10" })
      ] })
    ] })
  ] });
}
export {
  HomeDecorStyleFinder as default
};
