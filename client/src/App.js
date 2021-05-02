import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux"; // triggers a redux action

import { getCollection } from "./actions/collection";
import PetsIcon from "@material-ui/icons/Pets";
import Collection from "./components/Collection/Collection";
import Form from "./components/Form/Form";
import useStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles(); // materialui's styling recommendation
  const dispatch = useDispatch(); // A hook to access the redux dispatch function.

  useEffect(() => {
    dispatch(getCollection());
  }, [currentId, dispatch]); // Why is this required? React Hook useEffect has a missing dependency: 'dispatch'. Either include it or remove the dependency array.

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          <PetsIcon />A PETS LIFE
          <PetsIcon />
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} sm={12}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Collection setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
