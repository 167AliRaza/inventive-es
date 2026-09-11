import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function MaintenanceBanner() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 px-4 text-center text-white">
      {/* Decorative background blobs matching site hero style */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 animate-blob rounded-full bg-amber-500/10 blur-3xl" />
      <div className="animation-delay-2000 absolute right-1/4 top-1/3 h-72 w-72 animate-blob rounded-full bg-[#0A2240]/30 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt={`${siteConfig.name} logo`}
          width={80}
          height={80}
          className="h-16 w-16 sm:h-20 sm:w-20"
          priority
        />

        {/* Brand name */}
        <div className="mt-4 flex items-center gap-1.5 text-sm font-black uppercase tracking-tight sm:text-lg">
          <span className="text-white">Inventive</span>
          <span className="text-[#F37A20]">Engineering</span>
          <span className="text-white">Solution</span>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-24 bg-amber-500/40" />

        {/* Maintenance heading */}
        <h1 className="mt-8 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          We&apos;ll Be Back Soon
        </h1>

        <p className="mt-4 inline-flex rounded-full border border-amber-300/40 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-300">
          Scheduled Maintenance in Progress
        </p>

        <p className="mt-6 max-w-md text-slate-300">
          Our website is currently undergoing scheduled maintenance to improve your experience. We apologize for the inconvenience.
        </p>

        {/* Contact card */}
        <div className="mt-10 rounded-xl border border-slate-700 bg-slate-900/60 px-8 py-6 shadow-2xl backdrop-blur">
          <p className="text-sm text-slate-400">For inquiries, reach us at</p>
          <a
            href="mailto:info@inventive-es.com"
            className="mt-2 inline-block text-lg font-semibold text-amber-400 transition hover:text-amber-300"
          >
            info@inventive-es.com
          </a>
        </div>

        {/* Footer line */}
        <p className="mt-12 text-xs text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </div>
  );
}
