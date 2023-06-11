import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: '',
  movies: 'movies',
  tv: 'tv',
};
const NavigateSlice = createSlice({
  name: 'navigate',
  initialState,

  reducers: {
    NavigateMovies: (state) => {
      state.type = 'movies';
    },
    NavigateTv: (state) => {
      state.type = 'tv';
    },
  },
});
export const { NavigateMovies, NavigateTv } = NavigateSlice.actions;

export default NavigateSlice.reducer;
