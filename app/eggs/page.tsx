import { CoreSeoPage, type CoreFaq, type CoreSection } from "@/components/steal-an-egg/CoreSeoPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Steal An Egg Eggs – Egg List, Rarities, Spawns & Hatching",
  description: "Explore the Steal An Egg egg list on Roblox with verified rarities, spawn mechanics, hatching tips, rare eggs, secret eggs and the best eggs for progression.",
  pathname: "/eggs/",
});

const sections: CoreSection[] = [
  {
    title: "Steal An Egg Egg List",
    intro: ["This is the main database area for Steal An Egg eggs. It separates confirmed interface data from player observations, so every future row can show what was seen, where it was seen and when it was last checked."],
    subsections: [
      {
        title: "How to Read the Egg List",
        paragraphs: [
          "Use the egg list as a comparison tool rather than a promise that every target is always available. The final table will record an egg name, displayed rarity, known spawn context, hatching notes and verification date. A blank field means the value has not been confirmed in the correct Roblox experience.",
          "The Steal An Egg egg list will also link outward when a subject needs more detail. General mechanics stay here, while difficult rare eggs and secret eggs belong in the dedicated rarity guide. This division keeps the database useful without mixing a broad catalog with speculation about unusual spawns.",
        ],
        links: [{ href: "/eggs/parasite-egg/", label: "Parasite Egg guide" }],
      },
      {
        title: "Verified Egg Data",
        paragraphs: [
          "No egg name, rarity, location, timer or hatch result is treated as verified until it can be read clearly in game or supported by repeatable evidence. Original screenshots should show enough of the interface to identify Steal An Egg by and Collect Rare Pets, not a similarly named Roblox title.",
          "The first release therefore uses an honest placeholder row. Once real recordings and captures are available, verified Steal An Egg eggs can be added without changing the table structure or permanent URL.",
        ],
        table: {
          caption: "Steal An Egg egg list verification table",
          columns: ["Egg", "Rarity", "Spawn", "Location", "Hatching", "Notes", "Last Verified"],
          rows: [["Not verified yet", "To be verified in game", "To be verified in game", "To be verified in game", "To be verified in game", "Evidence required", "Pending"]],
        },
      },
    ],
  },
  {
    title: "How Eggs Work in Steal An Egg",
    intro: ["Eggs begin the central risk-and-reward loop. A useful run is not only about touching a target; the egg must be taken away from danger, returned to the player’s pen and moved into the hatching stage before it can support the wider economy."],
    subsections: [
      {
        title: "How to Steal Eggs",
        paragraphs: [
          "Before taking an egg, check the route back to your pen and the activity around the target. A nearby egg that can be returned consistently may be more valuable than a visually impressive option that repeatedly gets lost. Steal An Egg rewards completed runs, so target selection should match current movement and confidence.",
          "Approach with an exit in mind. Avoid assuming that a rarity label alone makes an attempt sensible, and watch how other players move through the same area. The beginner walkthrough explains the full steal-and-return process without turning this database page into a general gameplay guide.",
        ],
        links: [{ href: "/guide/", label: "Read the beginner egg-run walkthrough" }],
      },
      {
        title: "How to Hatch Eggs",
        paragraphs: [
          "After an egg reaches the pen, follow the visible in-game prompts that move it toward hatching. The exact waiting time, interaction and upgrade requirements must be verified before they are published here. If the interface changes, the latest capture should take priority over an older description.",
          "Hatching connects the action phase to the pet phase. Record the source egg and resulting pet together whenever possible; that evidence will make both the egg database and pet database more useful without relying on memory or community guesses.",
        ],
      },
      {
        title: "How Eggs Turn Into Pets",
        paragraphs: [
          "A successfully hatched egg produces the next part of the progression loop: a pet that can support income. That relationship is why a complete Steal An Egg eggs list needs a source-to-result field, even when the exact outcome is not known yet.",
          "Pet names, rarity and income belong on the pet page. This section only explains the handoff between the two systems, keeping the intent of this page focused on eggs, their acquisition and verified mechanics.",
        ],
        links: [{ href: "/pets/", label: "Open the verified pet database" }],
      },
    ],
  },
  {
    title: "Steal An Egg Egg Rarities",
    intro: ["Rarity can help organize an egg collection, but it should be copied from a visible game label rather than inferred from color, price or how often one player notices an egg. The database will preserve the wording used by the game."],
    subsections: [
      {
        title: "How Egg Rarity Works",
        paragraphs: [
          "An egg rarity is a classification, not a complete value judgment. It may describe how the game groups an egg, while location, availability, hatch results and the risk of returning it can affect the practical decision. These fields stay separate so the page does not turn an unverified assumption into a ranking.",
          "When evidence is added, each rarity should be readable in the screenshot or recording. If a label is absent, the entry will say “Not verified yet” instead of assigning a category based on appearance.",
        ],
      },
      {
        title: "Which Eggs Are Harder to Get?",
        paragraphs: [
          "Harder eggs may require a longer route, better timing, stronger movement or a contested approach, but difficulty must be observed rather than invented. A target that is difficult for a new player may become manageable after upgrades, so the notes field should explain the conditions behind the claim.",
          "The best comparison combines confirmed egg rarity with repeatable spawn and return evidence. Until that data exists, the Steal An Egg Wiki does not name a hardest or rarest normal egg on this page.",
        ],
      },
    ],
  },
  {
    title: "Rare and Secret Eggs",
    intro: ["This section gives only the overview needed by egg-list readers. Detailed rare egg locations, farming routes and spawn evidence live on the separate rare eggs page so the two URLs do not compete for the same search intent."],
    subsections: [
      {
        title: "Rare Eggs",
        paragraphs: [
          "Rare eggs need stronger evidence than an ordinary list entry. A useful record should show the egg clearly, the surrounding area, any visible rarity label and the conditions present when it appeared. One sighting is evidence of an appearance, not proof of a universal spawn rate.",
          "Use the dedicated Steal An Egg rare eggs resource for the deeper tracker, route planning and verification method. This database only summarizes confirmed rarity and links to that supporting detail.",
        ],
        links: [{ href: "/eggs/rare-eggs/", label: "Explore rare egg spawns and locations" }],
      },
      {
        title: "Secret Eggs",
        paragraphs: [
          "Secret eggs should be called secret only when the game uses that label or reliable evidence supports a distinct secret classification. Hidden-looking placement, unusual colors or a community nickname are not enough on their own.",
          "Future secret egg entries will show the source of the classification and avoid publishing a chance, timer or requirement without proof. This protects players from spending time on a route built around a rumor.",
        ],
      },
      {
        title: "Rare vs Secret Eggs",
        paragraphs: [
          "Rare and secret are not automatically interchangeable. Rare may describe a tier or uncommon appearance, while secret may be a separate label or discovery condition. The exact distinction in Steal An Egg remains to be verified from the interface and repeated gameplay.",
          "Until that distinction is confirmed, the tables keep both concepts as separate fields. This allows new evidence to clarify the system without rewriting earlier records or overstating what the game shows.",
        ],
      },
    ],
  },
  {
    title: "Steal An Egg Egg Spawns and Locations",
    intro: ["Spawn information is useful only when it includes context. Future records will distinguish a visible location from a recurring spawn pattern and will never convert a short observation into an exact probability."],
    subsections: [
      {
        title: "Where Eggs Spawn",
        paragraphs: [
          "Egg locations will be described using recognizable in-game landmarks once original captures are available. A good location entry should help another player reach the same area without claiming that the same egg must be present every time.",
          "For now, exact Steal An Egg egg locations remain unverified. The reserved screenshot frame is intended for a wide view of the play area plus a closer image of the target and nearby route choices.",
        ],
      },
      {
        title: "How Egg Spawns Work",
        paragraphs: [
          "An observed appearance does not reveal the entire spawn system. To describe egg spawns responsibly, evidence should record multiple sessions, note visible events or resets and separate a fixed location from a rotating or conditional result.",
          "Spawn time, rate and reset behavior stay blank until the same pattern can be repeated. The goal is a dependable Steal An Egg egg list, not a collection of precise-looking numbers without a source.",
        ],
      },
      {
        title: "How to Reach Better Eggs",
        paragraphs: [
          "Reaching a better target depends on more than knowing where it appears. Players also need a realistic return route, enough movement for that route and a plan for activity around the area. Improving those basics can make a known location more useful.",
          "Use the progression hub for the wider upgrade map. If movement is the limiting factor, the dedicated training page is the better place for verified speed and treadmill requirements.",
        ],
        links: [
          { href: "/progression/", label: "Review the progression system" },
          { href: "/progression/speed-treadmill/", label: "Prepare movement for egg runs" },
        ],
      },
    ],
  },
  {
    title: "Best Eggs for Progression",
    intro: ["The best eggs are context dependent. A useful recommendation considers whether the player can reach the target, return it consistently and turn the hatch into an improvement; rarity alone does not answer all three questions."],
    subsections: [
      {
        title: "Best Eggs for Beginners",
        paragraphs: [
          "For a beginner, a repeatable egg run is usually a better learning tool than a difficult target with uncertain odds. Start with an egg you can bring back safely, learn what happens at the pen and verify how the hatch connects to income before increasing the risk.",
          "The Steal An Egg Wiki will name specific beginner options only after locations and return conditions are verified. Until then, safety and repeatability are the useful selection rules.",
        ],
      },
      {
        title: "When to Chase Better Eggs",
        paragraphs: [
          "Consider a harder egg after ordinary returns feel consistent and your upgrades solve a real limitation. Better movement may shorten the exposed part of a route, while stronger income can make preparation less costly. Confirm what changed before assuming every higher-tier attempt is now safe.",
          "A player who still loses routine runs should improve the route first. The step-by-step guide provides that process without duplicating the egg database on this page.",
        ],
        links: [{ href: "/guide/", label: "Follow the complete beginner route" }],
      },
      {
        title: "Risk vs Reward When Stealing Eggs",
        paragraphs: [
          "Risk includes travel distance, other-player activity, unfamiliar paths and the chance that an attempt ends before the egg reaches the pen. Reward includes the verified hatch outcome and how that result helps the next run. Both sides need evidence before an egg can be called best.",
          "Use short, repeatable checks when collecting data. A record of several completed routes is more helpful than a single success presented as a universal strategy.",
        ],
      },
    ],
  },
  {
    title: "Egg Reset and Special Egg Mechanics",
    intro: ["Reset behavior, limited availability and special conditions can change an egg database quickly. These subjects have reserved fields, but exact rules will not appear until the correct mechanics are visible and repeatable in game."],
    subsections: [
      {
        title: "How Egg Reset Works",
        paragraphs: [
          "The Steal An Egg egg reset process is not verified yet. Future testing should record what changes, what remains, whether the behavior is tied to a server or event and how another player can reproduce the observation.",
          "Do not treat a server change, disappearance or one-time interface update as proof of a scheduled reset. The final entry will distinguish the observed action from any proposed explanation.",
        ],
      },
      {
        title: "Limited and Special Eggs",
        paragraphs: [
          "Limited and special eggs need a visible source such as the game interface, an event screen or repeatable gameplay evidence. Their availability dates, requirements and hatch results remain “To be verified in game” until that source exists.",
          "Confirmed event changes will also be linked to the update log, giving each record a freshness trail and making it clear when older Steal An Egg eggs information needs review.",
        ],
        links: [{ href: "/updates/", label: "Check confirmed game updates" }],
      },
    ],
  },
];

