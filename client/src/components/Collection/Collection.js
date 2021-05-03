import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Memory from "./Memory/Memory";
import useStyles from "./styles";

const Collection = ({ setCurrentId }) => {
  const collection = useSelector((state) => state.collection); // state.collection is from /reducers combineReducers
  const classes = useStyles();

  console.log(collection);

  // if the collection is empty then display waiting symbol
  // else map the collection with the structure of memory
  return !collection.length ? (
    <CircularProgress />
  ) : (
    <Grid className={classes.container} container alignitems="stretch">
      {collection.map((memory) => (
        <Grid key={memory._id} item xs={12} sm={12} md={6}>
          <Memory memory={memory} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Collection;
