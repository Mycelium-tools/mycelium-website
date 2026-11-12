import type { Metadata } from "next";
import Link from "next/link";
import { baseOpenGraph } from "@/lib/metadata";
import {
  APPLY_URL,
  BulletList,
  ExternalLink,
  JobPosting,
  Section,
  SubHeading,
  benefits,
  inlineLink,
  type KeyFact,
} from "@/components/JobPosting";

const title = "Research Scientist / Engineer — Mycelium";
const description =
  "Join Mycelium's founding team to build benchmarks, evals, and research on the moral character of frontier AI. Full-time, Bay Area preferred.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { ...baseOpenGraph, url: "/careers/research-scientist-engineer", title, description },
};

const keyFacts: KeyFact[] = [
  { label: "Role type", lines: ["Full-time role, Bay Area preferred (remote considered)"] },
  { label: "Start date", lines: ["ASAP (ideally by Jan 2027)"] },
  {
    label: "Salary",
    lines: [
      <><span className="text-foreground">Research Scientist/Engineer:</span> $130k-$225k</>,
      <><span className="text-foreground">Senior Research Scientist/Engineer:</span> $225k-$320k</>,
    ],
  },
  {
    label: "Application deadline",
    lines: ["Tuesday, December 1, 2026, EOD\u00a0AOE"],
    note: "We review applications on a rolling basis and may make offers early, so we encourage you to apply as soon as possible.",
  },
];

const responsibilities: React.ReactNode[] = [
  <>
    Build robust benchmarks, evals (e.g. <ExternalLink href="https://www.mantabench.org/">MANTA</ExternalLink>), and training sets to advance the study of, measure, and shape the moral character of frontier AI systems with respect to nonhuman welfare, using this work to inform decision-makers at safety organizations
  </>,
  "Ensure evals are created rigorously from start to finish: iterating on construct validity, developing scenarios and grading rubrics, validating LLM judges, and running and analyzing evals across frontier & open-weight models",
  <>
    Design and run empirical research experiments on the character of AI systems - e.g. how fine-tuning on animal welfare data affects broader safety &amp; alignment (our{" "}
    <ExternalLink href="https://sparai.org/projects/f26/rec9MdqTLmwjnxJo3">current project</ExternalLink>, building on{" "}
    <ExternalLink href="https://arxiv.org/abs/2606.09475">emergent alignment</ExternalLink>)
  </>,
  "Publish and share research findings through written content (e.g. academic publications, blog posts) and presentations (e.g. ML conferences) to drive adoption and change",
  "Collaborate with researchers at frontier labs, safety orgs and the broader AI safety ecosystem to gather technical feedback to improve our research methodologies",
  "Mentor junior team members and other early-career researchers",
  "Communicate our research agenda to external stakeholders, with a clear theory of change for mitigating long-term suffering risks from ASI to nonhuman beings",
];

const levels: React.ReactNode[] = [
  <>A <strong className="font-semibold text-foreground">Research Scientist / Engineer</strong> will pursue self-directed research, owning a project’s workstream from start to finish</>,
  <>A <strong className="font-semibold text-foreground">Senior RS / RE</strong> will help shape Mycelium’s research agenda alongside their technical work. You’ll lead entire projects with little oversight, propose what comes next, and mentor junior researchers or contractors. We expect a longer publication record and importantly, an established network in AI safety.</>,
];

