import { NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/data/products";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const serial = searchParams.get("serial");

  if (!serial) {
    return NextResponse.json({
      success: true,
      totalRelics: PRODUCTS.length,
      artifacts: PRODUCTS.map((p) => ({
        id: p.id,
        slug: p.slug,
        titleSi: p.titleSi,
        titleEn: p.titleEn,
        prefix: p.serialNumberPrefix,
        consecrationCycles: p.consecrationCycles,
        inStock: p.inStock,
      })),
    });
  }

  // Find artifact by prefix or full serial
  const artifact = PRODUCTS.find((p) =>
    serial.toUpperCase().startsWith(p.serialNumberPrefix.toUpperCase())
  );

  if (!artifact) {
    return NextResponse.json(
      {
        success: false,
        message: "Serial number not authenticated in Athugalpura Royal Ledger.",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    authenticated: true,
    serialNumber: serial.toUpperCase(),
    titleSi: artifact.titleSi,
    titleEn: artifact.titleEn,
    ritualDate: artifact.ritualDate,
    consecrationCycles: artifact.consecrationCycles,
    auspiciousTimingSi: artifact.auspiciousTimingSi,
    auspiciousTimingEn: artifact.auspiciousTimingEn,
    consecrationSeal: "ROYAL_KANDYAN_SEAL_AUTHENTICATED",
    issuedBy: "Council of Chief Ayurvedic Physicians, Kurunegala",
  });
}
