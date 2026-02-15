"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer un email valide"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Veuillez préciser l'objet"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  consent: z.literal(true, { message: "Vous devez accepter pour envoyer le formulaire" }),
  honeypot: z.string().max(0),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { honeypot: "" },
  });

  const onSubmit = async (data: FormData) => {
    if (data.honeypot) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-lg bg-primary/10 p-8 text-center">
        <h3 className="font-display text-xl font-semibold text-dark mb-2">
          Message envoyé avec succès
        </h3>
        <p className="text-text-secondary">
          Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Honeypot */}
      <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input label="Nom complet" placeholder="Votre nom" error={errors.name?.message} {...register("name")} />
        <Input label="Email" type="email" placeholder="votre@email.com" error={errors.email?.message} {...register("email")} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input label="Téléphone" type="tel" placeholder="06 00 00 00 00" error={errors.phone?.message} {...register("phone")} />
        <Input label="Objet" placeholder="Objet de votre message" error={errors.subject?.message} {...register("subject")} />
      </div>
      <Textarea label="Message" placeholder="Décrivez votre projet ou votre demande..." error={errors.message?.message} {...register("message")} />

      <label className="flex items-start gap-2 cursor-pointer">
        <input type="checkbox" {...register("consent")} className="mt-0.5 rounded border-cream-dark text-primary focus:ring-primary" />
        <span className="text-sm text-text-secondary">
          J&apos;accepte que mes données soient traitées pour répondre à ma demande, conformément à la{" "}
          <a href="/politique-confidentialite" className="text-primary hover:underline">politique de confidentialité</a>.
        </span>
      </label>
      {errors.consent && <p className="text-sm text-red-500">{errors.consent.message}</p>}

      <Button type="submit" disabled={status === "loading"} className="w-full md:w-auto">
        {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
      </Button>

      {status === "error" && (
        <p className="text-sm text-red-500">Une erreur est survenue. Veuillez réessayer.</p>
      )}
    </form>
  );
}
