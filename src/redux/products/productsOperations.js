import { getAllAdvByCategory } from "../../services/Api";
import { productsByCategory, setError, setLoader } from "./productActions";

export const getAllAdvByCategoryOperation = (category) => async (dispatch) => {
  dispatch(setLoader());
  try {
    const response = await getAllAdvByCategory(category);
    dispatch(productsByCategory(response));
    console.log(`response`, response);
  } catch (error) {
    dispatch(setError());
  } finally {
    dispatch(setLoader());
  }
};
