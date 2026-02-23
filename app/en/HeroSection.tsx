"use client";
import Image from "next/image";
import { BadgeLink } from "./Badge";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Image
          src="/profile.webp"
          alt="Profile"
          width={100}
          height={100}
          className="object-cover w-24 h-24 rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-3xl sm:text-4xl font-extrabold">
            Esteban Rolón
          </span>
          <span className="text-lg sm:text-xl font-semibold opacity-80">
            Fullstack Developer
          </span>
        </div>
      </div>
      <p className="my-4 max-w-xl text-xl sm:text-2xl font-medium">
        I develop applications and systems focused on solving
        <span className="font-semibold text-accent"> real needs</span>,
        prioritizing simplicity, efficiency, and maintainability.
      </p>
      <div className="flex flex-wrap justify-center sm:justify-start gap-4">
        <BadgeLink
          label="E-mail"
          icon={<FaEnvelope />}
          href="mailto:rolonesteban@proton.me"
        ></BadgeLink>
        <BadgeLink
          label="LinkedIn"
          icon={<FaLinkedin />}
          href="https://linkedin.com/in/estebanrolon09"
        ></BadgeLink>
        <BadgeLink
          label="GitHub"
          icon={<FaGithub />}
          href="https://github.com/Esteban09R"
        ></BadgeLink>
      </div>
    </div>
  );
}
