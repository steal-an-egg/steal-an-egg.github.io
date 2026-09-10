import { CoreSeoPage, type CoreFaq, type CoreSection } from "@/components/steal-an-egg/CoreSeoPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Steal An Egg Pets – Pet List, Income, Rarities & Best Pets",
  description: "Explore Steal An Egg pets on Roblox with verified pet lists, rarities, income, mutations, sizes and the best pets to hatch, keep and use for progression.",
  pathname: "/pets/",
});

const sections: CoreSection[] = [
  {
    title: "Steal An Egg Pet List",
    intro: ["The pet list is the central database for confirmed hatch results, rarity labels, income values and collection mechanics. Every field stays separate so a rare pet is not automatically described as the highest-income or best pet without supporting data."],
    subsections: [
      {
        title: "How to Read the Pet List",
        paragraphs: [
          "Read each future row from source to result. The egg column identifies where the pet came from, rarity records the label shown by the game, and income records the exact value visible in the interface. Size, mutation and notes remain separate because they may answer different collection questions.",
          "The Steal An Egg pet list is built for comparison, not rumor. “Not verified yet” means the field still needs a readable capture or repeatable observation in the Roblox experience by and Collect Rare Pets, Place ID 107778070777162.",
        ],
        links: [
          { href: "/pets/ice-dragon/", label: "Ice Dragon pet guide" },
          { href: "/pets/koi/", label: "Koi pet guide" },
        ],
      },
      {
        title: "Verified Pet Data",
        paragraphs: [
          "No specific pet name, income rate, rarity, mutation chance or size effect is ready for publication yet. The placeholder table preserves the database structure while keeping unsupported numbers out of search results.",
          "Useful evidence shows the pet, its source egg when known, the relevant interface value and enough context to identify the correct game. Once verified, entries can be dated and rechecked after updates without changing this URL.",
        ],
        table: {
          caption: "Verified Steal An Egg pet list",
          columns: ["Pet", "Rarity", "Egg", "Income", "Size", "Mutation", "Notes", "Last Verified"],
          rows: [["Not verified yet", "To be verified in game", "To be verified in game", "To be verified in game", "To be verified in game", "To be verified in game", "Evidence required", "Pending"]],
        },
      },
    ],
  },
  {
    title: "How Pets Work in Steal An Egg",
    intro: ["Pets connect hatching to the game economy. They are the outcome of a successful egg run and the source of income used for later upgrades, making the pet system the bridge between collection and progression."],
    subsections: [
      {
        title: "How to Hatch Pets",
        paragraphs: [
          "A pet begins with an egg returned to the player’s pen. Follow the visible hatching prompts and record both the source egg and the result. Exact timers, interaction steps and outcome chances are not published until they can be verified in game.",
          "The egg database covers acquisition and general hatching mechanics in more detail. This page starts at the resulting pet and focuses on how that result supports income, collection choices and later upgrades.",
        ],
        links: [{ href: "/eggs/", label: "Review eggs and hatching mechanics" }],
      },
      {
        title: "How Pets Earn Money",
        paragraphs: [
          "Pets contribute to the income side of Steal An Egg, but exact earnings must come from the interface or repeatable testing. Future rows will state the displayed unit and context so players can compare values without confusing a total balance with one pet’s contribution.",
          "Income matters because it funds the next useful upgrade. A clear database should show when a value was checked and whether an update may have changed it, rather than treating every old screenshot as permanently current.",
        ],
      },
      {
        title: "Why Better Pets Matter for Progression",
        paragraphs: [
          "A stronger verified income source can shorten the time needed for movement, pen or other upgrades. That makes better pets valuable when their improvement changes the next decision, not simply because their rarity label is higher.",
          "Use the progression hub to understand where earnings can be reinvested. This pet page keeps its attention on the collection and income evidence that informs that choice.",
        ],
        links: [{ href: "/progression/", label: "Plan upgrades with the progression hub" }],
      },
    ],
  },
  {
    title: "Steal An Egg Pet Rarities",
    intro: ["Pet rarity is a classification field. It may help organize the collection, but it should not be used as a substitute for verified income, hatch source or practical usefulness."],
    subsections: [
      {
        title: "How Pet Rarity Works",
        paragraphs: [
          "The final pet rarity values will use the wording shown by Steal An Egg. Color, visual complexity and how often one player hatches a pet are not enough to assign a tier without a readable label or repeated evidence.",
          "Rarity and pet income remain separate columns. This prevents a high-tier classification from becoming an unsupported claim that the same pet always makes the most money.",
        ],
        links: [{ href: "/pets/rarest-pets/", label: "See the rarest pets in Steal An Egg" }],
      },
      {
        title: "Rare and High-Tier Pets",
        paragraphs: [
          "Rare pets deserve entries that connect them to a verified source egg and clear interface evidence. If acquisition depends on a rare or secret egg, the deeper spawn and location details belong on the dedicated rare egg page.",
          "No high-tier pet list is verified yet. Future comparisons will show the evidence behind each classification and leave unknown hatch chances blank instead of estimating them from a small sample.",
        ],
        links: [{ href: "/eggs/rare-eggs/", label: "Explore rare and secret egg evidence" }],
      },
    ],
  },
  {
    title: "Best Pets in Steal An Egg",
    intro: ["The best pets depend on the player’s goal. One comparison may focus on verified income, another on collection rarity, and a beginner may value an accessible improvement more than an unconfirmed top-tier result."],
    subsections: [
      {
        title: "Best Pets for Income",
        paragraphs: [
          "An income ranking requires consistent values taken from the same game version and context. The Steal An Egg Wiki will not name a highest-income pet until individual earnings can be separated and checked reliably.",
          "When data is available, sort by verified income while keeping acquisition notes visible. A pet that earns more may still require an egg or route beyond a beginner’s current ability.",
        ],
      },
      {
        title: "Best Pets for Progression",
        paragraphs: [
          "The best progression pet is the one whose verified contribution helps solve the player’s next limitation. Reliable income can support upgrades, but the value of that improvement depends on current costs and priorities.",
          "Future recommendations will explain the decision instead of presenting one universal answer. Until the required values are confirmed, use repeatable egg runs and visible upgrade effects as the safer guide.",
        ],
      },
      {
        title: "Which Pets Should You Keep?",
        paragraphs: [
          "Keep decisions should compare verified income, rarity, collection goals and any confirmed size or mutation effects. Do not sell or replace a pet based on a field marked for verification.",
          "Before making room, capture the pet’s full interface details. That record can protect against losing useful information and helps build a more dependable Steal An Egg pets database.",
        ],
      },
    ],
  },
  {
    title: "Steal An Egg Pet Income",
    intro: ["Pet income is the economic center of this page. The goal is to compare what each confirmed pet contributes and show how the value was measured, without inventing earnings or mixing totals from different systems."],
    subsections: [
      {
        title: "How Pet Income Works",
        paragraphs: [
          "The broad loop is confirmed: hatch pets, earn money and use that money for progression. The exact earning interval, offline behavior and individual rates still need original evidence before they can be described as fixed mechanics.",
          "A future income entry should identify the displayed value, unit and relevant conditions. If a number changes after an update, the old record should be dated rather than silently presented as current.",
        ],
      },
      {
        title: "How to Compare Pet Income",
        paragraphs: [
          "Compare like with like. Use values from the same interface context and avoid combining one pet’s rate with a total balance that includes other sources. Note mutations, sizes or boosts only when their effects can be isolated.",
          "The best pets table will eventually allow sorting by confirmed income, but it will keep source egg and rarity visible so players understand the acquisition cost behind a larger number.",
        ],
      },
      {
        title: "When to Replace a Pet",
        paragraphs: [
          "Consider replacement when a newly verified pet provides a useful improvement and the current pet no longer serves a collection goal. Check the interface before acting, especially when size, mutation or index mechanics are not yet understood.",
          "For beginners, consistent earnings and repeatable hatches are more reliable decision inputs than an unsupported tier list. The beginner guide explains how income fits into the full run.",
        ],
        links: [{ href: "/guide/", label: "See the beginner income loop" }],
      },
    ],
  },
  {
    title: "Pet Sizes and Mutations",
    intro: ["Sizes and mutations have reserved fields because players search for them, but their effects are not confirmed. The page distinguishes visible traits from assumptions about income or rarity."],
    subsections: [
      {
        title: "Pet Sizes",
        paragraphs: [
          "Pet sizes should be recorded using labels or measurements the game actually shows. A pet looking larger in one screenshot may result from camera distance, animation or perspective, so appearance alone does not prove a separate size tier.",
          "Size effects on income, rarity or collection value are not verified yet. Future entries will show the source and avoid turning a visual difference into an invented multiplier.",
        ],
      },
      {
        title: "Pet Mutations",
        paragraphs: [
          "Mutations require the same evidence standard as every other pet field. The Steal An Egg pet mutations list will need a visible mutation name, the affected pet and any confirmed interface change before it can be published.",
          "Mutation chance and stat effects remain unverified. If a recording shows an outcome but not its probability, the entry will document the outcome and leave the chance blank.",
        ],
      },
      {
        title: "How Sizes and Mutations Affect Your Collection",
        paragraphs: [
          "Until effects are verified, treat sizes and mutations as collection attributes rather than guaranteed income upgrades. Preserve unusual results, capture the relevant interface and compare them under the same conditions.",
          "Once enough evidence exists, the database can show whether these traits change income, index completion or only appearance. Separating those possibilities now prevents a rewrite later.",
        ],
      },
    ],
  },
  {
    title: "Pet Index, Fusing and Selling Pets",
    intro: ["Index, fusing and selling are collection-management searches. Their exact interfaces, costs and results are not confirmed, so this section explains the evidence needed without inventing a system."],
    subsections: [
      {
        title: "Pet Index",
        paragraphs: [
          "A verified pet index should show how discovered pets are recorded and whether size or mutation variants count separately. No completion rewards or index totals will be listed until the game interface confirms them.",
          "Future screenshots should capture the full index panel and game context. That evidence can support collection guidance without copying an unverified list from another source.",
        ],
      },
      {
        title: "Fuse Machine",
        paragraphs: [
          "The fuse machine mechanic is not verified yet. Required pets, costs, outputs and chances remain blank until a complete original recording shows the interaction from input to result.",
          "Do not infer a recipe from a single output. Repeatable tests are needed to distinguish a fixed result from random variation and to protect players from spending pets on an unsupported method.",
        ],
      },
      {
        title: "Selling Pets",
        paragraphs: [
          "Selling behavior, prices and restrictions are also pending verification. Before selling any pet, check whether the interface shows a value and whether the pet has an unusual rarity, size or mutation worth documenting.",
          "The final page will separate sale value from ongoing pet income. Those are different decisions and should never be merged into one unverified “best” ranking.",
        ],
      },
    ],
  },
  {
    title: "How to Get Better Pets",
    intro: ["Better pets come from improving the full egg-to-pet loop: reach a suitable egg, return it consistently, hatch it and reinvest verified income into the limitation that holds back the next run."],
    subsections: [
      {
        title: "Steal Better Eggs",
        paragraphs: [
          "Move to harder eggs after ordinary returns are reliable. A better source egg may expand the possible hatch results, but exact pet outcomes must be verified before this page recommends a named target.",
          "Use the main egg list for broad selection and the rare egg page when the question is specifically about rare spawns, secret eggs or difficult locations.",
        ],
        links: [
          { href: "/eggs/", label: "Compare the Steal An Egg egg list" },
          { href: "/eggs/rare-eggs/", label: "Prepare for rare egg attempts" },
        ],
      },
      {
        title: "Improve Your Egg Runs",
        paragraphs: [
          "A consistent return gives you more useful hatch observations and reduces time lost to failed attempts. Learn the route, watch player activity and increase difficulty after you can explain why the current run succeeds.",
          "The step-by-step guide focuses on that complete process. This pet page only carries the result forward into collection and income choices.",
        ],
        links: [{ href: "/guide/", label: "Follow the step-by-step beginner guide" }],
      },
      {
        title: "Reinvest Pet Income Into Progression",
        paragraphs: [
          "Use pet income to address the next practical limitation rather than hoarding without a plan. Movement may support safer returns, while other upgrades may improve the pen or broader economy once their effects are verified.",
          "The progression page holds the complete upgrade map. Link verified pet earnings to that decision instead of duplicating upgrade costs inside the pet database.",
        ],
        links: [{ href: "/progression/", label: "Choose a progression priority" }],
      },
    ],
  },
];

