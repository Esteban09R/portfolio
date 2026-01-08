type BadgeLinkProps = {
  label: string;
  href: string;
};

export function BadgeLink({ label, href }: BadgeLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center
        px-4 py-1.5
        rounded-full
        border border-secondary
        text-sm font-medium
        text-foreground
        hover:bg-secondary
        transition-colors
      "
    >
      {label}
    </a>
  );
}
