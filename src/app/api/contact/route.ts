import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, inquiryType, message } = data;

    // Simulate encrypted booking insertion into sanctuary ledger
    const trackingId = `ATH-INQ-${Date.now().toString().slice(-6)}`;

    return NextResponse.json({
      success: true,
      message: "Inquiry registered into royal hermitage communications ledger",
      trackingId,
      receivedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to process inquiry" },
      { status: 400 }
    );
  }
}
