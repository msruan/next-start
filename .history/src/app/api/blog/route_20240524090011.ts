import { getPosts } from "@/lib/actions";

export const GET = async () => {
  const posts = await getPosts();
  
};
