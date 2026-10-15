import React from "react";
import Image from "next/image";

interface SectionDividerProps {
  className?: string;
  showCenterEmblem?: boolean;
  inverted?: boolean;
}

export function SectionDivider({ className = "", showCenterEmblem = true, inverted = false }: SectionDividerProps) {
  return (
    <div className={`relative w-full overflow-hidden flex flex-col items-center justify-center my-6 md:my-10 ${className}`}>
      {/* Background Liyawela Repeat Pattern Strip */}
      <div className="w-full h-8 md:h-12 relative flex items-center justify-center">
        <div 
          className="absolute inset-0 opacity-85"
          style={{
            backgroundImage: "url('/assets/borders/liyawela-gold-border.jpg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "contain",
            backgroundPosition: "center",
            filter: inverted ? "hue-rotate(180deg)" : "none"
          }}
        />
        
        {/* Subtle Gold Shimmer Gradient Line */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-75" />
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-75" />

        {/* Center Kandyan Lotus / Vajra Medallion Anchor */}
        {showCenterEmblem && (
          <div className="relative z-10 bg-[#32080E] border-2 border-[#D4AF37] rounded-full p-1.5 md:p-2 shadow-[0_0_20px_rgba(212,175,55,0.6)]">
            <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden">
              <Image
                src="/assets/branding/kandyan-flower.jpg"
                alt="Sacred Kandyan Flower Medallion"
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
