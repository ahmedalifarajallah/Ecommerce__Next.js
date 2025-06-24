import { products } from "@wix/stores";

const ProductPrice = ({
  priceData,
  discount,
}: {
  priceData: products.PriceData | undefined;
  discount: products.Discount | undefined;
}) => {
  const isDiscounted =
    discount && (discount.value !== 0 || discount.type !== "NONE");

  const finalPrice = isDiscounted ? priceData?.discountedPrice : null;
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
          {priceData?.currency} {finalPrice}
        </span>
      )}
    </p>
  );
};

export default ProductPrice;
