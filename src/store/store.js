import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './slices/products/productsSlice';

export const store = configureStore ({
  reducer: {
    products: productsSlice.reducer
  }
})