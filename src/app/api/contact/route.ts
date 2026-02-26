import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  getConfirmationEmailHtml,
  getNotificationEmailHtml,
} from "@/lib/email-templates";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

interface ContactBody {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  locale?: string;
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

    // Detect locale from referer or body
    const referer = request.headers.get("referer") || "";
    const locale = body.locale || (referer.includes("/es") ? "es" : "en");

    if (!resend) {
      console.warn("⚠️ RESEND_API_KEY not set — skipping email sending");
      console.log("📧 Contact form submission:", JSON.stringify(body, null, 2));
      return NextResponse.json({
        success: true,
        message: "Contact form received (email not configured)",
        timestamp: new Date().toISOString(),
      });
    }

    // 1. Send confirmation email to the user
    const confirmationHtml = getConfirmationEmailHtml({
      name: body.name,
      service: body.service,
      locale,
    });

    const isEs = locale === "es";

    await resend.emails.send({
      from: "Steve Creative <Hola@stevecreative.cl>",
      to: body.email,
      subject: isEs
        ? `¡Hemos recibido tu consulta, ${body.name.split(" ")[0]}! — Steve Creative`
        : `We've received your inquiry, ${body.name.split(" ")[0]}! — Steve Creative`,
      html: confirmationHtml,
    });

    // 2. Send notification email to the team
    const notificationHtml = getNotificationEmailHtml(body);

    await resend.emails.send({
      from: "Steve Creative Website <Hola@stevecreative.cl>",
      to: "Hola@stevecreative.cl",
      subject: `New inquiry from ${body.name} — ${body.service}`,
      html: notificationHtml,
    });

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Contact form error:", error);
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
