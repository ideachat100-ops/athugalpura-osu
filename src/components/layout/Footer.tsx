"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { KathuruMalaIcon, KandyanLotusIcon, RoyalLionBadge } from "../ui/KandyanIcons";
import { GoldButton } from "../ui/GoldButton";

interface FooterProps {
  lang: string;
}

export function Footer({ lang }: FooterProps) {
  const isSi = lang === "si";

  return (
    <footer className="relative bg-[#100305] text-[#F5EEDB] border-t-2 border-[#D4AF37]/40 overflow-hidden">
      {/* Top Seamless Liyawela Gold Border Cap */}
      <div
        className="w-full h-4 md:h-6 opacity-95 shadow-[0_4px_15px_rgba(0,0,0,0.8)]"
        style={{
          backgroundImage: "url('/assets/borders/liyawela-gold-border.jpg')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

          {/* Column 1: Royal Brand Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                <Image
                  src="/assets/branding/logo-royal-tusker.jpg"
                  alt="ඇතුගල්පුර ඔසු - Athugalpura Osu"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-ceremonial text-xl font-extrabold text-gold-gradient">
                  ඇතුගල්පුර ඔසු
                </h3>
                <p className="text-xs text-[#E5C158] tracking-widest uppercase">
                  Athugalpura Osu
                </p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-[#C4B9A3] leading-relaxed">
              {isSi
                ? "ඇතුගල්පුර ඔසු යනු ශ්‍රී ලංකාවේ වසර සිය ගණනක් පැරණි පාරම්පරික රාජකීය වෙදකම සහ මහානුභාව සම්පන්න වජ්‍රායුධ ආරක්‍ෂාව ලොව පුරා විසිරී සිටින බැතිමතුන් වෙත ගෞරවයෙන් පිළිගන්වන ශුද්ධ වූ ආයතනයකි."
                : "A sacred sanctuary safeguarding 13th-century Sri Lankan royal medicine and the consecrated authority of the mythical Vajrayudha for devotees worldwide."}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
              <RoyalLionBadge className="w-5 h-5 text-[#D4AF37]" />
              <span className="font-semibold">
                {isSi ? "ශ්‍රී ලංකා පාරම්පරික වෙද සභාවේ ලියාපදිංචිය සහිතයි" : "Chartered Royal Sri Lankan Lineage"}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-ceremonial text-base text-[#FFF0BE] font-bold border-b border-[#D4AF37]/30 pb-2 flex items-center gap-2">
              <KathuruMalaIcon className="w-4 h-4 text-[#D4AF37]" />
              <span>{isSi ? "ක්ෂණික සබැඳි" : "Sacred Portals"}</span>
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-[#C4B9A3]">
              <li>
                <Link href={`/${lang}`} className="hover:text-[#FFF0BE] transition-colors flex items-center gap-2">
                  <span className="text-[#D4AF37]">›</span> {isSi ? "මුල් පිටුව" : "Home"}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/products`} className="hover:text-[#FFF0BE] transition-colors flex items-center gap-2">
                  <span className="text-[#D4AF37]">›</span> {isSi ? "නිෂ්පාදන" : "Products"}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services`} className="hover:text-[#FFF0BE] transition-colors flex items-center gap-2">
                  <span className="text-[#D4AF37]">›</span> {isSi ? "සේවාවන්" : "Services"}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="hover:text-[#FFF0BE] transition-colors flex items-center gap-2">
                  <span className="text-[#D4AF37]">›</span> {isSi ? "අප ගැන" : "About"}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="hover:text-[#FFF0BE] transition-colors flex items-center gap-2">
                  <span className="text-[#D4AF37]">›</span> {isSi ? "සම්බන්ධතා" : "Contacts"}
                </Link>
              </li>
              <li>
                <span className="text-[#8A7C6A] italic block pt-2">
                  {isSi ? "* සර්ව ආරක්ෂක වජ්‍රායුධ සහතිකය තහවුරු කිරීම" : "* Verify Certified Artifact Ledger"}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Sanctuary Landmark & Contacts */}
          <div className="space-y-4">
            <h4 className="font-ceremonial text-base text-[#FFF0BE] font-bold border-b border-[#D4AF37]/30 pb-2 flex items-center gap-2">
              <KathuruMalaIcon className="w-4 h-4 text-[#D4AF37]" />
              <span>{isSi ? "වෙද මැදුරේ තොරතුරු" : "Sanctuary Contacts"}</span>
            </h4>
            <div className="space-y-3 text-xs md:text-sm text-[#C4B9A3]">
              <div>
                <span className="block text-[#D4AF37] font-semibold text-xs">
                  {isSi ? "වෙද මැදුරේ ලිපිනය:" : "Main Sanctuary:"}
                </span>
                <p className="mt-0.5">
                  {isSi
                    ? "ශ්‍රී ඇතුගල්පුර රාජකීය වෙද මැදුර, වැල්ලව පාර, කුරුණෑගල, ශ්‍රී ලංකාව."
                    : "Sri Athugalpura Royal Veda Madura, Wellawa Road, Kurunegala, Sri Lanka."}
                </p>
              </div>
              <div>
                <span className="block text-[#D4AF37] font-semibold text-xs">
                  {isSi ? "ක්ෂණික ඇමතුම් හා WhatsApp:" : "Concierge Hotline & WhatsApp:"}
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 mt-0.5">
                  <a
                    href="tel:+94765458879"
                    className="text-[#FFF0BE] font-mono hover:text-[#D4AF37] transition-colors"
                  >
                    +94 76 545 8879
                  </a>
                  <span className="text-[#8A7C6A] hidden sm:inline">|</span>
                  <a
                    href="https://wa.me/94765458879?text=Athugalpura%20Osu%20Inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-mono font-bold hover:underline"
                  >
                    💬 076 545 8879
                  </a>
                </div>
              </div>
              <div>
                <span className="block text-[#D4AF37] font-semibold text-xs">
                  {isSi ? "විවෘත වේලාවන් (හෝරා අනුව):" : "Sacred Visiting Hours:"}
                </span>
                <p className="mt-0.5">{isSi ? "දිනපතා පෙ.ව. 06:30 - ප.ව. 07:00" : "Daily 6:30 AM – 7:00 PM"}</p>
              </div>
            </div>
          </div>

          {/* Column 4: Auspicious Alerts Newsletter */}
          <div className="space-y-4">
            <h4 className="font-ceremonial text-base text-[#FFF0BE] font-bold border-b border-[#D4AF37]/30 pb-2 flex items-center gap-2">
              <KandyanLotusIcon className="w-4 h-4 text-[#D4AF37]" />
              <span>{isSi ? "නැකත් පුවත් දැනුම්දීම්" : "Ritual & Nakath Alerts"}</span>
            </h4>
            <p className="text-xs text-[#C4B9A3] leading-relaxed">
              {isSi
                ? "එළඹෙන පෝය දින මහා ජීවම් වාර සහ විශේෂ රාජකීය ඔසු නිමැවුම් පිලිබඳ පණිවිඩ WhatsApp හෝ විද්‍යුත් තැපෑලට ලබාගන්න."
                : "Receive alerts for rare Poya full-moon energizing cycles and royal talisman batch allocations."}
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder={isSi ? "ඔබගේ විද්‍යුත් තැපෑල ඇතුළත් කරන්න..." : "Enter your email address..."}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#1C0508] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] placeholder-[#8A7C6A] focus:outline-none focus:border-[#D4AF37]"
              />
              <GoldButton variant="primary" size="sm" className="w-full">
                {isSi ? "ලියාපදිංචි වන්න" : "Subscribe to Alerts"}
              </GoldButton>
            </form>
          </div>

        </div>

        {/* Bottom Horizontal Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-[#D4AF37]/20 flex flex-col md:flex-row items-center justify-between text-xs text-[#8A7C6A] gap-4">
          <p className="text-center md:text-left">
            © 2026 ඇතුගල්පුර ඔසු (Athugalpura Osu). All Rights Reserved. Sri Lanka Indigenous Medicine Council Reg: AP/MED/2026/894
          </p>
          <div className="flex items-center gap-4 text-[#D4AF37]">
            <span>පාරිශුද්ධත්වය • ආරක්ෂාව • සෞභාග්‍යය</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
