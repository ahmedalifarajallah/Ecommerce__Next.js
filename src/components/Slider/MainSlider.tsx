"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { sliderData } from "@/data/mainCarousel";
import { ISliderItem } from "@/interfaces/mainSlider";

// get the slider data
const sliders: ISliderItem[] = sliderData;

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliders.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliders.length) % sliders.length);
  };

  return (
    <div
      className={`relative w-[calc(100vw*${sliders.length})] h-[calc(100vh-5rem)] overflow-hidden`}
    >
      {/* Slides */}
      {sliders.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 w-full h-full transition-all duration-1000 ease-in-out flex items-center ${slide.bgColor}`}
          style={{
            transform: `translateX(${(index - currentSlide) * 100}%)`,
            zIndex: index === currentSlide ? 10 : 5,
          }}
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col md:flex-row items-center">
            {/* Content */}
            <div className="w-full md:w-1/2 text-center md:text-left z-10 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-xl mb-8 max-w-md">{slide.description}</p>
              <Link
                href={slide.link}
                className="bg-black text-white px-8 py-3 rounded-md text-lg hover:bg-gray-800 transition-colors"
              >
                {slide.buttonText}
              </Link>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <Image
                  src={slide.imageSrc}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dots indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {sliders.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-black" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainSlider;
