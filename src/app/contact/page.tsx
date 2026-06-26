import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Mycelium",
  description: "Get in touch with Mycelium. Researchers, funders, and collaborators welcome.",
};

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="pt-[73px]">
        {/* Header */}
        <section className="pt-10">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
              let&apos;s{" "}
              <em className="italic">build together</em>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Mycelium is a small team working on a big problem. Whether you're a student, researcher, engineer, funder, or just someone who wants to make AI go well for all sentient beings, we'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact form */}
        <section className="pt-8 pb-24">
          <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            {/* Replace YOUR_FORM_ID with your Formspree form ID from formspree.io */}
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="flex flex-col gap-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-md font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="rounded-xl border border-border bg-background px-4 py-3 text-md text-foreground placeholder-faint outline-none transition-colors focus:border-foreground/40 focus:ring-2 focus:ring-foreground/5"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-md font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="rounded-xl border border-border bg-background px-4 py-3 text-md text-foreground placeholder-faint outline-none transition-colors focus:border-foreground/40 focus:ring-2 focus:ring-foreground/5"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-md font-medium text-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  className="rounded-xl border border-border bg-background px-4 py-3 text-md text-foreground placeholder-faint outline-none transition-colors focus:border-foreground/40 focus:ring-2 focus:ring-foreground/5"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-md font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about yourself and how you'd like to collaborate..."
                  className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-md text-foreground placeholder-faint outline-none transition-colors focus:border-foreground/40 focus:ring-2 focus:ring-foreground/5"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer self-start rounded-full bg-green px-8 py-3.5 font-medium text-white transition-all hover:bg-green-hover hover:scale-[1.02]"
              >
                Send message
              </button>
            </form>

            <p className="mt-8 text-md text-faint">
              Prefer email? Reach out to {" "}
              <a href="mailto:allen@projectmycelium.ai" className="text-muted hover:underline">
                allen@projectmycelium.ai
              </a>
            </p>
          </div>
          </div>
        </section>
      </main>
    </div>
  );
}
