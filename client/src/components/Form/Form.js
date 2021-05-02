import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"; // A hook to access the redux store's state.
// import ImageIcon from "@material-ui/icons/Image";

import useStyles from "./styles";
import { createMemory, updateMemory } from "../../actions/collection";

const Form = ({ currentId, setCurrentId }) => {
  const [memoryData, setMemoryData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  // if we have a currentId, find the memory inside the collection with the same id
  const memory = useSelector((state) =>
    currentId
      ? state.collection.find((memory) => memory._id === currentId)
      : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  // when the memory changes setMemoryData state becomes current memory data.
  useEffect(() => {
    if (memory) setMemoryData(memory);
  }, [memory]);

  // take the form data and trigger a dispatch to the POST api
  const handleSubmit = (event) => {
    event.preventDefault();

    // if form data is from the edit memory option then update that id's data.
    // else create a new memory
    if (currentId) {
      dispatch(updateMemory(currentId, memoryData));
      clear();
    } else {
      dispatch(createMemory(memoryData));
      clear();
    }
  };

  const clear = () => {
    setCurrentId(null);
    setMemoryData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  // for each field use a spread operator of the state so the data will persist on change while only changing only last property of specific field.
  // still need to figure out how to upload images from local storage. Done
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Edit" : "Create"} a Memory
        </Typography>
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
            setMemoryData({
              ...memoryData,
              tags: event.target.value.split(","),
            })
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
    </Paper>
  );
};

export default Form;
