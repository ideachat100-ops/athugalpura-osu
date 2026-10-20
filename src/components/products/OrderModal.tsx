"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { KathuruMalaIcon, KandyanLotusIcon, RoyalLionBadge } from "../ui/KandyanIcons";
import { GoldButton } from "../ui/GoldButton";
import { KandyanLoader } from "../ui/KandyanLoader";

interface OrderModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  lang: string;
}

const OFFICIAL_PHONE = "0765458879";
const WHATSAPP_NUMBER = "94765458879";

export function OrderModal({ product, isOpen, onClose, lang }: OrderModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen || !product) return null;

  const isSi = lang === "si";
  const unitPrice = isSi ? product.priceLKR : product.priceUSD;
  const totalPrice = unitPrice * quantity;
  const productTitle = isSi ? product.titleSi : product.titleEn;

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, Math.min(10, prev + delta)));
  };

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!fullName.trim() || !phone.trim() || !address.trim()) {
      setErrorMsg(
        isSi
          ? "කරුණාකර ඔබගේ නම, දුරකථන අංකය සහ ලිපිනය සම්පූර්ණ කරන්න."
          : "Please provide your name, phone number, and delivery address."
      );
      return;
    }

    // Construct the elegant WhatsApp message
    const messageLines = [
      "🌿 *ඇතුගල්පුර ඔසු - නව ඇණවුමයි (New Order)* 🌿",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      `📦 *භාණ්ඩය (Product):* ${productTitle}`,
      `🔢 *ප්‍රමාණය (Quantity):* ${quantity}`,
      `💰 *මුළු මුදල (Total):* ${isSi ? `LKR ${totalPrice.toLocaleString()}` : `$${totalPrice}`}`,
      `🏷️ *කේතය (Serial Code):* ${product.serialNumberPrefix}108`,
      "",
      "👤 *පාරිභෝගික තොරතුරු (Customer Details):*",
      `• *නම (Name):* ${fullName.trim()}`,
      `• *දුරකථන අංකය (Phone):* ${phone.trim()}`,
      `• *බෙදාහැරීමේ ලිපිනය (Address):* ${address.trim()}${city.trim() ? `, ${city.trim()}` : ""}`,
      notes.trim() ? `• *විශේෂ සටහන් (Notes):* ${notes.trim()}` : "• *විශේෂ සටහන්:* නැත",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "කරුණාකර මෙම ඇණවුම තහවුරු කර බෙදාහැරීමේ විස්තර දන්වන්න. ස්තූතියි!",
      `*ඇතුගල්පුර රාජකීය වෙද මැදුර - ${OFFICIAL_PHONE}*`,
    ];

    const waText = encodeURIComponent(messageLines.join("\n"));
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;
    setLastWhatsAppUrl(waUrl);
    setIsTransmitting(true);

    setTimeout(() => {
      setIsTransmitting(false);
      setIsSubmitted(true);

      // Open WhatsApp in a new tab
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
    }, 1100);
  };

  const handleResetAndClose = () => {
    setIsTransmitting(false);
    setIsSubmitted(false);
    setQuantity(1);
    setFullName("");
    setPhone("");
    setAddress("");
    setCity("");
    setNotes("");
    setErrorMsg("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        onClick={handleResetAndClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Luxury Modal Card */}
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#1C0508] via-[#120306] to-[#180407] border-2 border-[#D4AF37] rounded-2xl shadow-[0_0_60px_rgba(74,14,23,0.95)] overflow-hidden z-10 text-[#F5EEDB] my-6 animate-in zoom-in-95 duration-300">
        
        {/* Top Gold Border Strip */}
        <div
          className="w-full h-3 opacity-90 border-b border-[#D4AF37]/40"
          style={{
            backgroundImage: "url('/assets/borders/liyawela-gold-border.jpg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />

        {/* Modal Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-[#2A050A] border border-[#D4AF37]/50 flex items-center justify-center text-[#FFF0BE] hover:bg-[#4A0E17] transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="p-5 sm:p-8">
          {isTransmitting ? (
            <div className="py-8 animate-in fade-in duration-300">
              <KandyanLoader
                size="sm"
                lang={lang}
                messageSi="ඇණවුම් තොරතුරු සුරක්ෂිතව WhatsApp වෙත යොමු කරමින් පවතී..."
                messageEn="Securing and transmitting order details to WhatsApp..."
                showBorder={false}
              />
            </div>
          ) : isSubmitted ? (
            /* Order Success State */
            <div className="text-center py-8 space-y-6 animate-in fade-in duration-500">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#24060B] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_35px_rgba(212,175,55,0.8)]">
                <KandyanLotusIcon className="w-12 h-12 text-[#D4AF37]" glow={true} />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#25D366] font-bold">
                  ✓ WhatsApp පණිවිඩය සූදානම් කෙරුණි
                </span>
                <h3 className="font-ceremonial text-2xl sm:text-3xl font-bold text-gold-gradient">
                  {isSi ? "ඔබගේ ඇණවුම සාර්ථකව යොමු විය!" : "Order Transmitted Successfully!"}
                </h3>
                <p className="text-xs sm:text-sm text-[#D6CBB7] max-w-lg mx-auto leading-relaxed font-sinhala-body">
                  {isSi
                    ? `ගරු ${fullName || "පාරිභෝගිකයාණෙනි"}, ඔබගේ ${productTitle} ඇණවුම අපගේ නිල WhatsApp අංකයට (${OFFICIAL_PHONE}) යොමු කරන ලදී. අපගේ නියෝජිතයෙකු ඉතා ඉක්මනින් ඔබ අමතා බෙදාහැරීම තහවුරු කරනු ඇත.`
                    : `Your order for ${productTitle} was sent to our official WhatsApp line (${OFFICIAL_PHONE}). Our sanctuary concierge will confirm delivery shortly.`}
                </p>
              </div>

              {/* Order Summary Box */}
              <div className="p-4 rounded-xl bg-[#140306] border border-[#D4AF37]/40 max-w-md mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between border-b border-[#D4AF37]/20 pb-2">
                  <span className="text-[#A69780]">{isSi ? "භාණ්ඩය:" : "Item:"}</span>
                  <span className="text-[#FFF0BE] font-bold truncate max-w-[200px]">{productTitle}</span>
                </div>
                <div className="flex justify-between border-b border-[#D4AF37]/20 pb-2">
                  <span className="text-[#A69780]">{isSi ? "ප්‍රමාණය:" : "Quantity:"}</span>
                  <span className="text-[#FFF0BE] font-bold">{quantity}</span>
                </div>
                <div className="flex justify-between border-b border-[#D4AF37]/20 pb-2">
                  <span className="text-[#A69780]">{isSi ? "ගෙවිය යුතු මුදල:" : "Total Price:"}</span>
                  <span className="text-[#D4AF37] font-bold">
                    {isSi ? `LKR ${totalPrice.toLocaleString()}` : `$${totalPrice}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A69780]">{isSi ? "නිල ඇමතුම් අංකය:" : "Sanctuary Phone:"}</span>
                  <span className="text-[#25D366] font-mono font-bold">{OFFICIAL_PHONE}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
                {lastWhatsAppUrl && (
                  <a
                    href={lastWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-black font-bold text-xs uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>💬 WhatsApp විවෘත නොවූයේ නම් මෙතැන ඔබන්න</span>
                  </a>
                )}
                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#32080E] hover:bg-[#4A0E17] border border-[#D4AF37]/60 text-xs font-bold text-[#FFF0BE] transition-colors"
                >
                  {isSi ? "නැවත වෙබ් අඩවියට" : "Return to Catalog"}
                </button>
              </div>
            </div>
          ) : (
            /* Order Entry Form */
            <form onSubmit={handleConfirmOrder} className="space-y-5">
              {/* Header Title */}
              <div className="flex items-center gap-3 border-b border-[#D4AF37]/30 pb-4">
                <div className="w-10 h-10 rounded-full bg-[#32080E] border border-[#D4AF37] flex items-center justify-center">
                  <KathuruMalaIcon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#E5C158]">
                      {isSi ? "ක්ෂණික මිලදී ගැනීම" : "Direct Order"}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-bold">
                      WhatsApp 0765458879
                    </span>
                  </div>
                  <h3 className="font-ceremonial text-xl sm:text-2xl font-bold text-gold-gradient">
                    {isSi ? "මිලදී ගැනීම තහවුරු කරන්න" : "Purchase & Reserve Relic"}
                  </h3>
                </div>
              </div>

              {/* Selected Product Summary Card */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#140306] border border-[#D4AF37]/40 flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-[#D4AF37]/50 bg-black/50 flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={productTitle}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <RoyalLionBadge className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="text-[10px] text-[#A69780] font-mono">
                      {product.serialNumberPrefix}108-CERT
                    </span>
                  </div>
                  <h4 className="font-ceremonial text-base sm:text-lg font-bold text-[#FFF0BE] truncate">
                    {productTitle}
                  </h4>
                  <div className="text-xs text-[#C4B9A3]">
                    {isSi ? "ඒකක පූජා මුදල:" : "Unit Fee:"}{" "}
                    <span className="font-bold text-[#D4AF37]">
                      {isSi ? `LKR ${unitPrice.toLocaleString()}` : `$${unitPrice}`}
                    </span>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-xs text-[#A69780]">{isSi ? "ප්‍රමාණය:" : "Qty:"}</span>
                    <div className="flex items-center border border-[#D4AF37]/50 rounded-lg overflow-hidden bg-[#24060B]">
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(-1)}
                        className="px-2.5 py-1 text-sm font-bold text-[#FFF0BE] hover:bg-[#4A0E17] transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 text-xs font-mono font-bold text-[#D4AF37]">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(1)}
                        className="px-2.5 py-1 text-sm font-bold text-[#FFF0BE] hover:bg-[#4A0E17] transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <div className="ml-auto text-right">
                      <span className="text-[10px] text-[#A69780] block">
                        {isSi ? "මුළු මුදල:" : "Total:"}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-gold-bright">
                        {isSi ? `LKR ${totalPrice.toLocaleString()}` : `$${totalPrice}`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Error Alert */}
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-950/80 border border-red-500/60 text-xs text-red-200">
                  {errorMsg}
                </div>
              )}

              {/* Form Input Fields */}
              <div className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#FFF0BE] flex items-center justify-between">
                      <span>{isSi ? "ඔබගේ නම:" : "Full Name:"} *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={isSi ? "උදා: කේ. ඩී. පෙරේරා" : "e.g. K. D. Perera"}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#140306] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] placeholder-[#7A6A58] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* WhatsApp / Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#FFF0BE] flex items-center justify-between">
                      <span>{isSi ? "දුරකථන / WhatsApp අංකය:" : "Phone / WhatsApp:"} *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="07X XXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#140306] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] placeholder-[#7A6A58] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#FFF0BE]">
                    {isSi ? "භාණ්ඩය ලැබිය යුතු ලිපිනය:" : "Delivery Address:"} *
                  </label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={
                      isSi
                        ? "නිවසේ අංකය, වීදිය, ගම / නගරය..."
                        : "Street address, house no, area..."
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#140306] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] placeholder-[#7A6A58] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* City / District */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#FFF0BE]">
                      {isSi ? "නගරය / දිස්ත්‍රික්කය:" : "City / District:"}
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder={isSi ? "කුරුණෑගල, කොළඹ, මහනුවර..." : "Kurunegala, Colombo, Kandy..."}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#140306] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] placeholder-[#7A6A58] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Special Notes */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#FFF0BE]">
                      {isSi ? "විශේෂ සටහන් (අවශ්‍ය නම්):" : "Special Notes (Optional):"}
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={
                        isSi
                          ? "නැකත් වේලාවන් හෝ විශේෂ අවශ්‍යතා..."
                          : "Any auspicious requirements..."
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#140306] border border-[#D4AF37]/40 text-xs text-[#FFF0BE] placeholder-[#7A6A58] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment & Security Notice */}
              <div className="p-3 rounded-lg bg-[#24060B]/70 border border-[#D4AF37]/30 text-[11px] text-[#C4B9A3] space-y-1">
                <div className="flex items-center gap-1.5 text-[#E5C158] font-bold">
                  <span>🛡️ ආරක්ෂිත බෙදාහැරීම සහ ගෙවීම:</span>
                </div>
                <p>
                  {isSi
                    ? "භාණ්ඩය නිවසටම ලැබුණු පසු මුදල් ගෙවිය හැක (Cash on Delivery). රහස්‍ය ලේඛනාගාර සහතිකය හා පූජා මුද්‍රාව සමඟ සුරක්ෂිතව එවා දෙනු ලැබේ."
                    : "Cash on delivery available islandwide. Dispatched securely in ceremonial packaging with authenticated certificate."}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-[#25D366] via-[#1EBE5D] to-[#25D366] text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:shadow-[0_0_35px_rgba(37,211,102,0.7)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">💬</span>
                  <span>{isSi ? "WhatsApp මඟින් ඇණවුම තහවුරු කරන්න" : "Confirm Order via WhatsApp"}</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="py-3 px-5 rounded-xl bg-[#2A050A] hover:bg-[#3D080F] border border-[#D4AF37]/40 text-xs font-semibold text-[#FFF0BE] transition-colors"
                >
                  {isSi ? "අවලංගු කරන්න" : "Cancel"}
                </button>
              </div>

              <div className="text-center text-[11px] text-[#A69780]">
                {isSi ? "අපගේ නිල ක්ෂණික දුරකථන අංකය:" : "Official Sanctuary Hotline:"}{" "}
                <a href={`tel:${OFFICIAL_PHONE}`} className="text-[#D4AF37] font-mono font-bold hover:underline">
                  {OFFICIAL_PHONE}
                </a>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
