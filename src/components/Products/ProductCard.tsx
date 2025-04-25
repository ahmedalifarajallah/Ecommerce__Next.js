import { IProduct } from "@/interfaces/productInterface";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card flex flex-col justify-between">
      {/* Product Images */}
      <Link href={"/"}>
        <div className="relative w-full h-64">
          <Image
            src={product.images[0]}
            alt="Product-Img"
            fill
            className="object-cover object-[top_center] absolute rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={product.images[1]}
            alt="Product-Img"
            fill
            className="object-cover object-[top_center] absolute rounded-md "
          />
        </div>
      </Link>
      {/* product details */}
      <div className="product-details my-3 flex flex-col justify-between h-full gap-2">
        {/* Product Name & Price */}
        <div className="product_details flex items-center justify-between font-semibold">
          <span className="product-name">{product.name}</span>
          <span className="product-price">{product.price} EGP</span>
        </div>
        {/* Product Description */}
        <p className="product-description text-sm text-gray-700">
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
