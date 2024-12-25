import AxiosClient from "axios";

export const axios = (token: string | undefined = "1") => {
  const axios = AxiosClient.create({
    baseURL: `${process.env["NEXT_PUBLIC_API_HOST"]}/api`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return axios;
};
