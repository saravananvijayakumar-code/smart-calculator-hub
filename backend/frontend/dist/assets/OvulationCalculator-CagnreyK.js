import { r as reactExports, Q as useToast, j as jsxRuntimeExports, a6 as Alert, a5 as Info, a7 as AlertDescription, f as Card, d as Clock, a4 as Label, V as Input, B as Button, a8 as Sparkles, H as Heart, A as Activity, T as TrendingUp } from "./index-CK9G4vW7.js";
import { H as HealthSocialShare } from "./HealthSocialShare-SHMBdS6h.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { s as safeDecimal } from "./utils-C5YzN_36.js";
import { I as InFeedAd } from "./InFeedAd-qGRsmhMx.js";
import { C as CircleAlert } from "./circle-alert-DCAQyr8M.js";
import { C as Calendar } from "./calendar-DlIzODy7.js";
import { C as Copy } from "./copy-BqV-1o4k.js";
import { C as CircleCheck } from "./circle-check-CJ5pTUz4.js";
import "./share-2-SpOWc355.js";
import "./twitter-CFAqYlq6.js";
import "./facebook-BX8Qa6cK.js";
import "./message-circle-DZtFORhh.js";
import "./mail-DX6y6Mo7.js";
import "./check-DTsA1WpX.js";
import "./link-2-D14Yk-9q.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
import "./EnhancedAIAnalysis-BaYCd8m5.js";
import "./badge-6THgoC_4.js";
import "./brain-CSngUEN8.js";
import "./target-4JeIm6Yk.js";
import "./circle-check-big-B8N3lfE-.js";
import "./arrow-right-Bjdtr8dz.js";
import "./lightbulb-DKPyzLdJ.js";
function calculateOvulation(input) {
  const { lmpDate, cycleLength, lutealLength } = input;
  if (cycleLength < 21 || cycleLength > 35) {
    throw new Error("Cycle length must be between 21 and 35 days");
  }
  if (lutealLength < 12 || lutealLength > 16) {
    throw new Error("Luteal phase length must be between 12 and 16 days");
  }
  const ovulationDay = safeDecimal(cycleLength).minus(lutealLength).toNumber();
  const ovulationDate = new Date(lmpDate.getTime() + ovulationDay * 24 * 60 * 60 * 1e3);
  const fertileWindowStart = new Date(ovulationDate.getTime() - 5 * 24 * 60 * 60 * 1e3);
  const fertileWindowEnd = new Date(ovulationDate.getTime() + 1 * 24 * 60 * 60 * 1e3);
  return {
    ovulationDate,
    fertileWindowStart,
    fertileWindowEnd
  };
}
function OvulationCalculator() {
  const [lmpDate, setLmpDate] = reactExports.useState("2025-01-01");
  const [cycleLength, setCycleLength] = reactExports.useState(28);
  const [lutealLength, setLutealLength] = reactExports.useState(14);
  const [result, setResult] = reactExports.useState(null);
  const [error, setError] = reactExports.useState("");
  const { toast } = useToast();
  const calculate = () => {
    setError("");
    try {
      const lmp = new Date(lmpDate);
      const res = calculateOvulation({ lmpDate: lmp, cycleLength, lutealLength });
      setResult(res);
    } catch (err) {
      setError(err.message || "Calculation error");
      setResult(null);
    }
  };
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };
  const copyResults = () => {
    if (!result) return;
    const text = `Ovulation: ${formatDate(result.ovulationDate)}
Fertile Window: ${formatDate(result.fertileWindowStart)} - ${formatDate(result.fertileWindowEnd)}`;
    navigator.clipboard.writeText(text);
    toast({ title: "Copied to clipboard" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Ovulation & Fertile Window Calculator",
      description: "Predict your ovulation date and fertile window based on menstrual cycle length and luteal phase.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "animate-in slide-in-from-top duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Assumptions & Accuracy:" }),
            " Uses cycle length - luteal phase heuristic. Individual cycles vary. Use ovulation tests or tracking for confirmation."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 shadow-lg border-2 border-purple-200 dark:border-purple-800 animate-in fade-in duration-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-6 h-6 text-purple-600 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-purple-900 dark:text-purple-300", children: "Track Your Cycle" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "lmp", className: "text-base font-semibold", children: "First Day of Last Period (LMP)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "lmp",
                type: "date",
                value: lmpDate,
                onChange: (e) => setLmpDate(e.target.value),
                className: "border-2 border-purple-300 focus:border-purple-500 transition-all duration-300"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cycle", className: "text-base font-semibold", children: "Average Cycle Length (days)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "cycle",
                type: "number",
                value: cycleLength,
                onChange: (e) => setCycleLength(parseInt(e.target.value) || 28),
                min: 21,
                max: 35,
                className: "border-2 border-fuchsia-300 focus:border-fuchsia-500 transition-all duration-300"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "luteal", className: "text-base font-semibold", children: "Luteal Phase Length (days)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "luteal",
                type: "number",
                value: lutealLength,
                onChange: (e) => setLutealLength(parseInt(e.target.value) || 14),
                min: 12,
                max: 16,
                className: "border-2 border-pink-300 focus:border-pink-500 transition-all duration-300"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Default 14 days. Adjust if known." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculate, className: "w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 mr-2" }),
            "Calculate My Fertile Window"
          ] })
        ] }) }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "destructive", className: "animate-in slide-in-from-left duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: error })
        ] }),
        result && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 shadow-xl border-2 border-emerald-300 dark:border-emerald-700 animate-in zoom-in duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "text-purple-600 w-8 h-8 animate-bounce" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent", children: "Your Fertility Results" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8 bg-white dark:bg-gray-700 rounded-xl mb-4 shadow-lg border-2 border-purple-200 transform hover:scale-105 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 uppercase tracking-wide", children: "Predicted Ovulation Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent mt-2", children: formatDate(result.ovulationDate) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5 text-red-500 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-500", children: "Your peak fertility day!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5 text-red-500 animate-pulse" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 dark:bg-gray-700 rounded-xl shadow-lg border-2 border-green-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 text-green-600 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg text-green-900 dark:text-green-300", children: "Fertile Window (Best Time to Conceive)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl text-center my-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-green-700 dark:text-green-400", children: formatDate(result.fertileWindowStart) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 mx-3", children: "→" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-green-700 dark:text-green-400", children: formatDate(result.fertileWindowEnd) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400 mt-3 text-center bg-white dark:bg-gray-800 p-3 rounded-lg", children: "💡 Sperm can survive ~5 days; egg survives ~24 hours. This 6-day window gives you the best conception chances!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-4 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: copyResults, variant: "outline", size: "sm", className: "hover:bg-purple-100 transition-colors duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4 mr-2" }),
            " Copy Results"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-white dark:bg-gray-800 border-2 border-purple-300 dark:border-purple-700 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            HealthSocialShare,
            {
              title: "Ovulation & Fertility Calculator",
              resultText: `Tracking my fertility window! 📅 Knowledge is power for family planning. #fertility #ovulation #familyplanning #health`,
              hashtags: ["fertility", "ovulation", "familyplanning", "health", "ttc"],
              category: "health"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, { className: "my-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none space-y-8 mt-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-purple-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-10 h-10 text-purple-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent m-0", children: "Understanding Your Ovulation Cycle" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed", children: "Welcome to the fascinating world of fertility tracking! 🌸 Whether you're trying to conceive (TTC), avoiding pregnancy naturally, or simply getting to know your body better, understanding ovulation is your superpower. Our ovulation calculator uses science-backed methods to predict your most fertile days, giving you the knowledge to make informed decisions about your reproductive health." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4", children: [
              "Ovulation is the main event of your menstrual cycle—the moment when a mature egg is released from your ovary, ready for fertilization. This tiny window (just 12-24 hours!) is when conception is possible. But here's the exciting part: sperm can survive in your reproductive tract for up to 5 days, creating a ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "6-day fertile window" }),
              " where intercourse can lead to pregnancy. Let's dive deep into how this all works! ✨"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-teal-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-10 h-10 text-teal-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent m-0", children: "The Science Behind Ovulation" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed", children: "Your menstrual cycle is an intricate dance of hormones, each playing a crucial role in preparing your body for potential pregnancy. Let's break down what happens during a typical cycle:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-r from-pink-100 to-rose-100 dark:bg-gray-700 rounded-xl border-l-4 border-pink-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-pink-900 dark:text-pink-300 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-6 h-6" }),
                  "Menstrual Phase (Days 1-5)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "What's Happening:" }),
                  " Day 1 is the first day of your period. The uterine lining (endometrium) that built up during the previous cycle sheds because no pregnancy occurred. Hormone levels (estrogen and progesterone) are at their lowest."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fertility Status:" }),
                  " Very low chance of conception during menstruation, though sperm can survive until ovulation in longer cycles."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-r from-violet-100 to-purple-100 dark:bg-gray-700 rounded-xl border-l-4 border-violet-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-violet-900 dark:text-violet-300 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-6 h-6" }),
                  "Follicular Phase (Days 1-13)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "What's Happening:" }),
                  " This phase overlaps with menstruation and continues after bleeding stops. Your pituitary gland releases FSH (follicle-stimulating hormone), which stimulates your ovaries to grow 5-20 tiny follicles. Each follicle contains an immature egg. Eventually, one dominant follicle emerges!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Hormones at Work:" }),
                  " Estrogen rises as follicles mature, thickening the uterine lining and making cervical mucus more sperm-friendly (thin, clear, stretchy—like egg whites)."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fertility Status:" }),
                  " Fertility increases toward the end of this phase. The fertile window typically begins 5 days before ovulation."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-r from-fuchsia-100 to-pink-100 dark:bg-gray-700 rounded-xl border-l-4 border-fuchsia-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-fuchsia-900 dark:text-fuchsia-300 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6" }),
                  "Ovulation (Day 14 in a 28-day cycle)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "What's Happening:" }),
                  " The star of the show! When estrogen peaks, it triggers a surge of LH (luteinizing hormone) from your pituitary gland. This LH surge causes the dominant follicle to rupture and release its egg into the fallopian tube. The egg begins its journey toward the uterus, and the 12-24 hour fertilization window opens! 🥚✨"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Physical Signs:" }),
                  " Many people experience mittelschmerz (ovulation pain—a sharp twinge on one side), increased sex drive, clearer skin, and that telltale egg-white cervical mucus."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fertility Status:" }),
                  " PEAK FERTILITY! This is THE day, along with the 2-3 days before ovulation, when conception is most likely."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-r from-amber-100 to-yellow-100 dark:bg-gray-700 rounded-xl border-l-4 border-amber-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-amber-900 dark:text-amber-300 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6" }),
                  "Luteal Phase (Days 15-28)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "What's Happening:" }),
                  ' After releasing the egg, the ruptured follicle transforms into the corpus luteum ("yellow body"), which produces progesterone. This hormone prepares the uterine lining for embryo implantation and keeps it thick and nourishing.'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Two Possible Outcomes:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "• If fertilization occurs, the developing embryo produces hCG (pregnancy hormone), which tells the corpus luteum to keep making progesterone. You're pregnant! 🎉",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "• If no fertilization occurs, the corpus luteum breaks down after ~14 days, progesterone drops, and the uterine lining sheds—hello, next period!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fertility Status:" }),
                  " Essentially zero after the egg dies (24 hours post-ovulation). The luteal phase length is remarkably consistent (12-16 days, usually 14) for most people."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 dark:bg-gray-700 rounded-xl border-2 border-blue-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-blue-900 dark:text-blue-300 mb-3", children: "🧮 How Our Calculator Works" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "The Formula:" }),
                " Ovulation Day = Cycle Length - Luteal Phase Length"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: "For example: 28-day cycle - 14-day luteal phase = Day 14 ovulation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fertile Window:" }),
                " We calculate 5 days before ovulation (when sperm can already be waiting) through ovulation day itself (when the egg is available), giving you a 6-day window of opportunity!"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-green-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-10 h-10 text-green-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent m-0", children: "Understanding Your Luteal Phase" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed", children: "The luteal phase is the secret ingredient to accurate ovulation prediction! Unlike the follicular phase (which can vary wildly from cycle to cycle and person to person), the luteal phase is remarkably stable. Here's everything you need to know:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-green-900 dark:text-green-300 mb-2", children: "📏 Typical Length" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Most people have a luteal phase between 12-16 days, with 14 days being the most common. This consistency is why we can work backward from your expected period to predict ovulation! If you have a 30-day cycle with a 14-day luteal phase, you ovulate on day 16 (30 - 14 = 16)." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-green-900 dark:text-green-300 mb-2", children: "🔍 How to Find Your Luteal Phase Length" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Option 1 - Basal Body Temperature (BBT) Tracking:" }),
                  " Your temperature rises 0.5-1°F after ovulation and stays elevated until your period. Count the days from the temperature shift until your period starts—that's your luteal phase!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Option 2 - Ovulation Predictor Kits (OPKs):" }),
                  " These detect the LH surge that happens 24-36 hours before ovulation. Once you get a positive, count the days until your period arrives."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Option 3 - Default to 14 Days:" }),
                  " If you don't know your luteal phase, using the standard 14 days is a great starting point! Most fertility awareness methods and apps use this as default."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-green-900 dark:text-green-300 mb-2", children: "⚠️ Short Luteal Phase (Luteal Phase Defect)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "A luteal phase shorter than 10 days may make conception difficult because the uterine lining doesn't have enough time to properly develop for implantation. If you suspect this, talk to your healthcare provider—it's often treatable with progesterone supplementation!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-green-900 dark:text-green-300 mb-2", children: "✨ Why It Matters for Calculation Accuracy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Since your luteal phase length is consistent cycle to cycle (unlike your follicular phase, which can vary), it's the KEY to predicting ovulation! Someone with 35-day cycles and a 14-day luteal phase ovulates on day 21, while someone with 26-day cycles ovulates on day 12—both with the same luteal phase!" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-violet-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-violet-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-10 h-10 text-violet-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent m-0", children: "Maximizing Your Chances of Conception" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed", children: "Now that you know WHEN ovulation happens, let's talk about HOW to optimize your fertility! Here are expert-backed strategies for making the most of your fertile window:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg border-l-4 border-violet-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-violet-900 dark:text-violet-300 mb-3", children: "🎯 Timing is Everything" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Best Days for Intercourse:" }),
                  " The 2-3 days BEFORE ovulation have the highest conception rates (about 30% per cycle for healthy couples under 35). Why? Sperm are already waiting when the egg arrives!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Frequency Recommendation:" }),
                  " Every other day during your fertile window is ideal. This gives sperm count time to replenish while ensuring sperm are always available. Daily is fine too if preferred!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Don't Stress Timing TOO Much:" }),
                  " Frequent intercourse throughout your cycle (2-3 times per week) ensures you hit the fertile window even if calculations are slightly off!"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg border-l-4 border-fuchsia-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-fuchsia-900 dark:text-fuchsia-300 mb-3", children: "🔬 Cervical Mucus: Your Body's Fertility Signal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: `Your cervical mucus changes throughout your cycle in response to estrogen. Learning to "read" it gives you real-time fertility information! Here's what to look for:` }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300 ml-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Post-period (dry days):" }),
                    " Little to no mucus—low fertility"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sticky/tacky:" }),
                    " White or yellowish, breaks easily—fertility increasing"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Creamy:" }),
                    " Like lotion, smooth—fertility rising"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Egg white (EWCM):" }),
                    " Clear, stretchy, slippery—PEAK FERTILITY! 🥚 This is prime time!"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Watery:" }),
                    " Clear and wet—very fertile"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Post-ovulation:" }),
                    " Dries up quickly as progesterone rises—fertility window closed"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg border-l-4 border-pink-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-pink-900 dark:text-pink-300 mb-3", children: "🌡️ Basal Body Temperature (BBT) Tracking" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: "Your resting body temperature rises 0.5-1°F (0.3-0.6°C) after ovulation due to progesterone and stays elevated until your next period. While BBT confirms ovulation AFTER it happens (so it's not useful for predicting in real-time), tracking for 2-3 cycles reveals your patterns!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "How to Track:" }),
                  " Take your temperature first thing every morning before getting out of bed, at the same time each day. Use a basal thermometer (more precise than regular thermometers). Chart it for a few cycles to identify your luteal phase length!"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg border-l-4 border-purple-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-purple-900 dark:text-purple-300 mb-3", children: "🧪 Ovulation Predictor Kits (OPKs)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: "These work like pregnancy tests but detect the LH surge that triggers ovulation. A positive OPK means ovulation will likely occur in 24-36 hours—time to get busy! 😉" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "When to Start Testing:" }),
                  " Begin testing a few days before your expected ovulation (use our calculator to estimate!). Test once or twice daily. When you get your positive, you're in the prime fertile window!"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-amber-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-10 h-10 text-amber-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent m-0", children: "Lifestyle Factors That Impact Fertility" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed", children: "Beyond timing, optimizing your overall health significantly impacts fertility for both partners! Here's what the science says:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-amber-600" }),
                  "Maintain Healthy Weight"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Both underweight (BMI < 18.5) and overweight (BMI > 30) can disrupt ovulation. Even losing or gaining 5-10% of body weight can restore regular cycles!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-amber-600" }),
                  "Reduce Stress"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Chronic stress can delay ovulation or suppress it entirely. Practice meditation, yoga, or whatever helps you unwind. TTC is stressful enough—be kind to yourself! 💕" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-amber-600" }),
                  "Quit Smoking"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Smoking accelerates egg loss and damages egg quality. It also reduces sperm quality in male partners. Quitting improves fertility within months!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-amber-600" }),
                  "Limit Alcohol & Caffeine"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Heavy drinking reduces fertility. Moderate caffeine (200mg/day, ~2 cups coffee) is generally safe. Stay hydrated with water!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-amber-600" }),
                  "Take Prenatal Vitamins"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Start taking 400-800mcg folic acid daily BEFORE conception to prevent neural tube defects. Many prenatals include CoQ10, vitamin D, and omega-3s for fertility support!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-amber-600" }),
                  "Exercise Moderately"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Regular moderate exercise (30 min most days) boosts fertility. Excessive high-intensity exercise (>7 hours/week) can suppress ovulation—balance is key!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-amber-600" }),
                  "Avoid Endocrine Disruptors"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "BPA, phthalates, and pesticides can interfere with hormones. Choose glass/stainless steel containers, organic produce when possible, and natural personal care products." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-amber-600" }),
                  "Optimize Sleep"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "7-9 hours of quality sleep regulates reproductive hormones. Irregular sleep schedules and shift work can disrupt ovulation—aim for consistency!" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, { className: "my-8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-blue-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-10 h-10 text-blue-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent m-0", children: "When to Seek Help: Fertility Red Flags" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6", children: "Most healthy couples conceive within 6-12 months of trying. But sometimes, medical help can make all the difference. Here's when to consult a fertility specialist:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md border-l-4 border-blue-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-blue-900 dark:text-blue-300 mb-2", children: "⏰ Time-Based Guidelines" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300 ml-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Under 35:" }),
                    " Seek help after 12 months of trying without success"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "35-40:" }),
                    " Seek help after 6 months (egg quality declines with age)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Over 40:" }),
                    " Seek help immediately when you start trying"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md border-l-4 border-indigo-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-2", children: "🚩 Concerning Symptoms (Seek Help Sooner)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300 ml-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Irregular or absent periods (oligomenorrhea or amenorrhea)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Very painful periods (possible endometriosis)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ History of pelvic infections or STIs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Diagnosed PCOS, endometriosis, or thyroid disorders" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Multiple miscarriages (2 or more)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Known male factor issues (low sperm count, erectile dysfunction)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Prior cancer treatment (chemotherapy/radiation)" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md border-l-4 border-purple-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-purple-900 dark:text-purple-300 mb-2", children: "💊 What to Expect from Fertility Testing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "For the ovulating partner:" }),
                  " Blood tests (hormone levels: FSH, LH, AMH, progesterone, thyroid), ultrasound (to check ovarian reserve and uterine health), HSG (hysterosalpingogram—checks if fallopian tubes are open)."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "For the sperm-producing partner:" }),
                  " Semen analysis (checks count, motility, morphology). This is non-invasive and should always be done early in fertility workups!"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-rose-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-10 h-10 text-rose-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent m-0", children: "Using Ovulation Tracking for Birth Control" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed", children: "While our calculator is popular for conception planning, ovulation tracking is also used by many for natural family planning (NFP) or the Fertility Awareness Method (FAM). Here's what you need to know if avoiding pregnancy:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-6 bg-yellow-100 dark:bg-yellow-900 rounded-xl border-2 border-yellow-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-yellow-900 dark:text-yellow-200 mb-3", children: "⚠️ Important Disclaimer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 dark:text-gray-200", children: "Using ovulation tracking alone for birth control has a typical-use failure rate of 12-24% per year. To use FAM effectively, you must track MULTIPLE fertility signs (BBT, cervical mucus, LH testing) and abstain or use barrier methods during your entire fertile window plus a safety buffer. This requires training, discipline, and regular cycles. If pregnancy would be problematic, consider using FAM alongside barrier methods or choose a more reliable contraceptive method." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-rose-900 dark:text-rose-300 mb-2", children: "📚 Best Practices for FAM" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300 ml-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Track at least 3 fertility signs (BBT, cervical mucus, cycle length)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Use confirmed ovulation (BBT rise for 3 days) before resuming unprotected sex" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Add buffer days before and after your fertile window estimate" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Take a class or work with a FAM instructor—this isn't DIY territory!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Have backup contraception available" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Be aware this method doesn't protect against STIs" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-rose-900 dark:text-rose-300 mb-2", children: "❌ When FAM Isn't Appropriate" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300 ml-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✗ Irregular cycles (makes prediction unreliable)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✗ Postpartum (before cycles resume)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✗ Perimenopause (erratic ovulation)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✗ After stopping hormonal birth control (cycles may be irregular for months)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✗ During breastfeeding (can suppress/delay ovulation unpredictably)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✗ Chronic illness or medications affecting cycles" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-cyan-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-10 h-10 text-cyan-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent m-0", children: "Irregular Cycles & Special Situations" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6", children: "Not everyone has textbook 28-day cycles, and that's completely normal! Here's how to handle common variations:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg border-l-4 border-cyan-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-cyan-900 dark:text-cyan-300 mb-3", children: "🔄 PCOS (Polycystic Ovary Syndrome)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: "PCOS affects 1 in 10 women and causes irregular ovulation or anovulation (no ovulation). Cycles may be very long (35+ days), unpredictable, or absent. High androgens can cause acne and excess hair growth." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tracking with PCOS:" }),
                  " Calendar prediction is unreliable—use OPKs and cervical mucus monitoring. Your provider may prescribe medications like Clomid or Letrozole to induce ovulation, making tracking easier!"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg border-l-4 border-teal-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-teal-900 dark:text-teal-300 mb-3", children: "🤱 Breastfeeding & Postpartum" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: "Breastfeeding can suppress ovulation for months (lactational amenorrhea), but this is highly variable! Some people ovulate before their first postpartum period returns, meaning you CAN get pregnant while breastfeeding." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tracking Postpartum:" }),
                  " Watch for cervical mucus changes signaling fertility's return. If TTC, night weaning and reducing feeding frequency may help ovulation resume. If avoiding pregnancy, use contraception—don't rely on breastfeeding alone!"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg border-l-4 border-indigo-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-indigo-900 dark:text-indigo-300 mb-3", children: "💊 Coming Off Hormonal Birth Control" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: "After stopping the pill, patch, or ring, it can take 1-3 months for ovulation to resume regularly. Some people ovulate immediately! After Depo-Provera injections, it may take 6-18 months for fertility to return." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tracking Post-Birth Control:" }),
                  " Your first few cycles may be irregular. Use OPKs and cervical mucus to confirm ovulation rather than relying solely on calendar predictions."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg border-l-4 border-purple-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-purple-900 dark:text-purple-300 mb-3", children: "🌡️ Thyroid Disorders" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: "Both hypothyroidism (underactive) and hyperthyroidism (overactive) can disrupt ovulation and cause irregular periods. Thyroid hormones directly influence reproductive hormones!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Solution:" }),
                  " If you have irregular cycles, ask your provider to check TSH, free T4, and thyroid antibodies. Once thyroid levels are optimized with medication, cycles typically regulate and ovulation tracking becomes effective!"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-emerald-50 to-green-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-emerald-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-10 h-10 text-emerald-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent m-0", children: "Your Fertility Journey: Final Thoughts" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed", children: "Understanding your ovulation cycle is empowering, whether you're trying to conceive, avoid pregnancy, or simply learn more about your body's rhythms. Remember that conception is a probability game—even with perfect timing, healthy couples in their 20s only have about a 20-25% chance of conceiving per cycle. It's a marathon, not a sprint! 🏃‍♀️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4", children: "Be patient with yourself and your body. Track your patterns for 2-3 cycles to truly understand YOUR unique fertility signs. Use our calculator as a helpful guide, but listen to your body's signals too. And most importantly, enjoy the journey—whether that's the excitement of trying for a baby, the relief of understanding your natural family planning options, or the simple satisfaction of being in tune with your reproductive health. You've got this! 💪✨" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:bg-gray-700 rounded-xl border-2 border-green-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-green-900 dark:text-green-300 mb-3", children: "🌟 Quick Recap: Key Takeaways" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300 ml-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Ovulation typically occurs 12-16 days BEFORE your next period (luteal phase = constant)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Your fertile window is 6 days: 5 days before ovulation + ovulation day" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Best conception chances: 2-3 days BEFORE ovulation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Track multiple signs (cervical mucus, OPKs, BBT) for best accuracy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Healthy lifestyle choices improve fertility for both partners" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Seek help after 12 months if under 35, 6 months if 35-40, or immediately if over 40" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Irregular cycles require extra tools (OPKs, BBT) beyond calendar tracking" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: '✓ Only 5% of babies arrive on "due dates"—be flexible and patient!' })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "text-xl font-bold cursor-pointer", children: "🥚 How Ovulation Works" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Ovulation:" }),
              " Release of an egg from the ovary, typically 12-16 days before next period."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Formula:" }),
              " Ovulation Day = Cycle Length - Luteal Phase Length"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fertile Window:" }),
              " 5 days before ovulation + day of ovulation (sperm survival + egg lifespan)"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "text-xl font-bold cursor-pointer", children: "🔬 Improving Accuracy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "✓ Track basal body temperature (BBT) - rises 0.5-1°F after ovulation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "✓ Use ovulation predictor kits (OPKs) - detect LH surge 24-36h before" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: '✓ Monitor cervical mucus - becomes clear, stretchy ("egg white") at ovulation' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "✓ Track cycle length for 3+ months to find your average" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "text-xl font-bold cursor-pointer", children: "❓ Quick FAQ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold", children: "Q: My cycles are irregular. Will this work?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "A: Predictions are less accurate with irregular cycles. Use OPKs or consult a provider." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold", children: "Q: What is the luteal phase?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "A: Time from ovulation to next period. Usually 12-16 days, most commonly 14 days." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold", children: "Q: Can I get pregnant outside the fertile window?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "A: Highly unlikely. Sperm survive max ~5 days; egg survives ~24 hours." })
            ] })
          ] })
        ] })
      ] })
    }
  );
}
export {
  OvulationCalculator as default
};
