import { createNewOrder } from "../../services/Api";
import { setError } from "../products/productActions";
import { createOrder, setLoader } from "./cartActions";

export const createOrderOperation = (order) => async (dispatch) => {
  dispatch(setLoader());
  try {
    await createNewOrder(order);
    dispatch(createOrder());
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};
