import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { siteConfig } from "@/config/site";

const googleAnalyticsId = "G-0CXCHGKN68";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Steal An Egg Wiki – Eggs, Pets, Speed, Codes & Roblox Guide",
    template: "%s | Steal An Egg Wiki",
  },
  description: siteConfig.description,
  keywords: siteConfig.metadata.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  applicationName: siteConfig.name,
  openGraph: {
    title: "Steal An Egg Wiki – Eggs, Pets, Speed, Codes & Roblox Guide",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [{ url: siteConfig.images.og, width: 1200, height: 630, alt: "Steal An Egg Wiki guide to eggs, pets, progression and codes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steal An Egg Wiki – Eggs, Pets, Speed, Codes & Roblox Guide",
    description: siteConfig.description,
    images: [siteConfig.images.og],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: {
    icon: [{ url: siteConfig.images.icon.favicon, type: "image/png" }],
    apple: siteConfig.images.icon.apple,
  },
  manifest: siteConfig.metadata.manifestPath,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: siteConfig.metadata.themeColor,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        <Script
          src="https://pl30993646.profitableratecpmnetwork.com/4e/15/c2/4e15c2aa6ae067e95987d75f6bb6b839.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
