import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Work — Mycelium",
  description: "Benchmarks, evals, and red-teaming frameworks for frontier model evaluation on animal welfare reasoning.",
};

export default function WorkPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="pt-[73px]">
        <section className="py-16 sm:py-10">
          <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-8">
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
              our work{" "}
              <em className="italic"></em>
            </h1>
            <p className="mt-4 max-w-4xl text-lg text-muted sm:text-xl">
              We work on technical AI safety research to advance how frontier AI systems reason about and represent nonhuman beings, like animals and future digital minds. This includes benchmarks, evaluations, and other open-source tools.
            </p>

            {/* Project listing */}
            <div className="mt-12 flex flex-col gap-6">
              <p className="text-sm font-sans font-medium uppercase tracking-widest text-faint">Projects</p>

              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-10">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-sans font-medium uppercase tracking-widest text-faint">Benchmarks & Evals</span>
                </div>
                <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12">
                  <Image
                    src="/manta-ray-logo.png"
                    alt="MANTA logo"
                    width={300}
                    height={300}
                    className="h-28 w-28 flex-shrink-0 object-contain sm:order-2 sm:h-auto sm:w-[300px]"
                  />
                  <div className="flex-1 sm:order-1">
                    <h2 className="font-serif text-3xl font-semibold leading-snug text-foreground sm:text-5xl">
                      MANTA: Do LLMs Hold Their Values on Animal Welfare?
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                      MANTA <i>(Multi-turn Assessment of Nonhuman Thinking & Alignment)</i> measures whether frontier models hold their animal welfare values when users push back. Measured across 1,000+ five-turn conversations applying sustained economic, social, pragmatic, epistemic, and cultural pressure.
                    </p>
                    <p className="mt-4 flex items-center gap-2 text-sm italic text-faint">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      Released: May 2026 · Last updated: August 2026
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <a
                        href="https://www.mantabench.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-base font-medium text-white transition-all duration-200 hover:bg-green-hover hover:scale-[1.02] cursor-pointer"
                      >
                        Visit the official website
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div>
              <p className="mt-4 max-w-2xl text-xl text-muted pt-12">
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
