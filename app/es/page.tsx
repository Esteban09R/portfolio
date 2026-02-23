import Projects from "./Projects";
import HeroSection from "./HeroSection";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center" id="inicio">
      <div className="w-full max-w-4xl mt-20">
        <HeroSection />

        {/* PROYECTOS */}
        <section className="mt-32 flex flex-col gap-8">
          <h2 className="text-4xl font-bold" id="proyectos">
            Proyectos
          </h2>

          <div className="flex flex-col">
            <Projects
              title="MicroGestor"
              description="Simple y eficiente para gestionar tus tareas diarias. MicroGestor nace con la idea de mejorar la productividad manteniendo la simplicidad y espontaneidad a la hora de crear tareas."
              image="/microgestor.png"
              link="https://github.com/Esteban09R/microgestor"
            />

            <Projects
              title="Blance"
              description="Blance es una aplicación de gestión de gastos enfocada en simplicidad, control y uso offline.
Fue diseñada como una alternativa minimalista a las apps financieras sobrecargadas de funciones innecesarias y publicidad invasiva."
              image="/blance.png"
              link="https://github.com/Esteban09R/blance"
            />
          </div>
        </section>

        <section className="mt-32 text-lg max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6" id="sobre-mi">
            Sobre mí
          </h2>

          {/* Parte con imagen */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_500px] gap-8 items-start">
            <div className="space-y-6">
              <p>
                Soy técnico en informática y extremadamente curioso: no puedo
                quedarme con el “funciona así”, siempre necesito entender el
                porqué. Desde chico desarmaba dispositivos por pura curiosidad
                de saber cómo funcionaban.
              </p>

              <p>
                Uso Linux por elección y Arch Linux por capricho: la
                personalización extrema me permite decir que este sistema es
                realmente mío. Cada parte está ahí porque la elegí.
              </p>
            </div>

            <figure>
              <Image
                src="/desktop.png"
                alt="Imagen ilustrativa de mi sistema operativo"
                width={1000}
                height={1000}
                className="rounded-lg"
              />
              <figcaption className="text-sm text-foreground/80 mt-2 text-center">
                Imagen ilustrativa de mi sistema operativo
              </figcaption>
            </figure>
          </div>

          {/* Texto que crece a ancho completo */}
          <div className="mt-6 space-y-6">
            <p>
              Me encanta crear software porque soy creativo, me gusta
              experimentar, hacer de todo y compartir lo que construyo para que
              sea útil para otras personas.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
