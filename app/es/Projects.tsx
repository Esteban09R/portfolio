import Image from "next/image";

type ProjectsProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};
export default function Projects({
  title,
  description,
  image,
  link,
}: ProjectsProps) {
  return (
    <div className="group flex flex-col md:flex-row items-stretch w-full max-w-5xl mx-auto bg-secondary/10 rounded-3xl overflow-hidden mb-16 even:md:flex-row-reverse min-h-[350px]">
      {/* IMAGEN: Ocupa el 60% */}
      <div
        className="relative w-full md:w-[40%] h-64 md:h-auto overflow-hidden bg-transparent"
        style={{
          clipPath: "var(--clip-path-dynamic)",
          transform: "scale(1.01)",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top-left transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* TEXTO: Ocupa el 40% con tipografía más pequeña */}
      <div className="w-full md:w-[60%] p-6 md:p-10 flex flex-col justify-center z-10">
        <h2 className="text-3xl font-bold text-primary mb-2 leading-tight">
          {title}
        </h2>
        {/* Reducimos a text-sm para ganar legibilidad en columnas estrechas */}
        <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-4 max-w-[90%]">
          {description}
        </p>
        <a
          href={link}
          className="w-fit px-6 py-2 border border-accent text-accent rounded-full hover:bg-accent hover:text-background transition-all duration-300 font-semibold uppercase tracking-wider text-[10px]"
        >
          Ver proyecto
        </a>
      </div>
    </div>
  );
}
