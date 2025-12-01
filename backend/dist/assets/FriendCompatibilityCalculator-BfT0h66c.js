import { n as createLucideIcon, r as reactExports, O as useToast, j as jsxRuntimeExports, S as SEOHead, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a3 as Label, U as Input, a5 as Alert, p as TriangleAlert, a6 as AlertDescription, B as Button, a7 as Sparkles, H as Heart } from "./index-C_OXA6OQ.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { P as Progress } from "./progress-BN2f3CdS.js";
import { S as Separator } from "./separator-CgM4Fzdg.js";
import { E as EnhancedAIAnalysis } from "./EnhancedAIAnalysis-BZiQW2bt.js";
import { E as ExportShareButtons } from "./ExportShareButtons-DZrWE_F2.js";
import { A as AdsterraSlot } from "./AdsterraSlot--S6-7ysu.js";
import { U as Users } from "./users-fS_YAEJN.js";
import { Z as Zap } from "./zap-B5WxZbDS.js";
import { M as MessageCircle } from "./message-circle-Bn7lRM51.js";
import { T as Trophy } from "./trophy-5WhHKNzM.js";
import "./loader-circle-BYW7QwsU.js";
import "./brain-U3SZm3t9.js";
import "./target-1ApqtYDG.js";
import "./circle-check-big-BoxGYPKG.js";
import "./arrow-right-CtOKJdMG.js";
import "./lightbulb-doNczJxC.js";
import "./share-2-ViScha7M.js";
import "./link-DxXhzsoi.js";
import "./copy-DGMuG98H.js";
import "./twitter-CGBC1eTU.js";
import "./facebook-D2PZyBek.js";
import "./linkedin-BSJyfSWT.js";
import "./mail-CbNEH7Kl.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
];
const Music = createLucideIcon("music", __iconNode);
function FriendCompatibilityCalculator() {
  const [friend1Name, setFriend1Name] = reactExports.useState("");
  const [friend1Age, setFriend1Age] = reactExports.useState("");
  const [friend1Hobby, setFriend1Hobby] = reactExports.useState("");
  const [friend2Name, setFriend2Name] = reactExports.useState("");
  const [friend2Age, setFriend2Age] = reactExports.useState("");
  const [friend2Hobby, setFriend2Hobby] = reactExports.useState("");
  const [results, setResults] = reactExports.useState(null);
  const [isCalculating, setIsCalculating] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [showAnimation, setShowAnimation] = reactExports.useState(false);
  const [categoryAnimations, setCategoryAnimations] = reactExports.useState({});
  useToast();
  const calculateNameCompatibility = (name1, name2) => {
    const n1 = name1.toLowerCase().replace(/\s/g, "");
    const n2 = name2.toLowerCase().replace(/\s/g, "");
    const letterFreq1 = {};
    const letterFreq2 = {};
    for (const char of n1) {
      letterFreq1[char] = (letterFreq1[char] || 0) + 1;
    }
    for (const char of n2) {
      letterFreq2[char] = (letterFreq2[char] || 0) + 1;
    }
    let commonCount = 0;
    for (const char in letterFreq1) {
      if (letterFreq2[char]) {
        commonCount += Math.min(letterFreq1[char], letterFreq2[char]);
      }
    }
    const totalLetters = Math.max(n1.length, n2.length);
    const baseScore = commonCount / totalLetters * 100;
    const vowels1 = n1.split("").filter((c) => "aeiou".includes(c)).length;
    const vowels2 = n2.split("").filter((c) => "aeiou".includes(c)).length;
    const vowelRatio = 1 - Math.abs(vowels1 - vowels2) / Math.max(vowels1, vowels2, 1);
    const lengthDiff = Math.abs(n1.length - n2.length);
    const lengthBonus = Math.max(0, 10 - lengthDiff);
    return Math.round(Math.min(100, baseScore * 0.7 + vowelRatio * 20 + lengthBonus));
  };
  const calculateAgeCompatibility = (age1, age2) => {
    const ageDiff = Math.abs(age1 - age2);
    if (ageDiff === 0) return 100;
    if (ageDiff <= 2) return 95;
    if (ageDiff <= 5) return 85;
    if (ageDiff <= 10) return 70;
    if (ageDiff <= 15) return 55;
    return 40;
  };
  const calculateHobbyCompatibility = (hobby1, hobby2) => {
    const h1 = hobby1.toLowerCase().trim();
    const h2 = hobby2.toLowerCase().trim();
    if (h1 === h2) return 100;
    const indoorActivities = ["reading", "gaming", "movies", "cooking", "art", "music", "netflix", "youtube", "tv", "video games", "board games", "chess", "puzzle", "knitting", "sewing", "baking"];
    const outdoorActivities = ["sports", "hiking", "running", "cycling", "swimming", "traveling", "football", "soccer", "basketball", "tennis", "golf", "camping", "fishing", "surfing", "skiing", "skating", "biking", "walking", "jogging"];
    const creativeActivities = ["art", "music", "writing", "photography", "cooking", "crafts", "drawing", "painting", "sculpting", "singing", "dancing", "guitar", "piano", "composing", "design", "sketching"];
    const socialActivities = ["parties", "dancing", "socializing", "events", "dining", "clubbing", "networking", "meetups", "concerts", "festivals"];
    const techActivities = ["coding", "programming", "gaming", "tech", "computers", "gadgets", "software", "hardware", "apps", "websites"];
    const fitnessActivities = ["gym", "fitness", "workout", "yoga", "pilates", "crossfit", "running", "cycling", "swimming", "sports", "martial arts", "boxing", "weightlifting"];
    const wordSimilarity = (() => {
      const words1 = h1.split(/\s+/);
      const words2 = h2.split(/\s+/);
      let commonWords = 0;
      for (const w1 of words1) {
        if (words2.some((w2) => w2.includes(w1) || w1.includes(w2))) {
          commonWords++;
        }
      }
      return commonWords / Math.max(words1.length, words2.length) * 30;
    })();
    const categories1 = {
      indoor: indoorActivities.some((a) => h1.includes(a)),
      outdoor: outdoorActivities.some((a) => h1.includes(a)),
      creative: creativeActivities.some((a) => h1.includes(a)),
      social: socialActivities.some((a) => h1.includes(a)),
      tech: techActivities.some((a) => h1.includes(a)),
      fitness: fitnessActivities.some((a) => h1.includes(a))
    };
    const categories2 = {
      indoor: indoorActivities.some((a) => h2.includes(a)),
      outdoor: outdoorActivities.some((a) => h2.includes(a)),
      creative: creativeActivities.some((a) => h2.includes(a)),
      social: socialActivities.some((a) => h2.includes(a)),
      tech: techActivities.some((a) => h2.includes(a)),
      fitness: fitnessActivities.some((a) => h2.includes(a))
    };
    let categoryMatches = 0;
    Object.keys(categories1).forEach((key) => {
      if (categories1[key] && categories2[key]) {
        categoryMatches++;
      }
    });
    const categoryScore = categoryMatches * 15;
    let baseCompatibility = 50;
    if (categories1.indoor && categories2.outdoor || categories1.outdoor && categories2.indoor) {
      baseCompatibility = 55;
    }
    if (categoryMatches === 0) {
      baseCompatibility = 45;
    }
    return Math.round(Math.min(100, baseCompatibility + categoryScore + wordSimilarity));
  };
  const getCompatibilityLevel = (score) => {
    if (score >= 90) return "Best Friends Forever! 💯";
    if (score >= 80) return "Amazing Friends! 🌟";
    if (score >= 70) return "Great Friends! 😊";
    if (score >= 60) return "Good Friends! 👍";
    if (score >= 50) return "Friends! 🤝";
    return "Potential Friends! 🌱";
  };
  const getFriendshipType = (scores) => {
    if (scores.adventure > 80) return "Adventure Buddies";
    if (scores.humor > 80) return "Comedy Partners";
    if (scores.emotional > 80) return "Soul Friends";
    if (scores.interests > 80) return "Hobby Partners";
    if (scores.communication > 80) return "Chat Champions";
    if (scores.loyalty > 80) return "Ride or Die";
    return "Balanced Friends";
  };
  const handleCalculate = () => {
    if (!friend1Name.trim()) {
      setError("Please enter Friend 1 name");
      return;
    }
    if (!friend1Age || parseInt(friend1Age) < 5 || parseInt(friend1Age) > 120) {
      setError("Please enter a valid age for Friend 1");
      return;
    }
    if (!friend1Hobby.trim()) {
      setError("Please enter Friend 1 favorite hobby");
      return;
    }
    if (!friend2Name.trim()) {
      setError("Please enter Friend 2 name");
      return;
    }
    if (!friend2Age || parseInt(friend2Age) < 5 || parseInt(friend2Age) > 120) {
      setError("Please enter a valid age for Friend 2");
      return;
    }
    if (!friend2Hobby.trim()) {
      setError("Please enter Friend 2 favorite hobby");
      return;
    }
    setError(null);
    setIsCalculating(true);
    setShowAnimation(false);
    setTimeout(() => {
      const nameCompat = calculateNameCompatibility(friend1Name, friend2Name);
      const ageCompat = calculateAgeCompatibility(parseInt(friend1Age), parseInt(friend2Age));
      const hobbyCompat = calculateHobbyCompatibility(friend1Hobby, friend2Hobby);
      const nameHash = (friend1Name + friend2Name).split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % 100;
      const ageHash = (parseInt(friend1Age) + parseInt(friend2Age)) % 100;
      const hobbyHash = (friend1Hobby + friend2Hobby).split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % 100;
      const seed1 = (nameHash + ageHash) / 200;
      const seed2 = (ageHash + hobbyHash) / 200;
      const seed3 = (nameHash + hobbyHash) / 200;
      const seed4 = nameHash * ageHash % 100 / 100;
      const seed5 = hobbyHash * ageHash % 100 / 100;
      const communication = Math.round(Math.min(100, nameCompat * 0.35 + ageCompat * 0.25 + hobbyCompat * 0.15 + seed1 * 25));
      const humor = Math.round(Math.min(100, ageCompat * 0.25 + hobbyCompat * 0.35 + nameCompat * 0.15 + seed2 * 25));
      const loyalty = Math.round(Math.min(100, nameCompat * 0.3 + ageCompat * 0.2 + hobbyCompat * 0.15 + seed3 * 35));
      const adventure = Math.round(Math.min(100, hobbyCompat * 0.45 + ageCompat * 0.25 + nameCompat * 0.1 + seed4 * 20));
      const emotional = Math.round(Math.min(100, nameCompat * 0.25 + ageCompat * 0.25 + hobbyCompat * 0.2 + seed5 * 30));
      const interests = Math.round(Math.min(100, hobbyCompat * 0.6 + nameCompat * 0.15 + ageCompat * 0.1 + seed1 * 15));
      const categoryScores = {
        communication: Math.min(communication, 100),
        humor: Math.min(humor, 100),
        loyalty: Math.min(loyalty, 100),
        adventure: Math.min(adventure, 100),
        emotional: Math.min(emotional, 100),
        interests: Math.min(interests, 100)
      };
      const totalScore = Math.round(
        (categoryScores.communication + categoryScores.humor + categoryScores.loyalty + categoryScores.adventure + categoryScores.emotional + categoryScores.interests) / 6
      );
      const friendshipType = getFriendshipType(categoryScores);
      const strengthsMap = {
        communication: "Excellent communication and understanding",
        humor: "Share a great sense of humor",
        loyalty: "Strong loyalty and trust",
        adventure: "Love for adventure and trying new things",
        emotional: "Deep emotional connection",
        interests: "Common interests and hobbies"
      };
      const strengths = Object.entries(categoryScores).filter(([_, score]) => score >= 75).map(([category, _]) => strengthsMap[category]).slice(0, 3);
      const conflictsMap = {
        communication: "May have communication challenges",
        humor: "Different senses of humor",
        loyalty: "Need to build more trust",
        adventure: "Different comfort zones for adventure",
        emotional: "Different emotional needs",
        interests: "Could explore more shared interests"
      };
      const potentialConflicts = Object.entries(categoryScores).filter(([_, score]) => score < 60).map(([category, _]) => conflictsMap[category]).slice(0, 2);
      const activitiesMap = {
        "Adventure Buddies": ["Go hiking", "Try extreme sports", "Travel together", "Explore new places"],
        "Comedy Partners": ["Watch comedy shows", "Share memes", "Prank each other", "Game nights"],
        "Soul Friends": ["Deep conversations", "Support each other", "Share secrets", "Heart-to-hearts"],
        "Hobby Partners": ["Practice hobbies together", "Join clubs", "Attend workshops", "Share collections"],
        "Chat Champions": ["Long video calls", "Voice messages", "Text marathons", "Coffee dates"],
        "Ride or Die": ["Be there always", "Support dreams", "Defend each other", "Grow together"],
        "Balanced Friends": ["Movie nights", "Dinner dates", "Study together", "Hang out casually"]
      };
      const funFactsOptions = [
        `${friend1Name} and ${friend2Name} would make ${totalScore >= 80 ? "incredible" : "great"} travel buddies!`,
        `Your friendship has a ${totalScore}% success rate - that's ${totalScore >= 70 ? "awesome" : "pretty good"}!`,
        `You'd probably ${categoryScores.humor >= 70 ? "laugh until you cry" : "have fun"} together!`,
        `The age difference of ${Math.abs(parseInt(friend1Age) - parseInt(friend2Age))} years ${Math.abs(parseInt(friend1Age) - parseInt(friend2Age)) <= 5 ? "doesn't matter at all" : "brings different perspectives"}!`,
        `Your shared interest in ${friend1Hobby.toLowerCase() === friend2Hobby.toLowerCase() ? friend1Hobby : "activities"} is a great foundation!`,
        `${categoryScores.loyalty >= 75 ? "You'd have each other's backs!" : "Building trust will strengthen your friendship!"}`
      ];
      const result = {
        totalScore,
        compatibilityLevel: getCompatibilityLevel(totalScore),
        categoryScores,
        strengths,
        potentialConflicts: potentialConflicts.length > 0 ? potentialConflicts : ["Keep communicating openly"],
        friendshipType,
        activities: activitiesMap[friendshipType] || activitiesMap["Balanced Friends"],
        funFacts: funFactsOptions.slice(0, 3)
      };
      setResults(result);
      setIsCalculating(false);
      setShowAnimation(true);
      setTimeout(() => {
        Object.keys(result.categoryScores).forEach((key, idx) => {
          setTimeout(() => {
            setCategoryAnimations((prev) => ({ ...prev, [key]: true }));
          }, idx * 150);
        });
      }, 700);
    }, 1500);
  };
  const shareText = results ? `🎉 ${friend1Name} and ${friend2Name} have a ${results.totalScore}% friendship compatibility! We're ${results.friendshipType}! Calculate yours now!` : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Friend Compatibility Calculator 👯 - Test Your Friendship Score | Free BFF Test",
        description: "Calculate your friendship compatibility score! Discover how compatible you are with your best friend based on personality, interests, and more. Free friend compatibility test with AI insights.",
        keywords: "friend compatibility, friendship calculator, BFF test, friendship score, compatibility test, best friend quiz, friendship quiz, friend match calculator"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-gray-900 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "top", className: "mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl mb-4 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-10 h-10 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent mb-4", children: "Friend Compatibility Calculator 👯" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Test your friendship! Calculate your compatibility score with your best friend and discover what makes your bond special." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-2xl flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-orange-600" }),
                "Calculate Friendship Compatibility"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter details about both friends to discover your compatibility score" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-3 text-yellow-900 dark:text-yellow-100", children: "Friend 1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "friend1Name", className: "text-base font-semibold", children: "Name" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "friend1Name",
                        type: "text",
                        placeholder: "Enter name",
                        value: friend1Name,
                        onChange: (e) => setFriend1Name(e.target.value),
                        className: "text-lg h-12"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "friend1Age", className: "text-base font-semibold", children: "Age" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "friend1Age",
                        type: "number",
                        placeholder: "Enter age",
                        value: friend1Age,
                        onChange: (e) => setFriend1Age(e.target.value),
                        className: "text-lg h-12",
                        min: "5",
                        max: "120"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "friend1Hobby", className: "text-base font-semibold", children: "Favorite Hobby" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "friend1Hobby",
                        type: "text",
                        placeholder: "e.g., Gaming, Reading, Sports",
                        value: friend1Hobby,
                        onChange: (e) => setFriend1Hobby(e.target.value),
                        className: "text-lg h-12"
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-3 text-orange-900 dark:text-orange-100", children: "Friend 2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "friend2Name", className: "text-base font-semibold", children: "Name" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "friend2Name",
                        type: "text",
                        placeholder: "Enter name",
                        value: friend2Name,
                        onChange: (e) => setFriend2Name(e.target.value),
                        className: "text-lg h-12"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "friend2Age", className: "text-base font-semibold", children: "Age" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "friend2Age",
                        type: "number",
                        placeholder: "Enter age",
                        value: friend2Age,
                        onChange: (e) => setFriend2Age(e.target.value),
                        className: "text-lg h-12",
                        min: "5",
                        max: "120"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "friend2Hobby", className: "text-base font-semibold", children: "Favorite Hobby" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "friend2Hobby",
                        type: "text",
                        placeholder: "e.g., Gaming, Reading, Sports",
                        value: friend2Hobby,
                        onChange: (e) => setFriend2Hobby(e.target.value),
                        className: "text-lg h-12"
                      }
                    )
                  ] })
                ] })
              ] }),
              error && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "destructive", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: error })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: handleCalculate,
                  disabled: isCalculating,
                  className: "w-full h-14 text-lg bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white shadow-lg",
                  children: isCalculating ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-2 h-5 w-5 animate-spin" }),
                    " Calculating Friendship..."
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "mr-2 h-5 w-5" }),
                    " Calculate Compatibility"
                  ] })
                }
              )
            ] })
          ] }),
          results && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `transform transition-all duration-700 ${showAnimation ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-2xl border-0 bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100 dark:from-yellow-900/40 dark:via-orange-900/40 dark:to-pink-900/40 overflow-hidden relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.3),transparent_50%)] animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-8 text-center relative z-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 rounded-full shadow-2xl mb-4 animate-[wiggle_1s_ease-in-out] relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500 animate-ping opacity-75" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-5xl font-bold text-white relative z-10 drop-shadow-lg", children: [
                      results.totalScore,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-pink-600 dark:from-yellow-400 dark:via-orange-400 dark:to-pink-400 bg-clip-text text-transparent mb-2 animate-[fadeIn_0.5s_ease-out]", children: results.compatibilityLevel }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-lg px-6 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white border-0 shadow-lg animate-[bounce_1s_ease-in-out_2]", children: [
                    "✨ ",
                    results.friendshipType
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ExportShareButtons,
                  {
                    calculatorType: "friend-compatibility",
                    inputs: { friend1Name, friend1Age, friend1Hobby, friend2Name, friend2Age, friend2Hobby },
                    results: { score: results.totalScore },
                    title: shareText
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0 bg-gradient-to-br from-white via-orange-50/30 to-pink-50/30 dark:from-gray-800 dark:via-orange-900/10 dark:to-pink-900/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-6 h-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent", children: "Compatibility Breakdown" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-4", children: Object.entries(results.categoryScores).map(([category, score], idx) => {
                const icons = {
                  communication: MessageCircle,
                  humor: "😂",
                  loyalty: Heart,
                  adventure: Zap,
                  emotional: "💝",
                  interests: Music
                };
                const IconComponent = icons[category];
                const isAnimated = categoryAnimations[category];
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `transform transition-all duration-500 ${isAnimated ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      typeof IconComponent === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: IconComponent }) : /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "w-5 h-5 text-orange-600 dark:text-orange-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold capitalize", children: category })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-orange-600 dark:text-orange-400 font-bold text-lg", children: [
                      score,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: score, className: "h-3 bg-gray-200 dark:bg-gray-700" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 h-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full", style: { width: `${score}%`, transition: "width 1s ease-out", transitionDelay: `${idx * 0.15}s` } })
                  ] })
                ] }, category);
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              EnhancedAIAnalysis,
              {
                calculatorType: "friend-compatibility",
                data: {
                  friend1: { name: friend1Name, age: friend1Age, hobby: friend1Hobby },
                  friend2: { name: friend2Name, age: friend2Age, hobby: friend2Hobby },
                  results
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20 overflow-hidden relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-green-400/10 rounded-full blur-3xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-6 h-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent", children: "Friendship Strengths" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: results.strengths.length > 0 ? results.strengths.map((strength, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-green-200 dark:border-green-800 animate-[slideInLeft_0.5s_ease-out]", style: { animationDelay: `${idx * 0.1}s` }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold", children: "✓" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 dark:text-gray-300 font-medium", children: strength })
              ] }, idx)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Building your strengths together!" }) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-900/20 dark:via-orange-900/20 dark:to-yellow-900/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-6 h-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent", children: "Areas to Work On" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: results.potentialConflicts.map((conflict, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-amber-200 dark:border-amber-800 animate-[slideInRight_0.5s_ease-out]", style: { animationDelay: `${idx * 0.1}s` }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold", children: "!" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 dark:text-gray-300 font-medium", children: conflict })
              ] }, idx)) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0 bg-gradient-to-br from-purple-50 via-pink-50 to-fuchsia-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-fuchsia-900/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { className: "w-6 h-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent", children: "Fun Activities Together" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-3", children: results.activities.map((activity, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/30 rounded-xl text-center font-medium shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-200 dark:border-purple-800 animate-[fadeInScale_0.5s_ease-out]", style: { animationDelay: `${idx * 0.05}s` }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-2", children: "🎉" }),
                activity
              ] }, idx)) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-sky-900/20 overflow-hidden relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-lg animate-[spin_3s_linear_infinite]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent", children: "Fun Facts About Your Friendship" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: results.funFacts.map((fact, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 bg-gradient-to-r from-white via-blue-50/50 to-cyan-50/50 dark:from-gray-800 dark:via-blue-900/20 dark:to-cyan-900/20 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-800 animate-[bounceIn_0.6s_ease-out]", style: { animationDelay: `${idx * 0.15}s` }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "💡" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed flex-1", children: fact })
              ] }) }, idx)) }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdsterraSlot, { position: "middle", className: "mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-xl flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "💡" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent", children: "About Friendship Compatibility" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 text-sm text-gray-600 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-orange-600 dark:text-orange-400 mb-2", children: "What This Measures" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our calculator analyzes communication style, shared interests, emotional connection, humor compatibility, loyalty potential, and adventure alignment." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-orange-600 dark:text-orange-400 mb-2", children: "Friendship Types" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "🏔️ Adventure Buddies - Love thrills" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "😂 Comedy Partners - Share laughs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "💝 Soul Friends - Deep connection" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "🎨 Hobby Partners - Common interests" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-orange-600 dark:text-orange-400 mb-2", children: "Remember" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Great friendships grow over time! Even a lower score just means there's room to learn more about each other and build stronger bonds." })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-xl border-0 mb-8 bg-gradient-to-br from-white via-purple-50/20 to-pink-50/20 dark:from-gray-800 dark:via-purple-900/10 dark:to-pink-900/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 bg-clip-text text-transparent", children: "The Complete Guide to Friend Compatibility and Strong Friendships" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose prose-lg max-w-none dark:prose-invert", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-6 mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent", children: "Understanding Friendship Compatibility" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Friendship compatibility is the measure of how well two people's personalities, interests, values, and communication styles align to create a fulfilling and lasting friendship. Unlike romantic compatibility, friendship compatibility focuses on mutual respect, shared activities, emotional support, and the ability to have fun together without the pressures of romantic expectations." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent", children: "The Six Pillars of Friendship Compatibility" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "1. Communication Compatibility" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Great friends communicate effortlessly. This doesn't mean you talk the same way, but rather that you understand each other's communication style. Some people are direct, others are subtle. Some prefer long deep conversations, while others connect through quick check-ins and shared experiences. Communication compatibility means you "get" each other, even when you're different.` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "2. Humor Alignment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Shared laughter is one of friendship's greatest joys. While you don't need identical senses of humor, there should be enough overlap that you genuinely enjoy making each other laugh. Whether it's silly memes, witty banter, dad jokes, or satirical humor, finding your shared comedy sweet spot strengthens bonds immensely." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "3. Loyalty and Trust" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "True friendship requires knowing you can count on each other. Loyalty compatibility means you both value trustworthiness, keep confidences, show up when needed, and have each other's backs. It's about knowing your friend will be there for the important moments and defend you when you're not in the room." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "4. Adventure and Activity Level" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Whether you're thrill-seeking adventurers or cozy homebodies, matching activity levels creates natural friendship flow. Adventure compatibility doesn't require identical interests, but rather complementary energy levels and willingness to try each other's favorite activities. The best friendships involve mutual exploration of new experiences." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "5. Emotional Connection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Deep friendships involve emotional vulnerability and support. Emotional compatibility means you can share feelings, provide comfort during hard times, and celebrate wins together. It's about matching depth—whether you prefer keeping things light or diving into serious heart-to-hearts." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "6. Shared Interests" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Common hobbies, passions, and interests provide natural bonding opportunities. You don't need to share every interest, but having some overlap gives you activities to enjoy together, topics to discuss, and ways to spend quality time that you both genuinely enjoy." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent", children: "Types of Friendships" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Adventure Buddies" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "These friends are always down for the next big thing. Whether it's traveling to new countries, trying extreme sports, exploring hidden restaurants, or spontaneous road trips, adventure buddies thrive on novelty and excitement together. They push each other out of comfort zones and create unforgettable memories." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Comedy Partners" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Laughter is the foundation of this friendship. Comedy partners share memes at 3 AM, have inside jokes no one else understands, and can turn any situation into comedy gold. They're the friends who make your face hurt from laughing and can cheer you up no matter how bad your day was." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Soul Friends" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `These rare connections go beyond surface-level friendship. Soul friends understand you on a profound level, share deep conversations about life's meaning, support each other through transformations, and maintain connection even through long distances or time apart. They're often described as "chosen family."` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Hobby Partners" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Bonded by shared passions, hobby partners might be gaming buddies, gym partners, book club friends, or creative collaborators. While your friendship might center around specific activities, it often deepens over time as you share more of your lives while pursuing common interests." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Chat Champions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "These friends excel at staying connected through constant communication. Whether through marathon text conversations, daily voice notes, weekly video calls, or old-school phone chats, you're always in each other's lives. Distance means nothing to chat champions." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Ride or Die Friends" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The ultimate loyalty friendship. These are the friends who will help you move, pick you up from the airport at 5 AM, tell you hard truths when needed, and stand by you through your worst decisions and best triumphs. They're family by choice, not blood." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent", children: "How to Strengthen Any Friendship" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Communication is Key" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Regular, honest communication builds strong friendships. Don't wait for big moments—share the small stuff too. Text when something reminds you of them, call to check in, and most importantly, address issues before they become problems. Good friends talk things out." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Make Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Friendships require investment. Schedule regular friend dates, even if it's just a coffee catch-up or a walk in the park. Quality time doesn't need to be elaborate—consistency matters more than grand gestures. Show up regularly, and your friendship will flourish." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Support Their Dreams" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Great friends celebrate each other's successes and support each other's goals. Be your friend's cheerleader, encourage their ambitions, celebrate their wins (big and small), and help them get back up when they fall. Genuine support strengthens bonds immeasurably." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Accept Differences" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You don't need to agree on everything. The strongest friendships embrace differences while maintaining respect. You can have different political views, religious beliefs, or lifestyle choices and still be great friends. Focus on what unites you rather than what divides you." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Create Shared Experiences" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Build your friendship story together. Try new restaurants, travel, take classes together, start traditions, or create challenges you both participate in. Shared experiences create inside jokes, memories, and deeper connections that define your unique friendship." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Practice Forgiveness" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No friendship is perfect. People make mistakes, forget important dates, say the wrong thing, or let you down. The ability to forgive, discuss what happened, and move forward is crucial for long-lasting friendships. Holding grudges destroys bonds that forgiveness can strengthen." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4 bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent", children: "Signs of a Healthy Friendship" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "You can be yourself:" }),
              " No need to pretend or hide parts of your personality"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Balanced give and take:" }),
              " Both people invest in the relationship"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Mutual respect:" }),
              " You value each other's opinions, time, and boundaries"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Genuine happiness for each other:" }),
              " No jealousy when good things happen"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Comfortable silence:" }),
              " You don't need to fill every moment with conversation"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Constructive conflict:" }),
              " Disagreements strengthen rather than damage the friendship"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Trust and honesty:" }),
              " You can share secrets and speak truth without fear"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fun and laughter:" }),
              " You genuinely enjoy spending time together"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Red Flags in Friendships" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Not all friendships are healthy. Watch for these warning signs:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "One-sided effort:" }),
              " You're always the one reaching out or making plans"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Constant negativity:" }),
              " They always complain but never take your advice"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Jealousy and competition:" }),
              " They can't be happy for your successes"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Boundary violations:" }),
              " They don't respect your limits or privacy"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Manipulation:" }),
              " Using guilt, pressure, or emotional blackmail"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Gossip and betrayal:" }),
              " They talk about you behind your back"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Energy drain:" }),
              " You feel exhausted rather than energized after seeing them"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Long-Distance Friendships" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Distance doesn't have to end a friendship. Here's how to maintain strong bonds across miles:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Schedule regular video calls or phone dates" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Send care packages or thoughtful gifts" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Watch movies or shows together using streaming party features" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Play online games together" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Share daily moments through photos and voice messages" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Plan visits and reunions to look forward to" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Stay involved in each other's lives through social media" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Send old-fashioned letters or postcards" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Friendships Through Life Stages" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Childhood Friendships" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Often based on proximity (neighbors, classmates) and shared activities. These friendships are characterized by play, imagination, and learning social skills. Some childhood friendships last a lifetime, while others naturally fade as interests diverge." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Teenage Friendships" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Incredibly intense and formative, teen friendships help develop identity. These friends are often the first people you share deep secrets with, navigate social dynamics alongside, and experience major life firsts together. The emotional intensity is natural and important for development." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Adult Friendships" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Making friends as an adult requires more effort but can be deeply rewarding. Adult friendships are often based on shared values, life stages, and intentional connection. They require scheduling, effort, and commitment but provide crucial support through career changes, relationships, parenthood, and life's challenges." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Senior Friendships" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Later-life friendships offer companionship, shared wisdom, and joy. Whether longtime friends or new connections, these relationships provide emotional support, combat loneliness, and add richness to the golden years. They're often characterized by deep acceptance and appreciation." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "The Science of Friendship" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Research shows that strong friendships contribute significantly to health and happiness:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Close friendships can increase lifespan by up to 50%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Social connections boost immune system function" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Friendships reduce stress hormones and lower blood pressure" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Strong social bonds decrease risk of depression and anxiety" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Friends provide purpose and meaning in life" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Social support helps people recover faster from illness" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Friendships in childhood predict better mental health in adulthood" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent", children: "Frequently Asked Questions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "How many close friends should I have?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Quality matters more than quantity. Research suggests 3-5 close friends provide optimal social support, but some people thrive with one best friend while others maintain larger circles. Focus on depth rather than numbers." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Is it normal to drift apart from friends?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Absolutely. People change, move, enter different life stages, and develop new interests. It's natural for some friendships to fade while others strengthen. Drifting apart doesn't invalidate the friendship you had—it's just part of life's evolution." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "How do I make new friends as an adult?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Join clubs or groups related to your interests, take classes, volunteer, attend social events, say yes to invitations, be open to workplace friendships, use friend-finding apps, attend religious or community gatherings, and most importantly, be willing to initiate connections." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mt-6 mb-3", children: "Should I stay friends with someone I've outgrown?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If the friendship drains you, holds you back, or feels forced, it's okay to let it fade naturally. You're not obligated to maintain friendships that no longer serve you. However, if there's genuine care beneath surface differences, the friendship might just need to evolve into a different form." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4", children: "Conclusion" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Friend compatibility is about finding people who complement your life, share your values, and make you feel seen and appreciated. Whether you're adventure buddies, comedy partners, or soul friends, what matters most is mutual respect, genuine care, and the willingness to invest in each other's happiness." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Great friendships don't happen by accident—they're built through consistent effort, honest communication, shared experiences, and genuine care. Whether your compatibility score is sky-high or you're still building your connection, remember that the best friendships grow stronger with time, intention, and love." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Celebrate the friends in your life, invest in those relationships, and don't be afraid to make new connections. After all, friendship is one of life's greatest treasures." })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  FriendCompatibilityCalculator as default
};
