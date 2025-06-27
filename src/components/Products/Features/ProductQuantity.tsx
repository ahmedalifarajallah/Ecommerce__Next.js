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

  const increaseQuantity = () => {
    if (quantity >= availableQuantity) return;
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  return (
    <div className="product-quantity my-4 select-none">
      <p className="font-medium mb-2">Quantity</p>

      <div className="flex items-center gap-4">
        {/* Quantity controls */}
        <div className="flex items-center rounded-full bg-gray-100 px-4 py-2 font-semibold">
          {/* Decrease Button */}
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

          {/* Quantity Display */}
          <span className="px-4 font-medium">{quantity}</span>

          {/* Increase Button */}
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

        {/* Stock message */}
        {availableQuantity > 0 && (
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
        )}
      </div>
    </div>
  );
};

export default ProductQuantity;
