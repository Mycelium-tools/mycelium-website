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
        <section className="bg-background py-12 sm:py-8">
          <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-8">
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground pt-8 sm:text-5xl">
              our mission {" "}
              <em className="italic text-purple"></em>
            </h2>
            <div className="mt-10">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                At <b>Mycelium</b>, we work on advancing robust moral values in AI character, with a particular focus on the <em>welfare of neglected beings</em> - like digital minds and nonhuman animals. We think that broadening the moral circle of consideration to include all sentient beings will reduce long-term suffering and steer general alignment in a positive direction.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Our technical work includes benchmarks, evaluations, and other research, giving frontier labs the ability to measure and shape the moral character of their models.
              </p>
              <div className="mt-6 flex">
                <Link
                  href="/about"
                  className="inline-block rounded-full bg-purple px-8 py-3.5 font-sans font-medium text-white transition-all duration-200 hover:bg-purple-hover hover:scale-[1.02] cursor-pointer"
                >
                  about us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="bg-background py-12 sm:py-8">
          <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-8">
            <h2 className="mt-4 font-serif text-4xl font-semibold text-foreground sm:text-5xl">
              partnerships
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted sm:text-lg">
              We collaborate with leading AI safety organizations and research institutions
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
              {/* <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/caml.png" alt="CaML" width={92} height={80} className="object-contain rounded-xl" unoptimized />
                <span className="text-sm font-medium text-faint">CaML</span>
              </div> */}
              <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/electric-sheep.png" alt="Electric Sheep" width={250} height={70} className="object-contain rounded-xl" unoptimized />
                <span className="text-sm font-medium text-faint">Electric Sheep</span>
              </div>

            </div>
          </div>
        </section>

        {/* Supported by */}
        <section className="bg-background pt-12 pb-20 sm:pt-8 sm:pb-24">
          <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-8">
            <h2 className="mt-4 font-serif text-4xl font-semibold text-foreground sm:text-5xl">
              supported by
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              We&apos;re thankful for our supporters, who keep our operations running, such as
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-12">
              <a href="https://coefficientgiving.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.05]">
                <Image
                  src="/donor-logos/Coefficient+Logo+Gray.webp"
                  alt="Coefficient Giving"
                  width={200}
                  height={60}
                  unoptimized
                />
                {/* <span className="text-sm font-medium text-faint">Coefficient Giving</span> */}
              </a>
              <a href="https://thepollinationproject.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.05]">
                <Image
                  src="/donor-logos/tpp-logo-square.jpg"
                  alt="The Pollination Project"
                  width={112}
                  height={60}
                  className="rounded-xl"
                  unoptimized
                />
                {/* <span className="text-sm font-medium text-faint">The Pollination Project</span> */}
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
                {/* <span className="text-sm font-medium text-faint">BlueDot Impact</span> */}
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
                {/* <span className="text-sm font-medium text-faint">SPAR</span> */}
              </a>
            </div>
            <p className="mt-6 text-base text-faint">
              …and other independent donors
            </p>
            <a
              href="https://manifund.org/projects/mycelium-moral-patienthood-for-agi"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-lg font-medium text-purple transition-colors hover:text-purple-hover"
            >
              support our work through Manifund
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
