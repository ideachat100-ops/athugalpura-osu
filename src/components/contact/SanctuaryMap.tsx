import React from "react";
import { KathuruMalaIcon, KandyanLotusIcon, RoyalLionBadge } from "../ui/KandyanIcons";

interface SanctuaryMapProps {
  lang: string;
}

export function SanctuaryMap({ lang }: SanctuaryMapProps) {
  const isSi = lang === "si";

  return (
    <div className="relative rounded-2xl bg-[#140407] border-2 border-[#D4AF37]/50 shadow-[0_0_40px_rgba(74,14,23,0.7)] p-6 md:p-8 overflow-hidden text-[#F5EEDB]">

      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-[#D4AF37]/30 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B0A11] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] font-bold mb-1">
            <RoyalLionBadge className="w-4 h-4 text-[#D4AF37]" />
            <span>{isSi ? "භූගෝලීය කේන්ද්‍රය" : "Sacred Geography"}</span>
          </div>
          <h3 className="font-ceremonial text-2xl font-bold text-gold-gradient">
            {isSi ? "කුරුණෑගල ඇතුගල්පුර වෙද මැදුර" : "The Kurunegala Sanctuary Sanctuary Axis"}
          </h3>
        </div>
        <div className="hidden sm:block text-right">
          <span className="font-mono text-xs text-[#D4AF37]">
            7.4863° N, 80.3623° E
          </span>
          <p className="text-[11px] text-[#A69780]">{isSi ? "ඓතිහාසික ඇතුගල පාමුල" : "Base of the Elephant Rock"}</p>
        </div>
      </div>

      {/* Stylized Vector Map Canvas */}
      <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-[#0B0204]">
        {/* Vector Contour Terrain & Topographic Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Elephant Rock Contour (ඇතුගල හැඩතලය) */}
          <path
            d="M 50 250 C 120 180 200 120 320 100 C 440 80 540 140 680 160 C 800 180 920 120 1000 80"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M 100 280 C 180 220 280 160 420 140 C 560 120 660 180 800 200"
            fill="none"
            stroke="#997D25"
            strokeWidth="1"
          />
        </svg>

        {/* Pin 1: The Elephant Rock Fortress Peak (ඇතුගල මුදුන) */}
        <div className="absolute top-[28%] left-[28%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10">
          <div className="relative flex items-center justify-center">
            <span className="w-10 h-10 rounded-full bg-[#D4AF37]/20 animate-ping absolute" />
            <div className="w-8 h-8 rounded-full bg-[#4A0E17] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.8)]">
              <RoyalLionBadge className="w-5 h-5 text-[#FFF0BE]" />
            </div>
          </div>
          <div className="mt-2 bg-[#1C0508]/90 border border-[#D4AF37]/60 px-3 py-1.5 rounded-lg text-center backdrop-blur-sm shadow-lg whitespace-nowrap">
            <span className="text-xs font-bold text-gold-gradient block">
              {isSi ? "ඓතිහාසික ඇතුගල පර්වතය" : "Athugala Elephant Rock"}
            </span>
            <span className="text-[10px] text-[#C4B9A3]">
              {isSi ? "උන්නතාංශය 316m" : "Elevation 316m"}
            </span>
          </div>
        </div>

        {/* Pin 2: Main Athugalpura Osu Hermitage & Consecration Sanctum */}
        <div className="absolute top-[58%] left-[62%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20">
          <div className="relative flex items-center justify-center">
            <span className="w-14 h-14 rounded-full bg-[#D4AF37]/30 animate-pulse absolute" />
            <div className="w-11 h-11 rounded-full bg-[#32080E] border-2 border-[#FFF0BE] flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,1)]">
              <KandyanLotusIcon className="w-7 h-7 text-[#D4AF37]" glow={true} />
            </div>
          </div>
          <div className="mt-2 bg-[#2A050A] border-2 border-[#D4AF37] px-4 py-2 rounded-xl text-center backdrop-blur-md shadow-2xl whitespace-nowrap">
            <span className="text-xs font-extrabold text-[#FFF0BE] block">
              {isSi ? "ඇතුගල්පුර ඔසු ප්‍රධාන ජීවම් ආශ්‍රමය" : "Athugalpura Osu Main Sanctum"}
            </span>
            <span className="text-[10px] text-[#E5C158] font-mono">
              {isSi ? "පූජනීය ඖෂධාගාරය හා ලේඛනාගාරය" : "Royal Laboratories & Archival Vaults"}
            </span>
          </div>
        </div>

        {/* Compass Rose */}
        <div className="absolute bottom-4 right-4 p-2 bg-[#1C0508]/80 border border-[#D4AF37]/30 rounded-lg text-center text-[10px] font-mono text-[#D4AF37]">
          <span>N ⇧</span>
        </div>
      </div>

      {/* Sanctuary Key Landmarks */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#C4B9A3]">
        <div className="p-3 rounded-lg bg-[#1C0508] border border-[#D4AF37]/30 flex items-center gap-3">
          <KathuruMalaIcon className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
          <div>
            <span className="font-bold text-[#FFF0BE] block">
              {isSi ? "ප්‍රවේශ මාර්ගය:" : "Access Route:"}
            </span>
            <span>{isSi ? "වැල්ලව පාර, කුරුණෑගල (නගර මධ්‍යයේ සිට විනාඩි 5)" : "Wellawa Road, Kurunegala (5 Mins from City Center)"}</span>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-[#1C0508] border border-[#D4AF37]/30 flex items-center gap-3">
          <KandyanLotusIcon className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
          <div>
            <span className="font-bold text-[#FFF0BE] block">
              {isSi ? "පූජා හෝරාවන්:" : "Ritual Entry:"}
            </span>
            <span>{isSi ? "දිනපතා පෙ.ව. 06:30 - ප.ව. 07:00" : "Daily 6:30 AM – 7:00 PM"}</span>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-[#1C0508] border border-[#D4AF37]/30 flex items-center gap-3">
          <RoyalLionBadge className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
          <div>
            <span className="font-bold text-[#FFF0BE] block">
              {isSi ? "ආරක්ෂිත පහසුකම්:" : "Sanctuary Security:"}
            </span>
            <span>{isSi ? "පූජනීය වාහන නැවතුම් හා පිළිගැනීම" : "Patron Valet & Private Suites"}</span>
          </div>
        </div>
      </div>

    </div>
  );
}
