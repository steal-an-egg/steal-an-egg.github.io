import { CoreSeoPage, type CoreSection } from "@/components/steal-an-egg/CoreSeoPage";
import { contentDates } from "@/lib/content-dates";
import { buildMetadata } from "@/lib/seo";

const title = "Steal An Egg Updates – New Eggs, Pets, Events & Latest Changes";
const description = "Track the latest Steal An Egg updates on Roblox, including new eggs, pets, events, gameplay changes, progression updates and everything newly added to the game.";

export const metadata = buildMetadata({ title, description, pathname: "/updates/" });

const sections: CoreSection[] = [
  {
    title: "Latest Steal An Egg Update",
    intro: [
      `Last Updated: ${contentDates.updatesLastChecked}. This date records the wiki review, not an unverified game release date.`,
      "No specific release has been verified from the available material. The newest confirmed change will appear here first with its source, observed date and affected guide links.",
    ],
    subsections: [],
  },
  {
    title: "What's New in Steal An Egg?",
    intro: ["This snapshot separates major content categories so future Steal An Egg updates can be checked without turning rumors into patch notes."],
    subsections: [
      { title: "New Eggs", paragraphs: ["No new eggs are verified in the current review. A future entry will name an egg only after its addition is visible in game or supported by a reliable first-party source."] },
      { title: "New Pets", paragraphs: ["No new pets are verified yet. Confirmed additions will link to the pet database, where income, rarity and hatch source can be reviewed independently."] },
      { title: "Gameplay Changes", paragraphs: ["No specific gameplay changes are documented for this initial update log. Later notes will distinguish an observable mechanical change from a wiki wording correction."] },
      { title: "Progression Changes", paragraphs: ["No progression changes are verified. Costs, effects and upgrade requirements will remain unchanged on the wiki until a current in-game check demonstrates a difference."] },
    ],
  },
  {
    title: "New Eggs and Rare Egg Changes",
    subsections: [
      { title: "Newly Added Eggs", paragraphs: ["Newly added eggs will be recorded with original evidence and the date observed. The full egg page remains the source for structured location, price and hatch information."], links: [{ href: "/eggs/", label: "Open the Steal An Egg egg database" }] },
      { title: "Rare and Secret Egg Changes", paragraphs: ["A rarity change needs direct evidence; a community label alone is not enough. Confirmed rare or secret egg changes will link to the dedicated guide for context."] , links: [{ href: "/eggs/rare-eggs/", label: "Check rare egg verification" }] },
      { title: "Spawn Changes", paragraphs: ["A spawn change should be reproduced across multiple checks before it becomes guidance. Record location, timing, server conditions and screenshots instead of inferring a rule from one absence."] },
    ],
  },
  {
    title: "New Pets and Pet Changes",
    subsections: [
      { title: "Newly Added Pets", paragraphs: ["No newly added pets are confirmed. Future Steal An Egg updates will preserve the evidence while the pet guide handles complete verified details."] , links: [{ href: "/pets/", label: "Browse verified Steal An Egg pets" }] },
      { title: "Pet Income Changes", paragraphs: ["Income changes require before-and-after values from comparable conditions. We will not describe a buff or nerf from memory, a rumor or a number copied without context."] },
      { title: "Mutation and Size Changes", paragraphs: ["Mutation and size behavior must be observed directly in the live game. Future notes will state exactly what changed and avoid assuming that visual differences alter income."] },
    ],
  },
  {
    title: "Speed, Treadmill and Progression Updates",
    subsections: [
      { title: "Speed Changes", paragraphs: ["Any Speed change needs a controlled route or displayed-value comparison. The focused Speed guide will hold detailed training data after the latest change is confirmed."] , links: [{ href: "/progression/speed-treadmill/", label: "Open the Speed & Treadmill guide" }] },
      { title: "Treadmill Changes", paragraphs: ["No treadmill change is verified. Future entries should include the interface, cost, requirement and observed effect rather than an unsupported multiplier."] },
      { title: "Progression and Upgrade Changes", paragraphs: ["Progression changes may affect pets, money, base improvements and trails. The main guide will explain the impact of confirmed Steal An Egg updates."], links: [{ href: "/progression/", label: "Review overall progression" }, { href: "/guide/", label: "Use the beginner guide" }] },
    ],
  },
  {
    title: "Steal An Egg Events and Limited Content",
    intro: ["Event coverage remains empty until limited content is genuinely present. A countdown or reward will never be invented to make this Steal An Egg updates page appear busier."],
    subsections: [
      { title: "Current Events", paragraphs: ["There is no verified current event to list. A future event entry will include the official or observed name, evidence, dates when confirmed and the exact activities available."] },
      { title: "Limited-Time Eggs and Pets", paragraphs: ["No limited-time eggs or pets are verified. If an event introduces them, each item will also be linked to the appropriate database for lasting reference."] },
      { title: "Event Rewards", paragraphs: ["No event rewards are documented. Reward names, amounts and requirements need direct confirmation so players are not asked to pursue an item that does not exist."] },
    ],
  },
  {
    title: "Steal An Egg Update History",
    intro: ["The reverse-chronological Steal An Egg updates history starts with an honest empty state. It will not generate fictional patch notes."],
    subsections: [],
    table: { caption: "Steal An Egg verified update history", columns: ["Date", "Update Name", "New Eggs", "New Pets", "Gameplay Changes", "Notes"], rows: [["Not verified yet", "No confirmed update entry", "None documented", "None documented", "None documented", "Awaiting reliable source material"]] },
  },
  {
    title: "How We Verify Steal An Egg Updates",
    intro: [
      "We use in-game checks, original screenshots, visible Roblox changes and repeatable observations. Unconfirmed reports may guide a check but are not published as facts.",
      "After verification, each entry links to affected guides and data tables, keeping this hub concise while evergreen pages retain deeper coverage.",
    ],
    subsections: [],
  },
];

