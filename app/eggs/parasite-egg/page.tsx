import { EntitySeoPage, parasiteEggConfig } from "@/components/steal-an-egg/EntitySeoPage";
import { buildMetadata } from "@/lib/seo";

const title = "Steal An Egg Parasite Egg – How to Get, Rarity & Hatch Guide";
const description = "Learn how to get the Parasite Egg in Steal An Egg, where it comes from, its verified rarity, hatch results, Monster Update connection and useful farming tips.";

export const metadata = buildMetadata({ title, description, pathname: "/eggs/parasite-egg/" });

export default function ParasiteEggPage() { return <EntitySeoPage config={parasiteEggConfig} />; }
