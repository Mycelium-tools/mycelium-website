import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1f1a]">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1a1f1a]/10 bg-[#faf9f6]/90 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="font-serif text-xl font-semibold text-[#1a1f1a]">
              Mycelium
            </span>
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="#mission"
              className="text-sm font-medium text-[#5c6b5c] transition-colors hover:text-[#2d5a3d]"
            >
              Mission
            </Link>
            <Link
              href="#work"
              className="text-sm font-medium text-[#5c6b5c] transition-colors hover:text-[#2d5a3d]"
            >
              Our work
            </Link>
            <Link
              href="#team"
              className="text-sm font-medium text-[#5c6b5c] transition-colors hover:text-[#2d5a3d]"
            >
              Team
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
            <Image
              src="/logo.png"
              alt=""
              width={240}
              height={240}
              className="mx-auto object-contain sm:h-40 sm:w-40"
              priority
              unoptimized
            />
            <h1 className="mt-6 font-serif text-5xl font-semibold tracking-tight text-[#1a1f1a] sm:text-6xl md:text-7xl">
              Mycelium
            </h1>
            <p className="mt-6 text-xl text-[#5c6b5c] sm:text-2xl">
              Advancing the development of AI systems to consider nonhuman
              animal welfare
            </p>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-[#5c6b5c]">
              AI will fundamentally transform the systems that affect animal
              suffering—for better or worse. Models are trained on data that
              reflects and amplifies speciesist biases, threatening to lock in
              animal suffering as these systems shape policy, industry, and
              decision-making. We build the infrastructure to change that.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#connect"
                className="rounded-full bg-[#2d5a3d] px-8 py-3.5 font-medium text-white transition-colors hover:bg-[#3d7a52]"
              >
                Get in touch
              </Link>
              <Link
                href="#mission"
                className="rounded-full border border-[#1a1f1a]/20 px-8 py-3.5 font-medium transition-colors hover:border-[#2d5a3d] hover:bg-[#2d5a3d]/5"
              >
                Our mission
              </Link>
            </div>
          </div>
        </section>

        {/* Mission & Theory of change */}
        <section
          id="mission"
          className="border-t border-[#1a1f1a]/10 bg-[#f0ede8] px-6 py-24"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold text-[#1a1f1a] sm:text-4xl">
              Solution: infrastructure that scales
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5c6b5c]">
              Like the fungal networks that sustain ecosystems, Mycelium builds
              the technical infrastructure and capacity for AI models to
              consider nonhuman welfare.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#5c6b5c]">
              When we build the safety evaluations the movement lacks, we gain
              the ability to measure and improve how AI systems treat animals.
              That leads to AI that reasons about nonhuman welfare ethically—and
              to moral reasoning patterns that scale safely as AI capabilities
              grow. Our goal is to reduce animal suffering at scale by
              preventing value lock-in that would perpetuate it indefinitely.
            </p>
          </div>
        </section>

        {/* Our work: tools for nonhuman AI safety */}
        <section id="work" className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold text-[#1a1f1a] sm:text-4xl">
              Tools for nonhuman AI safety
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#5c6b5c]">
              We research and develop benchmarks, evals, and red-teaming
              frameworks so frontier models can be evaluated—and improved—on
              animal welfare reasoning.
            </p>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#1a1f1a]/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="text-2xl text-[#2d5a3d]">◇</div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-[#1a1f1a]">
                  MANTA
                </h3>
                <p className="mt-2 text-[#5c6b5c]">
                  Our flagship dynamic adversarial benchmark to evaluate animal
                  welfare reasoning in frontier models. Designed for adoption by
                  AI safety organizations and labs.
                </p>
              </div>
              <div className="rounded-2xl border border-[#1a1f1a]/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="text-2xl text-[#2d5a3d]">◇</div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-[#1a1f1a]">
                  Benchmarks & evals
                </h3>
                <p className="mt-2 text-[#5c6b5c]">
                  Novel AI safety tools for nonhuman welfare—evaluations,
                  red-teaming tests, and open-source infrastructure for the
                  movement.
                </p>
              </div>
              <div className="rounded-2xl border border-[#1a1f1a]/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md sm:col-span-2 lg:col-span-1">
                <div className="text-2xl text-[#2d5a3d]">◇</div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-[#1a1f1a]">
                  Capacity building
                </h3>
                <p className="mt-2 text-[#5c6b5c]">
                  Growing a movement of advocates with the technical skills to
                  contribute to AI×Animals work—through fellowships, mentorship,
                  and collaboration with partner organizations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="border-t border-[#1a1f1a]/10 bg-[#f0ede8] px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold text-[#1a1f1a] sm:text-4xl">
              Partnerships
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#5c6b5c]">
              We work with leading AI×Animals organizations and research
              institutions to advance shared goals.
            </p>
            <p className="mt-6 text-[#5c6b5c]">
              Sentient Futures · Open Paws · Electric Sheep · CaML · NYU ·
              Anthropic
            </p>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold text-[#1a1f1a] sm:text-4xl">
              Team
            </h2>
            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#1a1f1a]/10 bg-white p-8">
                <h3 className="font-serif text-xl font-semibold text-[#1a1f1a]">
                  Allen Lu
                </h3>
                <p className="mt-1 text-[#2d5a3d] font-medium">
                  Co-founder, Executive Director
                </p>
                <p className="mt-3 text-[#5c6b5c]">
                  Long-term strategy, fundraising, operations, and partnerships
                  with key AI safety and animal welfare organizations.
                </p>
              </div>
              <div className="rounded-2xl border border-[#1a1f1a]/10 bg-white p-8">
                <h3 className="font-serif text-xl font-semibold text-[#1a1f1a]">
                  Joyee Chen
                </h3>
                <p className="mt-1 text-[#2d5a3d] font-medium">
                  Co-founder, Research Engineer
                </p>
                <p className="mt-3 text-[#5c6b5c]">
                  Research direction and hands-on engineering for benchmarks and
                  evaluation tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What success looks like */}
        <section className="border-t border-[#1a1f1a]/10 bg-[#f0ede8] px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold text-[#1a1f1a] sm:text-4xl">
              What success looks like
            </h2>
            <ul className="mt-8 space-y-4 text-lg text-[#5c6b5c]">
              <li className="flex gap-3">
                <span className="text-[#2d5a3d]">·</span>
                A movement of animal advocates with the skills to contribute to
                technical AI×Animals work
              </li>
              <li className="flex gap-3">
                <span className="text-[#2d5a3d]">·</span>
                AI models integrated with greater nonhuman welfare consideration
              </li>
              <li className="flex gap-3">
                <span className="text-[#2d5a3d]">·</span>
                Welfare benchmarks and evals widely adopted by industry
              </li>
              <li className="flex gap-3">
                <span className="text-[#2d5a3d]">·</span>
                Prevention of value lock-in that indefinitely perpetuates animal
                suffering
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section
          id="connect"
          className="border-t border-[#1a1f1a]/10 bg-[#2d5a3d] px-6 py-24 text-white"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Researchers, funders, and collaborators interested in nonhuman
              welfare and AI safety—we’d love to hear from you.
            </p>
            <a
              href="mailto:Allenlu0007@gmail.com"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-medium text-[#2d5a3d] transition-colors hover:bg-white/95"
            >
              Allenlu0007@gmail.com
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#1a1f1a]/10 bg-[#faf9f6] px-6 py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <span className="font-serif font-semibold text-[#1a1f1a]">
                Mycelium
              </span>
            </div>
            <p className="text-sm text-[#5c6b5c]">
              Advancing AI systems that consider nonhuman animal welfare
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
