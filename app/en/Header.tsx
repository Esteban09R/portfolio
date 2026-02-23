"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LuLanguages } from "react-icons/lu";

export default function Header() {
  const router = useRouter();
  return (
    <header
      className="
      text-foreground
      sticky 
      h-16
      top-0
      z-50
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
        sm:w-full
        max-w-xl
        h-full
        mt-2
        px-4
        sm:p-0
        bg-[radial-gradient(circle,rgba(140,42,35,0.5),rgba(10,4,3,0.5))]
        rounded-full
        backdrop-blur-md
        backdrop-brightness-125
        backdrop-contrast-110
        border
        border-white/10
        shadow-lg"
      >
        <nav>
          <ul className="flex items-center gap-6 sm:gap-12 text-sm sm:text-base">
            <li>
              <Link
                href="#home"
                className="text-foreground hover:text-secondary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-foreground hover:text-secondary"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#about-me"
                className="text-foreground hover:text-secondary"
              >
                About me
              </Link>
            </li>
            <li className="relative">
              <Link
                className="relative
                  z-10
                  rounded-full
                  bg-transparent
                  p-1
                  px-3
                  sm:px-4
                  text-primary
                  transition-all
                  duration-300
                  border
                  border-primary
                  hover:bg-primary
                  hover:cursor-pointer
                  hover:shadow-[0_0_100px_currentColor]
                "
                href="#contact"
              >
                <span className="text-foreground">Contact</span>
              </Link>
            </li>
            <li>
              <button
                className="flex flex-row items-center gap-1 hover:cursor-pointer p-1"
                onClick={() => {
                  localStorage.setItem("lang", "es");
                  router.push("/es");
                }}
              >
                <span className="text-foreground/50">EN</span>
                <LuLanguages />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
