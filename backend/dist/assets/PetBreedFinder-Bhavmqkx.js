import { r as reactExports, j as jsxRuntimeExports, B as Button, X, S as SEOHead, f as Card, a7 as Sparkles, a5 as Alert, p as TriangleAlert, a6 as AlertDescription, H as Heart, aB as RefreshCw, ag as backend } from "./index-C_OXA6OQ.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { a as compressImage } from "./imageCompression-D8fkPMvD.js";
import { S as StructuredData } from "./StructuredData-_yklk7FG.js";
import { C as Camera } from "./camera-DYJgz0x3.js";
import { U as Upload } from "./upload-BCVzvtOR.js";
import { L as LoaderCircle } from "./loader-circle-BYW7QwsU.js";
import { D as Dog } from "./dog-CjWE-tb9.js";
import { C as Cat } from "./cat-CB74C2p9.js";
import { S as Share2 } from "./share-2-ViScha7M.js";
import { L as Lightbulb } from "./lightbulb-doNczJxC.js";
function PetBreedFinder() {
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
      const analysisResult = await backend.vision.analyzePetBreed({
        imageBase64: base64
      });
      setResult(analysisResult);
      if (analysisResult.confidence < 0.6) {
        setError("Not fully confident — try a clearer photo for better accuracy!");
      }
    } catch (err) {
      console.error("Analysis error:", err);
      setError(err.message || "Failed to analyze pet. Please try again.");
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
    if (!result) return;
    const url = window.location.href;
    const text = `I just identified a ${result.breedName} using AI! 🐾 Check it out:`;
    if (navigator.share) {
      navigator.share({ title: "Pet Breed Finder", text, url });
    } else {
      navigator.clipboard.writeText(`${text} ${url}`);
      alert("Link copied to clipboard!");
    }
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "AI Pet Breed Finder — Identify Dog & Cat Breeds Instantly",
    "description": "Free AI-powered pet breed identifier. Upload a photo of your dog or cat and get instant breed identification, fun facts, and care tips.",
    "url": "https://smart-calculator-hub-d3409cs82vjl9890lfm0.lp.dev/finder/tools/pet-breed-finder",
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
        "name": "Is the pet breed finder really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! 100% free with no subscriptions, no hidden fees, and no credit card required. We believe pet identification should be accessible to everyone."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is the AI breed identification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI uses OpenAI GPT-4 Vision, achieving 85-95% accuracy on clear photos. Upload well-lit images showing your pet's face and body for best results."
        }
      },
      {
        "@type": "Question",
        "name": "What species does it support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Currently supports dogs and cats with hundreds of breeds recognized. We're working on adding more species in future updates."
        }
      },
      {
        "@type": "Question",
        "name": "Do you store my pet photos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No! Photos are analyzed in real-time via secure AI API and never stored on our servers. Your privacy is our priority."
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
        title: "AI Pet Breed Finder — Identify Dog & Cat Breeds Instantly (Free) | Smart Calculator Hubs",
        description: "Free AI pet breed identifier! Upload a photo of your dog or cat and instantly discover the breed, fun facts, and similar breeds. Powered by OpenAI — 100% free forever.",
        keywords: "pet breed finder, dog breed identifier, cat breed identifier, AI pet identification, what breed is my dog, what breed is my cat, free pet breed detector"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StructuredData, { data: structuredData }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StructuredData, { data: faqData }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDEwMCwgMjAwLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8 max-w-5xl relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "top-banner", className: "mb-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 space-y-4 animate-in fade-in slide-in-from-top duration-700 overflow-visible", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center justify-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl md:text-6xl", children: "🐶" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent", children: "Pet Breed Finder" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl md:text-6xl", children: "🐾" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed", children: [
            "Snap a pic of your furry friend & discover their breed instantly!",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-600 font-bold", children: " FREE" }),
            " AI-powered identification for dogs & cats 🚀"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "mb-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "backdrop-blur-xl bg-white/80 border-2 border-purple-200 shadow-2xl rounded-3xl overflow-hidden mb-8 transform transition-all duration-300 hover:shadow-purple-200/50 hover:shadow-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
          !selectedImage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-3", children: "🐶 Ready to Identify Your Pet?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Take a photo or upload from your gallery!" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: openCamera,
                  className: "h-40 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white rounded-3xl shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-1 border-2 border-white/20",
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
                  className: "h-40 border-3 border-purple-400 hover:bg-purple-100 bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-xl transition-all duration-300 hover:scale-105 hover:-rotate-1",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-14 h-14 text-purple-600 animate-bounce" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-purple-700", children: "📤 Upload Image" }),
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-600 font-bold mt-0.5", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Clear face shot" }),
                    " — Show your pet's face clearly from the front or side."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-600 font-bold mt-0.5", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Good lighting" }),
                    " — Natural light works best. Avoid dark or blurry photos."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-600 font-bold mt-0.5", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Full body view helps" }),
                    " — Include body, coat pattern, and distinctive markings."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-600 font-bold mt-0.5", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Solo shots" }),
                    " — One pet per photo for accurate identification."
                  ] })
                ] })
              ] })
            ] })
          ] }),
          selectedImage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: selectedImage,
                  alt: "Selected pet",
                  className: "w-full h-auto max-h-[500px] object-contain bg-gradient-to-br from-gray-50 to-purple-50"
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
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-20 h-20 animate-spin text-purple-600 mx-auto" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-8 h-8 text-pink-500 absolute top-0 right-0 animate-ping" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-gray-800 mb-2", children: "🔬 AI is Analyzing..." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600", children: "Identifying your pet's breed!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-2", children: "This usually takes 3-5 seconds ⏱️" })
              ] })
            ] }),
            error && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "border-2 border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50 animate-in slide-in-from-top duration-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-6 h-6 text-amber-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { className: "text-amber-900 font-medium", children: error })
            ] }),
            result && !isAnalyzing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 rounded-3xl p-6 border-2 border-purple-300 shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    result.petType === "dog" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Dog, { className: "w-8 h-8 text-purple-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Cat, { className: "w-8 h-8 text-pink-600" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-extrabold text-gray-900", children: result.breedName })
                  ] }),
                  result.scientificName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base italic text-gray-600 font-medium", children: result.scientificName })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-purple-500/20 text-purple-700 border-2 border-purple-500/30 px-4 py-2 text-base font-bold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5 mr-1" }),
                    Math.round(result.confidence * 100),
                    "% Match"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      onClick: shareResult,
                      variant: "outline",
                      size: "sm",
                      className: "border-2 border-purple-400",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4 mr-1" }),
                        "Share"
                      ]
                    }
                  )
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200 shadow-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-gray-900 mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 text-purple-600 animate-pulse" }),
                  "About This Breed 📝"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 leading-relaxed text-lg", children: result.description })
              ] }),
              result.funFacts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-200 shadow-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-gray-900 mb-5 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-6 h-6 text-blue-600" }),
                  "🎉 Fun Facts"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: result.funFacts.map((fact, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 bg-white/70 p-4 rounded-2xl border border-blue-200", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-blue-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-md", children: i + 1 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-800 font-medium text-base", children: fact })
                ] }, i)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-8" }),
              result.similarBreeds.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 border-2 border-orange-200 shadow-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "🐾 Similar Breeds" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: result.similarBreeds.map((breed, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "px-4 py-2 text-base border-2 border-orange-300 bg-white", children: breed }, i)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AmazonAffiliate,
                {
                  calculatorTitle: `${result.petType === "dog" ? "dog" : "cat"} ${result.breedName.toLowerCase().replace(/ /g, "-")}`,
                  placement: "content"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: resetAnalysis,
                  className: "w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white rounded-2xl py-8 text-xl font-bold shadow-2xl transform transition-all duration-300 hover:scale-105 border-2 border-white/20",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-6 h-6 mr-3" }),
                    "🔄 Identify Another Pet"
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
            calculatorTitle: "pet supplies dog cat",
            placement: "content"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 border-2 border-indigo-200 rounded-3xl p-10 shadow-2xl mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-extrabold text-gray-900 mb-6 text-center", children: "🎓 Complete Guide to Pet Breed Identification" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none space-y-6 text-gray-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-indigo-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-indigo-700 mb-3", children: "🐶 Why Breed Matters: Understanding Your Pet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Knowing your pet's breed isn't just trivia — it's essential for their health and happiness! Different breeds have unique needs, temperaments, exercise requirements, and health predispositions. A Border Collie needs 2+ hours of exercise daily, while a French Bulldog is content with short walks. Persian cats need daily grooming; American Shorthairs barely need any." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mt-4", children: "Our AI Pet Breed Finder uses OpenAI's GPT-4 Vision to analyze your pet's physical characteristics — coat pattern, ear shape, facial structure, body build — and match them against hundreds of recognized breeds. It's like having a veterinary expert in your pocket, minus the $150 consultation fee!" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-blue-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-blue-700 mb-3", children: "📸 How to Get the Best Results" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mb-4", children: "AI is smart, but it can't work magic with a blurry, dark photo! Here's how to maximize accuracy:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 ml-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "📷 Lighting is Everything:" }),
                  " Use natural daylight if possible. Avoid flash (creates harsh shadows) and dim indoor lighting."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🎯 Focus on Key Features:" }),
                  " Capture your pet's face clearly, including ears, eyes, and nose. These are major breed identifiers!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🧍 Full Body Helps:" }),
                  " A full-body shot reveals proportions, coat length, tail shape, and build — all crucial for accuracy."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "🚫 Avoid Distractions:" }),
                  " Plain backgrounds work best. Other pets or people in the frame can confuse the AI."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "📐 Angle Matters:" }),
                  " Front or side profiles are ideal. Extreme angles (top-down, bottom-up) reduce accuracy."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-cyan-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-cyan-700 mb-3", children: "🐕 Dog Breed Basics: What Makes Each Unique?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mb-4", children: "Dogs are the most diverse mammal species on Earth — from 2-pound Chihuahuas to 200-pound Mastiffs! Here's what defines different breeds:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "🏃 Energy Levels:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Working breeds (German Shepherds, Border Collies, Huskies) = high energy. Toy breeds (Shih Tzus, Pugs) = moderate. Giant breeds (Great Danes, Mastiffs) = surprisingly lazy!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "🧠 Intelligence Ranking:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Border Collies and Poodles top the IQ charts (learn commands in <5 reps). Hounds are smart but stubborn. Bulldogs? Sweet but... not the sharpest tools in the shed." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "🩺 Health Predispositions:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Brachycephalic breeds (Pugs, French Bulldogs) = breathing issues. Large breeds (Labs, Golden Retrievers) = hip dysplasia. Small breeds = dental problems. Know your breed's risks!" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-teal-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-teal-700 mb-3", children: "🐱 Cat Breed Characteristics" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mb-4", children: "Cats are less visually diverse than dogs, but breed differences are HUGE when it comes to personality and care:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "💬 Vocal vs. Silent:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: `Siamese and Bengals are CHATTY — they'll "talk" your ear off. Russian Blues and British Shorthairs? Silent observers.` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "🧹 Grooming Needs:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Persians and Maine Coons require daily brushing (matting is REAL). Sphynx cats need weekly baths (oil buildup). Domestic Shorthairs are self-sufficient." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 mb-1", children: "🎾 Activity Levels:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Bengals and Abyssinians are hyperactive athletes. Ragdolls and Persians are couch potatoes. Match the breed to your lifestyle!" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-green-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-green-700 mb-3", children: "🧬 Mixed Breeds: The Plot Thickens" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mb-4", children: "Got a mutt? That's AWESOME — mixed breeds often have better health due to genetic diversity (hybrid vigor). But identifying them is trickier." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mb-4", children: "Our AI can detect dominant breed traits in mixed-breed pets. If your dog has floppy ears, a golden coat, and a retriever build, it might be a Golden Retriever mix. If your cat has blue eyes and a seal-point coat, it's likely got some Siamese lineage." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pro Tip:" }),
                " For mixed breeds, consider a DNA test (Embark for dogs, Basepaws for cats) for definitive answers. Our tool gives you a quick, free first impression!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-purple-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-purple-700 mb-3", children: "🏥 Why Breed Identification Helps Your Vet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed mb-4", children: "Veterinarians use breed info to anticipate health issues and customize care plans:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 ml-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Preventive Care:" }),
                  " Knowing your Dalmatian is prone to kidney stones helps your vet monitor early."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Medication Dosing:" }),
                  " Some breeds (Collies, Australian Shepherds) have genetic sensitivity to certain drugs."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Anesthesia Safety:" }),
                  " Brachycephalic breeds need special anesthesia protocols due to airway anatomy."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Weight Management:" }),
                  " A 30-pound Beagle is obese; a 30-pound Border Collie is perfect. Breed-specific charts matter!"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-pink-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-pink-700 mb-3", children: "🎉 Fun Pet Breed Facts" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "🐕 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Smallest Dog Breed:" }),
                  " Chihuahua (2-6 lbs). Largest? English Mastiff (120-230 lbs)!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "🐈 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Oldest Cat Breed:" }),
                  " Egyptian Mau — depicted in 3,000-year-old hieroglyphics!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "🏊 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Water-Loving Dogs:" }),
                  " Newfoundlands have webbed feet and can rescue drowning swimmers."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "💨 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fastest Dog:" }),
                  " Greyhounds hit 45 mph. Fastest cat? Egyptian Mau at 30 mph!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "👃 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best Sniffer:" }),
                  " Bloodhounds have 300 million scent receptors (humans have 5 million)."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "😺 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Only Naturally Hairless Cat:" }),
                  " Sphynx (technically covered in fine down, not bald)."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
                  "🧠 ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Smartest Breeds:" }),
                  " Dogs = Border Collie. Cats = Abyssinian."
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: Is this pet breed finder really free?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " YES! 100% free forever. No subscriptions, no hidden fees, no credit card required. We believe pet identification should be accessible to everyone who loves animals!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: How accurate is the AI breed identification?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " Our AI uses OpenAI GPT-4 Vision, achieving 85-95% accuracy on clear, well-lit photos. Results depend on photo quality, angle, and how closely your pet matches breed standards. Mixed breeds may show lower confidence scores."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: What species and breeds does it support?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " Currently supports dogs and cats with hundreds of recognized breeds from AKC, CFA, and international registries. We're working on adding rabbits, birds, and other pets soon!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: Does it work on mixed breed pets?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " Yes! The AI identifies dominant breed traits visible in your pet's appearance. For precise genetic breakdown, consider a DNA test (Embark, Wisdom Panel). Our tool is perfect for quick, visual assessment!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: Do you store my pet photos or personal data?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " Absolutely NOT! Photos are analyzed in real-time via secure OpenAI API and never stored on our servers. Zero data retention. Your privacy and your pet's privacy are paramount."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: Can I use this for shelter or rescue pets?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " YES! Perfect for shelters, rescues, and adopters trying to identify mystery breeds. Helps match pets to appropriate homes based on breed characteristics and care needs."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: Does it work on puppies and kittens?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " It tries! But accuracy may be lower since puppies/kittens haven't developed adult features. Best results come from pets 6+ months old when breed characteristics are more pronounced."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-2xl p-6 border border-rose-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-rose-700 mb-2", children: "Q: What if the AI gets it wrong?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-800 leading-relaxed", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A:" }),
                " Try uploading a different photo with better lighting/angle. Check the confidence score — below 60% means uncertainty. For definitive answers, consult a vet or get a DNA test!"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-lime-50 to-green-50 border-2 border-lime-200 rounded-3xl p-10 shadow-2xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Dog, { className: "w-16 h-16 text-purple-600 mx-auto mb-4 animate-bounce" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-extrabold text-gray-900 mb-4", children: "🐾 Join the Pet Parent Community!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto", children: "Thousands of pet lovers have already discovered their furry friends' breeds using our AI tool. Whether you're a new pet parent or a seasoned pro, we're here to help! 🐶🐱" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
              className: "bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white px-10 py-6 rounded-2xl text-xl font-bold shadow-2xl transform transition-all hover:scale-110",
              children: "🚀 Identify Your Pet Now!"
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
  PetBreedFinder as default
};
