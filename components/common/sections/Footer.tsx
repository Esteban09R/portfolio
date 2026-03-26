"use client";
const handleSendEmail = () => {
  window.location.href = "mailto:rolonesteban@proton.me";
};
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BadgeLink } from "../BadgeLinik";
interface FooterProps {
  title: string;
  description: string;
  email: string;
  copyright: string;
  emailBadge: string;
}

export default function Footer({
  title,
  description,
  email,
  copyright,
  emailBadge,
}: FooterProps) {
  return (
    <footer
      id={title}
      className="bg-background text-foreground flex flex-col gap-4 py-4 mt-32"
    >
      <div className="w-full max-w-4xl flex flex-col gap-8 items-center">
        <h5 className="text-4xl font-bold py-4">{title}</h5>
        <div className="flex flex-col gap-4 items-center">
          <p className="font-semibold">{description}</p>

          <ul className="flex gap-4">
            <li>
              <BadgeLink
                label="GitHub"
                href="https://www.github.com/Esteban09R"
                icon={<FaGithub />}
              />
            </li>
            <li>
              <BadgeLink
                label="LinkedIn"
                href="https://www.linkedin.com/in/estebanrolon09/"
                icon={<FaLinkedin />}
              />
            </li>
            <li>
              <BadgeLink
                label="Twitter"
                href="https://www.twitter.com/reidandev"
                icon={<FaTwitter />}
              />
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <p className="font-semibold">{email}</p>
          <button
            onClick={handleSendEmail}
            className="flex gap-2 items-center hover:cursor-pointer hover:text-secondary"
          >
            <FaEnvelope />
            {emailBadge}
          </button>
        </div>
        <p className="text-center text-sm">{`© ${new Date().getFullYear()} ${copyright}`}</p>
      </div>
    </footer>
  );
}
