"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-block text-lg font-medium transition-colors hover:text-foreground ${
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
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-10 sm:px-12 lg:px-8 py-4">
        <Link href="/" onClick={close} className="flex items-center gap-2.5 transition-transform duration-200 hover:scale-105">
          <Image src="/logo-purple.png" alt="" width={48} height={48} className="object-contain" unoptimized />
          <span className="font-serif text-2xl font-semibold text-foreground">mycelium</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-8">
          <NavLink href="/about">about</NavLink>
          <NavLink href="/work">our work</NavLink>
          <NavLink href="/contact">contact</NavLink>
          <NavLink href="/community">community</NavLink>
          <a
            href="https://www.every.org/projectmycelium"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green px-5 py-2.5 text-lg font-medium text-white transition-all duration-200 hover:bg-green-hover hover:scale-[1.02]"
          >
            donate
          </a>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="sm:hidden p-2 -mr-1 cursor-pointer text-foreground"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="sm:hidden border-t border-border bg-background/95 backdrop-blur-sm px-8 py-8 flex flex-col items-start gap-6">
          <NavLink href="/about" onClick={close}>about</NavLink>
          <NavLink href="/work" onClick={close}>our work</NavLink>
          <NavLink href="/contact" onClick={close}>contact</NavLink>
          <NavLink href="/community" onClick={close}>community</NavLink>
          <a
            href="https://www.every.org/projectmycelium"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="self-start rounded-full bg-green px-5 py-2.5 text-lg font-medium text-white transition-all duration-200 hover:bg-green-hover hover:scale-[1.02]"
          >
            donate
          </a>
        </div>
      )}
    </header>
  );
}
