import mongoose from "mongoose";

export interface IPost {
  id: string;
  title: string;
  body: string;
  userId: string;
}

const postSchema = new mongoose.Schema({
  title: {
    
  }
  id: string;
  body: string;
  userId: string;
});