import { EntitySeoPage, koiConfig } from "@/components/steal-an-egg/EntitySeoPage";
import { buildMetadata } from "@/lib/seo";

const title = "Steal An Egg Koi – Koi Egg, How to Get, Rarity & Pet Guide";
const description = "Learn how to get the Koi in Steal An Egg, which egg or source gives it, its verified rarity and pet value, progression use and the best tips for getting one.";

export const metadata = buildMetadata({ title, description, pathname: "/pets/koi/" });

export default function KoiPage() { return <EntitySeoPage config={koiConfig} />; }
