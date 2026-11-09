import type { Metadata } from "next";
import { baseOpenGraph } from "@/lib/metadata";

const title = "Careers — Mycelium";
const description =
  "Work with Mycelium on advancing robust moral character in frontier AI.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { ...baseOpenGraph, url: "/careers", title, description },
};

type Role = {
  title: string;
  type: string;
  location: string;
  summary: string;
  applyUrl: string;
};

// PLACEHOLDER: replace with real roles before launch.
const roles: Role[] = [
  {
    title: "Example Role Title",
    type: "Part-time",
    location: "Remote",
    summary:
      "Placeholder description. One or two sentences on what this person will work on and who we're looking for.",
    applyUrl: "#",
  },
];

export default function CareersPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="pt-[73px]">
        {/* Header */}
        <section className="pt-16 sm:pt-10">
          <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-8">
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
              work <em className="italic text-purple">with us</em>
            </h1>
            <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted sm:text-lg">
              {/* PLACEHOLDER intro copy */}
              Placeholder intro. A short paragraph on what it&apos;s like to work at Mycelium, the kind of people we&apos;re looking for, and why this work matters.
            </p>
          </div>
        </section>

        {/* Open roles */}
        <section className="pt-12 pb-20 sm:pt-8 sm:pb-24">
          <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-8">
            <h2 className="font-serif text-4xl font-semibold text-foreground sm:text-5xl">
              open roles
            </h2>
            <div className="mt-8 flex max-w-4xl flex-col gap-6">
              {roles.map((role) => (
                <div
                  key={role.title}
                  className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
                >
                  <h3 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-faint">
                    {role.type} · {role.location}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                    {role.summary}
                  </p>
                  <a
                    href={role.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-purple px-6 py-3 font-sans font-medium text-white transition-all duration-200 hover:bg-purple-hover hover:scale-[1.02] cursor-pointer"
                  >
                    apply
                    <svg width="13" height="13" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                      <path d="M2 9L9 2M9 2H4M9 2V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-4xl text-base leading-relaxed text-muted sm:text-lg">
              {/* PLACEHOLDER: general-interest contact */}
              Don&apos;t see a fit? Placeholder text on how to reach out anyway.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
