import mongoose from "mongoose";

export interface IPost {
  id: string;
  title: string;
  body: string;
  userId: string;
}

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
  required : true},
  id: string;
  userId: string;
});