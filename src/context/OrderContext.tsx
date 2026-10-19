"use client";

import React, { createContext, useContext, useState } from "react";
import { Product } from "@/types/product";
import { OrderModal } from "@/components/products/OrderModal";

interface OrderContextType {
  openOrderModal: (product: Product) => void;
  closeOrderModal: () => void;
  selectedProduct: Product | null;
  isOpen: boolean;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openOrderModal = (product: Product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeOrderModal = () => {
    setIsOpen(false);
  };

  return (
    <OrderContext.Provider
      value={{
        openOrderModal,
        closeOrderModal,
        selectedProduct,
        isOpen,
      }}
    >
      {children}
      {isOpen && selectedProduct && (
        <OrderModal
          product={selectedProduct}
          isOpen={isOpen}
          onClose={closeOrderModal}
          lang={lang}
        />
      )}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
}
