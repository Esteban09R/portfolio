import Image from "next/image";
import { BadgeLink } from "@/components/common/BadgeLinik";
import { FaGithub } from "react-icons/fa";
import { HiGlobeAmericas } from "react-icons/hi2";
import BadgeSimple from "@/components/common/BadgeSimple";
import { BadgeCTA } from "../BadgeCTA";

type ProjectsProps = {
  title: string;
  description: string;
  image: string;
  webpage?: string;
  github: string;
  githubLabel?: string;
  webpageLabel?: string;
  name: string[];
  icons: React.ReactNode[];
  inDevelopment?: string;
};

function Skills({ name, icons }: Pick<ProjectsProps, "name" | "icons">) {
  return (
    <>
      {name.map((skill, index) => (
        <BadgeSimple
          key={index}
          label={skill}
          icon={icons[index]}
        ></BadgeSimple>
      ))}
    </>
  );
}
export default function Projects({
  title,
  description,
  image,
  webpage,
  github,
  githubLabel = "View on github",
  webpageLabel = "Visit webpage",
  name,
  icons,
  inDevelopment,
}: ProjectsProps) {
  return (
    <div className="group flex flex-col md:flex-row items-stretch w-full max-w-5xl mx-auto bg-primary/10 border border-accent rounded-3xl overflow-hidden mb-16 even:md:flex-row-reverse min-h-[350px]">
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

      <div className="w-full md:w-[60%] p-6 md:p-10 flex flex-col items-center md:items-start text-center md:text-left justify-center z-10">
        <h2 className="text-3xl font-bold text-primary mb-2 leading-tight">
          {title}
        </h2>
        <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-4 max-w-[90%]">
          {description}
        </p>

        {/**skills section */}
        <div className="py-2">
          <span className="flex gap-2 flex-wrap justify-center md:justify-start">
            <Skills name={name} icons={icons} />
          </span>
        </div>

        {/**links section */}
        <div className="self-end pb-2 pt-8">
          <span className="flex gap-2 flex-wrap">
            {inDevelopment && (
              <span className="flex items-center gap-2 italic text-sm px-2 text-foreground/80">
                {inDevelopment}
              </span>
            )}
            {webpage && (
              <BadgeCTA
                label={webpageLabel}
                link={webpage}
                icon={<HiGlobeAmericas />}
              ></BadgeCTA>
            )}
            <BadgeCTA
              label={githubLabel}
              link={github}
              icon={<FaGithub />}
            ></BadgeCTA>
          </span>
        </div>
      </div>
    </div>
  );
}
