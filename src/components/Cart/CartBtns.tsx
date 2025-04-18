import React from "react";

const CartBtns = () => {
  return (
    <div className="flex justify-between text-sm gap-4">
      <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
        View Cart
      </button>
      <button className="rounded-md py-3 px-4 bg-black text-white">
        Checkout
      </button>
    </div>
  );
};

export default CartBtns;
