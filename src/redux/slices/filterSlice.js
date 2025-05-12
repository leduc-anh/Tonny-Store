// src/redux/filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: null,
  price: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    resetFilters: (state) => {
      state.color = null;
      state.price = null;
    },
  },
});

export const { setColor, setPrice, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
