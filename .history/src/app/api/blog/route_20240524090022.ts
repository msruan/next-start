import { getPosts } from "@/lib/actions";
import { NextResponse } from "next/server";

export const GET = async () => {
  const posts = await getPosts();
  return NextResponse
};
