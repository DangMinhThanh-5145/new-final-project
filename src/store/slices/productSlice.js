import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productAPI from "../../services/productAPI";

const initialState = {
  products: [],
};

const fetchProducts = createAsyncThunk("product/readProduct", () =>
  productAPI.readProduct()
);
const fetchNewestProducts = createAsyncThunk("product/readNewestProduct", () =>
  productAPI.readNewestProduct()
);

const slice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.products = payload.products;
    },
    [fetchNewestProducts.fulfilled]: (state, { payload }) => {
      state.products = payload.products;
    },
  },
});

export const productActions = slice.actions;
export const productAsyncActions = {
  fetchProducts,
  fetchNewestProducts,
};

export const productReducer = slice.reducer;
