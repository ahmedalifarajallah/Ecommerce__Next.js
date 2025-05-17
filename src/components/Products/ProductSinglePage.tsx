import ProductDetails from "./Features/ProductDetails";
import ProductGallery from "./Features/ProductGallery";

const ProductSinglePage = () => {
  return (
    <div className="single-product__container flex justify-between gap-4  w-full relative">
      <div className="left-side w-1/2 relative py-4 my-4">
        <ProductGallery />
      </div>
      <div className="right-side w-1/2 py-4 my-4">
        <ProductDetails />
      </div>
    </div>
  );
};

export default ProductSinglePage;
