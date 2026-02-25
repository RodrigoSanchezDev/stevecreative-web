import { NextRequest, NextResponse } from "next/server";

interface ContactBody {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactBody = await request.json();

    // Validation
    if (!body.name || !body.email || !body.service || !body.message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Log the submission (in production, integrate with email/CRM/DB)
    console.log("📧 New contact form submission:");
    console.log(`   Name: ${body.name}`);
    console.log(`   Email: ${body.email}`);
    console.log(`   Company: ${body.company || "N/A"}`);
    console.log(`   Service: ${body.service}`);
    console.log(`   Budget: ${body.budget || "N/A"}`);
    console.log(`   Message: ${body.message}`);

    // TODO: Add your email service here (Resend, SendGrid, etc.)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'website@stevecreative.com',
    //   to: 'Hola@stevecreative.cl',
    //   subject: `New inquiry from ${body.name}`,
    //   html: `...`,
    // });

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Steve Creative Contact API",
    status: "ok",
    endpoints: {
      POST: "/api/contact - Submit a contact form",
    },
  });
}
