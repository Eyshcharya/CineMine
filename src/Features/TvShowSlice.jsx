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
  }),
});

export const { useGetTrendingTvShowsQuery, useGetSingleTvShowQuery } =
  tvShowsSlice;
