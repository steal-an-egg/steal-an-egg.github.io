import Link from "next/link";
import { CoreSeoPage, type CoreFaq, type CoreSection } from "@/components/steal-an-egg/CoreSeoPage";
import { buildMetadata } from "@/lib/seo";

const metadataTitle = "Steal An Egg Titan Temple – Location, Eggs & Pet Guide";
const description =
  "Learn where Titan Temple is in Steal An Egg, how to reach it, which reported eggs and pets connect to the area, and what to check before farming.";

export const metadata = buildMetadata({ title: metadataTitle, description, pathname: "/guide/titan-temple/" });

const sections: CoreSection[] = [
  {
    title: "What Is Titan Temple in Steal An Egg?",
    subsections: [
      {
        title: "Titan Temple Quick Facts",
        paragraphs: [
          "Titan Temple is a late biome from the Monster Update, also called Monsters Are Coming. Players want the location, the entrance check, and the results that belong there. It is not a one-pet article or a full patch recap.",
        ],
        table: {
          caption: "Titan Temple quick facts",
          columns: ["Topic", "Supported context", "Not listed as fact"],
          rows: [
            ["Type", "End-route biome from the Monster Update", "A starter zone"],
            ["Access", "End of the current path", "One universal Speed number"],
            ["Protector", "Gorilla King, commonly named", "A hidden puzzle"],
            ["Pool", "Reported monster-themed set", "A full drop table"],
            ["Divine lead", "Nightflame", "A guaranteed Divine Egg object"],
          ],
        },
      },
      {
        title: "Why Players Search for Titan Temple",
        paragraphs: [
          "Most visitors want the location, a Divine result, or a Cosmic result. Others saw Nightflame, Mutant Shark, or Gorilla King and want the area those names belong to. The place can hold high-rarity results without an object labeled Divine Egg or Cosmic Egg.",
        ],
      },
    ],
  },
  {
    title: "Where Is Titan Temple?",
    subsections: [
      {
        title: "Titan Temple Location",
        paragraphs: [
          "Coverage places the biome at the end of the current path, after earlier zones, not beside the starter pen. It is late geography, described as monster-themed and tougher than the zones before it. A landmark list, coordinate, and secret room are not documented.",
        ],
      },
      {
        title: "How to Reach Titan Temple",
        paragraphs: [
          "Continue until the temple is the next place the game lets you enter. Players who can already return from the previous zone are closer than players still learning the first loop. Published Speed figures conflict, so this page does not pick one. Read the live entrance.",
        ],
        links: [{ href: "/progression/speed-treadmill/", label: "Build Speed before a longer return" }],
      },
      {
        title: "What to Do If You Cannot Find It",
        paragraphs: [
          "Check ordinary causes before a hidden switch. You may be short of the path’s end, the entrance may show a movement bar you have not met, or an old thumbnail may not match your build. Walk the main route once without a contested carry and read the gate.",
        ],
        links: [{ href: "/guide/", label: "Practice the basic return first" }],
      },
    ],
  },
  {
    title: "How to Access Titan Temple",
    subsections: [
      {
        title: "Access Requirements",
        paragraphs: [
          "The supported requirement is progress plus enough movement to finish a return. No key, badge, or paid ticket is confirmed as a pass. Guardian pressure is part of the trip, and other players may want the same target.",
        ],
      },
      {
        title: "Update or Event Conditions",
        paragraphs: [
          "The biome arrived with the Monster Update and is treated as content that stayed available. Hungry Monster chest access was described elsewhere as limited-time. Those clocks differ. A chest deadline does not automatically close the temple.",
        ],
        links: [{ href: "/updates/monster-update/", label: "Open the Monster Update overview" }],
      },
      {
        title: "What May Change After Updates",
        paragraphs: [
          "Entrances, pools, and displayed requirements move when the game is patched. The exact value can change after updates. If the area is open but the targets look different, record the new labels.",
        ],
      },
    ],
  },
  {
    title: "Titan Temple Eggs",
    subsections: [
      {
        title: "Verified Eggs in Titan Temple",
        paragraphs: [
          "The supported record is a reported world pool, not a photographed nest list. Names repeated with the Monster Update page are Nightflame, Gorilla King, Mutant Shark, Rhinotaur, Mantaris, Bladehide, Crustacia, and Spideron.",
        ],
        table: {
          caption: "Reported Titan Temple leads already on this wiki",
          columns: ["Name", "Reported class", "How it is treated"],
          rows: [
            ["Nightflame", "Divine", "Temple coverage; payout not captured"],
            ["Gorilla King", "Eternal", "Protector name and pet lead"],
            ["Mutant Shark", "Secret", "Temple coverage; payout not captured"],
            ["Rhinotaur", "Cosmic", "Community-reported lead"],
            ["Mantaris", "Cosmic", "Community-reported lead"],
            ["Bladehide", "Mythic", "Community-reported lead"],
            ["Crustacia", "Named; no separate class row", "Identity lead only"],
            ["Spideron", "Named; no separate class row", "Identity lead only"],
          ],
        },
        links: [{ href: "/eggs/", label: "Browse the egg database" }],
      },
      {
        title: "Divine Eggs in Titan Temple",
        paragraphs: [
          "A divine egg question here usually means a Divine-class result. The Divine name in this coverage is Nightflame. That is a pet lead, not proof the object is labeled Divine Egg, and not proof every hatch can be Divine. Chance, price, and a forced outcome are not listed.",
        ],
        links: [{ href: "/eggs/divine-eggs/", label: "Read Divine result paths" }],
      },
      {
        title: "Cosmic Eggs in Titan Temple",
        paragraphs: [
          "A Cosmic Egg in this biome is not documented. That source belongs to Cosmic coverage and to Unicorn. A titan temple cosmic egg search often mixes that source with results that only use the Cosmic class word. Rhinotaur and Mantaris are those class names in the reported set.",
        ],
        links: [{ href: "/eggs/cosmic-egg/", label: "Open the Cosmic Egg guide" }],
      },
    ],
  },
  {
    title: "Titan Temple Pets",
    subsections: [
      {
        title: "Verified Pets",
        paragraphs: [
          "Use the classes the update table already separates: Nightflame as Divine, Gorilla King as Eternal, Mutant Shark as Secret, Rhinotaur and Mantaris as Cosmic, and Bladehide as Mythic. Crustacia and Spideron are named without a separate payout row. None of these has a verified income on this page.",
        ],
        links: [{ href: "/pets/", label: "Compare pets in the database" }],
      },
      {
        title: "Nightflame and Titan Temple",
        paragraphs: [
          "Nightflame is the Divine pet tied to this area. Questions about its object wording and whether to keep it belong on the pet page. There is no documented NPC hand-in, and the shop Monster Egg is a different row.",
        ],
        links: [{ href: "/pets/nightflame/", label: "Nightflame pet guide" }],
      },
    ],
  },
  {
    title: "Is Titan Temple Worth Farming?",
    subsections: [
      {
        title: "Egg Value",
        paragraphs: [
          "The pool is worth the trip when you can return what you take and you want the reported high-rarity names. It is a poor use of time when every carry fails. Value is a completed hatch, not a thumbnail that says Divine. Secure returns from the furthest biome you already clear, then step forward.",
        ],
      },
      {
        title: "Pet Value",
        paragraphs: [
          "Value depends on the panel and on whether you wanted a collection slot. Nightflame is the Divine lead. Mutant Shark is the Secret lead players often recognize. Either can belong in the index and still be the wrong earner for the next upgrade.",
        ],
        links: [{ href: "/pets/best-pets/", label: "Judge pets by visible income" }],
      },
      {
        title: "When to Spend Time There",
        paragraphs: [
          "Stay when the entrance is readable, the return has margin, and you know which result you will stop for. Leave it for later if you still need income or movement from an earlier biome. Temple targets, Monster Chests, and the shop Monster Egg solve different goals.",
        ],
      },
    ],
  },
  {
    title: "Best Titan Temple Farming Tips",
    subsections: [
      {
        title: "Prepare Your Route",
        paragraphs: [
          "Walk the area once without a contested target. Mark the first turn home and one alternate. Guardian pressure and player steals cause more failed runs than a missing percentage. Leave when the margin is gone. Notes from your own server beat a map copied from another guide.",
        ],
      },
      {
        title: "Improve Your Speed",
        paragraphs: [
          "Movement decides whether the area is farmable. If the gate or the guardian ends the run, train and retest the same path before you add another target. This page will not invent a level requirement. A reliable earner should stay active so the attempts do not stall your upgrades.",
        ],
      },
      {
        title: "Check Current Egg Availability",
        paragraphs: [
          "Read what is spawning and which names are in your index. Pools change. An August list is a lead until this session shows it. A timer or nest rotation is not consistently documented. If you came for a Cosmic Egg, confirm the biome. If you came for a Divine result, confirm the hatch is Nightflame.",
        ],
        links: [{ href: "/eggs/rare-eggs/", label: "Review other rare targets" }],
      },
    ],
  },
];

