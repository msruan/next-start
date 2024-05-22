const getUser = async (userId: string) => {};

async function PostUser({ userId }: { userId: string }) {
  const user = await getUser(id);
  return (
    <>
      <p>Name of Author</p>
    </>
  );
}

export default PostUser;
