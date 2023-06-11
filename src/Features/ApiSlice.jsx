import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// fetching data using RTK query

export const ApiSlice = createApi({
  reducerPath: 'ApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org',
  }),
  tagTypes: ['movies', 'tv'],
  endpoints: (builder) => ({}),
});
