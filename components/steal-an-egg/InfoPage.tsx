import type { ReactNode } from "react";
import { Banner728x90 } from "./Banner728x90";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { Breadcrumbs } from "./Breadcrumbs";
import { NativeBanner } from "./NativeBanner";

export function InfoPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-16">
        <section className="border-b border-border bg-gradient-to-b from-surface-accent/80 to-background px-4 py-12 md:py-16">
          <div className="container mx-auto max-w-4xl">
            <Breadcrumbs items={[{ label: title }]} />
            <h1 className="text-4xl font-bold text-primary md:text-5xl">{title}</h1>
          </div>
        </section>

        <NativeBanner />

        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="space-y-8 text-base leading-8 text-muted-foreground [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_a]:font-semibold [&_a]:text-primary [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            {children}
          </div>
          <Banner728x90 className="pb-0 pt-12" />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
