import { CoreSeoPage, type CoreFaq, type CoreSection } from "@/components/steal-an-egg/CoreSeoPage";
import { buildMetadata } from "@/lib/seo";

const title = "Steal An Egg Stag Egg – Secret Stag, Location & How to Get";
const description =
  "Learn about the Stag Egg in Steal An Egg, including the Secret Stag, how to get it, where it appears, rarity, hatch details and verified gameplay information.";

export const metadata = buildMetadata({
  title,
  description,
  pathname: "/eggs/stag-egg/",
});

const sections: CoreSection[] = [
  {
    title: "What Is the Stag Egg in Steal An Egg?",
    intro: [
      "The Stag Egg in Steal An Egg is the Cherry Blossom chase target associated with hatching the Secret Stag pet. Players searching stag egg steal an egg usually want the biome source, Secret rarity context, and whether the run is worth the Speed risk.",
      "This entity page stays focused on Stag. Broader egg lists, rare-egg mechanics, and full rarity theory live on their own URLs so search intent does not blur.",
    ],
    subsections: [
      {
        title: "Quick facts before you run",
        paragraphs: [
          "Current multi-source pet indexes place Stag as a Secret Cherry Blossom result with a commonly reported base income around $145M/s. That income figure is community-reported index data, not a local selected-pet capture by this wiki.",
          "Cherry Blossom Speed guidance conflicts between roughly 2.5B and about 3.5B across guides, so read the live guardian pressure in your session before treating any single number as law.",
        ],
        links: [
          { href: "/eggs/", label: "Steal An Egg Eggs" },
          { href: "/rarities/", label: "Steal An Egg Rarities" },
        ],
      },
      {
        title: "What this page will not invent",
        paragraphs: [
          "Exact Stag Egg spawn coordinates, hatch percentages, and pity rules are not published here without UI evidence. If a rival page shows a precise rate with no screenshot trail, treat it as unverified.",
        ],
      },
    ],
    table: {
      caption: "Steal An Egg Stag Egg quick facts",
      columns: ["Field", "Current reading", "Evidence status", "Last Verified"],
      rows: [
        ["Egg", "Cherry Blossom egg associated with Stag", "Multi-source biome/pet indexes", "Aug 30, 2026"],
        ["Rarity", "Secret (hatched Stag)", "Multi-source pet indexes", "Aug 30, 2026"],
        ["Location / Source", "Cherry Blossom biome egg pool", "Multi-source guide agreement", "Aug 30, 2026"],
        ["Hatch Result", "Stag", "Eurogamer / Eldorado / related indexes", "Aug 30, 2026"],
        ["Reported income", "About $145M/s", "Community index report; local UI pending", "Aug 30, 2026"],
        ["Availability", "Part of Cherry Blossom content", "Observed as standard biome content, not a separate deleted event", "Aug 30, 2026"],
      ],
    },
  },
  {
    title: "How to Get the Stag Egg",
    intro: [
      "Getting the Stag Egg means reaching Cherry Blossom, stealing a valid egg from that biome pool, surviving the return, and hatching until Stag appears. There is no verified alternate NPC hand-in that skips the biome.",
    ],
    subsections: [
      {
        title: "Where the Stag Egg Appears",
        paragraphs: [
          "Stag is indexed as a Cherry Blossom pet, so the practical location answer is the Cherry Blossom biome egg pool beyond Cosmic. Guides do not agree on one permanent nest coordinate exclusively labeled Stag Egg.",
          "Look for Cherry Blossom eggs you can actually return. A contested egg that never reaches your pen cannot hatch Stag no matter how rare it looked on the ground.",
        ],
      },
      {
        title: "Requirements to Reach the Stag Egg",
        paragraphs: [
          "The hard requirement is enough Speed to enter Cherry Blossom and escape the Kitsune guardian pressure while other players may contest the same carry. Published recommendations disagree between about 2.5B and 3.5B Speed.",
          "Because those figures conflict, this page does not freeze one fabricated gate. Train until your live returns succeed with margin, then farm the biome for the Stag Egg result.",
        ],
        links: [{ href: "/progression/speed-treadmill/", label: "Steal An Egg Speed Guide" }],
      },
      {
        title: "How to Steal the Stag Egg Safely",
        paragraphs: [
          "Plan the outbound route, the grab, and the return before you touch the egg. Cherry Blossom runs fail from guardian catches and player steals as often as from bad hatch luck.",
          "If night resets or other players crowd the biome, leave when your Speed margin is gone. A failed Stag Egg attempt still costs time you could spend preparing a cleaner run.",
        ],
      },
    ],
  },
  {
    title: "Secret Stag Egg in Steal An Egg",
    intro: [
      "Secret Stag Egg is the search phrasing players use for the Cherry Blossom egg path that yields the Secret-rarity Stag. The important confirmed piece is the Secret Stag pet classification, not a separately trademarked item name in every UI.",
    ],
    subsections: [
      {
        title: "Is the Stag Egg a Secret Egg?",
        paragraphs: [
          "Stag is Secret rarity in current pet indexes, so the egg that produces Stag is commonly called a Secret Stag Egg in player language. That is accurate as chase shorthand.",
          "Whether every Cherry Blossom egg UI literally prints Secret before hatch is a different question. Record the live label when you document a find so egg rarity and pet rarity stay distinct.",
        ],
        links: [{ href: "/eggs/rare-eggs/", label: "Steal An Egg Rare Eggs" }],
      },
      {
        title: "What Makes the Secret Stag Egg Different?",
        paragraphs: [
          "Compared with ordinary Cherry Blossom results such as Crane or mid-tier biome pets, Secret Stag sits much higher on the rarity ladder and is chased for scarce collection value plus strong reported income.",
          "It is still a Cherry Blossom biome target, not a Monster Update Titan Temple entity. Keep Stag Egg pages and Monster Update pages separate when sharing routes.",
        ],
      },
    ],
  },
  {
    title: "Stag Egg Rarity",
    intro: [
      "Stag Egg rarity discussions should start with the hatched Stag label: Secret. That places it above Cosmic and below Eternal on the current Steal An Egg rarity order.",
    ],
    subsections: [
      {
        title: "How Rare Is the Stag Egg?",
        paragraphs: [
          "Secret already means top-end scarcity relative to most biome pets. Exact Stag Egg hatch odds are not independently verified here, so this page will not invent a percentage.",
          "Rarity class and spawn frequency are related but not identical. A Secret result can be rare even when Cherry Blossom eggs themselves spawn continuously.",
        ],
        links: [{ href: "/rarities/", label: "Steal An Egg Rarities" }],
      },
      {
        title: "Stag Egg vs Other Rare Eggs",
        paragraphs: [
          "Against other rare targets, Stag is a Cherry Blossom Secret specialist rather than a Cosmic Divine chase or a Titan Temple Mutant Shark hunt. Compare biome access first.",
          "Use Rare Eggs for cross-entity spawn evidence and Best Eggs when deciding whether Stag is the right current priority for your Speed.",
        ],
        links: [
          { href: "/eggs/rare-eggs/", label: "Steal An Egg Rare Eggs" },
          { href: "/eggs/best-eggs/", label: "Best Eggs in Steal An Egg" },
        ],
      },
    ],
  },
  {
    title: "What Does the Stag Egg Hatch?",
    intro: [
      "The Stag Egg hatches into Stag. That Secret pet is the reason the entity page exists.",
    ],
    subsections: [
      {
        title: "Verified Stag Egg Pet",
        paragraphs: [
          "Eurogamer, Eldorado, and related Cherry Blossom indexes list Stag as the Secret hatch from that biome’s pet set. Multiple independent lists agreeing on name, biome, and Secret rarity is strong identity evidence.",
          "Local screenshot verification of the selected-pet panel is still reserved so income and index rewards can be dated against the live build.",
        ],
      },
      {
        title: "Pet Income and Stats",
        paragraphs: [
          "Community indexes commonly report Stag at about $145M/s base income, with index reward figures also circulating in the same tables. Those numbers are marked community-reported until this wiki captures matching UI.",
          "Do not compare a mutated or resized Stag against a standard index row without noting the modifiers. Secret rarity stays the same even when income changes.",
        ],
        links: [{ href: "/pets/best-pets/", label: "Best Pets in Steal An Egg" }],
      },
    ],
  },
  {
    title: "Is the Stag Egg Worth Getting?",
    intro: [
      "The Stag Egg is worth getting when you can clear Cherry Blossom repeatedly and need a Secret-tier earner or collection slot. It is less worth forcing if your Speed still fails basic returns.",
    ],
    subsections: [
      {
        title: "Progression Value",
        paragraphs: [
          "A reported $145M/s Secret pet can fund later upgrades quickly if the figure matches your live panel. Progression value rises once Stag is a repeatable outcome rather than a one-time miracle hatch.",
          "If an Eternal or Divine pet already outperforms your Stag under equal conditions, keep Stag for collection and let the stronger earner pay for Speed.",
        ],
      },
      {
        title: "Risk vs Reward",
        paragraphs: [
          "Cherry Blossom risk is high because guardian Speed and player traffic are both punishing. Losing a nearly secured Stag Egg on the return is the common failure mode.",
          "Reduce risk with surplus Speed, cleaner timing, and fewer contested servers when possible. Reward only counts after the egg sits in your pen.",
        ],
      },
      {
        title: "When You Should Go for the Stag Egg",
        paragraphs: [
          "Go for Stag when Cherry Blossom is already farmable, your pen needs a Secret upgrade, and you are not abandoning a stronger stable income pet just for the name.",
          "Wait if you still struggle in Cosmic or earlier biomes. Unlocking stable movement first usually makes the Stag Egg easier than grinding failed temple-adjacent detours.",
        ],
      },
    ],
  },
  {
    title: "Best Tips for Getting the Stag Egg",
    intro: [
      "The best Stag Egg tips are preparation tips: Speed margin, return planning, and honest biome readiness. Hatch luck cannot fix a route you cannot finish.",
    ],
    subsections: [
      {
        title: "Prepare Enough Speed",
        paragraphs: [
          "Train past the minimum Cherry Blossom comfort zone before dedicating a session to Secret Stag Egg hunting. Extra Speed is insurance against guardian pathing and late player ambushes.",
        ],
        links: [{ href: "/progression/speed-treadmill/", label: "Steal An Egg Speed Guide" }],
      },
      {
        title: "Plan Your Return Route",
        paragraphs: [
          "Know the path home before the grab. Corner cuts, safe-zone entries, and crowded choke points decide more Stag Egg outcomes than egg color debates.",
          "If the server is chaotic, leave and requeue rather than forcing a low-percentage return with your best Cherry Blossom find.",
        ],
      },
      {
        title: "Watch Spawn Timing",
        paragraphs: [
          "Cherry Blossom eggs still follow the game’s broader egg-reset and contest patterns. If you track personal spawn observations, the Spawn Predictor can help organize your own timers without claiming an official Stag-only schedule.",
          "There is no verified exclusive Stag Egg global countdown published by the creator on this wiki. Use personal observation tools carefully and keep claims local to what you measured.",
        ],
        links: [{ href: "/eggs/spawn-predictor/", label: "Steal An Egg Spawn Predictor" }],
      },
    ],
  },
];

