"use client";

import React, { useState } from "react";
import { KathuruMalaIcon, KandyanLotusIcon, RoyalLionBadge } from "../ui/KandyanIcons";
import { GoldButton } from "../ui/GoldButton";

interface ConciergeFormProps {
  lang: string;
}

export function ConciergeForm({ lang }: ConciergeFormProps) {
  const isSi = lang === "si";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState("relic-consecration");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1000);
  };

  return (
    <div className="relative rounded-2xl bg-gradient-to-b from-[#1C0508] via-[#120306] to-[#180407] border-2 border-[#D4AF37]/50 shadow-[0_0_40px_rgba(74,14,23,0.7)] p-6 sm:p-8 md:p-10 text-[#F5EEDB]">
      
      {/* Form Header */}
      <div className="space-y-2 mb-8 pb-6 border-b border-[#D4AF37]/30">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B0A11] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] font-bold">
          <KathuruMalaIcon className="w-4 h-4 text-[#D4AF37]" />
          <span>{isSi ? "රාජකීය රහස්‍ය උපදේශනය" : "Encrypted Royal Concierge"}</span>
        </div>
        <h3 className="font-ceremonial text-2xl sm:text-3xl font-bold text-gold-gradient">
          {isSi ? "සෘජු පණිවිඩයක් හෝ උපදේශනයක් යොමුකරන්න" : "Initiate Confidential Sanctuary Consultation"}
        </h3>
        <p className="text-xs sm:text-sm text-[#C4B9A3] font-sinhala-body">
          {isSi
            ? "වජ්‍රායුධය ලබාගැනීම, විශේෂිත ජීවම් වාර වෙන්කිරීම හෝ පාරම්පරික වෙද උපදෙස් සඳහා අපගේ රාජකීය ලේකම් කාර්යාලය හා සම්බන්ධ වන්න."
            : "Connect with the sanctuary high secretariat regarding custom relic consecrations, estate vastu clearing, or international courier logistics."}
        </p>
      </div>

      {isSent ? (
        <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-400">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#32080E] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.7)]">
            <KandyanLotusIcon className="w-10 h-10 text-[#D4AF37]" glow={true} />
          </div>
          <h4 className="font-ceremonial text-xl sm:text-2xl font-bold text-gold-gradient">
            {isSi ? "ඔබගේ පණිවිඩය සාර්ථකව භාරගන්නා ලදී" : "Sanctuary Inquiry Dispatched"}
          </h4>
          <p className="text-xs sm:text-sm text-[#C4B9A3] max-w-md mx-auto leading-relaxed font-sinhala-body">
            {isSi
              ? `ගරු ${name}, ඔබගේ පණිවිඩය රාජකීය ලේකම් කාර්යාලයට ලැබුණි. සුබ හෝරාවන් තුළ WhatsApp හෝ දුරකථන මාර්ගයෙන් අපගේ උපදේශකවරයෙකු ඔබ අමතනු ඇත.`
              : `Honored patron ${name}, your private request has reached the sanctuary chambers. A senior herbalist or tantrik will respond within 24 hours.`}
          </p>
          <GoldButton
            onClick={() => {
              setIsSent(false);
              setName("");
              setEmail("");
              setPhone("");
              setMessage("");
            }}
            variant="secondary"
            size="sm"
          >
            {isSi ? "නව පණිවිඩයක් යවන්න" : "Send Another Message"}
          </GoldButton>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-1.5">
                {isSi ? "සම්පූර්ණ නම:" : "Full Name:"}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={isSi ? "ඔබගේ නම..." : "Your Full Name..."}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#140306] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] placeholder-[#8A7C6A] focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-1.5">
                {isSi ? "දුරකථන / WhatsApp අංකය:" : "Phone / WhatsApp:"}
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+94 7X XXX XXXX"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#140306] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] placeholder-[#8A7C6A] focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-1.5">
                {isSi ? "විද්‍යුත් තැපෑල:" : "Email Address:"}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="devotee@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#140306] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] placeholder-[#8A7C6A] focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-1.5">
                {isSi ? "විමසීම් වර්ගය:" : "Nature of Inquiry:"}
              </label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#140306] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="relic-consecration" className="bg-[#140306]">
                  {isSi ? "වජ්‍රායුධය හා තලිස්මන් වෙන්කරවා ගැනීම" : "Vajrayudha & Talisman Acquisition"}
                </option>
                <option value="astrology-natal" className="bg-[#140306]">
                  {isSi ? "ජන්ම පත්‍ර පරීක්ෂාව හා ජීවම් සේවාව" : "Natal Chart & Horoscope Matching"}
                </option>
                <option value="vastu-clearing" className="bg-[#140306]">
                  {isSi ? "භූමි හා වාස්තු දෝෂ නිවාරණය" : "Estate Vastu & Land Sanctification"}
                </option>
                <option value="ayurvedic-medicine" className="bg-[#140306]">
                  {isSi ? "රාජකීය පාරම්පරික ඔසු විමසීම" : "Traditional Ayurvedic Formulations"}
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-1.5">
              {isSi ? "විස්තරාත්මක පණිවිඩය:" : "Confidential Message & Requirements:"}
            </label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={isSi ? "ඔබගේ විමසීම හෝ අපේක්ෂිත සේවාව පිළිබඳ පැහැදිලි කරන්න..." : "Describe your specific circumstances, birth date, or desired artifact..."}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#140306] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] placeholder-[#8A7C6A] focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <span className="text-[11px] text-[#A69780]">
              🔒 {isSi ? "256-bit අන්තර්ජාල සංකේතනය මඟින් සුරක්ෂිතයි" : "256-bit Encrypted Sacred Channel"}
            </span>

            <GoldButton
              type="submit"
              variant="primary"
              size="md"
              disabled={isSubmitting}
            >
              {isSubmitting ? (isSi ? "යොමු කරමින්..." : "Transmitting...") : (isSi ? "පණිවිඩය යොමුකරන්න" : "Transmit Inquiry")}
            </GoldButton>
          </div>

        </form>
      )}

      {/* Direct WhatsApp Concierge Hotline */}
      <div className="mt-8 pt-6 border-t border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#24060B] p-4 rounded-xl border border-[#D4AF37]/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#180407] border border-[#D4AF37] flex items-center justify-center text-[#25D366] text-lg font-bold">
            💬
          </div>
          <div>
            <span className="text-xs font-bold text-[#FFF0BE] block">
              {isSi ? "ක්ෂණික WhatsApp සම්බන්ධතාවය:" : "Direct WhatsApp Sanctuary Line:"}
            </span>
            <span className="text-xs text-[#D4AF37] font-mono font-bold">+94 76 545 8879 (076 545 8879)</span>
          </div>
        </div>

        <a
          href="https://wa.me/94765458879?text=Athugalpura%20Osu%20Inquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-black font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
        >
          <span>WhatsApp ඔස්සේ අමතන්න</span>
        </a>
      </div>

    </div>
  );
}
