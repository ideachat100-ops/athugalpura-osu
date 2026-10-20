"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { KandyanLoader } from "../ui/KandyanLoader";

interface KandyanPagePreloaderProps {
  lang: string;
}

export function KandyanPagePreloader({ lang }: KandyanPagePreloaderProps) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Trigger 3-second ceremonial loading animation on initial load and route changes
  useEffect(() => {
    setLoading(true);
    setFading(false);
    setProgress(0);

    const DURATION_MS = 3000; // Exact 3 seconds as requested
    const INTERVAL_MS = 30;
    const increment = 100 / (DURATION_MS / INTERVAL_MS);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return next;
      });
    }, INTERVAL_MS);

    // Fade out after 3 seconds
    const fadeTimer = setTimeout(() => {
      setFading(true);
      const hideTimer = setTimeout(() => {
        setLoading(false);
      }, 700); // 700ms smooth fadeout
      return () => clearTimeout(hideTimer);
    }, DURATION_MS);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(fadeTimer);
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-700 ease-in-out select-none ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <KandyanLoader
        fullscreen={true}
        size="lg"
        lang={lang}
        progress={progress}
        showProgress={true}
      />
    </div>
  );
}
