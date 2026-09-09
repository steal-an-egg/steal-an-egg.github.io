import { CoreSeoPage, type CoreFaq, type CoreSection } from "@/components/steal-an-egg/CoreSeoPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Steal An Egg Rare Eggs – Rarest Eggs, Spawns & Secret Guide",
  description: "Find the rarest eggs in Steal An Egg on Roblox with verified rare egg spawns, locations, secret eggs, farming routes, escape tips and progression strategies.",
  pathname: "/eggs/rare-eggs/",
});

const sections: CoreSection[] = [
  {
    title: "What Are Rare Eggs in Steal An Egg?",
    intro: ["Rare eggs are the high-intent subject of this page: unusual targets, evidence-backed rarity, locations, spawn conditions and the preparation needed to return them. The general egg database remains responsible for the full egg list and ordinary mechanics."],
    subsections: [
      {
        title: "Why Rare Eggs Matter",
        paragraphs: [
          "A rare target can change the way a player plans a run. Finding it may be only the first challenge; the route back, nearby activity and current movement still determine whether the egg reaches the pen. That makes reliable location and return evidence more useful than rarity hype by itself.",
          "Steal An Egg rare eggs also need stronger documentation because a single sighting can quickly become an unsupported claim about odds or timers. This page records what was actually observed and leaves conclusions open until the pattern can be repeated.",
        ],
      },
      {
        title: "Rare Eggs vs Normal Eggs",
        paragraphs: [
          "Normal egg mechanics belong in the broad database. Rare egg coverage goes deeper into how a target was classified, where it appeared, what conditions were visible and what made the return difficult. The distinction is about search intent as much as in-game rarity.",
          "A normal-looking egg should not be upgraded to rare because it appeared infrequently during one short session. Likewise, a rare label should be copied exactly from the interface when possible instead of being inferred from color or community language.",
        ],
        links: [{ href: "/eggs/", label: "Compare the complete egg database" }],
      },
    ],
  },
  {
    title: "Steal An Egg Rarest Eggs List",
    intro: ["The rarest eggs list is a verification tracker, not a ranking filled with guessed names. Each future entry must connect the egg to clear rarity evidence and enough context for another player to understand the observation."],
    subsections: [
      {
        title: "Verified Rare Eggs",
        paragraphs: [
          "No specific Steal An Egg rare egg has been verified for publication yet. The placeholder row below protects the structure while making the missing evidence visible. When original gameplay arrives, each row can include location, spawn context, requirements, notes and a last-verified date.",
          "A good submission shows the target and surrounding interface in the Roblox experience by and Collect Rare Pets, Place ID 107778070777162. Cropped images without game context may help identify a lead, but they are not enough for a final database entry.",
        ],
        table: {
          caption: "Verified Steal An Egg rare eggs table",
          columns: ["Egg", "Rarity", "Location", "Spawn", "Requirements", "Notes", "Last Verified"],
          rows: [["Not verified yet", "To be verified in game", "To be verified in game", "To be verified in game", "To be verified in game", "Original evidence required", "Pending"]],
        },
      },
      {
        title: "How We Rank Rare Eggs",
        paragraphs: [
          "A rarest-eggs ranking needs more than a label. It should consider the classification shown by the game, how consistently the spawn can be observed, whether access has requirements and how difficult the return is under repeatable conditions.",
          "The Steal An Egg Wiki will not convert a community estimate into a precise rank. If evidence only confirms that an egg exists, the entry will say exactly that and leave comparative rarity unranked.",
        ],
      },
    ],
  },
  {
    title: "Rare Egg Spawns and Locations",
    intro: ["A location describes where an egg was seen. A spawn rule explains how or when it appears. Keeping those fields separate prevents an original screenshot from being stretched into a timer, chance or universal route claim."],
    subsections: [
      {
        title: "Where Rare Eggs Spawn",
        paragraphs: [
          "Verified locations will use recognizable landmarks and more than one camera angle when possible. The goal is to help a player reach the same area while making clear that a recorded location does not guarantee the egg will be present on every server.",
          "Exact rare egg locations remain unverified. Future screenshots should include the wider play area, the target itself and any visible interface text that supports the identification.",
        ],
      },
      {
        title: "How Rare Egg Spawns Work",
        paragraphs: [
          "Rare egg spawns may appear to follow a pattern, but that pattern must be tested across sessions before it becomes guidance. Record server changes, visible resets, event prompts and the time between observations without assuming which factor caused the result.",
          "Spawn rate, spawn time and drop chance are prohibited from the finished table until they are supported by repeatable evidence. A range of observed results is more honest than one exact percentage copied without a source.",
        ],
      },
      {
        title: "When to Look for Rare Eggs",
        paragraphs: [
          "Look when you have enough time to observe the area and complete the return, not only when a rumor suggests a timer. Events and verified gameplay changes may create useful windows, but those conditions need a dated source before they are described as a strategy.",
          "Checking the update log can reveal whether new eggs or events have been confirmed. This rare eggs page will then connect the change to its location and spawn evidence rather than repeat a broad patch summary.",
        ],
        links: [{ href: "/updates/", label: "Review confirmed updates and events" }],
      },
    ],
  },
  {
    title: "Secret Eggs in Steal An Egg",
    intro: ["Secret eggs are covered here only when evidence supports a distinct secret classification or discovery method. An egg does not become secret merely because its position looks hidden or its name is unfamiliar."],
    subsections: [
      {
        title: "How to Find Secret Eggs",
        paragraphs: [
          "Begin with the interface and repeatable observations. Check unusual routes carefully, record the surrounding landmarks and capture any text that labels the target. Avoid presenting a one-time visual clue as a confirmed secret egg requirement.",
          "If a discovery depends on an event, upgrade or sequence, each step should be documented separately. This makes the result reproducible and prevents unrelated actions from becoming part of an invented method.",
        ],
      },
      {
        title: "Rare Eggs vs Secret Eggs",
        paragraphs: [
          "Rare and secret may describe different properties. Rare can refer to classification or availability, while secret can refer to a hidden category or special discovery condition. Steal An Egg has not yet provided enough verified data here to publish a final distinction.",
          "The tracker therefore preserves separate rarity and notes fields. If the game later shows both labels, the original capture can document the relationship without forcing every rare egg into the secret category.",
        ],
      },
      {
        title: "Verified Secret Egg Data",
        paragraphs: [
          "There is no verified secret egg row yet. Names, secret chances, locations and hatch results remain “To be verified in game.” Community tips can be treated as testing leads, but not as published facts until the correct experience provides supporting evidence.",
          "Original evidence should show the egg, how it was reached and the interface state before and after discovery. A short recording is especially valuable when one still image cannot demonstrate the required sequence.",
        ],
      },
    ],
  },
  {
    title: "How to Get Rare Eggs",
    intro: ["The safest general method is preparation: improve the limitation that ends your runs, understand the route before taking the target and return the egg instead of treating discovery as the finish line."],
    subsections: [
      {
        title: "Train Enough Speed Before the Run",
        paragraphs: [
          "Speed can shorten exposed travel and make a familiar route easier to repeat. Train before the attempt when ordinary returns still feel unreliable, but do not assume a particular level is required until the game data has been verified.",
          "The dedicated speed and treadmill page will hold exact requirements later. This rare egg guide uses movement only as preparation for the search and return.",
        ],
        links: [{ href: "/progression/speed-treadmill/", label: "Prepare speed and treadmill upgrades" }],
      },
      {
        title: "Plan Your Route Before Stealing",
        paragraphs: [
          "Walk the route without the target first. Notice turns, narrow areas, alternate paths and where other players tend to cross. A rehearsed return gives you a decision plan before pressure makes every route look equally risky.",
          "Route notes should use stable landmarks rather than precise timing claims. If the area changes in an update, revise the path and its screenshot instead of leaving outdated instructions in place.",
        ],
      },
      {
        title: "Get the Egg Back Safely",
        paragraphs: [
          "Finding a rare egg does not complete the run. Choose the clearest safe line back to your pen, avoid unnecessary detours and adjust if the planned path becomes crowded. A lower-risk return preserves the value of the discovery.",
          "The full beginner guide explains the complete steal, escape, hatch and upgrade loop. Use it if the return stage is still inconsistent before spending time on rare egg farming.",
        ],
        links: [{ href: "/guide/", label: "Practice the complete return loop" }],
      },
      {
        title: "Watch Other Players",
        paragraphs: [
          "Other players affect both information and risk. Their movement may reveal common routes or make a path less practical, but it does not prove a spawn rule. Treat what you see as context for the next decision, not as a guaranteed method.",
          "When collecting evidence, note whether the area was contested. That detail can explain why two runs with the same route produced different outcomes without inventing a hidden mechanic.",
        ],
      },
    ],
  },
  {
    title: "Best Rare Egg Farming Strategies",
    intro: ["Efficient farming means repeating a route you can complete and recording enough context to learn from failures. It does not mean chasing every unusual target regardless of preparation."],
    subsections: [
      {
        title: "Choose the Right Egg for Your Progression",
        paragraphs: [
          "Choose a target that is meaningfully better than your routine options but still realistic for current upgrades. A rare egg that repeatedly fails to reach the pen may contribute less than a safer route that improves income and future movement.",
          "Use the progression hub to identify the system that is holding the route back. Upgrade evidence belongs there; this page stays focused on how preparation changes a rare egg attempt.",
        ],
        links: [{ href: "/progression/", label: "Find the next useful progression upgrade" }],
      },
      {
        title: "Balance Rarity and Risk",
        paragraphs: [
          "Compare the quality of the evidence with the cost of the attempt. A confirmed rare spawn on a known route is easier to plan than an unsupported secret claim. Increase risk when the route and target are understood, not simply because a label sounds valuable.",
          "Record completed and failed returns. That practical history will eventually support better recommendations than rarity alone.",
        ],
      },
      {
        title: "Repeat Efficient Egg Runs",
        paragraphs: [
          "A repeatable circuit helps separate normal variation from a possible spawn pattern. Keep the route consistent, note visible changes and avoid switching multiple variables at once. Efficient testing improves both farming and the quality of future wiki data.",
          "Stop and review when repeated failures share the same cause. A small movement or route improvement can be more valuable than continuing a long session with the same weakness.",
        ],
      },
    ],
  },
  {
    title: "Rare Egg Mistakes to Avoid",
    intro: ["Most costly mistakes happen before the target is taken: the route is unfamiliar, the player is underprepared or a rumor is treated as verified information."],
    subsections: [
      {
        title: "Chasing Rare Eggs Too Early",
        paragraphs: [
          "Early attempts can be useful practice, but repeated failures are a signal to improve ordinary runs first. Learn the pen return, build reliable pet income and solve the most obvious movement limitation before turning every session into a rare egg search.",
          "The pet database can later show which confirmed hatch results support that preparation. Until values are verified, focus on the systems you can observe directly.",
        ],
        links: [{ href: "/pets/", label: "Understand pets and income" }],
      },
      {
        title: "Ignoring Your Escape Route",
        paragraphs: [
          "A location is only half of a usable guide. If you cannot describe how to leave the area, the route is not ready for a serious attempt. Rehearse the first turns and identify an alternate path before taking the egg.",
          "Do not let a target’s rarity erase information you already gathered about traffic and hazards. The return remains the condition that turns a sighting into progress.",
        ],
      },
      {
        title: "Going After Eggs You Cannot Safely Return",
        paragraphs: [
          "A better-looking target can still be a poor choice when the path exceeds current ability. Use successful ordinary runs as the baseline, then increase difficulty one limitation at a time so you can tell which upgrade or route change helped.",
          "This approach is slower than following an unverified shortcut, but it produces repeatable outcomes and evidence that remains useful after the first lucky attempt.",
        ],
      },
    ],
  },
];

