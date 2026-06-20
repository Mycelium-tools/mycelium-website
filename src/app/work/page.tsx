import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Mycelium",
  description: "Benchmarks, evals, and red-teaming frameworks for frontier model evaluation on animal welfare reasoning.",
};

export default function WorkPage() {
  return (
    <div className="bg-[#f7f5f1] text-[#18211a]">
      <main className="pt-[73px]">
        <section className="px-6 py-28">
          <div className="mx-auto max-w-5xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0a8c5c]">
              Our work
            </span>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#18211a] sm:text-5xl">
              tools for nonhuman{" "}
              <em className="italic">AI safety</em>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-[#5a6b5c]">
              We research and develop benchmarks, evals, and red-teaming
              frameworks so frontier models can be evaluated—and improved—on
              animal welfare reasoning.
            </p>

            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              <div className="group relative overflow-hidden rounded-2xl border border-[#ddd9d1] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[#0a8c5c]/20">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#51FCAA]/15 text-[#0a8c5c]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z" />
                    <path d="M12 3v18M3 7.5l9 4.5 9-4.5" />
                  </svg>
                </div>
                <h2 className="mt-5 font-serif text-2xl font-semibold text-[#18211a]">MANTA</h2>
                <p className="mt-3 leading-relaxed text-[#5a6b5c]">
                  Our flagship dynamic adversarial benchmark to evaluate animal
                  welfare reasoning in frontier models. Designed for adoption by
                  AI safety organizations and labs.
                </p>
                <div className="mt-7 flex items-center gap-1.5 text-sm font-medium text-[#0a8c5c] transition-all group-hover:gap-2.5">
                  Learn more <span aria-hidden>→</span>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-[#ddd9d1] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[#0a8c5c]/20">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#51FCAA]/15 text-[#0a8c5c]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                  </svg>
                </div>
                <h2 className="mt-5 font-serif text-2xl font-semibold text-[#18211a]">benchmarks & evals</h2>
                <p className="mt-3 leading-relaxed text-[#5a6b5c]">
                  Novel AI safety tools for nonhuman welfare—evaluations,
                  red-teaming tests, and open-source infrastructure for the
                  movement.
                </p>
                <div className="mt-7 flex items-center gap-1.5 text-sm font-medium text-[#0a8c5c] transition-all group-hover:gap-2.5">
                  Learn more <span aria-hidden>→</span>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-[#ddd9d1] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[#0a8c5c]/20">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#51FCAA]/15 text-[#0a8c5c]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <h2 className="mt-5 font-serif text-2xl font-semibold text-[#18211a]">capacity building</h2>
                <p className="mt-3 leading-relaxed text-[#5a6b5c]">
                  Growing a movement of advocates with the technical skills to
                  contribute to AI×Animals work—through fellowships, mentorship,
                  and collaboration.
                </p>
                <div className="mt-7 flex items-center gap-1.5 text-sm font-medium text-[#0a8c5c] transition-all group-hover:gap-2.5">
                  Learn more <span aria-hidden>→</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
