import { r as reactExports, j as jsxRuntimeExports, a3 as Label, H as Heart, U as Input, A as Activity, B as Button, f as Card, g as CardHeader, h as CardTitle, k as CardContent, a5 as Alert, a4 as Info, a6 as AlertDescription, T as TrendingUp } from "./index-C_OXA6OQ.js";
import { E as EnhancedHealthCalculatorLayout } from "./EnhancedHealthCalculatorLayout-Dx17gN3N.js";
import { H as HealthSocialShare } from "./HealthSocialShare-DDs9xXKE.js";
import { Z as Zap } from "./zap-B5WxZbDS.js";
import { T as Target } from "./target-1ApqtYDG.js";
import "./AdsterraSlot--S6-7ysu.js";
import "./share-2-ViScha7M.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
import "./check-BMzwQJZ4.js";
import "./link-2-CINC0lIp.js";
function HeartRateZoneCalculator() {
  const [age, setAge] = reactExports.useState("");
  const [restingHR, setRestingHR] = reactExports.useState("");
  const [zones, setZones] = reactExports.useState(null);
  const [maxHR, setMaxHR] = reactExports.useState(null);
  const calculateZones = () => {
    if (!age) return;
    const ageNum = parseInt(age);
    const calculatedMaxHR = 220 - ageNum;
    const restingHRNum = restingHR ? parseInt(restingHR) : 60;
    const hrReserve = calculatedMaxHR - restingHRNum;
    const zoneData = [
      {
        name: "Zone 1: Recovery",
        percentage: "50-60%",
        min: Math.round(restingHRNum + hrReserve * 0.5),
        max: Math.round(restingHRNum + hrReserve * 0.6),
        description: "Very light activity, warm-up and cool-down",
        color: "from-gray-400 to-gray-500",
        benefits: [
          "Active recovery between hard workouts",
          "Improves overall cardiovascular health",
          "Builds aerobic base fitness",
          "Low injury risk"
        ]
      },
      {
        name: "Zone 2: Aerobic",
        percentage: "60-70%",
        min: Math.round(restingHRNum + hrReserve * 0.6),
        max: Math.round(restingHRNum + hrReserve * 0.7),
        description: "Light intensity, comfortable pace",
        color: "from-blue-400 to-blue-600",
        benefits: [
          "Builds aerobic endurance",
          "Improves fat metabolism",
          "Strengthens cardiovascular system",
          "Can maintain for extended periods"
        ]
      },
      {
        name: "Zone 3: Tempo",
        percentage: "70-80%",
        min: Math.round(restingHRNum + hrReserve * 0.7),
        max: Math.round(restingHRNum + hrReserve * 0.8),
        description: "Moderate intensity, controlled breathing",
        color: "from-green-400 to-green-600",
        benefits: [
          "Increases aerobic capacity",
          "Improves efficiency",
          "Boosts lactate threshold",
          "Enhances endurance performance"
        ]
      },
      {
        name: "Zone 4: Threshold",
        percentage: "80-90%",
        min: Math.round(restingHRNum + hrReserve * 0.8),
        max: Math.round(restingHRNum + hrReserve * 0.9),
        description: "Hard intensity, challenging to maintain",
        color: "from-orange-400 to-orange-600",
        benefits: [
          "Increases lactate threshold",
          "Improves speed endurance",
          "Boosts VO2 max",
          "Competition pace training"
        ]
      },
      {
        name: "Zone 5: Maximum",
        percentage: "90-100%",
        min: Math.round(restingHRNum + hrReserve * 0.9),
        max: calculatedMaxHR,
        description: "Maximum effort, short bursts only",
        color: "from-red-500 to-red-700",
        benefits: [
          "Develops maximum power",
          "Improves anaerobic capacity",
          "Increases speed",
          "Short intervals only"
        ]
      }
    ];
    setZones(zoneData);
    setMaxHR(calculatedMaxHR);
  };
  const reset = () => {
    setAge("");
    setRestingHR("");
    setZones(null);
    setMaxHR(null);
  };
  const educationalContent = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12 mt-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 rounded-2xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-8 h-8 text-red-600" }),
        "❤️ Understanding Heart Rate Training Zones"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose dark:prose-invert max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-gray-700 dark:text-gray-300", children: "Heart rate zones are intensity ranges based on percentages of your maximum heart rate. Training in specific zones targets different physiological adaptations, helping you optimize your workouts for specific goals—whether that's building endurance, burning fat, or improving speed." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100", children: "📊 The Five Heart Rate Zones" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-md animate-slide-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-300 dark:bg-gray-600 rounded-full p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🚶" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200", children: "Zone 1: Recovery (50-60% Max HR)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-3", children: "This is your warm-up and cool-down zone. Exercise feels easy, you can hold a full conversation, and breathing is relaxed. Perfect for recovery days and building aerobic base." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-500 italic", children: "Example: Easy walking, gentle cycling, light stretching" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-6 shadow-md animate-slide-up", style: { animationDelay: "0.1s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-300 dark:bg-blue-600 rounded-full p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🏃" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-blue-800 dark:text-blue-200", children: "Zone 2: Aerobic (60-70% Max HR)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-3", children: 'The "fat-burning" zone where your body primarily uses fat for fuel. You can talk in full sentences but breathing is slightly elevated. This zone builds cardiovascular endurance.' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-500 italic", children: "Example: Jogging, recreational cycling, swimming at comfortable pace" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-6 shadow-md animate-slide-up", style: { animationDelay: "0.2s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-300 dark:bg-green-600 rounded-full p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🏃‍♂️" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-green-800 dark:text-green-200", children: "Zone 3: Tempo (70-80% Max HR)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-3", children: "Moderate to hard intensity. Conversation becomes difficult, speaking in short phrases. This zone improves aerobic capacity and stamina for longer events." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-500 italic", children: "Example: Tempo runs, moderate-intensity cycling, brisk swimming" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 rounded-xl p-6 shadow-md animate-slide-up", style: { animationDelay: "0.3s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-orange-300 dark:bg-orange-600 rounded-full p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "💪" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-orange-800 dark:text-orange-200", children: "Zone 4: Threshold (80-90% Max HR)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-3", children: "Hard intensity, near your lactate threshold. Speaking is very difficult, you can only say single words. Increases your ability to sustain higher speeds." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-500 italic", children: "Example: Interval training, race-pace efforts, hard cycling intervals" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-xl p-6 shadow-md animate-slide-up", style: { animationDelay: "0.4s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-300 dark:bg-red-600 rounded-full p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "⚡" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-red-800 dark:text-red-200", children: "Zone 5: Maximum (90-100% Max HR)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-3", children: "Maximum effort, unsustainable for more than a few minutes. No talking possible. Reserved for short, intense intervals and developing peak power." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-500 italic", children: "Example: Sprint intervals, hill sprints, maximum effort bursts" })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-100 dark:bg-red-900/30 rounded-xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-lg mb-3 flex items-center gap-2 text-red-800 dark:text-red-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5" }),
            "How to Use These Zones"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: "The key to effective training is spending time in the right zones for your goals:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 dark:text-red-400 mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Endurance athletes:" }),
                " 80% in Zones 1-2, 20% in Zones 3-5"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 dark:text-red-400 mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "General fitness:" }),
                " Mix of all zones throughout the week"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 dark:text-red-400 mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Weight loss:" }),
                " Focus on Zones 2-3 for sustainable fat burning"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 dark:text-red-400 mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Speed/power:" }),
                " Include Zones 4-5 with adequate recovery"
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", style: { animationDelay: "0.2s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-2xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-8 h-8 text-orange-600" }),
        "🔥 The Fat-Burning Zone Myth"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose dark:prose-invert max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-gray-700 dark:text-gray-300", children: "One of the biggest misconceptions in fitness is that Zone 2 (60-70% max HR) is the best for fat loss. While it's true that fat provides a higher percentage of fuel at lower intensities, the total story is more complex." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-orange-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-orange-600 dark:text-orange-400", children: 'What the "Fat-Burning Zone" Gets Right' }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600 dark:text-gray-400 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• At lower intensities, fat provides 50-60% of energy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• You can sustain this intensity for longer periods" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• It's accessible for beginners and recovery days" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Lower injury risk than high-intensity training" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Builds aerobic base and endurance" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-red-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-red-600 dark:text-red-400", children: "What It Gets Wrong" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600 dark:text-gray-400 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Total calories burned matters more than fuel source" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Higher intensities burn more total calories per minute" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: '• HIIT creates "afterburn" effect (EPOC)' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Metabolic rate increases with muscle mass from strength training" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Long-term calorie deficit matters most for fat loss" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-100 dark:bg-orange-900/30 rounded-xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-orange-800 dark:text-orange-300", children: "💡 The Real Math" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-orange-600 dark:text-orange-400 mb-2", children: "Zone 2 (60-70% Max HR) - 30 minutes:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm text-gray-600 dark:text-gray-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Burns ~200 calories total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 60% from fat = 120 fat calories" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Can be sustained for extended periods" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-red-600 dark:text-red-400 mb-2", children: "Zone 4 (80-90% Max HR) - 30 minutes:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm text-gray-600 dark:text-gray-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Burns ~400 calories total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 35% from fat = 140 fat calories" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Plus 24-48 hours of elevated metabolism (EPOC)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-amber-200 dark:bg-amber-900/30 rounded-lg p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-amber-800 dark:text-amber-300", children: "Higher intensity burns more fat calories AND more total calories, plus boosts metabolism for days afterward!" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-100 dark:bg-amber-900/30 rounded-xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-lg mb-3 flex items-center gap-2 text-amber-800 dark:text-amber-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5" }),
            "The Best Approach for Fat Loss"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: 'Instead of obsessing over the "fat-burning zone," focus on:' }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-600 dark:text-amber-400 mt-1", children: "1." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Calorie deficit through diet:" }),
                " Nutrition is 70-80% of fat loss"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-600 dark:text-amber-400 mt-1", children: "2." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Mix training intensities:" }),
                " Include Zone 2 for endurance AND Zones 4-5 for metabolic boost"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-600 dark:text-amber-400 mt-1", children: "3." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Strength training:" }),
                " Build muscle to increase resting metabolic rate"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-600 dark:text-amber-400 mt-1", children: "4." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Consistency:" }),
                " The best zone is the one you'll stick to long-term"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-600 dark:text-amber-400 mt-1", children: "5." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "NEAT:" }),
                " Increase non-exercise activity (walking, fidgeting, standing)"
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", style: { animationDelay: "0.4s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-2xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-8 h-8 text-blue-600" }),
        "🫁 VO2 Max: Your Aerobic Ceiling"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose dark:prose-invert max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-gray-700 dark:text-gray-300", children: "VO2 max is the maximum amount of oxygen your body can utilize during intense exercise. It's considered one of the best indicators of cardiovascular fitness and aerobic endurance." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100", children: "🔬 What is VO2 Max?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-100 dark:bg-blue-900/30 rounded-xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-4", children: "VO2 max is measured in milliliters of oxygen per kilogram of body weight per minute (ml/kg/min). It represents the upper limit of your body's ability to:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Breathe in and transport oxygen to muscles" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Extract oxygen from blood at the cellular level" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Use that oxygen to produce energy (ATP)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100", children: "📊 VO2 Max Classifications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-blue-600 dark:text-blue-400", children: "Men (ml/kg/min)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4 space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-400", children: "Elite athlete:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-blue-600 dark:text-blue-400", children: ">60" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-400", children: "Excellent:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-green-600 dark:text-green-400", children: "52-60" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-400", children: "Good:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-teal-600 dark:text-teal-400", children: "46-51" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-400", children: "Average:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-yellow-600 dark:text-yellow-400", children: "35-45" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-400", children: "Below average:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-orange-600 dark:text-orange-400", children: "<35" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-pink-600 dark:text-pink-400", children: "Women (ml/kg/min)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4 space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-400", children: "Elite athlete:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-blue-600 dark:text-blue-400", children: ">55" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-400", children: "Excellent:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-green-600 dark:text-green-400", children: "46-54" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-400", children: "Good:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-teal-600 dark:text-teal-400", children: "40-45" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-400", children: "Average:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-yellow-600 dark:text-yellow-400", children: "30-39" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-400", children: "Below average:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-orange-600 dark:text-orange-400", children: "<30" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cyan-100 dark:bg-cyan-900/30 rounded-xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-lg mb-3 flex items-center gap-2 text-cyan-800 dark:text-cyan-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5" }),
            "How to Improve Your VO2 Max"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-cyan-700 dark:text-cyan-400 mb-3", children: "High-Intensity Interval Training (HIIT)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 4-8 intervals of 3-5 minutes at 90-95% max HR" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Recovery periods of 2-3 minutes at 60-70% max HR" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 2-3 sessions per week" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Examples: Hill repeats, track intervals, bike intervals" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-cyan-700 dark:text-cyan-400 mb-3", children: "Tempo Training" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 20-40 minutes at 75-85% max HR (Zone 3-4)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: '• Sustained "comfortably hard" effort' }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 1-2 sessions per week" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Improves lactate threshold and efficiency" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mt-4 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
            " VO2 max improvements typically range from 15-25% with consistent training. Genetics account for ~50% of baseline VO2 max, but training makes a significant difference in performance."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", style: { animationDelay: "0.6s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-8 h-8 text-purple-600" }),
        "💓 Heart Rate Variability (HRV)"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose dark:prose-invert max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-gray-700 dark:text-gray-300", children: "Heart Rate Variability (HRV) is the variation in time between consecutive heartbeats. Contrary to what you might think, more variability is actually better—it indicates a healthy, adaptive nervous system." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100", children: "🧠 Why HRV Matters" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-100 dark:bg-purple-900/30 rounded-xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-4", children: "HRV reflects the balance between your sympathetic (fight-or-flight) and parasympathetic (rest-and-digest) nervous systems:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-green-600 dark:text-green-400 mb-2", children: "High HRV (Good)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm text-gray-600 dark:text-gray-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Better recovery and adaptation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Balanced nervous system" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Lower stress levels" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Better cardiovascular fitness" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Ready to train hard" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-red-600 dark:text-red-400 mb-2", children: "Low HRV (Warning Sign)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-sm text-gray-600 dark:text-gray-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Overtraining or stress" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Poor recovery" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Illness or inflammation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Sleep deprivation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Need for rest or recovery" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100", children: "📱 How to Track HRV" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: "⌚" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-purple-600 dark:text-purple-400", children: "Wearables" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Devices like Whoop, Oura Ring, Apple Watch, and Garmin watches track HRV automatically during sleep." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: "📱" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-pink-600 dark:text-pink-400", children: "Apps" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "HRV apps like Elite HRV, HRV4Training, and Welltory use your phone camera or chest strap for morning readings." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: "📈" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-2 text-purple-500 dark:text-purple-300", children: "Consistency" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Measure at the same time daily (ideally upon waking). Track trends over weeks, not daily fluctuations." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-pink-100 dark:bg-pink-900/30 rounded-xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg mb-3 text-pink-800 dark:text-pink-300", children: "🎯 Using HRV to Optimize Training" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 dark:text-green-400 text-xl mt-0.5", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "HRV Above Baseline (High):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Your body is recovered and adapting well. Go ahead with planned intense training or races." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-600 dark:text-yellow-400 text-xl mt-0.5", children: "⚠" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "HRV Slightly Below Baseline:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Moderate your training intensity. Focus on Zone 2 work or technique sessions." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 dark:text-red-400 text-xl mt-0.5", children: "✗" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "HRV Significantly Below Baseline (Low):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Take a rest day or do very light active recovery only. Your body needs time to adapt." })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", style: { animationDelay: "0.8s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 rounded-2xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-8 h-8 text-green-600" }),
        "🏆 Zone-Based Training Programs"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose dark:prose-invert max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-gray-700 dark:text-gray-300", children: "Here are sample weekly training plans based on different fitness goals. Adjust intensities and durations based on your fitness level." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 my-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 rounded-xl p-6 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-xl mb-4 text-green-700 dark:text-green-300 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🏃" }),
              " Endurance Building (Base Training)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Monday: Easy Recovery" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded", children: "Zone 1" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "30-45 min at 50-60% max HR - Active recovery from weekend" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Tuesday: Aerobic Development" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-blue-200 dark:bg-blue-700 rounded", children: "Zone 2" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "60-90 min at 60-70% max HR - Build aerobic base" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Wednesday: Tempo Run" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-green-200 dark:bg-green-700 rounded", children: "Zone 3" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "40-50 min with 20 min at 70-80% max HR" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Thursday: Easy Aerobic" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-blue-200 dark:bg-blue-700 rounded", children: "Zone 2" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "45-60 min at 60-70% max HR" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Friday: Rest or Active Recovery" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded", children: "Zone 1" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "30 min easy or complete rest" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Saturday: Long Aerobic Run" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-blue-200 dark:bg-blue-700 rounded", children: "Zone 2" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "90-120 min at 60-70% max HR" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Sunday: Easy Recovery" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded", children: "Zone 1" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "30-45 min at 50-60% max HR" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl p-6 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-xl mb-4 text-orange-700 dark:text-orange-300 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "⚡" }),
              " Speed & Power (Performance Training)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Monday: Active Recovery" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded", children: "Zone 1" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "30 min easy + stretching/mobility" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Tuesday: Interval Training" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-orange-200 dark:bg-orange-700 rounded", children: "Zone 4-5" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "8x400m at 85-95% max HR, 90 sec recovery jog" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Wednesday: Easy Run" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-blue-200 dark:bg-blue-700 rounded", children: "Zone 2" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "45 min at 60-70% max HR" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Thursday: Threshold Intervals" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-orange-200 dark:bg-orange-700 rounded", children: "Zone 4" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "4x1 mile at 80-85% max HR, 2 min recovery" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Friday: Rest Day" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded", children: "Rest" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Complete rest or light stretching only" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Saturday: Tempo Run" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-green-200 dark:bg-green-700 rounded", children: "Zone 3" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "60 min with 30-40 min at 70-80% max HR" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Sunday: Long Easy Run" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-blue-200 dark:bg-blue-700 rounded", children: "Zone 2" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "75-90 min at 60-70% max HR" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-xl mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🔥" }),
              " Fat Loss & Fitness (Beginner-Intermediate)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Monday: Steady Cardio" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-blue-200 dark:bg-blue-700 rounded", children: "Zone 2" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "30-45 min at 60-70% max HR + strength training" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Tuesday: HIIT Workout" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-red-200 dark:bg-red-700 rounded", children: "Zone 4-5" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "30 min: 1 min hard/2 min easy intervals at 80-95% max HR" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Wednesday: Active Recovery" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded", children: "Zone 1" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "30 min walk, yoga, or swimming at 50-60% max HR" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Thursday: Tempo Cardio" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-green-200 dark:bg-green-700 rounded", children: "Zone 3" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "40 min at 70-80% max HR + strength training" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Friday: HIIT or Circuit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-red-200 dark:bg-red-700 rounded", children: "Zone 4-5" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "30 min circuit training or 30 sec on/30 sec off intervals" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Saturday: Long Cardio" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-blue-200 dark:bg-blue-700 rounded", children: "Zone 2" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "45-60 min at 60-70% max HR (run, bike, hike)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Sunday: Rest or Light Activity" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded", children: "Zone 1" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Rest or 20-30 min easy walk/stretching" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-teal-100 dark:bg-teal-900/30 rounded-xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold text-lg mb-3 flex items-center gap-2 text-teal-800 dark:text-teal-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5" }),
            "Training Principles for All Programs"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-teal-600 dark:text-teal-400 mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "80/20 Rule:" }),
                " 80% of training at low-moderate intensity (Zones 1-2), 20% at high intensity (Zones 3-5)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-teal-600 dark:text-teal-400 mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Progressive overload:" }),
                " Gradually increase duration, frequency, or intensity"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-teal-600 dark:text-teal-400 mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Recovery is crucial:" }),
                " Hard days should be really hard, easy days really easy"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-teal-600 dark:text-teal-400 mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Listen to your body:" }),
                " Adjust based on HRV, fatigue, and overall feeling"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-teal-600 dark:text-teal-400 mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Include strength training:" }),
                " 2-3 sessions per week for balanced fitness"
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "animate-fade-in", style: { animationDelay: "1s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900 dark:to-slate-900 rounded-2xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-gray-700 to-slate-700 dark:from-gray-300 dark:to-slate-300 bg-clip-text text-transparent", children: "❓ Frequently Asked Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-semibold text-lg text-gray-900 dark:text-gray-100 list-none flex items-center justify-between", children: [
            "How accurate is the 220-minus-age formula?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-400 leading-relaxed", children: "The 220-minus-age formula has a standard deviation of ±10-12 bpm, making it a rough estimate. It tends to overestimate max HR for younger people and underestimate for older adults. For more accuracy, consider a graded exercise test or field test (e.g., all-out 2-3 minute effort). However, the formula is sufficient for general training zone guidance. If using heart rate zones seriously, consider getting your actual max HR tested." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-semibold text-lg text-gray-900 dark:text-gray-100 list-none flex items-center justify-between", children: [
            "Should I use max HR or heart rate reserve for zones?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-400 leading-relaxed", children: "Both methods work, but heart rate reserve (HRR, also called Karvonen method) is generally more accurate. HRR accounts for your resting heart rate and tends to align better with metabolic zones. The calculator above uses HRR if you provide your resting heart rate. If you don't know your resting HR, measure it first thing in the morning before getting out of bed for 3-5 days and average the results." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-semibold text-lg text-gray-900 dark:text-gray-100 list-none flex items-center justify-between", children: [
            "Why is my heart rate higher than expected during exercise?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-400 leading-relaxed", children: "Several factors can elevate heart rate beyond expected zones: dehydration (increases HR by 5-10 bpm), heat and humidity, caffeine, stress or anxiety, illness or infection, altitude, poor sleep, or overtraining. Cardiac drift also occurs during long efforts—your heart rate gradually increases even at the same pace due to dehydration and rising core temperature. If consistently high, consult a doctor to rule out underlying conditions." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-semibold text-lg text-gray-900 dark:text-gray-100 list-none flex items-center justify-between", children: [
            "Can I do all my training in Zone 2 for fat loss?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-400 leading-relaxed", children: "While Zone 2 training is excellent for building aerobic base and fat metabolism, exclusively training in Zone 2 isn't optimal for most goals. Including higher intensity work (Zones 4-5) increases total calorie burn, builds muscle, and creates metabolic adaptations that improve fat burning even at rest. The best approach combines Zone 2 for base endurance with strategic high-intensity intervals. Remember, nutrition creates the calorie deficit for fat loss—exercise optimizes body composition." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-semibold text-lg text-gray-900 dark:text-gray-100 list-none flex items-center justify-between", children: [
            "How do I know if I'm overtraining?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-400 leading-relaxed", children: "Overtraining symptoms include: elevated resting heart rate (5+ bpm above normal), decreased HRV, persistent fatigue, declining performance despite training, increased susceptibility to illness, mood changes (irritability, depression), sleep disturbances, loss of motivation, and prolonged muscle soreness. If experiencing several symptoms, reduce training volume/intensity for 1-2 weeks. Focus on sleep, nutrition, and stress management. Consistent HRV tracking can help catch overtraining early." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-semibold text-lg text-gray-900 dark:text-gray-100 list-none flex items-center justify-between", children: [
            "Do I need a heart rate monitor for zone training?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-400 leading-relaxed", children: "While heart rate monitors provide objective data, you can train by perceived exertion. Zone 1: very easy, can sing; Zone 2: comfortable, can hold conversation; Zone 3: moderate, speaking in sentences becomes challenging; Zone 4: hard, only short phrases possible; Zone 5: maximum effort, cannot speak. Chest strap monitors are most accurate. Wrist-based monitors work but can be less accurate during intervals. For serious training, invest in a quality chest strap (Polar H10, Garmin HRM-Pro)." })
        ] })
      ] })
    ] }) })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    EnhancedHealthCalculatorLayout,
    {
      title: "Heart Rate Zone Calculator",
      description: "Calculate your personalized heart rate training zones for optimal workout intensity",
      category: "Fitness",
      metaTitle: "Heart Rate Zone Calculator - Training Zones Based on Max HR",
      metaDescription: "Calculate your personalized heart rate training zones for optimal workout intensity. Improve endurance, burn fat, and enhance athletic performance.",
      calculatorContent: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/50 dark:to-pink-950/50 rounded-xl p-6 shadow-sm animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "age", className: "flex items-center gap-2 text-gray-700 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4 text-red-600" }),
                "Age (years)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "age",
                  type: "number",
                  value: age,
                  onChange: (e) => setAge(e.target.value),
                  placeholder: "Enter your age"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "restingHR", className: "flex items-center gap-2 text-gray-700 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-red-600" }),
                "Resting Heart Rate (optional)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "restingHR",
                  type: "number",
                  value: restingHR,
                  onChange: (e) => setRestingHR(e.target.value),
                  placeholder: "Enter resting HR (bpm)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Measure first thing in the morning before getting out of bed" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculateZones, className: "flex-1 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4 mr-2" }),
              "Calculate Zones"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: reset, variant: "outline", className: "flex-1", children: "Reset" })
          ] })
        ] }),
        zones && maxHR && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/50 dark:to-pink-950/50 border-red-200 dark:border-red-800 animate-slide-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-red-700 dark:text-red-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5" }),
            "Your Heart Rate Training Zones"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-2", children: "Estimated Maximum Heart Rate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-red-600 dark:text-red-400", children: [
                maxHR,
                " bpm"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4 text-red-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { className: "text-red-800 dark:text-red-200", children: "These zones are estimates. For personalized training, consider getting your max HR tested professionally." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: zones.map((zone, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `bg-gradient-to-r ${zone.color} rounded-xl p-4 text-white shadow-md transform hover:scale-105 transition-transform duration-300 animate-slide-up`,
                style: { animationDelay: `${index * 0.1}s` },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-lg", children: zone.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm bg-white/20 px-2 py-1 rounded", children: zone.percentage })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold mb-2", children: [
                    zone.min,
                    " - ",
                    zone.max,
                    " bpm"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-90 mb-3", children: zone.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 text-xs opacity-90", children: zone.benefits.map((benefit, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "• ",
                    benefit
                  ] }, i)) })
                ]
              },
              index
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              HealthSocialShare,
              {
                title: "Check out my heart rate training zones!",
                resultText: `My max heart rate is ${maxHR} bpm. Zone 2 training: ${zones[1].min}-${zones[1].max} bpm for fat burning and endurance.`
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
  HeartRateZoneCalculator as default
};
