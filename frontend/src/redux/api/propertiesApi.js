import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const propertiesApi = createApi({
  reducerPath: "propertiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getAllProperties: builder.query({
      query: () => "/properties",
    }),
  }),
});

export const { useGetAllPropertiesQuery } = propertiesApi;
