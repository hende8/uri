import { NextResponse } from "next/server";
import { Resend } from "resend";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FROM_EMAIL;
  const notifyEmail = process.env.NOTIFY_EMAIL;

  if (!apiKey || !fromEmail || !notifyEmail) {
    return NextResponse.json(
      { error: "שירות שליחת הפנייה אינו זמין כרגע." },
      { status: 500 },
    );
  }

  let payload: {
    name?: unknown;
    phone?: unknown;
    subject?: unknown;
    message?: unknown;
  };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "הבקשה אינה תקינה." },
      { status: 400 },
    );
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
  const subject =
    typeof payload.subject === "string" ? payload.subject.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || !phone) {
    return NextResponse.json(
      { error: "יש למלא שם מלא ומספר טלפון." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);
  const html = `
    <div dir="rtl" style="font-family: sans-serif; line-height: 1.6;">
      <p><strong>שם:</strong> ${escapeHtml(name)}</p>
      <p><strong>טלפון:</strong> ${escapeHtml(phone)}</p>
      <p><strong>נושא:</strong> ${escapeHtml(subject)}</p>
      <hr />
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `;

  const text = `שם: ${name}\nטלפון: ${phone}\nנושא: ${subject}\n\n${message}`;

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: notifyEmail,
    subject: subject || `פנייה חדשה מ-${name}`,
    html,
    text,
  });

  if (error) {
    return NextResponse.json(
      { error: error.message ?? "שליחת הפנייה נכשלה. נסו שוב מאוחר יותר." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
