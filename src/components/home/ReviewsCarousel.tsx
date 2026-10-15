"use client";

import React, { useState } from "react";
import Image from "next/image";
import { REVIEWS } from "@/lib/data/reviews";
import { SacredBlossomRating, KathuruMalaIcon, RoyalLionBadge } from "../ui/KandyanIcons";

interface ReviewsCarouselProps {
  lang: string;
}

export function ReviewsCarousel({ lang }: ReviewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSi = lang === "si";

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const current = REVIEWS[currentIndex];

  return (
    <section className="relative py-20 md:py-28 bg-[#0D0204] text-[#F5EEDB] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/40 bg-[#24060B]">
            <RoyalLionBadge className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-widest text-[#E5C158] font-bold">
              {isSi ? "පාරිභෝගික අත්දැකීම්" : "Devotee Chronicles"}
            </span>
          </div>

          <h2 className="font-ceremonial text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient">
            {isSi ? "බැතිමතුන්ගේ හා සුවපත් වූවන්ගේ අත්දැකීම්" : "Patron Testimonials & Consecration Proof"}
          </h2>

          <p className="text-xs sm:text-sm text-[#C4B9A3] font-sinhala-body">
            {isSi
              ? "පුරාණ පුස්කොළ පොත් පිටපත් ආරෙන් සටහන් වූ සත්‍ය සාක්ෂි"
              : "Recorded in the revered tradition of ancient palm-leaf chronicles"}
          </p>
        </div>

        {/* Ancient Palm-Leaf Manuscript (පුස්කොළ පොත) Card Container */}
        <div className="relative rounded-2xl p-6 sm:p-10 md:p-12 border-2 border-[#D4AF37]/70 shadow-[0_0_50px_rgba(212,175,55,0.25)] overflow-hidden bg-[#F5EEDB] text-[#240509]">
          
          {/* Authentic Palm Leaf Manuscript Texture Background */}
          <div className="absolute inset-0 opacity-80 pointer-events-none">
            <Image
              src="/assets/textures/palm-leaf-scroll.jpg"
              alt="Palm Leaf Manuscript Texture"
              fill
              className="object-cover filter contrast-125 sepia"
            />
          </div>

          {/* Palm-Leaf Manuscript String Binding Holes (පුස්කොළ පොත් නූල් සිදුරු) */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-1 items-center z-10 opacity-60">
            <div className="w-4 h-4 rounded-full bg-[#3B1E08] border border-[#240509]" />
            <div className="w-0.5 h-16 bg-[#3B1E08]" />
            <div className="w-4 h-4 rounded-full bg-[#3B1E08] border border-[#240509]" />
          </div>

          <div className="relative z-10 sm:pl-8 space-y-6">
            
            {/* 5 Glowing Golden Kandyan Floral Medallions (කතුරු මල) */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#3B1E08]/20 pb-4">
              <div className="flex items-center gap-2">
                <SacredBlossomRating rating={current.rating} size="w-6 h-6" />
                <span className="text-xs font-bold text-[#4A0E17] uppercase tracking-wider">
                  {isSi ? "ප්‍රත්‍යක්ෂ 5-මල් ඇගයුම" : "Verified 5-Blossom Blessing"}
                </span>
              </div>

              {/* Verified Authentication Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A0E17] text-[#FFF0BE] text-[11px] font-bold shadow-md">
                <span>✓ {isSi ? "තහවුරු කළ සහතික අංකය:" : "Verified Cert:"}</span>
                <span className="font-mono text-[#D4AF37]">{current.certificateId}</span>
              </div>
            </div>

            {/* Testimonial Quote in Sacred Serif Style */}
            <blockquote className="font-editorial italic text-base sm:text-xl md:text-2xl text-[#1E0508] leading-relaxed">
              “{isSi ? current.commentSi : current.commentEn}”
            </blockquote>

            {/* Patron Credentials & Relic Detail */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#3B1E08]/20">
              <div>
                <h4 className="font-ceremonial text-base sm:text-lg font-bold text-[#4A0E17]">
                  {isSi ? current.nameSi : current.nameEn}
                </h4>
                <p className="text-xs text-[#553311] font-medium">
                  {isSi ? current.locationSi : current.locationEn} • {current.date}
                </p>
              </div>

              <div className="text-xs text-[#4A0E17] font-semibold bg-[#E8DCBF] px-3.5 py-1.5 rounded-lg border border-[#3B1E08]/30">
                <span>{isSi ? "පූජා භාණ්ඩය:" : "Consecrated Relic:"} </span>
                <span className="font-bold">{current.verifiedArtifact}</span>
              </div>
            </div>

          </div>

          {/* Navigation Arrows for Carousel */}
          <div className="flex items-center justify-between mt-8 pt-4 relative z-10">
            <button
              onClick={prevReview}
              className="p-2 sm:p-3 rounded-full bg-[#4A0E17] hover:bg-[#6B1422] text-[#FFF0BE] border border-[#D4AF37] transition-all shadow-md flex items-center gap-1 text-xs font-bold cursor-pointer"
              aria-label="Previous chronicle"
            >
              <span>‹</span>
              <span className="hidden sm:inline">{isSi ? "පෙර සාක්ෂිය" : "Previous"}</span>
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex
                      ? "bg-[#4A0E17] w-6 border border-[#D4AF37]"
                      : "bg-[#7A5B18]/40 hover:bg-[#4A0E17]/60"
                  }`}
                  aria-label={`Jump to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-2 sm:p-3 rounded-full bg-[#4A0E17] hover:bg-[#6B1422] text-[#FFF0BE] border border-[#D4AF37] transition-all shadow-md flex items-center gap-1 text-xs font-bold cursor-pointer"
              aria-label="Next chronicle"
            >
              <span className="hidden sm:inline">{isSi ? "මීළඟ සාක්ෂිය" : "Next"}</span>
              <span>›</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
