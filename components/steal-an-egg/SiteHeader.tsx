"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

type NavItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

const navItems: NavItem[] = [
  {
    label: "Eggs",
    href: "/eggs/",
    children: [
      { label: "All Eggs", href: "/eggs/" },
      { label: "Rare Eggs", href: "/eggs/rare-eggs/" },
      { label: "Spawn Predictor", href: "/eggs/spawn-predictor/" },
      { label: "Best Eggs", href: "/eggs/best-eggs/" },
      { label: "Divine Eggs", href: "/eggs/divine-eggs/" },
      { label: "Stag Egg", href: "/eggs/stag-egg/" },
      { label: "Parasite Egg", href: "/eggs/parasite-egg/" },
    ],
  },
  {
    label: "Pets",
    href: "/pets/",
    children: [
      { label: "All Pets", href: "/pets/" },
      { label: "Best Pets", href: "/pets/best-pets/" },
      { label: "Rarest Pets", href: "/pets/rarest-pets/" },
      { label: "Ice Dragon", href: "/pets/ice-dragon/" },
      { label: "Koi", href: "/pets/koi/" },
      { label: "Dodo", href: "/pets/dodo/" },
    ],
  },
  { label: "Guide", href: "/guide/" },
  { label: "Calculator", href: "/calculator/" },
  {
    label: "Progression",
    href: "/progression/",
    children: [
      { label: "Progression Guide", href: "/progression/" },
      { label: "Speed & Treadmill", href: "/progression/speed-treadmill/" },
    ],
  },
  { label: "Codes", href: "/codes/" },
  {
    label: "Updates",
    href: "/updates/",
    children: [
      { label: "Latest Updates", href: "/updates/" },
      { label: "Sakura Event", href: "/updates/sakura-event/" },
      { label: "Monster Update", href: "/updates/monster-update/" },
      { label: "What Happened?", href: "/updates/what-happened-to-steal-an-egg/" },
    ],
  },
  { label: "Rarities", href: "/rarities/" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 shadow-lg shadow-black/10 backdrop-blur">
      <nav className="container mx-auto flex min-h-16 items-center justify-between px-4" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2 font-bold text-primary transition hover:text-primary/80" onClick={() => setOpen(false)}>
          <Image
            src={siteConfig.images.logo}
            alt="Steal An Egg Wiki logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-cover"
            priority
          />
          <span className="text-base sm:text-lg">Steal An Egg Wiki</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href);
            if (!item.children) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition ${active ? "bg-primary/15 text-primary" : "text-foreground hover:bg-surface-accent hover:text-primary"}`}
                >
                  {item.label}
                </Link>
              );
            }

            const expanded = desktopOpen === item.label;
            return (
              <div key={item.href} className="group relative" onMouseLeave={() => setDesktopOpen(null)}>
                <div className={`flex items-center rounded-md transition ${active ? "bg-primary/15 text-primary" : "text-foreground hover:bg-surface-accent hover:text-primary"}`}>
                  <Link href={item.href} className="py-2 pl-3 text-sm font-medium">{item.label}</Link>
                  <button
                    type="button"
                    className="grid h-9 w-8 place-items-center"
                    aria-label={`Toggle ${item.label} submenu`}
                    aria-expanded={expanded}
                    onClick={() => setDesktopOpen(expanded ? null : item.label)}
                  >
                    <ChevronDown className={`h-4 w-4 transition ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                </div>
                <div className={`${expanded ? "block" : "hidden"} absolute left-0 top-full min-w-52 pt-2 group-hover:block group-focus-within:block`}>
                  <div className="rounded-xl border border-border bg-card p-2 shadow-2xl shadow-black/30">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-surface-accent hover:text-primary"
                        onClick={() => setDesktopOpen(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md hover:bg-surface-accent md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-navigation" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="container mx-auto grid gap-1">
            {navItems.map((item) => {
              const sectionOpen = Boolean(mobileOpen[item.label]);
              return (
                <div key={item.href}>
                  <div className="flex items-center">
                    <Link href={item.href} onClick={() => setOpen(false)} className="min-w-0 flex-1 rounded-md px-4 py-3 text-sm font-medium hover:bg-surface-accent hover:text-primary">
                      {item.label}
                    </Link>
                    {item.children ? (
                      <button
                        type="button"
                        className="grid h-11 w-11 place-items-center rounded-md hover:bg-surface-accent"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={sectionOpen}
                        onClick={() => setMobileOpen((value) => ({ ...value, [item.label]: !sectionOpen }))}
                      >
                        <ChevronDown className={`h-5 w-5 transition ${sectionOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                      </button>
                    ) : null}
                  </div>
                  {item.children && sectionOpen ? (
                    <div className="ml-4 grid gap-1 border-l border-border pl-3">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} onClick={() => setOpen(false)} className="rounded-md px-4 py-2.5 text-sm text-muted-foreground hover:bg-surface-accent hover:text-primary">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
