"use client";

import React, { useState } from "react";
import { SERVICES } from "@/lib/data/services";
import { KathuruMalaIcon, KandyanLotusIcon, RoyalLionBadge } from "../ui/KandyanIcons";
import { GoldButton } from "../ui/GoldButton";

interface AuspiciousSchedulerProps {
  lang: string;
  defaultServiceId?: string;
}

export function AuspiciousScheduler({ lang, defaultServiceId }: AuspiciousSchedulerProps) {
  const isSi = lang === "si";

  const [selectedService, setSelectedService] = useState(
    defaultServiceId || SERVICES[0].id
  );
  const [selectedSlot, setSelectedSlot] = useState("amrita-siddhi");
  const [selectedZodiac, setSelectedZodiac] = useState("Mesha");
  const [birthStar, setBirthStar] = useState("Asvida");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [intention, setIntention] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const nakathSlots = [
    {
      id: "amrita-siddhi",
      time: "පෙ.ව. 08:42 - 10:15",
      titleSi: "අමෘත සිද්ධි මංගල යෝගය (සර්ව ශාන්ති)",
      titleEn: "Amrita Siddhi Conjunction (Universal Peace)",
      deity: "බ්‍රහස්පති දිව්‍ය ආලෝකය",
    },
    {
      id: "guru-hora",
      time: "පෙ.ව. 11:30 - ප.ව. 12:45",
      titleSi: "ගුරු හෝරා අභිෂේකය (ධන ලක්ෂ්මී යෝග)",
      titleEn: "Jupiter Hora Anointing (Wealth & Fortune)",
      deity: "මහා ලක්ෂ්මී කිරණ",
    },
    {
      id: "ravi-hora",
      time: "ප.ව. 02:15 - 03:30",
      titleSi: "රවි හෝරා විජයග්‍රහණ යෝගය (රාජකීය ජයග්‍රහණ)",
      titleEn: "Solar Hora Triumph Alignment (Sovereign Victory)",
      deity: "සූර්ය නාරායන බලය",
    },
    {
      id: "sandhya-muhurtha",
      time: "ප.ව. 06:10 - 07:25",
      titleSi: "සන්ධ්‍යා මුහුර්තය (වාස්තු හා සර්ව ආරක්ෂණ)",
      titleEn: "Twilight Sanctification (Vastu & Boundary Seal)",
      deity: "සතර වරම් දෙවිවරු",
    },
  ];

  const zodiacSigns = [
    { id: "Mesha", si: "මේෂ", en: "Aries (Mesha)" },
    { id: "Vrishabha", si: "වෘෂභ", en: "Taurus (Vrishabha)" },
    { id: "Mithuna", si: "මිථුන", en: "Gemini (Mithuna)" },
    { id: "Kataka", si: "කටක", en: "Cancer (Kataka)" },
    { id: "Simha", si: "සිංහ", en: "Leo (Simha)" },
    { id: "Kanya", si: "කන්‍යා", en: "Virgo (Kanya)" },
    { id: "Thula", si: "තුලා", en: "Libra (Thula)" },
    { id: "Vrischika", si: "වෘශ්චික", en: "Scorpio (Vrischika)" },
    { id: "Dhanu", si: "ධනු", en: "Sagittarius (Dhanu)" },
    { id: "Makara", si: "මකර", en: "Capricorn (Makara)" },
    { id: "Kumbha", si: "කුම්භ", en: "Aquarius (Kumbha)" },
    { id: "Meena", si: "මීන", en: "Pisces (Meena)" },
  ];

  const nakathStars = [
    "අස්විද (Aswini)", "බෙරණ (Bharani)", "කැති (Krittika)", "රෙහෙන (Rohini)",
    "මුවසිරස (Mrigashira)", "අද (Ardra)", "පුනාවස (Punarvasu)", "පුෂ (Pushya)",
    "අස්ලිස (Ashlesha)", "මා (Magha)", "පුවපල් (Purva Phalguni)", "උත්රපල් (Uttara Phalguni)",
    "හත (Hasta)", "සිත (Chitra)", "සා (Swati)", "විසා (Vishakha)", "අනුර (Anuradha)",
    "දෙට (Jyeshtha)", "මුල (Mula)", "පුවසල (Purva Ashadha)", "උත්රසල (Uttara Ashadha)",
    "සුවණ (Shravana)", "දෙනට (Dhanishta)", "සියාවස (Shatabhisha)", "පුවපුටුප (Purva Bhadrapada)",
    "උත්රපුටුප (Uttara Bhadrapada)", "රේවතී (Revati)"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
    }, 1200);
  };

  const currentServiceObj = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];

  return (
    <div id="book" className="relative rounded-2xl p-6 sm:p-10 md:p-12 bg-gradient-to-b from-[#1C0508] via-[#120306] to-[#1A0508] border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(74,14,23,0.8)] text-[#F5EEDB]">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#D4AF37]/30 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B0A11] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] font-bold mb-2">
            <RoyalLionBadge className="w-4 h-4 text-[#D4AF37]" />
            <span>{isSi ? "නැකත් දින දර්ශනය" : "Planetary Calendar Engine"}</span>
          </div>
          <h3 className="font-ceremonial text-2xl sm:text-3xl font-bold text-gold-gradient">
            {isSi ? "සුබ මුහුර්ත වෙන්කරවා ගැනීමේ පද්ධතිය" : "Auspicious Timing & Consecration Scheduler"}
          </h3>
        </div>
        <div className="text-right sm:text-right">
          <span className="text-[11px] text-[#A69780] block">
            {isSi ? "ප්‍රධාන රාජකීය ලේඛනාගාරය" : "Royal Archival Authority"}
          </span>
          <span className="font-mono text-xs text-[#D4AF37] font-bold">
            KUR-SANCT-2026-NAKATH
          </span>
        </div>
      </div>

      {isBooked ? (
        <div className="py-16 text-center space-y-6 max-w-xl mx-auto animate-in zoom-in-95 duration-500">
          <div className="w-20 h-20 mx-auto rounded-full bg-[#32080E] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_35px_rgba(212,175,55,0.7)]">
            <KandyanLotusIcon className="w-12 h-12 text-[#D4AF37]" glow={true} />
          </div>
          <h4 className="font-ceremonial text-2xl sm:text-3xl font-bold text-gold-gradient">
            {isSi ? "සුබ මුහුර්තය සාර්ථකව වෙන්විය!" : "Auspicious Consecration Reserved!"}
          </h4>
          <p className="text-sm text-[#D6CBB7] leading-relaxed font-sinhala-body">
            {isSi
              ? `ගරු ${fullName || "බැතිමතාණෙනි"}, ඔබගේ ${currentServiceObj.titleSi} සේවාව සඳහා තෝරාගත් නැකතට අනුව රාජකීය ආයුර්වේද වෙද මණ්ඩලයේ ප්‍රධාන වෙදදුරන් විසින් ජීවම් කටයුතු ආරම්භ කරනු ඇත. WhatsApp හෝ දුරකථනය හරහා ඔබ හා සෘජුව සම්බන්ධ වන්නෙමු.`
              : `Honored devotee ${fullName}, your booking for ${currentServiceObj.titleEn} has been locked into the planetary ledger. Our chief tantrik will initiate the 108 mantra cycles at the exact auspicious second.`}
          </p>

          <div className="p-4 bg-[#140306] border border-[#D4AF37]/40 rounded-xl space-y-2 text-xs font-mono text-left">
            <div className="flex justify-between text-[#C4B9A3]">
              <span>සේවාව / Service:</span>
              <span className="text-[#FFF0BE] font-bold">{isSi ? currentServiceObj.titleSi : currentServiceObj.titleEn}</span>
            </div>
            <div className="flex justify-between text-[#C4B9A3]">
              <span>ලග්නය හා නැකත / Transit:</span>
              <span className="text-[#D4AF37]">{selectedZodiac} • {birthStar}</span>
            </div>
            <div className="flex justify-between text-[#C4B9A3]">
              <span>ගාස්තුව / Fee:</span>
              <span className="text-[#FFF0BE] font-bold">{isSi ? `LKR ${currentServiceObj.priceLKR.toLocaleString()}` : `$${currentServiceObj.priceUSD}`}</span>
            </div>
          </div>

          <GoldButton
            onClick={() => setIsBooked(false)}
            variant="primary"
            size="md"
          >
            {isSi ? "තවත් වෙන්කිරීමක් සිදුකරන්න" : "Make Another Reservation"}
          </GoldButton>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-8">
          
          {/* Step 1: Select Desired Spiritual Service */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block">
              1. {isSi ? "පූජනීය සේවාව තෝරන්න:" : "Select Consecration Service:"}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {SERVICES.map((s) => (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => setSelectedService(s.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedService === s.id
                      ? "bg-[#360910] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                      : "bg-[#140306] border-[#D4AF37]/25 hover:border-[#D4AF37]/50"
                  }`}
                >
                  <span className="block text-xs font-bold text-[#FFF0BE]">
                    {isSi ? s.titleSi : s.titleEn}
                  </span>
                  <span className="text-[11px] text-[#A69780] block mt-1">
                    {isSi ? s.durationSi : s.durationEn}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Choose Auspicious Muhurtha Time Window */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block">
              2. {isSi ? "සුබ හෝරාව / මුහුර්තය තෝරන්න:" : "Select Planetary Muhurtha Window:"}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {nakathSlots.map((slot) => (
                <button
                  type="button"
                  key={slot.id}
                  onClick={() => setSelectedSlot(slot.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedSlot === slot.id
                      ? "bg-[#360910] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                      : "bg-[#140306] border-[#D4AF37]/25 hover:border-[#D4AF37]/50"
                  }`}
                >
                  <span className="font-mono text-xs text-[#D4AF37] font-bold block">
                    {slot.time}
                  </span>
                  <span className="text-xs font-semibold text-[#FFF0BE] block mt-1">
                    {isSi ? slot.titleSi : slot.titleEn}
                  </span>
                  <span className="text-[10px] text-[#8A7C6A] block mt-0.5">
                    {slot.deity}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Astrological Birth Star & Zodiac Matching */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block">
              3. {isSi ? "ලග්නය හා උපන් නැකත (කේන්ද්‍ර ගැලපීම):" : "Natal Star & Zodiac Alignment:"}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-[#C4B9A3] block mb-1.5">
                  {isSi ? "ලග්නය (Zodiac Ascendant):" : "Zodiac Sign:"}
                </span>
                <select
                  value={selectedZodiac}
                  onChange={(e) => setSelectedZodiac(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#140306] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] focus:outline-none focus:border-[#D4AF37]"
                >
                  {zodiacSigns.map((z) => (
                    <option key={z.id} value={z.id} className="bg-[#140306] text-[#FFF0BE]">
                      {isSi ? z.si : z.en}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <span className="text-xs text-[#C4B9A3] block mb-1.5">
                  {isSi ? "උපන් නැකත (Birth Star):" : "Birth Star (Nakshatra):"}
                </span>
                <select
                  value={birthStar}
                  onChange={(e) => setBirthStar(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#140306] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] focus:outline-none focus:border-[#D4AF37]"
                >
                  {nakathStars.map((star, idx) => (
                    <option key={idx} value={star} className="bg-[#140306] text-[#FFF0BE]">
                      {star}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Step 4: Devotee Personal Contact Details */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block">
              4. {isSi ? "බැතිමතාගේ තොරතුරු:" : "Devotee Information:"}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={isSi ? "සම්පූර්ණ නම..." : "Full Devotee Name..."}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#140306] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] placeholder-[#8A7C6A] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
              <div>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={isSi ? "දුරකථන / WhatsApp අංකය..." : "Phone / WhatsApp Number..."}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#140306] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] placeholder-[#8A7C6A] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={isSi ? "විද්‍යුත් තැපෑල..." : "Email Address..."}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#140306] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] placeholder-[#8A7C6A] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div>
              <textarea
                rows={3}
                value={intention}
                onChange={(e) => setIntention(e.target.value)}
                placeholder={isSi ? "ඔබගේ ප්‍රධාන අපේක්ෂාව හෝ විසඳාගත යුතු ගැටලුව (රහස්‍යයි)..." : "Specific Intention, Vow, or Spiritual Objective (Confidential)..."}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#140306] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] placeholder-[#8A7C6A] focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-4 border-t border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#A69780]">
              * {isSi ? "සියලු දත්ත රාජකීය ලේඛනාගාරයේ රහස්‍ය ලෙස සංරක්ෂණය කෙරේ." : "All natal data is encrypted and held under sacred sanctuary confidentiality."}
            </div>

            <GoldButton
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (isSi ? "ලියාපදිංචි කරමින්..." : "Locking Transit...") : (isSi ? "සුබ මුහුර්තය වෙන්කරවා ගන්න" : "Confirm Consecration Booking")}
            </GoldButton>
          </div>

        </form>
      )}

    </div>
  );
}
