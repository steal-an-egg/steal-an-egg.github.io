import { CoreSeoPage, type CoreFaq, type CoreSection } from "./CoreSeoPage";

type EntityConfig = {
  kind: "pet" | "egg";
  name: string;
  pathname: string;
  faqTitle: string;
  sections: Array<{ title: string; subsections: string[] }>;
  screenshots: Array<{ label: string; filename: string; description: string }>;
  related: Array<{ href: string; label: string; description: string }>;
  faqs: CoreFaq[];
  extraIntro?: string;
};

function petParagraph(name: string, heading: string) {
  const lower = name.toLowerCase();
  const query = `“${lower} steal an egg”`;
  const common = `${name} is a pet players look up for its source, rarity, and practical value in Steal An Egg.`;

  if (heading.includes("Quick Facts")) return `${common} The ${query} guide keeps unconfirmed source, rarity, stats, and income details clearly marked.`;
  if (heading.includes("Fits in Progression")) return `For ${query}, progression value depends on displayed income, acquisition difficulty, and your current pen.`;
  if (heading.includes("for Progression")) return `Progression value depends on displayed income, acquisition difficulty, and your current pen. Compare the live ${name} panel before changing an upgrade plan.`;
  if (heading.startsWith("Which") || heading.startsWith("Target")) return `For ${query}, the exact egg or source is not confirmed yet. Treat route details as provisional until the game clearly identifies the source.`;
  if (heading.includes("Egg or Source") || heading.includes("Correct Egg")) return `The exact egg or source for ${name} is not confirmed yet. Check the live game before treating a route as final.`;
  if (heading.includes("Where") || heading.includes("Route")) return `The exact ${name} location or route is still being confirmed. A repeatable return route is safer than relying on an unconfirmed coordinate.`;
  if (heading.includes("Requirements") || heading.includes("Need Before")) return `No exact Speed, unlock, cost, or prerequisite is confirmed for ${name} yet. Check the live Steal An Egg interface for current requirements.`;
  if (heading.includes("Pet or an Egg")) return `The ${query} search asks whether Koi is a pet or an egg. The current in-game label is needed to settle that distinction.`;
  if (heading.includes("Koi Egg")) return `“Koi Egg” is player wording for Koi's source. It is not assumed to be the official name of a separate egg item.`;
  if (heading.includes("Pet Overview")) return `The ${query} search is about the Dodo pet entity. Its source must remain separate from player egg terminology.`;
  if (heading.includes("Dodo Egg") || heading.includes("Why Players Search")) return `“Dodo Egg” is player wording for the Dodo source question, not proof of a separate official egg entity.`;
  if (heading.startsWith("How Rare")) return `${query} rarity is not confirmed yet. Use the live label rather than judging rarity from appearance or a video title.`;
  if (heading.includes("Rarity") || heading.includes("Rare Is")) return `${name} rarity is not confirmed yet. Use the live label rather than judging rarity from appearance or a video title.`;
  if (heading.includes("Compared")) return `Compare ${name} after its source, rarity, and income are confirmed. Until then, avoid treating it as a fixed tier placement.`;
  if (heading.startsWith("Verified") && heading.includes("Stats")) return `${query} stats and pet income are not confirmed. Any value can change with the live game or pet modifiers.`;
  if (heading.includes("Stats") || heading.includes("Income") || heading.includes("Data")) return `${name} stats and pet income are not confirmed. Any value can change with the live game or pet modifiers.`;
  if (heading.includes("Good") || heading.includes("Replace") || heading.includes("Worth")) return `For ${query}, collection interest is not a progression ranking. Replace a pet only with a confirmed better performer.`;
  if (heading.includes("Speed")) return `For ${query}, build comfortable Speed before harder attempts. Extra margin makes source testing and egg returns safer.`;
  if (heading.includes("Risk") || heading.includes("Balance")) return `For ${query}, balance collection interest against safe resources. A rare-looking target is not automatically the best next goal.`;
  return `${common} When researching how to get ${lower}, use live in-game information for any detail that can change after an update.`;
}

