import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchImage, fetchVideo, fetchVideoId } from "../api/requests";

const fetchMovie = createAsyncThunk({
    name: "movies/fetchMovie",
});

const fetchMovieImage = createAsyncThunk(
    "movies/fetchMovieImage",
    async (movieId) => {},
)

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: null,
    },
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
    },
})