import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"; // triggers a redux action
import { Container, Grow, Grid } from "@material-ui/core";

import { getCollection } from "../../actions/collection";
import Collection from "../Collection/Collection";
import Form from "../Form/Form";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch(); // A hook to access the redux dispatch function.

  useEffect(() => {
    dispatch(getCollection());
  }, [currentId, dispatch]); // Why is this required? React Hook useEffect has a missing dependency: 'dispatch'. Either include it or remove the dependency array.

  return (
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="center" spacing={3}>
          <Grid item xs={12} sm={12}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Collection setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
