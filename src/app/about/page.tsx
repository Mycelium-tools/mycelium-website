import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Mycelium",
  description: "Mycelium is building the technical infrastructure for AI systems that consider nonhuman animal welfare.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#f7f5f1] text-[#18211a]">
      <main className="pt-[73px]">

        {/* Header */}
        <section className="border-b border-[#ddd9d1] px-6 py-28">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0a8c5c]">
              About
            </span>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-[#18211a] sm:text-6xl">
              we exist because{" "}
              <em className="italic text-[#0a8c5c]">someone has to</em>
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#5a6b5c]">
              Mycelium is a nonprofit building the technical infrastructure for a
              future where AI systems consider nonhuman welfare—not as an
              afterthought, but as a core design principle.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="border-b border-[#ddd9d1] bg-[#f0e8ff] px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0a8c5c]">
              Mission
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#18211a] sm:text-5xl">
              why we were founded
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <p className="text-lg leading-relaxed text-[#5a6b5c]">
                AI is moving fast—and the values baked into these systems will
                shape the world for generations. Yet the animal welfare community
                has had almost no seat at the table. The technical infrastructure
                to evaluate, challenge, and improve AI reasoning about nonhuman
                welfare simply didn&apos;t exist.
              </p>
              <p className="text-lg leading-relaxed text-[#5a6b5c]">
                Mycelium was founded to change that. Named after the fungal
                networks that quietly sustain entire ecosystems, we build the
                connective tissue between AI safety and animal advocacy—technical
                tools, benchmarks, and capacity that the broader movement can
                use and build on.
              </p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="border-b border-[#ddd9d1] px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0a8c5c]">
              Approach
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#18211a] sm:text-5xl">
              our approach
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5a6b5c]">
              We advance understanding of the nature and intrinsic value of
              nonhuman minds in three key ways:
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#ddd9d1] bg-white p-8 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#51FCAA]/15 text-[#0a8c5c]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                  </svg>
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-[#18211a]">research</h3>
                <p className="mt-3 leading-relaxed text-[#5a6b5c]">
                  We conduct and support foundational research about the nature
                  and value of nonhuman minds.
                </p>
              </div>

              <div className="rounded-2xl border border-[#ddd9d1] bg-white p-8 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#51FCAA]/15 text-[#0a8c5c]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-[#18211a]">outreach</h3>
                <p className="mt-3 leading-relaxed text-[#5a6b5c]">
                  We engage with decision-makers through direct consultation and
                  public communication.
                </p>
              </div>

              <div className="rounded-2xl border border-[#ddd9d1] bg-white p-8 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#51FCAA]/15 text-[#0a8c5c]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-[#18211a]">field-building</h3>
                <p className="mt-3 leading-relaxed text-[#5a6b5c]">
                  We engage with other researchers through events, awards, and
                  sponsored projects.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0a8c5c] transition-all hover:gap-3"
              >
                learn more <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="border-b border-[#ddd9d1] px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0a8c5c]">
              Team
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#18211a] sm:text-5xl">
              the people behind mycelium
            </h2>

            <div className="mt-14 max-w-sm">
              <div className="rounded-2xl border border-[#ddd9d1] bg-white p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src="/headshot-allen.jpg"
                      alt="Allen Lu"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#18211a]">
                      Allen Lu
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-[#0a8c5c]">
                      Founder, Executive Director
                    </p>
                  </div>
                </div>
                <p className="mt-6 leading-relaxed text-[#5a6b5c]">
                  Long-term strategy, fundraising, operations, and partnerships
                  with key AI safety and animal welfare organizations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold text-[#18211a] sm:text-4xl">
              want to get involved?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-[#5a6b5c]">
              Whether you&apos;re a researcher, funder, or advocate—there&apos;s
              a place for you in this work.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#51FCAA] px-8 py-3.5 font-medium text-[#0a3d22] transition-all hover:bg-[#3de89a] hover:scale-[1.02]"
              >
                get in touch
              </Link>
              <Link
                href="/work"
                className="rounded-full border border-[#ddd9d1] px-8 py-3.5 font-medium text-[#18211a] transition-all hover:border-[#0a8c5c]/30 hover:bg-[#0a8c5c]/5"
              >
                see our work
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
