"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

const schema = z.object({
  email: z.string().email("Veuillez entrer un email valide"),
  consent: z.literal(true, { message: "Vous devez accepter pour vous inscrire" }),
});

type FormData = z.infer<typeof schema>;

interface NewsletterFormProps {
  variant?: "default" | "footer";
}

export default function NewsletterForm({ variant = "default" }: NewsletterFormProps) {
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
      const res = await fetch("/api/newsletter", {
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
      <p className={cn("text-sm", variant === "footer" ? "text-primary-light" : "text-primary")}>
        Merci pour votre inscription !
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Votre email"
          {...register("email")}
          className={cn(
            "flex-1 rounded-sm px-4 py-2.5 text-sm transition-colors",
            variant === "footer"
              ? "bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-primary-light focus:outline-none"
              : "bg-white border border-cream-dark text-dark placeholder:text-text-secondary/50 focus:border-primary focus:outline-none"
          )}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            "rounded-sm px-4 py-2.5 text-sm font-medium transition-colors",
            variant === "footer"
              ? "bg-primary-light text-white hover:bg-primary"
              : "bg-primary text-white hover:bg-primary-dark"
          )}
        >
          {status === "loading" ? "..." : "OK"}
        </button>
      </div>
      {errors.email && (
        <p className="text-xs text-red-400">{errors.email.message}</p>
      )}
      <label className="flex items-start gap-2 cursor-pointer">
        <input
          type="checkbox"
          {...register("consent")}
          className="mt-0.5 rounded border-cream-dark text-primary focus:ring-primary"
        />
        <span className={cn("text-xs", variant === "footer" ? "text-white/50" : "text-text-secondary")}>
          J&apos;accepte de recevoir la newsletter de Lanceo Access. Désinscription possible à tout moment.
        </span>
      </label>
      {errors.consent && (
        <p className="text-xs text-red-400">{errors.consent.message}</p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-400">Une erreur est survenue. Veuillez réessayer.</p>
      )}
    </form>
  );
}
