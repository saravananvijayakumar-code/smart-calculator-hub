import { r as reactExports, j as jsxRuntimeExports, z as cn } from "./index-C_OXA6OQ.js";
const AppleStyleInput = reactExports.forwardRef(
  ({ className, label, error, helperText, suffix, prefix, large = false, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      label && /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        prefix && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground select-none", children: prefix }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref,
            className: cn(
              "w-full border border-border bg-background rounded-xl transition-all duration-200",
              "focus:ring-2 focus:ring-primary/20 focus:border-primary",
              "placeholder:text-muted-foreground/60",
              large ? "px-6 py-4 text-lg" : "px-4 py-3",
              prefix && (large ? "pl-12" : "pl-10"),
              suffix && (large ? "pr-12" : "pr-10"),
              error && "border-red-500 focus:ring-red-500/20 focus:border-red-500",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              className
            ),
            ...props
          }
        ),
        suffix && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground select-none", children: suffix })
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-500", children: error }),
      helperText && !error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: helperText })
    ] });
  }
);
AppleStyleInput.displayName = "AppleStyleInput";
export {
  AppleStyleInput as A
};
