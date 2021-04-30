// types of actions that can affect the state
import * as api from "../api"; // so axios can use api.fetchPosts

//action creators
// it takes time to retrive the data, so we use thunk for async functionality
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
