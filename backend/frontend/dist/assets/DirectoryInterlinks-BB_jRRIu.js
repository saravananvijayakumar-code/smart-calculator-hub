import { j as jsxRuntimeExports, L as Link } from "./index-CK9G4vW7.js";
import { A as AppleStyleCard } from "./AppleStyleCard-DyiWjqNf.js";
import { g as getDirectoryInterlinks, F as Folder } from "./interlinking-DH1ZPh0L.js";
import { A as ArrowRight } from "./arrow-right-Bjdtr8dz.js";
const DIRECTORY_INFO = {
  "/financial/tools": { name: "Financial Tools", description: "Loans, investments, and tax calculators" },
  "/health/tools": { name: "Health Tools", description: "BMI, fitness, and wellness calculators" },
  "/math/tools": { name: "Math Tools", description: "Percentage, fraction, and scientific calculators" },
  "/utility/tools": { name: "Utility Tools", description: "Everyday calculators and converters" },
  "/us/tools": { name: "US Tax & Finance", description: "Federal tax, 401k, and loan calculators" },
  "/uk/tools": { name: "UK Tax & Finance", description: "Stamp duty, pension, and ISA calculators" },
  "/india/tools": { name: "India Tax & Finance", description: "EPF, SIP, GST, and tax calculators" },
  "/australia/tools": { name: "Australia Tax & Finance", description: "Super, CGT, and property calculators" },
  "/aupay/tools": { name: "AU Pay Tax Hub", description: "Payroll, bonus, and leave tax calculators" },
  "/insurance/tools": { name: "Insurance Calculators", description: "Life, health, car, and pet insurance" },
  "/viral/tools": { name: "Viral Calculators", description: "Compatibility, zodiac, and fun tools" },
  "/ai/social": { name: "AI Social Tools", description: "Caption, hashtag, and profile analyzers" },
  "/ai/relationships": { name: "AI Relationship Tools", description: "Compatibility and profile analysis" },
  "/ai/wellness": { name: "AI Wellness Tools", description: "Mood journal and wellness trackers" },
  "/ai/parenting": { name: "AI Parenting Tools", description: "Baby names and parenting helpers" },
  "/ai/shopping": { name: "AI Shopping Tools", description: "Gift recommender and shopping helpers" },
  "/finder/tools": { name: "Finder Tools", description: "Pet breeds, plants, and decor finders" },
  "/tools": { name: "General Tools", description: "IP lookup, browser info, and utilities" },
  "/calculators/us": { name: "US Calculators", description: "All US-specific calculators" },
  "/calculators/uk": { name: "UK Calculators", description: "All UK-specific calculators" },
  "/calculators/india": { name: "India Calculators", description: "All India-specific calculators" },
  "/calculators/australia": { name: "Australia Calculators", description: "All Australia-specific calculators" },
  "/calculators/health": { name: "Health Calculators", description: "All health and fitness calculators" },
  "/calculators/insurance": { name: "Insurance Calculators", description: "All insurance calculators" }
};
function DirectoryInterlinks({ currentPath, title = "Related Calculator Categories" }) {
  const relatedPaths = getDirectoryInterlinks(currentPath);
  if (relatedPaths.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppleStyleCard, { className: "mt-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "w-5 h-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: relatedPaths.map((path) => {
      const info = DIRECTORY_INFO[path];
      if (!info) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: path,
          className: "group",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-accent/50 transition-all duration-200 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-foreground group-hover:text-primary transition-colors mb-1", children: info.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2", children: info.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 ml-2" })
          ] }) })
        },
        path
      );
    }) })
  ] });
}
export {
  DirectoryInterlinks as D
};
