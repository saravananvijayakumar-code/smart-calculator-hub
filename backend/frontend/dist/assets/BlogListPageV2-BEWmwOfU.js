import { n as createLucideIcon, j as jsxRuntimeExports, aK as useSearchParams, r as reactExports, ah as backend, S as SEOHead, f as Card, L as Link, B as Button } from "./index-CK9G4vW7.js";
import { S as Skeleton } from "./skeleton-Da8gvJ6m.js";
import { A as AdsterraSlot } from "./AdsterraSlot-DCXIaKPD.js";
import { C as ChevronRight } from "./chevron-right-DQ2_hrld.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode);
function BlogAdSlot({
  position = "top",
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position }) });
}
function BlogListPageV2() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [blogs, setBlogs] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [total, setTotal] = reactExports.useState(0);
  const [totalPages, setTotalPages] = reactExports.useState(0);
  const currentPage = parseInt(searchParams.get("page") || "1");
  const limit = 20;
  reactExports.useEffect(() => {
    loadBlogs();
  }, [currentPage]);
  const loadBlogs = async () => {
    try {
      setLoading(true);
      const response = await backend.blogV2.list({
        status: "PUBLISHED",
        page: currentPage,
        limit
      });
      setBlogs(response.blogs);
      setTotal(response.total);
      setTotalPages(response.total_pages);
    } catch (err) {
      console.error("Failed to load blogs:", err);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };
  const goToPage = (page) => {
    setSearchParams({ page: page.toString() });
    window.scrollTo(0, 0);
  };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogs.map((blog, index) => ({
      "@type": "ListItem",
      position: (currentPage - 1) * limit + index + 1,
      url: `https://smartcalculatorhubs.com/blog/${blog.slug}`,
      name: blog.title
    }))
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Blog | Smart Calculator Hubs",
        description: "Explore our comprehensive guides, tips, and insights about calculators, financial tools, health metrics, and more."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-4 break-words", children: "Expert Guides & Insights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4", children: "In-depth tutorials, expert tips, and professional guides for all your calculator and tool needs" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        BlogAdSlot,
        {
          position: "top",
          className: "mb-12"
        }
      ),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: [...Array(6)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-3/4 mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-5/6 mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-24" })
      ] }, i)) }) : blogs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-12 text-center bg-white border border-gray-200 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600", children: "No blog posts available yet. Check back soon!" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: blogs.map((blog) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/blog/${blog.slug}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 h-full bg-white border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold mb-3 text-gray-900 line-clamp-2", children: blog.title }),
          blog.meta_desc && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4 line-clamp-3 flex-grow", children: blog.meta_desc }),
          blog.published_at && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mb-3", children: new Date(blog.published_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          }) }),
          blog.keywords.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-auto", children: blog.keywords.slice(0, 3).map((keyword, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-xs px-2 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded-md",
              children: keyword
            },
            i
          )) })
        ] }) }) }, blog.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BlogAdSlot,
          {
            position: "middle",
            className: "my-12"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          BlogAdSlot,
          {
            position: "bottom",
            className: "mt-8"
          }
        ),
        totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              onClick: () => goToPage(currentPage - 1),
              disabled: currentPage === 1,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4 mr-2" }),
                "Previous"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: [...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            if (page === 1 || page === totalPages || page >= currentPage - 2 && page <= currentPage + 2) {
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: page === currentPage ? "default" : "outline",
                  onClick: () => goToPage(page),
                  className: "w-10 h-10",
                  children: page
                },
                page
              );
            } else if (page === currentPage - 3 || page === currentPage + 3) {
              return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "..." }, page);
            }
            return null;
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              onClick: () => goToPage(currentPage + 1),
              disabled: currentPage === totalPages,
              children: [
                "Next",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 ml-2" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 text-center text-sm text-gray-600", children: [
          "Showing ",
          (currentPage - 1) * limit + 1,
          "-",
          Math.min(currentPage * limit, total),
          " of ",
          total,
          " posts"
        ] })
      ] })
    ] }) })
  ] });
}
export {
  BlogListPageV2 as default
};
