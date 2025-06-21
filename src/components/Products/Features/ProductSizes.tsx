const productSizes = [
  {
    size: "Small",
  },
  {
    size: "Medium",
  },
  {
    size: "Large",
  },
  {
    size: "X-Large",
  },
];

const ProductSizes = () => {
  return (
    <div className="product-sizes my-3">
      <p className="product-sizes__title font-medium mb-2">Choose a Size</p>
      <div className="flex gap-4">
        {productSizes.map((item, index) => (
          <div
            key={index}
            className="rounded-[4px] ring px-[12px] py-[2px] text-xs ring-primary ring-[1px] text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors duration-200"
          >
            {item.size}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSizes;
