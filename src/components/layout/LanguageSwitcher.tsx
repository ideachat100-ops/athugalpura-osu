"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { KathuruMalaIcon } from "../ui/KandyanIcons";

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLang: string) => {
    if (newLang === currentLang) return;
    
    // Replace the language segment in pathname
    // e.g. /si/products -> /en/products or /si -> /en
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      router.push(`/${newLang}`);
    } else {
      segments[0] = newLang;
      router.push(`/${segments.join("/")}`);
    }
  };

  return (
    <div className="inline-flex items-center rounded-full p-1 border border-[#D4AF37]/40 bg-[#1A060A]/80 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
      <button
        onClick={() => switchLanguage("si")}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
          currentLang === "si"
            ? "bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-[#2A050A] shadow-[0_0_10px_rgba(212,175,55,0.5)]"
            : "text-[#C4B9A3] hover:text-[#FFF0BE]"
        }`}
        title="සිංහල භාෂාවට මාරු වන්න"
      >
        {currentLang === "si" && <KathuruMalaIcon className="w-3 h-3 text-[#2A050A]" />}
        <span>සිංහල</span>
      </button>

      <button
        onClick={() => switchLanguage("en")}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
          currentLang === "en"
            ? "bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-[#2A050A] shadow-[0_0_10px_rgba(212,175,55,0.5)]"
            : "text-[#C4B9A3] hover:text-[#FFF0BE]"
        }`}
        title="Switch to English"
      >
        {currentLang === "en" && <KathuruMalaIcon className="w-3 h-3 text-[#2A050A]" />}
        <span>English</span>
      </button>
    </div>
  );
}
