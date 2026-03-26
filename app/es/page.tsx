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
          { label: "inicio", href: "#inicio" },
          { label: "proyectos", href: "#proyectos" },
          { label: "sobre-mi", href: "#sobre-mi" },
        ]}
        contactLabel="Contacto"
        contactLink="#Contacto"
      />
      <div className="flex flex-col items-center mx-6" id="inicio">
        <div className="w-full max-w-4xl mt-26">
          <section>
            <HeroSection description="Desarrollador Fullstack">
              <p className="my-4 max-w-xl text-xl sm:text-2xl font-medium">
                Desarrollo aplicaciones y sistemas enfocados en resolver
                <span className="font-semibold text-accent">
                  {" "}
                  necesidades reales
                </span>
                , priorizando la simplicidad, eficiencia y mantenibilidad.
              </p>
            </HeroSection>
          </section>

          {/* PROYECTOS */}
          <section className="mt-32 flex flex-col gap-4">
            <h2 className="text-4xl font-bold pb-16" id="proyectos">
              Proyectos
            </h2>

            <Projects
              title="V0id Coffee landing page"
              description="Landing page para una cafetería orientada a noctámbulos y programadores, con una estética de 'terminal' con glassmorphism moderno, un tema oscuro que recuerda a una terminal y animaciones fluidas."
              image="/v0id-coffee.png"
              webpage="https://v0id-coffee.vercel.app/"
              github="https://github.com/Esteban09R/v0id-coffee"
              githubLabel="Ver en GitHub"
              webpageLabel="Visitar web"
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
              description="Blance es una aplicación de gestión de presupuesto enfocada en la simplicidad, el control y el uso sin conexión. Fue diseñada como una alternativa minimalista a las aplicaciones financieras sobrecargadas con funciones innecesarias y publicidad intrusiva."
              image="/blance.png"
              github="https://github.com/Esteban09R/blance"
              githubLabel="Ver en GitHub"
              name={["Rust", "Tauri", "Next.js", "TypeScript", "Tailwind CSS"]}
              icons={[
                <SiRust key={0} />,
                <SiTauri key={1} />,
                <SiNextdotjs key={2} />,
                <SiTypescript key={3} />,
                <SiTailwindcss key={4} />,
              ]}
              inDevelopment="Actualmente en desarrollo"
            />
          </section>

          <section className="mt-32 text-lg max-w-6xl mx-auto">
            <AboutMe
              title="Sobre mí"
              id="sobre-mi"
              paragraphs={[
                "Soy técnico en informática y extremadamente curioso: no puedo quedarme con el 'funciona así', siempre necesito entender el porqué. Desde chico desarmaba dispositivos por pura curiosidad de saber cómo funcionaban.",
                "Uso Linux por elección y Arch Linux por capricho: la personalización extrema me permite decir que este sistema es realmente mío. Cada parte está ahí porque la elegí.",
              ]}
              conclusion="Me encanta crear software porque soy creativo, me gusta experimentar, hacer de todo y compartir lo que construyo para que sea útil para otras personas."
              image="/desktop.png"
              imageAlt="Imagen ilustrativa de mi sistema operativo"
            />
          </section>
        </div>
      </div>
      <Footer
        title="Contacto"
        description="Sigamos en contacto a traves de mis redes:"
        email="Enviame un e-mail a mi correo personal: "
        emailBadge="Enviar Correo Electronico"
        copyright="Esteban Rolón. Todos los derechos reservados."
      />
    </>
  );
}
