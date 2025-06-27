import { products } from "@wix/stores";

const ProductSizes = ({
  productSizes,
  handleSelectedSize,
  selectedOptions,
  isVariantInStock,
}: {
  productSizes: products.ProductOption[];
  handleSelectedSize: (optionType: string, choice: string) => void;
  selectedOptions: { [key: string]: string } | null;
  isVariantInStock: (choices: { [key: string]: string }) => boolean;
}) => {
  const sizes = productSizes.find((item) => item.name === "Size");

  if (!sizes) return null;

  return (
    <div className="product-sizes my-3">
      <p className="product-sizes__title font-medium mb-2">Choose a Size</p>
      <div className="flex gap-4 flex-wrap">
        {sizes.choices &&
          sizes.choices.map((size) => {
            const disabled = !isVariantInStock({
              ...selectedOptions,
              [sizes.name!]: size.description!,
            });
            const selected = selectedOptions?.Size === size.description;

            return (
              <div
                key={size.value}
                className={`relative rounded-[4px] ring px-[10px] py-[3px] text-xs font-medium ring-primary ring-[1px] transition-all duration-200 select-none
              ${
                selected
                  ? "bg-primary text-white"
                  : "bg-transparent text-primary hover:bg-primary hover:text-white"
              }
              ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
              `}
                onClick={() =>
                  !disabled &&
                  handleSelectedSize(sizes.name!, size.description!)
                }
              >
                {size.value}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductSizes;
