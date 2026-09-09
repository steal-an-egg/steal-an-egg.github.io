import { InfoPage } from "@/components/steal-an-egg/InfoPage";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Contact Steal An Egg Wiki", description: "Contact Steal An Egg Wiki with corrections, verified game data and website feedback.", pathname: "/contact/" });

export default function ContactPage() {
  return <InfoPage title="Contact Steal An Egg Wiki">
    <section><h2>Corrections and verified data</h2><p>Submit corrections, original screenshots, recordings or verified game data through our <a href={siteConfig.issuesUrl} target="_blank" rel="noopener noreferrer">GitHub issue form</a>. Include the relevant wiki page, the exact in-game wording and enough context to identify the Roblox experience.</p></section>
    <section><h2>Copyright concerns</h2><p>If you own material displayed on this website and want it reviewed, open a GitHub issue with a description of the work, the page URL and your preferred resolution. GitHub issues are public, so do not include private personal information.</p></section>
  </InfoPage>;
}
