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
      <div className="flex flex-col items-center mx-6" id="home">
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
                "I am a computer technician and extremely curious: I cannot just accept that something 'works this way,' I always need to understand why. Since I was a child, I disassembled devices out of pure curiosity to know how they worked.",
                "I use Linux by choice and Arch Linux by whim: the extreme customization allows me to say that this system is truly mine. Every part is there because I chose it.",
              ]}
              conclusion="I love creating software because I am creative, I like to experiment, do everything, and share what I build so that it is useful for other people."
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
