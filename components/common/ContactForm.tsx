"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/app/sendMail";

interface ContactFormProps {
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  sendLabel: string;
  successMessage: string;
  errorMessage: string;
}

export default function ContactForm({
  nameLabel,
  emailLabel,
  messageLabel,
  sendLabel,
  successMessage,
  errorMessage,
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-accent/10 border border-accent/20 rounded-xl text-center"
      >
        <p className="text-accent font-medium">{successMessage}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-xs underline opacity-50 hover:opacity-100 transition-opacity"
        >
          {sendLabel} again?
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium opacity-50 ml-1">
            {nameLabel}
          </label>
          <input
            required
            type="text"
            name="name"
            placeholder="John Doe"
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-accent/50 focus:bg-white/10 transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium opacity-50 ml-1">
            {emailLabel}
          </label>
          <input
            required
            type="email"
            name="email"
            placeholder="john@example.com"
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-accent/50 focus:bg-white/10 transition-all"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium opacity-50 ml-1">
          {messageLabel}
        </label>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="..."
          className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-accent/50 focus:bg-white/10 transition-all resize-none"
        ></textarea>
      </div>
      <button
        disabled={status === "sending"}
        type="submit"
        className="bg-foreground text-background font-bold py-3 rounded-lg hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 disabled:active:scale-100"
      >
        {status === "sending" ? "..." : sendLabel}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-xs text-center">{errorMessage}</p>
      )}
    </form>
  );
}
