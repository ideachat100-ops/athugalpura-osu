import { Metadata } from "next";

export function generatePageMetadata({
  title,
  description,
  path = "",
  lang,
}: {
  title: string;
  description: string;
  path?: string;
  lang: string;
}): Metadata {
  const isSi = lang === "si";
  const baseUrl = "https://athugalpura-osu.lk";
  const currentUrl = `${baseUrl}/${lang}${path}`;

  return {
    title: `${title} | ${isSi ? "ඇතුගල්පුර ඔසු" : "Athugalpura Osu"}`,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        "si-LK": `${baseUrl}/si${path}`,
        "en-US": `${baseUrl}/en${path}`,
        "en-GB": `${baseUrl}/en${path}`,
        "x-default": `${baseUrl}/si${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: currentUrl,
      siteName: isSi ? "ඇතුගල්පුර ඔසු" : "Athugalpura Osu",
      locale: isSi ? "si_LK" : "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl}/assets/branding/logo-royal-tusker.jpg`,
          width: 1200,
          height: 630,
          alt: "ඇතුගල්පුර ඔසු - Athugalpura Osu",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/assets/branding/logo-royal-tusker.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
