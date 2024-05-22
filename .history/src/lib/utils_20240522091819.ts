import { type ClassValue, clsx } from "clsx";
import mongoose from "mongoose";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
interface CustomConnection extends mongoose.Connection {
  isConnected?: boolean;
}
const connection: CustomConnection = {};

export async function connectToDb() {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection!");
      return;
    }
    const db: typeof mongoose = await mongoose.connect(process.env.MONGO!);
    connection.isConnected = db.connections[0].readyState;
    console.log("Database connected!");
  } catch (error) {
    console.error(error);
    throw new Error("Error connecting to database!" + error);
  }
}
