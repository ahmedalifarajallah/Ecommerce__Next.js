"use client";
import { products } from "@wix/stores";
import { useState } from "react";

const ProductQuantity = ({
  selectedVariants,
}: {
  selectedVariants: products.Variant | undefined;
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  const availableQuantity = selectedVariants?.stock?.quantity || 0;
  const inStock = selectedVariants?.stock?.inStock && availableQuantity > 0;

  const increaseQuantity = () => {
    if (!inStock || quantity >= availableQuantity) return;
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (!inStock || quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  return (
    <div className="product-quantity my-4 select-none">
      <p className="font-medium mb-2">Quantity</p>

      {inStock ? (
        <div className="flex items-center gap-4">
          {/* Quantity Controls */}
          <div className="flex items-center rounded-full bg-gray-100 px-4 py-2 font-semibold">
            <button
              onClick={decreaseQuantity}
              disabled={quantity === 1}
              className={`w-6 h-6 flex items-center justify-center text-lg rounded-full transition-colors ${
                quantity === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-primary hover:bg-primary hover:text-white cursor-pointer"
              }`}
              aria-label="Decrease quantity"
            >
              -
            </button>

            <span className="px-4 font-medium">{quantity}</span>

            <button
              onClick={increaseQuantity}
              disabled={quantity === availableQuantity}
              className={`w-6 h-6 flex items-center justify-center text-lg rounded-full transition-colors ${
                quantity === availableQuantity
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-primary hover:bg-primary hover:text-white cursor-pointer"
              }`}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          {/* Stock Message */}
          <span className="text-xs text-gray-500">
            Only{" "}
            <span
              className={`font-semibold ${
                availableQuantity <= 5
                  ? "text-red-600"
                  : availableQuantity <= 10
                  ? "text-amber-600"
                  : "text-green-600"
              }`}
            >
              {availableQuantity} left
            </span>
            ! Don&apos;t miss out.
          </span>
        </div>
      ) : (
        <p className="text-sm text-red-600 font-medium">Out of stock</p>
      )}
    </div>
  );
};

export default ProductQuantity;
