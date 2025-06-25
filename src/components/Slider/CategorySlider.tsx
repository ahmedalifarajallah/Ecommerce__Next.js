"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import CategoryBox from "../Category/CategoryBox";
import useWixClient from "@/hooks/useWixClient";
import { collections } from "@wix/stores";
import { useEffect, useState } from "react";

const CategorySlider = () => {
  const [categories, setCategories] = useState<collections.Collection[]>([]);
  const wixClient = useWixClient();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await wixClient.collections.queryCollections().find();
        setCategories(res.items || []);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    getCategories();
  }, [wixClient.collections]);

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
      {categories
        .filter((cat) => cat.name !== "All Products")
        .map((slide, index) => (
          <SwiperSlide key={slide._id}>
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
