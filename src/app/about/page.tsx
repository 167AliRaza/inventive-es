import type { Metadata } from "next";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Inventive Engineering Solution, our history, mission, factory capabilities, and management focus.",
};

const timeline = [
  { year: "1993", detail: "Company founded to serve utility and industrial power distribution projects." },
  { year: "2005", detail: "Expanded panel manufacturing and testing facilities." },
  { year: "2016", detail: "Introduced turnkey packaged substation solutions." },
  { year: "2024", detail: "Scaled nationwide support with offices in Lahore, Karachi, and Faisalabad." },
];

export default function AboutPage() {
  return (
    <section className="py-16">
      <LayoutWrapper>
        <h1 className="text-4xl font-bold text-slate-900">About Inventive Engineering Solution</h1>
        <p className="mt-5 max-w-3xl text-slate-600">
          Since 1993, Inventive Engineering Solution has delivered engineered electrical systems across Pakistan. Our emphasis on quality, safety, and on-time delivery has earned long-term partnerships with utilities and industrial clients.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Mission</h2>
            <p className="mt-3 text-slate-600">To supply dependable electrical infrastructure through engineering excellence, tested quality, and responsive support.</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Leadership Focus</h2>
            <p className="mt-3 text-slate-600">Management prioritizes safety culture, technical competence, and project transparency from design through commissioning.</p>
          </article>
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Factory & Capabilities</h2>
          <ul className="mt-4 grid gap-3 text-slate-600 sm:grid-cols-2">
            <li>Dedicated assembly lines for MV/LV switchgear</li>
            <li>Routine and acceptance testing with documented QA checklists</li>
            <li>Skilled workforce for fabrication, wiring, and final integration</li>
            <li>Manufacturing capacity for parallel multi-project execution</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-900">Company Timeline</h2>
          <ol className="mt-5 space-y-4">
            {timeline.map((item) => (
              <li key={item.year} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase text-amber-600">{item.year}</p>
                <p className="mt-1 text-slate-700">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </LayoutWrapper>
    </section>
  );
}
