import { n as createLucideIcon, r as reactExports, j as jsxRuntimeExports, S as SEOHead, a8 as Sparkles, Y as Download, X } from "./index-CK9G4vW7.js";
import { A as AppleStyleCard } from "./AppleStyleCard-DyiWjqNf.js";
import { A as AutoAdSlot } from "./AutoAdSlot-DNRO9HTk.js";
import { A as AffiliateBanner } from "./AffiliateBanner-DioKya-c.js";
import { c as create, p as persist, a as createJSONStorage } from "./middleware-Xu_RK28m.js";
import { f as formatFileSize, i as isSupportedFormat, c as createPreviewUrl, a as compressImage, b as calculateCompressionRatio, g as getOutputFilename, d as downloadBlob } from "./imageCompression-D8fkPMvD.js";
import { Z as Zap } from "./zap-BEhI-iJb.js";
import { C as Check } from "./check-DTsA1WpX.js";
import { U as Upload } from "./upload-4q82zR6I.js";
import { I as Image } from "./image-CQoWEwwI.js";
import { T as TrendingDown } from "./trending-down-Cff5hrMM.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./award-Bl7Nn9A9.js";
import "./external-link-BLvGw9rL.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["circle", { cx: "10", cy: "12", r: "2", key: "737tya" }],
  ["path", { d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22", key: "wt3hpn" }]
];
const FileImage = createLucideIcon("file-image", __iconNode);
const useImageCompressorStore = create()(
  persist(
    (set) => ({
      images: [],
      quality: 80,
      totalCompressed: 0,
      setQuality: (quality) => set({ quality }),
      addImage: (image) => set((state) => ({
        images: [...state.images, image]
      })),
      removeImage: (id) => set((state) => ({
        images: state.images.filter((img) => img.id !== id)
      })),
      clearImages: () => set({ images: [] }),
      incrementTotalCompressed: (count = 1) => set((state) => ({
        totalCompressed: state.totalCompressed + count
      }))
    }),
    {
      name: "image-compressor-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        totalCompressed: state.totalCompressed,
        quality: state.quality
      })
    }
  )
);
function ImageCompressor() {
  const {
    quality,
    totalCompressed,
    setQuality,
    addImage,
    clearImages,
    incrementTotalCompressed
  } = useImageCompressorStore();
  const [images, setImages] = reactExports.useState([]);
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const [isProcessing, setIsProcessing] = reactExports.useState(false);
  const fileInputRef = reactExports.useRef(null);
  const handleDragOver = reactExports.useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);
  const handleDragLeave = reactExports.useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);
  const processFiles = async (files) => {
    if (!files || files.length === 0) return;
    setIsProcessing(true);
    const newImages = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!isSupportedFormat(file)) {
        continue;
      }
      try {
        const originalPreview = await createPreviewUrl(file);
        const result = await compressImage(file, {
          quality,
          maxWidth: 4e3,
          maxHeight: 4e3
        });
        const compressionRatio = calculateCompressionRatio(file.size, result.size);
        const compressedImage = {
          id: `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          originalFile: file,
          originalSize: file.size,
          compressedBlob: result.blob,
          compressedSize: result.size,
          compressionRatio,
          quality,
          previewUrl: result.dataUrl,
          originalPreviewUrl: originalPreview,
          timestamp: Date.now()
        };
        newImages.push(compressedImage);
      } catch (error) {
        console.error("Error compressing image:", error);
      }
    }
    setImages((prev) => [...prev, ...newImages]);
    incrementTotalCompressed(newImages.length);
    setIsProcessing(false);
  };
  const handleDrop = reactExports.useCallback(async (e) => {
    e.preventDefault();
    setIsDragging(false);
    await processFiles(e.dataTransfer.files);
  }, [quality]);
  const handleFileSelect = async (e) => {
    await processFiles(e.target.files);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const handleDownload = async (image) => {
    const filename = getOutputFilename(
      image.originalFile.name,
      image.compressedBlob.type
    );
    await downloadBlob(image.compressedBlob, filename);
  };
  const handleDownloadAll = async () => {
    for (const image of images) {
      await handleDownload(image);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  };
  const handleRemove = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };
  const handleClearAll = () => {
    setImages([]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Free Image Compressor - Reduce Image Size Online | Smart Calculator Hub",
        description: "Compress PNG, JPG, JPEG, and WEBP images online for free. Reduce file size while maintaining quality. Fast, secure, client-side compression with no upload required.",
        keywords: "image compressor, compress images online, reduce image size, optimize images, PNG compressor, JPG compressor, WEBP compressor, image optimization"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "top-banner", className: "mb-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            totalCompressed.toLocaleString(),
            " Images Compressed"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "Image Compressor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Compress your images instantly. Fast, secure, and 100% client-side processing." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { variant: "elevated", className: "hover:scale-105 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg", children: "Lightning Fast" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Instant compression" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { variant: "elevated", className: "hover:scale-105 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-6 h-6 text-purple-600 dark:text-purple-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg", children: "100% Private" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No server uploads" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { variant: "elevated", className: "hover:scale-105 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileImage, { className: "w-6 h-6 text-pink-600 dark:text-pink-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg", children: "Multi-Format" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "PNG, JPG, WEBP" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content", className: "mb-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { variant: "elevated", className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            onDragOver: handleDragOver,
            onDragLeave: handleDragLeave,
            onDrop: handleDrop,
            className: `border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${isDragging ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 scale-105" : "border-border hover:border-blue-400 dark:hover:border-blue-600"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `transition-transform duration-200 ${isDragging ? "scale-110" : "scale-100"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-16 h-16 mx-auto mb-4 text-blue-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mb-2", children: "Drop your images here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "or click to select files (PNG, JPG, JPEG, WEBP)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  ref: fileInputRef,
                  type: "file",
                  multiple: true,
                  accept: "image/png,image/jpeg,image/jpg,image/webp",
                  onChange: handleFileSelect,
                  className: "hidden",
                  id: "file-input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "label",
                {
                  htmlFor: "file-input",
                  className: "inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-5 h-5" }),
                    "Select Files"
                  ]
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium mb-3", children: [
            "Compression Quality: ",
            quality,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "range",
              min: "10",
              max: "100",
              value: quality,
              onChange: (e) => setQuality(Number(e.target.value)),
              className: "w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Smaller file" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Better quality" })
          ] })
        ] })
      ] }) }),
      isProcessing && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-fade-in text-center mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 bg-blue-100 dark:bg-blue-900/30 px-6 py-3 rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-blue-600 dark:text-blue-400", children: "Compressing images..." })
      ] }) }),
      images.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold", children: [
            "Compressed Images (",
            images.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handleDownloadAll,
                className: "inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                  "Download All"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handleClearAll,
                className: "inline-flex items-center gap-2 px-6 py-2 bg-red-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }),
                  "Clear All"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: images.map((image, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "animate-fade-in",
            style: { animationDelay: `${index * 100}ms` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { variant: "elevated", className: "overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg truncate", children: image.originalFile.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: image.originalFile.type.split("/")[1].toUpperCase() })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => handleRemove(image.id),
                    className: "p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-red-500" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: "Original" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: image.originalPreviewUrl,
                      alt: "Original",
                      className: "w-full h-32 object-cover rounded-lg border border-border"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: "Compressed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: image.previewUrl,
                      alt: "Compressed",
                      className: "w-full h-32 object-cover rounded-lg border border-border"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Original" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: formatFileSize(image.originalSize) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Compressed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-green-600 dark:text-green-400", children: formatFileSize(image.compressedSize) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Saved" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-4 h-4 text-green-600" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-sm text-green-600 dark:text-green-400", children: [
                      image.compressionRatio.toFixed(1),
                      "%"
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => handleDownload(image),
                  className: "w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-5 h-5" }),
                    "Download Compressed"
                  ]
                }
              )
            ] })
          },
          image.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content", className: "my-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content", className: "mt-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImageCompressionGuide, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content", className: "mt-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AffiliateBanner, { type: "amazon-tools", className: "mt-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "bottom-sticky", className: "mt-8" })
    ] }) })
  ] });
}
function ImageCompressionGuide() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { variant: "elevated", className: "prose prose-lg max-w-none dark:prose-invert", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "The Complete Guide to Image Compression" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 text-blue-500" }),
          "What is Image Compression?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Image compression is the process of reducing the file size of digital images while maintaining acceptable visual quality. In today's digital world, where billions of images are uploaded and shared daily, compression is essential for faster loading times, reduced bandwidth usage, and improved user experience. Whether you're a web developer optimizing site performance, a photographer managing large portfolios, or a social media enthusiast sharing memories, understanding image compression can save you time, money, and storage space." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileImage, { className: "w-6 h-6 text-purple-500" }),
          "Understanding Image Formats"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mb-3", children: "JPEG (Joint Photographic Experts Group)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-3", children: "JPEG is the most widely used image format on the web, perfect for photographs and images with gradients. It uses lossy compression, meaning some data is permanently discarded to achieve smaller file sizes." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best for:" }),
                " Photographs, complex images with many colors"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Compression:" }),
                " Lossy (60-90% quality recommended)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Transparency:" }),
                " Not supported"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Use cases:" }),
                " Website images, digital photography, social media"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mb-3", children: "PNG (Portable Network Graphics)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-3", children: "PNG is ideal for images requiring transparency or sharp edges. It uses lossless compression, preserving all image data at the cost of larger file sizes compared to JPEG." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best for:" }),
                " Logos, icons, text-heavy images, screenshots"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Compression:" }),
                " Lossless or lossy (with quality adjustment)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Transparency:" }),
                " Full alpha channel support"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Use cases:" }),
                " Web graphics, logos, images with transparency"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mb-3", children: "WebP (Web Picture Format)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-3", children: "WebP is a modern format developed by Google, offering superior compression for both lossy and lossless images. It typically produces files 25-35% smaller than JPEG while maintaining similar quality." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best for:" }),
                " All web images, modern browsers"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Compression:" }),
                " Both lossy and lossless"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Transparency:" }),
                " Supported"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Use cases:" }),
                " Modern websites, web applications, e-commerce"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-6 h-6 text-yellow-500" }),
          "How Image Compression Works"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Image compression algorithms work by identifying and eliminating redundant data. There are two main approaches:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mb-3", children: "Lossy Compression" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-3", children: "Permanently removes data deemed less important to human perception. This achieves higher compression ratios but may introduce artifacts at very low quality settings." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
              " JPEG uses discrete cosine transform (DCT) to convert spatial image data into frequency components, then quantizes and discards high-frequency details."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold mb-3", children: "Lossless Compression" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-3", children: "Reduces file size without any quality loss by identifying patterns and encoding them more efficiently. The original image can be perfectly reconstructed." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Example:" }),
              " PNG uses DEFLATE algorithm with filtering and prediction to remove redundancy while preserving every pixel exactly."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-6 h-6 text-green-500" }),
          "Optimization Best Practices"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-blue-500 pl-6 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2", children: "1. Choose the Right Format" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Use JPEG for photos, PNG for graphics with transparency or sharp edges, and WebP for modern web applications where browser support allows." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-purple-500 pl-6 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2", children: "2. Optimize Quality Settings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "For most web images, 75-85% quality offers the best balance between file size and visual quality. Going below 70% often introduces noticeable artifacts." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-pink-500 pl-6 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2", children: "3. Resize Before Compressing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Never serve images larger than displayed. A 4000x3000px image displayed at 800x600px wastes bandwidth. Resize to the maximum display size first, then compress." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-green-500 pl-6 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2", children: "4. Remove Metadata" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "EXIF data (camera settings, GPS coordinates) can add significant size. Remove it unless needed for specific purposes like photography portfolios." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-yellow-500 pl-6 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2", children: "5. Use Progressive Loading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Progressive JPEGs load in multiple passes, showing a low-quality preview that gradually improves. This improves perceived performance on slower connections." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-red-500 pl-6 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2", children: "6. Implement Lazy Loading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Load images only when they're about to enter the viewport. This dramatically reduces initial page load time and bandwidth usage for pages with many images." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-article", className: "my-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-6 h-6 text-green-500" }),
          "SEO Benefits of Image Optimization"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Optimized images directly impact your website's search engine ranking and user experience:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2", children: "Page Speed Impact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Google considers page speed a ranking factor. Compressed images load faster, reducing Time to First Byte (TTFB) and Largest Contentful Paint (LCP), key Core Web Vitals metrics." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2", children: "Mobile-First Indexing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "With Google's mobile-first approach, optimized images are crucial for mobile users on slower connections. Smaller files mean better mobile experience and improved rankings." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2", children: "User Engagement" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Studies show 53% of mobile users abandon sites that take over 3 seconds to load. Optimized images keep bounce rates low and engagement high, indirectly boosting SEO." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2", children: "Bandwidth & Hosting Costs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Smaller images reduce bandwidth consumption, lowering hosting costs and allowing you to serve more users with the same infrastructure." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-6 h-6 text-blue-500" }),
          "Advanced Techniques"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3", children: "Responsive Images" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-3", children: "Use the `srcset` attribute to serve different image sizes based on device resolution and viewport width. This ensures users download only what they need." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-100 dark:bg-gray-800 p-4 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-sm", children: '<img srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w" sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px" src="medium.jpg" alt="Description" />' }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3", children: "Content Delivery Networks (CDN)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "CDNs like Cloudflare or AWS CloudFront cache and serve images from servers geographically closer to users, reducing latency. Many CDNs offer automatic image optimization and format conversion." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3", children: "Next-Gen Formats" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-3", children: "AVIF (AV1 Image File Format) offers even better compression than WebP but has limited browser support. Use it with fallbacks for maximum optimization." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-100 dark:bg-gray-800 p-4 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "text-sm", children: [
              "<picture>",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              '  <source srcset="image.avif" type="image/avif" />',
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              '  <source srcset="image.webp" type="image/webp" />',
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              '  <img src="image.jpg" alt="Description" />',
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "</picture>"
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mb-4", children: "Common Mistakes to Avoid" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-900/20 p-6 rounded-xl space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-red-500 mt-1 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-1", children: "Over-Compression" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Setting quality too low introduces visible artifacts, making images look pixelated or blocky." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-red-500 mt-1 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-1", children: "Wrong Format Selection" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Using PNG for photos or JPEG for logos results in larger files or quality loss." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-red-500 mt-1 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-1", children: "Serving Oversized Images" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Uploading 4K images when thumbnails are displayed wastes bandwidth and slows loading." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-red-500 mt-1 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-1", children: "Ignoring Alt Text" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Missing alt attributes hurt SEO and accessibility. Always describe images meaningfully." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-red-500 mt-1 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-1", children: "Not Testing Results" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Always preview compressed images before deploying to ensure acceptable quality." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: "Why Our Tool is Different" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-6 h-6 mt-1 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-1", children: "100% Client-Side Processing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-sm", children: "Your images never leave your device. Everything happens in your browser using modern HTML5 Canvas API, ensuring complete privacy and security." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-6 h-6 mt-1 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-1", children: "Instant Results" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-sm", children: "No waiting for uploads or server processing. Compression happens instantly, even for dozens of images." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-6 h-6 mt-1 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-1", children: "Real-Time Quality Preview" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-sm", children: "See exactly how your compressed images look before downloading. Adjust quality settings with immediate visual feedback." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-6 h-6 mt-1 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-1", children: "No File Size Limits" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-sm", children: "Process as many images as your device can handle. No arbitrary upload limits or premium tiers." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-6 h-6 mt-1 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-1", children: "Completely Free Forever" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-sm", children: "No hidden costs, subscriptions, or watermarks. Professional-grade compression accessible to everyone." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mb-4", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-blue-500 pl-6 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Is my data safe?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Absolutely. All compression happens locally in your browser. No images are uploaded to any server, and no data is collected or stored." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-purple-500 pl-6 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "What quality setting should I use?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "For web use, 75-85% is ideal for most images. For printing or archival, use 90-95%. Below 70%, artifacts become noticeable." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-pink-500 pl-6 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Can I compress images in bulk?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Yes! Select multiple files at once or drag and drop an entire folder. All images will be processed with your chosen quality setting." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-green-500 pl-6 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Will compression reduce image quality?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Some quality reduction is inevitable with lossy compression, but at recommended settings (75-85%), the difference is imperceptible to most viewers while achieving 50-80% size reduction." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-yellow-500 pl-6 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Which browsers are supported?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "All modern browsers including Chrome, Firefox, Safari, and Edge. The tool uses standard HTML5 APIs supported by all browsers from the last 5+ years." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: "Start Optimizing Your Images Today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 max-w-2xl mx-auto", children: "Join thousands of developers, designers, and content creators who trust our tool for fast, secure, and effective image compression. No signup required." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
            className: "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-6 h-6" }),
              "Compress Images Now"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
export {
  ImageCompressor as default
};
