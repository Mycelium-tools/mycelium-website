export default function Footer() {
  return (
    <footer className="bg-[#1c1025] px-6 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <div className="flex items-center justify-center gap-4">
          <p className="text-sm text-white/70">© {new Date().getFullYear()} Mycelium</p>
          <a
            href="https://www.linkedin.com/company/projectmycelium/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 transition-colors hover:text-white"
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-white/60">
          Mycelium is a fiscally sponsored project of Anti Entropy (EIN: 88-0967420),<br />
          a 501(c)(3) nonprofit organization. Donations are tax-deductible to the extent allowed by law.
        </p>
      </div>
    </footer>
  );
}
