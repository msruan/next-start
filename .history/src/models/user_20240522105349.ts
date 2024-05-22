import mongoose from "mongoose";

export interface IUser {
  name: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  isAdmin: boolean;
}
const teste = {
  username: "msruan",
  email: "ruan@gmail.com",
  name: "Ruan Macedo",
  password: "1234",
  avatar:
    "https://i.pinimg.com/736x/7a/44/cd/7a44cd27ea4185fade5ccae1fa0b15ce.jpg",
};
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
