import { NextResponse } from "next/server";

import { getPosts } from "@/lib/actions";
import { connectToDb } from "@/lib/utils";

export const GET = async () => {
    try {
      connectToDb();
  
      const posts = await Post.find();
      return NextResponse.json(posts);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch posts!");
    }
  };