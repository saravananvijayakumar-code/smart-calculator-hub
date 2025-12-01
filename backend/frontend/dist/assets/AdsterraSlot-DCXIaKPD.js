import { r as reactExports, j as jsxRuntimeExports } from "./index-CK9G4vW7.js";
function AdsterraSlot({ className = "", position = "top" }) {
  const containerRef = reactExports.useRef(null);
  const scriptLoadedRef = reactExports.useRef(false);
  const [adLoaded, setAdLoaded] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (scriptLoadedRef.current || !containerRef.current) return;
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = "//pl27997161.effectivegatecpm.com/120740d0fd4434c9ec79708b1058347a/invoke.js";
    script.onload = () => {
      setTimeout(() => {
        var _a;
        const adContainer = (_a = containerRef.current) == null ? void 0 : _a.querySelector("#container-120740d0fd4434c9ec79708b1058347a");
        if (adContainer && adContainer.children.length > 0) {
          setAdLoaded(true);
        }
      }, 1e3);
    };
    script.onerror = () => {
      console.debug("Adsterra script failed to load");
      setAdLoaded(false);
    };
    containerRef.current.appendChild(script);
    scriptLoadedRef.current = true;
    return () => {
      scriptLoadedRef.current = false;
    };
  }, []);
  if (typeof window !== "undefined" && window.location.hostname === "localhost") {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `my-4 ${className}`, children: [
    adLoaded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-center text-muted-foreground mb-2", children: "Advertisement" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "container-120740d0fd4434c9ec79708b1058347a" }) })
  ] });
}
export {
  AdsterraSlot as A
};
