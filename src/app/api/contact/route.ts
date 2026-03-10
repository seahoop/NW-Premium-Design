import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { BUSINESS } from "@/lib/constants";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { name, phone, email, service, timeline, message } = parsed.data;

    // Format a readable service label
    const serviceLabel = service.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    const timelineLabel = {
      asap: "As Soon as Possible",
      "1-3-months": "Within 1–3 Months",
      "3-6-months": "Within 3–6 Months",
      planning: "Just Planning Ahead",
    }[timeline];

    // Send email via Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.CONTACT_EMAIL_TO ?? BUSINESS.email;

    if (RESEND_API_KEY) {
      const emailBody = {
        from: "NW Premium Design Website <noreply@nwpremiumdesign.com>",
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New Estimate Request from ${name} — ${serviceLabel}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <h2 style="color: #1a2744; margin-bottom: 4px;">New Estimate Request</h2>
            <p style="color: #666; margin-top: 0;">From your website contact form</p>
            <hr style="border-color: #e8e0d0; margin: 20px 0;" />
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #888; width: 140px; font-size: 14px;">Name</td>
                <td style="padding: 8px 0; color: #1a2744; font-weight: 600; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #888; font-size: 14px;">Phone</td>
                <td style="padding: 8px 0; color: #1a2744; font-size: 14px;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #888; font-size: 14px;">Email</td>
                <td style="padding: 8px 0; color: #1a2744; font-size: 14px;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #888; font-size: 14px;">Service</td>
                <td style="padding: 8px 0; color: #1a2744; font-size: 14px;">${serviceLabel}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #888; font-size: 14px;">Timeline</td>
                <td style="padding: 8px 0; color: #1a2744; font-size: 14px;">${timelineLabel}</td>
              </tr>
            </table>
            <hr style="border-color: #e8e0d0; margin: 20px 0;" />
            <h3 style="color: #1a2744; font-size: 14px; margin-bottom: 8px;">Message</h3>
            <p style="color: #333; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            <hr style="border-color: #e8e0d0; margin: 20px 0;" />
            <p style="color: #aaa; font-size: 12px;">Sent from nwpremiumdesign.com</p>
          </div>
        `,
      };

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailBody),
      });

      if (!resendRes.ok) {
        console.error("Resend error:", await resendRes.text());
        // Still return success to user — log the error server-side
      }
    } else {
      // Dev/no-key fallback: just log
      console.log("Contact form submission (no Resend key):", {
        name, phone, email, service: serviceLabel, timeline: timelineLabel, message,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
