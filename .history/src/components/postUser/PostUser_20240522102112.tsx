import axiosInstance from "@/config/axiosConfig";
import { IUser } from "@/models/user";

const getUser = async (userId: string): Promise<IUser> => {
  const response = await axiosInstance.get(`/users/${userId}`);
  return response.data;
};

async function PostUser({ userId }: { userId: string }) {
  console.log(userId);
  const user: IUser = await getUser(userId);
  return (
    <div className="flex w-full gap-4 text-sm">
          <Avatar>
            <AvatarImage asChild src="/rain.jpg">
              <Image src="/rain.jpg" alt="logo" width={50} height={50} />
            </AvatarImage>
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-gray-400">Author</span>
            <PostUser userId={post.userId}></PostUser>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400">Date</span>
            <p>01.01.2024</p>
          </div>
        </div>
    <>
      <p>{user.name}</p>
    </>
  );
}

export default PostUser;