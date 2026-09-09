import { CoreSeoPage, type CoreFaq, type CoreSection } from "@/components/steal-an-egg/CoreSeoPage";
import { buildMetadata } from "@/lib/seo";

const title = "Steal An Egg Rarity Guide – Secret, Eternal, Divine & More";
const description =
  "Explore Steal An Egg rarities in order, including egg and pet rarity tiers, Secret, Eternal and Divine levels, how rarity works and what each tier means.";

export const metadata = buildMetadata({
  title,
  description,
  pathname: "/rarities/",
});

const sections: CoreSection[] = [
  {
    title: "Steal An Egg Rarities in Order",
    intro: [
      "The current Steal An Egg rarity order used across major pet indexes runs from Common up through Divine. This page explains that rarity system for both eggs and pets without turning the ladder into fake hatch percentages.",
      "Order below reflects the ladder repeated by Eurogamer, Eldorado, GameBoost, and related biome indexes reviewed through late August 2026. Individual pet examples can move after patches, but the tier names themselves are stable in current coverage.",
    ],
    subsections: [
      {
        title: "How to read the rarity order table",
        paragraphs: [
          "Order is the progression from lowest to highest named tier in current Steal An Egg indexes. Eggs / Pets notes whether the label is commonly applied to hatch results, world eggs, or both. What It Means stays practical: classification first, income second.",
          "Verified status describes confidence in the tier’s existence as a named class, not confidence in any invented multiplier. This rarity guide does not publish fake drop rates.",
        ],
        links: [
          { href: "/eggs/", label: "Steal An Egg Egg List" },
          { href: "/pets/", label: "Steal An Egg Pet List" },
        ],
      },
      {
        title: "Why order still needs live checks",
        paragraphs: [
          "A Steal An Egg rarity label is only as good as the text shown on the live egg or pet panel. If an update renames a tier or inserts a new class, re-check the interface before trusting an older screenshot.",
          "Community indexes agree on the ten-tier ladder below. Exact income bands vary by biome, so do not treat order alone as a cross-map power ranking.",
        ],
      },
    ],
    table: {
      caption: "Steal An Egg rarities in order",
      columns: ["Rarity", "Order", "Eggs / Pets", "What It Means", "Verified"],
      rows: [
        ["Common", "1 (lowest)", "Pets / early results", "Starter classification", "Multi-source index label"],
        ["Uncommon", "2", "Pets", "Early step above Common", "Multi-source index label"],
        ["Rare", "3", "Pets / egg language overlap", "Mid-early collection tier", "Multi-source index label"],
        ["Epic", "4", "Pets", "Mid progression tier", "Multi-source index label"],
        ["Legendary", "5", "Pets", "Strong mid/late biome results", "Multi-source index label"],
        ["Mythic", "6", "Pets", "High mid-late tier", "Multi-source index label"],
        ["Cosmic", "7", "Pets", "Late biome high tier before Secret", "Multi-source index label"],
        ["Secret", "8", "Pets / rare egg chase language", "Top-end scarce class below Eternal", "Multi-source index label"],
        ["Eternal", "9", "Pets", "Near-top scarcity class", "Multi-source index label"],
        ["Divine", "10 (highest named)", "Pets", "Current top named rarity class", "Multi-source index label"],
      ],
    },
  },
  {
    title: "How Rarity Works in Steal An Egg",
    intro: [
      "Steal An Egg rarity is a classification system attached to hatch results and collection indexes. It helps players sort the roster, but it is not a complete substitute for income, source difficulty, or mutation state.",
    ],
    subsections: [
      {
        title: "Egg Rarity",
        paragraphs: [
          "Egg rarity questions usually mean either the rarity of the pet an egg can produce or a special egg label such as Secret in community language. Always separate the egg object from the hatched pet when reading a Steal An Egg rarity claim.",
          "Some eggs are chased because they can yield Secret, Eternal, or Divine pets. That does not automatically prove the egg UI itself prints the same word. Capture both screens when documenting egg rarity.",
        ],
        links: [{ href: "/eggs/rare-eggs/", label: "Steal An Egg Rare Eggs" }],
      },
      {
        title: "Pet Rarity",
        paragraphs: [
          "Pet rarity is the cleaner field in most indexes: the selected pet or index row shows Common through Divine. Use that label when answering steal an egg rarity queries about a specific companion.",
          "Pet rarity and pet income are correlated inside many biomes, but they are still separate columns. A Secret pet from one zone can out-earn or under-earn a Secret pet from another zone.",
        ],
        links: [{ href: "/pets/", label: "Steal An Egg Pet List" }],
      },
      {
        title: "Does Higher Rarity Always Mean Better?",
        paragraphs: [
          "No. Higher Steal An Egg rarity usually signals scarcer collection value, but the best progression choice depends on verified income, how often you can secure the source egg, and whether your Speed can finish the return.",
          "Beginners often progress faster with a reliable lower-tier earner than with repeated failed attempts at Divine targets. Rankings belong on Best Pets once income evidence is dated.",
        ],
        links: [{ href: "/pets/best-pets/", label: "Best Pets in Steal An Egg" }],
      },
    ],
  },
  {
    title: "Common Rarity Tiers",
    intro: [
      "The lower and middle Steal An Egg rarity tiers are Common, Uncommon, Rare, Epic, Legendary, Mythic, and Cosmic. These are the everyday ladder steps before Secret, Eternal, and Divine chase language takes over.",
    ],
    subsections: [
      {
        title: "Early tiers: Common to Epic",
        paragraphs: [
          "Common, Uncommon, Rare, and Epic cover early and mid biome results. They teach the core loop: steal, return, hatch, earn, upgrade Speed, then contest harder eggs.",
          "These tiers matter because they fund the movement required for later rarity targets. Ignoring them usually stalls Titan Temple or Cherry Blossom attempts.",
        ],
      },
      {
        title: "Mid-late tiers: Legendary to Cosmic",
        paragraphs: [
          "Legendary, Mythic, and Cosmic appear heavily in later biomes and create the income jump that makes Secret farming realistic. Cosmic sits just below Secret on the current rarity order.",
          "When comparing two Cosmic pets, trust dated income and source difficulty over the shared rarity word alone. Same-tier gaps can still be huge across biomes.",
        ],
        links: [{ href: "/eggs/best-eggs/", label: "Best Eggs in Steal An Egg" }],
      },
    ],
  },
  {
    title: "Secret Rarity in Steal An Egg",
    intro: [
      "Secret rarity is one of the highest-intent Steal An Egg rarity searches. It marks scarce pets just below Eternal and often overlaps with rare-egg chase routes.",
    ],
    subsections: [
      {
        title: "What Does Secret Rarity Mean?",
        paragraphs: [
          "Secret means the pet or result is classified in the Secret tier on the current ladder, above Cosmic and below Eternal. It is a named class, not proof of a hidden puzzle by itself.",
          "Players often say Secret Egg when they mean an egg that can hatch a Secret pet. Keep that wording distinction clear so rarity pages do not blur into unsupported spawn myths.",
        ],
      },
      {
        title: "Secret Eggs and Pets",
        paragraphs: [
          "Examples repeatedly indexed as Secret include pets such as Stag from Cherry Blossom coverage and several Cosmic or Prehistoric secrets in older biome lists. Mutant Shark is also widely listed as Secret in Monster Update Titan Temple coverage.",
          "For spawn evidence and contested routes, continue to the Rare Eggs page. This rarity guide only defines the class; it does not duplicate every Secret entity page.",
        ],
        links: [{ href: "/eggs/rare-eggs/", label: "Steal An Egg Rare Eggs" }],
      },
    ],
  },
  {
    title: "Eternal Rarity in Steal An Egg",
    intro: [
      "Eternal rarity sits above Secret and below Divine on the current Steal An Egg rarity order. It is a near-top collection and income class in community indexes.",
    ],
    subsections: [
      {
        title: "What Is Eternal Rarity?",
        paragraphs: [
          "Eternal is the ninth step on the ten-tier ladder used by current pet indexes. It signals extreme scarcity relative to Cosmic and Secret while still sitting under Divine.",
          "Eternal should not be confused with a permanent event tag. Here it is a rarity tier name, not a calendar status.",
        ],
      },
      {
        title: "Verified Eternal Eggs or Pets",
        paragraphs: [
          "Community indexes repeatedly list Eternal pets such as Mosasaurus, Eternal Lunar Dragon, Ice Dragon, Lava Dragon, Phoenix, El Maja, Oni Tiger, and Gorilla King depending on biome and update coverage.",
          "This page does not invent a complete Eternal egg catalog. Use Best Pets and biome indexes for dated income rows, and treat any missing egg-to-pet chain as pending until screenshotted.",
        ],
        links: [{ href: "/pets/best-pets/", label: "Best Pets in Steal An Egg" }],
      },
    ],
  },
  {
    title: "Divine Rarity in Steal An Egg",
    intro: [
      "Divine rarity is the highest named Steal An Egg rarity tier in current indexes. It anchors endgame collection searches and top-income comparisons.",
    ],
    subsections: [
      {
        title: "What Is Divine Rarity?",
        paragraphs: [
          "Divine is order 10 on the ladder above Eternal. When players ask for the rarest rarity in Steal An Egg, Divine is the current top named answer in mainstream indexes.",
          "Divine still does not automatically win every practical decision. Source difficulty and live income remain decisive.",
        ],
      },
      {
        title: "Verified Divine Eggs or Pets",
        paragraphs: [
          "Unicorn and Kitsune are the Divine pets most consistently named across late-August indexes, with Nightflame also reported as Divine in Titan Temple Monster Update lists.",
          "Exact Divine hatch odds and every Divine egg spawn rule remain unverified on this wiki. Do not trust a random percentage pasted without UI evidence.",
        ],
      },
    ],
  },
  {
    title: "Rarity vs Income and Progression",
    intro: [
      "Steal An Egg rarity helps organize the collection, but progression value comes from income, Speed access, and how often you can repeat a successful steal.",
    ],
    subsections: [
      {
        title: "Does Rarity Determine Pet Income?",
        paragraphs: [
          "Rarity correlates with income inside many biomes, especially from Cosmic upward, but it does not set one global income number for every pet sharing a label. Always compare the selected-pet panel.",
          "Mutation, size, and temporary boosts can also change earnings without changing the rarity word. Keep those modifiers out of the rarity column.",
        ],
      },
      {
        title: "Rarity vs Actual Progression Value",
        paragraphs: [
          "A mid-tier pet you can hatch repeatedly may buy more Speed upgrades than a Divine attempt you fail every night. Progression value is about the next unlocked route, not the rarest badge in the index.",
          "Use the progression hub when deciding whether to cash income into treadmill training, trails, or base upgrades after a rarity upgrade.",
        ],
        links: [{ href: "/progression/", label: "Steal An Egg Progression Guide" }],
      },
      {
        title: "Why the Rarest Pet Is Not Always the Best",
        paragraphs: [
          "The rarest pet can be best for collection prestige and still be wrong for your current economy. Best Pets exists specifically to rank practical keepers using dated income and source difficulty.",
          "If two pets share Eternal or Divine rarity, compare income and acquisition risk before replacing your earner.",
        ],
        links: [{ href: "/pets/best-pets/", label: "Best Pets in Steal An Egg" }],
      },
    ],
  },
  {
    title: "How to Get Higher-Rarity Eggs and Pets",
    intro: [
      "Higher Steal An Egg rarity results come from harder biomes, contested eggs, and update-limited pools—not from renaming a Common hatch after the fact.",
    ],
    subsections: [
      {
        title: "Target Better Eggs",
        paragraphs: [
          "Push into the hardest biome you can clear consistently and learn which eggs feed Secret, Eternal, or Divine outcomes there. Best Eggs and Rare Eggs help separate priority targets from vanity chases.",
        ],
        links: [
          { href: "/eggs/best-eggs/", label: "Best Eggs in Steal An Egg" },
          { href: "/eggs/rare-eggs/", label: "Steal An Egg Rare Eggs" },
        ],
      },
      {
        title: "Prepare More Speed",
        paragraphs: [
          "Speed is the real gate for higher rarity farms. If guardians or other players stop your return, train before blaming hatch luck. Trails and treadmill upgrades are part of rarity progression even though they are not rarity tiers themselves.",
        ],
      },
      {
        title: "Watch Limited-Time Content",
        paragraphs: [
          "Update pools such as Monster Update content can introduce new Secret, Eternal, or Divine leads. Check the Updates hub when a patch lands so you do not farm an outdated route while a better rarity source is live.",
        ],
        links: [{ href: "/updates/", label: "Steal An Egg Updates" }],
      },
    ],
  },
];

