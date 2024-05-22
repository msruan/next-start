import mongoose from "mongoose";

export interface IUser {
  name: string;
}

const UserSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    img: { type: String, required: true },
    userId: { type: String, required: true },
    isAdmin: { type: boolean, required: true, unique: true },
  },
  { timestamps: true },
);
