import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3000" }),
  endpoints: (builder) => ({
    fetchSite: builder.query({
      query: (args: { siteId: string }) => ({
        url: "/",
        method: "POST",
        body: args,
      }),
    }),
  }),
});

export default api;

export const { useFetchSiteQuery } = api;
