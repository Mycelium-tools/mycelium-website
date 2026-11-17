import type { Metadata } from "next";
import Link from "next/link";
import { baseOpenGraph } from "@/lib/metadata";
import {
  BulletList,
  JobPosting,
  Section,
  inlineLink,
  type KeyFact,
} from "@/components/JobPosting";

const title = "Expression of interest — Mycelium";
const description =
  "Want to work with Mycelium but don't see a role that fits? Submit an expression of interest and we'll reach out if there's a match.";

const EOI_FORM_URL = "https://airtable.com/app1JBdvEi5a5N3xa/pagtKvPol4w8MpBQ5/form";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { ...baseOpenGraph, url: "/careers/expression-of-interest", title, description },
};

const keyFacts: KeyFact[] = [
  { label: "Role type", lines: ["Open: tell us how you’d like to contribute"] },
  { label: "Location", lines: ["In-person/remote"] },
  { label: "Application deadline", lines: ["None: we review submissions on a rolling basis"] },
];

const interests = [
  "Research: ML research, evals and benchmarks, or AI character and moral values",
  "Engineering: eval pipelines, data generation, training and inference infrastructure",
  "Operations, communications, policy, or fundraising",
  "Something else entirely: if you think you could help us reach our mission, we’d love to hear how",
];

export default function ExpressionOfInterestPage() {
  return (
    <JobPosting title="Expression of interest" applyUrl={EOI_FORM_URL} keyFacts={keyFacts} showClosing={false}>
      <p className="text-base leading-relaxed text-muted sm:text-lg">
        We’re always looking for talented, mission-aligned people. If you’d like to work with Mycelium but none of our{" "}
        <Link href="/careers" className={inlineLink}>open roles</Link> are the right fit, you can still submit an expression of interest.
      </p>

      <Section heading="Who we’d like to hear from">
        <p>We’re especially interested in people who could contribute to:</p>
        <BulletList items={interests} />
        <p className="pt-4">
          Regardless of your skills &amp; experience, we’re looking for people who are deeply mission-aligned: you care about the welfare of nonhuman animals, digital minds, and other neglected beings, and want to make sure advanced AI takes their interests seriously. You don’t need a professional background in animal welfare, but you should be able to point to specific things you’ve done that show this concern.
        </p>
      </Section>

      <Section heading="What happens next">
        <p>
          We review expressions of interest periodically. By default we won’t get back to you, but we’ll reach out if you seem like a strong fit for our current needs or when we open a relevant hiring round.
        </p>
      </Section>
    </JobPosting>
  );
}
