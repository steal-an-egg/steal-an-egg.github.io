import { CoreSeoPage, type CoreFaq, type CoreSection } from "@/components/steal-an-egg/CoreSeoPage";
import { buildMetadata } from "@/lib/seo";

const title = "Steal An Egg Sakura Event – Crane, Great Bloom & Incubator";
const description = "Complete Steal An Egg Sakura Event guide for Roblox, covering the Crane, Great Bloom, Sakura Incubator, Cherry Blossom content, rewards and event progression.";

export const metadata = buildMetadata({ title, description, pathname: "/updates/sakura-event/" });

const sections: CoreSection[] = [
  {
    title: "How the Steal An Egg Sakura Event Works",
    intro: [
      "The Steal An Egg Sakura Event is the Cherry Blossom progression loop added around Update 1. Current gameplay coverage agrees on the core chain: hatch a Crane from a Cherry Blossom egg, submit that pet to unlock the Sakura Incubator, collect Sakura Crystals during the repeating Great Bloom, and use the crystals to apply a Bloom-family mutation to an egg.",
      "The Steal An Egg Sakura Event mechanics were cross-checked on August 24, 2026. The developer has not published a full numerical table, so update-sensitive values are labeled community-reported and the live server takes priority.",
    ],
    subsections: [
      {
        title: "Cherry Blossom",
        paragraphs: [
          "Cherry Blossom is the Sakura biome and reported home of the Great Bloom and Sakura Incubator. Sources disagree between 2.5B and about 3.5B Speed, so read the live Steal An Egg gate.",
        ],
      },
      {
        title: "The Great Bloom",
        paragraphs: [
          "During the Steal An Egg Sakura Event, Great Bloom is a short Cherry Blossom activity. Reports place it roughly every 30 minutes for about three minutes, when players hit Sakura trees for crystals.",
        ],
      },
      {
        title: "The Crane",
        paragraphs: [
          "Crane is reported as an Epic Cherry Blossom pet, not an NPC. Multiple guides say the first Crane is consumed to unlock the Sakura Incubator permanently; exact hatch odds remain unpublished.",
        ],
      },
      {
        title: "Sakura Incubator",
        paragraphs: [
          "In the Steal An Egg Sakura Event, the Sakura Incubator is a Cherry Blossom mutation machine. After the Crane unlock, it accepts an egg and crystals for reported Bloom or Spirit Bloom results. Exact cost remains unverified.",
        ],
      },
    ],
  },
  {
    title: "How to Complete the Sakura Event",
    intro: [
      "The Steal An Egg Sakura Event route has enough independent support for a practical walkthrough. Still check the live prompt before giving up a pet, egg, or crystals.",
    ],
    subsections: [
      {
        title: "Step 1: Reach the Cherry Blossom Area",
        paragraphs: [
          "Train past the live Cherry Blossom requirement and add a return margin. Guides conflict between 2.5B and about 3.5B Speed, so the current entrance display is authoritative.",
        ],
        links: [{ href: "/updates/", label: "Steal An Egg Updates" }],
      },
      {
        title: "Step 2: Find and Understand the Crane",
        paragraphs: [
          "Steal and hatch Cherry Blossom eggs until Crane appears. Save the first Epic Crane for the Incubator instead of fusing or selling it. No trustworthy exact hatch chance is published.",
        ],
      },
      {
        title: "Step 3: Join the Great Bloom Event",
        paragraphs: [
          "Reach Cherry Blossom before the reported 30-minute cycle. Follow the announcement or unlocked Incubator timer, then use the baseball bat on temporary Sakura trees throughout the approximately three-minute window.",
        ],
        links: [{ href: "/eggs/spawn-predictor/", label: "Steal An Egg Spawn Predictor" }],
      },
      {
        title: "Step 4: Use the Sakura Incubator",
        paragraphs: [
          "Submit Crane only when the sealed Sakura Incubator asks. Then insert an egg and add the displayed crystal amount. Reports place mutation eligibility at 100% charge with charging allowed to 150%.",
        ],
      },
    ],
  },
  {
    title: "The Great Bloom in Steal An Egg",
    intro: [
      "The Great Bloom is a resource event, not a guaranteed pet drop. Its current schedule is a community observation tied to server timing and may change after a Steal An Egg update.",
    ],
    subsections: [
      {
        title: "What Is the Great Bloom?",
        paragraphs: [
          "The Great Bloom adds crystal-producing Sakura trees to Cherry Blossom. Hit them with the baseball bat for the Sakura Crystals accepted by the Incubator; the event supplements the normal egg loop.",
        ],
      },
      {
        title: "When Does the Great Bloom Start?",
        paragraphs: [
          "Independent guides report a start about every 30 minutes and a duration near three minutes. Synchronize to the visible announcement, then reset after a server hop, shutdown, or patch.",
        ],
      },
      {
        title: "What Should You Do During the Great Bloom?",
        paragraphs: [
          "Arrive with the Sakura Incubator unlocked and the bat ready. Spend the active window on event trees; current reports say they remain unusable while the machine is sealed.",
        ],
      },
    ],
    table: {
      caption: "Great Bloom current reported timing",
      columns: ["Detail", "Current report", "Evidence status", "Checked"],
      rows: [
        ["Location", "Cherry Blossom", "Multi-source gameplay report", "Aug 24, 2026"],
        ["Repeat", "About every 30 minutes", "Community-reported; update-sensitive", "Aug 24, 2026"],
        ["Active window", "About 3 minutes", "Community-reported; update-sensitive", "Aug 24, 2026"],
        ["Resource", "Sakura Crystals from event trees", "Multi-source gameplay report", "Aug 24, 2026"],
      ],
    },
  },
  {
    title: "Steal An Egg Crane Guide",
    intro: [
      "In the Steal An Egg Sakura Event, Crane is both a pet and a progression key. Save the first copy for the Incubator unless the live prompt has changed.",
    ],
    subsections: [
      {
        title: "What Is a Crane in Steal An Egg?",
        paragraphs: [
          "Crane is an Epic Cherry Blossom pet. One current index reports $4K/s, but an original selected-pet capture is still needed because size, mutation, and boosts can change income.",
        ],
      },
      {
        title: "Where Is the Crane?",
        paragraphs: [
          "Crane is not a fixed map NPC. Current guides say it hatches from Cherry Blossom eggs returned to your base. No exact nest or guaranteed Crane egg is verified.",
        ],
      },
      {
        title: "How to Get or Use the Crane",
        paragraphs: [
          "Hatch Cherry Blossom eggs until the Epic Crane appears, then take it to the sealed Incubator. Sources report consumption for a permanent unlock; hatch odds and pity rules remain unverified.",
        ],
      },
    ],
  },
  {
    title: "Steal An Egg Sakura Incubator",
    intro: [
      "The Sakura Incubator converts Great Bloom participation into a Bloom-family mutation chance. Keep unlock, crystal farming, charge, and random result separate when tracking the Steal An Egg Sakura Event.",
    ],
    subsections: [
      {
        title: "What Does the Sakura Incubator Do?",
        paragraphs: [
          "The Steal An Egg machine accepts an egg and Sakura Crystals. Community tables checked August 24 report Bloom at 97.5% and Spirit Bloom at 2.5%; these rates are not a future guarantee.",
        ],
        links: [{ href: "/eggs/", label: "Steal An Egg Eggs" }, { href: "/pets/", label: "Steal An Egg Pets" }],
      },
      {
        title: "How to Unlock the Sakura Incubator",
        paragraphs: [
          "Hatch an Epic Crane from Cherry Blossom and return it to the sealed machine. Coverage says Crane is consumed for a permanent unlock; confirm the live prompt before submitting a special copy.",
        ],
      },
      {
        title: "How to Use the Sakura Incubator",
        paragraphs: [
          "Insert an eligible egg, add Sakura Crystals, and watch the charge. Reports say mutation starts at 100% and charging can reach 150%; crystal cost, processing time, and effect remain unverified.",
        ],
      },
    ],
    table: {
      caption: "Sakura Incubator current reported outcomes",
      columns: ["Outcome", "Reported rate", "Evidence boundary", "Checked"],
      rows: [
        ["Bloom", "97.5%", "Community-reported interface rate", "Aug 24, 2026"],
        ["Spirit Bloom", "2.5%", "Community-reported interface rate", "Aug 24, 2026"],
        ["Crystal cost", "Not verified yet", "Copy the live machine value", "Aug 24, 2026"],
        ["Mutation effect", "Not verified yet", "Needs before-and-after pet data", "Aug 24, 2026"],
      ],
    },
  },
  {
    title: "Sakura Event Rewards and Progression",
    intro: [
      "Steal An Egg Sakura Event progression centers on Incubator access and two reported mutations. Exact pet income, mutation multipliers, crystal yields, and Crane odds lack a creator-published table.",
    ],
    subsections: [
      {
        title: "Event Eggs and Pets",
        paragraphs: [
          "Cherry Blossom eggs are the reported Crane source. A community index shows eight Sakura slots, but the complete creator-confirmed pool is unavailable, so do not assume every themed result is exclusive.",
        ],
        links: [{ href: "/eggs/rare-eggs/", label: "Steal An Egg Rare Eggs" }],
      },
      {
        title: "Event Mutations and Rewards",
        paragraphs: [
          "Bloom and Spirit Bloom are the two reported results. Their visuals do not establish income. Compare the egg and hatched pet under equal boosts before treating either mutation as an upgrade.",
        ],
      },
      {
        title: "What Should You Prioritize First?",
        paragraphs: [
          "Prioritize the first Crane, learn one Great Bloom route, and collect the live charge requirement. Then choose an egg worth mutating instead of spending scarce crystals on a low-value test.",
        ],
      },
    ],
  },
  {
    title: "Best Sakura Event Tips",
    intro: [
      "The best Steal An Egg Sakura Event tips emphasize positioning, live UI checks, and saving the first Crane rather than treating a reported schedule as permanent.",
    ],
    subsections: [
      {
        title: "Prepare Before the Event Starts",
        paragraphs: [
          "Unlock the Incubator, equip the bat, and reach Cherry Blossom early. Synchronize the approximate 30-minute timing to a visible signal and keep enough Speed margin for the route.",
        ],
      },
      {
        title: "Avoid Wasting Event Time",
        paragraphs: [
          "Do not cross the map after the announcement. A reported three-minute window is short, so camp the tree area, focus on crystals, and check whether the Incubator is still sealed.",
        ],
      },
      {
        title: "Prioritize the Most Useful Rewards",
        paragraphs: [
          "Save crystals until the machine confirms its charge. Mutate an egg with useful potential and record the result; the exact economic effect remains unverified even when Spirit Bloom appears.",
        ],
      },
    ],
  },
];

