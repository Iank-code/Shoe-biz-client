import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/utils/helpers/types";

// Define the state type
interface CartItem {
  product: ProductType;
  quantity: number;
}

// Define the initial state
const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { product, quantity } = action.payload;
      console.log("Price:", product.newPrice); // Log the newPrice

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
        state.push({ product, quantity });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      console.log("Removing product from cart", productId);
      // Return a new array without the specified product
      return state.filter((item) => item.product.id !== productId);
    },
    // increaseQuantity: (state, action: PayloadAction<CartItem>) => {
    //   const { product: productId, quantity } = action.payload;
    //   const existingProductIndex = state.findIndex(
    //     (p) => p.product.id === productId
    //   );

    //   if (existingProductIndex >= 0) {
    //     // Create a new array with the updated quantity
    //     state[existingProductIndex] = {
    //       ...state[existingProductIndex],
    //       quantity: state[existingProductIndex].quantity + quantity,
    //     };
    //   }
    // },
    decreaseQuantity: (state, action: PayloadAction<CartItem>) => {
      const { product, quantity } = action.payload;
      const existingProductIndex = state.findIndex(
        (p) => p.product.id === product.id
      );

      if (existingProductIndex >= 0) {
        if (state[existingProductIndex].quantity > 1) {
          // Create a new array with the decreased quantity
          state[existingProductIndex] = {
            ...state[existingProductIndex],
            quantity: state[existingProductIndex].quantity - quantity,
          };
        } else {
          // Return a new array without the product if its quantity is 1
          return state.filter((item) => item.product.id !== product.id);
        }
      }
    },
  },
});
// , increaseQuantity
export const { addToCart, removeFromCart, decreaseQuantity } =
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
