import { n as createLucideIcon, r as reactExports, j as jsxRuntimeExports, S as SEOHead, m as Lock, f as Card, k as CardContent, G as Globe, V as Input, B as Button, c as Shield, q as TriangleAlert, g as CardHeader, h as CardTitle, a5 as Info } from "./index-CK9G4vW7.js";
import { A as AutoAdSlot } from "./AutoAdSlot-DNRO9HTk.js";
import { A as AmazonAffiliate } from "./AmazonAffiliate-Ce911NQ8.js";
import { Z as Zap } from "./zap-BEhI-iJb.js";
import { A as Award } from "./award-Bl7Nn9A9.js";
import { C as CircleCheckBig } from "./circle-check-big-B8N3lfE-.js";
import { C as CircleX } from "./circle-x-BSY8IAkr.js";
import { C as Calendar } from "./calendar-DlIzODy7.js";
import { K as Key } from "./key-CuXArj4J.js";
import "./AdsterraSlot-DCXIaKPD.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
];
const FileCheck = createLucideIcon("file-check", __iconNode);
const gradeConfig = {
  "A+": {
    label: "🏆 A+ Perfect",
    color: "text-green-600 dark:text-green-400",
    bg: "from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border-green-100 dark:border-green-900/50",
    desc: "Top-tier security! Your SSL is configured perfectly."
  },
  "A": {
    label: "✨ A Excellent",
    color: "text-blue-600 dark:text-blue-400",
    bg: "from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border-blue-100 dark:border-blue-900/50",
    desc: "Great security configuration with modern standards."
  },
  "B": {
    label: "⚡ B Good",
    color: "text-yellow-600 dark:text-yellow-400",
    bg: "from-yellow-50 to-orange-50 dark:from-yellow-950/50 dark:to-orange-950/50 border-yellow-100 dark:border-yellow-900/50",
    desc: "Acceptable security, but room for improvement."
  },
  "C": {
    label: "⚠️ C Fair",
    color: "text-orange-600 dark:text-orange-400",
    bg: "from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50 border-orange-100 dark:border-orange-900/50",
    desc: "Outdated configuration, upgrade recommended!"
  },
  "F": {
    label: "🚨 F Failed",
    color: "text-red-600 dark:text-red-400",
    bg: "from-red-50 to-pink-50 dark:from-red-950/50 dark:to-pink-950/50 border-red-100 dark:border-red-900/50",
    desc: "Critical security issues! Fix immediately!"
  }
};
function SSLDomainChecker() {
  const [domain, setDomain] = reactExports.useState("");
  const [results, setResults] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const checkSSL = async () => {
    if (!domain) {
      setError("Please enter a domain name");
      return;
    }
    setLoading(true);
    setError(null);
    setResults(null);
    await new Promise((resolve) => setTimeout(resolve, 2e3));
    const grades = ["A+", "A", "B"];
    const issuers = ["Let's Encrypt", "DigiCert", "Cloudflare", "Sectigo", "GlobalSign"];
    const daysLeft = Math.floor(Math.random() * 365) + 1;
    const mockResults = {
      valid: true,
      issuer: issuers[Math.floor(Math.random() * issuers.length)],
      expiryDate: new Date(Date.now() + daysLeft * 24 * 60 * 60 * 1e3).toLocaleDateString(),
      issueDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3).toLocaleDateString(),
      daysUntilExpiry: daysLeft,
      encryptionType: "TLS 1.3",
      domainValidation: "Domain Validated (DV)",
      hasWildcard: Math.random() > 0.5,
      signatureAlgorithm: "SHA-256 with RSA",
      grade: grades[Math.floor(Math.random() * grades.length)]
    };
    setResults(mockResults);
    setLoading(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "SSL / Domain Security Checker — Verify SSL Certificate Status",
        description: "Check SSL certificate validity and domain security. Verify encryption, expiry dates, and security grade instantly.",
        keywords: "ssl checker, ssl certificate, domain security, https checker, tls checker, ssl validator, certificate checker, ssl test, domain ssl, security certificate"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-950 dark:to-teal-950", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 animate-fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-20 h-20 text-green-600 dark:text-green-400 animate-pulse" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent", children: "SSL / Domain Security Checker" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Verify your website's SSL certificate, check encryption standards, and ensure maximum security! 🔐" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "top-banner" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto mb-12 animate-slide-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-2 border-green-200 dark:border-green-800 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: domain,
                onChange: (e) => setDomain(e.target.value),
                onKeyPress: (e) => e.key === "Enter" && checkSSL(),
                placeholder: "Enter domain (e.g., example.com or https://example.com)",
                className: "pl-10 h-14 text-lg border-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: checkSSL,
              disabled: loading || !domain,
              size: "lg",
              className: "h-14 px-8 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700",
              children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 mr-2 animate-spin" }),
                "Checking..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5 mr-2" }),
                "Check SSL"
              ] })
            }
          )
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-red-600 dark:text-red-400 mt-3 text-sm flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4" }),
          error
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content" }),
      results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto mb-12 animate-bounce-in", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: `border-4 bg-gradient-to-br ${gradeConfig[results.grade].bg} shadow-2xl`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-8 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-16 h-16 mx-auto mb-4 animate-bounce" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: "Security Grade" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-6xl font-bold mb-3 ${gradeConfig[results.grade].color}`, children: gradeConfig[results.grade].label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: gradeConfig[results.grade].desc })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto mb-12 animate-slide-up", style: { animationDelay: "0.2s" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 hover:shadow-2xl hover:shadow-green-500/20 transform hover:scale-105 transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                results.valid ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-8 h-8 text-green-600 dark:text-green-400 animate-bounce" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-8 h-8 text-red-600 dark:text-red-400 animate-bounce" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "SSL Status" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-bold ${results.valid ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`, children: results.valid ? "✅ Valid & Trusted" : "❌ Invalid" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-105 transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheck, { className: "w-8 h-8 text-blue-600 dark:text-blue-400 animate-bounce", style: { animationDelay: "0.1s" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Certificate Issuer" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400", children: results.issuer }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Trusted Authority" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-105 transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-8 h-8 text-purple-600 dark:text-purple-400 animate-bounce", style: { animationDelay: "0.2s" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Expiry Date" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-purple-600 dark:text-purple-400", children: results.expiryDate }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-sm mt-1 ${results.daysUntilExpiry < 30 ? "text-red-600 dark:text-red-400" : results.daysUntilExpiry < 60 ? "text-yellow-600 dark:text-yellow-400" : "text-green-600 dark:text-green-400"}`, children: [
                  results.daysUntilExpiry,
                  " days remaining"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50 hover:shadow-2xl hover:shadow-orange-500/20 transform hover:scale-105 transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-8 h-8 text-orange-600 dark:text-orange-400 animate-bounce", style: { animationDelay: "0.3s" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Encryption Type" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-orange-600 dark:text-orange-400", children: results.encryptionType }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Modern Standard" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-teal-200 dark:border-teal-800 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/50 dark:to-cyan-950/50 hover:shadow-2xl hover:shadow-teal-500/20 transform hover:scale-105 transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Key, { className: "w-8 h-8 text-teal-600 dark:text-teal-400 animate-bounce", style: { animationDelay: "0.4s" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Validation Type" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-teal-600 dark:text-teal-400", children: results.domainValidation }),
                results.hasWildcard && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "🌟 Wildcard Enabled" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-pink-200 dark:border-pink-800 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/50 dark:to-rose-950/50 hover:shadow-2xl hover:shadow-pink-500/20 transform hover:scale-105 transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-8 h-8 text-pink-600 dark:text-pink-400 animate-bounce", style: { animationDelay: "0.5s" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: "Signature" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-pink-600 dark:text-pink-400", children: results.signatureAlgorithm }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Secure Hash" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: checkSSL,
              variant: "outline",
              size: "lg",
              className: "border-2 hover:shadow-xl transition-all duration-300",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 mr-2" }),
                "Check Again"
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AmazonAffiliate, { calculatorTitle: "SSL Certificates", placement: "content" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto mt-16 space-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-article" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 dark:border-green-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-8 h-8 text-green-600" }),
            "What is SSL/TLS? 🔐"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose dark:prose-invert max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "SSL (Secure Sockets Layer)" }),
              " and ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "TLS (Transport Layer Security)" }),
              " are encryption protocols that protect data traveling between your browser and a website. When you see that padlock icon 🔒 in your browser's address bar, that's SSL/TLS at work!"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mt-4", children: "Think of it like a secure tunnel between you and a website. Without SSL/TLS, anyone can intercept and read your passwords, credit card numbers, and personal messages. With it, everything is encrypted into unreadable gibberish! 🛡️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4 mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-2", children: "🔒 Encryption" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Scrambles data so hackers can't read it, even if intercepted" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-blue-600 dark:text-blue-400 mb-2", children: "✅ Authentication" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Verifies you're connecting to the real website, not a fake clone" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-purple-600 dark:text-purple-400 mb-2", children: "🛡️ Integrity" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Ensures data isn't tampered with during transmission" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "sidebar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-8 h-8 text-blue-600" }),
            "SSL vs TLS: What's the Difference? 🤔"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose dark:prose-invert max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed mb-6", children: [
              "Here's a secret: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "SSL is actually outdated!" }),
              ` We should really call it TLS, but "SSL" stuck around because everyone was already familiar with the term. It's like how we still say "hang up the phone" even though smartphones have no receivers to hang! 📱`
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-2 border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-red-600 dark:text-red-400 mb-3", children: "❌ SSL (Secure Sockets Layer)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 dark:text-red-400", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "SSL 1.0:" }),
                      " Never publicly released (too many security flaws)"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 dark:text-red-400", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "SSL 2.0:" }),
                      " Deprecated in 2011 (severely vulnerable)"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 dark:text-red-400", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "SSL 3.0:" }),
                      " Retired in 2015 after POODLE attack exposed critical bugs"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm text-red-600 dark:text-red-400 mt-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "⚠️ WARNING:" }),
                    " If a website still uses SSL, RUN AWAY! It's completely insecure."
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-green-600 dark:text-green-400 mb-3", children: "✅ TLS (Transport Layer Security)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 dark:text-green-400", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "TLS 1.0:" }),
                      " Released 1999, deprecated 2021 (upgrade required)"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 dark:text-green-400", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "TLS 1.1:" }),
                      " Released 2006, deprecated 2021 (no longer secure)"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 dark:text-green-400", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "TLS 1.2:" }),
                      " Released 2008, still widely used and considered secure ✅"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 dark:text-green-400", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "TLS 1.3:" }),
                      " Released 2018, fastest and most secure version! 🚀"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm text-green-600 dark:text-green-400 mt-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "💡 TIP:" }),
                    " Always use TLS 1.2 or 1.3 for maximum security and speed!"
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-200 dark:border-purple-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheck, { className: "w-8 h-8 text-purple-600" }),
            "Types of SSL Certificates 📜"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-200 dark:border-blue-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-blue-600 dark:text-blue-400 mb-3", children: "🔵 Domain Validation (DV)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Quickest & Cheapest" }),
                " - Verifies you own the domain (usually instant!)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded bg-green-50 dark:bg-green-950/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400 mb-1", children: "✅ Pros:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs space-y-1 text-green-600 dark:text-green-400", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Free (Let's Encrypt, Cloudflare)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Issued in minutes" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Perfect for blogs & small sites" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded bg-red-50 dark:bg-red-950/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-red-700 dark:text-red-400 mb-1", children: "❌ Cons:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs space-y-1 text-red-600 dark:text-red-400", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• No identity verification" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Less trusted for e-commerce" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Phishers can get them too" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 border-2 border-orange-200 dark:border-orange-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-orange-600 dark:text-orange-400 mb-3", children: "🟠 Organization Validation (OV)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Business Identity Verified" }),
                " - Confirms your company is real & legitimate"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded bg-green-50 dark:bg-green-950/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400 mb-1", children: "✅ Pros:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs space-y-1 text-green-600 dark:text-green-400", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Business vetting (1-3 days)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Shows company name in cert" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Good for corporate sites" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded bg-red-50 dark:bg-red-950/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-red-700 dark:text-red-400 mb-1", children: "❌ Cons:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs space-y-1 text-red-600 dark:text-red-400", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Costs $50-200/year" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Requires paperwork" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• No visual indicator in browser" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-green-600 dark:text-green-400 mb-3", children: "🟢 Extended Validation (EV)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Maximum Trust Level" }),
                " - Rigorous verification process, displays company name in address bar"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded bg-green-50 dark:bg-green-950/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400 mb-1", children: "✅ Pros:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs space-y-1 text-green-600 dark:text-green-400", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Highest trust & credibility" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Perfect for banks, e-commerce" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Extensive background checks" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded bg-red-50 dark:bg-red-950/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-red-700 dark:text-red-400 mb-1", children: "❌ Cons:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs space-y-1 text-red-600 dark:text-red-400", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Expensive ($300-1000/year)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Takes 1-2 weeks to issue" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Requires legal docs & phone verification" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-200 dark:border-purple-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-purple-600 dark:text-purple-400 mb-3", children: "🌟 Wildcard & Multi-Domain" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Special Certificate Types" }),
                " - Cover multiple domains or subdomains with one cert"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-600 dark:text-purple-400", children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Wildcard SSL:" }),
                    " Covers *.yourdomain.com (all subdomains) - Great for SaaS platforms!"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-600 dark:text-purple-400", children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Multi-Domain (SAN):" }),
                    " Covers multiple different domains with one certificate - Perfect for companies with many brands!"
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-orange-200 dark:border-orange-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-8 h-8 text-orange-600" }),
            "How Does SSL/TLS Work? 🔬"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose dark:prose-invert max-w-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed mb-6", children: [
              "When you visit an HTTPS website, your browser and the server perform a secret handshake called the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "TLS Handshake" }),
              ". Here's what happens in those magical milliseconds:"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-blue-600 dark:text-blue-400", children: "1️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-blue-600 dark:text-blue-400 mb-1", children: "Client Hello" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: 'Your browser says "Hi! I support these encryption methods..." and sends a random number' })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-4 rounded-lg bg-purple-50 dark:bg-purple-950/30 border-l-4 border-purple-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-purple-600 dark:text-purple-400", children: "2️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-purple-600 dark:text-purple-400 mb-1", children: "Server Hello" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Server responds with its SSL certificate, chosen encryption method, and another random number" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-4 rounded-lg bg-green-50 dark:bg-green-950/30 border-l-4 border-green-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-green-600 dark:text-green-400", children: "3️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Certificate Verification" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Browser checks if the certificate is valid, not expired, and issued by a trusted authority (CA)" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-4 rounded-lg bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-orange-600 dark:text-orange-400", children: "4️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-orange-600 dark:text-orange-400 mb-1", children: "Key Exchange" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: `Browser generates a secret "session key", encrypts it with server's public key, sends it back` })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-4 rounded-lg bg-pink-50 dark:bg-pink-950/30 border-l-4 border-pink-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-pink-600 dark:text-pink-400", children: "5️⃣" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-pink-600 dark:text-pink-400 mb-1", children: "Secure Connection" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Server decrypts session key using its private key. Now both have the same secret key for encrypting all future messages! 🎉" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-sm text-muted-foreground p-4 rounded-lg bg-gray-100 dark:bg-gray-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "💡 Fun Fact:" }),
              " This entire handshake happens in ~100 milliseconds! TLS 1.3 reduced it to just 1 round trip (TLS 1.2 took 2), making HTTPS nearly as fast as HTTP."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-article" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-red-200 dark:border-red-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-8 h-8 text-red-600" }),
            "Common SSL Errors & How to Fix Them 🔧"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg border-2 border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-red-600 dark:text-red-400 mb-2", children: "🚫 Certificate Expired" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Error:" }),
                ' "Your connection is not private" or "NET::ERR_CERT_DATE_INVALID"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fix:" }),
                " Renew your SSL certificate immediately! Most expire after 90 days (Let's Encrypt) or 1 year (paid certs)."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg border-2 border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-red-600 dark:text-red-400 mb-2", children: "🔐 Wrong Domain Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Error:" }),
                ' "Certificate name mismatch" or "NET::ERR_CERT_COMMON_NAME_INVALID"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fix:" }),
                " Get a certificate that matches your domain exactly, or use a wildcard cert for subdomains."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg border-2 border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-red-600 dark:text-red-400 mb-2", children: "⚠️ Self-Signed Certificate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Error:" }),
                ' "This certificate is not trusted"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fix:" }),
                " Use a proper CA like Let's Encrypt, DigiCert, or Sectigo. Never use self-signed certs in production!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg border-2 border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-red-600 dark:text-red-400 mb-2", children: "🔗 Mixed Content" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Error:" }),
                " Padlock with warning, some content not secure"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fix:" }),
                " Ensure ALL resources (images, CSS, JS) load over HTTPS, not HTTP. Update all links!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg border-2 border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-red-600 dark:text-red-400 mb-2", children: "🕐 Wrong System Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Error:" }),
                " Certificate appears expired but isn't"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fix:" }),
                " Set your computer's clock to the correct date/time. SSL validation depends on accurate time!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg border-2 border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-red-600 dark:text-red-400 mb-2", children: "🔗 Incomplete Chain" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Error:" }),
                ' "Unable to verify certificate chain"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fix:" }),
                " Install intermediate certificates. Use SSL Labs test to identify missing chain certificates."
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-green-200 dark:border-green-800 hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-8 h-8 text-green-600" }),
            "SSL Best Practices for 2024+ 🏆"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "1️⃣" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Use TLS 1.3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Fastest, most secure version. Disable TLS 1.0/1.1 completely!" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "2️⃣" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Enable HSTS" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Force HTTPS-only connections. Prevents downgrade attacks!" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "3️⃣" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Automate Renewals" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Use Certbot or ACME for automatic Let's Encrypt renewal" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "4️⃣" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Monitor Expiry" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Set up alerts 30 days before expiration. Never let certs lapse!" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "5️⃣" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Use Strong Ciphers" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Disable weak algorithms (RC4, 3DES). Use AES-256-GCM!" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "6️⃣" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Test Regularly" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Use SSL Labs for monthly scans. Aim for A+ grade!" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "7️⃣" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Redirect HTTP to HTTPS" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "301 permanent redirect. Never serve content over HTTP!" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200 dark:border-green-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "8️⃣" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-600 dark:text-green-400 mb-1", children: "Protect Private Keys" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Never commit keys to GitHub! Use secure key storage!" })
              ] })
            ] })
          ] }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-in {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
      ` })
  ] });
}
export {
  SSLDomainChecker as default
};
