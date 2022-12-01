import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const hotelsApi = createApi({
  reducerPath: "hotelsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sunnyholidays.onrender.com/api",
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
