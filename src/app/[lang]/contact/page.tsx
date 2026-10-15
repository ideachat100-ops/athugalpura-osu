import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { SanctuaryMap } from "@/components/contact/SanctuaryMap";
import { ConciergeForm } from "@/components/contact/ConciergeForm";
import { KathuruMalaIcon, KandyanLotusIcon, RoyalLionBadge } from "@/components/ui/KandyanIcons";
import { SectionDivider } from "@/components/ui/SectionDivider";

interface ContactPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { lang } = await params;
  const isSi = lang === "si";

  return generatePageMetadata({
    title: isSi ? "රාජකීය ආශ්‍රමය හා සම්බන්ධතා" : "Sanctuary Sanctuary & Royal Concierge",
    description: isSi
      ? "කුරුණෑගල ඇතුගල්පුර රාජකීය ආශ්‍රමය වෙත පැමිණීමට වේලාවක් වෙන්කරගන්න හෝ රහස්‍ය උපදේශනයක් යොමුකරන්න."
      : "Contact our historical sanctuary located at the base of the Elephant Rock Fortress in Kurunegala, Sri Lanka. Direct WhatsApp concierge and confidential consultations.",
    lang,
    path: "/contact",
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;
  const isSi = lang === "si";

  return (
    <div className="w-full min-h-screen py-12 md:py-20 bg-[#0A0908] text-[#F5EEDB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/40 bg-[#24060B]">
            <RoyalLionBadge className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-widest text-[#E5C158] font-bold">
              {isSi ? "රාජකීය ආශ්‍රමය" : "Sacred Sanctuary"}
            </span>
          </div>

          <h1 className="font-ceremonial text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient">
            {isSi ? "කුරුණෑගල ඇතුගල්පුර ආශ්‍රම පරිශ්‍රය" : "The Kurunegala Sanctuary & Royal Concierge"}
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#C4B9A3] font-sinhala-body">
            {isSi
              ? "ඓතිහාසික ඇතුගල පාමුල පිහිටි ශුද්ධ වූ ආශ්‍රම භූමියට පැමිණීමට සුබ හෝරාවක් වෙන්කරවා ගන්න. ලොව පුරා බැතිමතුන් සඳහා 24/7 ක්‍රියාත්මක රහස්‍ය සම්බන්ධතා සේවාව."
              : "Nestled at the base of the Athugala Elephant Rock in Kurunegala, Sri Lanka. Reserve private sanctuary appointments or engage our global concierge."}
          </p>
        </div>

        {/* 2-Column Layout: Vector Sanctuary Map & Encrypted Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Interactive Stylized Vector Map with Brass Pins */}
          <div className="lg:col-span-5 space-y-8">
            <SanctuaryMap lang={lang} />

            {/* Direct Contact Cards */}
            <div className="p-6 rounded-2xl bg-[#180407] border border-[#D4AF37]/40 space-y-4">
              <h4 className="font-ceremonial text-lg font-bold text-[#FFF0BE] flex items-center gap-2">
                <KathuruMalaIcon className="w-4 h-4 text-[#D4AF37]" />
                <span>{isSi ? "ක්ෂණික සන්නිවේදන මාර්ග" : "Direct Sanctuary Communication"}</span>
              </h4>
              <div className="space-y-3 text-xs text-[#C4B9A3]">
                <div className="flex items-start gap-3">
                  <span className="text-[#D4AF37] font-bold">🏛️</span>
                  <div>
                    <span className="font-semibold text-[#FFF0BE] block">
                      {isSi ? "වෙද මැදුරේ කාර්යාලය:" : "Veda Madura Office:"}
                    </span>
                    <span>
                      {isSi
                        ? "ශ්‍රී ඇතුගල්පුර වෙද මැදුර, වැල්ලව පාර, කුරුණෑගල, ශ්‍රී ලංකාව."
                        : "Sri Athugalpura Veda Madura, Wellawa Road, Kurunegala, Sri Lanka."}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#D4AF37] font-bold">📞</span>
                  <div>
                    <span className="font-semibold text-[#FFF0BE] block">
                      {isSi ? "ක්ෂණික දුරකථන අංක:" : "Official Phone Lines:"}
                    </span>
                    <span className="font-mono text-[#D4AF37]">+94 (37) 222 4589 / +94 (77) 123 4567</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#D4AF37] font-bold">✉️</span>
                  <div>
                    <span className="font-semibold text-[#FFF0BE] block">
                      {isSi ? "විද්‍යුත් තැපෑල:" : "Sanctuary Email:"}
                    </span>
                    <span className="font-mono text-[#FFF0BE]">divine@athugalpura-osu.lk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Encrypted Concierge Form */}
          <div className="lg:col-span-7">
            <ConciergeForm lang={lang} />
          </div>

        </div>

      </div>

      <SectionDivider className="mt-20" />
    </div>
  );
}
