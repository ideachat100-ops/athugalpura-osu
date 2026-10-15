import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { ProductsCatalogClient } from "@/components/products/ProductsCatalogClient";

interface ProductsPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: ProductsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const isSi = lang === "si";

  return generatePageMetadata({
    title: isSi ? "දිව්‍යමය ඖෂධ හා ජීවම් වස්තූන් නාමාවලිය" : "Sacred Artifacts & Relics Catalog",
    description: isSi
      ? "පුරාණ පිත්තල වජ්‍රායුධය, සර්ව ආරක්ෂක රාජකීය තෛලය, මහා සුදර්ශන ධූපය සහ භූමි ආරක්ෂා යන්ත්‍ර පරීක්ෂා කර වෙන්කරවා ගන්න."
      : "Explore our collection of authentic consecrated Sri Lankan artifacts: the Royal Brass Vajrayudha, Sarwa Rakshaka Tailaya, Maha Sudarshana Dhoopa, and Bhoomi Raksha Yantras.",
    lang,
    path: "/products",
  });
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { lang } = await params;

  return <ProductsCatalogClient lang={lang} />;
}
