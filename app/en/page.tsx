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

import { PROFILE } from "@/constants/profile";
import { PAGE_DATA } from "./pageData";
import Language from "@/components/common/Language";

export default function Page() {
  const p = PROFILE.projects;
  const d = PAGE_DATA;

  return (
    <>
      <Header
        pages={d.nav}
        contactLabel={d.contact.label}
        contactLink={`#${d.contact.id}`}
      />
      <div className="flex-1 flex flex-col items-center mx-6 mt-32" id="home">
        <div className="relative w-full max-w-4xl mt-26">
          <div className="fixed top-0 right-0 translate-y-[85dvh] translate-x-38 hover:translate-x-12 z-50 transition-all md:hidden">
            <div className="bg-background/50 backdrop-blur-md backdrop-brightness-125 backdrop-contrast-110 p-4 rounded-full border border-foreground pr-16">
              <Language target="" />
            </div>
          </div>
          <section>
            <HeroSection
              description={d.hero.description}
              contactLabel={d.contact.label}
              contactHref={`#${d.contact.id}`}
            >
              <p className="my-4 max-w-xl text-xl md:text-2xl font-medium">
                {d.hero.text}
                <span className="font-semibold text-accent">
                  {d.hero.highlight}
                </span>
                {d.hero.conclusion}
              </p>
            </HeroSection>
          </section>

          {/* PROJECTS */}
          <section className="mt-32 flex flex-col gap-4">
            <h2
              className="text-4xl font-bold pb-16 text-center md:text-start"
              id="projects"
            >
              {d.projects.sectionTitle}
            </h2>

            <Projects
              title={d.projects.v0idCoffee.title}
              description={d.projects.v0idCoffee.description}
              image={d.projects.v0idCoffee.image}
              webpage={p.v0idCoffee.webpage}
              github={p.v0idCoffee.github}
              githubLabel={d.projects.v0idCoffee.githubLabel}
              webpageLabel={d.projects.v0idCoffee.webpageLabel}
              name={d.projects.v0idCoffee.technologies}
              icons={[
                <SiNextdotjs key={0} />,
                <SiTypescript key={1} />,
                <SiTailwindcss key={2} />,
                <SiFramer key={3} />,
                <SiResend key={4} />,
              ]}
            />

            <Projects
              title={d.projects.blance.title}
              description={d.projects.blance.description}
              image={d.projects.blance.image}
              github={p.blance.github}
              githubLabel={d.projects.blance.githubLabel}
              name={d.projects.blance.technologies}
              icons={[
                <SiRust key={0} />,
                <SiTauri key={1} />,
                <SiNextdotjs key={2} />,
                <SiTypescript key={3} />,
                <SiTailwindcss key={4} />,
              ]}
              inDevelopment={d.projects.blance.inDevelopment}
            />
          </section>

          <section className="mt-32 text-lg max-w-6xl mx-auto">
            <AboutMe
              title={d.about.title}
              paragraphs={d.about.paragraphs}
              conclusion={d.about.conclusion}
              image={d.about.image}
              imageAlt={d.about.imageAlt}
            />
          </section>
        </div>
      </div>
      <Footer
        id={d.contact.id}
        title={d.footer.title}
        description={d.footer.description}
        formLabels={d.footer.formLabels}
        copyright={d.footer.copyright}
      />
    </>
  );
}
