"use client";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const handleSendEmail = () => {
  window.location.href = "mailto:rolonesteban@proton.me";
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-background p-4 text-foreground flex flex-col gap-4 items-center mb-8 py-12"
    >
      <div className="w-full max-w-4xl flex flex-col gap-4 items-left">
        <h5 className="text-4xl font-bold mb-4">Contact</h5>
        <p>Let's keep in touch through my social networks:</p>
        <ul className="flex gap-4">
          <li>
            <a
              href="https://www.github.com/Esteban09R"
              target="_blank"
              className="flex gap-2 items-center hover:cursor-pointer hover:text-secondary"
            >
              <FaGithub />
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/estebanrolon09/"
              target="_blank"
              className="flex gap-2 items-center hover:cursor-pointer hover:text-secondary"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </li>
        </ul>
        <p>Send me an email to my personal address: </p>
        <button
          onClick={handleSendEmail}
          className="flex gap-2 items-center hover:cursor-pointer hover:text-secondary"
        >
          <FaEnvelope />
          Send Email
        </button>
        <p className="text-center mt-4 text-sm">
          © {new Date().getFullYear()} Esteban Rolón. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
