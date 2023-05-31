import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './src/Features/MovieSlice';
import { movieApi } from './src/Features/API/movieApi';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
