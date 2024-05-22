import { type ClassValue, clsx } from "clsx";
import mongoose from "mongoose";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const connection : mongoose.Connection = {};

export async function connectToDb() {
  try {
    if(connection.isConnected){
      console.log("Using existing connection!")
      return;
    }
    const db : typeof mongoose = await mongoose.connect(process.env.MONGO!);
    db.connections[0].readyState;
  } catch (error) {
    console.error(error)
    throw new Error("Error connecting to database!"+error)
  }
}
