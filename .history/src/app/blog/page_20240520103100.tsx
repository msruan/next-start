import CardPost from "@/components/cardPost/cardPost";

function BlogPage() {
  return (
    <div className="flex h-full w-full flex-wrap gap-5">
      <CardPost></CardPost>
      <CardPost></CardPost>
      <CardPost></CardPost>
      <CardPost></CardPost>
    </div>
  );
}

export default BlogPage;
