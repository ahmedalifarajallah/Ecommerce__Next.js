import { products } from "@wix/stores";

const ProductColors = ({
  productColors,
  handleSelectedColor,
  selectedOptions,
  isVariantInStock,
}: {
  productColors: products.ProductOption[];
  handleSelectedColor: (optionType: string, choice: string) => void;
  selectedOptions: { [key: string]: string } | null;
  isVariantInStock: (choices: { [key: string]: string }) => boolean;
}) => {
  const colors = productColors.find((option) => option.name === "Color");

  if (!colors) return null;

  return (
    <div className="product-colors my-3">
      <p className="product-colors__title font-medium mb-2">Choose a Color</p>
      <div className="flex gap-2">
        {colors.choices &&
          colors.choices.map((color, index) => {
            const disabled = !isVariantInStock({
              ...selectedOptions,
              [colors.name!]: color.description!,
            });
            const selected = selectedOptions?.Color === color.description;

            return (
              <div
                key={index}
                style={{
                  backgroundColor: color.value,
                }}
                className={`
                relative w-6 h-6 rounded-full transition-all duration-200
                ${
                  selected
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-white"
                    : "ring-1 ring-gray-300"
                }
                ${
                  !disabled
                    ? "cursor-pointer hover:scale-110 hover:ring-2 hover:ring-primary"
                    : "cursor-not-allowed"
                }
              `}
                onClick={() =>
                  !disabled &&
                  handleSelectedColor(colors.name!, color.description!)
                }
              >
                {/* Background with opacity for disabled state */}
                <div
                  className={`absolute inset-0 rounded-full ${
                    disabled ? "bg-white/70" : ""
                  }`}
                />

                {/* Diagonal cross-out for disabled items */}
                {disabled && (
                  <>
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-600 transform rotate-45 origin-center" />
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-600 transform -rotate-45 origin-center" />
                  </>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductColors;
