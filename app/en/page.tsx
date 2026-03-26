import Projects from "@/components/common/sections/Projects";
import HeroSection from "@/components/common/sections/HeroSection";
import AboutMe from "@/components/common/sections/AboutMe";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiResend,
  SiRust,
  SiTauri,
} from "react-icons/si";
import Header from "@/components/common/sections/Header";
import Footer from "@/components/common/sections/Footer";

export default function Page() {
  return (
    <>
      <Header
        pages={[
          { label: "home", href: "#home" },
          { label: "projects", href: "#projects" },
          { label: "about-me", href: "#about-me" },
        ]}
        contactLabel="Contact me"
        contactLink="#Contact me"
      />
      <div className="flex flex-col items-center mx-6 mt-16" id="home">
        <div className="w-full max-w-4xl mt-26">
          <section>
            <HeroSection description="Fullstack Developer">
              <p className="my-4 max-w-xl text-xl sm:text-2xl font-medium">
                I develop applications and systems focused on solving
                <span className="font-semibold text-accent"> real needs</span>,
                prioritizing simplicity, efficiency, and maintainability.
              </p>
            </HeroSection>
          </section>

          {/* PROJECTS */}
          <section className="mt-32 flex flex-col gap-4">
            <h2 className="text-4xl font-bold pb-16" id="projects">
              Projects
            </h2>

            <Projects
              title="V0id Coffee landing page"
              description="Landing page for a coffee shop aimed at night owls and programmers, featuring a 'terminal' aesthetic with modern glassmorphism, a dark theme reminiscent of a terminal, and smooth animations."
              image="/v0id-coffee.png"
              webpage="https://v0id-coffee.vercel.app/"
              github="https://github.com/Esteban09R/v0id-coffee"
              name={[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "Resend",
              ]}
              icons={[
                <SiNextdotjs key={0} />,
                <SiTypescript key={1} />,
                <SiTailwindcss key={2} />,
                <SiFramer key={3} />,
                <SiResend key={4} />,
              ]}
            />

            <Projects
              title="Blance"
              description="Blance is a budget management app focused on simplicity, control, and offline use.
            It was designed as a minimalist alternative to financial apps overloaded with unnecessary functions and intrusive advertising."
              image="/blance.png"
              github="https://github.com/Esteban09R/blance"
              name={["Rust", "Tauri", "Next.js", "TypeScript", "Tailwind CSS"]}
              icons={[
                <SiRust key={0} />,
                <SiTauri key={1} />,
                <SiNextdotjs key={2} />,
                <SiTypescript key={3} />,
                <SiTailwindcss key={4} />,
              ]}
              inDevelopment={"Currently in development"}
            />
          </section>

          <section className="mt-32 text-lg max-w-6xl mx-auto">
            <AboutMe
              title="About me"
              paragraphs={[
                "I am a 19-year-old developer passionate about efficiency and systems architecture. My daily workflow takes place in a highly customized Arch Linux environment, where optimization isn't just a hobby—it's a standard.",
                "Currently, I work in the banking sector leading a Data Digitalization operations team. While my primary role focuses on strategic management and information flow, I leverage my passion for programming to understand and improve how we interact with technology.",
              ]}
              conclusion="My personal technical focus is centered on the Rust and Tauri ecosystem for high-performance applications, alongside Next.js for modern interfaces. I aim to merge my real-world team leadership experience with my technical skills to build robust, aesthetic digital tools."
              image="/desktop.png"
              imageAlt="Illustrative image of my operating system"
            />
          </section>
        </div>
      </div>
      <Footer
        title="Contact me"
        description="Let's keep in touch through my social networks:"
        email="Send me an email to my personal email: "
        emailBadge="Send Email"
        copyright="Esteban Rolón. All rights reserved."
      />
    </>
  );
}
