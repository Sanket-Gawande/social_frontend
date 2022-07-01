import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("profile", JSON.stringify(action.payload.profile));
      
      return {
        profile: action.payload.profile,
      };
    },
    logout: () => {
      localStorage.setItem("profile", null);

      return {
        profile: null,
      };
    },
    signup: (state, action) => {
      localStorage.setItem("profile", JSON.stringify(action.payload.profile));

      return {
        profile: action.payload.profile,
      };
    },
  },
});

export default user.reducer;
export const { login, logout, signup } = user.actions;
