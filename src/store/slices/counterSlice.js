import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (counter) => {
      counter.value = counter.value + 1;
    },
    decrement: (counter) => {
      counter.value = counter.value - 1;
    },
    setByValue: (counter, action) => {
      counter.value = action.payload;
    },
  },
});

export const { increment, decrement, setByValue } = counterSlice.actions;
export default counterSlice.reducer;
