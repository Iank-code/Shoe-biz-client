"use client";
import { useMemo } from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/utils/helpers/types";

// Define the state type
interface CartItem {
  product: ProductType;
  quantity: number;
  size: string;
}

// Define the initial state
const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { product, quantity, size } = action.payload;

      const existingProductIndex = state.findIndex(
        (p) => p.product.id === product.id
      );

      if (existingProductIndex >= 0) {
        // Create a new array with the updated quantity
        state[existingProductIndex] = {
          ...state[existingProductIndex],
          quantity: state[existingProductIndex].quantity + quantity,
        };
      } else {
        // Create a new array with the new product and quantity
        state.push({ product, quantity, size });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;

      // Find the index of the item with the specified productId
      const indexToRemove = state.findIndex(
        (item) => item.product.id === productId
      );

      // If the item is found, remove it using splice
      if (indexToRemove !== -1) {
        const newState = [...state];
        newState.splice(indexToRemove, 1);
        return newState;
      }

      // If the item is not found, return the current state
      return state;
    },

    increaseQuantity: (state, action: PayloadAction<CartItem>) => {
      const { product } = action.payload;
      const existingProductIndex = state.findIndex((p) => {
        return p.product.id === product.id;
      });

      if (existingProductIndex >= 0) {
        // Create a new array with the updated quantity
        state[existingProductIndex] = {
          ...state[existingProductIndex],
          quantity: state[existingProductIndex].quantity + 1,
        };
      }
    },
    decreaseQuantity: (state, action: PayloadAction<CartItem>) => {
      const { product } = action.payload;
      const existingProductIndex = state.findIndex(
        (p) => p.product.id === product.id
      );

      if (existingProductIndex >= 0) {
        if (state[existingProductIndex].quantity > 1) {
          // Create a new array with the decreased quantity
          state[existingProductIndex] = {
            ...state[existingProductIndex],
            quantity: state[existingProductIndex].quantity - 1,
          };
        } else {
          // Return a new array without the product if its quantity is 1
          return state.filter((item) => item.product.id !== product.id);
        }
      }
    },
  },
});
export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } =
  cartSlice.actions;

// Define the RootState type
interface RootState {
  cart: CartItem[];
}

export const selectTotalAmount = (state: RootState) => {
  return state.cart.reduce((total, item) => {
    const numericValue: number = parseFloat(item.product.newPrice);
    return total + numericValue * item.quantity;
  }, 0);
};

export default cartSlice.reducer;
