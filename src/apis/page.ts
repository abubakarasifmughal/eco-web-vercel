import { http } from "@/client/http";
import { IPage } from "@/types";

export const getPageById = async (pageId: number, token: string) => {
  const response = await http(token).get(`/builder/page/${pageId}`);
  return response.data as IPage;
};
