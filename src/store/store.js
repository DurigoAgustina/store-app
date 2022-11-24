import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './slices/products/productsSlice';
import { singleProductSlice } from './slices/singleProduct/singleProductSlice';

export const store = configureStore ({
  reducer: {
    products: productsSlice.reducer,
    singleProduct: singleProductSlice.reducer
  }
})