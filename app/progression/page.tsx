import { CoreSeoPage, type CoreSection } from "@/components/steal-an-egg/CoreSeoPage";
import { buildMetadata } from "@/lib/seo";

const title = "Steal An Egg Progression – Upgrades, Speed, Money & Trails";
const description = "Learn Steal An Egg progression on Roblox with upgrades, pet income, Speed, treadmill training, trails, base improvements and strategies to progress faster.";

export const metadata = buildMetadata({ title, description, pathname: "/progression/" });

const sections: CoreSection[] = [
  {
    title: "How Progression Works in Steal An Egg",
    intro: ["Steal An Egg progression is a cycle of safer egg runs, stronger income and carefully timed upgrades. Each improvement should solve a current bottleneck instead of consuming money without making the next run easier."],
    subsections: [
      { title: "The Main Progression Loop", paragraphs: ["Take an egg back to your pen, hatch the pet, collect its income and reinvest that money. Better resources then support harder routes. Repeating this loop is the clearest answer to how to progress in Steal An Egg without relying on unverified shortcuts."] },
      { title: "Why Eggs, Pets and Speed Work Together", paragraphs: ["Eggs supply pets, pets build money and movement speed makes egg runs more manageable. Neglecting any part can slow the whole loop: income funds upgrades, while practical movement helps you return with the eggs that improve your collection."] },
      { title: "What You Should Upgrade First", paragraphs: ["Upgrade the system causing your immediate problem. Improve reliable pet income when money is slow, consider movement when routes feel unsafe, and expand a base or pen only when its verified effect supports your next goal. There is no confirmed universal upgrade order."] },
    ],
  },
  {
    title: "Steal An Egg Progression Route",
    subsections: [
      { title: "Early-Game Progression", paragraphs: ["Start with eggs you can carry home consistently. Early Steal An Egg progression rewards repeatable success more than risky attempts. Hatch useful pets, learn short routes and keep enough money available for the upgrade that removes your first clear limitation."], links: [{ href: "/guide/", label: "Follow the Steal An Egg beginner guide" }] },
      { title: "Mid-Game Progression", paragraphs: ["Once pet income is dependable, compare the value of improving earnings with preparing for longer egg runs. Replace weak contributors gradually and test whether additional movement changes your success rate before investing heavily in secondary systems."] },
      { title: "Later Progression Goals", paragraphs: ["Later goals may include better eggs, a stronger pet lineup and completed upgrades that have verified benefits. Treat these as strategic phases, not official game levels. The best target is the one that advances the current account rather than the rarest visible reward."] },
    ],
  },
  {
    title: "Pet Income and Money Progression",
    subsections: [
      { title: "Build Reliable Pet Income", paragraphs: ["A stable income base keeps Steal An Egg progression moving between egg runs. Favor a lineup that produces dependable money, then use confirmed in-game values to compare pets. The pet database will add exact rates only after each figure can be checked directly."], links: [{ href: "/pets/", label: "Compare verified Steal An Egg pets" }] },
      { title: "When to Replace Lower-Income Pets", paragraphs: ["Replace a lower-income pet when a verified alternative improves your lineup without emptying the resources needed for the next step. Keep useful earners active until a real replacement is ready; rarity alone does not prove a better income result."] },
      { title: "How to Reinvest Your Money", paragraphs: ["Spend money where it creates the clearest return: steadier pet income, a more practical egg route or a confirmed capacity improvement. Preserve a buffer when the next upgrade is uncertain, and avoid assuming that the most expensive option is automatically efficient."], links: [{ href: "/calculator/", label: "Plan an upgrade with the Steal An Egg Calculator" }] },
    ],
  },
  {
    title: "Egg Progression",
    subsections: [
      { title: "Start With Safer Eggs", paragraphs: ["Consistent deliveries create more hatching opportunities and teach the map. A safe egg can advance Steal An Egg progression faster than repeated failed attempts at a distant target. Use the egg hub to organize verified locations, costs and hatch information."], links: [{ href: "/eggs/", label: "Open the Steal An Egg eggs guide" }] },
      { title: "Move Toward Better Eggs", paragraphs: ["Step up when your current pets, route knowledge and movement make the next egg realistically repeatable. Better should mean a confirmed improvement for your lineup, not simply a different appearance or an unverified community label."] },
      { title: "When to Chase Rare Eggs", paragraphs: ["Consider rare eggs after basic income is stable and your route no longer depends on perfect luck. Check the dedicated rarity guide for verified evidence, then decide whether the expected opportunity is worth pausing routine progression."], links: [{ href: "/eggs/rare-eggs/", label: "Plan a rare egg attempt" }] },
    ],
  },
  {
    title: "Speed and Treadmill Progression",
    subsections: [
      { title: "Why Speed Matters", paragraphs: ["Movement supports travel, positioning and safer returns, but it is one part of the overall upgrade plan. This overview explains its role without competing with the dedicated movement guide or claiming an unverified required level."] },
      { title: "When to Train Speed", paragraphs: ["Train when movement is a demonstrated bottleneck in your chosen route and your pet income can support the time or money involved. Test the result during ordinary egg runs before assuming more training is always the best purchase."] },
      { title: "When to Upgrade Your Treadmill", paragraphs: ["Only compare a treadmill upgrade after its price and effect are visible in the current game. Balance that verified benefit against income and base improvements; no treadmill cost, multiplier or maximum level is confirmed here."], links: [{ href: "/progression/speed-treadmill/", label: "Read the Complete Steal An Egg Speed & Treadmill Guide" }] },
    ],
  },
  {
    title: "Base and Pen Upgrades",
    subsections: [
      { title: "How Base Upgrades Help Progression", paragraphs: ["Base improvements should be evaluated by the exact limitation they remove. A useful Steal An Egg upgrade guide records the displayed cost, the effect seen after purchase and the game version checked before recommending it."] },
      { title: "When to Upgrade Your Pen", paragraphs: ["Upgrade a pen when its confirmed effect is relevant to the pets or eggs you already use. Pen capacity, cost and benefits remain marked for in-game verification, so this guide does not infer mechanics from icons or similar Roblox games."] },
      { title: "Avoid Overspending Too Early", paragraphs: ["Do not drain all money into a base upgrade whose value is unclear. Keep the core loop active, verify what changes after a purchase and compare that outcome with a pet-income improvement before committing additional resources."] },
    ],
  },
  {
    title: "Trails and Other Progression Systems",
    subsections: [
      { title: "How Trails Fit Into Progression", paragraphs: ["Trails belong to the broader Steal An Egg progression map, but their gameplay effect has not been verified for this wiki. Treat them as an optional system until direct evidence shows whether a trail changes movement, earnings or only appearance."] },
      { title: "When to Spend on Secondary Upgrades", paragraphs: ["Fund secondary upgrades after the main egg-and-pet loop is reliable. Check the actual interface and observed result first, then spend only when the purchase supports a clear goal or an optional cosmetic is personally worthwhile."] },
      { title: "Offline Earnings", paragraphs: ["Offline earnings may influence how often upgrades become affordable, but no rate, cap or collection rule is confirmed. Record the time away, displayed reward and relevant pets before using that result for future money-guide comparisons."] },
    ],
  },
  {
    title: "Best Steal An Egg Progression Strategy",
    subsections: [
      { title: "Balance Income and Speed", paragraphs: ["Income funds the account while movement supports the route. A balanced strategy improves whichever side currently limits successful egg returns. Recheck after each meaningful upgrade because a solved route problem can make money the next bottleneck."] },
      { title: "Upgrade Before Chasing Harder Eggs", paragraphs: ["Prepare before attempting a route that repeatedly fails. A modest income, movement or confirmed pen improvement can turn a high-risk run into a repeatable one, which is more valuable for long-term Steal An Egg progression."] },
      { title: "Avoid Progression Bottlenecks", paragraphs: ["Watch for idle money, weak pet income, unsafe routes and purchases with no measured effect. Address one bottleneck at a time, test the result in normal play and keep notes so the next choice is based on evidence."] },
    ],
  },
  {
    title: "Common Progression Mistakes",
    subsections: [
      { title: "Spending Everything on One Upgrade", paragraphs: ["A single upgrade can leave the rest of the loop underfunded. Confirm its effect and retain enough flexibility to hatch, replace pets or respond when another system becomes the actual constraint."] },
      { title: "Ignoring Pet Income", paragraphs: ["Movement alone does not finance later purchases. Maintain useful pets and verify their income so training and base decisions rest on a healthy economy instead of a brief windfall."] },
      { title: "Chasing Rare Eggs Too Early", paragraphs: ["Repeated high-risk attempts can delay safer gains. Establish routine egg returns first, then use verified rarity and route information to decide when a rare target makes strategic sense."] },
      { title: "Neglecting Speed Training", paragraphs: ["If movement consistently prevents successful returns, ignoring it can stall progress. Train deliberately, measure the improvement and stop when another upgrade would offer more practical value."] },
    ],
  },
];

