import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function CertificationsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {siteConfig.certifications.map((certification) => (
        <a
          key={certification.name}
          href={certification.file}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <Image
            src={certification.image}
            alt={`${certification.name} certificate`}
            width={400}
            height={240}
            className="h-32 w-full rounded-md object-cover"
            loading="lazy"
          />
          <p className="mt-3 text-sm font-semibold text-slate-900">{certification.name}</p>
        </a>
      ))}
    </div>
  );
}
