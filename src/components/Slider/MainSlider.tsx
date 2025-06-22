"use client";
import Image from "next/image";
import Link from "next/link";
import { sliderData } from "@/data/mainCarousel";
import { ISliderItem } from "@/interfaces/mainSlider";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./pagination.css";

// get the slider data
const sliders: ISliderItem[] = sliderData;

const MainSlider = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="main-swiper"
    >
      {/* Slides */}
      {sliders.map((slide, index) => (
        <SwiperSlide
          style={{
            width: "100vw !important",
            height: "calc(100vh - 5rem) !important",
          }}
          key={slide.id}
        >
          <div
            className={`h-[calc(100vh-5rem)] w-full flex items-center`}
            style={{ backgroundColor: slide.bgColor }}
          >
            <div className="w-full h-full flex flex-col sm:flex-row items-center ">
              {/* Content */}
              <div className="w-full sm:w-1/2 h-full flex flex-col justify-center items-center gap-12  text-center z-10 px-6 ">
                <p className="text-3xl md:text-4xl">{slide.description}</p>
                <h1 className="text-xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <Link
                  href={slide.link}
                  className="bg-black text-white px-8 py-3 rounded-md text-lg hover:bg-gray-800 transition-colors"
                >
                  {slide.buttonText}
                </Link>
              </div>

              {/* Image */}
              <div className="h-full w-full sm:w-1/2">
                <div className="relative w-full h-full ">
                  <Image
                    src={slide.imageSrc}
                    alt={slide.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSlider;
