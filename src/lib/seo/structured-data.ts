import { Product } from "@/types/product";
import { Service } from "@/types/service";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ඇතුගල්පුර ඔසු (Athugalpura Osu)",
    url: "https://athugalpura-osu.lk",
    logo: "https://athugalpura-osu.lk/assets/branding/logo-royal-tusker.jpg",
    description:
      "Production-Grade Cultural Luxury Spiritual Wellness & Consecrated Relics Platform rooted in 13th-century Athugalpura Dynasty.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sri Athugalpura Royal Veda Madura, Wellawa Road",
      addressLocality: "Kurunegala",
      addressRegion: "North Western Province",
      postalCode: "60000",
      addressCountry: "LK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+94-37-222-4589",
      contactType: "Customer Support & Spiritual Concierge",
      areaServed: ["LK", "US", "GB", "AU", "EU"],
      availableLanguage: ["si", "en"],
    },
  };
}

export function generateProductSchema(product: Product, lang: string) {
  const isSi = lang === "si";
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: isSi ? product.titleSi : product.titleEn,
    image: `https://athugalpura-osu.lk${product.image}`,
    description: isSi ? product.descriptionSi : product.descriptionEn,
    sku: `${product.serialNumberPrefix}108`,
    mpn: product.id,
    brand: {
      "@type": "Brand",
      name: "Athugalpura Osu",
    },
    offers: {
      "@type": "Offer",
      url: `https://athugalpura-osu.lk/${lang}/products/${product.slug}`,
      priceCurrency: isSi ? "LKR" : "USD",
      price: isSi ? product.priceLKR : product.priceUSD,
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "Athugalpura Osu",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "48",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function generateServiceSchema(service: Service, lang: string) {
  const isSi = lang === "si";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: isSi ? service.titleSi : service.titleEn,
    provider: {
      "@type": "Organization",
      name: "Athugalpura Osu",
    },
    description: isSi ? service.descriptionSi : service.descriptionEn,
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: isSi ? "LKR" : "USD",
      price: isSi ? service.priceLKR : service.priceUSD,
    },
  };
}
