import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data) {
      return NextResponse.json({ error: "No data provided." }, { status: 400 });
    }

    let html = `Email: ${data.email} <br />`;

    for (const [key, value] of Object.entries(data.party)) {
      html += `${key}: ${value} <br />`;
    }

    html += "<br />";

    const resendResponse = await resend.emails.send({
      from: "Wedding RSVP <onboarding@resend.dev>",
      to: "david@sinclair.tech",
      replyTo: data.email,
      subject: `Wedding RSVP`,
      html,
    });

    if (resendResponse.error) {
      return NextResponse.json(
        { error: resendResponse.error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, id: resendResponse.data?.id });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
