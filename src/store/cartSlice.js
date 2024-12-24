import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const cartSlice = createSlice({
    initialState: JSON.parse((localStorage.getItem("cart") || "[]") || []),
  name: "cart",
  reducers: {
    addToCart(state, action) {
      console.log(action);

      const newAddedProduct = action.payload;
      const foundCart = state.find(
        (item) => item.product.id === newAddedProduct.id
      );

      if (!foundCart) {
        state.push({
          product: action.payload,
          quantity: 1,
        });
      }
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.product.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const foundCart = state.find((item) => item.product.id === id);
      foundCart.quantity++;
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const foundCart = state.find((item) => item.product.id === id);
      if (foundCart && foundCart.quantity > 1) {
      foundCart.quantity--;
      } else {
        alert("Noto'gri operatsiya! Kamayatirib bo'lmaydi!!!")
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;
