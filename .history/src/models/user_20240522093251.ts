import mongoose from "mongoose";

export interface IUser {
    name: string
}

const postSchema = new mongoose.Schema({
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
  });