function eggParagraph(name: string, heading: string) {
  const query = `“${name.toLowerCase()} steal an egg”`;
  const common = `${name} can be researched through its source, rarity, hatch result, and practical value without mixing those details together.`;
  if (heading.includes("Quick Facts")) return `${common} The ${query} guide marks source, rarity, and hatch details that are not confirmed yet.`;
  if (heading.includes("Connects")) return `For ${query}, the Monster Update guide reports parasite-marked infected eggs, but that alone does not verify a separately labeled ${name} item.`;
  if (heading === `${name} Source`) return `For ${query}, a direct source and any Monster Chest relationship are not confirmed yet.`;
  if (heading.includes("Source") || heading.includes("Monster Chest")) return `A direct ${name} source and any Monster Chest relationship are not confirmed yet.`;
  if (heading.includes("Requirements")) return `For ${query}, no exact requirement, cost, unlock condition, or route is confirmed yet. Check the live game before committing a difficult run.`;
  if (heading.startsWith("How Rare")) return `${query} rarity is not verified. Egg rarity and a hatched pet's rarity must remain separate.`;
  if (heading.includes("Rarity") || heading.includes("Rare Is")) return `${name} rarity is not verified. Egg rarity and a hatched pet's rarity must remain separate.`;
  if (heading.startsWith("Verified") && heading.includes("Pets")) return `${query} hatch results and odds are not confirmed yet. Treat any result list as provisional until it is visible in game.`;
  if (heading.includes("Hatch") || heading.includes("Pets")) return `${name} hatch results and odds are not confirmed yet. Treat any result list as provisional until it is visible in game.`;
  if (heading === "Progression Value") return `${query} value requires a verified source, repeatability, and hatch result. Avoid unsupported strategies that consume rare attempts.`;
  if (heading.includes("Value") || heading.includes("Worth") || heading.includes("Risk")) return `${name} value requires a verified source, repeatability, and hatch result. Avoid unsupported strategies that consume rare attempts.`;
  if (heading.startsWith("Prepare")) return `For ${query}, use safe, repeatable runs. Avoid relying on exact Speed claims or one-off routes that may not match the current game.`;
  if (heading.includes("Route") || heading.includes("Speed")) return `Use safe, repeatable runs while investigating ${name}. Avoid relying on exact Speed claims or one-off routes that may not match the current game.`;
  if (heading === `${name} vs Monster Pets`) return `Compare ${query} with other Monster Update rewards only after their sources and outcomes are individually verified.`;
  if (heading.includes("Other Monster")) return `Compare ${name} with other Monster Update rewards only after their sources and outcomes are individually verified.`;
  if (heading.includes("Prioritize")) return `For ${query}, prioritize the route that matches confirmed live information and your current progression needs.`;
  return `${common} Check the current in-game interface when a source or result can change after an update.`;
}

function makeSections(config: EntityConfig): CoreSection[] {
  return config.sections.map((section, sectionIndex) => ({
    title: section.title,
    subsections: section.subsections.map((title, subsectionIndex) => ({
      title,
      paragraphs: [config.kind === "pet" ? petParagraph(config.name, title) : eggParagraph(config.name, title)],
      links: sectionIndex < 5 && subsectionIndex === 0 ? [config.related[sectionIndex]] : undefined,
    })),
  }));
}

export function EntitySeoPage({ config }: { config: EntityConfig }) {
  const isPet = config.kind === "pet";
  return (
    <CoreSeoPage
      title={`Steal An Egg ${config.name}`}
      description={`A verification-first Steal An Egg ${config.name} guide covering the source, rarity, stats or hatch details, progression value, and the evidence still needed from the live game.`}
      intro={[
        isPet
          ? `For players searching “${config.name.toLowerCase()} steal an egg,” this guide focuses on the exact pet question: source, rarity, pet income, and progression value.`
          : `For players searching “${config.name.toLowerCase()} steal an egg,” this guide focuses on the egg itself: source, rarity, hatch results, and value.`,
        `Exact rates, values, coordinates, requirements, and odds for ${config.name} are not confirmed yet. Check the current game for details that may change after an update.`,
        ...(config.extraIntro ? [config.extraIntro] : []),
      ]}
      pathname={config.pathname}
      crumbs={[{ label: isPet ? "Pets" : "Eggs", href: isPet ? "/pets/" : "/eggs/" }, { label: config.name }]}
      sections={makeSections(config)}
      faqTitle={config.faqTitle}
      faqs={config.faqs}
      screenshots={config.screenshots}
      related={config.related}
      maxIntroParagraphs={99}
      maxParagraphsPerSubsection={99}
      dataStatus={null}
      showVerificationNotice={false}
      screenshotHeading="Gameplay screenshots"
      screenshotDescription="When available, these images will show the item, source, or game interface discussed on this page."
    />
  );
}

