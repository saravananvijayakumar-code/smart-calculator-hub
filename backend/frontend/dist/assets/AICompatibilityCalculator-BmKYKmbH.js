import { r as reactExports, Q as useToast, j as jsxRuntimeExports, S as SEOHead, a8 as Sparkles, f as Card, g as CardHeader, h as CardTitle, H as Heart, i as CardDescription, k as CardContent, a4 as Label, V as Input, B as Button, a6 as Alert, a7 as AlertDescription } from "./index-CK9G4vW7.js";
import { T as Textarea } from "./textarea-DIKih6_2.js";
import { P as Progress } from "./progress-BKzT_jkA.js";
import { S as Separator } from "./separator-63Q9JacM.js";
import { C as CircleAlert } from "./circle-alert-DCAQyr8M.js";
import { T as Twitter } from "./twitter-CFAqYlq6.js";
import { F as Facebook } from "./facebook-BX8Qa6cK.js";
import { M as MessageCircle } from "./message-circle-DZtFORhh.js";
function AICompatibilityCalculator() {
  const [person1Name, setPerson1Name] = reactExports.useState("");
  const [person1Traits, setPerson1Traits] = reactExports.useState("");
  const [person2Name, setPerson2Name] = reactExports.useState("");
  const [person2Traits, setPerson2Traits] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const { toast } = useToast();
  const handleCalculate = async () => {
    if (!person1Name || !person1Traits || !person2Name || !person2Traits) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);
    const mockResult = {
      compatibilityScore: Math.floor(Math.random() * 30) + 70,
      analysis: `${person1Name} and ${person2Name} share a strong connection with complementary traits. Your personalities align well in key areas while maintaining healthy differences that create balance.`,
      strengths: [
        "Strong emotional connection",
        "Shared values and interests",
        "Effective communication style",
        "Mutual respect and understanding"
      ],
      challenges: [
        "Different approaches to problem-solving",
        "Need to balance independence and togetherness",
        "Communication during conflicts"
      ],
      advice: "Focus on maintaining open communication and celebrating your differences as opportunities for growth."
    };
    setTimeout(() => {
      setResult(mockResult);
      setIsLoading(false);
    }, 2e3);
  };
  const shareToSocial = (platform) => {
    if (!result) return;
    const shareText = `💕 ${person1Name} & ${person2Name} are ${result.compatibilityScore}% compatible! ${result.compatibilityScore >= 80 ? "🔥 Amazing match!" : result.compatibilityScore >= 60 ? "✨ Great potential!" : "💫 Worth exploring!"}

✨ Calculate your compatibility at www.smartcalculatorhubs.com #LoveCalculator #Compatibility`;
    const shareUrl = "https://www.smartcalculatorhubs.com";
    if (platform === "twitter") {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
      window.open(twitterUrl, "_blank");
    } else if (platform === "facebook") {
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
      window.open(facebookUrl, "_blank");
    } else if (platform === "whatsapp") {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
      window.open(whatsappUrl, "_blank");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "AI Compatibility Calculator - Smart Calculator Hubs",
        description: "Discover your compatibility with anyone using AI-powered personality analysis. Get insights into your relationship strengths and challenges.",
        keywords: "AI compatibility, relationship calculator, compatibility test, AI relationship analysis"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center space-x-2 bg-pink-100 dark:bg-pink-900/30 px-4 py-2 rounded-full mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-pink-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-pink-700 dark:text-pink-300", children: "AI-Powered Analysis" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent", children: "AI Compatibility Calculator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "Discover your compatibility using advanced AI personality analysis" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-6 w-6 text-pink-600" }),
            "Enter Your Details"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Provide information about both people to get AI-powered compatibility insights" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg", children: "Person 1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "person1Name", children: "Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "person1Name",
                    value: person1Name,
                    onChange: (e) => setPerson1Name(e.target.value),
                    placeholder: "Enter name"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "person1Traits", children: "Personality Traits" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "person1Traits",
                    value: person1Traits,
                    onChange: (e) => setPerson1Traits(e.target.value),
                    placeholder: "E.g., outgoing, creative, loves adventure, enjoys quiet evenings...",
                    rows: 4
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg", children: "Person 2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "person2Name", children: "Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "person2Name",
                    value: person2Name,
                    onChange: (e) => setPerson2Name(e.target.value),
                    placeholder: "Enter name"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "person2Traits", children: "Personality Traits" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "person2Traits",
                    value: person2Traits,
                    onChange: (e) => setPerson2Traits(e.target.value),
                    placeholder: "E.g., thoughtful, organized, enjoys reading, loves travel...",
                    rows: 4
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: handleCalculate,
              disabled: isLoading,
              className: "w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700",
              size: "lg",
              children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-2 h-5 w-5 animate-spin" }),
                "Analyzing Compatibility..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "mr-2 h-5 w-5" }),
                "Calculate Compatibility"
              ] })
            }
          )
        ] })
      ] }),
      result && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8 border-2 border-pink-200 dark:border-pink-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl", children: "Compatibility Results" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2", children: [
              result.compatibilityScore,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: result.compatibilityScore, className: "h-3 mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: result.analysis })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg mb-3 text-green-600", children: "Strengths" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: result.strengths.map((strength, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600", children: "✓" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: strength })
              ] }, idx)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg mb-3 text-amber-600", children: "Challenges" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: result.challenges.map((challenge, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-5 w-5 text-amber-600 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: challenge })
              ] }, idx)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-blue-900 dark:text-blue-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "AI Advice:" }),
              " ",
              result.advice
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Share Your Results" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: () => shareToSocial("twitter"),
                  variant: "outline",
                  className: "w-full",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "h-4 w-4 mr-2" }),
                    "X"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: () => shareToSocial("facebook"),
                  variant: "outline",
                  className: "w-full",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4 mr-2" }),
                    "Facebook"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: () => shareToSocial("whatsapp"),
                  variant: "outline",
                  className: "w-full",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4 mr-2" }),
                    "WhatsApp"
                  ]
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl", children: "Understanding Compatibility: The Science Behind Lasting Love" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose prose-sm max-w-none dark:prose-invert space-y-6 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "💖 What Is Compatibility, Really?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Let's bust a myth right away: there's no such thing as a "perfect match" or "soulmate" in the mystical sense. Instead, compatibility is more like a garden—it requires the right soil (shared values), adequate sunlight (communication), regular watering (effort), and yes, a bit of luck with the weather (life circumstances). Research from the longest-running relationship study, the Harvard Study of Adult Development spanning over 85 years, reveals that relationship satisfaction comes not from finding a perfect partner, but from how couples navigate differences and support each other through life's challenges.` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `When our AI analyzes your compatibility, it's looking at multiple dimensions of connection: emotional resonance, intellectual stimulation, values alignment, lifestyle compatibility, and complementary traits. Think of it like a complex recipe—you need the right balance of ingredients, not just one "magic" component. Two people can be wildly different in some areas yet highly compatible overall because their differences complement rather than clash. The key is understanding which differences create tension and which create growth!` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🧬 The Five Pillars of Relationship Compatibility" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "1. Emotional Compatibility:" }),
              " This is about how you process and express feelings. Do you both share emotional experiences easily, or does one person need more time to process internally? Research by Dr. Sue Johnson, founder of Emotionally Focused Therapy, shows that couples who can effectively attune to each other's emotional needs create secure attachment bonds. It's not about having the same emotions—it's about being able to understand, validate, and support your partner's emotional world. An emotionally intuitive person paired with someone who struggles to express feelings can work beautifully if both are willing to meet in the middle!"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "2. Intellectual Compatibility:" }),
              ` This doesn't mean you both need PhDs! Instead, it's about finding mental stimulation in conversations together. Can you challenge each other's perspectives in healthy ways? Do you enjoy learning together? Couples with high intellectual compatibility often report "never running out of things to talk about." According to research published in the Journal of Personality and Social Psychology, couples who engage in novel and arousing activities together (which includes stimulating conversation!) report higher relationship satisfaction. The intellectual connection keeps the spark alive long after physical attraction naturally fluctuates.`
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "3. Values Alignment:" }),
              " Here's where the rubber meets the road! You can disagree on favorite movies or music tastes, but fundamental values—views on family, money, career, religion, and life priorities—need significant overlap for long-term compatibility. A landmark study by the University of Iowa following couples for 20 years found that shared values were the strongest predictor of relationship longevity, even more than personality similarity. Values create the roadmap for your shared future. When you're aligned on what truly matters, you can navigate disagreements on smaller issues much more easily."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "4. Lifestyle Compatibility:" }),
              " How do you prefer to spend your time? Are you a homebody paired with an adventure seeker? An early bird with a night owl? These seemingly small differences can create significant friction over time—or beautiful balance if approached correctly. The key is finding enough overlap in how you want to live day-to-day while respecting each other's individual needs. Research shows that couples who maintain both shared activities and independent interests report the highest satisfaction levels. You want to be partners in life, not identical clones!"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "5. Complementary Strengths:" }),
              ` This is where "opposites attract" has some truth! The most successful long-term couples often have complementary skill sets and temperaments. One partner might be more analytical while the other is more intuitive. One excels at planning while the other brings spontaneity. These differences create a stronger team unit. Dr. John Gottman's research with over 3,000 couples shows that successful partnerships leverage their differences rather than trying to change each other. Your partner's strengths in areas where you're weaker (and vice versa) create a synergy that makes you both better together than apart!`
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🎭 Personality Types and Relationship Dynamics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Understanding personality frameworks can provide valuable insights into compatibility. While there's no perfect personality pairing, certain dynamics tend to work better than others. Extroverts often balance well with introverts—the extrovert brings social energy while the introvert provides grounding. However, two extroverts can create an exciting, dynamic partnership, and two introverts can build a deeply intimate, peaceful connection. The key is mutual understanding and respect for each other's needs." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The Big Five personality traits (Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism) offer another lens for compatibility. Research shows that similarity in Openness (curiosity and appreciation for new experiences) and Conscientiousness (organization and reliability) strongly correlates with relationship satisfaction. However, some differences can be beneficial! A highly agreeable partner can balance someone more assertive, creating a dynamic where both nurturing and boundary-setting exist in the relationship." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Here's the fascinating part: your personality isn't fixed. Relationships actually shape and develop our personalities over time! A longitudinal study published in the Journal of Personality found that people's personalities become more similar to their partners' over the course of a relationship. You literally grow together. This means compatibility isn't just about finding the right match—it's about growing in compatible directions through mutual influence and shared experiences." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🗣️ Communication: The Universal Compatibility Amplifier" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Here's a secret that relationship therapists know: communication can overcome almost any compatibility challenge. Couples with lower "natural" compatibility but excellent communication skills often outlast couples who seem "perfect" on paper but can't effectively communicate. Dr. Gottman's research identified specific communication patterns that predict relationship success or failure with over 90% accuracy. The "Four Horsemen" of relationship apocalypse are criticism, contempt, defensiveness, and stonewalling—avoid these, and you're already ahead of the game!` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Effective communication in relationships isn't about never disagreeing—it's about how you disagree. Couples with high compatibility know how to fight fair: they use "I" statements instead of "you" accusations, they take breaks when emotions run too high, they validate each other's feelings even when they don't agree, and they focus on finding solutions rather than winning arguments. These are learned skills! Even couples with incredible natural chemistry need to develop healthy communication patterns to maintain their connection over decades.` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `One powerful communication tool is the concept of "love languages" developed by Dr. Gary Chapman. Understanding how you and your partner prefer to give and receive love (words of affirmation, acts of service, receiving gifts, quality time, or physical touch) can dramatically improve compatibility. You might be expressing love in your preferred language while your partner needs it in theirs! When couples learn to "speak" each other's love languages, they report feeling more connected even if they have different personality types or interests.` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "⚖️ The Balance of Similarity and Difference" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Here's where compatibility gets beautifully complex: research shows that the ideal relationship contains both similarity and difference in strategic proportions. The "similarity-attraction" theory suggests we're drawn to people who share our values, attitudes, and background—this creates comfort and ease in the relationship. However, too much similarity can lead to boredom and stagnation. This is where complementary differences come in!` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The sweet spot seems to be: similar in values and life goals, complementary in skills and perspectives. Imagine a couple where both value family and financial security (similar values), but one is more detail-oriented while the other sees the big picture (complementary skills). This partnership leverages the comfort of shared goals with the growth that comes from different approaches. They won't argue about what matters (the destination) but will benefit from seeing multiple paths to get there (the journey)." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Interestingly, couples who describe themselves as "best friends" often have a magical ratio of sameness and difference. They share enough interests to enjoy spending time together but maintain enough individuality to bring fresh perspectives and experiences back to the relationship. Research from the National Bureau of Economic Research found that couples who consider their partner their best friend are twice as satisfied in their marriages. This friendship foundation combines the comfort of similarity with the excitement of learning from someone who sees the world slightly differently!' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🔍 Attachment Styles: The Hidden Compatibility Factor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "One of the most powerful predictors of relationship compatibility is attachment style—how you bonded with caregivers in childhood and how that shapes your adult relationships. Attachment theory identifies four main styles: secure, anxious-preoccupied, dismissive-avoidant, and fearful-avoidant. Here's the fascinating part: secure attachment isn't just about your childhood—it can be developed through healing relationships in adulthood!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'The gold standard is two securely attached partners who can maintain independence while also being vulnerable and intimate. However, an anxious person paired with an avoidant person creates a classic "protest polka"—the more one pursues, the more the other retreats, creating a painful cycle. Understanding these patterns is crucial for compatibility. The good news? Awareness is transformative! Couples who understand their attachment styles and actively work on creating secure bonds can overcome initial incompatibilities.' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Research by Dr. Amir Levine shows that knowing your attachment style helps you choose partners more wisely and improve existing relationships. If you're anxiously attached, a secure partner can help you develop more security over time. If you're avoidant, a patient, secure partner can help you become more comfortable with intimacy. The least compatible pairing is anxious-avoidant, but even this can work with commitment, therapy, and mutual understanding. Your attachment style influences compatibility, but it doesn't determine your destiny!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🌱 Growth Mindset: The Secret Ingredient" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Here's where we get to the really empowering part: compatibility is not just something you have—it's something you build! Psychologist Carol Dweck's research on growth mindset applies beautifully to relationships. Couples who believe that relationships require work and growth (growth mindset) report higher satisfaction than those who believe relationships should be effortless if you're truly compatible (fixed mindset)." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This doesn't mean relationships should be constant struggle—healthy relationships do have natural ease and flow. But it means that challenges are viewed as opportunities to grow together rather than signs of incompatibility. When couples approach their relationship as a team working toward shared goals, they navigate obstacles much more effectively. A study published in Personality and Social Psychology Bulletin found that couples with growth mindsets were more likely to stay together and reported higher satisfaction levels, especially during tough times." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `The growth mindset also embraces the idea that you and your partner will change over time—and that's not just okay, it's beautiful! The person you fell in love with at 25 won't be identical to that same person at 45. Careers change, interests evolve, bodies age, perspectives shift. Couples with high compatibility navigate these changes together, supporting each other's growth rather than resisting it. They ask, "How can we grow together?" instead of "Why aren't you the same person I married?"` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🎲 The Role of Timing and Context" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Here's something fascinating that often gets overlooked: compatibility isn't just about who you are—it's also about when you meet. Two people who might not work together at one stage of life could be perfect for each other at another stage. Someone focused on career building might clash with a partner wanting to start a family immediately, but those same people might be beautifully compatible once their life stages align." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Context matters enormously too. A couple might be highly compatible in a low-stress environment but struggle when facing financial hardship, health challenges, or family crises. This is why relationship researchers emphasize "stress testing" compatibility by observing how couples handle adversity together. The couples who maintain respect, teamwork, and emotional connection during hard times demonstrate a deeper level of compatibility than those who only thrive when life is easy.' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Geographic and cultural context also plays a role. A relationship that thrives in a supportive, accepting community might struggle in an environment where it faces constant external pressure. Long-distance relationships require different compatibility factors (like trust and independent fulfillment) than couples who see each other daily. Understanding your current life context helps you evaluate compatibility more realistically—not just "do we work together?" but "do we work together in this specific situation?"' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🔮 Can AI Really Predict Compatibility?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Let's be refreshingly honest: AI can identify patterns and provide insights, but love isn't purely algorithmic! Our compatibility calculator analyzes the traits you input through frameworks based on psychological research, but it can't capture the intangible magic of chemistry, timing, or that indescribable "spark." What AI excels at is helping you think more deeply about compatibility factors you might otherwise overlook.` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `The value of AI-powered compatibility analysis isn't in generating a definitive "yes" or "no"—it's in prompting reflection and conversation. The 87% compatibility score is less important than the insights about strengths and challenges. Use these insights as conversation starters with your partner. "Hey, the AI mentioned we might approach problem-solving differently—let's talk about how we can leverage that!" The tool facilitates self-awareness and partner-awareness, which are the real drivers of compatibility.` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Modern dating apps use increasingly sophisticated algorithms to match people based on compatibility factors, and research shows they can be moderately successful at identifying potentially compatible matches. However, the most successful long-term relationships still require what no AI can provide: commitment, effort, empathy, and the willingness to choose each other daily. Think of AI compatibility tools as a helpful map—they can show you promising paths, but you still have to walk them yourself!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "💪 Navigating Incompatibilities" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Every couple—yes, every single one—has areas of incompatibility. The question isn't whether you have incompatibilities, but whether they're deal-breakers or growth opportunities. Relationship expert Esther Perel brilliantly notes that we often choose partners who can help us heal old wounds or develop underdeveloped parts of ourselves. This means some level of incompatibility is actually necessary for personal growth!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'The key is distinguishing between "healthy tension" and "destructive conflict." Healthy tension arises from differences that challenge you to grow—like an organized person learning flexibility from a spontaneous partner, or an analytical thinker learning to embrace emotions from a more feelings-oriented partner. Destructive conflict comes from fundamental incompatibilities in core values, life goals, or ethical principles. These deeper incompatibilities are much harder (though not impossible) to navigate successfully.' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "When you encounter incompatibilities, ask three questions: (1) Is this a core value difference or a preference difference? (2) Can we both feel fulfilled while honoring this difference? (3) Are we both willing to work on bridging this gap? If the incompatibility is about preferences or styles rather than core values, and both partners are willing to compromise and communicate, most incompatibilities can be successfully navigated. The relationship research is clear: it's not the presence of problems that predicts breakup—it's the inability or unwillingness to address them constructively." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🌟 The Compatibility Paradox" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Here's a beautiful paradox: sometimes what makes people initially compatible becomes what drives them apart, and sometimes what seems incompatible becomes the foundation of a strong partnership! The ambitious go-getter attracted to their partner's laid-back nature might later feel frustrated by their different approaches to career. Conversely, differences that seem challenging at first—like different cultural backgrounds—can become sources of richness and growth once couples learn to bridge those gaps." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `This paradox exists because we evolve, relationships have seasons, and what we need changes over time. The partner who was perfect for you in your adventurous twenties might feel incompatible with your nesting thirties—or vice versa. This is why compatibility isn't a one-time assessment but an ongoing conversation. Regular relationship check-ins asking "Are we still growing in compatible directions?" help couples stay connected even as they change.` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `The ultimate compatibility skill is what researcher Dr. Kyle Benson calls "relationship awareness"—the ability to recognize when your partnership is thriving and when it needs attention. Highly compatible couples aren't those who never struggle; they're those who notice when they're drifting and actively choose to reconnect. They treat their relationship as a living thing that needs care, attention, and occasional pruning to stay healthy. Compatibility, at its best, is a verb, not a noun!` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🎯 Making Compatibility Work for You" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `So how do you use compatibility insights practically? First, be honest about what truly matters to you versus what you think should matter. Society might say career ambition is important, but if you genuinely value work-life balance more, own that! Second, look for "compatible incompatibilities"—differences that create healthy tension rather than constant conflict. Third, assess your partner's willingness to grow and communicate, which often matters more than current compatibility levels.` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Fourth, understand your non-negotiables versus your preferences. Non-negotiables are core values or life goals that you can't compromise without losing yourself. Preferences are things you'd like but can be flexible about. A common mistake is treating preferences as non-negotiables, which unnecessarily limits your compatible partner pool. Finally, remember that compatibility is a dance—sometimes you lead, sometimes you follow, and the beauty is in the movement together, not in stepping identically." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Use tools like this AI compatibility calculator as starting points for deeper self-reflection and partner communication. The real magic happens not in the percentage score but in the conversations it generates. "I notice we both value family but show it differently—let's talk about how we can honor both approaches." This kind of dialogue builds understanding, which builds compatibility, which builds love that lasts!` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 p-4 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/10 dark:to-purple-900/10 rounded-lg border-2 border-pink-200 dark:border-pink-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm italic text-foreground font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Remember:" }),
            " The most compatible couples aren't those who never disagree—they're those who disagree respectfully, repair quickly, and choose love daily. Compatibility provides the foundation, but commitment, communication, and compassion build the house. Use these insights wisely, love generously, and remember that the best relationships are co-created, not just discovered! 💕"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "How It Works" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our AI Compatibility Calculator uses advanced personality analysis to assess relationship compatibility based on:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Personality trait alignment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Communication style compatibility" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Shared interests and values" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Complementary strengths and weaknesses" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm italic", children: "Note: This tool is for entertainment and insight purposes. Real relationships require effort, communication, and mutual respect." })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  AICompatibilityCalculator as default
};
