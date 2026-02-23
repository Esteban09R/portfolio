import Projects from "./Projects";
import HeroSection from "./HeroSection";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center" id="home">
      <div className="w-full max-w-4xl mt-20">
        <HeroSection />

        {/* PROJECTS */}
        <section className="mt-32 flex flex-col gap-8">
          <h2 className="text-4xl font-bold" id="projects">
            Projects
          </h2>

          <div className="flex flex-col">
            <Projects
              title="MicroGestor"
              description="Simple and efficient for managing your daily tasks. MicroGestor was born with the idea of improving productivity while maintaining simplicity and spontaneity when creating tasks."
              image="/microgestor.png"
              link="https://github.com/Esteban09R/microgestor"
            />

            <Projects
              title="Blance"
              description="Blance is a budget management app focused on simplicity, control, and offline use.
It was designed as a minimalist alternative to financial apps overloaded with unnecessary functions and intrusive advertising."
              image="/blance.png"
              link="https://github.com/Esteban09R/blance"
            />
          </div>
        </section>

        <section className="mt-32 text-lg max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6" id="about-me">
            About me
          </h2>

          {/* Part with image */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_500px] gap-8 items-start">
            <div className="space-y-6">
              <p>
                I am a computer technician and extremely curious: I cannot just
                accept that something "works this way," I always need to
                understand why. Since I was a child, I disassembled devices out
                of pure curiosity to know how they worked.
              </p>

              <p>
                I use Linux by choice and Arch Linux by whim: the extreme
                customization allows me to say that this system is truly mine.
                Every part is there because I chose it.
              </p>
            </div>

            <figure>
              <Image
                src="/desktop.png"
                alt="Illustrative image of my operating system"
                width={1000}
                height={1000}
                className="rounded-lg"
              />
              <figcaption className="text-sm text-foreground/80 mt-2 text-center">
                Illustrative image of my operating system
              </figcaption>
            </figure>
          </div>

          {/* Text that grows to full width */}
          <div className="mt-6 space-y-6">
            <p>
              I love creating software because I am creative, I like to
              experiment, do everything, and share what I build so that it is
              useful for other people.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
