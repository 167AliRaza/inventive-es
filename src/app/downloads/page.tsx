import type { Metadata } from "next";
import LayoutWrapper from "@/components/LayoutWrapper";
import { downloads } from "@/data/downloads";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Download corporate profile, product catalogs, and quality documents from Inventive Engineering Solution.",
};

export default function DownloadsPage() {
  return (
    <section className="py-16">
      <LayoutWrapper>
        <h1 className="text-4xl font-bold text-slate-900">Downloads</h1>
        <p className="mt-4 max-w-3xl text-slate-600">Access brochures, certificates, and technical documents for project planning and approvals.</p>

        <div className="mt-10 space-y-4">
          {downloads.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">{item.category}</p>
              <h2 className="mt-2 text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              <a href={item.file} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-semibold text-slate-900 hover:text-amber-600">
                Download PDF →
              </a>
            </article>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
