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
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      })
      state.amount = amount;
      state.total = total;
    }
  },
});

export const { clearCart, removeItem, toggleAmount, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
