import { wixClientServer } from "@/lib/wixClientServer";
import SectionTitle from "../SectionTitle";
import ProductCard from "./ProductCard";
import { products } from "@wix/stores";
import Pagination from "./Features/Pagination";

interface ProductsSectionProps {
  title?: string;
  categoryId: string;
  limit?: number;
  searchParams?: any;
  withPagination?: boolean;
}

const ProductsSection: React.FC<ProductsSectionProps> = async ({
  title,
  categoryId,
  limit,
  searchParams,
  withPagination = false,
}) => {
  let products: products.Product[] = [];
  let result;
  const productsCountPerPage: number = 8;
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
      .limit(limit || productsCountPerPage)
      .skip(
        searchParams?.page
          ? searchParams?.page * (limit || productsCountPerPage)
          : 0
      );

    if (searchParams?.product_sort) {
      const [sortType, sortBy] = searchParams?.product_sort.split(" ");
      if (sortType === "asc") {
        productsQuery = productsQuery.ascending(sortBy);
      }
      if (sortType === "desc") {
        productsQuery = productsQuery.descending(sortBy);
      }
    }

    result = await productsQuery.find();
    products = (await productsQuery.find()).items || [];
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <>
      <section className="container my-16">
        <SectionTitle title={`${title} For You!` || "Products"} />
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {products.length > 0 &&
            products.map((product: products.Product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </section>
      {withPagination && (
        <Pagination
          currentPage={result?.currentPage || 0}
          hasPrev={result?.hasPrev()!}
          hasNext={result?.hasNext()!}
        />
      )}
    </>
  );
};

export default ProductsSection;
