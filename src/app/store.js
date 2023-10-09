import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user.js";
import productReducer from "../features/products";

const store = configureStore({
  reducer: {
    usuario: userReducer,
    carrito: productReducer,
  },
});

export default store;
