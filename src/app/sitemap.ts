import { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/data/products";
import { SERVICES } from "@/lib/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://athugalpura-osu.lk";
  const languages = ["si", "en"];
  const staticRoutes = ["", "/products", "/services", "/about", "/contact"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  languages.forEach((lang) => {
    // Static Pages
    staticRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: route === "" ? 1.0 : 0.8,
      });
    });

    // Product Pages
    PRODUCTS.forEach((product) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      });
    });
  });

  return sitemapEntries;
}
