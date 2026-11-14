import Link from "next/link";
import { ExpansionPage, guideSectionHeading } from "@/components/steal-an-egg/ExpansionPage";
import { buildMetadata } from "@/lib/seo";

const pathname = "/updates/black-market-dealer/";
const title = "Steal an Egg Black Market Dealer & Slick Rick Guide";
const description = "See the Roblox event window for the Steal an Egg Black Market Dealer update, who Slick Rick is, and what the preview says about finding him.";
const eventUrl = "https://www.roblox.com/events/4694194470221120266";

export const metadata = buildMetadata({ title, description, pathname });

export default function BlackMarketDealerPage() {
  return (
    <ExpansionPage
      title="Steal an Egg Black Market Dealer & Slick Rick"
      description={description}
      pathname={pathname}
      crumbs={[{ label: "Updates", href: "/updates/" }, { label: "Black Market Dealer" }]}
      summary="Slick Rick is the dealer in the Steal an Egg Black Market update. Roblox lists the event window. For an individual visit, look for a notice or interaction prompt that names him in your server."
      lead={(
        <section>
          <h2 className={guideSectionHeading}>Black Market Dealer Event Window</h2>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div><dt className="text-muted-foreground">Listed start (UTC)</dt><dd className="mt-1 font-semibold"><time dateTime="2026-11-14T15:00:58.120Z">Nov 14, 2026 at 15:00</time></dd></div>
            <div><dt className="text-muted-foreground">Listed end (UTC)</dt><dd className="mt-1 font-semibold"><time dateTime="2026-11-16T17:00:58.120Z">Nov 16, 2026 at 17:00</time></dd></div>
          </dl>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">Roblox gives start and end times for the update. The listing gives no schedule for Slick Rick’s visits.</p>
          <a className="seo-link mt-3 inline-block" href={eventUrl}>Check the Roblox event listing</a>
        </section>
      )}
      faqTitle="Black Market Dealer FAQ"
      faqs={[
        { question: "When does Slick Rick appear?", answer: "The preview gives no time for his first visit or any later visits. Check your server for a notice naming him." },
        { question: "Is there a Black Market restock timer?", answer: "Roblox lists no restock interval. Follow a refresh timer if the open shop displays one." },
        { question: "Where is the Black Market Dealer?", answer: "The event preview gives no location. Follow a current marker if the game shows one for Slick Rick." },
        { question: "Does the Black Market use a special currency?", answer: "The preview names no currency. Check the label next to the price in the shop." },
        { question: "Are Black Market items always the same?", answer: "The preview gives no rotation policy. Read the stock shown for your visit before planning what to buy." },
        { question: "Can Slick Rick appear after the event ends?", answer: "Roblox gives the listing’s end date. The preview leaves availability after that date open." },
      ]}
      related={[
        { href: "/updates/alien-biome/", label: "Alien Biome update" },
        { href: "/events/cosmic-eclipse/", label: "Cosmic Eclipse schedule" },
        { href: "/eggs/all-eggs/", label: "All Eggs list" },
      ]}
    >
      <section className="space-y-3">
        <h2 className={guideSectionHeading}>How the Black Market Dealer Works</h2>
        <p>The Roblox preview describes Slick Rick as an occasional visitor. The start time tells you when Roblox has scheduled the update to open. His arrival and how long he stays are separate details that the listing leaves open.</p>
      </section>

      <section className="space-y-3">
        <h2 className={guideSectionHeading}>Where to Look for Slick Rick</h2>
        <p>When you join, scan the server announcements. If you see Slick Rick named in a notice, follow any directions or matching map marker the game displays. A location shown in an older guide may reflect a previous visit or update.</p>
      </section>

      <section className="space-y-3">
        <h2 className={guideSectionHeading}>What to Check When the Dealer Appears</h2>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Confirm that the interaction or shop panel names Slick Rick or the Black Market Dealer.</li>
          <li>Look for an in-stock item, then check its price and the currency next to it.</li>
          <li>Read any purchase limit, refresh notice or time remaining shown on that panel.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className={guideSectionHeading}>Black Market Items and Prices</h2>
        <p>The Roblox event preview has no item or price list. An older screenshot only records what its player saw at the time. Check the current offer before saving or spending currency, since prices and availability may change with updates.</p>
      </section>

      <section className="space-y-3">
        <h2 className={guideSectionHeading}>Black Market Dealer vs Regular Egg Sources</h2>
        <p>The Black Market depends on a visit from Slick Rick. For eggs tied to a biome, shop, or reward, use the <Link href="/eggs/all-eggs/" className="seo-link">All Eggs list</Link> to check the documented source.</p>
      </section>
    </ExpansionPage>
  );
}
