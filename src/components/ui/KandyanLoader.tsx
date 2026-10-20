"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { KathuruMalaIcon, VajrayudhaEmblem } from "./KandyanIcons";

interface KandyanLoaderProps {
  fullscreen?: boolean;
  messageSi?: string;
  messageEn?: string;
  size?: "sm" | "md" | "lg";
  lang?: string;
  showBorder?: boolean;
  progress?: number;
  showProgress?: boolean;
}

const DEFAULT_BLESSINGS_SI = [
  "සුබ මුහුර්තය සක්‍රීය වෙමින් පවතී...",
  "පූජනීය ජීවම් ශක්තිය කැඳවමින්...",
  "රාජකීය ලේඛනාගාරය විවෘත වෙමින් පවතී...",
  "ඇතුගල්පුර දිව්‍යමය සත්කාරය සූදානම් වේ...",
];

const DEFAULT_BLESSINGS_EN = [
  "Aligning with Auspicious Planetary Conjunctions...",
  "Invoking Sacred Consecration Energy...",
  "Consulting the Royal Dynasty Archives...",
  "Preparing Sacred Athugalpura Offerings...",
];

export function KandyanLoader({
  fullscreen = false,
  messageSi,
  messageEn,
  size = "md",
  lang = "si",
  showBorder = true,
  progress,
  showProgress = false,
}: KandyanLoaderProps) {
  const isSi = lang === "si";
  const [blessingIndex, setBlessingIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBlessingIndex((prev) => (prev + 1) % DEFAULT_BLESSINGS_SI.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const currentMessage = isSi
    ? messageSi || DEFAULT_BLESSINGS_SI[blessingIndex]
    : messageEn || DEFAULT_BLESSINGS_EN[blessingIndex];

  // Dimension scaling
  const sizeMap = {
    sm: {
      outerSvg: "w-28 h-28 sm:w-32 sm:h-32",
      centerLogo: 36,
      titleClass: "text-sm",
      subClass: "text-xs",
    },
    md: {
      outerSvg: "w-44 h-44 sm:w-52 sm:h-52",
      centerLogo: 56,
      titleClass: "text-base sm:text-lg",
      subClass: "text-xs sm:text-sm",
    },
    lg: {
      outerSvg: "w-56 h-56 sm:w-68 sm:h-68",
      centerLogo: 76,
      titleClass: "text-xl sm:text-2xl",
      subClass: "text-sm sm:text-base",
    },
  };

  const currentSize = sizeMap[size];

  const content = (
    <div className="flex flex-col items-center justify-center text-center p-6 space-y-6 select-none relative z-10">
      
      {/* Traditional Kandyan Concentric Chakra Engine */}
      <div className={`relative ${currentSize.outerSvg} flex items-center justify-center`}>
        
        {/* Layer 0: Divine Ras Walalla (Aura Glow with breathing animation) */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37]/20 via-[#4A0E17]/35 to-[#D4AF37]/20 blur-xl animate-kandyan-aura pointer-events-none" />

        {/* Layer 1: Outermost Clockwise Sacred Kathuru Mala & Sunburst Ring */}
        <svg
          viewBox="0 0 240 240"
          className="absolute inset-0 w-full h-full animate-kandyan-clockwise drop-shadow-[0_0_12px_rgba(212,175,55,0.65)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outermost rim with brass dots */}
          <circle cx="120" cy="120" r="114" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.85" />
          <circle cx="120" cy="120" r="108" stroke="#E5C158" strokeWidth="1" opacity="0.6" />

          {/* 16 Radiating Golden Kundala Vines (ලියවැල අංකුර) */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = i * 22.5;
            return (
              <g key={`ray-${i}`} transform={`rotate(${angle} 120 120)`}>
                {/* Traditional arch curl */}
                <path
                  d="M120 12 C114 26 112 40 120 48 C128 40 126 26 120 12Z"
                  fill="url(#loaderGoldGradient)"
                  stroke="#FFF0BE"
                  strokeWidth="0.8"
                />
                <circle cx="120" cy="8" r="3" fill="#D4AF37" stroke="#FFF0BE" strokeWidth="0.6" />
                <circle cx="120" cy="32" r="1.8" fill="#4A0E17" />
              </g>
            );
          })}

          {/* Definitions for gold gradients */}
          <defs>
            <linearGradient id="loaderGoldGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#997D25" />
            </linearGradient>
            <linearGradient id="maroonGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6B1422" />
              <stop offset="60%" stopColor="#360A10" />
              <stop offset="100%" stopColor="#140407" />
            </linearGradient>
          </defs>
        </svg>

        {/* Layer 2: Counter-Clockwise 12-Petal Kandyan Lotus Chakra (නෙළුම් මල) */}
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-[10%] w-[80%] h-[80%] animate-kandyan-counter drop-shadow-[0_0_8px_rgba(229,193,88,0.5)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="92" stroke="#997D25" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx="100" cy="100" r="86" stroke="#D4AF37" strokeWidth="1.5" opacity="0.9" />

          {/* 12 Interlocking Sacred Petals */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = i * 30;
            return (
              <g key={`petal-${i}`} transform={`rotate(${angle} 100 100)`}>
                <path
                  d="M100 22 C92 40 88 56 100 68 C112 56 108 40 100 22 Z"
                  fill="#4A0E17"
                  stroke="#D4AF37"
                  strokeWidth="1"
                />
                <circle cx="100" cy="42" r="2.5" fill="#E5C158" />
              </g>
            );
          })}
        </svg>

        {/* Layer 3: Central Imperial Medallion with Royal Tusker & Pulsing Aura */}
        <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-br from-[#E5C158] via-[#4A0E17] to-[#D4AF37] shadow-[0_0_30px_rgba(74,14,23,0.9)] flex items-center justify-center">
          <div className="relative w-full h-full rounded-full bg-[#1A0407] border-2 border-[#D4AF37] flex items-center justify-center overflow-hidden">
            
            {/* Background subtle radial texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.25)_0%,transparent_75%)]" />

            {/* Royal Tusker Emblem */}
            <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full overflow-hidden border border-[#D4AF37]/60 shadow-inner">
              <Image
                src="/assets/branding/logo-royal-tusker.jpg"
                alt="Athugalpura Royal Tusker"
                fill
                className="object-cover animate-kandyan-flame"
                priority
              />
            </div>

            {/* Traditional Golden Flame Tip (පහන් සිළුව) */}
            <div className="absolute -top-1 w-2.5 h-4 bg-gradient-to-t from-[#D4AF37] to-[#FFF0BE] rounded-full blur-[1px] animate-kandyan-flame" />
          </div>
        </div>

      </div>

      {/* Traditional Blessing & Loading Status Text */}
      <div className="space-y-2 max-w-sm sm:max-w-md mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#32080E]/90 border border-[#D4AF37]/50 shadow-md">
          <KathuruMalaIcon className="w-3.5 h-3.5 text-[#D4AF37] animate-spin" />
          <span className="text-[11px] font-bold tracking-widest text-[#FFF0BE] uppercase font-ceremonial">
            {isSi ? "ඇතුගල්පුර රාජකීය වෙද මැදුර" : "Athugalpura Royal Sanctum"}
          </span>
        </div>

        <h4 className={`font-ceremonial font-bold text-gold-gradient tracking-wide ${currentSize.titleClass}`}>
          {isSi ? "දිව්‍යමය ආශීර්වාදය සක්‍රීය වෙමින් පවතී" : "Sacred Consecration in Progress"}
        </h4>

        {/* Dynamic Transition Blessing Sentence */}
        <p className={`text-[#D6CBB7] font-sinhala-body transition-all duration-500 min-h-[1.75rem] flex items-center justify-center ${currentSize.subClass}`}>
          <span className="animate-in fade-in duration-500">{currentMessage}</span>
        </p>

        {/* 5 Traditional Sacred Blossom Indicators (පංච මහා නෙළුම් බිංදු) */}
        <div className="pt-2 flex items-center justify-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === blessingIndex % 5
                  ? "bg-[#D4AF37] scale-125 shadow-[0_0_10px_#D4AF37]"
                  : "bg-[#4A0E17] border border-[#D4AF37]/40 opacity-60"
              }`}
            />
          ))}
        </div>

        {/* Optional Smooth Gold Progress Track */}
        {showProgress && (
          <div className="pt-3 max-w-[200px] sm:max-w-xs mx-auto space-y-1.5">
            <div className="w-full h-1.5 rounded-full bg-[#200508] border border-[#D4AF37]/40 overflow-hidden relative shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-[#D4AF37] via-[#FFF0BE] to-[#D4AF37] rounded-full transition-all duration-300 shadow-[0_0_8px_#D4AF37]"
                style={{ width: `${Math.min(100, Math.max(0, progress || 0))}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-[#D4AF37] px-0.5">
              <span>{isSi ? "චාරිත්‍රානුකූල පිවිසුම" : "Ceremonial Entry"}</span>
              <span className="font-bold">{Math.round(progress || 0)}%</span>
            </div>
          </div>
        )}
      </div>

    </div>
  );

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0908]/95 backdrop-blur-xl min-h-screen w-full overflow-hidden">
        
        {/* Top Decorative Kandyan Liyawela Gold Border */}
        {showBorder && (
          <div
            className="w-full h-3 md:h-4 opacity-85 border-b border-[#D4AF37]/50 shadow-lg absolute top-0 left-0 right-0 z-20"
            style={{
              backgroundImage: "url('/assets/borders/liyawela-gold-border.jpg')",
              backgroundRepeat: "repeat-x",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />
        )}

        {/* Background Radial Temple Shadow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,14,23,0.45)_0%,rgba(10,9,8,0.95)_70%)] pointer-events-none" />

        {content}

        {/* Bottom Decorative Kandyan Liyawela Gold Border */}
        {showBorder && (
          <div
            className="w-full h-3 md:h-4 opacity-85 border-t border-[#D4AF37]/50 shadow-lg absolute bottom-0 left-0 right-0 z-20"
            style={{
              backgroundImage: "url('/assets/borders/liyawela-gold-border.jpg')",
              backgroundRepeat: "repeat-x",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />
        )}
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl bg-gradient-to-b from-[#180407] to-[#0E0305] border border-[#D4AF37]/40 shadow-[0_0_35px_rgba(74,14,23,0.6)] overflow-hidden my-4">
      {showBorder && (
        <div
          className="w-full h-2.5 opacity-80 border-b border-[#D4AF37]/30"
          style={{
            backgroundImage: "url('/assets/borders/liyawela-gold-border.jpg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
      )}
      {content}
    </div>
  );
}
