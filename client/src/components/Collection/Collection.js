import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Memory from "./Memory/Memory";
import useStyles from "./styles";

const Collection = () => {
  const collection = useSelector((state) => state.collection); // state.collection is from /reducers combineReducers
  const classes = useStyles();

  console.log(collection);

  return (
    <>
      <h1>Collection of Memories</h1>
      <Memory />
      <Memory />
    </>
  );
};

export default Collection;
