import React from "react";
import Image from "next/image";
import { KathuruMalaIcon, KandyanLotusIcon, RoyalLionBadge } from "../ui/KandyanIcons";
import { SectionDivider } from "../ui/SectionDivider";

interface HeritageNarrativeProps {
  lang: string;
}

export function HeritageNarrative({ lang }: HeritageNarrativeProps) {
  const isSi = lang === "si";

  return (
    <section className="relative py-20 md:py-28 bg-[#120407] text-[#F5EEDB] overflow-hidden">
      {/* Background Subtle Papyrus / Fresco Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/assets/textures/palm-leaf-scroll.jpg"
          alt="Ancient Palm Leaf Manuscript Texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/40 bg-[#24060B]">
            <RoyalLionBadge className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-widest text-[#E5C158] font-bold">
              {isSi ? "මහිමය හා ඉතිහාසය" : "Lineage & Sacred History"}
            </span>
          </div>

          <h2 className="font-ceremonial text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient leading-tight">
            {isSi ? "ඇතුගල්පුර ඓතිහාසික රාජකීය උරුමය" : "The Sacred Heritage of Athugalpura"}
          </h2>

          <p className="text-sm md:text-base text-[#C4B9A3] font-sinhala-body">
            {isSi
              ? "පුරාණ ඇතුගල පාමුල උපන් අසමසම දිව්‍යමය වෛද්‍ය හා යන්ත්‍ර මන්ත්‍ර ශාස්ත්‍රය"
              : "Esoteric Healing Science Born at the Foot of the Majestic Elephant Rock Fortress"}
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Fresco Frame with Historical Vajrayudha */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-4 bg-gradient-to-b from-[#32080E] to-[#1A0407] border-2 border-[#D4AF37]/50 shadow-[0_0_40px_rgba(74,14,23,0.8)]">
              {/* Inner Decorative Border */}
              <div className="relative h-[420px] md:h-[480px] rounded-xl overflow-hidden border border-[#D4AF37]/40">
                <Image
                  src="/assets/products/vajrayudha.jpg"
                  alt="Ancient Vajrayudha Artifact"
                  fill
                  className="object-contain p-6 bg-black/60 transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#140306] via-[#140306]/80 to-transparent p-6 text-center">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    {isSi ? "පුරාණ පිත්තල වජ්‍රායුධය" : "Sacred Antique Brass Vajrayudha"}
                  </span>
                  <p className="text-[11px] text-[#A69780] mt-1">
                    {isSi ? "ක්‍රි.ව. 13 වන සියවසේ රාජකීය වාත්තු මූලාකෘතිය" : "13th Century Royal Foundry Prototype"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text Spread */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            
            <div className="space-y-4">
              <h3 className="font-ceremonial text-2xl md:text-3xl font-semibold text-[#FFF0BE]">
                {isSi ? "ද්විත්ව මකර මුඛ සහිත වජ්‍රායුධ ආනුභාවය" : "The Dual Makara & The Cosmic Bindu Axis"}
              </h3>
              <p className="text-sm md:text-base text-[#D6CBB7] leading-relaxed font-sinhala-body">
                {isSi
                  ? "ක්‍රිස්තු වර්ෂ දහතුන්වන සියවසේ සතරවන පරාක්‍රමබාහු මහරජුන්ගේ දවස කුරුණෑගල හෙවත් ඇතුගල්පුර රාජධානියේ රාජකීය මාලිගාවේ ප්‍රධාන වෙදදුරන් විසින් රහස්‍යව රැකගත් පූජනීය වට්ටෝරු සම්ප්‍රදාය අද දවස දක්වා නොවෙනස්ව පවත්වාගෙන එන්නෙමු."
                  : "Originating in the 13th century during the reign of King Parakramabahu IV in the Citadel of Athugalpura (Kurunegala), our sanctuary preserves the closely guarded herbal formulas and yantra consecrations of the royal court."}
              </p>
              <p className="text-sm md:text-base text-[#D6CBB7] leading-relaxed font-sinhala-body">
                {isSi
                  ? "විශේෂයෙන්ම ද්විත්ව මකර මුඛ සහිත පුරාණ පිත්තල වජ්‍රායුධය (Vajrayudha) යනු සර්ව දිශාවන්ගේ සතුරු උපද්‍රව, ග්‍රහ දෝෂ හා අමනුෂ්‍ය බලපෑම් සුනුවිසුනු කර සෞභාග්‍යය හා විජයග්‍රහණය උදාකරන අසහාය ශක්ති කේන්ද්‍රයකි."
                  : "The double-ended antique brass Vajrayudha—adorned with dual makara mythical guards and the central cosmic bindu—serves as an invincible energetic nexus designed to dispel negative planetary transits, evil eyes, and psychic discord while attracting supreme triumph."}
              </p>
            </div>

            {/* Sacred Quote Callout Box */}
            <div className="p-6 rounded-xl bg-[#20050A] border-l-4 border-[#D4AF37] relative space-y-2 shadow-lg">
              <p className="font-editorial italic text-base md:text-lg text-[#F5EEDB]">
                {isSi
                  ? "“සකල රෝ දුක් නසන, සිතට දිව්‍ය ශාන්තිය ගෙන දෙන, පාරම්පරික ඇතුගල්පුර ඔසු ශක්තිය ලොවටම දායාද කරමු.”"
                  : "“To restore spiritual tranquility and banish suffering through the living herbal and ritual wisdom of ancient Sri Lanka.”"}
              </p>
              <span className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                {isSi ? "— රාජකීය ප්‍රධාන වෙද මණ්ඩලය" : "— Council of Hereditary Royal Tantriks"}
              </span>
            </div>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-[#180407] border border-[#D4AF37]/30 text-center space-y-2">
                <KandyanLotusIcon className="w-6 h-6 mx-auto text-[#D4AF37]" />
                <h4 className="text-xs font-bold text-[#FFF0BE] uppercase tracking-wider">
                  {isSi ? "පාරිශුද්ධත්වය" : "Sacred Purity"}
                </h4>
                <p className="text-[11px] text-[#A69780]">
                  {isSi ? "ස්වාභාවික වන ඖෂධ 108" : "108 Pure Wild Botanicals"}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#180407] border border-[#D4AF37]/30 text-center space-y-2">
                <KathuruMalaIcon className="w-6 h-6 mx-auto text-[#D4AF37]" />
                <h4 className="text-xs font-bold text-[#FFF0BE] uppercase tracking-wider">
                  {isSi ? "නැකත් ශක්තිය" : "Planetary Timing"}
                </h4>
                <p className="text-[11px] text-[#A69780]">
                  {isSi ? "සුබ මුහුර්ත අභිෂේකය" : "Strict Muhurtha Cycles"}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#180407] border border-[#D4AF37]/30 text-center space-y-2">
                <RoyalLionBadge className="w-6 h-6 mx-auto text-[#D4AF37]" />
                <h4 className="text-xs font-bold text-[#FFF0BE] uppercase tracking-wider">
                  {isSi ? "රාජකීය මුද්‍රාව" : "Certified Seal"}
                </h4>
                <p className="text-[11px] text-[#A69780]">
                  {isSi ? "අංකනය කළ සහතිකය" : "Tamper-Proof Ledger"}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Decorative Transition Line */}
      <SectionDivider className="mt-20" />
    </section>
  );
}
