import { CoreSeoPage, type CoreFaq, type CoreSection } from "@/components/steal-an-egg/CoreSeoPage";
import { buildMetadata } from "@/lib/seo";

const title = "Free Pets in Steal An Egg – How to Get Them Without Robux";
const description = "Learn how to get free pets in Steal An Egg through normal gameplay, eggs, events and verified rewards without relying on fake codes or risky downloads.";
const pathname = "/guide/free-pets/";

export const metadata = buildMetadata({ title, description, pathname });

const sections: CoreSection[] = [
  {
    title: "How to Get Free Pets in Steal An Egg",
    intro: ["Three actions finish the route: take an egg, bring it home, and hatch it."],
    subsections: [
      {
        title: "Steal an Egg",
        paragraphs: [
          "Pick an egg you can reach, and check the return before you take it. A closer egg you finish beats a distant one you lose. The egg database names entities. It does not say every egg is free to reach.",
        ],
        links: [{ href: "/eggs/", label: "Egg Database" }],
      },
      {
        title: "Return It to Your Base",
        paragraphs: [
          "The egg must reach your pen or base before a hatch exists. Place it where the game accepts it. A failed run is not a new pet. The beginner guide covers the wider loop after the first return.",
        ],
        links: [{ href: "/guide/", label: "Beginner Guide" }],
      },
      {
        title: "Hatch the Egg Into a Pet",
        paragraphs: [
          "Place the egg and follow the on-screen hatch prompt. A completed hatch yields a pet. Timers, odds, and income stay on the egg and pet pages when verified. Compare your result with the pet database.",
        ],
        links: [{ href: "/pets/", label: "Pet Database" }],
      },
    ],
  },
  {
    title: "Can You Get Pets Without Robux?",
    intro: ["The normal play route does not require a direct pet purchase."],
    subsections: [
      {
        title: "Normal Gameplay Route",
        paragraphs: [
          "Inside the official experience, the no-Robux path is steal, return, and hatch. No code or download is required. Later pet cash is in-game income, not a Robux payment.",
        ],
      },
      {
        title: "What “Free” Means in This Guide",
        paragraphs: [
          "Free pets without Robux means normal play without a direct Robux purchase of that pet. Not every pet, egg, or area is free. The updates log treats the Monster Egg pool as a Robux store offer, separate from this route.",
        ],
        links: [{ href: "/updates/", label: "Updates" }],
      },
    ],
  },
  {
    title: "Free Eggs and Gameplay Rewards",
    intro: ["A reward label is not proof that the reward is a pet."],
    subsections: [
      {
        title: "Eggs You Can Obtain Through Normal Play",
        paragraphs: [
          "Normal-route eggs are the ones you steal and carry home. This page does not list named steal an egg free egg targets. Use the egg database for one entity and the live world for what you can reach.",
        ],
      },
      {
        title: "Event Rewards",
        paragraphs: [
          "An event reward might be currency, an item, or another line on the live screen. A reward is not automatically a pet. If it is not a pet, it sits outside this pet route.",
        ],
      },
      {
        title: "What Is Currently Verified?",
        paragraphs: [
          "The verified fact is the core loop: steal an egg, return it, hatch it, and receive a pet. Unconfirmed rewards are left off this page.",
        ],
      },
    ],
  },
  {
    title: "Are There Free Pet Codes?",
    intro: ["The codes page owns exact status. This section only applies it to pets."],
    subsections: [
      {
        title: "Current Code Status",
        paragraphs: [
          "No verified active codes currently provide free pets on this wiki. The codes page shows no verified active codes and no verified redemption system. No working code is copied here.",
        ],
        links: [{ href: "/codes/", label: "Codes" }],
      },
      {
        title: "Why Fake Code Lists Are Common",
        paragraphs: [
          "Steal an egg pet codes lists often repeat unverified strings in a table that only looks official. Without a successful redeem in the real game, the row is not a reward. This wiki leaves the verified list empty.",
        ],
      },
    ],
  },
  {
    title: "Free Pets From Events",
    intro: ["Event notes are not a promise that every event gives a pet."],
    subsections: [
      {
        title: "How to Check Current Events",
        paragraphs: [
          "Read the updates note for the event that is running, then read the reward line in your session. A pet from an event is listed only after that check. Otherwise the hatch loop is the route.",
        ],
        links: [{ href: "/updates/", label: "Current Updates" }],
      },
      {
        title: "Avoid Outdated Event Claims",
        paragraphs: [
          "Event posts go stale when the window closes or the reward changes. Do not chase a reward the current game no longer shows. If a note and the live screen disagree, the live screen wins.",
        ],
      },
    ],
  },
  {
    title: "How to Avoid Fake Free Pet Offers",
    intro: ["Some search results for pets are not gameplay at all."],
    subsections: [
      {
        title: "Free Pet Generators",
        paragraphs: [
          "A generator is not part of the game. A queue or a human-verification step is an outside tool. This wiki does not host a generator and does not link one.",
        ],
      },
      {
        title: "Account Login Scams",
        paragraphs: [
          "Do not enter Roblox credentials into a site promising free pets. The game runs on Roblox. A login form on another domain is not the hatch screen, and it does not put an egg in your base.",
        ],
      },
      {
        title: "Risky Scripts and Downloads",
        paragraphs: [
          "Do not download an executor, script, or file to receive a pet. This page prints no steps for those offers. Hatch the egg you returned, inside the official experience.",
        ],
      },
    ],
  },
  {
    title: "Best Free-to-Play Progression Tips",
    intro: ["Repeat runs you can finish, and skip unverified unlock numbers."],
    subsections: [
      {
        title: "Choose Reachable Eggs",
        paragraphs: [
          "Return an egg you can finish with your current movement. A completed hatch adds a pet. A failed harder run adds none. Move up only after the easier return is reliable.",
        ],
      },
      {
        title: "Build Reliable Pet Income",
        paragraphs: [
          "A hatched pet can add in-game income for upgrades. Read the value on screen. This guide does not rank pets or promise a free Divine or Eternal result. Use the pet database for records.",
        ],
      },
      {
        title: "Improve Speed Before Chasing Harder Eggs",
        paragraphs: [
          "Train speed when the return is what fails, using the speed and treadmill guide, then retry the same route. No speed number on this page unlocks a pet.",
        ],
        links: [{ href: "/progression/speed-treadmill/", label: "Speed & Treadmill" }],
      },
    ],
  },
];

