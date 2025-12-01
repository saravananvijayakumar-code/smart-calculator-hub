import { n as createLucideIcon, r as reactExports } from "./index-CK9G4vW7.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
];
const Maximize = createLucideIcon("maximize", __iconNode);
function useKeyboardShortcuts({
  onSpace,
  onReset,
  onFullscreen,
  onEscape
}) {
  const handleKeyPress = reactExports.useCallback((event) => {
    const target = event.target;
    const isInputField = target.tagName === "INPUT" || target.tagName === "TEXTAREA";
    if (isInputField) return;
    switch (event.code) {
      case "Space":
        event.preventDefault();
        onSpace == null ? void 0 : onSpace();
        break;
      case "KeyR":
        if (!event.ctrlKey && !event.metaKey) {
          event.preventDefault();
          onReset == null ? void 0 : onReset();
        }
        break;
      case "KeyF":
        if (!event.ctrlKey && !event.metaKey) {
          event.preventDefault();
          onFullscreen == null ? void 0 : onFullscreen();
        }
        break;
      case "Escape":
        event.preventDefault();
        onEscape == null ? void 0 : onEscape();
        break;
    }
  }, [onSpace, onReset, onFullscreen, onEscape]);
  reactExports.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);
}
function useFullscreen(elementRef) {
  const [isFullscreen, setIsFullscreen] = reactExports.useState(false);
  const [isSupported, setIsSupported] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const checkSupport = () => {
      const hasFullscreenAPI = !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
      setIsSupported(hasFullscreenAPI);
    };
    checkSupport();
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
    };
  }, []);
  const toggleFullscreen = reactExports.useCallback(async () => {
    if (!elementRef.current || !isSupported) {
      console.warn("Fullscreen API is not supported or not allowed by permissions policy");
      return;
    }
    try {
      if (!document.fullscreenElement) {
        const element = elementRef.current;
        if (element.requestFullscreen) {
          await element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
          await element.webkitRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
          await element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          await element.msRequestFullscreen();
        }
      } else {
        const doc = document;
        if (doc.exitFullscreen) {
          await doc.exitFullscreen();
        } else if (doc.webkitExitFullscreen) {
          await doc.webkitExitFullscreen();
        } else if (doc.mozCancelFullScreen) {
          await doc.mozCancelFullScreen();
        } else if (doc.msExitFullscreen) {
          await doc.msExitFullscreen();
        }
      }
    } catch (err) {
      if (err.name === "TypeError" && err.message.includes("permissions policy")) {
        console.warn("Fullscreen blocked by permissions policy. This may occur in embedded contexts.");
      } else {
        console.error("Error toggling fullscreen:", err);
      }
    }
  }, [elementRef, isSupported]);
  return { isFullscreen, toggleFullscreen, isSupported };
}
export {
  Maximize as M,
  useKeyboardShortcuts as a,
  useFullscreen as u
};
