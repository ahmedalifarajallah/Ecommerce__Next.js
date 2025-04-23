import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <div className="product-card">
      {/* Product Images */}
      <Link href={"/"}>
        <div className="relative w-full h-64">
          <Image
            src={"/product.png"}
            alt="Product-Img"
            fill
            className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={"/woman.png"}
            alt="Product-Img"
            fill
            className="object-cover absolute rounded-md "
          />
        </div>
      </Link>
      {/* Product Name & Price */}
      <div className="product_details flex items-center justify-between">
        <span className="product-name">Product Name</span>
        <span className="product-price">$42.5</span>
      </div>
      {/* Product Description */}
      <p className="product-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      {/* Product Button */}
      <button className="btn -btn-sm rounded-md ring ring-laman">
        Show More
      </button>
    </div>
  );
};

export default ProductCard;
