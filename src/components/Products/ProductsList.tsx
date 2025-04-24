import { productsData } from "@/data/products";
import SectionTitle from "../SectionTitle";
import ProductCard from "./ProductCard";
import { IProduct } from "@/interfaces/productInterface";

const ProductsList = () => {
  const products: IProduct[] = productsData;
  return (
    <section className="container my-16">
      <SectionTitle title="Products List" />
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
