import { r as reactExports, j as jsxRuntimeExports, B as Button, d as Clock, a4 as Label, f as Card, g as CardHeader, h as CardTitle, k as CardContent, a6 as Alert, a7 as AlertDescription, a8 as Sparkles, H as Heart, a5 as Info } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { E as EnhancedHealthCalculatorLayout } from "./EnhancedHealthCalculatorLayout-pWV85Gz2.js";
import { H as HealthSocialShare } from "./HealthSocialShare-SHMBdS6h.js";
import { Z as Zap } from "./zap-BEhI-iJb.js";
import { C as CircleAlert } from "./circle-alert-DCAQyr8M.js";
import { B as Brain } from "./brain-CSngUEN8.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./check-DTsA1WpX.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./share-2-SpOWc355.js";
import "./twitter-CFAqYlq6.js";
import "./facebook-BX8Qa6cK.js";
import "./message-circle-DZtFORhh.js";
import "./mail-DX6y6Mo7.js";
import "./link-2-D14Yk-9q.js";
function SleepCalculator() {
  const [calculationType, setCalculationType] = reactExports.useState("bedtime");
  const [hour, setHour] = reactExports.useState("");
  const [minute, setMinute] = reactExports.useState("");
  const [period, setPeriod] = reactExports.useState("PM");
  const [results, setResults] = reactExports.useState(null);
  const calculateSleepTimes = () => {
    if (!hour || !minute) return;
    const sleepCycleMinutes = 90;
    const fallAsleepMinutes = 14;
    let targetHour = parseInt(hour);
    let targetMinute = parseInt(minute);
    if (period === "PM" && targetHour !== 12) {
      targetHour += 12;
    } else if (period === "AM" && targetHour === 12) {
      targetHour = 0;
    }
    const targetTime = /* @__PURE__ */ new Date();
    targetTime.setHours(targetHour, targetMinute, 0, 0);
    const times = [];
    const cycles = calculationType === "bedtime" ? [6, 5, 4, 3] : [4, 5, 6, 7];
    cycles.forEach((numCycles) => {
      const sleepTime = new Date(targetTime);
      const totalMinutes = numCycles * sleepCycleMinutes + fallAsleepMinutes;
      if (calculationType === "bedtime") {
        sleepTime.setMinutes(sleepTime.getMinutes() - totalMinutes);
      } else {
        sleepTime.setMinutes(sleepTime.getMinutes() + totalMinutes);
      }
      const hours = sleepTime.getHours();
      const mins = sleepTime.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const displayHour = hours % 12 || 12;
      const displayMinute = mins.toString().padStart(2, "0");
      times.push(`${displayHour}:${displayMinute} ${ampm}`);
    });
    setResults(times);
  };
  const reset = () => {
    setHour("");
    setMinute("");
    setPeriod("PM");
    setResults(null);
  };
  const educationalContent = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12 mt-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-2xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-8 h-8 text-indigo-600" }),
        "🌙 Understanding Sleep Cycles"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose dark:prose-invert max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-gray-700 dark:text-gray-300", children: `Sleep isn't just "being unconscious"—it's a complex, cyclical process that your brain orchestrates throughout the night. Each sleep cycle lasts approximately 90 minutes and consists of distinct stages that serve different vital functions for your physical and mental health.` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100", children: "🔄 The Four Stages of Sleep" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-indigo-500 animate-slide-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-indigo-600 dark:text-indigo-400", children: "Stage 1: Light Sleep (N1)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-3", children: "Duration: 1-5 minutes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600 dark:text-gray-400 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Transition from wakefulness to sleep" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Easy to wake up from" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Muscle activity slows down" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• You may experience hypnic jerks (sudden muscle twitches)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-purple-500 animate-slide-up", style: { animationDelay: "0.1s" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400", children: "Stage 2: Light Sleep (N2)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-3", children: "Duration: 10-25 minutes (first cycle)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600 dark:text-gray-400 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Body temperature drops" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Heart rate slows" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Brain produces sleep spindles" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Makes up ~50% of total sleep" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-blue-500 animate-slide-up", style: { animationDelay: "0.2s" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400", children: "Stage 3: Deep Sleep (N3)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-3", children: "Duration: 20-40 minutes (first cycle)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600 dark:text-gray-400 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Deepest, most restorative sleep" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Difficult to wake from" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Physical restoration occurs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Growth hormone released" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Immune system strengthens" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-pink-500 animate-slide-up", style: { animationDelay: "0.3s" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-pink-600 dark:text-pink-400", children: "REM Sleep (Rapid Eye Movement)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-3", children: "Duration: 10 minutes (first cycle) to 60 minutes (later)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600 dark:text-gray-400 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Brain activity increases" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Vivid dreams occur" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Memory consolidation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Emotional processing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Muscles temporarily paralyzed" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-indigo-100 dark:bg-indigo-900/30 rounded-xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-lg mb-3 flex items-center gap-2 text-indigo-800 dark:text-indigo-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5" }),
            "Why 90-Minute Cycles Matter"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: `Waking up in the middle of a sleep cycle, especially during deep sleep, can leave you feeling groggy and disoriented—a phenomenon called "sleep inertia." By timing your sleep in 90-minute increments, you're more likely to wake up at the end of a cycle during lighter sleep, feeling refreshed and alert.` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Most adults need 4-6 complete cycles (6-9 hours) per night. The first half of the night contains more deep sleep, while the second half has longer REM periods." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", style: { animationDelay: "0.2s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-8 h-8 text-purple-600" }),
        "🧠 REM vs NREM: Two Types of Sleep"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose dark:prose-invert max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-gray-700 dark:text-gray-300", children: "Your sleep is divided into two fundamentally different types: NREM (Non-Rapid Eye Movement) and REM sleep. Each serves distinct and crucial functions for your health and wellbeing." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-xl mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "💤" }),
              " NREM Sleep"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-purple-600 dark:text-purple-400 mb-1", children: "Physical Restoration:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Tissue growth and repair, bone and muscle development, immune system strengthening" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-purple-600 dark:text-purple-400 mb-1", children: "Energy Conservation:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Body temperature drops, metabolism slows, energy reserves replenished" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-purple-600 dark:text-purple-400 mb-1", children: "Hormone Release:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Growth hormone secretion, regulation of appetite hormones (leptin and ghrelin)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-purple-600 dark:text-purple-400 mb-1", children: "Brain Maintenance:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Clearance of metabolic waste products from the brain (glymphatic system)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 rounded-xl p-6 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-xl mb-4 text-pink-700 dark:text-pink-300 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "✨" }),
              " REM Sleep"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-pink-600 dark:text-pink-400 mb-1", children: "Memory Consolidation:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Transfer of information from short-term to long-term memory, learning reinforcement" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-pink-600 dark:text-pink-400 mb-1", children: "Emotional Processing:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Processing emotions and experiences, mood regulation, stress management" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-pink-600 dark:text-pink-400 mb-1", children: "Creativity & Problem-Solving:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Formation of creative connections, insight development, complex problem solving" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-pink-600 dark:text-pink-400 mb-1", children: "Brain Development:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Critical for brain maturation in infants and children, neural pathway formation" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-100 dark:bg-purple-900/30 rounded-xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-purple-800 dark:text-purple-300", children: "🔬 Sleep Architecture Throughout the Night" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-4", children: "The proportion of REM and deep NREM sleep changes as the night progresses:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-purple-600 dark:text-purple-400 mb-2", children: "🌃 First Half of Night (Early Cycles)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm text-gray-600 dark:text-gray-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• More deep NREM sleep (Stage 3)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Shorter REM periods (10-15 minutes)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Physical restoration prioritized" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Growth hormone release peaks" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-pink-600 dark:text-pink-400 mb-2", children: "🌅 Second Half of Night (Later Cycles)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm text-gray-600 dark:text-gray-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Less deep sleep, more light sleep" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Longer REM periods (up to 60 minutes)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Mental restoration prioritized" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Vivid, memorable dreams more common" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", style: { animationDelay: "0.4s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-2xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-8 h-8 text-blue-600" }),
        "⏰ Your Circadian Rhythm: The Body's Master Clock"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose dark:prose-invert max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-gray-700 dark:text-gray-300", children: "Your circadian rhythm is an internal 24-hour clock that regulates sleep-wake cycles, hormone release, body temperature, and other vital functions. Understanding and working with your natural rhythm is key to optimal sleep quality." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-100 dark:bg-blue-900/30 rounded-xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-4 text-blue-800 dark:text-blue-300", children: "🌍 How Your Body Clock Works" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-200 dark:bg-blue-800 rounded-full p-2 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-blue-700 dark:text-blue-300" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-blue-700 dark:text-blue-400", children: "Light is the Primary Cue" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 text-sm", children: "Special cells in your eyes detect light and send signals to the suprachiasmatic nucleus (SCN) in your brain—your body's master clock." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-cyan-200 dark:bg-cyan-800 rounded-full p-2 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-cyan-700 dark:text-cyan-300" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-cyan-700 dark:text-cyan-400", children: "Darkness Triggers Melatonin" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 text-sm", children: "When it gets dark, the SCN signals the pineal gland to release melatonin, making you feel sleepy." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-300 dark:bg-blue-700 rounded-full p-2 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-blue-800 dark:text-blue-200" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-blue-700 dark:text-blue-400", children: "Consistent Timing Matters" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 text-sm", children: "Your circadian rhythm thrives on consistency. Irregular sleep schedules can disrupt it, leading to poor sleep quality." })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100", children: "🕐 Typical Circadian Timeline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-blue-600 dark:text-blue-400 mb-2", children: "6:00 AM - Cortisol Rise" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Cortisol levels increase sharply, promoting wakefulness" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-2", children: "7:00 AM - Melatonin Stops" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Melatonin secretion halts, body temperature rises" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-teal-600 dark:text-teal-400 mb-2", children: "10:00 AM - Peak Alertness" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Highest alertness and optimal cognitive performance" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-blue-500 dark:text-blue-300 mb-2", children: "2:30 PM - Afternoon Dip" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Natural energy dip, ideal time for a short nap" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2", children: "9:00 PM - Melatonin Release" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Melatonin secretion begins, preparing for sleep" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-purple-600 dark:text-purple-400 mb-2", children: "10:30 PM - Bowel Suppressed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Digestive system slows, body prepares for rest" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cyan-100 dark:bg-cyan-900/30 rounded-xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-lg mb-3 flex items-center gap-2 text-cyan-800 dark:text-cyan-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5" }),
            "Optimizing Your Circadian Rhythm"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan-600 dark:text-cyan-400 mt-1", children: "☀️" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Morning light exposure:" }),
                " Get 10-30 minutes of bright light within an hour of waking"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan-600 dark:text-cyan-400 mt-1", children: "🌙" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Dim evening lights:" }),
                " Reduce bright lights 2-3 hours before bed"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan-600 dark:text-cyan-400 mt-1", children: "📱" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Limit blue light:" }),
                " Use blue light filters on devices or avoid screens before bed"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan-600 dark:text-cyan-400 mt-1", children: "🕐" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Consistent schedule:" }),
                " Go to bed and wake up at the same time daily, even weekends"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan-600 dark:text-cyan-400 mt-1", children: "🍽️" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Time your meals:" }),
                " Eat at consistent times; avoid large meals close to bedtime"
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", style: { animationDelay: "0.6s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 rounded-2xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-8 h-8 text-green-600" }),
        "✨ Sleep Hygiene: Creating the Perfect Sleep Environment"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose dark:prose-invert max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-gray-700 dark:text-gray-300", children: "Sleep hygiene refers to the habits and environmental factors that contribute to quality sleep. Small changes can make a dramatic difference in how well you sleep." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100", children: "🛏️ The Ideal Sleep Environment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: "🌡️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-green-600 dark:text-green-400", children: "Temperature" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Ideal: 60-67°F (15-19°C)" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Your body temperature naturally drops during sleep. A cool room facilitates this process and promotes deeper sleep." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: "🌑" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-teal-600 dark:text-teal-400", children: "Darkness" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pitch black is best" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Even small amounts of light can disrupt melatonin production. Use blackout curtains and cover LED lights." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: "🔇" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-green-500 dark:text-green-300", children: "Silence" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Quiet or white noise" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Use earplugs or a white noise machine to mask disruptive sounds and create consistent audio." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100", children: "📋 Pre-Sleep Routine Checklist" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 rounded-xl p-6 my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-green-700 dark:text-green-300 mb-3", children: "✅ Do These:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 dark:text-green-400 mt-0.5", children: "✓" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 dark:text-gray-300", children: "Set a consistent bedtime routine (60-90 min before bed)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 dark:text-green-400 mt-0.5", children: "✓" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 dark:text-gray-300", children: "Take a warm bath or shower 60-90 min before bed" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 dark:text-green-400 mt-0.5", children: "✓" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 dark:text-gray-300", children: "Read a physical book or listen to calming music" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 dark:text-green-400 mt-0.5", children: "✓" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 dark:text-gray-300", children: "Practice meditation or deep breathing exercises" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 dark:text-green-400 mt-0.5", children: "✓" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 dark:text-gray-300", children: "Journal or make a to-do list for tomorrow" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 dark:text-green-400 mt-0.5", children: "✓" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 dark:text-gray-300", children: "Gentle stretching or yoga" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-red-700 dark:text-red-300 mb-3", children: "❌ Avoid These:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 dark:text-red-400 mt-0.5", children: "✗" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 dark:text-gray-300", children: "Screens (TV, phone, computer) 1-2 hours before bed" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 dark:text-red-400 mt-0.5", children: "✗" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 dark:text-gray-300", children: "Caffeine after 2 PM (6-8 hour half-life)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 dark:text-red-400 mt-0.5", children: "✗" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 dark:text-gray-300", children: "Heavy meals within 3 hours of bedtime" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 dark:text-red-400 mt-0.5", children: "✗" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 dark:text-gray-300", children: "Alcohol (disrupts sleep architecture and REM)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 dark:text-red-400 mt-0.5", children: "✗" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 dark:text-gray-300", children: "Intense exercise within 3 hours of bed" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 dark:text-red-400 mt-0.5", children: "✗" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 dark:text-gray-300", children: "Napping after 3 PM" })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-teal-100 dark:bg-teal-900/30 rounded-xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-lg mb-3 flex items-center gap-2 text-teal-800 dark:text-teal-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5" }),
            "The 10-3-2-1-0 Sleep Formula"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-3 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-teal-600 dark:text-teal-400 mb-1", children: "10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: "hours before: No more caffeine" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-teal-600 dark:text-teal-400 mb-1", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: "hours before: No more food or alcohol" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-teal-600 dark:text-teal-400 mb-1", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: "hours before: No more work" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-teal-600 dark:text-teal-400 mb-1", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: "hour before: No more screens" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-teal-600 dark:text-teal-400 mb-1", children: "0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: "times hitting snooze in the morning" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", style: { animationDelay: "0.8s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-2xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-8 h-8 text-red-600" }),
        "⚠️ The Impact of Sleep Deprivation"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose dark:prose-invert max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-gray-700 dark:text-gray-300", children: "Sleep deprivation has far-reaching consequences beyond just feeling tired. Understanding these effects can motivate better sleep habits." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100", children: "🧠 Short-Term Effects (1-7 Days)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-orange-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-orange-600 dark:text-orange-400", children: "Cognitive Impairment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600 dark:text-gray-400 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Reduced attention span and focus" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Impaired decision-making abilities" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Slower reaction times (similar to alcohol intoxication)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Memory formation problems" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Decreased problem-solving skills" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-red-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-red-600 dark:text-red-400", children: "Physical Effects" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600 dark:text-gray-400 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Weakened immune system" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Increased inflammation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Higher stress hormone (cortisol) levels" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Decreased athletic performance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Slower recovery from exercise" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-yellow-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-yellow-600 dark:text-yellow-400", children: "Emotional Impact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600 dark:text-gray-400 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Increased irritability and mood swings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Heightened emotional reactivity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Reduced stress tolerance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Increased anxiety levels" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Difficulty regulating emotions" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-amber-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-amber-600 dark:text-amber-400", children: "Metabolic Changes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600 dark:text-gray-400 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Increased hunger (elevated ghrelin)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Decreased satiety (reduced leptin)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Insulin resistance increases" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Cravings for high-calorie foods" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Disrupted glucose metabolism" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-10 mb-4 text-gray-900 dark:text-gray-100", children: "⏰ Long-Term Effects (Chronic Sleep Deprivation)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-100 dark:bg-red-900/30 rounded-xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-4", children: "Consistently getting less than 7 hours of sleep per night is associated with serious health risks:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-red-700 dark:text-red-400 mb-2", children: "Cardiovascular Disease" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Increased risk of hypertension, heart attack, and stroke" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-red-700 dark:text-red-400 mb-2", children: "Type 2 Diabetes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Chronic insulin resistance and impaired glucose tolerance" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-red-700 dark:text-red-400 mb-2", children: "Obesity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Hormonal imbalances promoting weight gain" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-red-700 dark:text-red-400 mb-2", children: "Mental Health" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Depression, anxiety disorders, and other psychiatric conditions" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-red-700 dark:text-red-400 mb-2", children: "Cognitive Decline" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Accelerated aging, increased dementia and Alzheimer's risk" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-red-700 dark:text-red-400 mb-2", children: "Weakened Immunity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Reduced ability to fight infections and illness" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-100 dark:bg-orange-900/30 rounded-xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-lg mb-3 flex items-center gap-2 text-orange-800 dark:text-orange-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5" }),
            `You Can't "Catch Up" on Sleep`
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: "While you might feel better after sleeping in on weekends, you can't fully compensate for chronic sleep deprivation. Sleep debt accumulates and has lasting effects on health and performance." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "A 2016 study found that even one night of sleep loss can have effects lasting up to 7 days. The best approach is consistent, adequate sleep every night." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", style: { animationDelay: "1s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900 dark:to-slate-900 rounded-2xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-gray-700 to-slate-700 dark:from-gray-300 dark:to-slate-300 bg-clip-text text-transparent", children: "❓ Frequently Asked Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-semibold text-lg text-gray-900 dark:text-gray-100 list-none flex items-center justify-between", children: [
            "How much sleep do I really need?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-400 leading-relaxed", children: "Sleep needs vary by age and individual factors. Adults (18-64) typically need 7-9 hours, while teenagers need 8-10 hours and older adults (65+) need 7-8 hours. However, some people function well on slightly less or need slightly more. The key is feeling refreshed and alert during the day. If you rely on an alarm clock, struggle to wake up, or feel tired during the day, you likely need more sleep." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-semibold text-lg text-gray-900 dark:text-gray-100 list-none flex items-center justify-between", children: [
            "Are naps beneficial or harmful?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-400 leading-relaxed", children: 'Naps can be beneficial when done correctly. A 10-20 minute "power nap" can boost alertness and performance without causing sleep inertia (grogginess). Avoid napping after 3 PM as it can interfere with nighttime sleep. If you need frequent naps or nap for more than 30 minutes, it may indicate insufficient nighttime sleep or a sleep disorder. For shift workers or those with irregular schedules, strategic napping can be essential for maintaining alertness and safety.' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-semibold text-lg text-gray-900 dark:text-gray-100 list-none flex items-center justify-between", children: [
            "What should I do if I can't fall asleep?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-400 leading-relaxed", children: `If you can't fall asleep within 20 minutes, get out of bed and do a quiet, relaxing activity in low light until you feel sleepy. Avoid screens, bright lights, and stimulating activities. This "stimulus control" technique prevents your brain from associating your bed with wakefulness. Also avoid clock-watching, which increases anxiety. Practice relaxation techniques like deep breathing, progressive muscle relaxation, or visualization. If insomnia persists for more than a few weeks, consult a healthcare provider or sleep specialist.` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-semibold text-lg text-gray-900 dark:text-gray-100 list-none flex items-center justify-between", children: [
            "Is it better to sleep in a cold or warm room?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-400 leading-relaxed", children: "A cooler room is better for sleep. The ideal temperature is 60-67°F (15-19°C). Your body's core temperature naturally drops during sleep, and a cool environment facilitates this process. Being too warm can prevent you from entering deep sleep and increase nighttime awakenings. However, personal preference matters—use breathable bedding and adjust layers to find your comfort zone. Cold extremities can also disrupt sleep, so warm socks may help if your feet tend to get cold." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-semibold text-lg text-gray-900 dark:text-gray-100 list-none flex items-center justify-between", children: [
            "How does alcohol affect sleep?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-400 leading-relaxed", children: "While alcohol may help you fall asleep faster, it significantly disrupts sleep quality. Alcohol suppresses REM sleep in the first half of the night, then causes REM rebound in the second half, leading to vivid dreams and frequent awakenings. It also relaxes throat muscles, increasing snoring and sleep apnea risk. Alcohol is metabolized within a few hours, often causing middle-of-the-night wakefulness. For better sleep, avoid alcohol within 3-4 hours of bedtime. One drink can affect sleep for up to 6 hours." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-semibold text-lg text-gray-900 dark:text-gray-100 list-none flex items-center justify-between", children: [
            "When should I see a doctor about sleep problems?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-400 leading-relaxed", children: "Consult a doctor if you experience: chronic insomnia (difficulty falling or staying asleep) lasting more than 3 weeks; excessive daytime sleepiness despite adequate sleep time; loud snoring with breathing pauses (possible sleep apnea); frequent leg movements or uncomfortable sensations in legs at night (restless leg syndrome); acting out dreams or unusual sleep behaviors; or if sleep problems significantly impact your daily functioning, mood, or relationships. Sleep disorders are treatable, and early intervention can prevent serious health complications." })
        ] })
      ] })
    ] }) })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    EnhancedHealthCalculatorLayout,
    {
      title: "Sleep Calculator",
      description: "Calculate optimal bedtime or wake time based on 90-minute sleep cycles",
      category: "Sleep",
      metaTitle: "Sleep Calculator - Optimal Bedtime & Wake Time Based on Sleep Cycles",
      metaDescription: "Calculate the best time to sleep or wake up based on 90-minute sleep cycles. Wake up feeling refreshed by timing your sleep cycles correctly.",
      calculatorContent: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-xl p-6 shadow-sm animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: () => setCalculationType("bedtime"),
                  variant: calculationType === "bedtime" ? "default" : "outline",
                  className: "flex-1",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 mr-2" }),
                    "Calculate Bedtime"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: () => setCalculationType("waketime"),
                  variant: calculationType === "waketime" ? "default" : "outline",
                  className: "flex-1",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 mr-2" }),
                    "Calculate Wake Time"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "flex items-center gap-2 text-gray-700 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-indigo-600" }),
                calculationType === "bedtime" ? "When do you need to wake up?" : "When will you go to bed?"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: hour, onValueChange: setHour, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Hour" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Array.from({ length: 12 }, (_, i) => i + 1).map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: h.toString(), children: h }, h)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: minute, onValueChange: setMinute, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Minute" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["00", "15", "30", "45"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: m, children: m }, m)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: period, onValueChange: (v) => setPeriod(v), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "AM", children: "AM" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "PM", children: "PM" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateSleepTimes, className: "flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 mr-2" }),
              "Calculate"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: reset, variant: "outline", className: "flex-1", children: "Reset" })
          ] })
        ] }),
        results && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border-indigo-200 dark:border-indigo-800 animate-slide-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-indigo-700 dark:text-indigo-300", children: [
            calculationType === "bedtime" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5" }),
            calculationType === "bedtime" ? "Recommended Bedtimes" : "Recommended Wake Times"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-indigo-100 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-indigo-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { className: "text-indigo-800 dark:text-indigo-200", children: "Times are calculated based on 90-minute sleep cycles. It takes the average person 14 minutes to fall asleep." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: results.map((time, index) => {
              const cycles = calculationType === "bedtime" ? [6, 5, 4, 3] : [4, 5, 6, 7];
              const hours = cycles[index] * 1.5;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md text-center transform hover:scale-105 transition-transform duration-300 animate-bounce-slow",
                  style: { animationDelay: `${index * 0.1}s` },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1", children: time }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                      cycles[index],
                      " cycles (",
                      hours,
                      " hrs)"
                    ] })
                  ]
                },
                index
              );
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              HealthSocialShare,
              {
                title: "Check out my optimal sleep schedule!",
                resultText: `Based on sleep cycles, I should ${calculationType === "bedtime" ? "go to bed" : "wake up"} at ${results[1]} for optimal rest.`
              }
            )
          ] })
        ] })
      ] }),
      educationalContent
    }
  );
}
export {
  SleepCalculator as default
};
