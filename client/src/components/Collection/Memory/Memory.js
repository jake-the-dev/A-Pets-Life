import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deleteMemory } from "../../../actions/collection";
import { format } from "date-fns";

// take memory from props and display the data into a Card format.
const Memory = ({ memory, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  // created date was going to be a fromNow() using moment - but I went against it after reading their docs.

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={memory.selectedFile}
        title={memory.title}
      />
      <div className={classes.datestamp}>
        <Typography variant="h6">{memory.name}</Typography>
        <Typography variant="caption">
          {/* {new Date(memory.createdAt).toLocaleString()} */}
          {format(new Date(), "yyyy-MM-dd")}
        </Typography>
      </div>
      {/* {console.log("URId: ", user.result)};{console.log("Mc: ", memory)} */}
      {user?.result?._id === memory?.creator && (
        <div className={classes.icons}>
          <IconButton
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(memory._id)}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            style={{ color: "white" }}
            size="small"
            onClick={() => dispatch(deleteMemory(memory._id))}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
      )}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {memory.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5">
        {memory.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {memory.message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Memory;