const faqs: CoreFaq[] = [
  {
    question: "What are the rarities in Steal An Egg?",
    answer:
      "Current indexes list ten Steal An Egg rarities: Common, Uncommon, Rare, Epic, Legendary, Mythic, Cosmic, Secret, Eternal, and Divine.",
  },
  {
    question: "What is the rarity order in Steal An Egg?",
    answer:
      "The commonly published Steal An Egg rarity order is Common → Uncommon → Rare → Epic → Legendary → Mythic → Cosmic → Secret → Eternal → Divine.",
  },
  {
    question: "What is the rarest rarity in Steal An Egg?",
    answer:
      "Divine is the highest named rarity tier in current Steal An Egg pet indexes, above Eternal and Secret.",
  },
  {
    question: "What is Secret rarity?",
    answer:
      "Secret is a top-end Steal An Egg rarity class above Cosmic and below Eternal. It often overlaps with rare-egg chase targets, but the word itself is a classification label.",
  },
  {
    question: "What is Eternal rarity?",
    answer:
      "Eternal is the near-top rarity tier above Secret and below Divine. Many late-game income pets in community indexes use the Eternal label.",
  },
  {
    question: "What is Divine rarity?",
    answer:
      "Divine is the top named Steal An Egg rarity tier. Pets such as Unicorn and Kitsune are repeatedly indexed as Divine in late-August coverage.",
  },
  {
    question: "Does higher rarity mean more pet income?",
    answer:
      "Higher rarity often correlates with higher income inside a biome, but it does not guarantee the best earnings across the whole game. Compare verified income, source difficulty, and modifiers before replacing a pet.",
  },
];

