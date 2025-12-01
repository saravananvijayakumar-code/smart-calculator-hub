import { u as useParams, r as reactExports, ag as backend, j as jsxRuntimeExports, L as Link } from "./index-C_OXA6OQ.js";
import { L as LoaderCircle } from "./loader-circle-BYW7QwsU.js";
import { A as ArrowLeft } from "./arrow-left-C2wP0iAx.js";
function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (slug) {
      loadPost();
    }
  }, [slug]);
  const loadPost = async () => {
    if (!slug) return;
    try {
      setLoading(true);
      const data = await backend.blog.get({ slug });
      setPost(data);
    } catch (err) {
      setError("Blog post not found");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 animate-spin text-indigo-600" }) });
  }
  if (error || !post) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/blog",
          className: "inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
            "Back to Blog"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded", children: error })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/blog",
        className: "inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
          "Back to Blog"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-white rounded-lg shadow-sm p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: post.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-sm text-gray-500 mb-8 pb-8 border-b", children: [
        post.author && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.author }),
        post.author && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(post.created_at).toLocaleDateString() })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-lg max-w-none", children: post.content.split("\n").map((paragraph, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: paragraph }, index)) })
    ] })
  ] }) });
}
export {
  BlogPostPage as default
};
