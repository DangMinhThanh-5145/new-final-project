import { createSelector } from "@reduxjs/toolkit";

const selectProduct = (state) => state.product;
const selectProducts = createSelector(
  selectProduct,
  (product) => product.products
);

const productSelector = {
  selectProducts,
};

export default productSelector;
