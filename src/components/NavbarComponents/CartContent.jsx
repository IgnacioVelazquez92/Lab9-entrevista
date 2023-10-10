import React, { useState, useEffect } from "react";
import ShoppingCartList from "../ShoppingCartComponents/ShoppingCartList";
import { useSelector } from "react-redux";

const CartContent = () => {
  const [quantity, setQuantity] = useState([]);
  const carrito = useSelector((store) => store.carrito);
  const groupedCart = Object.entries(
    Object.groupBy(carrito.cart, (item) => item.id)
  );

  useEffect(() => {
    setQuantity(groupedCart.length);
  }, [carrito]);

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-error badge-sm indicator-item ">
              {quantity}
            </span>
          </div>
        </label>
      </div>
      <div className="drawer-side z-40">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-11/12 md:w-6/12 lg:w-4/12 min-h-full bg-base-200 text-base-content">
          <ShoppingCartList />
        </ul>
      </div>
    </div>
  );
};

export default CartContent;
