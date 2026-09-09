import { InfoPage } from "@/components/steal-an-egg/InfoPage";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Terms of Service – Steal An Egg Wiki", description: "Review the terms for using the independent Steal An Egg Wiki and its Roblox game guides.", pathname: "/terms-of-service/" });

export default function TermsPage() {
  return <InfoPage title="Terms of Service">
    <section><h2>Informational use</h2><p>This website provides fan-made information and guides on an “as is” basis. Game mechanics can change, and no page guarantees a particular result inside Roblox.</p></section>
    <section><h2>Acceptable use</h2><p>You may use the public guides for personal informational purposes. Do not disrupt the service, misrepresent this fan site as official, or republish substantial original content without permission.</p></section>
    <section><h2>Third-party services</h2><p>Roblox and linked websites are separate services. We are not responsible for their availability, transactions or policies.</p></section>
    <section><h2>Changes</h2><p>These terms may be updated when the site’s features change. Questions can be submitted through our <a href={siteConfig.issuesUrl} target="_blank" rel="noopener noreferrer">GitHub issue form</a>.</p></section>
  </InfoPage>;
}
