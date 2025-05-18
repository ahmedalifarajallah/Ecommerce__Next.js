import Image from "next/image";
import React from "react";

const thumbnails = [
  {
    id: 1,
    img: "/product.png",
    alt: "Product-Img",
  },
  {
    id: 2,
    img: "/product.png",
    alt: "Product-Img",
  },
  {
    id: 3,
    img: "/product.png",
    alt: "Product-Img",
  },
  {
    id: 4,
    img: "/product.png",
    alt: "Product-Img",
  },
];

const ProductGallery = () => {
  return (
    <div className="product-gallery flex flex-col gap-2 lg:gap-4 px-2 lg:px-4">
      {/* Main Image */}
      <div className="main-image relative w-full h-80 lg:h-96">
        <Image
          src="/product.png"
          alt="Product-Img"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{ objectFit: "cover" }}
          className="rounded-md"
        />
      </div>
      {/* Remain Images */}
      <div className="remain-images flex gap-2 lg:gap-4 justify-between w-full">
        {thumbnails.map((thumbnail) => (
          <div
            key={thumbnail.id}
            className="relative h-20 w-1/4 rounded-md overflow-hidden"
          >
            <Image
              src={thumbnail.img}
              alt={thumbnail.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              style={{ objectFit: "cover" }}
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
