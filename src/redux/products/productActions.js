import { createAction } from "@reduxjs/toolkit";

// const ADD_PRODUCT = "addProduct";
// const DELETE_PRODUCT = "deleteProduct";
// const GET_ALL_PRODUCTS = "getAllProducts";
// const GET_PHONES = "getPhones";
// const GET_LAPTOPS = "getLaptops";

//export { ADD_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_PHONES, GET_LAPTOPS };

const addProduct = createAction("products/addProduct");
const deleteProduct = createAction("products/deleteProduct");
const getLaptops = createAction("products/getLaptops");
const getPhones = createAction("products/getPhones");
const getAllProducts = createAction("products/getAllProducts");
const setLoader = createAction("products/setLoader");
const setError = createAction("products/setError");
const resetError = createAction("products/resetError");

export { addProduct, deleteProduct, getLaptops, getPhones, getAllProducts, setLoader, setError, resetError };

// export const addProduct = (product) => ({
//   type: ADD_PRODUCT,
//   payload: product,
// });

// export const deleteProduct = (category, id) => ({
//   type: DELETE_PRODUCT,
//   payload: { category, id },
// });
// export const getLaptops = (laptops) => ({
//   type: GET_LAPTOPS,
//   payload: laptops,
// });
// export const getPhones = (phones) => ({
//   type: GET_PHONES,
//   payload: phones,
// });
// export const getAllProducts = (products) => ({
//   type: GET_ALL_PRODUCTS,
//   payload: products,
// });
