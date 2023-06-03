import { ApiSlice } from './ApiSlice';
const key = 'api_key=a8775f2acee61a2df161c7974b74a599';

export const moviesSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrendingMovies: builder.query({
      query: () => `/3/trending/movie/week?${key}`,
    }),
    getSingleMovie: builder.query({
      query: (id) => `/3/movie/${id}?${key}&language=en-US`,
    }),
  }),
});

export const { useGetTrendingMoviesQuery, useGetSingleMovieQuery } =
  moviesSlice;
