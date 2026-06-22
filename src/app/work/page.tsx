import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work — Mycelium",
  description: "Benchmarks, evals, and red-teaming frameworks for frontier model evaluation on animal welfare reasoning.",
};

export default function WorkPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="pt-[73px]">
        <section className="px-6 py-28">
          <div className="mx-auto max-w-5xl">
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              our work{" "}
              <em className="italic"></em>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              We work on technical AI safety research to advance how AI models morally consider and reason about the interests of all sentient beings.
            </p>

            {/* Featured research highlight */}
            <div className="mt-16 pt-12">
              <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:gap-16">
                <div className="flex-1">
                  <span className="inline-block rounded-full bg-[#8157D6]/10 px-3 py-1 text-sm font-sans font-medium text-purple">
                    New Benchmark
                  </span>
                  <h2 className="mt-4 font-serif text-3xl font-semibold leading-snug text-foreground sm:text-4xl">
                    MANTA: Do LLMs Hold Their Values?
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted">
                    A multi-turn adversarial benchmark of 1,088 five-turn conversations that escalate
                    from implicit scenarios into sustained social, cultural, economic, pragmatic, and
                    epistemic pressure. It measures what single-turn tests miss: four of seven frontier
                    models shifted ranking once their animal-welfare values were placed under pressure.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link
                      href="/manta"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#8157D6] px-5 py-2.5 text-sm font-medium text-white transition-all duration-150 hover:bg-[#6d45c0] cursor-pointer"
                    >
                      Read the Blog Post
                    </Link>
                    <a
                      href="https://arxiv.org/abs/2605.16301v2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#8157D6] px-5 py-2.5 text-sm font-medium text-purple transition-all duration-150 hover:bg-[#8157D6]/10 cursor-pointer"
                    >
                      Read the Full Paper
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex-shrink-0 sm:w-[420px]">
                  <Image
                    src="/manta-hero.png"
                    alt="MANTA benchmark visualization"
                    width={420}
                    height={320}
                    className="w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>

            {/* <div>
              <p className="mt-4 max-w-2xl text-lg text-muted pt-12">
                Our upcoming work:
              </p>
              <div className="mt-4 grid gap-5 sm:grid-cols-3">
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-purple/20">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green/15 text-purple">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z" />
                      <path d="M12 3v18M3 7.5l9 4.5 9-4.5" />
                    </svg>
                  </div>
                  <h2 className="mt-5 font-serif text-2xl font-semibold text-foreground">MANTA</h2>
                  <p className="mt-3 leading-relaxed text-muted">
                    Our flagship dynamic adversarial benchmark to evaluate animal
                    welfare reasoning in frontier models. Designed for adoption by
                    AI safety organizations and labs.
                  </p>
                  <div className="mt-7 flex items-center gap-1.5 text-sm font-medium text-purple transition-all group-hover:gap-2.5">
                    Learn more <span aria-hidden>→</span>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-purple/20">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green/15 text-purple">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                    </svg>
                  </div>
                  <h2 className="mt-5 font-serif text-2xl font-semibold text-foreground">benchmarks & evals</h2>
                  <p className="mt-3 leading-relaxed text-muted">
                    Novel AI safety tools for nonhuman welfare—evaluations,
                    red-teaming tests, and open-source infrastructure for the
                    movement.
                  </p>
                  <div className="mt-7 flex items-center gap-1.5 text-sm font-medium text-purple transition-all group-hover:gap-2.5">
                    Learn more <span aria-hidden>→</span>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-purple/20">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green/15 text-purple">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  </div>
                  <h2 className="mt-5 font-serif text-2xl font-semibold text-foreground">capacity building</h2>
                  <p className="mt-3 leading-relaxed text-muted">
                    Growing a movement of advocates with the technical skills to
                    contribute to AI×Animals work—through fellowships, mentorship,
                    and collaboration.
                  </p>
                  <div className="mt-7 flex items-center gap-1.5 text-sm font-medium text-purple transition-all group-hover:gap-2.5">
                    Learn more <span aria-hidden>→</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}
