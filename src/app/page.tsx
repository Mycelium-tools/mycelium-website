import Image from "next/image";
import Link from "next/link";
import MyceliumHero from "@/components/ui/mycelium-hero";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero */}
        <MyceliumHero />

        {/* Mission */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground">
              what&apos;s at {" "}
              <em className="italic text-purple">stake</em>
            </h2>
            <div className="mt-10">
              <p className="text-lg leading-relaxed text-muted pb-8">
                Models are trained on data that reflects and amplifies speciesist
                biases, threatening to lock in animal suffering as these systems
                shape policy, industry, and decision-making.
              </p>
              <p className="text-lg leading-relaxed text-muted">
                Like the fungal networks that sustain ecosystems, <b>Mycelium</b> builds
                the technical infrastructure for AI models to consider the welfare of all sentient beings.
              </p>
              <div className="mt-6 flex">
                <Link
                  href="/about"
                  className="inline-block rounded-full bg-purple px-8 py-3.5 font-sans font-medium text-white transition-all duration-200 hover:bg-purple-hover hover:scale-[1.02] cursor-pointer"
                >
                  our mission
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mt-4 font-serif text-4xl font-semibold text-foreground sm:text-4xl">
              partnerships
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              We collaborate with leading AI×Animals organizations and research institutions
            </p>
            <div className="mt-10 flex flex-wrap items-end gap-10">
              <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/sent-futures.webp" alt="Sentient Futures" width={180} height={70} className="object-contain" unoptimized />
                <span className="text-xs font-medium text-faint">Sentient Futures</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/arcadia-impact.png" alt="Arcadia Impact" width={180} height={70} className="object-contain" unoptimized />
                <span className="text-xs font-medium text-faint">Arcadia Impact</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/caml.png" alt="CaML" width={92} height={80} className="object-contain" unoptimized />
                <span className="text-xs font-medium text-faint">CaML</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/electric-sheep.png" alt="Electric Sheep" width={250} height={70} className="object-contain" unoptimized />
                <span className="text-xs font-medium text-faint">Electric Sheep</span>
              </div>

            </div>
          </div>
        </section>

        {/* Supported by */}
        <section className="bg-background px-6 pt-16 pb-48">
          <div className="mx-auto max-w-4xl">
            <h2 className="mt-4 font-serif text-4xl font-semibold text-foreground sm:text-4xl">
              supported by
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              We&apos;re thankful for our supporters, who keep our operations running
            </p>
            <div className="mt-10 flex flex-wrap items-end gap-12">
              {/* <div className="flex flex-col items-center gap-3">
                <Image
                  src="/donor-logos/Coefficient+Logo+Gray.webp"
                  alt="Coefficient Giving"
                  width={200}
                  height={60}
                  unoptimized
                />
              </div> */}
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
