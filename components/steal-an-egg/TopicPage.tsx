import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Database, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Banner728x90 } from "./Banner728x90";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { NativeBanner } from "./NativeBanner";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

type RelatedLink = { title: string; href: string; description: string };

export function TopicPage({
  title,
  description,
  intro,
  pathname,
  crumbs,
  sections,
  related,
  freshnessNote,
}: {
  title: string;
  description: string;
  intro: string;
  pathname: string;
  crumbs: Crumb[];
  sections: Array<{ title: string; body: string; items?: string[] }>;
  related: RelatedLink[];
  freshnessNote?: string;
}) {
  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    ...crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: crumb.label,
      item: `${siteConfig.url}${crumb.href || pathname}`,
    })),
  ];

  return (
    <>
      <Script id={`schema-${pathname.replaceAll("/", "-")}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "WebPage", name: title, description, url: `${siteConfig.url}${pathname}`, isPartOf: { "@id": `${siteConfig.url}/#website` } },
          { "@type": "BreadcrumbList", itemListElement: breadcrumbItems },
        ],
      }) }} />
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main className="pt-16">
          <section className="border-b border-border bg-gradient-to-b from-surface-accent/80 to-background px-4 py-12 md:py-16">
            <div className="container mx-auto max-w-5xl">
              <Breadcrumbs items={crumbs} />
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Steal An Egg Wiki</p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight text-primary md:text-5xl">{title}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{intro}</p>
              {freshnessNote && <p className="mt-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-foreground">{freshnessNote}</p>}
            </div>
          </section>

          <NativeBanner />

          <div className="container mx-auto max-w-5xl px-4 py-12">
            <div className="mb-12 rounded-2xl border border-primary/30 bg-card p-6 md:p-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-7 w-7 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h2 className="text-2xl font-bold">MVP data status</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    This page structure is ready for verified in-game data. Exact values, rates, requirements and dates are marked for verification rather than estimated. That keeps the wiki useful without presenting guesses as facts.
                  </p>
                </div>
              </div>
            </div>

            <Banner728x90 className="mb-12" />

            <div className="space-y-12">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-3xl font-bold text-primary">{section.title}</h2>
                  <p className="mt-4 max-w-4xl text-base leading-8 text-muted-foreground">{section.body}</p>
                  {section.items && (
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm">
                          <Database className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" /> {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <section className="mt-16 border-t border-border pt-12">
              <h2 className="text-3xl font-bold text-primary">Continue exploring the wiki</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {related.map((item) => (
                  <Link key={item.href} href={item.href} className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
                    <h3 className="font-bold text-foreground group-hover:text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Open page <ArrowRight className="h-4 w-4" /></span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
