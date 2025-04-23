import SectionTitle from "../SectionTitle";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  return (
    <section className="container my-16">
      <SectionTitle title="Products List" />
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductsList;
