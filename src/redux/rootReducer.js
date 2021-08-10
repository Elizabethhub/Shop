import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authReducer";
// import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productReducer from "./products/productsReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  auth: authReducer,
});

export default rootReducer;
