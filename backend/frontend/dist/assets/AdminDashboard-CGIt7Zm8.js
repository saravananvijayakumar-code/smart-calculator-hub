import { n as createLucideIcon, aM as useNavigate, r as reactExports, Q as useToast, aN as useAdminAuth, ah as backend, j as jsxRuntimeExports, B as Button, a3 as FileText, e as Bot, aJ as Smartphone, f as Card, k as CardContent } from "./index-CK9G4vW7.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { P as Plus } from "./plus-Ch3Q2edn.js";
import { E as Eye } from "./eye-C-BlrwvK.js";
import { S as SquarePen } from "./square-pen-C0YFAykl.js";
import { T as Trash2 } from "./trash-2-CzCWmVW4.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
];
const LogOut = createLucideIcon("log-out", __iconNode);
const AdminDashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const { toast } = useToast();
  const { logout, callAdminAPI } = useAdminAuth();
  reactExports.useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const data = await backend.blog.list({ published: void 0 });
      setPosts(data.posts);
    } catch (error) {
      console.error("Fetch error:", error);
      toast({
        title: "Error",
        description: "Failed to fetch posts",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  const handleDeletePost = async (id) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    try {
      setLoading(true);
      await callAdminAPI(`/admin/blog/${id}`, {
        method: "DELETE"
      });
      toast({
        title: "Success",
        description: "Post deleted successfully"
      });
      await fetchPosts();
    } catch (error) {
      console.error("Delete error:", error);
      toast({
        title: "Error",
        description: "Failed to delete post",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50 p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Blog Admin Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: () => navigate("/admin/blogs"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 mr-2" }),
          "Manage Posts"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: () => navigate("/admin/blogs"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-4 h-4 mr-2" }),
          "Auto-Blog"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: () => navigate("/admin/pwa-analytics"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-4 h-4 mr-2" }),
          "PWA Analytics"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: () => navigate("/admin/logs"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 mr-2" }),
          "Logs"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: logout, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4 mr-2" }),
          "Logout"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => navigate("/admin/blog/new"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
          "New Post"
        ] })
      ] })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8", children: "Loading..." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4", children: [
      posts.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: post.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: post.published ? "default" : "secondary", children: post.published ? "Published" : "Draft" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 text-sm mb-2", children: [
            "/",
            post.slug
          ] }),
          post.excerpt && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-2", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500", children: [
            "Created: ",
            new Date(post.created_at).toLocaleDateString(),
            " | Updated: ",
            new Date(post.updated_at).toLocaleDateString()
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => window.open(`/blog/${post.slug}`, "_blank"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => navigate(`/admin/blog/edit/${post.slug}`),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "destructive",
              size: "sm",
              onClick: () => handleDeletePost(post.id),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }) }) }, post.id)),
      posts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-gray-500", children: "No posts found. Create your first post!" })
    ] })
  ] }) });
};
export {
  AdminDashboard as default
};
