import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSearch } from '@/hooks/useMovies';
import { useDebounce } from '@/hooks/useDebounce';
import { img } from '@/api/tmdb';
import MovieModal from '@/components/movie/MovieModal';
import { motion } from 'framer-motion';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const debouncedQuery = useDebounce(query, 400);
  const { data: results, isLoading } = useSearch(debouncedQuery);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (debouncedQuery) {
      setSearchParams({ q: debouncedQuery });
    } else {
      setSearchParams({});
    }
  }, [debouncedQuery, setSearchParams]);

  const filteredResults = results?.filter(
    (item) => item.poster_path && (item.media_type === 'movie' || item.media_type === 'tv')
  ) || [];

  return (
    <div className="pt-24 px-4 md:px-12 min-h-screen">
      <div className="max-w-2xl mx-auto mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies, TV shows, people..."
          autoFocus
          className="w-full px-6 py-4 bg-netflix-gray/70 border border-gray-600 rounded-lg text-white text-lg placeholder-gray-400 focus:outline-none focus:border-netflix-red focus:ring-1 focus:ring-netflix-red transition-colors"
        />
      </div>

      {isLoading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="aspect-[2/3] bg-netflix-gray rounded-md animate-pulse" />
          ))}
        </div>
      )}

      {!isLoading && filteredResults.length > 0 && (
        <>
          <p className="text-gray-400 text-sm mb-4">
            {filteredResults.length} results for &quot;{debouncedQuery}&quot;
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
          >
            {filteredResults.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer group"
                onClick={() => setSelectedMovie(item)}
              >
                <img
                  src={img.poster(item.poster_path)}
                  alt={item.title || item.name}
                  className="w-full rounded-md object-cover group-hover:shadow-xl group-hover:ring-1 group-hover:ring-white/20 transition-all"
                  loading="lazy"
                />
                <p className="text-white text-sm mt-2 truncate">{item.title || item.name}</p>
                <p className="text-gray-400 text-xs">
                  {(item.release_date || item.first_air_date || '').slice(0, 4)}
                  {item.vote_average > 0 && ` · ${Math.round(item.vote_average * 10)}%`}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}

      {!isLoading && debouncedQuery && filteredResults.length === 0 && (
        <div className="text-center py-24">
          <p className="text-gray-400 text-lg">No results found for &quot;{debouncedQuery}&quot;</p>
          <p className="text-gray-500 text-sm mt-2">Try different keywords or check the spelling</p>
        </div>
      )}

      {!debouncedQuery && (
        <div className="text-center py-24">
          <p className="text-gray-400 text-lg">Search for your favorite movies and TV shows</p>
        </div>
      )}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default Search;
