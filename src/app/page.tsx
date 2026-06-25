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
        <section className="bg-background py-8">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight text-foreground">
              who we are {" "}
              <em className="italic text-purple"></em>
            </h2>
            <div className="mt-10">
              <p className="text-xl leading-relaxed text-muted pb-8">
                Models are trained on data that reflects and amplifies speciesist
                biases, threatening to lock in animal suffering as these systems
                shape policy, industry, and decision-making.
              </p>
              <p className="text-xl leading-relaxed text-muted">
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
        <section className="bg-background py-8">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mt-4 font-serif text-5xl font-semibold text-foreground sm:text-5xl">
              partnerships
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-muted">
              We collaborate with leading AI×Animals organizations and research institutions
            </p>
            <div className="mt-10 flex flex-wrap items-end gap-10">
              <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/sent-futures.webp" alt="Sentient Futures" width={180} height={70} className="object-contain rounded-xl" unoptimized />
                <span className="text-sm font-medium text-faint">Sentient Futures</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/arcadia-impact.png" alt="Arcadia Impact" width={180} height={70} className="object-contain rounded-xl" unoptimized />
                <span className="text-sm font-medium text-faint">Arcadia Impact</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/caml.png" alt="CaML" width={92} height={80} className="object-contain rounded-xl" unoptimized />
                <span className="text-sm font-medium text-faint">CaML</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/electric-sheep.png" alt="Electric Sheep" width={250} height={70} className="object-contain rounded-xl" unoptimized />
                <span className="text-sm font-medium text-faint">Electric Sheep</span>
              </div>

            </div>
          </div>
        </section>

        {/* Supported by */}
        <section className="bg-background pt-8 pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mt-4 font-serif text-5xl font-semibold text-foreground sm:text-5xl">
              supported by
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-muted">
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
              <a href="https://thepollinationproject.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.05]">
                <Image
                  src="/donor-logos/tpp-logo-square.jpg"
                  alt="The Pollination Project"
                  width={112}
                  height={60}
                  className="rounded-xl"
                  unoptimized
                />
                <span className="text-sm font-medium text-faint">The Pollination Project</span>
              </a>
              <a href="https://bluedot.org/programs/rapid-grants" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.05]">
                <Image
                  src="/donor-logos/bluedot-logo.png"
                  alt="BlueDot Impact"
                  width={190}
                  height={60}
                  className="rounded-xl"
                  unoptimized
                />
                <span className="text-sm font-medium text-faint">BlueDot Impact</span>
              </a>
              <a href="https://sparai.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.05]">
                <Image
                  src="/donor-logos/spar-logo.png"
                  alt="SPAR"
                  width={208}
                  height={60}
                  className="rounded-xl"
                  unoptimized
                />
                <span className="text-sm font-medium text-faint">SPAR</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
