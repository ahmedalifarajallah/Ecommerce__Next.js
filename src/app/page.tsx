import ProductsSection from "@/components/Products/ProductsSection";
import CategorySlider from "@/components/Slider/CategorySlider";
import MainSlider from "@/components/Slider/MainSlider";

const HomePage = () => {
  return (
    <>
      <MainSlider />
      <ProductsSection
        title="Featured Products"
        categoryId={process.env.WIX_MEN_COLLECTION_ID!}
        limit={4}
      />
      <CategorySlider />
      <ProductsSection
        title="New Products"
        categoryId={process.env.WIX_WOMEN_COLLECTION_ID!}
        limit={4}
      />
    </>
  );
};

export default HomePage;
