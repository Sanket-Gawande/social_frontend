import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isSmallScreen: false,
};
const misc = createSlice({
  name: "misc",
  initialState,
  reducers: {
    screenSize: (state, action) => {
      
      return {
        isSmallScreen: action.payload,
      };
    },
  },
});

export default misc.reducer;
export const { screenSize } = misc.actions;
