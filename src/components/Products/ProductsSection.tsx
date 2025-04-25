import SectionTitle from "../SectionTitle";
import ProductCard from "./ProductCard";
import { IProduct } from "@/interfaces/productInterface";

interface ProductsSectionProps {
  products: IProduct[];
  title: string;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  products = [],
  title,
}) => {
  return (
    <section className="container my-16">
      <SectionTitle title={title || "Products"} />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default ProductsSection;
