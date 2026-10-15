"use client";

import React from "react";
import Image from "next/image";
import { VajrayudhaViewer } from "./VajrayudhaViewer";
import { GoldButton } from "../ui/GoldButton";
import { KathuruMalaIcon, KandyanLotusIcon, RoyalLionBadge } from "../ui/KandyanIcons";

interface HeroSectionProps {
  lang: string;
}

export function HeroSection({ lang }: HeroSectionProps) {
  const isSi = lang === "si";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-6 pb-16 md:py-24">
      {/* Background Temple Fresco Wallpaper with Dark Gradient Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/textures/hero-temple-bg.jpg"
          alt="Sacred Kandyan Temple Interior"
          fill
          priority
          className="object-cover opacity-55 filter brightness-90 contrast-115"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/55 to-[#1A0407]/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(10,9,8,0.75)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography, Sacred Narrative, and Royal CTAs */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            
            {/* Heritage Origin Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/50 bg-[#2A060C]/90 shadow-[0_0_20px_rgba(212,175,55,0.25)]">
              <RoyalLionBadge className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-xs font-semibold tracking-wider text-[#FFF0BE] uppercase">
                {isSi ? "ඇතුගල්පුර රාජකීය උරුමය • ක්‍රි.ව. 13 වන සියවස" : "Athugala Royal Dynasty • 13th Century Origin"}
              </span>
            </div>

            {/* Cinematic Hero Title */}
            <div className="space-y-3">
              <h1 className="font-ceremonial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F5EEDB] tracking-tight leading-[1.15]">
                <span className="block text-xl sm:text-2xl md:text-3xl font-medium text-[#C4B9A3] mb-1">
                  {isSi ? "සිතූ පැතූ සම්පත් සලසන" : "Granting Divine Prosperity"}
                </span>
                <span className="text-gold-bright drop-shadow-md">
                  {isSi ? "අභිමානවත් වජ්‍රායුධය" : "The Sacred Vajrayudha"}
                </span>{" "}
                <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-[#E5C158] mt-1">
                  {isSi ? "හා ඇතුගල්පුර පාරම්පරික දිව්‍යමය ඔසු" : "& Consecrated Royal Remedies of Athugalpura"}
                </span>
              </h1>
            </div>

            {/* Sacred Subtitle / Microcopy with precise line-height */}
            <p className="text-sm sm:text-base md:text-lg text-[#D6CBB7] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sinhala-body">
              {isSi
                ? "පුරාණ රජ දවස මහනුවර හා කුරුණෑගල ඇතුගල්පුර ශ්‍රේෂ්ඨ රාජකීය වෙද පරපුරෙන් පැවත එන, අධ්‍යාත්මික බලයෙන් පිරිපුන් ජීවම් ඖෂධ හා සර්ව ආරක්ෂක තලිස්මන් එකතුව."
                : "Passed down through royal physicians of the Kandyan & Athugalpura dynasties. Consecrated talismans and holistic remedies charged with sacred ritual sciences."}
            </p>

            {/* Dual Royal Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <GoldButton
                href={`/${lang}/products`}
                variant="primary"
                size="lg"
                icon={true}
              >
                {isSi ? "ඖෂධ නාමාවලිය" : "Explore Sacred Catalog"}
              </GoldButton>

              <GoldButton
                href={`/${lang}/services`}
                variant="secondary"
                size="lg"
                icon={true}
              >
                {isSi ? "යන්ත්‍ර ජීවම් සේවාව" : "Talisman Consecration"}
              </GoldButton>
            </div>

            {/* Verification & Purity Proof Badges */}
            <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#C4B9A3]">
              <div className="flex items-center gap-2">
                <KandyanLotusIcon className="w-5 h-5 text-[#D4AF37]" glow={true} />
                <span>{isSi ? "108 වාරයක් ජීවම් කළ පූජනීය වස්තූන්" : "108 Ritual Consecrations"}</span>
              </div>
              <div className="flex items-center gap-2">
                <KathuruMalaIcon className="w-4 h-4 text-[#D4AF37]" />
                <span>{isSi ? "පුද්ගලික ජන්ම පත්‍ර නැකත් ගැලපීම" : "Astrological Natal Synchronization"}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Antique Brass Vajrayudha Centerpiece */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ornate Circular Border Frame Behind 3D Relic */}
            <div className="relative w-full max-w-[480px]">
              <VajrayudhaViewer />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
