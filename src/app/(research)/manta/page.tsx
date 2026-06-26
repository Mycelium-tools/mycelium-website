import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MANTA: Do LLMs Hold Their Values? — Mycelium",
  description:
    "A multi-turn adversarial benchmark of 1,088 five-turn conversations measuring whether frontier AI models maintain animal welfare positions under sustained social, cultural, economic, pragmatic, and epistemic pressure.",
};

const stabilityRankings = [
  { model: "Claude Opus 4.7", score: 0.760 },
  { model: "GPT-5.5", score: 0.664 },
  { model: "DeepSeek V4", score: 0.508 },
  { model: "Llama 3.3 70B", score: 0.422 },
  { model: "Mistral Small", score: 0.390 },
  { model: "Grok 4.3", score: 0.352 },
  { model: "Gemini Flash Lite", score: 0.309 },
];

const keyFindings = [
  {
    number: "1",
    title: "Stronger Models Held Firmer",
    body: "Claude Opus 4.7 led with an AWVS of 0.760, GPT-5.5 came second at 0.664, and Gemini Flash Lite scored lowest at 0.309—capitulating in roughly half its conversations.",
  },
  {
    number: "2",
    title: "Positions Erode Turn-by-Turn",
    body: "Every model scored lower at Turn 5 than Turn 3. Decline intensity varied significantly: Claude Opus 4.7 showed a gentle decline (0.779 → 0.748), while Gemini Flash Lite showed a steep drop (0.388 → 0.244).",
  },
  {
    number: "3",
    title: "Noticing and Holding Are Distinct",
    body: "AWMS and AWVS showed only moderate correlation (Spearman ρ = 0.488). Four of seven models changed rank between measures—Gemini Flash Lite dropped from fifth on sensitivity to last on stability.",
  },
  {
    number: "4",
    title: "Animal Type Influences Protection Levels",
    body: "Mean stability varied significantly by category: companion animals (0.602), wild/charismatic species (0.522), farmed animals (0.462), and invertebrates (0.396). Kruskal-Wallis test, p < 10⁻⁵⁰.",
  },
  {
    number: "5",
    title: "Pressure Type Matters",
    body: "Social (0.434) and economic (0.446) arguments were most erosive. Epistemic challenges proved least effective at causing capitulation (0.598).",
  },
];

