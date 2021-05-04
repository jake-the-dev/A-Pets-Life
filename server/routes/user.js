import express from "express";

import { signin, signup, getUsers } from "../controllers/user.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/", getUsers);

// router.get("/", getCollection);
// router.post("/", createMemory);
// router.patch("/:id", updateMemory);
// router.delete("/:id", deleteMemory);

export default router;
