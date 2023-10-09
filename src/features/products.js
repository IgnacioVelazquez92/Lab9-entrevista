import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const productSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload);
    },
    removeProduct(state, action) {
      const productId = action.payload;
      state.cart = state.cart.filter((product) => product.id !== productId);
    },
    updateProductQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const product = state.cart.find((product) => product.id === productId);
      if (product) {
        product.quantity = quantity;
      }
    },
  },
});
export const { addProduct, updateProductQuantity, removeProduct } =
  productSlice.actions;
export default productSlice.reducer;
