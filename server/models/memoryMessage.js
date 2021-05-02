import mongoose from "mongoose";

const memorySchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const MemoryMessage = mongoose.model("MemoryMessage", memorySchema);

export default MemoryMessage;