const faqs: CoreFaq[] = [
  {
    question: "What is the Stag Egg in Steal An Egg?",
    answer:
      "The Stag Egg is the Cherry Blossom egg path associated with hatching Stag, a Secret-rarity pet repeatedly listed in current Steal An Egg biome indexes.",
  },
  {
    question: "Where is the Stag Egg?",
    answer:
      "Stag comes from the Cherry Blossom biome egg pool. Guides do not agree on one exclusive permanent nest coordinate solely labeled Stag, so treat Cherry Blossom itself as the location answer.",
  },
  {
    question: "How do you get the Stag Egg?",
    answer:
      "Reach Cherry Blossom with enough Speed to escape, steal a biome egg, return it to your pen, and hatch until Stag appears. Exact hatch odds are unverified.",
  },
  {
    question: "Is the Stag Egg a Secret Egg?",
    answer:
      "Stag is Secret rarity, so players commonly call its source a Secret Stag Egg. Confirm whether your live egg UI also prints Secret before hatch when documenting evidence.",
  },
  {
    question: "How rare is the Stag Egg?",
    answer:
      "Secret places Stag near the top of the Steal An Egg rarity ladder below Eternal and Divine. No trustworthy exact percentage is published on this page.",
  },
  {
    question: "What does the Stag Egg hatch?",
    answer:
      "It hatches into Stag. Community indexes commonly report about $145M/s base income for that Secret pet; confirm the live selected-pet panel before relying on the number.",
  },
  {
    question: "Is the Stag Egg worth getting?",
    answer:
      "Yes when Cherry Blossom is already farmable and you want a Secret-tier collection or income upgrade. It is less worth forcing if your Speed still cannot finish returns.",
  },
];

