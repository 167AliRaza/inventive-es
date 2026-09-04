import { siteConfig } from "@/data/site";

export default function Locations() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {siteConfig.addresses.map((address) => (
        <article key={address.city} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">{address.city}</h3>
          <p className="mt-2 text-sm text-slate-600">{address.line1}</p>
          <p className="text-sm text-slate-600">{address.line2}</p>
          <a href={`tel:${address.phone}`} className="mt-3 block text-sm font-medium text-slate-800 hover:text-amber-600">
            {address.phone}
          </a>
          <a href={address.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-sm font-semibold text-amber-600 hover:text-amber-700">
            View on map →
          </a>
        </article>
      ))}
    </div>
  );
}
