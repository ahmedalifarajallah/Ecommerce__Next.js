import CategorySection from "@/components/Category/CategorySection";
import FeaturedProducts from "@/components/Products/FeaturedProducts";
import NewProducts from "@/components/Products/NewProducts";
// import MainSlider from "@/components/Slider/MainSlider";
import MainSlider from "@/components/Slider/MainSlider";

const HomePage = () => {
  return (
    <>
      <MainSlider />
      <FeaturedProducts />
      <CategorySection />
      <NewProducts />
    </>
  );
};

export default HomePage;
