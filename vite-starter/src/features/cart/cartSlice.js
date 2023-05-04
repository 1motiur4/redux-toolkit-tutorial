import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== itemId;
      });
    },
    toggleAmount: (state, action) => {
      const { id, inc } = action.payload;
      console.log(action.payload);
      const cartItem = state.cartItems.find((item) => item.id === id);
      inc ? (cartItem.amount += 1) : (cartItem.amount -= 1);
    },
  },
});

export const { clearCart, removeItem, toggleAmount } = cartSlice.actions;

export default cartSlice.reducer;
