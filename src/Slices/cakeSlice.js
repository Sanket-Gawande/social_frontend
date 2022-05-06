import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cake: 10,
};
const cakeSlice = createSlice({
  name: "cakeShop",
  initialState,
  reducers: {
    addCakes: (state, action) => {
      state.cake += action.payload;
    },
  },
  orderCakes: (state) => {
    state.cake - 1;
  },
});

export const { addCakes, orderCakes } = cakeSlice.actions;
export default cakeSlice.reducer;
