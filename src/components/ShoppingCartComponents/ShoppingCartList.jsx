import React from "react";
import { useSelector } from "react-redux";
import CardShoppingCart from "./CardShoppingCart";

const ShoppingCartList = () => {
  const carrito = useSelector((store) => store.carrito);
  const groupedCart = Object.entries(
    Object.groupBy(carrito.cart, (item) => item.id)
  );
  // console.log(groupedCart);
  return (
    <>
      <h1 className="my-3 text-center text-3xl">Carrito de Compras</h1>
      {groupedCart.map(([productId, productCart]) => {
        const quantity = productCart.length;
        const product = productCart[0];

        return (
          <CardShoppingCart
            key={productId}
            productCart={product}
            quantity={quantity}
          />
        );
      })}
    </>
  );
};

export default ShoppingCartList;
