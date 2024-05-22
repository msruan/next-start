import axiosInstance from "@/config/axiosConfig";

const getUser = async (userId: string) => {
  const response = await axiosInstance.get("/users");
  return response.data;
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
