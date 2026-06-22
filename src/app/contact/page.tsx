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
        <section className="bg-purple px-6 py-24">
          <div className="mx-auto max-w-2xl">
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              let&apos;s{" "}
              <em className="italic">build together</em>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              If you&apos;re
            </p>
          </div>
        </section>

        {/* Contact form */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-2xl">
            {/* Replace YOUR_FORM_ID with your Formspree form ID from formspree.io */}
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="flex flex-col gap-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder-faint outline-none transition-colors focus:border-purple focus:ring-2 focus:ring-purple/10"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder-faint outline-none transition-colors focus:border-purple focus:ring-2 focus:ring-purple/10"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder-faint outline-none transition-colors focus:border-purple focus:ring-2 focus:ring-purple/10"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about yourself and how you'd like to collaborate..."
                  className="resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder-faint outline-none transition-colors focus:border-purple focus:ring-2 focus:ring-purple/10"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer self-start rounded-full bg-green px-8 py-3.5 font-medium text-foreground transition-all hover:bg-green-hover hover:scale-[1.02]"
              >
                Send message
              </button>
            </form>

            <p className="mt-8 text-sm text-faint">
              Prefer email?{" "}
              <a href="mailto:allen@projectmycelium.ai" className="text-purple hover:underline">
                allen@projectmycelium.ai
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
