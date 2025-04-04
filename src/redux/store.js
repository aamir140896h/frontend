import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import multiplyRducer from "./multipySlice";
import postReducer from "./postSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    multiply: multiplyRducer,
    posts: postReducer,
  },
});

export default store;
