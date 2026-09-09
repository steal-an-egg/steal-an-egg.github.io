import { CoreSeoPage, type CoreSection } from "@/components/steal-an-egg/CoreSeoPage";
import { contentDates } from "@/lib/content-dates";
import { buildMetadata } from "@/lib/seo";

const title = `Steal An Egg Codes (${contentDates.codesMonthYear}) – Active & Working Codes`;
const description = `Check the latest Steal An Egg codes for Roblox, including active and working codes, redemption steps, expired codes and the latest code status for ${contentDates.codesMonthYear}.`;

export const metadata = buildMetadata({ title, description, pathname: "/codes/" });

const sections: CoreSection[] = [
  {
    title: "Active Steal An Egg Codes",
    intro: [
      "There are currently no verified active Steal An Egg codes. No active codes will be listed until their exact text, reward and result have been checked in this Roblox game.",
      `Last Checked: ${contentDates.codesLastChecked}. An empty verified list is more useful than copied or invented entries that waste a player's time.`,
    ],
    subsections: [],
  },
  {
    title: "Steal An Egg Codes List",
    intro: ["The list separates confirmed working codes from entries that have genuinely expired. Both sections are empty until evidence is available, and the latest codes will be tested before publication."],
    subsections: [
      {
        title: "Working Codes",
        paragraphs: ["No working codes or active codes are verified at this time. Future rows will show the exact entry, its confirmed reward, current status and the most recent successful test date."],
        table: { caption: "Active Steal An Egg codes", columns: ["Code", "Reward", "Status", "Last Verified"], rows: [["No verified code", "Not applicable", "Empty state", contentDates.codesLastChecked]] },
      },
      {
        title: "Expired Codes",
        paragraphs: ["No expired codes are verified either. An entry will move here only after it was previously confirmed and later stopped working, or reliable first-party evidence clearly marks it as expired."],
        table: { caption: "Expired Steal An Egg codes", columns: ["Code", "Reward", "Status", "Last Verified"], rows: [["No verified expired code", "Not applicable", "Empty state", contentDates.codesLastChecked]] },
      },
    ],
  },
  {
    title: "How to Redeem Codes in Steal An Egg",
    intro: ["We have not verified an in-game code redemption system yet. The steps below explain what still needs confirmation rather than pretending that a button or menu exists."],
    subsections: [
      { title: "Where to Find the Codes Button", paragraphs: ["No Codes button has been confirmed in the current evidence supplied to this wiki. If a redemption interface appears, we will identify its exact location with an original gameplay screenshot before giving navigation instructions."] },
      { title: "How to Enter a Code", paragraphs: ["A valid entry field and redeem action have not been verified, so there is no trustworthy step-by-step sequence to publish yet. Never enter account credentials or personal information on a third-party page claiming to redeem Roblox codes."] },
    ],
  },
  {
    title: "Does Steal An Egg Have Codes?",
    intro: [
      "A functioning redemption system has not been verified for Steal An Egg. That is different from claiming the game will never support one: it describes only the evidence available on the last-checked date.",
      "This page monitors both the interface and individual entries. If either changes, the direct answer, tables, metadata month and verification date will be updated together with the latest codes status.",
    ],
    subsections: [],
  },
  {
    title: "Where New Steal An Egg Codes May Appear",
    intro: [
      "Check only sources that can reasonably be tied to the game. We do not invent an official Discord, social account or developer announcement schedule.",
      "Useful places include the official Roblox game page, community channels linked from that page and in-game notices. Any string found elsewhere remains unverified until it can be redeemed successfully in Steal An Egg.",
    ],
    subsections: [],
  },
  {
    title: "Why a Steal An Egg Code May Not Work",
    intro: ["These are general checks for a future verified redemption system. They do not prove that the current game has this feature or that active codes exist."],
    subsections: [
      { title: "The Code Has Expired", paragraphs: ["A previously working code may stop accepting redemptions. Confirm the code had once been tested before calling it expired, then preserve its last known reward and verification date for an accurate history."] },
      { title: "The Code Was Entered Incorrectly", paragraphs: ["If a real redemption field is confirmed, copy the code exactly and check spaces, punctuation and capitalization. Do not repeatedly test a string that never came from a reliable source."] },
      { title: "The Code Is Not Verified", paragraphs: ["Many lists repeat speculative or fabricated strings. If the code, reward and successful result cannot be reproduced in the correct Roblox experience, it should not appear as an active code on this page."] },
    ],
  },
];

export default function CodesPage() {
  return (
    <CoreSeoPage
      title="Steal An Egg Codes"
      description={description}
      pathname="/codes/"
      crumbs={[{ label: "Codes" }]}
      intro={[
        "There are currently no verified active Steal An Egg codes.",
        `Last Checked: ${contentDates.codesLastChecked}. This page reports evidence directly and will not invent active codes, rewards or a redemption menu.`,
      ]}
      sections={sections}
      faqTitle="Steal An Egg Codes FAQ"
      faqs={[
        { question: "Are there any active Steal An Egg codes?", answer: `There are currently no verified Steal An Egg active codes. The list was last checked on ${contentDates.codesLastChecked}.` },
        { question: "Does Steal An Egg have a code system?", answer: "An in-game code system has not been verified yet. This page will change its status only after the redemption interface is confirmed in the correct Roblox game." },
        { question: "How do you redeem codes in Steal An Egg?", answer: "We cannot provide reliable redemption steps because a codes button and entry field have not been verified. Instructions will be added after original gameplay evidence is available." },
        { question: "Where can I find new Steal An Egg codes?", answer: "Monitor the official Roblox game page, first-party community links found there and in-game announcements. Treat third-party lists as unverified until each code works in game." },
        { question: "How often is this codes page updated?", answer: "The page is checked when credible code or game-interface information becomes available. The visible Last Checked date shows the freshness of the current status." },
      ]}
      screenshots={[
        { label: "Code UI Screenshot — Not Verified", filename: "steal-an-egg-codes.webp", description: "Add only after a genuine redemption interface is confirmed." },
      ]}
      related={[
        { href: "/", label: "Steal An Egg Wiki", description: "Return to the site overview." },
        { href: "/updates/", label: "Latest Updates", description: "Check verified game changes." },
        { href: "/guide/", label: "Beginner Guide", description: "Progress without unverified codes." },
      ]}
      maxParagraphsPerSubsection={1}
      maxIntroParagraphs={2}
      showRelatedDescriptions={false}
    />
  );
}
