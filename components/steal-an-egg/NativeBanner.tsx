"use client";

import { useEffect, useRef } from "react";

const nativeBannerId = "38d19cc31605060da7e41b2bd387c4a3";
const nativeBannerSrc = `https://pl30948040.effectivecpmnetwork.com/${nativeBannerId}/invoke.js`;

export function NativeBanner() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = nativeBannerSrc;
    mount.prepend(script);

    return () => {
      script.remove();
      document.getElementById(`container-${nativeBannerId}`)?.replaceChildren();
    };
  }, []);

  return (
    <aside className="bg-background px-4">
      <div className="container mx-auto max-w-6xl overflow-hidden">
        <div ref={mountRef}>
          <div id={`container-${nativeBannerId}`} />
        </div>
      </div>
    </aside>
  );
}
