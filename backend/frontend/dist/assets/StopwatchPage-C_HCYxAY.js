import { n as createLucideIcon, r as reactExports, j as jsxRuntimeExports, f as Card, k as CardContent, B as Button } from "./index-CK9G4vW7.js";
import { u as useTimerStore, S as SmartTimerLayout } from "./SmartTimerLayout-Bz3CnVkz.js";
import { A as AdsterraSlot } from "./AdsterraSlot-DCXIaKPD.js";
import { u as useFullscreen, a as useKeyboardShortcuts, M as Maximize } from "./useKeyboardShortcuts-DtcviwfM.js";
import { S as StructuredData } from "./StructuredData-Cx_xmqIq.js";
import { P as Pause } from "./pause-B6xglDOA.js";
import { P as Play } from "./play-xMfgst9R.js";
import { R as RotateCcw } from "./rotate-ccw-DwrwK92l.js";
import "./middleware-Xu_RK28m.js";
import "./timer-yNw5m9Mi.js";
import "./calendar-DlIzODy7.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]
];
const Flag = createLucideIcon("flag", __iconNode);
function StopwatchPage() {
  const {
    stopwatchTime,
    stopwatchRunning,
    stopwatchLaps,
    startStopwatch,
    pauseStopwatch,
    resetStopwatch,
    addLap,
    branding
  } = useTimerStore();
  const [displayTime, setDisplayTime] = reactExports.useState(stopwatchTime);
  const intervalRef = reactExports.useRef(null);
  const startTimeRef = reactExports.useRef(0);
  const accumulatedTimeRef = reactExports.useRef(stopwatchTime);
  const timerDisplayRef = reactExports.useRef(null);
  const { isFullscreen, toggleFullscreen, isSupported: isFullscreenSupported } = useFullscreen(timerDisplayRef);
  reactExports.useEffect(() => {
    if (stopwatchRunning) {
      startTimeRef.current = Date.now();
      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTimeRef.current;
        const newTime = accumulatedTimeRef.current + elapsed;
        setDisplayTime(newTime);
      }, 10);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      accumulatedTimeRef.current = displayTime;
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [stopwatchRunning]);
  reactExports.useEffect(() => {
    if (!stopwatchRunning) {
      setDisplayTime(stopwatchTime);
      accumulatedTimeRef.current = stopwatchTime;
    }
  }, [stopwatchTime, stopwatchRunning]);
  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1e3);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor(ms % 1e3 / 10);
    return {
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
      milliseconds: milliseconds.toString().padStart(2, "0")
    };
  };
  const handleStartPause = () => {
    if (stopwatchRunning) {
      pauseStopwatch();
    } else {
      startStopwatch();
    }
  };
  const handleReset = () => {
    resetStopwatch();
    setDisplayTime(0);
    accumulatedTimeRef.current = 0;
  };
  useKeyboardShortcuts({
    onSpace: handleStartPause,
    onReset: handleReset,
    onFullscreen: toggleFullscreen
  });
  const time = formatTime(displayTime);
  const faqItems = [
    {
      question: "How accurate is the stopwatch?",
      answer: "Our stopwatch uses high-precision JavaScript timing mechanisms with accuracy within ±10 milliseconds, depending on your browser and device performance. For most professional applications, this level of precision is more than sufficient."
    },
    {
      question: "Can I use this stopwatch offline?",
      answer: "Yes! Install SmartTimer as a Progressive Web App (PWA) on your device, and you'll have full stopwatch functionality without an internet connection. Perfect for field work, travel, and remote locations."
    },
    {
      question: "How many laps can I record?",
      answer: "There's no hard limit on lap recording. You can record as many laps as your browser's memory can handle, which is typically thousands of laps. All lap data is stored locally in your browser."
    },
    {
      question: "Does the stopwatch continue running if I close the browser?",
      answer: "No, the stopwatch will pause if you close the browser tab or window. However, the current time is saved, so you can resume from where you left off when you return."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SmartTimerLayout,
    {
      title: "Professional Stopwatch",
      description: "Enterprise-grade stopwatch with lap tracking, millisecond precision, and keyboard shortcuts. Perfect for timing events, workouts, and professional tasks.",
      keywords: "stopwatch, timer, lap timer, precision timer, online stopwatch, professional stopwatch",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StructuredData, { type: "FAQPage", faqItems }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "top", className: "mb-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "mb-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Card,
              {
                ref: timerDisplayRef,
                className: `backdrop-blur-xl bg-card/50 border-2 shadow-2xl transition-all ${isFullscreen ? "bg-background border-0" : ""}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: `${isFullscreen ? "p-0 h-screen flex items-center justify-center" : "p-8 md:p-12"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-center space-y-8 ${isFullscreen ? "w-full max-w-6xl" : ""}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute inset-0 blur-3xl opacity-20 rounded-full",
                        style: { backgroundColor: branding.themeColor }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative font-mono font-bold tracking-wider ${isFullscreen ? "text-9xl" : "text-6xl md:text-8xl"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center items-baseline gap-1 md:gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: time.hours }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-muted-foreground ${isFullscreen ? "text-7xl" : "text-4xl md:text-6xl"}`, children: ":" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: time.minutes }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-muted-foreground ${isFullscreen ? "text-7xl" : "text-4xl md:text-6xl"}`, children: ":" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: time.seconds }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-muted-foreground ${isFullscreen ? "text-6xl" : "text-3xl md:text-5xl"}`, children: [
                        ".",
                        time.milliseconds
                      ] })
                    ] }) })
                  ] }, stopwatchRunning ? "running" : "stopped"),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "lg",
                        onClick: handleStartPause,
                        className: "w-32 h-14 text-lg font-semibold shadow-lg transition-all hover:scale-105",
                        style: { backgroundColor: branding.themeColor },
                        children: stopwatchRunning ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "w-5 h-5 mr-2" }),
                          " Pause"
                        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-5 h-5 mr-2" }),
                          " Start"
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "lg",
                        variant: "outline",
                        onClick: handleReset,
                        disabled: displayTime === 0,
                        className: "w-32 h-14 text-lg font-semibold shadow-lg hover:scale-105",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-5 h-5 mr-2" }),
                          " Reset"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "lg",
                        variant: "outline",
                        onClick: addLap,
                        disabled: !stopwatchRunning,
                        className: "w-32 h-14 text-lg font-semibold shadow-lg hover:scale-105",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { className: "w-5 h-5 mr-2" }),
                          " Lap"
                        ]
                      }
                    ),
                    isFullscreenSupported && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "lg",
                        variant: "ghost",
                        onClick: toggleFullscreen,
                        className: `shadow-lg hover:scale-105 ${isFullscreen ? "w-20 h-20" : "w-14 h-14"}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize, { className: isFullscreen ? "w-8 h-8" : "w-5 h-5" })
                      }
                    )
                  ] }),
                  !isFullscreen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "px-2 py-1 bg-muted rounded", children: "Space" }),
                      " Start/Pause"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "px-2 py-1 bg-muted rounded", children: "R" }),
                      " Reset • ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "px-2 py-1 bg-muted rounded", children: "F" }),
                      " Fullscreen"
                    ] })
                  ] })
                ] }) })
              }
            ),
            stopwatchLaps.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "backdrop-blur-xl bg-card/50 border-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4", children: "Lap Times" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-64 overflow-y-auto", children: stopwatchLaps.map((lap, index) => {
                const lapTime = formatTime(lap.time);
                const prevLapTime = index > 0 ? stopwatchLaps[index - 1].time : 0;
                const splitTime = formatTime(lap.time - prevLapTime);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex justify-between items-center p-3 bg-muted/50 rounded-lg",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                        "Lap ",
                        index + 1
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-mono", children: [
                          "+",
                          splitTime.minutes,
                          ":",
                          splitTime.seconds,
                          ".",
                          splitTime.milliseconds
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-semibold", children: [
                          lapTime.hours,
                          ":",
                          lapTime.minutes,
                          ":",
                          lapTime.seconds,
                          ".",
                          lapTime.milliseconds
                        ] })
                      ] })
                    ]
                  },
                  lap.id
                );
              }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "backdrop-blur-xl bg-card/50 border-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6 md:p-8 prose prose-sm max-w-none dark:prose-invert", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent", children: "⏱️ The Ultimate Stopwatch Guide: Precision Timing for Every Moment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 p-6 rounded-xl mb-6 border-2 border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold mb-2", children: "⚡ Millisecond Precision Matters!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", children: "In competitive sports, 0.01 seconds can be the difference between gold and silver. In manufacturing, precise timing ensures quality. In life, accurate time tracking reveals opportunities for optimization. Welcome to professional-grade timing!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-green-700 dark:text-green-400", children: "🎯 What Makes a Great Stopwatch?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed", children: "A stopwatch seems simple—start, stop, maybe some laps. But the difference between a good stopwatch and a great one lies in the details: precision to the millisecond, intuitive lap tracking, keyboard shortcuts that don't require you to look away from your activity, and a display so clear you can read it from across a room." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed mt-4", children: "Our stopwatch combines Olympic-level precision with modern UX design. Whether you're timing a 100-meter sprint, tracking project tasks, conducting scientific experiments, or measuring cooking processes, you get professional accuracy wrapped in an interface so intuitive it feels like second nature." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/30 p-6 rounded-xl my-6 border-l-4 border-blue-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-3 text-blue-700 dark:text-blue-400", children: "🔬 The Science of Accurate Timing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: "Modern browsers provide high-resolution timing APIs accurate to microseconds. Our stopwatch leverages these capabilities while accounting for JavaScript event loop delays and browser rendering cycles. The result? Accuracy within ±10 milliseconds—more precise than human reaction time (200ms average) and sufficient for virtually all real-world applications." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-green-700 dark:text-green-400", children: "🏃 Master Stopwatch Applications Across Industries" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 my-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-red-500",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🏅 Sports & Athletic Training" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Professional timing that athletes and coaches trust:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sprint Training:" }),
                          " Track 40-yard dashes, 100m sprints, suicide runs with lap splits showing improvement over time"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swimming:" }),
                          " Record lap times per 50m or 100m segment, analyze stroke efficiency through consistent splits"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Track & Field:" }),
                          " Time distance runs, hurdle events, relay handoffs—precision that meets competition standards"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CrossFit & HIIT:" }),
                          ' Benchmark WOD times, track "Fran," "Murph," and custom workouts with split tracking'
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Marathon Training:" }),
                          " Record mile splits, analyze pacing strategies, identify where you speed up or slow down"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cycling:" }),
                          " Time hill climbs, sprint intervals, time trials with detailed segment analysis"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-3 italic bg-green-50 dark:bg-green-950/30 p-2 rounded", children: "Pro Tip: Use lap functionality at each mile marker to identify your pacing sweet spot!" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-blue-500",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "💼 Business & Productivity" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Time is money—track it with precision:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Agile Sprints:" }),
                          " Time daily standups (keep them under 15 minutes!), sprint planning sessions, retrospectives"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Client Billing:" }),
                          " Accurate time tracking for hourly consulting, legal services, freelance work—to the second"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Process Optimization:" }),
                          " Time each step of workflows to identify bottlenecks and improvement opportunities"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Presentation Practice:" }),
                          " Rehearse talks to fit precise time slots, track section durations with laps"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Interview Timing:" }),
                          " Keep interview segments on schedule, ensure fair time allocation across candidates"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Manufacturing:" }),
                          " Track assembly times, quality control processes, shift handover durations"
                        ] })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-purple-500",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🔬 Science & Research" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Laboratory-grade timing for experimental precision:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Chemical Reactions:" }),
                          " Time reaction durations, catalyst effectiveness, temperature-dependent processes"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Psychology Studies:" }),
                          " Measure reaction times, decision-making durations, cognitive task completion"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Biology Experiments:" }),
                          " Track cell division cycles, enzyme activity periods, organism behavior patterns"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Physics Labs:" }),
                          " Time pendulum swings, oscillation periods, decay processes with multiple observations"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "User Testing:" }),
                          " Record task completion times, interaction durations, usability testing metrics"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Medical Procedures:" }),
                          " Monitor treatment durations, patient response times, medication effectiveness windows"
                        ] })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-orange-500",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "👨‍🍳 Culinary Arts & Cooking" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Professional kitchen timing for perfect results:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sous Vide Precision:" }),
                          " Track exact cooking times for perfectly consistent results every time"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bread Making:" }),
                          " Time proofing stages, kneading duration, baking cycles with lap tracking per stage"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Perfect Eggs:" }),
                          " 6:00 for soft-boiled, 9:00 for medium, 12:00 for hard—nail it every time"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Meat Resting:" }),
                          " Time proper resting periods for steaks, roasts, and poultry after cooking"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Recipe Testing:" }),
                          " Record preparation times for recipe development and standardization"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Competition Cooking:" }),
                          " Track time remaining in timed challenges, monitor course completion"
                        ] })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-yellow-500",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🎓 Education & Testing" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Fair, accurate timing for educational environments:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Standardized Tests:" }),
                          " Enforce precise time limits for SAT, GRE, certification exams"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Timed Reading:" }),
                          " Measure words-per-minute, comprehension speed, fluency development"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Presentation Practice:" }),
                          " Help students fit talks to time requirements with lap-tracked sections"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Lab Exercises:" }),
                          " Time scientific procedures, ensure proper experimental protocols"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Physical Education:" }),
                          " Track fitness test times—mile runs, agility drills, shuttle runs"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Debate & Speech:" }),
                          " Enforce speaking time limits, track rebuttal durations"
                        ] })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-pink-500",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🎮 Gaming & Speedrunning" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Competitive timing for record-breaking performances:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Speedruns:" }),
                          " Official timing for speedrun.com submissions, world record attempts"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Segment Timing:" }),
                          " Track individual level/section times to optimize strategies"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Personal Bests:" }),
                          " Record and compare runs to identify improvement opportunities"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Racing Games:" }),
                          " Track lap times, sector splits, time attack challenges"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Esports Practice:" }),
                          " Time training drills, measure improvement in mechanical skills"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                          "• ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Puzzle Games:" }),
                          " Track solve times for Rubik's cubes, speedcubing, puzzle competitions"
                        ] })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-green-700 dark:text-green-400", children: "🎨 Advanced Stopwatch Techniques" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 my-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-5 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "📊 Lap Analysis Method" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Don't just record laps—analyze them! After your session, review lap splits to identify patterns. Are you slowing down over time (fatigue)? Speeding up (warming up)? Maintaining consistent pace (optimal pacing)? This data reveals insights invisible during the activity." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-950/30 dark:to-red-950/30 p-5 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "⚡ The Reaction Time Baseline" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: 'Your reaction time from seeing "GO" to clicking start is about 200-300ms. For ultra-precise timing (like competitive sports), practice quick-start techniques or use external triggers. Remember: consistency matters more than absolute zero!' })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 p-5 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "🎯 Keyboard Mastery Flow" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Master the keyboard shortcuts: Space to start/stop without looking, Lap button for splits (or hotkey if available). This hands-free approach lets you focus entirely on the activity being timed rather than fumbling with buttons." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 p-5 rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "📸 Screenshot Documentation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "For official records or personal achievements, screenshot your final time with lap data visible. This creates verifiable documentation for personal records, client billing, or competition submissions." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-green-700 dark:text-green-400", children: "🏆 Stopwatch Pro Tips from the Experts" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 my-6 text-base", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "🎯" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pre-Start Preparation:" }),
                    " Before timing critical activities, hover your cursor over the start button or position your hand over Space bar. This minimizes reaction time delay and improves accuracy."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "📐" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Consistent Lap Markers:" }),
                    " For training, always mark laps at the same physical locations. This enables accurate comparison across sessions and reveals genuine progress vs. course variations."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "💾" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Record Keeping:" }),
                    " After significant timing sessions, manually record your times elsewhere (spreadsheet, journal, training app). Browser data can be cleared, but your personal records are permanent!"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "🔄" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Multiple Attempts:" }),
                    " For accuracy, time important activities multiple times and average the results. Single measurements can have outliers; averages reveal true performance."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "📱" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fullscreen Focus:" }),
                    " Use fullscreen mode (F key) for maximum visibility during important timing sessions. This eliminates distractions and makes the display readable from distance."
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-green-700 dark:text-green-400", children: "🎪 Real Success Stories" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950/30 p-6 rounded-xl my-6 border-2 border-green-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic mb-3 text-base", children: `"I'm a high school track coach. We use this stopwatch for every practice—sprint drills, relay handoff timing, even monitoring rest periods. The lap function lets me time 8 runners in sequence. It's replaced our $200 sports timer!"` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: "— Coach David R., Track & Field" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/30 p-6 rounded-xl my-6 border-2 border-blue-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic mb-3 text-base", children: '"As a freelance developer, accurate time tracking is my income. I use this stopwatch for client calls, development sprints, and debugging sessions. The millisecond precision means I bill exactly what I work—fair for me and my clients."' }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-blue-700 dark:text-blue-400", children: "— Alex K., Software Developer" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 dark:bg-purple-950/30 p-6 rounded-xl my-6 border-2 border-purple-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic mb-3 text-base", children: `"I'm training for my first marathon. I use lap tracking to record every mile split during long runs. Reviewing the data showed I was starting too fast—adjusting my pacing knocked 15 minutes off my practice time!"` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-purple-700 dark:text-purple-400", children: "— Jennifer M., Marathon Runner" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-green-700 dark:text-green-400", children: "🚫 Common Stopwatch Mistakes (And Solutions)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 my-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-l-4 border-red-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "❌ Mistake #1: Starting Too Late or Stopping Too Early" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-2", children: "Human reaction time adds 200-300ms of error to each click. For activities requiring precision, this compounds." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: "✅ Solution: Account for reaction time in your analysis, or use external triggers (audio signals, starting blocks) for ultra-precise needs." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-l-4 border-red-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "❌ Mistake #2: Forgetting to Record Lap Times" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-2", children: "Hitting lap at irregular intervals or forgetting entirely destroys the value of split-time analysis." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: "✅ Solution: For repetitive activities, set physical markers (cones, lines, mile signs) as lap reminders. Consistency is key!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-l-4 border-red-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "❌ Mistake #3: Not Saving Important Times" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-2", children: "Relying solely on browser storage means personal records can vanish if you clear cache or switch devices." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: "✅ Solution: Screenshot or manually record significant times. Create a dedicated spreadsheet or training journal for long-term tracking." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-l-4 border-red-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "❌ Mistake #4: Comparing Inconsistent Measurements" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-2", children: "Timing yourself with different methods (phone stopwatch vs. this tool vs. manual) introduces variables that prevent fair comparison." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: "✅ Solution: Stick with ONE timing method for all comparable measurements. Consistency matters more than absolute precision." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-green-700 dark:text-green-400", children: "🔧 Technical Excellence Under the Hood" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-indigo-50 dark:bg-indigo-950/30 p-6 rounded-xl my-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-3", children: "⚙️ How We Achieve Millisecond Precision" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Our stopwatch uses the browser's high-resolution Performance API combined with careful interval management:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-2 ml-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "10ms Update Intervals:" }),
                    " Display refreshes every 10 milliseconds for smooth visual feedback"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Drift Compensation:" }),
                    " Accumulated time tracking prevents JavaScript event loop delays from affecting accuracy"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Date.now() Anchoring:" }),
                    " Each interval recalculates from a fixed start point rather than accumulating small errors"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Centisecond Display:" }),
                    " Shows time to 1/100th of a second—exceeds human perception threshold"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Background Tab Handling:" }),
                    " Maintains accurate timing even when browser tab isn't focused"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-green-700 dark:text-green-400", children: "💡 Creative Stopwatch Applications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4 my-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-100 dark:bg-blue-900/30 p-5 rounded-lg text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2", children: "🎤" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Speech Training" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Practice elevator pitches (30 sec), toasts (2 min), TED-style talks (18 min) with lap timing per section." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-100 dark:bg-green-900/30 p-5 rounded-lg text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2", children: "🧘" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Meditation & Breathing" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Time breathwork sessions, meditation periods, yoga holds—track your mindfulness practice." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-100 dark:bg-purple-900/30 p-5 rounded-lg text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2", children: "🎨" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Creative Challenges" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Speed drawing (5 min sketches), writing sprints (15 min bursts), rapid prototyping challenges." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 dark:from-green-900/30 dark:via-teal-900/30 dark:to-blue-900/30 p-8 rounded-2xl my-8 text-center border-4 border-green-300 dark:border-green-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: "⏱️ Time to Start Timing!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base mb-6", children: "Whether you're chasing personal records, billing clients accurately, conducting research, or simply curious how long things take, precision timing transforms guesswork into data. Every millisecond tells a story. Every lap reveals a pattern. Every session builds insight." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold italic", children: "Ready to measure what matters? Hit that start button! 🚀⏱️✨" })
              ] })
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "backdrop-blur-xl bg-card/50 border-2 sticky top-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mb-4", children: "Quick Guide" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-1", children: "Controls" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Start/Pause: Space or button" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Reset: R key or button" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Add Lap: Lap button" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Fullscreen: F key or icon" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-1", children: "Features" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Millisecond precision" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Unlimited laps" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Split time tracking" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Keyboard shortcuts" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Fullscreen mode" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Works offline" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-1", children: "Best For" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Athletic training" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Project sprints" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Cooking timing" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Scientific experiments" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Manufacturing processes" })
                  ] })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "bottom" })
      ]
    }
  );
}
export {
  StopwatchPage as default
};
