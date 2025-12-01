import { r as reactExports, j as jsxRuntimeExports, B as Button, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a4 as Label, V as Input, d as Clock, L as Link, aJ as Smartphone, G as Globe } from "./index-CK9G4vW7.js";
import { u as useTimerStore, S as SmartTimerLayout, G as GitBranch } from "./SmartTimerLayout-Bz3CnVkz.js";
import { A as AutoAdSlot } from "./AutoAdSlot-DNRO9HTk.js";
import { S as Settings } from "./settings-D9fvolox.js";
import { T as Timer } from "./timer-yNw5m9Mi.js";
import { C as Calendar } from "./calendar-DlIzODy7.js";
import { Z as Zap } from "./zap-BEhI-iJb.js";
import "./middleware-Xu_RK28m.js";
import "./StructuredData-Cx_xmqIq.js";
import "./AdsterraSlot-DCXIaKPD.js";
const timerTools = [
  {
    icon: Clock,
    title: "Stopwatch",
    description: "Precision timing with lap tracking and millisecond accuracy",
    path: "/smarttimer/stopwatch",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Clock,
    title: "Countdown Timer",
    description: "Visual countdown with preset durations and custom times",
    path: "/smarttimer/countdown",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Timer,
    title: "Pomodoro",
    description: "Boost productivity with work/break cycle management",
    path: "/smarttimer/pomodoro",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: GitBranch,
    title: "Multi-Timer",
    description: "Manage multiple countdown timers simultaneously",
    path: "/smarttimer/multi-timer",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Calendar,
    title: "Event Countdown",
    description: "Count down to important dates and milestones",
    path: "/smarttimer/event",
    color: "from-indigo-500 to-violet-500"
  }
];
function SmartTimerHub() {
  const { branding, setBranding, resetBranding } = useTimerStore();
  const [logoUrl, setLogoUrl] = reactExports.useState(branding.logo || "");
  const [companyName, setCompanyName] = reactExports.useState(branding.companyName || "");
  const [themeColor, setThemeColor] = reactExports.useState(branding.themeColor);
  const [showSettings, setShowSettings] = reactExports.useState(false);
  const handleSaveBranding = () => {
    setBranding({
      logo: logoUrl,
      companyName,
      themeColor
    });
    setShowSettings(false);
  };
  const handleResetBranding = () => {
    resetBranding();
    setLogoUrl("");
    setCompanyName("");
    setThemeColor("#3b82f6");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SmartTimerLayout,
    {
      title: "Professional Timer Suite",
      description: "Enterprise-grade timing tools for professionals. Stopwatch, countdown, Pomodoro, multi-timer, and event countdown - all in one powerful suite.",
      keywords: "timer suite, professional timers, stopwatch, countdown timer, pomodoro timer, productivity tools",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Enterprise Timer Suite" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground mb-8", children: "Professional timing tools with custom branding, keyboard shortcuts, and offline support. Perfect for presentations, workouts, productivity, and time management." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "lg",
              onClick: () => setShowSettings(!showSettings),
              variant: "outline",
              className: "mb-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-5 h-5 mr-2" }),
                showSettings ? "Hide" : "Show",
                " Branding Settings"
              ]
            }
          )
        ] }),
        showSettings && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "backdrop-blur-xl bg-card/50 border-2 max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Custom Branding" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Personalize SmartTimer with your company branding" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "company-name", children: "Company Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "company-name",
                  value: companyName,
                  onChange: (e) => setCompanyName(e.target.value),
                  placeholder: "Your Company Name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "logo-url", children: "Logo URL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "logo-url",
                  value: logoUrl,
                  onChange: (e) => setLogoUrl(e.target.value),
                  placeholder: "https://example.com/logo.png"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "theme-color", children: "Theme Color" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "theme-color",
                    type: "color",
                    value: themeColor,
                    onChange: (e) => setThemeColor(e.target.value),
                    className: "w-20 h-10"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: themeColor,
                    onChange: (e) => setThemeColor(e.target.value),
                    placeholder: "#3b82f6",
                    className: "flex-1"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleSaveBranding, className: "flex-1", style: { backgroundColor: themeColor }, children: "Save Branding" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleResetBranding, variant: "outline", children: "Reset to Default" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: timerTools.map((tool, index) => {
          const Icon = tool.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: tool.path, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "backdrop-blur-xl bg-card/50 border-2 hover:border-primary/50 transition-all hover:scale-105 h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-8 h-8 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2", children: tool.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: tool.description })
          ] }) }) }) }, tool.path);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content", className: "my-12" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          { icon: Zap, title: "Keyboard Shortcuts", desc: "Control timers hands-free with Space, R, and F keys" },
          { icon: Smartphone, title: "Works Offline", desc: "Install as PWA for full offline functionality" },
          { icon: Globe, title: "Universal Access", desc: "Works on all devices - desktop, tablet, and mobile" }
        ].map((feature, i) => {
          const Icon = feature.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "backdrop-blur-xl bg-card/50 border-2 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-12 h-12 mx-auto mb-3", style: { color: branding.themeColor } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: feature.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: feature.desc })
              ] }) })
            },
            feature.title
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "backdrop-blur-xl bg-card/50 border-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8 prose prose-sm max-w-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Professional Timer Suite for Every Need" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg", children: "SmartTimer brings together five essential timing tools in one beautiful, integrated suite. Whether you're timing athletic performances, managing productivity cycles, or counting down to important events, SmartTimer delivers the precision and features you need." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4", children: "Why Choose SmartTimer?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "🎯 Professional Grade" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Built for professionals who demand accuracy, reliability, and beautiful design. Enterprise features with consumer simplicity." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "⚡ Lightning Fast" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Optimized performance with smooth animations and instant responsiveness. No lag, no delays, just precision timing." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "🎨 Custom Branding" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Add your company logo and brand colors for presentations, client meetings, and professional demonstrations." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "📱 Works Everywhere" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Responsive design works perfectly on phones, tablets, desktops, and 4K displays. Install as PWA for offline use." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4", children: "Our Timer Tools" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mt-6 mb-2", children: "Stopwatch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "High-precision stopwatch with millisecond accuracy and unlimited lap tracking. Perfect for sports timing, project tracking, and any situation requiring precise time measurement." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mt-6 mb-2", children: "Countdown Timer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Visual countdown with circular progress indicator. Quick presets (1-120 minutes) or custom durations. Audio alerts and beautiful animations keep you informed." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mt-6 mb-2", children: "Pomodoro Timer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Implement the proven Pomodoro Technique with customizable work/break cycles. Track completed cycles and boost productivity with focused time blocks." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mt-6 mb-2", children: "Multi-Timer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Run multiple countdown timers simultaneously. Perfect for cooking multiple dishes, managing parallel tasks, or coordinating team activities." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mt-6 mb-2", children: "Event Countdown" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Count down to important dates with day-hour-minute-second precision. Perfect for product launches, weddings, deadlines, and special occasions." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4", children: "Keyboard Shortcuts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "All SmartTimer tools support these universal keyboard shortcuts:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Space:" }),
              " Start/Pause timer"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "R:" }),
              " Reset timer"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "F:" }),
              " Toggle fullscreen mode"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Escape:" }),
              " Exit fullscreen"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4", children: "Perfect For" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Business Professionals:" }),
              " Meetings, presentations, time-blocking, project sprints"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Athletes & Coaches:" }),
              " Training intervals, race timing, workout sessions"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Educators:" }),
              " Classroom activities, exam timing, student exercises"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Developers:" }),
              " Pomodoro sessions, sprint planning, stand-up meetings"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Creators:" }),
              " Content creation sessions, editing blocks, project deadlines"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Home Users:" }),
              " Cooking, workouts, study sessions, meditation"
            ] })
          ] })
        ] }) })
      ] })
    }
  );
}
export {
  SmartTimerHub as default
};
