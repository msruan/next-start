import mongoose from "mongoose";

export interface IUser {
  name: string;
  name: string;
  name: string;
  name: string;
  name: string;
  name: string;
}

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
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

    avatar: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true },
);
export const User = mongoose.models?.User || mongoose.model("User", UserSchema);
