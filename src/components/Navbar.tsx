"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/data/site";
import LayoutWrapper from "@/components/LayoutWrapper";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
      <LayoutWrapper>
        <nav className="flex h-16 items-center justify-between gap-3 md:h-20" aria-label="Main navigation">
          <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setIsOpen(false)}>
            <Image src="/logo.png" alt={`${siteConfig.name} logo`} width={44} height={44} className="h-9 w-9 md:h-11 md:w-11" priority />
            <span className="truncate text-xs font-semibold leading-tight text-[#002050] sm:text-sm md:text-base">
              {siteConfig.name}
            </span>
          </Link>

          <button
            type="button"
            className="inline-flex items-center rounded-lg border border-slate-300 p-2 text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>

          <ul className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                      isActive ? "bg-[#002050] text-white shadow-sm" : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </LayoutWrapper>

      <div id="mobile-menu" className={`${isOpen ? "block" : "hidden"} border-t border-slate-200 bg-white/95 shadow-md md:hidden`}>
        <LayoutWrapper className="py-3">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                      isActive ? "bg-[#002050] text-white" : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </LayoutWrapper>
      </div>
    </header>
  );
}
