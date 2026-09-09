import { EntitySeoPage, dodoConfig } from "@/components/steal-an-egg/EntitySeoPage";
import { buildMetadata } from "@/lib/seo";

const title = "Steal An Egg Dodo – Dodo Egg, How to Get, Rarity & Pet Guide";
const description = "Learn how to get the Dodo in Steal An Egg, what players mean by Dodo Egg, its verified source and rarity, pet value, progression use and useful gameplay tips.";

export const metadata = buildMetadata({ title, description, pathname: "/pets/dodo/" });

export default function DodoPage() { return <EntitySeoPage config={dodoConfig} />; }
