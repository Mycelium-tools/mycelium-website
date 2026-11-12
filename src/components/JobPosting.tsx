import Link from "next/link";

export type KeyFact = {
  label: string;
  lines: React.ReactNode[];
  note?: string;
};

// One application form covers every open role.
export const APPLY_URL = "https://airtable.com/app1JBdvEi5a5N3xa/pag53SJcsITFzFYtj/form";

export const inlineLink = "cursor-pointer text-purple underline underline-offset-2 transition-colors hover:text-purple-hover";

export const benefits = [
  "Health insurance: 100% of your premium covered, plus dental and vision",
  "401(k) with up to 2% match",
  "20 days paid vacation, plus ~12 holidays and a winter-holiday closure",
  "10 days paid sick leave and 5 days paid bereavement leave",
  "Life insurance",
];

function ApplyButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex shrink-0 items-center gap-2 self-start sm:self-center rounded-full bg-purple px-8 py-3.5 font-sans font-medium text-white transition-all duration-200 hover:bg-purple-hover hover:scale-[1.02] cursor-pointer"
    >
      apply
      <svg width="13" height="13" viewBox="0 0 11 11" fill="none" aria-hidden="true">
        <path d="M2 9L9 2M9 2H4M9 2V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function InfoTooltip({ text }: { text: string }) {
  return (
    <span className="group relative inline-flex">
      <button
        type="button"
        aria-label="More info"
        className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-faint font-sans text-xs font-semibold text-faint transition-colors duration-200 hover:border-purple hover:text-purple focus-visible:border-purple focus-visible:text-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple/30"
      >
        i
      </button>
      <span
        role="tooltip"
        className="pointer-events-none invisible absolute bottom-full left-1/2 z-10 mb-2 w-64 -translate-x-1/2 rounded-xl border border-border bg-background px-4 py-3 font-sans text-sm font-normal leading-relaxed text-muted opacity-0 shadow-lg transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 motion-reduce:transition-none"
      >
        {text}
      </span>
    </span>
  );
}

export function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">{heading}</h2>
      <div className="mt-5 space-y-4 text-base leading-relaxed text-muted sm:text-lg">{children}</div>
    </section>
  );
}

export function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="pt-4 font-serif text-2xl font-semibold text-foreground">{children}</h3>;
}

export function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={inlineLink}>
      {children}
    </a>
  );
}

export function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc space-y-3 pl-6 marker:text-purple">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

// Two-column role page: key facts on the left (stacked above on mobile), job description on the right.
export function JobPosting({
  title,
  applyUrl,
  keyFacts,
  children,
}: {
  title: string;
  applyUrl?: string;
  keyFacts: KeyFact[];
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background text-foreground">
      <main className="pt-[73px]">
        <div className="mx-auto max-w-6xl px-10 pt-16 pb-20 sm:px-12 sm:pt-10 sm:pb-24 lg:px-8">
          <Link
            href="/careers"
            className="cursor-pointer inline-flex items-center gap-1 text-base font-medium text-faint transition-colors hover:text-foreground"
          >
            ← all roles
          </Link>

          {/* Header */}
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            {applyUrl && <ApplyButton href={applyUrl} />}
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
            {/* Key facts: left column on desktop, above the main content on mobile */}
            <aside>
              <dl className="space-y-6 lg:sticky lg:top-28">
                {keyFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="flex items-center gap-2 font-serif text-xl font-semibold text-foreground">
                      {fact.label}
                      {fact.note && <InfoTooltip text={fact.note} />}
                    </dt>
                    <dd className="mt-1 w-fit divide-y divide-border text-base leading-relaxed text-muted">
                      {fact.lines.map((line, i) => (
                        <span key={i} className="block py-2 first:pt-0 last:pb-0">{line}</span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>

            <div>
              {children}

              <div className="mt-14 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                <p>
                  We encourage you to apply even if your background may not seem like the perfect fit! We would rather review a larger pool of applications than risk missing out on a promising candidate for the position.
                </p>
                <p className="italic">
                  Mycelium is an equal opportunity employer. We do not discriminate on the basis of race, color, religion, sex, national origin, age, disability, sexual orientation, gender identity, or any other characteristic protected by applicable law.
                </p>
              </div>

              {applyUrl && (
                <div className="mt-10">
                  <ApplyButton href={applyUrl} />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
