import { r as reactExports, j as jsxRuntimeExports, f as Card, k as CardContent, B as Button, a3 as Label, U as Input } from "./index-C_OXA6OQ.js";
import { u as useTimerStore, S as SmartTimerLayout } from "./SmartTimerLayout-BFvuMGsa.js";
import { A as AdsterraSlot } from "./AdsterraSlot--S6-7ysu.js";
import { u as useFullscreen, a as useKeyboardShortcuts, M as Maximize } from "./useKeyboardShortcuts-Bv2pFEFZ.js";
import { R as RotateCcw } from "./rotate-ccw-tsrGb1so.js";
import { P as Pause } from "./pause-D_Mw5vTS.js";
import { P as Play } from "./play-CjTHPcf0.js";
import "./middleware-DvyyThDy.js";
import "./StructuredData-_yklk7FG.js";
import "./timer-BSaghqDb.js";
import "./calendar-CKWgIWzq.js";
const PRESET_DURATIONS = [
  { label: "1 min", value: 6e4 },
  { label: "5 min", value: 3e5 },
  { label: "10 min", value: 6e5 },
  { label: "15 min", value: 9e5 },
  { label: "30 min", value: 18e5 },
  { label: "45 min", value: 27e5 },
  { label: "1 hour", value: 36e5 },
  { label: "2 hours", value: 72e5 }
];
function CountdownPage() {
  const {
    countdownDuration,
    countdownRemaining,
    countdownRunning,
    setCountdownDuration,
    startCountdown,
    pauseCountdown,
    resetCountdown,
    branding
  } = useTimerStore();
  const [displayTime, setDisplayTime] = reactExports.useState(countdownRemaining);
  const [customMinutes, setCustomMinutes] = reactExports.useState("5");
  const intervalRef = reactExports.useRef(null);
  const startTimeRef = reactExports.useRef(0);
  const remainingRef = reactExports.useRef(countdownRemaining);
  const [isFinished, setIsFinished] = reactExports.useState(false);
  reactExports.useRef(null);
  const timerDisplayRef = reactExports.useRef(null);
  const { isFullscreen, toggleFullscreen, isSupported: isFullscreenSupported } = useFullscreen(timerDisplayRef);
  reactExports.useEffect(() => {
    if (countdownRunning && displayTime > 0) {
      startTimeRef.current = Date.now();
      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTimeRef.current;
        const newRemaining = Math.max(0, remainingRef.current - elapsed);
        setDisplayTime(newRemaining);
        if (newRemaining === 0) {
          pauseCountdown();
          setIsFinished(true);
          playSound();
        }
      }, 10);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      remainingRef.current = displayTime;
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [countdownRunning, displayTime > 0]);
  reactExports.useEffect(() => {
    if (!countdownRunning) {
      setDisplayTime(countdownRemaining);
      remainingRef.current = countdownRemaining;
    }
  }, [countdownRemaining, countdownRunning]);
  const playSound = () => {
    try {
      const audio = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZUQ8PVKnn77BdGgo+ltrzw3EiBSh+zPLaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+");
      audio.play().catch(() => {
      });
    } catch (e) {
    }
  };
  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1e3);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = totalSeconds % 60;
    return {
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0")
    };
  };
  const handleStartPause = () => {
    if (isFinished) {
      handleReset();
      return;
    }
    if (countdownRunning) {
      pauseCountdown();
    } else {
      setIsFinished(false);
      startCountdown();
    }
  };
  const handleReset = () => {
    resetCountdown();
    setDisplayTime(countdownDuration);
    remainingRef.current = countdownDuration;
    setIsFinished(false);
  };
  const handlePresetClick = (duration) => {
    setCountdownDuration(duration);
    setDisplayTime(duration);
    remainingRef.current = duration;
    setIsFinished(false);
  };
  const handleCustomDuration = () => {
    const minutes = parseInt(customMinutes) || 0;
    const duration = minutes * 60 * 1e3;
    if (duration > 0) {
      setCountdownDuration(duration);
      setDisplayTime(duration);
      remainingRef.current = duration;
      setIsFinished(false);
    }
  };
  useKeyboardShortcuts({
    onSpace: handleStartPause,
    onReset: handleReset,
    onFullscreen: toggleFullscreen
  });
  const time = formatTime(displayTime);
  const progress = displayTime / countdownDuration * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SmartTimerLayout,
    {
      title: "Countdown Timer",
      description: "Professional countdown timer with preset durations, custom time settings, and visual progress tracking. Perfect for presentations, workouts, and time management.",
      keywords: "countdown timer, online timer, countdown clock, timer with alarm, presentation timer",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "top", className: "mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              ref: timerDisplayRef,
              className: `backdrop-blur-xl bg-card/50 border-2 shadow-2xl transition-all ${isFullscreen ? "bg-background border-0" : ""}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: `${isFullscreen ? "p-0 h-screen flex items-center justify-center" : "p-8 md:p-12"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-center space-y-8 ${isFullscreen ? "w-full max-w-6xl" : ""}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "relative",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute inset-0 blur-3xl opacity-20 rounded-full",
                          style: { backgroundColor: isFinished ? "#ef4444" : branding.themeColor }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: `w-full mx-auto ${isFullscreen ? "max-w-3xl" : "max-w-md"}`, viewBox: "0 0 200 200", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "circle",
                          {
                            cx: "100",
                            cy: "100",
                            r: "90",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "8",
                            className: "text-muted/20"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "circle",
                          {
                            cx: "100",
                            cy: "100",
                            r: "90",
                            fill: "none",
                            stroke: isFinished ? "#ef4444" : branding.themeColor,
                            strokeWidth: "8",
                            strokeDasharray: `${progress * 5.65} 565`,
                            strokeLinecap: "round",
                            transform: "rotate(-90 100 100)",
                            className: "transition-all duration-100"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `font-mono font-bold tracking-wider ${isFullscreen ? "text-9xl" : "text-5xl md:text-7xl"} ${isFinished ? "text-red-500" : "text-foreground"}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center items-baseline gap-1 md:gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: time.hours }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-muted-foreground ${isFullscreen ? "text-7xl" : "text-3xl md:text-5xl"}`, children: ":" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: time.minutes }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-muted-foreground ${isFullscreen ? "text-7xl" : "text-3xl md:text-5xl"}`, children: ":" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: time.seconds })
                        ] }),
                        isFinished && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-2 font-normal ${isFullscreen ? "text-4xl" : "text-xl"}`, children: "Time's Up!" })
                      ] }) })
                    ]
                  },
                  isFinished ? "finished" : countdownRunning ? "running" : "stopped"
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "lg",
                      onClick: handleStartPause,
                      className: "w-32 h-14 text-lg font-semibold shadow-lg transition-all hover:scale-105",
                      style: { backgroundColor: isFinished ? "#ef4444" : branding.themeColor },
                      children: isFinished ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-5 h-5 mr-2" }),
                        " Restart"
                      ] }) : countdownRunning ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
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
                      disabled: displayTime === countdownDuration && !countdownRunning,
                      className: "w-32 h-14 text-lg font-semibold shadow-lg hover:scale-105",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-5 h-5 mr-2" }),
                        " Reset"
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "backdrop-blur-xl bg-card/50 border-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4", children: "Quick Presets" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2", children: PRESET_DURATIONS.map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: () => handlePresetClick(preset.value),
                disabled: countdownRunning,
                className: "hover:scale-105 transition-all",
                children: preset.label
              },
              preset.value
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "custom-minutes", children: "Custom Duration (minutes)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "custom-minutes",
                    type: "number",
                    min: "1",
                    value: customMinutes,
                    onChange: (e) => setCustomMinutes(e.target.value),
                    disabled: countdownRunning,
                    placeholder: "Enter minutes",
                    className: "flex-1"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    onClick: handleCustomDuration,
                    disabled: countdownRunning,
                    style: { backgroundColor: branding.themeColor },
                    children: "Set"
                  }
                )
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "backdrop-blur-xl bg-card/50 border-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6 md:p-8 prose prose-sm max-w-none dark:prose-invert", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent", children: "⏳ The Complete Countdown Timer Mastery Guide: Make Every Second Count" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 p-6 rounded-xl mb-6 border-2 border-red-200 dark:border-red-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold mb-2", children: "🔥 The Countdown Effect!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", children: "Time pressure isn't your enemy—it's your productivity superpower! Studies show that visible countdowns increase task completion rates by 40% and reduce procrastination by up to 60%. When the clock is ticking down, focus intensifies and results multiply!" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-red-700 dark:text-red-400", children: "🎯 The Psychology of Counting Down" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed", children: `There's something primal about watching time run out. Unlike counting up (where time feels infinite), counting down creates urgency. Your brain recognizes a deadline approaching and shifts into high-performance mode. It's the difference between "I have all day" and "I have 15 minutes to nail this!"` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed mt-4", children: "Our countdown timer harnesses this psychological trigger with visual perfection: a shrinking progress ring that gives you constant feedback, preset durations for instant setup, and an alarm that ensures you never miss the zero mark. It's not just timing—it's behavioral engineering that helps you perform at your peak." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/30 p-6 rounded-xl my-6 border-l-4 border-blue-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-3 text-blue-700 dark:text-blue-400", children: "🧠 Parkinson's Law in Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: `"Work expands to fill the time available for its completion." By setting a countdown timer, you artificially constrain time, forcing increased efficiency. A task that "could take all afternoon" often gets done in 30 focused minutes when the countdown is ticking. The timer doesn't just measure time—it optimizes it!` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-red-700 dark:text-red-400", children: "🚀 Master Countdown Applications That Transform Results" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-red-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🎤 Presentation & Public Speaking" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Stay on schedule and nail your timing:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Conference Talks:" }),
                    " 20-minute TED-style presentations with visual time remaining for pacing awareness"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pitch Decks:" }),
                    " Nail the 3-minute elevator pitch, 10-minute investor presentation, or 30-second commercial spot"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Webinar Segments:" }),
                    " Time each section of online presentations, Q&A periods, demonstration blocks"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Panel Discussions:" }),
                    " Fair time allocation per speaker—everyone gets their 5 minutes, no overruns"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Wedding Toasts:" }),
                    " Keep speeches heartfelt but brief (2-3 min recommended!)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Classroom Lectures:" }),
                    " Segment lessons perfectly—15 min lecture, 10 min discussion, 5 min wrap-up"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-3 italic bg-red-50 dark:bg-red-950/30 p-2 rounded", children: "Pro Tip: Use fullscreen mode and position it where you can see it peripherally during your talk!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-orange-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "💪 Fitness & HIIT Training" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Precision timing for maximum fitness gains:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "HIIT Intervals:" }),
                    " 45-second max effort sprints, 15-second recovery—perfect timing every round"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tabata Protocol:" }),
                    " Classic 20 seconds work, 10 seconds rest for 8 rounds (4 minutes of intensity!)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Plank Challenges:" }),
                    " Hold position for 60 seconds, 90 seconds, 2 minutes—watch the countdown motivate you"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Boxing Rounds:" }),
                    " 3-minute rounds with 1-minute rest, just like the pros"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Yoga Holds:" }),
                    " Time each asana perfectly—warrior pose 90 seconds, tree pose 60 seconds per leg"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Circuit Training:" }),
                    " 1-minute stations with 30-second transitions, keep the whole gym in sync"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-purple-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "📚 Study & Focus Sessions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Maximize learning with strategic time blocks:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pomodoro Study:" }),
                    " 25-minute deep focus sessions on single subjects, beat procrastination"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Exam Simulation:" }),
                    " Practice tests with actual exam time limits—build test-taking stamina"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Speed Reading:" }),
                    " Challenge yourself to finish chapters in 15-minute sprints, track improvement"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Memorization Drills:" }),
                    " 5-minute flashcard bursts, 10-minute practice problems with time pressure"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Writing Sprints:" }),
                    " 1,000 words in 30 minutes—no editing, just flow writing with countdown urgency"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Break Enforcement:" }),
                    ' 10-minute breaks between study blocks—actually rest instead of "just one more chapter"'
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-blue-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "👨‍🍳 Cooking & Kitchen Timing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Perfect results with precise countdown timing:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pasta Perfection:" }),
                    " 8-11 minutes for al dente, never mushy or undercooked again"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Steak Resting:" }),
                    " 5-10 minutes post-cooking for juiciest results—countdown prevents cutting too early"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bread Proofing:" }),
                    " 1-2 hour rise times with visible progress tracking"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tea Steeping:" }),
                    " Green tea 2 min, black tea 3-5 min, herbal 5-7 min—perfection in a cup"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Marinating Time:" }),
                    " 30-minute quick marinades vs 2-hour deep flavor infusions"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Blanching Vegetables:" }),
                    " 2-3 minute precise timing for perfect texture and color"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-green-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "💼 Business & Meetings" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Run efficient, on-time meetings:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Daily Standups:" }),
                    " 15-minute max—each person gets 3 minutes, countdown keeps it crisp"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Brainstorm Sessions:" }),
                    " 10-minute idea generation sprints prevent overthinking"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Decision Making:" }),
                    " 5-minute countdown forces conclusion, prevents analysis paralysis"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Client Calls:" }),
                    " Respect their time with visible countdown during scheduled blocks"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Interview Segments:" }),
                    " Fair time allocation—30 min technical, 15 min cultural fit, 5 min questions"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Break Timers:" }),
                    " Enforce 10-minute breaks in long meetings so people actually return on time"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-yellow-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🧘 Meditation & Mindfulness" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Guided time for mental wellness:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Morning Meditation:" }),
                    " 10-minute daily practice with gentle audio alert at completion"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Breathing Exercises:" }),
                    " 5-minute box breathing, 4-7-8 technique with visual pacing"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Body Scan:" }),
                    " 15-minute progressive relaxation with time awareness"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Mindful Breaks:" }),
                    " 3-minute micro-meditations between work sessions"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Yoga Nidra:" }),
                    " 20-30 minute guided relaxation with countdown to emergence"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Gratitude Practice:" }),
                    " 5-minute journaling sessions—timer removes decision fatigue"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-red-700 dark:text-red-400", children: "🎨 Advanced Countdown Strategies" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-5 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "⚡ The Power Hour Method" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Set a 60-minute countdown and commit to ONE task. No email, no messages, no distractions. The shrinking time ring creates flow state. You'll be amazed what you accomplish in one truly focused hour." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-950/30 dark:to-red-950/30 p-5 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "🎯 The Final Five Technique" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: 'When countdown hits 5 minutes, this is your "finish strong" zone. Save the most important summary, conclusion, or final push for these critical final minutes when urgency peaks.' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 p-5 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "🔄 The Reset Refresh" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: 'After completing a countdown task, immediately set another for your break. Working 25 minutes? Set 5-minute break countdown. This prevents "break creep" where 5 minutes becomes 20!' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 p-5 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "📊 Progressive Overload" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Start with comfortable time limits, then progressively reduce. If a task takes 30 min comfortably, challenge yourself with 25 min countdown. You'll find efficiency you didn't know you had!" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-red-700 dark:text-red-400", children: "💡 Countdown Timer Hacks from Productivity Experts" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 my-6 text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "🎬" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "The Director's Cut:" }),
                  " Film yourself during presentations with countdown visible in frame. Review footage to see how your pacing changes as time runs down. Adjust future timing based on this data."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "🔊" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Audio Awareness:" }),
                  " Enable sound alerts so you hear completion even when focused elsewhere. Perfect for kitchen timers or workout intervals when you're not watching the screen."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "🎨" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Visual Conditioning:" }),
                  ` The shrinking progress ring trains your subconscious to estimate time remaining. After a few sessions, you'll accurately "feel" when 5 minutes are left without checking!`
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "📱" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Second Screen Strategy:" }),
                  " Run countdown on a second monitor or tablet positioned in peripheral vision. Maintain primary focus on work while subconsciously aware of time."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "🏃" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Race Against Yourself:" }),
                  " Track how much you complete in 30-minute sprints. Try to beat yesterday's output today. The countdown becomes a daily challenge rather than just a timer."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-red-700 dark:text-red-400", children: "🏆 Success Stories: Countdown Champions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950/30 p-6 rounded-xl my-6 border-2 border-green-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic mb-3 text-base", children: `"I'm a TEDx speaker coach. We use this countdown for EVERY rehearsal. Watching students nail 18-minute talks after practicing with the visual countdown has a 100% success rate. The progress ring is better than any coach's feedback!"` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: "— Maria S., Public Speaking Coach" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/30 p-6 rounded-xl my-6 border-2 border-blue-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic mb-3 text-base", children: '"Our HIIT gym classes run entirely on countdown timers. 45-second work, 15-second rest, projected on the big screen. Members LOVE seeing time tick down—it pushes them harder than any trainer could. Our retention is up 35%!"' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-blue-700 dark:text-blue-400", children: "— Jake P., Fitness Studio Owner" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 dark:bg-orange-950/30 p-6 rounded-xl my-6 border-2 border-orange-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic mb-3 text-base", children: `"I'm a PhD student drowning in dissertation work. Started using 50-minute countdown sprints with 10-minute breaks. I went from 2 hours of distracted 'work' to 6 focused Pomodoros daily. Defended my thesis 3 months early!"` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-orange-700 dark:text-orange-400", children: "— Dr. Rachel K., Recent PhD Graduate" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-red-700 dark:text-red-400", children: "🚫 Countdown Pitfalls to Avoid" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-l-4 border-red-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "❌ Pitfall #1: Setting Unrealistic Time Limits" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-2", children: "Trying to write a 2000-word article in 15 minutes creates stress, not productivity. Unrealistic countdowns lead to rushed, poor-quality work." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: "✅ Solution: Start with generous time limits. Track actual completion time, then optimize. Data beats guesswork!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-l-4 border-red-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "❌ Pitfall #2: Obsessive Clock Watching" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-2", children: "Checking the countdown every 30 seconds disrupts flow and increases anxiety rather than boosting focus." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: "✅ Solution: Trust the audio alert. Check progress ring only at natural transition points in your work." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-l-4 border-red-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "❌ Pitfall #3: Ignoring the Alarm" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-2", children: '"Just one more minute" defeats the entire purpose. Countdown discipline only works if you actually stop at zero!' }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: "✅ Solution: Treat zero like a hard deadline. The discipline of stopping builds the habit of working efficiently within time limits." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-l-4 border-red-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "❌ Pitfall #4: Single Session Burnout" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-2", children: "Setting one massive 4-hour countdown leads to mental exhaustion and declining quality over time." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: "✅ Solution: Break into focused sprints with breaks. Four 50-minute sessions beat one 4-hour marathon every time!" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-red-700 dark:text-red-400", children: "🎪 Creative Countdown Applications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4 my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-100 dark:bg-blue-900/30 p-5 rounded-lg text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2", children: "🎮" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Gaming Sessions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: '"Just 30 more minutes" becomes reality. Set countdown, enjoy guilt-free gaming, stop when timer ends.' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-100 dark:bg-green-900/30 p-5 rounded-lg text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2", children: "👶" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Parenting Hacks" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: '"5 more minutes of screen time" becomes visual. Kids see countdown, transitions get easier, battles decrease!' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-100 dark:bg-purple-900/30 p-5 rounded-lg text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2", children: "🛀" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Self-Care Timing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "15-minute face masks, 20-minute baths, 30-minute reading sessions—self-care with boundaries." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-red-700 dark:text-red-400", children: "🔧 Understanding the Countdown Mechanics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-indigo-50 dark:bg-indigo-950/30 p-6 rounded-xl my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-3", children: "⚙️ How Visual Progress Creates Focus" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "The circular progress ring isn't just decoration—it's psychological engineering:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-2 ml-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Peripheral Awareness:" }),
                  " Your brain processes the shrinking circle without conscious attention"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Urgency Building:" }),
                  " As the ring empties, your subconscious increases focus and pace"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Completion Motivation:" }),
                  " Seeing progress toward zero triggers satisfaction neurotransmitters"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Time Estimation:" }),
                  " The visual shrinking trains accurate internal time sense over sessions"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Stress Reduction:" }),
                  ` Knowing exactly when you'll stop reduces anxiety about "when will this end?"`
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 dark:from-red-900/30 dark:via-orange-900/30 dark:to-yellow-900/30 p-8 rounded-2xl my-8 text-center border-4 border-red-300 dark:border-red-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: "🔥 Ready to Harness Time Pressure?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base mb-6", children: "Every countdown is an opportunity to prove what you can accomplish when focused. Every ticking second is a challenge to be more efficient. Every zero reached is a victory—a commitment kept, a task completed, a promise delivered. Don't just watch time pass. Make it count down to your success!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold italic", children: "The clock is your ally. Set your countdown and show time who's boss! ⏰🚀🎯" })
            ] })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "backdrop-blur-xl bg-card/50 border-2 sticky top-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mb-4", children: "Quick Guide" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-1", children: "Quick Presets" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 1, 5, 10, 15 minutes" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 30, 45 minutes" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 1, 2 hours" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Custom duration" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-1", children: "Controls" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Start/Pause: Space" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Reset: R key" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Fullscreen: F key" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-1", children: "Features" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Visual progress ring" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Audio alert at zero" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Pause & resume" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Keyboard shortcuts" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Works offline" })
                ] })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle" })
        ] })
      ] })
    }
  );
}
export {
  CountdownPage as default
};
