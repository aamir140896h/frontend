import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      state.value -= 1;
    },
    increamnetedByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increament, decreament, increamnetedByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
