import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Banner728x90 } from "./Banner728x90";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { NativeBanner } from "./NativeBanner";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export const guideSectionHeading = "text-2xl font-bold leading-tight text-primary md:text-3xl";
export const guideSubheading = "text-lg font-bold text-foreground";

export function ExpansionPage({
  title, description, pathname, crumbs, summary, lead, children, faqTitle, faqs, related,
}: {
  title: string;
  description: string;
  pathname: string;
  crumbs: Crumb[];
  summary: string;
  lead: ReactNode;
  children: ReactNode;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string }[];
}) {
  const url = `${siteConfig.url}${pathname}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: title, description, url, isPartOf: { "@id": `${siteConfig.url}/#website` } },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
          ...crumbs.map((crumb, index) => ({
            "@type": "ListItem", position: index + 2, name: crumb.label,
            item: crumb.href ? `${siteConfig.url}${crumb.href}` : url,
          })),
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replaceAll("<", "\\u003c") }} />
      <SiteHeader />
      <main className="pt-16">
        <section className="border-b border-border bg-gradient-to-b from-surface-accent/80 to-background px-4 py-6 md:py-12">
          <div className="container mx-auto max-w-5xl">
            <div className="[&>nav]:mb-4 md:[&>nav]:mb-8"><Breadcrumbs items={crumbs} /></div>
            <h1 className="max-w-4xl text-3xl font-bold leading-tight text-primary md:text-5xl">{title}</h1>
            <p className="mt-3 max-w-3xl leading-7 text-muted-foreground md:text-lg">{summary}</p>
            <div className="mt-5 rounded-2xl border border-border bg-card p-4 sm:p-6">
              {lead}
            </div>
          </div>
        </section>

        <NativeBanner />

        <div className="container mx-auto max-w-5xl px-4 py-12">
          <Banner728x90 className="mb-12" />
          <div className="space-y-10 leading-7 text-muted-foreground">
            {children}
            <section className="space-y-4">
              <h2 className={guideSectionHeading}>{faqTitle}</h2>
              {faqs.map(({ question, answer }) => (
                <div key={question} className="rounded-xl border border-border bg-card p-4">
                  <h3 className={guideSubheading}>{question}</h3>
                  <p className="mt-1">{answer}</p>
                </div>
              ))}
            </section>
            <nav aria-label="Related guides" className="flex flex-wrap gap-x-5 gap-y-3 border-t border-border pt-6 text-sm">
              {related.map(({ href, label }) => (
                <Link key={href} href={href} className="inline-flex items-center gap-2 font-semibold text-foreground underline decoration-primary underline-offset-4 hover:text-primary">
                  {label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
