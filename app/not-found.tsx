import Link from "next/link";
import { Egg } from "lucide-react";
import { SiteHeader } from "@/components/steal-an-egg/SiteHeader";
import { SiteFooter } from "@/components/steal-an-egg/SiteFooter";

export default function NotFound() {
  return <div className="min-h-screen bg-background"><SiteHeader /><main className="grid min-h-[70vh] place-items-center px-4 pt-16 text-center"><div><Egg className="mx-auto h-16 w-16 text-primary" /><p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">404 error</p><h1 className="mt-2 text-4xl font-bold text-primary">This egg is missing</h1><p className="mx-auto mt-4 max-w-lg leading-7 text-muted-foreground">The requested page does not exist. Return to the Steal An Egg Wiki and choose a verified guide or database.</p><Link href="/" className="mt-7 inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground">Back to the wiki</Link></div></main><SiteFooter /></div>;
}
