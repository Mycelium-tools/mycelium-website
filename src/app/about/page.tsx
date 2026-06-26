import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Mycelium",
  description: "Mycelium is building the technical infrastructure for AI systems that consider nonhuman animal welfare.",
};

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="pt-[73px]">

        {/* Header / mission */}
        <section className="py-10">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="mt-4 font-serif text-6xl font-semibold leading-tight text-foreground">
              we're advancing AI to include {" "}
              <em className="italic text-purple">all sentient beings</em>
            </h1>

            <div className="mt-10">
              <p className="text-xl leading-relaxed text-muted pb-8">
                AI is transforming the world.

                Today's

              </p>
              <p className="text-xl leading-relaxed text-muted">
                Mycelium was founded for this reason. Named after the fungal networks that quietly sustain entire ecosystems, we build the connective tissue to bridge AI safety and animal welfare - the technical tools and research the broader movement can use and build on.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-8">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-serif text-5xl font-semibold leading-tight text-foreground">
              team
            </h2>
            <div className="mt-8 flex flex-wrap gap-10">
              <div className="flex flex-col items-start">
                <div className="relative h-40 w-40 overflow-hidden rounded-2xl">
                  <Image
                    src="/headshot-allen.jpg"
                    alt="Allen Lu"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                  <a
                    href="https://www.linkedin.com/in/allenlu017/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-purple"
                  >
                    Allen Lu
                  </a>
                </h3>
                <p className="mt-1 text-sm font-medium text-purple pb-8">
                  Founder, Executive Director
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
