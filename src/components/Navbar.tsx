import Image from "next/image";
import Link from "next/link";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group relative text-m font-medium text-[#5a6b5c] transition-colors hover:text-[#18211a]">
      {children}
      <svg
        className="pointer-events-none absolute -bottom-4 left-0 w-full overflow-visible"
        height="18"
        viewBox="0 0 100 18"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        {/* Main squiggly stem — grows left to right */}
        <path
          className="nav-root-stem"
          strokeDasharray="300"
          strokeDashoffset="300"
          d="M 0 6 C 8 2, 20 10, 32 5 C 44 1, 56 10, 68 5 C 78 2, 90 8, 100 5"
          stroke="#0a8c5c"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#ddd9d1] bg-[#f7f5f1]/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo3.png" alt="" width={48} height={48} className="object-contain" unoptimized />
          <span className="font-serif text-2xl font-semibold text-[#18211a]">mycelium</span>
        </Link>
        <div className="flex items-center gap-8">
          <NavLink href="/about">about</NavLink>
          <NavLink href="/work">our work</NavLink>
          <NavLink href="/contact">contact</NavLink>
          <a
            href="https://tally.so/r/3qK9eO"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-m font-medium text-[#5a6b5c] transition-colors hover:text-[#18211a]"
          >
            community
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true" className="shrink-0">
              <path d="M2 9L9 2M9 2H4M9 2V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="https://www.every.org/mycelium"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#FCC351] px-5 py-2.5 text-m font-medium text-[#4a2e00] transition-colors hover:bg-[#e8b030]"
          >
            donate
          </a>
        </div>
      </nav>
    </header>
  );
}
