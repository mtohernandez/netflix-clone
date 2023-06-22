import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { fetchMovies } from "./features/moviesSlide";
import {
  fetchMovieImage,
  fetchMovieVideoId,
  fetchMovieVideo,
  setMovie,
} from "./features/movieSlide";

const dispatchFeaturedMovie = async (results, index) => {
  const movie = results.payload[index];
  store.dispatch(setMovie(movie));
  try {
    await store.dispatch(fetchMovieImage(movie.id));
    const response = await store.dispatch(fetchMovieVideoId(movie.id));
    await store.dispatch(fetchMovieVideo(response.payload));
  } catch (error) {
    throw new Error(error);
  }
};

store.dispatch(fetchMovies()).then((results) => {
  dispatchFeaturedMovie(
    results,
    Math.floor(Math.random() * results.payload.length - 1)
  );
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
