import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Define a type for the slice state
interface CartState {
  cart: [
    { id: number; image: string; name: string; count: number; price: number }
  ];
}

// Define the initial state using that type
const initialState: CartState = {
  cart: [{ id: 0, image: "", name: "", count: 0, price: 0 }],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      state.cart.push(action.payload);
    },
    startNewCart: (state) => {
      state.cart.shift();
    },
  },
});

export const { addToCart, startNewCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;
