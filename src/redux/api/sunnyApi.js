import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const sunnyApi = createApi({
  reducerPath: "sunnyApi",
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
    signIn: builder.mutation({
      query: (body) => ({
        url: "/auth/signIn",
        method: "POST",
        body: body,
      }),
    }),
    signUp: builder.mutation({
      query: (body) => ({
        url: "/auth/signUp",
        method: "POST",
        body: body,
      }),
    }),
    // getReviews: builder.query({
    //   query: () => `/hotels/${id}`

    // }),
    // addReview: builder.mutation({
    //   query: ({id, ...body}) => ({
    //     url: `/hotels/${id}`,
    //     method: "PUT",
    //     body: body,
    //   }),

    // })
  }),
});

export const {
  useGetAllHotelsQuery,
  useGetHotelQuery,
  useSignInMutation,
  useSignUpMutation,
} = sunnyApi;
