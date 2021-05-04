import express from "express";

import {
  getCollection,
  createMemory,
  updateMemory,
  deleteMemory,
} from "../controllers/memory.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getCollection);
// router.get("/:id", getMemory); // not implemented.
router.post("/", auth, createMemory);
router.patch("/:id", auth, updateMemory);
router.delete("/:id", auth, deleteMemory);

export default router;
