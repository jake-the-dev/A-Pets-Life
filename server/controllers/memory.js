import express from "express";
import mongoose from "mongoose";
import MemoryMessage from "../models/memoryMessage.js";

export const getCollection = async (req, res) => {
  try {
    const memoryMessages = await MemoryMessage.find();

    console.log(memoryMessages);

    res.status(200).json(memoryMessages);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getMemory = async (req, res) => {
  const { id } = req.params;

  try {
    const memory = await MemoryMessage.findById(id);

    res.status(200).json(memory);
  } catch (error) {
    res.status(404).json({ messge: error });
  }
};

export const createMemory = async (req, res) => {
  const memory = req.body;

  const newMemory = new MemoryMessage(memory);

  try {
    await newMemory.save();

    res.status(201).json(newMemory);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

// id needs to be updated from
export const updateMemory = async (req, res) => {
  const { id: _id } = req.params;
  const memory = req.body;

  // check if _id is a valid mongoose object
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`That ID does not exist`);

  const updatedMemory = await MemoryMessage.findByIdAndUpdate(
    _id,
    { ...memory, _id },
    {
      new: true,
    }
  );

  res.json(updatedMemory);
};
