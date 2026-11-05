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
              <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/spar-logo.png" alt="SPAR" width={184} height={100} className="object-contain rounded-xl" unoptimized />
                <span className="text-sm font-medium text-faint">SPAR</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image src="/partner-logos/electric-sheep.png" alt="Electric Sheep" width={258} height={70} className="object-contain rounded-xl" unoptimized />
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
              <div className="flex flex-col items-center gap-3">
                <Image
                  src="/donor-logos/Coefficient+Logo+Gray.webp"
                  alt="Coefficient Giving"
                  width={200}
                  height={60}
                  unoptimized
                />
                {/* <span className="text-sm font-medium text-faint">Coefficient Giving</span> */}
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image
                  src="/donor-logos/ea-funds-logo.png"
                  alt="EA Funds"
                  width={235}
                  height={60}
                  unoptimized
                />
                {/* <span className="text-sm font-medium text-faint">EA Funds</span> */}
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image
                  src="/donor-logos/tpp-logo-square.jpg"
                  alt="The Pollination Project"
                  width={112}
                  height={60}
                  className="rounded-xl"
                  unoptimized
                />
                {/* <span className="text-sm font-medium text-faint">The Pollination Project</span> */}
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image
                  src="/donor-logos/bluedot-logo.png"
                  alt="BlueDot Impact"
                  width={190}
                  height={60}
                  className="rounded-xl"
                  unoptimized
                />
                {/* <span className="text-sm font-medium text-faint">BlueDot Impact</span> */}
              </div>
            </div>
            <p className="mt-6 text-base text-faint">
              …as well as Skyler Hoffman and other independent donors
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
