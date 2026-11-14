import { ExpansionPage, guideSectionHeading } from "@/components/steal-an-egg/ExpansionPage";
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
      summary="The Steal an Egg Cosmic Eclipse is a fishing event in the Alien Lagoon. Go there to try for the Divine Nebuloth Kraken."
      lead={(
        <section>
          <h2 className={guideSectionHeading}>When Is the Next Cosmic Eclipse?</h2>
          <p className="mt-3 text-lg font-semibold text-foreground">Reported starts: :25 and :55 past every hour (UTC)</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Find the next slot on a UTC clock, then convert it to your local time. Use the in-game timer to confirm the start, especially after a patch.</p>
        </section>
      )}
      faqTitle="Cosmic Eclipse FAQ"
      faqs={[
        { question: "When is the next Cosmic Eclipse?", answer: "Use the next :25 or :55 slot in UTC. After :55, use :25 of the following hour." },
        { question: "How often does Cosmic Eclipse start?", answer: "Update 12 reports two starts per hour, 30 minutes apart." },
        { question: "How long does Cosmic Eclipse last?", answer: "The reported round lasts five minutes. Check the displayed time left when you arrive." },
        { question: "Where does Cosmic Eclipse happen?", answer: "Fish in the Alien Lagoon, reached by taking the Alien Ferryman’s boat." },
        { question: "How do I unlock Alien Lagoon?", answer: "Complete the Ferryman’s 20-catch task with the Alien Rod, then speak to him again." },
        { question: "What can I catch during Cosmic Eclipse?", answer: "The featured catch is Nebuloth Kraken, a Divine pet. Availability depends on the shared round counter." },
        { question: "Is Cosmic Eclipse the same as Alien Tidal Surge?", answer: "They have separate notices. Look for Cosmic Eclipse if you’re fishing for Nebuloth Kraken." },
      ]}
      related={[
        { href: "/updates/alien-biome/", label: "Alien Biome update" },
        { href: "/updates/black-market-dealer/", label: "Black Market event window" },
        { href: "/eggs/all-eggs/", label: "All Eggs list" },
      ]}
    >
      <section className="space-y-3">
        <h2 className={guideSectionHeading}>Cosmic Eclipse Schedule</h2>
        <p>At 14:40 UTC, plan for 14:55. At 14:56 UTC, the next start is 15:25, although the 14:55 round may still be running.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>14:25 and 14:55 UTC are 19:55 and 20:25 in India (UTC+5:30).</li>
          <li>The same starts are 23:25 and 23:55 in Japan (UTC+9).</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className={guideSectionHeading}>How to Reach the Alien Lagoon</h2>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Check the Alien biome entrance for the current access requirement. Inside, get the Alien Rod from the Ferryman by the water.</li>
          <li>Equip the rod and catch 20 fish. Check the Ferryman’s prompt for progress.</li>
          <li>Speak to him again and take his boat to the Alien Lagoon, where the dock sits among tall purple mushrooms.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className={guideSectionHeading}>What to Do During Cosmic Eclipse</h2>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Arrive at the lagoon early and equip your rod.</li>
          <li>Wait for the Cosmic Eclipse notice, then cast in the lagoon.</li>
          <li>Read the timer and the Kraken catch counter. Wait for the next round when time or catches run out.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className={guideSectionHeading}>Cosmic Eclipse Duration</h2>
        <p>Gameplay reports put the round at five minutes. The shared pool can empty before the timer ends. If you arrive late, check the counter first.</p>
      </section>

      <section className="space-y-3">
        <h2 className={guideSectionHeading}>Nebuloth Kraken During Cosmic Eclipse</h2>
        <p>Update 12 reports 750 Nebuloth Kraken catches per round, shared across all servers. Fishing while catches remain gives you a chance at the Divine pet.</p>
      </section>

      <section className="space-y-3">
        <h2 className={guideSectionHeading}>Cosmic Eclipse vs Alien Tidal Surge</h2>
        <p>Follow the Eclipse notice for Kraken fishing in the lagoon. The Surge can flood the Alien biome at in-game night and brings its own flooded eggs.</p>
      </section>

      <section className="space-y-3">
        <h2 className={guideSectionHeading}>What If You Miss the Event?</h2>
        <p>Use the next :25 or :55 UTC slot to plan your return. If the lagoon is still locked, use the gap to finish the Ferryman’s task before checking the server timer again.</p>
      </section>

      <p className="text-sm">
        <a className="seo-link" href="https://eggping.com/events/cosmic-eclipse">Cosmic Eclipse gameplay notes</a>
        {" · "}
        <a className="seo-link" href="https://eggping.com/updates/12-new-alien-biome">Update 12 and Alien Tidal Surge</a>
      </p>
    </ExpansionPage>
  );
}
