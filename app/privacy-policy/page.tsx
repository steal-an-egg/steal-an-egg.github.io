import { InfoPage } from "@/components/steal-an-egg/InfoPage";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Privacy Policy – Steal An Egg Wiki", description: "Read the privacy policy for the independent Steal An Egg Wiki website.", pathname: "/privacy-policy/" });

export default function PrivacyPage() {
  return <InfoPage title="Privacy Policy">
    <section><h2>Information collected</h2><p>This static website does not require an account. Hosting providers may receive standard technical information such as IP address, browser type, device type, referring page and request time.</p></section>
    <section><h2>How information is used</h2><p>Technical and analytics information may be used to secure the site, diagnose errors and understand aggregate site usage. We do not sell personal information.</p></section>
    <section><h2>Google Analytics</h2><p>We use Google Analytics to understand how visitors use this website. Google Analytics may use cookies or similar technologies and process information such as page views, interactions, referring pages, browser and device details, approximate location and visit time. Learn more in the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a> and the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p></section>
    <section><h2>Advertising</h2><p>We use Adsterra to display advertising. Adsterra and its advertising partners may process technical information such as IP address, browser and device information, approximate location, page visits and interactions with advertisements. They may also use cookies, pixels or similar technologies to deliver, limit, personalize and measure advertising. You can learn more in the <a href="https://adsterra.com/privacy-policy-managed" target="_blank" rel="noopener noreferrer">Adsterra Privacy Policy</a> and <a href="https://adsterra.com/cookies/" target="_blank" rel="noopener noreferrer">Cookies Policy</a>.</p></section>
    <section><h2>External services and links</h2><p>Links to Roblox and other external services are governed by those services’ own privacy policies. GitHub Pages may process requests as the site’s hosting provider.</p></section>
    <section><h2>Contact</h2><p>Privacy questions can be submitted through our <a href={siteConfig.issuesUrl} target="_blank" rel="noopener noreferrer">GitHub issue form</a>. Issues are public, so do not include sensitive personal information.</p></section>
  </InfoPage>;
}
