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

    avatar: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true },
);
export const User = mongoose.models.User || mongoose.model("User", UserSchema);
