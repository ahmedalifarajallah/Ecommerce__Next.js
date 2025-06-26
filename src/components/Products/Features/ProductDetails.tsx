"use client";
import { products } from "@wix/stores";
import ProductColors from "./ProductColors";
import ProductQuantity from "./ProductQuantity";
import ProductSizes from "./ProductSizes";
import ProductPrice from "./ProductPrice";
import ProductAdditionalInfo from "./ProductAdditionalInfo";
import DOMPurify from "isomorphic-dompurify";
import { useState } from "react";

const ProductDetails = ({ product }: { product: products.Product }) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  } | null>({});
  const variants = product.variants || [];

  const handleOptionsSelected = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };

  return (
    <div className="product-details px-2 lg:px-4 flex flex-col">
      {/* Product Title */}
      <h1 className="product-title text-2xl font-semibold">{product.name}</h1>
      {/* Product Description */}
      {product.description && (
        <div
          className="product-description my-3 text-gray-600 text-sm"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(product.description),
          }}
        ></div>
      )}
      {/* Product Price */}
      <ProductPrice
        priceData={product?.priceData}
        discount={product?.discount}
      />
      {/* Product Colors */}
      <ProductColors
        productColors={product?.productOptions || []}
        handleSelectedColor={handleOptionsSelected}
        selectedOptions={selectedOptions}
        isVariantInStock={isVariantInStock}
      />
      {/* Product Sizes */}
      <ProductSizes
        productSizes={product?.productOptions || []}
        handleSelectedSize={handleOptionsSelected}
        selectedOptions={selectedOptions}
        isVariantInStock={isVariantInStock}
      />
      {/* Product Quantity */}
      <ProductQuantity />
      {/* Product Buttons */}
      <div className="product-btns my-3 flex items-center gap-4 text-sm border-b pb-6">
        <button className="rounded-full px-4 py-2 bg-primary text-white hover:bg-transparent hover:text-primary transition-colors duration-300 ease-in-out border border-primary">
          Add to cart
        </button>
        <button className="rounded-full px-4 py-2 bg-primary text-white hover:bg-transparent hover:text-primary transition-colors duration-300 ease-in-out border border-primary">
          Buy Now
        </button>
      </div>
      {/* Product Additional Info */}
      {product.additionalInfoSections && (
        <div className="product-other-info flex flex-col gap-4 py-4">
          {product.additionalInfoSections &&
            product.additionalInfoSections.map((info) => (
              <ProductAdditionalInfo additionalInfo={info} key={info.title} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
