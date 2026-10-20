"use client";

import React, { useState, useEffect } from "react";
import { KandyanLoader } from "../ui/KandyanLoader";

interface KandyanPagePreloaderProps {
  lang: string;
}

export function KandyanPagePreloader({ lang }: KandyanPagePreloaderProps) {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Runs ONLY ONCE on initial site entry, never on page switches
  useEffect(() => {
    // If already played in this browsing session, do not repeat
    if (typeof window !== "undefined") {
      const alreadyPlayed = sessionStorage.getItem("athugalpura_intro_played");
      if (alreadyPlayed) {
        setLoading(false);
        return;
      }
    }

    const DURATION_MS = 3000; // 3 seconds ceremonial intro
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
      if (typeof window !== "undefined") {
        sessionStorage.setItem("athugalpura_intro_played", "true");
      }
      const hideTimer = setTimeout(() => {
        setLoading(false);
      }, 700); // 700ms smooth fadeout
      return () => clearTimeout(hideTimer);
    }, DURATION_MS);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(fadeTimer);
    };
  }, []); // Empty dependency array: NEVER re-runs on page navigation!

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
