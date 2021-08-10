import axios from "axios";

const KEY = "AIzaSyD2bzbs6N0Fmll9PPkQi8ch0S6sxtfUsCU";

const registerUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${KEY}`;

const loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`;

export const registration = async (user) => {
  try {
    const response = await axios.post(registerUrl, { ...user, returnSecureToken: true });
    return response.data;
  } catch (error) {
    console.log(`error`, error);
  }
};

export const login = async (user) => {
  try {
    const response = await axios.post(loginUrl, { ...user, returnSecureToken: true });
    return response.data;
  } catch (error) {
    console.log(`error`, error);
  }
};
