import Image from "next/image";
import { BadgeLink } from "./Badge";

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Image
          src="/profile.webp"
          alt="Profile"
          width={100}
          height={100}
          className="object-cover w-24 h-24 rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-4xl font-extrabold">Esteban Rolón</span>
          <span className="text-xl font-semibold">Desarrollador Fullstack</span>
        </div>
      </div>
      <p className="my-4 w-xl text-2xl font-medium">
        Desarrollo aplicaciones y sistemas enfocados en resolver
        <span className="font-semibold text-primary"> necesidades reales</span>,
        priorizando simplicidad, eficiencia y mantenibilidad.
      </p>
      <div className="flex gap-4">
        <BadgeLink
          label="Contacto"
          href="mailto:rolonesteban@proton.me"
        ></BadgeLink>
        <BadgeLink
          label="LinkedIn"
          href="https://linkedin.com/in/estebanrolon09"
        ></BadgeLink>
        <BadgeLink
          label="GitHub"
          href="https://github.com/Esteban09R"
        ></BadgeLink>
      </div>
    </div>
  );
}
