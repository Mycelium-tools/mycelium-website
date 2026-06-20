import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#f7f5f1] text-[#18211a]">
      <main>
        {/* Hero */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-32 pt-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#51fcaa0a,transparent)]" />
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage: "radial-gradient(circle, #51fcaa12 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent,#f7f5f1_100%)]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight tracking-tight text-[#18211a] sm:text-6xl md:text-7xl">
              building the technical foundation for{" "}
              <em className="italic text-[#0a8c5c]">inclusive AI</em>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#8a9e8c]">
              AI will fundamentally transform the systems that affect animal
              suffering—for better or worse. Models amplify speciesist biases,
              threatening to lock in harm as they shape policy and
              decision-making. We build the infrastructure to change that.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#51FCAA] px-8 py-3.5 font-medium text-[#0a3d22] transition-all hover:bg-[#3de89a] hover:scale-[1.02]"
              >
                Get in touch
              </Link>
              <Link
                href="/work"
                className="rounded-full border border-[#ddd9d1] px-8 py-3.5 font-medium text-[#18211a] transition-all hover:border-[#0a8c5c]/30 hover:bg-[#0a8c5c]/5"
              >
                Our work
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[#8a9e8c]">
            <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-[#8a9e8c] to-transparent" />
          </div>
        </section>

        {/* Mission */}
        <section className="bg-[#f0e8ff] px-6 py-28">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0a8c5c]">
              The problem
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#18211a] sm:text-5xl">
              the gap is{" "}
              <em className="italic text-[#0a8c5c]">real</em>
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <p className="text-lg leading-relaxed text-[#5a6b5c]">
                Models are trained on data that reflects and amplifies speciesist
                biases, threatening to lock in animal suffering as these systems
                shape policy, industry, and decision-making.
              </p>
              <p className="text-lg leading-relaxed text-[#5a6b5c]">
                Like the fungal networks that sustain ecosystems, Mycelium builds
                the technical infrastructure for AI models to consider nonhuman
                welfare—and to reason about it ethically as capabilities grow.
                Our goal: prevent value lock-in that would perpetuate suffering
                indefinitely.
              </p>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="bg-[#edfaf4] px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#18211a] sm:text-4xl">
              partnerships
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#5a6b5c]">
              We collaborate with leading AI×Animals organizations and research
              institutions to advance shared goals.
            </p>
            <div className="mt-10 flex flex-wrap items-end gap-10">
              <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/sent-futures.webp" alt="Sentient Futures" width={160} height={70} className="object-contain" unoptimized />
                <span className="text-xs font-medium text-[#8a9e8c]">Sentient Futures</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/arcadia-impact.png" alt="Arcadia Impact" width={160} height={70} className="object-contain" unoptimized />
                <span className="text-xs font-medium text-[#8a9e8c]">Arcadia Impact</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/caml.png" alt="CaML" width={80} height={80} className="object-contain" unoptimized />
                <span className="text-xs font-medium text-[#8a9e8c]">CaML</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/electric-sheep.png" alt="Electric Sheep" width={180} height={70} className="object-contain" unoptimized />
                <span className="text-xs font-medium text-[#8a9e8c]">Electric Sheep</span>
              </div>
              
            </div>
          </div>
        </section>

        {/* Supported by */}
        <section className="bg-[#fff9ed] px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#18211a] sm:text-4xl">
              supported by
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-12">
              <Image
                src="/donor-logos/Coefficient+Logo+Gray.webp"
                alt="Coefficient Giving"
                width={200}
                height={60}
                className="object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                unoptimized
              />
              <Image
                src="/donor-logos/Logo%20-%20Copy.png"
                alt="The Pollination Project"
                width={200}
                height={60}
                className="object-contain opacity-80 hover:opacity-100 transition-all"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-[#f7f5f1] px-6 py-28">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0a8c5c]">
              Team
            </span>

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
      </main>
    </div>
  );
}
