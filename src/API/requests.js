const API_KEY = '0cf0c2c9f1613313dd79d142afd7a799';
const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';

const requests = {
    fetchTrending: {link: `/trending/all/week?api_key=${API_KEY}&language=en-US`, title: 'Trending Now'},
    fetchNetflixOriginals: {link: `/discover/tv?api_key=${API_KEY}&with_networks=213`, title: 'Netflix Originals'},
    fetchTopRated: {link: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, title: 'Top Rated'},
    fetchActionMovies: {link: `/discover/movie?api_key=${API_KEY}&with_genres=28`, title: 'Action Movies'},
    fetchComedyMovies: {link: `/discover/movie?api_key=${API_KEY}&with_genres=35`, title: 'Comedy Movies'},
    fetchHorroMovies: {link: `/discover/movie?api_key=${API_KEY}&with_genres=27`, title: 'Horror Movies'},
    fetchRomanceMovies: {link: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, title: 'Romance Movies'},
    fetchDocumetaries: {link: `/discover/movie?api_key=${API_KEY}&with_genres=99`, title: 'Documentaries'},
};

const fetchImage = (movieId) => {
    return `/tv/${movieId}/images?api_key=${API_KEY}&language=en-US&include_image_language=en,null`;
}

const fetchVideo = (videoId) => {
    return `/?id=${videoId}`
}

const fetchVideoId = (movieId) => {
    return `/tv/${movieId}/videos?api_key=${API_KEY}&language=en-US`
}


export { fetchImage, imageBaseUrl, fetchVideo, fetchVideoId };

export default requests;