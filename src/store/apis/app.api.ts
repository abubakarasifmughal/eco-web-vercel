import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (build) => ({
    testApi: build.mutation({
      query: (arg) => ({
        url: "/",
        body: arg,
        method: "POST",
      }),
    }),
  }),
});
