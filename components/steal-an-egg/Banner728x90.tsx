"use client";

import { useEffect, useRef } from "react";

const desktopBanner = {
  key: "2571708357704c6ca30939b7fc0343b5",
  width: 728,
  height: 90,
};

const mobileBanner = {
  key: "4ae8aa99d6bf4069ea8d2d3a340f22ea",
  width: 320,
  height: 50,
};

const desktopMediaQuery = "(min-width: 768px)";

type BannerConfig = {
  key: string;
  format: "iframe";
  height: number;
  width: number;
  params: Record<string, never>;
};

declare global {
  interface Window {
    atOptions?: BannerConfig;
  }
}

/**
 * Loads exactly one Adsterra banner in the page document. The selected banner
 * follows the viewport width, so the two placements never share atOptions.
 */
export function Banner728x90({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(desktopMediaQuery);
    let activeScript: HTMLScriptElement | undefined;
    let activeConfig: BannerConfig | undefined;

    const clearBanner = () => {
      activeScript?.removeAttribute("src");
      activeScript?.remove();
      activeScript = undefined;

      mountRef.current?.replaceChildren();

      if (window.atOptions === activeConfig) {
        delete window.atOptions;
      }
      activeConfig = undefined;
    };

    const loadBanner = () => {
      const mount = mountRef.current;
      if (!mount) return;

      clearBanner();

      const banner = mediaQuery.matches ? desktopBanner : mobileBanner;
      const config: BannerConfig = {
        key: banner.key,
        format: "iframe",
        height: banner.height,
        width: banner.width,
        params: {},
      };
      const script = document.createElement("script");

      // Adsterra reads this global when its placement script executes.
      window.atOptions = config;
      script.type = "text/javascript";
      script.src = `https://www.highrevenueformat.com/${banner.key}/invoke.js`;
      script.dataset.adsterraPlacement = banner.key;

      mount.append(script);
      activeConfig = config;
      activeScript = script;
    };

    loadBanner();
    mediaQuery.addEventListener("change", loadBanner);

    return () => {
      mediaQuery.removeEventListener("change", loadBanner);
      clearBanner();
    };
  }, []);

  return (
    <aside
      aria-label="Advertisement"
      className={className}
      data-ad-slot="responsive-banner"
    >
      <div
        ref={mountRef}
        className="mx-auto flex min-h-[50px] w-[320px] max-w-full justify-center overflow-hidden md:min-h-[90px] md:w-[728px] md:max-w-none"
      />
    </aside>
  );
}
