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

  const serviceName = serviceLabels[isEs ? "es" : "en"][service] || service;

  const t = {
    subject: isEs
      ? `¡Hemos recibido tu consulta, ${firstName}!`
      : `We've received your inquiry, ${firstName}!`,
    greeting: isEs ? `Hola ${firstName},` : `Hi ${firstName},`,
    thankYou: isEs
      ? "Gracias por contactar a Steve Creative."
      : "Thank you for reaching out to Steve Creative.",
    received: isEs
      ? "Hemos recibido tu consulta y nuestro equipo ya está trabajando en ella. Queremos asegurarnos de entender a la perfección tus necesidades para ofrecerte la mejor solución posible."
      : "We've received your inquiry and our team is already working on it. We want to make sure we fully understand your needs to offer you the best possible solution.",
    serviceLabel: isEs ? "SERVICIO SOLICITADO" : "REQUESTED SERVICE",
    timelineTitle: isEs ? "¿Qué sigue?" : "What's next?",
    step1Title: isEs ? "Revisión" : "Review",
    step1Desc: isEs
      ? "Nuestro equipo analiza tu proyecto"
      : "Our team analyzes your project",
    step2Title: isEs ? "Propuesta" : "Proposal",
    step2Desc: isEs
      ? "Preparamos una estrategia personalizada"
      : "We prepare a customized strategy",
    step3Title: isEs ? "Contacto" : "Contact",
    step3Desc: isEs
      ? "Te contactamos en 24-48 hrs"
      : "We reach out within 24-48 hrs",
    ctaText: isEs ? "Explorar Nuestro Trabajo" : "Explore Our Work",
    closing: isEs
      ? "Estamos listos para hacer realidad tu visión."
      : "We're ready to bring your vision to life.",
    team: isEs ? "— El equipo de Steve Creative" : "— The Steve Creative Team",
    footerNote: isEs
      ? "Este correo fue enviado porque completaste el formulario de contacto en stevecreative.cl"
      : "This email was sent because you completed the contact form on stevecreative.cl",
  };

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="${isEs ? "es" : "en"}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />
  <title>${t.subject}</title>
  <!--[if mso]>
  <style>
    table { border-collapse: collapse; }
    .fallback-font { font-family: Arial, sans-serif; }
  </style>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#080c14;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">

  <!-- Preheader text (hidden) -->
  <div style="display:none;font-size:1px;color:#080c14;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
    ${t.thankYou} ${t.received}
  </div>

  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#080c14;">
    <tr>
      <td align="center" style="padding:24px 12px 40px;">

        <!-- Email container -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- Top accent line -->
          <tr>
            <td style="height:4px;background-color:#2563eb;border-radius:4px 4px 0 0;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- HEADER -->
          <tr>
            <td style="background-color:#0f1629;padding:32px 40px 28px;border-left:1px solid #1a2340;border-right:1px solid #1a2340;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <!-- Logo -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width:40px;height:40px;background-color:#2563eb;border-radius:10px;text-align:center;vertical-align:middle;">
                          <span style="font-size:20px;font-weight:bold;color:#ffffff;line-height:40px;">S</span>
                        </td>
                        <td style="padding-left:14px;">
                          <span style="font-size:20px;font-weight:bold;color:#ffffff;letter-spacing:-0.5px;">Steve</span><span style="font-size:20px;font-weight:bold;color:#60a5fa;letter-spacing:-0.5px;">Creative</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- HERO SECTION -->
          <tr>
            <td style="background-color:#0f1629;padding:0 40px;border-left:1px solid #1a2340;border-right:1px solid #1a2340;">
              <!-- Divider line -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td style="height:1px;background-color:#1a2340;font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color:#0f1629;padding:36px 40px 32px;border-left:1px solid #1a2340;border-right:1px solid #1a2340;">
              <!-- Check icon -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="width:52px;height:52px;background-color:#0c3d1a;border-radius:50%;text-align:center;vertical-align:middle;">
                    <span style="font-size:24px;line-height:52px;color:#22c55e;">&#10003;</span>
                  </td>
                </tr>
              </table>
              <h1 style="margin:20px 0 0;padding:0;font-size:26px;font-weight:800;color:#ffffff;line-height:1.25;letter-spacing:-0.5px;">
                ${t.subject}
              </h1>
            </td>
          </tr>

          <!-- BODY CONTENT -->
          <tr>
            <td style="background-color:#0f1629;padding:0 40px 32px;border-left:1px solid #1a2340;border-right:1px solid #1a2340;">
              <p style="margin:0 0 16px;font-size:16px;font-weight:600;color:#e2e8f0;line-height:1.6;">
                ${t.greeting}
              </p>
              <p style="margin:0 0 8px;font-size:15px;color:#94a3b8;line-height:1.75;">
                ${t.thankYou}
              </p>
              <p style="margin:0 0 28px;font-size:15px;color:#64748b;line-height:1.75;">
                ${t.received}
              </p>

              <!-- Service Card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
                <tr>
                  <td style="background-color:#131b35;border:1px solid #1e2d50;border-radius:12px;padding:20px 24px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td>
                          <p style="margin:0 0 6px;font-size:10px;font-weight:700;color:#3b82f6;text-transform:uppercase;letter-spacing:2px;">
                            ${t.serviceLabel}
                          </p>
                          <p style="margin:0;font-size:18px;font-weight:700;color:#ffffff;">
                            ${serviceName}
                          </p>
                        </td>
                        <td style="width:44px;vertical-align:middle;text-align:right;">
                          <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="width:44px;height:44px;background-color:#1e3a5f;border-radius:10px;text-align:center;vertical-align:middle;">
                                <span style="font-size:20px;line-height:44px;">&#9881;</span>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Timeline / Steps -->
              <p style="margin:0 0 16px;font-size:14px;font-weight:700;color:#e2e8f0;text-transform:uppercase;letter-spacing:1.5px;">
                ${t.timelineTitle}
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
                <!-- Step 1 -->
                <tr>
                  <td style="padding-bottom:4px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width:40px;vertical-align:top;padding-top:4px;">
                          <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="width:32px;height:32px;background-color:#1e3a5f;border-radius:8px;text-align:center;vertical-align:middle;">
                                <span style="font-size:14px;font-weight:bold;color:#3b82f6;line-height:32px;">1</span>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td style="padding:4px 0 12px 8px;border-bottom:1px solid #1a2340;">
                          <p style="margin:0;font-size:14px;font-weight:700;color:#e2e8f0;">${t.step1Title}</p>
                          <p style="margin:2px 0 0;font-size:13px;color:#64748b;">${t.step1Desc}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Step 2 -->
                <tr>
                  <td style="padding-bottom:4px;padding-top:12px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width:40px;vertical-align:top;padding-top:4px;">
                          <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="width:32px;height:32px;background-color:#1e3a5f;border-radius:8px;text-align:center;vertical-align:middle;">
                                <span style="font-size:14px;font-weight:bold;color:#3b82f6;line-height:32px;">2</span>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td style="padding:4px 0 12px 8px;border-bottom:1px solid #1a2340;">
                          <p style="margin:0;font-size:14px;font-weight:700;color:#e2e8f0;">${t.step2Title}</p>
                          <p style="margin:2px 0 0;font-size:13px;color:#64748b;">${t.step2Desc}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Step 3 -->
                <tr>
                  <td style="padding-top:12px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width:40px;vertical-align:top;padding-top:4px;">
                          <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="width:32px;height:32px;background-color:#052e16;border-radius:8px;text-align:center;vertical-align:middle;">
                                <span style="font-size:14px;font-weight:bold;color:#22c55e;line-height:32px;">3</span>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td style="padding:4px 0 0 8px;">
                          <p style="margin:0;font-size:14px;font-weight:700;color:#22c55e;">${t.step3Title}</p>
                          <p style="margin:2px 0 0;font-size:13px;color:#64748b;">${t.step3Desc}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
                <tr>
                  <td align="center">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="background-color:#2563eb;border-radius:8px;text-align:center;">
                          <a href="https://stevecreative-web.vercel.app/#portfolio" style="display:inline-block;padding:14px 36px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.3px;">
                            ${t.ctaText} &rarr;
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Closing -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td style="height:1px;background-color:#1a2340;font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
              <p style="margin:24px 0 6px;font-size:15px;color:#cbd5e1;line-height:1.6;">
                ${t.closing}
              </p>
              <p style="margin:0;font-size:15px;color:#3b82f6;font-weight:700;">
                ${t.team}
              </p>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#0a0f1e;padding:24px 40px;border-left:1px solid #1a2340;border-right:1px solid #1a2340;border-bottom:1px solid #1a2340;border-radius:0 0 12px 12px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <p style="margin:0 0 6px;font-size:12px;color:#475569;">
                      <a href="mailto:Hola@stevecreative.cl" style="color:#475569;text-decoration:none;">Hola@stevecreative.cl</a>
                    </p>
                    <p style="margin:0 0 6px;font-size:12px;color:#334155;">
                      +56 2 2754 1639 &nbsp;&middot;&nbsp; +1 (346) 256-5888
                    </p>
                    <p style="margin:0 0 16px;font-size:12px;color:#334155;">
                      Houston, TX &nbsp;&middot;&nbsp; Las Condes, Santiago
                    </p>
                    <p style="margin:0;font-size:11px;color:#1e293b;">
                      ${t.footerNote}
                    </p>
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

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="dark" />
  <title>New Inquiry - ${body.name}</title>