export const iceDragonConfig: EntityConfig = {
  kind: "pet", name: "Ice Dragon", pathname: "/pets/ice-dragon/", faqTitle: "Steal An Egg Ice Dragon FAQ",
  sections: [
    { title: "What Is the Ice Dragon in Steal An Egg?", subsections: ["Ice Dragon Quick Facts", "Where the Ice Dragon Fits in Progression"] },
    { title: "How to Get the Ice Dragon", subsections: ["Which Egg or Source Gives the Ice Dragon?", "Where to Find the Ice Dragon Source", "Requirements Before You Try to Get It"] },
    { title: "Ice Dragon Rarity", subsections: ["How Rare Is the Ice Dragon?", "Ice Dragon Compared With Other High-Rarity Pets"] },
    { title: "Ice Dragon Stats and Income", subsections: ["Verified Ice Dragon Stats", "Ice Dragon Pet Income", "What Data Is Still Unverified?"] },
    { title: "Is the Ice Dragon Good?", subsections: ["Ice Dragon for Progression", "Ice Dragon for Pet Income", "When You Should Replace the Ice Dragon"] },
    { title: "Best Tips for Getting the Ice Dragon", subsections: ["Prepare the Right Egg Route", "Improve Your Speed Before Harder Runs", "Avoid Risking Better Pets for a Low-Value Attempt"] },
    { title: "Ice Dragon vs Other Pets", subsections: ["Ice Dragon vs Other Rare Pets", "Rarity vs Actual Progression Value"] },
  ],
  faqs: [
    { question: "How do you get the Ice Dragon in Steal An Egg?", answer: "The exact Ice Dragon source is not confirmed yet. Check the current game before following an older route." },
    { question: "What egg gives the Ice Dragon?", answer: "The egg that gives Ice Dragon is not confirmed yet." },
    { question: "How rare is the Ice Dragon?", answer: "Ice Dragon rarity is not confirmed yet. Use the live label when it becomes available." },
    { question: "How much income does the Ice Dragon make?", answer: "Ice Dragon pet income is not confirmed yet and may change with pet modifiers or updates." },
    { question: "Is the Ice Dragon one of the best pets?", answer: "A fair ranking needs a confirmed source, income value, and comparison under matching conditions." },
    { question: "Is the Ice Dragon worth getting?", answer: "It may be a collection target, but a progression recommendation should wait for verified acquisition and income information." },
  ],
  screenshots: [
    { label: "Ice Dragon gameplay capture", filename: "steal-an-egg-ice-dragon.webp", description: "Original capture of Ice Dragon in the live game." },
    { label: "Ice Dragon pet panel", filename: "steal-an-egg-ice-dragon-pet.webp", description: "Selected-pet panel with verified values." },
  ],
  related: [
    { href: "/", label: "Steal An Egg Wiki", description: "Return to the main wiki." }, { href: "/pets/", label: "Steal An Egg Pet List", description: "Browse the broader pet database." }, { href: "/rarities/", label: "Steal An Egg Rarity Guide", description: "Understand rarity labels." }, { href: "/pets/best-pets/", label: "Best Pets in Steal An Egg", description: "Use the verification-first ranking framework." }, { href: "/progression/", label: "Steal An Egg Progression Guide", description: "Plan your next upgrade." },
  ],
};

