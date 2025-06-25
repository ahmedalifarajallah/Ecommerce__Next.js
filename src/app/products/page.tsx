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

  return (
    <div className="container">
      <Banner />
      <ProductsFilter />
      <Suspense fallback={<div>Loading...</div>}>
        {collection?.collection && (
          <ProductsSection
            title={collection.collection.name ?? "All Products For You"}
            categoryId={
              collection.collection._id ??
              process.env.WIX_All_PRODUCTS_COLLECTION_ID!
            }
          />
        )}
      </Suspense>
    </div>
  );
};

export default ProductsListPage;
