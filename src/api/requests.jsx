// Import API_KEY IMAGE_BASE_URL from .env file in vite root folder

const { VITE_API_KEY, VITE_IMAGE_BASE_URL } = import.meta.env;

const imageBaseUrl = VITE_IMAGE_BASE_URL;

const requests = {
  fetchTrending: {
    link: `/trending/all/week?api_key=${VITE_API_KEY}&language=en-US`,
    title: "Trending Now",
  },
  fetchNetflixOriginals: {
    link: `/discover/tv?api_key=${VITE_API_KEY}&with_networks=213`,
    title: "Netflix Originals",
  },
  fetchTopRated: {
    link: `/movie/top_rated?api_key=${VITE_API_KEY}&language=en-US`,
    title: "Top Rated",
  },
  fetchActionMovies: {
    link: `/discover/movie?api_key=${VITE_API_KEY}&with_genres=28`,
    title: "Action Movies",
  },
  fetchComedyMovies: {
    link: `/discover/movie?api_key=${VITE_API_KEY}&with_genres=35`,
    title: "Comedy Movies",
  },
  fetchHorroMovies: {
    link: `/discover/movie?api_key=${VITE_API_KEY}&with_genres=27`,
    title: "Horror Movies",
  },
  fetchRomanceMovies: {
    link: `/discover/movie?api_key=${VITE_API_KEY}&with_genres=10749`,
    title: "Romance Movies",
  },
  fetchDocumetaries: {
    link: `/discover/movie?api_key=${VITE_API_KEY}&with_genres=99`,
    title: "Documentaries",
  },
};

const fetchImage = (movieId) => {
  return `/movie/${movieId}/images?api_key=${VITE_API_KEY}&language=en-US&include_image_language=en,null`;
};

const fetchVideo = (videoId) => {
  return `/?id=${videoId}`;
};

const fetchVideoId = (movieId) => {
  return `/movie/${movieId}/videos?api_key=${VITE_API_KEY}&language=en-US`;
};

export { fetchImage, imageBaseUrl, fetchVideo, fetchVideoId };

export default requests;
