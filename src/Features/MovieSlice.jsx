import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
});
export default movieSlice.reducer;
