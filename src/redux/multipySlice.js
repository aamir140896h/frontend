import { createSlice } from "@reduxjs/toolkit";

const multiplySlice = createSlice({
  name: "multiply",
  initialState: { mul: 2 },
  reducers: {
    multiplications: (state) => {
      state.mul = state.mul * 2;
    },
  },
});

export const { multiplications } = multiplySlice.actions;
export default multiplySlice.reducer;