export const koiConfig: EntityConfig = {
  kind: "pet", name: "Koi", pathname: "/pets/koi/", faqTitle: "Steal An Egg Koi FAQ",
  extraIntro: "Koi can be a useful collection goal once its source and displayed income are confirmed in the current game. Until then, avoid treating a community estimate as a fixed value.",
  sections: [
    { title: "What Is the Koi in Steal An Egg?", subsections: ["Koi Quick Facts", "Is Koi a Pet or an Egg?"] },
    { title: "How to Get Koi in Steal An Egg", subsections: ["Which Egg Gives Koi?", "Where to Get the Koi Egg or Source", "What You Need Before Trying to Get Koi"] },
    { title: "Steal An Egg Koi Egg", subsections: ["What Players Mean by \"Koi Egg\"", "Koi Egg Source and Availability", "Koi Egg vs Other Egg Targets"] },
    { title: "Koi Rarity", subsections: ["How Rare Is Koi?", "Koi Compared With Other Pets"] },
    { title: "Koi Stats and Pet Income", subsections: ["Verified Koi Stats", "Koi Income", "Unverified Data and Update Notes"] },
    { title: "Is Koi Good in Steal An Egg?", subsections: ["Koi for Beginners", "Koi for Progression", "When to Replace Koi"] },
    { title: "Best Tips for Getting Koi", subsections: ["Choose the Right Egg Route", "Prepare Enough Speed", "Balance Risk and Progression Value"] },
  ],
  faqs: [
    { question: "How do you get Koi in Steal An Egg?", answer: "The Koi source is not confirmed yet. Check the current game before following an older route." },
    { question: "What egg gives Koi?", answer: "The egg that gives Koi is not confirmed yet." },
    { question: "Where is the Koi Egg?", answer: "“Koi Egg” is player wording for Koi's source. Its official item label and location are not confirmed yet." },
    { question: "How rare is Koi?", answer: "Koi rarity is not verified yet." },
    { question: "How much income does Koi make?", answer: "Koi income is not verified yet and will not be estimated." },
    { question: "Is Koi worth getting?", answer: "Its collection and progression value need confirmed source and income information first." },
  ],
  screenshots: [
    { label: "Koi gameplay capture", filename: "steal-an-egg-koi.webp", description: "Original capture of Koi in the live game." },
    { label: "Koi source evidence", filename: "steal-an-egg-koi-egg.webp", description: "Verified Koi source and hatch evidence." },
  ],
  related: [
    { href: "/", label: "Steal An Egg Wiki", description: "Return to the main wiki." }, { href: "/eggs/", label: "Steal An Egg Egg List", description: "Explore source eggs." }, { href: "/pets/", label: "Steal An Egg Pet List", description: "Browse the pet database." }, { href: "/rarities/", label: "Steal An Egg Rarity Guide", description: "Understand rarity labels." }, { href: "/pets/best-pets/", label: "Best Pets in Steal An Egg", description: "Compare verified value." },
  ],
};

export const dodoConfig: EntityConfig = {
  kind: "pet", name: "Dodo", pathname: "/pets/dodo/", faqTitle: "Steal An Egg Dodo FAQ",
  extraIntro: "Dodo Egg is common player wording for the Dodo source question. Until the current game confirms an official egg label, keep the pet and its possible source as separate details.",
  sections: [
    { title: "What Is the Dodo in Steal An Egg?", subsections: ["Dodo Quick Facts", "Dodo Pet Overview"] },
    { title: "How to Get Dodo in Steal An Egg", subsections: ["Which Egg or Source Gives Dodo?", "Where to Find the Dodo Source", "Requirements to Get Dodo"] },
    { title: "What Is the Dodo Egg in Steal An Egg?", subsections: ["Why Players Search for \"Dodo Egg\"", "Dodo Egg Source vs Dodo Pet", "What Is Actually Verified?"] },
    { title: "Dodo Rarity", subsections: ["How Rare Is the Dodo?", "Dodo Compared With Other Pets"] },
    { title: "Dodo Stats and Pet Income", subsections: ["Verified Dodo Stats", "Dodo Income", "What Data Still Needs Verification"] },
    { title: "Is Dodo Good in Steal An Egg?", subsections: ["Dodo for Early Progression", "Dodo for Pet Income", "When to Replace Dodo"] },
    { title: "Best Tips for Getting Dodo", subsections: ["Target the Correct Egg or Source", "Plan Your Egg Route", "Compare Risk and Reward"] },
  ],
  faqs: [
    { question: "How do you get Dodo in Steal An Egg?", answer: "The Dodo source is not confirmed yet. Check the current game before following an older route." },
    { question: "What egg gives Dodo?", answer: "No egg source is verified yet for Dodo." },
    { question: "What is the Dodo Egg?", answer: "It is player search wording for Dodo's source question, not proof of an official separate egg name." },
    { question: "How rare is the Dodo?", answer: "Dodo rarity is to be verified in game." },
    { question: "How much income does Dodo make?", answer: "Dodo income is not verified and no value is inferred." },
    { question: "Is Dodo a good pet?", answer: "A fair ranking needs verified source, rarity, and income data." },
  ],
  screenshots: [
    { label: "Dodo gameplay capture", filename: "steal-an-egg-dodo.webp", description: "Original capture of Dodo in the live game." },
    { label: "Dodo source evidence", filename: "steal-an-egg-dodo-egg.webp", description: "Verified Dodo source and hatch evidence." },
  ],
  related: [
    { href: "/", label: "Steal An Egg Wiki", description: "Return to the main wiki." }, { href: "/eggs/", label: "Steal An Egg Eggs", description: "Explore source eggs." }, { href: "/pets/", label: "Steal An Egg Pet List", description: "Browse the pet database." }, { href: "/pets/best-pets/", label: "Best Pets in Steal An Egg", description: "Compare verified value." }, { href: "/guide/", label: "Steal An Egg Beginner Guide", description: "Learn the return loop." },
  ],
};