export default function UpdatesPage() {
  return (
    <CoreSeoPage
      title="Steal An Egg Updates"
      description={description}
      pathname="/updates/"
      crumbs={[{ label: "Updates" }]}
      intro={[
        "Steal An Egg updates can add eggs, pets, events or gameplay changes that affect several guides at once. This freshness hub keeps the newest verified information in one place.",
        `Last Updated: ${contentDates.updatesLastChecked}. No release, event or patch detail is treated as confirmed without direct game evidence or a reliable first-party source.`,
      ]}
      sections={sections}
      faqTitle="Steal An Egg Updates FAQ"
      faqs={[
        { question: "What is the latest Steal An Egg update?", answer: "No specific Steal An Egg updates entry is verified. The top section will change as soon as reliable evidence is documented." },
        { question: "Were new eggs added to Steal An Egg?", answer: "No new eggs are confirmed in the current review. Check the egg database after a verified update is added here." },
        { question: "Were new pets added?", answer: "No new pets are verified at this time. Confirmed pets will be recorded here and linked to the detailed pet guide." },
        { question: "How often does Steal An Egg update?", answer: "There is no verified fixed update schedule. The wiki checks credible announcements and observable game changes instead of predicting a release cadence." },
        { question: "Where can I check the latest Steal An Egg changes?", answer: "Use this page for the verified summary, then follow its links to the egg, pet, progression and codes pages for details affected by each change." },
      ]}
      screenshots={[
        { label: "Latest Update Screenshot", filename: "steal-an-egg-latest-update.webp", description: "Evidence for the newest confirmed change." },
        { label: "New Egg Screenshot", filename: "steal-an-egg-new-egg.webp", description: "Original evidence for a new egg." },
        { label: "New Pet Screenshot", filename: "steal-an-egg-new-pet.webp", description: "Original evidence for a new pet." },
        { label: "Event Screenshot", filename: "steal-an-egg-event.webp", description: "Original evidence for an active event." },
      ]}
      related={[
        { href: "/", label: "Steal An Egg Wiki", description: "Return to the homepage." },
        { href: "/eggs/", label: "Eggs", description: "See complete egg coverage." },
        { href: "/eggs/rare-eggs/", label: "Rare Eggs", description: "Check rare content." },
        { href: "/pets/", label: "Pets", description: "Review pet data." },
        { href: "/guide/", label: "Beginner Guide", description: "Learn the core loop." },
        { href: "/progression/", label: "Progression", description: "Review upgrades." },
        { href: "/progression/speed-treadmill/", label: "Speed & Treadmill", description: "Check movement changes." },
        { href: "/codes/", label: "Codes", description: "See current code status." },
      ]}
      maxParagraphsPerSubsection={1}
      maxIntroParagraphs={2}
      showRelatedDescriptions={false}
    />
  );
}
