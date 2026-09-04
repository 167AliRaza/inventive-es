import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
      <Link href={href} className="mt-4 inline-flex text-sm font-semibold text-amber-600 hover:text-amber-700">
        Learn more →
      </Link>
    </article>
  );
}
