import mongoose from "mongoose";

export interface IPost {
  id: string;
  title: string;
  body: string;
  userId: string;
}

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },

    img: { type: String, required: true },
    userId: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const Post = mongoose.models.Post || mongoose.model("Post",Post)