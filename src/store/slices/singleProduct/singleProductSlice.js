import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleProduct: [],
  isLoading: false,
}


export const singleProductSlice = createSlice ({
  name: 'singleProduct',
  initialState,
  reducers: {
    startLoadingProducts: (state) => {
      state.isLoading = true;
    },
    setSingleProduct: (state, action) => {
      state.isLoading = false;
      state.singleProduct = action.payload.singleProduct;
    }
  }
})

export const { startLoadingProducts, setSingleProduct } = singleProductSlice.actions;
