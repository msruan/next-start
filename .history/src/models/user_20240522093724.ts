import mongoose from "mongoose";

export interface IUser {
  name: string;
}

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 4,
    },

    img: { type: String, required: true },
    id: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true },
);
