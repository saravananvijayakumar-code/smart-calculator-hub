import { r as reactExports, j as jsxRuntimeExports, f as Card, k as CardContent, a4 as Label, V as Input, B as Button, d as Clock } from "./index-CK9G4vW7.js";
import { u as useTimerStore, S as SmartTimerLayout } from "./SmartTimerLayout-Bz3CnVkz.js";
import { A as AutoAdSlot } from "./AutoAdSlot-DNRO9HTk.js";
import { u as useFullscreen, M as Maximize } from "./useKeyboardShortcuts-DtcviwfM.js";
import { C as Calendar } from "./calendar-DlIzODy7.js";
import "./middleware-Xu_RK28m.js";
import "./StructuredData-Cx_xmqIq.js";
import "./timer-yNw5m9Mi.js";
import "./AdsterraSlot-DCXIaKPD.js";
function EventCountdownPage() {
  const { eventDate, eventName, setEventDate, setEventName, clearEvent, branding } = useTimerStore();
  const [localEventName, setLocalEventName] = reactExports.useState(eventName || "");
  const [localDate, setLocalDate] = reactExports.useState("");
  const [localTime, setLocalTime] = reactExports.useState("");
  const [timeRemaining, setTimeRemaining] = reactExports.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const timerDisplayRef = reactExports.useRef(null);
  const { isFullscreen, toggleFullscreen, isSupported: isFullscreenSupported } = useFullscreen(timerDisplayRef);
  reactExports.useEffect(() => {
    if (!eventDate) return;
    const interval = setInterval(() => {
      const now = (/* @__PURE__ */ new Date()).getTime();
      const target = new Date(eventDate).getTime();
      const diff = target - now;
      if (diff <= 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
      const hours = Math.floor(diff % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
      const minutes = Math.floor(diff % (1e3 * 60 * 60) / (1e3 * 60));
      const seconds = Math.floor(diff % (1e3 * 60) / 1e3);
      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1e3);
    return () => clearInterval(interval);
  }, [eventDate]);
  const handleSetEvent = () => {
    if (localEventName && localDate) {
      const dateTimeString = localTime ? `${localDate}T${localTime}` : `${localDate}T00:00`;
      const date = new Date(dateTimeString);
      setEventDate(date);
      setEventName(localEventName);
    }
  };
  const isPast = eventDate && new Date(eventDate).getTime() <= (/* @__PURE__ */ new Date()).getTime();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SmartTimerLayout,
    {
      title: "Event Countdown",
      description: "Count down to important events, deadlines, launches, and special occasions. Never miss a milestone with our event countdown timer.",
      keywords: "event countdown, countdown to date, days until, event timer, deadline countdown",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
          !eventDate ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "backdrop-blur-xl bg-card/50 border-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-6", children: "Set Your Event" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "event-name", children: "Event Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "event-name",
                    value: localEventName,
                    onChange: (e) => setLocalEventName(e.target.value),
                    placeholder: "e.g., Product Launch, Birthday, Wedding",
                    className: "text-lg"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "event-date", children: "Date" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "event-date", type: "date", value: localDate, onChange: (e) => setLocalDate(e.target.value) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "event-time", children: "Time (optional)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "event-time", type: "time", value: localTime, onChange: (e) => setLocalTime(e.target.value) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "lg",
                  className: "w-full text-lg",
                  onClick: handleSetEvent,
                  disabled: !localEventName || !localDate,
                  style: { backgroundColor: branding.themeColor },
                  children: "Start Countdown"
                }
              )
            ] })
          ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              ref: timerDisplayRef,
              className: `backdrop-blur-xl bg-card/50 border-2 shadow-2xl transition-all ${isFullscreen ? "bg-background border-0" : ""}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: `${isFullscreen ? "p-0 h-screen flex items-center justify-center" : "p-8 md:p-12"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-center space-y-8 ${isFullscreen ? "w-full max-w-6xl" : ""}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `font-bold mb-2 ${isFullscreen ? "text-6xl" : "text-3xl md:text-4xl"}`, children: eventName }),
                  !isFullscreen && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "inline w-4 h-4 mr-2" }),
                    new Date(eventDate).toLocaleDateString(void 0, {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    }),
                    new Date(eventDate).toLocaleTimeString() !== "12:00:00 AM" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "inline w-4 h-4 ml-4 mr-2" }),
                      new Date(eventDate).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: isPast ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-bold text-red-500 ${isFullscreen ? "text-6xl" : "text-4xl"}`, children: "Event Has Passed!" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid grid-cols-4 ${isFullscreen ? "gap-8" : "gap-4"}`, children: [
                  { label: "Days", value: timeRemaining.days },
                  { label: "Hours", value: timeRemaining.hours },
                  { label: "Minutes", value: timeRemaining.minutes },
                  { label: "Seconds", value: timeRemaining.seconds }
                ].map((unit) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `backdrop-blur-sm bg-card/30 rounded-2xl border-2 ${isFullscreen ? "p-12" : "p-6"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-bold font-mono ${isFullscreen ? "text-9xl" : "text-5xl md:text-6xl"}`, style: { color: branding.themeColor }, children: unit.value.toString().padStart(2, "0") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-muted-foreground mt-2 uppercase tracking-wider ${isFullscreen ? "text-2xl" : "text-sm"}`, children: unit.label })
                ] }, unit.label)) }) }, isPast ? "past" : "future"),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "lg", onClick: clearEvent, children: "Change Event" }),
                  isFullscreenSupported && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "lg",
                      onClick: toggleFullscreen,
                      className: isFullscreen ? "w-20 h-20" : "",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize, { className: isFullscreen ? "w-8 h-8" : "w-5 h-5" })
                    }
                  )
                ] })
              ] }) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content", className: "my-8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "backdrop-blur-xl bg-card/50 border-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6 md:p-8 prose prose-sm max-w-none dark:prose-invert", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "⏰ The Complete Guide to Event Countdown Timers: Make Every Moment Count" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-6 rounded-xl mb-6 border-2 border-blue-200 dark:border-blue-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold mb-2", children: "✨ The Psychology of Anticipation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", children: "Research shows that anticipating positive events can boost happiness levels by up to 25%! A countdown timer transforms waiting from passive anxiety into active excitement, creating emotional momentum toward your special moment." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-blue-700 dark:text-blue-400", children: "🎯 Why Event Countdowns Are More Than Just Numbers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed", children: "In our fast-paced digital world, time can feel abstract and slippery. Event countdown timers provide something powerful: tangible visualization of time's passage. Whether you're counting down to a product launch that could change your business, a wedding that represents years of love, or a vacation you've been dreaming about for months, seeing the days, hours, minutes, and seconds tick away creates an emotional connection to the future." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed mt-4", children: `The magic happens in your brain's reward centers. Every glance at a decreasing countdown triggers a tiny dopamine release—your brain's way of saying "something good is coming!" This neurological response builds genuine excitement and helps you stay motivated through preparation periods that might otherwise feel overwhelming.` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950/30 p-6 rounded-xl my-6 border-l-4 border-green-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-3 text-green-700 dark:text-green-400", children: "🧠 The Neuroscience of Countdown Excitement" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: `Neuroscientists have discovered that anticipation of positive events activates the same brain regions as actually experiencing them. This "pre-enjoyment" can sometimes be even more pleasurable than the event itself! By visualizing your countdown daily, you're essentially extending the joy of your special moment across weeks or months, rather than limiting it to a single day.` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-blue-700 dark:text-blue-400", children: "🌟 Creative Ways to Use Event Countdown Timers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-pink-500",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "💕 Personal Milestones & Celebrations" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Transform ordinary waiting into extraordinary anticipation:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Weddings:" }),
                        " Build excitement for your big day while keeping track of vendor deadlines and final preparations"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Anniversaries:" }),
                        " Celebrate relationship milestones by counting down to each year together"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Birthdays:" }),
                        ' Make "birthday month" official by watching the countdown from 30 days out'
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Baby Due Dates:" }),
                        " Track pregnancy milestones and prepare for your new arrival with visual time tracking"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Graduations:" }),
                        " Build momentum toward your achievement and keep study motivation high"
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-blue-500",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🚀 Business & Professional Events" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Create urgency and maintain team focus:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Product Launches:" }),
                        " Rally your team around launch day with a visible countdown in your workspace"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Campaign Deadlines:" }),
                        " Keep marketing campaigns on track with time-sensitive countdowns"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Conference Presentations:" }),
                        " Build preparation urgency without last-minute panic"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Funding Rounds:" }),
                        " Maintain investor pitch readiness by tracking closing dates"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Project Deliverables:" }),
                        " Transform abstract deadlines into concrete, visible time pressure"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Quarterly Reviews:" }),
                        " Prepare thoroughly by watching the countdown from weeks out"
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "✈️ Travel & Adventure Countdowns" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Maximize pre-trip excitement and preparation:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Vacations:" }),
                        " Extend the joy of your trip by savoring the countdown for weeks beforehand"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Study Abroad Programs:" }),
                        " Build anticipation while staying on top of visa and preparation deadlines"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sabbaticals:" }),
                        " Plan your break thoroughly while watching the countdown to freedom"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Adventure Races:" }),
                        " Track training time and maintain peak motivation through visual countdown"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Music Festivals:" }),
                        " Count down to your favorite artists while coordinating group travel plans"
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🏆 Goal Achievement & Personal Development" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Create powerful deadline pressure for self-improvement:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fitness Competitions:" }),
                        " Track training days remaining until your marathon, triathlon, or fitness challenge"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Certification Exams:" }),
                        " Maintain study discipline by visualizing time until test day"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Book Deadlines:" }),
                        " Keep writing momentum high with chapter or manuscript countdown timers"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Career Transitions:" }),
                        " Plan job changes or entrepreneurial launches with milestone countdowns"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sobriety Milestones:" }),
                        " Celebrate recovery progress by counting up to anniversary dates"
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-green-500",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2", children: "🎄 Seasonal & Holiday Countdowns" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Amplify the magic of special times of year:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Christmas/Hanukkah/Diwali:" }),
                        " Build family excitement starting from Thanksgiving or earlier"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "New Year's Eve:" }),
                        " Count down to fresh starts and new resolutions with visual momentum"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Summer Break:" }),
                        " Help kids track the final weeks of school with growing anticipation"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sports Season Openers:" }),
                        " Rally fan excitement for your favorite team's first game"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                        "• ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Concert Tours:" }),
                        " Track the countdown to seeing your favorite artist live"
                      ] })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-blue-700 dark:text-blue-400", children: "🎨 Maximizing Your Countdown Experience" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 p-5 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "📱 Digital Display Strategies" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Set your countdown as your phone wallpaper or computer desktop background. Every time you unlock your device, you'll get a motivational reminder of what's coming. The constant visual reinforcement keeps excitement levels high and helps with any preparation tasks you need to complete." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-5 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "👨‍👩‍👧‍👦 Shared Countdown Rituals" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Create family or team traditions around checking the countdown together. Daily breakfast countdown checks, weekly team meetings that start with the countdown, or evening family discussions about countdown milestones all build collective excitement and strengthen bonds." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 p-5 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "🎯 Milestone Markers" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Celebrate countdown milestones—100 days out, 30 days, 1 week, 24 hours. Each milestone becomes a mini-celebration and preparation checkpoint. Plan special activities or complete specific tasks at each marker to maintain momentum and ensure you're ready when the big day arrives." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 p-5 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "📸 Document the Journey" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Screenshot your countdown at significant moments or take photos of yourself with the countdown display. After the event, these images become powerful memory triggers that let you relive not just the event itself, but the entire anticipatory journey that made it special." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-blue-700 dark:text-blue-400", children: "💡 Advanced Countdown Strategies" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/30 p-6 rounded-xl my-6 border-2 border-blue-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-3", children: "⚡ The Reverse Countdown Method" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed mb-3", children: 'Instead of passively watching time decrease, assign specific tasks to countdown milestones. Create a "countdown checklist" where major tasks must be completed at 90 days, 60 days, 30 days, etc. This transforms your countdown from a passive timer into an active project management tool.' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Example for Wedding Planning:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 ml-4 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 180 days: Venue booked, photographer selected" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 120 days: Invitations designed and ordered" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 90 days: Catering menu finalized" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 60 days: Invitations mailed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 30 days: Final dress fitting" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 7 days: Final vendor confirmations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 1 day: Rehearsal and relaxation!" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 dark:bg-purple-950/30 p-6 rounded-xl my-6 border-2 border-purple-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-3", children: "🎭 The Dual Countdown Technique" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: `Run two countdowns simultaneously: one to your main event and one to a preparation deadline that's earlier. For example, if you're launching a product in 60 days, set a second countdown to "marketing materials complete" at 40 days. This creates interim urgency and prevents last-minute panic while maintaining excitement about the ultimate goal.` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-blue-700 dark:text-blue-400", children: "🎪 Making Countdown Moments More Engaging" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 my-6 text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "🎉" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Daily Countdown Rituals:" }),
                  " Check your countdown at the same time each day—morning coffee, lunch break, or evening wind-down. Consistency amplifies the anticipatory pleasure and creates a positive daily habit."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "📝" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Countdown Journaling:" }),
                  " Write a few sentences each week about your feelings as the countdown decreases. Future you will treasure these reflections on the journey toward your special moment."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "🎵" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Soundtrack Your Countdown:" }),
                  " Create a playlist that you listen to while checking your countdown. Music creates powerful emotional anchors that will make the event even more memorable."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "🎁" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Mini Milestone Rewards:" }),
                  " Treat yourself at significant countdown markers. At 50 days out, buy yourself something small. At 25 days, enjoy a favorite meal. These rewards sustain motivation and mark the passage of time meaningfully."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-blue-700 dark:text-blue-400", children: "🚫 Avoiding Countdown Pitfalls" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-l-4 border-red-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "❌ Pitfall #1: Obsessive Checking" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-2", children: "Checking the countdown every hour can turn healthy anticipation into anxiety and make time feel like it's crawling." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: "✅ Solution: Limit yourself to 1-2 scheduled countdown checks per day. Savoring is better than obsessing." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-l-4 border-red-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "❌ Pitfall #2: Neglecting the Present" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-2", children: "Getting so focused on the future event that you forget to enjoy the present moment can rob you of weeks of potential happiness." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: '✅ Solution: View the countdown as enhancement to present joy, not replacement. Use it to appreciate "the journey" as much as "the destination."' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-l-4 border-red-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "❌ Pitfall #3: Building Unrealistic Expectations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-2", children: "Months of countdown can create such high expectations that the actual event feels anticlimactic, no matter how wonderful it is." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: "✅ Solution: Focus on gratitude and presence rather than perfection. The countdown builds excitement, not demands for flawlessness." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-l-4 border-red-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: "❌ Pitfall #4: Post-Event Letdown" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-2", children: "After the event passes, you might feel empty or depressed without the daily countdown ritual to look forward to." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: "✅ Solution: Have another countdown ready to start! Always have something positive on the horizon to maintain forward-looking optimism." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-blue-700 dark:text-blue-400", children: "🌈 The Psychology of Different Time Scales" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-indigo-50 dark:bg-indigo-950/30 p-6 rounded-xl my-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-3", children: "⏱️ Understanding Time Perception" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Different countdown lengths create different psychological experiences:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-2 ml-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1-7 days:" }),
                  " Intense, immediate excitement. Perfect for maintaining energy through final preparations."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1-4 weeks:" }),
                  " Sweet spot for sustained anticipation without overwhelming anxiety. Ideal for most personal events."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1-3 months:" }),
                  " Builds deeper emotional investment. Excellent for major life events requiring significant planning."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "3-6 months:" }),
                  " Creates long-term project momentum. Best for business launches, weddings, or major career transitions."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "6-12 months:" }),
                  " Epic anticipation building. Reserve for truly transformative life events like studying abroad or major relocations."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1+ years:" }),
                  " Aspirational and motivational but requires milestone celebrations to maintain engagement throughout."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-blue-700 dark:text-blue-400", children: "🎊 Countdown Success Stories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-950/30 p-6 rounded-xl my-6 border-2 border-green-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic mb-3 text-base", children: '"Setting up a countdown to our product launch changed everything. Our team checked it every morning during standup, and it created this incredible sense of urgency mixed with excitement. We shipped on time for the first time in company history!"' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700 dark:text-green-400", children: "— Marcus L., Startup Founder" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/30 p-6 rounded-xl my-6 border-2 border-blue-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic mb-3 text-base", children: `"I set a countdown for my marathon six months out. Every single day, that ticking clock motivated me to lace up my running shoes. When race day finally arrived, I wasn't nervous—I was ready. And I finished with a personal best time!"` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-blue-700 dark:text-blue-400", children: "— Jennifer K., Marathon Runner" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 dark:bg-purple-950/30 p-6 rounded-xl my-6 border-2 border-purple-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic mb-3 text-base", children: '"Our family countdown to Disney World started 90 days out. My kids checked it every morning, and we made checking the countdown part of our routine. It turned three months of waiting into three months of building magical anticipation together."' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-purple-700 dark:text-purple-400", children: "— The Rodriguez Family" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mt-8 mb-4 text-blue-700 dark:text-blue-400", children: "🔥 Pro Tips for Countdown Masters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 my-6 text-base", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl mr-3", children: "⚡" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Start Early, But Not Too Early:" }),
                  " Begin your countdown when you have tasks to complete. Too early creates burnout; too late misses the anticipatory pleasure."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl mr-3", children: "🎯" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Include Time of Day:" }),
                  " Adding hours and minutes to countdowns for events with specific start times creates more precise excitement and helps with logistics planning."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl mr-3", children: "🌟" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Share Strategically:" }),
                  " Share your countdown with people who will amplify your excitement, not dampen it with negativity or skepticism."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl mr-3", children: "📊" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Track Multiple Events:" }),
                  " Keep several countdowns running for different goals. Life is richer when you always have something to look forward to!"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl mr-3", children: "💪" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Use Countdowns for Motivation:" }),
                  " Stuck in a rut? Set a countdown to a personal challenge or adventure. Having a date forces action and decision-making."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 p-8 rounded-2xl my-8 text-center border-4 border-blue-300 dark:border-blue-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: "🎪 Your Journey Starts Now" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base mb-6", children: "Every great moment deserves a great countdown. Whether you're tracking days until a life-changing event or hours until a simple pleasure, countdown timers transform passive waiting into active anticipation. They remind us that time isn't just something that passes—it's something we can savor, celebrate, and make meaningful." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold italic", children: "What will you count down to first? Set your event and watch the magic begin! 🎯⏰✨" })
            ] })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "backdrop-blur-xl bg-card/50 border-2 sticky top-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mb-4", children: "Popular Events" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Product launches" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Weddings & anniversaries" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Birthdays" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Project deadlines" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Holidays & vacations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Retirement dates" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "sidebar" })
        ] })
      ] })
    }
  );
}
export {
  EventCountdownPage as default
};
