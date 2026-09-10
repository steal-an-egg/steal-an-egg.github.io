import { CoreSeoPage, type CoreFaq, type CoreSection } from "@/components/steal-an-egg/CoreSeoPage";
import { buildMetadata } from "@/lib/seo";

const title = "Rarest Pets in Steal An Egg – Rarity List & How to Get";
const description = "Find the rarest pets in Steal An Egg with a verified rarity list, how to get each pet, source details, progression value, and rare pet FAQs.";

export const metadata = buildMetadata({ title, description, pathname: "/pets/rarest-pets/" });

const sections: CoreSection[] = [
  {
    title: "Rarest Pets in Steal An Egg",
    intro: ["The rarest pets in Steal An Egg are best answered by the highest named rarity confirmed in current coverage, not by an invented #1-to-#10 order. Divine is that highest named tier. This page lists the pets supported as Divine and explains exactly what a source record does and does not prove."],
    subsections: [
      { title: "Verified Rarest Pets", paragraphs: ["Unicorn, Kitsune, and Nightflame are currently documented in the Divine tier. They are among the rarest verified pets because Divine is the top named class. The evidence does not establish a global order, a total roster, or live availability in every server."], table: { caption: "Highest verified rarity pets in Steal An Egg", columns: ["Pet", "Highest verified rarity", "Source context", "What is not claimed", "Last reviewed"], rows: [["Unicorn", "Divine", "Cosmic Egg in existing dated index", "No hatch odds or absolute scarcity rank", "September 10, 2026"], ["Kitsune", "Divine", "Current multi-source index coverage", "Source egg still needs documentation", "September 10, 2026"], ["Nightflame", "Divine", "Titan Temple Monster Update coverage", "No permanent availability or odds claim", "September 10, 2026"]] } },
      { title: "How This Rarity List Is Organized", paragraphs: ["This is a verified rarity list, not a popularity, income, or trade-value leaderboard. A pet appears when existing site records support its Divine label. Recheck a record after an update changes its label or source."], links: [{ href: "/rarities/", label: "Read the Steal An Egg Rarity Guide" }] },
      { title: "What Is Not Yet Verified", paragraphs: ["Exact hatch rates, all event-only pets, hidden odds, a complete rare-pet catalogue, and a strict rarest-pet ranking are not verified here. A high displayed value also does not prove comparative rarity."], links: [{ href: "/pets/", label: "Browse the Steal An Egg Pet List" }] },
    ],
  },
  {
    title: "What Makes a Pet Rare in Steal An Egg?",
    intro: ["Rarity combines the label shown for the pet with the practical difficulty of getting a current source. It should not be confused with an automatic income formula, a claim that a pet was limited forever, or a shortcut to the best progression choice."],
    subsections: [
      { title: "Pet Rarity Tier", paragraphs: ["The current order moves from Common through Divine, with Divine above Eternal and Secret. A Divine label is the strongest verified scarcity signal here, but pets in one tier can still differ in source and visible income."], links: [{ href: "/rarities/", label: "See the full Steal An Egg rarity order" }] },
      { title: "Egg or Source Availability", paragraphs: ["A pet can be hard to obtain because its source is late-game, contested, or changed by an update. Cosmic Egg is documented for Unicorn; Nightflame has Titan Temple coverage. Neither statement guarantees a location, schedule, or drop rate."], links: [{ href: "/eggs/", label: "Explore Steal An Egg Eggs" }] },
      { title: "Limited or Event Availability", paragraphs: ["Event language needs a dated source. A pet mentioned in an update may remain available later or may not. Check the live game before planning a long farming session."], links: [{ href: "/updates/", label: "Check Steal An Egg updates" }] },
    ],
  },
  {
    title: "Steal An Egg Rare Pet List",
    intro: ["The useful rare pet list starts with records that can be explained. For now, it is deliberately short: clear Divine labels are more helpful than a long top-ten table that pretends to know every odds table, event window, or source mechanic."],
    subsections: [
      { title: "Highest Verified Rarity Pets", paragraphs: ["Unicorn is the clearest documented Divine source relationship because the existing Best Pets index records it as a Cosmic Egg result. Kitsune is repeatedly named as Divine in the existing rarity page, and Nightflame is reported as Divine in Monster Update coverage. Each one belongs in the highest verified tier, but not in an unproven numerical order."], links: [{ href: "/pets/best-pets/", label: "Compare Best Pets in Steal An Egg" }] },
      { title: "Other Hard-to-Get Pets", paragraphs: ["Eternal and Secret pets can also be difficult collection targets, especially when their source route is late-game or a player cannot complete it reliably. They are not placed above Divine by this page. Use the category label first, then verify source and current availability before assuming a hard-to-get pet is one of the rarest overall."], links: [{ href: "/eggs/rare-eggs/", label: "Review Steal An Egg Rare Eggs" }] },
    ],
  },
  {
    title: "How to Get the Rarest Pets",
    intro: ["Getting rare pets begins with a source you can identify and a return route you can finish. The hatch is only part of the process; the egg must reach your pen, and each result should be checked in the live interface rather than inferred from a name or colour."],
    subsections: [
      { title: "Target the Correct Egg or Source", paragraphs: ["Follow the documented source link where one exists, such as the Cosmic Egg path for Unicorn. For a pet without a confirmed source on this site, use the live game to identify the current pool before investing in repeated runs. That approach avoids promising an old event route after its availability changes."], links: [{ href: "/eggs/divine-eggs/", label: "Explore documented Divine Egg paths" }] },
      { title: "Prepare Enough Speed", paragraphs: ["Test an ordinary run on the same route before taking a rare target. If movement or player traffic repeatedly ends the return, improve the visible bottleneck and try again. No universal speed number is assigned to a pet here because route difficulty, current updates, and player conditions can differ."], links: [{ href: "/progression/speed-treadmill/", label: "Plan movement with the Speed Guide" }] },
      { title: "Avoid Chasing Unverified Drop Rates", paragraphs: ["A precise percentage can look actionable while giving no clue whether it applies to the current source, server, or game version. Record the pet label and source you can actually observe. If the rate is not shown by a reliable current source, treat each attempt as a collection decision rather than a guaranteed schedule."], links: [{ href: "/guide/", label: "Use the Steal An Egg Guide" }] },
    ],
  },
  {
    title: "Rarest Pets vs Best Pets",
    intro: ["Rarest and best answer different questions. Rarest describes collection scarcity; best compares practical progression value. A player can enjoy collecting a Divine pet while still keeping a more dependable earner active to fund the next upgrade."],
    subsections: [
      { title: "Why the Rarest Pet Is Not Always the Best", paragraphs: ["A rare pet can be hard to source, but an inaccessible route creates no reliable progress. Best Pets uses reported income and source context to discuss practical keepers, while this page keeps its focus on the highest confirmed rarity. Do not replace a useful pet without comparing normal visible values under similar conditions."], links: [{ href: "/pets/best-pets/", label: "Open the Best Pets comparison" }] },
      { title: "Rarity vs Pet Income", paragraphs: ["Higher rarity can correlate with stronger income inside a biome, yet it does not create one global income value. Mutations, size, boosts, and a pet’s source can all matter. Compare your selected-pet display and route reliability before treating a Divine label as an automatic upgrade for every account."], links: [{ href: "/progression/", label: "Plan Steal An Egg progression" }] },
    ],
  },
  {
    title: "Rarest Pets by Source or Content",
    intro: ["Source context makes a rarity record useful. It tells a player where to start checking without inventing a permanent spawn location, a fixed event end date, or a hidden outcome table that the game has not publicly confirmed."],
    subsections: [
      { title: "Rare Pets From High-Rarity Eggs", paragraphs: ["The existing site records link Cosmic Egg to Unicorn, a Divine pet. That makes Cosmic an important source path for this specific rarity search. It does not make every Cosmic hatch Divine, and this page does not publish a chance for that result. Verify the current egg pool before treating the connection as live."], links: [{ href: "/eggs/", label: "Check the Egg database" }] },
      { title: "Update-Specific Pets", paragraphs: ["Nightflame is the Divine pet named in the site’s Titan Temple Monster Update coverage. Updates can introduce new leads, but source status and availability should be checked again after each game change. An update guide documents context; it should not be read as a promise that the same path will remain unchanged."], links: [{ href: "/updates/monster-update/", label: "Read the Monster Update guide" }] },
    ],
  },
  {
    title: "Which Rare Pet Should You Target?",
    intro: ["The right rare pet target depends on what your account can actually complete today. Prioritize a live source you can reach and a return you can repeat, then decide whether collection prestige or the next practical upgrade is the better use of the session."],
    subsections: [
      { title: "Beginners", paragraphs: ["Beginners should establish a safe egg-and-pet loop before treating the highest rarity as their main plan. Use visible income, short routes, and repeatable hatches to build a baseline. That preparation makes later rare-pet attempts more informative and less likely to consume every session without a completed return."], links: [{ href: "/guide/", label: "Start with the Steal An Egg Guide" }] },
      { title: "Mid-Game Players", paragraphs: ["Mid-game players can compare whether another route, a movement improvement, or a higher current source improves their run consistency. Track how often the route ends successfully, not just how impressive the target sounds. A documented rare pet is a good goal when the source and return are both understood."], links: [{ href: "/calculator/", label: "Plan a session with the Calculator" }] },
      { title: "Late-Game Players", paragraphs: ["Late-game players can target Divine paths for collection while checking each live result against their existing lineup. Re-check source details after updates and keep a note of unmodified visible values. That preserves a rare pet’s collection value without overstating its current income or availability."], links: [{ href: "/eggs/divine-eggs/", label: "Read the Divine Eggs guide" }] },
    ],
  },
];

