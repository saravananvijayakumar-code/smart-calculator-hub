import { r as reactExports, O as useToast, j as jsxRuntimeExports, S as SEOHead, a7 as Sparkles, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a3 as Label, U as Input, B as Button, aB as RefreshCw, a5 as Alert, a6 as AlertDescription } from "./index-C_OXA6OQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CjBjxnD2.js";
import { S as Separator } from "./separator-CgM4Fzdg.js";
import { M as MessageCircle } from "./message-circle-Bn7lRM51.js";
import { T as Twitter } from "./twitter-CGBC1eTU.js";
import { F as Facebook } from "./facebook-D2PZyBek.js";
import "./index-IXOTxK3N.js";
import "./index-DAllkS3G.js";
import "./check-BMzwQJZ4.js";
const pickupLinesByStyle = {
  funny: [
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Do you have a map? I keep getting lost in your eyes.",
    "Is your name Google? Because you have everything I've been searching for.",
    "Are you a parking ticket? Because you've got FINE written all over you."
  ],
  sweet: [
    "I was wondering if you had an extra heart, because mine was just stolen.",
    "Do you believe in love at first sight, or should I walk by again?",
    "Your smile must be a black hole, because it's irresistibly attractive.",
    "If I could rearrange the alphabet, I'd put U and I together."
  ],
  clever: [
    "Are you made of copper and tellurium? Because you're Cu-Te.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you a time traveler? Because I see you in my future.",
    "Do you like Star Wars? Because Yoda one for me!"
  ],
  bold: [
    "I'm not a photographer, but I can picture us together.",
    "Is it hot in here, or is it just our chemistry?",
    "I must be a snowflake, because I've fallen for you.",
    "Are you a camera? Because every time I look at you, I smile."
  ]
};
function PickupLineGenerator() {
  const [targetName, setTargetName] = reactExports.useState("");
  const [interest, setInterest] = reactExports.useState("");
  const [style, setStyle] = reactExports.useState("funny");
  const [generatedLine, setGeneratedLine] = reactExports.useState("");
  const [isGenerating, setIsGenerating] = reactExports.useState(false);
  const { toast } = useToast();
  const handleGenerate = () => {
    if (!targetName) {
      toast({
        title: "Missing Information",
        description: "Please enter a name",
        variant: "destructive"
      });
      return;
    }
    setIsGenerating(true);
    setTimeout(() => {
      const lines = pickupLinesByStyle[style];
      let line = lines[Math.floor(Math.random() * lines.length)];
      if (interest) {
        line += ` I heard you love ${interest} - maybe we could explore that together?`;
      }
      setGeneratedLine(line);
      setIsGenerating(false);
    }, 1500);
  };
  const shareToSocial = (platform) => {
    if (!generatedLine) return;
    const shareText = `💬 Check out this ${style} pickup line:
"${generatedLine}"

😄 Generate your own at www.smartcalculatorhubs.com #PickupLines #Dating #Flirting`;
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
        title: "AI Pickup Line Generator - Smart Calculator Hubs",
        description: "Generate creative, personalized pickup lines using AI. Perfect for breaking the ice with humor and charm.",
        keywords: "AI pickup lines, pickup line generator, flirting tips, conversation starters"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center space-x-2 bg-pink-100 dark:bg-pink-900/30 px-4 py-2 rounded-full mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-pink-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-pink-700 dark:text-pink-300", children: "AI-Powered Charm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent", children: "AI Pickup Line Generator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "Get creative, personalized pickup lines powered by AI" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6 text-pink-600" }),
            "Personalize Your Line"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Tell us a bit about the person and the vibe you're going for" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "targetName", children: "Their Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "targetName",
                value: targetName,
                onChange: (e) => setTargetName(e.target.value),
                placeholder: "Enter their name"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "interest", children: "Their Interest (Optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "interest",
                value: interest,
                onChange: (e) => setInterest(e.target.value),
                placeholder: "E.g., coffee, hiking, books, music..."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "style", children: "Style" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: style, onValueChange: (value) => setStyle(value), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "style", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "funny", children: "😄 Funny" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sweet", children: "💕 Sweet" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "clever", children: "🧠 Clever" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "bold", children: "🔥 Bold" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: handleGenerate,
              disabled: isGenerating,
              className: "w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700",
              size: "lg",
              children: isGenerating ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-2 h-5 w-5 animate-spin" }),
                "Generating..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "mr-2 h-5 w-5" }),
                "Generate Pickup Line"
              ] })
            }
          )
        ] })
      ] }),
      generatedLine && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8 border-2 border-pink-200 dark:border-pink-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Your AI-Generated Line" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: handleGenerate,
              variant: "outline",
              size: "sm",
              className: "gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4" }),
                "New Line"
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 border-pink-300 dark:border-pink-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5 text-pink-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-lg font-medium mt-2", children: [
              '"',
              generatedLine,
              '"'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Share Your Line" }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl", children: "The Science & Art of Pickup Lines: A Playful Deep Dive" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose prose-sm max-w-none dark:prose-invert space-y-6 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🎭 The Psychology Behind the Magic" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Ever wondered why some pickup lines make people laugh while others make them cringe? It's all about the delicate dance between confidence, humor, and social intelligence! According to research in social psychology, successful conversation starters share three key ingredients: they create emotional arousal (surprise or amusement), signal positive intent, and demonstrate creativity. When you deliver a well-crafted pickup line, you're essentially performing a micro-comedy routine that says, "Hey, I don't take myself too seriously, and I bet you don't either!"` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "The beauty of pickup lines lies in their self-aware absurdity. Nobody—and we mean ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "nobody" }),
              '—actually expects "Are you a magician? Because whenever I look at you, everyone else disappears" to be taken literally. Instead, these playful openers serve as social lubricants that break the awkward silence and signal approachability. Research from the Journal of Personality and Social Psychology shows that humor is one of the most attractive qualities in initial encounters, ranked even higher than physical attractiveness in long-term compatibility studies!'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🧠 The Neuroscience of First Impressions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Here's where it gets fascinating: your brain makes unconscious judgments about someone within the first 100 milliseconds of meeting them. That's faster than you can blink! When you approach someone with a pickup line, you're working with an incredibly tight window to make a positive impression. The key is triggering the right neurochemicals—specifically dopamine (the reward chemical) through surprise and humor, and oxytocin (the bonding hormone) through genuine warmth." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `The "sweet" style pickup lines we generate tap into what researchers call "affiliative humor"—jokes and witty remarks that bring people together rather than put anyone down. When someone hears a genuinely sweet line like "I was wondering if you had an extra heart, because mine was just stolen," their mirror neurons activate, creating an empathetic response. It's like their brain is saying, "This person is vulnerable, creative, and trying to connect with me. I like that!"` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🎨 The Four Styles Explained (Because Not All Lines Are Created Equal!)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Funny Lines:" }),
              ` These are your crowd-pleasers, your ice-shatters, your "I-can't-believe-they-just-said-that" moments. Funny pickup lines work because laughter releases endorphins and creates instant rapport. They're low-pressure because even if the romantic connection doesn't spark, you've at least made someone smile. Pro tip: The key to funny lines is timing and delivery—say them with a twinkle in your eye that shows you know exactly how cheesy they are.`
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Sweet Lines:" }),
              " Ah, the romantics' choice! Sweet lines work by triggering feelings of warmth and appreciation. They're less about getting a laugh and more about creating a moment of genuine connection. These work best when delivered sincerely (but not too seriously—maintain that playful edge!). Studies show that compliments focused on unique qualities rather than just physical appearance are perceived as more genuine and attractive."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Clever Lines:" }),
              ` For the intellectually playful! Clever lines often involve wordplay, puns, or references that require a moment of mental processing. When someone "gets" a clever line, there's a mini reward in their brain—that "aha!" moment releases dopamine. These lines work especially well with people who value wit and intelligence. The chemistry pun "Are you made of copper and tellurium? Because you're Cu-Te" is a perfect example—it's nerdy, it's playful, and it immediately identifies you as someone who appreciates clever wordplay.`
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Bold Lines:" }),
              ' These are for the confident, the brave, the "fortune favors the bold" crowd. Bold lines signal high self-esteem and directness, which can be incredibly attractive—but they require the right delivery. The secret? Own it completely. A bold line said with hesitation falls flat, but the same line delivered with playful confidence can be magnetic. Research in evolutionary psychology suggests that displays of confidence (when genuine, not arrogant) signal social competence and genetic fitness.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🌟 The Personalization Paradox" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Here's where our AI gets really clever: we allow you to personalize your line with the person's interests. Why does this matter? Because specificity creates authenticity. When you mention someone's love of hiking or coffee or books, you're demonstrating two critical things: (1) you've paid attention, and (2) you're willing to put in effort. Even though they know you're using a generated line, the personalized addition shows genuine interest." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `This taps into what psychologists call the "similarity-attraction effect"—we're naturally drawn to people who share our interests and values. By referencing their hobby or passion, you're creating an instant micro-bond. "I heard you love hiking—maybe we could explore that together?" transforms a generic line into a potential shared experience. You're not just asking for their time; you're proposing an adventure aligned with their interests!` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "💡 The Delivery Matters More Than You Think" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Okay, real talk time: the actual words are only about 30% of communication. The other 70% comes from your tone, body language, facial expressions, and energy. You could deliver the world's best pickup line with a nervous mumble and dead eyes, and it would crash and burn. Conversely, you could say something moderately cheesy with genuine warmth, a playful smile, and relaxed confidence, and it becomes charming." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Here's the expert-level secret that dating coaches won't always tell you: the pickup line isn't really about the line at all. It's about giving yourself a structured way to approach someone and start a conversation. It's training wheels for your social courage. The line is just the vehicle; your authentic personality is the destination. When you understand this, the pressure drops dramatically. You're not trying to be perfect—you're just trying to be present, playful, and genuine." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🎯 Context Is King (Or Queen!)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `A pickup line that works brilliantly at a casual coffee shop might feel completely out of place at a professional networking event. Reading the room—understanding the social context—is perhaps the most underrated skill in the art of approach. Is the environment loud or quiet? Formal or casual? Are they with friends or alone? Are they wearing headphones (the universal "don't disturb" signal)? All these factors influence which style of line will land best.` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The best approach artists (yes, it's an art!) are social chameleons who can adapt their style to match the energy of the environment and the person they're approaching. A bold, high-energy line might work great at a party where everyone's already in a social mood. A sweet, low-key line might be better at a bookstore where people are in a more contemplative state. Our AI generates lines across different styles specifically so you can choose the one that fits your context best." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🚀 The Follow-Up: Where Real Connection Happens" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Here's something most people get wrong: they think the pickup line IS the conversation. Nope! The pickup line is just the door-opener. What you do in the next 30 seconds determines whether you're having a real conversation or getting politely dismissed. The secret? Transition quickly from the line to genuine curiosity about them. Ask open-ended questions. Listen actively. Show interest in their answers." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Research from relationship expert Dr. John Gottman shows that successful relationships are built on a foundation of genuine interest and "turning toward" your partner's bids for connection. This starts from the very first conversation! After delivering your line (and hopefully getting a laugh or smile), ask something like, "So what brings you here today?" or "I'm curious, what are you passionate about?" These questions shift the dynamic from performance to connection.` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🎪 The Rejection Reality Check" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Let's get real about something important: not every pickup line will work, and that's perfectly okay! In fact, if you're successfully connecting with every person you approach, you're probably not taking enough risks. Rejection is simply data—it tells you either the approach wasn't quite right, the timing was off, or there just wasn't mutual chemistry. None of these things are personal failures." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The most successful people in dating (and in life) understand that rejection is a numbers game mixed with skill development. Each approach, whether successful or not, makes you slightly better at reading social cues, adjusting your delivery, and building confidence. Professional comedians don't expect every joke to land. Athletes don't expect to win every game. Why should you expect every approach to result in a connection? Embrace the process, learn from the misses, and celebrate the wins!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🌈 Inclusive Flirting: Because Love Is For Everyone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "One beautiful thing about modern pickup lines is that they've evolved beyond the traditionally gendered scripts of decades past. Today's best conversation starters work across all gender identities and sexual orientations because they focus on universal human experiences: humor, connection, shared interests, and playfulness. Whether you're approaching someone at a pride parade, a tech conference, or a farmers market, the principles remain the same: be respectful, be genuine, and be playful." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our AI doesn't assume anything about you or the person you're approaching. The lines we generate are flexible enough to work in any context because they're built on fundamental principles of human attraction: demonstrating confidence, showing interest, creating positive emotions, and opening the door to genuine conversation. Love and connection are universal languages—we're just helping you find your unique accent!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🧪 The Experimental Mindset" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Here's a game-changing perspective shift: treat every social interaction as a fun experiment rather than a high-stakes test. Scientists don't get discouraged when a hypothesis doesn't pan out—they gather data and try a new approach! Apply this same mindset to your social life. "Hmm, the funny line got a polite laugh but no real engagement. Let me try a more genuine, sweet approach next time." This removes the ego from the equation and makes the whole process more enjoyable.` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `The experimental mindset also encourages you to try different styles and approaches rather than getting stuck in one pattern. Maybe you think of yourself as the "funny guy" or "sweet girl," but what if trying a clever or bold approach reveals a side of yourself you didn't know existed? Personal growth happens at the edges of our comfort zones. Plus, when you're genuinely experimenting and learning, that curiosity and growth energy becomes attractive in itself!` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🎁 The Gift of Making Someone's Day" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Even if a pickup line doesn't lead to a date or relationship, you've potentially given someone a gift: you've made them feel noticed, appreciated, and worth approaching. In a world where many people feel invisible or overlooked, a genuine (even if cheesy) attempt at connection can genuinely brighten someone's day. Of course, this only works if you're respectful and can gracefully accept disinterest, but when done right, you're spreading positive energy." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Think about it from the other person's perspective: someone thought they were interesting enough, attractive enough, compelling enough to overcome their own nervousness and approach them. That's actually pretty flattering! Even if they're not interested romantically, that acknowledgment can boost their confidence and put a smile on their face. Approach interactions with this abundance mindset—you're not taking something (their time, attention), you're offering something (connection, humor, appreciation)." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🔬 The Future of AI-Assisted Romance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We're living in fascinating times where AI can help us become better communicators and more confident approachers. But here's the beautiful paradox: the technology is at its best when it helps us be more authentically human, not less. Our pickup line generator isn't designed to replace your personality—it's designed to give you a starting point that you can infuse with your own energy, delivery, and follow-through." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "As AI continues to evolve, we're seeing tools that can help with everything from crafting thoughtful messages to suggesting conversation topics based on shared interests. But the magic ingredient—genuine human connection, vulnerability, and chemistry—will always require you to show up fully as yourself. Use the AI as a confidence booster and creativity spark, but remember: the best version of you is already enough. The lines are just training wheels until you're ready to fly solo!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "💫 Your Action Plan for Success" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Ready to put this knowledge into action? Here's your expert-level game plan: First, generate a few lines in different styles and practice them out loud (yes, really—hearing yourself say them builds muscle memory). Second, choose 2-3 that feel most authentic to your personality. Third, identify low-pressure situations where you can practice—coffee shops, bookstores, casual social events. Fourth, focus on the follow-up conversation more than the line itself. Fifth, track your progress and celebrate small wins (made someone smile? That's a win!)." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Remember, the goal isn't perfection—it's progress. Every conversation makes you a slightly better communicator. Every approach builds your confidence a little more. Every genuine connection, whether it lasts five minutes or fifty years, enriches your life. So take that generated line, add your own flavor, deliver it with a smile, and see what happens. The worst case? You get a "no thanks" and move on, slightly braver than before. The best case? You spark a connection that changes your life. Either way, you win by trying!` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 p-4 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/10 dark:to-purple-900/10 rounded-lg border-2 border-pink-200 dark:border-pink-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm italic text-foreground font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Final Wisdom:" }),
            " The most attractive quality isn't the perfect line—it's the courage to put yourself out there, the kindness to make someone feel valued, and the authenticity to be yourself. Use these AI-generated lines as your launchpad, but always land with your own genuine personality. Happy connecting! ✨"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Tips for Success" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Be Confident:" }),
              " Delivery is everything. Say it with a smile!"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Read the Room:" }),
              " Make sure the timing and setting are appropriate"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Be Genuine:" }),
              " Follow up with real conversation, not just lines"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Have Fun:" }),
              " Pickup lines work best when you're having fun with them"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Respect Boundaries:" }),
              " If they're not interested, gracefully move on"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm italic pt-3", children: "Remember: The best connections come from authentic conversation. Use these as icebreakers, not crutches!" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  PickupLineGenerator as default
};
