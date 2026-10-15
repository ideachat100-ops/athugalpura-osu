import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ඇතුගල්පුර ඔසු | Athugalpura Osu - Production-Grade Cultural Luxury Platform",
  description: "Sacred Vajrayudha relics and consecrated royal remedies of Sri Lanka.",
  icons: {
    icon: "/assets/branding/logo-royal-tusker.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="si" className="h-full bg-[#0A0908] text-[#F5EEDB] antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
