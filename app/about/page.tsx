import { InfoPage } from "@/components/steal-an-egg/InfoPage";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "About Steal An Egg Wiki", description: "Learn how the independent Steal An Egg Wiki verifies Roblox game data and builds player-focused guides.", pathname: "/about/" });

export default function AboutPage() {
  return <InfoPage title="About Steal An Egg Wiki">
    <section><h2>Our purpose</h2><p>Steal An Egg Wiki is an independent fan-made guide for the Roblox experience Steal An Egg by and Collect Rare Pets, Place ID 107778070777162. The site organizes eggs, pets, progression, codes and updates into focused pages that are easy for players and search engines to understand.</p></section>
    <section><h2>How we handle game data</h2><p>We do not publish guessed spawn rates, pet income, upgrade costs or codes. Unknown values remain marked for verification until original gameplay evidence or another reliable source is available. Corrections are welcome through our <a href={siteConfig.issuesUrl} target="_blank" rel="noopener noreferrer">GitHub issue form</a>.</p></section>
    <section><h2>Independence</h2><p>This website is not affiliated with Roblox Corporation or and Collect Rare Pets. Game names, trademarks and related assets belong to their respective owners.</p></section>
  </InfoPage>;
}
