const productColors = [
  {
    color: "primary",
  },
  {
    color: "primary",
  },
  {
    color: "primary",
  },
];

const ProductColors = () => {
  return (
    <div className="product-colors my-3 ">
      <p className="product-colors__title font-medium mb-2">Choose a Color</p>
      <div className="flex gap-2">
        {productColors.length > 0 &&
          productColors.map((item, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-full bg-${item.color} cursor-pointer hover:scale-110 hover:ring-2 hover:ring-${item.color}/50 transition-all duration-200`}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default ProductColors;
