import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PRODUCTS } from "@/lib/data/products";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { generateProductSchema } from "@/lib/seo/structured-data";
import { KathuruMalaIcon, KandyanLotusIcon, SacredBlossomRating, RoyalLionBadge } from "@/components/ui/KandyanIcons";
import { GoldButton } from "@/components/ui/GoldButton";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ProductBuyActions } from "@/components/products/ProductBuyActions";

export async function generateStaticParams() {
  const languages = ["si", "en"];
  const params: { lang: string; slug: string }[] = [];

  languages.forEach((lang) => {
    PRODUCTS.forEach((product) => {
      params.push({ lang, slug: product.slug });
    });
  });

  return params;
}

interface ProductDetailPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};

  const isSi = lang === "si";

  return generatePageMetadata({
    title: isSi ? product.titleSi : product.titleEn,
    description: isSi ? product.descriptionSi : product.descriptionEn,
    lang,
    path: `/products/${slug}`,
  });
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { lang, slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const isSi = lang === "si";
  const productSchema = generateProductSchema(product, lang);

  return (
    <div className="w-full min-h-screen py-12 md:py-20 bg-[#0A0908] text-[#F5EEDB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#A69780] mb-8">
          <Link href={`/${lang}`} className="hover:text-[#D4AF37]">
            {isSi ? "මුල් පිටුව" : "Home"}
          </Link>
          <span>›</span>
          <Link href={`/${lang}/products`} className="hover:text-[#D4AF37]">
            {isSi ? "දිව්‍යමය නිෂ්පාදන" : "Sacred Relics"}
          </Link>
          <span>›</span>
          <span className="text-[#FFF0BE] font-medium truncate">
            {isSi ? product.titleSi : product.titleEn}
          </span>
        </nav>

        {/* Product In-depth Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Relic Portrait Viewport */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl p-4 bg-gradient-to-b from-[#32080E] to-[#140306] border-2 border-[#D4AF37] shadow-[0_0_40px_rgba(74,14,23,0.9)]">
              <div className="relative h-96 sm:h-[480px] rounded-xl overflow-hidden border border-[#D4AF37]/40 bg-black/50">
                <Image
                  src={product.image}
                  alt={isSi ? product.titleSi : product.titleEn}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#4A0E17]/90 border border-[#D4AF37] text-xs font-bold text-[#FFF0BE] shadow-md backdrop-blur-sm">
                  {isSi ? product.badgeSi : product.badgeEn}
                </div>
              </div>
            </div>

            {/* Tamper-Proof Consecration Certificate Ledger Box */}
            <div className="p-4 rounded-xl bg-[#1C0508] border border-[#D4AF37]/40 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#A69780]">{isSi ? "ලේඛනාගාර සත්‍යාපන අංකය:" : "Ledger Authentication:"}</span>
                <span className="font-mono text-[#D4AF37] font-bold">{product.serialNumberPrefix}108-CERT</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#A69780]">{isSi ? "ජීවම් කළ දිනය:" : "Consecration Date:"}</span>
                <span className="text-[#FFF0BE] font-semibold">{product.ritualDate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#A69780]">{isSi ? "පූජා මුද්‍රාව:" : "Consecration Seal:"}</span>
                <span className="text-[#D4AF37] font-semibold">ROYAL KANDYAN TUSKER SEAL</span>
              </div>
            </div>
          </div>

          {/* Right Column: Cultural Details, Timing & Reverence Rules */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <div className="flex items-center gap-3 mb-2">
                <SacredBlossomRating rating={product.sacredRating} size="w-5 h-5" />
                <span className="text-xs font-bold text-[#E5C158]">
                  (5/5 {isSi ? "රාජකීය අෂ්ට ලක්ෂණ ඇගයුම" : "Sacred Blossom Certified"})
                </span>
              </div>

              <h1 className="font-ceremonial text-3xl sm:text-4xl font-extrabold text-gold-gradient leading-tight">
                {isSi ? product.titleSi : product.titleEn}
              </h1>

              <p className="text-base text-[#E5C158] font-semibold mt-1">
                {isSi ? product.subtitleSi : product.subtitleEn}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-5 rounded-xl bg-[#24060B] border border-[#D4AF37]/50 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#A69780] block">
                  {isSi ? "පූජා දායකත්ව මුදල" : "Sanctified Offering Fee"}
                </span>
                <span className="text-3xl font-bold text-gold-bright">
                  {isSi ? `LKR ${product.priceLKR.toLocaleString()}` : `$${product.priceUSD}`}
                </span>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 rounded-full bg-[#160406] border border-[#D4AF37]/40 text-xs font-mono text-[#D4AF37]">
                  {product.consecrationCycles} {isSi ? "ජීවම් වාර" : "Mantra Cycles"}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#D6CBB7] leading-relaxed font-sinhala-body">
              {isSi ? product.descriptionSi : product.descriptionEn}
            </p>

            {/* Auspicious Timing (නැකත් පදනම) */}
            <div className="p-4 rounded-xl bg-[#180407] border-l-4 border-[#D4AF37] space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block">
                {isSi ? "නැකත් පදනම හා සුබ හෝරාව:" : "Planetary Alignment & Consecration Muhurtha:"}
              </span>
              <p className="text-xs sm:text-sm text-[#F5EEDB]">
                {isSi ? product.auspiciousTimingSi : product.auspiciousTimingEn}
              </p>
            </div>

            {/* Botanical Ingredients */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block">
                {isSi ? "අන්තර්ගත දුර්ලභ ඔසු හා සංයෝග:" : "Sacred Botanical Compounds & Composition:"}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(isSi ? product.botanicalIngredientsSi : product.botanicalIngredientsEn).map(
                  (item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-[#180407] border border-[#D4AF37]/25 text-xs text-[#D6CBB7] flex items-center gap-2"
                    >
                      <KandyanLotusIcon className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Instructions for Reverence (භාවිතයට පිළිවෙත්) */}
            <div className="p-4 rounded-xl bg-[#24060B] border border-[#D4AF37]/30 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFF0BE] block">
                {isSi ? "පූජනීයත්වයෙන් යුතුව තැන්පත් කිරීමේ පිළිවෙත්:" : "Rules of Reverence & Daily Veneration:"}
              </span>
              <ul className="space-y-1.5 text-xs text-[#C4B9A3]">
                {(isSi ? product.reverenceRulesSi : product.reverenceRulesEn).map(
                  (rule, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <KathuruMalaIcon className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Action Buttons: Direct Buy & Muhurtha Reservation */}
            <ProductBuyActions product={product} lang={lang} />

          </div>

        </div>

      </div>

      <SectionDivider className="mt-20" />
    </div>
  );
}
