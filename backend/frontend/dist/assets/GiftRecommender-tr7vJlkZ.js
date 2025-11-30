import { r as reactExports, O as useToast, j as jsxRuntimeExports, S as SEOHead, a7 as Sparkles, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a3 as Label, U as Input, B as Button } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { T as Textarea } from "./textarea-CuxlogY6.js";
import { B as Badge } from "./badge-fo2YvZos.js";
import { S as Separator } from "./separator-CgM4Fzdg.js";
import { G as Gift } from "./gift-CqM-Ij5N.js";
import { S as ShoppingBag } from "./shopping-bag-CvBYHefW.js";
import { E as ExternalLink } from "./external-link-YfkXMceN.js";
import { T as Twitter } from "./twitter-CGBC1eTU.js";
import { F as Facebook } from "./facebook-D2PZyBek.js";
import { M as MessageCircle } from "./message-circle-Bn7lRM51.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
function GiftRecommender() {
  const [recipientName, setRecipientName] = reactExports.useState("");
  const [relationship, setRelationship] = reactExports.useState("");
  const [occasion, setOccasion] = reactExports.useState("");
  const [interests, setInterests] = reactExports.useState("");
  const [budget, setBudget] = reactExports.useState("");
  const [suggestions, setSuggestions] = reactExports.useState([]);
  const [isGenerating, setIsGenerating] = reactExports.useState(false);
  const { toast } = useToast();
  const handleGenerate = () => {
    if (!recipientName || !relationship || !occasion) {
      toast({
        title: "Missing Information",
        description: "Please fill in at least the recipient, relationship, and occasion",
        variant: "destructive"
      });
      return;
    }
    setIsGenerating(true);
    setTimeout(() => {
      const mockSuggestions = [
        {
          name: "Personalized Photo Book",
          description: "Custom photo album with your favorite memories together",
          priceRange: "$30-$50",
          category: "Sentimental",
          why: "Perfect for preserving precious moments and showing how much you care"
        },
        {
          name: "Premium Coffee Subscription",
          description: "3-month subscription to artisan coffee from around the world",
          priceRange: "$40-$60",
          category: "Food & Drink",
          why: "Great for coffee lovers who enjoy discovering new flavors"
        },
        {
          name: "Wireless Earbuds",
          description: "High-quality wireless earbuds with noise cancellation",
          priceRange: "$80-$150",
          category: "Tech",
          why: "Practical gift for music lovers and daily commuters"
        },
        {
          name: "Spa Gift Basket",
          description: "Luxury spa products including bath bombs, lotions, and candles",
          priceRange: "$45-$75",
          category: "Self-Care",
          why: "Perfect for relaxation and showing you care about their wellbeing"
        },
        {
          name: "Experience Gift Card",
          description: "Gift card for local experiences like cooking classes or wine tasting",
          priceRange: "$50-$100",
          category: "Experience",
          why: "Creates lasting memories and offers flexibility to choose"
        }
      ];
      setSuggestions(mockSuggestions);
      setIsGenerating(false);
    }, 2e3);
  };
  const shareToSocial = (platform) => {
    if (suggestions.length === 0) return;
    const topGift = suggestions[0].name;
    const shareText = `🎁 Perfect gift idea for ${recipientName}: ${topGift}!

✨ Get personalized gift recommendations at www.smartcalculatorhubs.com #GiftIdeas #PerfectGift #Thoughtful`;
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "AI Gift Recommender - Smart Calculator Hubs",
        description: "Find the perfect gift for anyone with AI-powered recommendations. Get personalized gift ideas based on interests, budget, and occasion.",
        keywords: "AI gift recommender, gift ideas, present suggestions, personalized gifts"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-purple-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-purple-700 dark:text-purple-300", children: "AI-Powered Gift Ideas" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent", children: "AI Gift Recommender" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "Find the perfect gift with personalized AI recommendations" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "h-6 w-6 text-purple-600" }),
            "Tell Us About the Recipient"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "The more details you provide, the better our recommendations" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "recipientName", children: "Recipient Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "recipientName",
                  value: recipientName,
                  onChange: (e) => setRecipientName(e.target.value),
                  placeholder: "Who is this gift for?"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "relationship", children: "Relationship" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: relationship, onValueChange: setRelationship, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "relationship", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select relationship" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "partner", children: "Partner / Spouse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "parent", children: "Parent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sibling", children: "Sibling" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "friend", children: "Friend" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "coworker", children: "Coworker" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "child", children: "Child" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "other", children: "Other" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "occasion", children: "Occasion" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: occasion, onValueChange: setOccasion, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "occasion", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select occasion" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "birthday", children: "Birthday" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "anniversary", children: "Anniversary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "holiday", children: "Holiday" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "graduation", children: "Graduation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "thank-you", children: "Thank You" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "just-because", children: "Just Because" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "budget", children: "Budget (Optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "budget",
                  value: budget,
                  onChange: (e) => setBudget(e.target.value),
                  placeholder: "$50"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "interests", children: "Interests & Hobbies" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "interests",
                value: interests,
                onChange: (e) => setInterests(e.target.value),
                placeholder: "E.g., loves coffee, enjoys hiking, tech enthusiast, bookworm...",
                rows: 3
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: handleGenerate,
              disabled: isGenerating,
              className: "w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
              size: "lg",
              children: isGenerating ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-2 h-5 w-5 animate-spin" }),
                "Finding Perfect Gifts..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "mr-2 h-5 w-5" }),
                "Get Gift Recommendations"
              ] })
            }
          )
        ] })
      ] }),
      suggestions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold", children: [
          "Personalized Gift Ideas for ",
          recipientName
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 mb-8", children: suggestions.map((suggestion, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xl", children: suggestion.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: suggestion.category })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: suggestion.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right ml-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-purple-600", children: suggestion.priceRange }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-purple-600", children: "Why this gift:" }),
              " ",
              suggestion.why
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "w-full gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4" }),
              'Search for "',
              suggestion.name,
              '"',
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4 ml-auto" })
            ] })
          ] })
        ] }, idx)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-2 border-purple-200 dark:border-purple-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Share Your Gift Ideas" }),
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
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl", children: "The Art and Science of Memorable Gift-Giving" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose prose-sm max-w-none dark:prose-invert space-y-6 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🎁 Why Gifts Matter More Than You Think" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Gift-giving is one of humanity's oldest social rituals, dating back thousands of years across every culture. But gifts aren't just about the physical objects—they're powerful symbols of connection, appreciation, and care. Research in psychology shows that thoughtful gifts strengthen relationships, create shared memories, and communicate messages that words sometimes can't express. When you give a truly thoughtful gift, you're saying: "I see you, I know you, I value you." That message resonates far beyond the moment of unwrapping!` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Interestingly, studies show that the emotional impact of a gift isn't primarily about its monetary value—it's about the thoughtfulness behind it. A $20 gift that perfectly matches someone's interests creates more joy and connection than a $200 generic gift. This is why our AI focuses on personalization rather than price. We're helping you demonstrate that you know and care about the recipient, which is the real gift beneath the wrapping paper. The best gifts tell a story: "I remembered you mentioned loving coffee, so I found this specialty subscription" or "I know you've been stressed, so here's a spa day to help you relax."` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🧠 The Psychology of Gift Perception" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Here's a fascinating insight from behavioral economics: givers and receivers often value gifts differently. Givers tend to prefer giving expensive or impressive gifts, believing cost signals care. Receivers, however, value gifts that show the giver understands them, regardless of cost. This "gift-giving gap" explains why your carefully chosen expensive watch might land less successfully than a simple book by their favorite author. The receiver is asking, "Does this person know me?" not "How much did they spend?"` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Another psychological principle: the "peak-end rule" suggests that people remember the peak moment and the ending of experiences most vividly. In gift-giving terms, this means the presentation moment matters enormously! A moderately priced gift presented with creativity, enthusiasm, and personal connection will be remembered more fondly than an expensive gift handed over casually. Consider the entire gift experience: the buildup, the reveal, the story you tell about why you chose it, and the recipient's emotional response. You're creating a memory, not just delivering a product!` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `The concept of "gift utility" considers both practical usefulness and emotional satisfaction. Some gifts score high on one dimension but low on the other—a practical vacuum cleaner might be useful but emotionally disappointing (unless specifically requested!), while a sentimental photo album might be emotionally powerful but not "useful" in a practical sense. The sweet spot? Gifts that serve a genuine need while also communicating care and thoughtfulness. Our AI suggestions aim for this sweet spot by considering both the recipient's interests and practical lifestyle needs!` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "💡 The Five Love Languages of Gift-Giving" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Dr. Gary Chapman's "Five Love Languages" framework (words of affirmation, acts of service, receiving gifts, quality time, and physical touch) applies beautifully to gift selection! If your recipient's primary love language is "receiving gifts," the gift itself carries enormous meaning—they feel loved through tangible symbols of thoughtfulness. For these people, even small, frequent gifts create strong connection. Quality matters less than the thought and personalization showing you were thinking about them!` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'If their love language is "quality time," the best gifts facilitate shared experiences: concert tickets, cooking classes you take together, or a board game for game nights. The gift becomes a vehicle for connection rather than an object to possess. For "acts of service" people, gifts that make their life easier show love powerfully—meal delivery subscriptions, house cleaning services, or tools that simplify their tasks demonstrate care through helpfulness. Understanding love languages transforms gift-giving from guesswork to strategic expression of love!' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: '"Words of affirmation" folks might treasure a heartfelt letter more than any physical gift, or appreciate gifts with meaningful inscriptions and personal messages. "Physical touch" people value cozy blankets, massage gift certificates, or soft fabrics—gifts that provide sensory comfort. When you align your gift with their love language, you multiply its emotional impact. Our AI asks about relationship type and interests to help identify which approaches might resonate most with your specific recipient!' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🎯 The Personalization Advantage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Generic gifts say, "I needed to give you something." Personalized gifts say, "I know who you are." This distinction is crucial! Personalization doesn't necessarily mean custom engraving (though that's nice!)—it means choosing something aligned with their unique interests, needs, or personality. A coffee lover receives artisan beans from a region they've never tried. A fitness enthusiast gets equipment for their specific workout style. A bookworm receives a first edition of their favorite author. Each choice demonstrates attention and understanding.` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Deep personalization requires observation and listening throughout the year, not just when gift-giving occasions approach. Mental (or actual!) note-taking when people mention desires, frustrations, hobbies, or interests creates a gift idea treasure trove. "I wish I had time to read more" suggests an audiobook subscription. "I've always wanted to learn guitar" points toward beginner lessons or a quality starter instrument. "I love this artist" means original prints or concert tickets. You're not guessing—you're responding to clues they've given you!` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Social media provides modern gift intelligence! Observe what they share, like, and comment on. Pinterest boards reveal aspirational interests. Instagram follows show current obsessions. Amazon wishlists explicitly state desires! While creeping someone's social media for gift ideas might feel slightly stalkerish, it's actually thoughtful research that shows you care enough to pay attention to their digital life. Our AI can't browse their social media, but you can! Combine our suggestions with your personal knowledge for maximum impact!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🌟 Experience Gifts: Creating Lasting Memories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Research consistently shows that experiential purchases—concert tickets, travel, classes, activities—create more lasting happiness than material purchases. Why? Experiences can't be directly compared to others' experiences (reducing envy), they improve with time as memories are enhanced and idealized, they become part of our identity ("I'm someone who's been skydiving!"), and they're often shared, strengthening relationships. When you gift experiences, you're giving stories they'll tell for years!` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Different experiences suit different personalities and relationships. Adventure experiences (skydiving, zip-lining, hot air balloon rides) work for thrill-seekers and create exciting stories. Learning experiences (cooking classes, pottery workshops, photography courses) appeal to curious, growth-oriented people. Relaxation experiences (spa days, meditation retreats, wine tastings) suit stressed individuals needing decompression. Social experiences (escape rooms, comedy shows, restaurant reservations) strengthen bonds through shared enjoyment. Match the experience type to the recipient's personality for maximum impact!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `The timing flexibility of experience gifts is both strength and weakness. Strength: the recipient can choose when to use it, fitting their schedule. Weakness: if not scheduled promptly, the gift can languish unused (the dreaded "gift certificate in the drawer syndrome"). Combat this by making concrete plans together when giving the gift: "I got us tickets to this show—let's look at calendars and choose a date right now!" This transforms the gift from future possibility to actual planned experience, increasing likelihood of follow-through and shared enjoyment!` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🎨 The Presentation: Unwrapping Matters!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Gift presentation amplifies or diminishes the gift's impact. Beautiful wrapping, creative packaging, or unexpected presentation methods enhance anticipation and show effort. Research on the "aesthetic-usability effect" suggests that attractive presentation makes people perceive the contents more favorably. This doesn't mean expensive gift wrap—it means thoughtful presentation aligned with the recipient's tastes. Rustic kraft paper with twine for minimalists. Bright, playful wrapping for the whimsical. Elegant, understated boxes for sophisticated tastes. The packaging communicates care before the gift is even revealed!` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Consider creative presentation alternatives: scavenger hunts leading to the gift, nested boxes creating suspense, gifts hidden in unexpected places, or experiences revealed through puzzles or clues. For long-distance gifting, a personal video message explaining your choice adds emotional connection that transforms a shipped package into a heartfelt gesture. The unwrapping experience should build excitement and communicate the thought invested in the entire gift-giving process, not just the item selection!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sustainability-conscious recipients appreciate eco-friendly wrapping: reusable fabric gift bags, furoshiki (Japanese wrapping cloths), recycled paper, or even newspaper for ironic vintage aesthetics. Some people delight in elaborate wrapping that takes minutes to unwrap; others prefer simple, quick access. Know your audience! The wrapping should enhance their experience, not frustrate it. Our suggestions include presentation ideas when relevant—like beautiful gift baskets or artfully arranged subscription boxes—because presentation IS part of the gift!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "💰 Budget Strategy: Maximum Impact, Any Price Point" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Thoughtful gifts exist at every price point—the budget is less important than the thought invested. A $15 book by their favorite author, with a handwritten note about why it made you think of them, can mean more than a $150 generic gift card. The key is making your budget work strategically: invest in quality over quantity, personalization over expense, and meaning over impressiveness. A single perfect gift beats multiple mediocre ones every time!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Budget-stretching strategies: shop off-season sales for future occasions, make DIY gifts that leverage your unique skills (home-baked goods for the baker, custom artwork for the artist, playlists for the music lover), pool resources with others for group gifts, or give "time gifts" that cost only your effort (babysitting vouchers, home-cooked dinners, handyman services). The most treasured gifts often involve personal time and effort rather than retail purchases. Your attention and skill are valuable currencies in gift-giving!' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For larger budgets, avoid the trap of expensive-but-impersonal gifts. A $500 gift card feels less personal than a $100 gift that shows deep understanding of their interests. If spending more, consider: curated collections around a theme (tea lover's basket with premium teas, special teapot, honey, and tea accessories), high-quality versions of items they already use and love (upgrading their everyday coffee maker to a prosumer model), or once-in-a-lifetime experiences they'd never splurge on themselves (bucket-list concert tickets, luxury spa day, weekend getaway). Make the price tag invisible behind the thoughtfulness!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🔄 The Regifting Ethics and Gift Exchange Philosophy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Let's address the slightly taboo topic of regifting! Ethically done, regifting is actually environmentally responsible and practical. The key principles: the item must be new or like-new condition, it should genuinely suit the new recipient better than you, and you should never regift within the same social circle (awkward!). Essentially, you're being a thoughtful curator, matching items to people who'll appreciate them. There's honor in ensuring gifts find homes where they're truly valued rather than cluttering your closet!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Gift exchanges (Secret Santa, White Elephant, etc.) have their own psychology and strategy. For Secret Santa with price limits, maximize impact by asking clarifying questions about preferences if allowed, and choosing items with broad appeal but personal touch. For White Elephant where stealing is allowed, strategic gifts are either universally desirable (nice wine, gift cards, cozy blankets) or hilariously specific gag gifts. Understanding the exchange type and group dynamics helps you navigate these social gift situations successfully!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `The "gift registry" approach (weddings, baby showers, housewarming) solves the thoughtfulness dilemma differently—recipients curate options they genuinely want, and givers choose from that list. While some find registries impersonal, they're actually efficient and practical, ensuring gifts are useful and desired. The thoughtfulness shifts from choosing the item to choosing which item to give, adding personal notes, and celebrating the occasion meaningfully. Both approaches—registries and independent gift selection—have merit in different contexts!` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🌍 Cultural Considerations in Gift-Giving" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Gift-giving etiquette varies dramatically across cultures, and cultural awareness prevents well-intentioned gifts from accidentally offending. In many Asian cultures, gifts are given and received with both hands as a sign of respect, and opening gifts immediately is considered rude (gifts are opened privately later). In Chinese culture, avoid gifts in sets of four (the number sounds like "death") and avoid clocks (symbolizing time running out). In Middle Eastern cultures, avoid alcohol or pork-related items, and never give with the left hand.' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Color symbolism varies culturally too. White symbolizes purity in Western cultures but mourning in many Eastern cultures. Red is lucky in Chinese culture but associated with danger in some Western contexts. Purple is royal in Western traditions but sometimes associated with death in Brazilian culture. When giving gifts across cultural lines, a bit of research prevents unintended symbolism. The thought matters most, but cultural sensitivity shows deeper respect and thoughtfulness!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Business gift-giving has distinct cultural norms too. Japanese business culture involves omiyage (regional souvenirs from travels), German culture values practical quality over flashiness, Latin American cultures appreciate relationship-building gifts, while American business culture navigates complex anti-bribery regulations. Understanding these nuances helps you give gifts that strengthen professional relationships without causing cultural confusion or compliance issues. Our AI provides general suggestions, but cultural research specific to your recipient's background adds crucial context!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🎪 Occasion-Specific Gift Strategies" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Birthdays:" }),
              " The ultimate personal occasion! Birthdays celebrate the individual, so gifts should reflect their unique personality and interests. Birthday gifts can be more indulgent or frivolous than other occasions—it's their day! Surprise elements work well for birthdays (unexpected gifts, surprise parties coordinated with the gift). For milestone birthdays (30, 40, 50), consider gifts with retrospective elements (photo books, memory collections) or aspirational elements (experiences for their new decade)."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Anniversaries:" }),
              " Celebrate the relationship and shared history! Traditional anniversary gifts by year (paper for 1st, cotton for 2nd, etc.) provide creative constraints. Modern interpretations allow flexibility while honoring tradition. Sentimental gifts work beautifully—recreating first date experiences, photo books of your journey together, or gifts referencing inside jokes and shared memories. For romantic partners, balance sentimentality with practicality, and consider experience gifts that create new memories together!"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Holidays:" }),
              " Often involve reciprocal gift exchanges where social obligation mixes with genuine affection. Navigate this by setting clear expectations about budget and exchange format with your social circle. For Christmas, Hanukkah, or other multi-day celebrations, consider spreading smaller gifts across days rather than one large gift. For holidays with religious significance, respect that context—a Hanukkah gift should acknowledge Jewish tradition, not just feel like a Christmas gift with different wrapping!"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Life Transitions:" }),
              " Graduations, new jobs, new homes, new babies—these milestones deserve gifts that honor the transition! Graduation gifts can be practical for next-life-stage (professional wardrobe items, quality luggage) or aspirational (inspiring books, adventure funds). New home gifts should suit their style and needs (useful kitchen items they haven't yet acquired, decor matching their aesthetic). New baby gifts that help the parents (meal delivery, cleaning service, quality sleep products) sometimes mean more than another adorable onesie!"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Difficult Times:" }),
              " Condolence gifts, get-well gifts, and sympathy gifts require particular sensitivity. The goal is comfort and support, not cheer or celebration. Food gifts (meal delivery, comfort food baskets) show practical care. Memory-honoring gifts (donations to meaningful causes, memorial plants or trees) acknowledge loss beautifully. For illness, gifts that make recovery more comfortable (cozy blankets, entertainment subscriptions, audiobooks) show you're thinking of them. Avoid platitudes; simply being present and thoughtful is the real gift!"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🚀 The Future of Gift-Giving: Technology and Trends" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Modern technology is transforming gift-giving in fascinating ways! AI-powered recommendation engines (like ours!) help navigate choice paralysis when faced with infinite online options. Augmented reality allows you to virtually "try out" gifts in someone's space before purchasing. Subscription services convert one-time gifts into ongoing experiences (monthly book clubs, wine deliveries, streaming services). Digital gifts (online courses, app subscriptions, e-gift cards) provide instant gratification for last-minute gifting while still offering personalization.` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Social commerce and group gifting platforms make collaborative gifting easier—multiple friends pooling resources for larger gifts, coordinated group efforts visible to all contributors. Sustainability considerations are increasingly important; eco-conscious consumers value gifts that minimize environmental impact (experiences over things, sustainable products, charitable donations). The "buy local" movement supports small businesses while finding unique gifts unavailable in big-box stores. These trends reflect evolving values around consumption, community, and environmental responsibility!' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Looking ahead, expect more personalization through data (AI analyzing the recipient's online behavior to suggest perfect gifts), more experiential offerings (as material possessions lose appeal), more emphasis on charitable giving and social impact gifts, and potentially even more creative uses of technology (VR experiences as gifts, NFTs for digital collectors, etc.). Despite technological evolution, the core truth remains: gifts that show genuine understanding and care for the recipient will always triumph over generic convenience. Technology is a tool for thoughtfulness, not a replacement for it!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "💝 The Ultimate Gift-Giving Philosophy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "At its essence, gift-giving is a love language—a tangible way of expressing intangible feelings. The best gifts achieve three things simultaneously: they show you truly know the recipient, they meet a genuine need or desire (practical or emotional), and they're given with warmth and joy rather than obligation. When all three align, the gift becomes more than an object—it becomes a symbol of your relationship, a physical manifestation of care that can be held, used, and remembered." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Stop worrying about finding the "perfect" gift—it doesn't exist! Instead, aim for "thoughtful, personal, and given with love." That bar is achievable and meaningful. The perfectionism trap makes gift-giving stressful rather than joyful. Give yourself permission to be imperfect. Sometimes your carefully chosen gift won't land as expected—and that's okay! The attempt, the thought, the effort to honor someone with a gift—that's what matters. Recipients who focus on the love behind the gift rather than the gift itself will always appreciate your gesture.` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Finally, remember that YOU are also a gift to the people in your life! Your presence, your time, your attention, your love—these are the ultimate gifts that no Amazon purchase can replace. Physical gifts are simply symbols of these deeper offerings. When you frame gift-giving as one of many ways you express care (alongside quality time, supportive actions, loving words, and physical affection), it becomes less pressured and more joyful. You're not JUST giving a gift—you're strengthening a relationship. And that's the most beautiful gift of all!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-lg border-2 border-purple-200 dark:border-purple-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm italic text-foreground font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Happy Gift-Giving!" }),
            " May your gifts bring joy, strengthen connections, and create beautiful memories. Remember: the best gifts come from the heart, tailored by thoughtfulness, and given with love. Whether you choose one of our AI suggestions or they simply spark your own perfect idea, you're already being an amazing gift-giver by caring enough to put in this effort. Your recipient is lucky to have someone who thinks about them so thoughtfully! 🎁✨"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Gift-Giving Tips" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Personal touches matter:" }),
            " Add a handwritten note or custom wrapping"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Consider timing:" }),
            " Order early to avoid shipping delays"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Think practical:" }),
            " Useful gifts are often the most appreciated"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Experience over things:" }),
            " Sometimes memories matter more than objects"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Keep receipts:" }),
            " Make exchanges easy if needed"
          ] })
        ] }) })
      ] })
    ] }) })
  ] });
}
export {
  GiftRecommender as default
};
