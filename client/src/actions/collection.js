// added these to dispatch types to remove strings
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

// types of actions that can affect the state
import * as api from "../api"; // so axios can use api.fetchCollection

//action creators
// it takes time to retrive the data, so we use thunk for async functionality
export const getCollection = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCollection(); // this is creating a get request to the api
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createMemory = (memory) => async (dispatch) => {
  try {
    const { data } = await api.createMemory(memory); // this is creating a POST request sending "memory" data
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateMemory = (id, memory) => async (dispatch) => {
  try {
    const { data } = await api.updateMemory(id, memory);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMemory = (id) => async (dispatch) => {
  try {
    await api.deleteMemory(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
