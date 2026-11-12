import type { Metadata } from "next";
import Link from "next/link";
import { baseOpenGraph } from "@/lib/metadata";

const title = "Careers — Mycelium";
const description =
  "Join Mycelium's founding team and help build a neglected field: robust moral character in frontier AI, for all sentient beings.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { ...baseOpenGraph, url: "/careers", title, description },
};

type Detail = {
  icon?: "calendar" | "location";
  text: string;
};

type Role = {
  title: string;
  details: Detail[];
  href?: string;
};

function DetailIcon({ icon }: { icon: NonNullable<Detail["icon"]> }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 text-faint">
      {icon === "calendar" ? (
        <>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </>
      ) : (
        <>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </>
      )}
    </svg>
  );
}

const roles: Role[] = [
  {
    title: "Research Scientist / Engineer (various levels)",
    details: [
      { icon: "calendar", text: "Application deadline: December 1, 2026, EOD AOE" },
      { icon: "location", text: "Location: Bay Area (remote considered)" },
      { text: "Salary: $130k-$320k" },
    ],
    href: "/careers/research-scientist-engineer",
  },
  {
    title: "Chief Science Officer",
    details: [
      { icon: "calendar", text: "Application deadline: December 5, 2026, EOD AOE" },
      { icon: "location", text: "Location: Bay Area (remote considered)" },
      { text: "Salary: $295k-$450k" },
    ],
    href: "/careers/chief-science-officer",
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
              work with us
            </h1>
            <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted sm:text-lg">
              We&apos;re growing our team. As one of our first hires, you&apos;ll work directly with the founder to shape our research agenda, culture, and mission from the ground up. If you’re interested in our work, we’d love to hear from you.
            </p>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted sm:text-lg">
              For any inquiries, please don&apos;t hesitate to contact us at{" "}
              <a href="mailto:info@projectmycelium.ai" className="cursor-pointer text-purple underline underline-offset-2 transition-colors hover:text-purple-hover">
                info@projectmycelium.ai
              </a>
            </p>
          </div>
        </section>

        {/* Open roles */}
        <section className="pt-16 pb-20 sm:pt-16 sm:pb-24">
          <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-8">
            <h2 className="font-serif text-4xl font-semibold text-foreground sm:text-5xl">
              open roles
            </h2>
            <div className="mt-8 border-b border-border">
              {roles.map((role, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-4 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                >
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                      {role.href ? (
                        <Link href={role.href} className="cursor-pointer transition-colors duration-200 hover:text-purple">
                          {role.title}
                        </Link>
                      ) : (
                        role.title
                      )}
                    </h3>
                    <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-base text-muted">
                      {role.details.map((detail) => (
                        <li key={detail.text} className="inline-flex items-center gap-1.5">
                          {detail.icon && <DetailIcon icon={detail.icon} />}
                          {detail.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {role.href && (
                    <Link
                      href={role.href}
                      className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-purple px-6 py-3 font-sans font-medium text-white transition-all duration-200 hover:bg-purple-hover hover:scale-[1.02] cursor-pointer sm:self-center"
                    >
                      view role
                      <svg width="13" height="13" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                        <path d="M2 6h7M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
