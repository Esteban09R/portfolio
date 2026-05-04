import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { PRIVATE_PROFILE } from "@/constants/private-profile";

interface EmailButtonProps {
  label: string;
  className?: string;
}

export default function EmailButton({ label, className = "" }: EmailButtonProps) {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <a
      href={`mailto:${PRIVATE_PROFILE.email}`}
      className={`flex gap-2 items-center hover:cursor-pointer hover:text-accent transition-colors ${className}`}
      aria-label={label}
    >
      <FaEnvelope />
      <span>{label}</span>
    </a>
  );
}
