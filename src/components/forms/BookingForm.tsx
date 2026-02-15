"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { offers } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer un email valide"),
  phone: z.string().min(10, "Veuillez entrer un numéro valide"),
  offerInterest: z.string().min(1, "Veuillez sélectionner une offre"),
  message: z.string().optional(),
  consent: z.literal(true, { message: "Vous devez accepter pour réserver" }),
});

type FormData = z.infer<typeof schema>;

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/booking", {
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
          Demande de rendez-vous envoyée
        </h3>
        <p className="text-text-secondary">
          Nous vous recontacterons rapidement pour confirmer votre créneau.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input label="Nom complet" placeholder="Votre nom" error={errors.name?.message} {...register("name")} />
        <Input label="Email" type="email" placeholder="votre@email.com" error={errors.email?.message} {...register("email")} />
      </div>

      <Input label="Téléphone" type="tel" placeholder="06 00 00 00 00" error={errors.phone?.message} {...register("phone")} />

      <div className="space-y-1">
        <label htmlFor="offerInterest" className="block text-sm font-medium text-dark">
          Offre qui vous intéresse
        </label>
        <select
          id="offerInterest"
          {...register("offerInterest")}
          className="w-full rounded-sm border border-cream-dark bg-white px-4 py-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">Sélectionnez une offre</option>
          <option value="decouverte">Appel découverte (gratuit)</option>
          {offers.map((offer) => (
            <option key={offer.slug} value={offer.slug}>
              Palier {offer.palier} — {offer.name}
            </option>
          ))}
        </select>
        {errors.offerInterest && (
          <p className="text-sm text-red-500">{errors.offerInterest.message}</p>
        )}
      </div>

      <Textarea
        label="Message (optionnel)"
        placeholder="Décrivez brièvement votre projet et vos attentes..."
        error={errors.message?.message}
        {...register("message")}
      />

      <label className="flex items-start gap-2 cursor-pointer">
        <input type="checkbox" {...register("consent")} className="mt-0.5 rounded border-cream-dark text-primary focus:ring-primary" />
        <span className="text-sm text-text-secondary">
          J&apos;accepte que mes données soient traitées pour la gestion de ma demande de rendez-vous.
        </span>
      </label>
      {errors.consent && <p className="text-sm text-red-500">{errors.consent.message}</p>}

      <Button type="submit" disabled={status === "loading"} className="w-full">
        {status === "loading" ? "Envoi en cours..." : "Demander un rendez-vous"}
      </Button>

      {status === "error" && (
        <p className="text-sm text-red-500">Une erreur est survenue. Veuillez réessayer.</p>
      )}
    </form>
  );
}
