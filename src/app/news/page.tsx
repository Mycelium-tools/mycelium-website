import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News — Mycelium",
  description:
    "Updates from Mycelium: research releases, announcements, and milestones in AI×animal welfare work.",
};

type NewsItem = {
  date: string; // display date
  title: string; // the headline — the single most important fact
  blurb: string; // one or two sentences of context
  href: string; // source: LinkedIn post, article, paper…
};

const newsItems: NewsItem[] = [
  {
    date: "July 2026",
    title: "MANTA benchmark adopted by Google Deepmind",
    blurb:
      "MANTA - our benchmark for measuring animal welfare values under pressure - is now being used by Google Deepmind. A great first step towards animal welfare being recognized and evaluated in frontier labs.",
    href: "https://www.linkedin.com/posts/david-williams-king_how-well-do-llms-maintain-animal-welfare-share-7488287720839139328-hnf2/",
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function NewsPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="pt-[73px]">
        <section className="py-16 sm:py-10">
          <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-8">
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
              news
            </h1>
            <p className="mt-4 max-w-4xl text-lg text-muted sm:text-xl">
              Research releases, announcements, and milestones from our work.
            </p>

            {/* News listing */}
            <div className="mt-12 divide-y divide-border border-t border-b border-border">
              {newsItems.map((item) => (
                <article
                  key={item.href}
                  className="flex flex-col gap-2 py-8 sm:flex-row sm:gap-10"
                >
                  <span className="text-sm font-sans font-medium text-faint sm:w-40 sm:flex-shrink-0">
                    {item.date}
                  </span>

                  <div className="flex-1">
                    <h2 className="font-serif text-3xl font-semibold leading-snug text-foreground sm:text-4xl">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-base leading-relaxed text-muted sm:text-lg">
                      {item.blurb}
                    </p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-medium sm:text-base text-white transition-all duration-200 hover:bg-green-hover hover:scale-[1.02] cursor-pointer"
                    >
                      Read more
                      <ExternalLinkIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
