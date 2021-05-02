/* eslint-disable import/no-anonymous-default-export */

import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

// is a function that accepts the state and action
// reducers always require the state to be something. hence empty state intialised.

export default (collectionState = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...collectionState, action.payload];
    case UPDATE:
      return collectionState.map((collectionState) =>
        collectionState._id === action.payload._id
          ? action.payload
          : collectionState
      );
    case DELETE:
      return collectionState.filter((memory) => memory._id !== action.payload); // keep all of the payload but filter out the memory to delete
    default:
      return collectionState;
  }
};

// UPDATE: if currently state id is equal to the updated memory id then return update memory
