import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const key = 'api_key=a8775f2acee61a2df161c7974b74a599';

// fetching data using RTK query
export const movieApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/',
  }),
  endpoints: (builder) => ({
    getTrendingMovies: builder.query({
      query: () => `3/trending/movie/day?${key}`,
    }),
    getTrendingTvShows: builder.query({
      query: () => `3/trending/tv/day?${key}`,
    }),
  }),
});

export const { useGetTrendingMoviesQuery, useGetTrendingTvShowsQuery } =
  movieApi;
