import { r as reactExports, Q as useToast, j as jsxRuntimeExports, a6 as Alert, a5 as Info, a7 as AlertDescription, f as Card, a4 as Label, V as Input, B as Button, a8 as Sparkles, H as Heart, T as TrendingUp } from "./index-CK9G4vW7.js";
import { H as HealthSocialShare } from "./HealthSocialShare-SHMBdS6h.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { s as safeDecimal } from "./utils-C5YzN_36.js";
import { I as InFeedAd } from "./InFeedAd-qGRsmhMx.js";
import { C as Calendar } from "./calendar-DlIzODy7.js";
import { C as CircleAlert } from "./circle-alert-DCAQyr8M.js";
import { B as Baby } from "./baby-Bb16TXOs.js";
import { C as CircleCheck } from "./circle-check-CJ5pTUz4.js";
import { C as Copy } from "./copy-BqV-1o4k.js";
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
function calculatePregnancyDueDate(input) {
  const { lmpDate, cycleLength } = input;
  if (cycleLength < 21 || cycleLength > 35) {
    throw new Error("Cycle length must be between 21 and 35 days");
  }
  const adjustment = safeDecimal(cycleLength).minus(28).toNumber();
  const totalDays = safeDecimal(280).plus(adjustment).toNumber();
  const edd = new Date(lmpDate.getTime() + totalDays * 24 * 60 * 60 * 1e3);
  const now = /* @__PURE__ */ new Date();
  const diffMs = now.getTime() - lmpDate.getTime();
  const totalGestationalDays = Math.floor(diffMs / (24 * 60 * 60 * 1e3));
  const gestationalWeeks = Math.floor(totalGestationalDays / 7);
  const gestationalDays = totalGestationalDays % 7;
  let trimester;
  if (gestationalWeeks < 13) {
    trimester = 1;
  } else if (gestationalWeeks < 27) {
    trimester = 2;
  } else {
    trimester = 3;
  }
  const milestones = {
    week12: new Date(lmpDate.getTime() + (12 * 7 + adjustment) * 24 * 60 * 60 * 1e3),
    week20: new Date(lmpDate.getTime() + (20 * 7 + adjustment) * 24 * 60 * 60 * 1e3),
    week28: new Date(lmpDate.getTime() + (28 * 7 + adjustment) * 24 * 60 * 60 * 1e3),
    week36: new Date(lmpDate.getTime() + (36 * 7 + adjustment) * 24 * 60 * 60 * 1e3)
  };
  return {
    edd,
    gestationalWeeks,
    gestationalDays,
    trimester,
    milestones
  };
}
function PregnancyDueDateCalculator() {
  const [lmpDate, setLmpDate] = reactExports.useState("2025-01-01");
  const [cycleLength, setCycleLength] = reactExports.useState(28);
  const [result, setResult] = reactExports.useState(null);
  const [error, setError] = reactExports.useState("");
  const { toast } = useToast();
  const calculate = () => {
    setError("");
    try {
      const lmp = new Date(lmpDate);
      const res = calculatePregnancyDueDate({ lmpDate: lmp, cycleLength });
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
    const text = `Due Date: ${formatDate(result.edd)}
Gestational Age: ${result.gestationalWeeks}w ${result.gestationalDays}d
Trimester: ${result.trimester}`;
    navigator.clipboard.writeText(text);
    toast({ title: "Copied to clipboard" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Pregnancy Due Date Calculator (Naegele's Rule)",
      description: "Calculate your estimated due date using last menstrual period with cycle adjustment. Medically accurate.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "animate-in slide-in-from-top duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Assumptions & Accuracy:" }),
            " Uses Naegele's rule (LMP + 280 days) adjusted for cycle length. Ultrasound dating is more accurate. Consult your healthcare provider."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-gradient-to-br from-violet-50 via-sky-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 shadow-lg border-2 border-violet-200 dark:border-violet-800 animate-in fade-in duration-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-6 h-6 text-violet-600 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-violet-900 dark:text-violet-300", children: "Enter Your Information" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "lmp", className: "text-base font-semibold", children: "First Day of Last Menstrual Period (LMP)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "lmp",
                type: "date",
                value: lmpDate,
                onChange: (e) => setLmpDate(e.target.value),
                className: "border-2 border-violet-300 focus:border-violet-500 transition-all duration-300"
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
                className: "border-2 border-sky-300 focus:border-sky-500 transition-all duration-300"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: calculate, className: "w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 mr-2" }),
            "Calculate My Due Date"
          ] })
        ] }) }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "destructive", className: "animate-in slide-in-from-left duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: error })
        ] }),
        result && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 shadow-xl border-2 border-emerald-300 dark:border-emerald-700 animate-in zoom-in duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "text-violet-600 w-8 h-8 animate-bounce" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent", children: "Your Pregnancy Results" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8 bg-white dark:bg-gray-700 rounded-xl mb-4 shadow-lg border-2 border-violet-200 transform hover:scale-105 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 uppercase tracking-wide", children: "Estimated Due Date (EDD)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-extrabold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mt-2", children: formatDate(result.edd) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5 text-red-500 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-500", children: "Mark your calendar!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5 text-red-500 animate-pulse" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-gradient-to-br from-blue-50 to-indigo-100 dark:bg-gray-700 rounded-xl shadow-md border-2 border-blue-300 hover:shadow-lg transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 uppercase tracking-wide", children: "Gestational Age" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-blue-600 mt-2", children: [
                result.gestationalWeeks,
                "w ",
                result.gestationalDays,
                "d"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-blue-400 mt-2 animate-pulse" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-gradient-to-br from-purple-50 to-violet-100 dark:bg-gray-700 rounded-xl shadow-md border-2 border-purple-300 hover:shadow-lg transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 uppercase tracking-wide", children: "Current Trimester" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-purple-600 mt-2", children: [
                "Trimester ",
                result.trimester
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-purple-400 mt-2 animate-pulse" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-5 bg-gradient-to-r from-orange-50 via-yellow-50 to-amber-50 dark:bg-gray-700 rounded-xl shadow-md border-2 border-orange-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-6 h-6 text-orange-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg text-orange-900 dark:text-orange-300", children: "Key Pregnancy Milestones" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-orange-600", children: "12 weeks:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-700 dark:text-gray-300", children: [
                  formatDate(result.milestones.week12),
                  " - End of 1st trimester"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-green-600", children: "20 weeks:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-700 dark:text-gray-300", children: [
                  formatDate(result.milestones.week20),
                  " - Anatomy scan"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-blue-600", children: "28 weeks:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-700 dark:text-gray-300", children: [
                  formatDate(result.milestones.week28),
                  " - 3rd trimester begins"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-purple-600", children: "36 weeks:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-700 dark:text-gray-300", children: [
                  formatDate(result.milestones.week36),
                  " - Full term approaching"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-4 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: copyResults, variant: "outline", size: "sm", className: "hover:bg-violet-100 transition-colors duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4 mr-2" }),
            " Copy Results"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-white dark:bg-gray-800 border-2 border-violet-300 dark:border-violet-700 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            HealthSocialShare,
            {
              title: "Pregnancy Due Date Calculator",
              resultText: `Expecting a baby! 👶 Due date: ${formatDate(result.edd)} | Currently ${result.gestationalWeeks}w ${result.gestationalDays}d (Trimester ${result.trimester}) #pregnancy #baby #expecting`,
              hashtags: ["pregnancy", "baby", "expecting", "momtobe", "parenthood"],
              category: "health"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, { className: "my-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none space-y-8 mt-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-violet-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-violet-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "w-10 h-10 text-violet-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent m-0", children: "Understanding Your Pregnancy Due Date" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed", children: "Welcome to one of the most exciting journeys of your life! 🎉 Calculating your pregnancy due date isn't just about circling a calendar day—it's about understanding the incredible 40-week adventure your body is embarking on. Whether you're a first-time parent feeling all the feels or a seasoned pro adding to your family, knowing your estimated due date (EDD) helps you plan, prepare, and celebrate each milestone along the way." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4", children: [
              "Our pregnancy due date calculator uses the tried-and-true ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Naegele's Rule" }),
              ", the same method your healthcare provider likely uses during your first prenatal visit. It's been helping expectant parents since 1812 (yes, it's that reliable!), and while medical science has evolved, this formula remains the gold standard for initial pregnancy dating."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-blue-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-10 h-10 text-blue-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent m-0", children: "What Is Naegele's Rule?" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed", children: [
              "Named after German obstetrician Franz Karl Naegele, this calculation method is beautifully simple yet remarkably accurate. Here's the science: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "EDD = Last Menstrual Period (LMP) + 280 days" }),
              ". But wait—there's a twist! 🌀"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4", children: "This formula assumes a standard 28-day menstrual cycle with ovulation occurring on day 14. Since not everyone has a textbook cycle (and that's totally normal!), our calculator adjusts for your unique cycle length. If your cycles are 30 days? We add 2 extra days. If they're 26 days? We subtract 2. This personalization makes your due date estimate significantly more accurate than one-size-fits-all calculators." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-6 bg-white dark:bg-gray-700 rounded-xl border-l-4 border-blue-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-blue-900 dark:text-blue-300 mb-3", children: "🧮 The Math Behind the Magic" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Standard Formula:" }),
                " LMP + 280 days = Due Date"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Adjusted Formula:" }),
                " LMP + 280 days + (Your Cycle Length - 28 days) = Personalized Due Date"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Example: If your cycle is 32 days, we add 4 extra days to account for later ovulation!" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-emerald-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-10 h-10 text-emerald-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent m-0", children: "Why Your LMP Matters So Much" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed", children: `You might be wondering: "Why do we calculate pregnancy from my last period when I wasn't even pregnant yet?" 🤔 Excellent question! Here's the fascinating biology behind it:` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4", children: "The first day of your last menstrual period is the most reliable, easy-to-remember date for most people. While conception typically occurs about 2 weeks after LMP (during ovulation), that exact moment is nearly impossible to pinpoint without intensive monitoring. By using LMP as our starting point, we create a consistent, universal reference point that healthcare providers worldwide can use." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4", children: [
              `This is why when you're "4 weeks pregnant," your baby has actually only existed for about 2 weeks. Mind-blowing, right? This is called `,
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "gestational age" }),
              " (calculated from LMP) versus ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "fetal age" }),
              " (calculated from conception). Medical professionals always use gestational age because it's more standardized and reliable."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-orange-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-10 h-10 text-orange-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent m-0", children: "The Three Trimesters: Your Pregnancy Roadmap" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed", children: "Pregnancy is divided into three distinct trimesters, each with its own magic, challenges, and milestones. Let's break down what to expect in each phase of your journey! ✨" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-r from-violet-100 to-purple-100 dark:bg-gray-700 rounded-xl border-l-4 border-violet-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-violet-900 dark:text-violet-300 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6" }),
                  "First Trimester (Weeks 0-13)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "What's Happening:" }),
                  " This is the foundation-building phase! From a tiny cluster of cells, your baby develops all major organs, a beating heart (around week 6!), arms, legs, and even tiny fingers and toes. By week 12, your baby is fully formed—just needs to grow bigger!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "What You Might Feel:" }),
                  " Fatigue, morning sickness (which can strike any time of day!), breast tenderness, frequent urination, and emotional rollercoasters. Hormones are working overtime! 🎢"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Key Milestone:" }),
                  " Your first prenatal appointment and dating ultrasound typically happen between 8-12 weeks. This is when your provider might adjust your due date based on baby's measurements."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-r from-sky-100 to-blue-100 dark:bg-gray-700 rounded-xl border-l-4 border-sky-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-sky-900 dark:text-sky-300 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-6 h-6" }),
                  "Second Trimester (Weeks 14-26)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "What's Happening:" }),
                  ` Welcome to the "honeymoon phase" of pregnancy! Your baby is growing rapidly, developing fat stores, practicing breathing movements with amniotic fluid, and growing hair. Around week 18-22, you'll feel those magical first flutters (quickening)! 🦋`
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "What You Might Feel:" }),
                  " Energy returns! Many people feel their best during this trimester. Your bump becomes visible, you might glow (thanks to increased blood flow), and those baby movements become more regular and stronger."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Key Milestone:" }),
                  ` The 20-week anatomy scan (often called the "big ultrasound") checks baby's development in detail. Many parents find out baby's biological sex during this scan!`
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gradient-to-r from-emerald-100 to-green-100 dark:bg-gray-700 rounded-xl border-l-4 border-emerald-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-emerald-900 dark:text-emerald-300 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "w-6 h-6" }),
                  "Third Trimester (Weeks 27-40+)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "What's Happening:" }),
                  " The home stretch! Your baby is perfecting survival skills: practicing breathing, opening eyes, responding to light and sound, and putting on crucial weight (about 0.5 pounds per week in the final months). Their brain is developing rapidly, creating billions of neural connections!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "What You Might Feel:" }),
                  " Your baby is running out of room! Expect more pronounced movements (sometimes hiccups!), Braxton Hicks contractions (practice contractions), backaches, swelling, and nesting instincts kicking in. Sleep might be challenging—hello, pregnancy pillow! 💤"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Key Milestone:" }),
                  ' Week 37 marks "early term" (baby could arrive safely any time now!), and week 39 is considered "full term." Most babies arrive between 39-41 weeks.'
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-indigo-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-10 h-10 text-indigo-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent m-0", children: "How Accurate Is Your Due Date?" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed", children: `Let's get real for a moment: only about 5% of babies arrive on their exact due date! 📊 Think of your due date as an "estimated arrival window" rather than a guaranteed delivery date. Here's what affects accuracy:` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-2", children: "🔍 Cycle Regularity" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Regular cycles = more accurate predictions. Irregular cycles make ovulation timing trickier to estimate. If your cycles vary by more than 5 days, mention this to your healthcare provider." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-2", children: "🏥 Ultrasound Dating" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: 'Early ultrasounds (before 13 weeks) are accurate to within 3-5 days and often become the "official" due date if they differ significantly from LMP dating. Later ultrasounds are less accurate for dating because babies grow at different rates.' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-2", children: "👶 Individual Variation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "First-time parents tend to go slightly past their due date (average 40 weeks + 5 days), while experienced parents often deliver a bit earlier. Genetics, age, and overall health also play roles." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-2", children: "📅 Normal Range" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Babies born anywhere from 37 to 42 weeks are considered full-term and healthy. That's a 5-week window! Most providers won't intervene unless you reach 41-42 weeks." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InFeedAd, { className: "my-8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-teal-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-10 h-10 text-teal-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent m-0", children: "When Might Your Due Date Change?" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed", children: "Don't be surprised if your due date shifts during early pregnancy—this happens to about 1 in 5 pregnancies! Here's when and why your provider might adjust your EDD:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start p-4 bg-white dark:bg-gray-700 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-teal-700 font-bold", children: "1" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-900 dark:text-gray-100 mb-1", children: "Early Ultrasound Discrepancy" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "If your first ultrasound (6-13 weeks) shows your baby measuring more than 5-7 days different from your LMP-based date, your provider will likely use the ultrasound date instead. This is especially common if you have irregular cycles or weren't tracking ovulation." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start p-4 bg-white dark:bg-gray-700 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-teal-700 font-bold", children: "2" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-900 dark:text-gray-100 mb-1", children: "Uncertain LMP" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Can't remember your last period? Recently stopped birth control? Had irregular bleeding? Your provider will rely entirely on ultrasound measurements to establish your due date." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start p-4 bg-white dark:bg-gray-700 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-teal-700 font-bold", children: "3" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-900 dark:text-gray-100 mb-1", children: "Assisted Reproduction" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "If you conceived through IVF or IUI, your due date is calculated from your embryo transfer or insemination date—super precise! These dates typically don't change." })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 p-6 bg-yellow-100 dark:bg-yellow-900 rounded-xl border-2 border-yellow-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 dark:text-gray-200 font-semibold", children: "⚠️ Important: Once your due date is established (usually by 13 weeks), it should NOT change. Later ultrasounds showing different sizes reflect your baby's individual growth pattern, not dating errors." }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-purple-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-10 h-10 text-purple-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent m-0", children: "Making the Most of Your Pregnancy Timeline" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6", children: "Now that you know your due date, let's talk about using this information to plan the best pregnancy experience possible! 🌟" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg border-l-4 border-purple-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-purple-900 dark:text-purple-300 mb-3", children: "📋 Prenatal Care Schedule" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Weeks 4-28:" }),
                    " Monthly checkups"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Weeks 28-36:" }),
                    " Every 2 weeks"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Weeks 36-40:" }),
                    " Weekly visits"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "After 40 weeks:" }),
                    " Twice weekly monitoring if baby hasn't arrived"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg border-l-4 border-fuchsia-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-fuchsia-900 dark:text-fuchsia-300 mb-3", children: "🎯 Important Screening Windows" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "10-13 weeks:" }),
                    " First trimester screening (optional genetic testing)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "15-22 weeks:" }),
                    " Second trimester screening options"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "24-28 weeks:" }),
                    " Glucose tolerance test for gestational diabetes"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "35-37 weeks:" }),
                    " Group B strep test"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg border-l-4 border-violet-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-violet-900 dark:text-violet-300 mb-3", children: "🛍️ Planning Milestones" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Week 12-14:" }),
                    " Safe to share news after first trimester"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Week 18-22:" }),
                    " Plan baby shower (energy is high!)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Week 30-32:" }),
                    " Set up nursery and hospital bag"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "✓ ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Week 36:" }),
                    " Finalize birth plan and pediatrician choice"
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-rose-50 to-red-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-rose-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-10 h-10 text-rose-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent m-0", children: "Special Considerations & FAQs" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-rose-900 dark:text-rose-300 mb-3", children: "What if I have irregular periods?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Irregular cycles make LMP-based dating less reliable, but not impossible! Track your average cycle length over 3-6 months if possible. Your provider will likely rely more heavily on early ultrasound dating. If you have PCOS or other conditions affecting cycles, early ultrasound becomes even more crucial." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-rose-900 dark:text-rose-300 mb-3", children: "Can I calculate from conception date instead?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Absolutely! If you know your exact conception date (from fertility treatments or if you tracked ovulation), add 266 days (38 weeks) to that date. Just remember that medical professionals will still use gestational age (from LMP) for all documentation and milestones." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-rose-900 dark:text-rose-300 mb-3", children: "What about twins or multiples?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Twin pregnancies typically deliver earlier—around 36-37 weeks for twins, 32-33 weeks for triplets. Your provider will monitor you more closely with more frequent ultrasounds. The due date calculation is the same, but expect early arrival! 👯" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-rose-900 dark:text-rose-300 mb-3", children: "Should I plan for my due date or earlier/later?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Plan to have everything ready by week 36 (nursery, hospital bag, work transition). Statistically, first-time parents average 40 weeks + 5 days, while subsequent pregnancies average 40 weeks + 3 days. Give yourself a 2-week window on either side of your due date for peace of mind!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-rose-900 dark:text-rose-300 mb-3", children: "Why do some calculators give different dates?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Some calculators use simplified 280-day formulas without cycle adjustment, while others (like ours!) account for your unique cycle length. Medical-grade calculators that adjust for cycle length are more personalized and typically more accurate. Always verify with your healthcare provider!" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-green-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-10 h-10 text-green-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent m-0", children: "Beyond the Due Date: What Really Matters" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed", children: "Here's the beautiful truth: your due date is just a starting point for this incredible journey. What truly matters is the health and wellbeing of both you and your baby. Focus on:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-green-900 dark:text-green-300 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5 text-green-600" }),
                  "Prenatal Health"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Regular checkups, prenatal vitamins (especially folic acid!), balanced nutrition, and staying hydrated." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-green-900 dark:text-green-300 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-green-600" }),
                  "Mental Wellness"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Managing stress, building your support system, and addressing anxiety or depression with your provider." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-green-900 dark:text-green-300 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-green-600" }),
                  "Gentle Movement"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Safe exercise approved by your provider—walking, prenatal yoga, swimming all help with labor preparation." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-green-900 dark:text-green-300 mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "w-5 h-5 text-green-600" }),
                  "Education"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Childbirth classes, breastfeeding resources, and learning about newborn care build confidence!" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "text-xl font-bold cursor-pointer", children: "🤰 Naegele's Rule Explained" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Formula:" }),
              " EDD = LMP + 280 days + (cycle_length - 28 days)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Standard pregnancy is 40 weeks (280 days) from LMP. The formula adjusts for non-28-day cycles." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Gestational age is calculated from LMP, not conception (which typically occurs ~2 weeks later)." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "text-xl font-bold cursor-pointer", children: "📅 Trimesters & Milestones" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1st Trimester (0-13 weeks):" }),
              " Organ formation, highest miscarriage risk"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2nd Trimester (14-26 weeks):" }),
              " Growth, movement felt, anatomy scan"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "3rd Trimester (27-40 weeks):" }),
              " Rapid growth, preparation for birth"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "text-xl font-bold cursor-pointer", children: "❓ Quick FAQ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold", children: "Q: How accurate is this?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "A: ±1-2 weeks. Early ultrasound (6-12 weeks) is more accurate than LMP dating." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold", children: "Q: What if I don't know my LMP?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "A: Use ultrasound dating. Your provider can estimate from scan measurements." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold", children: "Q: Can my due date change?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "A: Yes, providers may adjust based on ultrasound, typically in the first trimester." })
            ] })
          ] })
        ] })
      ] })
    }
  );
}
export {
  PregnancyDueDateCalculator as default
};
