"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Image from "next/image";
import { KathuruMalaIcon, VajrayudhaEmblem } from "../ui/KandyanIcons";
import { GoldButton } from "../ui/GoldButton";

export interface CartItem {
  id: string;
  slug: string;
  title: string;
  price: number;
  currency: string;
  image: string;
  quantity: number;
  serialNumber: string;
}

interface CartContextType {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);

  // Default sample relic if cart empty for demo
  useEffect(() => {
    const saved = localStorage.getItem("athugalpura_cart");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch {
        // ignore
      }
    }
  }, []);

  const saveItems = (newItems: CartItem[]) => {
    setItems(newItems);
    localStorage.setItem("athugalpura_cart", JSON.stringify(newItems));
  };

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = (item: CartItem) => {
    const existing = items.find((i) => i.id === item.id);
    if (existing) {
      saveItems(
        items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      saveItems([...items, item]);
    }
    setIsOpen(true);
  };

  const removeItem = (id: string) => {
    saveItems(items.filter((i) => i.id !== id));
  };

  const clearCart = () => {
    saveItems([]);
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        isOpen,
        openCart,
        closeCart,
        items,
        addItem,
        removeItem,
        clearCart,
        total,
      }}
    >
      {children}
      <CartDrawerModal />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

function CartDrawerModal() {
  const { isOpen, closeCart, items, removeItem, total, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#120407] border-l-2 border-[#D4AF37]/50 shadow-[0_0_50px_rgba(74,14,23,0.9)] flex flex-col h-full z-10 text-[#F5EEDB]">
        {/* Liyawela Gold Border Header */}
        <div className="p-5 border-b border-[#D4AF37]/30 bg-gradient-to-r from-[#4A0E17] via-[#2A050A] to-[#4A0E17] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <VajrayudhaEmblem className="w-6 h-8 text-[#D4AF37]" />
            <div>
              <h3 className="font-ceremonial text-lg text-gold-gradient font-bold">
                පූජා පෙට්ටකම / Sacred Chest
              </h3>
              <p className="text-xs text-[#C4B9A3]">
                සීමිත ජීවම් වස්තූන් වෙන්කරවා ගැනීම
              </p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="w-8 h-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#FFF0BE] hover:bg-[#4A0E17] transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {confirmed ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#32080E] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.7)]">
                <KathuruMalaIcon className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h4 className="font-ceremonial text-xl text-gold-gradient font-bold">
                පූජා භාණ්ඩ වෙන්කරවා ගැනීම සාර්ථකයි!
              </h4>
              <p className="text-xs text-[#C4B9A3] leading-relaxed">
                ඔබගේ වෙන්කරවා ගැනීම රාජකීය ලේඛනාගාරයේ සටහන් විය. අපගේ ආශ්‍රමයේ ලේකම්වරයෙකු සුබ නැකතින් අභිෂේක කර සහතිකය සමඟ ඔබ හා සම්බන්ධ වනු ඇත.
              </p>
              <div className="p-3 bg-[#1C0508] border border-[#D4AF37]/30 rounded-lg text-xs font-mono text-[#D4AF37]">
                වෙන්කිරීම් අංකය: ATH-RES-2026-9042
              </div>
              <GoldButton
                onClick={() => {
                  setConfirmed(false);
                  clearCart();
                  closeCart();
                }}
                variant="primary"
                size="sm"
              >
                නැවත ආශ්‍රමයට / Return to Sanctuary
              </GoldButton>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-12 h-12 mx-auto opacity-40">
                <KathuruMalaIcon className="w-12 h-12 text-[#D4AF37]" />
              </div>
              <p className="text-sm text-[#C4B9A3]">
                පූජා පෙට්ටකම හිස්ව පවතී.
              </p>
              <p className="text-xs text-[#8A7C6A]">
                Your sacred chest is currently empty. Explore our catalog of relics.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#1C0508] border border-[#D4AF37]/30 relative group"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-[#D4AF37]/40 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-[#FFF0BE] truncate">
                    {item.title}
                  </h4>
                  <div className="text-xs text-[#C4B9A3] flex items-center gap-2 mt-0.5">
                    <span>{item.serialNumber}</span>
                    <span>•</span>
                    <span>Qty: {item.quantity}</span>
                  </div>
                  <div className="text-xs font-bold text-[#D4AF37] mt-1">
                    LKR {item.price.toLocaleString()}
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-xs text-[#8A4A52] hover:text-[#FF6B6B] transition-colors p-1"
                  title="ඉවත් කරන්න"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout */}
        {!confirmed && items.length > 0 && (
          <div className="p-5 border-t border-[#D4AF37]/30 bg-[#160407] space-y-3">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-[#C4B9A3]">මුළු මුදල / Total Consecration Fee:</span>
              <span className="text-lg text-gold-gradient font-bold">
                LKR {total.toLocaleString()}
              </span>
            </div>
            <p className="text-[11px] text-[#A69780] italic">
              * සියලු භාණ්ඩ විශේෂිත ආරක්ෂක පෙට්ටකමක තැන්පත් කර, ග්‍රහ මුහුර්ත පත්‍රය හා නිල රාජකීය සහතිකය සමඟ ලබාදේ.
            </p>
            <GoldButton
              onClick={() => {
                setIsCheckingOut(true);
                setTimeout(() => {
                  setIsCheckingOut(false);
                  setConfirmed(true);
                }, 1000);
              }}
              variant="primary"
              className="w-full"
              disabled={isCheckingOut}
            >
              {isCheckingOut ? "තහවුරු කරමින්... / Processing..." : "වෙන්කරවා ගැනීම තහවුරු කරන්න"}
            </GoldButton>
          </div>
        )}
      </div>
    </div>
  );
}
