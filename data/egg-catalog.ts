export type EggRecord = {
  name: string;
  source: string;
  href: string;
  kind: "Biome pool" | "Named egg" | "Store egg" | "Chest reward";
};

// Use source labels from the linked wiki entries. Biome pools are lookup
// labels; they don't imply that every egg in a biome shares that name.
export const eggCatalog: readonly EggRecord[] = [
  { name: "Forest Egg", source: "Forest", kind: "Biome pool", href: "/eggs/best-eggs/" },
  { name: "Lake Egg", source: "Lake", kind: "Biome pool", href: "/eggs/best-eggs/" },
  { name: "Desert Egg", source: "Desert", kind: "Biome pool", href: "/eggs/best-eggs/" },
  { name: "Jungle Egg", source: "Jungle", kind: "Biome pool", href: "/eggs/best-eggs/" },
  { name: "Snow Egg", source: "Snow", kind: "Biome pool", href: "/eggs/best-eggs/" },
  { name: "Volcano Egg", source: "Volcano", kind: "Biome pool", href: "/eggs/best-eggs/" },
  { name: "Ocean Egg", source: "Abyss Ocean", kind: "Biome pool", href: "/eggs/best-eggs/" },
  { name: "Prehistoric Egg", source: "Prehistoric", kind: "Biome pool", href: "/eggs/best-eggs/" },
  { name: "Cosmic Egg", source: "Cosmic", kind: "Biome pool", href: "/eggs/cosmic-egg/" },
  { name: "Cherry Blossom Egg", source: "Cherry Blossom", kind: "Biome pool", href: "/updates/sakura-event/" },
  { name: "Stag Egg", source: "Cherry Blossom", kind: "Named egg", href: "/eggs/stag-egg/" },
  { name: "Titan Temple eggs", source: "Titan Temple", kind: "Biome pool", href: "/guide/titan-temple/" },
  { name: "Monster Egg", source: "Monster Update shop", kind: "Store egg", href: "/updates/monster-update/" },
  { name: "Monstrous Egg", source: "Monster Chest", kind: "Chest reward", href: "/updates/monster-update/" },
];
