import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/users" }), // API base URL
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: () => "/userData", // API endpoint
    }),
    getRentedBookByPaymentId: builder.mutation({
      query: (razorpay_payment_id) => ({
        url: "/paySuccess",
        method: "POST",
        body: { razorpay_payment_id }, // Send paymentId in request body
      }),
    }),
    addBook: builder.mutation({
      query: (newBook) => ({
        url: "/books",
        method: "POST",
        body: newBook,
      }),
    }),
  }),
});

export const {
  useLazyGetUserDataQuery,
  useAddBookMutation,
  useGetRentedBookByPaymentIdMutation,
} = userApi;
