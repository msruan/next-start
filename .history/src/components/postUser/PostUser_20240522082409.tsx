const getUser = async (userId: string) => {
  const response = await 
};

async function PostUser({ userId }: { userId: string }) {
  const user = await getUser(userId);
  return (
    <>
      <p>Name of Author</p>
    </>
  );
}

export default PostUser;