const faqs: CoreFaq[] = [
  { question: "What eggs are in Steal An Egg?", answer: "The complete egg names and rarities are still being verified in the correct Roblox experience. The table on this page is ready for confirmed Steal An Egg eggs, but it does not invent a list from unverified community claims." },
  { question: "How do you get eggs in Steal An Egg?", answer: "Choose an egg you can realistically return, plan the path to your pen and complete the run before moving into hatching. Exact locations and requirements for individual eggs will be added after in-game verification." },
  { question: "How do you hatch eggs?", answer: "Return the egg to your pen and follow the visible in-game hatching prompts. Exact timers, interactions and upgrade requirements are not published until they can be confirmed with original gameplay evidence." },
  { question: "What are the rarest eggs in Steal An Egg?", answer: "A verified rarest-eggs ranking is not available yet. The dedicated rare eggs page will compare confirmed rarity, spawn, location and requirement evidence without guessing names or odds." },
  { question: "Are there secret eggs in Steal An Egg?", answer: "Secret egg data has not been verified yet. An egg will only be labeled secret when the game interface or reliable, repeatable evidence supports that classification." },
];

export default function EggsPage() {
  return (
    <CoreSeoPage
      title="Steal An Egg Eggs"
      description="Explore the Steal An Egg egg list on Roblox with verified rarities, spawn mechanics, hatching tips, rare eggs, secret eggs and the best eggs for progression."
      intro={[
        "Steal An Egg eggs begin every successful run: find a realistic target, bring it back to your pen and move it into the hatching loop. This page is the broad egg database for the Roblox experience by and Collect Rare Pets, Place ID 107778070777162.",
        "Use it for the Steal An Egg egg list, rarity fields, spawn context, locations, hatching and general mechanics. Rare and secret egg farming has its own deeper page, preventing the two search intents from competing while keeping relevant evidence one click away.",
      ]}
      pathname="/eggs/"
      crumbs={[{ label: "Eggs" }]}
      sections={sections}
      faqTitle="Steal An Egg Eggs FAQ"
      faqs={faqs}
      maxParagraphsPerSubsection={1}
      screenshots={[
        { label: "Steal An Egg Eggs list interface", filename: "steal-an-egg-egg-list.webp", description: "Reserved for a readable capture of confirmed egg names and interface fields." },
        { label: "Steal An Egg Eggs location context", filename: "steal-an-egg-egg-location.webp", description: "Reserved for an original wide view showing a verified egg and nearby landmarks." },
        { label: "Hatching evidence", filename: "steal-an-egg-hatching.webp", description: "Reserved for the pen interface or visible step that confirms how hatching works." },
      ]}
      related={[
        { href: "/eggs/rare-eggs/", label: "Rare eggs and secret egg guide", description: "Go deeper into rare spawns, locations and farming evidence." },
        { href: "/pets/", label: "Steal An Egg pet database", description: "Follow a confirmed hatch into pet rarity and income data." },
        { href: "/guide/", label: "How to play Steal An Egg", description: "Learn the complete steal, return, hatch and upgrade loop." },
        { href: "/progression/", label: "Progression and upgrade hub", description: "Understand the systems that support better egg runs." },
      ]}
    />
  );
}
