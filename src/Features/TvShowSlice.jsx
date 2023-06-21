import { ApiSlice } from './ApiSlice';
const key = 'api_key=a8775f2acee61a2df161c7974b74a599';

export const tvShowsSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrendingTvShows: builder.query({
      query: () => `/3/trending/tv/week?${key}`,
    }),
    getPopularTvShow: builder.query({
      query: () => `/3/tv/popular?${key}`,
    }),

    getLatestTvShow: builder.query({
      query: () => `/3/tv/on_the_air?${key}`,
    }),

    getTopRatedTvShow: builder.query({
      query: () => `/3/tv/top_rated?${key}`,
    }),
    getUpcomingTvShow: builder.query({
      query: () => `/3/tv/airing_today?${key}`,
    }),

    // get single tv show
    getSingleTvShow: builder.query({
      query: (id) => `/3/tv/${id}?${key}&language=en-US`,
    }),

    //get Genre Id
    getTvGenreId: builder.query({
      query: () => `/3/genre/tv/list?${key}`,
    }),

    // get selected genre
    getTvGenre: builder.query({
      query: (genre_id) => `/3/discover/tv?${key}&with_genres=${genre_id}`,
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
  useGetTvGenreIdQuery,
  useGetTvGenreQuery,
} = tvShowsSlice;
