import Image from "next/image";
import React from "react";

const CartItem = () => {
  return (
    <div className="flex justify-between gap-4 my-4">
      <Image
        src={"/product.png"}
        alt="Product-Cart-Img"
        width={65}
        height={55}
        className="product-img__cart rounded-md object-cover"
      />
      <div className="product-info__cart flex-1">
        <div className="product-name-price__car">
          <div className="flex justify-between items-start gap-4">
            <div className="product-name__cart">Product Name</div>
            <div className="product-price__cart">$42.5</div>
          </div>
          <span className="text-sm text-gray-400">available</span>
        </div>
        <div className="product-quantity__cart flex justify-between items-center mt-3">
          <span className="text-gray-400">Qty: 1</span>
          <span className="cursor-pointer text-blue-600">Remove</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
