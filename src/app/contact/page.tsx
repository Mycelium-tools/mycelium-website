import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Mycelium",
  description: "Get in touch with Mycelium. Researchers, funders, and collaborators welcome.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#f7f5f1] text-[#18211a]">
      <main className="pt-[73px]">
        {/* Header */}
        <section className="bg-[#5c1a94] px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60">
              Connect
            </span>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              let&apos;s{" "}
              <em className="italic">change</em> that
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/75">
              Researchers, funders, and collaborators interested in nonhuman
              welfare and AI safety—we&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact form */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-xl">
            {/* Replace YOUR_FORM_ID with your Formspree form ID from formspree.io */}
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="flex flex-col gap-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-[#18211a]">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="rounded-xl border border-[#ddd9d1] bg-white px-4 py-3 text-sm text-[#18211a] placeholder-[#8a9e8c] outline-none transition-colors focus:border-[#0a8c5c] focus:ring-2 focus:ring-[#0a8c5c]/10"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-[#18211a]">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="rounded-xl border border-[#ddd9d1] bg-white px-4 py-3 text-sm text-[#18211a] placeholder-[#8a9e8c] outline-none transition-colors focus:border-[#0a8c5c] focus:ring-2 focus:ring-[#0a8c5c]/10"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-[#18211a]">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  className="rounded-xl border border-[#ddd9d1] bg-white px-4 py-3 text-sm text-[#18211a] placeholder-[#8a9e8c] outline-none transition-colors focus:border-[#0a8c5c] focus:ring-2 focus:ring-[#0a8c5c]/10"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-[#18211a]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about yourself and how you'd like to collaborate..."
                  className="resize-none rounded-xl border border-[#ddd9d1] bg-white px-4 py-3 text-sm text-[#18211a] placeholder-[#8a9e8c] outline-none transition-colors focus:border-[#0a8c5c] focus:ring-2 focus:ring-[#0a8c5c]/10"
                />
              </div>

              <button
                type="submit"
                className="self-start rounded-full bg-[#51FCAA] px-8 py-3.5 font-medium text-[#0a3d22] transition-all hover:bg-[#3de89a] hover:scale-[1.02]"
              >
                Send message
              </button>
            </form>

            <p className="mt-8 text-sm text-[#8a9e8c]">
              Prefer email?{" "}
              <a href="mailto:allen@projectmycelium.ai" className="text-[#5c1a94] hover:underline">
                allen@projectmycelium.ai
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