const faqs: CoreFaq[] = [
  { question: "What do pets do in Steal An Egg?", answer: "Pets connect hatching to the game economy by contributing income used for upgrades. Exact earnings and other effects remain unpublished until they are verified in the correct Roblox experience." },
  { question: "How do you get pets?", answer: "Return an egg to your pen and follow the visible hatching process. Record the source egg and resulting pet together so the relationship can be verified rather than guessed." },
  { question: "What are the best pets in Steal An Egg?", answer: "A verified Steal An Egg pets ranking is not available yet. The final comparison will separate pet income, rarity, acquisition and collection value instead of assuming that the rarest pet is always best." },
  { question: "Which pets make the most money?", answer: "The highest-income pets have not been verified. Future entries will compare values from the same interface context and display when each rate was last checked." },
  { question: "Do pets have mutations and different sizes?", answer: "Mutation and size fields are reserved, but their labels, chances and effects are not verified yet. They will only be published after original gameplay shows the relevant interface and repeatable result." },
];

export default function PetsPage() {
  return (
    <CoreSeoPage
      title="Steal An Egg Pets"
      description="Explore Steal An Egg pets on Roblox with verified pet lists, rarities, income, mutations, sizes and the best pets to hatch, keep and use for progression."
      intro={[
        "Steal An Egg pets are the outcome of the egg-hatching loop and a key part of the game economy. This page is the focused pet database for names, source eggs, rarity, income, sizes, mutations and collection-management evidence.",
        "No pet name, earnings value or chance is invented. The table and screenshot areas are ready for original Steal An Egg gameplay, while practical sections explain how to compare pets without confusing rarity, income and progression value.",
      ]}
      pathname="/pets/"
      crumbs={[{ label: "Steal An Egg Pets" }]}
      sections={sections}
      faqTitle="Steal An Egg Pets FAQ"
      faqs={faqs}
      maxParagraphsPerSubsection={1}
      screenshots={[
        { label: "Steal An Egg Pets list interface", filename: "steal-an-egg-pets.webp", description: "Reserved for an original capture of confirmed pet names and collection fields." },
        { label: "Steal An Egg Pets income value", filename: "steal-an-egg-pet-income.webp", description: "Reserved for a readable interface view that isolates one verified income value." },
        { label: "Steal An Egg Pets traits", filename: "steal-an-egg-pet-mutations.webp", description: "Reserved for confirmed size or mutation labels without assuming their effects." },
      ]}
      related={[
        { href: "/eggs/", label: "Steal An Egg egg database", description: "Connect pets to verified source eggs and hatching mechanics." },
        { href: "/eggs/rare-eggs/", label: "Rare and secret egg guide", description: "Research difficult source eggs without duplicating pet data." },
        { href: "/guide/", label: "Steal An Egg Pets beginner guide", description: "See where hatching and income fit in the complete loop." },
        { href: "/progression/", label: "Progression and upgrade hub", description: "Turn verified pet income into a practical next upgrade." },
      ]}
    />
  );
}
