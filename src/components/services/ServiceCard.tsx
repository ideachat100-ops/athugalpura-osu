import React from "react";
import Image from "next/image";
import { Service } from "@/types/service";
import { KathuruMalaIcon, KandyanLotusIcon, RoyalLionBadge } from "../ui/KandyanIcons";
import { GoldButton } from "../ui/GoldButton";

interface ServiceCardProps {
  service: Service;
  lang: string;
  onBookClick: (serviceId: string) => void;
}

export function ServiceCard({ service, lang, onBookClick }: ServiceCardProps) {
  const isSi = lang === "si";

  return (
    <div className="rounded-2xl bg-gradient-to-b from-[#1E060A] to-[#120306] border-2 border-[#D4AF37]/50 hover:border-[#D4AF37] p-6 sm:p-8 transition-all duration-500 shadow-[0_0_30px_rgba(74,14,23,0.7)] flex flex-col justify-between group">
      
      <div className="space-y-6">
        {/* Service Visual Preview */}
        <div className="relative h-60 sm:h-72 w-full rounded-xl overflow-hidden border border-[#D4AF37]/40 bg-black/40">
          <Image
            src={service.image}
            alt={isSi ? service.titleSi : service.titleEn}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-[#4A0E17]/90 border border-[#D4AF37] text-xs font-bold text-[#FFF0BE] backdrop-blur-sm shadow-md">
            {isSi ? service.durationSi : service.durationEn}
          </div>
        </div>

        {/* Title and Subtitle */}
        <div>
          <h3 className="font-ceremonial text-2xl font-bold text-gold-gradient group-hover:text-[#FFF0BE] transition-colors">
            {isSi ? service.titleSi : service.titleEn}
          </h3>
          <p className="text-xs sm:text-sm text-[#E5C158] font-semibold mt-1">
            {isSi ? service.subtitleSi : service.subtitleEn}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-[#D6CBB7] leading-relaxed font-sinhala-body">
          {isSi ? service.descriptionSi : service.descriptionEn}
        </p>

        {/* Consecration Highlights */}
        <div className="p-4 rounded-xl bg-[#24060B] border border-[#D4AF37]/30 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block">
            {isSi ? "පූජා ක්‍රියාවලියේ විශේෂාංග:" : "Sanctification Highlights:"}
          </span>
          <ul className="space-y-1.5 text-xs text-[#C4B9A3]">
            {(isSi ? service.consecrationDetailsSi : service.consecrationDetailsEn).map(
              (item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <KathuruMalaIcon className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Requirements */}
        <div className="space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A69780] block">
            {isSi ? "අවශ්‍ය තොරතුරු:" : "Devotee Information Required:"}
          </span>
          <div className="flex flex-wrap gap-2">
            {(isSi ? service.auspiciousRequirementsSi : service.auspiciousRequirementsEn).map(
              (req, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-[#160406] border border-[#D4AF37]/25 text-[11px] text-[#F5EEDB]"
                >
                  • {req}
                </span>
              )
            )}
          </div>
        </div>

      </div>

      {/* Pricing & Booking Trigger */}
      <div className="pt-6 mt-6 border-t border-[#D4AF37]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] text-[#A69780] block">
            {isSi ? "ජීවම් ගාස්තුව (පූජෝපහාර ඇතුළත්)" : "Complete Consecration Fee"}
          </span>
          <span className="text-xl sm:text-2xl font-bold text-gold-gradient">
            {isSi ? `LKR ${service.priceLKR.toLocaleString()}` : `$${service.priceUSD}`}
          </span>
        </div>

        <GoldButton
          onClick={() => onBookClick(service.id)}
          variant="primary"
          size="md"
        >
          {isSi ? "සුබ මුහුර්ත වෙන්කරවා ගැනීම" : "Book Auspicious Time"}
        </GoldButton>
      </div>

    </div>
  );
}
