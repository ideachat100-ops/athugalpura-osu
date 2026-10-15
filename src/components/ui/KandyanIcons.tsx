import React from "react";

// Sacred Kandyan Lotus Blossom (නෙළුම් මල) - Symbol of divine purity & enlightenment
export function KandyanLotusIcon({ className = "w-6 h-6", glow = false }: { className?: string; glow?: boolean }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${glow ? "drop-shadow-[0_0_12px_rgba(212,175,55,0.7)]" : ""}`}
    >
      <circle cx="50" cy="50" r="48" fill="#1A0407" stroke="#D4AF37" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="44" stroke="#997D25" strokeWidth="0.8" strokeDasharray="2 2" />
      
      {/* 8 Outer Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <path
          key={i}
          d="M50 15 C44 26 42 36 50 44 C58 36 56 26 50 15Z"
          fill="url(#goldGradient)"
          stroke="#E5C158"
          strokeWidth="0.8"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}

      {/* 8 Inner Petals */}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
        <path
          key={`in-${i}`}
          d="M50 25 C47 32 46 39 50 44 C54 39 53 32 50 25Z"
          fill="#4A0E17"
          stroke="#D4AF37"
          strokeWidth="0.8"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}

      {/* Central Bindu Core with Sacred Granules */}
      <circle cx="50" cy="50" r="12" fill="url(#coreGradient)" stroke="#F3E5AB" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="6" fill="#D4AF37" />
      <circle cx="50" cy="50" r="2" fill="#FFFFFF" />

      <defs>
        <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#997D25" />
        </linearGradient>
        <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E5C158" />
          <stop offset="70%" stopColor="#4A0E17" />
          <stop offset="100%" stopColor="#141210" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// Kathuru Mala (කතුරු මල) - Sacred Crossed Scissor Flower Pattern
export function KathuruMalaIcon({ className = "w-6 h-6", active = true }: { className?: string; active?: boolean }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-all duration-300`}
    >
      <circle
        cx="50"
        cy="50"
        r="46"
        fill={active ? "#360A10" : "#141210"}
        stroke={active ? "#D4AF37" : "#554422"}
        strokeWidth="1.5"
      />
      {/* 4 Sacred Interlocking Curved Petals */}
      <path
        d="M50 14 C35 28 35 72 50 86 C65 72 65 28 50 14 Z"
        fill={active ? "url(#kmGold)" : "#443311"}
        stroke={active ? "#FFF0BE" : "#665522"}
        strokeWidth="1"
      />
      <path
        d="M14 50 C28 35 72 35 86 50 C72 65 28 65 14 50 Z"
        fill={active ? "url(#kmGold)" : "#443311"}
        stroke={active ? "#FFF0BE" : "#665522"}
        strokeWidth="1"
      />
      {/* 4 Diagonal Florets */}
      {[45, 135, 225, 315].map((ang, i) => (
        <circle
          key={i}
          cx="50"
          cy="26"
          r="4.5"
          fill={active ? "#E5C158" : "#554422"}
          stroke={active ? "#D4AF37" : "#332211"}
          strokeWidth="0.8"
          transform={`rotate(${ang} 50 50)`}
        />
      ))}
      {/* Center Jewel */}
      <circle cx="50" cy="50" r="8" fill={active ? "#5A121D" : "#1A1A1A"} stroke={active ? "#E5C158" : "#443311"} strokeWidth="1.5" />
      <circle cx="50" cy="50" r="3.5" fill={active ? "#FFF2B2" : "#776633"} />
      <defs>
        <linearGradient id="kmGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="60%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8A6C1C" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 5-Blossom Sacred Star Rating using Kathuru Mala
export function SacredBlossomRating({ rating = 5, max = 5, size = "w-5 h-5" }: { rating?: number; max?: number; size?: string }) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`${rating} out of ${max} sacred blossoms`}>
      {Array.from({ length: max }).map((_, index) => (
        <KathuruMalaIcon key={index} className={size} active={index < rating} />
      ))}
    </div>
  );
}

// Sacred Vajrayudha Silhouette Emblem
export function VajrayudhaEmblem({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Center Sphere (Bindu) */}
      <circle cx="50" cy="120" r="14" fill="url(#vajraGold)" stroke="#FFF0BE" strokeWidth="2" />
      <circle cx="50" cy="120" r="7" fill="#4A0E17" />

      {/* Upper Lotus Collar */}
      <path d="M38 106 C38 96 62 96 62 106 Z" fill="#D4AF37" stroke="#FFF0BE" strokeWidth="1" />
      {/* Lower Lotus Collar */}
      <path d="M38 134 C38 144 62 144 62 134 Z" fill="#D4AF37" stroke="#FFF0BE" strokeWidth="1" />

      {/* Top Prongs & Central Spear */}
      <path d="M50 96 L50 20" stroke="url(#vajraGold)" strokeWidth="6" strokeLinecap="round" />
      <path d="M50 20 L44 38 L56 38 Z" fill="#FFF0BE" />
      {/* Top Outer Curved Makara Prongs */}
      <path d="M38 96 C22 75 24 45 48 24" stroke="url(#vajraGold)" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M62 96 C78 75 76 45 52 24" stroke="url(#vajraGold)" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Bottom Prongs & Central Spear */}
      <path d="M50 144 L50 220" stroke="url(#vajraGold)" strokeWidth="6" strokeLinecap="round" />
      <path d="M50 220 L44 202 L56 202 Z" fill="#FFF0BE" />
      {/* Bottom Outer Curved Makara Prongs */}
      <path d="M38 144 C22 165 24 195 48 216" stroke="url(#vajraGold)" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M62 144 C78 165 76 195 52 216" stroke="url(#vajraGold)" strokeWidth="4" strokeLinecap="round" fill="none" />

      <defs>
        <linearGradient id="vajraGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="40%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#997D25" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Royal Heraldic Sinhala Lion Motif (සිංහ රූපය)
export function RoyalLionBadge({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="46" fill="#4A0E17" stroke="#D4AF37" strokeWidth="2" />
      {/* Stylized Kandyan Lion Profile */}
      <path
        d="M32 68 C35 55 45 52 50 45 C52 42 48 35 55 32 C62 29 68 33 66 40 C65 44 60 46 62 50 C65 56 75 60 72 68 C68 64 62 64 56 66 C48 68 40 68 32 68 Z"
        fill="#D4AF37"
        stroke="#FFF0BE"
        strokeWidth="1.2"
      />
      {/* Lion Tail Flourish (චාමර වලිගය) */}
      <path
        d="M34 66 C28 60 26 48 30 40 C34 32 40 34 38 42 C36 50 32 58 34 66 Z"
        fill="#E5C158"
        stroke="#997D25"
        strokeWidth="1"
      />
      {/* Sword / Talisman grasped in right paw */}
      <path d="M60 48 L76 34" stroke="#FFF2B2" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="76" cy="34" r="2.5" fill="#D4AF37" />
    </svg>
  );
}
