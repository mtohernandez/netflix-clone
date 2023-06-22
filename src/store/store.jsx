import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import moviesReducer from '../features/moviesSlide';
import movieReducer from '../features/movieSlide';

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    movie: movieReducer,
  },
});
