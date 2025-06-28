import { wixClientServer } from "@/lib/wixClientServer";
import SectionTitle from "../SectionTitle";
import ProductCard from "./ProductCard";
import { products } from "@wix/stores";

interface ProductsSectionProps {
  title?: string;
  categoryId: string;
  limit?: number;
  searchParams?: any;
}

const ProductsSection: React.FC<ProductsSectionProps> = async ({
  title,
  categoryId,
  limit,
  searchParams,
}) => {
  let products: products.Product[] = [];
  const productsCountPerPage: number = 20;
  try {
    const wixClient = await wixClientServer();
    let productsQuery = wixClient.products
      .queryProducts()
      .startsWith("name", searchParams?.name || "")
      .eq("collectionIds", categoryId)
      .hasSome(
        "productType",
        searchParams?.productType || ["physical", "digital"]
      )
      .gt("priceData.price", searchParams?.min_price || 0)
      .lt("priceData.price", searchParams?.max_price || 999999999)
      .limit(limit || productsCountPerPage);

    if (searchParams?.product_sort) {
      const [sortType, sortBy] = searchParams?.product_sort.split(" ");
      if (sortType === "asc") {
        productsQuery = productsQuery.ascending(sortBy);
      }
      if (sortType === "desc") {
        productsQuery = productsQuery.descending(sortBy);
      }
    }

    products = (await productsQuery.find()).items || [];
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <section className="container my-16">
      <SectionTitle title={`${title} For You!` || "Products"} />
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
