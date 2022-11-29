import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const hotelsApi = createApi({
  reducerPath: "hotelsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
  }),
  endpoints: (builder) => ({
    getAllHotels: builder.query({
      query: () => "/hotels",
    }),
    getHotel: builder.query({
      query: (id) => `/hotels/${id}`,
    }),
  }),
});

export const { useGetAllHotelsQuery, useGetHotelQuery } = hotelsApi;
