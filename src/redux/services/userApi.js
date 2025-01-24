// services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi', // Automatically added to your Redux store
  baseQuery: fetchBaseQuery({ baseUrl: '/api/users' }), // API base URL
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: () => '/userData', // API endpoint
    }),
    addBook: builder.mutation({
      query: (newBook) => ({
        url: '/books',
        method: 'POST',
        body: newBook,
      }),
    }),
  }),
});

export const { useGetUserDataQuery, useAddBookMutation } = userApi;
