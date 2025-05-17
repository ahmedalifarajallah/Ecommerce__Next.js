import Image from "next/image";
import React from "react";

const ProductGallery = () => {
  return (
    <div className="product-gallery flex flex-col gap-4 px-4">
      {/* Main Image */}
      <div className="main-image relative w-full h-96">
        <Image
          src="/product.png"
          alt="Product-Img"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-md"
        />
      </div>
      {/* Remain Images */}
      <div className="remain-images flex gap-4 justify-between w-full">
        <div className="relative h-24 w-1/4 rounded-md overflow-hidden">
          <Image
            src="/product.png"
            alt="Product-Img"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </div>
        <div className="relative h-24 w-1/4 rounded-md overflow-hidden">
          <Image
            src="/product.png"
            alt="Product-Img"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </div>
        <div className="relative h-24 w-1/4 rounded-md overflow-hidden">
          <Image
            src="/product.png"
            alt="Product-Img"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </div>
        <div className="relative h-24 w-1/4 rounded-md overflow-hidden">
          <Image
            src="/product.png"
            alt="Product-Img"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
