import { n as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button, u as useParams, aL as useNavigate, ag as backend } from "./index-C_OXA6OQ.js";
import { T as Textarea } from "./textarea-CuxlogY6.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-BNSAX0su.js";
import { M as MarkdownRenderer } from "./MarkdownRenderer-9_ZyhXa8.js";
import { B as Bold, I as Italic, C as Code, Q as Quote, L as List, a as ListOrdered } from "./quote-BnYFmD2n.js";
import { L as Link } from "./link-DxXhzsoi.js";
import { I as Image } from "./image-B1a6hbSu.js";
import { T as Type } from "./type-C9uKE8qy.js";
import { E as Eye } from "./eye-DBVqbldf.js";
import { L as LoaderCircle } from "./loader-circle-BYW7QwsU.js";
import { A as ArrowLeft } from "./arrow-left-C2wP0iAx.js";
import { S as Save } from "./save-D6Zr6kEC.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
];
const Heading1 = createLucideIcon("heading-1", __iconNode$2);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
];
const Heading2 = createLucideIcon("heading-2", __iconNode$1);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
];
const Heading3 = createLucideIcon("heading-3", __iconNode);
const SimpleRichTextEditor = ({
  value,
  onChange,
  height = 400,
  placeholder = "Start writing..."
}) => {
  const [activeTab, setActiveTab] = reactExports.useState("write");
  const textareaRef = reactExports.useRef(null);
  const insertText = reactExports.useCallback((before, after = "", defaultText = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const textToInsert = selectedText || defaultText;
    const newText = value.substring(0, start) + before + textToInsert + after + value.substring(end);
    onChange(newText);
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + before.length + textToInsert.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  }, [value, onChange]);
  const insertLink = reactExports.useCallback(() => {
    const url = prompt("Enter URL:");
    if (url) {
      const text = prompt("Enter link text:", url);
      insertText(`[${text || url}](`, ")");
    }
  }, [insertText]);
  const insertImage = reactExports.useCallback(() => {
    const url = prompt("Enter image URL:");
    if (url) {
      const alt = prompt("Enter alt text:", "Image");
      insertText(`![${alt}](`, ")");
    }
  }, [insertText]);
  const insertCalculator = reactExports.useCallback(() => {
    const calculators = [
      "compound-interest",
      "mortgage",
      "loan",
      "investment",
      "retirement",
      "bmi",
      "percentage",
      "currency",
      "tip"
    ];
    const type = prompt(`Enter calculator type (${calculators.join(", ")}):`, "compound-interest");
    if (type && calculators.includes(type)) {
      const calculatorHtml = `

[CALCULATOR:${type}]

`;
      insertText(calculatorHtml, "");
    }
  }, [insertText]);
  const toolbarButtons = [
    { icon: Heading1, action: () => insertText("# ", "", "Heading 1"), title: "Heading 1" },
    { icon: Heading2, action: () => insertText("## ", "", "Heading 2"), title: "Heading 2" },
    { icon: Heading3, action: () => insertText("### ", "", "Heading 3"), title: "Heading 3" },
    { icon: Bold, action: () => insertText("**", "**", "bold text"), title: "Bold" },
    { icon: Italic, action: () => insertText("_", "_", "italic text"), title: "Italic" },
    { icon: Code, action: () => insertText("`", "`", "code"), title: "Inline Code" },
    { icon: Quote, action: () => insertText("> ", "", "blockquote"), title: "Quote" },
    { icon: List, action: () => insertText("- ", "", "list item"), title: "Bullet List" },
    { icon: ListOrdered, action: () => insertText("1. ", "", "list item"), title: "Numbered List" },
    { icon: Link, action: insertLink, title: "Link" },
    { icon: Image, action: insertImage, title: "Image" },
    { icon: Type, action: insertCalculator, title: "Calculator" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: (value2) => setActiveTab(value2), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b bg-gray-50 px-3 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: toolbarButtons.map((button, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "ghost",
          size: "sm",
          onClick: button.action,
          title: button.title,
          className: "h-8 w-8 p-0",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(button.icon, { className: "h-4 w-4" })
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "h-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "write", className: "text-xs", children: "Write" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "preview", className: "text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3 w-3 mr-1" }),
          "Preview"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "write", className: "m-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Textarea,
      {
        ref: textareaRef,
        value,
        onChange: (e) => onChange(e.target.value),
        placeholder,
        className: "border-0 rounded-none resize-none focus-visible:ring-0",
        style: { height }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "preview", className: "m-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "p-4 prose prose-sm max-w-none overflow-auto",
        style: { height },
        children: value ? /* @__PURE__ */ jsxRuntimeExports.jsx(MarkdownRenderer, { content: value }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 italic", children: "Nothing to preview yet..." })
      }
    ) })
  ] }) });
};
function BlogEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === "new";
  const [title, setTitle] = reactExports.useState("");
  const [slug, setSlug] = reactExports.useState("");
  const [content, setContent] = reactExports.useState("");
  const [excerpt, setExcerpt] = reactExports.useState("");
  const [author, setAuthor] = reactExports.useState("");
  const [published, setPublished] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [saving, setSaving] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (!isNew && id) {
      loadPost();
    }
  }, [id]);
  const loadPost = async () => {
    try {
      setLoading(true);
      const post = await backend.blog.get({ slug: id });
      setTitle(post.title);
      setSlug(post.slug);
      setContent(post.content);
      setExcerpt(post.excerpt || "");
      setAuthor(post.author || "");
      setPublished(post.published);
    } catch (err) {
      setError("Failed to load blog post");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const generateSlug = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  };
  const handleTitleChange = (value) => {
    setTitle(value);
    if (isNew && !slug) {
      setSlug(generateSlug(value));
    }
  };
  const handleSave = async () => {
    if (!title || !slug || !content) {
      setError("Title, slug, and content are required");
      return;
    }
    try {
      setSaving(true);
      setError("");
      if (isNew) {
        await backend.blog.create({
          title,
          slug,
          content,
          excerpt: excerpt || void 0,
          author: author || void 0,
          published
        });
      } else {
        await backend.blog.update({
          slug: id,
          title,
          content,
          excerpt: excerpt || void 0,
          author: author || void 0,
          published
        });
      }
      navigate("/admin/blog");
    } catch (err) {
      setError(err.message || "Failed to save post");
      console.error(err);
    } finally {
      setSaving(false);
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 animate-spin text-indigo-600" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50 py-8 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => navigate("/admin/blog"),
        className: "inline-flex items-center text-indigo-600 hover:text-indigo-700",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
          "Back to Blog Management"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-6", children: isNew ? "New Blog Post" : "Edit Blog Post" }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Title *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: title,
              onChange: (e) => handleTitleChange(e.target.value),
              className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent",
              placeholder: "Enter post title"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Slug *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: slug,
              onChange: (e) => setSlug(e.target.value),
              className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent",
              placeholder: "post-url-slug"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Excerpt" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: excerpt,
              onChange: (e) => setExcerpt(e.target.value),
              rows: 3,
              className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent",
              placeholder: "Brief description"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Content *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SimpleRichTextEditor,
            {
              value: content,
              onChange: setContent,
              height: 500,
              placeholder: "Write your post content here..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Author" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: author,
              onChange: (e) => setAuthor(e.target.value),
              className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent",
              placeholder: "Author name"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              id: "published",
              checked: published,
              onChange: (e) => setPublished(e.target.checked),
              className: "w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "published", className: "ml-2 text-sm text-gray-700", children: "Published" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleSave,
            disabled: saving,
            className: "inline-flex items-center px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",
            children: [
              saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4 mr-2" }),
              saving ? "Saving..." : "Save Post"
            ]
          }
        ) })
      ] })
    ] })
  ] }) });
}
export {
  BlogEditor as default
};
