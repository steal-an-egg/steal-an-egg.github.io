import Link from "next/link";
import { CoreSeoPage, type CoreFaq, type CoreSection } from "@/components/steal-an-egg/CoreSeoPage";
import { buildMetadata } from "@/lib/seo";

const metadataTitle = "Divine Nightflame in Steal An Egg – How to Get & Guide";
const description =
  "Learn how to get the Divine Nightflame in Steal An Egg, including Titan Temple context, rarity, pet value checks, and common Nightflame questions.";

export const metadata = buildMetadata({ title: metadataTitle, description, pathname: "/pets/nightflame/" });

const sections: CoreSection[] = [
  {
    title: "What Is Nightflame in Steal An Egg?",
    subsections: [
      {
        title: "Nightflame Quick Facts",
        paragraphs: [
          "A search for divine nightflame steal an egg is about this pet, not a full temple tour or a Divine Egg catalog. Monster Update coverage reports it as Divine and places the lead in Titan Temple.",
        ],
        table: {
          caption: "Nightflame quick facts",
          columns: ["Detail", "Current record", "Still open"],
          rows: [
            ["Entity", "The pet Nightflame", "Not a shop overview"],
            ["Rarity", "Divine in update coverage", "No hatch percentage"],
            ["Source context", "Titan Temple coverage", "Live object wording"],
            ["Income", "Not independently captured", "Selected panel"],
            ["Separate offer", "The shop Monster Egg differs", "Do not mix the two"],
          ],
        },
      },
      {
        title: "What “Divine Nightflame” Means",
        paragraphs: [
          "Divine Nightflame means this result in the top named class, above Eternal and Secret. The phrase does not prove a fusion recipe, a multiplier, or that every temple target is labeled Divine Egg. If your copy shows another class, trust the panel in that session over an older row.",
        ],
      },
      {
        title: "Nightflame Pet vs Nightflame Egg",
        paragraphs: [
          "The pet name is Nightflame. “Nightflame Egg” and “divine nightflame egg” are how players ask what to steal. No capture here freezes those strings as the official object title, so they stay source language.",
        ],
      },
    ],
  },
  {
    title: "How to Get Nightflame",
    subsections: [
      {
        title: "Which Egg or Source Gives Nightflame?",
        paragraphs: [
          "The documented context is Titan Temple world coverage, not a hand-in and not the Robux Monster Egg shop pool. Update records list a Divine result on the temple side without a drop rate or a promise that every hatch matches.",
        ],
        links: [{ href: "/eggs/divine-eggs/", label: "Compare other Divine result paths" }],
      },
      {
        title: "Where to Find Nightflame",
        paragraphs: [
          "Look in Titan Temple once that biome is on your route, at the far end of the path in Monster Update coverage. A map pin, nest number, and spawn minute are not confirmed. The find counts only if it reaches your pen.",
        ],
      },
      {
        title: "Does Nightflame Come From Titan Temple?",
        paragraphs: [
          "Yes, as a reported source relationship. This wiki already lists Nightflame as the Divine name in Titan Temple coverage, with Gorilla King commonly named as the protector. That is a location lead, not an odds table.",
        ],
        links: [{ href: "/guide/titan-temple/", label: "Open the Titan Temple guide" }],
      },
    ],
  },
  {
    title: "Nightflame Rarity",
    subsections: [
      {
        title: "How Rare Is Nightflame?",
        paragraphs: [
          "The reported class is Divine, beside Unicorn and Kitsune in the rarest named tier. The update table repeats that label and leaves income blank. No percentage or pity rule is added. Other temple names run from Legendary through Eternal and Secret.",
        ],
        links: [{ href: "/rarities/", label: "See where Divine sits" }],
      },
      {
        title: "Nightflame vs Other Divine Pets",
        paragraphs: [
          "Unicorn’s documented path is the Cosmic Egg, with a standard-income baseline on Best Pets. Kitsune is Divine too, but its source is not consistently documented. Nightflame is the Divine name whose lead is the temple. None of the three is declared best.",
        ],
      },
    ],
  },
  {
    title: "Nightflame Stats and Income",
    subsections: [
      {
        title: "Verified Nightflame Stats",
        paragraphs: [
          "No weight, multiplier, index reward, or combat stat is verified. The update table leaves the income cell open on purpose. After a hatch, the selected panel is the sheet that matters. Note size or a mutation before you trust a screenshot, because those modifiers change the display without changing the name.",
        ],
      },
      {
        title: "Nightflame Pet Income",
        paragraphs: [
          "A single rate is not given. Community figures are not consistent enough to freeze. Check the current in-game value before you rebuild a pen around this result. Compare it with an earner you trust, under matching boosts. A Divine label can still lose to something you can obtain on a normal route.",
        ],
        links: [{ href: "/pets/best-pets/", label: "Use the income comparison framework" }],
      },
      {
        title: "What Can Change After Updates?",
        paragraphs: [
          "Access, the pool, the class word, and the displayed value can change after a patch. The exact value can change after updates even if the name stays. Limited chest access is a different system. Do not assume a chest deadline removes this pet, or that a lasting temple keeps every nearby reward.",
        ],
      },
    ],
  },
  {
    title: "Is Nightflame Worth Getting?",
    subsections: [
      {
        title: "Progression Value",
        paragraphs: [
          "It helps progression when the temple return repeats and the hatched copy improves the upgrade you are saving for. If you cannot leave with the target, it stays a collection goal. Train the failure, usually movement or route choice, before you judge the result.",
        ],
        links: [{ href: "/progression/", label: "Match the result to a progression step" }],
      },
      {
        title: "Pet Income Value",
        paragraphs: [
          "Payout stays provisional until you see it. Do not replace a proven earner for a name you have only read about. Keep the new copy if the panel wins. A Divine temple result can still deserve an index slot when another one pays for movement.",
        ],
      },
      {
        title: "When to Target Nightflame",
        paragraphs: [
          "Target it after nearer returns feel routine and the entrance is something you can clear with margin. It is a late goal, not a starter project. If you need every temple result, the guardian, or the shop Monster Egg, use the location guide and the update page instead of stretching this one.",
        ],
      },
    ],
  },
  {
    title: "Best Tips for Getting Nightflame",
    subsections: [
      {
        title: "Confirm the Correct Egg or Biome",
        paragraphs: [
          "Confirm you are in Titan Temple and that the target belongs to that world pool. A Monster Egg from the shop is a different source. Parasite-marked targets feed the Hungry Monster loop. They are not automatically this pet. Read the prompt before you commit. Changing servers does not remove the return.",
        ],
      },
      {
        title: "Prepare Before Entering the Area",
        paragraphs: [
          "Gorilla King is commonly named as the protector. Plan for that pressure and for other players on the same carry. Published Speed gates conflict, so none is frozen here. Read the live entrance and add margin.",
        ],
        links: [{ href: "/progression/speed-treadmill/", label: "Train Speed before the temple" }],
      },
      {
        title: "Check Current Update Conditions",
        paragraphs: [
          "The temple lead arrived with the Monster Update, and later patches can retune the pool. Before a farm, check the area, the prompt, and the index. Current availability may depend on the active update. If the labels moved, identify the source again instead of repeating an outdated route.",
        ],
        links: [{ href: "/updates/monster-update/", label: "Read the wider Monster Update context" }],
      },
    ],
  },
  {
    title: "Nightflame and Titan Temple",
    subsections: [
      {
        title: "How the Two Are Connected",
        paragraphs: [
          "In this wiki’s records, Nightflame is the Divine name in the temple set, beside Gorilla King, Mutant Shark, Rhinotaur, Mantaris, and Bladehide. The area page covers the approach. This page covers the pet.",
        ],
        links: [{ href: "/guide/titan-temple/", label: "Titan Temple location guide" }],
      },
      {
        title: "What to Check Before Farming",
        paragraphs: [
          "Check the area name, the prompt, your ability to return, and the panel after the hatch. Odds, a secret path, and a guaranteed Divine object are absent because they are not documented. If a guide and the live game disagree, follow the game. Your server shows what can hatch today.",
        ],
      },
    ],
  },
];

