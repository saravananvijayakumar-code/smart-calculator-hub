import { r as reactExports, j as jsxRuntimeExports, E as cn } from "./index-CK9G4vW7.js";
const AppleStyleCard = reactExports.forwardRef(
  ({ className, variant = "default", padding = "md", children, ...props }, ref) => {
    const variants = {
      default: "bg-card text-card-foreground border border-border",
      elevated: "bg-card text-card-foreground shadow-lg border border-border/50",
      outlined: "bg-background text-foreground border-2 border-border"
    };
    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        className: cn(
          "rounded-2xl transition-all duration-200",
          variants[variant],
          paddings[padding],
          className
        ),
        ...props,
        children
      }
    );
  }
);
AppleStyleCard.displayName = "AppleStyleCard";
const AppleStyleCardHeader = reactExports.forwardRef(
  ({ className, title, subtitle, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref,
        className: cn("space-y-2 mb-6", className),
        ...props,
        children: [
          title && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold leading-none tracking-tight", children: title }),
          subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: subtitle }),
          children
        ]
      }
    );
  }
);
AppleStyleCardHeader.displayName = "AppleStyleCardHeader";
export {
  AppleStyleCard as A,
  AppleStyleCardHeader as a
};
