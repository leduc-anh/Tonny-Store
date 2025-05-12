// redux/slices/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  collections: [],
  selectedColor: null,
  selectedPrice: null,
  filteredProducts: [],
};

const productSlice = createSlice({
  name: 'product', // Tên của slice
  initialState,    // Trạng thái ban đầu
  reducers: {
    setCollections(state, action) {
      state.collections = action.payload;
    },
    setSelectedColor(state, action) {
      state.selectedColor = action.payload;
    },
    setSelectedPrice(state, action) {
      state.selectedPrice = action.payload;
    },
    setFilteredProducts(state, action) {
      state.filteredProducts = action.payload;
    },
  },
});

export const { setCollections, setSelectedColor, setSelectedPrice, setFilteredProducts } = productSlice.actions;
export default productSlice.reducer;