const faqs: CoreFaq[] = [
  { question: "What is the Sakura Event in Steal An Egg?", answer: "The Steal An Egg Sakura Event is the Cherry Blossom loop built around an Epic Crane, the Sakura Incubator, repeating Great Bloom windows, Sakura Crystals, and the reported Bloom and Spirit Bloom mutations." },
  { question: "How do you do the Sakura Event?", answer: "Reach Cherry Blossom, hatch and submit a Crane to unlock the Sakura Incubator, collect Sakura Crystals from special trees during Great Bloom, then charge an egg in the machine. Confirm every live prompt before spending a pet or crystals." },
  { question: "What is the Great Bloom?", answer: "The Great Bloom is a short Cherry Blossom resource event. Current community guides report that it repeats about every 30 minutes, lasts about three minutes, and lets players hit special trees for Sakura Crystals." },
  { question: "What is a Crane in Steal An Egg?", answer: "Crane is reported as an Epic pet hatched from Cherry Blossom eggs. Its first major use is unlocking the Sakura Incubator; exact hatch odds are not verified." },
  { question: "Where is the Crane?", answer: "The Crane is a hatch result rather than a fixed map NPC. Current guides place it in the Cherry Blossom egg pool, so steal and hatch eggs from that biome." },
  { question: "What does the Sakura Incubator do?", answer: "It uses Sakura Crystals to apply a reported Bloom or Spirit Bloom mutation to an egg after the Crane unlock. Current community rates are 97.5% and 2.5%; exact cost and effect still need live verification." },
  { question: "Is the Sakura Event limited-time?", answer: "No reliable creator-owned end date was found as of August 24, 2026. Check the live game and dated Steal An Egg Updates page before assuming the event is permanent or about to end." },
];

