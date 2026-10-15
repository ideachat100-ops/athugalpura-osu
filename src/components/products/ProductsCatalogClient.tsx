"use client";

import React, { useState } from "react";
import { PRODUCTS } from "@/lib/data/products";
import { ProductCard } from "./ProductCard";
import { ProductFilter } from "./ProductFilter";
import { KathuruMalaIcon, KandyanLotusIcon, RoyalLionBadge } from "../ui/KandyanIcons";
import { SectionDivider } from "../ui/SectionDivider";

interface ProductsCatalogClientProps {
  lang: string;
}

export function ProductsCatalogClient({ lang }: ProductsCatalogClientProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const isSi = lang === "si";

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full min-h-screen py-12 md:py-20 bg-[#0A0908] text-[#F5EEDB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/40 bg-[#24060B]">
            <RoyalLionBadge className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-widest text-[#E5C158] font-bold">
              {isSi ? "රාජකීය ඖෂධ නාමාවලිය" : "Sacred Relics Catalog"}
            </span>
          </div>

          <h1 className="font-ceremonial text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient">
            {isSi ? "දිව්‍යමය ජීවම් ඖෂධ හා පූජනීය වස්තූන්" : "Consecrated Relics & Royal Formulations"}
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#C4B9A3] font-sinhala-body">
            {isSi
              ? "ඇතුගල්පුර රාජධානියේ පාරම්පරික වට්ටෝරු අනුව, දුර්ලභ ඖෂධ පැළෑටි හා රන් පිත්තල සංයෝගයෙන් නිමවා සුබ නැකතින් ජීවම් කරන ලද ශුද්ධ වූ භාණ්ඩ."
              : "Handcrafted according to 13th-century Kandyan royal canons. Charged through continuous planetary mantras with authenticated serialized certificates."}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <ProductFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          lang={lang}
        />

        {/* Relics Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} lang={lang} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-sm text-[#C4B9A3]">
              {isSi ? "මෙම කාණ්ඩය යටතේ දැනට භාණ්ඩ නොමැත." : "No relics currently listed under this category."}
            </p>
          </div>
        )}

      </div>

      <SectionDivider className="mt-20" />
    </div>
  );
}
