"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { SERVICES } from "@/lib/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { AuspiciousScheduler } from "@/components/services/AuspiciousScheduler";
import { KathuruMalaIcon, KandyanLotusIcon, RoyalLionBadge } from "@/components/ui/KandyanIcons";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function ServicesPage() {
  const params = useParams();
  const lang = (params?.lang as string) || "si";
  const isSi = lang === "si";

  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);

  const handleBookClick = (serviceId: string) => {
    setBookingServiceId(serviceId);
    // Smooth scroll to scheduler
    const el = document.getElementById("book");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen py-12 md:py-20 bg-[#0A0908] text-[#F5EEDB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/40 bg-[#24060B]">
            <KandyanLotusIcon className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-widest text-[#E5C158] font-bold">
              {isSi ? "රාජකීය ජීවම් සේවාවන්" : "Spiritual Consecration Services"}
            </span>
          </div>

          <h1 className="font-ceremonial text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient">
            {isSi ? "ජීවම් ප්‍රතිෂ්ඨාපන හා ආධ්‍යාත්මික සත්කාර" : "Sanctification, Astrology & Healing Blueprints"}
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#C4B9A3] font-sinhala-body">
            {isSi
              ? "පුද්ගලික ජන්ම පත්‍ර පරීක්ෂාව, පාරම්පරික නාඩි වෙදකම සහ ඉඩකඩම් වාස්තු ආරක්ෂණ කටයුතු ඇතුගල්පුර රාජකීය වෙද පරපුරේ මඟපෙන්වීමෙන්."
              : "Authentic talisman energization synchronized to your birth star, holistic pulse diagnosis, and boundary vastu sealing by royal court tantriks."}
          </p>
        </div>

        {/* 3 Main Services Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              lang={lang}
              onBookClick={handleBookClick}
            />
          ))}
        </div>

        {/* Calendar scheduling module with interactive auspicious time selection (සුබ මුහුර්ත වෙන්කරවා ගැනීම) */}
        <AuspiciousScheduler lang={lang} defaultServiceId={bookingServiceId} />

      </div>

      <SectionDivider className="mt-20" />
    </div>
  );
}
