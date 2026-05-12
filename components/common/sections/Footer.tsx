import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BadgeLink } from "../BadgeLinik";
import { PROFILE } from "@/constants/profile";
import ContactForm from "../ContactForm";

interface FooterLabels {
  name: string;
  email: string;
  message: string;
  send: string;
  success: string;
  error: string;
}

interface FooterProps {
  id?: string;
  title: string;
  description: string;
  copyright: string;
  formLabels: FooterLabels;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  twitter: <FaTwitter />,
};

export default function Footer({
  id,
  title,
  description,
  copyright,
  formLabels,
}: FooterProps) {
  return (
    <footer
      id={id}
      className="bg-background/50 text-foreground flex flex-col gap-4 py-4 mt-32 p-8 w-full border-t border-white/5 max-w-4xl mx-auto rounded-t-3xl backdrop-blur-xs backdrop-brightness-150 backdrop-contrast-110"
    >
      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-12 py-8">
        {/* Socials & Info Side */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h5 className="text-4xl font-bold">{title}</h5>
            <p className="font-semibold opacity-60 text-balance">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
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
          </div>
        </div>

        {/* Contact Form Side */}
        <div className="w-full">
          <ContactForm
            nameLabel={formLabels.name}
            emailLabel={formLabels.email}
            messageLabel={formLabels.message}
            sendLabel={formLabels.send}
            successMessage={formLabels.success}
            errorMessage={formLabels.error}
          />
        </div>
      </div>

      <p className="text-sm opacity-30 mt-8 text-center md:text-left">
        {`© ${new Date().getFullYear()} ${copyright}`}
      </p>
    </footer>
  );
}