const faqs: CoreFaq[] = [
  {
    question: "How do you get Nightflame in Steal An Egg?",
    answer:
      "Steal and hatch a target from the Titan Temple world pool, then confirm the label. No hatch chance or official object title is published here.",
  },
  {
    question: "What egg gives Nightflame?",
    answer:
      "The source context is Titan Temple coverage. “Nightflame Egg” is the player phrase for that source. Confirm the live prompt. No drop rate is listed.",
  },
  {
    question: "Is Nightflame a Divine pet?",
    answer:
      "Yes. Current coverage reports Divine, the highest named tier. That label is not a percentage or a payout.",
  },
  {
    question: "Is Nightflame from Titan Temple?",
    answer:
      "It is reported as the Divine pet in Titan Temple coverage. It is not documented as a shop Monster Egg or a Monster Chest prize.",
  },
  {
    question: "How rare is Nightflame?",
    answer:
      "Divine places it in the top named tier. Exact odds in the temple pool are not consistently documented.",
  },
  {
    question: "How much income does Nightflame make?",
    answer:
      "A standard income is not captured. Check the current in-game value. Size, mutations, boosts, and updates can change one display.",
  },
  {
    question: "Is Nightflame worth getting?",
    answer:
      "It is worth chasing when you can return temple targets and the live panel helps your collection or your income.",
  },
];

