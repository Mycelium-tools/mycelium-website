import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Mycelium",
  description: "Mycelium works on advancing robust moral values in AI character, through broadening the moral circle of consideration of AI to include all sentient beings - humans and nonhuman beings (digital minds, animals, etc.). Our technical work - benchmarks, evaluations, and other research - builds an evidence base for frontier labs to take seriously the moral patienthood of nonhuman beings.",
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
              <em className="italic text-purple">robust moral character</em> {" "} in AI
            </h1>

            <div className="mt-10">
              <p className="text-base leading-relaxed text-muted pb-8 sm:text-lg">
                We do technical research to advance the study of <b>robust moral values in AI character</b>, with a particular focus on the welfare of neglected beings (e.g. digital minds and nonhuman animals). We think that broadening the moral circle of consideration to include all sentient beings is important to reduce long-term suffering and catastrophic risk.
              </p>
              <p className="text-base leading-relaxed text-muted pb-4 sm:text-lg">
                Why focus on neglected beings? We think this matters for a few reasons:
              </p>
              <ul className="list-disc space-y-3 pl-6 pb-8 text-base leading-relaxed text-muted sm:text-lg">
                <li>
                  <b>Generalization:</b> How a model considers nonhuman beings is a test of its character. AIs that learn disregard toward animals may be learning a general principle of disregard toward less powerful, less intelligent beings. This could scale to future AGI disregarding future less powerful beings (humans). Whether broadening the moral circle steers general alignment in a positive direction is a question we are actively researching.
                </li>
                <li>
                  <b>Digital minds:</b> Most future sentient beings could be digital, and vastly outnumber biological beings, whether as advanced AIs, digital humans, or something else. How a model reasons about the moral status of minds unlike its own is part of its character, and one that today&apos;s evaluations largely ignore.
                </li>
                <li>
                  <b>Factory farming:</b> may persist for decades. Many argue that AI-accelerated alternative proteins will prevent this from happening, but there are <a href="https://www.dwarkesh.com/p/lewis-bollard" target="_blank" rel="noopener noreferrer" className="text-[#4a6fa5] underline underline-offset-4 transition-colors hover:text-[#3a5a8a]">good reasons why</a> this is not the case. In worlds where AGI automates future factory farms, it&apos;s important they have more welfare-positive values towards animals.
                </li>
                <li>
                  <b>Wild animals:</b> <a href="https://wildanimalsuffering.org/" target="_blank" rel="noopener noreferrer" className="text-[#4a6fa5] underline underline-offset-4 transition-colors hover:text-[#3a5a8a]">Wild animal suffering is vast</a>, and <a href="https://www.lesswrong.com/posts/bSwPsHZdjJHe5SnR5/does-focusing-on-animal-welfare-make-sense-if-you-re-ai" target="_blank" rel="noopener noreferrer" className="text-[#4a6fa5] underline underline-offset-4 transition-colors hover:text-[#3a5a8a]">may actually increase</a> in worlds where humanity flourishes. An AGI with greater moral consideration for nonhuman animals may shape these decisions differently.
                </li>
              </ul>
              {/* <p className="text-base leading-relaxed text-muted pb-8 sm:text-lg">
                In addition, work on nonhuman welfare may positively steer general alignment. AIs that learn disregard towards animals may be learning a general principle of disregard toward less powerful beings. This could mean future AGI has a greater chance of misalignment towards humanity (future less powerful beings).
              </p> */}
              <p className="text-base leading-relaxed text-muted pb-8 sm:text-lg">
                Instilling a broader universal sense of moral patienthood into AI systems now (before value lock-in) is essential for future AGI to consider the welfare of nonhuman beings, as well as potentially steer general alignment in a positive direction.
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
                <p className="text-base leading-relaxed text-muted sm:text-lg">
                  <a
                    href="https://www.linkedin.com/in/allenlu017/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a6fa5] underline underline-offset-4 transition-colors hover:text-[#3a5a8a]"
                  >
                    Allen Lu
                  </a>
                  {" "} is the Founder & Executive Director of Mycelium. Allen is a Visiting Fellow at <a href="https://constellation.org/" target="_blank" rel="noopener noreferrer" className="text-[#4a6fa5] underline underline-offset-4 transition-colors hover:text-[#3a5a8a]">Constellation</a> and a current mentor in <a href="https://sparai.org/" target="_blank" rel="noopener noreferrer" className="text-[#4a6fa5] underline underline-offset-4 transition-colors hover:text-[#3a5a8a]">SPAR</a>. Outside of Mycelium, he works as a Technical Researcher on the <a href="https://nonhumanminds.org/welfare-alignment-project/" target="_blank" rel="noopener noreferrer" className="text-[#4a6fa5] underline underline-offset-4 transition-colors hover:text-[#3a5a8a]">Welfare Alignment Project</a> at the NYU Center for Mind, Ethics, and Policy.
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
