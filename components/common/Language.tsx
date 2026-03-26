"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Language() {
  const pathname = usePathname() || "";
  const [currentLang, setCurrentLang] = useState(
    pathname.includes("/es") ? "es" : "en",
  );

  useEffect(() => {
    // Sync state if pathname changes (e.g. from external logic)
    setCurrentLang(pathname.includes("/es") ? "es" : "en");
  }, [pathname]);

  const router = useRouter();
  return (
    <button
      className="hover:cursor-pointer"
      onClick={() => {
        if (currentLang === "es") {
          localStorage.setItem("lang", "en");
          setCurrentLang("en");
          router.push("/en");
        } else {
          localStorage.setItem("lang", "es");
          setCurrentLang("es");
          router.push("/es");
        }
      }}
    >
      <span className="relative flex flex-row items-center gap-4 bg-transparent border border-primary p-1.5 rounded-full transition-all duration-300">
        <span className="text-foreground/50">ES</span>
        <span className="text-foreground/50">EN</span>
        <span
          className={`absolute top-0 left-0 w-1/2 h-full -z-10 flex items-center justify-center transition-transform duration-300 ${currentLang === "es" ? "translate-x-0" : "translate-x-full"}`}
        >
          <span className="bg-primary rounded-full h-6 w-6"></span>
        </span>
      </span>
    </button>
  );
}
