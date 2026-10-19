import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrderProvider } from "@/context/OrderContext";
import { generateOrganizationSchema } from "@/lib/seo/structured-data";

export async function generateStaticParams() {
  return [{ lang: "si" }, { lang: "en" }];
}

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  const organizationSchema = generateOrganizationSchema();

  return (
    <OrderProvider lang={lang}>
      <div className="min-h-screen flex flex-col bg-[#0A0908] text-[#F5EEDB]">
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Sticky Frosted Maroon Navbar with Liyawela */}
        <Navbar lang={lang} />

        {/* Main Content Area */}
        <main className="flex-1 w-full">{children}</main>

        {/* Imperial Kandyan Footer */}
        <Footer lang={lang} />
      </div>
    </OrderProvider>
  );
}
