import Link from "next/link";
import Image from "next/image";
import LayoutWrapper from "@/components/LayoutWrapper";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 text-white">
      <LayoutWrapper>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-amber-300/40 bg-amber-500/10 px-4 py-1 text-sm font-medium text-amber-300">
              Trusted Since 1993
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Powering Industrial Infrastructure with Trusted Electrical Solutions
            </h1>
            <p className="mt-5 max-w-xl text-slate-200">
              Custom-engineered switchgear, packaged substations, and transformers — design, build, and support across Pakistan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-md bg-amber-500 px-5 py-3 font-semibold text-slate-950 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">
                Request a Quote
              </Link>
              <Link href="/products" className="rounded-md border border-slate-400 px-5 py-3 font-semibold text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">
                View Products
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-4 shadow-2xl">
            <Image
              src="/images/hero-industrial.svg"
              alt="Industrial electrical solution overview"
              width={800}
              height={500}
              className="h-auto w-full rounded-xl"
              priority
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
