import { ExpansionPage, guideSectionHeading, guideSubheading } from "@/components/steal-an-egg/ExpansionPage";
import { buildMetadata } from "@/lib/seo";

const pathname = "/events/cosmic-eclipse/";
const title = "Steal an Egg Cosmic Eclipse Schedule & Event Guide";
const description = "Check the reported Cosmic Eclipse times in Steal an Egg, how to reach the Alien Lagoon, and what to watch for when fishing for Nebuloth Kraken.";

export const metadata = buildMetadata({ title, description, pathname });

export default function CosmicEclipsePage() {
  return (
    <ExpansionPage
      title="Steal an Egg Cosmic Eclipse Schedule & Guide"
      description={description}
      pathname={pathname}
      crumbs={[{ label: "Guide", href: "/guide/" }, { label: "Cosmic Eclipse" }]}
      summary="Cosmic Eclipse in Steal an Egg is a fishing event in the Alien Lagoon. Update 12 gameplay reports put its starts at :25 and :55 UTC each hour."
      lead={(
        <section>
          <h2 className={guideSectionHeading}>When Is the Next Cosmic Eclipse?</h2>
          <p className="mt-3 text-lg font-semibold text-foreground">Reported starts: :25 and :55 past every hour (UTC)</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Pick the next slot on a UTC clock. After 14:25 UTC, the next slot is 14:55; after 14:55, it’s 15:25. Check the in-game timer before you cast, especially after a patch.</p>
        </section>
      )}
      faqTitle="Cosmic Eclipse FAQ"
      faqs={[
        { question: "How long does Cosmic Eclipse last?", answer: "Update 12 gameplay reports describe a five-minute round. Use the remaining time shown in the Alien Lagoon; the Kraken pool may run out sooner." },
        { question: "Do :25 and :55 also apply in my time zone?", answer: "They match the minute marks in zones offset from UTC by whole hours. If your offset includes minutes, convert from UTC first. For example, 14:25 UTC is 19:55 in India." },
        { question: "Is Cosmic Eclipse the same as the Alien Tidal Surge?", answer: "No. Use the Cosmic Eclipse notice when looking for the Nebuloth Kraken round in the Alien Lagoon." },
      ]}
      related={[
        { href: "/updates/alien-biome/", label: "Alien Biome update" },
        { href: "/updates/black-market-dealer/", label: "Black Market event window" },
        { href: "/eggs/all-eggs/", label: "All Eggs list" },
      ]}
    >
      <section className="space-y-3">
        <h2 className={guideSectionHeading}>Where to Go During Cosmic Eclipse</h2>
        <p>Head to the Alien Lagoon before the next round. In the reported Update 12 route, you catch 20 fish with the Alien Rod and then use the Alien Ferryman to reach the lagoon. Read the Ferryman’s current prompt to check your progress.</p>
        <h3 className={guideSubheading}>What to do when the round starts</h3>
        <p>Fish in the lagoon once the game announces Cosmic Eclipse. Watch the counter for remaining Kraken catches alongside the time left.</p>
      </section>
      <section className="space-y-3">
        <h2 className={guideSectionHeading}>Cosmic Eclipse Rewards</h2>
        <p>The round is a chance to catch the Divine Nebuloth Kraken. Update 12 reports describe 750 catches shared across the whole game per round. If the counter is empty, wait for the next round.</p>
        <p>Source: <a className="seo-link" href="https://eggping.com/events/cosmic-eclipse">Update 12 gameplay notes and Alien Lagoon captures</a>.</p>
      </section>
    </ExpansionPage>
  );
}
