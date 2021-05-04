import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

//action creators
// it takes time to retrive the data, so we use Redux Thunk for async functionality
// pretty much the same as action/collection.js
// pass in formData and history from Auth.js
export const signin = (formData, history) => async (dispatch) => {
  try {
    // log in user
    const { data } = await api.signin(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // sign up user
    const { data } = await api.signup(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error);
    console.log("actions error");
  }
};
