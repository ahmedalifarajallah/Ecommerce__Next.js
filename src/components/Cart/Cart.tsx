import React from "react";
import CartItem from "./CartItem";
import CartBtns from "./CartBtns";

const Cart = () => {
  const cartItems = true;

  return (
    <div className="cart w-full">
      {!cartItems ? (
        <p className="font-semibold text-center">Cart Is Empty</p>
      ) : (
        <>
          <div className="cart-header">
            <h3 className="text-lg fw-bold">Shopping Cart</h3>
          </div>
          {/* Cart Products */}
          <div className="cart-items my-4">
            <CartItem />
            <CartItem />
          </div>
          {/* Cart Total */}
          <div className="cart-total flex items-center justify-between">
            <p>SubTotal</p>
            <p>$85</p>
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
