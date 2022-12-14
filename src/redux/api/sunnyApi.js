import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const sunnyApi = createApi({
  reducerPath: "sunnyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sunnyholidays.up.railway.app/api",
  }),
  endpoints: (builder) => ({
    getAllHotels: builder.query({
      query: () => "/hotels",
    }),
    getHotel: builder.query({
      query: (id) => `/hotels/${id}`,
      providesTags: ["Review"],
    }),
    getHotelsByLocation: builder.query({
      query: (location) => `/hotels/search/?location=${location}`,
    }),
    addHotelDates: builder.mutation({
      query: ({ id, dates }) => ({
        url: `/rooms/${id}`,
        method: "POST",
        body: dates,
      }),
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
    getFavHotels: builder.query({
      query: (id) => `/favorites/${id}`,
      providesTags: ["Favorites"],
    }),
    removeFav: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/favorites/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Favorites"],
    }),

    addToFav: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/favorites/${id}`,
        method: "POST",
        body: rest,
      }),
      invalidatesTags: ["Favorites"],
    }),

    createComment: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/comments/${id}`,
        method: "POST",
        body: rest,
      }),
      invalidatesTags: ["Review"],
    }),

    getHotelsByFilter: builder.query({
      query: (filter) =>
        `/hotels/filter/?rating=${filter.rating}&amount=${filter.amount}&price=${filter.price}`,
    }),
  }),
});

export const {
  useGetAllHotelsQuery,
  useGetHotelQuery,
  useSignInMutation,
  useSignUpMutation,
  useCreateCommentMutation,
  useAddToFavMutation,
  useGetFavHotelsQuery,
  useRemoveFavMutation,
  useAddHotelDatesMutation,
  useGetHotelsByLocationQuery,
  useGetHotelsByFilterQuery,
} = sunnyApi;
