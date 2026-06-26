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
                AI is no longer a research curiosity. It informs farming practices, wildlife management, policy decisions, and consumer behavior at scale — affecting the lives of billions of animals who have no voice in how these systems are designed.
              </p>
              <p className="text-xl leading-relaxed text-muted pb-8">
                The problem isn&apos;t just that AI ignores animals. It&apos;s structural: AI systems are trained on human data, optimized for human preferences, and evaluated on human-centric metrics. Nonhuman animal welfare isn&apos;t an afterthought — it simply isn&apos;t in the frame at all. And as AI&apos;s influence over consequential decisions grows, that gap compounds.
              </p>
              <p className="text-xl leading-relaxed text-muted">
                Named after the fungal networks that sustain entire ecosystems beneath the surface, Mycelium builds the connective tissue between AI safety and animal welfare: the benchmarks, evaluations, and open-source infrastructure the broader movement can use and build on.
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
