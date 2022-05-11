import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  profile: {
    name: "Sanket Gawande",
    email: "sanketgawande.gcoey@gmail.com",
  },
  token: 1,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      return {
        profile: action.payload.profile,
        token: action.payload.token,
      };
    },
    logout: () => {
      return {
        profile: {},
        token: null,
      };
    },
    signup: (state, action) => {
      return {
        profile: action.payload.profile,
        token: action.payload.token,
      };
    },
  },
});

export default user.reducer;
export const { login, logout, signup } = user.actions;
