import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BiCartAdd } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  removeProduct,
  updateProductQuantity,
} from "../../features/products";

const CardShoppingCart = ({ productCart, quantity }) => {
  const dispatch = useDispatch();
  const removeToCart = (product) => {
    dispatch(removeProduct(product));
  };

  const addToCart = (product) => {
    dispatch(addProduct(product));
  };
  return (
    <>
      <div className="card h-40 lg:card-side bg-base-100 shadow-xl flex flex-col justify-between items-center mb-2">
        <figure>
          <img
            src={productCart.images[0]}
            alt="Album"
            className="h-full md:w-20 lg:w-40 rounded-xl object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm text-center">
            {productCart.title}
          </h2>
          <div className="card-actions justify-evenly flex items-center">
            <div className="join bg-primary">
              <button
                className="btn btn-primary join-item text-3xl"
                onClick={() => removeToCart(productCart.id)}
              >
                <BsFillTrashFill />
              </button>
              <button className="join-item mx-4">{quantity} ud(s)</button>
              <button
                className="btn join-item btn-primary text-3xl"
                onClick={() => addToCart(productCart)}
              >
                <BiCartAdd />
              </button>
            </div>
          </div>
          <div className="card-footer justify-evenly flex items-center">
            <p className=" ">Total a pagar: </p>
            <div className="badge badge-neutral text-xl">
              $ {productCart.price * quantity}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardShoppingCart;