export default function RaritiesPage() {
  return (
    <CoreSeoPage
      title="Steal An Egg Rarity Guide"
      description={description}
      intro={[
        "This Steal An Egg rarity guide explains the full rarity system and rarity order used in current pet indexes, from Common through Secret, Eternal, and Divine, including how egg rarity and pet rarity differ.",
        "The page is an evergreen classification hub. It does not invent hatch percentages, multipliers, or fake tier lists. Income ranking stays on Best Pets, while rare spawn evidence stays on Rare Eggs.",
      ]}
      pathname="/rarities/"
      crumbs={[{ label: "Rarities" }]}
      sections={sections}
      faqTitle="Steal An Egg Rarity FAQ"
      faqs={faqs}
      screenshots={[
        { label: "Rarity system overview", filename: "steal-an-egg-rarities.webp", description: "Reserved for an original capture showing multiple rarity labels in the live UI." },
        { label: "Rarity order evidence", filename: "steal-an-egg-rarity-order.webp", description: "Reserved for index or selected-pet captures that document tier names in order." },
      ]}
      related={[
        { href: "/", label: "Steal An Egg Wiki", description: "Return to the independent Roblox game hub." },
        { href: "/eggs/", label: "Steal An Egg Egg List", description: "Browse the full egg database." },
        { href: "/eggs/rare-eggs/", label: "Steal An Egg Rare Eggs", description: "Track rare and secret egg evidence." },
        { href: "/eggs/best-eggs/", label: "Best Eggs in Steal An Egg", description: "Prioritize eggs for progression." },
        { href: "/pets/", label: "Steal An Egg Pet List", description: "Open the pet database." },
        { href: "/pets/best-pets/", label: "Best Pets in Steal An Egg", description: "Rank pets by practical value." },
        { href: "/progression/", label: "Steal An Egg Progression Guide", description: "Turn income into Speed and upgrades." },
      ]}
      maxIntroParagraphs={99}
      maxParagraphsPerSubsection={99}
    />
  );
}