export default function StagEggPage() {
  return (
    <CoreSeoPage
      title="Steal An Egg Stag Egg"
      description={description}
      intro={[
        "This Steal An Egg Stag Egg guide explains the Secret Stag chase: what the egg is, where Cherry Blossom fits, how to get it, rarity context, hatch expectations, and when the run is worth your Speed.",
        "Identity evidence for Stag as a Secret Cherry Blossom pet is strong across late-August indexes. Exact spawn coordinates, hatch odds, and local income screenshots remain clearly marked when not independently verified.",
      ]}
      pathname="/eggs/stag-egg/"
      crumbs={[{ label: "Eggs", href: "/eggs/" }, { label: "Stag Egg" }]}
      sections={sections}
      faqTitle="Steal An Egg Stag Egg FAQ"
      faqs={faqs}
      screenshots={[
        { label: "Stag Egg overview", filename: "steal-an-egg-stag-egg.webp", description: "Reserved for an original Cherry Blossom egg capture tied to the Stag result." },
        { label: "Secret Stag evidence", filename: "steal-an-egg-secret-stag.webp", description: "Reserved for the selected Secret Stag pet panel and rarity label." },
      ]}
      related={[
        { href: "/", label: "Steal An Egg Wiki", description: "Return to the independent Roblox game hub." },
        { href: "/eggs/", label: "Steal An Egg Eggs", description: "Open the full egg database." },
        { href: "/eggs/rare-eggs/", label: "Steal An Egg Rare Eggs", description: "Compare other rare and secret targets." },
        { href: "/eggs/best-eggs/", label: "Best Eggs in Steal An Egg", description: "Decide whether Stag is the right priority." },
        { href: "/rarities/", label: "Steal An Egg Rarities", description: "See where Secret sits in the rarity order." },
        { href: "/eggs/spawn-predictor/", label: "Steal An Egg Spawn Predictor", description: "Organize personal spawn timing observations." },
      ]}
      maxIntroParagraphs={99}
      maxParagraphsPerSubsection={99}
    />
  );
}
