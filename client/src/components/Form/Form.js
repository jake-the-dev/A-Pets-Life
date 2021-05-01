import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Container,
} from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
// import ImageIcon from "@material-ui/icons/Image";

import useStyles from "./styles";
import { createMemory } from "../../actions/collection";

const Form = () => {
  const [memoryData, setMemoryData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "", // an image we can upload later
  });
  const classes = useStyles();

  const dispatch = useDispatch();

  // take the form data and trigger a dispatch to the POST api
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createMemory(memoryData));
  };
  const clear = () => {};

  // for each field use a spread operator of the state so the data will persist on change while only changing only last property of specific field.
  // still need to figure out how to upload images from local storage. Done
  return (
    <Container>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Create a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={memoryData.creator}
          onChange={(event) =>
            setMemoryData({ ...memoryData, creator: event.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={memoryData.title}
          onChange={(event) =>
            setMemoryData({ ...memoryData, title: event.target.value })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={memoryData.message}
          onChange={(event) =>
            setMemoryData({ ...memoryData, message: event.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={memoryData.tags}
          onChange={(event) =>
            setMemoryData({ ...memoryData, tags: event.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            name="selectedFile"
            type="file"
            multiple={false}
            onDone={({ selectedImage }) =>
              setMemoryData({ ...memoryData, selectedFile: selectedImage })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Container>
  );
};

export default Form;
