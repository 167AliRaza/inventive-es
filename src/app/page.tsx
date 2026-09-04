import Script from "next/script";
import Link from "next/link";
import Hero from "@/components/Hero";
import LayoutWrapper from "@/components/LayoutWrapper";
import ServiceCard from "@/components/ServiceCard";
import ProductList from "@/components/ProductList";
import ClientsCarousel from "@/components/ClientsCarousel";
import CertificationsGrid from "@/components/CertificationsGrid";
import Locations from "@/components/Locations";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: siteConfig.addresses.map((address) => ({
    "@type": "PostalAddress",
    addressLocality: address.city,
    streetAddress: `${address.line1}, ${address.line2}`,
    addressCountry: "PK",
  })),
  sameAs: siteConfig.socialLinks.map((item) => item.href),
};

export default function Home() {
  return (
    <>
      <Script id="organization-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Hero />

      <section className="py-16">
        <LayoutWrapper>
          <h2 className="text-3xl font-bold text-slate-900">Electrical Solutions Portfolio</h2>
          <p className="mt-3 max-w-2xl text-slate-600">Manufacturing-backed solutions designed for utilities, EPC contractors, and large-scale industrial users.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard title="Packaged Substations" description="Turnkey, tested substation modules for fast site deployment." href="/products/packaged-substations" />
            <ServiceCard title="MV Switchgear" description="Protection-oriented medium voltage systems for reliable operation." href="/products/mv-switchgear" />
            <ServiceCard title="LV Panels" description="Scalable distribution and motor control panels for industrial loads." href="/products/lv-panels" />
          </div>
        </LayoutWrapper>
      </section>

      <section className="bg-white py-16">
        <LayoutWrapper>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Featured Products</h2>
              <p className="mt-2 text-slate-600">Explore our flagship categories with compliance-focused designs.</p>
            </div>
            <Link href="/products" className="text-sm font-semibold text-amber-600 hover:text-amber-700">View all →</Link>
          </div>
          <ProductList />
        </LayoutWrapper>
      </section>

      <section className="py-16">
        <LayoutWrapper>
          <h2 className="text-3xl font-bold text-slate-900">Why Choose Us</h2>
          <p className="mt-3 max-w-3xl text-slate-600">Utility-facing approvals, quality assurance, and robust manufacturing processes support every delivery.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {["Since 1993 engineering heritage", "Quality and FAT documentation", "Nationwide support in major cities"].map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="font-semibold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <CertificationsGrid />
          </div>
        </LayoutWrapper>
      </section>

      <section className="bg-white py-16">
        <LayoutWrapper>
          <h2 className="text-3xl font-bold text-slate-900">Recent Projects</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.slug} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{project.location} • {project.year}</p>
                <p className="mt-3 text-sm text-slate-600">{project.summary}</p>
              </article>
            ))}
          </div>
        </LayoutWrapper>
      </section>

      <section className="py-16">
        <LayoutWrapper>
          <h2 className="text-3xl font-bold text-slate-900">Trusted by Industrial Clients</h2>
          <p className="mt-3 text-slate-600">Long-term delivery partnerships across utilities and private industry.</p>
          <div className="mt-8">
            <ClientsCarousel />
          </div>
        </LayoutWrapper>
      </section>

      <section className="bg-white py-16">
        <LayoutWrapper>
          <h2 className="text-3xl font-bold text-slate-900">Our Locations</h2>
          <p className="mt-3 text-slate-600">Regional presence for responsive technical and after-sales support.</p>
          <div className="mt-8">
            <Locations />
          </div>
        </LayoutWrapper>
      </section>

      <section className="py-16">
        <LayoutWrapper>
          <div className="rounded-2xl bg-slate-900 p-8 text-white sm:p-12">
            <h2 className="text-3xl font-bold">Request a quotation, technical datasheet, or factory visit.</h2>
            <p className="mt-3 text-slate-200">Our engineering team is ready to support your project requirements.</p>
            <Link href="/contact" className="mt-6 inline-flex rounded-md bg-amber-500 px-5 py-3 font-semibold text-slate-950 hover:bg-amber-400">
              Get a Quote
            </Link>
          </div>
        </LayoutWrapper>
      </section>
    </>
  );
}
