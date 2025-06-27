import { products } from "@wix/stores";

const ProductPrice = ({
  selectedVariants,
}: {
  selectedVariants: products.Variant | undefined;
}) => {
  const priceData = selectedVariants?.variant?.priceData;

  if (!priceData) return null;

  const isDiscounted =
    priceData.discountedPrice !== undefined &&
    priceData.discountedPrice !== 0 &&
    priceData.discountedPrice !== priceData.price;

  return (
    <p className="product-price py-6 my-3 border-t border-b">
      <span
        className={`product-price__old font-semibold ${
          isDiscounted && "line-through text-sm"
        } text-gray-600 mr-2`}
      >
        {priceData?.currency} {priceData?.price}
      </span>
      {isDiscounted && (
        <span className="product-price__new font-semibold">
          {priceData?.currency} {priceData.discountedPrice}
        </span>
      )}
    </p>
  );
};

export default ProductPrice;
