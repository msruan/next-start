import { NextResponse } from "next/server";

import { getPosts } from "@/lib/actions";

export const GET = async () => {
  const posts = await getPosts();
  return NextResponse
};
