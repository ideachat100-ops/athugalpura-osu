"use client";

import React from "react";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data/products";
import { ProductCard } from "../products/ProductCard";
import { KathuruMalaIcon } from "../ui/KandyanIcons";
import { GoldButton } from "../ui/GoldButton";

interface FeaturedRelicsProps {
  lang: string;
}

export function FeaturedRelics({ lang }: FeaturedRelicsProps) {
  const isSi = lang === "si";
  const featured = PRODUCTS.slice(0, 4);

  return (
    <section className="relative py-20 bg-[#0E0305] text-[#F5EEDB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/40 bg-[#24060B]">
              <KathuruMalaIcon className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs uppercase tracking-widest text-[#E5C158] font-bold">
                {isSi ? "ප්‍රධාන පූජනීය වස්තූන්" : "Sanctified Relics"}
              </span>
            </div>
            <h2 className="font-ceremonial text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient">
              {isSi ? "අධිෂ්ඨාන පූර්වක දිව්‍යමය ඔසු හා වස්තූන්" : "Featured Consecrated Relics & Remedies"}
            </h2>
            <p className="text-xs sm:text-sm text-[#C4B9A3] max-w-2xl font-sinhala-body">
              {isSi
                ? "නියමිත සුබ මුහුර්තයන්ගෙන් අභිෂේක කර ජීවම් කරන ලද සීමිත නිමැවුම්. එක් එක් භාණ්ඩය සඳහා නිල සහතිකයක් හා රහස්‍ය අංකයක් හිමිවේ."
                : "Energized during rare planetary conjunctions and stamped with royal seals. Each relic includes serialized tamper-proof authentication."}
            </p>
          </div>

          <div>
            <GoldButton href={`/${lang}/products`} variant="secondary" size="md">
              {isSi ? "සම්පූර්ණ නාමාවලිය" : "View Entire Catalog"}
            </GoldButton>
          </div>
        </div>

        {/* 4-Column Luxury Relics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} lang={lang} />
          ))}
        </div>

      </div>
    </section>
  );
}
