import { ExpansionPage, guideSectionHeading } from "@/components/steal-an-egg/ExpansionPage";
import { buildMetadata } from "@/lib/seo";

const pathname = "/mutations/maple/";
const title = "Steal an Egg Maple Mutation – Price, Chance & Multiplier";
const description = "Learn how to get the Maple Mutation in Steal an Egg, its Feather price, application chance, income multiplier, and how to use it during Turkey Rampage.";
export const metadata = buildMetadata({ title, description, pathname });

export default function Page() {
  return <ExpansionPage title={"Steal an Egg Maple Mutation Guide"} description={description} pathname={pathname}
    crumbs={[{"label": "Mutations", "href": "/mutations/"}, {"label": "Maple Mutation"}]}
    summary={"Steal an Egg Maple Mutation is an egg mutation consumable from Update 14. Buy it in Turkey Shop during Turkey Rampage; purchasing an item does not guarantee a successful application."}
    lead={<dl className="grid gap-4 sm:grid-cols-2"><div><dt className="text-sm text-muted-foreground">Price</dt><dd className="mt-1 font-semibold text-foreground">200 Feathers</dd></div><div><dt className="text-sm text-muted-foreground">Application chance</dt><dd className="mt-1 font-semibold text-foreground">10%</dd></div><div><dt className="text-sm text-muted-foreground">Successful income multiplier</dt><dd className="mt-1 font-semibold text-foreground">×2.9</dd></div><div><dt className="text-sm text-muted-foreground">Source</dt><dd className="mt-1 font-semibold text-foreground">Turkey Shop / Turkey Rampage</dd></div></dl>}
    faqTitle={"Maple Mutation FAQ"}
    faqs={[{"question": "How much does Maple Mutation cost?", "answer": "200 Feathers per consumable in Turkey Shop."}, {"question": "What is the Maple Mutation chance?", "answer": "10% application chance on an egg."}, {"question": "What is the Maple multiplier?", "answer": "×2.9 income after a successful application."}, {"question": "Does buying Maple guarantee it works?", "answer": "No. The purchase gives an item; application has a separate success chance."}, {"question": "Where is Maple Mutation sold?", "answer": "In Turkey Shop during Turkey Rampage, the Update 14 event."}]}
    related={[{"href": "/updates/turkey-takeover/", "label": "Turkey Rampage and Feather rewards"}, {"href": "/mutations/", "label": "All Mutations"}, {"href": "/eggs/all-eggs/", "label": "Choose an egg source"}]}
  >
    <section className="space-y-3"><h2 className={guideSectionHeading}>How to Get Maple Mutation</h2><p>Earn Feathers by attacking King Gobble during Turkey Rampage, then open Turkey Shop and select Maple Mutation. It is an application item for an egg, not a direct purchase of a pet.</p></section>
    <section className="space-y-3"><h2 className={guideSectionHeading}>Maple Mutation Price</h2><p>One consumable costs 200 Feathers. Red weak points on the boss award extra Feathers, but your earnings depend on the round. There is no fixed number of minutes to afford Maple.</p></section>
    <section className="space-y-3"><h2 className={guideSectionHeading}>Maple Mutation Chance</h2><p>The 10% value is the chance of successfully applying the mutation. Buying the consumable and using it are separate steps. An attempt may fail; repeated purchases do not promise a success.</p></section>
    <section className="space-y-3"><h2 className={guideSectionHeading}>Maple Mutation Multiplier</h2><p>After a successful application, Maple gives an income multiplier of ×2.9. This is the income effect, not the application chance. Read any existing modifiers separately; no stacking or compound rule is assumed here.</p></section>
    <section className="space-y-3"><h2 className={guideSectionHeading}>How to Use Maple Mutation</h2><p>Get the consumable, choose an eligible target egg and read the current mutation prompt. Check the target and success information before applying. Inspect the result afterward: only a successful attempt gives the Maple effect. Follow the live interface if controls change.</p></section>
    <section className="space-y-3"><h2 className={guideSectionHeading}>Is Maple Mutation Worth It?</h2><p>At 200 Feathers it costs less than the event eggs, but the 10% application chance makes it a risky use of a limited budget. Consider your current eggs and what else you want in Turkey Shop. If an event egg is your priority, save its price first; do not count on Maple as guaranteed profit.</p></section>
    <aside className="space-y-3 rounded-xl border border-border p-4 text-sm"><p>Sources checked November 24, 2026. Follow current in-game notices for changes.</p><div className="flex flex-wrap gap-4"><a className="seo-link" href="https://www.stealegg.com/en/guides/mutations-guide/maple/">Maple price, chance and income reference</a><a className="seo-link" href="https://eggping.com/mutations/maple-mutation">Maple mutation reference</a></div></aside>
  </ExpansionPage>;
}
