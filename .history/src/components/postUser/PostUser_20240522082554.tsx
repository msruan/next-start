import axiosInstance from "@/config/axiosConfig";
import { IUser } from "@/models/user";

const getUser = async (userId: string) : IUser => {
  const response = await axiosInstance.get(`/users/${userId}`);
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