</head>
<body style="margin:0;padding:0;background-color:#080c14;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;">

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#080c14;">
    <tr>
      <td align="center" style="padding:24px 12px 40px;">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;">

          <!-- Top accent -->
          <tr>
            <td style="height:4px;background-color:#f59e0b;border-radius:4px 4px 0 0;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="background-color:#0f1629;padding:24px 32px;border-left:1px solid #1a2340;border-right:1px solid #1a2340;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;color:#f59e0b;text-transform:uppercase;letter-spacing:2px;">NEW INQUIRY</p>
                    <h2 style="margin:0;font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">${body.name}</h2>
                    <p style="margin:4px 0 0;font-size:14px;color:#64748b;">
                      <a href="mailto:${body.email}" style="color:#3b82f6;text-decoration:none;">${body.email}</a>
                      ${body.company ? ` &middot; ${body.company}` : ""}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="background-color:#0f1629;padding:0 32px;border-left:1px solid #1a2340;border-right:1px solid #1a2340;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td style="height:1px;background-color:#1a2340;font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="background-color:#0f1629;padding:20px 32px 24px;border-left:1px solid #1a2340;border-right:1px solid #1a2340;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <!-- Service -->
                <tr>
                  <td style="padding:8px 0;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width:100px;font-size:11px;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:1px;vertical-align:top;padding-top:2px;">Service</td>
                        <td style="font-size:15px;color:#e2e8f0;font-weight:600;">${serviceLabels[body.service] || body.service}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ${body.budget ? `
                <!-- Budget -->
                <tr>
                  <td style="padding:8px 0;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width:100px;font-size:11px;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:1px;vertical-align:top;padding-top:2px;">Budget</td>
                        <td style="font-size:15px;color:#e2e8f0;font-weight:600;">${body.budget}</td>
                      </tr>
                    </table>
                  </td>
                </tr>` : ""}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="background-color:#0f1629;padding:0 32px 28px;border-left:1px solid #1a2340;border-right:1px solid #1a2340;">
              <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:1px;">Message</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:#131b35;border:1px solid #1e2d50;border-radius:8px;padding:16px 20px;">
                    <p style="margin:0;font-size:14px;color:#94a3b8;line-height:1.75;">${body.message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Quick reply -->
          <tr>
            <td style="background-color:#0f1629;padding:0 32px 24px;border-left:1px solid #1a2340;border-right:1px solid #1a2340;border-bottom:1px solid #1a2340;border-radius:0 0 12px 12px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:#2563eb;border-radius:8px;text-align:center;">
                    <a href="mailto:${body.email}?subject=Re: Your inquiry to Steve Creative" style="display:inline-block;padding:12px 28px;font-size:13px;font-weight:700;color:#ffffff;text-decoration:none;">
                      Reply to ${body.name.split(" ")[0]} &rarr;
                    </a>
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