const faqs: CoreFaq[] = [
  { question: "What is the rarest pet in Steal An Egg?", answer: "Divine is the highest named rarity tier currently documented, but the site does not claim a single absolute rarest pet without evidence that orders all available pets." },
  { question: "What are the rarest pets in Steal An Egg?", answer: "Unicorn, Kitsune, and Nightflame are currently documented as Divine, making them among the rarest verified pets." },
  { question: "How do you get rare pets?", answer: "Identify a current source, complete the egg return safely, and verify the hatch in-game. Source details and odds should not be assumed when they are not confirmed." },
  { question: "Is the rarest pet also the best pet?", answer: "Not always. Rarity describes scarcity; best pet depends on visible income, source difficulty, modifiers, and progression needs." },
  { question: "Does rarity always mean more income?", answer: "No. Compare unmodified visible income because same-tier pets, sources, and modifiers can differ." },
  { question: "Are event pets rarer than normal pets?", answer: "An event association alone does not prove rarity or permanent scarcity. Check the label, source, and current availability." },
  { question: "Can the rarest pet change after an update?", answer: "Yes. Updates can add, alter, or remove content, so tier and source records should be rechecked against the live game." },
];

export default function RarestPetsPage() {
  return <CoreSeoPage title="Rarest Pets in Steal An Egg" description={description} pathname="/pets/rarest-pets/" crumbs={[{ label: "Pets", href: "/pets/" }, { label: "Rarest Pets" }]} intro={["Divine is the highest rarity tier. Unicorn, Kitsune, and Nightflame are documented there, among the rarest verified pets. This guide explains source context and why rarest is not best for progression.", "This wiki does not invent an absolute order, odds, or a complete rare-pet roster. Check the current in-game label and source before planning a long farm."]} sections={sections} faqTitle="Steal An Egg Rarest Pets FAQ" faqs={faqs} screenshots={[{ label: "Highest-rarity pet evidence", filename: "steal-an-egg-rarest-pets.webp", description: "Reserved for a readable live Divine rarity label and selected-pet context." }, { label: "Rare pet source evidence", filename: "steal-an-egg-rare-pets.webp", description: "Reserved for an original source-egg and hatch-result capture." }]} related={[{ href: "/", label: "Steal An Egg Wiki", description: "Return to the game resource hub." }, { href: "/pets/", label: "Steal An Egg Pets", description: "Browse the pet database." }, { href: "/pets/best-pets/", label: "Best Pets in Steal An Egg", description: "Compare practical income value." }, { href: "/rarities/", label: "Steal An Egg Rarity Guide", description: "Understand the tier order." }, { href: "/eggs/", label: "Steal An Egg Eggs", description: "Review source-egg mechanics." }, { href: "/guide/", label: "Steal An Egg Guide", description: "Practice a safer return loop." }]} dataStatus={null} showVerificationNotice={false} showSectionIntros={false} showRelatedDescriptions={false} maxIntroParagraphs={1} maxParagraphsPerSubsection={99} />;
}
