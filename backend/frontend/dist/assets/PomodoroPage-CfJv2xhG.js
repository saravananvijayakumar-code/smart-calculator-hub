import { r as reactExports, j as jsxRuntimeExports, f as Card, k as CardContent, B as Button, a3 as Label, U as Input } from "./index-C_OXA6OQ.js";
import { u as useTimerStore, S as SmartTimerLayout } from "./SmartTimerLayout-BFvuMGsa.js";
import { A as AdsterraSlot } from "./AdsterraSlot--S6-7ysu.js";
import { u as useFullscreen, a as useKeyboardShortcuts, M as Maximize } from "./useKeyboardShortcuts-Bv2pFEFZ.js";
import { B as Briefcase } from "./briefcase-K9HDyJlj.js";
import { C as Coffee } from "./coffee--BsRircb.js";
import { P as Pause } from "./pause-D_Mw5vTS.js";
import { P as Play } from "./play-CjTHPcf0.js";
import { R as RotateCcw } from "./rotate-ccw-tsrGb1so.js";
import "./middleware-DvyyThDy.js";
import "./StructuredData-_yklk7FG.js";
import "./timer-BSaghqDb.js";
import "./calendar-CKWgIWzq.js";
function PomodoroPage() {
  const {
    pomodoroWorkDuration,
    pomodoroBreakDuration,
    pomodoroRemaining,
    pomodoroRunning,
    pomodoroMode,
    pomodoroCycles,
    setPomodoroWorkDuration,
    setPomodoroBreakDuration,
    startPomodoro,
    pausePomodoro,
    resetPomodoro,
    switchPomodoroMode,
    branding
  } = useTimerStore();
  const [displayTime, setDisplayTime] = reactExports.useState(pomodoroRemaining);
  const intervalRef = reactExports.useRef(null);
  const startTimeRef = reactExports.useRef(0);
  const remainingRef = reactExports.useRef(pomodoroRemaining);
  const timerDisplayRef = reactExports.useRef(null);
  const { isFullscreen, toggleFullscreen, isSupported: isFullscreenSupported } = useFullscreen(timerDisplayRef);
  reactExports.useEffect(() => {
    if (pomodoroRunning && displayTime > 0) {
      startTimeRef.current = Date.now();
      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTimeRef.current;
        const newRemaining = Math.max(0, remainingRef.current - elapsed);
        setDisplayTime(newRemaining);
        if (newRemaining === 0) {
          pausePomodoro();
          switchPomodoroMode();
          playSound();
        }
      }, 100);
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
  }, [pomodoroRunning, displayTime > 0]);
  reactExports.useEffect(() => {
    if (!pomodoroRunning) {
      setDisplayTime(pomodoroRemaining);
      remainingRef.current = pomodoroRemaining;
    }
  }, [pomodoroRemaining, pomodoroRunning]);
  const playSound = () => {
    try {
      const audio = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZUQ8PVKnn77BdGgo+ltrzw3EiBSh+zPLaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+zPPaizsIGGS57OihUhENTKXh8bllHAU2jdXzz3oqBSl+");
      audio.play().catch(() => {
      });
    } catch (e) {
    }
  };
  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1e3);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return {
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0")
    };
  };
  const handleStartPause = () => {
    if (pomodoroRunning) {
      pausePomodoro();
    } else {
      startPomodoro();
    }
  };
  const handleReset = () => {
    resetPomodoro();
    setDisplayTime(pomodoroWorkDuration);
    remainingRef.current = pomodoroWorkDuration;
  };
  const handleWorkDurationChange = (minutes) => {
    setPomodoroWorkDuration(minutes * 60 * 1e3);
  };
  const handleBreakDurationChange = (minutes) => {
    setPomodoroBreakDuration(minutes * 60 * 1e3);
  };
  useKeyboardShortcuts({
    onSpace: handleStartPause,
    onReset: handleReset,
    onFullscreen: toggleFullscreen
  });
  const time = formatTime(displayTime);
  const progress = displayTime / (pomodoroMode === "work" ? pomodoroWorkDuration : pomodoroBreakDuration) * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SmartTimerLayout,
    {
      title: "Pomodoro Timer",
      description: "Professional Pomodoro technique timer with customizable work and break intervals. Boost productivity with proven time management methodology.",
      keywords: "pomodoro timer, productivity timer, focus timer, work break timer, time management",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "top", className: "mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              ref: timerDisplayRef,
              className: `backdrop-blur-xl bg-card/50 border-2 shadow-2xl transition-all ${isFullscreen ? "bg-background border-0" : ""}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: `${isFullscreen ? "p-0 h-screen flex items-center justify-center" : "p-8 md:p-12"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-center space-y-8 ${isFullscreen ? "w-full max-w-6xl" : ""}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex justify-center items-center gap-4 ${isFullscreen ? "mb-8" : "mb-4"}`, children: pomodoroMode === "work" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: isFullscreen ? "w-16 h-16" : "w-8 h-8", style: { color: branding.themeColor } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-bold ${isFullscreen ? "text-5xl" : "text-2xl"}`, children: "Focus Time" })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Coffee, { className: `text-green-500 ${isFullscreen ? "w-16 h-16" : "w-8 h-8"}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-bold ${isFullscreen ? "text-5xl" : "text-2xl"}`, children: "Break Time" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0 blur-3xl opacity-20 rounded-full",
                      style: { backgroundColor: pomodoroMode === "work" ? branding.themeColor : "#10b981" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: `w-full mx-auto ${isFullscreen ? "max-w-3xl" : "max-w-md"}`, viewBox: "0 0 200 200", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "90", fill: "none", stroke: "currentColor", strokeWidth: "8", className: "text-muted/20" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "circle",
                      {
                        cx: "100",
                        cy: "100",
                        r: "90",
                        fill: "none",
                        stroke: pomodoroMode === "work" ? branding.themeColor : "#10b981",
                        strokeWidth: "8",
                        strokeDasharray: `${progress * 5.65} 565`,
                        strokeLinecap: "round",
                        transform: "rotate(-90 100 100)",
                        className: "transition-all duration-100"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `font-mono font-bold tracking-wider ${isFullscreen ? "text-9xl" : "text-6xl md:text-8xl"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: time.minutes }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: ":" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: time.seconds })
                  ] }) })
                ] }, pomodoroMode),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: isFullscreen ? "text-3xl" : "text-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Completed Cycles:" }),
                  " ",
                  pomodoroCycles
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "lg",
                      onClick: handleStartPause,
                      className: "w-32 h-14 text-lg font-semibold shadow-lg transition-all hover:scale-105",
                      style: { backgroundColor: pomodoroMode === "work" ? branding.themeColor : "#10b981" },
                      children: pomodoroRunning ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "w-5 h-5 mr-2" }),
                        " Pause"
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-5 h-5 mr-2" }),
                        " Start"
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", variant: "outline", onClick: handleReset, className: "w-32 h-14 text-lg font-semibold shadow-lg hover:scale-105", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-5 h-5 mr-2" }),
                    " Reset"
                  ] }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4", children: "Settings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "work-duration", children: "Work Duration (minutes)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "work-duration",
                    type: "number",
                    min: "1",
                    defaultValue: pomodoroWorkDuration / 6e4,
                    onChange: (e) => handleWorkDurationChange(parseInt(e.target.value) || 25),
                    disabled: pomodoroRunning
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "break-duration", children: "Break Duration (minutes)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "break-duration",
                    type: "number",
                    min: "1",
                    defaultValue: pomodoroBreakDuration / 6e4,
                    onChange: (e) => handleBreakDurationChange(parseInt(e.target.value) || 5),
                    disabled: pomodoroRunning
                  }
                )
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "my-8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "backdrop-blur-xl bg-card/50 border-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6 md:p-8 prose prose-sm max-w-none dark:prose-invert", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent", children: "🍅 The Ultimate Pomodoro Technique Guide: Transform Your Productivity in 25-Minute Sprints" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl mb-6 border-2 border-purple-200 dark:border-purple-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold mb-2", children: "⚡ Did you know?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", children: "Studies show that using the Pomodoro Technique can boost your productivity by up to 300% while reducing mental fatigue. The secret? Your brain loves structured breaks!" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-400", children: "🎯 What is the Pomodoro Technique?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed", children: `Imagine unlocking superhuman focus with just a kitchen timer. That's exactly what Italian developer Francesco Cirillo discovered in the late 1980s when he used a tomato-shaped timer ("pomodoro" in Italian) to revolutionize time management. This brilliantly simple technique breaks your work into focused 25-minute intervals called "pomodoros," separated by energizing short breaks.` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed mt-4", children: "The magic isn't just in the timing—it's in the psychology. By committing to just 25 minutes of undivided attention, your brain enters a state of flow without the overwhelming pressure of marathon work sessions. It's like interval training for your mind!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/30 p-6 rounded-xl my-6 border-l-4 border-blue-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-3 text-blue-700 dark:text-blue-400", children: "🧠 The Science Behind the Timer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: "Research in cognitive psychology reveals that our brains can maintain peak concentration for approximately 20-30 minutes. The Pomodoro Technique capitalizes on this natural attention span, preventing mental fatigue while maximizing output. The strategic breaks activate your brain's default mode network, which enhances creativity and problem-solving abilities." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-400", children: "🚀 How to Master the Pomodoro Technique (Step-by-Step)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-red-500",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "Step 1: Choose Your Mission 🎯" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: 'Select ONE task to conquer. Specificity is power—instead of "work on project," try "draft introduction section" or "debug login function." The more specific, the more satisfying the completion!' })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-orange-500",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "Step 2: Set the Timer for 25 Minutes ⏱️" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: 'Hit that start button and make a commitment: these 25 minutes belong entirely to your chosen task. No emails, no phone checks, no "quick" social media peeks. Total. Laser. Focus.' })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-yellow-500",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "Step 3: Work Until the Bell Rings 💪" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Dive deep into your task. If a distraction pops into your head, jot it down for later and return to your work. The timer is your shield against interruptions and your reminder that this sprint has an end." })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-green-500",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "Step 4: Take a 5-Minute Break ☕" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "This isn't optional—it's essential! Stand up, stretch, grab water, look out a window. Let your mind wander. These breaks aren't laziness; they're strategic recovery that prevents burnout and maintains high performance." })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-blue-500",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "Step 5: Repeat and Reward 🎁" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Complete four pomodoros, then treat yourself to a longer 15-30 minute break. This is your reward for sustained excellence. Take a walk, meditate, snack, or do something completely different to recharge your mental batteries." })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-400", children: "💎 Advanced Pomodoro Strategies for Power Users" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-5 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "🎨 The Creative Pomodoro" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "For creative work, extend to 45-50 minutes to allow deeper flow states, followed by 10-15 minute breaks. Creative work needs more uninterrupted time to reach peak inspiration." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-950/30 dark:to-red-950/30 p-5 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "⚡ The Power Hour" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Stack two pomodoros with a 2-minute micro-break between them. Perfect for high-energy mornings when you're in the zone and want to maximize momentum." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 p-5 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "📊 The Task Grouping Method" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Assign specific pomodoro counts to tasks based on complexity: easy tasks = 1 pomodoro, medium = 2-3, complex = 4-6. This helps you estimate workload accurately." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 p-5 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "🔔 The Notification Blackout" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: `During pomodoros, enable Do Not Disturb mode on all devices. Train colleagues and family that you're in "focus mode" and will respond after the timer.` })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-400", children: "🌟 Real-World Success Stories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950/30 p-6 rounded-xl my-6 border-2 border-green-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic mb-3 text-base", children: `"I went from writing 500 words a day to 2,500 using Pomodoros. The timer creates urgency without anxiety. It's changed my entire writing career!"` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: "— Sarah K., Freelance Writer" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/30 p-6 rounded-xl my-6 border-2 border-blue-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic mb-3 text-base", children: '"As a software developer, I used to code for hours straight and burn out. Now I complete more features in less time with better quality. The breaks actually IMPROVE my problem-solving."' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-blue-700 dark:text-blue-400", children: "— Michael T., Senior Developer" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-400", children: "🎓 Perfect Pomodoro Applications by Field" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "💼" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Business & Office Work:" }),
                  " Email processing (1 pomodoro), report writing (3-4 pomodoros), meeting preparation (2 pomodoros), data entry (1-2 pomodoros)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "📚" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Students & Learning:" }),
                  " Reading textbook chapters (2 pomodoros), essay writing (4-6 pomodoros), problem sets (3 pomodoros), exam review (8-10 pomodoros across a day)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "🎨" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Creative Professionals:" }),
                  " Sketching (2 pomodoros), video editing (4-5 pomodoros), music composition (3-4 extended pomodoros), content creation (2-3 pomodoros)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "💻" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Programmers & Developers:" }),
                  " Bug fixing (1-2 pomodoros), feature development (4-8 pomodoros), code review (2 pomodoros), learning new frameworks (6-8 pomodoros)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "🏠" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Home & Personal:" }),
                  " Decluttering (2 pomodoros per room), meal prep (3 pomodoros), learning a language (4-6 pomodoros daily), fitness routine (modified for active breaks)"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-400", children: "🚫 Common Pomodoro Mistakes (And How to Fix Them)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-l-4 border-red-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "❌ Mistake #1: Skipping Breaks" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-2", children: `Thinking "I'm on a roll, I'll skip this break" defeats the entire purpose. Breaks prevent cognitive overload.` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: "✅ Fix: Set break alarms that are as non-negotiable as work timers. Your future focused self will thank you." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-l-4 border-red-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "❌ Mistake #2: Multitasking During Pomodoros" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-2", children: 'Checking email "real quick" or responding to messages destroys the single-task focus that makes Pomodoros effective.' }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: '✅ Fix: Keep a "distraction list" nearby. Write down interrupting thoughts and address them during breaks.' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-l-4 border-red-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "❌ Mistake #3: Choosing Vague Tasks" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-2", children: `"Work on presentation" is too broad. You'll waste pomodoro time deciding what to do.` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: '✅ Fix: Break tasks into pomodoro-sized chunks: "Create slide 1-3 of presentation" or "Research statistics for intro."' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-l-4 border-red-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "❌ Mistake #4: Rigid 25-Minute Adherence" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-2", children: "Not all tasks fit the standard timing. Deep creative work might need longer intervals." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: "✅ Fix: Customize! Try 45/15, 50/10, or even 90/20 splits for different work types. The principle matters more than the exact timing." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-400", children: "🛠️ Optimizing Your Pomodoro Environment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed mb-4", children: 'Your environment dramatically impacts Pomodoro effectiveness. Create a "focus fortress" by eliminating visual distractions, using noise-cancelling headphones or focus music, keeping water and snacks within reach (to avoid break-time tasks bleeding into work time), and positioning your timer where you can see it peripherally without obsessing over it.' }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 dark:bg-purple-950/30 p-6 rounded-xl my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-3", children: "🎵 The Perfect Pomodoro Playlist" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Music can enhance focus during Pomodoros, but choose wisely:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-2 ml-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Analytical work:" }),
                  " Classical music, lo-fi beats, or ambient soundscapes without lyrics"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Creative work:" }),
                  " Instrumental versions of familiar songs, nature sounds, or movie soundtracks"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Repetitive tasks:" }),
                  " Upbeat music with lyrics is fine—it can make mundane work more enjoyable"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Deep thinking:" }),
                  " Complete silence or white noise to minimize cognitive load"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-400", children: "📊 Tracking Your Pomodoro Progress" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed mb-4", children: "One of the most powerful aspects of the Pomodoro Technique is its built-in accountability. By tracking completed pomodoros, you gain valuable insights into your productivity patterns, estimate future tasks more accurately, identify your peak performance hours, and celebrate tangible daily achievements." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 dark:bg-yellow-950/30 p-6 rounded-xl my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-3", children: "🏆 Gamify Your Productivity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Turn Pomodoros into a rewarding game:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-2 ml-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Set daily pomodoro goals (start with 6-8 per day)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: '• Create weekly challenges ("complete 40 pomodoros this week")' }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Reward yourself after milestone achievements (10 pomodoros = favorite treat)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Track personal records and try to beat them" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Share progress with accountability partners or groups" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-400", children: "🌈 Pomodoro for Different Energy Levels" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed mb-4", children: "Not every day is created equal. Adapt your Pomodoro strategy to your energy state:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4 my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-100 dark:bg-green-900/30 p-5 rounded-lg text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2", children: "⚡" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "High Energy Days" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Standard 25/5 or power through with 45/10 splits. Tackle your most challenging tasks first." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-100 dark:bg-yellow-900/30 p-5 rounded-lg text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2", children: "😌" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Medium Energy Days" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Classic 25/5 rhythm. Mix challenging and easier tasks. Maintain consistent pace without pushing too hard." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-100 dark:bg-orange-900/30 p-5 rounded-lg text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2", children: "🌙" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "Low Energy Days" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Shorter 15/5 or 20/5 intervals. Focus on simple, straightforward tasks. Celebrate small wins." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-400", children: "💪 Building the Pomodoro Habit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed mb-4", children: "Like any productivity system, the Pomodoro Technique becomes exponentially more effective with consistent practice. Start with just 2-3 pomodoros per day for the first week, gradually increase to 4-6 pomodoros in week two, aim for 6-8 productive pomodoros by week three, and by week four, the rhythm should feel natural and automatic." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-xl my-6 border-2 border-purple-300 dark:border-purple-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-3", children: "🎯 Your 30-Day Pomodoro Challenge" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Week 1:" }),
                " Master the basics - focus on completing 2-3 quality pomodoros daily"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Week 2:" }),
                " Increase volume - aim for 4-5 pomodoros and start tracking patterns"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Week 3:" }),
                " Optimize breaks - experiment with break activities to find what truly refreshes you"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Week 4:" }),
                " Advanced techniques - try task batching, energy-based scheduling, and custom timing"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-purple-700 dark:text-purple-400", children: "🔥 Final Pro Tips for Pomodoro Mastery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 my-6 text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl mr-3", children: "✨" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Plan tomorrow tonight:" }),
                  " List your pomodoro tasks for the next day before bed. You'll wake up with clarity and purpose."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl mr-3", children: "🎯" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Prime time protection:" }),
                  " Schedule your most important pomodoros during your peak energy hours (usually morning for most people)."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl mr-3", children: "🚀" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "The 2-minute rule:" }),
                  " If something takes less than 2 minutes, do it immediately rather than scheduling a full pomodoro."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl mr-3", children: "💬" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Communicate boundaries:" }),
                  ` Let team members know when you're in "pomodoro mode" so they respect your focus time.`
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl mr-3", children: "🎊" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Celebrate completion:" }),
                  " At the end of each pomodoro session, acknowledge your achievement. Positive reinforcement strengthens the habit."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 p-8 rounded-2xl my-8 text-center border-4 border-purple-300 dark:border-purple-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: "🎉 Ready to Transform Your Productivity?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base mb-6", children: "The Pomodoro Technique isn't just about managing time—it's about mastering your attention in a world designed to distract you. Every completed pomodoro is a small victory, proof that you can focus deeply and accomplish meaningful work. Start with just one pomodoro today. Then another tomorrow. Before you know it, you'll have built a powerful productivity habit that compounds into extraordinary results." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold italic", children: "Your most productive self is just 25 minutes away. Hit that start button! 🍅⏱️" })
            ] })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "backdrop-blur-xl bg-card/50 border-2 sticky top-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mb-4", children: "How It Works" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "1. Work for 25 minutes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "2. Take a 5-minute break" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "3. Repeat 4 times" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "4. Take longer 15-30 min break" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle" })
        ] })
      ] })
    }
  );
}
export {
  PomodoroPage as default
};
