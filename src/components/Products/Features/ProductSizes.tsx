import { products } from "@wix/stores";

// const productSizes = [
//   {
//     size: "Small",
//   },
//   {
//     size: "Medium",
//   },
//   {
//     size: "Large",
//   },
//   {
//     size: "X-Large",
//   },
// ];

const ProductSizes = ({
  productSizes,
}: {
  productSizes: products.ProductOption[];
}) => {
  const sizes = productSizes.find((item) => item.name === "Size");

  if (!sizes) return null;

  return (
    <div className="product-sizes my-3">
      <p className="product-sizes__title font-medium mb-2">Choose a Size</p>
      <div className="flex gap-4">
        {sizes.choices &&
          sizes.choices.map((size, index) => (
            <div
              key={index}
              className="rounded-[4px] ring px-[12px] py-[2px] text-xs ring-primary ring-[1px] text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors duration-200"
            >
              {size.value}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductSizes;
