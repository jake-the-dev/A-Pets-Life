/* eslint-disable import/no-anonymous-default-export */
// is a function that accepts the state and action
// reducers always require the state to be something. hence empty state intialised.

export default (collectionState = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...collectionState, action.payload];
    case "UPDATE":
      return collectionState.map((collectionState) =>
        collectionState._id === action.payload._id
          ? action.payload
          : collectionState
      );
    default:
      return collectionState;
  }
};

// UPDATE: if currently state id is equal to the updated memory id then return update memory
