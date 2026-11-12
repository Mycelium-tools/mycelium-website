import type { Metadata } from "next";
import Link from "next/link";
import { baseOpenGraph } from "@/lib/metadata";
import {
  APPLY_URL,
  BulletList,
  JobPosting,
  Section,
  SubHeading,
  benefits,
  inlineLink,
  type KeyFact,
} from "@/components/JobPosting";

const title = "Chief Science Officer — Mycelium";
const description =
  "Lead Mycelium's science as part of our founding team: set the research agenda, build the research team, and pioneer research on robust moral values in AI character. Full-time, Bay Area preferred.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { ...baseOpenGraph, url: "/careers/chief-science-officer", title, description },
};

const keyFacts: KeyFact[] = [
  { label: "Role type", lines: ["Full-time role, Bay Area preferred (remote considered)"] },
  { label: "Start date", lines: ["ASAP (ideally by Jan/Feb 2027)"] },
  { label: "Salary", lines: ["$295k-$450k"] },
  {
    label: "Application deadline",
    lines: ["Saturday, December 5, 2026, EOD\u00a0AOE"],
    note: "We review applications on a rolling basis and may make offers early, so we encourage you to apply as soon as possible.",
  },
];

const responsibilities = [
  "Co-develop Mycelium’s research agenda with the ED: the path to impact, overall strategy for achieving our theory of change, how we allocate time and compute across projects, and which research questions matter most",
  "Spearhead hiring for our research team: define the roles we need, source and assess candidates, and make hiring decisions",
  "Lead our science: set research standards, review experimental designs, keep our work reproducible, and own our research from first idea to publication",
  "Build relationships with alignment, safety and character teams at frontier labs, and represent our work in technical conversations and at conferences",
  "Manage our technical team, as well as external early-career researchers (e.g. through MATS or SPAR) and advise on best practices",
  "Stay hands-on with research, especially early on; as the team grows, expect your time to shift more towards management.",
  "Support fundraising by shaping the research case in grant applications",
  "Communicate our research agenda to external stakeholders, with a clear theory of change for mitigating long-term suffering risks from ASI to nonhuman beings",
];

const qualifications = [
  "An established research track record in ML / AI safety, typically 5+ years of research experience or equivalent",
  "Strong hands-on empirical ML research and engineering skills, with published work in both foundational & applied topics",
  "Strong research taste: you can identify questions that matter, judge what’s tractable now, and see which parts of the work AI can’t yet do for us",
  "Hiring experience. You’ve hired researchers or engineers before, and have sourced candidates, designed assessments and made hiring decisions",
  "Professional experience managing and mentoring researchers, formally in a past role or informally through fellowship programs, and helped them do their best work",
  "Well-established relationships in the AI safety community, including at frontier labs, and the potential to be a thought leader on AI character and moral values",
  "You’ve already done rigorous research on AI character, moral values, welfare, or closely related work",
  "Deep, long-standing concern for animal welfare and other neglected beings",
  "You communicate openly, disagree when necessary, and adopt a scout mindset, updating readily in the light of new evidence",
];

const niceToHave = [
  "Experience at a frontier lab or AI safety organization",
  "Background in moral philosophy, cognitive science, animal welfare or digital minds",
  "Prior experience founding an organization or raising research funding",
];

const firstYearOutcomes = [
  "At least three strong research outputs, such as new benchmarks, evals or foundational research experiments, that hold up to outside scrutiny",
  "Papers published and submitted to ML venues",
  "Researchers at frontier AI companies engaging with and using our work",
  "A strong, agile research team working well under your leadership",
];

export default function ChiefScienceOfficerPage() {
  return (
    <JobPosting title="Chief Science Officer" applyUrl={APPLY_URL} keyFacts={keyFacts}>
      <p className="text-base leading-relaxed text-muted sm:text-lg">
        Mycelium is hiring a <strong className="font-semibold text-foreground">Chief Science Officer</strong> to lead Mycelium’s science as part of our founding team. You’ll set the research agenda together with the Executive Director, and lead how our research gets done: hiring, managing and mentoring our researchers. As the Chief Science Officer, you’ll be pioneering research focused on robust moral values in AI character, with respect to animal welfare, digital minds, and other neglected moral patients.
      </p>

      <Section heading="About Mycelium">
        <p>
          We advance the study of robust moral values in AI character, with a particular focus on the welfare of neglected beings (e.g. digital minds and nonhuman animals). We think that broadening the moral circle of consideration to include all sentient beings is important to reduce long-term suffering and catastrophic risk. See{" "}
          <Link href="/about" target="_blank" rel="noopener noreferrer" className={inlineLink}>here</Link>{" "}
          for more information on Mycelium’s mission.
        </p>
        <p>
          Our technical research includes benchmarks, evals, and other work to guide and inform decision-makers at frontier AI companies, policymakers, and the public. You’ll join as part of Mycelium’s founding team, working directly with the founder to shape the organization’s agenda, culture and mission from the ground floor.
        </p>
      </Section>

      <Section heading="What you’ll do">
        <BulletList items={responsibilities} />
      </Section>

      <Section heading="Who we’re looking for">
        <BulletList items={qualifications} />
        <SubHeading>Nice to have:</SubHeading>
        <BulletList items={niceToHave} />
      </Section>

      <Section heading="What success looks like">
        <p>By the end of your first year, we’d hope to have:</p>
        <BulletList items={firstYearOutcomes} />
      </Section>

      <Section heading="Compensation & Benefits">
        <p>
          Salary range: <strong className="font-semibold text-foreground">$295k-$450k</strong>
        </p>
        <p>
          We recognize that our salaries - while competitive for mission-driven nonprofits - are below market range you’d receive at frontier labs and other safety organizations. We hope that mission-aligned candidates will see the opportunity to shape a neglected field as a real part of what this role offers. If pay is a blocker for you, let us know - we’re happy to work around your needs as best we can.
        </p>
        <SubHeading>Benefits (US full-time employees)</SubHeading>
        <BulletList items={benefits} />
      </Section>

      <Section heading="Logistics">
        <p>
          This is a full-time role, based in the Bay Area. Hybrid is strongly preferred, and the expectation is that our team members are in the office 3-5 days/week. Remote is possible for exceptional candidates.
        </p>
        <p>
          <strong className="font-semibold text-foreground">Work authorization:</strong> Existing work authorization is preferred, but strong international candidates are encouraged to apply. Visa support may be possible through a third-party provider, at the candidate’s expense.
        </p>
        <p>
          <strong className="font-semibold text-foreground">Application process:</strong> A short application form, an intro conversation, a research presentation on your past work, a live critique of our current research agenda (what you’d change and what you’d do in your first six months), conversations with our team &amp; advisors, and a paid work trial of 1-2 weeks. If you can’t take time away for a work trial, let us know and we’ll work around your schedule. We may adjust the process based on the applications we receive.
        </p>
      </Section>
    </JobPosting>
  );
}
