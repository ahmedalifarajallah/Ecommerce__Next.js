import React from "react";

const ProductDetails = () => {
  return (
    <div className="product-details px-2 lg:px-4 flex flex-col">
      {/* Product Title */}
      <h1 className="product-title text-2xl font-semibold">Digital Incense</h1>
      {/* Product Description */}
      <p className="product-description my-3 text-gray-600 text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
        ipsam, minus aut doloremque perspiciatis ipsa quam aspernatur explicabo
        esse nulla labore sapiente at in aperiam, sequi amet enim odit deleniti?
        Aliquid nam incidunt fugiat possimus in iste non, temporibus fuga
        provident esse ea illum itaque qui, accusantium sapiente nobis
      </p>
      {/* Product Price */}
      <p className="product-price py-6 my-3 border-t border-b">
        <span className="product-price__old font-semibold line-through text-sm text-gray-600 mr-2">
          $45
        </span>
        <span className="product-price__new font-semibold">$40.5</span>
      </p>
      {/* Product Colors */}
      <div className="product-colors my-3 ">
        <p className="product-colors__title font-medium mb-2">Choose a Color</p>
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-primary cursor-pointer hover:scale-110 hover:ring-2 hover:ring-primary/50 transition-all duration-200"></div>
          <div className="w-6 h-6 rounded-full bg-primary cursor-pointer hover:scale-110 hover:ring-2 hover:ring-primary/50 transition-all duration-200"></div>
          <div className="w-6 h-6 rounded-full bg-primary cursor-pointer hover:scale-110 hover:ring-2 hover:ring-primary/50 transition-all duration-200"></div>
        </div>
      </div>
      {/* Product Sizes */}
      <div className="product-sizes my-3">
        <p className="product-sizes__title font-medium mb-2">Choose a Size</p>
        <div className="flex gap-4">
          <div className="rounded-[4px] ring px-[12px] py-[2px] text-xs ring-primary ring-[1px] text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors duration-200">
            small
          </div>
          <div className="rounded-[4px] ring px-[12px] py-[2px] text-xs ring-primary ring-[1px] text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors duration-200">
            Medium
          </div>
          <div className="rounded-[4px] ring px-[12px] py-[2px] text-xs ring-primary ring-[1px] text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors duration-200">
            Large
          </div>
        </div>
      </div>
      {/* Product Quantity */}
      <div className="product-quantity my-3">
        <p className="product-quantity__title font-medium mb-2">Quantity</p>
        <div className="quantity flex items-center gap-4 py-2 px-4 rounded-full w-fit bg-gray-100 font-semibold">
          <span className="cursor-pointer">-</span>
          <span className="px-2 font-medium">2</span>
          <span className="cursor-pointer">+</span>
        </div>
      </div>
      {/* Product Buttons */}
      <div className="product-btns my-3 flex items-center gap-4 text-sm border-b pb-6">
        <button className="rounded-full px-4 py-2 bg-primary text-white hover:bg-transparent hover:text-primary transition-colors duration-300 ease-in-out border border-primary">
          Add to cart
        </button>
        <button className="rounded-full px-4 py-2 bg-primary text-white hover:bg-transparent hover:text-primary transition-colors duration-300 ease-in-out border border-primary">
          Buy Now
        </button>
      </div>
      {/* Product Others Info */}
      <div className="product-other-info flex flex-col gap-4 py-4">
        {/* Product Info */}
        <div className="product-info">
          <h2 className="product-info__title font-semibold">Product Info</h2>
          <p className="product-info__description my-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ducimus ex praesentium molestiae asperiores voluptate, ipsa vel modi
            tempora pariatur ipsam unde commodi dolore perferendis minima
            voluptas officia rem quibusdam.
          </p>
        </div>
        {/* Return & Refund Policy */}
        <div className="return-refund-policy">
          <h2 className="return-refund-policy__title font-semibold">
            Return & Refund Policy
          </h2>
          <p className="return-refund-policy__description my-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ducimus ex praesentium molestiae asperiores voluptate, ipsa vel modi
            tempora pariatur ipsam unde commodi dolore perferendis minimaipsa
            vel modi tempora pariatur ipsam unde commodi dolore perferendisipsa
            vel modi tempora pariatur ipsam unde commodi dolore perferendis
            minima minima voluptas officia rem quibusdam.
          </p>
        </div>
        {/* Shipping Info */}
        <div className="shipping-info">
          <h2 className="shipping-info__title font-semibold">Shipping Info</h2>
          <p className="shipping-info__description my-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ducimus ex praesentium molestiae asperiores voluptate, ipsa vel modi
            tempora pariatur ipsam unde commodi dolore perferendis minima
            voluptas officia rem quibusdam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
