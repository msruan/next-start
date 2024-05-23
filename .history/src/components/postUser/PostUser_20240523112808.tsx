import Image from "next/image";

import axiosInstance from "@/config/axiosConfig";
import { getUser } from "@/lib";
import { IUser } from "@/models/user";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

//USING API
// const getUser = async (userId: string): Promise<IUser> => {
//   const response = await axiosInstance.get(`/users/${userId}`);
//   return response.data;
// };

export async function PostUser({ userId }: { userId: string }) {
  const user: IUser | null = await getUser(userId);
  return (
    <>
      <Avatar>
        <AvatarImage asChild src="/rain.jpg">
          <Image
            src={user?.avatar ?? "/noavatar.png"}
            alt="logo"
            width={50}
            height={50}
          />
        </AvatarImage>
        <AvatarFallback>N</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-gray-400">Author</span>
        <p>{user?.name}</p>
      </div>
    </>
  );
}
