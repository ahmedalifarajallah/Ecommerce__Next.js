"use client";
import { categoriesData } from "@/data/categories";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import CategoryBox from "../Category/CategoryBox";

const CategorySlider = () => {
  const categories = categoriesData;
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        0: { slidesPerView: 2, spaceBetween: 10 },
        720: { slidesPerView: 3, spaceBetween: 20 },
        960: { slidesPerView: 4, spaceBetween: 20 },
      }}
      className="category-swiper w-full"
    >
      {/* Slides */}
      {categories.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <div className={`categories-container `}>
            <div className="categories-slider pb-4">
              <CategoryBox category={slide} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategorySlider;
