"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { KathuruMalaIcon, SacredBlossomRating, RoyalLionBadge } from "../ui/KandyanIcons";
import { GoldButton } from "../ui/GoldButton";
import { QuickViewModal } from "./QuickViewModal";
import { useCart } from "../layout/CartDrawer";

interface ProductCardProps {
  product: Product;
  lang: string;
}

export function ProductCard({ product, lang }: ProductCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { addItem } = useCart();
  const isSi = lang === "si";

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      id: product.id,
      slug: product.slug,
      title: isSi ? product.titleSi : product.titleEn,
      price: isSi ? product.priceLKR : product.priceUSD,
      currency: isSi ? "LKR" : "USD",
      image: product.image,
      quantity: 1,
      serialNumber: `${product.serialNumberPrefix}108`,
    });
  };

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className="group relative rounded-2xl bg-gradient-to-b from-[#1E060A] to-[#120306] border border-[#D4AF37]/40 hover:border-[#D4AF37] p-4 sm:p-5 transition-all duration-500 hover:shadow-[0_0_35px_rgba(212,175,55,0.35)] flex flex-col justify-between cursor-pointer"
      >
        {/* Top Gold Corner Accent Badges */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A0E17]/90 border border-[#D4AF37] text-[11px] font-bold text-[#FFF0BE] shadow-md backdrop-blur-sm">
          <RoyalLionBadge className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{isSi ? product.badgeSi : product.badgeEn}</span>
        </div>

        {/* Product Media Viewport */}
        <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-black/40 mb-4">
          <Image
            src={product.image}
            alt={isSi ? product.titleSi : product.titleEn}
            fill
            className="object-cover transform group-hover:scale-108 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120306] via-transparent to-transparent opacity-60" />

          {/* Quick View Floating Pill on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <span className="px-4 py-2 rounded-full bg-[#32080E]/90 border border-[#D4AF37] text-xs font-bold text-[#FFF0BE] shadow-lg backdrop-blur-sm">
              {isSi ? "විස්තර පරීක්ෂාව" : "Quick View"}
            </span>
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-3 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <SacredBlossomRating rating={product.sacredRating} size="w-3.5 h-3.5" />
              <span className="text-[11px] text-[#A69780] font-mono">
                {product.consecrationCycles} {isSi ? "වාර" : "Cycles"}
              </span>
            </div>

            <h3 className="font-ceremonial text-base sm:text-lg font-bold text-[#F5EEDB] group-hover:text-gold-gradient transition-colors line-clamp-1">
              {isSi ? product.titleSi : product.titleEn}
            </h3>

            <p className="text-xs text-[#C4B9A3] mt-1 line-clamp-2 leading-relaxed font-sinhala-body">
              {isSi ? product.subtitleSi : product.subtitleEn}
            </p>
          </div>

          {/* Price & Add to Chest Actions */}
          <div className="pt-3 border-t border-[#D4AF37]/25 flex items-center justify-between gap-2">
            <div>
              <span className="text-[10px] text-[#A69780] block">
                {isSi ? "පූජා මුදල" : "Consecration Fee"}
              </span>
              <span className="font-bold text-base sm:text-lg text-gold-gradient">
                {isSi ? `LKR ${product.priceLKR.toLocaleString()}` : `$${product.priceUSD}`}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className="px-3.5 py-2 rounded-full bg-[#4A0E17] hover:bg-[#6B1422] border border-[#D4AF37]/60 hover:border-[#D4AF37] text-xs font-bold text-[#FFF0BE] flex items-center gap-1.5 shadow-[0_0_12px_rgba(74,14,23,0.5)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
            >
              <KathuruMalaIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{isSi ? "පෙට්ටකමට" : "Add"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <QuickViewModal
          product={product}
          onClose={() => setModalOpen(false)}
          lang={lang}
        />
      )}
    </>
  );
}
