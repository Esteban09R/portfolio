"use client";
import Link from "next/link";
import { BadgeCTA } from "@/components/common/BadgeCTA";
import Language from "@/components/common/Language";

interface HeaderProps {
  pages: { label: string; href: string }[];
  contactLabel?: string;
  contactLink?: string;
}

export default function Header({
  pages,
  contactLabel = "Contact",
  contactLink = "#contact",
}: HeaderProps) {
  // Navigation bar container styles
  const navContainerStyles = [
    "flex items-center justify-center",
    "w-full h-full max-w-xl mt-2 px-8",
    "rounded-full border border-white/10 shadow-lg",
    "text-xs sm:text-sm whitespace-nowrap",
    "backdrop-blur-md backdrop-brightness-125 backdrop-contrast-110",
    "bg-[radial-gradient(circle,rgba(140,42,35,0.5),rgba(10,4,3,0.5))]",
  ].join(" ");

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-16 px-2 flex justify-center text-foreground">
      <div className={navContainerStyles}>
        <nav className="w-full">
          <ul className="flex items-center justify-around gap-4 w-full">
            {pages.map((page) => (
              <li key={page.label}>
                <Link
                  href={page.href}
                  className="text-foreground hover:text-secondary transition-colors"
                >
                  {page.label}
                </Link>
              </li>
            ))}
            <li className="hidden md:block">
              <Language target="" />
            </li>
            <li className="relative">
              <BadgeCTA
                label={contactLabel}
                link={contactLink}
                target="_self"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
