import { CoreSeoPage, type CoreFaq, type CoreSection } from "@/components/steal-an-egg/CoreSeoPage";
import { StealAnEggCalculator } from "@/components/steal-an-egg/StealAnEggCalculator";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

const title = "Steal An Egg Calculator – Income, Runs & Upgrade Planner";
const description = "Use the Steal An Egg calculator to estimate pet income, time to afford upgrades, and possible egg runs using values you enter from your Roblox game.";

export const metadata = buildMetadata({ title, description, pathname: "/calculator/" });

const sections: CoreSection[] = [
  {
    title: "How the Steal An Egg Calculator Works",
    intro: ["The Steal An Egg calculator is a planning tool, not a source of hidden game data. It uses arithmetic on the values you enter from your own session, so the estimate stays clear even when an update changes a pet, an upgrade, or the route you are testing."],
    subsections: [
      { title: "Transparent Formulas", paragraphs: ["For an upgrade goal, the calculator subtracts current cash from target cost and never returns less than zero. It divides the remaining amount by your current income per second to estimate time, then adds your income across the session length to project cash. For runs, it removes the safety buffer and counts only whole round trips."], bullets: ["Cash still needed = max(0, target cost − current cash)", "Time to goal = remaining cash ÷ income per second", "Projected cash = current cash + income per second × session minutes × 60", "Full runs = floor(available seconds ÷ round-trip seconds)"] },
      { title: "Values You Enter Yourself", paragraphs: ["Enter the cash, income, upgrade cost, and timing that you can see in the current game. The tool does not provide a pet database, use a gamepass multiplier, or assume offline earnings. This makes it useful for any visible lineup and keeps the result tied to the actual values in your Roblox session."], links: [{ href: "/pets/", label: "Review Steal An Egg Pets" }] },
      { title: "What the Calculator Does Not Assume", paragraphs: ["The calculator does not know which egg will spawn, what will hatch, a pet’s base rate, an upgrade’s hidden effect, or a route’s competition. It will not promise a Divine Egg or a particular pet. Use it to plan time and repeatable runs, then verify the game-specific result where you play."], links: [{ href: "/eggs/spawn-predictor/", label: "Use the separate Spawn Predictor" }] },
    ],
  },
  {
    title: "How to Use the Calculator for Progression",
    intro: ["Good planning turns a visible income number and a target price into a concrete next step. You can use one short session to decide whether to save, make a movement upgrade, or test a route without treating an estimate as an official game mechanic."],
    subsections: [
      { title: "Plan Your Next Upgrade", paragraphs: ["Copy your current cash and the price shown for the upgrade into the first calculator. Add your visible income per second to see the shortfall and estimated wait. If the result feels too long, do not assume the tool is wrong; compare whether a different reliable pet or route could change the actual income you entered."], links: [{ href: "/progression/", label: "Read the Steal An Egg Progression Guide" }] },
      { title: "Compare Farming Sessions", paragraphs: ["Use the same inputs for two realistic session lengths to see how each one affects projected cash. Keep boosts, pet changes, and server changes in mind when you compare. The calculator can show the arithmetic difference, while your live selected-pet panel explains whether the income rate itself changed."], links: [{ href: "/pets/best-pets/", label: "Compare Best Pets in Steal An Egg" }] },
      { title: "Track Whether Faster Runs Help", paragraphs: ["Estimate a route with your usual round-trip time, then repeat the calculation after a movement change. Whole runs are deliberately conservative: a partial route is not counted as a completed egg return. Add a safety buffer for navigation, player traffic, or anything else that makes the session less predictable."], links: [{ href: "/progression/speed-treadmill/", label: "Open the Speed and Treadmill Guide" }] },
    ],
  },
  {
    title: "Calculator Accuracy and Limitations",
    intro: ["An estimate is as current as the values supplied to it. The calculator is accurate for its displayed arithmetic, but it cannot validate an in-game number, detect a temporary boost, or see whether the source and route remain available after an update."],
    subsections: [
      { title: "Use Current In-Game Values", paragraphs: ["Read your current cash, income, target price, and route timing in the game just before planning. If a pet has a mutation, size change, or temporary bonus, enter the value you actually see and note that context for your own comparison. This prevents a general guide value from overriding the session you are playing."], links: [{ href: "/guide/", label: "Follow the complete Steal An Egg Guide" }] },
      { title: "Recalculate After Game Updates", paragraphs: ["Re-enter values whenever a patch changes a source, pet, upgrade, or route. The calculator intentionally has no saved game database, so it does not carry an old assumption into a new build. A fresh estimate is quick and better reflects the visible information available now."], links: [{ href: "/updates/", label: "Check Steal An Egg updates" }] },
      { title: "Estimates vs Hidden Game Mechanics", paragraphs: ["No calculation here claims official hatch odds, spawn intervals, offline earnings, or secret multipliers. A goal time is simply remaining visible cost divided by entered visible income. An egg-run estimate is simply the number of whole trips that fit inside entered time. Treat both as a plan, then adjust from what happens in your server."], links: [{ href: "/eggs/rare-eggs/", label: "Review rare-egg evidence" }] },
    ],
  },
  {
    title: "Privacy and Local Calculation",
    intro: ["This Steal An Egg calculator runs in your browser. The numbers you type are used to update the displayed estimate and are not uploaded to a game server, an account, or a calculator database."],
    subsections: [
      { title: "Your Inputs Stay Local", paragraphs: ["Current cash, income, costs, and timing remain in the page state on your device while you use the tool. You do not need to sign in or connect a Roblox account. Refreshing or leaving the page clears the values, which is useful when you want to start a different plan."], },
      { title: "Friendly Input Checks", paragraphs: ["Blank fields ask for the values needed for that result. Zero is allowed where it makes sense, while zero income and zero round-trip time display a clear message instead of Infinity. Negative, non-numeric, and unusually formatted values are rejected with a prompt to enter zero or a positive number."], },
      { title: "A Tool for Planning, Not Automation", paragraphs: ["The calculator cannot play, purchase, steal, or farm on your behalf. It is a simple planner for comparing your own visible values and setting a more realistic next-session goal. That keeps the result transparent and useful across different account states."], links: [{ href: "/", label: "Return to Steal An Egg Wiki" }] },
    ],
  },
];

