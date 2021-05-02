import express from "express";

import {
  getCollection,
  createMemory,
  updateMemory,
} from "../controllers/memory.js";

const router = express.Router();

router.get("/", getCollection);
router.post("/", createMemory);
router.patch("/id", updateMemory);

export default router;
