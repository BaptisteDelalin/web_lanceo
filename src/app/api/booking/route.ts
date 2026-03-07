import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not configured");
  return new Resend(key);
}

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  offerInterest: z.string().min(1),
  message: z.string().optional(),
  website: z.string().max(0).optional(),
  consent: z.literal(true),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // Anti-spam honeypot check
    if (data.website) {
      return NextResponse.json({ success: true });
    }

    const resend = getResend();
    const fromAddress = process.env.RESEND_FROM_EMAIL || "noreply@lanceo-access.fr";
    const toAddress = process.env.CONTACT_EMAIL || "contact@lanceo-access.fr";

    // Send notification email to Lanceo Access
    await resend.emails.send({
      from: `Lanceo Access <${fromAddress}>`,
      to: [toAddress],
      subject: `[Rendez-vous] Demande de ${data.name}`,
      html: `
        <h2>Nouvelle demande de rendez-vous</h2>
        <p><strong>Nom :</strong> ${data.name}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <p><strong>Téléphone :</strong> ${data.phone}</p>
        <p><strong>Offre intéressée :</strong> ${data.offerInterest}</p>
        ${data.message ? `<p><strong>Message :</strong></p><p>${data.message.replace(/\n/g, "<br />")}</p>` : ""}
        <hr />
        <p style="color: #888; font-size: 12px;">
          Envoyé depuis le formulaire de rendez-vous lanceo-access.fr le ${new Date().toLocaleDateString("fr-FR")} à ${new Date().toLocaleTimeString("fr-FR")}
        </p>
      `,
    });

    // Send confirmation email to the user
    await resend.emails.send({
      from: `Lanceo Access <${fromAddress}>`,
      to: [data.email],
      subject: "Votre demande de rendez-vous — Lanceo Access",
      html: `
        <h2>Bonjour ${data.name},</h2>
        <p>Nous avons bien reçu votre demande de rendez-vous et vous en remercions.</p>
        <p>Nous vous recontacterons rapidement pour convenir d'un créneau.</p>
        <br />
        <p>Cordialement,</p>
        <p><strong>Mariam Sahid</strong><br />Lanceo Access</p>
        <hr />
        <p style="color: #888; font-size: 12px;">
          Cet email confirme la réception de votre demande du ${new Date().toLocaleDateString("fr-FR")}.
          Conformément à notre politique de confidentialité, vos données sont traitées uniquement pour la gestion de votre rendez-vous.
        </p>
      `,
    });

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
