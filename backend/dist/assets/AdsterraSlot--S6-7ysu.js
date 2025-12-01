import { r as reactExports, j as jsxRuntimeExports } from "./index-C_OXA6OQ.js";
function AdsterraSlot({ className = "", position = "top" }) {
  const containerRef = reactExports.useRef(null);
  const scriptLoadedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (scriptLoadedRef.current || !containerRef.current) return;
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = "//pl27997161.effectivegatecpm.com/120740d0fd4434c9ec79708b1058347a/invoke.js";
    script.onerror = () => {
      console.debug("Adsterra script failed to load");
    };
    containerRef.current.appendChild(script);
    scriptLoadedRef.current = true;
    return () => {
      scriptLoadedRef.current = false;
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `my-4 ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-center text-muted-foreground mb-2", children: "Advertisement" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "container-120740d0fd4434c9ec79708b1058347a" }) })
  ] });
}
export {
  AdsterraSlot as A
};
