import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../api/axios";
import requests from "../api/requests";

// Fetch all the movies trending now
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
	const response = await instance.get(requests.fetchTrending.link);
  const data = response.data.results;
  return data;
});


//? Initial Movies State (APP WIDE)
const initialState = {
  movies: null,
  status: "idle",
  error: null,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setErrorMovies: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setMovies, setErrorMovies } = moviesSlice.actions;

export const selectMovies = (state) => state.movies;
export const selectMoviesStatus = (state) => state.movies.status;
export const selectMoviesError = (state) => state.movies.error;

export default moviesSlice.reducer;
