import { r as reactExports, Q as useToast, j as jsxRuntimeExports, S as SEOHead, a8 as Sparkles, f as Card, g as CardHeader, h as CardTitle, i as CardDescription, k as CardContent, a4 as Label, B as Button, aC as RefreshCw, H as Heart } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { C as Checkbox } from "./checkbox-Cbsqwr6g.js";
import { B as Badge } from "./badge-6THgoC_4.js";
import { S as Separator } from "./separator-63Q9JacM.js";
import { B as Baby } from "./baby-Bb16TXOs.js";
import { T as Twitter } from "./twitter-CFAqYlq6.js";
import { F as Facebook } from "./facebook-BX8Qa6cK.js";
import { M as MessageCircle } from "./message-circle-DZtFORhh.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./check-DTsA1WpX.js";
const boyNames = [
  { name: "Oliver", meaning: "Olive tree, symbolizing peace", origin: "Latin" },
  { name: "Liam", meaning: "Strong-willed warrior", origin: "Irish" },
  { name: "Noah", meaning: "Rest, comfort", origin: "Hebrew" },
  { name: "Ethan", meaning: "Strong, firm", origin: "Hebrew" },
  { name: "Leo", meaning: "Lion, brave", origin: "Latin" }
];
const girlNames = [
  { name: "Emma", meaning: "Universal, whole", origin: "German" },
  { name: "Olivia", meaning: "Olive tree", origin: "Latin" },
  { name: "Ava", meaning: "Life, bird", origin: "Latin" },
  { name: "Sophia", meaning: "Wisdom", origin: "Greek" },
  { name: "Luna", meaning: "Moon", origin: "Latin" }
];
const unisexNames = [
  { name: "Riley", meaning: "Courageous", origin: "Irish" },
  { name: "Avery", meaning: "Ruler of elves", origin: "English" },
  { name: "Jordan", meaning: "Flowing down", origin: "Hebrew" },
  { name: "Quinn", meaning: "Wise, intelligent", origin: "Irish" },
  { name: "Rowan", meaning: "Little red one", origin: "Irish" }
];
function BabyNameGenerator() {
  const [gender, setGender] = reactExports.useState("boy");
  const [style, setStyle] = reactExports.useState("modern");
  const [includeUnique, setIncludeUnique] = reactExports.useState(false);
  const [suggestions, setSuggestions] = reactExports.useState([]);
  const [isGenerating, setIsGenerating] = reactExports.useState(false);
  useToast();
  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      let namePool = [];
      if (gender === "boy") {
        namePool = boyNames;
      } else if (gender === "girl") {
        namePool = girlNames;
      } else {
        namePool = unisexNames;
      }
      const shuffled = [...namePool].sort(() => Math.random() - 0.5);
      setSuggestions(shuffled.slice(0, 5));
      setIsGenerating(false);
    }, 1500);
  };
  const shareToSocial = (platform) => {
    if (suggestions.length === 0) return;
    const topNames = suggestions.slice(0, 3).map((s) => s.name).join(", ");
    const shareText = `🍼 Beautiful baby name ideas: ${topNames}

✨ Find your perfect baby name at www.smartcalculatorhubs.com #BabyNames #ParentingJourney #BabyNaming`;
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-pink-900/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "AI Baby Name Generator - Smart Calculator Hubs",
        description: "Discover the perfect name for your baby with AI-powered suggestions. Get unique names with meanings from diverse cultures.",
        keywords: "AI baby name generator, baby names, name meanings, unique baby names"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-full mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-orange-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-orange-700 dark:text-orange-300", children: "AI-Powered Names" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent", children: "AI Baby Name Generator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "Discover the perfect name for your little one with AI assistance" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "h-6 w-6 text-orange-600" }),
            "Name Preferences"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Tell us your preferences and we'll suggest perfect names" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "gender", children: "Gender" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: gender, onValueChange: setGender, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "gender", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "boy", children: "Boy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "girl", children: "Girl" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "unisex", children: "Unisex / Gender Neutral" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "style", children: "Style" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: style, onValueChange: setStyle, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "style", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "modern", children: "Modern & Trendy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "classic", children: "Classic & Timeless" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "unique", children: "Unique & Rare" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cultural", children: "Cultural & Traditional" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                id: "unique",
                checked: includeUnique,
                onCheckedChange: (checked) => setIncludeUnique(checked)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "unique", className: "cursor-pointer", children: "Include unique spellings" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: handleGenerate,
              disabled: isGenerating,
              className: "w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700",
              size: "lg",
              children: isGenerating ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-2 h-5 w-5 animate-spin" }),
                "Generating Names..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "mr-2 h-5 w-5" }),
                "Generate Name Suggestions"
              ] })
            }
          )
        ] })
      ] }),
      suggestions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Your Name Suggestions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleGenerate, variant: "outline", size: "sm", className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4" }),
            "New Names"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 mb-8", children: suggestions.map((suggestion, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-2 border-orange-200 dark:border-orange-800 hover:shadow-lg transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl text-orange-600", children: suggestion.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-6 w-6 text-pink-500" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: suggestion.origin }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Meaning:" }),
              " ",
              suggestion.meaning
            ] })
          ] })
        ] }, idx)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-2 border-orange-200 dark:border-orange-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Share Your Favorite Names" }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl", children: "The Beautiful Journey of Naming: A Complete Guide" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "prose prose-sm max-w-none dark:prose-invert space-y-6 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🍼 The Power and Poetry of Names" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `A name is perhaps the most enduring gift you'll give your child—more lasting than any toy, more personal than any inheritance, and more formative than you might imagine. Research in psychology shows that names genuinely influence life experiences through what's called the "name-letter effect" (people prefer things associated with their names) and implicit egotism (we gravitate toward careers, places, and partners that share letters with our names). Your child's name will be spoken thousands of times before they turn one, and millions of times throughout their life. It's simultaneously mundane and magnificent!` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `But here's the beautiful truth that should relieve some pressure: there's no objectively "perfect" name. What makes a name perfect is the meaning, intention, and love behind it. Some parents agonize for months, creating spreadsheets and polling friends. Others know instantly when they hear "the one." Both approaches are valid! Your journey to finding the right name is uniquely yours, and our AI is here to spark inspiration, not dictate choices. Think of these suggestions as creative prompts in your naming adventure!` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "📚 The Etymology and History of Names" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Every name carries a story—sometimes ancient, sometimes modern, always meaningful. Names like "Sophia" (wisdom in Greek) and "Emma" (universal in German) connect your child to millennia of linguistic and cultural history. These aren't just labels; they're vessels of meaning that cultures have treasured and transmitted across generations. Understanding a name's etymology adds depth to your choice. When you tell your daughter that "Luna" means moon in Latin and has been used since ancient Roman times to signify beauty and mystery, her name becomes a story she can carry with pride!` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Naming traditions vary beautifully across cultures. Many Asian cultures consider numerology and the number of strokes in written characters. Jewish tradition often names children after deceased relatives to honor their memory. Some African cultures choose names based on circumstances of birth or desired qualities. Latin American countries frequently use multiple names honoring various family members. Understanding these rich traditions—whether you're following your own cultural practices or drawing inspiration from others—adds significance to your naming decision!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Modern naming reflects fascinating social trends. Classic names cycle back into popularity (hello, Eleanor and Theodore!), celebrity culture influences choices (surge in "Arya" after Game of Thrones), and parents increasingly value uniqueness while still wanting their child's name to be pronounceable and spell-able. There's also a beautiful trend toward gender-neutral names like "Riley" and "Avery," reflecting evolving understanding of gender identity. Our AI suggestions span traditional, modern, and timeless options because diversity in naming is part of its beauty!` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🎨 The Psychology of Sound and Style" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Phonaesthetics—the study of how names sound—reveals fascinating patterns in why certain names feel right. Names ending in "a" sounds (Emma, Sophia, Luna) often feel feminine and soft, while names with hard consonants (Jack, Blake) sound strong and masculine. Names with repeated sounds (Lily, Coco) feel playful and memorable. Long, flowing names (Alexandria, Sebastian) sound formal and sophisticated, while short names (Max, Zoe) feel modern and punchy. Pay attention to how a name feels when you say it—your instincts about phonaesthetics are valid!' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Consider the full name rhythm and flow. Three-syllable first names often pair beautifully with one-syllable last names (Oliver Smith, Isabella Chen). One-syllable first names balance multi-syllable last names (Grace Rodriguez, James Patterson). Try saying the full name out loud repeatedly—does it flow smoothly or feel awkward? Does the first name end with the same sound the last name starts with (Anna Anderson) creating potential tongue-twisters? These practical sound considerations matter for a name your child will hear and say constantly!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Cultural and regional pronunciation variations are worth considering if you have family in different areas or languages. A name like "Theo" is pronounced differently in English versus Greek. "Maria" has beautiful variations across Spanish, Italian, and English. If international accessibility matters to you, consider how the name translates and pronounces across the languages in your family's world. Our AI provides origin information to help you understand these nuances!` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "👥 The Sibling Set and Family Harmony" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If you're naming a second (or third, or fourth!) child, sibling name coordination becomes a delightful puzzle. Some parents prefer similar styles (matching themes like nature names: River and Willow, or classic names: Elizabeth and William). Others intentionally vary styles so each child has their own distinct name identity. There's no right answer, but consistency in formality level helps—if one child has a very formal name, an extremely casual name for the sibling might feel mismatched." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Watch for unintentional rhyming or alliteration that might feel cute initially but could become tiresome (Mary and Gary, or Tim and Jim). Also consider initial combinations—you probably don't want siblings whose initials spell unfortunate words! If you have a themed pattern (all names starting with the same letter, all virtue names, all places), embrace it or break it intentionally. The "accidental pattern" where third-child you realizes you've committed to all names starting with "A" without planning it can feel constraining!` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Length harmony matters too. If your first child is "Elizabeth Alexandra" and you name your second child "Max," the formal imbalance might create questions. Similarly, if you give one child an extremely unique name ("Azariah Moonbeam") and another a common name ("Sarah"), they might wonder about the different approaches. These aren't dealbreakers—plenty of families have wonderfully eclectic sibling sets—but they're worth considering in your decision-making!` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🌍 Cultural Appreciation vs. Appropriation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "In our beautifully diverse, interconnected world, parents often fall in love with names from cultures beyond their own heritage. This is generally wonderful—cultural exchange enriches us all! However, thoughtful consideration helps distinguish appreciation from appropriation. Appreciation involves understanding and honoring a name's cultural significance. Appropriation happens when a culturally significant name is used without understanding or respecting its meaning, particularly from marginalized cultures." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Questions to ask: Do you have genuine connection to this culture through family, lived experience, or deep engagement? Does this name have sacred or ceremonial significance in its origin culture that makes use by outsiders inappropriate? Can you pronounce it correctly and teach your child about its cultural context? If you're drawn to a name from another culture, do your research, consult people from that culture if possible, and be prepared to explain and honor the name's origins as your child grows." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Some names have successfully crossed cultural boundaries and become international (Sofia, Alexander, Isabella). Others remain distinctly tied to specific cultural contexts where usage by outsiders might feel uncomfortable. Trust your instincts, do your research, and choose thoughtfully. Our AI provides cultural origin information to help you make informed, respectful choices that honor the rich traditions names carry!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "💼 The Name Resume: Long-term Professional Considerations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Here's an uncomfortable truth: research shows that names influence how we're perceived professionally. Studies have found resume bias where identical resumes with different names receive different callback rates. Names perceived as unusual or difficult to pronounce sometimes face discrimination. This isn't fair or right—we should actively work against such bias—but it's a current reality some parents consider when naming children." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `This doesn't mean you should only choose traditional "resume-friendly" names! It means being aware that more unique or culturally specific names might require your child to navigate occasional mispronunciations or biases, and preparing them with pride in their name's uniqueness and meaning. Many successful people have distinctive names that become their brand. The actress Lupita Nyong'o, for instance, turned her beautiful Kenyan name into an asset, not despite its uniqueness but because of it!` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Consider nicknames and shortened versions that offer your child flexibility. "Alexander" can be Alex in professional settings and Xander with friends. "Anastasia" can adapt to Ana, Annie, or Stasia depending on context. This flexibility allows your child to control how they present themselves in different settings while still having the full beautiful name you chose. Our AI suggestions include names with natural nickname options for this built-in versatility!' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🎭 The Nickname Factor: Planned and Unplanned" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Even if you plan to always use the full name, reality often has other ideas! Children create their own nicknames, friends invent variations, and family members develop pet names. "Elizabeth" might become Liz, Lizzy, Beth, Eliza, or Betsy regardless of your preferences. Some parents embrace this flexibility; others strongly prefer the full name. Understanding your feelings about potential nicknames helps you choose names aligned with your preferences.' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Consider both the obvious nicknames and the less obvious ones. "Richard" obviously shortens to Rick or Rich, but also to Dick (which modern parents often find less appealing!). "Penelope" might become Penny, Poppy, or Nell. "Theodore" could be Theo, Teddy, or just T. If there's a nickname variation you strongly dislike, that might influence whether you choose that full name. Conversely, if you love multiple nickname options, a longer formal name provides built-in variety!` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Some parents choose to use nicknames as the legal name—Max instead of Maximilian, Ellie instead of Eleanor. This is perfectly valid, though it removes the option to "grow into" a more formal version for professional contexts later. There's no wrong choice, just different philosophies about naming flexibility. Our AI provides both traditional long names with nickname potential and standalone names that need no shortening!` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "✨ The Uniqueness Spectrum: Finding Your Sweet Spot" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Names exist on a spectrum from extremely common (the year's #1 name) to absolutely unique (created combinations). Where you fall on this spectrum is personal preference, but understanding the trade-offs helps. Very common names mean your child might share their name with classmates (offering anonymity and ease) but less distinction. Very unique names mean your child will likely be the only one (offering distinctiveness) but possibly facing frequent spelling/pronunciation clarification." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `The "Goldilocks zone" many parents seek is uncommon but not weird—names that people recognize and can spell, but aren't currently trending in the top 10. Names like "Eleanor" or "Felix" hit this sweet spot: classic enough to feel familiar, uncommon enough to feel distinctive. However, predicting popularity is tricky! Names surge unexpectedly due to pop culture, celebrity babies, or viral trends. The name you think is unique might become next year's trendy choice!` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'If uniqueness matters greatly to you, consider less common variations of popular names (Sophia → Sonia, Jackson → Jax), international variations (James → Jaime → Seamus), or creative spellings (though be cautious—"Aydyn" for Aiden creates lifetime spelling corrections). Our AI offers a range from trending popular to timelessly uncommon, letting you explore different positions on the uniqueness spectrum!' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "👨‍👩‍👧‍👦 Honoring Family Legacy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Many families have naming traditions: firstborn sons named after fathers, children named after grandparents, passing down culturally significant names through generations. These traditions create beautiful intergenerational connections—your child carries forward family history in their very identity. The name "Junior" or "III" creates a direct lineage link. Using a beloved grandmother's name keeps her memory alive in daily life.` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "However, family name pressure can also create challenges. What if you don't love the traditional family name? What if partner families have conflicting traditions? What if the family name feels dated or doesn't fit your child's generation? Remember: this is YOUR child, and ultimately you're the one making the naming decision. You can honor family in the middle name, use variations of family names, or create new traditions. The expectation of continuing family naming doesn't override your parental autonomy!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Creative ways to honor family without using names directly: incorporate surname as first name, use initials that spell an honored family member's name, choose names with similar meanings (if honoring "Grace," you might choose "Anna" which also means gracious), or use family birth months to inspire choices. The spirit of honoring family can be achieved through many paths—literal name repetition is just one option!` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🌈 Gender and Names: The Evolving Landscape" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Traditional gender associations with names are beautifully evolving. Historically masculine names are increasingly used for all genders (Ryan, Parker, Jordan). Gender-neutral names are surging in popularity (Riley, Quinn, Sage). Some parents intentionally choose gender-neutral names to allow their child maximum flexibility in gender expression. Others prefer traditionally gendered names that clearly signal gender identity. Both approaches are equally valid—it's about what feels right for your family!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Interestingly, names shift gender associations over time. "Ashley" and "Leslie" were originally masculine names. "Avery" and "Aubrey" have transitioned from primarily masculine to primarily feminine in recent decades. If this matters to you—wanting a name that stays clearly associated with one gender—consider how recently it's gained popularity for other genders. Conversely, if you love the fluidity, enjoy being part of a name's evolution!` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `For families who know their child's biological sex but want to keep options open for their gender identity journey, gender-neutral middle names offer a built-in alternative. "Michael Sage Smith" provides both traditionally masculine and neutral options. This thoughtful approach signals support for your child's self-discovery while still giving them a name at birth. Our AI offers options across the gender spectrum, respecting diverse approaches to this personal decision!` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🎪 The Pop Culture Effect" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Pop culture's influence on names is powerful and sometimes unpredictable! The name "Arya" skyrocketed after Game of Thrones. "Bella" surged with Twilight. "Elsa" exploded (and then declined) with Frozen. While there's nothing wrong with being inspired by beloved characters, consider: will this association date your child's name to a specific era? Will it be obvious they were named after a character? How do you feel about that?` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Some pop culture names transcend their origins and become classics—"Jessica" was popularized by Shakespeare, "Madison" became common after the movie Splash, yet both feel timeless now. Others remain strongly tied to their source. "Khaleesi" (a Game of Thrones title, not even a name!) clearly signals when those children were born and what their parents were watching. If you love a pop culture name, ask: would I still love this name without the association? Is the character aligned with values I want to inspire?' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `On the flip side, pop culture can rescue beautiful forgotten names from obscurity! "Charlotte" wasn't particularly popular until Princess Charlotte. "Atticus" was rare until To Kill a Mockingbird gained cultural prominence. If pop culture introduces you to a genuinely beautiful name you wouldn't have otherwise discovered, that's a lovely source of inspiration. Just be intentional about whether you're choosing the name because you love it intrinsically or only because of the association!` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🔤 The Spelling Conundrum" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Creative spellings ("Jaxxon" for Jackson, "Madyson" for Madison") divide parents into passionate camps. Supporters argue they make common names unique and allow personalization. Critics argue they create lifetime spelling corrections and look "try-hard" on professional documents. Both perspectives have merit! If you're considering alternative spelling, ask: does this spelling have cultural/linguistic legitimacy (like "Kathryn" vs "Catherine"), or is it purely for uniqueness?` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Consider the "Starbucks test"—will your child spend their entire life spelling their name for baristas, teachers, doctors, and colleagues? Some people find this affirming (their unique spelling makes them special); others find it tedious. There's also the autocorrect factor—will every digital system try to "fix" the spelling? Will people assume it's a typo on official documents? These aren't dealbreakers, but they're quality-of-life considerations for your child!` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `If you love a name's sound but want uniqueness, consider maintaining traditional spelling while choosing a less common name entirely. "Eleanor" spelled traditionally is more distinctive than "Aydyn" (alternate spelling of popular Aiden). Our AI focuses on traditional spellings of both common and uncommon names, letting you decide whether creative spelling adds value for your specific situation!` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-3", children: "🎯 Making the Final Decision" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'After all the research, discussions, and consideration, how do you actually decide? Many parents create a shortlist and live with the names for a while—saying them out loud, imagining calling them across a playground, picturing them on a graduation announcement. Some wait until meeting their baby to see which name "fits" their tiny personality. Others commit early and never waver. Trust your process!' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `If you and a partner are naming together, the negotiation requires communication and sometimes compromise. Some couples give each partner "veto power" (both must agree). Others take turns choosing first and middle names. Some create a shortlist together and let one partner make the final call. Whatever your process, remember you're on the same team, both wanting what's best for your child. The name you both love exists—keep communicating until you find it!` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: `Here's permission you might need: it's okay to change your mind! If you name your baby and realize within days or weeks it doesn't feel right, most places allow name changes in the early months. It's also okay to use a different name than appears on the birth certificate—you might legally name them "Elizabeth" but call them "Eliza" exclusively. The birth certificate is a legal document; the name you call your child is a living choice. Give yourself grace in this important but ultimately loving decision!` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 p-4 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/10 dark:to-pink-900/10 rounded-lg border-2 border-orange-200 dark:border-orange-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm italic text-foreground font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "A Final Blessing:" }),
            ` Whatever name you choose will become beloved because it's attached to your beloved child. The "perfect" name isn't perfect because of its sounds or meaning—it's perfect because you chose it with love, intention, and hope for the tiny human who will grow into it. Trust yourself. You're already doing this parenting thing beautifully by caring so deeply about this choice. Your baby is lucky to have such thoughtful parents! 💕👶`
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Choosing the Perfect Name" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Here are some tips for selecting your baby's name:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Say it out loud:" }),
              " Make sure it sounds good with your last name"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Consider nicknames:" }),
              " Think about potential shortened versions"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Check initials:" }),
              " Ensure they don't spell something awkward"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Think long-term:" }),
              " Will the name work for an adult too?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cultural significance:" }),
              " Research the meaning and cultural background"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Family input:" }),
              " Share favorites with loved ones"
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  BabyNameGenerator as default
};
