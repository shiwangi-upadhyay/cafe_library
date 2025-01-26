// src/redux/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sanityApi = createApi({
    reducerPath: 'sanityApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '' ,
    }),
    endpoints: (builder) => ({
        getBooks: builder.query({
        query: () => `*[_type == "Products"]`,
         // Extract `result` from the response
        }),
    }),
});

export const { useGetBooksQuery } = sanityApi;
