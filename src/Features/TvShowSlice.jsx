import { ApiSlice } from './ApiSlice';
const key = 'api_key=a8775f2acee61a2df161c7974b74a599';

export const tvShowsSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrendingTvShows: builder.query({
      query: () => `/3/trending/tv/week?${key}`,
    }),
    getSingleTvShow: builder.query({
      query: (id) => `/3/tv/${id}?${key}&language=en-US`,
    }),
    getPopularTvShow: builder.query({
      query: () => `/3/tv/popular?${key}`,
    }),
    //
    getLatestTvShow: builder.query({
      query: () => `/3/tv/on_the_air?${key}`,
    }),

    getTopRatedTvShow: builder.query({
      query: () => `/3/tv/top_rated?${key}`,
    }),
    getUpcomingTvShow: builder.query({
      query: () => `/3/tv/airing_today?${key}`,
    }),
  }),
});

export const {
  useGetSingleTvShowQuery,
  useGetPopularTvShowQuery,
  useGetLatestTvShowQuery,
  useGetTopRatedTvShowQuery,
  useGetTrendingTvShowsQuery,
  useGetUpcomingTvShowQuery,
} = tvShowsSlice;
