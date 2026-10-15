"use client";

import React from "react";
import { KathuruMalaIcon } from "../ui/KandyanIcons";

interface ProductFilterProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  lang: string;
}

export function ProductFilter({
  activeCategory,
  onSelectCategory,
  lang,
}: ProductFilterProps) {
  const isSi = lang === "si";

  const categories = [
    { id: "all", labelSi: "සියල්ල", labelEn: "All Relics" },
    {
      id: "talismans",
      labelSi: "වජ්‍රායුධ හා තලිස්මන්",
      labelEn: "Vajrayudha & Talismans",
    },
    { id: "oils", labelSi: "ජීවම් තෛල", labelEn: "Consecrated Oils" },
    {
      id: "incense",
      labelSi: "දිව්‍ය ධූප හා දුම්මල",
      labelEn: "Mystic Incense & Smudges",
    },
    {
      id: "yantras",
      labelSi: "භූමි හා නිවාස යන්ත්‍ර",
      labelEn: "Protective Yantras",
    },
  ];

  return (
    <div className="flex items-center justify-center flex-wrap gap-2 md:gap-3 py-6">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              isActive
                ? "bg-gradient-to-r from-[#D4AF37] via-[#FFF2B2] to-[#D4AF37] text-[#240509] shadow-[0_0_20px_rgba(212,175,55,0.6)] font-bold scale-105"
                : "bg-[#1C0508]/80 text-[#C4B9A3] hover:text-[#FFF0BE] hover:bg-[#32080E] border border-[#D4AF37]/30"
            }`}
          >
            {isActive && <KathuruMalaIcon className="w-3.5 h-3.5 text-[#240509]" />}
            <span>{isSi ? cat.labelSi : cat.labelEn}</span>
          </button>
        );
      })}
    </div>
  );
}
