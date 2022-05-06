import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};
const postSlice = createSlice({
  name: "allPost",
  initialState,
  reducers: {
    getAllPosts: (state, action) => {
      state.posts = action.payload;
    },
    createPost: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

export const getAsyncPost = () => async (dispatch) => {
  const raw = await fetch(`${import.meta.env.VITE_SERVER_API}/post/all`);
  const posts = await raw.json();
  dispatch(getAllPosts(posts));
};

export const createAsyncPost = (payload) => async (dispatch) => {
  const raw = await fetch(`${import.meta.env.VITE_SERVER_API}/post/create`, {
    body: JSON.stringify(payload),
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
  });
  const post = await raw.json();
  dispatch(createPost(post));
};

export const { createPost, getAllPosts } = postSlice.actions;
export default postSlice.reducer;
