import { NextResponse } from "next/server";

import { connectToDb } from "@/lib/utils";
import { User } from "@/models/user";

export const GET = async (request: Request) => {
  try {
    await connectToDb();

    const users = await User.find();
    return (
      new Response(JSON.stringify(users), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      })
    );
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
}