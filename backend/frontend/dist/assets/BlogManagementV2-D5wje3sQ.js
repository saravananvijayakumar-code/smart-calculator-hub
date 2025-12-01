import { aN as useAdminAuth, ah as backend, r as reactExports, j as jsxRuntimeExports, B as Button, aO as toast, f as Card, aC as RefreshCw, d as Clock, o as LoaderCircle, V as Input, a4 as Label, I as Dialog, J as DialogContent, K as DialogHeader, M as DialogTitle } from "./index-CK9G4vW7.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { S as Skeleton } from "./skeleton-Da8gvJ6m.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-t5L32f7o.js";
import { M as MarkdownRenderer } from "./MarkdownRenderer-C8eGtDBh.js";
import { B as Bold, I as Italic, C as Code, Q as Quote, L as List, a as ListOrdered } from "./quote-CmloZqDh.js";
import { L as Link } from "./link-C11IgQ5M.js";
import { I as Image } from "./image-CQoWEwwI.js";
import { C as CircleCheckBig } from "./circle-check-big-B8N3lfE-.js";
import { S as Settings } from "./settings-D9fvolox.js";
import { Z as Zap } from "./zap-BEhI-iJb.js";
import { P as Plus } from "./plus-Ch3Q2edn.js";
import { E as Eye } from "./eye-C-BlrwvK.js";
import { S as SquarePen } from "./square-pen-C0YFAykl.js";
import { T as Trash2 } from "./trash-2-CzCWmVW4.js";
import { S as Save } from "./save-DNawQ5RZ.js";
function useAuthenticatedBackend() {
  const { username, password, isAuthenticated } = useAdminAuth();
  if (!isAuthenticated || !username || !password) {
    return backend;
  }
  const basicAuth = btoa(`${username}:${password}`);
  return backend.with({
    auth: {
      authorization: `Basic ${basicAuth}`
    }
  });
}
const MarkdownEditor = ({
  value,
  onChange,
  height = 400,
  placeholder = "Start writing in markdown..."
}) => {
  const [activeTab, setActiveTab] = reactExports.useState("write");
  const insertMarkdown = (before, after = "", placeholder2 = "") => {
    const textarea = document.getElementById("markdown-textarea");
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const text = selectedText || placeholder2;
    const newContent = value.substring(0, start) + before + text + after + value.substring(end);
    onChange(newContent);
    setTimeout(() => {
      const newCursorPos = start + before.length + text.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
      textarea.focus();
    }, 0);
  };
  const toolbarButtons = [
    { icon: Bold, action: () => insertMarkdown("**", "**", "bold text"), title: "Bold" },
    { icon: Italic, action: () => insertMarkdown("*", "*", "italic text"), title: "Italic" },
    { icon: Code, action: () => insertMarkdown("`", "`", "code"), title: "Inline Code" },
    { icon: Quote, action: () => insertMarkdown("> ", "", "quote"), title: "Quote" },
    { icon: List, action: () => insertMarkdown("- ", "", "list item"), title: "Bullet List" },
    { icon: ListOrdered, action: () => insertMarkdown("1. ", "", "list item"), title: "Numbered List" },
    { icon: Link, action: () => insertMarkdown("[", "](url)", "link text"), title: "Link" },
    { icon: Image, action: () => insertMarkdown("![", "](url)", "alt text"), title: "Image" }
  ];
  const insertHeading = (level) => {
    const prefix = "#".repeat(level) + " ";
    insertMarkdown(prefix, "", `Heading ${level}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-gray-200 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-gray-200 bg-gray-50 p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => insertHeading(1),
            title: "Heading 1",
            className: "text-xs",
            children: "H1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => insertHeading(2),
            title: "Heading 2",
            className: "text-xs",
            children: "H2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => insertHeading(3),
            title: "Heading 3",
            className: "text-xs",
            children: "H3"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-6 bg-gray-300 mx-2" }),
        toolbarButtons.map((button, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: button.action,
            title: button.title,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(button.icon, { className: "h-4 w-4" })
          },
          index
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid grid-cols-2 w-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "write", className: "text-xs", children: "Write" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "preview", className: "text-xs", children: "Preview" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "write", className: "m-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        id: "markdown-textarea",
        value,
        onChange: (e) => onChange(e.target.value),
        placeholder,
        className: "w-full p-4 border-0 outline-none resize-none font-mono text-sm leading-relaxed",
        style: { height: `${height}px` }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "preview", className: "m-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "p-4 overflow-auto",
        style: { height: `${height}px` },
        children: value ? /* @__PURE__ */ jsxRuntimeExports.jsx(MarkdownRenderer, { content: value }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-500 italic", children: "Nothing to preview yet. Start writing in the Write tab." })
      }
    ) })
  ] }) });
};
function BlogManagementV2() {
  const { isAuthenticated } = useAdminAuth();
  const backend2 = useAuthenticatedBackend();
  const [activeTab, setActiveTab] = reactExports.useState("queue");
  const [loading, setLoading] = reactExports.useState(false);
  const [unbloggedSources, setUnbloggedSources] = reactExports.useState([]);
  const [publishedBlogs, setPublishedBlogs] = reactExports.useState([]);
  const [settings, setSettings] = reactExports.useState(null);
  const [generatingUrl, setGeneratingUrl] = reactExports.useState(null);
  const [manualSourceUrl, setManualSourceUrl] = reactExports.useState("");
  const [isGeneratingNow, setIsGeneratingNow] = reactExports.useState(false);
  const [progressStats, setProgressStats] = reactExports.useState({ remaining: 0, completed: 0, total: 0 });
  const [lastCreatedTitle, setLastCreatedTitle] = reactExports.useState(null);
  const [editingBlog, setEditingBlog] = reactExports.useState(null);
  const [editForm, setEditForm] = reactExports.useState({
    title: "",
    meta_title: "",
    meta_desc: "",
    content_md: "",
    keywords: []
  });
  const [isSaving, setIsSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (isAuthenticated) {
      loadData();
      loadProgress();
    }
  }, [isAuthenticated, activeTab]);
  const loadProgress = async () => {
    try {
      const data = await backend2.blogV2.getProgress();
      setProgressStats(data);
    } catch (err) {
      console.error("Failed to load progress", err);
    }
  };
  const loadData = async () => {
    if (activeTab === "queue") {
      await loadUnbloggedSources();
    } else if (activeTab === "published") {
      await loadPublishedBlogs();
    } else if (activeTab === "settings") {
      await loadSettings();
    }
  };
  const loadUnbloggedSources = async () => {
    try {
      setLoading(true);
      const response = await backend2.blogV2.listUnbloggedSources({ limit: 100 });
      setUnbloggedSources(response.sources);
    } catch (err) {
      toast({
        title: "Error",
        description: err.message || "Failed to load unblogged sources",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  const loadPublishedBlogs = async () => {
    try {
      setLoading(true);
      const response = await backend2.blogV2.list({
        status: "PUBLISHED",
        page: 1,
        limit: 100
      });
      setPublishedBlogs(response.blogs);
    } catch (err) {
      toast({
        title: "Error",
        description: err.message || "Failed to load published blogs",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  const loadSettings = async () => {
    try {
      setLoading(true);
      const response = await backend2.blogV2.getSettings();
      setSettings(response);
    } catch (err) {
      toast({
        title: "Error",
        description: err.message || "Failed to load settings",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  const discoverSources = async () => {
    try {
      setLoading(true);
      const response = await backend2.sources.discover();
      toast({
        title: "Success",
        description: `Discovered ${response.discovered} sources, ${response.new_sources} new`
      });
      await loadUnbloggedSources();
    } catch (err) {
      toast({
        title: "Error",
        description: err.message || "Failed to discover sources",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  const generateNow = async () => {
    try {
      setIsGeneratingNow(true);
      setLastCreatedTitle(null);
      const data = await backend2.blogV2.generateNow();
      if (data.success) {
        toast({
          title: "✅ Blog Created Successfully!",
          description: `Created: ${data.title}`
        });
        setLastCreatedTitle(data.title || null);
      } else {
        toast({
          title: "Info",
          description: data.message,
          variant: data.remaining === 0 ? "default" : "destructive"
        });
      }
      setProgressStats({
        remaining: data.remaining,
        completed: data.completed,
        total: data.remaining + data.completed
      });
      await loadData();
    } catch (err) {
      toast({
        title: "Error",
        description: err.message || "Failed to generate blog",
        variant: "destructive"
      });
    } finally {
      setIsGeneratingNow(false);
    }
  };
  const generateBlog = async (sourceUrl) => {
    try {
      setGeneratingUrl(sourceUrl);
      const response = await backend2.blogV2.generate({ source_url: sourceUrl });
      toast({
        title: "Success",
        description: `Blog generated: ${response.blog.title}`
      });
      await loadData();
      await loadProgress();
    } catch (err) {
      toast({
        title: "Error",
        description: err.message || "Failed to generate blog",
        variant: "destructive"
      });
    } finally {
      setGeneratingUrl(null);
    }
  };
  const deleteBlog = async (blogId) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      await backend2.blogV2.deleteBlog({ blog_id: blogId });
      toast({ title: "Success", description: "Blog deleted" });
      await loadData();
      await loadProgress();
    } catch (err) {
      toast({
        title: "Error",
        description: err.message || "Failed to delete blog",
        variant: "destructive"
      });
    }
  };
  const updateSettings = async (updates) => {
    try {
      const response = await backend2.blogV2.updateSettings(updates);
      setSettings(response);
      toast({ title: "Success", description: "Settings updated" });
    } catch (err) {
      toast({
        title: "Error",
        description: err.message || "Failed to update settings",
        variant: "destructive"
      });
    }
  };
  const openEditDialog = (blog) => {
    setEditingBlog(blog);
    setEditForm({
      title: blog.title,
      meta_title: blog.meta_title || "",
      meta_desc: blog.meta_desc || "",
      content_md: blog.content_md,
      keywords: blog.keywords || []
    });
  };
  const closeEditDialog = () => {
    setEditingBlog(null);
    setEditForm({
      title: "",
      meta_title: "",
      meta_desc: "",
      content_md: "",
      keywords: []
    });
  };
  const saveBlogEdit = async () => {
    if (!editingBlog) return;
    try {
      setIsSaving(true);
      await backend2.blogV2.update({
        blog_id: editingBlog.id,
        title: editForm.title,
        meta_title: editForm.meta_title,
        meta_desc: editForm.meta_desc,
        content_md: editForm.content_md,
        keywords: editForm.keywords
      });
      toast({ title: "Success", description: "Blog updated successfully" });
      closeEditDialog();
      await loadPublishedBlogs();
    } catch (err) {
      toast({
        title: "Error",
        description: err.message || "Failed to update blog",
        variant: "destructive"
      });
    } finally {
      setIsSaving(false);
    }
  };
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-slate-600", children: "Please log in to access blog management" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold", children: "Blog Management v2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: loadProgress, variant: "outline", size: "sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 mr-2" }),
          "Refresh"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: discoverSources, disabled: loading, variant: "outline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 mr-2" }),
          "Discover Sources"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-green-700", children: "✅ Completed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-green-900", children: progressStats.completed })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-10 h-10 text-green-600 opacity-50" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-orange-700", children: "🕒 Waiting" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-orange-900", children: progressStats.remaining })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-10 h-10 text-orange-600 opacity-50" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-blue-700", children: "📊 Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-blue-900", children: progressStats.total })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(List, { className: "w-10 h-10 text-blue-600 opacity-50" })
      ] }) })
    ] }),
    lastCreatedTitle && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-4 bg-green-50 border-green-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-green-800 font-medium", children: [
      "✅ Last Created: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: lastCreatedTitle })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 border-b", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setActiveTab("queue"),
          className: `px-4 py-2 font-medium ${activeTab === "queue" ? "border-b-2 border-blue-500 text-blue-600" : "text-slate-600"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(List, { className: "w-4 h-4 inline mr-2" }),
            "Queue (",
            unbloggedSources.length,
            ")"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setActiveTab("published"),
          className: `px-4 py-2 font-medium ${activeTab === "published" ? "border-b-2 border-blue-500 text-blue-600" : "text-slate-600"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 inline mr-2" }),
            "Published (",
            publishedBlogs.length,
            ")"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setActiveTab("settings"),
          className: `px-4 py-2 font-medium ${activeTab === "settings" ? "border-b-2 border-blue-500 text-blue-600" : "text-slate-600"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4 inline mr-2" }),
            "Settings"
          ]
        }
      )
    ] }),
    activeTab === "queue" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xl text-purple-900 mb-2", children: "⚡ Quick Generate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-purple-700", children: "Generate a blog post for the next pending page in one click" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: generateNow,
            disabled: isGeneratingNow || progressStats.remaining === 0,
            size: "lg",
            className: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
            children: isGeneratingNow ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 mr-2 animate-spin" }),
              "Generating..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 mr-2" }),
              "Generate Now"
            ] })
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-4", children: "Generate Blog Manually" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Enter source URL (e.g., /calculator/bmi)",
              value: manualSourceUrl,
              onChange: (e) => setManualSourceUrl(e.target.value)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => {
                if (manualSourceUrl) {
                  generateBlog(manualSourceUrl);
                  setManualSourceUrl("");
                }
              },
              disabled: !manualSourceUrl || !!generatingUrl,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
                "Generate Now"
              ]
            }
          )
        ] })
      ] }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full" }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        unbloggedSources.map((source) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: source.title || source.source_url }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500", children: source.source_url }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "mt-1", children: source.kind })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => generateBlog(source.source_url),
              disabled: generatingUrl === source.source_url,
              size: "sm",
              children: generatingUrl === source.source_url ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }),
                "Generating..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
                "Generate"
              ] })
            }
          )
        ] }) }, source.id)),
        unbloggedSources.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600", children: "All sources have been blogged!" }) })
      ] })
    ] }),
    activeTab === "published" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full" }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      publishedBlogs.map((blog) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: blog.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-slate-500", children: [
            "/blog/",
            blog.slug
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { children: blog.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: blog.kind }),
            blog.published_at && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-500", children: new Date(blog.published_at).toLocaleDateString() })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => window.open(`/blog/${blog.slug}`, "_blank"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => openEditDialog(blog),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "destructive",
              size: "sm",
              onClick: () => deleteBlog(blog.id),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }) }, blog.id)),
      publishedBlogs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600", children: "No published blogs yet" }) })
    ] }) }),
    activeTab === "settings" && settings && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Default Tone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: settings.default_tone,
            onChange: (e) => setSettings({ ...settings, default_tone: e.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Default Model" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: settings.default_model,
            onChange: (e) => setSettings({ ...settings, default_model: e.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Schedule Hour (Sydney time)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "number",
            min: "0",
            max: "23",
            value: settings.schedule_hour,
            onChange: (e) => setSettings({ ...settings, schedule_hour: parseInt(e.target.value) })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            id: "enabled",
            checked: settings.enabled,
            onChange: (e) => setSettings({ ...settings, enabled: e.target.checked })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "enabled", children: "Enable Daily Cron Job" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => updateSettings(settings), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 mr-2" }),
        "Save Settings"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!editingBlog, onOpenChange: (open) => !open && closeEditDialog(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-4xl max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Edit Blog Post" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-title", children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "edit-title",
              value: editForm.title,
              onChange: (e) => setEditForm({ ...editForm, title: e.target.value }),
              placeholder: "Blog title"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-meta-title", children: "Meta Title (SEO)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "edit-meta-title",
              value: editForm.meta_title,
              onChange: (e) => setEditForm({ ...editForm, meta_title: e.target.value }),
              placeholder: "SEO meta title"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-meta-desc", children: "Meta Description (SEO)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "edit-meta-desc",
              value: editForm.meta_desc,
              onChange: (e) => setEditForm({ ...editForm, meta_desc: e.target.value }),
              placeholder: "SEO meta description"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-keywords", children: "Keywords (comma-separated)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "edit-keywords",
              value: editForm.keywords.join(", "),
              onChange: (e) => setEditForm({
                ...editForm,
                keywords: e.target.value.split(",").map((k) => k.trim()).filter(Boolean)
              }),
              placeholder: "keyword1, keyword2, keyword3"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Content (Markdown)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            MarkdownEditor,
            {
              value: editForm.content_md,
              onChange: (content) => setEditForm({ ...editForm, content_md: content }),
              height: 500,
              placeholder: "Write your blog content in markdown..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: closeEditDialog,
              disabled: isSaving,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: saveBlogEdit,
              disabled: isSaving,
              children: isSaving ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }),
                "Saving..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4 mr-2" }),
                "Save Changes"
              ] })
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
export {
  BlogManagementV2 as default
};
