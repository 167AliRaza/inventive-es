import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import LayoutWrapper from "@/components/LayoutWrapper";
import Locations from "@/components/Locations";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Inventive Engineering Solution for quotations, technical datasheets, and factory visits.",
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <LayoutWrapper>
        <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
        <p className="mt-4 max-w-3xl text-slate-600">Request a quotation, technical datasheet, or factory visit.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <ContactForm />
            <p className="mt-4 text-sm text-slate-600">
              Prefer email? <a href={`mailto:${siteConfig.salesEmail}`} className="font-medium text-amber-700 hover:text-amber-800">Send your enquiry directly.</a>
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Direct Channels</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  Phone: <a href={`tel:${siteConfig.hotline}`} className="font-medium hover:text-amber-700">{siteConfig.hotline}</a>
                </li>
                <li>
                  Email: <a href={`mailto:${siteConfig.email}`} className="font-medium hover:text-amber-700">{siteConfig.email}</a>
                </li>
              </ul>
            </div>
            <Locations />
            <iframe
              title="Inventive Engineering Solution locations map"
              src="https://maps.google.com/maps?q=Lahore%20Pakistan&t=&z=5&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              className="h-64 w-full rounded-xl border border-slate-200"
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
