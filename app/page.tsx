import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  BookOpen,
  Database,
  Egg,
  ExternalLink,
  Footprints,
  Gamepad2,
  Gift,
  PawPrint,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/steal-an-egg/SiteHeader";
import { SiteFooter } from "@/components/steal-an-egg/SiteFooter";
import { NativeBanner } from "@/components/steal-an-egg/NativeBanner";
import { Banner728x90 } from "@/components/steal-an-egg/Banner728x90";

export const metadata: Metadata = {
  title: { absolute: "Steal An Egg Wiki – Eggs, Pets, Speed, Codes & Roblox Guide" },
  description: "Steal An Egg Wiki for Roblox with verified eggs, pets, rare eggs, speed, treadmill, codes, beginner guides, progression tips, secrets and latest updates.",
  alternates: { canonical: "/" },
};

const topics = [
  { title: "Steal An Egg Eggs", href: "/eggs/", icon: Egg, description: "Browse Steal An Egg on Roblox egg data, rarity notes, spawn information and core mechanics." },
  { title: "Steal An Egg Pets", href: "/pets/", icon: PawPrint, description: "Compare companions from Steal An Egg on Roblox by rarity, income role and usefulness." },
  { title: "Steal An Egg Beginner Guide", href: "/guide/", icon: BookOpen, description: "Learn how Steal An Egg on Roblox connects stealing, escaping, hatching, earning and upgrading." },
  { title: "Steal An Egg Progression", href: "/progression/", icon: TrendingUp, description: "Plan upgrades in Steal An Egg on Roblox, including movement, pen improvements, trails and offline earnings." },
  { title: "Steal An Egg Rare Eggs", href: "/eggs/rare-eggs/", icon: Sparkles, description: "Check verified rare eggs in Steal An Egg on Roblox, including confirmed spawn evidence." },
  { title: "Steal An Egg Speed & Treadmill", href: "/progression/speed-treadmill/", icon: Footprints, description: "See how movement training supports safer runs in Steal An Egg on Roblox." },
  { title: "Steal An Egg Codes", href: "/codes/", icon: Gift, description: "Check verified active and expired rewards without invented redemption steps." },
  { title: "Steal An Egg Updates", href: "/updates/", icon: RefreshCw, description: "Follow confirmed game changes, new eggs, new companions and future update notes." },
];

const steps = [
  ["Steal an Egg and Bring It Back to Your Pen", "Choose an egg you can realistically carry, escape from the active play area and return it safely to your own pen. The run only becomes useful advancement after the egg reaches safety."],
  ["Hatch Pets and Earn Money", "Place the secured egg in your pen, complete the egg-to-pet step and use the pet's income to build resources for future upgrades and stronger attempts."],
  ["Upgrade Your Speed and Progression", "Invest earnings in useful upgrades, train movement regularly and return to the loop better prepared to reach more valuable eggs."],
];

