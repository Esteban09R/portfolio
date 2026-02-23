type BadgeLinkProps = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export function BadgeLink({ label, href, icon }: BadgeLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center
        px-4 py-1.5
        gap-2
        rounded-full
        border border-primary
        text-sm font-medium
        text-foreground
        hover:bg-primary
        transition-colors
      "
    >
      {icon}
      {label}
    </a>
  );
}
