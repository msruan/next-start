import CardPost from "@/components/cardPost/cardPost";

function BlogPage() {
  return (
    <div className="flex h-full w-full flex-wrap justify-between">
      <CardPost></CardPost>
      <CardPost></CardPost>
      <CardPost></CardPost>
      <CardPost></CardPost>
    </div>
  );
}

export default BlogPage;
