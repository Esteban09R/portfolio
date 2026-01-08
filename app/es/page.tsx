import Projects from "./Projects";
import HeroSection from "./HeroSection";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 items-center  justify-center">
      <div className="w-2xl">
        <HeroSection />
        <div className="w-2xl mt-8">
          <h2 className="text-2xl font-semibold">Sobre mí</h2>
          Hola, soy Esteban. Desarrollador fullstack con fuerte enfoque en la
          creación de sistemas prácticos, simples y escalables. Me especializo
          en transformar necesidades reales en soluciones técnicas funcionales,
          priorizando mantenibilidad, claridad y eficiencia. Tengo pensamiento
          analítico y crítico, lo que me permite abordar problemas complejos
          desde una perspectiva estructurada y orientada a soluciones reales.
        </div>
        <div className="mt-8 flex flex-col gap-4 items-left">
          <h2 className="text-2xl font-semibold">Proyectos</h2>
          <div className="flex flex-col gap-12">
            <Projects
              title="MicroGestor"
              description="Simple y eficiente para gestionar tus tareas diarias. MicroGestor nace con la idea de mejorar la productividad manteniendo la simplicidad y espontaneidad a la hora de crear tareas."
              image="/microgestor.png"
              link="https://github.com/Esteban09R/microgestor"
            />
            <Projects
              title="MicroGestor"
              description="Simple y eficiente para gestionar tus tareas diarias. MicroGestor nace con la idea de mejorar la productividad manteniendo la simplicidad y espontaneidad a la hora de crear tareas."
              image="/microgestor.png"
              link="https://github.com/Esteban09R/microgestor"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
