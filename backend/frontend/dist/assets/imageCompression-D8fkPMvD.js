const SUPPORTED_FORMATS = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
function isSupportedFormat(file) {
  return SUPPORTED_FORMATS.includes(file.type.toLowerCase());
}
async function compressImage(file, options) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.onload = (e) => {
      var _a;
      const img = new Image();
      img.onerror = () => reject(new Error("Failed to load image"));
      img.onload = () => {
        try {
          let { width, height } = img;
          if (options.maxWidth && width > options.maxWidth) {
            height = height * options.maxWidth / width;
            width = options.maxWidth;
          }
          if (options.maxHeight && height > options.maxHeight) {
            width = width * options.maxHeight / height;
            height = options.maxHeight;
          }
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            reject(new Error("Failed to get canvas context"));
            return;
          }
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, width, height);
          const outputFormat = options.outputFormat || (file.type === "image/png" ? "image/png" : "image/jpeg");
          const quality = options.quality / 100;
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error("Failed to create blob"));
                return;
              }
              const dataUrl = canvas.toDataURL(outputFormat, quality);
              resolve({
                blob,
                dataUrl,
                size: blob.size,
                width,
                height
              });
            },
            outputFormat,
            quality
          );
        } catch (error) {
          reject(error);
        }
      };
      img.src = (_a = e.target) == null ? void 0 : _a.result;
    };
    reader.readAsDataURL(file);
  });
}
function formatFileSize(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}
function calculateCompressionRatio(originalSize, compressedSize) {
  return (originalSize - compressedSize) / originalSize * 100;
}
async function createPreviewUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      var _a;
      return resolve((_a = e.target) == null ? void 0 : _a.result);
    };
    reader.onerror = () => reject(new Error("Failed to create preview"));
    reader.readAsDataURL(file);
  });
}
async function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
function getOutputFilename(originalFilename, format) {
  const nameWithoutExt = originalFilename.replace(/\.[^/.]+$/, "");
  const extension = format.split("/")[1];
  return `${nameWithoutExt}_compressed.${extension}`;
}
export {
  compressImage as a,
  calculateCompressionRatio as b,
  createPreviewUrl as c,
  downloadBlob as d,
  formatFileSize as f,
  getOutputFilename as g,
  isSupportedFormat as i
};
