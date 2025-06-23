import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: products.Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const imageSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw";

  return (
    <div className="product-card flex flex-col justify-between">
      {/* Product Images */}
      <Link href={`/products/${product.slug}`} prefetch={false}>
        <div className="relative w-full h-64">
          <Image
            src={product.media?.mainMedia?.image?.url || ""}
            alt="Product-Img"
            fill
            sizes={imageSizes}
            className="object-cover object-[top_center] absolute rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={(product.media?.items ?? [])[1]?.image?.url || ""}
            alt="Product-Img"
            fill
            sizes={imageSizes}
            className="object-cover object-[top_center] absolute rounded-md "
          />
        </div>
      </Link>
      {/* product details */}
      <div className="product-details my-3 flex flex-col justify-between h-full gap-2">
        {/* Product Name & Price */}
        <div className="product_details flex items-center justify-between font-semibold">
          <span className="product-name">{product.name}</span>
          <span className="product-price text-end">
            {product.priceData?.price} {product.priceData?.currency}
          </span>
        </div>
        {/* Product Description */}
        <p className="product-description text-sm text-gray-700 line-clamp-2 sm:line-clamp-3 md:line-clamp-4">
          {product.description}
        </p>
        {/* Product Button */}
        <button className="rounded-2xl ring-1 ring-primary text-primary py-2 px-4 text-xs hover:bg-primary hover:text-white transition-all duration-500 ease">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
