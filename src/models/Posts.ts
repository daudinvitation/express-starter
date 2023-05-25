import mongoose, { Schema } from "mongoose";

const Posts = new Schema({
  title: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Posts", Posts);
