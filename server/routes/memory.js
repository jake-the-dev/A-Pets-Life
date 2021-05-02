import express from "express";

import {
  getCollection,
  createMemory,
  updateMemory,
  deleteMemory,
} from "../controllers/memory.js";

const router = express.Router();

router.get("/", getCollection);
router.post("/", createMemory);
router.patch("/id", updateMemory);
router.delete("/id", deleteMemory);

export default router;
