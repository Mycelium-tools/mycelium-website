import Image from "next/image";
import MyceliumHero from "@/components/ui/mycelium-hero";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero */}
        <MyceliumHero />

        {/* Mission */}
        <section className="bg-background px-6 pb-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              what's at {" "}
              <em className="italic text-purple">stake</em>
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <p className="text-lg leading-relaxed text-muted">
                Models are trained on data that reflects and amplifies speciesist
                biases, threatening to lock in animal suffering as these systems
                shape policy, industry, and decision-making.
              </p>
              <p className="text-lg leading-relaxed text-muted">
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
        <section className="bg-background px-6 py-18 pb-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              partnerships
            </h2>
            <p className="mt-4 max-w-2xl text-md text-muted">
              We collaborate with leading AI×Animals organizations and research institutions
            </p>
            <div className="mt-10 flex flex-wrap items-end gap-10">
              <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/sent-futures.webp" alt="Sentient Futures" width={160} height={70} className="object-contain" unoptimized />
                <span className="text-xs font-medium text-faint">Sentient Futures</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/arcadia-impact.png" alt="Arcadia Impact" width={160} height={70} className="object-contain" unoptimized />
                <span className="text-xs font-medium text-faint">Arcadia Impact</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/caml.png" alt="CaML" width={80} height={80} className="object-contain" unoptimized />
                <span className="text-xs font-medium text-faint">CaML</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/electric-sheep.png" alt="Electric Sheep" width={220} height={70} className="object-contain" unoptimized />
                <span className="text-xs font-medium text-faint">Electric Sheep</span>
              </div>

            </div>
          </div>
        </section>

        {/* Supported by */}
        <section className="bg-background px-6 py-12 pb-32">
          <div className="mx-auto max-w-4xl">
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              supported by
            </h2>
            <p className="mt-4 max-w-2xl text-md text-muted">
              We&apos;re thankful for our supporters, who keep our operations running
            </p>
            <div className="mt-10 flex flex-wrap items-end gap-12">
              <div className="flex flex-col items-center gap-3">
                <Image
                  src="/donor-logos/Coefficient+Logo+Gray.webp"
                  alt="Coefficient Giving"
                  width={200}
                  height={60}
                  unoptimized
                />
                {/* <span className="text-xs font-medium text-faint">Coefficient Giving</span> */}
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image
                  src="/donor-logos/tpp-logo.jpg"
                  alt="The Pollination Project"
                  width={112}
                  height={60}
                  unoptimized
                />
                {/* <span className="text-xs font-medium text-faint">The Pollination Project</span> */}
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image
                  src="/donor-logos/bluedot-logo.png"
                  alt="BlueDot Impact"
                  width={190}
                  height={60}
                  unoptimized
                />
                {/* <span className="text-xs font-medium text-faint">BlueDot Impact</span> */}
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image
                  src="/donor-logos/spar-logo.png"
                  alt="SPAR"
                  width={208}
                  height={60}
                  unoptimized
                />
                {/* <span className="text-xs font-medium text-faint">SPAR</span> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
