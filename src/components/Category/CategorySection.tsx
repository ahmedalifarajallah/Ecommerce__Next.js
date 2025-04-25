"use client";
import { useRef, useState, useEffect } from "react";
import { ICategory } from "@/interfaces/categoryInterface";
import SectionTitle from "../SectionTitle";
import CategoryBox from "./CategoryBox";
import { categoriesData } from "@/data/categories";
import RightArrow from "../RightArrow";
import LeftArrow from "../LeftArrow";
// import { ChevronLeft, ChevronRight } from "lucide-react";

const CategorySection = () => {
  const originalCategories = categoriesData;
  const duplicatedCategories = [...originalCategories, ...originalCategories];
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoPlayPaused, setAutoPlayPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const scrollAmount = useRef(300);
  const isScrolling = useRef(false);

  // Calculate scroll amount based on container width
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => {
      scrollAmount.current = container.offsetWidth * 0.4;
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Infinite scroll handler
  const handleInfiniteScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const maxScroll = container.scrollWidth / 2;

    if (container.scrollLeft >= maxScroll) {
      container.scrollLeft = container.scrollLeft - maxScroll;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft = maxScroll;
    }
  };

  // Auto-play setup
  useEffect(() => {
    if (!autoPlayPaused) {
      intervalRef.current = setInterval(() => {
        if (!isScrolling.current && containerRef.current) {
          isScrolling.current = true;
          containerRef.current.scrollBy({
            left: scrollAmount.current,
            behavior: "smooth",
          });
          setTimeout(() => {
            handleInfiniteScroll();
            isScrolling.current = false;
          }, 500);
        }
      }, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlayPaused]);

  // Scroll event listener
  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => handleInfiniteScroll();

    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  // Pause auto-play on interaction
  const pauseAutoPlay = (duration = 5000) => {
    setAutoPlayPaused(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeout(() => setAutoPlayPaused(false), duration);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    pauseAutoPlay();
    if (containerRef.current) {
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    pauseAutoPlay();
    const touch = e.touches[0];
    setStartX(touch.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const touch = e.touches[0];
    const x = touch.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  // Manual scroll
  const scroll = (direction: "left" | "right") => {
    pauseAutoPlay();
    if (containerRef.current) {
      const amount =
        direction === "right" ? scrollAmount.current : -scrollAmount.current;
      containerRef.current.scrollBy({
        left: amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="my-16 relative group"
      onMouseEnter={() => setAutoPlayPaused(true)}
      onMouseLeave={() => setAutoPlayPaused(false)}
    >
      <div className="container">
        <SectionTitle title="Categories" />
      </div>

      {/* Navigation Arrows */}
      <div className="hidden md:block">
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Scroll left"
        >
          <LeftArrow />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Scroll right"
        >
          <RightArrow />
        </button>
      </div>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        className={`categories-container px-4 overflow-x-auto scrollbar-hide relative ${
          isDragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={stopDragging}
      >
        <div className="categories-slider flex gap-4 md:gap-6 pb-4">
          {duplicatedCategories.map((category, index) => (
            <CategoryBox
              key={`${category.id}-${index}`}
              category={category}
              isDragging={isDragging}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
