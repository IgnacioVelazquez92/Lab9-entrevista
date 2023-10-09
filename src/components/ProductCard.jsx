import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import ProductCarrousel from "./ProductCarrousel";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/products";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const AddToCart = (product) => {
    dispatch(addProduct(product));

    toast.info("Agregado al carrito!  🎉✨", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl ">
      <div className="w-96 carousel rounded-box">
        <ProductCarrousel slides={product.images} />
      </div>

      <div className="card-body">
        <h2 className="card-title">
          {product.title}
          <div className="badge badge-secondary">${product.price}</div>
        </h2>
        <p>{product.description}</p>

        <div className="card-actions justify-end">
          <div className="badge badge-outline">{product.category.name}</div>
          <div className="badge badge-outline">{product.category.id}</div>
        </div>
      </div>
      <div className="card-actions justify-end">
        <button
          className="btn btn-primary m-2"
          onClick={() => AddToCart(product)}
        >
          <BsFillCartCheckFill />
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductCard;
