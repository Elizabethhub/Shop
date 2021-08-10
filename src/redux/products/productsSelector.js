import { createSelector } from "@reduxjs/toolkit";

// export const productItemsSelector = (state, category) =>
//   state.products.items[category].filter((item) =>
//     item.name.toLowerCase().includes(state.products.filter.toLowerCase())
//   );

export const productFilterSelector = (state) => state.products.filter;

const productSelector = (state, category) => state.products.items[category];

export const productItemsSelector = createSelector([productSelector, productFilterSelector], (products, filter) =>
  products.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
);
