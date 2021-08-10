import { registration, login } from "../../services/authApi";
import { registration as registrationActionCreator, login as loginActionCreator } from "./authActions";

export const signUpOperation = (user) => async (dispatch) => {
  //   console.log(`user`, user);
  try {
    const response = await registration(user);
    // console.log(`response`, response);

    dispatch(registrationActionCreator(response));
  } catch (error) {}
};
export const signInOperation = (user) => async (dispatch) => {
  //   console.log(`user`, user);
  try {
    const response = await login(user);
    // console.log(`response`, response);

    dispatch(loginActionCreator(response));
  } catch (error) {}
};
