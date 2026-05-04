"use client";
import { usePathname, useRouter } from "next/navigation";
import { IoLanguage } from "react-icons/io5";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Language(props: { target: string }) {
  const pathname = usePathname() || "";
  const currentLang = pathname.includes("/es") ? "es" : "en";
  const router = useRouter();

  // Local state to ensure animation plays before redirect
  const [displayLang, setDisplayLang] = useState(currentLang);

  // Keep display state in sync with URL
  useEffect(() => {
    setDisplayLang(currentLang);
  }, [currentLang]);

  const handleToggle = () => {
    const nextLang = currentLang === "es" ? "en" : "es";

    // 1. Trigger local animation first
    setDisplayLang(nextLang);

    // 2. Wait for animation to finish before jumping to next page
    setTimeout(() => {
      localStorage.setItem("lang", nextLang);
      router.push("/" + nextLang + "/" + props.target);
    }, 400); // Wait for the spring animation (approx 300-400ms)
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <span className="p-2 bg-primary/20 border border-primary rounded-full">
        <IoLanguage className="text-foreground" />
      </span>
      <button
        className="hover:cursor-pointer relative overflow-hidden rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm p-1"
        onClick={handleToggle}
      >
        <div className="relative flex flex-row items-center gap-6 px-3 py-2 text-[10px] font-bold tracking-tighter sm:tracking-normal z-10 mt-px">
          <span
            className={`transition-colors duration-300 ${displayLang === "es" ? "text-primary-foreground" : "text-foreground/50"}`}
          >
            ES
          </span>
          <span
            className={`transition-colors duration-300 ${displayLang === "en" ? "text-primary-foreground" : "text-foreground/50"}`}
          >
            EN
          </span>
        </div>

        {/* Animated indicator */}
        <motion.div
          className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-full z-0 shadow-md"
          initial={false}
          animate={{
            x: displayLang === "es" ? 0 : "100%",
            left: 4,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </button>
    </div>
  );
}
