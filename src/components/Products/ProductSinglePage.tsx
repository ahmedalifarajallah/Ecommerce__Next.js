import { wixClientServer } from "@/lib/wixClientServer";
import ProductDetails from "./Features/ProductDetails";
import ProductGallery from "./Features/ProductGallery";
import { products } from "@wix/stores";

const ProductSinglePage = async ({ slug }: { slug: string }) => {
  let product: products.Product | undefined = undefined;
  try {
    const wixClient = await wixClientServer();
    product = (await wixClient.products.queryProducts().eq("slug", slug).find())
      .items[0];
  } catch (error) {
    console.error("Failed to fetch product:", error);
  }

  return (
    <div className="single-product__container flex flex-col md:flex-row justify-between gap-6 md:gap-2 lg:gap-8 w-full">
      {/* Sticky Gallery */}
      <div className="left-side md:w-1/2 md:sticky md:top-4 md:self-start md:h-auto md:mb-8 md:overflow-y-auto">
        {product && <ProductGallery media={product.media} />}
      </div>

      {/* Scrollable Details */}
      <div className="right-side md:w-1/2 md:py-4">
        {product && <ProductDetails product={product} />}
      </div>
    </div>
  );
};

export default ProductSinglePage;
