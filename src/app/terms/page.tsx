import type { Metadata } from "next";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms and conditions for using the Inventive Engineering Solution website.",
};

export default function TermsPage() {
  return (
    <section className="py-16">
      <LayoutWrapper>
        <h1 className="text-4xl font-bold text-slate-900">Terms of Use</h1>
        <p className="mt-4 max-w-3xl text-slate-600">All product information is for reference and subject to formal quotation, contract, and project specifications.</p>
      </LayoutWrapper>
    </section>
  );
}
