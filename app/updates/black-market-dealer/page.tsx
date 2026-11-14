import { ExpansionPage, guideSectionHeading, guideSubheading } from "@/components/steal-an-egg/ExpansionPage";
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
      summary="The Steal an Egg Black Market update introduces Slick Rick. Roblox lists the update window; individual visits have no published schedule."
      lead={(
        <section>
          <h2 className={guideSectionHeading}>Black Market Dealer Event Window</h2>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div><dt className="text-muted-foreground">Listed start (UTC)</dt><dd className="mt-1 font-semibold"><time dateTime="2026-11-14T15:00:58.120Z">Nov 14, 2026 at 15:00</time></dd></div>
            <div><dt className="text-muted-foreground">Listed end (UTC)</dt><dd className="mt-1 font-semibold"><time dateTime="2026-11-16T17:00:58.120Z">Nov 16, 2026 at 17:00</time></dd></div>
          </dl>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">These are the dates on the Roblox listing. They do not tell you when the dealer will be in your server.</p>
          <a className="seo-link mt-3 inline-block" href={eventUrl}>Check the Roblox event listing</a>
        </section>
      )}
      faqTitle="Black Market Dealer FAQ"
      faqs={[
        { question: "Does Slick Rick appear at the listed start time?", answer: "The listed time is when the Roblox event window opens. The preview does not give a time for Slick Rick’s first visit." },
        { question: "Is there a Black Market restock timer?", answer: "The Roblox preview gives no restock schedule, repeat interval or visit length." },
      ]}
      related={[
        { href: "/updates/alien-biome/", label: "Alien Biome update" },
        { href: "/events/cosmic-eclipse/", label: "Cosmic Eclipse schedule" },
        { href: "/eggs/all-eggs/", label: "All Eggs list" },
      ]}
    >
      <section className="space-y-3">
        <h2 className={guideSectionHeading}>Who Is Slick Rick in Steal an Egg?</h2>
        <p>Slick Rick is the Black Market Dealer named in the Roblox event preview. The preview says he comes and goes on his own schedule. It gives no spawn location, so check for an in-game announcement or map marker before traveling to a spot named in an older guide.</p>
        <h3 className={guideSubheading}>How to check for the dealer</h3>
        <p>Use the Roblox event page for changes to the listed dates. Once you join the game, use any dealer prompt you can see in your own session to decide where to go.</p>
      </section>

      <section className="space-y-3">
        <h2 className={guideSectionHeading}>Black Market Items and Prices</h2>
        <p>The event preview does not list any stock, prices, currency or rewards. If you find Slick Rick, check his shop panel for the item name and currency before spending anything.</p>
      </section>
    </ExpansionPage>
  );
}
