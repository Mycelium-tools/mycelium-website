import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Mycelium",
  description: "Mycelium builds the foundation for AI systems to consider all sentient beings - benchmarks, evaluations, and research that build an evidence base for the moral patienthood of nonhuman beings.",
};

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="pt-[73px]">

        {/* Header / mission */}
        <section className="py-16 sm:py-10">
          <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-8">
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
              advancing {" "}
              <em className="italic text-purple">moral patienthood</em> {" "} in frontier AI
            </h1>

            {/* ORIGINAL INTRO - kept for comparison, remove once the new copy is settled
            <div className="mt-10">
              <p className="text-lg leading-relaxed text-muted pb-8 sm:text-xl">
                AI is transforming the world - not only for humanity, but also for the rest of sentient life that calls the world their home. 
              </p>
              <p className="text-lg leading-relaxed text-muted pb-8 sm:text-xl">
                AI is already managing wildlife, changing the food system through consumer habits, and soon may be completely integrated into factory farms, further perpetuating animal suffering. As these systems become more capable and autonomous, it becomes imperative that we make sure they are built with every being in mind.
              </p>
              <p className="text-lg leading-relaxed text-muted pb-8 sm:text-xl">
                This is a critical moment in time, to shape these systems to account for nonhuman welfare before these dangerous values become locked-in for good.
              </p>
              <p className="text-lg leading-relaxed text-muted sm:text-xl">
                Named after the fungal networks that sustain entire ecosystems beneath the surface, <b>Mycelium</b> bridges the gap between AI safety and animal welfare, building the benchmarks, evaluations, and other technical infrastructure needed to advance AI models to consider humans, animals, and all sentient beings.
              </p>
            </div>
            */}

            <div className="mt-10">
              <p className="text-lg leading-relaxed text-muted pb-8 sm:text-xl">
                <b>Mycelium</b> builds the foundation for AI systems to consider all sentient beings. Through technical research and engineering, we develop benchmarks, evaluations, and other research experiments that build an evidence base for frontier labs to take seriously the moral patienthood of nonhuman beings.
              </p>
              <p className="text-lg leading-relaxed text-muted pb-4 sm:text-xl">
                How future AGI weighs the interests of nonhuman beings matters in certain plausible futures:
              </p>
              <ul className="list-disc space-y-3 pl-6 pb-8 text-lg leading-relaxed text-muted sm:text-xl">
                <li>
                  Most future sentient beings could be digital, and vastly outnumber biological beings. These could take the form of advanced AIs, digital humans, etc.
                </li>
                <li>
                  Factory farming may persist for decades. Many argue that AI-accelerated alternative proteins will prevent this from happening. However, there are <a href="https://www.dwarkesh.com/p/lewis-bollard" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] underline underline-offset-4 transition-colors hover:text-[#1d4ed8]">good reasons why</a> this is not the case, and in these worlds where AGI automates future factory farms, it&apos;s important they have more welfare-positive traits towards animals.
                </li>
                <li>
                  Wild animal suffering runs rampant. This is <a href="https://www.lesswrong.com/posts/bSwPsHZdjJHe5SnR5/does-focusing-on-animal-welfare-make-sense-if-you-re-ai" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] underline underline-offset-4 transition-colors hover:text-[#1d4ed8]">more likely</a> in worlds where humanity flourishes, and we erect parks, rainforests, and more without regard to wild animals.
                </li>
              </ul>
              <p className="text-lg leading-relaxed text-muted pb-8 sm:text-xl">
                In addition, work on nonhuman welfare may positively steer general alignment. AIs that learn disregard towards animals may be learning a general principle of disregard toward less powerful beings. This could mean future AGI has a greater chance of misalignment towards humanity (future less powerful beings).
              </p>
              <p className="text-lg leading-relaxed text-muted pb-8 sm:text-xl">
                Instilling a broader universal sense of moral patienthood into AI systems now (before values lock-in) is essential for future AGI to consider the welfare of nonhuman beings.
              </p>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-12 sm:py-8">
          <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-8">
            <h2 className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              who we are
            </h2>
            <div className="mt-8 flex flex-col gap-8 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-center sm:gap-10">
              <a
                href="https://www.linkedin.com/in/allenlu017/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
              >
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/headshot-allen.jpg"
                    alt="Allen Lu"
                    fill
                    className="object-cover"
                  />
                </div>
              </a>
              <div>
                <p className="text-lg leading-relaxed text-muted sm:text-xl">
                  <a
                    href="https://www.linkedin.com/in/allenlu017/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2563eb] underline underline-offset-4 transition-colors hover:text-[#1d4ed8]"
                  >
                    Allen Lu
                  </a>
                  {" "} is the Founder & Executive Director of Mycelium. Allen is a Visiting Fellow at <a href="https://constellation.org/" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] underline underline-offset-4 transition-colors hover:text-[#1d4ed8]">Constellation</a> and a current mentor in <a href="https://sparai.org/" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] underline underline-offset-4 transition-colors hover:text-[#1d4ed8]">SPAR</a>. Outside of Mycelium, he works as a Technical Researcher on the <a href="https://nonhumanminds.org/welfare-alignment-project/" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] underline underline-offset-4 transition-colors hover:text-[#1d4ed8]">Welfare Alignment Project</a> at the NYU Center for Mind, Ethics, and Policy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM SECTION - temporarily hidden, bring back in a few weeks
        <section className="py-12 sm:py-8">
          <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-8">
            <h2 className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              team
            </h2>
            <div className="mt-8 flex flex-wrap gap-10">
              <div className="flex flex-col items-start">
                <a
                  href="https://www.linkedin.com/in/allenlu017/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transition-transform duration-200 hover:scale-[1.05]"
                >
                  <div className="relative h-56 w-56 overflow-hidden rounded-2xl">
                    <Image
                      src="/headshot-allen.jpg"
                      alt="Allen Lu"
                      fill
                      className="object-cover"
                    />
                  </div>
                </a>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">
                  <a
                    href="https://www.linkedin.com/in/allenlu017/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-purple"
                  >
                    Allen Lu
                  </a>
                </h3>
                <p className="mt-1 text-base font-medium text-purple pb-8">
                  Founder, Executive Director
                </p>
              </div>
              <div className="flex flex-col items-start">
                <a
                  href="https://www.linkedin.com/in/isabella-my-luong/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transition-transform duration-200 hover:scale-[1.05]"
                >
                  <div className="relative h-56 w-56 overflow-hidden rounded-2xl">
                    <Image
                      src="/headshot-isabella.png"
                      alt="Isabella Luong"
                      fill
                      className="object-cover"
                    />
                  </div>
                </a>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">
                  <a
                    href="https://www.linkedin.com/in/isabella-my-luong/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-purple"
                  >
                    Isabella Luong
                  </a>
                </h3>
                <p className="mt-1 text-base font-medium text-purple pb-8">
                  Researcher Engineer, Evals
                </p>
              </div>
            </div>
          </div>
        </section>
        */}
      </main>
    </div>
  );
}
