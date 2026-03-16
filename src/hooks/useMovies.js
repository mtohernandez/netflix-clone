import { useQuery } from '@tanstack/react-query';
import {
  fetchTrending,
  fetchNetflixOriginals,
  fetchTopRated,
  fetchByGenre,
  fetchMovieDetails,
  fetchTVDetails,
  fetchMovieImages,
  fetchMovieVideos,
  searchMulti,
  GENRES,
} from '@/api/tmdb';

export function useTrending() {
  return useQuery({
    queryKey: ['movies', 'trending'],
    queryFn: fetchTrending,
    staleTime: 1000 * 60 * 10,
  });
}

export function useNetflixOriginals() {
  return useQuery({
    queryKey: ['movies', 'netflix-originals'],
    queryFn: fetchNetflixOriginals,
    staleTime: 1000 * 60 * 10,
  });
}

export function useTopRated() {
  return useQuery({
    queryKey: ['movies', 'top-rated'],
    queryFn: fetchTopRated,
    staleTime: 1000 * 60 * 10,
  });
}

export function useGenreMovies(genreId) {
  return useQuery({
    queryKey: ['movies', 'genre', genreId],
    queryFn: () => fetchByGenre(genreId),
    staleTime: 1000 * 60 * 10,
    enabled: !!genreId,
  });
}

export function useMovieDetails(movieId) {
  return useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => fetchMovieDetails(movieId),
    enabled: !!movieId,
  });
}

export function useTVDetails(tvId) {
  return useQuery({
    queryKey: ['tv', tvId],
    queryFn: () => fetchTVDetails(tvId),
    enabled: !!tvId,
  });
}

export function useMovieImages(movieId) {
  return useQuery({
    queryKey: ['movie', movieId, 'images'],
    queryFn: () => fetchMovieImages(movieId),
    enabled: !!movieId,
  });
}

export function useMovieVideos(movieId) {
  return useQuery({
    queryKey: ['movie', movieId, 'videos'],
    queryFn: () => fetchMovieVideos(movieId),
    enabled: !!movieId,
  });
}

export function useSearch(query) {
  return useQuery({
    queryKey: ['search', query],
    queryFn: () => searchMulti(query),
    enabled: !!query && query.length >= 2,
    staleTime: 1000 * 60 * 5,
  });
}

export function useHomeRows() {
  const trending = useTrending();
  const originals = useNetflixOriginals();
  const topRated = useTopRated();
  const action = useGenreMovies(GENRES.ACTION);
  const comedy = useGenreMovies(GENRES.COMEDY);
  const horror = useGenreMovies(GENRES.HORROR);
  const romance = useGenreMovies(GENRES.ROMANCE);
  const documentary = useGenreMovies(GENRES.DOCUMENTARY);

  return {
    rows: [
      { title: 'Trending Now', data: trending.data, isLoading: trending.isLoading },
      { title: 'Netflix Originals', data: originals.data, isLoading: originals.isLoading, isLargeRow: true },
      { title: 'Top Rated', data: topRated.data, isLoading: topRated.isLoading },
      { title: 'Action Movies', data: action.data, isLoading: action.isLoading },
      { title: 'Comedy Movies', data: comedy.data, isLoading: comedy.isLoading },
      { title: 'Horror Movies', data: horror.data, isLoading: horror.isLoading },
      { title: 'Romance Movies', data: romance.data, isLoading: romance.isLoading },
      { title: 'Documentaries', data: documentary.data, isLoading: documentary.isLoading },
    ],
    isAnyLoading: trending.isLoading,
  };
}
