import React from "react";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "@/components/home/HeroSection";
import { HeritageNarrative } from "@/components/home/HeritageNarrative";
import { FeaturedRelics } from "@/components/home/FeaturedRelics";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";

export async function generateStaticParams() {
  return [{ lang: "si" }, { lang: "en" }];
}

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { lang } = await params;
  const isSi = lang === "si";

  return generatePageMetadata({
    title: isSi
      ? "සිතූ පැතූ සම්පත් සලසන අභිමානවත් වජ්‍රායුධය හා දිව්‍යමය ඔසු"
      : "The Sacred Vajrayudha & Consecrated Royal Remedies",
    description: isSi
      ? "ඇතුගල්පුර රාජකීය වෙද පරපුරෙන් පැවත එන, අධ්‍යාත්මික බලයෙන් පිරිපුන් ජීවම් ඖෂධ හා සර්ව ආරක්ෂක වජ්‍රායුධ තලිස්මන් එකතුව."
      : "Production-grade cultural luxury e-commerce & spiritual wellness sanctuary offering certified consecrated Vajrayudha relics and traditional Sri Lankan remedies.",
    lang,
    path: "",
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Arena with 3D/Parallax Antique Vajrayudha */}
      <HeroSection lang={lang} />

      {/* Lineage & The Legend of Vajrayudha */}
      <HeritageNarrative lang={lang} />

      {/* Featured Consecrated Relics & Remedies Grid */}
      <FeaturedRelics lang={lang} />

      {/* Consecration Services Preview */}
      <ServicesPreview lang={lang} />

      {/* Ancient Palm-Leaf Manuscript Customer Reviews Carousel */}
      <ReviewsCarousel lang={lang} />
    </div>
  );
}
