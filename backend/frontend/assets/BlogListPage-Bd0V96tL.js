import { r as reactExports, ag as backend, j as jsxRuntimeExports, L as Link } from "./index-C_OXA6OQ.js";
import { L as LoaderCircle } from "./loader-circle-BYW7QwsU.js";
function BlogListPage() {
  const [posts, setPosts] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState("");
  reactExports.useEffect(() => {
    loadPosts();
  }, []);
  const loadPosts = async () => {
    try {
      setLoading(true);
      const response = await backend.blog.list({ published: true, limit: 20 });
      setPosts(response.posts);
    } catch (err) {
      setError("Failed to load blog posts");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 animate-spin text-indigo-600" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-8", children: "Blog" }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4", children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: posts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-lg shadow-sm p-8 text-center text-gray-500", children: "No blog posts yet." }) : posts.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: `/blog/${post.slug}`,
        className: "block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mb-2", children: post.title }),
          post.excerpt && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-3", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [
            post.author && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.author }),
            post.author && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(post.created_at).toLocaleDateString() })
          ] })
        ]
      },
      post.id
    )) })
  ] }) });
}
export {
  BlogListPage as default
};
