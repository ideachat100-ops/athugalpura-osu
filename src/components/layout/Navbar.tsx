"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useCart } from "./CartDrawer";
import { KathuruMalaIcon, VajrayudhaEmblem } from "../ui/KandyanIcons";
import { GoldButton } from "../ui/GoldButton";

interface NavbarProps {
  lang: string;
}

export function Navbar({ lang }: NavbarProps) {
  const pathname = usePathname();
  const { openCart, items } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isSi = lang === "si";

  const navLinks = [
    { href: `/${lang}`, label: isSi ? "මුල් පිටුව" : "Home" },
    { href: `/${lang}/products`, label: isSi ? "නිෂ්පාදන" : "Products" },
    { href: `/${lang}/services`, label: isSi ? "සේවාවන්" : "Services" },
    { href: `/${lang}/about`, label: isSi ? "අප ගැන" : "About" },
    { href: `/${lang}/contact`, label: isSi ? "සම්බන්ධතා" : "Contacts" },
  ];

  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Auspicious Nakath Alert Banner */}
      <div className="bg-[#240509] border-b border-[#D4AF37]/20 text-[11px] md:text-xs py-1.5 px-4 text-center text-[#F3E5AB] flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
        <span className="font-medium">
          {isSi
            ? "අද දිනයේ සුබ හෝරාව: සර්ව සිද්ධි අමෘත යෝගය (පෙ.ව. 08:42 - 10:15) | වජ්‍රායුධ ජීවම් වාර අඛණ්ඩව ක්‍රියාත්මකයි"
            : "Today's Auspicious Planetary Transit: Amrita Siddhi Yoga (08:42 AM - 10:15 AM) | Continuous Consecrations Active"}
        </span>
      </div>

      {/* Main Frosted Glass Navbar */}
      <div className="bg-[#360910]/90 backdrop-blur-md border-b border-[#D4AF37]/30 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo with Royal Tusker Bearing Vajrayudha */}
          <Link href={`/${lang}`} className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-[#D4AF37] group-hover:border-[#FFF0BE] shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.8)] transition-all duration-500">
              <Image
                src="/assets/branding/logo-royal-tusker.jpg"
                alt="ඇතුගල්පුර ඔසු - Athugalpura Osu"
                fill
                priority
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-ceremonial text-base md:text-xl font-extrabold text-gold-gradient tracking-wide leading-none">
                ඇතුගල්පුර ඔසු
              </span>
              <span className="text-[10px] md:text-xs text-[#E5C158] tracking-widest uppercase font-semibold mt-1">
                Athugalpura Osu
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-2 ${
                    isActive
                      ? "text-[#FFF0BE] font-bold"
                      : "text-[#C4B9A3] hover:text-[#FFF0BE]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Controls */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Zero-shift Language Switcher */}
            <LanguageSwitcher currentLang={lang} />

            {/* Sacred Cart Trigger with Kandyan Flower */}
            <button
              onClick={openCart}
              className="relative p-2.5 rounded-full border border-[#D4AF37]/40 bg-[#1A060A]/80 hover:bg-[#4A0E17] text-[#FFF0BE] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] group"
              title={isSi ? "පූජා පෙට්ටකම" : "Sacred Chest"}
              aria-label="Open sacred chest"
            >
              <KathuruMalaIcon className="w-5 h-5 text-[#D4AF37] group-hover:rotate-45 transition-transform duration-300" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D4AF37] text-[#240509] font-bold text-[11px] rounded-full flex items-center justify-center border border-[#FFF0BE] shadow-md">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Concierge CTA */}
            <div className="hidden sm:block">
              <GoldButton
                href={`/${lang}/contact`}
                variant="primary"
                size="sm"
                icon={false}
              >
                {isSi ? "උපදේශනය" : "Concierge"}
              </GoldButton>
            </div>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-[#D4AF37]/30 text-[#FFF0BE] hover:bg-[#4A0E17]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Seamless Liyawela Gold Border Underbar */}
        <div
          className="w-full h-3 md:h-4 opacity-90 border-t border-[#D4AF37]/30 shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          style={{
            backgroundImage: "url('/assets/borders/liyawela-gold-border.jpg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Mobile Slide-down Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1A0407] border-b border-[#D4AF37]/40 p-6 space-y-4 shadow-[0_15px_30px_rgba(0,0,0,0.9)] animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-base font-semibold text-[#FFF0BE] hover:bg-[#4A0E17] flex items-center justify-between border-b border-[#4A0E17]"
              >
                <span>{link.label}</span>
                <KathuruMalaIcon className="w-4 h-4 text-[#D4AF37]" />
              </Link>
            ))}
          </div>
          <div className="pt-2 flex justify-center">
            <GoldButton
              href={`/${lang}/contact`}
              variant="primary"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isSi ? "රාජකීය උපදේශනය අමතන්න" : "Contact Royal Concierge"}
            </GoldButton>
          </div>
        </div>
      )}
    </header>
  );
}
