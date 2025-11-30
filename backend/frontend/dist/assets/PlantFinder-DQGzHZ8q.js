import { n as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button, X, S as SEOHead, a7 as Sparkles, f as Card, a5 as Alert, p as TriangleAlert, a6 as AlertDescription, H as Heart, aB as RefreshCw, ag as backend } from "./index-C_OXA6OQ.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { a as compressImage } from "./imageCompression-D8fkPMvD.js";
import { S as StructuredData } from "./StructuredData-_yklk7FG.js";
import { C as Camera } from "./camera-DYJgz0x3.js";
import { L as Leaf } from "./leaf-BNDQ33Ih.js";
import { M as MapPin } from "./map-pin-CJs2GFz9.js";
import { U as Upload } from "./upload-BCVzvtOR.js";
import { L as LoaderCircle } from "./loader-circle-BYW7QwsU.js";
import { D as Droplet } from "./droplet-5vYH0HZZ.js";
import { S as Sun } from "./sun-CsXyhSkT.js";
import { T as Thermometer } from "./thermometer-DY1RDwgn.js";
import { B as Bug } from "./bug-DM2Wq0Yv.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
      key: "3pnvol"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  ["path", { d: "M12 10v12", key: "6ubwww" }],
  ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z", key: "9hd38g" }],
  ["path", { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z", key: "ufn41s" }]
];
const Flower2 = createLucideIcon("flower-2", __iconNode$2);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M7 20h10", key: "e6iznv" }],
  ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10", key: "161w41" }],
  [
    "path",
    {
      d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
      key: "9gtqwd"
    }
  ],
  [
    "path",
    {
      d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
      key: "bkxnd2"
    }
  ]
];
const Sprout = createLucideIcon("sprout", __iconNode$1);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",
      key: "oadzkq"
    }
  ],
  ["path", { d: "M12 19v3", key: "npa21l" }]
];
const TreeDeciduous = createLucideIcon("tree-deciduous", __iconNode);
function PlantFinder() {
  const [selectedImage, setSelectedImage] = reactExports.useState(null);
  const [isAnalyzing, setIsAnalyzing] = reactExports.useState(false);
  const [result, setResult] = reactExports.useState(null);
  const [error, setError] = reactExports.useState(null);
  const [showCamera, setShowCamera] = reactExports.useState(false);
  const [userLocation, setUserLocation] = reactExports.useState("");
  const fileInputRef = reactExports.useRef(null);
  const videoRef = reactExports.useRef(null);
  const [stream, setStream] = reactExports.useState(null);
  reactExports.useEffect(() => {
    detectUserLocation();
  }, []);
  const detectUserLocation = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      if (data.city && data.country_name) {
        setUserLocation(`${data.city}, ${data.country_name}`);
      }
    } catch (err) {
      console.error("Failed to detect location:", err);
    }
  };
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
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
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
      const analysisResult = await backend.vision.analyzePlant({
        imageBase64: base64,
        userLocation: userLocation || void 0
      });
      setResult(analysisResult);
      if (analysisResult.confidence < 0.6) {
        setError("We're not fully sure — please retake or upload a clearer photo.");
      }
    } catch (err) {
      console.error("Analysis error:", err);
      setError(err.message || "Failed to analyze plant. Please try again.");
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
  const getHealthStatusColor = (status) => {
    switch (status) {
      case "Healthy":
        return "bg-green-500/20 text-green-700 border-green-500/30";
      case "Underwatered":
        return "bg-amber-500/20 text-amber-700 border-amber-500/30";
      case "Overwatered":
        return "bg-blue-500/20 text-blue-700 border-blue-500/30";
      case "Diseased":
        return "bg-red-500/20 text-red-700 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-700 border-gray-500/30";
    }
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "AI Plant Finder & Health Analyzer",
    "description": "Identify your plant and check its health using AI. Upload a photo to get instant care tips — 100% free and powered by OpenAI.",
    "url": "https://smart-calculator-hub-d3409cs82vjl9890lfm0.lp.dev/finder/tools/plantfinder",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };
  if (showCamera) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "video",
        {
          ref: videoRef,
          autoPlay: true,
          playsInline: true,
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-4", children: [
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
        title: "AI Plant Finder & Health Analyzer - Free Plant Identification Tool | Smart Calculator Hubs",
        description: "Identify any plant instantly with AI! Upload a photo and get plant name, health diagnosis, care tips, and climate-specific advice. 100% free plant identifier powered by OpenAI.",
        keywords: "plant identifier, plant finder, AI plant identification, plant health checker, free plant app, what plant is this, plant care tips, plant disease detector"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StructuredData, { data: structuredData }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDIwMCwwLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8 max-w-5xl relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "top-banner", className: "mb-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 space-y-4 animate-in fade-in slide-in-from-top duration-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-12 h-12 text-green-600 animate-bounce" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 text-yellow-500 absolute -top-1 -right-1 animate-pulse" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent", children: "AI Plant Finder 🌿" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed", children: [
            "Your ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold", children: "FREE" }),
            " pocket botanist! Snap a pic, discover your plant's name, health status, and get personalized care tips in seconds 🚀"
          ] }),
          userLocation && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-green-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-green-600 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-gray-700", children: [
              "Detected: ",
              userLocation
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "mb-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "backdrop-blur-xl bg-white/80 border-2 border-green-200 shadow-2xl rounded-3xl overflow-hidden mb-8 transform transition-all duration-300 hover:shadow-green-200/50 hover:shadow-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
          !selectedImage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 animate-in fade-in zoom-in duration-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-3", children: "🌱 Ready to Identify Your Plant?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Choose your preferred method below — camera or upload!" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: openCamera,
                  className: "h-40 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white rounded-3xl shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-1 border-2 border-white/20",
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
                    var _a;
                    return (_a = fileInputRef.current) == null ? void 0 : _a.click();
                  },
                  variant: "outline",
                  className: "h-40 border-3 border-green-400 hover:bg-green-100 bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-xl transition-all duration-300 hover:scale-105 hover:-rotate-1",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-14 h-14 text-green-600 animate-bounce" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-green-700", children: "📤 Upload Image" }),
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold mt-0.5", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Good lighting" }),
                    " — natural light works best! Avoid dark/shadowy photos."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold mt-0.5", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Clear focus" }),
                    " — get close, but not too close. Show leaves and stems clearly."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold mt-0.5", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Clean background" }),
                    " — plain backgrounds help AI focus on your plant."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold mt-0.5", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Under 10MB" }),
                    " — keep file size reasonable for faster uploads."
                  ] })
                ] })
              ] })
            ] })
          ] }),
          selectedImage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden shadow-2xl border-4 border-green-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: selectedImage,
                  alt: "Selected plant",
                  className: "w-full h-auto max-h-[500px] object-contain bg-gradient-to-br from-gray-50 to-green-50"
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-8" }),
            isAnalyzing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 space-y-6 animate-pulse", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-20 h-20 animate-spin text-green-600 mx-auto" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-8 h-8 text-yellow-500 absolute top-0 right-0 animate-ping" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-gray-800 mb-2", children: "🔬 AI is Analyzing..." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600", children: "Hang tight! Our AI botanist is examining your plant" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-2", children: "This usually takes 3-5 seconds ⏱️" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full animate-bounce", style: { animationDelay: "0ms" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-emerald-500 rounded-full animate-bounce", style: { animationDelay: "150ms" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-teal-500 rounded-full animate-bounce", style: { animationDelay: "300ms" } })
              ] })
            ] }),
            error && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "border-2 border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50 animate-in slide-in-from-top duration-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-6 h-6 text-amber-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { className: "text-amber-900 font-medium", children: error })
            ] }),
            result && !isAnalyzing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 rounded-3xl p-6 border-2 border-green-300 shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-extrabold text-gray-900 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Flower2, { className: "w-8 h-8 text-pink-500" }),
                    result.plantName
                  ] }),
                  result.scientificName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base italic text-gray-600 mt-1 font-medium", children: result.scientificName })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: `${getHealthStatusColor(result.healthStatus)} border-2 px-4 py-2 text-base font-bold`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5 mr-1" }),
                    result.healthStatus
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-base border-2 border-green-400 bg-white font-bold", children: [
                    Math.round(result.confidence * 100),
                    "% Match"
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 shadow-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-gray-900 mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 text-green-600 animate-pulse" }),
                  "AI Summary 📝"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 leading-relaxed text-lg", children: result.summary })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 border-2 border-blue-200 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-500 p-3 rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplet, { className: "w-6 h-6 text-white" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-gray-900", children: "💧 Watering" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 font-medium", children: result.careTips.wateringFrequency })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-6 border-2 border-amber-200 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-amber-500 p-3 rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-6 h-6 text-white" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-gray-900", children: "☀️ Sunlight" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 font-medium", children: result.careTips.sunlightPreference })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-6 border-2 border-red-200 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-500 p-3 rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Thermometer, { className: "w-6 h-6 text-white" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-gray-900", children: "🌡️ Temperature" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 font-medium", children: result.careTips.temperatureRange })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-3xl p-6 border-2 border-purple-200 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-500 p-3 rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bug, { className: "w-6 h-6 text-white" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-gray-900", children: "🐛 Common Issues" })
                  ] }),
                  result.careTips.commonProblems.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-gray-800 space-y-2 font-medium", children: result.careTips.commonProblems.slice(0, 2).map((problem, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-600 font-bold mt-0.5", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: problem })
                  ] }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 italic", children: "None identified — you're doing great! 🎉" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-8" }),
              result.careTips.remedies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 border-2 border-emerald-300 shadow-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "w-7 h-7 text-emerald-600" }),
                  "🌿 Care Remedies & Solutions"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: result.careTips.remedies.map((remedy, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 bg-white/70 p-4 rounded-2xl border border-emerald-200", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-emerald-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-md", children: i + 1 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-800 font-medium text-base", children: remedy })
                ] }, i)) })
              ] }),
              result.regionSpecificAdvice && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 border-2 border-teal-300 shadow-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-teal-500 p-3 rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-6 h-6 text-white" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-2xl font-bold text-gray-900", children: "🌍 Local Climate Tips" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 font-medium text-lg leading-relaxed", children: result.regionSpecificAdvice })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: resetAnalysis,
                  className: "w-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white rounded-2xl py-8 text-xl font-bold shadow-2xl transform transition-all duration-300 hover:scale-105 border-2 border-white/20",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-6 h-6 mr-3" }),
                    "🔄 Analyze Another Plant"
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
            calculatorTitle: "Plant Care Tools Garden",
            placement: "content"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TreeDeciduous, { className: "w-7 h-7 text-purple-600" }),
              "🌳 How It Works"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-gray-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-purple-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-md", children: "1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Snap or Upload" }),
                  " — Take a clear photo of your plant or upload from your gallery."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-purple-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-md", children: "2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "AI Analysis" }),
                  " — Our OpenAI GPT-4 Vision model identifies the species and checks health."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-purple-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-md", children: "3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Get Results" }),
                  " — Receive plant name, health status, care tips, and climate advice."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-purple-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-md", children: "4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Take Action" }),
                  " — Follow our personalized recommendations to keep your plant thriving!"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-7 h-7 text-orange-600 animate-pulse" }),
              "✨ Why Choose Us?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-gray-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🤖" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "AI-Powered" }),
                  " — Using cutting-edge OpenAI GPT-4 Vision technology for accurate identification."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "💯" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "100% Free" }),
                  " — No subscriptions, no hidden fees, no BS. Seriously free forever."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "⚡" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Lightning Fast" }),
                  " — Get results in 3-5 seconds. No waiting around!"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🌍" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Climate-Smart" }),
                  " — Auto-detects your location for region-specific plant care advice."
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 border-2 border-indigo-200 rounded-3xl p-10 shadow-2xl mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-extrabold text-gray-900 mb-6 text-center", children: "🎓 Plant Care 101: Everything You Need to Know" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none space-y-6 text-gray-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-indigo-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-indigo-700 mb-3", children: "🌱 Understanding Your Plant's Needs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Every plant is unique, just like us! Some crave sunshine like a beach bum, while others prefer the shade like a vampire. The key to happy plants? Understanding what YOUR specific plant species needs. That's where our AI Plant Finder comes in clutch — it tells you EXACTLY what your green buddy wants, from water to light to temperature." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-blue-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-blue-700 mb-3", children: "💧 Watering Wisdom: Not Too Much, Not Too Little" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-relaxed mb-4", children: [
                "Here's the deal: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "overwatering kills more plants than underwatering" }),
                `. Shocking, right? Most people think "more water = more love," but plants don't work that way. Too much water drowns the roots and causes root rot (basically plant pneumonia).`
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "The finger test:" }),
                " Stick your finger 1-2 inches into the soil. If it's dry, water it. If it's moist, wait. Simple! Our AI will tell you the ideal watering frequency for your specific plant, so you don't have to guess."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-cyan-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-cyan-700 mb-3", children: "☀️ Light Levels: The Secret Sauce for Growth" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mb-4", children: `Light is food for plants. Without it, they literally starve. But here's the catch — different plants need different "portions" of light:` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 ml-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "☀️☀️☀️ Full Sun:" }),
                  " 6+ hours of direct sunlight daily (think cacti, succulents, tomatoes)."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "⛅ Partial Sun:" }),
                  " 3-6 hours of direct sunlight (roses, lavender, many veggies)."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🌤️ Bright Indirect:" }),
                  " Lots of light, but not direct rays (most houseplants LOVE this!)."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🌫️ Low Light:" }),
                  " Minimal light (snake plants, pothos, ZZ plants are champs here)."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mt-4", children: "Not sure what yours needs? Upload a pic to our AI Plant Finder and we'll tell you the exact light requirements!" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-teal-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-teal-700 mb-3", children: "🌡️ Temperature & Humidity: Creating the Perfect Environment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mb-4", children: "Most houseplants are tropical divas that love temps between 65-75°F (18-24°C). Too cold? Growth slows. Too hot? They get stressed and crispy." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-relaxed mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Humidity matters too!" }),
                " If your plant's leaves are turning brown at the tips, it might be crying for moisture in the air. Quick fixes: mist regularly, use a humidifier, or group plants together (they create their own humidity party!)."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Our AI Plant Finder detects your location and gives you climate-specific advice, so your plant thrives in YOUR environment — not just in theory." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-green-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-green-700 mb-3", children: "🐛 Common Plant Problems (And How to Fix Them!)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "🍂 Yellow Leaves:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Usually means overwatering. Let the soil dry out between waterings. Check for root rot!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "🍃 Brown Crispy Tips:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Low humidity or underwatering. Mist your plant or move it away from heating vents." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "🦗 Pests (Aphids, Spider Mites, etc.):" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Wipe leaves with soapy water or neem oil spray. Isolate infected plants ASAP!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "😴 Droopy Leaves:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Could be underwatering OR overwatering (confusing, we know). Check the soil moisture!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "🌿 Leggy Growth (Tall & Thin):" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Not enough light. Move closer to a window or add a grow light." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mt-4 text-center font-bold", children: "🔍 Upload your plant photo to our AI and get instant health diagnosis + solutions!" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-purple-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-purple-700 mb-3", children: "🪴 Repotting 101: When & How to Give Your Plant More Space" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-relaxed mb-4", children: [
                "Plants outgrow their pots, just like kids outgrow shoes. ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Signs your plant needs a bigger home:" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 ml-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "leading-relaxed", children: "Roots poking out of drainage holes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "leading-relaxed", children: "Water drains SUPER fast (roots have taken over the soil)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "leading-relaxed", children: "Plant is top-heavy and keeps tipping over" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "leading-relaxed", children: "Growth has slowed or stopped" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-relaxed mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "How to repot:" }),
                " Choose a pot 1-2 inches larger in diameter. Gently remove the plant, loosen roots, add fresh soil, and water thoroughly. Easy peasy! Do this every 1-2 years for most plants."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-pink-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-pink-700 mb-3", children: "🌸 Fun Plant Facts to Impress Your Friends" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "🌿 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: 'Plants can "hear" water' }),
                  " — roots literally grow toward the sound of water!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "🗣️ ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Talking to plants helps them grow" }),
                  " — carbon dioxide from your breath is like food to them."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "🌲 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A single tree produces enough oxygen" }),
                  " for 2 people annually. Plant more trees!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "🌵 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cacti can live 200+ years" }),
                  " — that's commitment!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "🌺 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "The corpse flower smells like rotting meat" }),
                  " — thankfully, it only blooms once every 7-10 years."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "🪴 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bamboo is the fastest-growing plant" }),
                  " — some species grow 3 feet PER DAY!"
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: Is this plant finder really free?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " YES! 100% free, no strings attached. No credit card required, no sneaky subscriptions, nada. We believe plant care should be accessible to everyone!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: How accurate is the AI plant identification?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " Our AI uses OpenAI's GPT-4 Vision, which is crazy accurate (typically 85-95% confidence). For best results, upload clear, well-lit photos showing leaves, stems, and any flowers. The AI will also tell you its confidence level!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: Can it identify ALL plants?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " It covers a HUGE range — houseplants, garden plants, succulents, herbs, veggies, flowers, trees, and more. Super rare or obscure species might stump it, but for 99% of plants you'll encounter, it works like magic!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: What if my plant is sick or dying?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " That's exactly what we're here for! The AI checks health status (Healthy, Underwatered, Overwatered, Diseased) and gives you specific remedies to nurse it back to life. It's like having a plant doctor in your pocket!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: Does it work on my phone?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " Absolutely! Works on iPhone, Android, tablets, laptops — any device with a camera or photo gallery. The responsive design looks beautiful everywhere."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: Do you save my photos or personal data?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " Nope! We only detect your city/country for climate advice (via your IP address). Your plant photos are analyzed in real-time and NOT stored on our servers. Your privacy = our priority."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: Can I use this for my garden or outdoor plants?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " YES! It works for indoor houseplants AND outdoor garden plants, trees, shrubs, flowers, vegetables, herbs — you name it. Snap a pic and find out what it is!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: What's the catch? Why is it free?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " No catch! We monetize through ethical ads (Google AdSense + Amazon affiliate links for plant care products). That's it. We make the tool free so everyone can keep their plants happy and healthy 🌱"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-lime-50 to-green-50 border-2 border-lime-200 rounded-3xl p-10 shadow-2xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-16 h-16 text-green-600 mx-auto mb-4 animate-bounce" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-extrabold text-gray-900 mb-4", children: "🌍 Join the Plant Parent Revolution!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto", children: [
            "Over ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-green-600", children: "10,000+ plant parents" }),
            " have already identified their plants using our AI tool. Whether you're a total beginner or a seasoned gardener, we're here to help you grow! 🌱"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-gray-600 mb-8", children: [
            "Got questions? Found a rare plant? Share your plant journey with us on social media using ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "#AIPlantFinder" }),
            " 💚"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
              className: "bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white px-10 py-6 rounded-2xl text-xl font-bold shadow-2xl transform transition-all hover:scale-110",
              children: "🚀 Identify Your Plant Now!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "bottom-sticky", className: "mt-10" })
      ] })
    ] })
  ] });
}
export {
  PlantFinder as default
};
