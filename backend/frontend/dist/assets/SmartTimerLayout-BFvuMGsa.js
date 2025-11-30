import { n as createLucideIcon, aQ as useLocation, j as jsxRuntimeExports, S as SEOHead, d as Clock, L as Link } from "./index-C_OXA6OQ.js";
import { c as create, p as persist, a as createJSONStorage } from "./middleware-DvyyThDy.js";
import { S as StructuredData } from "./StructuredData-_yklk7FG.js";
import { T as Timer } from "./timer-BSaghqDb.js";
import { C as Calendar } from "./calendar-CKWgIWzq.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
];
const GitBranch = createLucideIcon("git-branch", __iconNode);
const DEFAULT_BRANDING = {
  themeColor: "#3b82f6"
};
const useTimerStore = create()(
  persist(
    (set, get) => ({
      branding: DEFAULT_BRANDING,
      setBranding: (branding) => set((state) => ({
        branding: { ...state.branding, ...branding }
      })),
      resetBranding: () => set({ branding: DEFAULT_BRANDING }),
      stopwatchTime: 0,
      stopwatchRunning: false,
      stopwatchLaps: [],
      startStopwatch: () => set({ stopwatchRunning: true }),
      pauseStopwatch: () => set({ stopwatchRunning: false }),
      resetStopwatch: () => set({
        stopwatchTime: 0,
        stopwatchRunning: false,
        stopwatchLaps: []
      }),
      addLap: () => {
        const { stopwatchTime, stopwatchLaps } = get();
        const lap = {
          id: `lap_${Date.now()}`,
          time: stopwatchTime,
          timestamp: Date.now()
        };
        set({ stopwatchLaps: [...stopwatchLaps, lap] });
      },
      countdownDuration: 3e5,
      countdownRemaining: 3e5,
      countdownRunning: false,
      setCountdownDuration: (duration) => set({
        countdownDuration: duration,
        countdownRemaining: duration
      }),
      startCountdown: () => set({ countdownRunning: true }),
      pauseCountdown: () => set({ countdownRunning: false }),
      resetCountdown: () => set((state) => ({
        countdownRemaining: state.countdownDuration,
        countdownRunning: false
      })),
      pomodoroWorkDuration: 25 * 60 * 1e3,
      pomodoroBreakDuration: 5 * 60 * 1e3,
      pomodoroRemaining: 25 * 60 * 1e3,
      pomodoroRunning: false,
      pomodoroMode: "work",
      pomodoroCycles: 0,
      setPomodoroWorkDuration: (duration) => set({
        pomodoroWorkDuration: duration,
        pomodoroRemaining: duration
      }),
      setPomodoroBreakDuration: (duration) => set({
        pomodoroBreakDuration: duration
      }),
      startPomodoro: () => set({ pomodoroRunning: true }),
      pausePomodoro: () => set({ pomodoroRunning: false }),
      resetPomodoro: () => set((state) => ({
        pomodoroRemaining: state.pomodoroWorkDuration,
        pomodoroRunning: false,
        pomodoroMode: "work",
        pomodoroCycles: 0
      })),
      switchPomodoroMode: () => set((state) => {
        const newMode = state.pomodoroMode === "work" ? "break" : "work";
        const newRemaining = newMode === "work" ? state.pomodoroWorkDuration : state.pomodoroBreakDuration;
        const newCycles = newMode === "work" ? state.pomodoroCycles + 1 : state.pomodoroCycles;
        return {
          pomodoroMode: newMode,
          pomodoroRemaining: newRemaining,
          pomodoroCycles: newCycles
        };
      }),
      multiTimers: [],
      addMultiTimer: (name, duration) => {
        const timer = {
          id: `timer_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          name,
          duration,
          elapsed: 0,
          isRunning: false
        };
        set((state) => ({
          multiTimers: [...state.multiTimers, timer]
        }));
      },
      removeMultiTimer: (id) => set((state) => ({
        multiTimers: state.multiTimers.filter((t) => t.id !== id)
      })),
      startMultiTimer: (id) => set((state) => ({
        multiTimers: state.multiTimers.map(
          (t) => t.id === id ? { ...t, isRunning: true } : t
        )
      })),
      pauseMultiTimer: (id) => set((state) => ({
        multiTimers: state.multiTimers.map(
          (t) => t.id === id ? { ...t, isRunning: false } : t
        )
      })),
      resetMultiTimer: (id) => set((state) => ({
        multiTimers: state.multiTimers.map(
          (t) => t.id === id ? { ...t, elapsed: 0, isRunning: false } : t
        )
      })),
      eventDate: null,
      eventName: "",
      setEventDate: (date) => set({ eventDate: date }),
      setEventName: (name) => set({ eventName: name }),
      clearEvent: () => set({ eventDate: null, eventName: "" })
    }),
    {
      name: "smarttimer-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        branding: state.branding,
        countdownDuration: state.countdownDuration,
        pomodoroWorkDuration: state.pomodoroWorkDuration,
        pomodoroBreakDuration: state.pomodoroBreakDuration,
        eventDate: state.eventDate,
        eventName: state.eventName
      })
    }
  )
);
const timerNavItems = [
  { path: "/smarttimer", label: "Home", icon: Timer },
  { path: "/smarttimer/stopwatch", label: "Stopwatch", icon: Clock },
  { path: "/smarttimer/countdown", label: "Countdown", icon: Timer },
  { path: "/smarttimer/pomodoro", label: "Pomodoro", icon: Timer },
  { path: "/smarttimer/multi-timer", label: "Multi-Timer", icon: GitBranch },
  { path: "/smarttimer/event", label: "Event", icon: Calendar }
];
function SmartTimerLayout({ children, title, description, keywords }) {
  const location = useLocation();
  const { branding } = useTimerStore();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-background via-background to-muted/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: `${title} | SmartTimer`,
        description,
        keywords: keywords || "timer, stopwatch, countdown, pomodoro, productivity"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      StructuredData,
      {
        type: "WebApplication",
        name: `SmartTimer - ${title}`,
        description,
        url: window.location.href,
        applicationCategory: "Productivity",
        operatingSystem: "Any"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none",
          style: { backgroundColor: `${branding.themeColor}05` }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative container mx-auto px-4 py-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-3", children: [
              branding.logo && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: branding.logo,
                  alt: branding.companyName || "SmartTimer",
                  className: "h-12 w-auto object-contain"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent",
                  style: {
                    backgroundImage: `linear-gradient(to right, ${branding.themeColor}, ${branding.themeColor}99)`
                  },
                  children: branding.companyName || "SmartTimer"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "Enterprise-grade timing tools for professionals" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "w-full max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: timerNavItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "animate-in fade-in-50 slide-in-from-bottom-4",
                style: { animationDelay: `${index * 100}ms` },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: item.path,
                    className: `
                          flex items-center gap-2 px-4 py-2 rounded-lg font-medium
                          transition-all duration-300
                          ${isActive ? "bg-primary text-primary-foreground shadow-lg scale-105" : "bg-card hover:bg-accent text-muted-foreground hover:text-foreground"}
                        `,
                    style: isActive ? { backgroundColor: branding.themeColor } : {},
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: item.label })
                    ]
                  }
                )
              },
              item.path
            );
          }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "max-w-6xl mx-auto animate-in fade-in-50 zoom-in-95 duration-500",
            style: { animationDelay: "200ms" },
            children
          }
        )
      ] })
    ] })
  ] });
}
export {
  GitBranch as G,
  SmartTimerLayout as S,
  useTimerStore as u
};
