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
        <section className="py-16 sm:py-10">
          <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-8">
            <h1 className="mt-4 font-serif text-6xl font-semibold leading-tight text-foreground">
              we're advancing AI to include {" "}
              <em className="italic text-purple">all sentient beings</em>
            </h1>

            <div className="mt-10">
              <p className="text-xl leading-relaxed text-muted pb-8">
                AI is transforming the world - not only for humanity, but also for the rest of sentient life that calls the world their home. 
              </p>
              <p className="text-xl leading-relaxed text-muted pb-8">
                AI is already managing wildlife, changing the food system through consumer habits, and soon may be completely integrated into factory farms, further perpetuating animal suffering. As these systems become more capable and autonomous, it becomes imperative that we make sure they are built with every being in mind.
              </p>
              <p className="text-xl leading-relaxed text-muted pb-8">
                This is a critical moment in time, to shape these systems to account for nonhuman welfare before these dangerous values become locked-in for good.
              </p>
              <p className="text-xl leading-relaxed text-muted">
                Named after the fungal networks that sustain entire ecosystems beneath the surface, <b>Mycelium</b> bridges the gap between AI safety and animal welfare, building the benchmarks, evaluations, and other technical infrastructure needed to advance AI models to consider humans, animals, and all sentient beings.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-12 sm:py-8">
          <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-8">
            <h2 className="font-serif text-5xl font-semibold leading-tight text-foreground">
              team
            </h2>
            <div className="mt-8 flex flex-wrap gap-10">
              <div className="flex flex-col items-start">
                <a
                  href="https://www.linkedin.com/in/allenlu017/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transition-transform duration-200 hover:scale-[1.05]"
                >
                  <div className="relative h-56 w-56 overflow-hidden rounded-2xl">
                    <Image
                      src="/headshot-allen.jpg"
                      alt="Allen Lu"
                      fill
                      className="object-cover"
                    />
                  </div>
                </a>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">
                  <a
                    href="https://www.linkedin.com/in/allenlu017/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-purple"
                  >
                    Allen Lu
                  </a>
                </h3>
                <p className="mt-1 text-base font-medium text-purple pb-8">
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
