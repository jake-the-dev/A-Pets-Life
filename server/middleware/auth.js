// this was going to be used for liking posts. not implemented yet.
// used instead for verifying a user can create/edit/delete a memory.

import jwt from "jsonwebtoken";

// (next): do something then move onto the next thing
const auth = async (req, res, next) => {
  try {
    // tokens are stored at [1] position of the request header.
    const token = req.headers.authorization.split(" ")[1];

    let tokenData;

    if (token) {
      tokenData = jwt.verify(token, "secret"); // provides username and Id.

      req.userId = tokenData?.id; // optional chaining: tokenData may or may not have data
    }

    next();
  } catch (error) {
    console.log(error);
    console.log("Middleware error");
  }
};

export default auth;