const faq = [
  { question: "What is Steal An Egg?", answer: "Steal An Egg is a Roblox experience built around taking eggs, returning them to your pen, hatching companions, earning income and improving useful upgrades such as movement. This fan wiki organizes those mechanics into clear walkthroughs and databases." },
  { question: "Which Roblox game does this Steal An Egg Wiki cover?", answer: "This wiki covers Steal An Egg by and Collect Rare Pets, Place ID 107778070777162. The developer and Place ID are shown throughout the site to prevent confusion with similarly named Roblox experiences." },
  { question: "How do you play Steal An Egg?", answer: "The basic loop is to steal an egg, escape, return it to your pen, place and hatch it, receive a pet, earn income, buy upgrades, train movement and attempt to secure better eggs. The beginner walkthrough will expand every step as more verified gameplay evidence is added." },
  { question: "How do you get better eggs in Steal An Egg?", answer: "Better egg attempts depend on understanding where eggs appear, recognizing rarity, choosing a safe target and improving the upgrades that help you return successfully. Exact spawn rules and odds are only published after in-game verification." },
  { question: "What do pets do in Steal An Egg?", answer: "Companions are part of the game economy that follows hatching. They contribute income used for continued advancement. Exact pet income and rarity values are being recorded in the pet database and will not be guessed." },
  { question: "How do you increase speed in Steal An Egg?", answer: "Movement is connected to the treadmill and the wider upgrade system. Training can support quicker egg runs and escapes, but verified costs and level requirements will be added only after they are confirmed in game." },
  { question: "Are there any Steal An Egg codes?", answer: "The Steal An Egg Wiki currently lists no verified active rewards. The dedicated page preserves active, expired, redemption and last-checked sections so confirmed entries can be published quickly." },
];

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${siteConfig.url}/#website`, name: siteConfig.name, url: siteConfig.url, description: siteConfig.description, inLanguage: "en" },
      { "@type": "VideoGame", "@id": `${siteConfig.url}/#game`, name: siteConfig.game.name, url: siteConfig.game.robloxUrl, gamePlatform: "Roblox", author: { "@type": "Organization", name: siteConfig.game.developer }, identifier: siteConfig.game.placeId, description: "A Roblox experience about stealing eggs, hatching pets, earning income and upgrading progression." },
      { "@type": "WebPage", "@id": `${siteConfig.url}/#webpage`, url: siteConfig.url, name: "Steal An Egg Wiki – Eggs, Pets, Speed, Codes & Roblox Guide", description: siteConfig.description, isPartOf: { "@id": `${siteConfig.url}/#website` }, about: { "@id": `${siteConfig.url}/#game` }, inLanguage: "en" },
      { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
    ],
  };

  return (
    <>
      <Script id="homepage-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main className="pt-16">
          <section className="relative overflow-hidden border-b border-border px-4 py-12 md:py-20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface-accent to-background opacity-80" />
            <div className="container mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_.85fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-secondary">Independent Roblox game resource</p>
                <h1 className="text-4xl font-bold leading-tight text-primary sm:text-5xl md:text-6xl">Steal An Egg Wiki</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                  Steal An Egg Wiki is an independent Roblox resource for Steal An Egg on Roblox by and Collect Rare Pets, covering eggs, hatchable companions, rare eggs, movement, training, rewards, walkthroughs and the latest game updates.
                </p>
                <p className="mt-4 max-w-3xl leading-7 text-foreground/90">
                  Use this hub to understand the core egg-to-pet loop, move into focused databases and find practical upgrade pages. We separate confirmed information from details that still need in-game verification, so a missing value is labeled clearly instead of replaced with a guess.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/guide/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:bg-primary/90">
                    <BookOpen className="h-5 w-5" /> Start the beginner guide
                  </Link>
                  <a href={siteConfig.game.robloxUrl} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-3 font-semibold text-secondary-foreground transition hover:bg-secondary/85">
                    <Gamepad2 className="h-5 w-5" /> View on Roblox <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-primary/30 bg-card/80 p-5 shadow-2xl">
                <Image
                  src="/assets/img/steal-an-egg-cover.webp"
                  alt="Steal An Egg Roblox game cover showing a player carrying a glowing egg beside a sleeping dragon"
                  width={767}
                  height={432}
                  priority
                  className="h-auto w-full rounded-2xl"
                />
                <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-muted p-3"><dt className="text-muted-foreground">Game</dt><dd className="mt-1 font-semibold">Steal An Egg</dd></div>
                  <div className="rounded-xl bg-muted p-3"><dt className="text-muted-foreground">Platform</dt><dd className="mt-1 font-semibold">Roblox</dd></div>
                  <div className="rounded-xl bg-muted p-3"><dt className="text-muted-foreground">Developer</dt><dd className="mt-1 font-semibold">and Collect Rare Pets</dd></div>
                  <div className="rounded-xl bg-muted p-3"><dt className="text-muted-foreground">Place ID</dt><dd className="mt-1 break-all font-semibold">107778070777162</dd></div>
                </dl>
              </div>
            </div>
          </section>

          <NativeBanner />

          <section className="px-4 py-16" id="what-is-steal-an-egg">
            <div className="container mx-auto max-w-5xl">
              <p className="section-kicker">Game overview</p>
              <h2 className="section-title">What Is Steal An Egg?</h2>
              <div className="mt-6 space-y-5 text-content">
                <h3 className="text-2xl font-bold text-foreground">Steal An Egg on Roblox</h3>
                <p>
                  Steal An Egg on Roblox is centered on a simple risk-and-reward idea: obtain an egg, bring it back to your own pen and turn that successful run into a pet that helps your economy. The short description sounds straightforward, but the interesting decisions happen between those steps. Players need to notice which eggs are available, choose when a target is worth attempting, protect the trip back and decide where the next earnings should be invested.
                </p>
                <p>
                  Eggs are the beginning of the loop rather than the final reward. After an egg reaches the pen, it can grow or hatch into a pet. Companions then contribute income, and that income supports upgrades. Regular movement training is an important part of this broader upgrade path because mobility affects how confidently a player can attempt another run. Pen improvements, trails, offline earnings and mutations are also subjects this wiki is prepared to document as reliable evidence becomes available.
                </p>
                <p>
                  This Steal An Egg Roblox wiki is designed around the exact experience created by <strong>and Collect Rare Pets</strong>. Its Place ID is <strong>107778070777162</strong>. That entity information matters because Roblox contains games with similar names, including results that may use “Steal A Egg.” Every database and resource on this site refers to the same Steal An Egg Wiki experience identified above.
                </p>
              </div>
            </div>
          </section>

          <Banner728x90 className="py-8" />

          <section className="border-y border-border bg-surface-secondary px-4 py-16" id="how-it-works">
            <div className="container mx-auto max-w-6xl">
              <p className="section-kicker">Core gameplay loop</p>
              <h2 className="section-title">How Does Steal An Egg Work?</h2>
              <p className="mt-5 max-w-4xl text-content">
                A useful way to understand the game is to follow one complete loop. Each stage creates the conditions for the next, so upgrade planning is less about one isolated purchase and more about making repeated egg runs increasingly reliable.
              </p>
              <ol className="mt-9 grid gap-4 md:grid-cols-3">
                {steps.map(([title, text], index) => (
                  <li key={title} className="rounded-2xl border border-border bg-card p-5">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-primary font-bold text-primary-foreground">{index + 1}</span>
                    <h3 className="mt-4 text-lg font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-7 text-content">
                New players can read the <Link href="/guide/" className="seo-link">complete Steal An Egg Wiki walkthrough</Link> for a dedicated explanation of this flow. The dedicated page will eventually include route decisions, common mistakes and verified examples without overloading the wiki homepage.
              </p>
            </div>
          </section>

          <section className="px-4 py-16" id="explore-wiki">
            <div className="container mx-auto max-w-6xl">
              <p className="section-kicker">Topic cluster</p>
              <h2 className="section-title">Explore the Steal An Egg Wiki</h2>
              <p className="mt-5 max-w-4xl text-content">
                Choose the page that matches what you are trying to learn. Each topic has its own search intent and data structure, while the homepage remains the central Steal An Egg Wiki hub.
              </p>
              <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {topics.map((topic) => {
                  const Icon = topic.icon;
                  return (
                    <Link key={topic.href} href={topic.href} className="group flex min-h-56 flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-2xl">
                      <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                      <h3 className="mt-5 text-xl font-bold group-hover:text-primary">{topic.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{topic.description}</p>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">Open in Steal An Egg Wiki <ArrowRight className="h-4 w-4" /></span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-y border-border bg-surface-secondary px-4 py-16" id="verified-data">
            <div className="container mx-auto max-w-6xl">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div><p className="section-kicker">Evidence first</p><h2 className="section-title">Verified Steal An Egg Game Data</h2></div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm"><ShieldCheck className="h-4 w-4 text-primary" /> No invented stats</div>
              </div>
              <p className="mt-6 max-w-4xl text-content">
                Game data is most useful when players can trust it. This module will grow into the factual center of the wiki, but the first release intentionally shows verification status instead of filling empty cells with plausible-looking numbers. Screenshots, recordings and repeatable in-game checks will be used to support future entries.
              </p>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-xl font-bold text-foreground">Egg and Pet Data</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">Egg names, rarity evidence and confirmed spawn notes connect directly to pet names, rarity, income and source eggs. The egg and pet databases keep those records separate while making the hatch relationship easy to follow.</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-xl font-bold text-foreground">Speed and Progression Data</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">Movement levels, training requirements, pen upgrades, trails and offline earnings need repeatable checks. Until exact figures are confirmed, their status remains visible instead of being presented as finished data.</p>
                </div>
              </div>
              <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card">
                <table className="w-full min-w-[680px] text-left text-sm">
                  <thead className="bg-muted text-foreground"><tr><th className="p-4">Data group</th><th className="p-4">What will be recorded</th><th className="p-4">MVP status</th><th className="p-4">Destination</th></tr></thead>
                  <tbody className="divide-y divide-border text-muted-foreground">
                    <tr><td className="p-4 font-semibold text-foreground">Eggs</td><td className="p-4">Names, rarity, mechanics and confirmed spawn notes</td><td className="p-4">To be verified</td><td className="p-4"><Link href="/eggs/" className="seo-link">Egg database</Link></td></tr>
                    <tr><td className="p-4 font-semibold text-foreground">Pets</td><td className="p-4">Names, rarity, income and source egg</td><td className="p-4">To be verified</td><td className="p-4"><Link href="/pets/" className="seo-link">Pet database</Link></td></tr>
                    <tr><td className="p-4 font-semibold text-foreground">Upgrades</td><td className="p-4">Movement, training, pen, trails and offline earnings</td><td className="p-4">To be verified</td><td className="p-4"><Link href="/progression/" className="seo-link">System hub</Link></td></tr>
                    <tr><td className="p-4 font-semibold text-foreground">Other systems</td><td className="p-4">Mutations and additional mechanics confirmed in play</td><td className="p-4">Data coming soon</td><td className="p-4"><Link href="/updates/" className="seo-link">Update log</Link></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="px-4 py-16" id="eggs-and-pets">
            <div className="container mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-7 md:p-9">
                <div className="flex items-center gap-3"><Egg className="h-8 w-8 text-primary" /><h2 className="text-3xl font-bold text-primary">Steal An Egg Eggs and Pets</h2></div>
                <div className="mt-6 space-y-6 text-content">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">How Eggs Work</h3>
                    <p className="mt-2">An egg begins as a target during a run. Returning it to the pen turns that risky action into progress, so a successful egg attempt depends on both choosing the target and reaching safety. The <Link href="/eggs/" className="seo-link">Steal An Egg egg list</Link> will organize confirmed egg mechanics and rarity evidence.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">How Pets Help You Progress</h3>
                    <p className="mt-2">Hatching connects eggs to the game&apos;s economy. The resulting pet contributes income that funds future improvements, making its value about more than appearance. The <Link href="/pets/" className="seo-link">Steal An Egg pet database</Link> is reserved for verified rarity, income and source information.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Rare and Secret Eggs</h3>
                    <p className="mt-2">Difficult targets require reliable information about rarity and where eggs can appear. Use the <Link href="/eggs/rare-eggs/" className="seo-link">rare eggs and secret eggs guide</Link> for focused evidence. Reliable rare eggs records keep unverified spawn claims out of the main database.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-7 md:p-9">
                <div className="flex items-center gap-3"><Footprints className="h-8 w-8 text-primary" /><h2 className="text-3xl font-bold text-primary">Speed, Treadmill and Progression</h2></div>
                <div className="mt-6 space-y-6 text-content">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">How Speed Works in Steal An Egg</h3>
                    <p className="mt-2">Carrying an egg home is not complete until the player reaches safety, so movement can change which attempts feel practical. Better mobility supports quicker routes and gives players more room to recover from a risky decision.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">How to Train on the Treadmill</h3>
                    <p className="mt-2">Dedicated training equipment supports the focused movement system. The <Link href="/progression/speed-treadmill/" className="seo-link">movement training page</Link> will hold verified priorities, upgrade costs and level requirements as they are confirmed in game.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Progression and Upgrades</h3>
                    <p className="mt-2">Income can be converted into mobility and wider upgrades, including pen improvements, trails and offline earnings. Use the <Link href="/progression/" className="seo-link">Steal An Egg system hub</Link> for the complete map and long-term upgrade priorities.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-border bg-background px-4 py-16" id="beginner-tips">
            <div className="container mx-auto max-w-5xl">
              <p className="section-kicker">Practical first steps</p>
              <h2 className="section-title">Steal An Egg Beginner Tips</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <article className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-xl font-bold text-foreground">Start With Eggs You Can Safely Steal</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">A successful return matters more than choosing the most impressive target too early. Learn the complete loop in the <Link href="/guide/" className="seo-link">starter walkthrough</Link>, compare targets in the <Link href="/eggs/" className="seo-link">egg database</Link> and use the <Link href="/eggs/rare-eggs/" className="seo-link">rare egg page</Link> only when you are ready for harder attempts.</p>
                </article>
                <article className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-xl font-bold text-foreground">Focus on Pet Income Early</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">Hatching is what turns a safe egg run into an economic advantage. Check the <Link href="/pets/" className="seo-link">pet list and income database</Link>, then use earnings on upgrades that improve repeated runs instead of treating every pet as an isolated collectible.</p>
                </article>
                <article className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-xl font-bold text-foreground">Train Speed Before Chasing Better Eggs</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">Movement training can make difficult return routes more realistic. Review the <Link href="/progression/" className="seo-link">upgrade overview</Link> and <Link href="/progression/speed-treadmill/" className="seo-link">movement training page</Link> before taking bigger risks. Check <Link href="/codes/" className="seo-link">codes</Link> and the <Link href="/updates/" className="seo-link">update log</Link> separately for time-sensitive changes.</p>
                </article>
              </div>
            </div>
          </section>

          <section className="border-y border-border bg-surface-secondary px-4 py-16" id="updates">
            <div className="container mx-auto max-w-5xl">
              <p className="section-kicker">Freshness hub</p>
              <h2 className="section-title">Latest Steal An Egg Updates</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <article className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-xl font-bold text-foreground">New Eggs and Pets</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">New egg or pet information will be connected to the relevant database after its name, rarity, source and gameplay role are confirmed. This prevents an announcement from being mistaken for complete game data.</p>
                </article>
                <article className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-xl font-bold text-foreground">Events and Gameplay Changes</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">Events and patches can affect upgrade systems and the accuracy of older advice. No date or feature is published as fact until it has a reliable source or clear in-game evidence.</p>
                </article>
              </div>
              <Link href="/updates/" className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary/90">View game updates <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </section>

          <section className="px-4 py-16" id="screenshots">
            <div className="container mx-auto max-w-6xl">
              <p className="section-kicker">Original evidence</p>
              <h2 className="section-title">Steal An Egg Gameplay Screenshots</h2>
              <p className="mt-5 max-w-4xl text-content">Original Roblox screenshots will be added here to show the egg area, pets, pen and training equipment. For launch, the reserved frames make the gallery layout complete without presenting unrelated artwork as gameplay. Each future image will use a descriptive WebP filename, dimensions, lazy loading and natural alternative text.</p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {["Gameplay overview", "Egg area", "Pets and income", "Treadmill training"].map((label) => (
                  <div key={label} className="grid aspect-[4/3] place-items-center rounded-2xl border border-dashed border-primary/40 bg-card p-5 text-center">
                    <div><Database className="mx-auto h-8 w-8 text-primary" /><p className="mt-3 font-semibold">{label}</p><p className="mt-1 text-xs text-muted-foreground">Original screenshot coming soon</p></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-border bg-surface-secondary px-4 py-16" id="faq">
            <div className="container mx-auto max-w-4xl">
              <p className="section-kicker">Quick answers</p>
              <h2 className="section-title">Steal An Egg FAQ</h2>
              <div className="mt-8 space-y-4">
                {faq.map((item) => (
                  <article key={item.question} className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-lg font-bold text-foreground">{item.question}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
