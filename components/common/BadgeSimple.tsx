type BadgeSimpleProps = {
  label: string;
  icon?: React.ReactNode;
};

export default function BadgeSimple({ label, icon }: BadgeSimpleProps) {
  return (
    <span
      className="
        inline-flex items-center
        px-4 py-1.5
        gap-2
        rounded-full
        border border-accent
        text-sm font-medium
        text-foreground
        transition-colors
      "
    >
      {icon}
      {label}
    </span>
  );
}