const faqs: CoreFaq[] = [
  {
    question: "Can you get free pets in Steal An Egg?",
    answer: "Yes. Steal an egg, return it to your base, and hatch it into a pet. That normal gameplay loop is the verified route on this wiki.",
  },
  {
    question: "How do you get pets without Robux?",
    answer: "Use the egg route in the official game: bring an egg back and hatch it. On this page, that play path is the no-Robux route, not every shop offer.",
  },
  {
    question: "Are there free pet codes in Steal An Egg?",
    answer: "No verified active codes currently provide pets on this wiki. The codes page also shows no verified active codes and no verified redemption system.",
  },
  {
    question: "Does Steal An Egg have a free pet generator?",
    answer: "Do not use a generator. This wiki does not endorse a tool that asks for a Roblox login, a download, or a script in exchange for a pet.",
  },
  {
    question: "Can events give free pets?",
    answer: "An event can add rewards. This page names a pet from an event only after that reward is verified. Check the updates page and the live game before you trust an old list.",
  },
  {
    question: "Do you need Robux to hatch a pet?",
    answer: "The verified hatch route is normal play: return an egg to your base and hatch it. This page does not claim that every shop egg is free, and it does not claim the normal hatch itself requires Robux.",
  },
  {
    question: "What is the safest way to get pets?",
    answer: "Steal, return, and hatch inside the official Roblox experience. Skip login pages, generators, and downloads that promise pets.",
  },
  {
    question: "Where can I see all Steal An Egg pets?",
    answer: "The pet database is the index of pet records. This guide does not replace that index.",
  },
];

export default function FreePetsPage() {
  return (
    <CoreSeoPage
      title="Free Pets in Steal An Egg"
      description={description}
      pathname={pathname}
      crumbs={[{ label: "Guide", href: "/guide/" }, { label: "Free Pets" }]}
      intro={[
        "Steal an egg free pets, in normal play, come from a finished run: steal an egg, return it to your base, and hatch it. In this guide, free means that route, a pet obtained without a direct Robux purchase of the pet itself. This page does not invent a free-pet code. A special event or reward route is listed only when this wiki has verified it.",
        "This matches the core loop for Steal An Egg by and Collect Rare Pets, Place ID 107778070777162, without copying the pet index, egg index, or codes page.",
      ]}
      sections={sections}
      faqTitle="Free Pets FAQ"
      faqs={faqs}
      screenshots={[
        {
          label: "Egg-to-pet gameplay",
          filename: "steal-an-egg-free-pets-gameplay.webp",
          description: "Reserved for an original egg-to-pet gameplay capture showing normal pet acquisition.",
        },
      ]}
      related={[
        { href: "/", label: "Steal An Egg Wiki", description: "Game entity and wiki hub." },
        { href: "/guide/", label: "Beginner Guide", description: "The wider hatch and upgrade loop." },
        { href: "/pets/", label: "Pet Database", description: "Individual pet records." },
        { href: "/eggs/", label: "Egg Database", description: "Named egg pages." },
        { href: "/codes/", label: "Codes", description: "Verified code status." },
      ]}
      dataStatus={null}
      showVerificationNotice={false}
      extraSchema={[
        {
          "@type": "Article",
          headline: title,
          description,
          mainEntityOfPage: `https://steal-an-egg.github.io${pathname}`,
          inLanguage: "en",
        },
      ]}
    />
  );
}
