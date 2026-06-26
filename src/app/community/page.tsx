import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community — Mycelium",
  description: "Join the AI × Animals community on Slack.",
};

export default function CommunityPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="pt-[73px]">
        <section className="py-10">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="mt-4 font-serif text-6xl font-semibold leading-tight text-foreground">
              let&apos;s <em className="italic text-purple">connect</em>
            </h1>
            <div className="mt-10 max-w-4xl">
              <p className="text-lg leading-relaxed text-muted pb-8">
                We&apos;ve found our home in the Sentient Futures slack community, an active hub for making AI go well for all sentient beings. Join us on their slack to connect with over a thousand advocates, researchers, and builders working at this critical intersection.
              </p>
              <a
                href="https://tally.so/r/3qK9eO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-purple px-8 py-3.5 font-sans font-medium text-white transition-all duration-200 hover:bg-purple-hover hover:scale-[1.02] cursor-pointer"
              >
                join here
                <svg width="13" height="13" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                  <path d="M2 9L9 2M9 2H4M9 2V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
