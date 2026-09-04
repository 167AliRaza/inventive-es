import type { Metadata } from "next";
import LayoutWrapper from "@/components/LayoutWrapper";
import ProductList from "@/components/ProductList";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Inventive Engineering Solution product categories including packaged substations, MV switchgear, LV panels, and dry type transformers.",
};

export default function ProductsPage() {
  return (
    <section className="py-16">
      <LayoutWrapper>
        <h1 className="text-4xl font-bold text-slate-900">Products & Solutions</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          End-to-end electrical product lines for utility, industrial, and infrastructure projects.
        </p>
        <div className="mt-10">
          <ProductList />
        </div>
      </LayoutWrapper>
    </section>
  );
}
