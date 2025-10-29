import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../utils/interfaces";

const initialState: CartState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items[action.payload.id] = action.payload;
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      state.items[action.payload].quantity++;
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      state.items[action.payload].quantity--;
      if (state.items[action.payload].quantity === 0) {
        delete state.items[action.payload];
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      delete state.items[action.payload];
    },
    clearCart: (state) => {
      state.items = {};
    },
    hydrate: (state, action: PayloadAction<CartState>) => {
      return action.payload;
    },
  },
});

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
