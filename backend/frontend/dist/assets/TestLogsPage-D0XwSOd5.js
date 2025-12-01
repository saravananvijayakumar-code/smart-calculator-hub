import { r as reactExports, Q as useToast, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, k as CardContent, B as Button, a5 as Info, q as TriangleAlert } from "./index-CK9G4vW7.js";
import { B as Bug } from "./bug-B6sgviFS.js";
import { C as CircleAlert } from "./circle-alert-DCAQyr8M.js";
function TestLogsPage() {
  const [loading, setLoading] = reactExports.useState(false);
  const { toast } = useToast();
  const createTestLog = async (level) => {
    setLoading(true);
    try {
      toast({
        title: "Error",
        description: "Logs service not implemented",
        variant: "destructive"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to create log: ${error.message}`,
        variant: "destructive"
      });
      console.error("Failed to create log:", error);
    } finally {
      setLoading(false);
    }
  };
  const createComponentError = () => {
    throw new Error("Test error from component - this should be caught by ErrorBoundary");
  };
  const createApiError = async () => {
    setLoading(true);
    try {
      toast({
        title: "Info",
        description: "Test API error - service not fully implemented"
      });
    } catch (error) {
      console.error("Expected API error:", error);
      toast({
        title: "Expected Error Logged",
        description: "This API error was intentional and has been logged"
      });
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto p-6 max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Logging System Test Page" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "Create Test Logs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => createTestLog(),
              disabled: loading,
              variant: "outline",
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bug, { className: "w-4 h-4" }),
                "Debug"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => createTestLog(),
              disabled: loading,
              className: "flex items-center gap-2 bg-blue-600 hover:bg-blue-700",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-4 h-4" }),
                "Info"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => createTestLog(),
              disabled: loading,
              className: "flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4" }),
                "Warning"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => createTestLog(),
              disabled: loading,
              className: "flex items-center gap-2 bg-red-600 hover:bg-red-700",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4" }),
                "Error"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => createTestLog(),
              disabled: loading,
              className: "flex items-center gap-2 bg-red-900 hover:bg-red-950",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4" }),
                "Critical"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "Error Boundary Tests" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: createComponentError,
              variant: "destructive",
              className: "w-full",
              children: "Throw Component Error (ErrorBoundary Test)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: createApiError,
              variant: "outline",
              disabled: loading,
              className: "w-full",
              children: "Trigger API Error (useErrorHandler Test)"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: "View Logs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: () => window.location.href = "/admin/logs",
            className: "w-full bg-purple-600 hover:bg-purple-700",
            children: "Go to Admin Logs Page"
          }
        )
      ] })
    ] })
  ] }) });
}
export {
  TestLogsPage
};