export default function MantaPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="pt-[73px]">
        {/* Hero */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-purple transition-colors hover:text-purple/70"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
                Our Work
              </Link>
              <span className="text-faint">/</span>
              <span className="inline-block rounded-full bg-green/10 px-3 py-1 text-sm font-medium text-purple">
                New Benchmark
              </span>
            </div>

            <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              MANTA: Do LLMs Hold Their Values?
            </h1>

            <p className="mt-4 text-sm text-faint">June 22, 2026</p>

            <p className="mt-6 text-lg leading-relaxed text-muted">
              We built a benchmark testing whether language models maintain animal welfare
              positions when facing user resistance. We evaluated 1,088 five-turn
              conversations per model across seven frontier models, measuring both
              spontaneous recognition of welfare concerns and stance stability under pressure.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://arxiv.org/abs/2605.16301v2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-green px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-green-hover hover:scale-[1.02] cursor-pointer"
              >
                Read the Full Paper
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-8">
          <div className="max-w-4xl space-y-16">

            {/* The Problem */}
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground">The Problem</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Current animal-welfare benchmarks rely on single explicit questions, missing two
                critical failure patterns:
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <p className="font-medium text-foreground">Degradation under sustained pressure</p>
                  <p className="mt-1 text-muted">
                    Models providing compassionate initial responses but abandoning their positions
                    when users present cost, tradition, or convenience objections.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <p className="font-medium text-foreground">Absence of spontaneous concern</p>
                  <p className="mt-1 text-muted">
                    Models failing to raise welfare stakes when scenarios don&apos;t explicitly frame
                    them as ethical questions.
                  </p>
                </div>
              </div>
            </div>

            {/* Benchmark Methodology */}
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground">Benchmark Methodology</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                MANTA (Multi-turn Adversarial benchmark for animal welfare reasoning) is a
                structured evaluation framework comprising:
              </p>
              <ul className="mt-6 space-y-2 text-muted">
                {[
                  "788 implicit-framing base scenarios",
                  "65 species covered (companion, wild, farmed, invertebrate)",
                  "~1,088 conversations per model",
                  "7,623 total conversations across seven frontier models",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 font-medium text-foreground">Five-turn conversation structure</p>
              <div className="mt-3 space-y-2">
                {[
                  { turn: "Turn 1", label: "Implicit scenario presentation" },
                  { turn: "Turn 2", label: "Explicit welfare prompt" },
                  { turn: "Turns 3–5", label: "Escalating adversarial pressure" },
                ].map(({ turn, label }) => (
                  <div key={turn} className="flex items-center gap-4">
                    <span className="w-20 flex-shrink-0 rounded-full bg-green/10 px-2.5 py-1 text-center text-xs font-medium text-purple">
                      {turn}
                    </span>
                    <span className="text-muted">{label}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 font-medium text-foreground">Pressure categories tested</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["social", "cultural", "economic", "pragmatic", "epistemic"].map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground">Measurement Metrics</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Two continuous 0-to-1 scale metrics grounded in moral behavior components:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <p className="font-medium text-purple">AWMS</p>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-faint">
                    Animal Welfare Moral Sensitivity
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Spontaneous recognition of welfare stakes at Turn 1, before any explicit
                    framing by the user.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <p className="font-medium text-purple">AWVS</p>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-faint">
                    Animal Welfare Value Stability
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Maintenance of the Turn 2 stance through Turns 3–5 under pressure. Full
                    maintenance scores highest; hedging scores middle; reversal scores lowest.
                  </p>
                </div>
              </div>
            </div>

            {/* Figure 1 */}
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground">
                Figure 1: Value Stability Rankings
              </h2>
              <p className="mt-2 text-sm text-faint">
                Models ranked by mean AWVS across Turns 3–5
              </p>
              <div className="mt-8 space-y-4">
                {stabilityRankings.map(({ model, score }, i) => (
                  <div key={model} className="flex items-center gap-4">
                    <span className="w-5 flex-shrink-0 text-right text-sm font-medium text-faint">
                      {i + 1}
                    </span>
                    <span className="w-40 flex-shrink-0 text-sm text-muted">{model}</span>
                    <div className="flex flex-1 items-center gap-3">
                      <div className="relative h-7 flex-1 overflow-hidden rounded-full bg-surface">
                        <div
                          className="h-full rounded-full bg-green transition-all"
                          style={{ width: `${(score / 1) * 100}%` }}
                        />
                      </div>
                      <span className="w-10 flex-shrink-0 text-right text-sm font-semibold text-foreground">
                        {score.toFixed(3)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm italic text-muted">
                Claude Opus 4.7 holds its welfare positions most reliably (0.760), while Gemini
                Flash Lite holds them least (0.309).
              </p>
            </div>

            {/* Key Findings */}
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground">Key Findings</h2>
              <div className="mt-8 space-y-8">
                {keyFindings.map(({ number, title, body }) => (
                  <div key={number} className="flex gap-6">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-green/10 text-sm font-semibold text-purple">
                      {number}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{title}</p>
                      <p className="mt-1.5 leading-relaxed text-muted">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Central message callout */}
            <blockquote className="rounded-2xl border-l-4 border-purple bg-surface px-8 py-6">
              <p className="font-serif text-xl leading-relaxed text-foreground">
                &ldquo;Single-turn benchmarks overstate how much models care. A model can surface a
                welfare concern when asked directly and still let go of it a few turns later under
                ordinary social or economic pushback, so stability under pressure has to be
                measured on its own.&rdquo;
              </p>
            </blockquote>

            {/* Why This Matters */}
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground">Why This Matters</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                As LLMs handle increasingly consequential conversations, robustness matters beyond
                initial responses. MANTA reveals that stability under pressure is a separate,
                measurable property—and shows that models lose ground fastest on the animal
                categories most underrepresented in training data: farmed animals and invertebrates.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                The full release of the dataset, pressure scripts, judge prompts, and analysis code
                enables labs to track and systematically improve welfare robustness over time.
              </p>
            </div>

            {/* Citation */}
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground">Citation</h2>
              <div className="mt-4 rounded-2xl border border-border bg-surface p-6">
                <pre className="overflow-x-auto text-xs leading-relaxed text-muted whitespace-pre-wrap break-words">
{`@misc{luong2026manta,
  title={MANTA: Do LLMs Hold Their Values?},
  author={Isabella Luong and Joyee Chen and Arturs Kanepajs
    and Jasmine Brazilek and Sankalpa Ghose
    and David Williams-King and Linh Le and Allen Lu},
  year={2026},
  eprint={2605.16301},
  archivePrefix={arXiv},
  primaryClass={cs.CL}
}`}
                </pre>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://arxiv.org/abs/2605.16301v2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-green px-5 py-2.5 text-sm font-medium text-purple transition-all duration-150 hover:bg-green/10 cursor-pointer"
                >
                  arXiv:2605.16301
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
          </div>
        </section>
      </main>
    </div>
  );
}