const faqs: CoreFaq[] = [
  { question: "What is the rarest egg in Steal An Egg?", answer: "A Steal An Egg rare eggs ranking has not been verified yet. A name will only be ranked after the game provides clear rarity evidence and the page can compare location, spawn and requirement data without guessing." },
  { question: "Where do rare eggs spawn?", answer: "Exact rare egg spawn locations are still being documented. Future entries will use recognizable landmarks and original screenshots while separating a confirmed sighting from a guaranteed spawn rule." },
  { question: "How do you get rare eggs?", answer: "Prepare enough movement for the route, observe the area, choose a target you can return and get the egg safely back to your pen. Specific requirements remain unverified until supported by in-game evidence." },
  { question: "Are there secret eggs in Steal An Egg?", answer: "Secret egg data is not verified yet. This page will only publish a secret classification, location or method when it is shown by the game or supported by repeatable original evidence." },
  { question: "Do you need more Speed to get rare eggs?", answer: "More speed can make difficult return routes easier, but no exact speed requirement is verified for a specific rare egg. Train the limitation that is causing failed returns and check the dedicated movement page for confirmed values later." },
];

export default function RareEggsPage() {
  return (
    <CoreSeoPage
      title="Steal An Egg Rare Eggs"
      description="Find the rarest eggs in Steal An Egg on Roblox with verified rare egg spawns, locations, secret eggs, farming routes, escape tips and progression strategies."
      intro={[
        "Steal An Egg rare eggs deserve a focused page because players searching for the rarest eggs need more than a general catalog. They need verified rare egg spawns, locations, secret egg evidence, preparation and a safe return plan.",
        "This guide covers that deeper intent without inventing egg names, odds, timers or requirements. Use the main egg database for the broad list and ordinary hatching mechanics; use this page for rare egg farming and evidence-backed discovery routes.",
      ]}
      pathname="/eggs/rare-eggs/"
      crumbs={[{ label: "Eggs", href: "/eggs/" }, { label: "Steal An Egg Rare Eggs" }]}
      sections={sections}
      faqTitle="Steal An Egg Rare Eggs FAQ"
      faqs={faqs}
      maxParagraphsPerSubsection={1}
      showSectionIntros={false}
      screenshots={[
        { label: "Steal An Egg Rare Eggs evidence", filename: "steal-an-egg-rare-egg.webp", description: "Reserved for a clear target capture with visible game context and rarity evidence." },
        { label: "Steal An Egg Rare Eggs location", filename: "steal-an-egg-rare-egg-location.webp", description: "Reserved for a wider image showing landmarks and the practical approach route." },
        { label: "Steal An Egg Rare Eggs return route", filename: "steal-an-egg-rare-egg-route.webp", description: "Reserved for original evidence of the path used to return a difficult egg." },
      ]}
      related={[
        { href: "/eggs/", label: "Steal An Egg egg list", description: "Return to the full database and general egg mechanics." },
        { href: "/guide/", label: "Beginner steal-and-return guide", description: "Practice the full gameplay loop before difficult attempts." },
        { href: "/progression/", label: "Progression and upgrade hub", description: "Identify the upgrade system limiting your route." },
        { href: "/progression/speed-treadmill/", label: "Steal An Egg Rare Eggs training route", description: "Prepare movement for longer and riskier returns." },
        { href: "/pets/", label: "Pet rarity and income database", description: "Follow verified hatch results into the pet economy." },
      ]}
    />
  );
}
