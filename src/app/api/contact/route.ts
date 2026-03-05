import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(3),
  message: z.string().min(10),
  consent: z.literal(true),
  honeypot: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // Anti-spam honeypot check
    if (data.honeypot) {
      return NextResponse.json({ success: true });
    }

    // TODO: Integrate Resend for email sending
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Lanceo Access <noreply@lanceo-access.fr>',
    //   to: ['contact@lanceo-access.fr'],
    //   subject: `[Contact] ${data.subject}`,
    //   html: `<p><strong>Nom:</strong> ${data.name}</p>
    //          <p><strong>Email:</strong> ${data.email}</p>
    //          <p><strong>Téléphone:</strong> ${data.phone || 'Non renseigné'}</p>
    //          <p><strong>Message:</strong></p>
    //          <p>${data.message}</p>`,
    // });

    // TODO: Integrate Resend when API key is available

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
