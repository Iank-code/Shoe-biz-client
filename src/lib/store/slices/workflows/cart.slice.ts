import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/utils/helpers/types";

interface CartItem {
  product: ProductType;
  quantity: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartItem[],
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { product, quantity } = action.payload;
      console.log("Price:", product.newPrice); // Log the newPrice
      console.log("Quantity:", quantity);
      const existingProductIndex = state.findIndex(
        (p) => p.product.id === product.id
      );
      if (existingProductIndex >= 0) {
        state[existingProductIndex].quantity += quantity;
      } else {
        state.push({ product, quantity });
      }
    },
    /* The `removeFromCart` function is a reducer that handles the action of removing a product from
    the cart. It takes two parameters: `state` and `action`. */
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      console.log("Removing product from cart", productId);
      return state.filter((item) => item.product.id !== productId);
    },
    increaseQuantity: (state, action: PayloadAction<CartItem>) => {
      const { product: productId, quantity } = action.payload;
      const existingProductIndex = state.findIndex(
        (p) => p.product.id === productId
      );
      if (existingProductIndex >= 0) {
        state[existingProductIndex].quantity += quantity;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<CartItem>) => {
      const { product, quantity } = action.payload;
      const existingProductIndex = state.findIndex(
        (p) => p.product.id === product.id
      );
      if (existingProductIndex >= 0) {
        if (state[existingProductIndex].quantity > 1) {
          // Decrease the quantity if it's more than 1
          state[existingProductIndex].quantity -= quantity;
        } else {
          // Remove the product from the cart if its quantity is 1
          state.splice(existingProductIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export const selectTotalAmount = (state: { cart: CartItem[] }) => {
  return state.cart.reduce(
    (total, item) => total + item.product.newPrice * item.quantity,
    0
  );
};

export default cartSlice.reducer;
