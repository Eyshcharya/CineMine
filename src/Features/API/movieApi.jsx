import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// fetching data using RTK query
export const movieApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/',
  }),
  endpoints: (builder) => ({
    getTrendingMovies: builder.query({
      query: () => '3/discover/movie?api_key=a8775f2acee61a2df161c7974b74a599',
    }),
  }),
});

export const { useGetTrendingMoviesQuery } = movieApi;
