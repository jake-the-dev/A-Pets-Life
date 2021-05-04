import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"; //The useHistory hook gives you access to the history instance that you may use to navigate.
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import AuthInput from "./AuthInput"; // custom component to reduce clutter inside of Auth.js
import { signin, signup } from "../../actions/auth";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false); // for toggle password button logic
  const [isSignup, setIsSignup] = useState(false); // is the form the signup form?
  const [formData, setFormData] = useState(initialFormState);
  const dispatch = useDispatch();
  const history = useHistory();

  // what authorisation takes place on ? signup : signin
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  // populate formData with the value being input
  // textfield names have to be the same as initialFormState names
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    // console.log(event.target.value);
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSwitchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? `Sign Up` : `Sign In`}</Typography>
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <AuthInput
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <AuthInput
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <AuthInput
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <AuthInput
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <AuthInput
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.googleButton}
          >
            Sign in with Google (...soon)
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={handleSwitchMode}>
                {isSignup
                  ? "Already signed up? Sign In"
                  : "New to A Pets Life? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
