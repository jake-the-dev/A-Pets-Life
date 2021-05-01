import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import useStyles from "./styles";
// take memory from props and display the data into a Card format.
const Memory = ({ memory }) => {
  const classes = useStyles();

  // created date was going to be a fromNow() using moment - but I went against it after reading their docs.

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={memory.selectedFile}
        title={memory.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{memory.creator}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <EditIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {memory.tags.map((tag) => `#${tag} `)}
        </Typography>
        <CardContent>
          <Typography className={classes.title} variant="h5" gutterBottom>
            {memory.message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Typography variant="body2">
            {new Date(memory.createdAt).toLocaleString()}()
          </Typography>
          <Button size="small" color="primary" onClick={() => {}}>
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default Memory;