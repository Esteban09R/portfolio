import React from "react";
import { MdDownloading } from "react-icons/md";
import { PROFILE } from "@/constants/profile";

interface CVDownloadButtonProps {
  lang: "es" | "en";
  label: string;
}

export default function CVDownloadButton({
  lang,
  label,
}: CVDownloadButtonProps) {
  return (
    <a
      href={`/api/cv/download/${lang}`}
      download={`CV_${PROFILE.name.replace(/\s+/g, "_")}_${lang}.pdf`}
      className="
        inline-flex items-center
        px-4 py-1.5
        gap-2
        rounded-full
        bg-primary/50
        border border-primary
        text-foreground
        hover:bg-primary
        hover:cursor-pointer
        hover:shadow-[0_0_100px_var(--primary)]
        transition-all
        duration-300
      "
    >
      <MdDownloading /> {label}
    </a>
  );
}
