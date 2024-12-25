import { http } from "@/client/http";
import { IUser } from "@/types";

export const getUserInfo = async (token: string) => {
  const response = await http(token).get("/user/info");
  return response.data as IUser;
};