export default function ProgressionPage() {
  return (
    <CoreSeoPage
      title="Steal An Egg Progression"
      description={description}
      pathname="/progression/"
      crumbs={[{ label: "Progression" }]}
      intro={[
        "Steal An Egg progression connects every successful egg run to stronger pets, better income and more practical upgrades. This progression guide focuses on decisions you can make without inventing costs, levels or effects.",
        "Use it as an overall route for money, base improvements, pen upgrades, trails and upgrade priorities. The separate movement and treadmill page covers training in greater depth.",
      ]}
      sections={sections}
      faqTitle="Steal An Egg Progression FAQ"
      faqs={[
        { question: "What is the fastest way to progress in Steal An Egg?", answer: "Build repeatable egg runs, keep useful pets earning money and spend on the verified upgrade that removes your current bottleneck. No single shortcut is confirmed for every account." },
        { question: "What should you upgrade first?", answer: "Start with the system limiting your next reliable gain. That may be pet income, movement or a confirmed base or pen benefit; compare the actual result rather than price alone." },
        { question: "When should you train Speed?", answer: "Train movement when a useful egg route repeatedly feels unsafe or inefficient and your income can support the investment." },
        { question: "How do pets help progression?", answer: "Pets provide income that can fund later upgrades. Exact earnings should be checked in game and recorded in the pet database before making numerical comparisons." },
        { question: "When should you start going after rare eggs?", answer: "Try rare eggs after your routine income is stable, you understand the route and the attempt will not stop all other progression." },
        { question: "Are trails important for progression?", answer: "A verified gameplay effect for trails is not documented yet. Treat them as secondary until an in-game check confirms what they change." },
      ]}
      screenshots={[
        { label: "Progression Overview", filename: "steal-an-egg-progression.webp", description: "Overall progression interface." },
        { label: "Pet Income", filename: "steal-an-egg-pet-income.webp", description: "Verified income display." },
        { label: "Base / Pen", filename: "steal-an-egg-pen-upgrades.webp", description: "Base or pen upgrade interface." },
        { label: "Trails", filename: "steal-an-egg-trails.webp", description: "Trail system interface." },
        { label: "Upgrade Screenshots", filename: "steal-an-egg-upgrades.webp", description: "Upgrade costs and effects." },
      ]}
      related={[
        { href: "/guide/", label: "Beginner Guide", description: "Learn the complete starting loop." },
        { href: "/eggs/", label: "Eggs", description: "Review verified egg data." },
        { href: "/eggs/rare-eggs/", label: "Rare Eggs", description: "Prepare for rarer targets." },
        { href: "/pets/", label: "Pets", description: "Compare income roles." },
        { href: "/progression/speed-treadmill/", label: "Speed & Treadmill", description: "Open the movement guide." },
      ]}
      maxParagraphsPerSubsection={1}
      maxIntroParagraphs={2}
    />
  );
}
