"use client";

import React from "react";
import Link from "next/link";
import { KathuruMalaIcon } from "./KandyanIcons";

interface GoldButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "maroon";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function GoldButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = true,
  className = "",
  type = "button",
  disabled = false,
}: GoldButtonProps) {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs md:text-sm",
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-8 py-4 text-base md:text-lg font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#D4AF37] via-[#FFF2B2] to-[#D4AF37] text-[#2A050A] font-bold border border-[#FFF0BE] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] hover:scale-[1.02]",
    secondary:
      "bg-[#1A0A0E]/80 backdrop-blur-md text-[#FFF0BE] border border-[#D4AF37]/60 hover:border-[#D4AF37] hover:bg-[#4A0E17]/60 shadow-[0_0_15px_rgba(74,14,23,0.5)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-[1.02]",
    maroon:
      "bg-gradient-to-r from-[#4A0E17] via-[#6B1422] to-[#4A0E17] text-[#FFF0BE] border border-[#D4AF37]/50 hover:border-[#D4AF37] shadow-[0_0_25px_rgba(74,14,23,0.8)] hover:shadow-[0_0_35px_rgba(212,175,55,0.4)] hover:scale-[1.02]",
  };

  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 rounded-full uppercase tracking-wider transition-all duration-300 relative group overflow-hidden cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const content = (
    <>
      {/* Subtle shine sweep effect on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      {icon && <KathuruMalaIcon className="w-4 h-4 text-current transition-transform group-hover:rotate-45" />}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {content}
    </button>
  );
}
