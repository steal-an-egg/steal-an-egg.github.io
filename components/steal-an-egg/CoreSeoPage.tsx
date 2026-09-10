import Link from "next/link";
import Script from "next/script";
import type { ReactNode } from "react";
import { ArrowRight, Camera, Database, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Banner728x90 } from "./Banner728x90";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { NativeBanner } from "./NativeBanner";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export type CoreLink = {
  href: string;
  label: string;
  description?: string;
};

export type CoreTable = {
  caption: string;
  columns: string[];
  rows: string[][];
};

export type CoreSubsection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  links?: CoreLink[];
  table?: CoreTable;
};

export type CoreSection = {
  title: string;
  intro?: string[];
  subsections: CoreSubsection[];
  table?: CoreTable;
};

export type CoreFaq = {
  question: string;
  answer: string;
};

export type ScreenshotSlot = {
  label: string;
  filename: string;
  description: string;
};

export function CoreSeoPage({
  title,
  description,
  intro,
  pathname,
  crumbs,
  sections,
  faqTitle,
  faqs,
  screenshots,
  related,
  howToSteps,
  leadContent,
  maxParagraphsPerSubsection,
  maxIntroParagraphs,
  showSectionIntros = true,
  showRelatedDescriptions = true,
  dataStatus = "Game data status: verification in progress",
  showVerificationNotice = true,
  screenshotHeading = "Screenshot slots ready for verified captures",
  screenshotDescription = "Each frame names the original in-game evidence still needed.",
  extraSchema = [],
}: {
  title: string;
  description: string;
  intro: string[];
  pathname: string;
  crumbs: Crumb[];
  sections: CoreSection[];
  faqTitle: string;
  faqs: CoreFaq[];
  screenshots: ScreenshotSlot[];
  related: CoreLink[];
  howToSteps?: Array<{ name: string; text: string }>;
  leadContent?: ReactNode;
  maxParagraphsPerSubsection?: number;
  maxIntroParagraphs?: number;
  showSectionIntros?: boolean;
  showRelatedDescriptions?: boolean;
  dataStatus?: string | null;
  showVerificationNotice?: boolean;
  screenshotHeading?: string;
  screenshotDescription?: string;
  extraSchema?: Record<string, unknown>[];
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

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${pathname}#webpage`,
      name: title,
      description,
      url: `${siteConfig.url}${pathname}`,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#game` },
      inLanguage: "en",
    },
    { "@type": "BreadcrumbList", itemListElement: breadcrumbItems },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  if (howToSteps?.length) {
    graph.push({
      "@type": "HowTo",
      name: title,
      description,
      step: howToSteps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.name,
        text: step.text,
      })),
    });
  }

  graph.push(...extraSchema);

  return (
    <>
      <Script
        id={`schema-${pathname.replaceAll("/", "-")}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
      />
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main className="pt-16">
          <section className="border-b border-border bg-gradient-to-b from-surface-accent/80 to-background px-4 py-12 md:py-16">
            <div className="container mx-auto max-w-5xl">
              <Breadcrumbs items={crumbs} />
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Independent Roblox game resource</p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight text-primary md:text-5xl">{title}</h1>
              <div className="mt-5 max-w-4xl space-y-4 text-lg leading-8 text-muted-foreground">
                {intro.slice(0, maxIntroParagraphs).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {dataStatus ? <p className="mt-5 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-foreground">{dataStatus}</p> : null}
            </div>
          </section>

          <NativeBanner />

          <div className="container mx-auto max-w-5xl px-4 py-12">
            {leadContent ? <div className="mb-12">{leadContent}</div> : null}
            {showVerificationNotice ? <aside className="mb-12 rounded-2xl border border-primary/30 bg-card p-6 md:p-8" aria-label="Data verification policy">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-7 w-7 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-xl font-bold text-foreground">Verified information only</p>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    Unverified names, values, rates and requirements remain clearly marked instead of being replaced with guesses.
                  </p>
                </div>
              </div>
            </aside> : null}

            <Banner728x90 className="mb-12" />

            <div className="space-y-16">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-3xl font-bold leading-tight text-primary md:text-4xl">{section.title}</h2>
                  {showSectionIntros && section.intro?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 max-w-4xl text-base leading-8 text-muted-foreground">{paragraph}</p>
                  ))}
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {section.subsections.map((subsection) => (
                      <article key={subsection.title} className="min-w-0 rounded-2xl border border-border bg-card p-6 md:p-7">
                        <h3 className="text-xl font-bold leading-7 text-foreground">{subsection.title}</h3>
                        <div className="mt-4 space-y-4 text-[15px] leading-7 text-muted-foreground">
                          {subsection.paragraphs
                            .slice(0, maxParagraphsPerSubsection)
                            .map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        </div>
                        {subsection.bullets?.length ? (
                          <ul className="mt-5 space-y-2 text-sm leading-6 text-muted-foreground">
                            {subsection.bullets.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <Database className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {subsection.links?.length ? (
                          <div className="mt-5 flex flex-wrap gap-3">
                            {subsection.links.map((item) => (
                              <Link key={item.href} href={item.href} className="seo-link inline-flex items-center gap-1">
                                {item.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                              </Link>
                            ))}
                          </div>
                        ) : null}
                        {subsection.table ? <DataTable table={subsection.table} /> : null}
                      </article>
                    ))}
                  </div>
                  {section.table ? <DataTable table={section.table} /> : null}
                </section>
              ))}
            </div>

            <aside className="mt-16 border-y border-border bg-surface-secondary px-5 py-10 md:px-8" aria-label={`${title} screenshot placeholders`}>
              <p className="section-kicker">Original gameplay evidence</p>
              <p className="mt-2 text-2xl font-bold text-foreground">{screenshotHeading}</p>
              <p className="mt-3 max-w-4xl leading-7 text-muted-foreground">{screenshotDescription}</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {screenshots.map((item) => (
                  <div key={item.filename} className="rounded-2xl border border-dashed border-primary/40 bg-card p-5">
                    <Camera className="h-7 w-7 text-primary" aria-hidden="true" />
                    <p className="mt-3 font-bold text-foreground">{item.label}</p>
                    <p className="mt-1 break-all text-xs text-primary">{item.filename}</p>
                  </div>
                ))}
              </div>
            </aside>

            <section className="mt-16">
              <h2 className="text-3xl font-bold leading-tight text-primary md:text-4xl">{faqTitle}</h2>
              <div className="mt-8 space-y-4">
                {faqs.map((item) => (
                  <article key={item.question} className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-xl font-bold text-foreground">{item.question}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>

            <aside className="mt-16 rounded-3xl border border-primary/30 bg-primary/10 p-7 md:p-9" aria-label="Related Steal An Egg pages">
              <p className="text-2xl font-bold text-foreground">Continue with a focused wiki page</p>
              <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">Choose the page that matches your next question.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <Link key={item.href} href={item.href} className="group rounded-xl border border-border bg-card p-5 transition hover:border-primary/60">
                    <p className="font-bold text-foreground group-hover:text-primary">{item.label}</p>
                    {showRelatedDescriptions && item.description ? <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p> : null}
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Open page <ArrowRight className="h-4 w-4" /></span>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}

function DataTable({ table }: { table: CoreTable }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[720px] text-left text-sm">
        <caption className="sr-only">{table.caption}</caption>
        <thead className="bg-muted text-foreground">
          <tr>{table.columns.map((column) => <th key={column} className="p-3 font-semibold">{column}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-border text-muted-foreground">
          {table.rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`} className="p-3">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