const qualifications = [
  "Strong hands-on empirical ML research. A track record of substantial projects shown through papers or informal technical write-ups (e.g. benchmarks, red-teaming, alignment training experiments, or other TAIS work)",
  "Solid ML engineering experience, shown through git repos or tools you’ve built (e.g. eval pipelines, synthetic data generation, fine-tuning and inference infrastructure, or running experiments at scale)",
  "Hands-on experience building evals. You’ve designed tasks or datasets, written scoring rubrics or set up LLM judges, and thought hard about how an eval measures what it claims to measure",
  "Excellent technical writing ability. You can be a solid contributor to Mycelium’s writeups of evaluation results, technical papers, and blog posts",
  "An existing background or track record in AI safety research or other highly technical subject (CS, math, etc.)",
  "High attention to detail. You read closely, can spot bugs in transcripts, and find discrepancies that others miss",
  "Strong external communicator. You communicate well with external stakeholders, and we trust you to stay on the ball with communications with, e.g., lab contacts.",
  "Self-directed and organized. You can carry projects to completion with little oversight, juggle several workstreams at once, and track and anticipate blockers.",
  "Skill with AI tools. You use AI to speed up your work, know which models suit which tasks, and know when not to use AI",
  "Real, long-standing concern for nonhuman animal welfare. You don’t need a professional background in this, but you can point to specific things you’ve done to corroborate this",
];

const niceToHave = [
  "Previous research experience on AI character, personas, or nonhuman welfare",
  "Experience working with frontier lab safety or evals teams",
  "Prior work on animal welfare or digital minds",
];

export default function ResearchScientistEngineerPage() {
  return (
    <JobPosting title="Research Scientist / Engineer (various levels)" applyUrl={APPLY_URL} keyFacts={keyFacts}>
      <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
        <p>
          We’re hiring for two <strong className="font-semibold text-foreground">Research Scientist / Engineer</strong> roles, open to both mid-level and senior candidates.
        </p>
        <p>
          Mycelium is hiring research scientists &amp; engineers to conduct ML research around robust moral values for AI character, with a specific focus on animal welfare and other neglected moral patients. You’ll be shaping the emerging field of AI character with respect to nonhuman welfare, and work on original research to guide and inform decision-makers in the AI safety ecosystem.
        </p>
      </div>

      <Section heading="About Mycelium">
        <p>
          We advance the study of robust moral values in AI character, with a particular focus on the welfare of neglected beings (e.g. nonhuman animals, digital minds). We think that broadening the moral circle of consideration to include all sentient beings is important to reduce long-term suffering and catastrophic risk. See{" "}
          <Link href="/about" target="_blank" rel="noopener noreferrer" className={inlineLink}>here</Link>{" "}
          for more information on Mycelium’s mission.
        </p>
        <p>
          Our technical research includes benchmarks, evals, and other work to guide and inform decision-makers at frontier AI companies, policymakers, and the public. You’ll join as part of Mycelium’s founding team, working directly with the founder to shape the organization’s agenda, culture and mission from the ground floor.
        </p>
      </Section>

      <Section heading="What you’ll do">
        <BulletList items={responsibilities} />
        <p className="pt-4">We’re looking to hire a variety of seniority levels for this role. As a rough guide:</p>
        <BulletList items={levels} />
        <p className="pt-4">
          We are also seeking to hire an exceptionally talented and mission-aligned Chief Science Officer. You can find more information on this role{" "}
          <Link href="/careers/chief-science-officer" target="_blank" rel="noopener noreferrer" className={inlineLink}>here</Link>.
        </p>
      </Section>

      <Section heading="Who we’re looking for">
        <BulletList items={qualifications} />
        <SubHeading>Nice to have:</SubHeading>
        <BulletList items={niceToHave} />
        <p className="pt-4">
          For senior roles, it’s expected that you have an established network and reputation in AI safety, and experience mentoring or leading research teams.
        </p>
      </Section>

      <Section heading="Compensation & Benefits">
        <p>
          Our current salary ranges vary based on different levels of seniority, and are roughly: <strong className="font-semibold text-foreground">$130k-$225k</strong> (RS/RE) and <strong className="font-semibold text-foreground">$225k-$320k</strong> (Senior RS/RE).
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
          <strong className="font-semibold text-foreground">Application process:</strong> A short application form, screening interview, technical assessments (coding/ML), research presentation, follow-up interviews (covering technical, values and behavioral), and a paid work trial. If you can’t take time away for a work trial, let us know and we’ll work around your schedule. We may tailor the process to your specific background and experience, and will keep you updated along the way.
        </p>
      </Section>
    </JobPosting>
  );
}