export default function SakuraEventPage() {
  return (
    <CoreSeoPage
      title="Steal An Egg Sakura Event"
      description={description}
      intro={[
        "This Steal An Egg Sakura Event guide explains the currently supported Cherry Blossom route: get Crane, unlock the Sakura Incubator, join the Great Bloom, farm Sakura Crystals, and use them for Bloom-family egg mutations in the Roblox experience by and Collect Rare Pets.",
        "Research was checked on August 24, 2026. The core route has multiple-source support; timings, rates, and requirements that lack a developer table are clearly labeled community-reported so players can compare them with the live Steal An Egg interface.",
      ]}
      pathname="/updates/sakura-event/"
      crumbs={[{ label: "Updates", href: "/updates/" }, { label: "Sakura Event" }]}
      sections={sections}
      faqTitle="Steal An Egg Sakura Event FAQ"
      faqs={faqs}
      screenshots={[
        { label: "Sakura Event overview", filename: "steal-an-egg-sakura-event.webp", description: "Reserved for a wide original capture with a visible event label." },
        { label: "The Great Bloom", filename: "steal-an-egg-great-bloom.webp", description: "Reserved for the named prompt, active state, and objective." },
        { label: "The Crane", filename: "steal-an-egg-crane.webp", description: "Reserved for the selected pet detail and hatch source." },
        { label: "Sakura Incubator", filename: "steal-an-egg-sakura-incubator.webp", description: "Reserved for the complete unlock, charge, and result interface." },
      ]}
      related={[
        { href: "/", label: "Steal An Egg Wiki", description: "Return to the independent Roblox game hub." },
        { href: "/updates/", label: "Steal An Egg Updates", description: "Check dated and verified game changes." },
        { href: "/eggs/", label: "Steal An Egg Eggs", description: "Use the main egg database for general mechanics." },
        { href: "/eggs/rare-eggs/", label: "Steal An Egg Rare Eggs", description: "Review rarity and spawn evidence." },
        { href: "/pets/", label: "Steal An Egg Pets", description: "Keep pet mechanics and income records separate." },
      ]}
      howToSteps={[
        { name: "Reach Cherry Blossom", text: "Read the current Speed requirement at the live gate and prepare enough margin to return with an egg." },
        { name: "Hatch a Crane", text: "Steal and hatch Cherry Blossom eggs until the reported Epic Crane appears, then keep the first one." },
        { name: "Unlock the Sakura Incubator", text: "Confirm the sealed-machine prompt and submit the Crane for the reported permanent unlock." },
        { name: "Farm and use Sakura Crystals", text: "Join Great Bloom, hit the event trees, then charge an eligible egg using the values displayed by the live machine." },
      ]}
      maxIntroParagraphs={99}
      maxParagraphsPerSubsection={99}
    />
  );
}
