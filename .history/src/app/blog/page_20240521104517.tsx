import CardPost from "@/components/cardPost/cardPost";
import axiosInstance from "@/config/axiosConfig";

function getPosts() {
  const response = await axiosInstance.get("/posts");
  return response.
}

async function BlogPage() {
  return (
    <div className="flex h-full w-full flex-wrap justify-between gap-5">
      <CardPost></CardPost>
      <CardPost></CardPost>
      <CardPost></CardPost>
      <CardPost></CardPost>
    </div>
  );
}

export default BlogPage;
