import { InfoPage } from "@/components/steal-an-egg/InfoPage";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Copyright – Steal An Egg Wiki", description: "Copyright and fan-site information for Steal An Egg Wiki.", pathname: "/copyright/" });

export default function CopyrightPage() {
  return <InfoPage title="Copyright">
    <section><h2>Fan-made resource</h2><p>Steal An Egg Wiki is independently created for commentary, education and game guidance. It is not affiliated with Roblox Corporation or and Collect Rare Pets.</p></section>
    <section><h2>Rights holders</h2><p>Roblox, game names, trademarks and official game assets remain the property of their respective owners. Original site text, organization and custom graphics are protected by their applicable rights.</p></section>
    <section><h2>Requests</h2><p>For a copyright review, open a <a href={siteConfig.issuesUrl} target="_blank" rel="noopener noreferrer">GitHub issue</a> with the work, page URL and evidence of ownership or authorization. Issues are public, so do not include sensitive personal information.</p></section>
  </InfoPage>;
}
