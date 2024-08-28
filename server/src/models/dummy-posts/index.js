import mongoose from "mongoose";

const dummyPostSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const DummyPost = mongoose.model("DummyPost", dummyPostSchema);

export default DummyPost;
