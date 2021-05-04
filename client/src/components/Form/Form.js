import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"; // A hook to access the redux store's state.
// import ImageIcon from "@material-ui/icons/Image";

import useStyles from "./styles";
import SaveIcon from "@material-ui/icons/Save";
import ClearIcon from "@material-ui/icons/Clear";
import { createMemory, updateMemory } from "../../actions/collection";

const Form = ({ currentId, setCurrentId }) => {
  const [memoryData, setMemoryData] = useState({
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
  const user = JSON.parse(localStorage.getItem("profile"));

  // when the memory changes setMemoryData state becomes current memory data.
  useEffect(() => {
    if (memory) setMemoryData(memory);
  }, [memory]);

  const clear = () => {
    setCurrentId(null);
    setMemoryData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  // take the form data and trigger a dispatch to the POST api
  const handleSubmit = (event) => {
    event.preventDefault();

    // if form data is from the edit memory option then update that id's data.
    // else create a new memory
    // update: add the user to the state automatically instead of manually.
    if (currentId === null) {
      // dispatch(createMemory(memoryData));
      dispatch(createMemory({ ...memoryData, name: user?.result?.name }));
      console.log("created new memory");
      clear();
    } else {
      // dispatch(updateMemory(currentId, memoryData));
      dispatch(
        updateMemory(currentId, { ...memoryData, name: user?.result?.name })
      );
      console.log("Updated memory");
      clear();
    }
  };

  // if not signed in, don't show the create a memory form.
  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Sign in to get started!
        </Typography>
      </Paper>
    );
  }

  // for each field use a spread operator of the state so the data will persist on change while only changing only last property of specific field.
  // still need to figure out how to upload images from local storage. Done
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off" // disable autocomplete functionality.
        noValidate // don't validate on submit.
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Edit" : "Create"} a Memory
        </Typography>
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
            onDone={({ base64 }) =>
              setMemoryData({ ...memoryData, selectedFile: base64 })
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
          startIcon={<SaveIcon />}
        >
          Submit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
          startIcon={<ClearIcon />}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
