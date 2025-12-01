import { r as reactExports, j as jsxRuntimeExports, E as cn, o as LoaderCircle } from "./index-CK9G4vW7.js";
const AppleStyleButton = reactExports.forwardRef(
  ({ className, variant = "primary", size = "md", loading = false, icon, children, disabled, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary/50 shadow-sm",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:ring-secondary/50",
      outline: "border border-border bg-background hover:bg-accent hover:text-accent-foreground focus:ring-primary/50",
      ghost: "hover:bg-accent hover:text-accent-foreground focus:ring-primary/50"
    };
    const sizes = {
      sm: "px-4 py-2 text-sm gap-2",
      md: "px-6 py-3 text-base gap-2",
      lg: "px-8 py-4 text-lg gap-3"
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        ref,
        className: cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        ),
        disabled: disabled || loading,
        ...props,
        children: [
          loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
          !loading && icon && icon,
          children
        ]
      }
    );
  }
);
AppleStyleButton.displayName = "AppleStyleButton";
export {
  AppleStyleButton as A
};
