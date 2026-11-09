import type { Metadata } from "next";
import Link from "next/link";
import { baseOpenGraph } from "@/lib/metadata";

const title = "Chief Science Officer — Mycelium";
const description = "Chief Science Officer at Mycelium. Full description coming soon.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { ...baseOpenGraph, url: "/careers/chief-science-officer", title, description },
};

// Stub until the CSO job description is ready.
export default function ChiefScienceOfficerPage() {
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
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Chief Science Officer
          </h1>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted sm:text-lg">
            Full description coming soon.
          </p>
        </div>
      </main>
    </div>
  );
}
