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
      <h2 className="text-4xl font-bold mb-16" id={id}>
        {title}
      </h2>

      {/* Part with image */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_500px] gap-8 items-start">
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <figure>
          <Image
            src={image}
            alt={imageAlt}
            width={1000}
            height={1000}
            className="rounded-lg"
          />
          <figcaption className="text-sm text-foreground/80 mt-2 text-center">
            {imageAlt}
          </figcaption>
        </figure>
      </div>

      <div className="mt-6 space-y-6">
        <p>{conclusion}</p>
      </div>
    </>
  );
}
