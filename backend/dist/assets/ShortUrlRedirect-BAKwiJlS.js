import { u as useParams, r as reactExports, j as jsxRuntimeExports, ag as backend } from "./index-C_OXA6OQ.js";
function ShortUrlRedirect() {
  const { shortCode } = useParams();
  const [error, setError] = reactExports.useState("");
  reactExports.useEffect(() => {
    const redirect = async () => {
      if (!shortCode) {
        setError("Invalid short code");
        return;
      }
      try {
        const result = await backend.web.getShortUrl({ shortCode });
        window.location.href = result.url;
      } catch (err) {
        console.error("Redirect failed:", err);
        setError("Short URL not found");
        setTimeout(() => {
          window.location.href = "/";
        }, 3e3);
      }
    };
    redirect();
  }, [shortCode]);
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-red-600 mb-4", children: "Error" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-4", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Redirecting to homepage..." })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Redirecting..." })
  ] }) });
}
export {
  ShortUrlRedirect as default
};
