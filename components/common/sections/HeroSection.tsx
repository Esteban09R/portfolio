import Image from "next/image";
import { BadgeLink } from "@/components/common/BadgeLinik";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { PROFILE } from "@/constants/profile";

export default function HeroSection({
  children,
  description,
  contactLabel,
  contactHref,
}: {
  children: React.ReactNode;
  description: string;
  contactLabel: string;
  contactHref: string;
}) {
  return (
    <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Image
          src={PROFILE.profile}
          alt="Profile"
          width={100}
          height={100}
          className="object-cover w-24 h-24 rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-3xl md:text-4xl font-extrabold">
            {PROFILE.name}
          </span>
          <span className="text-lg md:text-xl font-semibold opacity-80">
            {description}
          </span>
        </div>
      </div>
      {children}
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <BadgeLink
          label={contactLabel}
          icon={<FaEnvelope />}
          href={contactHref}
          target="_self"
        />
        <BadgeLink
          label="LinkedIn"
          icon={<FaLinkedin />}
          href={PROFILE.social.linkedin}
        />
        <BadgeLink
          label="GitHub"
          icon={<FaGithub />}
          href={PROFILE.social.github}
        />
      </div>
    </div>
  );
}
