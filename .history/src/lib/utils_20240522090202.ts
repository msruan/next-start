import { type ClassValue, clsx } from "clsx";
import mongoose from "mongoose";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const connection = {}

export async function connectToDb() {
  try {
    if(con)
    await mongoose.connect(process.env.MONGO!);
  } catch (error) {
    console.error(error)
    throw new Error("Error connecting to database!"+error)
  }
}
