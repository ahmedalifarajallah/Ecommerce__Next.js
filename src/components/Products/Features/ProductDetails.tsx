import ProductColors from "./ProductColors";
import ProductQuantity from "./ProductQuantity";
import ProductSizes from "./ProductSizes";

const ProductDetails = () => {
  return (
    <div className="product-details px-2 lg:px-4 flex flex-col">
      {/* Product Title */}
      <h1 className="product-title text-2xl font-semibold">Digital Incense</h1>
      {/* Product Description */}
      <p className="product-description my-3 text-gray-600 text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
        ipsam, minus aut doloremque perspiciatis ipsa quam aspernatur explicabo
        esse nulla labore sapiente at in aperiam, sequi amet enim odit deleniti?
        Aliquid nam incidunt fugiat possimus in iste non, temporibus fuga
        provident esse ea illum itaque qui, accusantium sapiente nobis
      </p>
      {/* Product Price */}
      <p className="product-price py-6 my-3 border-t border-b">
        <span className="product-price__old font-semibold line-through text-sm text-gray-600 mr-2">
          $45
        </span>
        <span className="product-price__new font-semibold">$40.5</span>
      </p>
      {/* Product Colors */}
      <ProductColors />
      {/* Product Sizes */}
      <ProductSizes />
      {/* Product Quantity */}
      <ProductQuantity />
      {/* Product Buttons */}
      <div className="product-btns my-3 flex items-center gap-4 text-sm border-b pb-6">
        <button className="rounded-full px-4 py-2 bg-primary text-white hover:bg-transparent hover:text-primary transition-colors duration-300 ease-in-out border border-primary">
          Add to cart
        </button>
        <button className="rounded-full px-4 py-2 bg-primary text-white hover:bg-transparent hover:text-primary transition-colors duration-300 ease-in-out border border-primary">
          Buy Now
        </button>
      </div>
      {/* Product Others Info */}
      <div className="product-other-info flex flex-col gap-4 py-4">
        {/* Product Info */}
        <div className="product-info">
          <h2 className="product-info__title font-semibold">Product Info</h2>
          <p className="product-info__description my-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ducimus ex praesentium molestiae asperiores voluptate, ipsa vel modi
            tempora pariatur ipsam unde commodi dolore perferendis minima
            voluptas officia rem quibusdam.
          </p>
        </div>
        {/* Return & Refund Policy */}
        <div className="return-refund-policy">
          <h2 className="return-refund-policy__title font-semibold">
            Return & Refund Policy
          </h2>
          <p className="return-refund-policy__description my-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ducimus ex praesentium molestiae asperiores voluptate, ipsa vel modi
            tempora pariatur ipsam unde commodi dolore perferendis minimaipsa
            vel modi tempora pariatur ipsam unde commodi dolore perferendisipsa
            vel modi tempora pariatur ipsam unde commodi dolore perferendis
            minima minima voluptas officia rem quibusdam.
          </p>
        </div>
        {/* Shipping Info */}
        <div className="shipping-info">
          <h2 className="shipping-info__title font-semibold">Shipping Info</h2>
          <p className="shipping-info__description my-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ducimus ex praesentium molestiae asperiores voluptate, ipsa vel modi
            tempora pariatur ipsam unde commodi dolore perferendis minima
            voluptas officia rem quibusdam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
