"use client";
import React, { useEffect } from "react";
import CartItem from "./CartItem";
import CartBtns from "./CartBtns";
import useWixClient from "@/hooks/useWixClient";
import { useCartStore } from "@/hooks/useCartStore";

const Cart = () => {
  // TEMPORARY STATE
  // const cartItems = true;
  const { cart, getCart } = useCartStore();

  const wixClient = useWixClient();

  useEffect(() => {
    getCart(wixClient);
  }, [getCart, wixClient]);

  return (
    <div className="cart w-full">
      {!cart.lineItems ? (
        <p className="font-semibold text-center">Cart Is Empty</p>
      ) : (
        <>
          <div className="cart-header">
            <h3 className="text-lg fw-bold">Shopping Cart</h3>
          </div>
          {/* Cart Products */}
          <div className="cart-items my-4">
            {cart?.lineItems?.map((item: any) => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>
          {/* Cart Total */}
          <div className="cart-total flex items-center justify-between mt-8 border-t pt-4 text-lg">
            <p>SubTotal</p>
            <p>{(cart as any)?.subtotal?.formattedAmount}</p>
          </div>
          <p className="text-sm text-gray-400 my-3">
            Shipping and taxes calculated at checkout
          </p>
          {/* Cart Buttons */}
          <CartBtns />
        </>
      )}
    </div>
  );
};

export default Cart;
