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

        {/* Header */}
        <section className="px-6 py-28">
          <div className="mx-auto max-w-4xl">
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
              we exist because{" "}
              <em className="italic text-purple">someone has to</em>
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted">
              Mycelium is a nonprofit building the technical infrastructure for a
              future where AI systems consider nonhuman welfare—not as an
              afterthought, but as a core design principle.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-green px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              our mission
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <p className="text-lg leading-relaxed text-muted">
                AI is moving fast—and the values baked into these systems will
                shape the world for generations. Yet the animal welfare community
                has had almost no seat at the table. The technical infrastructure
                to evaluate, challenge, and improve AI reasoning about nonhuman
                welfare simply didn&apos;t exist.
              </p>
              <p className="text-lg leading-relaxed text-muted">
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
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              our approach
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              We advance understanding of the nature and intrinsic value of
              nonhuman minds in three key ways:
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green/15 text-purple">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                  </svg>
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">research</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  We conduct and support foundational research about the nature
                  and value of nonhuman minds.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green/15 text-purple">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">outreach</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  We engage with decision-makers through direct consultation and
                  public communication.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green/15 text-purple">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">field-building</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  We engage with other researchers through events, awards, and
                  sponsored projects.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-purple transition-all hover:gap-3"
              >
                learn more <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="px-6 py-18">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
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
                  Allen Lu
                </h3>
                <p className="mt-1 text-sm font-medium text-purple">
                  Founder, Executive Director
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              want to get involved?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted">
              Whether you&apos;re a researcher, funder, or advocate—there&apos;s
              a place for you in this work.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-green px-8 py-3.5 font-medium text-foreground transition-all hover:bg-green-hover hover:scale-[1.02]"
              >
                get in touch
              </Link>
              <Link
                href="/work"
                className="rounded-full border border-border px-8 py-3.5 font-medium text-foreground transition-all hover:border-purple/30 hover:bg-purple/5"
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
