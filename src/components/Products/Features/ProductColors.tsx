import { products } from "@wix/stores";

const ProductColors = ({
  productColors,
}: {
  productColors: products.ProductOption[];
}) => {
  const colors = productColors.find((item) => item.name === "Color");

  if (!colors) return null;

  return (
    <div className="product-colors my-3 ">
      <p className="product-colors__title font-medium mb-2">Choose a Color</p>
      <div className="flex gap-2">
        {colors?.choices &&
          colors.choices.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: item.value }}
              className={`w-6 h-6 rounded-full cursor-pointer hover:scale-110 ring-1 ring-primary/50 hover:ring-2 hover:ring-primary transition-all duration-200`}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default ProductColors;
