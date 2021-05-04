import bcrypt from "bcryptjs"; // for hashing
import jwt from "jsonwebtoken"; // store the user in the browser

import User from "../models/user.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // find user by email
    const registeredUser = await User.findOne({ email });

    // check user email exists in the database
    if (!registeredUser)
      return res.status(404).json({ message: "No user with that email" });

    // compare hashed passwords.
    const isPasswordCorrect = await bcrypt.compare(
      password,
      registeredUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Incorrect Password" });

    // save a browser token with 1 hour expiry.
    const token = jwt.sign(
      { email: registeredUser.email, id: registeredUser._id },
      "secret",
      { expiresIn: "1h" }
    );

    // sign in
    res.status(200).json({ result: registeredUser, token });
  } catch (error) {
    res.status(404).json({ message: error }); //TODO i don't really know what status fits this.
  }
};

export const signup = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  try {
    // first check that the user doesn't already exist.
    const registeredUser = await User.findOne({ email });
    if (registeredUser)
      return res.status(400).json({ message: "User already exists" });

    // hash it up, 12 is pretty standard.
    const hashedPassword = await bcrypt.hash(password, 12);

    // create a new user, password, and token
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, "secret", {
      expiresIn: "1h",
    });

    // sign up
    res.status(201).json({ result, token });
  } catch (error) {
    res.status(404).json({ message: error }); //TODO i don't really know what status fits this.
    console.log("routes error");
  }
};

// export const getUsers = async (req, res) => {
//   try {
//     const users = await User.find();

//     console.log(users);

//     console.log("GET all users");

//     res.status(200).json(users);
//   } catch (error) {
//     res.status(404).json({ message: error });
//   }
// };
