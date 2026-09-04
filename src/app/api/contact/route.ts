import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      company,
      email,
      phone,
      message,
      productInterest,
      website,
    }: {
      name?: string;
      company?: string;
      email?: string;
      phone?: string;
      message?: string;
      productInterest?: string;
      website?: string;
    } = body;

    if (website && website.trim().length > 0) {
      return NextResponse.json({ message: "Submission blocked." }, { status: 400 });
    }

    if (!name || !company || !email || !phone || !message) {
      return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    if (message.length < 10) {
      return NextResponse.json({ message: "Message should include project details." }, { status: 400 });
    }

    console.info("Contact enquiry received", {
      name,
      company,
      email,
      phone,
      productInterest: productInterest ?? "",
      preview: message.slice(0, 120),
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      message: "Thank you. Your enquiry has been received and our team will contact you shortly.",
    });
  } catch {
    return NextResponse.json({ message: "Unable to process request at this time." }, { status: 500 });
  }
}
