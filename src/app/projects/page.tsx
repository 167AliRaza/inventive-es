import type { Metadata } from "next";
import Image from "next/image";
import LayoutWrapper from "@/components/LayoutWrapper";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies and client project highlights delivered by Inventive Engineering Solution.",
};

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <LayoutWrapper>
        <h1 className="text-4xl font-bold text-slate-900">Projects & Case Studies</h1>
        <p className="mt-4 max-w-3xl text-slate-600">Selected deployments across utilities, process industries, and mission-critical infrastructure.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <Image src={project.image} alt={project.title} width={800} height={480} className="h-44 w-full object-cover" loading="lazy" />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-slate-900">{project.title}</h2>
                <p className="mt-1 text-sm text-slate-500">{project.location} • {project.year}</p>
                <p className="mt-3 text-sm text-slate-600">{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
