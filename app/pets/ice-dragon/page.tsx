import { EntitySeoPage, iceDragonConfig } from "@/components/steal-an-egg/EntitySeoPage";
import { buildMetadata } from "@/lib/seo";

const title = "Steal An Egg Ice Dragon – How to Get, Rarity & Pet Guide";
const description = "Learn about the Ice Dragon in Steal An Egg, including how to get it, its verified rarity and source, pet value, progression use and answers to common questions.";

export const metadata = buildMetadata({ title, description, pathname: "/pets/ice-dragon/" });

export default function IceDragonPage() { return <EntitySeoPage config={iceDragonConfig} />; }
