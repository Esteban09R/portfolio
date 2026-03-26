"use client";

import Link from "next/link";

type BadgeCTAProps = {
  label: string;
  icon?: React.ReactNode;
  link: string;
  className?: string;
  target?: string;
};

export function BadgeCTA({
  label,
  icon,
  link,
  className,
  target = "_blank",
}: BadgeCTAProps) {
  return (
    <Link
      href={link || "#"}
      target={target}
      className={`
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
        ${className}
      `}
    >
      {icon}
      {label}
    </Link>
  );
}
