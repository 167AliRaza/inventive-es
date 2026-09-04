import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LayoutWrapper from "@/components/LayoutWrapper";
import { products } from "@/data/products";

type ProductDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductDetailPageProps): Metadata {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: product.name,
    description: product.summary,
    openGraph: {
      title: product.name,
      description: product.summary,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="py-16">
      <LayoutWrapper>
        <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/products" className="hover:text-slate-800">Products</Link> / <span className="text-slate-700">{product.name}</span>
        </nav>

        <h1 className="text-4xl font-bold text-slate-900">{product.name}</h1>
        <p className="mt-4 max-w-3xl text-slate-600">{product.intro}</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-2xl font-semibold text-slate-900">Technical Specifications</h2>
            <div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <tbody className="divide-y divide-slate-200 bg-white">
                  {product.specifications.map((spec) => (
                    <tr key={spec.label}>
                      <th className="w-1/3 bg-slate-50 px-4 py-3 text-left font-semibold text-slate-800">{spec.label}</th>
                      <td className="px-4 py-3 text-slate-600">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mt-8 text-lg font-semibold text-slate-900">Applications</h3>
            <ul className="mt-3 list-inside list-disc space-y-2 text-slate-600">
              {product.applications.map((application) => (
                <li key={application}>{application}</li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Downloads</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {product.downloads.map((download) => (
                  <li key={download.title}>
                    <a href={download.file} target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-800">
                      {download.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-slate-900 p-6 text-white shadow-sm">
              <h3 className="text-lg font-semibold">Need technical support?</h3>
              <p className="mt-2 text-sm text-slate-200">Share project details and get recommended configurations from our engineering team.</p>
              <Link href="/contact" className="mt-4 inline-flex rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-400">
                Send Enquiry
              </Link>
            </div>
          </aside>
        </div>
      </LayoutWrapper>
    </section>
  );
}
