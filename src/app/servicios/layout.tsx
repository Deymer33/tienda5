import Image from "next/image";

export default function ServiceLayout({
  children,
  title,
  description,
  image,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  image: { src: string; alt: string; hint: string };
}) {
  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">{title}</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden border shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover"
                data-ai-hint={image.hint}
              />
            </div>
            <div className="space-y-4">
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
