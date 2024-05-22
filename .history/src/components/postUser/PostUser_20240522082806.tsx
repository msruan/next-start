import axiosInstance from "@/config/axiosConfig";
import { IUser } from "@/models/user";

const getUser = async (userId: string): Promise<IUser> => {
  const response = await axiosInstance.get(`/users/${userId}`);
  return response.data;
};

async function PostUser({ userId }: { userId: string }) {
  console.log(us)
  const user: IUser = await getUser(userId);
  return (
    <>
      <p>{user.name}</p>
    </>
  );
}

export default PostUser;
