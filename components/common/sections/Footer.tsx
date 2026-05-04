import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BadgeLink } from "../BadgeLinik";
import { PROFILE } from "@/constants/profile";
import EmailButton from "../EmailButton";

interface FooterProps {
  title: string;
  description: string;
  copyright: string;
  emailBadge: string;
  orLabel: string;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  twitter: <FaTwitter />,
};

export default function Footer({
  title,
  description,
  copyright,
  emailBadge,
  orLabel,
}: FooterProps) {
  const alignmentClasses =
    "items-center md:items-start text-center md:text-left";

  return (
    <footer
      id={title}
      className="bg-background text-foreground flex flex-col gap-4 py-4 mt-32 p-8 w-full border-t border-white/5 max-w-4xl mx-auto rounded-t-2xl"
    >
      <div className={`w-full flex flex-col gap-8 ${alignmentClasses}`}>
        <h5 className="text-4xl font-bold py-4">{title}</h5>

        <div className={`flex flex-col gap-4 ${alignmentClasses}`}>
          <p className="font-semibold opacity-80">{description}</p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <ul className="flex flex-wrap gap-4">
              {PROFILE.socialLinks.map((social) => (
                <li key={social.id}>
                  <BadgeLink
                    label={social.label}
                    href={social.href}
                    icon={ICON_MAP[social.id]}
                  />
                </li>
              ))}
            </ul>

            <span className="text-sm opacity-50 px-2 italic">{orLabel}</span>

            <EmailButton label={emailBadge} />
          </div>
        </div>

        <p className="text-sm opacity-40 mt-8">
          {`© ${new Date().getFullYear()} ${copyright}`}
        </p>
      </div>
    </footer>
  );
}
