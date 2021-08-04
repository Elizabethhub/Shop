import { combineReducers, createReducer } from "@reduxjs/toolkit";

import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getLaptops,
  getPhones,
  resetError,
  setError,
  setLoader,
} from "./productActions";

const productItemsReducer = createReducer(
  { phones: [], laptops: [] },
  {
    [addProduct]: (state, { payload }) => ({ ...state, [payload.category]: [...state[payload.category], payload] }),
    [deleteProduct]: (state, { payload }) => ({
      ...state,
      [payload.categorty]: state[payload.categorty].filter((item) => item.id !== payload.id),
    }),
    [getLaptops]: (state, { payload }) => ({
      ...state,
      laptops: payload,
    }),
    [getPhones]: (state, { payload }) => ({
      ...state,
      phones: payload,
    }),
    [getAllProducts]: (_, { payload }) => ({
      ...payload,
    }),
  }
);

// const productItemsReducer = (state = { phones: [], laptops: [] }, { type, payload }) => {
//   switch (type) {
//     case ADD_PRODUCT:
//       return { ...state, [payload.category]: [...state[payload.category], payload] };
//     case DELETE_PRODUCT:
//       return {
//         ...state,
//         [payload.categorty]: state[payload.categorty].filter((item) => item.id !== payload.id),
//       };
//     case GET_LAPTOPS:
//       return {
//         ...state,
//         laptops: payload,
//       };
//     case GET_PHONES:
//       return {
//         ...state,
//         phones: payload,
//       };
//     case GET_ALL_PRODUCTS:
//       return {
//         ...payload,
//       };
//     default:
//       return state;
//   }
// };

const productLoaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

// const productLoaderReducer = (state = false) => {
//   return state;
// };

const productErrorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
});

// const productErrorReducer = (state = "") => {
//   return state;
// };

const productReducer = combineReducers({
  items: productItemsReducer,
  isLoading: productLoaderReducer,
  error: productErrorReducer,
});

export default productReducer;
