import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getAllPhotos: builder.query({
      query: () => "/photos",
    }),
    getSinglePhoto: builder.query({
      query: (id) => `/photos/${id}`,
    }),
  }),
});

export const { useGetAllPhotosQuery, useGetSinglePhotoQuery } = productsApi;
