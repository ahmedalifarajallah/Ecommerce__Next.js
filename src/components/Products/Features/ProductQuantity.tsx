"use client";
import { useState } from "react";

const ProductQuantity = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const availableQuantity = 10;

  const increaseQuantity = () => {
    if (quantity >= availableQuantity) setQuantity(availableQuantity);
    else setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity <= 1) setQuantity(1);
    else setQuantity(quantity - 1);
  };

  return (
    <div className="product-quantity my-3">
      <p className="product-quantity__title font-medium mb-2">Quantity</p>
      <div className="quantity flex items-center gap-4 py-2 px-4 rounded-full w-fit bg-gray-100 font-semibold">
        <span
          className="cursor-pointer"
          role="button"
          aria-label="minus"
          onClick={decreaseQuantity}
        >
          -
        </span>
        <span className="px-2 font-medium" aria-label="quantity">
          {quantity}
        </span>
        <span
          className="cursor-pointer"
          role="button"
          aria-label="plus"
          onClick={increaseQuantity}
        >
          +
        </span>
      </div>
    </div>
  );
};

export default ProductQuantity;
