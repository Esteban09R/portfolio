import Image from "next/image";
import { BadgeLink } from "@/components/common/BadgeLinik";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { PROFILE } from "@/constants/profile";
import { PRIVATE_PROFILE } from "@/constants/private-profile";

export default function HeroSection({
  children,
  description,
}: {
  children: React.ReactNode;
  description: string;
}) {

  return (
    <div className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Image
          src={PROFILE.profile}
          alt="Profile"
          width={100}
          height={100}
          className="object-cover w-24 h-24 rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-3xl sm:text-4xl font-extrabold">
            {PROFILE.name}
          </span>
          <span className="text-lg sm:text-xl font-semibold opacity-80">
            {description}
          </span>
        </div>
      </div>
      {children}
      <div className="flex flex-wrap justify-center sm:justify-start gap-4">
        {process.env.NODE_ENV !== "production" && (
          <BadgeLink 
            label="E-mail" 
            icon={<FaEnvelope />} 
            href={`mailto:${PRIVATE_PROFILE.email}`} 
          />
        )}
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
