import Image from "next/image";

export default function AboutMe({
  title,
  paragraphs,
  image,
  imageAlt,
  conclusion,
  id = "about-me",
}: {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  conclusion: string;
  id?: string;
}) {
  return (
    <>
      <h2
        id={id}
        className="text-4xl font-bold mb-16 text-center md:text-start"
      >
        {title}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-8 items-center">
        {/* Paragraphs are left-aligned for better readability */}
        <div className="space-y-6 text-left">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <figure className="flex flex-col items-center">
          <Image
            src={image}
            alt={imageAlt}
            width={1000}
            height={1000}
            className="rounded-lg shadow-lg"
          />
          <figcaption className="text-sm text-foreground/80 mt-2 text-center">
            {imageAlt}
          </figcaption>
        </figure>
      </div>

      <div className="mt-8 text-left">
        <p className="text-lg">{conclusion}</p>
      </div>
    </>
  );
}
