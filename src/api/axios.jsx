import axios from 'axios';

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3`
});

const videos = axios.create({
  baseURL: `https://yt2html5.com`
});

export { videos };

export default instance;