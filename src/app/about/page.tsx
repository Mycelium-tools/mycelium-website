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
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-foreground">
              we're advancing AI to include {" "}
              <em className="italic text-purple">all sentient beings</em>
            </h1>

            <div className="mt-10">
              <p className="text-xl leading-relaxed text-muted pb-8">
                We're at a rare inflection point. The values encoded in AI systems today will shape how humanity—and these systems—relate to animals for generations. The window to influence those values is open, and it won't stay that way.
              </p>
              <p className="text-xl leading-relaxed text-muted">
                Mycelium was founded for this reason. Named after the fungal networks that quietly sustain entire ecosystems, we build the connective tissue between AI development and animal welfare - the technical tools and research the broader movement can use and build on.
              </p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-8">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight text-foreground">
              our approach
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
              We advance the understanding of nonhuman minds—and embed that understanding into the AI systems shaping our world.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green/15 text-purple">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                  </svg>
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">research & engineering</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  We build benchmarks and evaluations to measure how AI systems reason about nonhuman animal welfare.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green/15 text-purple">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">advocacy</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  We engage with frontier labs, AI orgs, and other institutions to put nonhuman welfare on the agenda - turning our research into impact.
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
                <p className="mt-1 text-sm font-medium text-purple">
                  Founder, Executive Director
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pt-8 pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-serif text-5xl font-semibold text-foreground">
              get involved
            </h2>
            <p className="mt-4 text-xl text-muted">
              The work is just beginning. Whether you're a researcher, funder, or advocate, there's a place for you in what we're building.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/work"
                className="rounded-full border border-border px-8 py-3.5 font-medium text-foreground transition-all hover:border-purple/30 hover:bg-purple/5"
              >
                see our work
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-green px-8 py-3.5 font-medium text-white transition-all hover:bg-green-hover hover:scale-[1.02]"
              >
                get in touch
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
