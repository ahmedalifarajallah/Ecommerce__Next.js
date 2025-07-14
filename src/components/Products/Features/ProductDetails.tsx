"use client";
import { products } from "@wix/stores";
import ProductColors from "./ProductColors";
import ProductQuantity from "./ProductQuantity";
import ProductSizes from "./ProductSizes";
import ProductPrice from "./ProductPrice";
import ProductAdditionalInfo from "./ProductAdditionalInfo";
import DOMPurify from "isomorphic-dompurify";
import { useEffect, useMemo, useState } from "react";
import useWixClient from "@/hooks/useWixClient";
import { useCartStore } from "@/hooks/useCartStore";

const ProductDetails = ({ product }: { product: products.Product }) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const [selectedVariants, setSelectedVariants] = useState<products.Variant>();
  const variants = useMemo(() => product.variants || [], [product.variants]);
  const [quantity, setQuantity] = useState<number>(1);
  const wixClient = useWixClient();
  const { addItem } = useCartStore();

  // Find the variant with the lowest price initially
  const lowestPriceVariant = useMemo(() => {
    if (!product.variants || product.variants.length === 0) return undefined;

    return product.variants.reduce((lowest, current) => {
      const lowestPrice = lowest.variant?.priceData?.price ?? Infinity;
      const currentPrice = current.variant?.priceData?.price ?? Infinity;
      return currentPrice < lowestPrice ? current : lowest;
    });
  }, [product.variants]);

  // Find the variant that matches the selected options
  useEffect(() => {
    // Check if all required options are selected before finding the variant
    const requiredOptions = product.productOptions?.length || 0;
    // If not all required options are selected, select the variant with the lowest price
    if (Object.keys(selectedOptions).length < requiredOptions) {
      setSelectedVariants(lowestPriceVariant);
      return;
    }

    // Find the variant that matches the selected options
    const variant = variants.find((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value
      );
    });
    setSelectedVariants(variant);
  }, [
    selectedOptions,
    variants,
    lowestPriceVariant,
    product.productOptions?.length,
  ]);

  // Handle option selection
  const handleOptionsSelected = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  // Check if a variant is in stock
  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      // Check if the variant choices match the selected options and are in stock
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
      <ProductPrice selectedVariants={selectedVariants} />
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
      <ProductQuantity
        selectedVariants={selectedVariants}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      {/* Product Buttons */}
      <div className="product-btns my-3 flex items-center gap-4 text-sm border-b pb-6">
        <button
          onClick={() =>
            addItem(
              wixClient,
              product._id ?? "",
              selectedVariants?._id ?? "",
              quantity
            )
          }
          className="rounded-full px-4 py-2 bg-primary text-white hover:bg-transparent hover:text-primary transition-colors duration-300 ease-in-out border border-primary"
        >
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