const faqs: CoreFaq[] = [
  { question: "What does the Steal An Egg calculator calculate?", answer: "It estimates cash still needed, time to afford an upgrade, projected session cash, and whole egg runs using the values you enter." },
  { question: "Is the Steal An Egg calculator accurate?", answer: "Its arithmetic is accurate for your inputs. Use current visible game values because the tool cannot detect changes, boosts, or hidden mechanics." },
  { question: "How do I calculate time to afford an upgrade?", answer: "Subtract current cash from target cost, then divide the remaining amount by current income per second. The tool does this automatically when both values are valid." },
  { question: "How do I calculate pet income?", answer: "Enter the income per second displayed for your current setup and a session length. The calculator multiplies income by session seconds and adds current cash." },
  { question: "How many egg runs can I do in a session?", answer: "Enter session minutes, average round-trip seconds, and an optional safety buffer. The calculator counts the whole runs that fit in the remaining active time." },
  { question: "Does the calculator use official hatch odds?", answer: "No. It uses no hatch odds, spawn rates, pet database, or hidden multiplier. All estimates come from values you enter." },
  { question: "Does the calculator save or upload my data?", answer: "No. Inputs are used locally in the browser for the current calculation and are not uploaded or tied to an account." },
];

export default function CalculatorPage() {
  return <CoreSeoPage title="Steal An Egg Calculator" description={description} pathname="/calculator/" crumbs={[{ label: "Calculator" }]} intro={["Use the Steal An Egg calculator to turn the current values you can see in Roblox into a simple plan. Estimate how long an upgrade may take, project cash after a session, and work out how many complete egg runs fit before you play.", "The calculator is intentionally transparent: it only uses the cash, income, cost, session length, round-trip time, and safety buffer you enter. It does not connect to Roblox or claim official hatch odds, hidden multipliers, spawn schedules, or pet values."]} leadContent={<StealAnEggCalculator />} sections={sections} faqTitle="Steal An Egg Calculator FAQ" faqs={faqs} screenshots={[{ label: "Local browser tool", filename: "steal-an-egg-calculator-local-tool", description: "No gameplay screenshot is needed; enter current values from your own session." }]} related={[{ href: "/", label: "Steal An Egg Wiki", description: "Return to the main resource hub." }, { href: "/progression/", label: "Steal An Egg Progression", description: "Choose a practical next upgrade." }, { href: "/progression/speed-treadmill/", label: "Steal An Egg Speed Guide", description: "Improve a route bottleneck." }, { href: "/pets/", label: "Steal An Egg Pets", description: "Review pet and income context." }, { href: "/pets/best-pets/", label: "Best Pets in Steal An Egg", description: "Compare progression value." }, { href: "/eggs/spawn-predictor/", label: "Steal An Egg Spawn Predictor", description: "Plan from your own spawn observations." }]} dataStatus={null} screenshotHeading="Plan with your own current values" screenshotDescription="This calculator does not need a Roblox account, live-server connection, or gameplay screenshot. It uses only the numbers you enter in this browser." extraSchema={[{ "@type": "WebApplication", "@id": `${siteConfig.url}/calculator/#webapplication`, name: "Steal An Egg Calculator", url: `${siteConfig.url}/calculator/`, applicationCategory: "UtilitiesApplication", operatingSystem: "Any", browserRequirements: "Requires JavaScript", isPartOf: { "@id": `${siteConfig.url}/#website` }, about: { "@id": `${siteConfig.url}/#game` }, description, featureList: ["Income and upgrade goal estimates from user-entered values", "Session cash projection", "Whole egg-run planner with optional safety buffer", "Local browser calculation without account connection"] }]} showVerificationNotice={false} showSectionIntros={false} showRelatedDescriptions={false} maxIntroParagraphs={99} maxParagraphsPerSubsection={99} />;
}
