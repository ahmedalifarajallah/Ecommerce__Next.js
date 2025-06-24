import Banner from "@/components/Banner";
import ProductsFilter from "@/components/Products/ProductsFilter";
import ProductsSection from "@/components/Products/ProductsSection";
import { Suspense } from "react";

const ProductsListPage = () => {
  return (
    <div className="container">
      <Banner />
      <ProductsFilter />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsSection
          title="All Products For You"
          categoryId={process.env.WIX_All_PRODUCTS_COLLECTION_ID!}
        />
      </Suspense>
    </div>
  );
};

export default ProductsListPage;