export default function NightflamePage() {
  return (
    <CoreSeoPage
      title="Divine Nightflame in Steal An Egg"
      description={description}
      pathname="/pets/nightflame/"
      crumbs={[{ label: "Pets", href: "/pets/" }, { label: "Nightflame" }]}
      intro={[
        "Divine Nightflame in Steal An Egg is the pet behind divine nightflame steal an egg searches. Monster Update coverage reports a Divine result connected with Titan Temple, not a general tier list or a store bundle.",
      ]}
      leadContent={
        <aside className="rounded-2xl border border-primary/30 bg-card p-6 md:p-8">
          <p className="section-kicker">Nightflame quick answer</p>
          <p className="mt-2 max-w-3xl text-lg leading-8 text-muted-foreground">
            Nightflame is a reported Divine pet from Titan Temple coverage. Read the live panels before you rely on a payout, a drop rate, or a Speed gate.
          </p>
          <Link href="/guide/titan-temple/" className="seo-link mt-5 inline-flex">
            See how Titan Temple fits the route
          </Link>
        </aside>
      }
      sections={sections}
      faqTitle="Nightflame FAQ"
      faqs={faqs}
      screenshots={[
        { label: "Nightflame pet panel", filename: "steal-an-egg-nightflame.webp", description: "Reserved for a live panel." },
        { label: "Divine Nightflame source context", filename: "steal-an-egg-divine-nightflame.webp", description: "Reserved for a temple prompt and hatch." },
      ]}
      related={[
        { href: "/", label: "Steal An Egg Wiki", description: "Home." },
        { href: "/pets/", label: "Pets", description: "Roster." },
        { href: "/pets/rarest-pets/", label: "Rarest Pets", description: "Other Divine names." },
        { href: "/rarities/", label: "Rarity Guide", description: "Tier order." },
        { href: "/eggs/divine-eggs/", label: "Divine Eggs", description: "Result paths." },
        { href: "/guide/titan-temple/", label: "Titan Temple Guide", description: "Reported biome." },
      ]}
      dataStatus={null}
      showVerificationNotice={false}
      showSectionIntros={false}
      screenshotHeading="Gameplay screenshots"
      screenshotDescription="Use the live labels until original captures are added."
      showRelatedDescriptions={false}
      maxIntroParagraphs={99}
      maxParagraphsPerSubsection={99}
      extraSchema={[
        {
          "@type": "Article",
          headline: "Divine Nightflame in Steal An Egg",
          description,
          mainEntityOfPage: "https://steal-an-egg.github.io/pets/nightflame/",
          inLanguage: "en",
        },
      ]}
    />
  );
}
