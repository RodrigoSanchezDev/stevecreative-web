interface EmailTemplateProps {
  name: string;
  service: string;
  locale?: string;
}

export function getConfirmationEmailHtml({
  name,
  service,
  locale = "en",
}: EmailTemplateProps): string {
  const isEs = locale === "es";

  const firstName = name.split(" ")[0];

  const serviceLabels: Record<string, Record<string, string>> = {
    en: {
      web: "Web Development",
      marketing: "Digital Marketing",
      branding: "Brand Strategy",
      consulting: "Digital Consulting",
      other: "Other services",
    },
    es: {
      web: "Desarrollo Web",
      marketing: "Marketing Digital",
      branding: "Estrategia de Marca",
      consulting: "Consultoría Digital",
      other: "Otros servicios",
    },
  };

  const serviceName =
    serviceLabels[isEs ? "es" : "en"][service] || service;

  const t = {
    subject: isEs
      ? `¡Hemos recibido tu consulta, ${firstName}!`
      : `We've received your inquiry, ${firstName}!`,
    greeting: isEs ? `Hola ${firstName},` : `Hi ${firstName},`,
    received: isEs
      ? "Gracias por contactar a <strong>Steve Creative</strong>. Hemos recibido tu consulta y nuestro equipo ya está revisándola."
      : "Thank you for reaching out to <strong>Steve Creative</strong>. We've received your inquiry and our team is already reviewing it.",
    serviceLabel: isEs ? "Servicio de interés" : "Service of interest",
    timeline: isEs
      ? "Nos pondremos en contacto contigo dentro de las próximas <strong>24 a 48 horas</strong> para discutir tu proyecto y cómo podemos ayudarte a alcanzar tus objetivos."
      : "We'll get back to you within <strong>24 to 48 hours</strong> to discuss your project and how we can help you achieve your goals.",
    meanwhile: isEs ? "Mientras tanto, puedes:" : "In the meantime, you can:",
    action1: isEs
      ? "Explorar nuestro portafolio de proyectos"
      : "Explore our project portfolio",
    action2: isEs
      ? "Conocer más sobre nuestros servicios"
      : "Learn more about our services",
    action3: isEs
      ? "Seguirnos en redes sociales"
      : "Follow us on social media",
    closing: isEs
      ? "¡Estamos emocionados de trabajar contigo!"
      : "We're excited to work with you!",
    team: isEs ? "El equipo de Steve Creative" : "The Steve Creative Team",
    address1: "Houston, TX",
    address2: "Las Condes, Santiago",
    unsubscribe: isEs
      ? "Recibiste este correo porque enviaste una consulta a través de nuestro sitio web."
      : "You received this email because you submitted an inquiry through our website.",
  };

  return `<!DOCTYPE html>
<html lang="${isEs ? "es" : "en"}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#0f172a;font-family:'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f172a;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background-color:#1e293b;border-radius:16px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;">
          
          <!-- Header with gradient -->
          <tr>
            <td style="background:linear-gradient(135deg,#2563eb 0%,#7c3aed 50%,#c026d3 100%);padding:40px 32px;text-align:center;">
              <!-- Logo -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="width:44px;height:44px;background:rgba(255,255,255,0.2);border-radius:12px;text-align:center;vertical-align:middle;font-size:22px;font-weight:bold;color:#ffffff;">
                    S
                  </td>
                  <td style="padding-left:12px;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">
                    Steve<span style="color:rgba(255,255,255,0.85);">Creative</span>
                  </td>
                </tr>
              </table>
              <!-- Confirmation message -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px auto 0;">
                <tr>
                  <td style="width:56px;height:56px;background:rgba(255,255,255,0.15);border-radius:50%;text-align:center;vertical-align:middle;font-size:28px;">
                    ✉️
                  </td>
                </tr>
              </table>
              <h1 style="margin:16px 0 0;font-size:24px;font-weight:700;color:#ffffff;line-height:1.3;">
                ${t.subject}
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 20px;font-size:16px;color:#e2e8f0;line-height:1.7;">
                ${t.greeting}
              </p>
              <p style="margin:0 0 20px;font-size:15px;color:#94a3b8;line-height:1.7;">
                ${t.received}
              </p>

              <!-- Service badge -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
                <tr>
                  <td style="background-color:rgba(37,99,235,0.12);border:1px solid rgba(37,99,235,0.25);border-radius:12px;padding:16px 20px;">
                    <p style="margin:0 0 4px;font-size:11px;color:#60a5fa;text-transform:uppercase;letter-spacing:1px;font-weight:600;">
                      ${t.serviceLabel}
                    </p>
                    <p style="margin:0;font-size:16px;color:#ffffff;font-weight:600;">
                      ${serviceName}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Timeline -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
                <tr>
                  <td style="background-color:rgba(16,185,129,0.08);border-left:3px solid #10b981;border-radius:0 12px 12px 0;padding:16px 20px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align:top;padding-right:12px;font-size:20px;">⏰</td>
                        <td>
                          <p style="margin:0;font-size:14px;color:#94a3b8;line-height:1.7;">
                            ${t.timeline}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Meanwhile section -->
              <p style="margin:0 0 12px;font-size:14px;color:#94a3b8;">
                ${t.meanwhile}
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 28px;">
                <tr>
                  <td style="padding:6px 0;font-size:14px;color:#60a5fa;">→ ${t.action1}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;font-size:14px;color:#60a5fa;">→ ${t.action2}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;font-size:14px;color:#60a5fa;">→ ${t.action3}</td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="background:linear-gradient(135deg,#2563eb,#3b82f6);border-radius:50px;text-align:center;">
                    <a href="https://stevecreative-web.vercel.app/" style="display:inline-block;padding:14px 32px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;letter-spacing:0.5px;">
                      ${isEs ? "Visitar Nuestro Sitio" : "Visit Our Website"} →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Closing -->
              <p style="margin:28px 0 4px;font-size:15px;color:#e2e8f0;line-height:1.7;">
                ${t.closing}
              </p>
              <p style="margin:0;font-size:15px;color:#60a5fa;font-weight:600;">
                ${t.team}
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="border-top:1px solid rgba(255,255,255,0.06);padding:24px 32px;text-align:center;">
              <p style="margin:0 0 8px;font-size:12px;color:#475569;">
                Hola@stevecreative.cl · +56 2 2754 1639 · +1 (346) 256-5888
              </p>
              <p style="margin:0 0 12px;font-size:12px;color:#475569;">
                ${t.address1} · ${t.address2}
              </p>
              <p style="margin:0;font-size:11px;color:#334155;">
                ${t.unsubscribe}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function getNotificationEmailHtml(body: {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}): string {
  const serviceLabels: Record<string, string> = {
    web: "Web Development",
    marketing: "Digital Marketing",
    branding: "Brand Strategy",
    consulting: "Digital Consulting",
    other: "Other",
  };

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#0f172a;font-family:'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f172a;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#1e293b;border-radius:16px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;">
          <tr>
            <td style="background:#2563eb;padding:20px 24px;">
              <h2 style="margin:0;font-size:18px;color:#ffffff;">🔔 New Contact Form Submission</h2>
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                    <span style="font-size:12px;color:#60a5fa;text-transform:uppercase;letter-spacing:1px;">Name</span><br>
                    <span style="font-size:15px;color:#e2e8f0;font-weight:500;">${body.name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                    <span style="font-size:12px;color:#60a5fa;text-transform:uppercase;letter-spacing:1px;">Email</span><br>
                    <a href="mailto:${body.email}" style="font-size:15px;color:#e2e8f0;text-decoration:none;">${body.email}</a>
                  </td>
                </tr>
                ${body.company ? `<tr>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                    <span style="font-size:12px;color:#60a5fa;text-transform:uppercase;letter-spacing:1px;">Company</span><br>
                    <span style="font-size:15px;color:#e2e8f0;">${body.company}</span>
                  </td>
                </tr>` : ""}
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                    <span style="font-size:12px;color:#60a5fa;text-transform:uppercase;letter-spacing:1px;">Service</span><br>
                    <span style="font-size:15px;color:#e2e8f0;">${serviceLabels[body.service] || body.service}</span>
                  </td>
                </tr>
                ${body.budget ? `<tr>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                    <span style="font-size:12px;color:#60a5fa;text-transform:uppercase;letter-spacing:1px;">Budget</span><br>
                    <span style="font-size:15px;color:#e2e8f0;">${body.budget}</span>
                  </td>
                </tr>` : ""}
                <tr>
                  <td style="padding:12px 0 0;">
                    <span style="font-size:12px;color:#60a5fa;text-transform:uppercase;letter-spacing:1px;">Message</span><br>
                    <p style="margin:8px 0 0;font-size:14px;color:#94a3b8;line-height:1.7;background:rgba(255,255,255,0.03);padding:12px;border-radius:8px;">${body.message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
