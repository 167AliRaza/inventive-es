import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
