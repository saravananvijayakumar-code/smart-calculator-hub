import { n as createLucideIcon, r as reactExports, j as jsxRuntimeExports, S as SEOHead, d as Clock } from "./index-C_OXA6OQ.js";
import { A as AppleStyleCard } from "./AppleStyleCard-bNXb4kfM.js";
import { A as AppleStyleButton } from "./AppleStyleButton-YsygnGc_.js";
import { A as AppleStyleInput } from "./AppleStyleInput-BFag-KzQ.js";
import { A as AIAnalysis } from "./AIAnalysis-DnR9Up6F.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { P as Play } from "./play-CjTHPcf0.js";
import { C as Coffee } from "./coffee--BsRircb.js";
import { M as Moon } from "./moon-Bl8ilOKt.js";
import "./loader-circle-BYW7QwsU.js";
import "./badge-fo2YvZos.js";
import "./tabs-BNSAX0su.js";
import "./brain-U3SZm3t9.js";
import "./target-1ApqtYDG.js";
import "./circle-check-big-BoxGYPKG.js";
import "./share-2-ViScha7M.js";
import "./link-DxXhzsoi.js";
import "./copy-DGMuG98H.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./linkedin-BSJyfSWT.js";
import "./message-circle-Bn7lRM51.js";
import "./mail-CbNEH7Kl.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 3v18", key: "bbkbws" }],
  ["path", { d: "M3 7.5h4", key: "zfgn84" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 16.5h4", key: "1230mu" }],
  ["path", { d: "M17 3v18", key: "in4fa5" }],
  ["path", { d: "M17 7.5h4", key: "myr1c1" }],
  ["path", { d: "M17 16.5h4", key: "go4c1d" }]
];
const Film = createLucideIcon("film", __iconNode$2);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",
      key: "10td1f"
    }
  ],
  ["path", { d: "M10 22 9 8", key: "yjptiv" }],
  ["path", { d: "m14 22 1-14", key: "8jwc8b" }],
  [
    "path",
    {
      d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",
      key: "1qo33t"
    }
  ]
];
const Popcorn = createLucideIcon("popcorn", __iconNode$1);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", ry: "2", key: "10ag99" }],
  ["polyline", { points: "17 2 12 7 7 2", key: "11pgbg" }]
];
const Tv = createLucideIcon("tv", __iconNode);
function HowLongToWatchCalculator() {
  const [showType, setShowType] = reactExports.useState("tv");
  const [episodes, setEpisodes] = reactExports.useState("");
  const [episodeLength, setEpisodeLength] = reactExports.useState("45");
  const [movies, setMovies] = reactExports.useState("");
  const [movieLength, setMovieLength] = reactExports.useState("120");
  const [result, setResult] = reactExports.useState(null);
  const [showAI, setShowAI] = reactExports.useState(false);
  const calculateWatchTime = () => {
    let totalMinutes = 0;
    if (showType === "tv") {
      const numEpisodes = parseInt(episodes) || 0;
      const lengthPerEpisode = parseInt(episodeLength) || 0;
      totalMinutes = numEpisodes * lengthPerEpisode;
    } else {
      const numMovies = parseInt(movies) || 0;
      const lengthPerMovie = parseInt(movieLength) || 0;
      totalMinutes = numMovies * lengthPerMovie;
    }
    const totalHours = totalMinutes / 60;
    const days = totalHours / 24;
    const weeks = days / 7;
    const marathonHours = totalHours / 8;
    const marathonDays = marathonHours / 24;
    const sleepNights = Math.ceil(totalHours / 8);
    const coffeeBreaks = Math.ceil(totalHours / 2);
    const snackBreaks = Math.ceil(totalHours / 1.5);
    const schedule = {
      oneHourDaily: Math.ceil(totalHours / 1),
      twoHoursDaily: Math.ceil(totalHours / 2),
      weekendBinge: Math.ceil(totalHours / 16)
    };
    setResult({
      totalMinutes,
      totalHours,
      days,
      weeks,
      marathonHours,
      marathonDays,
      sleepNights,
      coffeeBreaks,
      snackBreaks,
      schedule
    });
    setShowAI(true);
  };
  const formatTime = (hours) => {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    if (h === 0) return `${m} minutes`;
    if (m === 0) return `${h} hour${h !== 1 ? "s" : ""}`;
    return `${h} hour${h !== 1 ? "s" : ""} ${m} min`;
  };
  result ? `📺 I need ${formatTime(result.totalHours)} to finish my watchlist! That's ${result.days.toFixed(1)} days of non-stop viewing! Calculate your binge time at` : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "How Long to Watch Calculator 📺 - Binge Time Calculator | Smart Calculator Hubs",
        description: "Calculate exactly how long it takes to binge-watch TV shows and movies! Plan your watchlist, get viewing schedules, and share your binge goals. Free binge-watch time calculator!",
        keywords: "binge watch calculator, how long to watch, tv show time calculator, movie marathon calculator, netflix calculator, viewing time calculator, watchlist planner"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tv, { className: "w-10 h-10 text-purple-600" }),
          "How Long to Watch Calculator 📺"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Calculate exactly how much time you need to binge your favorite TV shows and movies! Get personalized viewing schedules and fun insights." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-6 h-6 text-purple-600" }),
              "Calculate Your Binge Time"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setShowType("tv"),
                  className: `flex-1 p-4 rounded-xl border-2 transition-all ${showType === "tv" ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20 shadow-lg" : "border-gray-200 dark:border-gray-700 hover:border-purple-300"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Tv, { className: "w-8 h-8 mx-auto mb-2 text-purple-600" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-gray-900 dark:text-white", children: "TV Show" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setShowType("movie"),
                  className: `flex-1 p-4 rounded-xl border-2 transition-all ${showType === "movie" ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20 shadow-lg" : "border-gray-200 dark:border-gray-700 hover:border-purple-300"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { className: "w-8 h-8 mx-auto mb-2 text-purple-600" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-gray-900 dark:text-white", children: "Movies" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              showType === "tv" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Number of Episodes",
                    type: "number",
                    value: episodes,
                    onChange: (e) => setEpisodes(e.target.value),
                    placeholder: "e.g., 62 (Breaking Bad)",
                    min: "1"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Episode Length (minutes)",
                    type: "number",
                    value: episodeLength,
                    onChange: (e) => setEpisodeLength(e.target.value),
                    placeholder: "e.g., 45",
                    min: "1"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-800 dark:text-blue-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "💡 Quick Examples:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "• Breaking Bad: 62 eps × 47 min",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "• Friends: 236 eps × 22 min",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "• Game of Thrones: 73 eps × 57 min"
                ] }) })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Number of Movies",
                    type: "number",
                    value: movies,
                    onChange: (e) => setMovies(e.target.value),
                    placeholder: "e.g., 22 (MCU Phase 1-3)",
                    min: "1"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AppleStyleInput,
                  {
                    label: "Average Movie Length (minutes)",
                    type: "number",
                    value: movieLength,
                    onChange: (e) => setMovieLength(e.target.value),
                    placeholder: "e.g., 120",
                    min: "1"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-800 dark:text-blue-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "💡 Quick Examples:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "• Marvel MCU (23 films): ~130 min avg",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "• Harry Potter (8 films): ~140 min avg",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "• Lord of the Rings Extended (3): ~230 min avg"
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                AppleStyleButton,
                {
                  onClick: calculateWatchTime,
                  disabled: showType === "tv" ? !episodes : !movies,
                  className: "w-full",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 mr-2" }),
                    "Calculate Watch Time"
                  ]
                }
              )
            ] })
          ] }) }),
          result && /* @__PURE__ */ jsxRuntimeExports.jsx(AppleStyleCard, { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-4", children: showType === "tv" ? "📺" : "🎬" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2", children: formatTime(result.totalHours) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl text-gray-600 dark:text-gray-300", children: "Total Viewing Time" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-purple-600 dark:text-purple-400", children: result.days.toFixed(1) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Days Non-Stop" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-4 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-blue-600 dark:text-blue-400", children: result.weeks.toFixed(1) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Weeks Non-Stop" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Coffee, { className: "w-5 h-5 text-orange-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-orange-800 dark:text-orange-300", children: "Coffee Breaks Needed" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-orange-600 dark:text-orange-400", children: [
                  result.coffeeBreaks,
                  " breaks"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "(Every 2 hours of watching)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-pink-50 dark:bg-pink-900/20 rounded-xl p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Popcorn, { className: "w-5 h-5 text-pink-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-pink-800 dark:text-pink-300", children: "Snack Breaks Needed" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-pink-600 dark:text-pink-400", children: [
                  result.snackBreaks,
                  " breaks"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "(Every 1.5 hours of watching)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-5 h-5 text-indigo-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-indigo-800 dark:text-indigo-300", children: "Sleep Nights" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-indigo-600 dark:text-indigo-400", children: [
                  result.sleepNights,
                  " nights"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "(If watching 8 hours per day)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900 dark:text-white mb-4", children: "📅 Suggested Viewing Schedules" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "1 hour per day:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-purple-600 dark:text-purple-400", children: [
                    result.schedule.oneHourDaily,
                    " days"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "2 hours per day:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-blue-600 dark:text-blue-400", children: [
                    result.schedule.twoHoursDaily,
                    " days"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Weekend binge (8hrs/day):" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-pink-600 dark:text-pink-400", children: [
                    result.schedule.weekendBinge,
                    " days"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ExportShareButtons,
              {
                calculatorType: "how-long-to-watch",
                inputs: { type: showType, count: showType === "tv" ? episodes : movies, length: showType === "tv" ? episodeLength : movieLength },
                results: result
              }
            ) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: showAI && result && /* @__PURE__ */ jsxRuntimeExports.jsx(
          AIAnalysis,
          {
            analysisRequest: {
              calculatorType: "how-long-to-watch",
              data: {
                type: showType,
                count: showType === "tv" ? episodes : movies,
                length: showType === "tv" ? episodeLength : movieLength,
                ...result
              }
            }
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 prose prose-lg max-w-none dark:prose-invert", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-6", children: "How Long to Watch Calculator: Your Complete Guide to Binge-Watching 📺" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-gray-600 dark:text-gray-300 leading-relaxed", children: [
          "Ever wondered exactly how long it would take to binge-watch your favorite TV series or complete that movie marathon you've been planning? Our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "How Long to Watch Calculator" }),
          " gives you precise viewing times, smart scheduling options, and fun insights to help you plan your perfect binge-watching session. Whether you're tackling Game of Thrones, the entire MCU, or catching up on that show everyone's talking about, we've got you covered!"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4", children: "What Is a Binge-Watch Time Calculator? 🎬" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "A binge-watch time calculator (also called a viewing time calculator or watchlist calculator) helps you determine exactly how much time you'll need to complete watching a TV series, movie franchise, or any collection of video content. Instead of manually multiplying episodes by runtime and converting minutes to hours and days, our calculator does all the math instantly and provides helpful scheduling suggestions." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "In today's streaming era, with endless content at our fingertips on Netflix, Hulu, Disney+, HBO Max, Prime Video, and countless other platforms, planning your viewing time has become essential. Whether you're preparing for a weekend marathon, planning vacation viewing, or just curious about the time commitment for a new series, this calculator is your perfect companion." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4", children: "How to Use the How Long to Watch Calculator ⚡" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Using our calculator is incredibly simple - just follow these quick steps:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Choose Your Content Type:" }),
            ' Select either "TV Show" for series or "Movies" for film collections.'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Enter the Count:" }),
            " Input the number of episodes (for TV) or number of movies you plan to watch."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Set the Length:" }),
            " Enter the average runtime in minutes. Most streaming platforms show this information."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Calculate:" }),
            ' Click "Calculate Watch Time" to get your instant results with detailed breakdown.'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Explore Schedules:" }),
            " Check out the suggested viewing schedules based on different daily watching habits."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Get AI Insights:" }),
            " Our AI provides personalized recommendations and fun facts about your binge plan!"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Share Your Plans:" }),
            " Share your epic binge goals on social media to find viewing buddies!"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4", children: "Popular TV Show Binge Times 📊" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Curious about how long it takes to watch popular series? Here are some fan-favorite shows and their total viewing times:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-purple-700 dark:text-purple-300 mb-3", children: "Breaking Bad" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Episodes:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "62" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Avg Runtime:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "47 minutes" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-purple-200 dark:border-purple-700 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 dark:text-white font-bold", children: "Total Time:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-purple-600 dark:text-purple-400", children: "~48 hours (2 days)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-blue-700 dark:text-blue-300 mb-3", children: "Game of Thrones" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Episodes:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "73" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Avg Runtime:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "57 minutes" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-blue-200 dark:border-blue-700 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 dark:text-white font-bold", children: "Total Time:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-blue-600 dark:text-blue-400", children: "~70 hours (2.9 days)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-green-700 dark:text-green-300 mb-3", children: "Friends" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Episodes:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "236" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Avg Runtime:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "22 minutes" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-green-200 dark:border-green-700 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 dark:text-white font-bold", children: "Total Time:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-green-600 dark:text-green-400", children: "~87 hours (3.6 days)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-orange-700 dark:text-orange-300 mb-3", children: "The Office (US)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Episodes:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "201" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Avg Runtime:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "22 minutes" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-orange-200 dark:border-orange-700 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 dark:text-white font-bold", children: "Total Time:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-orange-600 dark:text-orange-400", children: "~74 hours (3.1 days)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-pink-700 dark:text-pink-300 mb-3", children: "Stranger Things" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Episodes:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "42 (S1-4)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Avg Runtime:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "51 minutes" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-pink-200 dark:border-pink-700 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 dark:text-white font-bold", children: "Total Time:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-pink-600 dark:text-pink-400", children: "~36 hours (1.5 days)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-indigo-700 dark:text-indigo-300 mb-3", children: "The Sopranos" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Episodes:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "86" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Avg Runtime:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "55 minutes" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-indigo-200 dark:border-indigo-700 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 dark:text-white font-bold", children: "Total Time:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-indigo-600 dark:text-indigo-400", children: "~79 hours (3.3 days)" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4", children: "Popular Movie Marathon Times 🎥" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Planning a movie marathon? Here's how long it takes to complete popular film franchises:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-red-700 dark:text-red-300 mb-3", children: "Marvel Cinematic Universe (MCU)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Movies:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "33 films" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Avg Runtime:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "~130 minutes" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-red-200 dark:border-red-700 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 dark:text-white font-bold", children: "Total Time:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-red-600 dark:text-red-400", children: "~72 hours (3 days)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-2xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-yellow-700 dark:text-yellow-300 mb-3", children: "Harry Potter" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Movies:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "8 films" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Avg Runtime:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "~140 minutes" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-yellow-200 dark:border-yellow-700 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 dark:text-white font-bold", children: "Total Time:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-yellow-600 dark:text-yellow-400", children: "~19 hours" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-emerald-700 dark:text-emerald-300 mb-3", children: "Lord of the Rings (Extended)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Movies:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "3 films" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Avg Runtime:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "~230 minutes" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-emerald-200 dark:border-emerald-700 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 dark:text-white font-bold", children: "Total Time:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-emerald-600 dark:text-emerald-400", children: "~11.5 hours" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-violet-700 dark:text-violet-300 mb-3", children: "Star Wars (All Films)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Movies:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "12 films" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 dark:text-gray-300", children: "Avg Runtime:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "~133 minutes" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-violet-200 dark:border-violet-700 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-900 dark:text-white font-bold", children: "Total Time:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-violet-600 dark:text-violet-400", children: "~27 hours" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4", children: "Smart Binge-Watching Strategies 🧠" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Want to maximize your viewing experience without burning out? Follow these proven binge-watching strategies:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-gray-900 dark:text-white mb-4", children: "The Sustainable Approach (Recommended)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 dark:text-blue-400", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1-2 Hours Daily:" }),
                " Perfect for working professionals. Fits easily into evening routines without disrupting sleep."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-600 dark:text-purple-400", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Take Breaks:" }),
                " Stand up and stretch every episode. Your back and eyes will thank you!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pink-600 dark:text-pink-400", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Hydrate:" }),
                " Keep water nearby. Caffeine is fine but water is essential for long sessions."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-600 dark:text-indigo-400", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Plan Meals:" }),
                " Prep snacks beforehand so you don't survive on junk food alone."
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-gray-900 dark:text-white mb-4", children: "The Weekend Warrior" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-600 dark:text-orange-400", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "8-10 Hours Per Day:" }),
                " Perfect for weekends when you can dedicate the whole day to viewing."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 dark:text-red-400", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Start Early:" }),
                " Begin in the morning to maximize daylight hours and avoid all-nighters."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pink-600 dark:text-pink-400", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Schedule Breaks:" }),
                " Set timers for breaks every 2 hours. Move around, eat proper meals."
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-gray-900 dark:text-white mb-4", children: "The Vacation Marathon" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-gray-700 dark:text-gray-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 dark:text-green-400", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "12+ Hours Daily:" }),
                " When you have time off and want to fully immerse yourself."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 dark:text-emerald-400", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Create Ambiance:" }),
                " Dim lights, comfy setup, good sound system - make it an experience!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-teal-600 dark:text-teal-400", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Buddy System:" }),
                " Binge with friends or family to make it a social event with discussion breaks."
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4", children: "Health Tips for Long Viewing Sessions 💪" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Binge-watching doesn't have to be unhealthy! Follow these tips to stay comfortable and healthy during extended viewing:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border-l-4 border-blue-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-blue-700 dark:text-blue-300 mb-2", children: "👀 Eye Care" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Follow the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds. Adjust screen brightness to match room lighting. Consider blue light filtering glasses for evening viewing." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border-l-4 border-green-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-green-700 dark:text-green-300 mb-2", children: "🧘 Posture & Movement" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Maintain good posture with proper back support. Stand up and stretch between episodes. Do simple exercises during opening/closing credits. Walk around during longer breaks. Set timers to remind yourself to move." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 dark:bg-purple-900/20 rounded-xl p-5 border-l-4 border-purple-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-purple-700 dark:text-purple-300 mb-2", children: "🍎 Nutrition & Hydration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Prep healthy snacks in advance: fruit, nuts, veggies with hummus. Drink water regularly - aim for 8oz per hour. Limit caffeine after 2 PM if watching in evening. Eat proper meals, not just snacks." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 dark:bg-orange-900/20 rounded-xl p-5 border-l-4 border-orange-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-orange-700 dark:text-orange-300 mb-2", children: "😴 Sleep Quality" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: `Avoid screens 1 hour before bed when possible. If watching late, use night mode/blue light filter. Don't sacrifice sleep to finish "just one more episode" - set a bedtime alarm. Quality sleep is more important than finishing the season tonight.` })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4", children: "The Psychology of Binge-Watching 🧠" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Binge-watching has become a cultural phenomenon in the streaming era. Understanding why we binge can help us enjoy it more mindfully:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Why We Can't Stop Watching:" }),
          " Shows are designed with cliffhangers and compelling narratives that trigger our brain's reward system. The autoplay feature removes friction, making it effortless to continue. We form parasocial relationships with characters, making it emotionally rewarding to spend time in their world. The fear of missing out (FOMO) drives us to stay current with cultural conversations."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-300 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "The Benefits:" }),
          " Binge-watching isn't all bad! It can provide stress relief, emotional connection, and a sense of accomplishment. It's a form of self-care when done mindfully. Shared viewing experiences create bonding opportunities with friends and family. It allows for deeper immersion in complex narratives and character development."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-300 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Finding Balance:" }),
          " The key is intentional viewing rather than mindless consumption. Plan your binge sessions, set time limits, and ensure they don't interfere with sleep, work, or relationships. Treat it as a special activity rather than default behavior. Mix in other hobbies and activities for a well-rounded lifestyle."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4", children: "Best Streaming Platforms for Binge-Watching 📱" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Different platforms excel at different types of content. Here's where to find the best binge-worthy shows:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 dark:bg-red-900/20 rounded-xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-red-700 dark:text-red-300 mb-2", children: "Netflix" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "The binge-watching pioneer. Releases full seasons at once. Known for Stranger Things, The Crown, Squid Game, Wednesday." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-purple-700 dark:text-purple-300 mb-2", children: "HBO Max" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Premium content with complete series. Game of Thrones, Succession, The Last of Us, House of the Dragon." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-blue-700 dark:text-blue-300 mb-2", children: "Disney+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Marvel, Star Wars, and classics. The Mandalorian, Loki, WandaVision, Bluey for families." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-cyan-700 dark:text-cyan-300 mb-2", children: "Prime Video" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: "Original series and classics. The Boys, Reacher, The Marvelous Mrs. Maisel, Jack Ryan." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4", children: "Frequently Asked Questions 🤔" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 my-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-gray-900 dark:text-white mb-2", children: "How accurate is this calculator?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Our calculator is highly accurate based on the runtime information you provide. Note that actual viewing time may vary slightly due to opening credits you skip, recap segments, or if you rewatch certain scenes. We calculate based on the full stated runtime." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-gray-900 dark:text-white mb-2", children: "Should I include credits in episode length?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Use the full episode runtime shown on the streaming platform, which includes credits. Most streaming services list the total runtime. If you typically skip credits, you can subtract 1-2 minutes per episode from your total time estimate." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-gray-900 dark:text-white mb-2", children: "What's a healthy amount of binge-watching?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Health experts suggest limiting screen time to 2-3 hours per day for adults, with regular breaks. However, occasional weekend binges or vacation marathons are fine as long as you maintain good posture, stay hydrated, take breaks, and don't sacrifice sleep or responsibilities." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg text-gray-900 dark:text-white mb-2", children: "Can I calculate multiple shows at once?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Currently, the calculator handles one show or movie collection at a time. For multiple shows, calculate each separately and add the total hours together. We recommend planning one series at a time to avoid overwhelming your schedule!" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4", children: "Start Planning Your Perfect Binge Session! 🎉" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "Ready to plan your next epic viewing session? Use our free How Long to Watch Calculator now to get precise viewing times, smart scheduling suggestions, and fun AI insights about your binge plans. Whether you're tackling a new obsession or finally catching up on that show everyone's been talking about, we'll help you plan the perfect viewing experience!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 mt-4", children: "Remember: binge-watching should be enjoyable, not stressful. Use our calculator to plan realistically, take care of yourself during long sessions, and most importantly - have fun getting lost in the stories you love! 📺✨" })
      ] })
    ] }) }) })
  ] });
}
export {
  HowLongToWatchCalculator as default
};