const faqs: CoreFaq[] = [
  {
    question: "Where is Titan Temple in Steal An Egg?",
    answer:
      "It is the late biome at the end of the current path in Monster Update coverage. Follow the live route. Exact coordinates are not published.",
  },
  {
    question: "How do you unlock Titan Temple?",
    answer:
      "Reach the end of the biome route and meet the movement text on the live entrance. Published Speed numbers conflict, so no single gate is listed.",
  },
  {
    question: "What eggs are in Titan Temple?",
    answer:
      "Reported leads are Nightflame, Gorilla King, Mutant Shark, Rhinotaur, Mantaris, Bladehide, Crustacia, and Spideron. That is a community set, not a complete drop table.",
  },
  {
    question: "Are there Divine Eggs in Titan Temple?",
    answer:
      "Nightflame is the Divine pet in this coverage. That does not prove every object is labeled Divine Egg, and no hatch chance is published.",
  },
  {
    question: "Are there Cosmic Eggs in Titan Temple?",
    answer:
      "A Cosmic Egg object here is not documented. Rhinotaur and Mantaris are Cosmic-class names. The Cosmic Egg source is a different path.",
  },
  {
    question: "Is Nightflame from Titan Temple?",
    answer:
      "Yes. Nightflame is the Divine pet in this coverage. Payout, odds, and the exact object title still come from the live game.",
  },
  {
    question: "Is Titan Temple worth farming?",
    answer:
      "Farm it when you can return its targets and you want that reported pool. If the route fails, improve movement and earlier returns first.",
  },
];

