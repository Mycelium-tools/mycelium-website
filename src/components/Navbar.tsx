"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`group relative text-lg font-medium transition-colors hover:text-foreground ${
        isActive ? "text-foreground" : "text-muted"
      }`}
    >
      {children}
      <svg
        className={`pointer-events-none absolute -bottom-1 left-0 w-full overflow-visible${isActive ? "" : " nav-underline"}`}
        height="2"
        viewBox="0 0 100 2"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <line
          className={isActive ? undefined : "nav-root-stem"}
          strokeDasharray="100"
          strokeDashoffset={isActive ? "0" : "100"}
          x1="0" y1="1" x2="100" y2="1"
          stroke="var(--color-purple)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 transition-transform duration-200 hover:scale-105">
          <Image src="/logo-purple.png" alt="" width={48} height={48} className="object-contain" unoptimized />
          <span className="font-serif text-2xl font-semibold text-foreground">mycelium</span>
        </Link>
        <div className="flex items-center gap-8">
          <NavLink href="/about">about</NavLink>
          <NavLink href="/work">our work</NavLink>
          <NavLink href="/contact">contact</NavLink>
          <a
            href="https://tally.so/r/3qK9eO"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-1 text-lg font-medium text-muted transition-colors hover:text-foreground"
          >
            community
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-150 group-hover:-translate-y-px group-hover:translate-x-px">
              <path d="M2 9L9 2M9 2H4M9 2V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg
              className="pointer-events-none absolute -bottom-1 left-0 w-full overflow-visible nav-underline"
              height="2"
              viewBox="0 0 100 2"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <line
                className="nav-root-stem"
                strokeDasharray="100"
                strokeDashoffset="100"
                x1="0" y1="1" x2="100" y2="1"
                stroke="var(--color-purple)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </a>
          <a
            href="https://www.every.org/projectmycelium"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green px-5 py-2.5 text-lg font-medium text-white transition-all duration-200 hover:bg-green-hover hover:scale-[1.02]"
          >
            donate
          </a>
        </div>
      </nav>
    </header>
  );
}
