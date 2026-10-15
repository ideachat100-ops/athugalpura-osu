"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { KathuruMalaIcon, SacredBlossomRating, VajrayudhaEmblem } from "../ui/KandyanIcons";
import { GoldButton } from "../ui/GoldButton";
import { useCart } from "../layout/CartDrawer";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  lang: string;
}

export function QuickViewModal({ product, onClose, lang }: QuickViewModalProps) {
  const { addItem } = useCart();

  if (!product) return null;

  const isSi = lang === "si";

  const handleAddToCart = () => {
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
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Luxury Modal Wrapper bounded by gold border */}
      <div className="relative w-full max-w-4xl bg-[#140407] border-2 border-[#D4AF37] rounded-2xl shadow-[0_0_60px_rgba(74,14,23,0.9)] overflow-hidden z-10 text-[#F5EEDB] my-8 animate-in zoom-in-95 duration-300">
        
        {/* Top Gold Border Strip */}
        <div
          className="w-full h-3 opacity-90"
          style={{
            backgroundImage: "url('/assets/borders/liyawela-gold-border.jpg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />

        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-[#2A050A] border border-[#D4AF37]/50 flex items-center justify-center text-[#FFF0BE] hover:bg-[#4A0E17] transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          
          {/* Left Column: Product Image & Consecration Watermark */}
          <div className="md:col-span-5 relative space-y-4">
            <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden border border-[#D4AF37]/40 bg-black/50 shadow-inner">
              <Image
                src={product.image}
                alt={isSi ? product.titleSi : product.titleEn}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#4A0E17]/90 border border-[#D4AF37] px-2.5 py-1 rounded-full text-[11px] font-bold text-[#FFF0BE]">
                {isSi ? product.badgeSi : product.badgeEn}
              </div>
            </div>

            {/* Serial Ledger ID */}
            <div className="p-3 rounded-lg bg-[#1C0508] border border-[#D4AF37]/30 text-center">
              <span className="text-[11px] text-[#A69780] block">
                {isSi ? "ලේඛනාගාර සත්‍යාපන අංකය" : "Ledger Authentication Code"}
              </span>
              <span className="font-mono text-xs font-bold text-[#D4AF37]">
                {product.serialNumberPrefix}XXXX-CERT
              </span>
            </div>
          </div>

          {/* Right Column: In-depth Ritual Details & Guidelines */}
          <div className="md:col-span-7 space-y-4 sm:space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <SacredBlossomRating rating={product.sacredRating} />
                <span className="text-xs text-[#E5C158] font-semibold">
                  (5/5 {isSi ? "පූජනීය මල් ඇගයුම" : "Sacred Blossoms"})
                </span>
              </div>
              <h3 className="font-ceremonial text-xl sm:text-2xl font-bold text-gold-gradient">
                {isSi ? product.titleSi : product.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-[#C4B9A3] mt-1 font-medium">
                {isSi ? product.subtitleSi : product.subtitleEn}
              </p>
            </div>

            <div className="text-xl sm:text-2xl font-bold text-[#FFF0BE] flex items-baseline gap-2">
              <span>{isSi ? `LKR ${product.priceLKR.toLocaleString()}` : `$${product.priceUSD}`}</span>
              <span className="text-xs text-[#8A7C6A] font-normal">
                {isSi ? "(පූජා පෙට්ටකම හා සහතිකය ඇතුළත්ය)" : "(Includes consecration scroll & chest)"}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#D6CBB7] leading-relaxed font-sinhala-body">
              {isSi ? product.descriptionSi : product.descriptionEn}
            </p>

            {/* Ritual Timing (නැකත් පදනම) */}
            <div className="p-3.5 rounded-lg bg-[#24060B] border-l-3 border-[#D4AF37] space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block">
                {isSi ? "නැකත් පදනම හා ජීවම් වාර:" : "Auspicious Consecration Timing:"}
              </span>
              <p className="text-xs text-[#F5EEDB]">
                {isSi ? product.auspiciousTimingSi : product.auspiciousTimingEn} •{" "}
                <span className="font-semibold text-[#FFF0BE]">
                  {product.consecrationCycles} {isSi ? "ජීවම් වාර" : "Mantra Cycles"}
                </span>
              </p>
            </div>

            {/* Strict Reverence Guidelines (භාවිතයට පිළිවෙත්) */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block">
                {isSi ? "භාවිතයට පිළිවෙත් හා පාරිශුද්ධත්වය:" : "Rules of Reverence & Sanctity:"}
              </span>
              <ul className="space-y-1 text-xs text-[#C4B9A3]">
                {(isSi ? product.reverenceRulesSi : product.reverenceRulesEn).map(
                  (rule, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <KathuruMalaIcon className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <GoldButton
                onClick={handleAddToCart}
                variant="primary"
                size="md"
                className="w-full sm:w-auto flex-1"
              >
                {isSi ? "පූජා පෙට්ටකමට එක්කරන්න" : "Add to Sacred Chest"}
              </GoldButton>
              <GoldButton
                onClick={onClose}
                variant="secondary"
                size="md"
                icon={false}
              >
                {isSi ? "සංවෘත කරන්න" : "Close"}
              </GoldButton>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
