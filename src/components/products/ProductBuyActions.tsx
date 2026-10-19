"use client";

import React from "react";
import { Product } from "@/types/product";
import { useOrder } from "@/context/OrderContext";
import { KathuruMalaIcon } from "@/components/ui/KandyanIcons";
import { GoldButton } from "@/components/ui/GoldButton";

interface ProductBuyActionsProps {
  product: Product;
  lang: string;
}

export function ProductBuyActions({ product, lang }: ProductBuyActionsProps) {
  const { openOrderModal } = useOrder();
  const isSi = lang === "si";

  return (
    <div className="pt-4 space-y-3">
      {/* Primary Buy Now Button */}
      <button
        type="button"
        onClick={() => openOrderModal(product)}
        className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#FFF0BE] to-[#D4AF37] text-[#1E0408] font-ceremonial text-base sm:text-lg font-bold tracking-wide shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer border-2 border-[#FFF0BE]"
      >
        <KathuruMalaIcon className="w-5 h-5 text-[#4A0E17]" />
        <span>{isSi ? "මිලදී ගන්න (WhatsApp මඟින් ඇණවුම් කරන්න)" : "Buy Now (Order via WhatsApp)"}</span>
      </button>

      {/* Secondary Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <GoldButton
          href={`/${lang}/services#book`}
          variant="secondary"
          size="md"
          className="flex-1"
        >
          {isSi ? "නැකතින් වෙන්කරවා ගැනීම" : "Reserve with Consecration"}
        </GoldButton>

        <a
          href="https://wa.me/94765458879?text=Athugalpura%20Osu%20Inquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full bg-[#180407] hover:bg-[#25D366] text-[#FFF0BE] hover:text-black border border-[#D4AF37]/50 text-xs font-bold transition-all flex items-center justify-center gap-2"
        >
          <span>💬 WhatsApp: 076 545 8879</span>
        </a>
      </div>
    </div>
  );
}
