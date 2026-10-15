import React from "react";
import Image from "next/image";
import { SERVICES } from "@/lib/data/services";
import { KathuruMalaIcon, KandyanLotusIcon, RoyalLionBadge } from "../ui/KandyanIcons";
import { GoldButton } from "../ui/GoldButton";
import { SectionDivider } from "../ui/SectionDivider";

interface ServicesPreviewProps {
  lang: string;
}

export function ServicesPreview({ lang }: ServicesPreviewProps) {
  const isSi = lang === "si";

  return (
    <section className="relative py-20 md:py-28 bg-[#140407] text-[#F5EEDB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/40 bg-[#24060B]">
            <KandyanLotusIcon className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-widest text-[#E5C158] font-bold">
              {isSi ? "ආධ්‍යාත්මික සත්කාර" : "Sanctification Services"}
            </span>
          </div>

          <h2 className="font-ceremonial text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient">
            {isSi ? "විශේෂිත ජීවම් හා ආධ්‍යාත්මික සත්කාර" : "Sacred Consecration & Astrological Services"}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#C4B9A3] font-sinhala-body">
            {isSi
              ? "පුද්ගලික ජන්ම පත්‍රය (කේන්ද්‍රය) පරීක්ෂා කර සුබ නැකතින් ඉටුකරන පූජෝපහාර සේවාවන්. රාජකීය ආයුර්වේද වෙදදුරන්ගේ සෘජු මඟපෙන්වීම."
              : "Consecrations synchronized to your personal natal chart and auspicious muhurtha planetary windows, guided by hereditary court physicians."}
          </p>
        </div>

        {/* 3 Columns Service Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-gradient-to-b from-[#20050A] to-[#120306] border border-[#D4AF37]/40 hover:border-[#D4AF37] p-6 flex flex-col justify-between space-y-6 transition-all duration-500 hover:shadow-[0_0_35px_rgba(74,14,23,0.9)] group"
            >
              <div className="space-y-4">
                {/* Service Image Preview */}
                <div className="relative h-48 w-full rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-black/40">
                  <Image
                    src={service.image}
                    alt={isSi ? service.titleSi : service.titleEn}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#360910]/90 border border-[#D4AF37] text-[10px] font-bold text-[#FFF0BE]">
                    {isSi ? service.durationSi : service.durationEn}
                  </div>
                </div>

                <h3 className="font-ceremonial text-xl font-bold text-[#F5EEDB] group-hover:text-gold-gradient transition-colors">
                  {isSi ? service.titleSi : service.titleEn}
                </h3>

                <p className="text-xs text-[#C4B9A3] leading-relaxed font-sinhala-body">
                  {isSi ? service.subtitleSi : service.subtitleEn}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 pt-2 border-t border-[#D4AF37]/20">
                  {(isSi ? service.consecrationDetailsSi : service.consecrationDetailsEn).map(
                    (detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#D6CBB7]">
                        <KathuruMalaIcon className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Price & Book Button */}
              <div className="pt-4 border-t border-[#D4AF37]/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#A69780] block">
                    {isSi ? "සේවා ගාස්තුව" : "Service Fee"}
                  </span>
                  <span className="text-base font-bold text-gold-gradient">
                    {isSi ? `LKR ${service.priceLKR.toLocaleString()}` : `$${service.priceUSD}`}
                  </span>
                </div>

                <GoldButton
                  href={`/${lang}/services#book`}
                  variant="primary"
                  size="sm"
                  icon={true}
                >
                  {isSi ? "නැකත් වෙන්කරන්න" : "Book Muhurtha"}
                </GoldButton>
              </div>

            </div>
          ))}
        </div>

      </div>

      <SectionDivider className="mt-20" />
    </section>
  );
}
