import { type ClassValue, clsx } from "clsx";
import mongoose from "mongoose";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO!);
  } catch (error) {}
}
