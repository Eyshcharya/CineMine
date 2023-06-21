import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const key = 'api_key=a8775f2acee61a2df161c7974b74a599';
// fetching data using RTK query
export const ApiSlice = createApi({
  reducerPath: 'ApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org',
  }),
  tagTypes: ['movies', 'tv'],
  endpoints: (builder) => ({
    search: builder.query({
      query: (query) => `/3/search/multi?${key}&query=${query}`,
    }),
  }),
});

export const { useSearchQuery } = ApiSlice;
