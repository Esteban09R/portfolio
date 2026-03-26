"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BadgeCTA } from "@/components/common/BadgeCTA";
import Language from "@/components/common/Language";

export default function Header({
  pages,
  contactLabel = "Contact",
  contactLink = "#contact",
}: {
  pages: { label: string; href: string }[];
  contactLabel?: string;
  contactLink?: string;
}) {
  const router = useRouter();
  return (
    <header
      className="
      text-foreground
      fixed
      h-16
      top-0
      left-0
      z-50
      px-2
      w-full
      flex
      justify-center
      "
    >
      <div
        className="flex
        items-center
        justify-center
        w-full
        h-full
        max-w-xl
        mt-2
        bg-[radial-gradient(circle,rgba(140,42,35,0.5),rgba(10,4,3,0.5))]
        rounded-full
        backdrop-blur-md
        backdrop-brightness-125
        backdrop-contrast-110
        border
        border-white/10
        shadow-lg
        text-xs
        md:text-sm
        "
      >
        <nav className="w-full">
          <ul className="flex items-center gap-6 w-full justify-around px-8">
            {pages.map((page) => (
              <li key={page.label}>
                <Link
                  href={page.href}
                  className="text-foreground hover:text-secondary whitespace-nowrap"
                >
                  {page.label}
                </Link>
              </li>
            ))}
            <li className="relative whitespace-nowrap">
              <BadgeCTA
                label={contactLabel}
                link={contactLink}
                target="_self"
              ></BadgeCTA>
            </li>
            <li>
              <Language></Language>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
