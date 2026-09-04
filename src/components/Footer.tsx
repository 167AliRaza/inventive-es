import Link from "next/link";
import LayoutWrapper from "@/components/LayoutWrapper";
import { navLinks, siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 py-12 text-slate-200">
      <LayoutWrapper>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold">{siteConfig.name}</h2>
            <p className="mt-3 text-sm text-slate-300">{siteConfig.description}</p>
            <p className="mt-3 text-sm">Since {siteConfig.established} • {siteConfig.headquarters}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Quick links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-amber-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-amber-300">{siteConfig.phone}</a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-amber-300">{siteConfig.email}</a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-amber-300">Privacy</Link>
                <span className="mx-2">•</span>
                <Link href="/terms" className="hover:text-amber-300">Terms</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </LayoutWrapper>
    </footer>
  );
}
