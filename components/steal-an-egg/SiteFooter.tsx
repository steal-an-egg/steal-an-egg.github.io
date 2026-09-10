import Link from "next/link";
import { Egg, MessageSquareText } from "lucide-react";
import { siteConfig } from "@/config/site";

const wikiLinks = [
  ["Egg Database", "/eggs/"],
  ["Pet Database", "/pets/"],
  ["Beginner Guide", "/guide/"],
  ["Progression", "/progression/"],
  ["Rare Eggs", "/eggs/rare-eggs/"],
  ["Spawn Predictor", "/eggs/spawn-predictor/"],
  ["Best Eggs", "/eggs/best-eggs/"],
  ["Divine Eggs", "/eggs/divine-eggs/"],
  ["Stag Egg", "/eggs/stag-egg/"],
  ["Parasite Egg", "/eggs/parasite-egg/"],
  ["Steal An Egg Rarities", "/rarities/"],
  ["Speed & Treadmill", "/progression/speed-treadmill/"],
  ["Best Pets", "/pets/best-pets/"],
  ["Rarest Pets", "/pets/rarest-pets/"],
  ["Steal An Egg Calculator", "/calculator/"],
  ["Ice Dragon", "/pets/ice-dragon/"],
  ["Koi", "/pets/koi/"],
  ["Dodo", "/pets/dodo/"],
  ["Codes", "/codes/"],
  ["Updates", "/updates/"],
  ["Sakura Event", "/updates/sakura-event/"],
  ["Monster Update", "/updates/monster-update/"],
  ["What Happened to Steal An Egg?", "/updates/what-happened-to-steal-an-egg/"],
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[#1a1a2e] text-foreground">
      <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Egg className="h-5 w-5 text-primary" aria-hidden="true" />
            {siteConfig.name}
          </div>
          <p className="text-sm leading-6 text-muted-foreground">
            An independent, fan-made Roblox guide for Steal An Egg by and Collect Rare Pets. We organize game mechanics, verified data and practical progression help without inventing unconfirmed values.
          </p>
        </div>

        <nav aria-label="Wiki links">
          <p className="mb-4 font-bold">Explore the Wiki</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm lg:grid-cols-3">
            {wikiLinks.map(([label, href]) => (
              <li key={href}><Link href={href} className="text-muted-foreground transition hover:text-primary">{label}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 font-bold">Contact & Legal</p>
          <a href={siteConfig.issuesUrl} target="_blank" rel="noopener noreferrer" className="mb-4 flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary">
            <MessageSquareText className="h-4 w-4" aria-hidden="true" /> Report an issue
          </a>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link href="/about/" className="text-muted-foreground hover:text-primary">About</Link>
            <Link href="/contact/" className="text-muted-foreground hover:text-primary">Contact</Link>
            <Link href="/privacy-policy/" className="text-muted-foreground hover:text-primary">Privacy</Link>
            <Link href="/terms-of-service/" className="text-muted-foreground hover:text-primary">Terms</Link>
            <Link href="/copyright/" className="text-muted-foreground hover:text-primary">Copyright</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border/70 px-4 py-7 text-center">
        <p className="mx-auto max-w-4xl text-xs leading-5 text-muted-foreground/80">
          Steal An Egg Wiki is an independent fan-made website and is not affiliated with Roblox or and Collect Rare Pets. Roblox and all related marks belong to their respective owners.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">© {new Date().getFullYear()} {siteConfig.name}</p>
      </div>
    </footer>
  );
}
