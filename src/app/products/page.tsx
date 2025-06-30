import Banner from "@/components/Banner";
import ProductsFilter from "@/components/Products/ProductsFilter";
import ProductsSection from "@/components/Products/ProductsSection";
import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense } from "react";

const ProductsListPage = async ({ searchParams }: any) => {
  const { category } = searchParams;
  let collection;
  try {
    const wixClient = await wixClientServer();
    collection = await wixClient.collections.getCollectionBySlug(
      category || "all-products"
    );
  } catch (error) {
    console.log(error);
  }
  // **TODO **Add the Lowest price to the product
  return (
    <div className="container">
      <Banner />
      <ProductsFilter />
      <Suspense fallback={<div>Loading...</div>}>
        {collection?.collection && (
          <ProductsSection
            searchParams={searchParams}
            title={collection.collection.name ?? "All Products For You"}
            categoryId={
              collection.collection._id ??
              process.env.WIX_All_PRODUCTS_COLLECTION_ID!
            }
            withPagination={true}
            limit={8}
          />
        )}
      </Suspense>
    </div>
  );
};

export default ProductsListPage;
