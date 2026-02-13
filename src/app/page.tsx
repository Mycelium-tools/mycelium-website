import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1f1a]">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1a1f1a]/10 bg-[#faf9f6]/90 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-serif text-xl font-semibold text-[#1a1f1a]">
            Mycelium
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="#mission"
              className="text-sm font-medium text-[#5c6b5c] transition-colors hover:text-[#2d5a3d]"
            >
              Mission
            </Link>
            <Link
              href="#focus"
              className="text-sm font-medium text-[#5c6b5c] transition-colors hover:text-[#2d5a3d]"
            >
              Focus
            </Link>
            <Link
              href="#connect"
              className="rounded-full bg-[#2d5a3d] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3d7a52]"
            >
              Get in touch
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,#2d5a3d/12%,transparent)]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-5xl font-semibold tracking-tight text-[#1a1f1a] sm:text-6xl md:text-7xl">
              Mycelium
            </h1>
            <p className="mt-6 text-xl text-[#5c6b5c] sm:text-2xl">
              Where AI safety meets animal welfare
            </p>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-[#5c6b5c]">
              We work at the intersection of two defining challenges of our
              time: ensuring advanced AI is safe and beneficial, and expanding
              moral consideration to all sentient beings.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#connect"
                className="rounded-full bg-[#2d5a3d] px-8 py-3.5 font-medium text-white transition-colors hover:bg-[#3d7a52]"
              >
                Connect with us
              </Link>
              <Link
                href="#mission"
                className="rounded-full border border-[#1a1f1a]/20 px-8 py-3.5 font-medium transition-colors hover:border-[#2d5a3d] hover:bg-[#2d5a3d]/5"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section
          id="mission"
          className="border-t border-[#1a1f1a]/10 bg-[#f0ede8] px-6 py-24"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold text-[#1a1f1a] sm:text-4xl">
              One intersection, one future
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5c6b5c]">
              Like the underground network of fungi that nourishes entire
              ecosystems, we believe the futures of AI and animal welfare are
              deeply connected. Safer, more aligned AI can help us understand,
              protect, and advocate for non-human animals—and a broader moral
              circle can inform how we build and govern AI.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#5c6b5c]">
              Mycelium supports research, collaboration, and community at this
              intersection—so that the next chapter of technology serves all
              sentient beings.
            </p>
          </div>
        </section>

        {/* Focus areas */}
        <section id="focus" className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-serif text-3xl font-semibold text-[#1a1f1a] sm:text-4xl">
              What we focus on
            </h2>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#1a1f1a]/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="text-2xl text-[#2d5a3d]">◇</div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-[#1a1f1a]">
                  AI safety & alignment
                </h3>
                <p className="mt-2 text-[#5c6b5c]">
                  Supporting work that makes AI systems safe, transparent, and
                  aligned with the interests of all beings.
                </p>
              </div>
              <div className="rounded-2xl border border-[#1a1f1a]/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="text-2xl text-[#2d5a3d]">◇</div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-[#1a1f1a]">
                  Animal welfare & ethics
                </h3>
                <p className="mt-2 text-[#5c6b5c]">
                  Advancing moral consideration for non-human animals in
                  policy, research, and practice.
                </p>
              </div>
              <div className="rounded-2xl border border-[#1a1f1a]/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md sm:col-span-2 lg:col-span-1">
                <div className="text-2xl text-[#2d5a3d]">◇</div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-[#1a1f1a]">
                  The connection
                </h3>
                <p className="mt-2 text-[#5c6b5c]">
                  Research and initiatives that explicitly link AI development
                  with animal welfare and long-term impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="connect"
          className="border-t border-[#1a1f1a]/10 bg-[#2d5a3d] px-6 py-24 text-white"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              Connect with us
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Researchers, funders, and collaborators interested in AI safety
              and animal welfare—we’d love to hear from you.
            </p>
            <a
              href="mailto:hello@mycelium.org"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-medium text-[#2d5a3d] transition-colors hover:bg-white/95"
            >
              hello@mycelium.org
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#1a1f1a]/10 bg-[#faf9f6] px-6 py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
            <span className="font-serif font-semibold text-[#1a1f1a]">
              Mycelium
            </span>
            <p className="text-sm text-[#5c6b5c]">
              AI safety · Animal welfare · One future
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
