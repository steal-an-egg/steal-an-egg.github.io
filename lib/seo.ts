import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function buildMetadata({ title, description, pathname }: { title: string; description: string; pathname: string }): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: pathname },
    openGraph: { title, description, url: `${siteConfig.url}${pathname}`, type: "website", siteName: siteConfig.name, images: [siteConfig.images.og] },
    twitter: { card: "summary_large_image", title, description, images: [siteConfig.images.og] },
  };
}
