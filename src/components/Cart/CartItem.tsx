import { currentCart } from "@wix/ecom";
import Image from "next/image";
import { media as wixMedia } from "@wix/sdk";
import { useCartStore } from "@/hooks/useCartStore";
import useWixClient from "@/hooks/useWixClient";

const CartItem = ({ item }: { item: currentCart.LineItem }) => {
  const wixClient = useWixClient();
  const { removeItem } = useCartStore();
  return (
    <div className="flex justify-between gap-4 my-4">
      <Image
        src={wixMedia.getScaledToFillImageUrl(item.image ?? "", 65, 55, {})}
        alt="Product-Cart-Img"
        width={65}
        height={55}
        className="product-img__cart rounded-md object-cover"
      />
      <div className="product-info__cart flex-1">
        <div className="product-name-price__car">
          <div className="flex justify-between items-start gap-4">
            <div className="product-name__cart">
              {item.productName?.original}
            </div>
            <div className="product-price__cart">
              {item.price?.formattedAmount}
            </div>
          </div>
          <span className="text-sm text-gray-400">
            {item.availability?.status}
          </span>
        </div>
        <div className="product-quantity__cart flex justify-between items-center mt-3">
          <span className="text-gray-400">Qty: {item.quantity}</span>
          <span
            className="cursor-pointer text-blue-600"
            onClick={() => removeItem(wixClient, item._id as string)}
          >
            Remove
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