export const parasiteEggConfig: EntityConfig = {
  kind: "egg", name: "Parasite Egg", pathname: "/eggs/parasite-egg/", faqTitle: "Steal An Egg Parasite Egg FAQ",
  extraIntro: "The Monster Update includes parasite-marked infected eggs, but the current relationship between that mechanic, Monster Chests, and a specifically named Parasite Egg is not fully confirmed. Keep those possibilities separate until the live game identifies them clearly.",
  sections: [
    { title: "What Is the Parasite Egg in Steal An Egg?", subsections: ["Parasite Egg Quick Facts", "How the Parasite Egg Connects to the Monster Update"] },
    { title: "How to Get the Parasite Egg", subsections: ["Parasite Egg Source", "Monster Chest and Parasite Egg", "Requirements to Get the Parasite Egg"] },
    { title: "Parasite Egg Rarity", subsections: ["How Rare Is the Parasite Egg?", "Parasite Egg vs Other Rare Eggs"] },
    { title: "What Does the Parasite Egg Hatch?", subsections: ["Verified Parasite Egg Pets", "Hatch Results and Rarity", "What Hatch Data Is Still Unverified?"] },
    { title: "Is the Parasite Egg Worth Getting?", subsections: ["Progression Value", "Pet Value", "Risk vs Reward"] },
    { title: "Best Ways to Get the Parasite Egg", subsections: ["Prepare Before Entering Monster Content", "Plan Your Route", "Use Enough Speed for Safer Runs", "Avoid Wasting Attempts on Unverified Strategies"] },
    { title: "Parasite Egg vs Other Monster Update Rewards", subsections: ["Parasite Egg vs Monster Pets", "When to Prioritize the Parasite Egg"] },
  ],
  faqs: [
    { question: "How do you get the Parasite Egg in Steal An Egg?", answer: "A direct Parasite Egg method is not confirmed yet." },
    { question: "Where does the Parasite Egg come from?", answer: "Its exact source is not confirmed in the current game." },
    { question: "Is the Parasite Egg from a Monster Chest?", answer: "The Monster Chest relationship is not confirmed yet." },
    { question: "How rare is the Parasite Egg?", answer: "Parasite Egg rarity is not verified yet." },
    { question: "What does the Parasite Egg hatch?", answer: "No Parasite Egg hatch result or odds are confirmed yet." },
    { question: "Is the Parasite Egg worth getting?", answer: "Value depends on verified source, cost, and hatch outcomes, which are pending." },
    { question: "Is the Parasite Egg limited-time?", answer: "Availability and any end date have not been independently verified." },
  ],
  screenshots: [
    { label: "Parasite Egg gameplay capture", filename: "steal-an-egg-parasite-egg.webp", description: "Original Parasite Egg item capture." },
    { label: "Monster Update evidence", filename: "steal-an-egg-parasite-egg-monster-update.webp", description: "Verified relationship to Monster Update content." },
  ],
  related: [
    { href: "/", label: "Steal An Egg Wiki", description: "Return to the main wiki." }, { href: "/eggs/", label: "Steal An Egg Egg List", description: "Browse the egg database." }, { href: "/eggs/rare-eggs/", label: "Steal An Egg Rare Eggs", description: "Compare rare targets." }, { href: "/eggs/best-eggs/", label: "Best Eggs in Steal An Egg", description: "Compare verified risk and value." }, { href: "/updates/monster-update/", label: "Steal An Egg Monster Update", description: "Read the complete update context." },
  ],
};
