import Banner from "@/components/Banner";
import ProductsFilter from "@/components/Products/ProductsFilter";
import ProductsSection from "@/components/Products/ProductsSection";

const ProductsListPage = () => {
  return (
    <div className="container">
      <Banner />
      <ProductsFilter />
      <ProductsSection
        title="All Products For You"
        categoryId={process.env.WIX_All_PRODUCTS_COLLECTION_ID!}
      />
    </div>
  );
};

export default ProductsListPage;
