import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  offerInterest: z.string().min(1),
  message: z.string().optional(),
  consent: z.literal(true),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // TODO: Integrate Google Calendar API
    // import { google } from 'googleapis';
    // const calendar = google.calendar({ version: 'v3', auth });
    // await calendar.events.insert({ ... });

    // TODO: Send confirmation email via Resend
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);

    console.log("Booking request:", data);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides", details: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
