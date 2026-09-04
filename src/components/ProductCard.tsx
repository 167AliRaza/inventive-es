import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <Image src={product.image} alt={product.name} width={800} height={450} className="h-44 w-full object-cover" loading="lazy" />
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">{product.category}</p>
        <h3 className="mt-2 text-lg font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-2 text-sm text-slate-600">{product.summary}</p>
        <Link href={`/products/${product.slug}`} className="mt-4 inline-flex text-sm font-semibold text-slate-900 hover:text-amber-600">
          View details →
        </Link>
      </div>
    </article>
  );
}