export default function TitanTemplePage() {
  return (
    <CoreSeoPage
      title="Steal An Egg Titan Temple Guide"
      description={description}
      pathname="/guide/titan-temple/"
      crumbs={[{ label: "Guide", href: "/guide/" }, { label: "Titan Temple" }]}
      intro={[
        "Titan Temple is the late biome from the Monster Update. Players looking up steal an egg titan temple usually need the location, the access check, and the results tied to the area. Speed gates, coordinates, and drop rates are not consistent enough to publish.",
      ]}
      leadContent={
        <aside className="rounded-2xl border border-primary/30 bg-card p-6 md:p-8">
          <p className="section-kicker">Titan Temple quick answer</p>
          <p className="mt-2 max-w-3xl text-lg leading-8 text-muted-foreground">
            Follow the path to the end, read the live entrance, and hatch targets you can return. Nightflame is the Divine lead. A Cosmic Egg object in this biome is not documented.
          </p>
          <Link href="/pets/nightflame/" className="seo-link mt-5 inline-flex">
            Read the Nightflame pet guide
          </Link>
        </aside>
      }
      sections={sections}
      faqTitle="Titan Temple FAQ"
      faqs={faqs}
      screenshots={[
        { label: "Titan Temple location", filename: "steal-an-egg-titan-temple-location.webp", description: "Reserved for an entrance capture." },
        { label: "Titan Temple eggs and pets", filename: "steal-an-egg-titan-temple.webp", description: "Reserved for a prompt and hatch." },
      ]}
      related={[
        { href: "/", label: "Steal An Egg Wiki", description: "Home." },
        { href: "/guide/", label: "Guide", description: "Core loop." },
        { href: "/eggs/", label: "Eggs", description: "Database." },
        { href: "/eggs/divine-eggs/", label: "Divine Eggs", description: "Result paths." },
        { href: "/eggs/cosmic-egg/", label: "Cosmic Egg", description: "Separate source." },
        { href: "/pets/", label: "Pets", description: "Roster." },
        { href: "/pets/nightflame/", label: "Nightflame", description: "Divine lead." },
      ]}
      dataStatus={null}
      showVerificationNotice={false}
      showSectionIntros={false}
      showRelatedDescriptions={false}
      screenshotHeading="Gameplay screenshots"
      screenshotDescription="Follow the live labels until original captures are added."
      maxIntroParagraphs={99}
      maxParagraphsPerSubsection={99}
      extraSchema={[
        {
          "@type": "Article",
          headline: "Steal An Egg Titan Temple Guide",
          description,
          mainEntityOfPage: "https://steal-an-egg.github.io/guide/titan-temple/",
          inLanguage: "en",
        },
      ]}
    />
  );
}
