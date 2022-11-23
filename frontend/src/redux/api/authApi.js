import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    fetchTopProperties: builder.query({
      query: () => "/properties",
    }),
  }),
});

export const { useFetchTopPropertiesQuery } = authApi;
