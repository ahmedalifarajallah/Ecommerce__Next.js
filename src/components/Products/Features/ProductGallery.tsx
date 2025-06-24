import { products } from "@wix/stores";
import Image from "next/image";
import React from "react";

// const thumbnails = [
//   {
//     id: 1,
//     img: "/product.png",
//     alt: "Product-Img",
//   },
//   {
//     id: 2,
//     img: "/product.png",
//     alt: "Product-Img",
//   },
//   {
//     id: 3,
//     img: "/product.png",
//     alt: "Product-Img",
//   },
//   {
//     id: 4,
//     img: "/product.png",
//     alt: "Product-Img",
//   },
// ];

const ProductGallery = ({ media }: { media: products.Product["media"] }) => {
  return (
    <div className="product-gallery flex flex-col gap-2 lg:gap-4 px-2 lg:px-4">
      {/* Main Image */}
      <div className="main-image relative w-full h-80 lg:h-96">
        {media?.mainMedia && (
          <Image
            src={media?.mainMedia?.image?.url || ""}
            alt={media?.mainMedia?.image?.altText || "Product-Img"}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        )}
      </div>
      {/* Remain Images */}
      <div className="remain-images flex gap-2 lg:gap-4 justify-between w-full">
        {media?.items &&
          media?.items.map((img) => (
            <div
              key={img._id}
              className="relative h-20 w-1/4 rounded-md overflow-hidden cursor-pointer"
            >
              <Image
                src={img.image?.url || ""}
                alt={img.image?.altText || "Product-Img"}
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
