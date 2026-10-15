import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { KathuruMalaIcon, KandyanLotusIcon, RoyalLionBadge, VajrayudhaEmblem } from "@/components/ui/KandyanIcons";
import { GoldButton } from "@/components/ui/GoldButton";
import { SectionDivider } from "@/components/ui/SectionDivider";

export async function generateStaticParams() {
  return [{ lang: "si" }, { lang: "en" }];
}

interface AboutPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { lang } = await params;
  const isSi = lang === "si";

  return generatePageMetadata({
    title: isSi ? "අප ගැන | ඇතුගල්පුර රාජකීය වෙද මැදුර" : "About Us | Athugalpura Royal Veda Madura",
    description: isSi
      ? "ක්‍රි.ව. 13 වන සියවසේ සතරවන පරාක්‍රමබාහු මහරජුන්ගේ දවස සිට පැවත එන ඇතුගල්පුර රාජකීය වෙද පරපුරේ හා වජ්‍රායුධ ආනුභාවයේ අසිරිමත් ඉතිහාසය."
      : "The sacred heritage and lineage of the Athugalpura Royal Veda Madura, preserving 13th-century esoteric medicine and consecrated Vajrayudha relics unbroken across centuries.",
    lang,
    path: "/about",
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  const isSi = lang === "si";

  return (
    <div className="w-full min-h-screen py-12 md:py-20 bg-[#0A0908] text-[#F5EEDB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#A69780] mb-8">
          <Link href={`/${lang}`} className="hover:text-[#D4AF37]">
            {isSi ? "මුල් පිටුව" : "Home"}
          </Link>
          <span>›</span>
          <span className="text-[#FFF0BE] font-medium">
            {isSi ? "අප ගැන" : "About Us"}
          </span>
        </nav>

        {/* Page Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#2A060C]/90 shadow-[0_0_20px_rgba(212,175,55,0.25)]">
            <RoyalLionBadge className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-widest text-[#E5C158] font-bold">
              {isSi ? "රාජකීය ඉතිහාසය හා පරම්පරාව" : "Royal Dynasty & Sacred Lineage"}
            </span>
          </div>

          <h1 className="font-ceremonial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gold-gradient leading-tight">
            {isSi ? "ඇතුගල්පුර රාජකීය වෙද මැදුරේ අසිරිමත් උරුමය" : "The Sacred Heritage of Athugalpura Veda Madura"}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#D6CBB7] max-w-3xl mx-auto font-sinhala-body leading-relaxed">
            {isSi
              ? "ක්‍රි.ව. 13 වන සියවසේ සතරවන පරාක්‍රමබාහු මහරජුන්ගේ දවස සිට අද දක්වා නොවෙනස්ව රැකගත් පූජනීය දිව්‍යමය වෛද්‍ය, යන්ත්‍ර මන්ත්‍ර හා වජ්‍රායුධ ජීවම් සම්ප්‍රදාය."
              : "Preserving 13th-century esoteric Sri Lankan royal court medicine, sacred yantra metallurgy, and consecrated Vajrayudha authority unbroken across generations."}
          </p>
        </div>

        {/* Story Section: Citadel & Secret Ola-Leaf Formulas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Visual Relic Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-4 bg-gradient-to-b from-[#32080E] to-[#140306] border-2 border-[#D4AF37]/60 shadow-[0_0_40px_rgba(74,14,23,0.9)]">
              <div className="relative h-80 sm:h-96 md:h-[420px] rounded-xl overflow-hidden border border-[#D4AF37]/40 bg-black/60">
                <Image
                  src="/assets/textures/hero-temple-bg.jpg"
                  alt="Ancient Athugala Sanctuary Interior"
                  fill
                  className="object-cover filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140306] via-transparent to-transparent opacity-80" />
                
                {/* Center Floating Seal */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] p-1 bg-[#240509]/90 shadow-[0_0_30px_rgba(212,175,55,0.8)] mb-3">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/assets/branding/logo-royal-tusker.jpg"
                        alt="Royal Tusker Seal"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
                    ESTD. 13TH CENTURY
                  </span>
                  <p className="text-sm font-ceremonial text-[#FFF0BE] font-bold mt-1">
                    {isSi ? "සතරවන පරාක්‍රමබාහු රාජකීය වෙද පරපුර" : "Court of King Parakramabahu IV"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h2 className="font-ceremonial text-2xl sm:text-3xl font-bold text-[#FFF0BE]">
                {isSi ? "ඇතුගල්පුර රාජධානිය හා රහස්‍ය වෙද වට්ටෝරු" : "The Athugala Citadel & Secret Royal Formulations"}
              </h2>
              <p className="text-sm sm:text-base text-[#D6CBB7] leading-relaxed font-sinhala-body">
                {isSi
                  ? "ශ්‍රී ලංකා ඉතිහාසයේ විභූතිමත් යුගයක් සනිටුහන් කළ සතරවන පරාක්‍රමබාහු මහරජුන්ගේ දවස, කුරුණෑගල හෙවත් ඇතුගල්පුරය රාජධානිය බවට පත්විය. එම යුගයේදී රජවාසල ප්‍රධාන වෙදදුරන් විසින් සකස් කළ අති දුර්ලභ ඖෂධ වට්ටෝරු සහ සර්ව ආරක්ෂක යන්ත්‍ර විධි පරම්පරා ගණනාවක් පුරා රහස්‍යව ආරක්ෂා කරගනු ලැබීය."
                  : "During the illustrious reign of King Parakramabahu IV in the Citadel of Athugalpura (Kurunegala), court physicians formulated sacred herbal compounds and protective yantra shields for the protection of royalty and the realm. These secret palm-leaf manuscripts were passed down in strict oral and hereditary disciple lineages."}
              </p>
              <p className="text-sm sm:text-base text-[#D6CBB7] leading-relaxed font-sinhala-body">
                {isSi
                  ? "අද දවසේ 'ඇතුගල්පුර ඔසු වෙද මැදුර' නමින් අප ලොවට විවර කරන්නේ, එම අසහාය රාජකීය උරුමයයි. අපගේ සෑම ඔසුවක්ම, සෑම වජ්‍රායුධයක්ම සහ සෑම යන්ත්‍රයක්ම නිපදවනු ලබන්නේ පුරාණ පුස්කොළ පොත්වල සඳහන් නියමිත ගුරුකුල නීතිරීති සහ නැකත් හෝරාවන්ට අනුකූලවය."
                  : "Today, under the sanctified mantle of Athugalpura Osu Veda Madura, we open this royal treasury to patrons and devotees worldwide. Every herbal elixir, antique brass Vajrayudha, and protective talisman is forged and consecrated in accordance with auspicious planetary hours and traditional guru lineages."}
              </p>
            </div>

            {/* Sacred Quote Callout */}
            <div className="p-5 rounded-xl bg-[#1C0508] border-l-4 border-[#D4AF37] space-y-2 shadow-lg">
              <p className="font-editorial italic text-sm sm:text-base text-[#FFF0BE]">
                {isSi
                  ? "“රෝග පීඩා දුරුකර සිතට ශාන්තිය සලසන, සතුරු උපද්‍රව විනාශ කර සෞභාග්‍යය උදාකරන පාරම්පරික වෙදකම යනු දිව්‍යමය දායාදයකි.”"
                  : "“To heal afflictions, restore tranquil consciousness, and dispel adversities through ancient Sri Lankan sacred metallurgy and herbal science is a divine calling.”"}
              </p>
              <span className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                {isSi ? "— ප්‍රධාන පාරම්පරික වෙද මණ්ඩලය" : "— Council of Hereditary Chief Physicians"}
              </span>
            </div>
          </div>

        </div>

        {/* Section Divider with Liyawela */}
        <SectionDivider />

        {/* 3 Sacred Pillars of Sanctity */}
        <div className="my-20">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="font-ceremonial text-2xl sm:text-3xl md:text-4xl font-bold text-gold-gradient">
              {isSi ? "අපගේ පූජනීය මූලධර්ම" : "Our Sacred Pillars of Sanctity"}
            </h2>
            <p className="text-xs sm:text-sm text-[#C4B9A3] font-sinhala-body">
              {isSi ? "වසර සිය ගණනක් පුරා නොබිඳුණු ගුණාත්මකභාවය හා ආධ්‍යාත්මික පාරිශුද්ධත්වය" : "Centuries of Unbroken Quality, Ritual Integrity, and Devotional Purity"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#20050A] to-[#120306] border border-[#D4AF37]/40 hover:border-[#D4AF37] space-y-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,14,23,0.8)]">
              <div className="w-14 h-14 rounded-full bg-[#32080E] border-2 border-[#D4AF37] flex items-center justify-center shadow-md">
                <KandyanLotusIcon className="w-8 h-8 text-[#D4AF37]" glow={true} />
              </div>
              <h3 className="font-ceremonial text-xl font-bold text-[#FFF0BE]">
                {isSi ? "පාරම්පරික පාරිශුද්ධත්වය" : "Uncompromised Purity"}
              </h3>
              <p className="text-xs sm:text-sm text-[#C4B9A3] leading-relaxed font-sinhala-body">
                {isSi
                  ? "කිසිදු කෘතිම රසායනික ද්‍රව්‍යයකින් තොරව, ශ්‍රී ලංකාවේ වනාන්තරවලින් නෙළාගත් ස්වාභාවික වන ඖෂධ 108 ක් පමණක් යොදාගැනීම."
                  : "Zero artificial compounds. Exclusively utilizing 108 wild-foraged sacred herbs sourced responsibly across pristine Sri Lankan sanctuaries."}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#20050A] to-[#120306] border border-[#D4AF37]/40 hover:border-[#D4AF37] space-y-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,14,23,0.8)]">
              <div className="w-14 h-14 rounded-full bg-[#32080E] border-2 border-[#D4AF37] flex items-center justify-center shadow-md">
                <KathuruMalaIcon className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="font-ceremonial text-xl font-bold text-[#FFF0BE]">
                {isSi ? "නැකත් ශාස්ත්‍රීය අභිෂේකය" : "Planetary Consecration"}
              </h3>
              <p className="text-xs sm:text-sm text-[#C4B9A3] leading-relaxed font-sinhala-body">
                {isSi
                  ? "සෑම පූජනීය භාණ්ඩයක්ම අමෘත සිද්ධි යෝග, ගුරු හෝරා හා පූර්ණිමා දිනයන්හිදී 108 වාරයක් අඛණ්ඩව ජීවම් කිරීම."
                  : "Every talisman is energized through 108 continuous mantra recitations during rare celestial alignments such as Amrita Siddhi Yoga and Poya Full Moons."}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#20050A] to-[#120306] border border-[#D4AF37]/40 hover:border-[#D4AF37] space-y-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,14,23,0.8)]">
              <div className="w-14 h-14 rounded-full bg-[#32080E] border-2 border-[#D4AF37] flex items-center justify-center shadow-md">
                <RoyalLionBadge className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="font-ceremonial text-xl font-bold text-[#FFF0BE]">
                {isSi ? "රාජකීය අංකිත සහතිකය" : "Archival Verification"}
              </h3>
              <p className="text-xs sm:text-sm text-[#C4B9A3] leading-relaxed font-sinhala-body">
                {isSi
                  ? "සෑම මුල් පිටපතක් සඳහාම අංකනය කළ නිල සහතිකයක් හා රහස්‍ය ලේඛනාගාර සත්‍යාපනයක් ලබාදීම."
                  : "Each relic is stamped with the Royal Kandyan Tusker seal and registered in our immutable archival ledger with a serialized tamper-proof certificate."}
              </p>
            </div>

          </div>
        </div>

        {/* The Consecrated Vajrayudha Science Spread */}
        <div className="my-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#240509] via-[#140306] to-[#240509] border-2 border-[#D4AF37]/50 shadow-[0_0_50px_rgba(74,14,23,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B0A11] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] font-bold">
                <VajrayudhaEmblem className="w-4 h-6 text-[#D4AF37]" />
                <span>{isSi ? "පුරාණ වජ්‍රායුධයේ විද්‍යාව" : "The Sacred Vajrayudha Science"}</span>
              </div>
              <h3 className="font-ceremonial text-2xl sm:text-3xl md:text-4xl font-bold text-gold-gradient">
                {isSi ? "ද්විත්ව මකර මුඛ හා බින්දු කේන්ද්‍රය" : "Dual Makara Heads & The Cosmic Bindu Axis"}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#D6CBB7] font-sinhala-body leading-relaxed">
                {isSi
                  ? "ඇතුගල්පුර රාජකීය ලේඛනාගාරයේ සඳහන් පරිදි, වජ්‍රායුධය යනු විශ්ව ශක්තිය ආකර්ෂණය කර සෘණාත්මක ග්‍රහ තරංග විනාශ කරන උත්තරීතර යන්ත්‍රයකි. පස්ලෝහ හා පිරිසිදු පිත්තල සංයෝගයෙන් වාත්තු කර, බෝධි මණ්ඩපයකදී සුවඳ දුම් අභිෂේක කරමින් දින 21 ක් පුරා පිරිත් හා ආරක්ෂක මන්ත්‍ර බලයෙන් ජීවම් කරනු ලැබේ."
                  : "As recorded in ancient Ola manuscripts, the Vajrayudha acts as a celestial antenna neutralizing destructive planetary disharmonies and psychic intrusions. Cast from pancha-loha and virgin brass, each artifact undergoes a 21-day consecration cycle under fragrant sandalwood and agarwood smoke."}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-xs text-[#FFF0BE]">
                  <span className="text-[#D4AF37]">✦</span>
                  <span>{isSi ? "සර්ව දිශා ආරක්ෂාව" : "8-Direction Boundary Shield"}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#FFF0BE]">
                  <span className="text-[#D4AF37]">✦</span>
                  <span>{isSi ? "රාහු කේතු ග්‍රහ අපල සමනය" : "Planetary Transit Mitigation"}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#FFF0BE]">
                  <span className="text-[#D4AF37]">✦</span>
                  <span>{isSi ? "සෞභාග්‍යය හා විජයග්‍රහණය" : "Prosperity & Sovereign Success"}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-72 rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl bg-black/60 p-4">
                <Image
                  src="/assets/products/vajrayudha.jpg"
                  alt="Consecrated Vajrayudha Artifact"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Leadership & Council of Hereditary Tantrik Physicians */}
        <div className="my-20">
          <div className="p-8 sm:p-12 rounded-2xl bg-[#140407] border border-[#D4AF37]/40 space-y-6">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block">
                {isSi ? "වෙද මණ්ඩලය" : "Council of Hereditary Physicians"}
              </span>
              <h3 className="font-ceremonial text-2xl sm:text-3xl font-bold text-[#FFF0BE]">
                {isSi ? "දේශීය වෛද්‍ය විශාරද හා යන්ත්‍ර මන්ත්‍ර තන්ත්‍රික ආචාර්යවරුන්" : "Senior Ayurvedic Masters & Temple Tantrik Practitioners"}
              </h3>
              <p className="text-xs sm:text-sm text-[#C4B9A3] leading-relaxed font-sinhala-body">
                {isSi
                  ? "අපගේ වෙද මැදුර මෙහෙයවනු ලබන්නේ වසර 40 කට අධික පළපුරුද්දක් සහිත, පාරම්පරික නාඩි වෙදකම සහ පුරාණ ආරක්ෂණ යන්ත්‍ර ශිල්පය මැනවින් ප්‍රගුණ කළ පාරම්පරික වෙද පරපුරක ප්‍රවීණයන් විසිනි. ශ්‍රී ලංකා දේශීය වෛද්‍ය සභාවේ පූර්ණ ලියාපදිංචිය හා රාජකීය ගුරුකුල ආශිර්වාදය අප සතුය."
                  : "Led by hereditary physicians with over 40 years of dedicated practice in traditional pulse diagnostics (Nadi Pariksha) and sacred talisman metallurgy. Fully chartered under the Sri Lanka Indigenous Medicine Council with royal lineage lineage accreditation."}
              </p>
            </div>

            <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row gap-4">
              <GoldButton
                href={`/${lang}/services`}
                variant="primary"
                size="md"
              >
                {isSi ? "ජීවම් සේවාවන් බලන්න" : "Explore Consecration Services"}
              </GoldButton>

              <GoldButton
                href={`/${lang}/contact`}
                variant="secondary"
                size="md"
              >
                {isSi ? "වෙද මැදුර අමතන්න" : "Contact Veda Madura"}
              </GoldButton>
            </div>
          </div>
        </div>

      </div>

      <SectionDivider className="mt-20" />
    </div>
  );
}
