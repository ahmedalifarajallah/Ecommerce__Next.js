import { WixClient } from "@/context/wixContext";
import { currentCart } from "@wix/ecom";
import { create } from "zustand";

type CartState = {
  cart: currentCart.Cart;
  isLoading: boolean;
  counter: number;
  getCart: (wixClient: WixClient) => void;
  addItem: (
    wixClient: WixClient,
    itemId: string,
    variantId: string,
    quantity: number
  ) => void;
  removeItem: (wixClient: WixClient, itemId: string) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  isLoading: true,
  counter: 0,

  getCart: async (wixClient) => {
    try {
      const cart = await wixClient.currentCart.getCurrentCart();
      set({
        cart: cart || [],
        isLoading: false,
        counter: cart?.lineItems?.length || 0,
      });
      return cart;
    } catch (error: any) {
      if (error?.details?.applicationError?.code === "OWNED_CART_NOT_FOUND") {
        console.log("No cart found.");
        set({ cart: undefined, isLoading: false, counter: 0 });
        return [];
      } else {
        console.error("Unexpected error fetching cart:", error);
        set({ isLoading: false });
        return [];
      }
    }
  },
  addItem: async (wixClient, itemId, variantId, quantity) => {
    set((state) => ({ ...state, isLoading: true }));
    const res = await wixClient.currentCart.addToCurrentCart({
      lineItems: [
        {
          catalogReference: {
            appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
            catalogItemId: itemId,
            ...(variantId && { options: { variantId } }),
          },
          quantity,
        },
      ],
    });
    set({
      cart: res.cart,
      isLoading: false,
      counter: res.cart?.lineItems?.length || 0,
    });
  },
  removeItem: async (wixClient, itemId) => {
    set((state) => ({ ...state, isLoading: true }));
    const res = await wixClient.currentCart.removeLineItemsFromCurrentCart([
      itemId,
    ]);
    set({
      cart: res.cart,
      isLoading: false,
      counter: res.cart?.lineItems?.length || 0,
    });
  },
}));
