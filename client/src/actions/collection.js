// types of actions that can affect the state
import * as api from "../api"; // so axios can use api.fetchPosts

//action creators
// it takes time to retrive the data, so we use thunk for async functionality
export const getCollection = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCollection(); // this is creating a get request to the api
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// why is this not exporting
// answer: had an extra arrow function.

export const createMemory = (memory) => async (dispatch) => {
  try {
    const { data } = await api.createMemory(memory); // this is creating a POST request sending "memory" data
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
