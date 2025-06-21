import FeaturedProducts from "@/components/Products/FeaturedProducts";
import NewProducts from "@/components/Products/NewProducts";
import CategorySlider from "@/components/Slider/CategorySlider";
// import MainSlider from "@/components/Slider/MainSlider";
import MainSlider from "@/components/Slider/MainSlider";

const HomePage = () => {
  return (
    <>
      <MainSlider />
      <FeaturedProducts />
      <CategorySlider />
      <NewProducts />
    </>
  );
};

export default HomePage;
