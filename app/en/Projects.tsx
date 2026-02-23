import Image from "next/image";
import { BadgeLink } from "./Badge";

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
    <div className="group flex flex-col md:flex-row items-stretch w-full max-w-5xl mx-auto bg-primary/10 border border-accent rounded-3xl overflow-hidden mb-16 even:md:flex-row-reverse min-h-[350px]">
      {/* IMAGE: Occupies 60% */}
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

      {/* TEXT: Occupies 40% with smaller typography */}
      <div className="w-full md:w-[60%] p-6 md:p-10 flex flex-col items-center md:items-start text-center md:text-left justify-center z-10">
        <h2 className="text-3xl font-bold text-primary mb-2 leading-tight">
          {title}
        </h2>
        {/* We reduce to text-sm to gain legibility in narrow columns */}
        <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-4 max-w-[90%]">
          {description}
        </p>
        <BadgeLink label="View project" href={link}></BadgeLink>
      </div>
    </div>
  );
}
