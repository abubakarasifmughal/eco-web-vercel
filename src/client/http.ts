import _AxiosInstance from 'axios'

export const http = (token:string) => {
  const axios = _AxiosInstance.create({
    baseURL:`${process.env.NEXT_PUBLIC_API_HOST}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  })
  return axios
}