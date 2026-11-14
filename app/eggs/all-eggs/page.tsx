import Link from "next/link";
import { EggCatalog } from "@/components/steal-an-egg/EggCatalog";
import { ExpansionPage, guideSectionHeading } from "@/components/steal-an-egg/ExpansionPage";
import { eggCatalog } from "@/data/egg-catalog";
import { buildMetadata } from "@/lib/seo";

const pathname = "/eggs/all-eggs/";
const title = "Steal an Egg All Eggs List – Biomes & Sources";
const description = "Search the Steal an Egg egg list by name, biome or source. Browse documented egg pools, individual eggs, shop eggs and chest rewards.";

export const metadata = buildMetadata({ title, description, pathname });

export default function AllEggsPage() {
  return (
    <ExpansionPage
      title="All Eggs in Steal an Egg"
      description={description}
      pathname={pathname}
      crumbs={[{ label: "Eggs", href: "/eggs/" }, { label: "All Eggs" }]}
      summary="Find Steal an Egg eggs and egg pools documented in this wiki. Search by name, biome or reward source."
      lead={(
        <section>
          <h2 className={guideSectionHeading}>Steal an Egg Egg List</h2>
          <EggCatalog entries={eggCatalog} />
        </section>
      )}
      faqTitle="Egg List FAQ"
      faqs={[
        { question: "Why isn’t there an egg rarity filter?", answer: "The sources often show the rarity of the hatched pet. A pool can contain pets of several rarities, so assigning one rarity to the whole egg pool would be misleading." },
        { question: "Does this list show every egg in the live game?", answer: "It shows the named eggs and egg pools documented in the linked wiki guides. Check the game’s own Index or event panel for new releases and currently available rewards." },
      ]}
      related={[
        { href: "/eggs/", label: "Egg mechanics overview" },
        { href: "/eggs/best-eggs/", label: "Best Eggs for progression" },
        { href: "/eggs/rare-eggs/", label: "Rare Eggs guide" },
      ]}
    >
      <section className="space-y-3">
        <h2 className={guideSectionHeading}>How to Use the Egg List</h2>
        <p>Start with a biome if you know where you picked up the egg. A biome pool groups eggs from that area. A named entry such as Stag Egg points to a specific hatch target. Select the name for the source guide.</p>
        <p>Shop and chest entries come from the linked update guides. Check the current shop or reward panel before going after an older egg. For current event context, see <Link href="/updates/black-market-dealer/" className="seo-link">Black Market Dealer</Link> and <Link href="/events/cosmic-eclipse/" className="seo-link">Cosmic Eclipse</Link>.</p>
      </section>
    </ExpansionPage>
  );
}
