import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance, { videos } from "../api/axios";
import { fetchImage, fetchVideo, fetchVideoId } from "../api/requests";

// Fetch the image of one movie
export const fetchMovieImage = createAsyncThunk(
  "movies/fetchMovieImage",
  async (movieId) => {
    const response = await instance.get(fetchImage(movieId));
    const data = await response.data.logos[0].file_path;
    return data;
  }
);

// Fetch the video id of one movie (youtube video id)
export const fetchMovieVideoId = createAsyncThunk(
  "movies/fetchMovieVideoId",
  async (movieId) => {
    const response = await instance.get(fetchVideoId(movieId));
    const data = await response.data.results[0].key;
    return data;
  }
);

// Fetch the video of one movie (youtube video)
export const fetchMovieVideo = createAsyncThunk(
  "movies/fetchMovieVideo",
  async (videoId) => {
    const response = await videos.get(fetchVideo(videoId));
    const data = await response.data.data.player_response.streamingData.adaptiveFormats[0].url;
    return data;
  }
);

const initialState = {
  movie: null,
  movieImage: null,
  movieVideoId: null,
  movieVideo: null,
  error: {
    image: null,
    videoId: null,
    video: null,
  },
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMovieImage.fulfilled, (state, action) => {
        state.movieImage = action.payload;
      })
      .addCase(fetchMovieVideoId.fulfilled, (state, action) => {
        state.movieVideoId = action.payload;
      })
      .addCase(fetchMovieVideo.fulfilled, (state, action) => {
        state.movieVideo = action.payload;
      })
      .addCase(fetchMovieImage.rejected, (state, action) => {
        state.error.image = action.error.message;
      })
      .addCase(fetchMovieVideoId.rejected, (state, action) => {
        state.error.videoId = action.error.message;
      })
      .addCase(fetchMovieVideo.rejected, (state, action) => {
        state.error.video = action.error.message;
      });
  },
});

export const { setMovie } = movieSlice.actions;

export const selectMovie = (state) => state.movie;

export default movieSlice.reducer;
