import ProductDetails from "./Features/ProductDetails";
import ProductGallery from "./Features/ProductGallery";

const ProductSinglePage = () => {
  return (
    <div className="single-product__container flex flex-col md:flex-row justify-between gap-6 md:gap-2 lg:gap-8 w-full">
      {/* Sticky Gallery */}
      <div className="left-side md:w-1/2 md:sticky md:top-4 md:self-start md:h-auto md:mb-8 md:overflow-y-auto">
        <ProductGallery />
      </div>

      {/* Scrollable Details */}
      <div className="right-side md:w-1/2 md:py-4">
        <ProductDetails />
      </div>
    </div>
  );
};

export default ProductSinglePage;
