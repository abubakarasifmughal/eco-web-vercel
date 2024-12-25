import { http } from "@/client/http";
import { ITheme } from "@/types";

export const getAllThemes = async (token: string) => {
  const response = await http(token).get("/builder/theme");
  return response.data as Promise<ITheme[]>;
};
