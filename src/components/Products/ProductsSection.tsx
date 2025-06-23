import { wixClientServer } from "@/lib/wixClientServer";
import SectionTitle from "../SectionTitle";
import ProductCard from "./ProductCard";
import { products } from "@wix/stores";

interface ProductsSectionProps {
  title?: string;
  categoryId: string;
  limit?: number;
}

const ProductsSection: React.FC<ProductsSectionProps> = async ({
  title,
  categoryId,
  limit,
}) => {
  let products: products.Product[] = [];
  const productsCountPerPage: number = 20;
  try {
    const wixClient = await wixClientServer();
    products =
      (
        await wixClient.products
          .queryProducts()
          .eq("collectionIds", categoryId)
          .limit(limit || productsCountPerPage)
          .find()
      ).items || [];
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <section className="container my-16">
      <SectionTitle title={title || "Products"} />
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products.length > 0 &&
          products.map((product: products.Product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default ProductsSection;
